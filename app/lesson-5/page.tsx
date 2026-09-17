import Image from 'next/image';
import Link from 'next/link';
import { ContextCheck, QuickChoice, ReflectionBox, ThenNow } from '@/components/interactive';
import { LessonHero, LessonShell, MicroNote, SectionTitle, Signature } from '@/components/unit-shell';
import { FinalRubric, ModuleSnapshot } from '@/components/final-production';

export const dynamic = 'force-static';

export default function LessonFive() {
  return (
    <LessonShell current="05" prev={{ href: '/lesson-4', label: 'Curiosity, Not Judgment' }} next={{ href: '/references', label: 'References & Media Credits' }}>
      <div className="round-two round2-l5">
      <LessonHero number="05" phase="CREATE + REFLECT" title="THE INCLUSIVE FOOD TABLE" subtitle="Every dish has a story. No dish tells every story." tone="green" />

      <ModuleSnapshot
        number="05"
        phase="CREATE + REFLECT"
        title="THE INCLUSIVE FOOD TABLE"
        duration="2 sessions · 50 min each"
        question="How can I tell one food story without speaking for everyone?"
        skills={['Reading', 'Writing', 'Speaking']}
        vocabulary={['context', 'community', 'assumption', 'source', 'respectful', 'story', 'presentation']}
        structures={['This food is connected to…', 'In this family or community…', 'Some people may…', 'One assumption to avoid is…', 'A respectful question is…']}
        cultureFocus="Responsible cultural storytelling includes context, difference, and limits."
        outcome="Create and present one contextualized food story that avoids stereotypes and includes a respectful question."
        activities={['Food Story Builder', 'Food Story Gallery']}
      />

      <section className="final-performance-intro" aria-labelledby="final-performance-title">
        <p>FINAL PERFORMANCE</p>
        <h2 id="final-performance-title">THE INCLUSIVE FOOD TABLE</h2>
        <strong>THIS IS WHERE YOU BRING THE JOURNEY TOGETHER.</strong>
        <div className="performance-alignment"><span><b>NOTICE</b>Recognize stereotypes.</span><span><b>EXPLORE</b>Give cultural context.</span><span><b>COMMUNICATE</b>Use respectful English.</span><span><b>CREATE</b>Tell one food story responsibly.</span></div>
      </section>

      <section className="session-banner"><span>SESSION 5 · 50 MIN</span><h2>CREATE YOUR FOOD STORY</h2></section>

      <section className="lesson-section storyteller-opening">
        <div className="storyteller-split storyteller-text-only"><div><SectionTitle kicker="NOW YOU BECOME THE STORYTELLER." title="BRING CONTEXT TO THE TABLE." /><div className="short-progression"><span>You explored.</span><span>You questioned assumptions.</span><span>You practiced respectful curiosity.</span><strong>Now share one food story.</strong></div><p className="challenge-line">TELL ONE FOOD STORY WITHOUT TELLING EVERYONE&apos;S STORY.</p></div></div>
      </section>

      <section className="lesson-section choose-path-section">
        <SectionTitle kicker="CHOOSE YOUR PATH" title="THREE EQUAL WAYS TO BEGIN" />
        <div className="path-grid"><article><span>01</span><h3>MY STORY</h3><p>A food tradition from my family or personal experience.</p></article><article><span>02</span><h3>A LOCAL STORY</h3><p>A food story from a Colombian region or community.</p></article><article><span>03</span><h3>A WORLD STORY</h3><p>A food story from another place, explored with respect and context.</p></article></div>
        <MicroNote type="CULTURE NOTE"><p>All three routes are equally valid. No one must share private family information. <strong>Share only what you are comfortable sharing.</strong></p></MicroNote>
      </section>

      <section className="lesson-section builder-section">
        <p className="task-skill">WRITING · CORE ACTIVITY 01</p>
        <SectionTitle kicker="FOOD STORY BUILDER" title="BUILD THE CONTEXT" note="Short, clear answers are enough. Research a source for local and world stories." />
        <div className="builder-grid"><ReflectionBox storageKey="builder-what" prompt="WHAT? · What is the food or tradition?" /><ReflectionBox storageKey="builder-who" prompt="WHERE / WHO? · What place, family, region, or community is it connected to?" /><ReflectionBox storageKey="builder-when" prompt="WHEN? · When is it prepared, eaten, or shared?" /><ReflectionBox storageKey="builder-why" prompt="WHY? · Why can it be meaningful?" /><ReflectionBox storageKey="builder-assumption" prompt="ASSUMPTION · What stereotype or assumption could someone make?" /><ReflectionBox storageKey="builder-curiosity" prompt="CURIOSITY · What respectful question could help others learn more?" /></div>
        <article className="model-story model-story-text-only"><div><small>SHORT MODEL</small><h3>AJIACO SANTAFEREÑO</h3></div><p>Ajiaco Santafereño is a soup connected to Bogotá. It can include three types of potato, corn, chicken, and guascas. Different cooks may prepare it in different ways. One famous version cannot represent every family or every table. A respectful question is: <strong>Is this dish important in your family or community?</strong></p></article>
      </section>

      <section className="lesson-section format-section">
        <SectionTitle kicker="FORMAT CHOICE" title="THE FORMAT CHANGES. THE GOALS DO NOT." />
        <QuickChoice question="How would you like to share?" options={['VISUAL STORY', 'DIGITAL STORY CARD', 'VOICE + VISUAL', 'SHORT VIDEO', 'LIVE STORY']} feedback="Choose the format that helps you communicate clearly. Fancy editing or expensive technology does not improve your grade." />
        <div className="assessment-words"><span>context</span><span>respect</span><span>clarity</span><span>participation</span><span>stereotype awareness</span></div>
        <Signature>THE FORMAT CHANGES.<br />THE GOALS DO NOT.</Signature>
      </section>

      <section className="lesson-section group-section">
        <SectionTitle kicker="GROUP OPTION" title="FLEXIBLE ROLES FOR THREE" />
        <div className="role-grid"><article><span>01</span><h3>STORY RESEARCHER</h3></article><article><span>02</span><h3>LANGUAGE KEEPER</h3></article><article><span>03</span><h3>EXPERIENCE DESIGNER</h3></article></div>
        <p className="large-copy">Everyone can help with every part. Roles simply help everyone participate.</p>
      </section>

      <section className="lesson-section check-section">
        <SectionTitle kicker="CONTEXT CHECK" title="IS YOUR STORY READY?" note="Use this self-check before you share. This is a guide, not a score." />
        <ContextCheck />
      </section>

      <section className="lesson-section rubric-section"><FinalRubric /></section>

      <section className="session-banner session-six"><span>SESSION 6 · 50 MIN</span><h2>SHARE · EXPLORE · REFLECT</h2></section>

      <section className="lesson-section gallery-section">
        <SectionTitle kicker="FOOD STORY GALLERY" title="EXPLORE AT LEAST THREE STORIES" />
        <div className="gallery-mission"><article><span>NOTICE</span><p>One thing I learned was…</p></article><article><span>CONNECT</span><p>One similarity or difference I noticed was…</p></article><article><span>ASK</span><p>One respectful question I can ask is…</p></article></div>
        <MicroNote type="IN CLASS" tone="coral"><h3>PEER-RESPONSE LANGUAGE</h3><div className="sentence-frame-grid"><span>I learned that…</span><span>I had not thought about…</span><span>Something new for me was…</span><span>Your story helped me understand…</span><span>One respectful question I still have is…</span></div><p><strong>CHOOSE YOUR PARTICIPATION ROUTE</strong></p><div className="route-equality"><span>SPEAK</span><span>READ</span><span>WRITE</span><span>PARTNER</span></div></MicroNote>
      </section>

      <section className="lesson-section reflection-section">
        <SectionTitle kicker="INDIVIDUAL REFLECTION" title="MY PLACE AT THE TABLE" />
        <div className="reflection-grid"><ReflectionBox storageKey="l5-recognize" prompt="One stereotype or assumption I can recognize now is…" /><ReflectionBox storageKey="l5-question" prompt="One respectful question I can use is…" /><ReflectionBox storageKey="l5-change" prompt="One idea about food and culture that changed for me is…" /><ReflectionBox storageKey="l5-explore" prompt="Optional: One food story I want to explore more is…" /></div>
      </section>

      <section className="lesson-section callback-section">
        <div className="callback-image"><Image src="/images/lesson1-mystery-covered.webp" alt="The covered Mystery Box from Module 1 returning at the end of the journey" fill sizes="(max-width: 1050px) 100vw, 50vw" /><div><small>BACK TO THE BEGINNING</small><strong>I REMEMBER THIS.</strong></div></div>
        <div><SectionTitle kicker="MYSTERY BOX CALLBACK" title="WHAT WOULD YOU PUT INSIDE?" /><ReflectionBox storageKey="l5-box-food" prompt="If you could share one food story with someone from another culture, what would you choose?" /><ReflectionBox storageKey="l5-box-context" prompt="What should someone understand before judging it?" /><div className="callback-transformation"><p><small>THEN</small>I DON&apos;T KNOW WHAT IS INSIDE.</p><span aria-hidden="true">→</span><p><small>NOW</small>I KNOW HOW TO LOOK, ASK, QUESTION, AND TELL A STORY RESPONSIBLY.</p></div></div>
      </section>

      <section className="lesson-section then-now-section"><SectionTitle kicker="THEN / NOW" title="CAN ONE DISH DEFINE A WHOLE CULTURE?" /><QuickChoice question="What do you think now?" options={['YES', 'NO', 'IT DEPENDS']} feedback="There is no automatic grade. Explain your thinking with context and one example." /><ThenNow /></section>

      <section className="finale"><span className="open-plate" aria-hidden="true" /><p className="section-kicker">BEYOND THE PLATE</p><h2>A DISH CAN CARRY A STORY.</h2><p>A story can carry memory, place, and identity.<br />But no single story can speak for everyone.</p><strong>LOOK CLOSER.<br />ASK FIRST.<br />STAY CURIOUS.</strong><p className="scribble">There is always more beyond the plate.</p><Link href="/">RETURN TO THE TABLE <span aria-hidden="true">→</span></Link></section>
      </div>
    </LessonShell>
  );
}
