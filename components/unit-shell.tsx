import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PaintedWordmark } from '@/components/round-one-ui';

const lessons = [
  ['01', 'Mystery Box', '/lesson-1'],
  ['02', 'More Than a Dish', '/lesson-2'],
  ['03', 'Fact or Stereotype?', '/lesson-3'],
  ['04', 'Curiosity', '/lesson-4'],
  ['05', 'Inclusive Table', '/lesson-5'],
];

export function UnitNav({ current }: { current?: string }) {
  return (
    <header className="unit-header">
      <div className="unit-global-row">
        <PaintedWordmark />
        <nav className="unit-primary-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/#lessons">Lessons</Link>
          <Link href="/lesson-2">Culture Map</Link>
          <Link href="/#journey">Story</Link>
          <Link href="/about" aria-current={current === 'about' ? 'page' : undefined}>About</Link>
        </nav>
        <Link className="unit-overview-link" href="/about">UNIT OVERVIEW <ArrowRight aria-hidden="true" /></Link>
      </div>
      <nav className="unit-lesson-rail" aria-label="Learning modules">
        {lessons.map(([number, label, href]) => (
          <Link key={href} href={href} aria-current={current === number ? 'page' : undefined}><span>{number}</span>{label}</Link>
        ))}
        <Link href="/references" aria-current={current === 'R' ? 'page' : undefined}><span>R</span>Sources</Link>
      </nav>
    </header>
  );
}

export function LessonHero({ number, phase, title, subtitle, tone = 'blue' }: { number: string; phase: string; title: string; subtitle: string; tone?: 'blue' | 'yellow' | 'coral' | 'ink' | 'green' }) {
  return (
    <section className={`lesson-hero tone-${tone}`}>
      <div className="lesson-index" aria-hidden="true">{number}</div>
      <div className="lesson-title-block">
        <p className="eyebrow">MODULE {number} · {phase}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <span className="open-plate hero-plate" aria-hidden="true" />
    </section>
  );
}

export function LessonShell({ current, children, prev, next }: { current: string; children: React.ReactNode; prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <main>
      <UnitNav current={current} />
      {children}
      <footer className="lesson-footer">
        {prev ? <Link href={prev.href}><ArrowLeft aria-hidden="true" /> <span><small>BACK</small>{prev.label}</span></Link> : <span />}
        {next ? <Link href={next.href}><span><small>NEXT</small>{next.label}</span> <ArrowRight aria-hidden="true" /></Link> : <span />}
      </footer>
    </main>
  );
}

export function SectionTitle({ kicker, title, note }: { kicker: string; title: string; note?: string }) {
  return <div className="section-title"><p className="section-kicker">{kicker}</p><h2>{title}</h2>{note && <p className="section-note">{note}</p>}</div>;
}

export function MicroNote({ type, children, tone = 'yellow' }: { type: 'EXPLORER TIP' | 'CULTURE NOTE' | 'LANGUAGE TIP' | 'THINK AGAIN' | 'IN CLASS'; children: React.ReactNode; tone?: 'yellow' | 'blue' | 'coral' | 'green' }) {
  return <aside className={`micro-note note-${tone}`}><strong>{type}</strong><div>{children}</div></aside>;
}

export function Signature({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`signature ${light ? 'signature-light' : ''}`}><span className="open-plate" aria-hidden="true" /><p>{children}</p></div>;
}
