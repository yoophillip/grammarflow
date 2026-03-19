'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { quickFireQuestions } from '@/lib/silver-tongue/quick-fire-data';
import { recordSTPractice, updateModuleStats, addQuickFireScore, getQuickFireScores } from '@/lib/silver-tongue/storage';

export default function QuickFirePage() {
  const [mode, setMode] = useState<'menu' | 'playing' | 'results'>('menu');
  const [questions, setQuestions] = useState<typeof quickFireQuestions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScores, setHighScores] = useState<{ score: number; date: string }[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    setHighScores(getQuickFireScores());
  }, []);

  const startGame = useCallback(() => {
    const shuffled = [...quickFireQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setMode('playing');
  }, []);

  useEffect(() => {
    if (mode === 'playing' && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up — skip
            clearInterval(timerRef.current);
            setShowResult(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [mode, showResult, currentIndex]);

  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return;
    clearInterval(timerRef.current);
    setSelected(answer);
    setShowResult(true);
    const isCorrect = answer === questions[currentIndex].correct;
    if (isCorrect) {
      // Bonus points for speed
      const bonus = Math.max(0, Math.floor(timeLeft / 5));
      setScore((prev) => prev + 10 + bonus);
    }
    recordSTPractice();
  }, [showResult, questions, currentIndex, timeLeft]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      addQuickFireScore(score);
      updateModuleStats('quick-fire', score);
      setHighScores(getQuickFireScores());
      setMode('results');
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
      setTimeLeft(30);
    }
  }, [currentIndex, questions.length, score]);

  if (mode === 'results') {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">⚡</div>
        <h1 className="text-2xl font-bold mb-2">Quick Fire complete!</h1>
        <div className="text-4xl font-bold my-4 text-accent">{score} pts</div>
        <p className="text-muted-fg mb-6">Speed + accuracy = points</p>

        {highScores.length > 0 && (
          <div className="bg-card border border-card-border rounded-xl p-4 mb-6 text-left">
            <h3 className="text-sm font-medium mb-2">Leaderboard (your best)</h3>
            {highScores.slice(0, 5).map((hs, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-1">
                <span className="text-muted-fg">#{i + 1}</span>
                <span className="font-medium">{hs.score} pts</span>
                <span className="text-xs text-muted-fg">{hs.date}</span>
              </div>
            ))}
          </div>
        )}
        <button onClick={startGame} className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent-hover">Play again</button>
      </div>
    );
  }

  if (mode === 'playing' && questions.length > 0) {
    const q = questions[currentIndex];
    const typeLabels: Record<string, string> = {
      grammar: 'Grammar', transition: 'Transition', 'edge-case': 'Edge Case', analogy: 'Analogy', hedge: 'Hedge',
    };

    return (
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-fg">{currentIndex + 1}/{questions.length}</span>
          <span className="text-lg font-bold text-accent">{score} pts</span>
          <div className={`text-lg font-bold ${timeLeft <= 5 ? 'text-error' : timeLeft <= 10 ? 'text-warning' : 'text-foreground'}`}>
            {timeLeft}s
          </div>
        </div>

        {/* Timer bar */}
        <div className="h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 5 ? 'bg-error' : timeLeft <= 10 ? 'bg-warning' : 'bg-accent'}`}
            style={{ width: `${(timeLeft / 30) * 100}%` }} />
        </div>

        <div className="bg-card border border-card-border rounded-xl p-5">
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
            {typeLabels[q.type] || q.type}
          </span>
          <p className="text-base mt-3 mb-5">{q.question}</p>

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
                  className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-colors ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>

          {showResult && (
            <>
              <div className="mt-3 p-2 bg-muted rounded-lg">
                <p className="text-xs text-muted-fg">{q.explanation}</p>
              </div>
              <button onClick={handleNext} className="w-full mt-3 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover">
                {currentIndex + 1 >= questions.length ? 'See results' : 'Next →'}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Menu
  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <div className="text-5xl mb-4">⚡</div>
      <h1 className="text-2xl font-bold mb-2">Quick Fire</h1>
      <p className="text-muted-fg mb-6">30 seconds per question. Speed + accuracy = points.</p>
      <p className="text-sm text-muted-fg mb-4">Mix of grammar, transitions, edge cases, analogies, and hedges.</p>
      <button onClick={startGame} className="px-8 py-3 bg-accent text-white rounded-xl text-lg font-medium hover:bg-accent-hover">
        Start
      </button>

      {highScores.length > 0 && (
        <div className="mt-8 bg-card border border-card-border rounded-xl p-4 text-left">
          <h3 className="text-sm font-medium mb-2">Your best scores</h3>
          {highScores.slice(0, 5).map((hs, i) => (
            <div key={i} className="flex items-center justify-between text-sm py-1">
              <span className="text-muted-fg">#{i + 1}</span>
              <span className="font-medium">{hs.score} pts</span>
              <span className="text-xs text-muted-fg">{hs.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
