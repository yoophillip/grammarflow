'use client';

import { useState, useEffect, useMemo } from 'react';
import { getMistakes } from '@/lib/storage';
import { getRuleById, categoryLabels } from '@/lib/rules';
import { Mistake } from '@/lib/types';

export default function LogPage() {
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMistakes(getMistakes());
    setLoaded(true);
  }, []);

  const grouped = useMemo(() => {
    const map = new Map<string, Mistake[]>();
    const filtered = filter === 'all' ? mistakes : mistakes.filter((m) => m.category === filter);
    for (const m of filtered) {
      const key = m.ruleId;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(m);
    }
    // Sort by frequency (most mistakes first)
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [mistakes, filter]);

  const topMistakes = useMemo(() => {
    const freq = new Map<string, number>();
    for (const m of mistakes) {
      freq.set(m.ruleId, (freq.get(m.ruleId) || 0) + 1);
    }
    return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [mistakes]);

  if (!loaded) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Mistake Log</h1>

      {mistakes.length === 0 ? (
        <div className="text-center py-12 text-muted-fg">
          <p className="text-lg mb-2">No mistakes recorded yet</p>
          <p className="text-sm">Use the Grammar Checker to start building your log.</p>
        </div>
      ) : (
        <>
          {/* Top mistakes summary */}
          {topMistakes.length > 0 && (
            <div className="bg-card border border-card-border rounded-xl p-4 mb-6">
              <h2 className="text-sm font-medium mb-3">Most frequent mistakes</h2>
              <div className="space-y-2">
                {topMistakes.map(([ruleId, count]) => {
                  const rule = getRuleById(ruleId);
                  return (
                    <div key={ruleId} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-error/10 text-error flex items-center justify-center text-sm font-bold">
                        {count}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{rule?.errorType || ruleId}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filter tabs */}
          <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
            {['all', 'article', 'preposition', 'countable', 'expression', 'common'].map((cat) => {
              const count = cat === 'all' ? mistakes.length : mistakes.filter((m) => m.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
                    filter === cat ? 'bg-accent text-white' : 'bg-muted text-muted-fg hover:text-foreground'
                  }`}
                >
                  {cat === 'all' ? 'All' : categoryLabels[cat] || cat}
                  <span className="ml-1 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Grouped mistakes */}
          <div className="space-y-4">
            {grouped.map(([ruleId, items]) => {
              const rule = getRuleById(ruleId);
              const masteredCount = items.filter((i) => i.mastered).length;

              return (
                <div key={ruleId} className="bg-card border border-card-border rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium">
                          {items[0].category}
                        </span>
                        <span className="text-sm font-medium">{rule?.errorType || ruleId}</span>
                      </div>
                      <p className="text-xs text-muted-fg">{rule?.explanation}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <div className="text-lg font-bold">{items.length}</div>
                      <div className="text-xs text-muted-fg">
                        {masteredCount > 0 && <span className="text-success">{masteredCount} mastered</span>}
                      </div>
                    </div>
                  </div>

                  {/* Individual mistakes */}
                  <div className="mt-3 space-y-1.5 border-t border-card-border pt-3">
                    {items.slice(0, 5).map((m) => (
                      <div key={m.id} className="flex items-center gap-2 text-sm">
                        <span className={`w-2 h-2 rounded-full ${m.mastered ? 'bg-success' : 'bg-warning'}`} />
                        <span className="line-through text-error/60 truncate">{m.original}</span>
                        <span className="text-muted-fg">&rarr;</span>
                        <span className="text-success truncate">{m.corrected}</span>
                        <span className="text-xs text-muted-fg ml-auto shrink-0">
                          {new Date(m.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                    {items.length > 5 && (
                      <div className="text-xs text-muted-fg">+{items.length - 5} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center text-sm text-muted-fg mt-6">
            {mistakes.length} total mistake{mistakes.length !== 1 ? 's' : ''} logged
          </div>
        </>
      )}
    </div>
  );
}
