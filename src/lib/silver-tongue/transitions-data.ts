export interface TransitionFillBlank {
  id: string;
  paragraph: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface TransitionCategorize {
  id: string;
  phrase: string;
  category: 'countering' | 'building' | 'clarifying' | 'concluding' | 'buying-time';
}

export const transitionPhraseBank: Record<string, string[]> = {
  countering: [
    'That said,',
    'On the other hand,',
    'Here\'s the tension though —',
    'But here\'s what that misses:',
    'The problem with that framing is —',
    'I\'d push back on that because —',
    'That\'s true on the surface, but —',
    'The counterargument worth taking seriously is —',
    'That works in theory, but in practice —',
    'I hear you, and yet —',
    'Fair point, but consider this:',
    'That\'s one lens. Another is —',
    'Except when you account for —',
    'Not necessarily — because —',
    'What that overlooks is —',
    'Sure, but flip it around:',
    'The steel-man of the other side is —',
    'Even granting that, the issue is —',
    'I\'d agree if not for —',
    'That assumption breaks down when —'
  ],
  building: [
    'And what makes this even more interesting is —',
    'To take that a step further —',
    'Building on that —',
    'That connects to something bigger:',
    'Here\'s where it gets interesting:',
    'Which is exactly why —',
    'And the downstream effect of that is —',
    'That\'s the first-order take. The second-order take is —',
    'What\'s underneath that is —',
    'And if you follow that thread —',
    'This dovetails with —',
    'To add another layer —',
    'That\'s piece one. Piece two is —',
    'What reinforces that point is —',
    'And the data backs this up:',
    'This is compounded by the fact that —',
    'To put a finer point on it —',
    'The mechanism behind that is —',
    'Zoom out and you see —',
    'The pattern here is —'
  ],
  clarifying: [
    'Let me put it differently —',
    'What I mean specifically is —',
    'To be precise —',
    'The distinction I\'m drawing is —',
    'Let me sharpen that:',
    'In other words —',
    'Think of it this way:',
    'To unpack that —',
    'The key word there is —',
    'When I say X, I don\'t mean Y. I mean —',
    'Here\'s the nuance:',
    'To be clear, I\'m not saying X. I\'m saying —',
    'The crux of it is —',
    'Strip away the noise and the point is —',
    'What that boils down to is —',
    'Said plainly —',
    'The operative word is —',
    'Let me steelman my own point:',
    'Reframing slightly —',
    'The real question isn\'t X. It\'s —'
  ],
  concluding: [
    'So the bottom line is —',
    'Which brings us back to the core point:',
    'Net-net —',
    'At the end of the day —',
    'So here\'s the takeaway:',
    'The through-line in all of this is —',
    'What this all points to is —',
    'If I had to boil it down:',
    'So the move here is —',
    'The upshot is —',
    'To tie it together —',
    'That\'s why the real answer is —',
    'In summary —',
    'The principle that emerges is —',
    'Stepping back, the lesson is —',
    'All roads lead to the same conclusion:',
    'What this ultimately means is —',
    'The thread connecting all of this:',
    'So where does that leave us?',
    'The actionable insight is —'
  ],
  'buying-time': [
    'That\'s a great question. Let me think about it from a different angle —',
    'I want to be precise here, so —',
    'There are a few layers to this —',
    'It depends on what we mean by —',
    'Before I answer, let me reframe the question:',
    'That deserves a more careful answer than the obvious one —',
    'Let me distinguish between two things here:',
    'I\'ve thought about this, and the honest answer is nuanced —',
    'The short answer is yes, but the real answer is —',
    'Let me steelman both sides before I land —',
    'That touches on something I\'ve been wrestling with —',
    'There\'s a version of that I agree with and a version I don\'t —',
    'My instinct says one thing, but the evidence says —',
    'I want to separate the emotional response from the analytical one —',
    'Interesting — because that question assumes —'
  ]
};

export const fillBlankExercises: TransitionFillBlank[] = [
  {
    id: 'fb-1',
    paragraph: 'Remote work increases employee satisfaction and reduces commute times. ___, it can erode team cohesion and make spontaneous collaboration harder.',
    options: ['That said,', 'Building on that,', 'In summary,', 'To be precise,'],
    correct: 'That said,',
    explanation: 'The second sentence introduces a counterpoint to the benefit of remote work, making a countering transition appropriate.'
  },
  {
    id: 'fb-2',
    paragraph: 'Exercise improves physical health by strengthening the cardiovascular system. ___ it has profound effects on mental health, reducing anxiety and boosting mood through endorphin release.',
    options: ['On the other hand,', 'And what makes this even more interesting is —', 'However,', 'To be clear,'],
    correct: 'And what makes this even more interesting is —',
    explanation: 'The second sentence adds a new dimension to the same argument rather than countering it, so a building transition fits.'
  },
  {
    id: 'fb-3',
    paragraph: 'People assume "being productive" means doing more tasks per day. ___ productivity is about doing the right tasks — the ones that move the needle — not just filling hours.',
    options: ['Building on that,', 'What I mean specifically is —', 'That said,', 'Net-net,'],
    correct: 'What I mean specifically is —',
    explanation: 'The second sentence redefines and sharpens the concept of productivity, which is a clarifying move.'
  },
  {
    id: 'fb-4',
    paragraph: 'We\'ve looked at the data, heard from both sides, and considered the trade-offs. ___ the evidence points toward investing in prevention rather than treatment.',
    options: ['Here\'s the tension though —', 'To take that a step further —', 'So the bottom line is —', 'Let me put it differently —'],
    correct: 'So the bottom line is —',
    explanation: 'After reviewing evidence from multiple angles, the speaker draws a conclusion, making this a concluding transition.'
  },
  {
    id: 'fb-5',
    paragraph: 'Raising interest rates curbs inflation by reducing consumer spending. ___ it also makes mortgages and business loans more expensive, potentially slowing economic growth.',
    options: ['Which is exactly why —', 'Here\'s the tension though —', 'Said plainly —', 'So here\'s the takeaway:'],
    correct: 'Here\'s the tension though —',
    explanation: 'The second sentence presents the opposing consequence of the same policy, creating a tension — a countering transition.'
  },
  {
    id: 'fb-6',
    paragraph: 'You asked whether AI will replace all jobs. ___ because the question assumes "replace" is binary when it\'s actually a spectrum from "augment" to "automate."',
    options: ['Net-net —', 'That\'s a great question. Let me think about it from a different angle —', 'To take that a step further —', 'That said,'],
    correct: 'That\'s a great question. Let me think about it from a different angle —',
    explanation: 'The speaker pauses to reframe the question before answering, which is a buying-time transition.'
  },
  {
    id: 'fb-7',
    paragraph: 'Social media connects people across the globe instantaneously. ___ the quality of those connections is often shallow compared to face-to-face relationships.',
    options: ['Building on that —', 'But here\'s what that misses:', 'In other words —', 'The upshot is —'],
    correct: 'But here\'s what that misses:',
    explanation: 'The second sentence challenges the value of the first claim by pointing out what it overlooks — a countering move.'
  },
  {
    id: 'fb-8',
    paragraph: 'Sleep deprivation impairs cognitive function and reaction time. ___ it compromises the immune system, making you more vulnerable to illness during high-stress periods.',
    options: ['On the other hand,', 'This is compounded by the fact that —', 'Let me sharpen that:', 'So where does that leave us?'],
    correct: 'This is compounded by the fact that —',
    explanation: 'The second sentence adds another negative effect on top of the first, compounding the argument — a building transition.'
  },
  {
    id: 'fb-9',
    paragraph: 'When I say we need to "move fast," ___ we should skip testing or ignore quality. I mean we should cut unnecessary process and make decisions with 80% of the information.',
    options: ['building on that,', 'I don\'t mean', 'that said,', 'the bottom line is'],
    correct: 'I don\'t mean',
    explanation: 'The speaker is clarifying what "move fast" means and doesn\'t mean — a clarifying transition built into the sentence structure.'
  },
  {
    id: 'fb-10',
    paragraph: 'The market rewards specialization, but it also punishes inflexibility. ___ the winning strategy is T-shaped: deep in one area, broad across many.',
    options: ['On the other hand,', 'Before I answer,', 'The through-line in all of this is —', 'And the downstream effect is —'],
    correct: 'The through-line in all of this is —',
    explanation: 'After presenting a tension, the speaker synthesizes it into a unified conclusion — a concluding transition.'
  },
  {
    id: 'fb-11',
    paragraph: 'Meditation reduces cortisol levels and improves focus. ___ recent studies show it physically changes brain structure, increasing gray matter in the prefrontal cortex.',
    options: ['That said,', 'And the data backs this up:', 'In summary,', 'Not necessarily —'],
    correct: 'And the data backs this up:',
    explanation: 'The second sentence provides scientific evidence that reinforces and extends the first claim — a building transition.'
  },
  {
    id: 'fb-12',
    paragraph: 'Everyone says "follow your passion." ___ passion without skill is just enthusiasm, and enthusiasm doesn\'t pay rent.',
    options: ['Building on that —', 'I\'d push back on that because —', 'To unpack that —', 'So the move here is —'],
    correct: 'I\'d push back on that because —',
    explanation: 'The speaker challenges the common advice directly — a countering transition.'
  },
  {
    id: 'fb-13',
    paragraph: 'Should we prioritize speed or quality? ___ because that\'s a false dichotomy. The real question is: at what point does additional quality stop being worth the time it costs?',
    options: ['That said,', 'There\'s a version of that I agree with and a version I don\'t —', 'Before I answer, let me reframe the question:', 'Net-net —'],
    correct: 'Before I answer, let me reframe the question:',
    explanation: 'The speaker delays the direct answer to challenge the framing of the question — a buying-time transition.'
  },
  {
    id: 'fb-14',
    paragraph: 'Reading books expands vocabulary and improves empathy. ___ listening to audiobooks and podcasts offers similar cognitive benefits while fitting into commute time.',
    options: ['What that overlooks is —', 'To add another layer —', 'Said plainly —', 'Which brings us back to:'],
    correct: 'To add another layer —',
    explanation: 'The second sentence doesn\'t counter the first but adds an adjacent point that enriches it — a building transition.'
  },
  {
    id: 'fb-15',
    paragraph: 'The company\'s revenue grew 40% year-over-year. ___ revenue growth fueled by unsustainable customer acquisition costs isn\'t growth — it\'s a delayed loss.',
    options: ['Building on that —', 'That\'s true on the surface, but —', 'To be precise —', 'All roads lead to:'],
    correct: 'That\'s true on the surface, but —',
    explanation: 'The speaker acknowledges the fact but reveals a deeper problem beneath it — a countering transition.'
  },
  {
    id: 'fb-16',
    paragraph: 'We\'ve tested three approaches: incentives, penalties, and education. Incentives worked short-term, penalties created resentment, and education was slow. ___ a hybrid approach combining mild incentives with sustained education outperforms any single method.',
    options: ['Here\'s the tension though —', 'To take that a step further —', 'If I had to boil it down:', 'Let me distinguish between two things:'],
    correct: 'If I had to boil it down:',
    explanation: 'After reviewing multiple approaches, the speaker distills the conclusion — a concluding transition.'
  },
  {
    id: 'fb-17',
    paragraph: 'Intermittent fasting has become hugely popular for weight loss. ___ most of the weight loss comes from simple caloric restriction — people eat less because they have fewer hours to eat.',
    options: ['And what makes this even more interesting is —', 'The mechanism behind that is —', 'What that overlooks is —', 'Stepping back, the lesson is —'],
    correct: 'The mechanism behind that is —',
    explanation: 'The second sentence explains the underlying cause behind the observed effect — a building transition that deepens understanding.'
  },
  {
    id: 'fb-18',
    paragraph: 'Critics say our plan is too ambitious. ___ ambition without a timeline is a wish, not a plan. Here\'s our quarter-by-quarter roadmap.',
    options: ['I hear you, and yet —', 'That said,', 'The distinction I\'m drawing is —', 'The upshot is —'],
    correct: 'The distinction I\'m drawing is —',
    explanation: 'The speaker clarifies the difference between ambition and a plan, then provides specifics — a clarifying transition.'
  },
  {
    id: 'fb-19',
    paragraph: 'Startups are told to "fail fast." ___ what separates successful founders from the rest is not that they failed fast — it\'s that they learned fast. Failure without reflection is just waste.',
    options: ['That\'s piece one. Piece two is —', 'Sure, but flip it around:', 'In summary,', 'I want to be precise here, so —'],
    correct: 'Sure, but flip it around:',
    explanation: 'The speaker challenges the common framing by offering a reinterpretation — a countering transition.'
  },
  {
    id: 'fb-20',
    paragraph: 'Mentorship accelerates career growth by providing shortcuts to hard-won knowledge. ___ the mentee\'s network expands exponentially through the mentor\'s connections.',
    options: ['On the other hand,', 'And the downstream effect of that is —', 'The key word there is —', 'So the bottom line is —'],
    correct: 'And the downstream effect of that is —',
    explanation: 'The second sentence describes a downstream consequence that amplifies the first point — a building transition.'
  },
  {
    id: 'fb-21',
    paragraph: 'Diversity training often fails to change behavior in organizations. ___ it can backfire, making people more defensive and less open to diverse perspectives.',
    options: ['That\'s the first-order take. The second-order take is —', 'To be clear,', 'Net-net —', 'Let me steelman both sides —'],
    correct: 'That\'s the first-order take. The second-order take is —',
    explanation: 'The speaker moves from the obvious problem (doesn\'t work) to the deeper problem (actively counterproductive) — a building transition.'
  },
  {
    id: 'fb-22',
    paragraph: 'She asked me whether design or engineering is more important for a startup. ___ because both are necessary conditions and neither is sufficient alone.',
    options: ['It depends on what we mean by —', 'That deserves a more careful answer than the obvious one —', 'Building on that —', 'To tie it together —'],
    correct: 'That deserves a more careful answer than the obvious one —',
    explanation: 'The speaker signals that the question requires a more nuanced response — a buying-time transition.'
  },
  {
    id: 'fb-23',
    paragraph: 'Cold showers are trendy in the wellness community. ___ the actual evidence for long-term health benefits beyond temporary alertness is quite thin.',
    options: ['Building on that —', 'That works in theory, but in practice —', 'Said plainly —', 'So the move here is —'],
    correct: 'That works in theory, but in practice —',
    explanation: 'The speaker acknowledges the trend then challenges it with evidence — a countering transition.'
  },
  {
    id: 'fb-24',
    paragraph: 'We have limited budget, a tight timeline, and a demanding client. ___ this is exactly the kind of constraint that forces creative solutions.',
    options: ['What that overlooks is —', 'The pattern here is —', 'Zoom out and you see —', 'Which is exactly why —'],
    correct: 'Which is exactly why —',
    explanation: 'The second sentence reframes the constraints as an advantage, building on the setup — a building transition.'
  },
  {
    id: 'fb-25',
    paragraph: 'The candidate has strong technical skills, great references, and a polished resume. ___ something felt off in the interview — a lack of curiosity about our mission that no credential can compensate for.',
    options: ['Even granting that, the issue is —', 'And what makes this even more interesting is —', 'What that boils down to is —', 'The short answer is yes, but —'],
    correct: 'Even granting that, the issue is —',
    explanation: 'The speaker concedes the positive points but introduces a deal-breaking concern — a countering transition.'
  },
  {
    id: 'fb-26',
    paragraph: 'I don\'t mean we should ignore data. ___ we should treat data as one input among many, not as a substitute for judgment.',
    options: ['On the other hand,', 'What I mean specifically is —', 'Here\'s where it gets interesting:', 'So where does that leave us?'],
    correct: 'What I mean specifically is —',
    explanation: 'The speaker clarifies a potentially misunderstood position — a clarifying transition.'
  },
  {
    id: 'fb-27',
    paragraph: 'The experiment failed. The hypothesis was wrong. The team is demoralized. ___ we now know three approaches that don\'t work, which narrows the search space considerably.',
    options: ['That said,', 'Stepping back, the lesson is —', 'To add another layer —', 'Let me distinguish between —'],
    correct: 'Stepping back, the lesson is —',
    explanation: 'After listing negatives, the speaker zooms out to find a concluding insight — a concluding transition.'
  },
  {
    id: 'fb-28',
    paragraph: 'Some argue that competition brings out the best in people. ___ cooperation outperforms competition in almost every domain that requires complex, interdependent work.',
    options: ['The counterargument worth taking seriously is —', 'Building on that —', 'The crux of it is —', 'There are a few layers to this —'],
    correct: 'The counterargument worth taking seriously is —',
    explanation: 'The speaker presents the opposing view as a serious challenge — a countering transition.'
  },
  {
    id: 'fb-29',
    paragraph: 'People think networking is about collecting contacts. ___ networking is about creating mutual value — if you\'re just taking cards, you\'re not networking, you\'re soliciting.',
    options: ['Building on that —', 'Strip away the noise and the point is —', 'That said,', 'My instinct says one thing, but —'],
    correct: 'Strip away the noise and the point is —',
    explanation: 'The speaker cuts through a misconception to clarify the real definition — a clarifying transition.'
  },
  {
    id: 'fb-30',
    paragraph: 'The policy reduced crime in the pilot district by 15%. ___ crime in adjacent districts rose by 12%, suggesting displacement rather than prevention.',
    options: ['And what makes this even more interesting is —', 'Except when you account for —', 'To be precise —', 'The actionable insight is —'],
    correct: 'Except when you account for —',
    explanation: 'The speaker introduces data that undermines the apparent success — a countering transition.'
  },
  {
    id: 'fb-31',
    paragraph: 'Our users say they want more features. ___ what they actually do in the app tells a different story — 80% of usage is concentrated in three core functions.',
    options: ['To take that a step further —', 'Fair point, but consider this:', 'The operative word is —', 'So here\'s the takeaway:'],
    correct: 'Fair point, but consider this:',
    explanation: 'The speaker acknowledges user feedback but counters with behavioral data — a countering transition.'
  },
  {
    id: 'fb-32',
    paragraph: 'Trust takes years to build and seconds to destroy. ___ it\'s not the mistake itself that destroys trust — it\'s the response to the mistake.',
    options: ['Here\'s the tension though —', 'To put a finer point on it —', 'In summary —', 'There\'s a version of that I agree with —'],
    correct: 'To put a finer point on it —',
    explanation: 'The speaker refines a well-known saying with a more precise insight — a building transition.'
  },
  {
    id: 'fb-33',
    paragraph: 'We could launch now with 80% quality or wait three months for 95%. ___ perfection at the cost of timing is its own form of failure, especially in a market this competitive.',
    options: ['Building on that —', 'That assumption breaks down when —', 'The real question isn\'t X. It\'s —', 'That\'s why the real answer is —'],
    correct: 'That\'s why the real answer is —',
    explanation: 'After framing the trade-off, the speaker delivers the conclusion — a concluding transition.'
  },
  {
    id: 'fb-34',
    paragraph: 'Hard work is necessary for success. ___ hard work alone is not sufficient. Without leverage — the right skills, timing, and positioning — effort produces diminishing returns.',
    options: ['I\'d agree if not for —', 'To be clear, I\'m not saying X. I\'m saying —', 'And the data backs this up:', 'The through-line is —'],
    correct: 'To be clear, I\'m not saying X. I\'m saying —',
    explanation: 'The speaker clarifies that they\'re not dismissing hard work but adding necessary nuance — a clarifying transition.'
  },
  {
    id: 'fb-35',
    paragraph: 'The CEO\'s keynote was inspiring, the roadmap was ambitious, and the stock ticked up. ___ none of that matters if the middle managers who actually execute the strategy weren\'t in the room.',
    options: ['And what makes this even more interesting is —', 'What this ultimately means is —', 'Not necessarily — because —', 'Think of it this way:'],
    correct: 'Not necessarily — because —',
    explanation: 'The speaker challenges whether the positive signals actually indicate success — a countering transition.'
  },
  {
    id: 'fb-36',
    paragraph: 'You can\'t manage what you can\'t measure, as the saying goes. ___ some of the most important things in an organization — trust, morale, culture — resist quantification.',
    options: ['That connects to something bigger:', 'I\'d push back on that because —', 'The operative word is —', 'So the bottom line is —'],
    correct: 'I\'d push back on that because —',
    explanation: 'The speaker directly challenges a well-known business axiom — a countering transition.'
  },
  {
    id: 'fb-37',
    paragraph: 'Journaling helps you process emotions, clarify thinking, and track patterns over time. ___ even five minutes of unstructured writing can reduce anxiety by externalizing rumination.',
    options: ['On the other hand,', 'What reinforces that point is —', 'Let me put it differently —', 'All roads lead to:'],
    correct: 'What reinforces that point is —',
    explanation: 'The second sentence provides additional evidence that supports the first claim — a building transition.'
  },
  {
    id: 'fb-38',
    paragraph: 'I\'m not against meetings. ___ against meetings that could have been an email, and against the cultural norm that presence in a meeting equals contribution.',
    options: ['Building on that, I\'m', 'What I mean specifically is — I\'m', 'That said, I\'m', 'The takeaway is — I\'m'],
    correct: 'What I mean specifically is — I\'m',
    explanation: 'The speaker sharpens a broad statement into a specific critique — a clarifying transition.'
  },
  {
    id: 'fb-39',
    paragraph: 'The team hit every sprint target this quarter. Revenue is up. Customer satisfaction scores are high. ___ the question now is whether this pace is sustainable or whether we\'re burning the engine to win the lap.',
    options: ['This is compounded by —', 'The principle that emerges is —', 'So where does that leave us?', 'In other words —'],
    correct: 'So where does that leave us?',
    explanation: 'After presenting good results, the speaker raises a forward-looking concern as a conclusion — a concluding transition.'
  },
  {
    id: 'fb-40',
    paragraph: 'People think creativity is about having great ideas. ___ creativity is about having many ideas, most of which are bad, and knowing which ones to keep.',
    options: ['Building on that —', 'Reframing slightly —', 'Here\'s the tension though —', 'The upshot is —'],
    correct: 'Reframing slightly —',
    explanation: 'The speaker offers a reframed understanding of the same concept — a clarifying transition.'
  },
  {
    id: 'fb-41',
    paragraph: 'We doubled our marketing budget last year. ___ customer acquisition cost actually went up, because we saturated our best channels and were forced into less efficient ones.',
    options: ['To add another layer —', 'I hear you, and yet —', 'The key word there is —', 'Which brings us back to:'],
    correct: 'I hear you, and yet —',
    explanation: 'The speaker acknowledges the investment but counters with a disappointing result — a countering transition.'
  },
  {
    id: 'fb-42',
    paragraph: 'The question of whether to go public is complex. ___ because "going public" means different things — access to capital, liquidity for employees, loss of control, quarterly pressure — and each deserves separate analysis.',
    options: ['There are a few layers to this —', 'Net-net —', 'Sure, but flip it around:', 'And the downstream effect is —'],
    correct: 'There are a few layers to this —',
    explanation: 'The speaker signals complexity before unpacking it — a buying-time transition.'
  },
  {
    id: 'fb-43',
    paragraph: 'Our competitors are moving fast into this market. ___ speed without direction just gets you lost faster. We need to be sure we\'re solving the right problem.',
    options: ['Building on that —', 'That\'s one lens. Another is —', 'The mechanism behind that is —', 'To tie it together —'],
    correct: 'That\'s one lens. Another is —',
    explanation: 'The speaker presents a competing perspective — a countering transition.'
  },
  {
    id: 'fb-44',
    paragraph: 'Delegation isn\'t about offloading tasks you don\'t want. ___ it\'s about matching tasks to the person most positioned to learn from them or execute them better than you can.',
    options: ['That said,', 'Think of it this way:', 'Here\'s the tension though —', 'The bottom line is —'],
    correct: 'Think of it this way:',
    explanation: 'The speaker reframes the concept of delegation with a new mental model — a clarifying transition.'
  },
  {
    id: 'fb-45',
    paragraph: 'Every failed project taught us something about our process, our team, and our market. ___ the cost of not learning from those failures — and repeating them — is always higher than the failure itself.',
    options: ['On the other hand,', 'The pattern here is —', 'What this all points to is —', 'Let me steelman —'],
    correct: 'What this all points to is —',
    explanation: 'The speaker synthesizes the lesson into a broader conclusion — a concluding transition.'
  },
  {
    id: 'fb-46',
    paragraph: 'AI can generate code, write essays, and produce art. ___ it cannot evaluate whether the code solves the right problem, whether the essay says something true, or whether the art means anything.',
    options: ['And what makes this even more interesting is —', 'The problem with that framing is —', 'What that overlooks is —', 'In summary —'],
    correct: 'What that overlooks is —',
    explanation: 'The speaker counters the impressive capability list with a fundamental limitation — a countering transition.'
  },
  {
    id: 'fb-47',
    paragraph: 'I know the numbers look bad this quarter. ___ let me separate the structural issues from the cyclical ones, because they require very different responses.',
    options: ['Building on that —', 'I want to separate the emotional response from the analytical one —', 'The upshot is —', 'Not necessarily —'],
    correct: 'I want to separate the emotional response from the analytical one —',
    explanation: 'The speaker asks for space to decompose the problem before responding — a buying-time transition.'
  },
  {
    id: 'fb-48',
    paragraph: 'Good writing is clear writing. Clear writing is clear thinking. ___ if you can\'t explain it simply, you don\'t understand it deeply enough.',
    options: ['That said,', 'To take that a step further —', 'The counterargument is —', 'The actionable insight is —'],
    correct: 'To take that a step further —',
    explanation: 'The speaker extends the logical chain one more step — a building transition.'
  },
  {
    id: 'fb-49',
    paragraph: 'Some say company culture is set from the top. ___ culture is what happens when the CEO leaves the room. It\'s the default behavior of the middle, not the aspirations of the top.',
    options: ['I hear you, and yet —', 'Building on that —', 'In other words —', 'So the bottom line is —'],
    correct: 'I hear you, and yet —',
    explanation: 'The speaker acknowledges the common view but challenges it with a sharper definition — a countering transition.'
  },
  {
    id: 'fb-50',
    paragraph: 'The proposal addresses timeline, budget, and scope. ___ it doesn\'t address the single most important question: who\'s accountable when things go wrong?',
    options: ['And the data backs this up:', 'To put a finer point on it —', 'The steel-man of the other side is —', 'Except when you account for —'],
    correct: 'Except when you account for —',
    explanation: 'The speaker identifies a critical missing element that undermines the apparent completeness — a countering transition.'
  },
  {
    id: 'fb-51',
    paragraph: 'Feedback should be specific, timely, and actionable. ___ it should be given with the assumption that the person wants to improve, not the assumption that they need to be fixed.',
    options: ['That said,', 'What\'s underneath that is —', 'The real question isn\'t X. It\'s —', 'So the move here is —'],
    correct: 'What\'s underneath that is —',
    explanation: 'The speaker reveals a deeper principle beneath the tactical advice — a building transition.'
  },
  {
    id: 'fb-52',
    paragraph: 'We\'ve explored the risks, modeled the scenarios, and stress-tested the assumptions. ___ we\'re as prepared as we can be. The remaining risk is the cost of inaction.',
    options: ['Here\'s the tension though —', 'Let me sharpen that:', 'The upshot is —', 'My instinct says one thing —'],
    correct: 'The upshot is —',
    explanation: 'After thorough analysis, the speaker delivers the final verdict — a concluding transition.'
  }
];

export const categorizeExercises: TransitionCategorize[] = [
  { id: 'cat-1', phrase: 'That said,', category: 'countering' },
  { id: 'cat-2', phrase: 'Building on that —', category: 'building' },
  { id: 'cat-3', phrase: 'Let me put it differently —', category: 'clarifying' },
  { id: 'cat-4', phrase: 'So the bottom line is —', category: 'concluding' },
  { id: 'cat-5', phrase: 'That\'s a great question. Let me think about it from a different angle —', category: 'buying-time' },
  { id: 'cat-6', phrase: 'Here\'s the tension though —', category: 'countering' },
  { id: 'cat-7', phrase: 'And what makes this even more interesting is —', category: 'building' },
  { id: 'cat-8', phrase: 'What I mean specifically is —', category: 'clarifying' },
  { id: 'cat-9', phrase: 'Which brings us back to the core point:', category: 'concluding' },
  { id: 'cat-10', phrase: 'It depends on what we mean by —', category: 'buying-time' },
  { id: 'cat-11', phrase: 'I\'d push back on that because —', category: 'countering' },
  { id: 'cat-12', phrase: 'To take that a step further —', category: 'building' },
  { id: 'cat-13', phrase: 'The distinction I\'m drawing is —', category: 'clarifying' },
  { id: 'cat-14', phrase: 'Net-net —', category: 'concluding' },
  { id: 'cat-15', phrase: 'Before I answer, let me reframe the question:', category: 'buying-time' },
  { id: 'cat-16', phrase: 'That\'s true on the surface, but —', category: 'countering' },
  { id: 'cat-17', phrase: 'This dovetails with —', category: 'building' },
  { id: 'cat-18', phrase: 'Think of it this way:', category: 'clarifying' },
  { id: 'cat-19', phrase: 'The through-line in all of this is —', category: 'concluding' },
  { id: 'cat-20', phrase: 'Let me steelman both sides before I land —', category: 'buying-time' },
  { id: 'cat-21', phrase: 'The counterargument worth taking seriously is —', category: 'countering' },
  { id: 'cat-22', phrase: 'That connects to something bigger:', category: 'building' },
  { id: 'cat-23', phrase: 'To unpack that —', category: 'clarifying' },
  { id: 'cat-24', phrase: 'So here\'s the takeaway:', category: 'concluding' },
  { id: 'cat-25', phrase: 'There\'s a version of that I agree with and a version I don\'t —', category: 'buying-time' },
  { id: 'cat-26', phrase: 'That works in theory, but in practice —', category: 'countering' },
  { id: 'cat-27', phrase: 'And the downstream effect of that is —', category: 'building' },
  { id: 'cat-28', phrase: 'The key word there is —', category: 'clarifying' },
  { id: 'cat-29', phrase: 'All roads lead to the same conclusion:', category: 'concluding' },
  { id: 'cat-30', phrase: 'That touches on something I\'ve been wrestling with —', category: 'buying-time' },
  { id: 'cat-31', phrase: 'Sure, but flip it around:', category: 'countering' },
  { id: 'cat-32', phrase: 'What reinforces that point is —', category: 'building' },
  { id: 'cat-33', phrase: 'Said plainly —', category: 'clarifying' },
  { id: 'cat-34', phrase: 'The actionable insight is —', category: 'concluding' },
  { id: 'cat-35', phrase: 'My instinct says one thing, but the evidence says —', category: 'buying-time' },
  { id: 'cat-36', phrase: 'Even granting that, the issue is —', category: 'countering' },
  { id: 'cat-37', phrase: 'The pattern here is —', category: 'building' },
  { id: 'cat-38', phrase: 'The crux of it is —', category: 'clarifying' },
  { id: 'cat-39', phrase: 'Stepping back, the lesson is —', category: 'concluding' },
  { id: 'cat-40', phrase: 'I want to separate the emotional response from the analytical one —', category: 'buying-time' }
];
