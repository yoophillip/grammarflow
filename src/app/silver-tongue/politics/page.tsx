'use client';

import { useState } from 'react';
import { debateTopics, interestingFacts, type DebateTopic } from '@/lib/silver-tongue/politics-data';

const categories = [
  { key: 'all', label: 'All Topics' },
  { key: 'economy', label: 'Economy' },
  { key: 'social', label: 'Social' },
  { key: 'environment', label: 'Environment' },
  { key: 'foreign', label: 'Foreign Policy' },
  { key: 'governance', label: 'Governance' },
];

const tabs = ['Debate Topics', 'Interesting Data'] as const;

function TopicCard({ topic }: { topic: DebateTopic }) {
  const [expanded, setExpanded] = useState(false);
  const [side, setSide] = useState<'both' | 'dem' | 'rep'>('both');

  return (
    <div className="bg-card rounded-xl border border-card-border overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-fg capitalize">
            {topic.category}
          </span>
          <h3 className="text-lg font-semibold">{topic.topic}</h3>
        </div>
        <span className="text-muted-fg text-xl">{expanded ? '−' : '+'}</span>
      </button>

      {expanded && (
        <div className="px-4 pb-4">
          {/* Side toggle */}
          <div className="flex gap-1 mb-4 bg-muted rounded-lg p-1">
            <button
              onClick={() => setSide('both')}
              className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-colors ${
                side === 'both' ? 'bg-card shadow-sm' : 'text-muted-fg hover:text-foreground'
              }`}
            >
              Both Sides
            </button>
            <button
              onClick={() => setSide('dem')}
              className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-colors ${
                side === 'dem' ? 'bg-blue-600 text-white shadow-sm' : 'text-muted-fg hover:text-foreground'
              }`}
            >
              Democrat
            </button>
            <button
              onClick={() => setSide('rep')}
              className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-colors ${
                side === 'rep' ? 'bg-red-600 text-white shadow-sm' : 'text-muted-fg hover:text-foreground'
              }`}
            >
              Republican
            </button>
          </div>

          <div className={`grid gap-4 ${side === 'both' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
            {/* Democrat side */}
            {(side === 'both' || side === 'dem') && (
              <div className="rounded-lg border-2 border-blue-500/30 p-4 bg-blue-500/5">
                <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  Democrat Position
                </h4>
                <p className="text-sm text-muted-fg mb-3 italic">{topic.democrat.position}</p>

                <h5 className="text-sm font-semibold mb-2">Top Arguments:</h5>
                <ul className="space-y-1.5 mb-4">
                  {topic.democrat.arguments.map((arg, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="text-blue-500 font-bold shrink-0">{i + 1}.</span>
                      <span>{arg}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-sm font-semibold mb-2">Key Data:</h5>
                <ul className="space-y-1">
                  {topic.democrat.data.map((d, i) => (
                    <li key={i} className="text-xs text-muted-fg flex gap-2">
                      <span className="text-blue-400">●</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Republican side */}
            {(side === 'both' || side === 'rep') && (
              <div className="rounded-lg border-2 border-red-500/30 p-4 bg-red-500/5">
                <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  Republican Position
                </h4>
                <p className="text-sm text-muted-fg mb-3 italic">{topic.republican.position}</p>

                <h5 className="text-sm font-semibold mb-2">Top Arguments:</h5>
                <ul className="space-y-1.5 mb-4">
                  {topic.republican.arguments.map((arg, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="text-red-500 font-bold shrink-0">{i + 1}.</span>
                      <span>{arg}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-sm font-semibold mb-2">Key Data:</h5>
                <ul className="space-y-1">
                  {topic.republican.data.map((d, i) => (
                    <li key={i} className="text-xs text-muted-fg flex gap-2">
                      <span className="text-red-400">●</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PoliticsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Debate Topics');
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? debateTopics
    : debateTopics.filter((t) => t.category === filter);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 pb-24">
      <div>
        <h1 className="text-2xl font-bold">Politics & Economics</h1>
        <p className="text-muted-fg text-sm mt-1">
          Understand both sides of every major debate — with real data, not talking points
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-card shadow-sm' : 'text-muted-fg hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Debate Topics' && (
        <>
          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  filter === cat.key
                    ? 'bg-accent text-white'
                    : 'bg-muted text-muted-fg hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Topic cards */}
          <div className="space-y-3">
            {filtered.map((topic) => (
              <TopicCard key={topic.topic} topic={topic} />
            ))}
          </div>

          <div className="text-center text-xs text-muted-fg mt-4 p-4 bg-muted rounded-lg">
            <strong>Note:</strong> Arguments and data are presented for educational purposes to help you understand
            both perspectives. Data points are sourced from government agencies, research institutions, and major
            publications. Always verify current statistics as they change over time.
          </div>
        </>
      )}

      {activeTab === 'Interesting Data' && (
        <div className="space-y-6">
          {interestingFacts.map((section) => (
            <div key={section.category} className="bg-card rounded-xl border border-card-border p-4">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {section.category}
              </h3>
              <div className="space-y-3">
                {section.facts.map((fact, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                    <span className="text-accent font-bold text-lg shrink-0">{i + 1}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{fact.title}</h4>
                      <p className="text-sm text-muted-fg mt-0.5">{fact.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center text-xs text-muted-fg p-4 bg-muted rounded-lg">
            <strong>Sources:</strong> Data compiled from CBO, Census Bureau, BLS, Federal Reserve, CDC, IRS, OECD,
            OpenSecrets, and major research institutions. Statistics are based on most recently available data as of
            2024. Always verify for the latest figures.
          </div>
        </div>
      )}
    </div>
  );
}
