'use client';

import { useState, useEffect, useMemo } from 'react';
import { getDailyStats, getMistakes, getStreak, getCategoryStats } from '@/lib/storage';
import { categoryLabels } from '@/lib/rules';

export default function DashboardPage() {
  const [loaded, setLoaded] = useState(false);
  const [stats, setStats] = useState<ReturnType<typeof getDailyStats>>([]);
  const [streak, setStreak] = useState(0);
  const [catStats, setCatStats] = useState<ReturnType<typeof getCategoryStats>>([]);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);

  useEffect(() => {
    setStats(getDailyStats());
    setStreak(getStreak());
    setCatStats(getCategoryStats());
    const mistakes = getMistakes();
    setTotalMistakes(mistakes.length);
    setMasteredCount(mistakes.filter((m) => m.mastered).length);
    setLoaded(true);
  }, []);

  const weeklyData = useMemo(() => {
    const last7 = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(Date.now() - i * 86400000).toISOString().split('T')[0];
      const day = stats.find((s) => s.date === date);
      last7.push({
        date,
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()],
        errors: day?.errorsFound || 0,
        words: day?.wordsChecked || 0,
        reviews: day?.reviewsDone || 0,
        reviewsCorrect: day?.reviewsCorrect || 0,
      });
    }
    return last7;
  }, [stats]);

  const totalReviews = weeklyData.reduce((s, d) => s + d.reviews, 0);
  const totalCorrect = weeklyData.reduce((s, d) => s + d.reviewsCorrect, 0);
  const weeklyAccuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
  const maxErrors = Math.max(...weeklyData.map((d) => d.errors), 1);

  if (!loaded) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Progress Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-accent">{streak}</div>
          <div className="text-xs text-muted-fg mt-1">Day streak</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-success">{masteredCount}</div>
          <div className="text-xs text-muted-fg mt-1">Mastered</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold">{totalMistakes}</div>
          <div className="text-xs text-muted-fg mt-1">Total mistakes</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold" style={{ color: weeklyAccuracy >= 80 ? 'var(--success)' : weeklyAccuracy >= 50 ? 'var(--warning)' : 'var(--error)' }}>
            {weeklyAccuracy}%
          </div>
          <div className="text-xs text-muted-fg mt-1">Weekly accuracy</div>
        </div>
      </div>

      {/* Weekly errors chart */}
      <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-medium mb-4">Errors found (last 7 days)</h2>
        <div className="flex items-end gap-2 h-32">
          {weeklyData.map((day) => (
            <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
              <div className="text-xs text-muted-fg">{day.errors}</div>
              <div
                className="w-full bg-error/20 rounded-t"
                style={{
                  height: `${Math.max((day.errors / maxErrors) * 100, 4)}%`,
                  minHeight: day.errors > 0 ? '8px' : '2px',
                  background: day.errors > 0 ? 'var(--error)' : 'var(--muted)',
                  opacity: day.errors > 0 ? 0.6 : 0.3,
                }}
              />
              <div className="text-xs text-muted-fg">{day.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Review accuracy chart */}
      <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-medium mb-4">Review accuracy (last 7 days)</h2>
        <div className="flex items-end gap-2 h-32">
          {weeklyData.map((day) => {
            const acc = day.reviews > 0 ? Math.round((day.reviewsCorrect / day.reviews) * 100) : 0;
            return (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                <div className="text-xs text-muted-fg">{day.reviews > 0 ? `${acc}%` : '-'}</div>
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${Math.max(acc, 4)}%`,
                    minHeight: day.reviews > 0 ? '8px' : '2px',
                    background: acc >= 80 ? 'var(--success)' : acc >= 50 ? 'var(--warning)' : day.reviews > 0 ? 'var(--error)' : 'var(--muted)',
                    opacity: day.reviews > 0 ? 0.6 : 0.3,
                  }}
                />
                <div className="text-xs text-muted-fg">{day.day}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-card border border-card-border rounded-xl p-4">
        <h2 className="text-sm font-medium mb-4">Category breakdown</h2>
        <div className="space-y-4">
          {catStats.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{categoryLabels[cat.category] || cat.category}</span>
                <span className="text-sm text-muted-fg">
                  {cat.mastered}/{cat.total} mastered
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: cat.total > 0 ? `${(cat.mastered / cat.total) * 100}%` : '0%',
                    background: 'var(--success)',
                    minWidth: cat.mastered > 0 ? '8px' : '0',
                  }}
                />
              </div>
            </div>
          ))}
          {catStats.every((c) => c.total === 0) && (
            <p className="text-sm text-muted-fg text-center py-4">
              No data yet. Start checking text to see your stats.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
