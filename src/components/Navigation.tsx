'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDueReviews } from '@/lib/storage';

const navItems = [
  { href: '/checker', label: 'Checker', icon: '✎' },
  { href: '/review', label: 'Review', icon: '↻' },
  { href: '/practice', label: 'Practice', icon: '◎' },
  { href: '/library', label: 'Library', icon: '☰' },
  { href: '/log', label: 'Log', icon: '▤' },
  { href: '/dashboard', label: 'Stats', icon: '◫' },
  { href: '/silver-tongue', label: 'Silver Tongue', icon: '⚔' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [dueCount, setDueCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const due = getDueReviews();
    setDueCount(due.length);

    const saved = localStorage.getItem('grammar_theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('grammar_theme', next ? 'dark' : 'light');
  };

  return (
    <>
      {/* Top bar — desktop */}
      <header className="hidden md:flex items-center justify-between px-6 py-3 border-b border-card-border bg-card">
        <Link href="/" className="text-lg font-bold text-accent">
          GrammarFlow
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors relative ${
                (pathname === item.href || (item.href === '/silver-tongue' && pathname.startsWith('/silver-tongue')))
                  ? 'bg-accent text-white'
                  : 'text-muted-fg hover:text-foreground hover:bg-muted'
              }`}
            >
              {item.label}
              {item.href === '/review' && dueCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {dueCount > 9 ? '9+' : dueCount}
                </span>
              )}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-lg text-muted-fg hover:text-foreground hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀' : '☾'}
          </button>
        </nav>
      </header>

      {/* Bottom bar — mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-card-border flex justify-around py-1 safe-bottom">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center py-1 px-2 text-xs relative ${
              pathname === item.href ? 'text-accent' : 'text-muted-fg'
            }`}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="mt-0.5">{item.label}</span>
            {item.href === '/review' && dueCount > 0 && (
              <span className="absolute top-0 right-0 bg-error text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                {dueCount > 9 ? '9+' : dueCount}
              </span>
            )}
          </Link>
        ))}
        <button
          onClick={toggleDark}
          className="flex flex-col items-center py-1 px-2 text-xs text-muted-fg"
        >
          <span className="text-lg leading-none">{darkMode ? '☀' : '☾'}</span>
          <span className="mt-0.5">Theme</span>
        </button>
      </nav>
    </>
  );
}
