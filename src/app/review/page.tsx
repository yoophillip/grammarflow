'use client';

import { useState, useEffect, useCallback } from 'react';
import { getDueReviews, updateMistake, updateTodayStats, getTodayStats, recordPractice } from '@/lib/storage';
import { calculateNextReview, createReviewItem } from '@/lib/sm2';
import { Mistake } from '@/lib/types';
import { getRuleById } from '@/lib/rules';

export default function ReviewPage() {
  const [dueItems, setDueItems] = useState<Mistake[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const items = getDueReviews().slice(0, 10); // Max 10 per session
    setDueItems(items);
    if (items.length === 0) setIsComplete(true);
  }, []);

  const currentMistake = dueItems[currentIndex];
  const reviewItem = currentMistake ? createReviewItem(currentMistake) : null;
  const rule = currentMistake ? getRuleById(currentMistake.ruleId) : null;

  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === reviewItem?.correctAnswer;
    const quality = isCorrect ? 4 : 1; // SM-2 quality rating
    const updates = calculateNextReview(currentMistake, quality);
    updateMistake(currentMistake.id, updates);

    const today = getTodayStats();
    updateTodayStats({
      reviewsDone: today.reviewsDone + 1,
      reviewsCorrect: today.reviewsCorrect + (isCorrect ? 1 : 0),
    });

    setSessionStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    recordPractice();
  }, [showResult, reviewItem, currentMistake]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= dueItems.length) {
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex, dueItems.length]);

  if (isComplete) {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h1 className="text-2xl font-bold mb-2">
          {dueItems.length === 0 ? 'No reviews due' : 'Session complete!'}
        </h1>
        {dueItems.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">{sessionStats.correct}</div>
                <div className="text-sm text-muted-fg">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-error">{sessionStats.incorrect}</div>
                <div className="text-sm text-muted-fg">Incorrect</div>
              </div>
            </div>
            <p className="text-muted-fg text-sm mt-4">
              {sessionStats.correct > sessionStats.incorrect
                ? 'Great job! Keep it up.'
                : "Keep practicing! You'll get there."}
            </p>
          </div>
        )}
        {dueItems.length === 0 && (
          <p className="text-muted-fg">Check back later or use the Checker to add more items.</p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-sm text-muted-fg">
          {currentIndex + 1} / {dueItems.length}
        </div>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / dueItems.length) * 100}%` }}
          />
        </div>
      </div>

      <h1 className="text-xl font-bold mb-6">Review</h1>

      {reviewItem && (
        <div className="bg-card border border-card-border rounded-xl p-6">
          {/* Category badge */}
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
            {currentMistake.category}
          </span>

          {/* Question */}
          <div className="mt-4 mb-6">
            <p className="text-sm text-muted-fg mb-2">Which is correct?</p>
            <div className="text-lg">
              <span className="line-through text-error/60">{reviewItem.prompt}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {reviewItem.options.map((option, i) => {
              let style = 'border-card-border hover:border-accent hover:bg-accent/5';
              if (showResult) {
                if (option === reviewItem.correctAnswer) {
                  style = 'border-success bg-success-bg';
                } else if (option === selectedAnswer && option !== reviewItem.correctAnswer) {
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
          {showResult && rule && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">
                {selectedAnswer === reviewItem.correctAnswer ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-sm text-muted-fg">{rule.explanation}</p>
              {rule.examples.length > 0 && (
                <div className="mt-2 text-xs text-muted-fg">
                  <span className="line-through">{rule.examples[0].wrong}</span>
                  <span className="mx-1">&rarr;</span>
                  <span className="text-success">{rule.examples[0].right}</span>
                </div>
              )}
            </div>
          )}

          {/* Next button */}
          {showResult && (
            <button
              onClick={handleNext}
              className="w-full mt-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover"
            >
              {currentIndex + 1 >= dueItems.length ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
