export interface GrammarRule {
  id: string;
  pattern: RegExp;
  category: 'article' | 'preposition' | 'countable' | 'expression' | 'common';
  errorType: string;
  correction: (match: string) => string;
  explanation: string;
  examples: { wrong: string; right: string }[];
  difficulty: 1 | 2 | 3;
}

export interface Mistake {
  id: string;
  original: string;
  corrected: string;
  context: string;
  ruleId: string;
  category: string;
  timestamp: number;
  reviewCount: number;
  correctStreak: number;
  nextReview: number;
  easeFactor: number;
  interval: number;
  mastered: boolean;
}

export interface ReviewItem {
  mistake: Mistake;
  options: string[];
  correctAnswer: string;
  prompt: string;
  blank: string;
}

export interface DailyStats {
  date: string;
  errorsFound: number;
  wordsChecked: number;
  reviewsDone: number;
  reviewsCorrect: number;
}

export interface CategoryStats {
  category: string;
  total: number;
  mastered: number;
  accuracy: number;
}
