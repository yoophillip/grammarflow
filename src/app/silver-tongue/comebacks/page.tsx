'use client';

import { useState, useEffect, useCallback } from 'react';
import { comebackScenarios } from '@/lib/silver-tongue/comebacks-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

const reflections = [
  'I identified the logical flaw',
  'I thought of a concise counter',
  'I could flip the argument',
  'I stayed assertive, not defensive',
];

export default function ComebacksPage() {
  const [queue, setQueue] = useState<typeof comebackScenarios>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'think' | 'revealed' | 'done'>('think');
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const shuffled = [...comebackScenarios].sort(() => Math.random() - 0.5).slice(0, 10);
    setQueue(shuffled);
    setLoaded(true);
  }, []);

  const current = queue[currentIndex];

  const handleReveal = () => {
    setPhase('revealed');
    recordSTPractice();
  };

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const handleNext = useCallback(() => {
    const score = checked.size;
    setTotalScore((prev) => prev + score);
    addSelfEval({ date: new Date().toISOString().split('T')[0], module: 'comebacks', score, maxScore: reflections.length });

    if (currentIndex + 1 >= queue.length) {
      updateModuleStats('comebacks', totalScore + score);
      setPhase('done');
    } else {
      setCurrentIndex((i) => i + 1);
      setPhase('think');
      setChecked(new Set());
    }
  }, [checked, currentIndex, queue.length, totalScore]);

  if (!loaded) return null;

  if (phase === 'done') {
    const max = queue.length * reflections.length;
    const pct = Math.round((totalScore / max) * 100);
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">↩</div>
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

      <h1 className="text-xl font-bold mb-4">Comeback Training</h1>

      <div className="bg-card border border-card-border rounded-xl p-5">
        <div className="p-3 bg-error-bg rounded-lg mb-4">
          <p className="text-xs text-muted-fg mb-1">They say:</p>
          <p className="text-lg italic">&ldquo;{current.lazy}&rdquo;</p>
          {current.context && <p className="text-xs text-muted-fg mt-1">Context: {current.context}</p>}
        </div>

        {phase === 'think' && (
          <>
            <p className="text-sm text-muted-fg mb-3">Think about how you&apos;d respond. What&apos;s the flaw in their logic? Then reveal.</p>
            <button onClick={handleReveal}
              className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              Reveal kill shots
            </button>
          </>
        )}

        {phase === 'revealed' && (
          <>
            {/* Kill shots */}
            <div className="space-y-2 mb-3">
              {current.killShots.map((ks, i) => (
                <div key={i} className="p-3 bg-success-bg rounded-lg">
                  <p className="text-xs text-muted-fg mb-1">Kill shot {i + 1}:</p>
                  <p className="text-sm font-medium">{ks}</p>
                </div>
              ))}
            </div>

            {/* Principle */}
            <div className="p-3 bg-muted rounded-lg mb-4">
              <p className="text-xs text-muted-fg mb-1">Principle:</p>
              <p className="text-sm italic">{current.principle}</p>
            </div>

            {/* Self-reflection */}
            <p className="text-sm font-medium mb-2">Before seeing the kill shots, did you...</p>
            <div className="space-y-2 mb-4">
              {reflections.map((item, i) => (
                <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={checked.has(i)} onChange={() => toggleCheck(i)} className="rounded" />
                  {item}
                </label>
              ))}
            </div>

            <button onClick={handleNext} className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              {currentIndex + 1 >= queue.length ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
