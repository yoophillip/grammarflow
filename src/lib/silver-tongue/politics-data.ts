export interface DebateTopic {
  topic: string;
  category: 'economy' | 'social' | 'foreign' | 'environment' | 'governance';
  democrat: {
    position: string;
    arguments: string[];
    data: string[];
  };
  republican: {
    position: string;
    arguments: string[];
    data: string[];
  };
}

export interface InterestingFact {
  category: string;
  facts: { title: string; detail: string }[];
}

export const debateTopics: DebateTopic[] = [
  {
    topic: 'Healthcare',
    category: 'social',
    democrat: {
      position: 'Universal healthcare / expand government coverage',
      arguments: [
        'Healthcare is a human right — no one should go bankrupt from medical bills',
        'Single-payer systems reduce administrative overhead (US spends ~34% on admin vs ~17% in Canada)',
        'Universal coverage improves preventive care, reducing costly ER visits',
        'Collective bargaining power lowers drug prices (Medicare negotiation saved est. $98.5B over 10 years under IRA)',
        'Countries with universal care (UK, Canada, Germany) spend less per capita with comparable outcomes',
      ],
      data: [
        'US spends $4.5 trillion/year on healthcare (~17.3% of GDP) — highest in the world',
        '27.6 million Americans were uninsured in 2023 (Census Bureau)',
        'Medical debt is the #1 cause of personal bankruptcy in the US',
        'Medicare administrative costs: ~2% vs private insurance: ~12-18%',
      ],
    },
    republican: {
      position: 'Free-market healthcare with less government intervention',
      arguments: [
        'Competition drives innovation — US leads the world in medical research and drug development',
        'Government-run systems create long wait times (Canadian avg wait: 27.7 weeks for specialist treatment)',
        'Individual choice in healthcare plans leads to better consumer-driven decisions',
        'Free markets incentivize efficiency and cost reduction through competition',
        'Expanded Health Savings Accounts (HSAs) give individuals tax-free control over health spending',
      ],
      data: [
        'US produces ~50% of all new major medicines globally',
        'Canadian wait times: median 27.7 weeks from referral to treatment (Fraser Institute 2023)',
        'US 5-year cancer survival rates among the highest in the world',
        'States that expanded insurance marketplace competition saw 7-15% premium decreases',
      ],
    },
  },
  {
    topic: 'Gun Control',
    category: 'social',
    democrat: {
      position: 'Stricter gun regulations to reduce gun violence',
      arguments: [
        'Universal background checks prevent sales to prohibited buyers — 22% of guns acquired without checks',
        'Assault weapons ban targets military-style weapons designed for maximum casualties',
        'Red flag laws allow courts to temporarily remove guns from at-risk individuals',
        'Countries with strict gun laws (Australia, Japan, UK) have dramatically lower gun death rates',
        'The 2nd Amendment was written for muskets and militia context — interpretation should evolve',
      ],
      data: [
        '48,204 people died from gun-related injuries in the US in 2022 (CDC)',
        'US gun death rate: 12.2 per 100K — highest among wealthy nations (next closest: ~2-3)',
        'States with stricter gun laws have 13% lower gun death rates on average (Everytown Research)',
        'Mass shootings (4+ victims): 656 in 2023 (Gun Violence Archive)',
      ],
    },
    republican: {
      position: 'Protect 2nd Amendment rights; enforce existing laws',
      arguments: [
        '2nd Amendment is a constitutional right — "shall not be infringed" is clear language',
        'Criminals don\'t follow gun laws — new regulations only burden law-abiding citizens',
        'Armed citizens deter crime — CDC estimated 500K-3M defensive gun uses per year',
        'Mental health and enforcement gaps are the real issue, not legal gun ownership',
        'An armed populace is the last check against government tyranny — founders\' explicit intent',
      ],
      data: [
        'Estimated 400+ million firearms in civilian hands in the US',
        'FBI: rifles (including AR-15s) used in ~3% of gun homicides; handguns account for ~59%',
        'Concealed carry permit holders commit crimes at lower rates than police officers (Crime Prevention Research Center)',
        '1994 Assault Weapons Ban: DOJ found "no discernible reduction" in gun crime during 10-year period',
      ],
    },
  },
  {
    topic: 'Immigration',
    category: 'social',
    democrat: {
      position: 'Pathway to citizenship; humane immigration reform',
      arguments: [
        'Immigrants are net contributors — they pay ~$450B in taxes annually',
        'Dreamers (DACA recipients) grew up American — deporting them is morally wrong and economically wasteful',
        'Comprehensive reform addresses root causes (poverty, violence in home countries)',
        'Immigration fills critical labor shortages in agriculture, healthcare, and tech',
        'America\'s strength has always been as a nation of immigrants',
      ],
      data: [
        'Immigrants contributed $1.6 trillion to US GDP in 2022',
        '~45% of Fortune 500 companies were founded by immigrants or their children',
        'Undocumented immigrants pay an est. $11.6B in state/local taxes annually (ITEP)',
        'Foreign-born workers: 18.6% of US labor force (BLS 2023)',
      ],
    },
    republican: {
      position: 'Secure borders first; merit-based legal immigration',
      arguments: [
        'National sovereignty requires controlled borders — every nation has this right',
        'Illegal immigration depresses wages for low-skill American workers by 5-8%',
        'Merit-based system prioritizes skills the economy needs (like Canada and Australia)',
        'Drug trafficking and human smuggling require strong border enforcement',
        'Legal immigrants who followed the process shouldn\'t be undercut by those who didn\'t',
      ],
      data: [
        '2.4 million border encounters in FY2023 (CBP) — highest on record',
        'Fentanyl seizures: 27,000+ lbs at the southern border in FY2023',
        'Immigration court backlog: 3.3 million cases pending (TRAC 2024)',
        'Canada\'s merit-based system: 60% of immigrants admitted on economic/skill criteria vs US ~12%',
      ],
    },
  },
  {
    topic: 'Taxation & Economy',
    category: 'economy',
    democrat: {
      position: 'Progressive taxation; higher taxes on wealthy and corporations',
      arguments: [
        'The wealthy should pay their fair share — top 1% holds 32% of all wealth',
        'Corporate tax cuts didn\'t trickle down — 2017 TCJA mainly benefited shareholders via buybacks',
        'Progressive taxation funds infrastructure, education, and safety nets that grow the economy',
        'Tax revenue is needed to reduce the $34T national debt responsibly',
        'Effective tax rates for billionaires (~8%) are lower than middle-class workers (~22%)',
      ],
      data: [
        'Top 1% owns 32% of US wealth; bottom 50% owns 2.6% (Federal Reserve 2023)',
        'After 2017 TCJA: corporate tax revenue dropped 31%, stock buybacks hit $1T in 2022',
        'US national debt: $34.5 trillion as of 2024',
        'Billionaires\' effective tax rate: ~8.2% (White House analysis)',
      ],
    },
    republican: {
      position: 'Lower taxes to stimulate economic growth',
      arguments: [
        'Lower taxes let businesses invest, hire, and grow — rising tide lifts all boats',
        'The US already has one of the highest corporate tax rates among developed nations',
        'Tax cuts increase government revenue through growth (Laffer Curve effect)',
        'Individuals and businesses allocate capital more efficiently than government',
        'Excessive taxation punishes success and discourages entrepreneurship',
      ],
      data: [
        'After 2017 TCJA: unemployment fell to 3.5% (50-year low), GDP growth hit 2.9%',
        'Top 1% pays 42.3% of all federal income taxes (IRS 2021)',
        'Small businesses (pass-through entities) employ 60% of private sector workers',
        'After Reagan tax cuts (1981-88): federal revenue increased from $599B to $909B',
      ],
    },
  },
  {
    topic: 'Climate Change & Energy',
    category: 'environment',
    democrat: {
      position: 'Aggressive climate action; transition to renewable energy',
      arguments: [
        'Scientific consensus is overwhelming — 97%+ of climate scientists agree on human-caused warming',
        'Clean energy creates jobs — solar/wind sectors grew 3x faster than overall economy',
        'Climate inaction costs more than action — damages projected at $23T/year by 2050',
        'US should lead globally — we\'re historically the largest cumulative CO2 emitter',
        'Environmental justice: pollution disproportionately affects low-income and minority communities',
      ],
      data: [
        '2023 was the hottest year on record (NASA/NOAA)',
        'Clean energy jobs: 3.3 million in the US (2023), growing 2x national average',
        'Solar is now the cheapest electricity source in history (IEA)',
        'Climate disasters cost the US $92.9B in 2023 alone (NOAA)',
      ],
    },
    republican: {
      position: 'Energy independence; balanced approach favoring fossil fuels and innovation',
      arguments: [
        'Energy independence is a national security issue — reliance on foreign oil is dangerous',
        'Fossil fuels are reliable and affordable — renewables can\'t yet handle baseload power',
        'Regulation kills jobs — Paris Agreement would have cost 6.5 million US jobs (Heritage Foundation)',
        'Market-driven innovation (natural gas, nuclear) reduces emissions without government mandates',
        'Developing nations (China, India) are the biggest emitters — US cuts alone won\'t solve it',
      ],
      data: [
        'US became world\'s largest oil producer in 2023 (13.2M barrels/day)',
        'Natural gas switch from coal reduced US CO2 emissions by ~32% since 2005',
        'China emits 2x more CO2 than US (11.4B vs 5.1B tons, 2022)',
        'Oil & gas industry supports 11.3 million US jobs (API)',
      ],
    },
  },
  {
    topic: 'Education',
    category: 'social',
    democrat: {
      position: 'Increase public school funding; free/affordable college',
      arguments: [
        'Education is the great equalizer — public investment reduces inequality',
        'Student debt ($1.77T) crushes an entire generation\'s economic mobility',
        'Teacher pay is 20% below comparable professions — driving talent away',
        'Free community college/trade school prepares workforce without crippling debt',
        'Well-funded public schools benefit all children regardless of background',
      ],
      data: [
        'US student loan debt: $1.77 trillion across 43 million borrowers',
        'Average teacher salary: $69,544 (2023) — 20% less than comparable degrees',
        'Public school funding: poorest districts receive $1,500 less per student than wealthiest',
        'Countries with free college (Germany, Norway) have higher social mobility scores',
      ],
    },
    republican: {
      position: 'School choice; reduce federal involvement in education',
      arguments: [
        'Parents should choose the best school for their child — vouchers increase options',
        'Competition improves quality — charter schools outperform in many urban areas',
        'Federal overreach (Common Core, DEI mandates) undermines local control',
        'Pouring money into a broken system doesn\'t fix it — US spends the most with mediocre results',
        'Trade schools and apprenticeships are undervalued — not everyone needs a 4-year degree',
      ],
      data: [
        'US spends $16,080 per public school student — 3rd highest globally (OECD)',
        'US ranks 36th in math among OECD nations despite top-tier spending',
        'Charter school students in urban areas gain 40 additional days of learning in math (CREDO)',
        'Skilled trade jobs: median salary $60K+, many unfilled due to stigma against non-college paths',
      ],
    },
  },
  {
    topic: 'Criminal Justice',
    category: 'social',
    democrat: {
      position: 'Reform system to reduce mass incarceration and racial disparities',
      arguments: [
        'US has 4% of world population but 20% of its prisoners — system is broken',
        'Racial disparities are systemic — Black Americans are incarcerated at 5x the rate of whites',
        'Cash bail criminalizes poverty — 470,000 people sit in jail pre-trial because they can\'t afford bail',
        'Investing in rehabilitation and reentry programs reduces recidivism and saves money',
        'Drug decriminalization (Portugal model) treats addiction as health issue, reducing crime',
      ],
      data: [
        'US prison population: 1.9 million (highest in the world)',
        'Cost per federal prisoner: ~$40,000/year; total corrections spending: $80B+/year',
        'Recidivism rate: 44% rearrested within first year of release',
        'States that reformed sentencing (Texas, Georgia) saw crime drop AND saved billions',
      ],
    },
    republican: {
      position: 'Tough on crime; support law enforcement',
      arguments: [
        'Public safety is government\'s #1 job — weak prosecution invites more crime',
        'Defunding police led to crime spikes in major cities (2020-2022)',
        'Victims\' rights should be prioritized over criminals\' comfort',
        'Mandatory minimums deter crime — certainty of punishment is the strongest deterrent',
        'Bail reform released repeat offenders who committed new crimes',
      ],
      data: [
        'Murder rate spiked 30% in 2020 (largest single-year increase on record)',
        'Cities that cut police budgets saw 2-3x higher violent crime increases than those that didn\'t',
        'NYC bail reform: 25% of repeat offenders released pre-trial committed new crimes within 60 days',
        'Police presence reduces crime: every 10-17 additional officers prevent 1 homicide (various studies)',
      ],
    },
  },
  {
    topic: 'National Debt & Government Spending',
    category: 'economy',
    democrat: {
      position: 'Invest in people; raise revenue through progressive taxes',
      arguments: [
        'Austerity during economic stress makes recessions worse — investment creates growth',
        'Social programs (Social Security, Medicare) are earned benefits, not handouts',
        'Revenue problem, not spending problem — tax cuts for wealthy caused most of the deficit growth',
        'Infrastructure and education spending have 3-5x economic multiplier effects',
        'Military spending ($886B) dwarfs all social programs combined and is rarely questioned',
      ],
      data: [
        'National debt: $34.5T — $16T added since 2017 tax cuts',
        '2017 TCJA added est. $1.9T to debt over 10 years (CBO)',
        'Social Security trust fund projected to run short by 2033 without action',
        'US military budget: $886B (2024) — more than next 10 countries combined',
      ],
    },
    republican: {
      position: 'Cut spending; reduce size of government',
      arguments: [
        'Government spending is out of control — debt threatens future generations',
        'Every dollar the government spends is a dollar taken from the productive private sector',
        'Entitlement reform is necessary — Social Security/Medicare are on unsustainable trajectories',
        'Waste, fraud, and duplication in federal agencies cost hundreds of billions',
        'Balanced budget amendment would force fiscal discipline',
      ],
      data: [
        'Federal spending: $6.1T in FY2023 — $1.7T deficit',
        'Interest on national debt: $659B in FY2023 (more than defense spending soon)',
        'GAO identified $247B in improper payments across federal programs in 2022',
        'Federal workforce: 2.95 million civilian employees (not counting military/contractors)',
      ],
    },
  },
  {
    topic: 'Foreign Policy & Defense',
    category: 'foreign',
    democrat: {
      position: 'Multilateral diplomacy; alliances and institutions',
      arguments: [
        'Alliances (NATO, UN) multiply US power without bearing full cost alone',
        'Diplomacy prevents wars — Iraq War cost $2T+ and destabilized an entire region',
        'Climate and pandemic threats require international cooperation',
        'Soft power (aid, trade, cultural influence) is more cost-effective than military force',
        'Supporting democracy abroad strengthens US security long-term',
      ],
      data: [
        'NATO allies\' combined GDP: $42T — collective defense is more efficient than going alone',
        'Iraq/Afghanistan wars cost $8T+ total and 900,000+ deaths (Brown University)',
        'US foreign aid: $68B (2023) — less than 1% of federal budget',
        'Countries receiving US aid are 40% less likely to experience civil conflict',
      ],
    },
    republican: {
      position: 'America First; strong military; skeptical of international institutions',
      arguments: [
        'America\'s interests should come first — allies must pay their fair share',
        'Peace through strength — a dominant military deters adversaries',
        'International institutions (UN, WHO) are inefficient and often anti-American',
        'Nation-building abroad has failed repeatedly — focus resources at home',
        'China is the #1 strategic threat — resources should be redirected from Europe/Middle East',
      ],
      data: [
        'US pays 16% of UN budget and 22% of UN peacekeeping — disproportionate share',
        'Only 11 of 31 NATO members meet the 2% GDP defense spending target',
        'China\'s military budget grew 7.2% in 2024 to $233B (likely much higher)',
        'US has 750+ military bases in 80 countries — overextension risk',
      ],
    },
  },
  {
    topic: 'Abortion & Reproductive Rights',
    category: 'social',
    democrat: {
      position: 'Protect abortion access as a constitutional right',
      arguments: [
        'Bodily autonomy is a fundamental right — government shouldn\'t make medical decisions',
        'Abortion bans don\'t reduce abortions — they just make them unsafe (WHO data)',
        'Restrictions disproportionately harm low-income women and minorities',
        'Dobbs decision created chaos — women in medical emergencies denied care',
        'Contraception and sex education (not bans) most effectively reduce abortion rates',
      ],
      data: [
        'Pre-Roe: est. 200-1,200 women died annually from unsafe abortions',
        'Countries with legal abortion have similar or lower abortion rates than those with bans (Lancet)',
        'Post-Dobbs: 14 states banned or near-banned abortion, affecting 22 million women of reproductive age',
        'States with comprehensive sex ed have 30% lower teen pregnancy rates',
      ],
    },
    republican: {
      position: 'Pro-life; protect the unborn; return decisions to states',
      arguments: [
        'Life begins at conception — abortion ends a human life',
        'Dobbs correctly returned this issue to the democratic process in each state',
        'Adoption is a humane alternative — 2 million couples are waiting to adopt',
        'Taxpayer money should not fund abortions (Hyde Amendment principle)',
        'Late-term abortion restrictions are supported by a majority of Americans',
      ],
      data: [
        'Gallup: 69% of Americans support restrictions after the first trimester',
        'Over 630,000 abortions performed in the US in 2021 (CDC)',
        '~125,000 adoptions per year in the US — many more families waiting',
        'Heartbeat detectable at ~6 weeks; pain response debated but possible by 15-20 weeks',
      ],
    },
  },
];

export const interestingFacts: InterestingFact[] = [
  {
    category: 'Money in Politics',
    facts: [
      { title: '2024 Election Cost', detail: 'The 2024 election cycle cost an estimated $15.9 billion — the most expensive in US history (OpenSecrets)' },
      { title: 'Lobbying Spend', detail: 'Lobbying spending hit $4.1 billion in 2023. Top spenders: pharmaceutical ($357M), technology ($219M), insurance ($178M)' },
      { title: 'Congressional Wealth', detail: 'Median net worth of a US Congress member: $1.1 million — 12x the median American household ($97K)' },
      { title: 'Dark Money', detail: 'Since Citizens United (2010), over $1 billion in "dark money" has flowed into elections from undisclosed donors' },
      { title: 'PAC Power', detail: 'Top 100 individual donors gave more to 2024 campaigns than the bottom 6.5 million donors combined' },
    ],
  },
  {
    category: 'Economic Realities',
    facts: [
      { title: 'Wealth Inequality', detail: 'The 3 richest Americans (Musk, Bezos, Zuckerberg) hold more wealth than the bottom 50% of the country combined (~165 million people)' },
      { title: 'Wage Stagnation', detail: 'If minimum wage kept pace with productivity since 1968, it would be ~$24/hour today instead of $7.25' },
      { title: 'Housing Crisis', detail: 'In 1970, the average home cost 2x annual income. In 2024, it\'s 6x. In cities like SF and NYC, it\'s 10-12x' },
      { title: 'Corporate Profits', detail: 'S&P 500 corporate profits hit record $2.8T in 2023 while 38 million Americans lived below the poverty line' },
      { title: 'Healthcare vs Military', detail: 'US spends $4.5T on healthcare and $886B on military — combined, that\'s 28% of GDP on just two things' },
      { title: 'Social Mobility', detail: 'A child born in Denmark has 2x the chance of moving from the bottom 20% to the top 20% compared to a child born in the US' },
    ],
  },
  {
    category: 'Democracy & Voting',
    facts: [
      { title: 'Voter Turnout', detail: '2024 presidential turnout: ~65% — historically high for the US, but below most European democracies (70-85%)' },
      { title: 'Electoral College Math', detail: 'A candidate can win the presidency with just 23% of the popular vote by winning the right combination of small states' },
      { title: 'Gerrymandering', detail: 'In 2022, ~90% of House races were considered "safe seats" — most elections are decided in primaries, not general elections' },
      { title: 'Senate Imbalance', detail: 'Wyoming (580K people) and California (39M people) each get 2 senators — a Wyoming voter has 67x more Senate representation' },
      { title: 'Incumbency Advantage', detail: 'House incumbents win reelection ~90% of the time. Senate: ~80%. Congress has lower turnover than most corporate boards' },
    ],
  },
  {
    category: 'Global Comparisons',
    facts: [
      { title: 'Healthcare Ranking', detail: 'US ranks #1 in healthcare spending per capita ($12,555) but #46 in life expectancy among developed nations' },
      { title: 'Infrastructure Grade', detail: 'American Society of Civil Engineers gave US infrastructure a C- grade. Estimated cost to fix: $2.6 trillion' },
      { title: 'Education Spend vs Results', detail: 'US spends 3rd most per student globally but ranks 36th in math, 13th in reading (OECD PISA)' },
      { title: 'Incarceration Rate', detail: 'US incarcerates 531 per 100K people — 5-10x more than other wealthy democracies (UK: 129, Germany: 69, Japan: 38)' },
      { title: 'Paid Leave', detail: 'US is the ONLY wealthy nation with zero federally mandated paid parental leave. Estonia offers 86 weeks' },
      { title: 'Child Poverty', detail: 'US child poverty rate: 12.4% — highest among G7 nations. Expanded Child Tax Credit temporarily cut it to 5.2% in 2021' },
    ],
  },
];
