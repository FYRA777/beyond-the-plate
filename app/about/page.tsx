import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ModuleSnapshot } from '@/components/final-production';
import { LessonShell } from '@/components/unit-shell';

export const dynamic = 'force-static';

const objectives = [
  ['01', 'Describe and compare food stories from different contexts using simple English and relevant cultural details.', 'MODULES 01 + 02'],
  ['02', 'Classify food-related statements as fact, experience, or stereotype and rewrite generalizations using more precise English.', 'MODULE 03'],
  ['03', 'Listen and respond to unfamiliar food stories using respectful curiosity and simple repair expressions.', 'MODULE 04'],
  ['04', 'Create and present one contextualized food story that avoids stereotypes and includes a respectful question.', 'MODULE 05'],
] as const;

export default function AboutPage() {
  return (
    <LessonShell current="about" next={{ href: '/lesson-1', label: 'Open the Mystery Box' }}>
      <div className="round-two round2-about">
        <section className="about-hero" aria-labelledby="about-title">
          <p>STUDENT UNIT OVERVIEW</p>
          <h1 id="about-title"><span>BEYOND</span><em>the</em><strong>PLATE</strong></h1>
          <h2>Exploring Food, Culture, and Stereotypes</h2>
          <div className="about-essential"><small>ESSENTIAL QUESTION</small><p>Can one dish define a whole culture?</p></div>
        </section>

        <section className="about-facts" aria-label="Unit facts">
          <div><small>POPULATION</small><strong>Seventh-grade students</strong></div>
          <div><small>ENGLISH</small><strong>A2</strong></div>
          <div><small>CONTEXT</small><strong>Colombian public-school learning context</strong></div>
          <div><small>THEME</small><strong>Food and Cultural Heritage</strong></div>
          <div><small>FOCUS</small><strong>Food Stereotypes</strong></div>
          <div><small>STRUCTURE</small><strong>5 learning modules · 6 sessions · 1 final performance</strong></div>
        </section>

        <section className="about-section about-objectives" aria-labelledby="objectives-title">
          <p className="section-kicker">WHAT YOU WILL DO</p>
          <h2 id="objectives-title">FOUR OBJECTIVES.<br />ONE JOURNEY.</h2>
          <div className="objective-route">{objectives.map(([number, objective, alignment]) => <article key={number}><span>{number}</span><p>{objective}</p><small>{alignment}</small></article>)}</div>
        </section>

        <ModuleSnapshot
          number="01"
          phase="EXPERIENCE"
          title="OPEN THE MYSTERY BOX"
          duration="50 min"
          question="What do you notice before you know?"
          skills={['Reading', 'Speaking', 'Writing']}
          vocabulary={['notice', 'color', 'shape', 'texture', 'size', 'familiar', 'unfamiliar', 'guess', 'clue']}
          structures={['It looks…', 'I can see…', 'I think it could be…', 'It reminds me of…']}
          cultureFocus="The same food or object can feel familiar to one person and unfamiliar to another."
          outcome="Describe an unfamiliar food or object using at least two details and ask one respectful question before judging it."
          activities={['What Do You See?', 'One Ingredient, Many Stories']}
        />

        <section className="about-section about-participation" aria-labelledby="participation-title">
          <div><p className="section-kicker">SKILLS ACROSS THE JOURNEY</p><h2 id="participation-title">READ · LISTEN · SPEAK · WRITE · USE LANGUAGE</h2></div>
          <div className="participation-routes"><small>DIFFERENT WAYS TO PARTICIPATE</small>{['Read', 'Listen', 'Speak', 'Write', 'Work with a Partner'].map((route) => <span key={route}>{route}</span>)}</div>
          <blockquote>Choose the route that helps you participate meaningfully.<br /><strong>The learning goal stays the same.</strong></blockquote>
        </section>

        <section className="about-section assessment-journey" aria-labelledby="assessment-title">
          <p className="section-kicker">HOW YOUR LEARNING BECOMES VISIBLE</p>
          <h2 id="assessment-title">CHECK. REFLECT. CREATE.</h2>
          <div className="assessment-path">
            <article><small>FORMATIVE CHECKS</small><ul><li>Module 1 — Exit Reflection</li><li>Module 2 — My Food Map</li><li>Module 3 — Catch · Fix · Explain</li><li>Module 4 — Second Choice</li><li>Module 5 — Context Check</li></ul></article>
            <article><small>SELF-ASSESSMENT</small><strong>My Place at the Table</strong></article>
            <article><small>FINAL PERFORMANCE</small><strong>The Inclusive Food Table</strong></article>
          </div>
          <Link href="/lesson-1">BEGIN MODULE 01 <ArrowRight aria-hidden="true" /></Link>
        </section>
      </div>
    </LessonShell>
  );
}
