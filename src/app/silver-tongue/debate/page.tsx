'use client';

import { useState, useEffect, useCallback } from 'react';
import { debateScripts } from '@/lib/silver-tongue/debate-data';
import { recordSTPractice, updateModuleStats, addSelfEval } from '@/lib/silver-tongue/storage';

const tactics = [
  'Define terms first',
  'Flip their argument',
  'Challenge assumptions',
  'Use concrete examples',
  'Steel-man then dismantle',
  'End with a question',
];

export default function DebatePage() {
  const [mode, setMode] = useState<'select' | 'debate' | 'done'>('select');
  const [debate, setDebate] = useState<typeof debateScripts[0] | null>(null);
  const [exchangeIndex, setExchangeIndex] = useState(0);
  const [phase, setPhase] = useState<'think' | 'revealed'>('think');
  const [checkedTactics, setCheckedTactics] = useState<Set<number>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const startDebate = useCallback((d: typeof debateScripts[0]) => {
    setDebate(d);
    setExchangeIndex(0);
    setPhase('think');
    setCheckedTactics(new Set());
    setTotalScore(0);
    setMode('debate');
  }, []);

  const handleReveal = () => {
    setPhase('revealed');
    recordSTPractice();
  };

  const toggleTactic = (i: number) => {
    setCheckedTactics((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const handleNext = useCallback(() => {
    const score = checkedTactics.size;
    const newTotal = totalScore + score;
    setTotalScore(newTotal);

    addSelfEval({
      date: new Date().toISOString().split('T')[0],
      module: 'debate',
      score,
      maxScore: tactics.length,
    });

    if (!debate || exchangeIndex + 1 >= debate.exchanges.length) {
      updateModuleStats('debate', newTotal);
      setMode('done');
    } else {
      setExchangeIndex((i) => i + 1);
      setPhase('think');
      setCheckedTactics(new Set());
    }
  }, [checkedTactics, debate, exchangeIndex, totalScore]);

  if (!loaded) return null;

  if (mode === 'done' && debate) {
    const max = debate.exchanges.length * tactics.length;
    const pct = max > 0 ? Math.round((totalScore / max) * 100) : 0;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">⚔</div>
        <h1 className="text-2xl font-bold mb-2">Debate complete!</h1>
        <p className="text-muted-fg mb-2">{debate.topic}</p>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : 'var(--error)' }}>
          {totalScore}/{max} ({pct}%)
        </div>
        <p className="text-sm text-muted-fg mb-6">Tactics you identified across {debate.exchanges.length} exchanges</p>
        <button onClick={() => setMode('select')} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover">New debate</button>
      </div>
    );
  }

  if (mode === 'debate' && debate) {
    const exchange = debate.exchanges[exchangeIndex];
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setMode('select')} className="text-muted-fg hover:text-foreground text-sm">&larr; Back</button>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${((exchangeIndex + 1) / debate.exchanges.length) * 100}%` }} />
          </div>
          <span className="text-sm text-muted-fg">{exchangeIndex + 1}/{debate.exchanges.length}</span>
        </div>

        <div className="mb-3">
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
            You are {debate.userSide === 'pro' ? 'FOR' : 'AGAINST'}
          </span>
          <h2 className="text-lg font-bold mt-1">{debate.topic}</h2>
        </div>

        <div className="bg-card border border-card-border rounded-xl p-5">
          {/* Opponent's argument */}
          <div className="p-3 bg-error-bg rounded-lg mb-4">
            <p className="text-xs text-muted-fg mb-1">Opponent says:</p>
            <p className="text-sm">{exchange.opponent}</p>
          </div>

          {phase === 'think' && (
            <>
              <p className="text-sm text-muted-fg mb-3">Think about how you&apos;d counter this argument, then reveal the model response.</p>
              <button onClick={handleReveal}
                className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
                Reveal model counter
              </button>
            </>
          )}

          {phase === 'revealed' && (
            <>
              {/* Model counter */}
              <div className="p-3 bg-success-bg rounded-lg mb-4">
                <p className="text-xs text-muted-fg mb-1">Model counter:</p>
                <p className="text-sm font-medium">{exchange.modelCounter}</p>
              </div>

              {/* Tactics check */}
              <p className="text-sm font-medium mb-2">Which tactics does this counter use?</p>
              <div className="space-y-2 mb-4">
                {tactics.map((t, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={checkedTactics.has(i)} onChange={() => toggleTactic(i)} className="rounded" />
                    {t}
                  </label>
                ))}
              </div>

              <button onClick={handleNext} className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
                {exchangeIndex + 1 >= debate.exchanges.length ? 'Finish debate' : 'Next exchange'}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Select screen
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-2">Debate Simulator</h1>
      <p className="text-sm text-muted-fg mb-4">Study sharp counter-arguments. Learn by reading, not writing.</p>
      <div className="space-y-2">
        {debateScripts.map((d) => (
          <button key={d.id} onClick={() => startDebate(d)}
            className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sm">{d.topic}</span>
                <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-accent/10 text-accent">
                  {d.userSide === 'pro' ? 'FOR' : 'AGAINST'}
                </span>
              </div>
              <span className="text-xs text-muted-fg">{d.exchanges.length} exchanges</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
