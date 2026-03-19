'use client';

import { useState, useEffect, useCallback } from 'react';
import { grammarDrillQuestions } from '@/lib/silver-tongue/grammar-drills-data';
import { getGrammarAccuracy, updateGrammarAccuracy, recordSTPractice, updateModuleStats } from '@/lib/silver-tongue/storage';

const categories = ['articles', 'who-whom', 'lay-lie', 'fewer-less', 'affect-effect', 'subjunctive'] as const;
const categoryLabels: Record<string, string> = {
  articles: 'A / An / The',
  'who-whom': 'Who / Whom',
  'lay-lie': 'Lay / Lie',
  'fewer-less': 'Fewer / Less',
  'affect-effect': 'Affect / Effect',
  subjunctive: 'Subjunctive Mood',
};

export default function GrammarDrillsPage() {
  const [mode, setMode] = useState<'menu' | 'drill' | 'results'>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [focusMode, setFocusMode] = useState(false);
  const [questions, setQuestions] = useState<typeof grammarDrillQuestions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [accuracy, setAccuracy] = useState<Record<string, { correct: number; total: number }>>({});

  useEffect(() => {
    setAccuracy(getGrammarAccuracy());
  }, []);

  const startDrill = useCallback((cat: string, focus: boolean) => {
    let pool = grammarDrillQuestions;

    if (focus) {
      // Only categories below 80%
      const acc = getGrammarAccuracy();
      const weakCats = categories.filter((c) => {
        const d = acc[c];
        return !d || d.total === 0 || (d.correct / d.total) < 0.8;
      });
      pool = pool.filter((q) => weakCats.includes(q.category as typeof categories[number]));
    } else if (cat !== 'all') {
      pool = pool.filter((q) => q.category === cat);
    }

    // Shuffle and take 20
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setMode('drill');
    setSelectedCategory(cat);
    setFocusMode(focus);
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return;
    setSelected(answer);
    setShowResult(true);
    const isCorrect = answer === questions[currentIndex].correct;
    updateGrammarAccuracy(questions[currentIndex].category, isCorrect);
    setScore((prev) => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    recordSTPractice();
  }, [showResult, questions, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      updateModuleStats('grammar-drills', score.correct);
      setAccuracy(getGrammarAccuracy());
      setMode('results');
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length, score.correct]);

  if (mode === 'results') {
    const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? '★' : pct >= 50 ? '◆' : '●'}</div>
        <h1 className="text-2xl font-bold mb-2">Drill complete!</h1>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)' }}>
          {pct}%
        </div>
        <p className="text-muted-fg mb-6">{score.correct} of {score.total} correct</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => startDrill(selectedCategory, focusMode)} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover">Again</button>
          <button onClick={() => setMode('menu')} className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-card-border">Back</button>
        </div>
      </div>
    );
  }

  if (mode === 'drill' && questions.length > 0) {
    const q = questions[currentIndex];
    return (
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setMode('menu')} className="text-muted-fg hover:text-foreground text-sm">&larr; Back</button>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
          </div>
          <span className="text-sm text-muted-fg">{currentIndex + 1}/{questions.length}</span>
        </div>

        <div className="bg-card border border-card-border rounded-xl p-6">
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
            {categoryLabels[q.category] || q.category}
          </span>
          <p className="text-lg mt-4 mb-6">{q.question}</p>

          <div className="space-y-2">
            {q.options.map((opt) => {
              let style = 'border-card-border hover:border-accent hover:bg-accent/5';
              if (showResult) {
                if (opt === q.correct) style = 'border-success bg-success-bg';
                else if (opt === selected) style = 'border-error bg-error-bg';
                else style = 'border-card-border opacity-50';
              }
              return (
                <button key={opt} onClick={() => handleAnswer(opt)} disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">{selected === q.correct ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-sm text-muted-fg">{q.explanation}</p>
            </div>
          )}

          {showResult && (
            <button onClick={handleNext} className="w-full mt-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover">
              {currentIndex + 1 >= questions.length ? 'See results' : 'Next'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Menu
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Grammar Drills</h1>

      {/* Focus mode */}
      <button onClick={() => startDrill('all', true)}
        className="w-full mb-4 p-4 bg-accent text-white rounded-xl font-medium hover:bg-accent-hover text-center">
        Focus Mode — Drill weak areas (&lt;80%)
      </button>

      {/* Category cards */}
      <div className="space-y-2">
        <button onClick={() => startDrill('all', false)}
          className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
          <div className="flex items-center justify-between">
            <span className="font-medium">All Categories (Mixed)</span>
            <span className="text-sm text-muted-fg">{grammarDrillQuestions.length} questions</span>
          </div>
        </button>
        {categories.map((cat) => {
          const count = grammarDrillQuestions.filter((q) => q.category === cat).length;
          const acc = accuracy[cat];
          const pct = acc && acc.total > 0 ? Math.round((acc.correct / acc.total) * 100) : null;
          return (
            <button key={cat} onClick={() => startDrill(cat, false)}
              className="w-full bg-card border border-card-border rounded-xl p-4 text-left hover:bg-muted">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{categoryLabels[cat]}</span>
                  <span className="text-sm text-muted-fg ml-2">{count} questions</span>
                </div>
                {pct !== null && (
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)' }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)' }}>{pct}%</span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
