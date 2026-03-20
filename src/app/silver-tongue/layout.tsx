'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const modules = [
  { href: '/silver-tongue', label: 'Home', icon: '◈' },
  { href: '/silver-tongue/grammar-drills', label: 'Grammar', icon: '✎' },
  { href: '/silver-tongue/sentence-sharpening', label: 'Sharpen', icon: '◇' },
  { href: '/silver-tongue/debate', label: 'Debate', icon: '⚔' },
  { href: '/silver-tongue/second-order', label: 'Think', icon: '◎' },
  { href: '/silver-tongue/transitions', label: 'Transitions', icon: '↔' },
  { href: '/silver-tongue/comebacks', label: 'Comebacks', icon: '↩' },
  { href: '/silver-tongue/analogy', label: 'Analogy', icon: '≈' },
  { href: '/silver-tongue/quick-fire', label: 'Quick Fire', icon: '⚡' },
  { href: '/silver-tongue/speak-aloud', label: 'Speak', icon: '▶' },
  { href: '/silver-tongue/reference', label: 'Reference', icon: '☰' },
  { href: '/silver-tongue/politics', label: 'Politics', icon: '⚖' },
  { href: '/silver-tongue/dashboard', label: 'Stats', icon: '◫' },
];

export default function SilverTongueLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {/* Module nav — horizontal scrollable */}
      <div className="border-b border-card-border bg-card overflow-x-auto">
        <div className="flex gap-0.5 px-4 py-2 min-w-max">
          {modules.map((mod) => {
            const isActive = pathname === mod.href;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-muted-fg hover:text-foreground hover:bg-muted'
                }`}
              >
                <span>{mod.icon}</span>
                <span className="hidden sm:inline">{mod.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
}
