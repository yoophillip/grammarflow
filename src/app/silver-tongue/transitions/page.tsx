'use client';

import { useState, useEffect, useCallback } from 'react';
import { fillBlankExercises, categorizeExercises, transitionPhraseBank } from '@/lib/silver-tongue/transitions-data';
import { recordSTPractice, updateModuleStats } from '@/lib/silver-tongue/storage';

type Mode = 'menu' | 'fill-blank' | 'categorize' | 'reference' | 'results';

const categoryLabels: Record<string, string> = {
  countering: 'Countering',
  building: 'Building',
  clarifying: 'Clarifying',
  concluding: 'Concluding',
  'buying-time': 'Buying Time',
};

export default function TransitionsPage() {
  const [mode, setMode] = useState<Mode>('menu');
  const [questions, setQuestions] = useState<typeof fillBlankExercises | typeof categorizeExercises>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const startFillBlank = () => {
    const shuffled = [...fillBlankExercises].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuestions(shuffled);
    setCurrentIndex(0); setSelected(null); setShowResult(false); setScore({ correct: 0, total: 0 });
    setMode('fill-blank');
  };

  const startCategorize = () => {
    const shuffled = [...categorizeExercises].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuestions(shuffled);
    setCurrentIndex(0); setSelected(null); setShowResult(false); setScore({ correct: 0, total: 0 });
    setMode('categorize');
  };

  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return;
    setSelected(answer);
    setShowResult(true);
    const q = questions[currentIndex];
    const correct = 'correct' in q ? q.correct : ('category' in q ? q.category : '');
    const isCorrect = answer === correct;
    setScore((prev) => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    recordSTPractice();
  }, [showResult, questions, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      updateModuleStats('transitions', score.correct);
      setMode('results');
    } else {
      setCurrentIndex((i) => i + 1); setSelected(null); setShowResult(false);
    }
  }, [currentIndex, questions.length, score.correct]);

  if (!loaded) return null;

  if (mode === 'results') {
    const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">↔</div>
        <h1 className="text-2xl font-bold mb-2">Complete!</h1>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)' }}>{pct}%</div>
        <p className="text-muted-fg mb-6">{score.correct} of {score.total} correct</p>
        <div className="flex gap-3 justify-center">
          <button onClick={startFillBlank} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover">Fill-in-blank</button>
          <button onClick={startCategorize} className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-card-border">Categorize</button>
          <button onClick={() => setMode('menu')} className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-card-border">Menu</button>
        </div>
      </div>
    );
  }

  if (mode === 'reference') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <button onClick={() => setMode('menu')} className="text-muted-fg hover:text-foreground text-sm mb-4">&larr; Back</button>
        <h1 className="text-xl font-bold mb-4">Transition Phrase Reference</h1>
        {Object.entries(transitionPhraseBank).map(([cat, phrases]) => (
          <div key={cat} className="mb-4">
            <h3 className="text-sm font-bold mb-2 text-accent">{categoryLabels[cat] || cat}</h3>
            <div className="flex flex-wrap gap-1.5">
              {phrases.map((p) => (
                <span key={p} className="text-sm px-2 py-1 bg-card border border-card-border rounded-lg">{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (mode === 'fill-blank' || mode === 'categorize') {
    const q = questions[currentIndex];
    const isFill = mode === 'fill-blank';
    const correct = isFill && 'correct' in q ? q.correct : ('category' in q ? q.category : '');
    const options = isFill && 'options' in q ? q.options : Object.keys(categoryLabels);

    return (
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setMode('menu')} className="text-muted-fg hover:text-foreground text-sm">&larr;</button>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
          </div>
          <span className="text-sm text-muted-fg">{currentIndex + 1}/{questions.length}</span>
        </div>

        <div className="bg-card border border-card-border rounded-xl p-5">
          {isFill && 'paragraph' in q ? (
            <>
              <p className="text-sm text-muted-fg mb-2">Fill in the blank:</p>
              <p className="text-base mb-4">{q.paragraph}</p>
            </>
          ) : 'phrase' in q ? (
            <>
              <p className="text-sm text-muted-fg mb-2">Categorize this transition:</p>
              <p className="text-lg font-medium mb-4">&ldquo;{q.phrase}&rdquo;</p>
            </>
          ) : null}

          <div className="space-y-2">
            {options.map((opt) => {
              const label = categoryLabels[opt] || opt;
              let style = 'border-card-border hover:border-accent hover:bg-accent/5';
              if (showResult) {
                if (opt === correct) style = 'border-success bg-success-bg';
                else if (opt === selected) style = 'border-error bg-error-bg';
                else style = 'border-card-border opacity-50';
              }
              return (
                <button key={opt} onClick={() => handleAnswer(opt)} disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${style}`}>
                  {label}
                </button>
              );
            })}
          </div>

          {showResult && 'explanation' in q && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">{selected === correct ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-sm text-muted-fg">{q.explanation}</p>
            </div>
          )}

          {showResult && (
            <button onClick={handleNext} className="w-full mt-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              {currentIndex + 1 >= questions.length ? 'See results' : 'Next'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Menu
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Transitional Phrase Drills</h1>
      <div className="space-y-3">
        <button onClick={startFillBlank} className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
          <h3 className="font-medium">Fill in the Blank</h3>
          <p className="text-sm text-muted-fg">Choose the best transition for each paragraph</p>
        </button>
        <button onClick={startCategorize} className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
          <h3 className="font-medium">Categorize</h3>
          <p className="text-sm text-muted-fg">Sort transitions by type: countering, building, clarifying, etc.</p>
        </button>
        <button onClick={() => setMode('reference')} className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
          <h3 className="font-medium">Reference Card</h3>
          <p className="text-sm text-muted-fg">Browse all transition phrases by category</p>
        </button>
      </div>
    </div>
  );
}
