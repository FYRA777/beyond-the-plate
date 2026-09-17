import { ColombiaExplorer, QuickChoice, ReflectionBox, WorldStoryExplorer } from '@/components/interactive';
import { LessonHero, LessonShell, MicroNote, SectionTitle, Signature } from '@/components/unit-shell';
import Link from 'next/link';
import { ModuleSnapshot } from '@/components/final-production';

export const dynamic = 'force-static';

export default function LessonTwo() {
  return (
    <LessonShell current="02" prev={{ href: '/lesson-1', label: 'Open the Mystery Box' }} next={{ href: '/lesson-3', label: 'Fact, Experience or Stereotype?' }}>
      <div className="round-two round2-l2">
      <LessonHero number="02" phase="EXPLORE" title="MORE THAN A DISH" subtitle="Food can tell a story, but never the whole story." tone="blue" />

      <ModuleSnapshot
        number="02"
        phase="EXPLORE"
        title="MORE THAN A DISH"
        duration="50 min"
        question="Can one dish represent a whole place or culture?"
        skills={['Reading', 'Speaking', 'Writing']}
        vocabulary={['region', 'tradition', 'ingredient', 'community', 'version', 'context', 'familiar']}
        structures={['Both stories…', 'One difference is…', 'In some regions…', 'This food can…']}
        cultureFocus="Cultures contain many food traditions and internal differences."
        outcome="Compare two food traditions using cultural context and explain why one dish cannot represent a whole culture."
        activities={['Explore the Food Stories', 'Two Journeys, One Map / My Food Map']}
      />

      <div className="round2-lens-ribbon" aria-label="Lesson framework"><span>LOOK INWARD</span><b>→</b><span>LOOK OUTWARD</span></div>

      <section className="lesson-section lens-opening lens-inward">
        <div className="lens-mark"><small>PART I</small><strong>LOOK<br />INWARD</strong></div>
        <div><SectionTitle kicker="MANY TABLES, ONE COUNTRY" title="WE LIVE IN THE SAME COUNTRY. DO WE ALL EAT THE SAME FOOD?" /><QuickChoice question="Choose your first answer." options={['YES', 'NO', "I'M NOT SURE"]} feedback="Keep your answer in mind while you explore four Colombian food stories." /></div>
      </section>

      <section className="lesson-section mission-section">
        <SectionTitle kicker="YOUR MISSION" title="CHOOSE THREE STORIES" note="One can fit more than one group. Your choices can change." />
        <div className="mission-grid"><ReflectionBox storageKey="l2-familiar" prompt="One story that feels familiar…" /><ReflectionBox storageKey="l2-new" prompt="One story that is new to you…" /><ReflectionBox storageKey="l2-curious" prompt="One story that makes you curious…" /></div>
      </section>

      <section className="lesson-section colombia-section">
        <SectionTitle kicker="COLOMBIA EXPLORATION" title="FOUR FOOD STORIES" note="Use the map or the story list. Both routes lead to the same content." />
        <ColombiaExplorer />
        <Signature>NEW TO ME ≠ STRANGE FOR EVERYONE</Signature>
        <p className="signature-support">Something can be unfamiliar to you and familiar to someone else.</p>
      </section>

      <section className="lesson-section four-table-section">
        <SectionTitle kicker="FOUR-TABLE MOMENT" title="SAME COUNTRY. SAME TABLE?" />
        <div className="ingredient-words"><span>COCONUT</span><span>POTATOES</span><span>FIRE</span><span>CASSAVA</span></div>
        <QuickChoice question="Did we explore all the food traditions in Colombia?" options={['YES', 'NO']} feedback="No. These are only four stories. Colombia has many more food traditions." />
        <MicroNote type="CULTURE NOTE"><p>A map is not the whole culture. It is only a place to begin.</p></MicroNote>
        <MicroNote type="EXPLORER TIP" tone="green"><p>The Colombian Ministry of Culture has documented <strong>1,989 traditional recipes</strong> in its national inventory.</p></MicroNote>
      </section>

      <section className="outward-transition"><p>IF ONE DISH CANNOT REPRESENT COLOMBIA…</p><h2>…CAN ONE DISH REPRESENT<br />ANOTHER COUNTRY?</h2><span>LOOK OUTWARD ↓</span></section>

      <section className="lesson-section lens-opening lens-outward">
        <div className="lens-mark"><small>PART II</small><strong>LOOK<br />OUTWARD</strong></div>
        <div><SectionTitle kicker="WHAT DO YOU THINK YOU KNOW?" title="WHAT FOOD COMES TO YOUR MIND FIRST?" /><p className="large-copy">Mexico · Japan · Republic of Korea · Peru</p><MicroNote type="THINK AGAIN" tone="coral"><p>Your first association is not marked right or wrong. It is a place to look closer.</p></MicroNote></div>
      </section>

      <section className="lesson-section world-section">
        <SectionTitle kicker="YOU MAY KNOW… → LOOK CLOSER" title="FAMOUS IS NOT COMPLETE" note="Choose an answer in each story. Read the reasoning, not only the result." />
        <WorldStoryExplorer />
        <Signature>FAMOUS ≠ COMPLETE</Signature>
      </section>

      <section className="lesson-section class-activity-section">
        <MicroNote type="IN CLASS" tone="coral"><h3>TWO JOURNEYS, ONE MAP</h3><div className="sentence-frame-grid"><span>I explored…</span><span>Something new for me was…</span><span>One similarity was…</span><span>One difference was…</span><span>I would like to know more about…</span></div></MicroNote>
      </section>

      <section className="lesson-section exit-section">
        <p className="task-skill">WRITING · FORMATIVE CHECK</p>
        <SectionTitle kicker="MY FOOD MAP" title="CONNECT THE STORIES" />
        <div className="reflection-grid"><ReflectionBox storageKey="l2-map-familiar" prompt="A story that felt familiar…" /><ReflectionBox storageKey="l2-map-new" prompt="A story that was new to me…" /><ReflectionBox storageKey="l2-map-learned" prompt="One thing I learned…" /><ReflectionBox storageKey="l2-map-question" prompt="One question I still have…" /></div>
        <ReflectionBox storageKey="l2-final" prompt="One dish cannot tell the whole story because…" />
      </section>

      <section className="round2-transformation" aria-labelledby="l2-transformation-title">
        <div><span>WHEN YOU ARRIVED</span><p>I know some famous foods.</p></div>
        <b aria-hidden="true">→</b>
        <div><span>NOW</span><p id="l2-transformation-title">I know that one dish is only one story.</p></div>
      </section>

      <section className="round2-bridge">
        <p>NEXT QUESTION</p>
        <h2>BUT WHAT HAPPENS WHEN A SHORTCUT BECOMES A STEREOTYPE?</h2>
        <Link href="/lesson-3">CONTINUE TO LESSON 03 <span aria-hidden="true">→</span></Link>
      </section>
      </div>
    </LessonShell>
  );
}
