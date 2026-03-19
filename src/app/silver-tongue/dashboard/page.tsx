'use client';

import { useState, useEffect } from 'react';
import { getGrammarAccuracy, getModuleStats, getSelfEvals, getSTStreak, getQuickFireScores } from '@/lib/silver-tongue/storage';

const categoryLabels: Record<string, string> = {
  articles: 'A / An / The',
  'who-whom': 'Who / Whom',
  'lay-lie': 'Lay / Lie',
  'fewer-less': 'Fewer / Less',
  'affect-effect': 'Affect / Effect',
  subjunctive: 'Subjunctive',
};

const moduleLabels: Record<string, string> = {
  'grammar-drills': 'Grammar Drills',
  'sentence-sharpening': 'Sentence Sharpening',
  debate: 'Debate Simulator',
  'second-order': 'Second-Order Thinking',
  transitions: 'Transitions',
  comebacks: 'Comebacks',
  analogy: 'Analogy',
  'quick-fire': 'Quick Fire',
  'speak-aloud': 'Speak Aloud',
};

export default function STDashboardPage() {
  const [loaded, setLoaded] = useState(false);
  const [grammarAcc, setGrammarAcc] = useState<Record<string, { correct: number; total: number }>>({});
  const [moduleStats, setModuleStats] = useState<Record<string, { completed: number; totalScore: number }>>({});
  const [streak, setStreak] = useState(0);
  const [selfEvals, setSelfEvals] = useState<{ date: string; module: string; score: number; maxScore: number }[]>([]);
  const [qfScores, setQfScores] = useState<{ score: number; date: string }[]>([]);

  useEffect(() => {
    setGrammarAcc(getGrammarAccuracy());
    setModuleStats(getModuleStats());
    setStreak(getSTStreak());
    setSelfEvals(getSelfEvals());
    setQfScores(getQuickFireScores());
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const totalExercises = Object.values(moduleStats).reduce((s, v) => s + v.completed, 0);
  const totalGrammarQuestions = Object.values(grammarAcc).reduce((s, v) => s + v.total, 0);
  const totalGrammarCorrect = Object.values(grammarAcc).reduce((s, v) => s + v.correct, 0);
  const overallGrammarPct = totalGrammarQuestions > 0 ? Math.round((totalGrammarCorrect / totalGrammarQuestions) * 100) : 0;

  // Find weakest grammar category
  let weakestCat = '';
  let weakestPct = 100;
  for (const [cat, data] of Object.entries(grammarAcc)) {
    if (data.total >= 3) {
      const pct = Math.round((data.correct / data.total) * 100);
      if (pct < weakestPct) { weakestPct = pct; weakestCat = cat; }
    }
  }

  // Weekly self-eval trend
  const last7Dates = Array.from({ length: 7 }, (_, i) => new Date(Date.now() - (6 - i) * 86400000).toISOString().split('T')[0]);
  const weeklyEvals = last7Dates.map((date) => {
    const dayEvals = selfEvals.filter((e) => e.date === date);
    const total = dayEvals.reduce((s, e) => s + e.maxScore, 0);
    const scored = dayEvals.reduce((s, e) => s + e.score, 0);
    return { date, day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()], pct: total > 0 ? Math.round((scored / total) * 100) : 0, count: dayEvals.length };
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Silver Tongue — Progress</h1>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-accent">{streak}</div>
          <div className="text-xs text-muted-fg">Day streak</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-success">{totalExercises}</div>
          <div className="text-xs text-muted-fg">Exercises</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-2xl font-bold" style={{ color: overallGrammarPct >= 80 ? 'var(--success)' : overallGrammarPct >= 50 ? 'var(--warning)' : 'var(--error)' }}>
            {overallGrammarPct}%
          </div>
          <div className="text-xs text-muted-fg">Grammar acc.</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-warning truncate">{weakestCat ? categoryLabels[weakestCat] || weakestCat : '—'}</div>
          <div className="text-xs text-muted-fg">Focus area</div>
        </div>
      </div>

      {/* Grammar accuracy by category */}
      <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-medium mb-4">Grammar accuracy by category</h2>
        <div className="space-y-3">
          {Object.entries(categoryLabels).map(([cat, label]) => {
            const data = grammarAcc[cat];
            const pct = data && data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            const total = data?.total || 0;
            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">{label}</span>
                  <span className="text-sm text-muted-fg">{total > 0 ? `${pct}% (${data.correct}/${total})` : 'No data'}</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{
                    width: `${pct}%`,
                    background: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : total > 0 ? 'var(--error)' : 'var(--muted)',
                    minWidth: total > 0 ? '4px' : '0',
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly self-eval */}
      <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-medium mb-4">Self-eval scores (last 7 days)</h2>
        <div className="flex items-end gap-2 h-28">
          {weeklyEvals.map((d) => (
            <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
              <div className="text-xs text-muted-fg">{d.count > 0 ? `${d.pct}%` : '-'}</div>
              <div className="w-full rounded-t" style={{
                height: `${Math.max(d.pct, 4)}%`, minHeight: d.count > 0 ? '6px' : '2px',
                background: d.pct >= 70 ? 'var(--success)' : d.pct >= 40 ? 'var(--warning)' : d.count > 0 ? 'var(--error)' : 'var(--muted)',
                opacity: d.count > 0 ? 0.7 : 0.3,
              }} />
              <div className="text-xs text-muted-fg">{d.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Module completion */}
      <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-medium mb-4">Exercises per module</h2>
        <div className="space-y-2">
          {Object.entries(moduleLabels).map(([mod, label]) => {
            const data = moduleStats[mod];
            const count = data?.completed || 0;
            return (
              <div key={mod} className="flex items-center justify-between py-1">
                <span className="text-sm">{label}</span>
                <span className="text-sm font-medium">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Fire leaderboard */}
      {qfScores.length > 0 && (
        <div className="bg-card border border-card-border rounded-xl p-4">
          <h2 className="text-sm font-medium mb-3">Quick Fire — Best Scores</h2>
          {qfScores.slice(0, 5).map((hs, i) => (
            <div key={i} className="flex items-center justify-between text-sm py-1">
              <span className="text-muted-fg">#{i + 1}</span>
              <span className="font-medium">{hs.score} pts</span>
              <span className="text-xs text-muted-fg">{hs.date}</span>
            </div>
          ))}
        </div>
      )}

      {totalExercises === 0 && (
        <p className="text-center text-sm text-muted-fg mt-4">
          Start practicing any module to see your stats here.
        </p>
      )}
    </div>
  );
}
