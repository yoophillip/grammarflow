'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDueReviews, getStreak, getMistakes } from '@/lib/storage';

export default function Home() {
  const [dueCount, setDueCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mastered, setMastered] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDueCount(getDueReviews().length);
    setStreak(getStreak());
    const mistakes = getMistakes();
    setTotal(mistakes.length);
    setMastered(mistakes.filter((m) => m.mastered).length);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">GrammarFlow</h1>
        <p className="text-muted-fg">Master English grammar through practice</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-accent">{streak}</div>
          <div className="text-xs text-muted-fg mt-1">Day streak</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-success">{mastered}</div>
          <div className="text-xs text-muted-fg mt-1">Mastered</div>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-warning">{dueCount}</div>
          <div className="text-xs text-muted-fg mt-1">Due reviews</div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="space-y-3">
        {dueCount > 0 && (
          <Link
            href="/review"
            className="block bg-accent text-white rounded-xl p-4 text-center font-medium hover:bg-accent-hover"
          >
            Review {dueCount} item{dueCount !== 1 ? 's' : ''} due
          </Link>
        )}
        <Link
          href="/checker"
          className="block bg-card border border-card-border rounded-xl p-4 text-center font-medium hover:bg-muted"
        >
          Check grammar
        </Link>
        <Link
          href="/practice"
          className="block bg-card border border-card-border rounded-xl p-4 text-center font-medium hover:bg-muted"
        >
          Practice exercises
        </Link>
        {total === 0 && (
          <p className="text-center text-sm text-muted-fg mt-4">
            Start by checking some text in the Checker. Your mistakes will be saved for review.
          </p>
        )}
      </div>
    </div>
  );
}
