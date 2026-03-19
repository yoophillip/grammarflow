import { grammarRules } from './rules';

export interface GrammarError {
  ruleId: string;
  category: string;
  start: number;
  end: number;
  original: string;
  correction: string;
  explanation: string;
  errorType: string;
}

/**
 * Check text for grammar errors using the rule engine.
 * Returns all found errors with positions.
 */
export function checkGrammar(text: string): GrammarError[] {
  const errors: GrammarError[] = [];
  const usedRanges: [number, number][] = [];

  for (const rule of grammarRules) {
    // Reset regex lastIndex for global patterns
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;

      // Skip if overlapping with an existing error
      const overlaps = usedRanges.some(
        ([s, e]) => start < e && end > s
      );
      if (overlaps) continue;

      const correction = rule.correction(match[0]);

      errors.push({
        ruleId: rule.id,
        category: rule.category,
        start,
        end,
        original: match[0],
        correction,
        explanation: rule.explanation,
        errorType: rule.errorType,
      });

      usedRanges.push([start, end]);

      // For non-global regex, break after first match
      if (!rule.pattern.global && !rule.pattern.flags.includes('g')) break;
    }
  }

  // Sort by position
  errors.sort((a, b) => a.start - b.start);
  return errors;
}

/**
 * Apply a correction to text
 */
export function applyCorrection(
  text: string,
  error: GrammarError
): string {
  return text.slice(0, error.start) + error.correction + text.slice(error.end);
}

/**
 * Count words in text
 */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
