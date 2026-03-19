'use client';

// Silver Tongue local storage helpers

const ST_PREFIX = 'st_';

// Grammar drills accuracy per category
export function getGrammarAccuracy(): Record<string, { correct: number; total: number }> {
  if (typeof window === 'undefined') return {};
  const data = localStorage.getItem(`${ST_PREFIX}grammar_accuracy`);
  return data ? JSON.parse(data) : {};
}

export function updateGrammarAccuracy(category: string, isCorrect: boolean) {
  const acc = getGrammarAccuracy();
  if (!acc[category]) acc[category] = { correct: 0, total: 0 };
  acc[category].total += 1;
  if (isCorrect) acc[category].correct += 1;
  localStorage.setItem(`${ST_PREFIX}grammar_accuracy`, JSON.stringify(acc));
}

// Module completion tracking
export function getModuleStats(): Record<string, { completed: number; totalScore: number }> {
  if (typeof window === 'undefined') return {};
  const data = localStorage.getItem(`${ST_PREFIX}module_stats`);
  return data ? JSON.parse(data) : {};
}

export function updateModuleStats(module: string, score: number) {
  const stats = getModuleStats();
  if (!stats[module]) stats[module] = { completed: 0, totalScore: 0 };
  stats[module].completed += 1;
  stats[module].totalScore += score;
  localStorage.setItem(`${ST_PREFIX}module_stats`, JSON.stringify(stats));
}

// Self-eval scores over time
export interface SelfEvalEntry {
  date: string;
  module: string;
  score: number;
  maxScore: number;
}

export function getSelfEvals(): SelfEvalEntry[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(`${ST_PREFIX}self_evals`);
  return data ? JSON.parse(data) : [];
}

export function addSelfEval(entry: SelfEvalEntry) {
  const evals = getSelfEvals();
  evals.push(entry);
  localStorage.setItem(`${ST_PREFIX}self_evals`, JSON.stringify(evals));
}

// Streak tracking
export function getSTStreak(): number {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem(`${ST_PREFIX}streak`) || '0', 10);
}

export function getSTLastPractice(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(`${ST_PREFIX}last_practice`);
}

export function recordSTPractice() {
  const today = new Date().toISOString().split('T')[0];
  const last = getSTLastPractice();
  if (last === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const current = getSTStreak();
  if (last === yesterday) {
    localStorage.setItem(`${ST_PREFIX}streak`, String(current + 1));
  } else {
    localStorage.setItem(`${ST_PREFIX}streak`, '1');
  }
  localStorage.setItem(`${ST_PREFIX}last_practice`, today);
}

// Quick fire high scores
export function getQuickFireScores(): { score: number; date: string }[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(`${ST_PREFIX}quickfire_scores`);
  return data ? JSON.parse(data) : [];
}

export function addQuickFireScore(score: number) {
  const scores = getQuickFireScores();
  scores.push({ score, date: new Date().toISOString().split('T')[0] });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem(`${ST_PREFIX}quickfire_scores`, JSON.stringify(scores.slice(0, 20)));
}
