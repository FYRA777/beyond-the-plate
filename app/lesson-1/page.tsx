import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InitialPoll, ReflectionBox } from '@/components/interactive';
import { DescribeGuess, ExploreRoutePicker, MemoryConnection, ObservationFocus, ParticipationModes, RevealMoment } from '@/components/lesson-one-experience';
import { OpenPlateMark, PedagogyNote, RoundFooter, RoundHeader, SectionLabel } from '@/components/round-one-ui';

export const dynamic = 'force-static';

export default function LessonOne() {
  return (
    <main className="lesson-one-v2">
      <section className="l1-opening" aria-labelledby="l1-title">
        <RoundHeader current="lesson-1" />
        <div className="l1-hero">
          <div className="l1-hero-number" aria-hidden="true">01</div>
          <div className="l1-hero-copy">
            <SectionLabel>LESSON 01 · EXPERIENCE</SectionLabel>
            <h1 id="l1-title">OPEN THE<br /><span>MYSTERY BOX</span></h1>
            <p>Discover Before You Judge</p>
            <p className="l1-hand-note">what do you notice before you know?</p>
          </div>
          <div className="l1-hero-visual">
            <div className="l1-hero-backplate" aria-hidden="true" />
            <figure>
              <Image src="/images/lesson1-mystery-covered.webp" alt="A hand lifting linen to reveal part of a tied leaf parcel in a wooden tray on a worn table" fill sizes="(max-width: 760px) 94vw, 54vw" priority />
              <figcaption>FIRST CLUE · A WRAPPED SHAPE</figcaption>
            </figure>
            <OpenPlateMark />
          </div>
          <div className="l1-arrival"><span>WHEN YOU ARRIVE</span><strong>I DON&apos;T KNOW WHAT IS INSIDE.</strong></div>
        </div>
      </section>

      <section id="observation" className="l1-section l1-observe" aria-labelledby="l1-observe-title">
        <div className="l1-section-head">
          <SectionLabel>LOOK FIRST · 01</SectionLabel>
          <h2 id="l1-observe-title">WHAT DO YOU SEE?</h2>
          <p>Look closely. You do not need to know what it is yet.</p>
        </div>
        <ObservationFocus />
        <PedagogyNote type="EXPLORER TIP"><p>“New to me” describes your experience. It does not describe the food.</p></PedagogyNote>
      </section>

      <section id="accessibility" className="l1-section l1-explore" aria-labelledby="l1-explore-title">
        <div className="l1-section-head">
          <SectionLabel>CHOOSE YOUR WAY TO EXPLORE</SectionLabel>
          <h2 id="l1-explore-title">THERE IS MORE THAN ONE WAY TO NOTICE.</h2>
        </div>
        <ExploreRoutePicker />
        <p className="l1-safety-line">You do not need to explain why you choose a route.</p>
      </section>

      <section className="l1-section l1-guess" aria-labelledby="l1-guess-title">
        <div className="l1-section-head l1-section-head-light">
          <SectionLabel>YOUR TURN</SectionLabel>
          <h2 id="l1-guess-title">WHAT COULD IT BE?</h2>
        </div>
        <DescribeGuess />
        <PedagogyNote type="LANGUAGE TIP">
          <div className="l1-language-list"><span>It smells…</span><span>It feels…</span><span>It looks…</span><span>I think it could be…</span></div>
        </PedagogyNote>
      </section>

      <section className="l1-section l1-memory" aria-labelledby="l1-memory-title">
        <div className="l1-memory-layout">
          <div className="l1-section-head">
            <SectionLabel>MEMORY CONNECTION</SectionLabel>
            <h2 id="l1-memory-title">DOES IT REMIND YOU OF SOMETHING?</h2>
            <div className="l1-frame-list">
              <span>“It reminds me of…”</span>
              <span>“I have tried something like this…”</span>
              <span>“I have never tried this before…”</span>
              <span>“My family or community has something similar…”</span>
            </div>
          </div>
          <figure><Image src="/images/lesson1-human-observation.webp" alt="Three students observing a leaf-wrapped food parcel while one points and another writes" fill sizes="(max-width: 760px) 92vw, 43vw" /></figure>
        </div>
        <MemoryConnection />
      </section>

      <section className="l1-section l1-reveal" aria-labelledby="l1-reveal-title">
        <div className="l1-section-head">
          <SectionLabel>THE REVEAL</SectionLabel>
          <h2 id="l1-reveal-title">LOOK AGAIN.<br /><span>NOW WITH MORE CONTEXT.</span></h2>
          <p className="l1-hand-note">were you surprised?</p>
        </div>
        <RevealMoment />
      </section>

      <section className="l1-section l1-stories" aria-labelledby="l1-stories-title">
        <div className="l1-section-head">
          <SectionLabel>DIFFERENT EXPERIENCES</SectionLabel>
          <h2 id="l1-stories-title">SAME FOOD.<br />DIFFERENT STORIES.</h2>
        </div>
        <div className="l1-experience-statements">
          <p>For one person, this may feel familiar.</p>
          <p>For another, it may be completely new.</p>
          <strong>Both experiences are valid.</strong>
        </div>
        <div className="l1-open-statement"><OpenPlateMark /><p>NEW TO ME <span>≠</span><br />STRANGE FOR EVERYONE.</p></div>
        <PedagogyNote type="CULTURE NOTE"><p>Food can be part of cultural identity, but people within the same culture can have different traditions, tastes, and experiences.</p></PedagogyNote>
      </section>

      <section className="l1-section l1-poll" aria-labelledby="l1-poll-heading">
        <div className="l1-section-head">
          <SectionLabel>RETURN TO THE ESSENTIAL QUESTION</SectionLabel>
          <h2 id="l1-poll-heading">WHAT DO YOU THINK NOW?</h2>
        </div>
        <InitialPoll />
      </section>

      <section className="l1-section l1-classroom" aria-labelledby="l1-classroom-title">
        <div className="l1-classroom-layout">
          <div className="l1-section-head l1-section-head-light">
            <SectionLabel>IN CLASS</SectionLabel>
            <h2 id="l1-classroom-title">ONE INGREDIENT.<br />MANY STORIES.</h2>
            <p>Compare what you noticed, guessed, remembered, and discovered.</p>
          </div>
          <div className="l1-classroom-cues">
            {['I noticed…', 'I thought…', 'It reminded me of…', 'My experience was different because…'].map((cue, index) => <span key={cue}><i>0{index + 1}</i>{cue}</span>)}
          </div>
        </div>
        <ParticipationModes />
      </section>

      <section className="l1-section l1-exit" aria-labelledby="l1-exit-title">
        <div className="l1-section-head">
          <SectionLabel>BEFORE YOU GO</SectionLabel>
          <h2 id="l1-exit-title">WHAT CHANGED WHEN<br />YOU LOOKED CLOSER?</h2>
        </div>
        <div className="l1-reflections">
          <ReflectionBox storageKey="lesson1-discovered" prompt="Today I discovered…" />
          <ReflectionBox storageKey="lesson1-surprised" prompt="One thing that surprised me…" />
        </div>
        <p className="l1-no-grade">No AI grading. Your reflection stays on this device.</p>
      </section>

      <section className="l1-transformation" aria-labelledby="l1-transformation-title">
        <OpenPlateMark />
        <h2 id="l1-transformation-title" className="sr-only">Lesson 1 transformation</h2>
        <div><span>WHEN YOU ARRIVED</span><p>I DON&apos;T KNOW<br />WHAT IS INSIDE.</p></div>
        <ArrowRight aria-hidden="true" />
        <div><span>NOW</span><p>I KNOW HOW TO APPROACH<br /><strong>WHAT I DON&apos;T KNOW.</strong></p></div>
      </section>

      <section className="l1-bridge" aria-labelledby="l1-bridge-title">
        <p>You discovered that one object can create many different experiences.</p>
        <h2 id="l1-bridge-title">BUT CAN ONE DISH<br />REPRESENT A WHOLE PLACE?</h2>
        <Link href="/lesson-2">EXPLORE MORE THAN A DISH <ArrowRight aria-hidden="true" /></Link>
      </section>

      <RoundFooter />
    </main>
  );
}
