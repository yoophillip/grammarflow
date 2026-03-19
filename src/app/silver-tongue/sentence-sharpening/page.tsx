'use client';

import { useState, useEffect, useCallback } from 'react';
import { sentencePairs, principlesList } from '@/lib/silver-tongue/sentence-sharpening-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

export default function SentenceSharpeningPage() {
  const [queue, setQueue] = useState<typeof sentencePairs>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'read' | 'revealed' | 'done'>('read');
  const [checkedPrinciples, setCheckedPrinciples] = useState<Set<string>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const shuffled = [...sentencePairs].sort(() => Math.random() - 0.5).slice(0, 10);
    setQueue(shuffled);
    setLoaded(true);
  }, []);

  const current = queue[currentIndex];

  const handleReveal = () => {
    setPhase('revealed');
    recordSTPractice();
  };

  const handleNext = useCallback(() => {
    const score = checkedPrinciples.size;
    setTotalScore((prev) => prev + score);

    addSelfEval({
      date: new Date().toISOString().split('T')[0],
      module: 'sentence-sharpening',
      score,
      maxScore: principlesList.length,
    });

    if (currentIndex + 1 >= queue.length) {
      updateModuleStats('sentence-sharpening', totalScore + score);
      setPhase('done');
    } else {
      setCurrentIndex((i) => i + 1);
      setPhase('read');
      setCheckedPrinciples(new Set());
    }
  }, [checkedPrinciples, currentIndex, queue.length, totalScore]);

  const togglePrinciple = (p: string) => {
    setCheckedPrinciples((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p); else next.add(p);
      return next;
    });
  };

  if (!loaded) return null;

  if (phase === 'done') {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">◇</div>
        <h1 className="text-2xl font-bold mb-2">Session complete!</h1>
        <p className="text-muted-fg mb-4">{queue.length} sentences studied</p>
        <p className="text-lg font-medium">Principles spotted: {totalScore} / {queue.length * principlesList.length}</p>
        <button onClick={() => { window.location.reload(); }} className="mt-6 px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover">
          Practice again
        </button>
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

      <h1 className="text-xl font-bold mb-4">Sentence Sharpening</h1>

      <div className="bg-card border border-card-border rounded-xl p-5">
        <span className="text-xs px-2 py-0.5 rounded-full bg-error/10 text-error font-medium">{current.category}</span>

        {/* Weak sentence */}
        <div className="mt-4 p-3 bg-error-bg rounded-lg">
          <p className="text-xs text-muted-fg mb-1">Weak:</p>
          <p className="text-base italic">&ldquo;{current.weak}&rdquo;</p>
        </div>

        {phase === 'read' && (
          <>
            <p className="text-sm text-muted-fg mt-4 mb-3">Read the weak sentence. Think about how you&apos;d sharpen it, then reveal.</p>
            <button onClick={handleReveal}
              className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              Reveal sharp version
            </button>
          </>
        )}

        {phase === 'revealed' && (
          <>
            {/* Sharp version */}
            <div className="mt-3 p-3 bg-success-bg rounded-lg">
              <p className="text-xs text-muted-fg mb-1">Sharp:</p>
              <p className="text-base font-medium">&ldquo;{current.sharp}&rdquo;</p>
            </div>

            {/* Principles applied */}
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-2">Principles applied:</p>
              <div className="flex flex-wrap gap-1.5">
                {current.principles.map((p) => (
                  <span key={p} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">{p}</span>
                ))}
              </div>
            </div>

            {/* Quick self-check */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Which principles did you think of?</p>
              <div className="space-y-2">
                {principlesList.map((p) => (
                  <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={checkedPrinciples.has(p)} onChange={() => togglePrinciple(p)}
                      className="rounded border-card-border" />
                    {p}
                  </label>
                ))}
              </div>
            </div>

            <button onClick={handleNext} className="w-full mt-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              {currentIndex + 1 >= queue.length ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
