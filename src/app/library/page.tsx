'use client';

import { useState, useMemo } from 'react';
import { grammarRules, categoryLabels } from '@/lib/rules';

const categories = ['all', 'article', 'preposition', 'countable', 'expression', 'common'] as const;

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  const filteredRules = useMemo(() => {
    let rules = grammarRules;
    if (category !== 'all') {
      rules = rules.filter((r) => r.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      rules = rules.filter(
        (r) =>
          r.errorType.toLowerCase().includes(q) ||
          r.explanation.toLowerCase().includes(q) ||
          r.examples.some(
            (e) => e.wrong.toLowerCase().includes(q) || e.right.toLowerCase().includes(q)
          )
      );
    }
    return rules;
  }, [search, category]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Pattern Library</h1>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 bg-card border border-card-border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-accent/50"
        placeholder='Search patterns (e.g., "standby", "article")...'
      />

      {/* Category tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
              category === cat
                ? 'bg-accent text-white'
                : 'bg-muted text-muted-fg hover:text-foreground'
            }`}
          >
            {cat === 'all' ? 'All' : categoryLabels[cat] || cat}
            <span className="ml-1 opacity-70">
              ({cat === 'all' ? grammarRules.length : grammarRules.filter((r) => r.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      {/* Rules list */}
      <div className="space-y-3">
        {filteredRules.length === 0 && (
          <p className="text-center text-muted-fg py-8">No patterns found.</p>
        )}
        {filteredRules.map((rule) => (
          <div key={rule.id} className="bg-card border border-card-border rounded-xl p-4">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-xs px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium shrink-0">
                {rule.category}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded font-medium shrink-0"
                style={{
                  background:
                    rule.difficulty === 1 ? 'var(--success)' : rule.difficulty === 2 ? 'var(--warning)' : 'var(--error)',
                  color: 'white',
                  opacity: 0.8,
                }}
              >
                {['', 'Easy', 'Medium', 'Hard'][rule.difficulty]}
              </span>
              <h3 className="text-sm font-medium">{rule.errorType}</h3>
            </div>
            <p className="text-sm text-muted-fg mb-3">{rule.explanation}</p>
            <div className="space-y-1">
              {rule.examples.map((ex, i) => (
                <div key={i} className="text-sm">
                  <span className="line-through text-error/60">{ex.wrong}</span>
                  <span className="mx-2 text-muted-fg">&rarr;</span>
                  <span className="text-success">{ex.right}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-muted-fg mt-6">
        {filteredRules.length} pattern{filteredRules.length !== 1 ? 's' : ''} shown
      </div>
    </div>
  );
}
