import Image from 'next/image';
import Link from 'next/link';
import { EmotionSelector, ListeningActivity, QuickChoice, ReflectionBox, RephraseIt, RepairChoice } from '@/components/interactive';
import { LessonHero, LessonShell, MicroNote, SectionTitle, Signature } from '@/components/unit-shell';
import { ModuleSnapshot } from '@/components/final-production';

export const dynamic = 'force-static';

export default function LessonFour() {
  return (
    <LessonShell current="04" prev={{ href: '/lesson-3', label: 'Fact, Experience or Stereotype?' }} next={{ href: '/lesson-5', label: 'The Inclusive Food Table' }}>
      <div className="round-two round2-l4">
      <LessonHero number="04" phase="COMMUNICATE" title="CURIOSITY, NOT JUDGMENT" subtitle="What can we say when something is unfamiliar?" tone="ink" />

      <ModuleSnapshot
        number="04"
        phase="COMMUNICATE"
        title="CURIOSITY, NOT JUDGMENT"
        duration="50 min"
        question="What can we say when something is unfamiliar?"
        skills={['Listening', 'Speaking', 'Language in Use']}
        vocabulary={['curiosity', 'unfamiliar', 'respectful', 'intention', 'impact', 'repair', 'respond']}
        structures={["That’s new to me.", 'Can you tell me more?', 'What does it taste like?', 'I’m sorry. Can I say that differently?']}
        cultureFocus="Respect does not require identical preferences, but intercultural communication requires curiosity and care."
        outcome="Listen to a short conversation and use at least one respectful curiosity phrase to respond to unfamiliar food."
        activities={['Listen Before You Respond', 'The Curiosity Table']}
      />

      <section className="lesson-section reaction-opening">
        <div className="reaction-photo"><Image src="/images/l4-curiosity-conversation.png" alt="Four students share a homemade food and talk together in a naturally lit community room" fill sizes="(max-width: 1050px) 100vw, 55vw" priority /></div>
        <div><SectionTitle kicker="FIRST REACTION / SECOND CHOICE" title="NOTICE IT. KEEP IT PRIVATE." /><QuickChoice question="What might you feel?" options={['I feel curious.', 'I feel surprised.', "I'm not sure about it.", 'It looks strange to me.']} feedback="A first reaction can happen quickly. You can pause before you speak." /><p className="reaction-line">YOUR FIRST THOUGHT DOES NOT HAVE TO BE YOUR FINAL RESPONSE.</p></div>
      </section>

      <section className="lesson-section second-choice-section">
        <SectionTitle kicker="THE SECOND CHOICE" title="PAUSE. ASK. UNDERSTAND." />
        <div className="three-steps"><article><span>01</span><h3>PAUSE</h3><p>Notice your first reaction.</p></article><article><span>02</span><h3>ASK</h3><p>Choose a respectful question.</p></article><article><span>03</span><h3>UNDERSTAND</h3><p>Listen before making conclusions.</p></article></div>
        <h3 className="round2-interaction-label">REPHRASE IT</h3>
        <RephraseIt />
      </section>

      <section className="lesson-section listening-section">
        <p className="task-skill">LISTENING · CORE ACTIVITY 01</p>
        <SectionTitle kicker="PAUSE → LISTEN → ASK → UNDERSTAND" title="LISTEN BEFORE YOU RESPOND." note="Play the short conversation. The transcript is always available." />
        <ListeningActivity />
      </section>

      <section className="visual-pause"><h2>YOU DO NOT HAVE TO<br />LIKE EVERYTHING.</h2><p>You can respect a food tradition without wanting to eat it.</p><Signature light>“NOT FOR ME” ≠ “WRONG FOR YOU.”</Signature></section>

      <section className="lesson-section impact-section">
        <SectionTitle kicker="SAME FOOD, DIFFERENT WORDS" title="HOW CAN WORDS FEEL?" />
        <div className="two-reactions"><blockquote>“Eww. What is that?”</blockquote><blockquote>“That&apos;s new to me. Can you tell me about it?”</blockquote></div>
        <EmotionSelector />
        <div className="intention-impact"><div><small>INTENTION</small><p>“I was only joking.”</p></div><span>+</span><div><small>IMPACT</small><p>“It made me feel uncomfortable.”</p></div></div>
        <QuickChoice question="Can both things be true?" options={['YES', 'NO']} feedback="Yes. A person may not want to hurt someone, but their words can still have an impact." />
        <Signature>BOTH CAN BE TRUE.</Signature>
      </section>

      <section className="lesson-section conflict-section">
        <SectionTitle kicker="MICRO-CONFLICT" title="WHAT COULD DANIEL DO NEXT?" />
        <div className="dialogue-scene"><div><small>MIA</small><p>brings a food from her family tradition.</p></div><div className="speech-bubble"><small>DANIEL</small><p>“Eww! What is that?”</p></div><div><small>THEN</small><p>Mia stops talking.</p></div></div>
        <div className="repair-steps"><span>PAUSE</span><span>ACKNOWLEDGE</span><span>REPHRASE</span><span>LISTEN</span></div>
        <div className="repair-language"><p>“I think my comment was disrespectful.”</p><p>“Sorry. That came out badly.”</p><p>“I haven&apos;t seen this food before. Can you tell me about it?”</p><p>Give the other person space to respond.</p></div>
        <RepairChoice />
      </section>

      <section className="lesson-section toolkit-section">
        <SectionTitle kicker="CURIOUS ENGLISH TOOLKIT" title="QUESTIONS OPEN STORIES" />
        <div className="toolkit-grid"><span>What is it made with?</span><span>What does it taste like?</span><span>Have you eaten it before?</span><span>When do people eat it?</span><span>Is it important in your family or community?</span><span>What does this food mean to you?</span><span>Is there a story behind it?</span><span>That&apos;s new to me.</span><span>Thank you for explaining.</span><span>I would like to learn more.</span></div>
        <MicroNote type="IN CLASS" tone="coral"><h3>THE CURIOSITY TABLE</h3><p><strong>SHARE · ASK · LISTEN · CONNECT</strong></p><p>Use a Food Story Card. Choose an equal participation route:</p><div className="route-equality"><span>SPEAK</span><span>READ</span><span>WRITE</span><span>PARTNER</span></div></MicroNote>
      </section>

      <section className="lesson-section exit-section">
        <p className="task-skill">WRITING · FORMATIVE CHECK</p>
        <SectionTitle kicker="THE SECOND CHOICE" title="YOUR NEXT RESPONSE" note="Notice your first thought. You do not need to share it." />
        <div className="starter-strip"><span>What…?</span><span>When…?</span><span>Why is…?</span><span>Can you tell me…?</span></div>
        <ReflectionBox storageKey="l4-second-choice" prompt="Now choose your second response." placeholder="Can you tell me…" />
      </section>

      <section className="round2-transformation" aria-labelledby="l4-transformation-title">
        <div><span>WHEN YOU ARRIVED</span><p>That feels strange to me.</p></div>
        <b aria-hidden="true">→</b>
        <div><span>NOW</span><p id="l4-transformation-title">I can pause, ask, and respond with curiosity.</p></div>
      </section>

      <section className="round2-bridge">
        <p>NEXT STEP</p>
        <h2>NOW IT&apos;S YOUR TURN TO TELL A STORY.</h2>
        <Link href="/lesson-5">CONTINUE TO LESSON 05 <span aria-hidden="true">→</span></Link>
      </section>
      </div>
    </LessonShell>
  );
}
