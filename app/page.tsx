import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { HomeFoodRotator } from '@/components/home-experience';
import { OpenPlateMark, RoundFooter, RoundHeader, SectionLabel } from '@/components/round-one-ui';

const lessonCards = [
  { number: '01', title: 'Open the Mystery Box', copy: 'Discover before you judge.', href: '/lesson-1', image: '/images/lesson1-mystery-covered.webp', alt: 'A hand beginning to uncover a leaf-wrapped parcel in a wooden tray', tone: 'mango' },
  { number: '02', title: 'More Than a Dish', copy: 'Food can tell a story, but never the whole story.', href: '/lesson-2', image: '/images/home-hero-ajiaco.webp', alt: 'A ceramic bowl of potato, corn, chicken, and herb soup on a wooden table', tone: 'sky' },
  { number: '03', title: 'Fact, Experience or Stereotype?', copy: 'What happens when one story becomes everyone’s story?', href: '/lesson-3', image: '/images/home-hero-arroz-coco.webp', alt: 'Coconut rice, fried fish, and salad served on a ceramic plate over wood', tone: 'coral' },
  { number: '04', title: 'Curiosity, Not Judgment', copy: 'What can we say when something is unfamiliar?', href: '/lesson-4', image: '/images/home-human-table.webp', alt: 'Four teenagers naturally passing a plate and talking around a shared table', tone: 'blue' },
  { number: '05', title: 'The Inclusive Food Table', copy: 'Every dish has a story. No dish tells every story.', href: '/lesson-5', image: '/images/prototype-hero-foodie.webp', alt: 'Hands reaching across a naturally lit table with shared homemade dishes', tone: 'ink' },
] as const;

const goals = [
  { number: '01', title: 'NOTICE', copy: 'I can recognize a food stereotype.' },
  { number: '02', title: 'EXPLORE', copy: 'I can compare different food traditions.' },
  { number: '03', title: 'COMMUNICATE', copy: 'I can ask respectful questions about unfamiliar foods.' },
  { number: '04', title: 'CREATE', copy: 'I can share a food story without stereotyping people.' },
] as const;

const journey = [
  { number: '01', phase: 'EXPERIENCE', title: 'OPEN THE MYSTERY BOX', copy: 'Discover Before You Judge', change: "I DON'T KNOW THIS", href: '/lesson-1', image: undefined, alt: undefined },
  { number: '02', phase: 'EXPLORE', title: 'MORE THAN A DISH', copy: 'Food can tell a story, but never the whole story.', change: 'LET ME LOOK CLOSER', href: '/lesson-2', image: undefined, alt: undefined },
  { number: '03', phase: 'QUESTION', title: 'FACT, EXPERIENCE OR STEREOTYPE?', copy: "What happens when one story becomes everyone's story?", change: 'ONE STORY ≠ EVERYONE', href: '/lesson-3', image: undefined, alt: undefined },
  { number: '04', phase: 'COMMUNICATE', title: 'CURIOSITY, NOT JUDGMENT', copy: 'What can we say when something is unfamiliar?', change: 'I CAN ASK FIRST', href: '/lesson-4', image: undefined, alt: undefined },
  { number: '05', phase: 'CREATE + REFLECT', title: 'THE INCLUSIVE FOOD TABLE', copy: 'Every dish has a story. No dish tells every story.', change: 'I CAN TELL IT RESPONSIBLY', href: '/lesson-5', image: undefined, alt: undefined },
] as const;

export default function Home() {
  return (
    <main className="round-one-home" id="top">
      <section className="home2-opening" aria-labelledby="home2-title">
        <RoundHeader current="home" />
        <div className="home2-hero">
          <div className="home2-copy">
            <h1 id="home2-title"><span>BEYOND</span><span className="home2-title-the">the</span><span className="home2-title-plate">PLATE</span></h1>
            <p className="home2-subtitle">Exploring Food, Culture, and Stereotypes</p>
            <div className="home2-essential">
              <OpenPlateMark />
              <span>ESSENTIAL QUESTION</span>
              <strong>Can one dish define<br />a whole culture?</strong>
            </div>
            <p className="home2-small-note">one plate. never the whole story.</p>
          </div>

          <div className="home2-main-food">
            <p className="home2-food-note">Different ingredients.<br />Same human stories.</p>
            <HomeFoodRotator />
          </div>

          <Link className="home2-primary-cta home2-mobile-cta" href="/lesson-1">START THE JOURNEY <ArrowRight aria-hidden="true" /></Link>

          <aside className="home2-human-story" aria-label="A shared food story">
            <div className="home2-human-backplate" aria-hidden="true" />
            <figure>
              <Image src="/images/home-human-table.webp" alt="Four teenagers passing a plate, listening, and talking naturally around a shared table" fill sizes="(max-width: 760px) 92vw, 27vw" priority />
            </figure>
            <p>Good food brings people together.</p>
            <div className="home2-sticky-note"><span>SAME TABLE.</span><strong>DIFFERENT STORIES.</strong></div>
          </aside>
        </div>

        <div id="lessons" className="home2-lesson-preview" aria-label="Lesson preview">
          {lessonCards.map((lesson) => (
            <Link className={`home2-lesson-card home2-card-${lesson.tone}`} href={lesson.href} key={lesson.number}>
              <div className="home2-card-photo"><Image src={lesson.image} alt={lesson.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 1050px) 46vw, 23vw" /></div>
              <div className="home2-card-copy">
                <span>LESSON {lesson.number}</span>
                <h2>{lesson.title}</h2>
                <p>{lesson.copy}</p>
                <i aria-hidden="true"><ArrowRight /></i>
              </div>
            </Link>
          ))}
        </div>

        <Link className="home2-primary-cta home2-desktop-cta" href="/lesson-1">START THE JOURNEY <ArrowRight aria-hidden="true" /></Link>
        <p className="home2-bottom-note">food creates curiosity.</p>
        <a className="home2-scroll-cue" href="#about" aria-label="Continue to the introduction"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section id="about" className="home2-intro" aria-labelledby="home2-intro-title">
        <div className="home2-intro-copy">
          <SectionLabel>BEYOND THE FIRST IMPRESSION</SectionLabel>
          <h2 id="home2-intro-title">FOOD IS MORE THAN<br /><span>SOMETHING WE EAT.</span></h2>
          <p className="home2-intro-lead">Food is more than something we eat. It can carry memories, traditions, places, and family stories.</p>
          <p>In this unit, you will explore food from different communities, question stereotypes, and learn how to talk about cultural differences with curiosity and respect.</p>
          <p className="home2-hand-note">one story is never everyone&apos;s story.</p>
        </div>
        <div className="home2-intro-visual">
          <div aria-hidden="true" />
          <figure><Image src="/images/prototype-hero-foodie.webp" alt="Hands reaching across a naturally lit table with shared homemade dishes, bread, and ceramic plates" fill sizes="(max-width: 760px) 92vw, 42vw" /></figure>
          <aside><strong>🌍 CULTURE NOTE</strong><p>A dish can be part of cultural identity, but people from the same culture can have different traditions, tastes, and experiences.</p></aside>
        </div>
      </section>

      <section className="home2-goals" aria-labelledby="home2-goals-title">
        <div className="home2-goals-heading">
          <SectionLabel>WHAT YOU&apos;LL DISCOVER</SectionLabel>
          <h2 id="home2-goals-title">FOUR WAYS TO GROW<br />YOUR PERSPECTIVE.</h2>
          <p>notice more. assume less.</p>
        </div>
        <div className="home2-goals-composition">
          {goals.map((goal, index) => (
            <article className={`home2-goal home2-goal-${index + 1}`} key={goal.number}>
              <span>{goal.number}</span><h3>{goal.title}</h3><p>{goal.copy}</p>
            </article>
          ))}
          <div className="home2-goal-plate" aria-hidden="true"><OpenPlateMark /></div>
        </div>
        <p className="home2-goals-end">Different goals. One journey.</p>
      </section>

      <section id="journey" className="home2-journey" aria-labelledby="home2-journey-title">
        <div className="home2-journey-head">
          <SectionLabel>YOUR JOURNEY · 05 STORIES</SectionLabel>
          <h2 id="home2-journey-title">LOOK INWARD.<br /><span>LOOK OUTWARD.</span></h2>
          <OpenPlateMark />
        </div>
        <div className="home2-route">
          {journey.map((step, index) => (
            <article className={`home2-route-step home2-route-step-${index + 1}`} key={step.number}>
              <span className="home2-route-number">{step.number}</span>
              <div className="home2-route-copy">
                <small>{step.phase}</small>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <strong>{step.change}</strong>
                <Link href={step.href} aria-label={`Open lesson ${step.number}: ${step.title}`}><ArrowRight aria-hidden="true" /></Link>
              </div>
              {step.image && <figure><Image src={step.image} alt={step.alt || ''} fill sizes="(max-width: 760px) 84vw, 28vw" /></figure>}
            </article>
          ))}
        </div>
      </section>

      <section className="home2-final" aria-labelledby="home2-final-title">
        <OpenPlateMark />
        <div>
          <SectionLabel>READY TO BEGIN?</SectionLabel>
          <h2 id="home2-final-title">READY TO LOOK<br />BEYOND THE FIRST<br />IMPRESSION?</h2>
          <p className="home2-final-note">look closer. ask first. stay curious.</p>
        </div>
        <aside><span>YOUR FIRST STEP</span><p>Experience something unfamiliar before deciding what it means.</p></aside>
        <Link href="/lesson-1">OPEN THE MYSTERY BOX <ArrowRight aria-hidden="true" /></Link>
      </section>

      <RoundFooter />
    </main>
  );
}
