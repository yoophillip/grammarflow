'use client';

import { useState, useCallback, useEffect } from 'react';
import { generatePracticeQuestions, PracticeQuestion } from '@/lib/practice';
import { recordPractice, updateTodayStats, getTodayStats } from '@/lib/storage';

export default function PracticePage() {
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const qs = generatePracticeQuestions(10);
    setQuestions(qs);
    setLoaded(true);
  }, []);

  const current = questions[currentIndex];

  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === current.correctAnswer;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    const today = getTodayStats();
    updateTodayStats({
      reviewsDone: today.reviewsDone + 1,
      reviewsCorrect: today.reviewsCorrect + (isCorrect ? 1 : 0),
    });

    recordPractice();
  }, [showResult, current]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    const qs = generatePracticeQuestions(10);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsComplete(false);
  }, []);

  if (!loaded) return null;

  if (isComplete) {
    const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? '★' : pct >= 50 ? '◆' : '●'}</div>
        <h1 className="text-2xl font-bold mb-2">Practice complete!</h1>
        <div className="text-4xl font-bold my-4" style={{ color: pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)' }}>
          {pct}%
        </div>
        <p className="text-muted-fg mb-1">{score.correct} of {score.total} correct</p>
        <p className="text-sm text-muted-fg mb-6">
          {pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good progress! Keep practicing.' : 'Keep at it! Practice makes perfect.'}
        </p>
        <button
          onClick={handleRestart}
          className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover"
        >
          Practice again
        </button>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-2">No practice questions available</h1>
        <p className="text-muted-fg">Use the Checker to build up your mistake library first.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-sm text-muted-fg">
          {currentIndex + 1} / {questions.length}
        </div>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="text-sm text-muted-fg">
          {score.correct}/{score.total}
        </div>
      </div>

      <h1 className="text-xl font-bold mb-6">Practice</h1>

      <div className="bg-card border border-card-border rounded-xl p-6">
        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
          {current.category}
        </span>

        {/* Sentence with blank */}
        <p className="text-lg mt-4 mb-6">
          {current.sentence.split('___').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="inline-block min-w-[100px] border-b-2 border-accent mx-1 text-center font-medium text-accent">
                  {showResult ? current.correctAnswer : '___'}
                </span>
              )}
            </span>
          ))}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {current.options.map((option, i) => {
            let style = 'border-card-border hover:border-accent hover:bg-accent/5';
            if (showResult) {
              if (option === current.correctAnswer) {
                style = 'border-success bg-success-bg';
              } else if (option === selectedAnswer && option !== current.correctAnswer) {
                style = 'border-error bg-error-bg';
              } else {
                style = 'border-card-border opacity-50';
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${style}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-1">
              {selectedAnswer === current.correctAnswer ? 'Correct!' : 'Incorrect'}
            </p>
            <p className="text-sm text-muted-fg">{current.explanation}</p>
          </div>
        )}

        {showResult && (
          <button
            onClick={handleNext}
            className="w-full mt-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover"
          >
            {currentIndex + 1 >= questions.length ? 'See results' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}
