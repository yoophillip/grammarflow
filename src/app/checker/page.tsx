'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { checkGrammar, applyCorrection, countWords, GrammarError } from '@/lib/checker';
import { addMistake, updateTodayStats, getTodayStats } from '@/lib/storage';

export default function CheckerPage() {
  const [text, setText] = useState('');
  const [errors, setErrors] = useState<GrammarError[]>([]);
  const [selectedError, setSelectedError] = useState<GrammarError | null>(null);
  const [popupPos, setPopupPos] = useState<{ top: number; left: number } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleTextChange = useCallback((value: string) => {
    setText(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const found = checkGrammar(value);
      setErrors(found);

      // Update stats
      const words = countWords(value);
      const today = getTodayStats();
      updateTodayStats({
        wordsChecked: Math.max(today.wordsChecked, words),
        errorsFound: today.errorsFound + Math.max(0, found.length - errors.length),
      });
    }, 150);
  }, [errors.length]);

  const handleCorrection = useCallback((error: GrammarError) => {
    const newText = applyCorrection(text, error);
    setText(newText);

    // Save mistake
    addMistake({
      id: `m_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      original: error.original,
      corrected: error.correction,
      context: text.slice(Math.max(0, error.start - 30), Math.min(text.length, error.end + 30)),
      ruleId: error.ruleId,
      category: error.category,
      timestamp: Date.now(),
      reviewCount: 0,
      correctStreak: 0,
      nextReview: Date.now() + 24 * 60 * 60 * 1000, // Tomorrow
      easeFactor: 2.5,
      interval: 1,
      mastered: false,
    });

    setSelectedError(null);
    setPopupPos(null);

    // Re-check after correction
    setTimeout(() => {
      const found = checkGrammar(newText);
      setErrors(found);
    }, 50);
  }, [text]);

  const handleCorrectAll = useCallback(() => {
    let newText = text;
    // Apply corrections from end to start to preserve positions
    const sorted = [...errors].sort((a, b) => b.start - a.start);
    for (const error of sorted) {
      newText = newText.slice(0, error.start) + error.correction + newText.slice(error.end);

      addMistake({
        id: `m_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        original: error.original,
        corrected: error.correction,
        context: text.slice(Math.max(0, error.start - 30), Math.min(text.length, error.end + 30)),
        ruleId: error.ruleId,
        category: error.category,
        timestamp: Date.now(),
        reviewCount: 0,
        correctStreak: 0,
        nextReview: Date.now() + 24 * 60 * 60 * 1000,
        easeFactor: 2.5,
        interval: 1,
        mastered: false,
      });
    }
    setText(newText);
    setErrors([]);
    setSelectedError(null);
    setPopupPos(null);
  }, [text, errors]);

  const handleErrorClick = useCallback((error: GrammarError, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedError(error);
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setPopupPos({ top: rect.bottom + 8, left: Math.min(rect.left, window.innerWidth - 320) });
  }, []);

  // Sync scroll between textarea and overlay
  const syncScroll = useCallback(() => {
    if (textareaRef.current && overlayRef.current) {
      overlayRef.current.scrollTop = textareaRef.current.scrollTop;
      overlayRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  // Build highlighted text
  const renderHighlighted = () => {
    if (!text) return null;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    for (const error of errors) {
      if (error.start > lastIndex) {
        parts.push(<span key={`t_${lastIndex}`}>{text.slice(lastIndex, error.start)}</span>);
      }
      parts.push(
        <span
          key={`e_${error.start}`}
          className="grammar-error"
          onClick={(e) => handleErrorClick(error, e)}
        >
          {text.slice(error.start, error.end)}
        </span>
      );
      lastIndex = error.end;
    }
    if (lastIndex < text.length) {
      parts.push(<span key={`t_${lastIndex}`}>{text.slice(lastIndex)}</span>);
    }
    return parts;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Grammar Checker</h1>
        <div className="flex items-center gap-3 text-sm">
          {text && errors.length === 0 && (
            <span className="text-success flex items-center gap-1">
              <span className="text-lg">&#10003;</span> No errors
            </span>
          )}
          {errors.length > 0 && (
            <>
              <span className="text-error">{errors.length} error{errors.length !== 1 ? 's' : ''}</span>
              <button
                onClick={handleCorrectAll}
                className="px-3 py-1 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover"
              >
                Fix all
              </button>
            </>
          )}
        </div>
      </div>

      {/* Text input area */}
      <div className="relative">
        {/* Overlay with highlights */}
        <div
          ref={overlayRef}
          className="absolute inset-0 p-4 text-base leading-relaxed whitespace-pre-wrap break-words pointer-events-none overflow-hidden"
          style={{ fontFamily: 'inherit', color: 'transparent' }}
          aria-hidden
        >
          {renderHighlighted()}
        </div>

        {/* Actual textarea */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          onScroll={syncScroll}
          className="w-full min-h-[300px] p-4 text-base leading-relaxed bg-transparent border border-card-border rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-accent/50 relative z-10"
          placeholder="Type or paste your text here to check for grammar errors..."
          style={{ caretColor: 'var(--foreground)' }}
        />
      </div>

      {/* Clickable error list below */}
      {errors.length > 0 && (
        <div className="mt-4 space-y-2">
          {errors.map((error, i) => (
            <div
              key={`${error.ruleId}_${error.start}_${i}`}
              className="bg-card border border-card-border rounded-lg p-3 cursor-pointer hover:bg-muted"
              onClick={() => handleCorrection(error)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-error/10 text-error font-medium">
                      {error.category}
                    </span>
                    <span className="text-sm font-medium">{error.errorType}</span>
                  </div>
                  <div className="text-sm">
                    <span className="line-through text-error/70">{error.original}</span>
                    <span className="mx-2 text-muted-fg">&rarr;</span>
                    <span className="text-success font-medium">{error.correction}</span>
                  </div>
                  <p className="text-xs text-muted-fg mt-1">{error.explanation}</p>
                </div>
                <button className="shrink-0 px-2 py-1 text-xs bg-accent text-white rounded hover:bg-accent-hover">
                  Fix
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Inline popup — shown on error click in overlay */}
      {selectedError && popupPos && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => { setSelectedError(null); setPopupPos(null); }} />
          <div
            className="fixed z-50 bg-card border border-card-border rounded-xl shadow-lg p-4 w-[300px]"
            style={{ top: popupPos.top, left: popupPos.left }}
          >
            <div className="text-xs px-1.5 py-0.5 rounded bg-error/10 text-error inline-block mb-2 font-medium">
              {selectedError.category}
            </div>
            <div className="mb-2">
              <span className="line-through text-error/70">{selectedError.original}</span>
              <span className="mx-2">&rarr;</span>
              <span className="text-success font-medium">{selectedError.correction}</span>
            </div>
            <p className="text-sm text-muted-fg mb-3">{selectedError.explanation}</p>
            <button
              onClick={() => handleCorrection(selectedError)}
              className="w-full py-1.5 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover"
            >
              Apply correction
            </button>
          </div>
        </>
      )}

      {/* Tips */}
      {!text && (
        <div className="mt-6 bg-muted rounded-xl p-4">
          <h3 className="text-sm font-medium mb-2">Try these examples:</h3>
          <div className="space-y-1.5">
            {[
              "Your going to love this place.",
              "I could of done that better.",
              "Its a nice day outside.",
              "Their going to the store.",
              "This is better then that.",
              "I should have went to the party.",
              "Can you give me an advice?",
              "I'm on a standby for the flight.",
            ].map((example) => (
              <button
                key={example}
                className="block text-sm text-accent hover:underline text-left"
                onClick={() => handleTextChange(example)}
              >
                &ldquo;{example}&rdquo;
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
