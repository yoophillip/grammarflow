'use client';

import { useState, useEffect, useCallback } from 'react';
import { analogyExercises } from '@/lib/silver-tongue/analogy-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

export default function AnalogyPage() {
  const [queue, setQueue] = useState<typeof analogyExercises>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'think' | 'revealed' | 'done'>('think');
  const [selfScore, setSelfScore] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const shuffled = [...analogyExercises].sort(() => Math.random() - 0.5).slice(0, 10);
    setQueue(shuffled);
    setLoaded(true);
  }, []);

  const current = queue[currentIndex];

  const handleReveal = () => { setPhase('revealed'); recordSTPractice(); };

  const handleNext = useCallback(() => {
    const score = selfScore || 0;
    setTotalScore((prev) => prev + score);
    addSelfEval({ date: new Date().toISOString().split('T')[0], module: 'analogy', score, maxScore: 3 });

    if (currentIndex + 1 >= queue.length) {
      updateModuleStats('analogy', totalScore + score);
      setPhase('done');
    } else {
      setCurrentIndex((i) => i + 1);
      setPhase('think');
      setSelfScore(null);
    }
  }, [selfScore, currentIndex, queue.length, totalScore]);

  if (!loaded) return null;

  if (phase === 'done') {
    const max = queue.length * 3;
    const pct = Math.round((totalScore / max) * 100);
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">≈</div>
        <h1 className="text-2xl font-bold mb-2">Session complete!</h1>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : 'var(--error)' }}>
          {totalScore}/{max} ({pct}%)
        </div>
        <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover">Again</button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }} />
        </div>
        <span className="text-sm text-muted-fg">{currentIndex + 1}/{queue.length}</span>
      </div>

      <h1 className="text-xl font-bold mb-4">Analogy Trainer</h1>

      <div className="bg-card border border-card-border rounded-xl p-5">
        {/* Argument */}
        <div className="p-3 bg-muted rounded-lg mb-3">
          <p className="text-xs text-muted-fg mb-1">Argument to defend:</p>
          <p className="text-base font-medium">{current.argument}</p>
        </div>

        {/* Weak analogy */}
        <div className="p-3 bg-warning/10 rounded-lg mb-4">
          <p className="text-xs text-muted-fg mb-1">Weak analogy:</p>
          <p className="text-base italic">&ldquo;{current.weakAnalogy}&rdquo;</p>
        </div>

        {phase === 'think' && (
          <>
            <p className="text-sm text-muted-fg mb-3">Why is this analogy weak? Think about the structural flaw, then reveal.</p>
            <button onClick={handleReveal}
              className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              Reveal analysis
            </button>
          </>
        )}

        {phase === 'revealed' && (
          <>
            {/* Actual flaw */}
            <div className="p-3 bg-error-bg rounded-lg mb-3">
              <p className="text-xs text-muted-fg mb-1">The flaw:</p>
              <p className="text-sm font-medium">{current.flaw}</p>
            </div>

            {/* Strong analogy */}
            <div className="p-3 bg-success-bg rounded-lg mb-3">
              <p className="text-xs text-muted-fg mb-1">Strong analogy:</p>
              <p className="text-sm font-medium italic">&ldquo;{current.strongAnalogy}&rdquo;</p>
            </div>

            {/* Principle */}
            <div className="p-3 bg-muted rounded-lg mb-4">
              <p className="text-xs text-muted-fg mb-1">Principle:</p>
              <p className="text-sm italic">{current.principle}</p>
            </div>

            {/* Self-score */}
            <p className="text-sm font-medium mb-2">Did you spot the flaw before revealing?</p>
            <div className="flex gap-2 mb-4">
              {[
                { val: 0, label: 'Missed it' },
                { val: 1, label: 'Partially' },
                { val: 2, label: 'Close' },
                { val: 3, label: 'Nailed it' },
              ].map(({ val, label }) => (
                <button key={val} onClick={() => setSelfScore(val)}
                  className={`flex-1 py-2 rounded-lg text-sm border-2 ${selfScore === val ? 'border-accent bg-accent/10 text-accent' : 'border-card-border text-muted-fg'}`}>
                  {label}
                </button>
              ))}
            </div>

            <button onClick={handleNext} disabled={selfScore === null}
              className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover disabled:opacity-50">
              {currentIndex + 1 >= queue.length ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
