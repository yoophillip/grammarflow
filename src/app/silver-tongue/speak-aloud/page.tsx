'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { speakAloudPrompts, speakAloudChecklist } from '@/lib/silver-tongue/speak-aloud-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

export default function SpeakAloudPage() {
  const [mode, setMode] = useState<'select' | 'prepare' | 'speaking' | 'review' | 'done'>('select');
  const [prompt, setPrompt] = useState<typeof speakAloudPrompts[0] | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [sessionCount, setSessionCount] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const startPrompt = useCallback((p: typeof speakAloudPrompts[0]) => {
    setPrompt(p);
    setTimeLeft(p.timeSeconds);
    setChecked(new Set());
    setMode('prepare');
  }, []);

  const startSpeaking = () => {
    setMode('speaking');
    setTimeLeft(prompt!.timeSeconds);
  };

  useEffect(() => {
    if (mode === 'speaking') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setMode('review');
            recordSTPractice();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [mode]);

  const handleFinishEarly = () => {
    clearInterval(timerRef.current);
    setMode('review');
    recordSTPractice();
  };

  const handleDone = () => {
    const score = checked.size;
    setSessionCount((prev) => prev + 1);
    setSessionScore((prev) => prev + score);
    addSelfEval({ date: new Date().toISOString().split('T')[0], module: 'speak-aloud', score, maxScore: speakAloudChecklist.length });
    updateModuleStats('speak-aloud', score);
    setMode('select');
  };

  const toggleCheck = (i: number) => {
    setChecked((prev) => { const n = new Set(prev); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  };

  if (mode === 'speaking' && prompt) {
    const pct = (timeLeft / prompt.timeSeconds) * 100;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className={`text-6xl font-bold mb-6 ${timeLeft <= 10 ? 'text-error' : timeLeft <= 20 ? 'text-warning' : 'text-accent'}`}>
          {timeLeft}s
        </div>
        <div className="h-2 bg-muted rounded-full mb-8 overflow-hidden max-w-xs mx-auto">
          <div className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 10 ? 'bg-error' : timeLeft <= 20 ? 'bg-warning' : 'bg-accent'}`}
            style={{ width: `${pct}%` }} />
        </div>
        <p className="text-lg font-medium mb-2">{prompt.side}</p>
        <p className="text-xl font-bold mb-8">&ldquo;{prompt.topic}&rdquo;</p>
        <p className="text-muted-fg text-sm mb-6">Speak out loud. No typing needed.</p>
        <button onClick={handleFinishEarly} className="px-6 py-2.5 bg-muted text-foreground rounded-lg hover:bg-card-border">
          Done early
        </button>
      </div>
    );
  }

  if (mode === 'prepare' && prompt) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center">
        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{prompt.type}</span>
        <h2 className="text-xl font-bold mt-4 mb-2">{prompt.side}</h2>
        <p className="text-2xl font-bold mb-6">&ldquo;{prompt.topic}&rdquo;</p>
        <p className="text-muted-fg mb-8">You have {prompt.timeSeconds} seconds. Speak clearly and confidently.</p>
        <button onClick={startSpeaking} className="px-8 py-3 bg-accent text-white rounded-xl text-lg font-medium hover:bg-accent-hover">
          Start timer
        </button>
      </div>
    );
  }

  if (mode === 'review' && prompt) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4">Review</h1>

        <div className="bg-card border border-card-border rounded-xl p-5">
          {/* Model argument */}
          <div className="p-3 bg-success-bg rounded-lg mb-4">
            <p className="text-xs text-muted-fg mb-1">Model argument:</p>
            <p className="text-sm">{prompt.modelArgument}</p>
          </div>

          {/* Self-reflection */}
          <p className="text-sm font-medium mb-3">Self-reflection checklist:</p>
          <div className="space-y-2 mb-4">
            {speakAloudChecklist.map((item, i) => (
              <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={checked.has(i)} onChange={() => toggleCheck(i)} className="rounded" />
                {item}
              </label>
            ))}
          </div>

          <div className="text-sm text-muted-fg mb-4">{checked.size}/{speakAloudChecklist.length} checks</div>

          <button onClick={handleDone} className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
            Done
          </button>
        </div>
      </div>
    );
  }

  // Select
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-2">Speak Aloud Challenges</h1>
      <p className="text-sm text-muted-fg mb-4">Pick a topic. Argue out loud. No typing, no recording — just practice.</p>
      {sessionCount > 0 && (
        <div className="bg-card border border-card-border rounded-xl p-3 mb-4 text-center">
          <span className="text-sm">{sessionCount} completed this session</span>
          <span className="mx-2 text-muted-fg">·</span>
          <span className="text-sm text-accent">{sessionScore} / {sessionCount * speakAloudChecklist.length} checks</span>
        </div>
      )}
      <div className="space-y-2">
        {speakAloudPrompts.map((p) => (
          <button key={p.id} onClick={() => startPrompt(p)}
            className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
            <div className="flex items-center gap-2">
              <span className="text-xs px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium">{p.type}</span>
              <span className="font-medium text-sm">{p.topic}</span>
              <span className="ml-auto text-xs text-muted-fg">{p.timeSeconds}s</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
