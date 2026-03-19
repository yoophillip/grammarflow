'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSTStreak, getModuleStats, getGrammarAccuracy } from '@/lib/silver-tongue/storage';

const modules = [
  { href: '/silver-tongue/grammar-drills', label: 'Grammar Drills', desc: 'Articles, who/whom, lay/lie, fewer/less, affect/effect, subjunctive', icon: '✎' },
  { href: '/silver-tongue/sentence-sharpening', label: 'Sentence Sharpening', desc: 'Turn weak sentences into sharp, powerful ones', icon: '◇' },
  { href: '/silver-tongue/debate', label: 'Debate Simulator', desc: 'Practice counter-arguments against tough opponents', icon: '⚔' },
  { href: '/silver-tongue/second-order', label: 'Second-Order Thinking', desc: 'Find unintended consequences and edge cases', icon: '◎' },
  { href: '/silver-tongue/transitions', label: 'Transition Drills', desc: 'Master connecting phrases for smooth speech', icon: '↔' },
  { href: '/silver-tongue/comebacks', label: 'Comeback Training', desc: 'Counter lazy arguments with precision', icon: '↩' },
  { href: '/silver-tongue/analogy', label: 'Analogy Trainer', desc: 'Build and evaluate structural analogies', icon: '≈' },
  { href: '/silver-tongue/quick-fire', label: 'Quick Fire', desc: '30-second timed drills across all categories', icon: '⚡' },
  { href: '/silver-tongue/speak-aloud', label: 'Speak Aloud', desc: 'Timed verbal practice with model arguments', icon: '▶' },
  { href: '/silver-tongue/reference', label: 'Reference Library', desc: 'Principles, phrases, frameworks', icon: '☰' },
];

export default function SilverTonguePage() {
  const [streak, setStreak] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  const [weakestArea, setWeakestArea] = useState('');

  useEffect(() => {
    setStreak(getSTStreak());
    const stats = getModuleStats();
    setTotalExercises(Object.values(stats).reduce((s, v) => s + v.completed, 0));
    const acc = getGrammarAccuracy();
    let worst = '';
    let worstPct = 100;
    for (const [cat, data] of Object.entries(acc)) {
      if (data.total > 0) {
        const pct = (data.correct / data.total) * 100;
        if (pct < worstPct) { worstPct = pct; worst = cat; }
      }
    }
    setWeakestArea(worst);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">Silver Tongue</h1>
        <p className="text-muted-fg text-sm">Speak articulately. Debate sharply. Think critically.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-accent">{streak}</div>
          <div className="text-xs text-muted-fg">Day streak</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-success">{totalExercises}</div>
          <div className="text-xs text-muted-fg">Exercises done</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-warning truncate">{weakestArea || '—'}</div>
          <div className="text-xs text-muted-fg">Focus area</div>
        </div>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {modules.map((mod) => (
          <Link
            key={mod.href}
            href={mod.href}
            className="bg-card border border-card-border rounded-xl p-4 hover:bg-muted transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{mod.icon}</span>
              <div>
                <h3 className="font-medium text-sm">{mod.label}</h3>
                <p className="text-xs text-muted-fg mt-0.5">{mod.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
