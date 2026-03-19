'use client';

import { Mistake, DailyStats } from './types';

const MISTAKES_KEY = 'grammar_mistakes';
const STATS_KEY = 'grammar_daily_stats';
const STREAK_KEY = 'grammar_streak';
const LAST_PRACTICE_KEY = 'grammar_last_practice';

// Mistakes
export function getMistakes(): Mistake[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(MISTAKES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveMistakes(mistakes: Mistake[]) {
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
}

export function addMistake(mistake: Mistake) {
  const mistakes = getMistakes();
  // Check if same rule was triggered on same original text recently
  const existing = mistakes.find(
    (m) => m.ruleId === mistake.ruleId && m.original === mistake.original
  );
  if (existing) return; // Don't duplicate
  mistakes.push(mistake);
  saveMistakes(mistakes);
}

export function updateMistake(id: string, updates: Partial<Mistake>) {
  const mistakes = getMistakes();
  const idx = mistakes.findIndex((m) => m.id === id);
  if (idx !== -1) {
    mistakes[idx] = { ...mistakes[idx], ...updates };
    saveMistakes(mistakes);
  }
}

// Daily stats
export function getDailyStats(): DailyStats[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STATS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getTodayStats(): DailyStats {
  const today = new Date().toISOString().split('T')[0];
  const stats = getDailyStats();
  const existing = stats.find((s) => s.date === today);
  return existing || { date: today, errorsFound: 0, wordsChecked: 0, reviewsDone: 0, reviewsCorrect: 0 };
}

export function updateTodayStats(updates: Partial<DailyStats>) {
  const today = new Date().toISOString().split('T')[0];
  const stats = getDailyStats();
  const idx = stats.findIndex((s) => s.date === today);
  if (idx !== -1) {
    stats[idx] = { ...stats[idx], ...updates };
  } else {
    stats.push({ date: today, errorsFound: 0, wordsChecked: 0, reviewsDone: 0, reviewsCorrect: 0, ...updates });
  }
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

// Streak
export function getStreak(): number {
  if (typeof window === 'undefined') return 0;
  const data = localStorage.getItem(STREAK_KEY);
  return data ? parseInt(data, 10) : 0;
}

export function getLastPracticeDate(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(LAST_PRACTICE_KEY);
}

export function recordPractice() {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = getLastPracticeDate();

  if (lastDate === today) return; // Already practiced today

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const currentStreak = getStreak();

  if (lastDate === yesterday) {
    localStorage.setItem(STREAK_KEY, String(currentStreak + 1));
  } else if (lastDate !== today) {
    localStorage.setItem(STREAK_KEY, '1');
  }

  localStorage.setItem(LAST_PRACTICE_KEY, today);
}

// Get mistakes due for review
export function getDueReviews(): Mistake[] {
  const now = Date.now();
  return getMistakes().filter((m) => !m.mastered && m.nextReview <= now);
}

// Get category stats
export function getCategoryStats() {
  const mistakes = getMistakes();
  const categories = ['article', 'preposition', 'countable', 'expression'];

  return categories.map((cat) => {
    const catMistakes = mistakes.filter((m) => m.category === cat);
    const mastered = catMistakes.filter((m) => m.mastered).length;
    const totalReviews = catMistakes.reduce((sum, m) => sum + m.reviewCount, 0);
    const correctReviews = catMistakes.reduce((sum, m) => sum + m.correctStreak, 0);
    const accuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0;

    return {
      category: cat,
      total: catMistakes.length,
      mastered,
      accuracy: Math.min(accuracy, 100),
    };
  });
}
