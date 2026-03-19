export interface ComebackScenario {
  id: string;
  lazy: string;
  context?: string;
  killShots: string[];
  principle: string;
}

export const comebackScenarios: ComebackScenario[] = [
  {
    id: 'cb-1',
    lazy: 'Why make your bed if you\'re just going to sleep in it again?',
    context: 'Someone dismissing small daily habits as pointless.',
    killShots: [
      'Why eat if you\'re going to get hungry again? Because discipline isn\'t about the task — it\'s about who you become by doing it.',
      'Because how you do the small things is how you do everything. The bed isn\'t the point — the standard is.',
      'You\'re not making the bed for the bed. You\'re making it for the version of you that walks back into that room.'
    ],
    principle: 'Small actions are identity votes, not isolated events.'
  },
  {
    id: 'cb-2',
    lazy: 'Why travel when you can just watch YouTube?',
    context: 'Someone equating secondhand experience with real experience.',
    killShots: [
      'Why have friends when you can watch sitcoms? A screen gives you information. Presence gives you transformation.',
      'YouTube shows you what a place looks like. Travel shows you what you\'re like in a place. The subject of the trip is you.',
      'You can watch a thousand cooking videos and still not know what it feels like to burn your hand. Experience isn\'t content.'
    ],
    principle: 'Observation and immersion produce categorically different kinds of knowledge.'
  },
  {
    id: 'cb-3',
    lazy: 'It doesn\'t matter anyway.',
    context: 'Nihilistic dismissal used to avoid effort or engagement.',
    killShots: [
      'If nothing matters, then it doesn\'t matter that nothing matters — so you might as well act as if it does.',
      'That\'s not wisdom, it\'s anesthesia. You\'re not above caring — you\'re afraid of caring and failing.',
      'People who actually believe nothing matters don\'t announce it. They just stop showing up. You\'re still here, which means you\'re lying to yourself.'
    ],
    principle: 'Performed nihilism is usually disguised fear of investment.'
  },
  {
    id: 'cb-4',
    lazy: 'That\'s just your opinion.',
    context: 'Dismissing a well-reasoned argument by relativizing it.',
    killShots: [
      'The earth being round was also "just someone\'s opinion" once. The question isn\'t whose opinion it is — it\'s whether it\'s supported by evidence.',
      'Everything is someone\'s opinion. The difference is some opinions are load-tested and others are just vibes.',
      'Saying "that\'s your opinion" is the intellectual equivalent of forfeiting — you\'re not engaging the argument, you\'re leaving the building.'
    ],
    principle: 'Not all opinions are equal — some are backed by evidence, some are backed by nothing.'
  },
  {
    id: 'cb-5',
    lazy: 'I don\'t do that lol.',
    context: 'Deflecting by making the suggestion seem beneath them.',
    killShots: [
      'You don\'t do that *yet*. Most of the things you\'re proudest of were once things you didn\'t do.',
      'Nobody does anything until they do. "I don\'t do that" is just "I haven\'t tried that" wearing a costume.',
      'The "lol" is doing a lot of heavy lifting there. Laughing at something you\'ve never tried is not a flex — it\'s a tell.'
    ],
    principle: 'Identity-based refusal ("I\'m not someone who...") is often fear dressed as personality.'
  },
  {
    id: 'cb-6',
    lazy: 'It\'s not that deep.',
    context: 'Shutting down analysis or thoughtfulness as overcomplication.',
    killShots: [
      'To you. But your depth perception isn\'t the standard for how deep something actually is.',
      'That\'s what shallow people say about everything. Puddles also think they\'re the ocean.',
      'It\'s exactly that deep — you just don\'t want to do the swimming. Calling the pool shallow doesn\'t change the water level.'
    ],
    principle: 'Dismissing complexity is easier than engaging with it — and that\'s exactly why people do it.'
  },
  {
    id: 'cb-7',
    lazy: 'Why do you care so much?',
    context: 'Using someone\'s passion against them as if caring is a weakness.',
    killShots: [
      'Because apathy isn\'t a personality trait — it\'s a coping mechanism. The question isn\'t why I care. It\'s why you\'ve decided not to.',
      'I care because the alternative is being someone who doesn\'t. And I\'ve met those people. They\'re not happier — they\'re just numb.',
      'The better question is: when did you decide that not caring was a flex? Because it reads more like a white flag.'
    ],
    principle: 'Caring is a competitive advantage disguised as vulnerability.'
  },
  {
    id: 'cb-8',
    lazy: 'No one asked.',
    context: 'Dismissing someone\'s contribution or perspective as unwanted.',
    killShots: [
      'No one asked for the fire alarm either. Some things are valuable whether you requested them or not.',
      'The most important ideas in history were unsolicited. Nobody asked Galileo, Darwin, or your mom when she told you to eat your vegetables.',
      'You\'re right — no one asked. That\'s what initiative looks like. Waiting to be asked is how nothing ever changes.'
    ],
    principle: 'The value of an idea has nothing to do with whether someone requested it.'
  },
  {
    id: 'cb-9',
    lazy: 'Whatever works for you.',
    context: 'Polite dismissal that avoids engaging with the actual argument.',
    killShots: [
      'I\'m not asking what works for me. I\'m asking what\'s actually true. Those are different questions.',
      'That phrase is a polite exit from a conversation you don\'t want to have. I\'d rather have the conversation.',
      'Sure — but I wasn\'t sharing a personal preference. I was making an argument. You can disagree, but "whatever works for you" is just agreement with the volume turned off.'
    ],
    principle: 'False tolerance is often concealed disengagement.'
  },
  {
    id: 'cb-10',
    lazy: 'Agree to disagree.',
    context: 'Ending a debate prematurely to avoid being challenged.',
    killShots: [
      'That\'s only valid after we\'ve both fully made our cases. You\'re using it as an eject button, not a conclusion.',
      '"Agree to disagree" is fine for pizza toppings. For things that actually matter, it\'s just giving up with decorum.',
      'Translation: "I\'ve run out of arguments but I don\'t want to admit you have a point." At least be honest about the stalemate.'
    ],
    principle: 'Premature agreement to disagree is a polite forfeit.'
  },
  {
    id: 'cb-11',
    lazy: 'Everyone\'s different.',
    context: 'Using individual variation to dismiss universal principles.',
    killShots: [
      'Everyone\'s different, but gravity works the same on all of us. Some principles are universal whether you identify with them or not.',
      'That\'s true and totally irrelevant. Everyone\'s different, and yet exercise benefits every single body. Variation in people doesn\'t mean variation in what works.',
      'It\'s a nice sentiment until you use it to dodge accountability. "Everyone\'s different" is not a license to ignore what works.'
    ],
    principle: 'Individual variation is real but doesn\'t invalidate general principles.'
  },
  {
    id: 'cb-12',
    lazy: 'That\'s a stretch.',
    context: 'Dismissing a connection or argument as too far-fetched without explaining why.',
    killShots: [
      'Every insight feels like a stretch to someone who hasn\'t done the thinking to get there. Walk me through where the logic breaks.',
      'Calling it a stretch isn\'t a rebuttal — it\'s a review. Tell me which specific link in the chain doesn\'t hold.',
      'If you can\'t say *where* it stretches, you\'re not critiquing the argument — you\'re just uncomfortable with the conclusion.'
    ],
    principle: 'A dismissal without specifics is an emotion, not an argument.'
  },
  {
    id: 'cb-13',
    lazy: 'You\'re overthinking it.',
    context: 'Accusing someone of excessive analysis to shut down careful reasoning.',
    killShots: [
      'Or — hear me out — you\'re underthinking it. The comfort zone between those two is called "average."',
      'Most bad decisions in history were made by people who thought they were thinking just the right amount.',
      'Overthinking is what underthinkers call thinking. The fact that it makes you uncomfortable doesn\'t make it excessive.'
    ],
    principle: 'The accusation of overthinking usually comes from someone who benefits from less scrutiny.'
  },
  {
    id: 'cb-14',
    lazy: 'Must be nice.',
    context: 'Passive-aggressive dismissal implying someone\'s success is due to luck or privilege.',
    killShots: [
      'It is nice. It was also hard. Both things can be true, and reducing it to luck is a way to let yourself off the hook.',
      'You know what\'s also nice? Doing the work when nobody\'s watching. That part you didn\'t see.',
      'It is nice — and it\'s available to you too. Unless "must be nice" is your way of saying "I\'d rather feel sorry for myself than try."'
    ],
    principle: 'Attributing others\' outcomes to luck protects us from facing our own inaction.'
  },
  {
    id: 'cb-15',
    lazy: 'That\'s easy for you to say.',
    context: 'Dismissing advice because the speaker\'s circumstances are different.',
    killShots: [
      'It\'s easy for me to say because I already did the hard part. The advice is a shortcut — you\'re welcome.',
      'You\'re right, it is easier now. It wasn\'t when I started. That\'s kind of the whole point.',
      'Should I only give advice from a position of identical suffering? Or should we focus on whether the advice is *correct*?'
    ],
    principle: 'The messenger\'s circumstances don\'t determine the message\'s validity.'
  },
  {
    id: 'cb-16',
    lazy: 'Life\'s too short.',
    context: 'Justifying avoidance of anything difficult or uncomfortable.',
    killShots: [
      'Life\'s too short is the most misused phrase in English. It\'s too short to waste — not too short to invest.',
      'Life is too short. That\'s exactly why you shouldn\'t fill it with low-effort defaults and call that living.',
      'Life being short is the argument *for* doing hard things, not against them. You don\'t get a refund on wasted years.'
    ],
    principle: 'Scarcity is an argument for intentionality, not indulgence.'
  },
  {
    id: 'cb-17',
    lazy: 'It is what it is.',
    context: 'Resigned acceptance used to avoid addressing solvable problems.',
    killShots: [
      'It is what it is — until someone changes it. That phrase is the anthem of people who\'ve opted out of agency.',
      'Sure. And it\'ll stay what it is if nobody does anything about it. Acceptance without action is just surrender.',
      'That\'s valid for the weather. It\'s not valid for anything within your control. And most things you say it about are within your control.'
    ],
    principle: 'Acceptance is wise for the unchangeable and cowardly for the changeable.'
  },
  {
    id: 'cb-18',
    lazy: 'I\'m just being realistic.',
    context: 'Masking pessimism or fear as pragmatism.',
    killShots: [
      'Realism that only ever points downward is just pessimism with a thesaurus.',
      'A realistic assessment considers both failure *and* success scenarios. You\'re only modeling one. That\'s not realism — it\'s selective.',
      'Every person who accomplished something improbable was told to "be realistic" by someone who accomplished something ordinary.'
    ],
    principle: 'True realism includes possibility. One-directional realism is just fear wearing a suit.'
  },
  {
    id: 'cb-19',
    lazy: 'I just don\'t have time.',
    context: 'Using busyness as a catch-all excuse for not prioritizing.',
    killShots: [
      'You have the same 24 hours as everyone else. What you don\'t have is a priority — and those are different problems.',
      '"I don\'t have time" is the most socially acceptable lie in the world. What you mean is "it\'s not important enough." Just own that.',
      'You have time to scroll, stream, and complain about not having time. The issue isn\'t the clock — it\'s the allocation.'
    ],
    principle: 'Time is never the real constraint. Priority always is.'
  },
  {
    id: 'cb-20',
    lazy: 'That\'s not how the real world works.',
    context: 'Invoking "the real world" to dismiss ideas they haven\'t tried.',
    killShots: [
      'The real world works the way it does because people keep saying "that\'s not how it works" instead of changing it.',
      'The real world is not a fixed system — it\'s the accumulated result of decisions people made. Decisions can change.',
      'Funny how "the real world" always conveniently supports whatever you were already going to do.'
    ],
    principle: 'Invoking "the real world" is often just defending the status quo from a position of comfort.'
  },
  {
    id: 'cb-21',
    lazy: 'I\'ll start Monday.',
    context: 'Perpetual future-self delegation to avoid present action.',
    killShots: [
      'Monday-you is the same person as today-you, just with more excuses loaded up from the weekend.',
      'You\'ve been starting Monday for how many Mondays now? At some point, "Monday" stops being a date and becomes a myth.',
      'The person who starts today, badly, beats the person who starts Monday, perfectly, every single time.'
    ],
    principle: 'Future commitment without present action is just self-deception on a schedule.'
  },
  {
    id: 'cb-22',
    lazy: 'Some people are just naturally talented.',
    context: 'Using innate talent to explain away someone else\'s hard work.',
    killShots: [
      'Talent is the opening hand. Work is the game. Nobody ever won poker on the deal alone.',
      'Every "naturally talented" person you admire has a practice schedule you\'d refuse to follow.',
      '"Naturally talented" is what people say when they want the result but not the process. It makes quitting feel justified.'
    ],
    principle: 'Attributing outcomes to talent is how we give ourselves permission to not try.'
  },
  {
    id: 'cb-23',
    lazy: 'You only live once.',
    context: 'Using YOLO to justify impulsive or low-quality decisions.',
    killShots: [
      'Exactly. You only live once — so why are you living it on autopilot and calling that freedom?',
      'YOLO is the argument for being more intentional, not less. One life means one chance to get it right.',
      'You only live once is a reason to build something, not a reason to waste everything.'
    ],
    principle: 'Scarcity arguments cut both ways — they support building as strongly as they support consuming.'
  },
  {
    id: 'cb-24',
    lazy: 'Money can\'t buy happiness.',
    context: 'Dismissing financial ambition or the role of money in well-being.',
    killShots: [
      'Money can\'t buy happiness, but poverty can buy misery. Solving for survival isn\'t optional, and pretending otherwise is a luxury only comfortable people can afford.',
      'Money buys freedom from stress, access to healthcare, time with family, and options. If that\'s not happiness-adjacent, I don\'t know what is.',
      'That saying was popularized by people who already had money. Ask someone choosing between rent and groceries how they feel about it.'
    ],
    principle: 'The phrase is only true above a threshold — below it, money is directly correlated with well-being.'
  },
  {
    id: 'cb-25',
    lazy: 'I\'m too old for that.',
    context: 'Using age as a permanent excuse to avoid growth or new experiences.',
    killShots: [
      'You\'re the youngest you\'ll ever be right now. If you\'re too old today, you\'ll be even more too old tomorrow. So when exactly is the right time?',
      'Colonel Sanders franchised KFC at 62. Vera Wang designed her first dress at 40. Your age is a fact, not a verdict.',
      'Age is a reason to start *now*, not a reason to never start. The clock argument works against delay, not against action.'
    ],
    principle: 'Age-based excuses treat a diminishing resource as a reason to waste more of it.'
  },
  {
    id: 'cb-26',
    lazy: 'I\'m not a morning person.',
    context: 'Using identity labels to justify not adapting behavior.',
    killShots: [
      'You\'re not a morning person because you stay up scrolling until 2 AM. That\'s not an identity — it\'s a habit loop.',
      '"I\'m not a morning person" is a conclusion you drew from a routine you never bothered to change.',
      'Nobody is "naturally" anything when it comes to schedules. You\'re a product of your last 30 days of behavior, not your DNA.'
    ],
    principle: 'Self-labels often describe the current default, not an immutable trait.'
  },
  {
    id: 'cb-27',
    lazy: 'What\'s the point?',
    context: 'Existential deflection to avoid committing to something.',
    killShots: [
      'The point is the same as it always is: you get to choose between building something or watching it all pass by. There\'s no third option.',
      'You already know the point. You\'re hoping someone will tell you there isn\'t one so you can stop feeling guilty for not trying.',
      'The point is you\'re going to be somewhere in five years either way. The only question is whether you\'ll like where you end up.'
    ],
    principle: 'Asking "what\'s the point" is often a request for permission to quit, not a genuine philosophical inquiry.'
  },
  {
    id: 'cb-28',
    lazy: 'I\'m just waiting for the right time.',
    context: 'Perfectionism and fear disguised as strategic patience.',
    killShots: [
      'The right time has a funny habit of showing up the moment you stop waiting for it and start moving.',
      'There is no "right time" that arrives fully assembled. There\'s "now with adjustments" or "never with excuses."',
      'You\'re not waiting for the right time. You\'re waiting for a guarantee — and that doesn\'t exist.'
    ],
    principle: 'Readiness is created by action, not by waiting.'
  },
  {
    id: 'cb-29',
    lazy: 'That\'s just how I am.',
    context: 'Using fixed identity to resist feedback or change.',
    killShots: [
      'No — that\'s how you\'ve *been*. "How I am" is a story you keep retelling because it\'s easier than writing a new one.',
      'Your personality is not a constitutional amendment. It can be revised. The question is whether you want to.',
      '"That\'s just how I am" is the most expensive sentence in the English language. It costs you every future version of yourself.'
    ],
    principle: 'Fixed self-narratives are comfortable and expensive.'
  },
  {
    id: 'cb-30',
    lazy: 'I could never do that.',
    context: 'Pre-emptive defeat before attempting anything.',
    killShots: [
      'You\'re right — not with that sentence as your starting line. "I could never" is a self-fulfilling prophecy, not an assessment.',
      'You couldn\'t walk once either. Every skill you have now was preceded by a period of "I can\'t do this."',
      'You\'re not predicting the future. You\'re protecting your ego from the possibility of trying and failing.'
    ],
    principle: 'Declaring inability before attempting is ego protection, not honest evaluation.'
  },
  {
    id: 'cb-31',
    lazy: 'Nobody\'s perfect.',
    context: 'Deflecting valid criticism by invoking an impossible standard.',
    killShots: [
      'Nobody\'s asking for perfect. They\'re asking for effort. The bar between "perfect" and "what you\'re doing" has a lot of room.',
      'That\'s a deflection, not a defense. Nobody\'s perfect, but some people are improving and others are using that phrase to stay still.',
      '"Nobody\'s perfect" is true. It\'s also irrelevant when the feedback is about something specific you can fix.'
    ],
    principle: 'Invoking an impossible standard to dodge an achievable one is a rhetorical sleight of hand.'
  },
  {
    id: 'cb-32',
    lazy: 'I work to live, not live to work.',
    context: 'Dismissing ambition or effort as unhealthy obsession.',
    killShots: [
      'That sounds balanced until you realize you\'re not really living either — you\'re just recovering from work you don\'t care about.',
      'Fair enough. But the people who love their work aren\'t "living to work" — they\'re just lucky enough that the two overlap. You could chase that too.',
      'Nobody\'s asking you to live to work. But phoning it in for 40 hours a week and calling that "balance" is just mediocrity with marketing.'
    ],
    principle: 'The work/life dichotomy often protects disengagement rather than promoting health.'
  },
  {
    id: 'cb-33',
    lazy: 'I\'m fine the way I am.',
    context: 'Resisting growth by framing the current state as sufficient.',
    killShots: [
      'Fine is the most dangerous word in English. It\'s the emotional equivalent of "meh" — technically not suffering, definitely not thriving.',
      'You can be fine and still have untapped potential. Those aren\'t contradictory. The question is whether "fine" is your ceiling or your floor.',
      'A plant that stops growing isn\'t "fine" — it\'s dying slowly. Stasis isn\'t stability.'
    ],
    principle: 'Contentment and complacency look identical from the outside — only results reveal which is which.'
  },
  {
    id: 'cb-34',
    lazy: 'It\'s all about who you know.',
    context: 'Attributing success entirely to connections to excuse lack of skill-building.',
    killShots: [
      'It\'s about who you know *and* what you can deliver. Connections get you in the room. Competence keeps you there.',
      'Interesting how people who say this never invest in building their network either. If it\'s all about connections, why aren\'t you making more?',
      'Even if that were 100% true — which it\'s not — it would be an argument for aggressive networking, not for giving up.'
    ],
    principle: 'Correctly identifying an advantage and using it as an excuse are very different moves.'
  },
  {
    id: 'cb-35',
    lazy: 'I don\'t need to prove anything to anyone.',
    context: 'Framing accountability-avoidance as self-assurance.',
    killShots: [
      'Nobody said anything about proving yourself to others. The person you need to prove something to is you — and you\'re the one you keep letting down.',
      'You\'re right. But there\'s a difference between not needing external validation and using that as a shield against internal standards.',
      'Not needing to prove anything is what people who\'ve already proven something get to say. Everyone else is just hiding.'
    ],
    principle: 'True self-assurance is earned through action, not declared as a substitute for it.'
  },
  {
    id: 'cb-36',
    lazy: 'School doesn\'t teach you anything useful.',
    context: 'Retroactively dismissing education to justify not investing in learning.',
    killShots: [
      'School teaches you how to learn, meet deadlines, and deal with people you didn\'t choose. If those aren\'t useful, nothing is.',
      'Blaming the institution is easy. The question is: what have you taught yourself since? If the answer is "not much," the problem wasn\'t school.',
      'Drop-out billionaires who say school is useless also read 50 books a year. They didn\'t quit learning — they quit the format.'
    ],
    principle: 'Dismissing formal education is only valid if you\'ve replaced it with rigorous self-education.'
  },
  {
    id: 'cb-37',
    lazy: 'I don\'t want to be rich, I just want to be happy.',
    context: 'Creating a false binary between wealth and happiness.',
    killShots: [
      'Those aren\'t opposites. That\'s like saying "I don\'t want to be healthy, I just want to be happy." Why not pursue both?',
      'You don\'t want to be rich — fine. But do you want to be free? Because freedom often has a price tag.',
      'This framing only makes sense if you\'ve never experienced financial stress. Ask someone drowning in debt if money is irrelevant to happiness.'
    ],
    principle: 'False dichotomies between money and meaning protect us from the discomfort of pursuing both.'
  },
  {
    id: 'cb-38',
    lazy: 'I\'ll figure it out later.',
    context: 'Indefinite postponement of planning or decision-making.',
    killShots: [
      'Later has been your plan for how long now? At some point, "later" becomes "too late" and you don\'t get a notification.',
      'Future you is not smarter, more motivated, or less busy. Future you is current you with less time.',
      '"I\'ll figure it out later" is a check written on an account you haven\'t verified has funds.'
    ],
    principle: 'Deferring to your future self is borrowing against a resource you can\'t guarantee.'
  },
  {
    id: 'cb-39',
    lazy: 'At least I\'m honest about it.',
    context: 'Using self-awareness of a flaw as a substitute for fixing it.',
    killShots: [
      'Honesty without change is just a confession booth with no penance. Awareness is step one, not the whole staircase.',
      'Congratulations on diagnosing the problem. Now what? A doctor who names the disease but never treats it isn\'t a good doctor.',
      'Being honest about being lazy is still being lazy. The honesty doesn\'t offset the laziness — it just makes it narrated.'
    ],
    principle: 'Self-awareness without action is the most comfortable form of stagnation.'
  },
  {
    id: 'cb-40',
    lazy: 'But I\'m not hurting anyone.',
    context: 'Justifying mediocrity by pointing to the absence of harm.',
    killShots: [
      'Not hurting anyone is the lowest possible bar for a human life. Is that really your aspiration — "I cause no damage"?',
      'You\'re hurting yourself — which is someone. The fact that you don\'t count yourself as a stakeholder is part of the problem.',
      'A parked car isn\'t hurting anyone either. But it\'s also not going anywhere.'
    ],
    principle: 'The absence of harm is not the presence of contribution.'
  },
  {
    id: 'cb-41',
    lazy: 'I don\'t need a routine, I go with the flow.',
    context: 'Framing lack of structure as spontaneity.',
    killShots: [
      'Rivers go with the flow too — downhill, always taking the path of least resistance. That\'s not freedom, that\'s gravity.',
      'Going with the flow works great if the flow is going somewhere good. Most of the time, the flow goes to the couch.',
      'Spontaneity is a wonderful spice. It\'s a terrible main course. Structure gives you the foundation that makes spontaneity meaningful.'
    ],
    principle: 'Unstructured freedom often defaults to the path of least resistance, not the path of most meaning.'
  },
  {
    id: 'cb-42',
    lazy: 'Everything happens for a reason.',
    context: 'Using fate to retroactively justify bad outcomes or inaction.',
    killShots: [
      'Sure — and sometimes the reason is that you made a bad decision. Not everything is cosmic. Most of it is consequential.',
      'That\'s a comforting thought for things you can\'t control. It\'s a dangerous thought for things you can.',
      'Everything happens for a reason — but sometimes the reason is physics, not destiny. A ball drops because of gravity, not meaning.'
    ],
    principle: 'Retroactive meaning-making can be healing for tragedy and toxic for accountability.'
  },
  {
    id: 'cb-43',
    lazy: 'I\'m not good with money.',
    context: 'Treating financial illiteracy as a permanent personality trait.',
    killShots: [
      'You weren\'t good with walking either, until you practiced. Money is a skill, not a talent.',
      '"Not good with money" is a decision to stay uninformed dressed up as a confession.',
      'You\'re not good with money because you\'ve never sat down and learned it. That\'s not a trait — that\'s a gap you\'re choosing not to close.'
    ],
    principle: 'Treating learnable skills as innate traits is how people give themselves permanent excuses.'
  },
  {
    id: 'cb-44',
    lazy: 'That worked for them but it won\'t work for me.',
    context: 'Pre-rejecting strategies without testing them.',
    killShots: [
      'How do you know? Have you tried it for 90 days, or did you reject it in 90 seconds?',
      'You\'re not as unique as you think in the ways that matter. The basics — discipline, consistency, focus — work across all personalities.',
      'That\'s the most sophisticated form of quitting: rejecting the method before testing it so you never have to face the result.'
    ],
    principle: 'Claiming uniqueness to reject general principles is preemptive excuse-making.'
  },
  {
    id: 'cb-45',
    lazy: 'You\'re just saying that because you\'re privileged.',
    context: 'Dismissing an argument by attacking the speaker\'s background.',
    killShots: [
      'Even if I am privileged, that doesn\'t make the argument wrong. Attack the logic, not the speaker.',
      'Privilege doesn\'t invalidate observation. A rich person saying "exercise is healthy" isn\'t wrong because they have a gym membership.',
      'You\'re committing the genetic fallacy — judging the argument by its source instead of its structure. That\'s a shortcut, not a rebuttal.'
    ],
    principle: 'Ad hominem attacks on the speaker\'s identity are not arguments against their position.'
  },
  {
    id: 'cb-46',
    lazy: 'Comparison is the thief of joy.',
    context: 'Using the quote to avoid all benchmarking or self-evaluation.',
    killShots: [
      'Comparison for envy, yes. Comparison for calibration? That\'s called learning. Athletes watch film of competitors and it makes them better.',
      'That quote is medicine for jealousy, not an excuse to ignore standards.',
      'If comparison were always bad, we\'d have no role models, no mentors, and no goals. The dose makes the poison.'
    ],
    principle: 'The problem isn\'t comparison — it\'s comparing without adjusting.'
  },
  {
    id: 'cb-47',
    lazy: 'I\'m not book-smart, I\'m street-smart.',
    context: 'Creating a false dichotomy to justify anti-intellectualism.',
    killShots: [
      'The most dangerous people in any room have both. Why are you choosing one when you could stack them?',
      'Street smarts without book smarts is a ceiling. You can navigate the game, but you can\'t redesign it.',
      'That\'s like saying "I don\'t need my left hand, I\'m a right-hand person." Both are useful. Use both.'
    ],
    principle: 'False dichotomies between kinds of intelligence protect us from the work of developing both.'
  },
  {
    id: 'cb-48',
    lazy: 'I don\'t believe in labels.',
    context: 'Refusing categorization to avoid accountability or commitment.',
    killShots: [
      'Labels aren\'t about limiting you. They\'re about communicating clearly. Refusing all labels isn\'t enlightened — it\'s evasive.',
      'You don\'t believe in labels, but you use them all day — your name, your job title, your relationship status. You just don\'t like the ones that require commitment.',
      'Not believing in labels is itself a label. The question is whether you\'re using it to stay flexible or to stay uncommitted.'
    ],
    principle: 'Rejecting all categories often masks an unwillingness to commit to any position.'
  },
  {
    id: 'cb-49',
    lazy: 'I\'m just not motivated right now.',
    context: 'Waiting for motivation as a prerequisite for action.',
    killShots: [
      'Motivation follows action — it doesn\'t precede it. You don\'t wait to feel like going to the gym; you go and then you feel it.',
      'Professionals don\'t wait for motivation. Surgeons operate on Monday mornings whether they feel inspired or not.',
      '"Not motivated" is just "not started." Start for two minutes and watch what happens to your motivation.'
    ],
    principle: 'Motivation is a result of momentum, not a prerequisite for it.'
  },
  {
    id: 'cb-50',
    lazy: 'I don\'t want to peak too early.',
    context: 'Rationalizing delay by framing inaction as strategic pacing.',
    killShots: [
      'You can\'t peak if you never climb. What you\'re describing isn\'t pacing — it\'s standing at the base camp.',
      'Nobody who peaked "too early" regrets the ascent. They regret coasting afterward. The solution is to keep climbing, not to never start.',
      '"Peaking too early" is a concern for people who are actually performing. You haven\'t started yet — that\'s not pacing, it\'s parking.'
    ],
    principle: 'Fear of premature success is an especially creative form of fear of trying.'
  }
];
