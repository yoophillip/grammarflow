import { GrammarRule } from './types';

// Helper to create word boundary pattern
const wb = (pattern: string) => new RegExp(`\\b${pattern}\\b`, 'gi');
const wbi = (pattern: string) => new RegExp(`\\b${pattern}\\b`, 'i');

export const grammarRules: GrammarRule[] = [
  // ============================================================
  // ARTICLES — Uncountable nouns that shouldn't have "a/an"
  // ============================================================
  {
    id: 'art-uncountable-advice',
    pattern: wb('an?\\s+advice'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'advice',
    explanation: '"Advice" is uncountable. You can say "a piece of advice" but not "an advice" or "a advice".',
    examples: [
      { wrong: 'Can you give me an advice?', right: 'Can you give me advice?' },
      { wrong: 'I need a advice.', right: 'I need advice.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-information',
    pattern: wb('an?\\s+information'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'information',
    explanation: '"Information" is uncountable. Say "a piece of information" instead of "an information".',
    examples: [
      { wrong: 'I have an information.', right: 'I have information.' },
      { wrong: 'Give me a information.', right: 'Give me information.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-music',
    pattern: wb('a\\s+music'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'music',
    explanation: '"Music" is uncountable. You can say "a piece of music" or "a song", but not "a music".',
    examples: [
      { wrong: "I'm creating a music.", right: "I'm creating music." },
      { wrong: 'She played a music.', right: 'She played music.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-furniture',
    pattern: wb('a\\s+furniture'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'furniture',
    explanation: '"Furniture" is uncountable. Say "a piece of furniture" instead.',
    examples: [
      { wrong: 'I bought a furniture.', right: 'I bought furniture.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-luggage',
    pattern: wb('a\\s+luggage'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'luggage',
    explanation: '"Luggage" is uncountable. Say "a piece of luggage" instead.',
    examples: [
      { wrong: 'I have a luggage.', right: 'I have luggage.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-homework',
    pattern: wb('a\\s+homework'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'homework',
    explanation: '"Homework" is uncountable. Say "a homework assignment" instead.',
    examples: [
      { wrong: 'I have a homework.', right: 'I have homework.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-research',
    pattern: wb('a\\s+research'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'research',
    explanation: '"Research" is uncountable. Say "a research project" or "a study" instead.',
    examples: [
      { wrong: 'I did a research.', right: 'I did research.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-progress',
    pattern: wb('a\\s+progress'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'progress',
    explanation: '"Progress" is uncountable. You cannot say "a progress".',
    examples: [
      { wrong: "We made a progress.", right: 'We made progress.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-traffic',
    pattern: wb('a\\s+traffic'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'traffic',
    explanation: '"Traffic" is uncountable. You cannot say "a traffic".',
    examples: [
      { wrong: 'There was a traffic.', right: 'There was traffic.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-equipment',
    pattern: wb('an?\\s+equipment'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'equipment',
    explanation: '"Equipment" is uncountable. Say "a piece of equipment" instead.',
    examples: [
      { wrong: 'We need an equipment.', right: 'We need equipment.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-knowledge',
    pattern: wb('a\\s+knowledge'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'knowledge',
    explanation: '"Knowledge" is uncountable. You cannot say "a knowledge".',
    examples: [
      { wrong: 'He has a knowledge.', right: 'He has knowledge.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-evidence',
    pattern: wb('an?\\s+evidence'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'evidence',
    explanation: '"Evidence" is uncountable. Say "a piece of evidence" instead.',
    examples: [
      { wrong: 'There is an evidence.', right: 'There is evidence.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-vocabulary',
    pattern: wb('a\\s+vocabulary'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'vocabulary',
    explanation: '"Vocabulary" is generally uncountable. You cannot say "a vocabulary" in most contexts.',
    examples: [
      { wrong: 'I learned a vocabulary.', right: 'I learned vocabulary.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-uncountable-patience',
    pattern: wb('a\\s+patience'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'patience',
    explanation: '"Patience" is uncountable.',
    examples: [
      { wrong: 'Have a patience.', right: 'Have patience.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-work',
    pattern: wb('a\\s+work(?!\\s+(?:of|out|around|place|shop|day|force|flow|load|space|station|book|er))'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'work',
    explanation: '"Work" (meaning labor) is uncountable. Say "a job" or "a task" instead.',
    examples: [
      { wrong: 'I have a work to do.', right: 'I have work to do.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-uncountable-labor',
    pattern: wb('a\\s+labor(?!\\s+(?:of|day|union|force|market))'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'labor',
    explanation: '"Labor" (meaning work) is uncountable.',
    examples: [
      { wrong: 'It requires a labor.', right: 'It requires labor.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-uncountable-feedback',
    pattern: wb('a\\s+feedback'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'feedback',
    explanation: '"Feedback" is uncountable. Say "a piece of feedback" instead.',
    examples: [
      { wrong: 'Give me a feedback.', right: 'Give me feedback.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-baggage',
    pattern: wb('a\\s+baggage'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'baggage',
    explanation: '"Baggage" is uncountable.',
    examples: [
      { wrong: 'I have a baggage.', right: 'I have baggage.' },
    ],
    difficulty: 1,
  },
  {
    id: 'art-uncountable-mail',
    pattern: wb('a\\s+mail(?!\\s*(?:box|man|room))'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'mail',
    explanation: '"Mail" is uncountable. Say "a letter", "an email", or "a piece of mail".',
    examples: [
      { wrong: 'I got a mail.', right: 'I got mail.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-uncountable-chaos',
    pattern: wb('a\\s+chaos'),
    category: 'article',
    errorType: 'Unnecessary article with uncountable noun',
    correction: () => 'chaos',
    explanation: '"Chaos" is uncountable.',
    examples: [
      { wrong: 'It was a chaos.', right: 'It was chaos.' },
    ],
    difficulty: 1,
  },

  // ============================================================
  // ARTICLES — Missing "the" with specific nouns
  // ============================================================
  {
    id: 'art-the-bronx',
    pattern: wb('(?:to|in|from|visit)\\s+Bronx'),
    category: 'article',
    errorType: 'Missing "the" before Bronx',
    correction: (m) => m.replace(/Bronx/i, 'the Bronx'),
    explanation: '"The Bronx" always requires "the". It\'s one of few place names that requires the article.',
    examples: [
      { wrong: 'I go to Bronx.', right: 'I go to the Bronx.' },
      { wrong: 'He lives in Bronx.', right: 'He lives in the Bronx.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-the-bonus-nba',
    pattern: wb('in\\s+bonus'),
    category: 'article',
    errorType: 'Missing "the" — "in the bonus"',
    correction: () => 'in the bonus',
    explanation: 'In basketball, the correct phrase is "in the bonus" (with "the"), meaning the team gets free throws on every foul.',
    examples: [
      { wrong: 'The team is in bonus.', right: 'The team is in the bonus.' },
      { wrong: "They're in bonus now.", right: "They're in the bonus now." },
    ],
    difficulty: 2,
  },
  {
    id: 'art-the-netherlands',
    pattern: wb('(?:to|in|from|visit)\\s+Netherlands'),
    category: 'article',
    errorType: 'Missing "the" before Netherlands',
    correction: (m) => m.replace(/Netherlands/i, 'the Netherlands'),
    explanation: '"The Netherlands" always requires "the".',
    examples: [
      { wrong: 'I traveled to Netherlands.', right: 'I traveled to the Netherlands.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-the-philippines',
    pattern: wb('(?:to|in|from|visit)\\s+Philippines'),
    category: 'article',
    errorType: 'Missing "the" before Philippines',
    correction: (m) => m.replace(/Philippines/i, 'the Philippines'),
    explanation: '"The Philippines" always requires "the".',
    examples: [
      { wrong: 'She went to Philippines.', right: 'She went to the Philippines.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-the-uk',
    pattern: wb('(?:to|in|from|visit)\\s+(?:UK|United Kingdom)(?!\\s)'),
    category: 'article',
    errorType: 'Missing "the" before UK',
    correction: (m) => m.replace(/(UK|United Kingdom)/i, 'the $1'),
    explanation: '"The UK" / "The United Kingdom" always requires "the".',
    examples: [
      { wrong: 'He moved to UK.', right: 'He moved to the UK.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-unnecessary-the-life',
    pattern: wb('the\\s+life\\s+is'),
    category: 'article',
    errorType: 'Unnecessary "the" with general concept',
    correction: () => 'life is',
    explanation: 'When talking about life in general, no article is needed. "Life is beautiful" (not "The life is beautiful").',
    examples: [
      { wrong: 'The life is short.', right: 'Life is short.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-unnecessary-the-love',
    pattern: wb('the\\s+love\\s+is'),
    category: 'article',
    errorType: 'Unnecessary "the" with general concept',
    correction: () => 'love is',
    explanation: 'When talking about love in general, no article is needed.',
    examples: [
      { wrong: 'The love is important.', right: 'Love is important.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-unnecessary-the-nature',
    pattern: wb('the\\s+nature\\s+is'),
    category: 'article',
    errorType: 'Unnecessary "the" with general concept',
    correction: () => 'nature is',
    explanation: 'When talking about nature in general, no article is needed.',
    examples: [
      { wrong: 'The nature is beautiful.', right: 'Nature is beautiful.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-unnecessary-the-society',
    pattern: wb('the\\s+society\\s+(?:is|has|needs|should)'),
    category: 'article',
    errorType: 'Unnecessary "the" with general concept',
    correction: (m) => m.replace(/the\s+society/i, 'society'),
    explanation: 'When talking about society in general, no article is needed.',
    examples: [
      { wrong: 'The society is changing.', right: 'Society is changing.' },
    ],
    difficulty: 2,
  },
  {
    id: 'art-go-to-hospital',
    pattern: wb('go\\s+to\\s+a\\s+hospital'),
    category: 'article',
    errorType: 'Wrong article with institution',
    correction: () => 'go to the hospital',
    explanation: 'In American English, say "go to the hospital" (specific institution), not "go to a hospital".',
    examples: [
      { wrong: 'I need to go to a hospital.', right: 'I need to go to the hospital.' },
    ],
    difficulty: 2,
  },

  // ============================================================
  // PREPOSITIONS
  // ============================================================
  {
    id: 'prep-on-a-standby',
    pattern: wb('on\\s+a\\s+standby'),
    category: 'preposition',
    errorType: 'Wrong: "on a standby" → "on standby"',
    correction: () => 'on standby',
    explanation: '"On standby" is a fixed expression. No article is used. Similar to "on hold", "on duty", "on alert".',
    examples: [
      { wrong: "I'm on a standby.", right: "I'm on standby." },
      { wrong: 'The team is on a standby.', right: 'The team is on standby.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-standby',
    pattern: wb('(?:in|at)\\s+(?:a\\s+)?standby'),
    category: 'preposition',
    errorType: 'Wrong preposition with "standby"',
    correction: () => 'on standby',
    explanation: 'The correct expression is "on standby" — not "in standby" or "at standby".',
    examples: [
      { wrong: "I'm in standby.", right: "I'm on standby." },
      { wrong: "I'm at standby.", right: "I'm on standby." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-hold',
    pattern: wb('(?:in|at)\\s+(?:a\\s+)?hold(?!\\s+of)'),
    category: 'preposition',
    errorType: 'Wrong preposition with "hold"',
    correction: () => 'on hold',
    explanation: '"On hold" is the correct fixed expression.',
    examples: [
      { wrong: "I'm in hold.", right: "I'm on hold." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-a-hold',
    pattern: wb('on\\s+a\\s+hold(?!\\s+of)'),
    category: 'preposition',
    errorType: 'No article with "on hold"',
    correction: () => 'on hold',
    explanation: '"On hold" is a fixed expression without an article.',
    examples: [
      { wrong: "I'm on a hold.", right: "I'm on hold." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-duty',
    pattern: wb('(?:in|at)\\s+(?:a\\s+)?duty'),
    category: 'preposition',
    errorType: 'Wrong preposition with "duty"',
    correction: () => 'on duty',
    explanation: '"On duty" is the correct fixed expression.',
    examples: [
      { wrong: 'He is in duty.', right: 'He is on duty.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-a-duty',
    pattern: wb('on\\s+a\\s+duty'),
    category: 'preposition',
    errorType: 'No article with "on duty"',
    correction: () => 'on duty',
    explanation: '"On duty" is a fixed expression without an article.',
    examples: [
      { wrong: "He's on a duty.", right: "He's on duty." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-alert',
    pattern: wb('(?:in|at)\\s+(?:a\\s+)?alert'),
    category: 'preposition',
    errorType: 'Wrong preposition with "alert"',
    correction: () => 'on alert',
    explanation: '"On alert" is the correct fixed expression.',
    examples: [
      { wrong: 'The city is in alert.', right: 'The city is on alert.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-a-alert',
    pattern: wb('on\\s+an?\\s+alert'),
    category: 'preposition',
    errorType: 'No article with "on alert"',
    correction: () => 'on alert',
    explanation: '"On alert" is a fixed expression without an article.',
    examples: [
      { wrong: 'The city is on an alert.', right: 'The city is on alert.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-in-line',
    pattern: wb('(?:wait|waiting|stood|standing|stand|get|got)\\s+on\\s+line'),
    category: 'preposition',
    errorType: '"on line" → "in line" (standard American English)',
    correction: (m) => m.replace(/on\s+line/i, 'in line'),
    explanation: '"In line" is standard American English. "On line" is only used in NYC dialect.',
    examples: [
      { wrong: 'I was waiting on line.', right: 'I was waiting in line.' },
      { wrong: 'We stood on line for hours.', right: 'We stood in line for hours.' },
    ],
    difficulty: 2,
  },
  {
    id: 'prep-arrive-at',
    pattern: wb('arrive\\s+to\\s+(?:the\\s+)?(?:airport|station|office|hotel|restaurant|hospital|school|church)'),
    category: 'preposition',
    errorType: '"arrive to" → "arrive at"',
    correction: (m) => m.replace(/arrive\s+to/i, 'arrive at'),
    explanation: 'Use "arrive at" for specific locations. "Arrive to" is not standard English.',
    examples: [
      { wrong: 'I arrived to the airport.', right: 'I arrived at the airport.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-arrive-in',
    pattern: wb('arrive\\s+to\\s+(?:the\\s+)?(?:New York|London|Paris|Tokyo|Korea|Japan|France|America|USA)'),
    category: 'preposition',
    errorType: '"arrive to [city/country]" → "arrive in"',
    correction: (m) => m.replace(/arrive\s+to/i, 'arrive in'),
    explanation: 'Use "arrive in" for cities and countries.',
    examples: [
      { wrong: 'I arrived to New York.', right: 'I arrived in New York.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-depend-on',
    pattern: wb('depends?\\s+of'),
    category: 'preposition',
    errorType: '"depend of" → "depend on"',
    correction: (m) => m.replace(/depends?\s+of/i, (match) => match.replace(/of/i, 'on')),
    explanation: 'The correct expression is "depend on" (not "depend of").',
    examples: [
      { wrong: 'It depends of the weather.', right: 'It depends on the weather.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-interested-in',
    pattern: wb('interested\\s+for'),
    category: 'preposition',
    errorType: '"interested for" → "interested in"',
    correction: () => 'interested in',
    explanation: 'The correct preposition is "interested in".',
    examples: [
      { wrong: "I'm interested for this job.", right: "I'm interested in this job." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-good-at',
    pattern: wb('good\\s+in\\s+(?:doing|playing|cooking|writing|reading|math|sports|basketball|soccer)'),
    category: 'preposition',
    errorType: '"good in" → "good at"',
    correction: (m) => m.replace(/good\s+in/i, 'good at'),
    explanation: 'Use "good at" for skills and activities.',
    examples: [
      { wrong: 'He is good in basketball.', right: 'He is good at basketball.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-married-to',
    pattern: wb('married\\s+with(?!\\s+(?:children|kids))'),
    category: 'preposition',
    errorType: '"married with" → "married to"',
    correction: (m) => m.replace(/married\s+with/i, 'married to'),
    explanation: 'Say "married to someone" (not "married with someone").',
    examples: [
      { wrong: 'She is married with him.', right: 'She is married to him.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-listen-to',
    pattern: wb('listen\\s+(?!to\\b)(?:the|a|this|that|some|my|his|her)'),
    category: 'preposition',
    errorType: 'Missing "to" after "listen"',
    correction: (m) => m.replace(/listen\s+/i, 'listen to '),
    explanation: '"Listen" requires "to" before its object.',
    examples: [
      { wrong: 'Listen the music.', right: 'Listen to the music.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-discuss-no-about',
    pattern: wb('discuss\\s+about'),
    category: 'preposition',
    errorType: '"discuss about" → "discuss"',
    correction: () => 'discuss',
    explanation: '"Discuss" is transitive — it directly takes an object without "about".',
    examples: [
      { wrong: "Let's discuss about the plan.", right: "Let's discuss the plan." },
    ],
    difficulty: 2,
  },
  {
    id: 'prep-explain-to-me',
    pattern: wb('explain\\s+me'),
    category: 'preposition',
    errorType: '"explain me" → "explain to me"',
    correction: () => 'explain to me',
    explanation: '"Explain" requires "to" before the indirect object.',
    examples: [
      { wrong: 'Can you explain me this?', right: 'Can you explain this to me?' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-on-the-weekend',
    pattern: wb('in\\s+the\\s+weekend'),
    category: 'preposition',
    errorType: '"in the weekend" → "on the weekend"',
    correction: () => 'on the weekend',
    explanation: 'In American English, say "on the weekend" (not "in the weekend").',
    examples: [
      { wrong: "I'll do it in the weekend.", right: "I'll do it on the weekend." },
    ],
    difficulty: 2,
  },
  {
    id: 'prep-at-night',
    pattern: wb('in\\s+the\\s+night(?!\\s+(?:of|before|after|when|that|time))'),
    category: 'preposition',
    errorType: '"in the night" → "at night"',
    correction: () => 'at night',
    explanation: 'Use "at night" (not "in the night") for general nighttime.',
    examples: [
      { wrong: 'I study in the night.', right: 'I study at night.' },
    ],
    difficulty: 2,
  },
  {
    id: 'prep-on-purpose',
    pattern: wb('by\\s+purpose'),
    category: 'preposition',
    errorType: '"by purpose" → "on purpose"',
    correction: () => 'on purpose',
    explanation: 'The fixed expression is "on purpose" (not "by purpose").',
    examples: [
      { wrong: 'He did it by purpose.', right: 'He did it on purpose.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-by-accident',
    pattern: wb('on\\s+accident'),
    category: 'preposition',
    errorType: '"on accident" → "by accident"',
    correction: () => 'by accident',
    explanation: 'The standard expression is "by accident" (not "on accident").',
    examples: [
      { wrong: 'I did it on accident.', right: 'I did it by accident.' },
    ],
    difficulty: 2,
  },
  {
    id: 'prep-in-the-morning',
    pattern: wb('at\\s+the\\s+morning'),
    category: 'preposition',
    errorType: '"at the morning" → "in the morning"',
    correction: () => 'in the morning',
    explanation: 'Use "in the morning/afternoon/evening" but "at night".',
    examples: [
      { wrong: 'I wake up at the morning.', right: 'I wake up in the morning.' },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-at-the-afternoon',
    pattern: wb('at\\s+the\\s+afternoon'),
    category: 'preposition',
    errorType: '"at the afternoon" → "in the afternoon"',
    correction: () => 'in the afternoon',
    explanation: 'Use "in the afternoon".',
    examples: [
      { wrong: "We'll meet at the afternoon.", right: "We'll meet in the afternoon." },
    ],
    difficulty: 1,
  },
  {
    id: 'prep-at-the-evening',
    pattern: wb('at\\s+the\\s+evening'),
    category: 'preposition',
    errorType: '"at the evening" → "in the evening"',
    correction: () => 'in the evening',
    explanation: 'Use "in the evening".',
    examples: [
      { wrong: 'I exercise at the evening.', right: 'I exercise in the evening.' },
    ],
    difficulty: 1,
  },

  // ============================================================
  // COUNTABLE/UNCOUNTABLE — Plural forms of uncountable nouns
  // ============================================================
  {
    id: 'count-informations',
    pattern: wb('informations'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'information',
    explanation: '"Information" is uncountable and has no plural form.',
    examples: [
      { wrong: 'I have informations about that.', right: 'I have information about that.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-advices',
    pattern: wb('advices'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'advice',
    explanation: '"Advice" is uncountable. Say "pieces of advice" for plural.',
    examples: [
      { wrong: 'He gave me many advices.', right: 'He gave me a lot of advice.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-musics',
    pattern: wb('musics'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'music',
    explanation: '"Music" is uncountable and has no plural form.',
    examples: [
      { wrong: 'I like all kinds of musics.', right: 'I like all kinds of music.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-furnitures',
    pattern: wb('furnitures'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'furniture',
    explanation: '"Furniture" is uncountable.',
    examples: [
      { wrong: 'We bought new furnitures.', right: 'We bought new furniture.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-luggages',
    pattern: wb('luggages'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'luggage',
    explanation: '"Luggage" is uncountable.',
    examples: [
      { wrong: 'I have three luggages.', right: 'I have three pieces of luggage.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-homeworks',
    pattern: wb('homeworks'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'homework',
    explanation: '"Homework" is uncountable.',
    examples: [
      { wrong: 'I have many homeworks.', right: 'I have a lot of homework.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-researches',
    pattern: wb('researches(?!\\s)'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'research',
    explanation: '"Research" is uncountable. Say "research studies" for plural.',
    examples: [
      { wrong: 'Many researches show this.', right: 'Much research shows this.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-progresses',
    pattern: wb('progresses'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'progress',
    explanation: '"Progress" is uncountable.',
    examples: [
      { wrong: 'We made great progresses.', right: 'We made great progress.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-equipments',
    pattern: wb('equipments'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'equipment',
    explanation: '"Equipment" is uncountable.',
    examples: [
      { wrong: 'We need new equipments.', right: 'We need new equipment.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-feedbacks',
    pattern: wb('feedbacks'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'feedback',
    explanation: '"Feedback" is uncountable.',
    examples: [
      { wrong: 'I got many feedbacks.', right: 'I got a lot of feedback.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-knowledges',
    pattern: wb('knowledges'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'knowledge',
    explanation: '"Knowledge" is uncountable.',
    examples: [
      { wrong: 'He has many knowledges.', right: 'He has a lot of knowledge.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-evidences',
    pattern: wb('evidences'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'evidence',
    explanation: '"Evidence" is uncountable.',
    examples: [
      { wrong: 'There are many evidences.', right: 'There is a lot of evidence.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-vocabularies',
    pattern: wb('vocabularies'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'vocabulary',
    explanation: '"Vocabulary" is generally uncountable.',
    examples: [
      { wrong: 'I learned new vocabularies.', right: 'I learned new vocabulary.' },
    ],
    difficulty: 2,
  },
  {
    id: 'count-deers',
    pattern: wb('deers'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'deer',
    explanation: '"Deer" has the same form for singular and plural (like "sheep", "fish").',
    examples: [
      { wrong: 'I bought three deers.', right: 'I saw three deer.' },
    ],
    difficulty: 2,
  },
  {
    id: 'count-sheeps',
    pattern: wb('sheeps'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'sheep',
    explanation: '"Sheep" has the same form for singular and plural.',
    examples: [
      { wrong: 'There are many sheeps.', right: 'There are many sheep.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-fishs',
    pattern: wb('fishs'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'fish',
    explanation: '"Fish" usually has the same form for singular and plural.',
    examples: [
      { wrong: 'I caught two fishs.', right: 'I caught two fish.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-peoples',
    pattern: wb('peoples(?!\\s+(?:of|from))'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'people',
    explanation: '"People" is already plural. "Peoples" only means different ethnic groups.',
    examples: [
      { wrong: 'Many peoples came.', right: 'Many people came.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-childs',
    pattern: wb('childs'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'children',
    explanation: 'The plural of "child" is "children" (not "childs").',
    examples: [
      { wrong: 'The childs are playing.', right: 'The children are playing.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-mouses',
    pattern: wb('mouses(?!\\s)'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'mice',
    explanation: 'The plural of "mouse" (animal) is "mice".',
    examples: [
      { wrong: 'I saw two mouses.', right: 'I saw two mice.' },
    ],
    difficulty: 2,
  },
  {
    id: 'count-criterias',
    pattern: wb('criterias'),
    category: 'countable',
    errorType: 'Irregular plural',
    correction: () => 'criteria',
    explanation: '"Criteria" is already plural (singular: "criterion").',
    examples: [
      { wrong: 'These criterias are important.', right: 'These criteria are important.' },
    ],
    difficulty: 2,
  },
  {
    id: 'count-datas',
    pattern: wb('datas'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'data',
    explanation: '"Data" is treated as uncountable in modern English.',
    examples: [
      { wrong: 'We analyzed the datas.', right: 'We analyzed the data.' },
    ],
    difficulty: 1,
  },
  {
    id: 'count-staffs-people',
    pattern: wb('staffs(?!\\s)'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'staff',
    explanation: '"Staff" (meaning employees) is usually uncountable. Use "staff members" for plural.',
    examples: [
      { wrong: 'The staffs are friendly.', right: 'The staff are friendly.' },
    ],
    difficulty: 2,
  },
  {
    id: 'count-traffics',
    pattern: wb('traffics'),
    category: 'countable',
    errorType: 'Uncountable noun used as plural',
    correction: () => 'traffic',
    explanation: '"Traffic" is uncountable.',
    examples: [
      { wrong: 'There are heavy traffics.', right: 'There is heavy traffic.' },
    ],
    difficulty: 1,
  },

  // ============================================================
  // FIXED EXPRESSIONS
  // ============================================================
  {
    id: 'expr-safe-travels',
    pattern: wbi('safe\\s+travel(?!s|ing|ed|er)\\b'),
    category: 'expression',
    errorType: '"safe travel" → "safe travels"',
    correction: () => 'safe travels',
    explanation: '"Safe travels" is the correct fixed expression (always plural).',
    examples: [
      { wrong: 'Safe travel!', right: 'Safe travels!' },
      { wrong: 'Have a safe travel.', right: 'Have safe travels.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-watch-your-step',
    pattern: wb('watch\\s+(?:your|my|his|her|their)\\s+steps'),
    category: 'expression',
    errorType: '"watch your steps" → "watch your step"',
    correction: (m) => m.replace(/steps/i, 'step'),
    explanation: '"Watch your step" is the correct expression (singular).',
    examples: [
      { wrong: 'Watch your steps.', right: 'Watch your step.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-stand-ground',
    pattern: wb('(?:stand|standing|stood)\\s+(?:their|his|her|my|our|your|its)\\s+grounds'),
    category: 'expression',
    errorType: '"stand their grounds" → "stand their ground"',
    correction: (m) => m.replace(/grounds/i, 'ground'),
    explanation: '"Stand one\'s ground" is always singular.',
    examples: [
      { wrong: 'Standing their grounds.', right: 'Standing their ground.' },
      { wrong: 'He stood his grounds.', right: 'He stood his ground.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-conflict-of-interest',
    pattern: wb('conflicts?\\s+of\\s+interests'),
    category: 'expression',
    errorType: '"conflict of interests" → "conflict of interest"',
    correction: (m) => m.replace(/conflicts?\s+of\s+interests/i, 'conflict of interest'),
    explanation: '"Conflict of interest" — "interest" is always singular in this expression.',
    examples: [
      { wrong: 'A conflict of interests.', right: 'A conflict of interest.' },
      { wrong: 'Conflicts of interests.', right: 'Conflicts of interest.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-both-sides',
    pattern: wb('both\\s+side(?!s)\\b'),
    category: 'expression',
    errorType: '"both side" → "both sides"',
    correction: () => 'both sides',
    explanation: '"Both" requires a plural noun: "both sides".',
    examples: [
      { wrong: 'Both side are playing well.', right: 'Both sides are playing well.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-both-team',
    pattern: wb('both\\s+team(?!s|mate)\\b'),
    category: 'expression',
    errorType: '"both team" → "both teams"',
    correction: () => 'both teams',
    explanation: '"Both" requires a plural noun: "both teams".',
    examples: [
      { wrong: 'Both team played hard.', right: 'Both teams played hard.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-both-player',
    pattern: wb('both\\s+player(?!s)\\b'),
    category: 'expression',
    errorType: '"both player" → "both players"',
    correction: () => 'both players',
    explanation: '"Both" requires a plural noun: "both players".',
    examples: [
      { wrong: 'Both player scored.', right: 'Both players scored.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-make-sense',
    pattern: wb('make\\s+a\\s+sense'),
    category: 'expression',
    errorType: '"make a sense" → "make sense"',
    correction: () => 'make sense',
    explanation: '"Make sense" has no article.',
    examples: [
      { wrong: "That doesn't make a sense.", right: "That doesn't make sense." },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-by-the-way',
    pattern: wb('by\\s+a\\s+way'),
    category: 'expression',
    errorType: '"by a way" → "by the way"',
    correction: () => 'by the way',
    explanation: 'The fixed expression is "by the way".',
    examples: [
      { wrong: 'By a way, did you hear?', right: 'By the way, did you hear?' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-at-the-end-of-the-day',
    pattern: wb('in\\s+the\\s+end\\s+of\\s+the\\s+day'),
    category: 'expression',
    errorType: '"in the end of the day" → "at the end of the day"',
    correction: () => 'at the end of the day',
    explanation: 'The correct expression is "at the end of the day".',
    examples: [
      { wrong: 'In the end of the day, it worked out.', right: 'At the end of the day, it worked out.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-looking-forward-to',
    pattern: wb('looking\\s+forward\\s+for'),
    category: 'expression',
    errorType: '"looking forward for" → "looking forward to"',
    correction: () => 'looking forward to',
    explanation: 'The expression is "looking forward to" (not "for").',
    examples: [
      { wrong: "I'm looking forward for the meeting.", right: "I'm looking forward to the meeting." },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-congratulations',
    pattern: wb('congratulation(?!s)\\b'),
    category: 'expression',
    errorType: '"congratulation" → "congratulations"',
    correction: () => 'congratulations',
    explanation: '"Congratulations" is always plural when used as an exclamation.',
    examples: [
      { wrong: 'Congratulation on your promotion!', right: 'Congratulations on your promotion!' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-in-charge-of',
    pattern: wb('in\\s+charge\\s+for'),
    category: 'expression',
    errorType: '"in charge for" → "in charge of"',
    correction: () => 'in charge of',
    explanation: 'The expression is "in charge of" (not "in charge for").',
    examples: [
      { wrong: "I'm in charge for the project.", right: "I'm in charge of the project." },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-no-matter',
    pattern: wb('no\\s+matter\\s+of'),
    category: 'expression',
    errorType: '"no matter of" → "no matter"',
    correction: () => 'no matter',
    explanation: '"No matter" is followed directly by "what/how/where" — not "of".',
    examples: [
      { wrong: 'No matter of what happens.', right: 'No matter what happens.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-on-the-other-hand',
    pattern: wb('in\\s+the\\s+other\\s+hand'),
    category: 'expression',
    errorType: '"in the other hand" → "on the other hand"',
    correction: () => 'on the other hand',
    explanation: 'The expression is "on the other hand".',
    examples: [
      { wrong: 'In the other hand, we could wait.', right: 'On the other hand, we could wait.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-as-a-matter-of-fact',
    pattern: wb('as\\s+a\\s+matter\\s+of\\s+the\\s+fact'),
    category: 'expression',
    errorType: '"as a matter of the fact" → "as a matter of fact"',
    correction: () => 'as a matter of fact',
    explanation: 'No "the" in "as a matter of fact".',
    examples: [
      { wrong: 'As a matter of the fact, I agree.', right: 'As a matter of fact, I agree.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-long-story-short',
    pattern: wb('(?:to\\s+make|make)\\s+(?:a\\s+)?long\\s+story\\s+shorts?'),
    category: 'expression',
    errorType: 'Fixed expression: "long story short"',
    correction: () => 'to make a long story short',
    explanation: '"To make a long story short" is the full expression.',
    examples: [
      { wrong: 'Make long story short...', right: 'To make a long story short...' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-piece-of-cake',
    pattern: wb('piece\\s+of\\s+cakes'),
    category: 'expression',
    errorType: '"piece of cakes" → "piece of cake"',
    correction: () => 'piece of cake',
    explanation: '"Piece of cake" (meaning easy) is always singular.',
    examples: [
      { wrong: "It's a piece of cakes.", right: "It's a piece of cake." },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-in-the-long-run',
    pattern: wb('(?:in|on)\\s+(?:a|the)\\s+long\\s+term'),
    category: 'expression',
    errorType: 'Use "in the long run" or "long-term"',
    correction: () => 'in the long run',
    explanation: 'Use "in the long run" or "in the long term" (with "in", not "on").',
    examples: [
      { wrong: 'On a long term, it will pay off.', right: 'In the long run, it will pay off.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-at-first-glance',
    pattern: wb('on\\s+(?:the\\s+)?first\\s+glance'),
    category: 'expression',
    errorType: '"on first glance" → "at first glance"',
    correction: () => 'at first glance',
    explanation: 'The expression is "at first glance" (not "on first glance").',
    examples: [
      { wrong: 'On first glance, it looks fine.', right: 'At first glance, it looks fine.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-pay-attention',
    pattern: wb('pay\\s+an?\\s+attention'),
    category: 'expression',
    errorType: '"pay an attention" → "pay attention"',
    correction: () => 'pay attention',
    explanation: '"Pay attention" has no article.',
    examples: [
      { wrong: 'Pay an attention to this.', right: 'Pay attention to this.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-take-advantage',
    pattern: wb('take\\s+an?\\s+advantage\\s+of'),
    category: 'expression',
    errorType: '"take an advantage of" → "take advantage of"',
    correction: () => 'take advantage of',
    explanation: '"Take advantage of" has no article.',
    examples: [
      { wrong: 'Take an advantage of this.', right: 'Take advantage of this.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-have-access',
    pattern: wb('have\\s+an?\\s+access\\s+to'),
    category: 'expression',
    errorType: '"have an access to" → "have access to"',
    correction: () => 'have access to',
    explanation: '"Have access to" has no article.',
    examples: [
      { wrong: 'I have an access to the system.', right: 'I have access to the system.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-make-progress',
    pattern: wb('make\\s+a\\s+progress'),
    category: 'expression',
    errorType: '"make a progress" → "make progress"',
    correction: () => 'make progress',
    explanation: '"Progress" is uncountable — no article.',
    examples: [
      { wrong: "We're making a progress.", right: "We're making progress." },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-do-homework',
    pattern: wb('do\\s+(?:my|your|his|her|their|the)\\s+homeworks'),
    category: 'expression',
    errorType: '"homeworks" → "homework"',
    correction: (m) => m.replace(/homeworks/i, 'homework'),
    explanation: '"Homework" is uncountable.',
    examples: [
      { wrong: 'I need to do my homeworks.', right: 'I need to do my homework.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-lots-of-fun',
    pattern: wb('a\\s+lot\\s+of\\s+funs'),
    category: 'expression',
    errorType: '"funs" → "fun"',
    correction: () => 'a lot of fun',
    explanation: '"Fun" is uncountable — no plural form.',
    examples: [
      { wrong: 'We had a lot of funs.', right: 'We had a lot of fun.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-each-every-singular',
    pattern: wb('(?:each|every)\\s+(?:students|days|people|players|teams|times|years|months|weeks)'),
    category: 'expression',
    errorType: '"each/every" + plural → singular',
    correction: (m) => m.replace(/(students|days|people|players|teams|times|years|months|weeks)/i, (w) => {
      const map: Record<string, string> = {
        students: 'student', days: 'day', people: 'person', players: 'player',
        teams: 'team', times: 'time', years: 'year', months: 'month', weeks: 'week',
      };
      return map[w.toLowerCase()] || w;
    }),
    explanation: '"Each" and "every" take a singular noun.',
    examples: [
      { wrong: 'Each students must submit.', right: 'Each student must submit.' },
      { wrong: 'Every days I practice.', right: 'Every day I practice.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-much-many-confusion',
    pattern: wb('much\\s+(?:people|friends|students|problems|things|cars|books|mistakes|questions)'),
    category: 'expression',
    errorType: '"much" + countable → "many"',
    correction: (m) => m.replace(/much/i, 'many'),
    explanation: 'Use "many" with countable nouns and "much" with uncountable nouns.',
    examples: [
      { wrong: 'Much people came.', right: 'Many people came.' },
      { wrong: 'I have much problems.', right: 'I have many problems.' },
    ],
    difficulty: 1,
  },
  {
    id: 'expr-less-fewer',
    pattern: wb('less\\s+(?:people|friends|students|problems|things|cars|books|mistakes|questions|items|options|days|hours|minutes|games|points|goals|players|fouls)'),
    category: 'expression',
    errorType: '"less" + countable → "fewer"',
    correction: (m) => m.replace(/less/i, 'fewer'),
    explanation: 'Use "fewer" with countable nouns and "less" with uncountable nouns.',
    examples: [
      { wrong: 'Less people showed up.', right: 'Fewer people showed up.' },
      { wrong: 'There are less options.', right: 'There are fewer options.' },
    ],
    difficulty: 2,
  },
  {
    id: 'expr-amount-number',
    pattern: wb('amount\\s+of\\s+(?:people|friends|students|problems|things|cars|books|mistakes|questions|items|options|days|hours|games)'),
    category: 'expression',
    errorType: '"amount of" + countable → "number of"',
    correction: (m) => m.replace(/amount/i, 'number'),
    explanation: 'Use "number of" with countable nouns and "amount of" with uncountable nouns.',
    examples: [
      { wrong: 'A large amount of people.', right: 'A large number of people.' },
    ],
    difficulty: 2,
  },

  // ============================================================
  // COMMON ERRORS — Frequently made mistakes
  // ============================================================

  // --- your / you're ---
  {
    id: 'common-your-youre',
    pattern: new RegExp("\\byour\\s+(?:welcome|right|wrong|correct|amazing|awesome|great|beautiful|wonderful|funny|smart|stupid|crazy|sure|the\\s+best|the\\s+worst|going\\s+to|gonna|not\\s+going|coming|leaving|doing|making|being|getting|running|looking|kidding|joking|fired|hired|invited|late|early|ready|done|finished)\\b", 'gi'),
    category: 'common',
    errorType: 'your vs you\'re',
    correction: (m: string) => "you're" + m.slice(4),
    explanation: '"Your" is possessive (your book). "You\'re" = "you are". Here you mean "you are".',
    examples: [
      { wrong: 'Your welcome.', right: "You're welcome." },
      { wrong: 'Your going to love it.', right: "You're going to love it." },
    ],
    difficulty: 1,
  },

  // --- their / they're ---
  {
    id: 'common-their-theyre',
    pattern: new RegExp("\\btheir\\s+(?:going\\s+to|gonna|not\\s+going|coming|leaving|doing|making|being|getting|running|looking|the\\s+best|the\\s+worst|right|wrong|late|early|ready|done|finished|here|there|always|never|still|already|just|also|really|actually|probably|definitely|certainly|clearly)\\b", 'gi'),
    category: 'common',
    errorType: 'their vs they\'re',
    correction: (m: string) => "they're" + m.slice(5),
    explanation: '"Their" is possessive (their house). "They\'re" = "they are".',
    examples: [
      { wrong: 'Their going to the store.', right: "They're going to the store." },
      { wrong: 'Their always late.', right: "They're always late." },
    ],
    difficulty: 1,
  },

  // --- there / they're ---
  {
    id: 'common-there-theyre',
    pattern: new RegExp("\\bthere\\s+(?:going\\s+to|gonna|not\\s+going|coming|leaving|doing|making|being|getting|running|looking|always|never|still|already|just|also|really|actually|probably|definitely|certainly)\\b", 'gi'),
    category: 'common',
    errorType: 'there vs they\'re',
    correction: (m: string) => "they're" + m.slice(5),
    explanation: '"There" refers to a place. "They\'re" = "they are".',
    examples: [
      { wrong: 'There going to be late.', right: "They're going to be late." },
      { wrong: 'There always complaining.', right: "They're always complaining." },
    ],
    difficulty: 1,
  },

  // --- its / it's ---
  {
    id: 'common-its-its',
    pattern: new RegExp("\\bits\\s+(?:a\\b|the\\b|going\\s+to|gonna|not\\s+going|been|raining|snowing|cold|hot|warm|cool|nice|great|amazing|awesome|wonderful|terrible|horrible|beautiful|fine|okay|ok|obvious|clear|important|necessary|possible|impossible|true|false|funny|strange|weird|hard|easy|difficult|simple|better|worse|time\\s+to|not\\s+that|not\\s+a|not\\s+the|about\\s+time|too\\s+late|too\\s+early)\\b", 'gi'),
    category: 'common',
    errorType: 'its vs it\'s',
    correction: (m: string) => "it's" + m.slice(3),
    explanation: '"Its" is possessive (the dog wagged its tail). "It\'s" = "it is" or "it has".',
    examples: [
      { wrong: 'Its a nice day.', right: "It's a nice day." },
      { wrong: 'Its going to rain.', right: "It's going to rain." },
    ],
    difficulty: 1,
  },

  // --- could of / should of / would of ---
  {
    id: 'common-could-of',
    pattern: wb('could\\s+of'),
    category: 'common',
    errorType: 'could of → could have',
    correction: () => 'could have',
    explanation: '"Could of" is incorrect. The correct form is "could have" (or "could\'ve").',
    examples: [
      { wrong: 'I could of done that.', right: 'I could have done that.' },
    ],
    difficulty: 1,
  },
  {
    id: 'common-should-of',
    pattern: wb('should\\s+of'),
    category: 'common',
    errorType: 'should of → should have',
    correction: () => 'should have',
    explanation: '"Should of" is incorrect. The correct form is "should have" (or "should\'ve").',
    examples: [
      { wrong: 'I should of known.', right: 'I should have known.' },
    ],
    difficulty: 1,
  },
  {
    id: 'common-would-of',
    pattern: wb('would\\s+of'),
    category: 'common',
    errorType: 'would of → would have',
    correction: () => 'would have',
    explanation: '"Would of" is incorrect. The correct form is "would have" (or "would\'ve").',
    examples: [
      { wrong: 'I would of gone.', right: 'I would have gone.' },
    ],
    difficulty: 1,
  },
  {
    id: 'common-must-of',
    pattern: wb('must\\s+of'),
    category: 'common',
    errorType: 'must of → must have',
    correction: () => 'must have',
    explanation: '"Must of" is incorrect. The correct form is "must have" (or "must\'ve").',
    examples: [
      { wrong: 'He must of left.', right: 'He must have left.' },
    ],
    difficulty: 1,
  },
  {
    id: 'common-might-of',
    pattern: wb('might\\s+of'),
    category: 'common',
    errorType: 'might of → might have',
    correction: () => 'might have',
    explanation: '"Might of" is incorrect. The correct form is "might have".',
    examples: [
      { wrong: 'She might of seen it.', right: 'She might have seen it.' },
    ],
    difficulty: 1,
  },

  // --- irregardless ---
  {
    id: 'common-irregardless',
    pattern: wb('irregardless'),
    category: 'common',
    errorType: 'Nonstandard word',
    correction: () => 'regardless',
    explanation: '"Irregardless" is nonstandard. Use "regardless" instead.',
    examples: [
      { wrong: 'Irregardless of the outcome.', right: 'Regardless of the outcome.' },
    ],
    difficulty: 1,
  },

  // --- could care less ---
  {
    id: 'common-could-care-less',
    pattern: new RegExp("\\bcould\\s+care\\s+less\\b", 'gi'),
    category: 'common',
    errorType: 'Incorrect idiom',
    correction: () => "couldn't care less",
    explanation: '"Could care less" implies you do care. The correct idiom is "couldn\'t care less".',
    examples: [
      { wrong: 'I could care less.', right: "I couldn't care less." },
    ],
    difficulty: 1,
  },

  // --- for all intensive purposes ---
  {
    id: 'common-intensive-purposes',
    pattern: new RegExp("\\bfor\\s+all\\s+intensive\\s+purposes\\b", 'gi'),
    category: 'common',
    errorType: 'Eggcorn / misheard phrase',
    correction: () => 'for all intents and purposes',
    explanation: 'The correct phrase is "for all intents and purposes", not "intensive purposes".',
    examples: [
      { wrong: 'For all intensive purposes, we are done.', right: 'For all intents and purposes, we are done.' },
    ],
    difficulty: 1,
  },

  // --- suppose to / use to ---
  {
    id: 'common-suppose-to',
    pattern: wb('suppose\\s+to'),
    category: 'common',
    errorType: 'suppose to → supposed to',
    correction: () => 'supposed to',
    explanation: 'The correct form is "supposed to" (past participle), not "suppose to".',
    examples: [
      { wrong: "You're suppose to be here.", right: "You're supposed to be here." },
    ],
    difficulty: 1,
  },
  {
    id: 'common-use-to',
    pattern: wb('use\\s+to(?:\\s+(?:be|go|have|do|get|make|take|come|see|know|think|want|like|live|work|play|eat|run|walk|drive|sleep|read|write|speak|talk|say|tell|give|find|feel|try|leave|call|need|keep|let|begin|start|seem|help|show|hear|turn|ask))'),
    category: 'common',
    errorType: 'use to → used to',
    correction: (m: string) => 'used' + m.slice(3),
    explanation: 'The correct form is "used to" (past habit), not "use to".',
    examples: [
      { wrong: 'I use to live in London.', right: 'I used to live in London.' },
    ],
    difficulty: 1,
  },

  // --- between you and I ---
  {
    id: 'common-between-you-and-i',
    pattern: new RegExp("\\bbetween\\s+you\\s+and\\s+I\\b", 'gi'),
    category: 'common',
    errorType: 'Pronoun case error',
    correction: () => 'between you and me',
    explanation: 'After prepositions (like "between"), use object pronouns: "me", not "I".',
    examples: [
      { wrong: 'Between you and I, this is bad.', right: 'Between you and me, this is bad.' },
    ],
    difficulty: 2,
  },

  // --- me and him/her/them as subject ---
  {
    id: 'common-me-and-subject',
    pattern: new RegExp("\\bme\\s+and\\s+(?:him|her|them)\\s+(?:went|go|are|is|were|was|have|had|will|would|can|could|should|shall|did|do|need|want|like|love|got|get|came|come|made|make|took|take)\\b", 'gi'),
    category: 'common',
    errorType: 'Pronoun case error',
    correction: (m: string) => {
      return m.replace(/\bme\b/i, 'I').replace(/\bhim\b/i, 'he').replace(/\bher\b/i, 'she').replace(/\bthem\b/i, 'they');
    },
    explanation: 'When used as the subject, use "I/he/she/they", not "me/him/her/them". "He and I went" not "Me and him went".',
    examples: [
      { wrong: 'Me and him went to the store.', right: 'He and I went to the store.' },
    ],
    difficulty: 2,
  },

  // --- then vs than ---
  {
    id: 'common-then-than-comparison',
    pattern: new RegExp("\\b(?:better|worse|more|less|faster|slower|bigger|smaller|taller|shorter|older|younger|smarter|easier|harder|longer|higher|lower|greater|fewer|rather|other)\\s+then\\b", 'gi'),
    category: 'common',
    errorType: 'then vs than',
    correction: (m: string) => m.replace(/\bthen\b/i, 'than'),
    explanation: '"Than" is for comparisons ("better than"). "Then" is for time ("and then").',
    examples: [
      { wrong: 'This is better then that.', right: 'This is better than that.' },
      { wrong: 'I have more then enough.', right: 'I have more than enough.' },
    ],
    difficulty: 1,
  },

  // --- alot ---
  {
    id: 'common-alot',
    pattern: wb('alot'),
    category: 'common',
    errorType: 'Spelling error',
    correction: () => 'a lot',
    explanation: '"A lot" is two words. "Alot" is not a word.',
    examples: [
      { wrong: 'I have alot of work.', right: 'I have a lot of work.' },
    ],
    difficulty: 1,
  },

  // --- alright ---
  {
    id: 'common-alright',
    pattern: wb('alright'),
    category: 'common',
    errorType: 'Informal spelling',
    correction: () => 'all right',
    explanation: '"All right" is the standard form. "Alright" is informal and considered incorrect in formal writing.',
    examples: [
      { wrong: 'Is everything alright?', right: 'Is everything all right?' },
    ],
    difficulty: 1,
  },

  // --- loose vs lose ---
  {
    id: 'common-loose-lose',
    pattern: new RegExp("\\b(?:don't|dont|didn't|didnt|won't|wont|can't|cant|will|might|could|would|should|gonna|going\\s+to)\\s+loose\\b", 'gi'),
    category: 'common',
    errorType: 'loose vs lose',
    correction: (m: string) => m.replace(/\bloose\b/i, 'lose'),
    explanation: '"Lose" means to misplace or fail to win. "Loose" means not tight.',
    examples: [
      { wrong: "Don't loose your keys.", right: "Don't lose your keys." },
      { wrong: "We might loose the game.", right: "We might lose the game." },
    ],
    difficulty: 1,
  },

  // --- effect vs affect (verb usage) ---
  {
    id: 'common-effect-affect-verb',
    pattern: new RegExp("\\b(?:will|would|could|can|may|might|does|did|doesn't|didn't|won't|to|not|really|significantly|greatly|seriously|negatively|positively|directly|adversely)\\s+effect\\b", 'gi'),
    category: 'common',
    errorType: 'effect vs affect',
    correction: (m: string) => m.replace(/\beffect\b/i, 'affect'),
    explanation: '"Affect" is the verb (to influence). "Effect" is usually a noun (the result).',
    examples: [
      { wrong: 'This will effect the outcome.', right: 'This will affect the outcome.' },
      { wrong: 'It could effect your grade.', right: 'It could affect your grade.' },
    ],
    difficulty: 2,
  },

  // --- who's vs whose ---
  {
    id: 'common-whos-whose',
    pattern: new RegExp("\\bwho's\\s+(?:car|house|dog|cat|phone|book|idea|fault|turn|job|responsibility|bag|coat|keys|money|problem|decision|choice)\\b", 'gi'),
    category: 'common',
    errorType: "who's vs whose",
    correction: (m: string) => "whose" + m.slice(5),
    explanation: '"Whose" is possessive (whose car). "Who\'s" = "who is" or "who has".',
    examples: [
      { wrong: "Who's car is this?", right: 'Whose car is this?' },
      { wrong: "Who's turn is it?", right: 'Whose turn is it?' },
    ],
    difficulty: 2,
  },

  // --- double negatives ---
  {
    id: 'common-double-negative',
    pattern: new RegExp("(?:don'?t|didn'?t|can'?t|won'?t|couldn'?t|wouldn'?t|shouldn'?t|isn'?t|aren'?t|wasn'?t|weren'?t|haven'?t|hasn'?t)\\s+(?:\\w+\\s+)?(?:got\\s+)?no\\s+\\w+", 'gi'),
    category: 'common',
    errorType: 'Double negative',
    correction: (m: string) => m.replace(/\bno\b/, 'any'),
    explanation: 'Double negatives are grammatically incorrect in standard English. Use "any" instead of "no" after a negative verb.',
    examples: [
      { wrong: "I don't have no money.", right: "I don't have any money." },
      { wrong: "She can't find no one.", right: "She can't find anyone." },
    ],
    difficulty: 1,
  },

  // --- I seen / I done ---
  {
    id: 'common-i-seen',
    pattern: new RegExp("\\bI\\s+seen\\b", 'g'),
    category: 'common',
    errorType: 'Missing auxiliary verb',
    correction: () => "I've seen",
    explanation: '"Seen" needs a helping verb. Say "I\'ve seen" or "I saw", not "I seen".',
    examples: [
      { wrong: 'I seen that movie.', right: "I've seen that movie." },
    ],
    difficulty: 1,
  },
  {
    id: 'common-i-done',
    pattern: new RegExp("\\bI\\s+done\\s+(?:it|that|this|my|the|everything|nothing|something|what|all)\\b", 'g'),
    category: 'common',
    errorType: 'Missing auxiliary verb',
    correction: (m: string) => "I've done" + m.slice(6),
    explanation: '"Done" needs a helping verb. Say "I\'ve done" or "I did", not "I done".',
    examples: [
      { wrong: 'I done it already.', right: "I've done it already." },
    ],
    difficulty: 1,
  },

  // --- would of went / would of ran ---
  {
    id: 'common-went-gone',
    pattern: new RegExp("\\b(?:have|has|had|'ve|should've|could've|would've|should\\s+have|could\\s+have|would\\s+have|must\\s+have)\\s+went\\b", 'gi'),
    category: 'common',
    errorType: 'Past participle error',
    correction: (m: string) => m.replace(/\bwent\b/i, 'gone'),
    explanation: 'With "have/has/had", use "gone" (past participle), not "went" (simple past).',
    examples: [
      { wrong: 'I should have went.', right: 'I should have gone.' },
      { wrong: 'He has went home.', right: 'He has gone home.' },
    ],
    difficulty: 2,
  },
  {
    id: 'common-ran-run',
    pattern: new RegExp("\\b(?:have|has|had|'ve|should've|could've|would've|should\\s+have|could\\s+have|would\\s+have|must\\s+have)\\s+ran\\b", 'gi'),
    category: 'common',
    errorType: 'Past participle error',
    correction: (m: string) => m.replace(/\bran\b/i, 'run'),
    explanation: 'With "have/has/had", use "run" (past participle), not "ran" (simple past).',
    examples: [
      { wrong: 'She has ran five miles.', right: 'She has run five miles.' },
    ],
    difficulty: 2,
  },
  {
    id: 'common-did-done',
    pattern: new RegExp("\\b(?:have|has|had|'ve|should've|could've|would've|should\\s+have|could\\s+have|would\\s+have|must\\s+have)\\s+did\\b", 'gi'),
    category: 'common',
    errorType: 'Past participle error',
    correction: (m: string) => m.replace(/\bdid\b/i, 'done'),
    explanation: 'With "have/has/had", use "done" (past participle), not "did" (simple past).',
    examples: [
      { wrong: 'I have did my work.', right: 'I have done my work.' },
    ],
    difficulty: 2,
  },
  {
    id: 'common-ate-eaten',
    pattern: new RegExp("\\b(?:have|has|had|'ve|should've|could've|would've|should\\s+have|could\\s+have|would\\s+have|must\\s+have)\\s+ate\\b", 'gi'),
    category: 'common',
    errorType: 'Past participle error',
    correction: (m: string) => m.replace(/\bate\b/i, 'eaten'),
    explanation: 'With "have/has/had", use "eaten" (past participle), not "ate" (simple past).',
    examples: [
      { wrong: 'I have ate lunch already.', right: 'I have eaten lunch already.' },
    ],
    difficulty: 2,
  },
  {
    id: 'common-wrote-written',
    pattern: new RegExp("\\b(?:have|has|had|'ve|should've|could've|would've|should\\s+have|could\\s+have|would\\s+have|must\\s+have)\\s+wrote\\b", 'gi'),
    category: 'common',
    errorType: 'Past participle error',
    correction: (m: string) => m.replace(/\bwrote\b/i, 'written'),
    explanation: 'With "have/has/had", use "written" (past participle), not "wrote" (simple past).',
    examples: [
      { wrong: 'I have wrote a letter.', right: 'I have written a letter.' },
    ],
    difficulty: 2,
  },
];

// Category labels for display
export const categoryLabels: Record<string, string> = {
  article: 'Articles (a/an/the)',
  preposition: 'Prepositions',
  countable: 'Countable/Uncountable',
  expression: 'Fixed Expressions',
  common: 'Common Errors',
};

// Get rules by category
export function getRulesByCategory(category: string): GrammarRule[] {
  return grammarRules.filter((r) => r.category === category);
}

// Get rule by ID
export function getRuleById(id: string): GrammarRule | undefined {
  return grammarRules.find((r) => r.id === id);
}
