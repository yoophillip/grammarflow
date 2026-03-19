import { Mistake } from './types';

/**
 * SM-2 Spaced Repetition Algorithm
 * Based on SuperMemo 2 with modifications for grammar learning
 */

export function calculateNextReview(
  mistake: Mistake,
  quality: number // 0-5 scale: 0=complete blackout, 5=perfect
): Partial<Mistake> {
  let { easeFactor, interval, correctStreak, reviewCount } = mistake;

  reviewCount += 1;

  if (quality >= 3) {
    // Correct response
    correctStreak += 1;

    if (correctStreak === 1) {
      interval = 1; // 1 day
    } else if (correctStreak === 2) {
      interval = 3; // 3 days
    } else if (correctStreak === 3) {
      interval = 7; // 7 days
    } else if (correctStreak === 4) {
      interval = 14; // 14 days
    } else {
      interval = Math.round(interval * easeFactor);
    }

    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;
  } else {
    // Incorrect response — reset
    correctStreak = 0;
    interval = 1; // Reset to 1 day
    // Decrease ease factor
    easeFactor = Math.max(1.3, easeFactor - 0.2);
  }

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;
  const mastered = correctStreak >= 5;

  return {
    easeFactor,
    interval,
    correctStreak,
    reviewCount,
    nextReview,
    mastered,
  };
}

/**
 * Create a review item from a mistake
 */
export function createReviewItem(mistake: Mistake) {
  const original = mistake.original;
  const corrected = mistake.corrected;

  // Create a fill-in-the-blank by finding the difference
  const prompt = original;
  const blank = corrected;

  // Generate distractors
  const options = generateOptions(mistake);

  return {
    mistake,
    prompt,
    blank,
    options,
    correctAnswer: corrected,
  };
}

function generateOptions(mistake: Mistake): string[] {
  const options = [mistake.corrected];

  // Add the original wrong version
  if (mistake.original !== mistake.corrected) {
    options.push(mistake.original);
  }

  // Add category-specific distractors
  if (mistake.category === 'article') {
    const articles = ['a', 'an', 'the', '(no article)'];
    for (const art of articles) {
      if (options.length >= 4) break;
      if (!options.includes(art)) {
        options.push(art);
      }
    }
  } else if (mistake.category === 'preposition') {
    const preps = ['in', 'on', 'at', 'for', 'to', 'by', 'with'];
    for (const prep of preps) {
      if (options.length >= 4) break;
      if (!options.some((o) => o.toLowerCase().includes(prep))) {
        options.push(prep);
      }
    }
  }

  // Pad with generic wrong options if needed
  while (options.length < 4) {
    options.push(`Option ${options.length + 1}`);
  }

  // Shuffle
  return options.slice(0, 4).sort(() => Math.random() - 0.5);
}
