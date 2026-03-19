export interface SecondOrderScenario {
  id: string;
  scenario: string;
  obviousTake: string;
  edgeCases: string[];
  principle: string;
}

export const secondOrderScenarios: SecondOrderScenario[] = [
  {
    id: 'so-1',
    scenario: 'Raise the federal minimum wage to $20/hour',
    obviousTake: 'Workers deserve a living wage — pay people more!',
    edgeCases: [
      'Small businesses in low-cost-of-living areas may cut staff or hours to survive the margin squeeze.',
      'Automation becomes cheaper relative to labor, accelerating self-checkout kiosks and robotic kitchens.',
      'Teenagers and low-skill workers lose entry-level jobs because employers now demand experienced hires at the higher rate.',
      'Prices rise on goods and services, partially offsetting the wage gain for the very workers it was meant to help.',
      'Tipped workers in states where tips count toward minimum wage could see restaurants eliminate tipping and restructure pay downward.'
    ],
    principle: 'A price floor doesn\'t just raise the floor — it removes the rungs below it.'
  },
  {
    id: 'so-2',
    scenario: 'Make college tuition free for everyone',
    obviousTake: 'Education should be a right, not a privilege — remove the paywall!',
    edgeCases: [
      'Taxpayers without degrees subsidize degrees for wealthy families who could easily pay.',
      'Universities lose the pricing signal that tells them to control costs, so bloated administration grows unchecked.',
      'Degree inflation accelerates — jobs that never needed a degree now require one, pushing non-college paths further to the margins.',
      'Trade schools and apprenticeships lose enrollment because "free" college looks like the obviously better deal.',
      'Quality may decline as universities handle surging enrollment without proportional funding increases.'
    ],
    principle: 'When you make something free, you don\'t eliminate the cost — you just hide who\'s paying and what\'s being lost.'
  },
  {
    id: 'so-3',
    scenario: 'Ban single-use plastic bags nationwide',
    obviousTake: 'Plastic is destroying the ocean — just ban it!',
    edgeCases: [
      'Reusable bags require 100-200 uses to offset their higher carbon footprint in manufacturing — most people lose or forget them long before that.',
      'Paper bags have a higher carbon and water footprint per unit than plastic bags.',
      'Low-income shoppers who reused plastic bags for trash liners now have to buy dedicated garbage bags, which are thicker plastic.',
      'Stores in food deserts with walk-in customers face logistical headaches when shoppers can\'t carry loose groceries.',
      'The policy addresses a visible but relatively small fraction of ocean plastic, most of which comes from fishing gear and industrial sources.'
    ],
    principle: 'Solving the most visible version of a problem can feel like progress while the invisible bulk remains untouched.'
  },
  {
    id: 'so-4',
    scenario: 'Require social media age verification for users under 16',
    obviousTake: 'Kids are being damaged by social media — protect them!',
    edgeCases: [
      'Effective verification requires uploading government IDs or biometric data, creating a massive privacy and surveillance infrastructure.',
      'Kids use VPNs, fake birthdays, or parents\' accounts, making enforcement a cat-and-mouse game.',
      'Platforms that comply lose teenage users to unregulated alternatives with even fewer safety features.',
      'Parents who currently use social media as a supervised activity lose the ability to co-navigate it with their kids.',
      'The same ID-verification infrastructure can be repurposed by authoritarian governments to track dissidents.'
    ],
    principle: 'A gate designed to protect one group often becomes a checkpoint that controls everyone.'
  },
  {
    id: 'so-5',
    scenario: 'Implement Universal Basic Income of $1,000/month for all adults',
    obviousTake: 'People are struggling — just give everyone cash and let them decide!',
    edgeCases: [
      'Landlords in tight housing markets raise rents by roughly the UBI amount, capturing the transfer as profit.',
      'Existing means-tested programs (food stamps, housing vouchers) may be cut to fund UBI, leaving the poorest worse off on net.',
      'Inflation in essential goods erodes purchasing power if UBI isn\'t indexed to real costs.',
      'Political pressure to means-test or condition the UBI grows over time, eroding the "universal" part that made it simple.',
      'Workers in unpleasant but necessary jobs (waste collection, meatpacking) may quit, creating labor shortages in critical sectors.'
    ],
    principle: 'Cash is neutral but markets aren\'t — giving everyone more money doesn\'t mean everyone gets more value.'
  },
  {
    id: 'so-6',
    scenario: 'Impose strict rent control in major cities',
    obviousTake: 'Rents are insane — cap them so people can afford to live!',
    edgeCases: [
      'Developers stop building new rental housing because the returns don\'t justify the investment, worsening the shortage.',
      'Landlords defer maintenance and upgrades since they can\'t recoup costs through rent increases, degrading housing quality.',
      'Long-term tenants hoard rent-controlled apartments they\'ve outgrown, reducing turnover and availability.',
      'A two-tier market emerges: insiders with controlled rents vs. newcomers facing even higher market-rate prices on remaining units.',
      'Landlords convert rental units to condos or short-term rentals to escape the controls, shrinking the rental supply further.'
    ],
    principle: 'Capping the price of something scarce doesn\'t create more of it — it creates less.'
  },
  {
    id: 'so-7',
    scenario: 'Ban cars from city centers entirely',
    obviousTake: 'Cities should be for people, not cars — pedestrianize everything!',
    edgeCases: [
      'Disabled and elderly residents who can\'t walk or bike lose independent access to essential services.',
      'Small businesses that depend on drive-by traffic and easy parking may see revenue collapse during the transition.',
      'Delivery vehicles still need access, creating a complex exemption system ripe for abuse and corruption.',
      'Workers commuting from car-dependent suburbs with no viable transit option are effectively locked out of downtown jobs.',
      'Emergency vehicle response times may increase if infrastructure isn\'t redesigned to compensate.'
    ],
    principle: 'Designing a city for the most mobile people punishes the least mobile ones.'
  },
  {
    id: 'so-8',
    scenario: 'Provide free school lunches for every student regardless of income',
    obviousTake: 'No kid should go hungry at school — just feed them all!',
    edgeCases: [
      'Eliminating means-testing removes the stigma of "free lunch kids," which is itself a major benefit beyond nutrition.',
      'Schools in wealthy districts receive the same per-meal funding as schools in poor districts, even though need differs dramatically.',
      'Food quality may decline if the program scales without proportional budget increases, resulting in cheaper bulk ingredients.',
      'Local restaurants and food trucks near schools lose student customers, affecting small business ecosystems.',
      'Parents who previously packed healthy lunches may stop, and their kids now eat lower-quality cafeteria food.'
    ],
    principle: 'Universal programs trade targeting efficiency for dignity — and sometimes dignity is the more valuable outcome.'
  },
  {
    id: 'so-9',
    scenario: 'Defund the police and redirect budgets to social services',
    obviousTake: 'Police cause more harm than good in many communities — invest in alternatives!',
    edgeCases: [
      'Mental health responders without police backup face dangerous situations they\'re not equipped to handle.',
      'Wealthy neighborhoods hire private security, creating a two-tier safety system based on income.',
      'Response times for violent crimes increase, disproportionately affecting high-crime (often minority) neighborhoods.',
      'Social services take years to build capacity, but police budget cuts happen immediately, creating a dangerous gap.',
      'Officers who remain face higher workloads, lower morale, and faster burnout, degrading service quality further.'
    ],
    principle: 'You can\'t defund the bridge before building the tunnel — sequencing matters more than intention.'
  },
  {
    id: 'so-10',
    scenario: 'Legalize all drugs and treat addiction as a health issue',
    obviousTake: 'The war on drugs failed — decriminalize and treat, don\'t punish!',
    edgeCases: [
      'Legal availability may increase casual use, especially among young people who previously avoided drugs due to legal risk.',
      'Treatment infrastructure doesn\'t exist at scale — legalization without funded treatment just removes consequences without adding support.',
      'Drug tourism concentrates addiction problems in early-adopter jurisdictions, overwhelming local services.',
      'Employers still drug-test, so legal users face the same employment barriers without the deterrent.',
      'Pharmaceutical and tobacco companies lobby to commercialize newly legal drugs, applying the same predatory marketing that created the opioid crisis.'
    ],
    principle: 'Removing a bad solution doesn\'t automatically install a good one — the gap between is where people fall.'
  },
  {
    id: 'so-11',
    scenario: 'Mandate a four-day work week for all employers',
    obviousTake: 'People are burned out — give them an extra day off!',
    edgeCases: [
      'Hourly workers lose 20% of their income unless the mandate includes wage protection, which many proposals don\'t.',
      'Customer-facing industries (healthcare, retail, hospitality) can\'t compress service hours, so they need more staff at higher total cost.',
      'Competitive companies that already attract talent with flexibility lose a differentiator when it\'s mandated for everyone.',
      'Global companies face coordination nightmares when their US team works four days but overseas partners work five.',
      'Productivity gains in pilot studies often come from cutting meetings and busywork — a mandate doesn\'t force those cultural changes.'
    ],
    principle: 'Mandating an outcome that some achieve through culture doesn\'t import the culture — just the constraint.'
  },
  {
    id: 'so-12',
    scenario: 'Tax the rich at a 70% marginal rate',
    obviousTake: 'Billionaires have too much — tax them and fund public goods!',
    edgeCases: [
      'The ultra-wealthy earn most income through capital gains, not salary — a high income tax rate misses the actual wealth.',
      'Accountants and lawyers find loopholes faster than legislators can close them, so effective rates barely change.',
      'High earners relocate to lower-tax jurisdictions, taking their spending, philanthropy, and job creation with them.',
      'Small business owners filing as individuals get crushed by rates designed for billionaires.',
      'Political capital spent on symbolic tax fights could be spent on closing existing loopholes, which would raise more revenue.'
    ],
    principle: 'Taxing the scoreboard doesn\'t change the game — you have to tax the plays that actually score.'
  },
  {
    id: 'so-13',
    scenario: 'Cancel all existing student loan debt',
    obviousTake: 'A generation is drowning in debt — wipe the slate clean!',
    edgeCases: [
      'People who sacrificed to pay off loans or chose cheaper schools are penalized for being responsible.',
      'Future students have no reason to limit borrowing, and colleges have no reason to limit tuition — the cycle restarts.',
      'Cancellation is regressive: graduate degree holders (lawyers, MBAs, doctors) hold the most debt but earn the most.',
      'The $1.7 trillion cost comes from somewhere — either taxes, inflation, or cuts to other programs that help non-college-educated workers.',
      'It solves a symptom once but does nothing about the tuition inflation that created the problem.'
    ],
    principle: 'Mopping the floor while the faucet runs is a gesture, not a fix.'
  },
  {
    id: 'so-14',
    scenario: 'Implement single-payer universal healthcare',
    obviousTake: 'Healthcare is a human right — cover everyone with one system!',
    edgeCases: [
      'Eliminating private insurance displaces 500,000+ workers in that industry, requiring massive retraining.',
      'Government negotiating power lowers drug prices but may reduce pharmaceutical R&D investment in new treatments.',
      'Wait times for elective procedures increase as demand rises without a proportional increase in providers.',
      'Rural hospitals that were already struggling may face even lower reimbursement rates under a single payer.',
      'Political cycles mean healthcare funding becomes a partisan football, with coverage fluctuating every election.'
    ],
    principle: 'A single payer also means a single point of failure — and politics never takes a day off.'
  },
  {
    id: 'so-15',
    scenario: 'Open borders — let anyone live and work anywhere',
    obviousTake: 'Freedom of movement is a human right — borders are arbitrary lines!',
    edgeCases: [
      'Massive population flows overwhelm housing, schools, and hospitals in desirable destinations.',
      'Wages for low-skill domestic workers drop as labor supply surges, hurting the most vulnerable citizens.',
      'Brain drain devastates developing countries as their best-educated workers leave for richer nations.',
      'Social safety nets collapse under the weight of unlimited new beneficiaries who haven\'t contributed to the tax base.',
      'Cultural integration challenges at massive scale fuel nativist backlash that produces even harsher restrictions than before.'
    ],
    principle: 'A door without a frame isn\'t an open door — it\'s a missing wall, and the whole structure is at risk.'
  },
  {
    id: 'so-16',
    scenario: 'Make voting mandatory with a fine for non-voters',
    obviousTake: 'Democracy works better when everyone participates — make them show up!',
    edgeCases: [
      'Uninformed voters who don\'t care about politics now cast random or protest votes, adding noise to outcomes.',
      'The fine is regressive — $50 means nothing to the wealthy but punishes the working poor who couldn\'t get time off.',
      'Voter suppression shifts from preventing voting to manipulating the newly forced, disengaged electorate with misinformation.',
      'People in remote or underserved areas face logistical barriers and then get fined for a problem the government created.',
      'Compulsory voting may increase turnout without increasing civic engagement, creating a false sense of democratic health.'
    ],
    principle: 'Forcing people to the table doesn\'t mean they\'ll eat — and it doesn\'t mean the food is any good.'
  },
  {
    id: 'so-17',
    scenario: 'Ban tipping and require employers to pay full wages',
    obviousTake: 'Tipping is degrading and unpredictable — just pay workers fairly!',
    edgeCases: [
      'Top servers at high-end restaurants earn $50-80/hour with tips — a flat wage would be a massive pay cut for them.',
      'Menu prices jump 20-30% overnight, causing sticker shock that reduces dining out and hurts the industry.',
      'Without the incentive of tips, service quality may decline and customers lose their one lever of feedback.',
      'Restaurants in lower-income areas operate on razor-thin margins and may close rather than absorb the wage increase.',
      'A two-tier market emerges: upscale restaurants add "service charges" that function identically to mandatory tips.'
    ],
    principle: 'The people a reform claims to help should be the first ones asked whether they want it.'
  },
  {
    id: 'so-18',
    scenario: 'Make all public transit free',
    obviousTake: 'Transit should be a public good like roads — remove the fare barrier!',
    edgeCases: [
      'Fare revenue funds 30-40% of transit operating budgets — replacing it requires either tax increases or service cuts.',
      'Free transit attracts riders who use it as shelter rather than transportation, creating safety concerns for other passengers.',
      'Without fare revenue, transit agencies lose political leverage to argue for service improvements and expansion.',
      'Car commuters who would never take transit still pay for it through taxes, creating a political constituency opposed to funding.',
      'Overcrowding on already-strained systems makes the experience worse for existing riders who depend on it.'
    ],
    principle: 'Free at the point of use isn\'t free — and underfunded services serve no one well.'
  },
  {
    id: 'so-19',
    scenario: 'Provide universal pre-K for all 3- and 4-year-olds',
    obviousTake: 'Early education closes achievement gaps — give every kid a head start!',
    edgeCases: [
      'Existing high-quality private and home-based childcare providers get undercut and close, reducing overall options.',
      'The quality of universal pre-K programs varies enormously — a bad pre-K may be worse than a good home environment.',
      'Staffing at scale requires hiring rapidly, potentially lowering teacher quality standards during the ramp-up.',
      'Parents who prefer to raise their kids at home until kindergarten feel pressured that their children are "falling behind."',
      'Studies show pre-K gains often fade by third grade unless followed by continued high-quality schooling, which the policy doesn\'t address.'
    ],
    principle: 'An early advantage that fades is a feel-good metric, not a real outcome.'
  },
  {
    id: 'so-20',
    scenario: 'Abolish cash bail nationwide',
    obviousTake: 'Cash bail punishes poverty — rich people go free, poor people rot in jail!',
    edgeCases: [
      'Without bail, judges must decide who to release pretrial using risk-assessment algorithms that may encode racial bias.',
      'Some defendants released without bail commit new crimes or fail to appear, fueling public backlash and re-incarceration pushes.',
      'Bail bondsmen and their employees lose their livelihoods overnight, with no transition plan.',
      'Victims of domestic violence lose the protection window that bail provided while their abuser arranges release.',
      'Courts become bottlenecked with pretrial hearings that were previously resolved quickly through the bail system.'
    ],
    principle: 'Abolishing an unjust system without replacing its functions doesn\'t create justice — it creates a vacuum.'
  },
  {
    id: 'so-21',
    scenario: 'Ban all lobbying and corporate political donations',
    obviousTake: 'Money corrupts politics — get corporations out of government!',
    edgeCases: [
      'Lobbying includes advocacy by nonprofits, unions, civil rights groups, and environmental organizations — not just corporations.',
      'Without lobbyists, legislators lose access to technical expertise on complex issues like biotech regulation or trade policy.',
      'Money flows to dark channels — Super PACs, think tanks, and "issue advocacy" that\'s harder to track than direct donations.',
      'Small businesses lose their collective voice against regulations written by large corporations with in-house legal teams.',
      'First Amendment challenges make enforcement nearly impossible, so the ban exists on paper but not in practice.'
    ],
    principle: 'Banning influence doesn\'t eliminate it — it just forces it underground where accountability can\'t follow.'
  },
  {
    id: 'so-22',
    scenario: 'Implement a nationwide gun buyback program',
    obviousTake: 'Too many guns cause too many deaths — buy them back and destroy them!',
    edgeCases: [
      'People who turn in guns are overwhelmingly law-abiding owners — criminals don\'t participate in buybacks.',
      'Buyback prices are below market value, so savvy owners keep valuable firearms and sell junk guns to the government.',
      'With 400 million guns in circulation, even a wildly successful program barely dents the total supply.',
      'Rural communities where guns serve practical purposes (predator control, livestock protection) lose essential tools.',
      'The political capital and billions spent on a buyback could fund mental health services, which address the root cause of most gun violence.'
    ],
    principle: 'A voluntary program only collects from the willing — and the willing aren\'t the problem.'
  },
  {
    id: 'so-23',
    scenario: 'Require companies to disclose all employee salaries publicly',
    obviousTake: 'Pay transparency closes the gender and racial wage gap — sunshine is the best disinfectant!',
    edgeCases: [
      'Employees discover peers earn more, but without context (performance, tenure, negotiation), resentment replaces understanding.',
      'Companies flatten pay to avoid controversy, punishing top performers and rewarding mediocrity.',
      'Competitors poach employees with surgical precision using public salary data.',
      'Privacy concerns arise — your salary becomes public knowledge to neighbors, family, and strangers.',
      'Managers lose the flexibility to give retention raises or correct historical underpayment without triggering organization-wide demands.'
    ],
    principle: 'Transparency without context creates more conflict than it resolves.'
  },
  {
    id: 'so-24',
    scenario: 'Replace all standardized testing with portfolio-based assessment',
    obviousTake: 'Standardized tests are biased and reductive — let students show their real abilities!',
    edgeCases: [
      'Wealthy students produce polished portfolios with private tutors and expensive tools; poor students can\'t compete on production quality.',
      'Grading portfolios is subjective, slow, and expensive — scaling it to millions of students introduces inconsistency.',
      'Colleges and employers lose a common benchmark for comparison, making admissions even more opaque and arbitrary.',
      'Students with test anxiety benefit, but students who are poor writers or presenters are now disadvantaged in the other direction.',
      'Without standardized data, tracking achievement gaps across demographics becomes nearly impossible.'
    ],
    principle: 'Every assessment method has a bias — changing the method just changes who\'s disadvantaged.'
  },
  {
    id: 'so-25',
    scenario: 'Ban algorithm-driven social media feeds and require chronological timelines',
    obviousTake: 'Algorithms are addictive and divisive — show posts in order and let people choose!',
    edgeCases: [
      'Chronological feeds favor high-volume posters and brands, drowning out casual users and small creators.',
      'Users who follow thousands of accounts miss most content without algorithmic surfacing, making the experience worse.',
      'Platforms lose ad-targeting precision, revenue drops, and they compensate with more intrusive ads or paywalls.',
      'Misinformation spreads just as well chronologically — virality is a social phenomenon, not purely algorithmic.',
      'Users who actually prefer curated feeds lose the option — the ban assumes everyone wants the same experience.'
    ],
    principle: 'Blaming the mirror for what it reflects doesn\'t change the face — algorithms amplify human nature, they don\'t create it.'
  },
  {
    id: 'so-26',
    scenario: 'Implement a sugar tax on all sweetened beverages',
    obviousTake: 'Sugar is poison — tax it like tobacco and save lives!',
    edgeCases: [
      'The tax is regressive — low-income families spend a higher percentage of their income on groceries and beverages.',
      'Consumers switch to artificially sweetened alternatives whose long-term health effects are still debated.',
      'Small corner stores and bodegas in low-income neighborhoods lose sales as customers cross jurisdictional lines to avoid the tax.',
      'Companies reformulate with cheaper sweeteners that may be equally unhealthy but technically avoid the tax.',
      'Revenue often gets absorbed into general funds rather than earmarked for health programs, breaking the justification.'
    ],
    principle: 'A tax aimed at behavior change works best when the alternatives are accessible — and worst when they\'re not.'
  },
  {
    id: 'so-27',
    scenario: 'Require 50% female representation on all corporate boards',
    obviousTake: 'Women are underrepresented in leadership — mandate equality!',
    edgeCases: [
      'A small pool of qualified women gets spread across many boards, leading to "golden skirts" syndrome — the same women everywhere.',
      'Companies appoint women to non-influential board seats to meet quotas while keeping real power in male-dominated committees.',
      'Forced representation can create tokenism, where women are seen as quota-fillers rather than earned appointees.',
      'Industries with heavily male talent pipelines (mining, construction) face genuine shortages of women with relevant board-level experience.',
      'The mandate addresses the symptom (board composition) without fixing the pipeline (promotion, mentoring, hiring at junior levels).'
    ],
    principle: 'Representation at the top without investment at the bottom is a trophy, not a transformation.'
  },
  {
    id: 'so-28',
    scenario: 'Replace prisons with mandatory rehabilitation programs',
    obviousTake: 'Prisons don\'t rehabilitate — they just warehouse people. Focus on treatment!',
    edgeCases: [
      'Some violent offenders pose genuine public safety risks that rehabilitation alone cannot mitigate in a reasonable timeframe.',
      'Rehabilitation programs have highly variable success rates and depend on the offender\'s willingness to engage.',
      'Victims and their families may feel that purely rehabilitative approaches trivialize the harm done to them.',
      'Mandatory rehab without confinement for serious crimes removes the deterrence effect, potentially increasing crime.',
      'Funding quality rehabilitation at scale costs more than incarceration, and legislatures often underfund the programs after passing them.'
    ],
    principle: 'Compassion for the offender that ignores the victim isn\'t justice — it\'s just a different imbalance.'
  },
  {
    id: 'so-29',
    scenario: 'Ban private schools to force investment in public education',
    obviousTake: 'Rich parents pull resources from public schools — make everyone use the same system!',
    edgeCases: [
      'Wealthy families move to the best public school districts, concentrating privilege geographically instead of institutionally.',
      'Religious and cultural communities lose the freedom to educate according to their values and traditions.',
      'Special-needs students who thrive in specialized private settings lose access to environments tailored to their needs.',
      'The sudden influx of students into public schools overwhelms capacity without corresponding funding increases.',
      'International schools and homeschooling explode as workarounds, creating new forms of educational inequality.'
    ],
    principle: 'Eliminating an escape valve doesn\'t fix the pressure — it just changes where the system bursts.'
  },
  {
    id: 'so-30',
    scenario: 'Implement a wealth tax of 2% on net worth above $50 million',
    obviousTake: 'Billionaires sit on idle wealth while people suffer — tax the hoard!',
    edgeCases: [
      'Valuing illiquid assets (private companies, art, real estate) annually is enormously complex and subjective.',
      'Founders of companies forced to sell shares to pay the tax may lose control of the businesses they built.',
      'Multiple European countries tried wealth taxes and repealed them because the costs of enforcement exceeded revenue collected.',
      'Capital flight to countries without wealth taxes accelerates, reducing the domestic tax base.',
      'The threshold inevitably drops over time (like the income tax did) — today\'s billionaire tax becomes tomorrow\'s millionaire tax.'
    ],
    principle: 'A tax that\'s expensive to collect and easy to avoid is a symbol, not a solution.'
  },
  {
    id: 'so-31',
    scenario: 'Make all zoning residential to solve the housing crisis',
    obviousTake: 'NIMBYs block housing — abolish zoning and let developers build!',
    edgeCases: [
      'Without zoning, industrial facilities can be built next to homes, creating health hazards and nuisance conflicts.',
      'Developers build luxury housing (highest margin) rather than affordable units, gentrifying neighborhoods.',
      'Infrastructure (water, sewage, roads, schools) wasn\'t designed for density increases and can\'t keep up.',
      'Historic and architecturally significant neighborhoods lose protections against demolition.',
      'Communities of color that fought for decades to keep polluters out of their neighborhoods lose their strongest legal tool.'
    ],
    principle: 'Removing all rules doesn\'t create freedom equally — it favors whoever has the most power to build.'
  },
  {
    id: 'so-32',
    scenario: 'Ban homework for all K-12 students',
    obviousTake: 'Homework stresses kids out and kills their love of learning — let kids be kids!',
    edgeCases: [
      'Students from homes without educational resources (books, engaged parents) lose the one structured practice time they had.',
      'Advanced subjects like math and foreign languages require repetitive practice that class time alone can\'t provide.',
      'Students heading to competitive colleges are unprepared for the independent workload expected of them.',
      'Parents lose visibility into what their children are learning and how they\'re performing.',
      'Teachers must either compress curriculum or cover less material, lowering overall educational outcomes.'
    ],
    principle: 'What feels like a burden and what builds capacity are often the same thing — context determines which.'
  },
  {
    id: 'so-33',
    scenario: 'Mandate that all new cars be electric by 2030',
    obviousTake: 'Climate change is urgent — force the switch to EVs now!',
    edgeCases: [
      'The electrical grid can\'t handle millions of simultaneous EV chargers without massive infrastructure upgrades that take decades.',
      'Lithium and cobalt mining for batteries creates environmental devastation and child labor in developing countries.',
      'Rural residents who drive long distances lack charging infrastructure and can\'t rely on current EV range.',
      'Low-income families who buy used cars are priced out — there\'s no affordable used EV market yet.',
      'Disposing of millions of functional gas cars creates a massive waste problem that offsets some environmental gains.'
    ],
    principle: 'Setting a deadline without building the road to meet it is an aspiration dressed up as a plan.'
  },
  {
    id: 'so-34',
    scenario: 'Forgive all medical debt',
    obviousTake: 'No one chooses to get sick — medical debt is immoral!',
    edgeCases: [
      'Hospitals and providers who absorb the write-offs may reduce services, staffing, or charity care to compensate.',
      'Without addressing why medical costs are high, new debt accumulates immediately after forgiveness.',
      'People who depleted savings or sold assets to pay medical bills get nothing — the responsible are penalized again.',
      'Blanket forgiveness includes debt from elective procedures alongside debt from emergencies, blurring the moral case.',
      'Health systems that already operate on thin margins (rural hospitals, community clinics) may close.'
    ],
    principle: 'Forgiving the debt without curing the disease means the debt just comes back — with interest.'
  },
  {
    id: 'so-35',
    scenario: 'Implement a three-strikes law for all felonies',
    obviousTake: 'Repeat offenders are dangerous — lock them up for good after three chances!',
    edgeCases: [
      'Nonviolent offenders get life sentences for minor third offenses, like stealing a slice of pizza (real case).',
      'Prosecutors gain enormous leverage to coerce plea deals, since defendants face life if they go to trial and lose.',
      'The law disproportionately affects Black and Latino men, who are already over-policed and over-charged.',
      'Prison costs skyrocket as aging inmates require expensive medical care for decades.',
      'People with two strikes have nothing to lose from committing violent crimes, since the punishment is the same either way.'
    ],
    principle: 'A blunt rule applied to a nuanced world doesn\'t create consistency — it creates absurdity.'
  }
];
