'use client';

import { useState } from 'react';

const tabs = ['10 Rules', 'Confidence', 'Sharp Mind', 'Phrase Subs', 'Transitions', 'Thinking', 'Debate', 'Social Power'] as const;

export default function ReferencePage() {
  const [tab, setTab] = useState<typeof tabs[number]>('10 Rules');

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Reference Library</h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${tab === t ? 'bg-accent text-white' : 'bg-muted text-muted-fg hover:text-foreground'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab === '10 Rules' && (
        <div className="space-y-3">
          {[
            { num: 1, rule: 'Pause, don\'t fill', detail: 'Silence is more powerful than "um" or "uh". A pause signals confidence and gives your brain time to find the right word. The person who is comfortable with silence controls the room.' },
            { num: 2, rule: 'First sentence, main point', detail: 'Don\'t build up to your point. State it first, then support it. "We should cancel the project. Here\'s why." Not "So I\'ve been thinking, and after looking at the numbers, maybe we should consider..."' },
            { num: 3, rule: 'Speak in periods, not commas', detail: 'End sentences. Don\'t chain clauses with "and then" or "so basically". Short declarative sentences land harder. They sound authoritative. They\'re easier to follow.' },
            { num: 4, rule: 'Cut the hedges', detail: 'Remove "I think", "maybe", "sort of", "kind of", "basically", "just". These signal uncertainty even when you\'re sure. Compare: "I just kind of think we should maybe try..." vs "We should try this."' },
            { num: 5, rule: 'Slow down', detail: 'Speaking fast signals nervousness. Speaking slowly signals authority. The most powerful people in any room speak the slowest. When you feel the urge to rush, do the opposite.' },
            { num: 6, rule: 'Land your endings', detail: 'Don\'t trail off or seek validation ("...you know?", "...does that make sense?"). End with a period. Drop your voice. Stop. The silence after a strong statement is where persuasion happens.' },
            { num: 7, rule: 'Use "you" more than "I"', detail: 'Frame arguments in terms of the listener. "You\'ll save time" beats "I think this is faster". Make them the protagonist of the story you\'re telling.' },
            { num: 8, rule: 'Three points max', detail: 'Nobody remembers five arguments. Make three strong points instead of five weak ones. Fewer points, harder hits. If you can say it in one point, even better.' },
            { num: 9, rule: 'Never apologize for your opinion', detail: '"Sorry, but I disagree" weakens everything after it. Say "I see it differently" or "Here\'s where I differ". Assert, don\'t apologize. Your opinion earned its place.' },
            { num: 10, rule: 'End clean', detail: 'Your last sentence should be your strongest. Don\'t add a caveat, a qualifier, or a "but yeah". Mic drop, not mic fumble. The last thing you say is what people remember.' },
          ].map((item) => (
            <div key={item.num} className="bg-card border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-medium">{item.rule}</h3>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'Confidence' && (
        <div className="space-y-4">
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium text-accent mb-3">The Confidence Equation</h3>
            <p className="text-sm text-muted-fg mb-3">Confidence isn&apos;t &ldquo;I know I&apos;m right.&rdquo; It&apos;s &ldquo;I&apos;ll be fine even if I&apos;m wrong.&rdquo; That shift changes everything about how you speak.</p>
            <div className="p-3 bg-accent/5 rounded-lg text-sm font-medium text-center">
              Confidence = Low fear of being wrong + High willingness to be corrected
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">Hacks That Actually Work</h3>
            <div className="space-y-3">
              {[
                { hack: 'The 2-second rule', detail: 'Before answering any question, pause for 2 seconds. This does three things: it stops filler words, it makes you look thoughtful, and it gives your brain time to form a complete thought. Powerful people never rush to respond.' },
                { hack: 'Lower your voice at the end', detail: 'Statements go down in pitch. Questions go up. Most nervous speakers accidentally make everything sound like a question by going up at the end. Force your voice down on your last word. Instant authority.' },
                { hack: 'Take up space', detail: 'Expand your body. Hands on the table, not in your lap. Feet flat, shoulders back. When you physically shrink, your voice shrinks too. Your body tells your brain how confident to be.' },
                { hack: 'The "broken record" technique', detail: 'When someone tries to derail you, calmly repeat your point. "I understand that, and my point is..." Don\'t chase their tangent. Stay on your message. Repetition is conviction.' },
                { hack: 'Name the elephant', detail: 'If you\'re nervous, if the room is tense, if something awkward just happened — say it. "This is uncomfortable, but it needs to be said." Naming the thing gives you power over it. Avoiding it gives it power over you.' },
                { hack: 'Pre-load your first sentence', detail: 'Before any meeting, presentation, or difficult conversation, know your first sentence word-for-word. The hardest part is starting. Once you\'re in motion, momentum carries you.' },
                { hack: 'The "so what" filter', detail: 'Before you speak, ask yourself: "So what? Why should they care?" If you can\'t answer that, restructure your point. Every sentence should earn its place.' },
                { hack: 'Eliminate upspeak', detail: 'Record yourself talking for 60 seconds. Listen for sentences that rise in pitch at the end like questions. Those are undermining you. Practice saying "This is what we should do." with a downward inflection.' },
              ].map((item) => (
                <div key={item.hack} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{item.hack}</p>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">When You Feel Intimidated</h3>
            <div className="space-y-2 text-sm">
              {[
                { trigger: 'Someone talks over you', response: 'Stop. Wait. Then say: "As I was saying..." Don\'t repeat what you already said — continue from where you were cut off. This signals that their interruption was irrelevant.' },
                { trigger: 'Someone dismisses your idea', response: '"Help me understand what specifically you disagree with." Force them to engage with the substance. Most dismissals are lazy and collapse under scrutiny.' },
                { trigger: 'You\'re the youngest/newest in the room', response: 'That\'s an asset, not a liability. "Fresh perspective" beats "institutional blindness." Don\'t preface with "I\'m new here, but..." Just state your point.' },
                { trigger: 'Someone uses jargon to intimidate', response: '"Can you define what you mean by [jargon]?" This isn\'t weakness — it\'s dominance. You\'re forcing them to prove they actually understand what they just said.' },
                { trigger: 'You don\'t know the answer', response: '"I don\'t know, but here\'s what I do know." Or: "That\'s a good question — let me think about it and get back to you." Never bluff. Bluffing destroys credibility. Honesty builds it.' },
                { trigger: 'A room full of experts', response: 'Ask questions instead of making statements. "How does this account for X?" Good questions demonstrate understanding better than mediocre answers.' },
                { trigger: 'Your voice shakes', response: 'Breathe from your diaphragm, not your chest. Speak slower. Ground your feet. Shaky voice comes from shallow breathing and tension. Address the physical cause, not the symptom.' },
              ].map((item) => (
                <div key={item.trigger} className="p-3 bg-muted rounded-lg">
                  <p className="font-medium text-error">{item.trigger}</p>
                  <p className="text-muted-fg mt-1">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'Sharp Mind' && (
        <div className="space-y-4">
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium text-accent mb-3">Think Faster Under Pressure</h3>
            <div className="space-y-3">
              {[
                { name: 'The PREP Framework', detail: 'Point → Reason → Example → Point. Works for any question you\'re not prepared for. "I believe X [point]. Because Y [reason]. For instance, Z [example]. That\'s why X [point]." You can answer anything in 30 seconds with this.' },
                { name: 'The Inversion Trick', detail: 'When you can\'t think of a good argument FOR something, argue AGAINST its opposite. "Why is exercise important?" is hard. "What happens to someone who never exercises?" is easy. Flip the question.' },
                { name: 'Steel + Destroy', detail: 'When you need to disagree: first show you understand their position better than they do, then show why it fails. "You\'re right that X, and I see why you\'d conclude Y. But here\'s what that misses..."' },
                { name: 'The Specificity Hack', detail: 'Vague = weak. Specific = convincing. Don\'t say "studies show." Say "a 2023 Stanford study of 16,000 workers found..." Don\'t say "it costs too much." Say "it costs $4.2B annually." Even rough numbers beat no numbers.' },
                { name: 'First Principles Decomposition', detail: 'When stuck, ask: "What do we actually know to be true here?" Strip away assumptions. "Everyone needs a degree" → do they? → what actually matters to employers? → demonstrated skills. Now you have a real argument.' },
                { name: 'The Analogy Arsenal', detail: 'Keep 5-6 strong analogies ready. A good analogy does the heavy lifting of explanation. "Regulation isn\'t a brake on business — it\'s a guardrail. You can still drive fast, you just can\'t drive off the cliff."' },
              ].map((item) => (
                <div key={item.name} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">Mental Models for Any Situation</h3>
            <div className="space-y-3">
              {[
                { model: 'Incentives over intentions', detail: 'Don\'t ask "what are they trying to do?" Ask "what are they incentivized to do?" A hospital incentivized per-procedure will do more procedures — regardless of what the CEO says about patient care.' },
                { model: 'Second-order effects', detail: 'Every action has consequences beyond the obvious. Rent control → affordable rent (1st order) → landlords stop maintaining buildings, developers stop building (2nd order) → housing shortage (3rd order).' },
                { model: 'Survivorship bias', detail: 'You only see the winners. "Dropouts like Gates and Zuckerberg succeeded!" ignores the millions of dropouts who didn\'t. Always ask: what happened to the people who tried this and failed?' },
                { model: 'Reversibility test', detail: 'Before any decision: can I undo this? Easily reversible decisions should be made fast. Hard-to-reverse decisions deserve real thought. Most people reverse this — they overthink small stuff and underthink big stuff.' },
                { model: 'The pre-mortem', detail: 'Instead of asking "will this work?", ask "assume this failed — why did it fail?" Your brain is much better at explaining failure than predicting success. This surfaces risks you\'d otherwise miss.' },
                { model: 'Asymmetric upside', detail: 'Look for decisions where the upside is unlimited but the downside is capped. "Apply for a job I\'m not qualified for" — worst case: rejected. Best case: life-changing. Take every asymmetric bet.' },
                { model: 'Map vs. territory', detail: 'The model is not reality. The org chart is not how decisions are made. The job description is not what the job is. Always ask: what\'s actually happening here, vs what\'s supposed to be happening?' },
              ].map((item) => (
                <div key={item.model} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{item.model}</p>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">Questions That Make You Look Brilliant</h3>
            <p className="text-sm text-muted-fg mb-3">You don&apos;t need answers to look smart. You need the right questions.</p>
            <div className="space-y-1.5 text-sm">
              {[
                '"What would have to be true for that to work?"',
                '"Who loses in this scenario?"',
                '"What are we optimizing for, and what are we sacrificing?"',
                '"What does this look like in 5 years if we\'re right? And if we\'re wrong?"',
                '"What\'s the strongest argument against what we\'re about to do?"',
                '"Is this a reversible or irreversible decision?"',
                '"Are we solving the root cause or treating the symptom?"',
                '"What would we do if we had half the budget and twice the urgency?"',
                '"What\'s the cost of doing nothing?"',
                '"If we removed this entirely, what would break?"',
              ].map((q) => (
                <div key={q} className="p-2 bg-accent/5 rounded-lg text-accent font-medium">{q}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'Phrase Subs' && (
        <div className="bg-card border border-card-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border bg-muted">
                <th className="text-left px-4 py-3 font-medium text-error">Instead of...</th>
                <th className="text-left px-4 py-3 font-medium text-success">Say...</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['"I think maybe..."', '"Here\'s my take."'],
                ['"Umm so basically..."', '"Put simply."'],
                ['"Yeah I agree because..."', '"Exactly right. And here\'s why."'],
                ['"I don\'t know, it\'s like..."', '"The way I see it..."'],
                ['"Sorry but I disagree..."', '"I see it differently."'],
                ['"Does that make sense?"', '"That\'s the core of it."'],
                ['"I feel like..."', '"I\'m confident that..."'],
                ['"It\'s kind of..."', '"It is."'],
                ['"I just wanted to say..."', '(Just say it.)'],
                ['"No offense, but..."', '"Let me be direct."'],
                ['"To be honest..."', '(Just be honest.)'],
                ['"I\'m not sure, but..."', '"Here\'s what I know."'],
                ['"It\'s not that big of a deal..."', '"Here\'s why it matters."'],
                ['"I guess you could say..."', '"The fact is..."'],
                ['"This might be a dumb question..."', '"I have a question."'],
                ['"I was just thinking..."', '"I\'ve been thinking about this."'],
                ['"Like, you know..."', '(Delete entirely)'],
                ['"At the end of the day..."', '"What this comes down to is..."'],
                ['"I mean, don\'t get me wrong..."', '"To be clear..."'],
                ['"It is what it is"', '"Here\'s what we can do about it."'],
              ].map(([bad, good], i) => (
                <tr key={i} className="border-b border-card-border last:border-0">
                  <td className="px-4 py-2.5 text-error/70">{bad}</td>
                  <td className="px-4 py-2.5 text-success font-medium">{good}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Transitions' && (
        <div className="space-y-4">
          {[
            { cat: 'Countering', color: 'text-error', phrases: ['That said...', "Here's the problem with that...", "But here's what that misses...", 'On the other hand...', 'The issue is...', "Here's where that breaks down...", "What that ignores is...", "I'd push back on that..."] },
            { cat: 'Building', color: 'text-success', phrases: ['On top of that...', "What's more...", "And here's the thing...", 'Not only that, but...', 'Beyond that...', 'To add to that...', 'Building on that point...', 'Even more importantly...'] },
            { cat: 'Clarifying', color: 'text-accent', phrases: ['What I mean is...', 'Put simply...', 'In other words...', 'Let me be specific...', "Here's what that actually looks like...", 'To put it another way...', 'The core idea is...', 'Let me break that down...'] },
            { cat: 'Concluding', color: 'text-warning', phrases: ['The bottom line is...', 'So the question becomes...', 'What this means is...', 'The point is this...', 'What it comes down to is...', 'In summary...', "Here's the takeaway...", 'So here\'s where we land...'] },
            { cat: 'Buying Time', color: 'text-muted-fg', phrases: ['Look...', "Here's the thing...", 'The way I see it...', 'Let me put it this way...', "Here's how I think about it...", 'Fair question...', "That's worth unpacking...", 'Let me think about that for a second...'] },
          ].map((group) => (
            <div key={group.cat}>
              <h3 className={`text-sm font-bold mb-2 ${group.color}`}>{group.cat}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.phrases.map((p) => (
                  <span key={p} className="text-sm px-2.5 py-1 bg-card border border-card-border rounded-lg">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'Thinking' && (
        <div className="space-y-3">
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-2">Second-Order Thinking Framework</h3>
            <p className="text-sm text-muted-fg mb-3">Before accepting any policy or idea at face value, ask:</p>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-accent font-bold">1.</span> <span><strong>&ldquo;And then what?&rdquo;</strong> — Trace the chain of consequences beyond the first order.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">2.</span> <span><strong>Think in incentives, not intentions</strong> — Good intentions create bad outcomes when incentives misalign.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">3.</span> <span><strong>Steelman the opposition</strong> — If you can&apos;t argue the other side convincingly, you don&apos;t understand the issue.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">4.</span> <span><strong>Look for unintended consequences</strong> — Every action has effects beyond its target. Who else is affected?</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">5.</span> <span><strong>Find the ironic reversal</strong> — The best critiques show how a policy achieves the opposite of its stated goal.</span></li>
            </ol>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-2">Questions to Ask</h3>
            <ul className="space-y-1.5 text-sm text-muted-fg">
              <li>&#8226; Who benefits from this that we&apos;re not talking about?</li>
              <li>&#8226; What happens when everyone does this, not just early adopters?</li>
              <li>&#8226; What changes when you move from theory to real people?</li>
              <li>&#8226; What&apos;s the cost of the transition, not just the end state?</li>
              <li>&#8226; Who gets hurt that the advocates aren&apos;t mentioning?</li>
              <li>&#8226; Does this solve the root cause or just the symptom?</li>
              <li>&#8226; What feedback loop does this create?</li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'Debate' && (
        <div className="space-y-3">
          {[
            { tactic: 'Define your terms first', detail: 'When someone says "freedom" or "fair", ask what they mean. Whoever defines the terms controls the debate. If they say "the rich should pay their fair share", ask: what\'s fair? What\'s rich?' },
            { tactic: 'Flip their argument into a liability', detail: 'Take their strongest point and show how it actually hurts their position. "You say remote workers are less supervised — that\'s not a bug, it\'s a feature. Supervision is micromanagement."' },
            { tactic: 'Challenge their assumptions', detail: 'Every argument rests on unstated assumptions. Find and attack those. "Your argument assumes productivity requires presence. Where\'s the evidence for that?"' },
            { tactic: 'Assert, don\'t defend', detail: 'Never play defense. The moment you\'re explaining why you\'re not wrong, you\'ve lost frame. State your position, don\'t apologize for it.' },
            { tactic: 'Fewer points, harder hits', detail: 'One devastating counter-argument beats five weak ones. Choose your strongest point and hit it hard. Let the silence after your point do the work.' },
            { tactic: 'Use concrete examples', detail: 'Abstract arguments lose to specific stories. "Minimum wage hurts small business" loses to "The coffee shop on my corner laid off two baristas after the last increase."' },
            { tactic: 'Steel-man, then dismantle', detail: 'Show you understand their position better than they do, then explain why it still fails. This demonstrates intellectual honesty and makes your counter more credible.' },
            { tactic: 'End with a question', detail: 'The strongest debate move is to leave them with a question they can\'t answer. "If college is so valuable, why does it need to be mandated?"' },
          ].map((item) => (
            <div key={item.tactic} className="bg-card border border-card-border rounded-xl p-4">
              <h3 className="font-medium text-accent mb-1">{item.tactic}</h3>
              <p className="text-sm text-muted-fg">{item.detail}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'Social Power' && (
        <div className="space-y-4">
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium text-accent mb-3">Frame Control</h3>
            <p className="text-sm text-muted-fg mb-3">Whoever controls the frame controls the conversation. The frame is the unspoken context that determines what&apos;s relevant, what&apos;s acceptable, and who has authority.</p>
            <div className="space-y-3">
              {[
                { rule: 'Don\'t enter their frame', detail: '"Why are you always so negative?" is a frame. If you answer "I\'m not negative!", you\'ve accepted their frame. Instead: "I\'m being precise. Let\'s talk about the actual issue." Reframe, don\'t defend.' },
                { rule: 'He who reacts, loses', detail: 'The person who gets emotional first, loses. Stay calm when others escalate. Your composure is your power. When someone tries to provoke you, slow down, not speed up.' },
                { rule: 'Ask questions, don\'t make demands', detail: '"Can you walk me through your thinking on this?" is more powerful than "You\'re wrong." Questions put them on the back foot without making you the aggressor.' },
                { rule: 'Set the agenda', detail: 'The person who says "Let\'s focus on X" controls the conversation. If someone hijacks the discussion, redirect: "That\'s a separate issue. Let\'s finish this first." Agenda-setting is quiet dominance.' },
                { rule: 'Name the dynamic', detail: '"It seems like we\'re going in circles because we haven\'t agreed on the goal." When you articulate the pattern no one else sees, you become the most perceptive person in the room.' },
              ].map((item) => (
                <div key={item.rule} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{item.rule}</p>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">Power Dynamics in Conversation</h3>
            <div className="space-y-3">
              {[
                { principle: 'Status is behavior, not title', detail: 'A confident intern can command more respect than a nervous VP. Status comes from how you speak: slower pace, fewer words, lower reactivity, comfortable silences. Practice high-status behavior and people will treat you accordingly.' },
                { principle: 'Give credit strategically', detail: '"Building on what Sarah said..." makes Sarah your ally and makes you look generous. Powerful people elevate others because they\'re not threatened. Insecure people take credit. Which one gets followed?' },
                { principle: 'Disagree without creating enemies', detail: '"I see why you\'d think that, and from that angle it makes sense. Here\'s what I see from a different angle..." Validate their reasoning, then redirect. They feel heard, and you get your point across.' },
                { principle: 'The power of the pause after a question', detail: 'Ask a question, then shut up. Most people can\'t handle the silence and will fill it — often revealing more than they intended. The person comfortable with silence after a question has all the leverage.' },
                { principle: 'Match intensity, never exceed it', detail: 'If someone raises their voice, stay at your volume. If someone gets aggressive, get calmer. The person who escalates first loses control. The person who stays calm while others lose it becomes the natural leader.' },
                { principle: 'Assume you belong', detail: 'Don\'t ask "Is it okay if I...?" Say "I\'m going to..." Don\'t ask for permission to have an opinion. Don\'t preface with disclaimers. Assume you have every right to be here, to speak, and to disagree. Because you do.' },
              ].map((item) => (
                <div key={item.principle} className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{item.principle}</p>
                  <p className="text-sm text-muted-fg mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="font-medium mb-3">Everyday Scripts</h3>
            <p className="text-sm text-muted-fg mb-3">Copy-paste phrases for real situations:</p>
            <div className="space-y-2 text-sm">
              {[
                { situation: 'Pushing back on scope creep', script: '"I can do X or Y by Friday. Which is the priority?"' },
                { situation: 'Saying no to a meeting', script: '"I don\'t think I\'d add value here. Can you send me a summary instead?"' },
                { situation: 'Disagreeing with your boss', script: '"I have a different read on this. Can I share it?"' },
                { situation: 'Calling out BS in a meeting', script: '"I want to make sure I understand — are we saying X? Because the data shows Y."' },
                { situation: 'When someone takes credit for your work', script: '"Thanks for presenting that. For context, here\'s how I arrived at those numbers..."' },
                { situation: 'Ending a conversation that\'s going nowhere', script: '"I think we\'ve identified the disagreement. Let\'s sleep on it and revisit tomorrow."' },
                { situation: 'When you made a mistake', script: '"I got that wrong. Here\'s what happened and here\'s what I\'m doing to fix it."' },
                { situation: 'Asking for a raise', script: '"Here\'s what I\'ve delivered in the last 6 months. Based on that, I\'d like to discuss my compensation."' },
              ].map((item) => (
                <div key={item.situation} className="p-3 bg-muted rounded-lg">
                  <p className="font-medium text-muted-fg">{item.situation}</p>
                  <p className="text-accent font-medium mt-1">{item.script}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
