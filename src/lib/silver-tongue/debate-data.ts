export interface DebateExchange {
  opponent: string;
  modelCounter: string;
}

export interface DebateScript {
  id: string;
  topic: string;
  userSide: 'pro' | 'con';
  difficulty: 1 | 2 | 3;
  exchanges: DebateExchange[];
}

export const debateScripts: DebateScript[] = [
  {
    id: 'remote-work-pro',
    topic: 'Remote work is better than office work',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Remote workers are less productive. Without supervision, people slack off, do laundry, watch TV. Managers can\'t ensure accountability when everyone is scattered across different locations.',
        modelCounter:
          'Actually, a Stanford study of 16,000 workers found remote employees were 13% more productive than their in-office counterparts. The idea that adults need line-of-sight supervision to function is a management failure, not a remote work failure. If your productivity system relies on physically watching people, you never had accountability to begin with.',
      },
      {
        opponent:
          'But what about collaboration? The best ideas happen spontaneously in hallways and break rooms. You can\'t replicate that magic over Zoom. Innovation requires being in the same room together.',
        modelCounter:
          'The "hallway magic" argument is a romanticized myth. Microsoft\'s own research on 61,000 employees showed that remote work strengthened close team ties while weakening weak ties. But here is the key: weak ties were already declining in open offices. Meanwhile, tools like Slack, Miro, and async video let people collaborate across time zones. The real question is whether your best ideas should depend on accidentally bumping into someone near the coffee machine.',
      },
      {
        opponent:
          'Remote work destroys company culture. New hires can\'t absorb the values and norms of an organization through a screen. You end up with a fragmented workforce that feels no loyalty to the company.',
        modelCounter:
          'If your company culture can only survive through physical proximity, it was never a culture; it was a vibe. Real culture is built through clear values, consistent leadership, and meaningful rituals, all of which translate to remote settings. GitLab has over 2,000 employees across 65 countries with one of the strongest cultures in tech. They did it by being intentional, not by relying on the accident of shared office space.',
      },
    ],
  },
  {
    id: 'remote-work-con',
    topic: 'Remote work is better than office work',
    userSide: 'con',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Remote work gives employees freedom and flexibility. People can design their day around peak energy, skip pointless commutes, and spend more time with family. Productivity data backs this up across multiple industries.',
        modelCounter:
          'Freedom without structure is just chaos with good marketing. Yes, top performers thrive remotely, but the data on junior employees tells a different story. A National Bureau of Economic Research study found that remote work reduced mentorship interactions by 25% and slowed promotion rates for younger workers. You are trading short-term convenience for long-term career development, and the people paying the highest price are those who can least afford it.',
      },
      {
        opponent:
          'Commuting is a massive waste of time and money. The average American spends 55 minutes a day commuting. That is over 200 hours a year sitting in traffic or crammed on a train. Remote work gives that time back.',
        modelCounter:
          'The commute argument assumes all recovered time is well spent. Research from the University of Chicago found that remote workers reinvested only 40% of saved commute time into work and spent much of the rest on leisure and sleep. Meanwhile, commutes serve as a psychological transition between work and home. Without them, remote workers report higher rates of burnout because the workday never truly ends. You are not eliminating wasted time; you are replacing a visible cost with an invisible one.',
      },
      {
        opponent:
          'Companies save millions on office space with remote work. WeWork-style leases, maintenance, utilities, office snacks, all of that overhead disappears. The financial case is airtight.',
        modelCounter:
          'Those savings are partially an illusion. Companies now spend heavily on home office stipends, cybersecurity infrastructure, collaboration software licenses, and periodic in-person offsites that cost more per event than daily office operations. Owl Labs reports that fully remote companies spend an average of $3,000 per employee annually on these alternatives. Factor in the hidden costs of miscommunication, slower onboarding, and attrition from isolation, and the balance sheet looks much less favorable.',
      },
      {
        opponent:
          'The talent pool argument alone settles this. Remote work lets you hire the best person for the job regardless of geography. Why limit yourself to one city when you can recruit globally?',
        modelCounter:
          'A global talent pool sounds great until you deal with the reality. Time zone fragmentation means your "team" may only share two overlapping work hours. Employment law across jurisdictions creates compliance nightmares. And that global competition cuts both ways: your employees are now being recruited by every company on earth, not just local ones. Buffer\'s State of Remote Work report consistently shows loneliness as the top struggle. The talent pool gets wider, but shallower.',
      },
    ],
  },
  {
    id: 'college-overrated-pro',
    topic: 'College is overrated',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'College graduates earn significantly more over their lifetimes. The data is overwhelming: a bachelor\'s degree holder earns about $1.2 million more than a high school graduate over a career. The return on investment is clear.',
        modelCounter:
          'That $1.2 million figure is a classic survivorship bias. It averages in high earners like engineers and finance majors while burying the fact that 40% of college students never finish their degree. For those people, the ROI is catastrophically negative: they carry the debt without the credential. When you control for selection effects, meaning the kind of motivated person who goes to college would likely earn more anyway, the premium shrinks dramatically. The question is not whether college CAN pay off but whether it reliably does for the average student.',
      },
      {
        opponent:
          'College is not just about money. It teaches critical thinking, exposes you to diverse perspectives, and builds a network that lasts a lifetime. Those intangible benefits are invaluable.',
        modelCounter:
          'The "critical thinking" claim is directly contradicted by the research. The book "Academically Adrift" tracked 2,300 students and found that 36% showed no significant improvement in critical thinking after four years of college. As for networking, LinkedIn and industry communities have democratized access to professional connections. You do not need to spend $160,000 and four years for what a weekend conference and genuine curiosity can provide.',
      },
      {
        opponent:
          'Try getting a job at Google, Goldman Sachs, or any top company without a degree. The gatekeeping is real, and college is your ticket through the gate.',
        modelCounter:
          'Google, Apple, and IBM all dropped degree requirements years ago. Ernst & Young found zero correlation between degree performance and job success in their own workforce. The gates are opening because employers realized credentials are a poor proxy for competence. Meanwhile, coding bootcamps like App Academy report 90%+ placement rates at a fraction of the cost and time. The gatekeeping argument describes a world that is rapidly disappearing.',
      },
    ],
  },
  {
    id: 'social-media-harm-pro',
    topic: 'Social media does more harm than good',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Social media connects billions of people. It lets activists organize movements like the Arab Spring and Black Lives Matter. It gives marginalized voices a platform they never had before. You cannot dismiss a tool that has democratized communication.',
        modelCounter:
          'Democratized communication is meaningless if the algorithm optimizes for outrage over truth. MIT research found that false news spreads six times faster than true news on Twitter. The Arab Spring example is instructive: social media helped organize the protests, but it also enabled authoritarian governments to surveil and target those same organizers. The tool is not neutral. Its business model requires engagement, and nothing engages like anger, fear, and division.',
      },
      {
        opponent:
          'Correlation is not causation. Teens who are already depressed may gravitate toward social media. You cannot blame Instagram for a mental health crisis that has complex roots including economic anxiety, academic pressure, and family dynamics.',
        modelCounter:
          'Facebook\'s own internal research, leaked by whistleblower Frances Haugen, concluded that Instagram makes body image issues worse for one in three teenage girls. This was not outside researchers speculating; this was the company\'s own data scientists reaching that conclusion and then burying it. When the manufacturer\'s own quality control says the product is harmful, the correlation-vs-causation defense collapses.',
      },
      {
        opponent:
          'People have always worried about new technology. They said the same things about television, radio, even books. This is just the latest moral panic, and society will adapt.',
        modelCounter:
          'This argument treats all technologies as equivalent, which is lazy reasoning. Television did not have an algorithm that learned your psychological vulnerabilities and exploited them in real time. Radio did not send you notifications at 2 AM. Books did not A/B test their covers to maximize compulsive page-turning. Social media is the first technology engineered by thousands of PhD-level engineers specifically to be addictive. Comparing it to the printing press ignores the mechanism of harm entirely.',
      },
      {
        opponent:
          'If social media is so harmful, why do billions of people voluntarily use it every day? People are not stupid. They get real value from these platforms, staying connected to friends, following interests, building businesses.',
        modelCounter:
          'Billions of people also voluntarily smoke cigarettes for decades before the health consequences became undeniable. Voluntary usage does not equal informed consent, especially when the product is literally designed to hijack dopamine pathways. Former Facebook VP Chamath Palihapitiya said the platform was "ripping apart the social fabric." The architects of these systems do not let their own kids use them. When the dealer will not touch the product, the "people choose it freely" argument falls apart.',
      },
    ],
  },
  {
    id: 'minimum-wage-pro',
    topic: 'Minimum wage should be raised significantly',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Raising the minimum wage kills small businesses. A local coffee shop operating on 5% margins cannot absorb a 40% labor cost increase. You will see mass closures and layoffs, hurting the very people you claim to help.',
        modelCounter:
          'The small business apocalypse never materializes. When Seattle raised its minimum to $15, the University of Washington found that while hours were slightly reduced, total earnings for low-wage workers increased. More importantly, you are framing a living wage as an unfair burden when it is actually a market correction. If a business can only survive by paying workers poverty wages, that business is being subsidized by food stamps and Medicaid. Taxpayers are covering the gap. A higher minimum wage just moves the cost from the public ledger to the price tag, where it belongs.',
      },
      {
        opponent:
          'Economics 101: when you raise the price of something, demand decreases. A higher minimum wage means employers will hire fewer workers and accelerate automation. We are pricing low-skill workers out of the labor market entirely.',
        modelCounter:
          'The "Econ 101" framing ignores that labor markets do not behave like commodity markets. Card and Krueger\'s landmark study comparing New Jersey and Pennsylvania after a minimum wage increase found no significant reduction in employment. Why? Because higher wages reduce turnover, which is enormously expensive for employers. Automation is coming regardless of wage levels. Amazon is automating $20-an-hour warehouse jobs right now. The question is whether workers earn enough to survive during the transition, not whether we can delay it by keeping people poor.',
      },
      {
        opponent:
          'Why not set the minimum wage at $50 then? If raising it has no downsides, just keep going. The fact that even proponents draw a line proves they know there are trade-offs.',
        modelCounter:
          'That is a reductio ad absurdum fallacy, and it actually undermines your position. Nobody argues that aspirin has no side effects, but we still agree that the right dose treats headaches. The debate is about finding the optimal level, not whether any increase is harmful. The federal minimum wage has lost over 30% of its purchasing power since 1968. Adjusting for productivity growth, it would be over $24 today. Asking for $15 to $17 is not radical; it is a partial correction of a five-decade erosion.',
      },
    ],
  },
  {
    id: 'smartphones-dumber-pro',
    topic: 'Smartphones are making us dumber',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Smartphones give us instant access to all human knowledge. We can learn languages, take university courses, read research papers, all from our pocket. People have never had more educational opportunity.',
        modelCounter:
          'Having access to knowledge is not the same as possessing it. A study in the Journal of the Association for Consumer Research found that the mere presence of a smartphone, even face-down and turned off, reduced available cognitive capacity. We are trading deep knowledge for shallow access. The average smartphone user touches their phone 2,617 times per day. That is not learning; that is compulsion. The world\'s library is in your pocket, and you are using it to scroll TikTok.',
      },
      {
        opponent:
          'Every generation panics about new technology. Socrates warned that writing would destroy memory. Calculators were supposed to ruin math skills. Smartphones are just the latest version of this recurring fear.',
        modelCounter:
          'Here is the irony: Socrates was right. Oral cultures did have dramatically better memory than literate ones. The question was whether the trade-off was worth it, and for writing, it clearly was. But smartphones are different because the trade-off is lopsided. We are outsourcing not just memory but attention, navigation, social skills, and boredom tolerance. GPS has measurably shrunk hippocampal activity related to spatial reasoning. We are not just storing information externally; we are atrophying the cognitive muscles that process it.',
      },
      {
        opponent:
          'Smartphones make us more efficient. We can manage schedules, communicate instantly, access maps, handle banking, all things that used to consume hours of our day. Efficiency is a form of intelligence.',
        modelCounter:
          'Efficiency at what? The average person spends 4.5 hours per day on their smartphone, and only a fraction of that is productive. Gloria Mark\'s research at UC Irvine shows it takes 23 minutes to fully refocus after a phone distraction. When you factor in the 80+ daily notification interruptions, you are not gaining time; you are fragmenting it into useless slivers. The phone saves you 20 minutes on banking and then steals two hours through infinite scroll. That is not efficiency. That is a net loss dressed up as progress.',
      },
    ],
  },
  {
    id: 'cash-better-pro',
    topic: 'Cash is better than credit cards',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Credit cards offer fraud protection, rewards points, and purchase history tracking. If your card is stolen, you call the bank and the charges are reversed. Lose cash and it is gone forever.',
        modelCounter:
          'The rewards system is funded by merchant fees of 2-3% per transaction, costs that get passed directly to consumers through higher prices. Everyone pays the credit card tax, but only cardholders get the kickback. MIT research found that people spend 12-18% more when using credit cards versus cash because the pain of payment is psychologically removed. Your "free" rewards are funded by your own overspending. Cash creates a tangible friction that keeps budgets honest.',
      },
      {
        opponent:
          'Cash is inconvenient and unhygienic. You need exact change, you have to visit ATMs, and bills carry bacteria. Modern life is designed around digital payments. Carrying cash is like carrying a horse whip in the age of automobiles.',
        modelCounter:
          'Convenience is exactly the problem. Every layer of convenience between you and your money makes you spend more. That is not a bug of cash; it is a feature. As for hygiene, your phone screen carries 10 times more bacteria than a toilet seat, and you tap it on payment terminals every day. The real issue is that a cashless society is a surveilled society. Every digital transaction creates a data point that is tracked, sold, and analyzed. Cash is the last truly private way to transact. Calling it outdated ignores that privacy is not a legacy feature.',
      },
      {
        opponent:
          'Cash enables crime. Money laundering, tax evasion, drug trafficking, all of it depends on untraceable paper currency. A cashless society would make illegal activity dramatically harder.',
        modelCounter:
          'The "cash enables crime" argument is identical to the "encryption enables crime" argument, and it is equally dangerous. Yes, criminals use cash. They also use roads, electricity, and oxygen. The solution to crime is law enforcement, not eliminating the financial privacy of 330 million law-abiding citizens. In Sweden, which aggressively moved toward cashless, elderly and rural populations were cut off from the economy entirely. The government had to pass legislation guaranteeing cash access. Even the poster child for cashless society realized it went too far.',
      },
    ],
  },
  {
    id: 'rent-control-pro',
    topic: 'Rent control is effective policy',
    userSide: 'pro',
    difficulty: 3,
    exchanges: [
      {
        opponent:
          'Virtually every economist agrees that rent control reduces housing supply. A Stanford study found that San Francisco rent control reduced rental supply by 15%. When landlords cannot profit, they convert to condos or stop maintaining buildings. It is one of the most counterproductive policies in economics.',
        modelCounter:
          'That Stanford study also found that rent control reduced tenant displacement by 25% and that the tenants who benefited were disproportionately elderly and minority residents. You are citing half the finding. The supply reduction happened because landlords converted to condos, which is a policy failure in condo conversion law, not in rent control itself. Modern rent control proposals include anti-conversion provisions specifically to address this. Dismissing rent control because an early version had loopholes is like dismissing medicine because the first antibiotics had side effects.',
      },
      {
        opponent:
          'If you want affordable housing, build more of it. Rent control treats the symptom while making the disease worse. Every dollar spent administering rent control could fund new construction that actually expands supply.',
        modelCounter:
          'Building takes 5 to 10 years. People are being evicted today. This is the "long run" fallacy that Keynes warned about. New construction in hot markets consistently targets luxury units because that is where margins are highest. Houston has minimal zoning and no rent control, and it still has an affordability crisis in its urban core. Supply-only solutions assume a frictionless market that does not exist. Rent control is a tourniquet. Yes, the patient needs surgery, but you do not refuse the tourniquet because it does not close the wound.',
      },
      {
        opponent:
          'Rent control creates a black market and leads to discrimination. Landlords with below-market units become ultra-selective, favoring higher-income tenants who can demonstrate stability. The people most in need end up shut out.',
        modelCounter:
          'This is an argument for stronger enforcement, not for abandoning the policy. Anti-discrimination law exists precisely because markets produce discriminatory outcomes when unregulated. Vienna has had rent control for over a century and consistently ranks as the world\'s most livable city, with 60% of residents in subsidized housing. The difference is that Vienna pairs rent control with public housing investment and strict enforcement. The failure mode you describe is real but it is a failure of implementation, not concept.',
      },
      {
        opponent:
          'Even left-leaning economists like Paul Krugman have written that rent control does not work. When the entire political spectrum of economists agrees, maybe it is time to listen to the experts.',
        modelCounter:
          'Krugman also wrote that the internet would have no greater economic impact than the fax machine. Appealing to authority is not an argument. More importantly, the economist consensus is specifically about first-generation rent control with hard caps. Second-generation policies that allow moderate annual increases tied to inflation, exempt new construction, and target protections to long-term tenants address most objections. Saying "economists oppose rent control" without specifying which kind is like saying "doctors oppose surgery" without specifying which procedure.',
      },
    ],
  },
  {
    id: 'free-college-pro',
    topic: 'College should be free',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Free college would cost taxpayers hundreds of billions of dollars. Why should a plumber subsidize someone\'s philosophy degree? It is fundamentally unfair to transfer the cost of higher education to people who do not benefit from it.',
        modelCounter:
          'The plumber already subsidizes higher education through tax-funded state universities; the question is whether students also carry crushing personal debt. Germany offers free university and has a stronger manufacturing sector than the US because educated workers drive innovation across all industries, including the trades. The plumber benefits from engineers who design better tools, nurses who staff local clinics, and teachers who educate their children. Education is a public good with positive externalities that benefit everyone, including those who do not attend.',
      },
      {
        opponent:
          'Making college free would devalue the degree. When everyone has one, it becomes the new high school diploma, and employers will just raise requirements further. You create credential inflation without adding real value.',
        modelCounter:
          'Credential inflation is already happening under the current system. 65% of job postings now require a bachelor\'s degree for roles that did not require one 20 years ago. That is not because college became free; it is because employers use degrees as a lazy screening tool. Free college does not cause inflation; it removes the financial barrier to a credential that the market already demands. Denying access to a gatekeeping mechanism based on ability to pay is not meritocracy. It is aristocracy with a tuition bill.',
      },
      {
        opponent:
          'Many students drop out or choose low-return majors. Making college free with no skin in the game means more people will treat it as extended adolescence rather than a serious investment in their future.',
        modelCounter:
          'Students drop out primarily because of financial pressure, not lack of motivation. The National Center for Education Statistics found that 38% of dropouts cited the need to work as the primary reason. Free tuition eliminates the number one cause of non-completion. As for "low-return majors," humanities graduates outperform business majors in long-term earnings after age 40 according to AAC&U data. The idea that an 18-year-old should optimize purely for starting salary is how you get a society that can code but cannot think critically about what it is building.',
      },
    ],
  },
  {
    id: 'age-verification-social-media-pro',
    topic: 'Age verification should be required on social media',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Age verification would require collecting government IDs or biometric data, creating massive privacy risks. You are building a surveillance database to solve a parenting problem. If it gets breached, millions of children\'s identities are exposed.',
        modelCounter:
          'This conflates verification with data storage. Zero-knowledge proof systems allow age confirmation without retaining any personal data. Estonia\'s digital ID system verifies age for services without exposing identity details to the service provider. The technology exists; the platforms simply have no financial incentive to implement it because children drive engagement metrics. We require age verification for alcohol, tobacco, and gambling without creating surveillance databases. Applying the same principle to algorithmically addictive platforms is not radical; it is consistent.',
      },
      {
        opponent:
          'Kids will just use VPNs, fake IDs, or their parents\' accounts. Prohibition has never worked with technology. You will spend billions on enforcement while tech-savvy teenagers route around it in minutes.',
        modelCounter:
          'By this logic, we should remove age restrictions on alcohol because teenagers use fake IDs. The point of regulation is not to achieve 100% compliance; it is to raise the barrier and reduce casual access. Australia\'s Online Safety Act provisions reduced underage access to restricted content by meaningful margins despite imperfect enforcement. Perfect is the enemy of good. A system that blocks 70% of underage access is dramatically better than one that blocks 0%, which is what we have now.',
      },
      {
        opponent:
          'Parents should monitor their children, not the government. This is a personal responsibility issue. Nanny state regulation always expands beyond its original scope and infringes on everyone\'s freedom.',
        modelCounter:
          'We do not tell parents it is their job to personally test the safety of every toy, car seat, and medication their child encounters. We have the CPSC, NHTSA, and FDA because individual oversight cannot scale against industrial actors. Social media companies employ thousands of behavioral psychologists to make their products maximally addictive. Asking a single parent working two jobs to out-engineer a billion-dollar engagement machine is not personal responsibility; it is an abdication of regulatory duty. We regulate every product that harms children except the one they spend five hours a day using.',
      },
    ],
  },
  {
    id: 'ubi-pro',
    topic: 'Universal basic income should be implemented',
    userSide: 'pro',
    difficulty: 3,
    exchanges: [
      {
        opponent:
          'UBI would cause massive inflation. If everyone suddenly has an extra $1,000 per month, landlords and businesses will simply raise prices to absorb it. You end up back where you started but with a larger deficit.',
        modelCounter:
          'This assumes UBI is funded by printing money, which no serious proposal suggests. When funded through taxation and reallocation of existing welfare programs, UBI is redistributive, not inflationary. The Alaska Permanent Fund has paid residents $1,000 to $2,000 annually since 1982 with no measurable inflationary effect. A study by the Roosevelt Institute modeled a $1,000 monthly UBI and found it would grow GDP by 12.56% over eight years. Redistribution changes who spends, not how much money exists in the system.',
      },
      {
        opponent:
          'People will stop working. Why would anyone take a difficult or unpleasant job if they can stay home and collect a check? UBI destroys the work ethic that drives economic growth.',
        modelCounter:
          'Every major UBI pilot contradicts this. Finland\'s two-year experiment found no reduction in employment and significant improvements in well-being. The Stockton, California pilot saw full-time employment increase from 28% to 40% among recipients because financial stability allowed people to search for better jobs instead of clinging to exploitative ones. The "people will stop working" fear assumes humans are inherently lazy, which is refuted by the fact that lottery winners, retirees, and the independently wealthy overwhelmingly continue to work. People do not want to do nothing; they want to not be desperate.',
      },
      {
        opponent:
          'The cost is astronomical. A $1,000 monthly payment to every American adult would cost over $3 trillion per year. That is more than the entire federal discretionary budget. Where does the money come from?',
        modelCounter:
          'The $3 trillion figure ignores offsets. Eliminating overlapping welfare programs like SNAP, TANF, and housing vouchers saves approximately $700 billion. A modest VAT of 10%, as proposed by Andrew Yang, generates roughly $800 billion. A financial transaction tax adds another $200 billion. Carbon taxes contribute further. The remaining gap closes when you factor in reduced healthcare costs from lower poverty-related illness, reduced incarceration costs, and increased tax revenue from economic growth. We already spend $2 trillion on poverty-adjacent programs with worse outcomes. This is a consolidation and upgrade, not a new expense.',
      },
      {
        opponent:
          'UBI is a band-aid for systemic problems. Instead of giving people cash, fix education, healthcare, and housing. Addressing root causes is always better than treating symptoms.',
        modelCounter:
          'This is a false dichotomy. UBI does not prevent fixing education, healthcare, or housing. It accelerates those fixes by giving people the economic security to advocate for themselves, retrain, relocate for opportunity, or leave exploitative situations. Scarcity mindset, which is well-documented in behavioral economics, reduces cognitive bandwidth by the equivalent of 13 IQ points. You cannot expect people to make optimal long-term decisions about education and health while they are in financial survival mode. UBI does not replace systemic reform; it creates the conditions where systemic reform becomes possible.',
      },
    ],
  },
  {
    id: 'tipping-abolished-pro',
    topic: 'Tipping culture should be abolished',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Tipping incentivizes great service. Servers who go above and beyond earn more. It is a direct, real-time performance reward that no salary system can replicate. Remove tipping and you remove motivation.',
        modelCounter:
          'The data destroys this intuition. Cornell researcher Michael Lynn found that service quality accounts for less than 2% of the variation in tip amounts. Attractiveness, race, and weather are stronger predictors than actual service. Tipping does not reward performance; it rewards demographics. Meanwhile, Japan has no tipping culture and consistently ranks among the highest in the world for service quality. Motivation comes from professional standards and fair wages, not from the lottery of customer generosity.',
      },
      {
        opponent:
          'Servers can earn far more through tips than any restaurant would pay as a salary. Top servers at high-end restaurants make $50,000 to $70,000 per year. Eliminate tipping and you are cutting their income.',
        modelCounter:
          'You are cherry-picking the top of the distribution. The Bureau of Labor Statistics reports median server pay at roughly $27,000 per year. For every server making great money at a steakhouse, there are dozens at Denny\'s earning poverty wages during slow Tuesday lunches. Tipping creates an income distribution that is wildly unequal and entirely unpredictable. A stable $20 to $25 per hour with benefits is better for the vast majority of service workers than a volatile system where income depends on factors they cannot control.',
      },
      {
        opponent:
          'Restaurants operate on razor-thin margins, typically 3 to 5 percent. If they have to pay servers full wages, menu prices will increase 20 to 25 percent and customers will eat out less. The entire industry contracts.',
        modelCounter:
          'Customers are already paying that 20%. It is just hidden as a tip instead of listed on the menu. Studies of restaurants that switched to no-tipping models, like Danny Meyer\'s Union Square Hospitality Group, found that overall spending remained flat because the tip was simply folded into the price. Total cost to the consumer did not change; it just became transparent. The current system is an accounting trick that offloads payroll risk onto workers and guilt onto diners while restaurants claim artificially low prices.',
      },
    ],
  },
  {
    id: 'ai-creates-jobs-pro',
    topic: 'AI will create more jobs than it destroys',
    userSide: 'pro',
    difficulty: 3,
    exchanges: [
      {
        opponent:
          'Previous technological revolutions took decades to play out. The Industrial Revolution displaced workers over a century. AI is moving at internet speed, displacing millions of jobs in years, not generations. There is no time for the labor market to adapt.',
        modelCounter:
          'The speed argument actually supports job creation. Faster technology adoption means faster creation of adjacent industries. The smartphone ecosystem went from zero to 15 million app developer jobs globally in under a decade. AI is following the same pattern: prompt engineering, AI safety, data curation, model fine-tuning, and AI ethics did not exist five years ago and now employ hundreds of thousands. The World Economic Forum projects 97 million new AI-related roles by 2025. Speed of disruption correlates with speed of new market formation, not just speed of destruction.',
      },
      {
        opponent:
          'AI is different from previous automation because it targets cognitive work, not just manual labor. When machines replaced muscles, workers moved to brain jobs. Where do brain workers move when AI replaces thinking?',
        modelCounter:
          'AI does not replace thinking. It replaces routine cognitive tasks, which is a crucial distinction. Radiologists are not being eliminated; they are being augmented to analyze more scans with higher accuracy. The pattern is consistent: ATMs did not eliminate bank tellers. Teller employment actually grew because banks opened more branches since they were cheaper to staff. Each teller shifted to relationship-based financial advising. AI handles the repetitive cognitive tasks, and humans move to roles requiring judgment, creativity, and interpersonal skills, which AI measurably cannot replicate.',
      },
      {
        opponent:
          'Even if new jobs are created, they will require advanced skills that displaced workers do not have. A 55-year-old truck driver cannot become a machine learning engineer. The transition will be devastating for millions.',
        modelCounter:
          'The skills gap argument assumes new AI jobs are all technical, which is false. The fastest-growing AI-adjacent roles include AI trainers who provide human feedback, content moderators, conversational designers, and AI-assisted healthcare coordinators, none of which require a computer science degree. Amazon retrained 300,000 employees for cloud-adjacent roles through internal programs. The truck driver will not become an ML engineer, but they might manage autonomous fleet logistics, a role that values their decade of route knowledge. Transitions require policy support, but the jobs themselves are emerging across every skill level.',
      },
      {
        opponent:
          'You are being naively optimistic. Goldman Sachs estimates AI could automate 300 million full-time jobs globally. Even if new jobs emerge, the scale of displacement will cause a period of massive unemployment and social unrest.',
        modelCounter:
          'Goldman Sachs also noted in the same report that AI could increase global GDP by 7%, roughly $7 trillion. That wealth does not materialize in a vacuum; it flows through new industries and roles. McKinsey\'s analysis estimates that for every job automated, 1.1 to 1.5 new jobs are created across adjacent fields. The transition period is real, and it demands proactive reskilling investment, but "there will be a rough transition" is a very different claim than "AI will destroy more jobs than it creates." History has sided with net creation after every technological shift. The burden of proof is on the pessimists to explain why this time is different.',
      },
    ],
  },
  {
    id: 'ev-mandatory-pro',
    topic: 'Electric vehicles should be mandatory by 2035',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'The electrical grid cannot handle it. If every car is electric, peak demand would overwhelm power infrastructure. We would need to build hundreds of new power plants, many of which would burn natural gas. You are just moving emissions from the tailpipe to the smokestack.',
        modelCounter:
          'Even on the current grid, which includes natural gas and coal, EVs produce 60 to 70% fewer lifecycle emissions than gasoline cars according to the Union of Concerned Scientists. The grid is getting cleaner every year; renewables now generate over 20% of US electricity and climbing. As for capacity, a Department of Energy study found that existing US grid capacity could support 150 million EVs if charging is managed with off-peak incentives, using power plants that currently idle overnight. The grid argument assumes a static infrastructure when the whole point of a 2035 target is to drive parallel investment in both vehicles and energy.',
      },
      {
        opponent:
          'EVs are too expensive for working families. The average EV costs over $55,000. You are creating a mandate that only the wealthy can comply with. This is regressive policy disguised as environmentalism.',
        modelCounter:
          'The average price is skewed by luxury models. The Chevy Equinox EV starts under $35,000, and battery costs have fallen 90% since 2010. Bloomberg projects EVs will reach price parity with gas cars by 2027, eight years before the mandate takes effect. More critically, total cost of ownership is already lower for EVs: no oil changes, fewer brake replacements, and electricity costs roughly one-third of gasoline per mile. A 2035 mandate gives the market a decade to continue driving costs down, exactly as regulations did with catalytic converters, which were "too expensive" in 1975 and cost pennies per unit by 1990.',
      },
      {
        opponent:
          'What about rural areas? Charging infrastructure barely exists outside major cities. A farmer in Montana cannot wait 45 minutes at a charging station that is 80 miles away. This mandate ignores rural reality.',
        modelCounter:
          'Rural drivers actually benefit more from EVs because they can charge at home overnight, eliminating gas station trips entirely. The 45-minute charging station concern describes today\'s infrastructure, not 2035\'s. The Bipartisan Infrastructure Law allocated $7.5 billion for 500,000 new chargers specifically targeting rural and underserved areas. Fast chargers already deliver 200 miles of range in 15 minutes. A 2035 mandate creates the demand signal that makes private infrastructure investment profitable in rural areas, the same way the Rural Electrification Act brought power lines to farms that the market alone never would have served.',
      },
    ],
  },
  {
    id: 'standardized-testing-con',
    topic: 'Standardized testing should be eliminated',
    userSide: 'con',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Standardized tests are biased toward wealthy students who can afford prep courses and tutors. SAT scores correlate more strongly with family income than with academic ability. These tests measure privilege, not potential.',
        modelCounter:
          'The correlation with income is real but misinterpreted. Height correlates with income too; that does not make measuring height biased. Standardized tests reveal inequality; they do not create it. When the University of California temporarily dropped the SAT, researchers found that holistic admissions actually decreased socioeconomic diversity because subjective criteria like extracurriculars and essays favored wealthy applicants even more. The SAT, for all its flaws, is the most objective data point a low-income student with no connections or fancy extracurriculars can use to demonstrate ability. Eliminating it removes their strongest tool.',
      },
      {
        opponent:
          'Teaching to the test narrows curriculum. Schools cut art, music, and creative thinking to drill multiple-choice strategies. We are training students to fill bubbles, not to think critically or solve real-world problems.',
        modelCounter:
          'Curriculum narrowing is a school administration problem, not a testing problem. Finland uses national standardized assessments and also has one of the most creative, student-centered curricula in the world. The issue is how American schools respond to tests, not the tests themselves. Moreover, the alternative is worse: without standardized benchmarks, how do you identify schools that are failing their students? Before standardized testing requirements, struggling schools in low-income districts could hide behind inflated grades for decades. Testing created transparency. The solution is better tests, not no tests.',
      },
      {
        opponent:
          'Standardized tests create crippling anxiety in students. Children as young as eight are experiencing panic attacks over state tests. The mental health cost is not worth whatever marginal data these assessments provide.',
        modelCounter:
          'Test anxiety is real, but the response should be teaching resilience, not eliminating assessment. Life is full of high-stakes evaluations: job interviews, professional certifications, medical boards. Removing all testing from childhood does not protect children; it leaves them unprepared. Research from the American Psychological Association shows that moderate stress actually improves performance and learning retention through a process called desirable difficulty. The schools with the worst test anxiety are also the ones that over-emphasize test scores in harmful ways. Reform the stakes and the culture, not the measurement tool.',
      },
    ],
  },
  {
    id: 'homework-banned-elementary-pro',
    topic: 'Homework should be banned for elementary students',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Homework builds discipline and responsibility. Children need to learn that work does not stop when the bell rings. These habits, managing deadlines, working independently, set the foundation for academic success in middle school and beyond.',
        modelCounter:
          'A meta-analysis by Duke researcher Harris Cooper, the most comprehensive study on this topic, found zero correlation between homework and academic achievement in elementary school. None. The "building habits" argument sounds intuitive but has no empirical support for children under 12. What does have support is that play, unstructured exploration, and adequate sleep are critical for cognitive development at that age. You are sacrificing evidence-based developmental activities for a practice that produces no measurable academic benefit. That is not discipline; it is ritual.',
      },
      {
        opponent:
          'Homework keeps parents involved in their child\'s education. It gives families a window into what their kids are learning and creates opportunities for shared learning experiences at home.',
        modelCounter:
          'In practice, homework does the opposite. It turns parents into unpaid, untrained tutors and transforms kitchen tables into battlegrounds. A survey by the American Psychological Association found that homework is the number one source of stress between parents and children. For families where parents work multiple jobs, lack English proficiency, or did not attend college, homework creates inequity, not involvement. There are far better ways to involve parents: school events, reading together, science projects chosen by the family. Mandatory nightly worksheets are not engagement; they are compliance.',
      },
      {
        opponent:
          'Some subjects like math and reading require repetitive practice. You cannot build fluency without it. If kids do not practice multiplication tables or reading at home, they fall behind.',
        modelCounter:
          'Practice matters, but context matters more. Research on spaced repetition shows that short, frequent practice sessions are optimal, and those can happen during the school day. Countries like Finland assign virtually no homework to young children and consistently outperform the US in math and reading on international assessments. The school day has plenty of room for practice if instruction time is used efficiently instead of being consumed by administrative tasks and standardized test prep. The problem is not insufficient practice time; it is how existing school hours are allocated.',
      },
    ],
  },
  {
    id: 'mandatory-voting-pro',
    topic: 'Voting should be mandatory',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Compulsory voting violates freedom. The right to vote includes the right not to vote. Forcing people to the polls is authoritarian and incompatible with democratic values. Expression includes the right to stay silent.',
        modelCounter:
          'We mandate jury duty, tax filing, and census participation, all civic obligations that restrict individual choice for collective benefit. Nobody calls those authoritarian. Australia has had compulsory voting since 1924 and is consistently ranked among the freest democracies on earth. The "freedom not to vote" argument sounds principled until you realize that low turnout systematically distorts representation toward older, wealthier, and whiter demographics. Your freedom of abstention is someone else\'s erasure from the political system.',
      },
      {
        opponent:
          'Uninformed voters will just pick randomly or vote for the most recognizable name. You are diluting the votes of people who actually research candidates with noise from people who do not care. Quality of participation matters more than quantity.',
        modelCounter:
          'The "uninformed voter" argument has been used historically to justify poll taxes, literacy tests, and other voter suppression tools. It assumes a class of people qualified to decide who deserves a voice. Research from Australia shows that compulsory voting does not increase random voting; it increases political engagement because people who must vote have an incentive to learn. Donkey votes, the equivalent of random selection, account for less than 2% of Australian ballots. Meanwhile, mandatory voting virtually eliminates the billions spent on voter suppression and "get out the vote" campaigns, redirecting political energy toward actual policy debate.',
      },
      {
        opponent:
          'If people choose not to vote, that is a signal that the system is not offering them good choices. Low turnout is feedback. Making voting mandatory just masks the symptom of voter disillusionment without addressing the cause.',
        modelCounter:
          'Low turnout is not evenly distributed feedback. It disproportionately affects low-income and minority communities, not because they are disillusioned but because they face practical barriers: long lines, limited polling hours, voter ID laws, and inability to take time off work. Treating non-voting as a philosophical statement romanticizes what is often a structural exclusion. In countries with mandatory voting, politicians cannot win by suppressing turnout; they have to win by appealing to the broadest possible electorate. That structural incentive alone transforms the quality of political competition.',
      },
    ],
  },
  {
    id: 'space-exploration-pro',
    topic: 'Space exploration funding should be increased',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'We have unsolved problems on Earth: poverty, disease, climate change. Spending billions to send robots to Mars is vanity when children are starving. Fix the home planet before exploring new ones.',
        modelCounter:
          'NASA\'s annual budget is $25 billion, which is 0.5% of federal spending. The US spends more on air conditioning military tents in the Middle East than on space exploration. This is not an either-or situation; it is a priorities illusion. More importantly, space research directly solves Earth problems. NASA technology gave us water purification systems used in developing nations, crop monitoring satellites that prevent famine, and the atmospheric science that identified the ozone hole. Cutting space funding to address poverty is like cutting medical research to address hospital overcrowding. You lose the solution pipeline.',
      },
      {
        opponent:
          'Private companies like SpaceX and Blue Origin are handling space exploration now. Let billionaires spend their own money. Government funding is redundant when the private sector is more efficient and innovative.',
        modelCounter:
          'SpaceX exists because of NASA. The $396 million NASA contract for Commercial Orbital Transportation Services was the lifeline that kept SpaceX alive during its near-bankruptcy in 2008. Private companies optimize for profit, which means they pursue commercially viable activities like satellite launches and space tourism. They do not fund the James Webb Space Telescope, planetary defense systems, or fundamental research on dark matter. The GPS system, which generates $1.4 trillion in annual economic value, was a government project that no private company would have built because the returns were too diffuse and long-term. Public and private space investment are complementary, not redundant.',
      },
      {
        opponent:
          'Space colonization is science fiction. Mars has no magnetic field, lethal radiation, and toxic soil. We are centuries away from making another planet habitable. Current spending on colonization-oriented research is premature.',
        modelCounter:
          'Nobody serious is proposing Mars colonization as an immediate goal. The value of pushing toward it is the technology developed along the way. The Apollo program, which never intended to colonize the Moon, produced 6,300 patents and technologies including CAT scans, memory foam, scratch-resistant lenses, and freeze-dried food. For every dollar NASA spends, the economy sees $7 to $14 in return through spinoff technologies. Increased space funding is not about reaching Mars next year; it is about accelerating the technology pipeline that drives innovation across every sector of the economy. The destination justifies the journey, even if the journey is the real product.',
      },
    ],
  },
  {
    id: 'privacy-over-security-pro',
    topic: 'Privacy is more important than security',
    userSide: 'pro',
    difficulty: 3,
    exchanges: [
      {
        opponent:
          'If you have nothing to hide, you have nothing to fear. Surveillance prevents terrorism and crime. The NSA\'s programs have disrupted dozens of terror plots. Privacy is a luxury; safety is a necessity.',
        modelCounter:
          'The "nothing to hide" argument was debunked by a federal review board in 2014 that found the NSA\'s bulk data collection program had not stopped a single terrorist attack. Not one. Meanwhile, the same surveillance infrastructure was used by NSA employees to spy on romantic partners, a practice so common it earned the internal nickname LOVEINT. The question is never whether a benevolent government could use surveillance well. The question is what happens when a less benevolent government inherits the infrastructure. Every authoritarian regime in history started with a surveillance apparatus built for "security."',
      },
      {
        opponent:
          'Law enforcement needs access to encrypted communications to catch child predators, drug traffickers, and terrorists. End-to-end encryption creates dark spaces where the worst criminals operate with impunity.',
        modelCounter:
          'This is the going-dark narrative, and it is empirically false. Law enforcement has more data available now than at any point in human history. Location data, metadata, social media, financial records, and smart device logs provide an ocean of investigative information even without breaking encryption. The FBI\'s own crime statistics show clearance rates for violent crime have not declined with the rise of encryption. Meanwhile, weakening encryption does not create a backdoor just for law enforcement; it creates one for every hacker, foreign intelligence agency, and criminal on earth. You cannot build a lock that only good people can pick.',
      },
      {
        opponent:
          'In a post-9/11 world, the threat is real. Thousands of people died because intelligence agencies could not connect the dots. Some privacy trade-offs are necessary to prevent mass casualty events. The stakes are literally life and death.',
        modelCounter:
          '9/11 was not a failure of insufficient surveillance. The 9/11 Commission found it was a failure of information sharing between agencies that already had the relevant intelligence. The CIA knew about two hijackers and did not tell the FBI. More data collection did not solve this; better coordination did. Using a tragedy caused by bureaucratic incompetence to justify mass surveillance is a logical fallacy. Benjamin Franklin\'s warning has never been more relevant: those who give up essential liberty for temporary safety deserve neither. History shows they also get neither, because surveillance states are not safer; they are just less free.',
      },
      {
        opponent:
          'Be practical. People voluntarily give up massive amounts of privacy to Google, Facebook, and Amazon every day. If people truly valued privacy, they would behave differently. The market has spoken.',
        modelCounter:
          'Voluntary disclosure to a corporation is fundamentally different from compulsory surveillance by a government. Google cannot imprison you; the state can. But even the corporate privacy erosion you describe is not truly voluntary. It results from asymmetric information and the absence of meaningful alternatives. When every email provider reads your messages and every phone tracks your location, "consent" is a fiction. The market has not spoken; consumers have been given a false choice between participation in modern life and privacy. That is not preference revelation; it is coercion through infrastructure.',
      },
    ],
  },
  {
    id: 'athletes-overpaid-pro',
    topic: 'Professional athletes are overpaid',
    userSide: 'pro',
    difficulty: 1,
    exchanges: [
      {
        opponent:
          'Athletes are paid what the market dictates. If millions of people pay to watch them, the revenue exists and they deserve their share. A teacher does not generate $500 million in ticket sales and merchandise. Supply and demand is not a moral judgment.',
        modelCounter:
          'Market outcomes are not the same as moral outcomes. The market also "dictated" that pharmaceutical executives should earn thousands of times more than the researchers who develop the drugs. Market wages reflect bargaining power, not social value. Professional sports leagues are also not free markets; they are government-subsidized cartels. NFL teams have received over $7 billion in public stadium funding. When taxpayers build the arena, grant antitrust exemptions, and subsidize broadcast infrastructure, calling the resulting wages "market-driven" misrepresents the economics entirely.',
      },
      {
        opponent:
          'Athletes have extremely short careers, usually 3 to 7 years, and put their bodies at risk of permanent injury. High pay compensates for a compressed earning window and genuine physical danger. They deserve hazard pay.',
        modelCounter:
          'Military combat veterans face far greater physical danger with careers averaging 6 years of active duty and earn roughly $40,000 per year. Logging workers have the highest injury rate of any profession and earn $45,000. If compensation tracked physical risk and career brevity, these workers would out-earn athletes by orders of magnitude. The hazard pay argument only works if you ignore every other dangerous profession. Athletes are not paid for risk; they are paid for entertainment scarcity, which is a very different justification than the one you offered.',
      },
      {
        opponent:
          'Star athletes inspire millions. Kids look up to them, communities rally around them, and they drive economic activity in their cities. The cultural value they create justifies their compensation.',
        modelCounter:
          'Inspiration is not a function of pay scale. Simone Biles inspired more people at the Olympics earning zero salary than most NBA players do earning $40 million. Community rallying around sports teams happens in college athletics too, where players historically earned nothing. The economic activity argument has been thoroughly debunked: Stanford economist Roger Noll found that professional sports teams have zero net positive impact on local economies because spending on sports substitutes for spending on other entertainment. The inspiration and economic value exist independent of whether an individual player earns $5 million or $50 million.',
      },
    ],
  },
  {
    id: 'fast-food-ads-banned-pro',
    topic: 'Fast food advertising should be banned',
    userSide: 'pro',
    difficulty: 2,
    exchanges: [
      {
        opponent:
          'Banning advertising is a violation of free speech. Commercial speech is protected under the First Amendment. If a legal product exists, the company has the right to market it. This is a slippery slope to government control of all messaging.',
        modelCounter:
          'Commercial speech has always had less protection than political speech. We banned cigarette TV advertising in 1971 and the republic survived. The Supreme Court in Central Hudson explicitly held that the government can restrict commercial speech for products that cause demonstrable harm. Obesity-related illness costs the US $173 billion annually in medical expenses. The slippery slope argument requires you to explain why banning tobacco ads did not lead to banning all ads in the subsequent 50 years. It did not, because the legal framework distinguishes between harmful and benign products. Fast food advertising to children meets every existing criterion for restriction.',
      },
      {
        opponent:
          'Personal responsibility exists. No one is forced to eat fast food. People make their own choices. The answer is education about nutrition, not banning companies from speaking to consumers.',
        modelCounter:
          'McDonald\'s alone spends $2 billion per year on advertising. The entire federal nutrition education budget is $1 billion. You are proposing that individual willpower should overcome a 2,000-to-1 spending disadvantage in the information environment. Children see an average of 13 food ads per day, nearly all for junk food. A child cannot meaningfully "choose" when the information landscape is that distorted. Quebec banned fast food advertising to children in 1980 and saw a 13% reduction in childhood obesity compared to the rest of Canada. Education works, but only when it is not drowned out by billions in counter-messaging.',
      },
      {
        opponent:
          'Banning fast food ads would devastate the media industry. Advertising revenue funds television, websites, and journalism. You would be pulling the financial rug out from under free media.',
        modelCounter:
          'This argument proves the problem, not the solution. If our media ecosystem is financially dependent on promoting unhealthy food, that is a structural flaw worth fixing, not a reason to preserve the status quo. When cigarette ads were banned, media did not collapse; other advertisers filled the slots. The UK restricted junk food advertising before 9 PM in 2007 and its media industry remained profitable. Ad space is fungible. Remove fast food ads and healthier food companies, fitness brands, and other industries will compete for that inventory. You are not eliminating advertising revenue; you are changing which products buy it.',
      },
    ],
  },
  {
    id: 'crypto-replace-currency-con',
    topic: 'Cryptocurrency will replace traditional currency',
    userSide: 'con',
    difficulty: 3,
    exchanges: [
      {
        opponent:
          'Fiat currency is controlled by central banks that print money at will, devaluing your savings through inflation. Bitcoin has a fixed supply of 21 million coins, making it a superior store of value. Cryptocurrency is the only honest money.',
        modelCounter:
          'A "store of value" that drops 60% in a year, as Bitcoin did in 2022, is not a store of anything except anxiety. Controlled inflation of 2-3% is a feature, not a bug: it incentivizes spending and investment rather than hoarding. Deflationary currencies historically cause economic stagnation because people defer purchases expecting lower prices tomorrow. The gold standard, the closest historical analog to Bitcoin\'s fixed supply, was abandoned by every major economy because it caused devastating depressions. Bitcoin solves a problem that monetary economics solved a century ago and presents the solution as innovation.',
      },
      {
        opponent:
          'Cryptocurrency enables borderless transactions without intermediaries. Sending money internationally through banks takes days and costs 5-10% in fees. Crypto does it in minutes for pennies. It is technologically superior infrastructure.',
        modelCounter:
          'Bitcoin processes 7 transactions per second. Visa processes 65,000. During peak demand, Bitcoin transaction fees have spiked above $60, which is hardly "pennies." The Lightning Network was supposed to fix this years ago and still handles a fraction of Bitcoin\'s already tiny volume. Meanwhile, traditional payment infrastructure is evolving too. India\'s UPI system processes billions of free instant transactions monthly. Brazil\'s Pix does the same. FedNow launched in the US for real-time payments. Crypto solved cross-border payments for the 2017 tech landscape, and the traditional system has since closed that gap without requiring you to manage private keys or risk irreversible losses from a typo.',
      },
      {
        opponent:
          'Crypto gives financial access to the 1.7 billion unbanked people worldwide. You do not need a bank account, credit history, or government ID. Just a smartphone. It is the most inclusive financial system ever created.',
        modelCounter:
          'The unbanked population lacks access primarily due to poverty, not technology. Someone earning $2 per day cannot afford Bitcoin\'s transaction fees during network congestion, let alone the smartphone and data plan required to use it. In El Salvador, which made Bitcoin legal tender as a test case, Chainalysis data showed that after the initial government incentive was spent, 80% of users stopped transacting in Bitcoin entirely. M-Pesa in Kenya banked more previously unbanked people with simple SMS-based mobile money than all cryptocurrencies combined. Financial inclusion requires meeting people where they are, not requiring them to understand private key management.',
      },
      {
        opponent:
          'Decentralization is the point. No government can freeze your crypto assets or inflate them away. In an age of increasing authoritarianism, censorship-resistant money is essential. Look at what happened to Canadian truckers or Russian dissidents whose bank accounts were frozen.',
        modelCounter:
          'The decentralization argument has merit for activists in authoritarian regimes, but it describes a niche use case, not a currency replacement. For the vast majority of people, the protections of the regulated banking system, FDIC insurance, fraud reversal, consumer protection laws, are far more valuable than censorship resistance they will never need. And crypto is less decentralized than advertised: two mining pools control over 50% of Bitcoin\'s hash rate, three stablecoin issuers control the on-ramps, and a handful of exchanges handle most volume. You have not eliminated centralized control. You have replaced regulated, accountable intermediaries with unregulated, unaccountable ones.',
      },
    ],
  },
];
