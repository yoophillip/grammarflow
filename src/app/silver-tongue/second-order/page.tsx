'use client';

import { useState, useEffect, useCallback } from 'react';
import { secondOrderScenarios } from '@/lib/silver-tongue/second-order-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

export default function SecondOrderPage() {
  const [queue, setQueue] = useState<typeof secondOrderScenarios>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'think' | 'revealed' | 'done'>('think');
  const [foundCases, setFoundCases] = useState<Set<number>>(new Set());
  const [totalFound, setTotalFound] = useState(0);
  const [totalPossible, setTotalPossible] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const shuffled = [...secondOrderScenarios].sort(() => Math.random() - 0.5).slice(0, 10);
    setQueue(shuffled);
    setLoaded(true);
  }, []);

  const current = queue[currentIndex];

  const handleReveal = () => {
    setPhase('revealed');
    recordSTPractice();
  };

  const toggleCase = (idx: number) => {
    setFoundCases((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  const handleNext = useCallback(() => {
    const found = foundCases.size;
    const possible = current.edgeCases.length;
    setTotalFound((prev) => prev + found);
    setTotalPossible((prev) => prev + possible);

    addSelfEval({
      date: new Date().toISOString().split('T')[0],
      module: 'second-order',
      score: found,
      maxScore: possible,
    });

    if (currentIndex + 1 >= queue.length) {
      updateModuleStats('second-order', totalFound + found);
      setPhase('done');
    } else {
      setCurrentIndex((i) => i + 1);
      setPhase('think');
      setFoundCases(new Set());
    }
  }, [foundCases, current, currentIndex, queue.length, totalFound]);

  if (!loaded) return null;

  if (phase === 'done') {
    const pct = totalPossible > 0 ? Math.round((totalFound / totalPossible) * 100) : 0;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">◎</div>
        <h1 className="text-2xl font-bold mb-2">Session complete!</h1>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 60 ? 'var(--success)' : pct >= 30 ? 'var(--warning)' : 'var(--error)' }}>
          {totalFound} / {totalPossible} ({pct}%)
        </div>
        <p className="text-sm text-muted-fg mb-6">
          {pct >= 60 ? 'Strong critical thinking!' : 'Keep practicing — look for what others miss.'}
        </p>
        <button onClick={() => window.location.reload()} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover">Again</button>
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

      <h1 className="text-xl font-bold mb-4">Second-Order Thinking</h1>

      <div className="bg-card border border-card-border rounded-xl p-5">
        <div className="p-3 bg-muted rounded-lg mb-4">
          <p className="text-xs text-muted-fg mb-1">Policy / Scenario:</p>
          <p className="text-base font-medium">{current.scenario}</p>
        </div>

        {phase === 'think' && (
          <>
            <p className="text-sm text-muted-fg mb-3">Think about the obvious take and what could go wrong. What are the unintended consequences? Then reveal.</p>
            <button onClick={handleReveal}
              className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              Reveal analysis
            </button>
          </>
        )}

        {phase === 'revealed' && (
          <>
            {/* Obvious take */}
            <div className="p-3 bg-muted rounded-lg mb-3">
              <p className="text-xs text-muted-fg mb-1">Obvious take:</p>
              <p className="text-sm">{current.obviousTake}</p>
            </div>

            {/* Edge cases — check which you thought of */}
            <div className="mb-3">
              <p className="text-sm font-medium mb-2">Edge cases — check the ones you thought of:</p>
              <div className="space-y-2">
                {current.edgeCases.map((ec, i) => (
                  <label key={i} className="flex items-start gap-2 text-sm cursor-pointer p-2 rounded-lg hover:bg-muted">
                    <input type="checkbox" checked={foundCases.has(i)} onChange={() => toggleCase(i)} className="mt-0.5 rounded" />
                    <span>{ec}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Principle */}
            <div className="p-3 bg-success-bg rounded-lg mb-4">
              <p className="text-xs text-muted-fg mb-1">Key insight:</p>
              <p className="text-sm font-medium italic">{current.principle}</p>
            </div>

            <div className="text-sm text-muted-fg mb-3">
              {foundCases.size} of {current.edgeCases.length} edge cases identified
            </div>

            <button onClick={handleNext} className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              {currentIndex + 1 >= queue.length ? 'Finish' : 'Next scenario'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
