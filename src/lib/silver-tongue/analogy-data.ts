export interface AnalogyExercise {
  id: string;
  argument: string;
  weakAnalogy: string;
  flaw: string;
  strongAnalogy: string;
  principle: string;
}

export const analogyExercises: AnalogyExercise[] = [
  {
    id: 'an-1',
    argument: 'Discipline feels restrictive at first but creates freedom over time.',
    weakAnalogy: 'Discipline is like a cage — it traps you but keeps you safe.',
    flaw: 'A cage implies permanent confinement and external control. Discipline is self-imposed and the restriction is temporary while the freedom is lasting. The analogy matches on "restriction" but misses on agency, trajectory, and outcome.',
    strongAnalogy: 'Discipline is like learning to play an instrument — the scales feel like a prison at first, but they\'re what eventually let you improvise freely. The constraint builds the capability.',
    principle: 'Strong analogies preserve the causal direction: temporary cost leading to lasting gain, not permanent trade-off.'
  },
  {
    id: 'an-2',
    argument: 'A good education requires challenge and struggle, not just comfort.',
    weakAnalogy: 'Education is like a spa — it should be a relaxing, enjoyable experience.',
    flaw: 'A spa is designed to reduce stress with no expectation of growth or transformation. Education requires productive discomfort. The analogy matches on "valuable experience" but misses on the role of struggle.',
    strongAnalogy: 'Education is like physical therapy after an injury — it\'s uncomfortable, sometimes painful, but the discomfort is the mechanism of recovery. Comfort would leave you weaker.',
    principle: 'When the argument depends on productive struggle, the analogy must preserve discomfort as a feature, not a bug.'
  },
  {
    id: 'an-3',
    argument: 'Relationships require consistent maintenance, not just grand gestures.',
    weakAnalogy: 'A relationship is like a car — just fill it up with gas when it\'s empty.',
    flaw: 'Fueling a car is reactive and transactional. Relationships degrade through neglect in ways that can\'t be fixed by a single refill. The analogy misses the cumulative, non-transactional nature of relational maintenance.',
    strongAnalogy: 'A relationship is like a garden — you can\'t ignore it for months and then fix it with one intense weekend of watering. It needs a little attention every day, or things die quietly while you\'re not looking.',
    principle: 'Analogies for ongoing processes should use systems that also degrade gradually through neglect, not ones with binary on/off states.'
  },
  {
    id: 'an-4',
    argument: 'Switching careers feels risky but staying in the wrong one is riskier.',
    weakAnalogy: 'Switching careers is like jumping off a cliff — terrifying and you might die.',
    flaw: 'Cliff-jumping implies irreversibility and binary outcomes (survive or don\'t). Career changes are reversible, incremental, and rarely fatal. The analogy overstates the danger and erases the agency.',
    strongAnalogy: 'Switching careers is like moving to a new city — the first few months are disorienting and lonely, but staying somewhere you\'ve outgrown is a slow erosion you don\'t notice until it\'s too late.',
    principle: 'Analogies about calculated risk should match on reversibility and timeline, not just on fear.'
  },
  {
    id: 'an-5',
    argument: 'Getting healthy requires changing your whole lifestyle, not just one quick fix.',
    weakAnalogy: 'Getting healthy is like flipping a light switch — just turn it on.',
    flaw: 'A switch is binary and instantaneous. Health is a complex system requiring sustained, multi-variable changes. The analogy implies a single decisive action solves it, when the challenge is daily consistency.',
    strongAnalogy: 'Getting healthy is like turning a tanker — you spin the wheel now but you don\'t see the change in direction for weeks. Every day feels pointless until one day you look up and you\'re in completely different waters.',
    principle: 'For delayed-gratification arguments, use analogies with visible lag between input and outcome.'
  },
  {
    id: 'an-6',
    argument: 'Saving money early creates massive advantages through compounding.',
    weakAnalogy: 'Saving money is like putting coins in a jar — you\'ll have a nice pile eventually.',
    flaw: 'A coin jar grows linearly. The entire point of compounding is exponential growth. The analogy misses the mathematical mechanism that makes early saving powerful.',
    strongAnalogy: 'Saving early is like planting a tree — the best time was 20 years ago, the second-best time is now. A tree planted today will be unimpressive for years, but the one planted a decade ago is providing shade you can\'t buy.',
    principle: 'When the argument hinges on exponential growth, the analogy must feature compounding, not linear accumulation.'
  },
  {
    id: 'an-7',
    argument: 'Bad habits are hard to break because they\'re embedded in your environment and routines.',
    weakAnalogy: 'A bad habit is like a weed — just pull it out.',
    flaw: 'Pulling a weed is a single action. Habits are neurological patterns reinforced by cues and rewards in your environment. The analogy implies removal is simple when it\'s actually systemic.',
    strongAnalogy: 'A bad habit is like a river carving a canyon — the water takes the path of least resistance, and every repetition deepens the groove. You can\'t just fill the canyon; you have to redirect the water upstream.',
    principle: 'Analogies for entrenched patterns should show why removal alone fails — the system will recreate the pattern.'
  },
  {
    id: 'an-8',
    argument: 'Leadership is about enabling others, not doing everything yourself.',
    weakAnalogy: 'A leader is like a superhero — they swoop in and save the day.',
    flaw: 'Superheroes are individual performers. The analogy reinforces the exact misconception being argued against: that leadership is about personal heroics.',
    strongAnalogy: 'A leader is like a coach — they never score the winning goal themselves, but the team\'s performance is a direct result of how well they prepare, position, and motivate the players.',
    principle: 'The analogy must model the right relationship between the leader and the group — enabling, not performing.'
  },
  {
    id: 'an-9',
    argument: 'Creativity requires constraints to flourish — unlimited freedom produces paralysis.',
    weakAnalogy: 'Creativity is like a bird — it needs to fly free without any cages.',
    flaw: 'This analogy supports the opposite claim. It implies constraints kill creativity, when the argument is that constraints enable it. The analogy contradicts the thesis.',
    strongAnalogy: 'Creativity is like water — shapeless and still in an open field, but give it banks and a downhill slope and it becomes a river with force, direction, and the power to carve stone.',
    principle: 'When arguing that constraints enable output, the analogy must show how boundaries create energy, not how freedom creates it.'
  },
  {
    id: 'an-10',
    argument: 'You can\'t judge the quality of a decision by its outcome alone — good decisions can produce bad results.',
    weakAnalogy: 'A good decision is like a good recipe — it always produces a good meal.',
    flaw: 'Recipes in controlled conditions are nearly deterministic. Decisions operate under uncertainty. The analogy removes the element of randomness that the argument depends on.',
    strongAnalogy: 'A good decision is like a good poker hand — you can play the odds perfectly and still lose to a bad beat. The quality of the play is separate from the result of the deal.',
    principle: 'For arguments about probability vs. outcome, use analogies from domains where skilled players regularly lose to variance.'
  },
  {
    id: 'an-11',
    argument: 'Honest feedback is uncomfortable but necessary for growth.',
    weakAnalogy: 'Feedback is like a punch in the face — it hurts and nobody wants it.',
    flaw: 'A punch is hostile and purposeless. Feedback is constructive and intentional. The analogy matches on "unpleasant" but misses on "useful," making feedback seem purely negative.',
    strongAnalogy: 'Feedback is like a dental X-ray — uncomfortable to sit through, sometimes reveals painful truths, but the alternative is letting problems grow invisibly until they become emergencies.',
    principle: 'Analogies for "useful discomfort" should pair the discomfort with a clear diagnostic benefit.'
  },
  {
    id: 'an-12',
    argument: 'Learning a new skill requires accepting a long period of being bad at it.',
    weakAnalogy: 'Learning is like downloading a file — you just wait and then it\'s done.',
    flaw: 'Downloads are passive, linear, and predictable. Learning is active, nonlinear, and unpredictable. The analogy erases the frustration and effort that are central to the argument.',
    strongAnalogy: 'Learning a new skill is like learning a foreign language in the country where it\'s spoken — for months, you feel stupid in every conversation, you misunderstand everything, and progress is invisible. Then one day, you dream in the language.',
    principle: 'For arguments about tolerance for incompetence, the analogy must make the uncomfortable middle feel vivid and real.'
  },
  {
    id: 'an-13',
    argument: 'Diversifying your income reduces risk more than increasing a single income.',
    weakAnalogy: 'Income diversification is like eating different foods — variety is the spice of life.',
    flaw: 'The "spice of life" framing trivializes the argument into preference rather than risk management. The analogy misses the structural point about fragility and resilience.',
    strongAnalogy: 'Relying on a single income is like a town built on one industry — when the factory closes, everyone goes down together. Multiple income streams are like a diversified economy: one sector can fail without collapsing the whole system.',
    principle: 'Risk-reduction analogies should illustrate catastrophic failure in the un-diversified case, not just the pleasantness of variety.'
  },
  {
    id: 'an-14',
    argument: 'Trying to please everyone results in pleasing no one.',
    weakAnalogy: 'Pleasing everyone is like juggling — eventually you drop something.',
    flaw: 'Juggling implies the problem is capacity (too many balls). The actual problem is that pleasing contradictory audiences produces a mediocre, identity-less result. The analogy confuses overload with dilution.',
    strongAnalogy: 'Trying to please everyone is like a restaurant that serves sushi, pizza, tacos, and curry — it signals that nothing is done with expertise. The menu is long but the trust is zero.',
    principle: 'When the argument is about dilution of quality, the analogy should show how breadth undermines depth and credibility.'
  },
  {
    id: 'an-15',
    argument: 'Burnout comes not from working too much, but from working on things that don\'t matter to you.',
    weakAnalogy: 'Burnout is like a dead battery — you used too much energy.',
    flaw: 'A battery depletes regardless of what it powers. The argument is that *what* you work on matters, not just *how much*. The analogy treats all energy expenditure as equivalent.',
    strongAnalogy: 'Burnout is like running on a treadmill versus running toward a finish line — same physical effort, but one feels endless and pointless while the other feels purposeful. It\'s not the miles; it\'s the meaning.',
    principle: 'When the argument distinguishes between kinds of effort, the analogy must show the same quantity producing different feelings based on context.'
  },
  {
    id: 'an-16',
    argument: 'You should hire for attitude and train for skill, not the reverse.',
    weakAnalogy: 'Hiring is like buying ingredients — get the best quality and the dish takes care of itself.',
    flaw: 'Ingredients don\'t have attitudes or motivation. The analogy treats people as static inputs when the argument is about their capacity to grow and adapt.',
    strongAnalogy: 'Hiring for skill alone is like drafting a track star for a basketball team — they\'re athletic, but if they don\'t want to learn the plays or pass the ball, raw ability becomes a liability.',
    principle: 'When the argument is about adaptability vs. current state, the analogy must feature entities that can grow or refuse to grow.'
  },
  {
    id: 'an-17',
    argument: 'Censoring speech doesn\'t eliminate bad ideas — it drives them underground where they can\'t be challenged.',
    weakAnalogy: 'Censorship is like a locked door — it keeps the bad stuff out.',
    flaw: 'A locked door actually works for physical objects. Ideas aren\'t contained by barriers; they find alternate channels. The analogy works for the physical world but fails for the information world.',
    strongAnalogy: 'Censoring speech is like banning a disease from being discussed instead of treating it — the symptoms go underground, people self-diagnose in whisper networks, and by the time you see it again, it\'s metastasized.',
    principle: 'Analogies about information flow should use systems where suppression creates worse outcomes than exposure.'
  },
  {
    id: 'an-18',
    argument: 'Perfectionism isn\'t about high standards — it\'s about fear of judgment.',
    weakAnalogy: 'Perfectionism is like polishing a diamond — making something great even greater.',
    flaw: 'This analogy frames perfectionism positively, as refinement. The argument is that perfectionism is pathological — driven by fear, not quality. The analogy contradicts the thesis.',
    strongAnalogy: 'Perfectionism is like re-checking that the door is locked for the fifteenth time — it\'s not about the door being secure, it\'s about the anxiety never feeling resolved. The standard keeps moving because the fear never stops.',
    principle: 'When arguing that a seemingly positive trait is actually pathological, the analogy must expose the hidden dysfunction.'
  },
  {
    id: 'an-19',
    argument: 'Small consistent actions compound into massive results over time.',
    weakAnalogy: 'Small actions are like drops of water — they add up to a bucket.',
    flaw: 'Drops filling a bucket is linear addition, not compounding. The argument is about exponential growth from consistency. The analogy misses the acceleration effect.',
    strongAnalogy: 'Small consistent actions are like compound interest — a penny doubled every day for 30 days is $5 million. The first two weeks look like nothing is happening. The last week is where the explosion lives.',
    principle: 'Compounding arguments demand analogies that show the deceptive flatness of early returns followed by explosive later returns.'
  },
  {
    id: 'an-20',
    argument: 'Surrounding yourself with ambitious people raises your own standards without you noticing.',
    weakAnalogy: 'Ambitious friends are like fuel — they give you energy.',
    flaw: 'Fuel is consumed — once you use it, it\'s gone. The influence of ambitious peers is ambient and ongoing. The analogy implies a transactional, depletable resource.',
    strongAnalogy: 'Your peer group is like the thermostat in a room — you don\'t consciously decide to match the temperature, but over time your behavior naturally adjusts to the setting. Change the thermostat, and you change without even trying.',
    principle: 'For ambient-influence arguments, use analogies where the environment passively shifts the subject\'s behavior.'
  },
  {
    id: 'an-21',
    argument: 'Vulnerability in leadership builds trust faster than projecting invulnerability.',
    weakAnalogy: 'A vulnerable leader is like a knight without armor — exposed and likely to get hurt.',
    flaw: 'Armor implies a battlefield with enemies. Leadership vulnerability is about connection, not combat. The analogy makes vulnerability look like a tactical error.',
    strongAnalogy: 'A leader who shows vulnerability is like a doctor who says "I\'m not sure, let me find out" — it feels scary in the moment but builds more trust than one who bluffs confidence and gets the diagnosis wrong.',
    principle: 'Vulnerability analogies should show how honesty about uncertainty creates credibility, not how openness creates danger.'
  },
  {
    id: 'an-22',
    argument: 'Focusing on your strengths produces better results than fixing your weaknesses.',
    weakAnalogy: 'Fixing weaknesses is like patching holes in a boat — necessary for survival.',
    flaw: 'This analogy actually argues for fixing weaknesses by framing them as existential threats. If the boat sinks, nothing else matters. It contradicts the argument.',
    strongAnalogy: 'Fixing weaknesses is like training a fish to climb a tree — you\'ll spend enormous effort to produce mediocrity, when you could have spent the same time making the fish the fastest swimmer in the ocean.',
    principle: 'Strengths-based arguments need analogies that show the opportunity cost of weakness-fixing, not just its futility.'
  },
  {
    id: 'an-23',
    argument: 'Reading widely across disciplines produces better thinking than deep expertise in a single field.',
    weakAnalogy: 'Reading widely is like being a tourist — you see a lot but understand nothing deeply.',
    flaw: 'This analogy argues against the thesis by framing breadth as superficial. The argument is that breadth creates unique connections, not that it replaces depth.',
    strongAnalogy: 'Reading widely is like cross-training in sports — a swimmer who also does yoga, weight training, and running develops a body that\'s more adaptable and injury-resistant than one who only ever swims.',
    principle: 'Cross-domain arguments need analogies where inputs from different areas combine to produce a capability none could produce alone.'
  },
  {
    id: 'an-24',
    argument: 'The first version of anything should be embarrassingly imperfect — ship it and iterate.',
    weakAnalogy: 'Shipping imperfect work is like serving undercooked food — it makes people sick.',
    flaw: 'Undercooked food has zero upside and real health risk. Imperfect software or products provide immediate feedback loops and real-world data. The analogy treats imperfection as purely harmful.',
    strongAnalogy: 'Your first version is like a rough sketch before a painting — no one judges the sketch as the final work, but the sketch is where the composition gets tested. Trying to paint the masterpiece on the first stroke guarantees you\'ll never finish.',
    principle: 'For iteration arguments, the analogy must show how early imperfection serves the final quality, not undermines it.'
  },
  {
    id: 'an-25',
    argument: 'Saying no to good opportunities is essential for focusing on great ones.',
    weakAnalogy: 'Saying no is like slamming a door — it shuts out everything.',
    flaw: 'Slamming a door is hostile and indiscriminate. Strategic "no" is deliberate and selective. The analogy paints refusal as aggressive rather than strategic.',
    strongAnalogy: 'Saying no to good opportunities is like pruning a fruit tree — you cut healthy branches so the remaining ones produce bigger, better fruit. The tree\'s capacity is finite, and unpruned trees produce lots of small, mediocre fruit.',
    principle: 'Selective refusal analogies should show how removing good things creates space for great things.'
  },
  {
    id: 'an-26',
    argument: 'Emotional intelligence is more important for career success than raw IQ.',
    weakAnalogy: 'EQ is like seasoning on food — it makes things taste better but the food itself is what matters.',
    flaw: 'Seasoning is optional and cosmetic. The argument is that EQ is fundamental, not decorative. This analogy subordinates EQ to IQ, which contradicts the thesis.',
    strongAnalogy: 'IQ without EQ is like a powerful engine without a steering wheel — you can generate enormous force but you can\'t direct it, navigate obstacles, or bring anyone along for the ride.',
    principle: 'When arguing X matters more than Y, the analogy must show X as essential infrastructure, not as an enhancement to Y.'
  },
  {
    id: 'an-27',
    argument: 'Writing clarifies your thinking — you don\'t know what you think until you write it down.',
    weakAnalogy: 'Writing is like recording a song — it captures what\'s already there.',
    flaw: 'Recording is purely archival. The argument is that writing actively shapes thought, not that it just preserves it. The analogy misses the generative function.',
    strongAnalogy: 'Writing is like sculpting from a block of marble — the rough shape of the idea is in there somewhere, but you don\'t discover it until you start chipping away. The act of removing material is what reveals the form.',
    principle: 'When the argument is about creation through process, the analogy must show output that didn\'t exist before the process began.'
  },
  {
    id: 'an-28',
    argument: 'Conflict in teams, when managed well, produces better outcomes than artificial harmony.',
    weakAnalogy: 'Conflict is like a fire — it destroys everything in its path.',
    flaw: 'Fire as pure destruction ignores that controlled burns rejuvenate forests. The analogy uses the uncontrolled version to argue against the controlled version.',
    strongAnalogy: 'Productive conflict is like a blacksmith\'s forge — the heat and hammering look violent, but they\'re what transform raw iron into a blade. A piece of iron that never gets hit stays weak and shapeless forever.',
    principle: 'For "productive discomfort" arguments, the analogy must distinguish between destructive and transformative applications of force.'
  },
  {
    id: 'an-29',
    argument: 'Teaching someone a concept is the best way to truly understand it yourself.',
    weakAnalogy: 'Teaching is like giving away your food — you share it but end up with less.',
    flaw: 'Knowledge is non-rivalrous — sharing it doesn\'t reduce your own. The analogy implies a zero-sum transaction, which is the opposite of what happens with knowledge sharing.',
    strongAnalogy: 'Teaching is like assembling furniture with the instructions — you thought you understood from the picture on the box, but it\'s not until you try to follow the steps out loud that you realize which pieces you were confused about.',
    principle: 'Teaching analogies must show how the act of explaining reveals gaps in the teacher\'s own understanding.'
  },
  {
    id: 'an-30',
    argument: 'Investing in prevention is far cheaper than paying for treatment after the fact.',
    weakAnalogy: 'Prevention is like insurance — you pay and hope you never need it.',
    flaw: 'Insurance doesn\'t prevent anything; it just shifts the financial burden after the fact. Prevention actually reduces the probability of the event occurring. The analogy confuses risk transfer with risk reduction.',
    strongAnalogy: 'Investing in prevention is like maintaining a bridge before it cracks — the inspection costs a fraction of what the collapse costs, and the collapse also kills people. The math is obvious; the politics of funding invisible success is the hard part.',
    principle: 'Prevention analogies must highlight the asymmetry between the small cost of maintenance and the catastrophic cost of failure.'
  },
  {
    id: 'an-31',
    argument: 'Rapid growth without strong foundations leads to collapse.',
    weakAnalogy: 'Growth without foundations is like a balloon — it gets big and then pops.',
    flaw: 'A balloon pops from external pressure, not internal structural failure. The argument is about self-inflicted collapse from inadequate foundations. The analogy puts the cause outside the system.',
    strongAnalogy: 'Rapid growth without foundations is like building a skyscraper on a residential foundation — every floor you add accelerates toward a collapse that becomes harder to prevent and more catastrophic when it comes. The height itself becomes the danger.',
    principle: 'Structural-failure analogies should show how the growth itself creates the stress that causes the failure.'
  },
  {
    id: 'an-32',
    argument: 'Giving people autonomy makes them more productive than micromanaging them.',
    weakAnalogy: 'Micromanagement is like gardening — you need to tend things carefully.',
    flaw: 'This analogy frames micromanagement positively by equating it with care. The argument is that excessive control is counterproductive. The analogy undermines the thesis.',
    strongAnalogy: 'Micromanagement is like pulling up a plant every day to check if the roots are growing — the inspection itself is what kills the growth. Some things only work when you trust the process and check in at intervals.',
    principle: 'For arguments against over-control, the analogy must show how the controlling behavior itself causes the failure it\'s trying to prevent.'
  },
  {
    id: 'an-33',
    argument: 'Simplicity in communication is a sign of mastery, not a lack of sophistication.',
    weakAnalogy: 'Simple communication is like fast food — convenient but low quality.',
    flaw: 'Fast food simplifies by cutting quality. Clear communication simplifies by distilling complexity into accessibility. The analogy equates simplicity with cheapness.',
    strongAnalogy: 'Simple communication is like a surgeon\'s incision — the cut looks simple, but the precision required to make it that clean comes from years of training. The simplicity is the evidence of mastery, not the absence of it.',
    principle: 'When arguing that simplicity signals expertise, the analogy must show simplicity as the output of skill, not the absence of effort.'
  },
  {
    id: 'an-34',
    argument: 'You should optimize for learning speed, not for avoiding mistakes.',
    weakAnalogy: 'Making mistakes is like crashing a car — dangerous and best avoided.',
    flaw: 'Car crashes have severe, irreversible consequences. Most learning mistakes are low-stakes and reversible. The analogy imports catastrophic risk into a low-risk domain.',
    strongAnalogy: 'Optimizing to avoid mistakes is like learning to cook by only reading recipes and never turning on the stove — you\'ll avoid every burned dish and also never learn to cook. The burned dishes are the curriculum.',
    principle: 'For "mistakes as learning" arguments, the analogy must show that avoidance of error blocks the learning pathway, not just that errors are tolerable.'
  },
  {
    id: 'an-35',
    argument: 'Culture eats strategy for breakfast — execution depends more on norms than plans.',
    weakAnalogy: 'Culture is like decoration — it makes the office look nice.',
    flaw: 'Decoration is cosmetic and removable. Culture is structural and persistent. The analogy trivializes culture into aesthetics.',
    strongAnalogy: 'Culture is like the current in a river — you can have the best rowing strategy in the world, but if the current is against you, you\'re going nowhere. And if it\'s with you, even mediocre rowing produces results.',
    principle: 'For arguments about invisible structural forces, the analogy must show an ambient force that overpowers deliberate effort.'
  }
];
