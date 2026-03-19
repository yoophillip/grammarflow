import { grammarRules } from './rules';
import { getMistakes } from './storage';

export interface PracticeQuestion {
  id: string;
  ruleId: string;
  category: string;
  sentence: string;
  blank: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Pre-built practice sentences organized by rule patterns
const practiceTemplates: {
  ruleId: string;
  sentences: { text: string; blank: string; correct: string; distractors: string[] }[];
}[] = [
  {
    ruleId: 'prep-on-a-standby',
    sentences: [
      { text: "I'm ___ for the flight.", blank: '___', correct: 'on standby', distractors: ['on a standby', 'in standby', 'at standby'] },
      { text: 'The crew is ___ until further notice.', blank: '___', correct: 'on standby', distractors: ['on a standby', 'in a standby', 'at standby'] },
      { text: 'The backup generator is ___.', blank: '___', correct: 'on standby', distractors: ['on a standby', 'in standby', 'at a standby'] },
    ],
  },
  {
    ruleId: 'art-the-bonus-nba',
    sentences: [
      { text: 'The Lakers are ___ now.', blank: '___', correct: 'in the bonus', distractors: ['in bonus', 'on the bonus', 'at the bonus'] },
      { text: 'Once they are ___, every foul means free throws.', blank: '___', correct: 'in the bonus', distractors: ['in bonus', 'on bonus', 'in a bonus'] },
      { text: "We're ___ with 3 minutes left.", blank: '___', correct: 'in the bonus', distractors: ['in bonus', 'on the bonus', 'at bonus'] },
    ],
  },
  {
    ruleId: 'art-uncountable-advice',
    sentences: [
      { text: 'I need ___ about this situation.', blank: '___', correct: 'advice', distractors: ['an advice', 'a advice', 'advices'] },
      { text: 'Can you give me some ___?', blank: '___', correct: 'advice', distractors: ['advices', 'an advice', 'a advice'] },
      { text: 'She gave me good ___.', blank: '___', correct: 'advice', distractors: ['advices', 'an advice', 'a good advice'] },
    ],
  },
  {
    ruleId: 'art-uncountable-music',
    sentences: [
      { text: "I'm creating ___ for the video.", blank: '___', correct: 'music', distractors: ['a music', 'musics', 'the musics'] },
      { text: 'He listens to ___ every day.', blank: '___', correct: 'music', distractors: ['a music', 'musics', 'the musics'] },
    ],
  },
  {
    ruleId: 'art-uncountable-information',
    sentences: [
      { text: 'I have ___ about the project.', blank: '___', correct: 'information', distractors: ['an information', 'informations', 'a information'] },
      { text: 'Do you have any ___ on this?', blank: '___', correct: 'information', distractors: ['informations', 'an information', 'a information'] },
    ],
  },
  {
    ruleId: 'expr-safe-travels',
    sentences: [
      { text: '___! See you when you get back.', blank: '___', correct: 'Safe travels', distractors: ['Safe travel', 'Safe travelling', 'Safe trip'] },
      { text: 'Have ___!', blank: '___', correct: 'safe travels', distractors: ['safe travel', 'a safe travel', 'safe travelling'] },
    ],
  },
  {
    ruleId: 'expr-watch-your-step',
    sentences: [
      { text: 'Be careful! ___ on the stairs.', blank: '___', correct: 'Watch your step', distractors: ['Watch your steps', 'Watch the step', 'Watch your stepping'] },
    ],
  },
  {
    ruleId: 'expr-stand-ground',
    sentences: [
      { text: 'The team is ___ despite the pressure.', blank: '___', correct: 'standing their ground', distractors: ['standing their grounds', 'standing the ground', 'standing on their ground'] },
    ],
  },
  {
    ruleId: 'expr-conflict-of-interest',
    sentences: [
      { text: "There's a clear ___ here.", blank: '___', correct: 'conflict of interest', distractors: ['conflict of interests', 'conflicts of interests', 'conflicts of interest'] },
    ],
  },
  {
    ruleId: 'expr-both-sides',
    sentences: [
      { text: '___ are playing aggressively tonight.', blank: '___', correct: 'Both sides', distractors: ['Both side', 'The both sides', 'Both of side'] },
      { text: '___ made strong arguments.', blank: '___', correct: 'Both sides', distractors: ['Both side', 'Both of side', 'Each sides'] },
    ],
  },
  {
    ruleId: 'art-the-bronx',
    sentences: [
      { text: 'I grew up in ___.', blank: '___', correct: 'the Bronx', distractors: ['Bronx', 'a Bronx', 'at Bronx'] },
      { text: "Let's go to ___ this weekend.", blank: '___', correct: 'the Bronx', distractors: ['Bronx', 'a Bronx', 'in Bronx'] },
    ],
  },
  {
    ruleId: 'count-deers',
    sentences: [
      { text: 'We saw three ___ in the forest.', blank: '___', correct: 'deer', distractors: ['deers', 'deeres', 'a deer'] },
    ],
  },
  {
    ruleId: 'prep-in-line',
    sentences: [
      { text: 'I was waiting ___ for 30 minutes.', blank: '___', correct: 'in line', distractors: ['on line', 'at line', 'on the line'] },
      { text: 'We stood ___ at the grocery store.', blank: '___', correct: 'in line', distractors: ['on line', 'at line', 'in a line'] },
    ],
  },
  {
    ruleId: 'prep-arrive-at',
    sentences: [
      { text: 'I arrived ___ the airport at 6 AM.', blank: '___', correct: 'at', distractors: ['to', 'in', 'on'] },
    ],
  },
  {
    ruleId: 'prep-depend-on',
    sentences: [
      { text: 'It depends ___ the weather.', blank: '___', correct: 'on', distractors: ['of', 'from', 'in'] },
    ],
  },
  {
    ruleId: 'prep-good-at',
    sentences: [
      { text: "He's really good ___ basketball.", blank: '___', correct: 'at', distractors: ['in', 'on', 'for'] },
    ],
  },
  {
    ruleId: 'expr-looking-forward-to',
    sentences: [
      { text: "I'm looking forward ___ the meeting.", blank: '___', correct: 'to', distractors: ['for', 'at', 'in'] },
    ],
  },
  {
    ruleId: 'expr-less-fewer',
    sentences: [
      { text: 'There were ___ people at the game today.', blank: '___', correct: 'fewer', distractors: ['less', 'lesser', 'a fewer'] },
    ],
  },
  {
    ruleId: 'prep-on-hold',
    sentences: [
      { text: "I've been ___ for 20 minutes.", blank: '___', correct: 'on hold', distractors: ['on a hold', 'in hold', 'at hold'] },
    ],
  },
  {
    ruleId: 'prep-on-duty',
    sentences: [
      { text: 'The doctor is ___ tonight.', blank: '___', correct: 'on duty', distractors: ['on a duty', 'in duty', 'at duty'] },
    ],
  },
  {
    ruleId: 'expr-make-sense',
    sentences: [
      { text: "That doesn't ___ to me.", blank: '___', correct: 'make sense', distractors: ['make a sense', 'makes sense', 'make the sense'] },
    ],
  },
  {
    ruleId: 'expr-pay-attention',
    sentences: [
      { text: 'You should ___ to the teacher.', blank: '___', correct: 'pay attention', distractors: ['pay an attention', 'pay the attention', 'pay a attention'] },
    ],
  },
  {
    ruleId: 'expr-congratulations',
    sentences: [
      { text: '___ on your new job!', blank: '___', correct: 'Congratulations', distractors: ['Congratulation', 'Congratulate', 'Congrats'] },
    ],
  },
];

export function generatePracticeQuestions(count: number = 10): PracticeQuestion[] {
  const mistakes = getMistakes();
  const questions: PracticeQuestion[] = [];

  // Prioritize rules where user has made mistakes
  const mistakeRuleIds = [...new Set(mistakes.map((m) => m.ruleId))];
  const weakRuleIds = mistakes
    .filter((m) => !m.mastered && m.correctStreak < 3)
    .map((m) => m.ruleId);

  // First, add questions from weak areas
  for (const ruleId of weakRuleIds) {
    const template = practiceTemplates.find((t) => t.ruleId === ruleId);
    if (template) {
      const sentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
      const rule = grammarRules.find((r) => r.id === ruleId);
      if (rule) {
        questions.push({
          id: `practice_${Date.now()}_${Math.random().toString(36).slice(2)}`,
          ruleId,
          category: rule.category,
          sentence: sentence.text,
          blank: sentence.blank,
          options: shuffleArray([sentence.correct, ...sentence.distractors]),
          correctAnswer: sentence.correct,
          explanation: rule.explanation,
        });
      }
    }
    if (questions.length >= count) break;
  }

  // Then add from other mistake patterns
  for (const ruleId of mistakeRuleIds) {
    if (questions.length >= count) break;
    if (weakRuleIds.includes(ruleId)) continue;
    const template = practiceTemplates.find((t) => t.ruleId === ruleId);
    if (template) {
      const sentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
      const rule = grammarRules.find((r) => r.id === ruleId);
      if (rule) {
        questions.push({
          id: `practice_${Date.now()}_${Math.random().toString(36).slice(2)}`,
          ruleId,
          category: rule.category,
          sentence: sentence.text,
          blank: sentence.blank,
          options: shuffleArray([sentence.correct, ...sentence.distractors]),
          correctAnswer: sentence.correct,
          explanation: rule.explanation,
        });
      }
    }
  }

  // Fill remaining with random questions
  const usedRuleIds = new Set(questions.map((q) => q.ruleId));
  const remaining = practiceTemplates.filter((t) => !usedRuleIds.has(t.ruleId));
  const shuffled = shuffleArray(remaining);

  for (const template of shuffled) {
    if (questions.length >= count) break;
    const sentence = template.sentences[Math.floor(Math.random() * template.sentences.length)];
    const rule = grammarRules.find((r) => r.id === template.ruleId);
    if (rule) {
      questions.push({
        id: `practice_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        ruleId: template.ruleId,
        category: rule.category,
        sentence: sentence.text,
        blank: sentence.blank,
        options: shuffleArray([sentence.correct, ...sentence.distractors]),
        correctAnswer: sentence.correct,
        explanation: rule.explanation,
      });
    }
  }

  return shuffleArray(questions).slice(0, count);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
