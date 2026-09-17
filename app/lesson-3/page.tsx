import { AssumptionTable, ContextStepper, EmptyLabel, LanguageInUse, PrivateStereotypeReflection, ReflectionBox, RewritePractice } from '@/components/interactive';
import { LessonHero, LessonShell, MicroNote, SectionTitle, Signature } from '@/components/unit-shell';
import Link from 'next/link';
import { ModuleSnapshot } from '@/components/final-production';

export const dynamic = 'force-static';

export default function LessonThree() {
  return (
    <LessonShell current="03" prev={{ href: '/lesson-2', label: 'More Than a Dish' }} next={{ href: '/lesson-4', label: 'Curiosity, Not Judgment' }}>
      <div className="round-two round2-l3">
      <LessonHero number="03" phase="QUESTION" title="FACT, EXPERIENCE OR STEREOTYPE?" subtitle="What happens when one story becomes everyone's story?" tone="coral" />

      <ModuleSnapshot
        number="03"
        phase="QUESTION"
        title="FACT, EXPERIENCE OR STEREOTYPE?"
        duration="50 min"
        question="What happens when one story becomes everyone’s story?"
        skills={['Reading', 'Writing', 'Language in Use']}
        vocabulary={['fact', 'experience', 'stereotype', 'evidence', 'assumption', 'context', 'generalization']}
        structures={['some people', 'some families', 'in some regions', 'can / may', 'everyone / always / never']}
        cultureFocus="Generalizations can erase individual and community differences."
        outcome="Classify food-related statements as fact, experience, or stereotype and rewrite one generalization using more precise English."
        activities={['Sort the Claim', 'Catch · Fix · Explain']}
      />

      <section className="lesson-section investigation-opening">
        <SectionTitle kicker="ONE STORY. THREE WAYS TO TELL IT." title="DO THESE SENTENCES MEAN THE SAME THING?" />
        <div className="sentence-evidence"><p><span>A</span><strong>My family</strong> eats tamales at Christmas.</p><p><span>B</span><strong className="underline-yellow">Some families</strong> eat tamales at Christmas.</p><p><span>C</span><strong className="underline-coral">Everyone</strong> from this culture eats tamales at Christmas.</p></div>
        <div className="investigation-reveal"><strong>NO.</strong><p>SMALL WORDS CAN MAKE BIG CLAIMS.</p></div>
      </section>

      <section className="lesson-section concept-section">
        <SectionTitle kicker="THREE CONCEPTS" title="WHAT KIND OF STORY IS IT?" />
        <div className="concept-grid"><article className="fact"><span>01</span><h3>FACT</h3><p>Something we can check with reliable information.</p></article><article className="experience"><span>02</span><h3>EXPERIENCE</h3><p>Something that happened to one person, family, or group.</p></article><article className="stereotype"><span>03</span><h3>STEREOTYPE</h3><p>A general idea that treats a group as if everyone were the same.</p></article></div>
        <blockquote className="key-line">A personal experience can be true <em>without</em> being true for everyone.</blockquote>
      </section>

      <section className="lesson-section assumption-section">
        <SectionTitle kicker="THE ASSUMPTION TABLE" title="CLASSIFY. THEN READ WHY." note="Tap a category for each sentence. On every screen, tap/select works." />
        <AssumptionTable />
      </section>

      <section className="lesson-section context-section">
        <SectionTitle kicker="HOW DID THE STORY CHANGE?" title="WHAT DISAPPEARED?" note="Move through the sentences. Watch the group grow." />
        <ContextStepper />
        <div className="context-answer"><small>THE ANSWER</small><strong>THE CONTEXT.</strong></div>
        <Signature>WHEN CONTEXT DISAPPEARS,<br />ASSUMPTIONS CAN GROW.</Signature>
      </section>

      <section className="lesson-section word-watch-section">
        <SectionTitle kicker="WORD WATCH" title="SMALL WORDS. BIG CLAIMS." />
        <div className="watch-words"><span>all</span><span>always</span><span>everyone</span><span>never</span><span>they all</span></div>
        <p className="large-copy">These words are not automatically wrong. Ask: <strong>Do we have enough evidence?</strong></p>
        <MicroNote type="LANGUAGE TIP" tone="blue"><div className="precision-words"><span>some people</span><span>some families</span><span>in some regions</span><span>for this family</span><span>in this community</span><span>can / may</span></div></MicroNote>
        <Signature>RESPECTFUL LANGUAGE IS OFTEN<br />MORE PRECISE LANGUAGE.</Signature>
      </section>

      <section className="lesson-section language-use-section">
        <p className="task-skill">LANGUAGE IN USE · INTERACTIVE PRACTICE</p>
        <SectionTitle kicker="MAKE THE CLAIM SMALLER" title="MAKE THE MEANING CLEARER." note="Choose a precise version. Read why the meaning changes." />
        <LanguageInUse />
        <Signature>RESPECTFUL LANGUAGE IS OFTEN<br />MORE PRECISE LANGUAGE.</Signature>
      </section>

      <section className="lesson-section rewrite-section">
        <p className="task-skill">WRITING · CORE ACTIVITY 02</p>
        <SectionTitle kicker="REWRITE THE STORY" title="ADD THE CONTEXT BACK" />
        <RewritePractice />
        <MicroNote type="IN CLASS" tone="coral"><h3>ONE STORY, TWO VERSIONS</h3><p><strong>CATCH IT · FIX IT · EXPLAIN IT</strong></p><p>Work with a partner. One person finds the generalization. Together, write a more precise version and explain what changed.</p></MicroNote>
      </section>

      <section className="lesson-section round2-bias-bridge">
        <SectionTitle kicker="THE BIAS BRIDGE" title="A CLAIM CAN CHANGE HOW PEOPLE ARE TREATED" note="A stereotype is not only an inaccurate shortcut. It can shape expectations and participation." />
        <ol aria-label="How a stereotype can affect inclusion">
          <li><span>01</span><strong>STEREOTYPE</strong><p>A general claim about a group.</p></li>
          <li><span>02</span><strong>EXPECTATION</strong><p>We predict what a person will be like.</p></li>
          <li><span>03</span><strong>TREATMENT</strong><p>We may speak or act differently.</p></li>
          <li><span>04</span><strong>INCLUSION / EXCLUSION</strong><p>Someone may feel invited—or pushed away.</p></li>
        </ol>
      </section>

      <section className="lesson-section exit-section">
        <SectionTitle kicker="FORMATIVE EXIT" title="CATCH IT. FIX IT. EXPLAIN IT." />
        <div className="reflection-grid"><ReflectionBox storageKey="l3-catch" prompt="CATCH IT · Which word or idea is a problem?" /><ReflectionBox storageKey="l3-fix" prompt="FIX IT · Write a more precise sentence." /><ReflectionBox storageKey="l3-explain" prompt="EXPLAIN IT · Why is your version more respectful?" /></div>
        <PrivateStereotypeReflection />
      </section>

      <section className="lesson-section optional-section">
        <p className="optional-label">KEEP EXPLORING +</p>
        <SectionTitle kicker="THE EMPTY LABEL" title="WHAT CAN ONE PHOTO TELL YOU?" />
        <EmptyLabel />
        <p className="final-observation">Observation is not the same as understanding. <strong>Context comes next.</strong></p>
      </section>

      <section className="round2-transformation" aria-labelledby="l3-transformation-title">
        <div><span>WHEN YOU ARRIVED</span><p>I heard a statement.</p></div>
        <b aria-hidden="true">→</b>
        <div><span>NOW</span><p id="l3-transformation-title">I can ask: Is it a fact, an experience, or a stereotype?</p></div>
      </section>

      <section className="round2-bridge">
        <p>NEXT QUESTION</p>
        <h2>WHAT CAN WE SAY INSTEAD OF JUDGING?</h2>
        <Link href="/lesson-4">CONTINUE TO LESSON 04 <span aria-hidden="true">→</span></Link>
      </section>
      </div>
    </LessonShell>
  );
}
