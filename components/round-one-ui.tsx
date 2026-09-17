import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PaintedWordmark({ light = false }: { light?: boolean }) {
  return (
    <Link className={`round-wordmark ${light ? 'round-wordmark-light' : ''}`} href="/" aria-label="Beyond the Plate, home">
      <span className="round-wordmark-beyond">Beyond</span>
      <span className="round-wordmark-plate">the Plate</span>
    </Link>
  );
}

export function RoundHeader({ current = 'home' }: { current?: 'home' | 'lesson-1' }) {
  return (
    <header className="round-header">
      <PaintedWordmark />
      <nav aria-label="Main navigation">
        <Link href="/#top" aria-current={current === 'home' ? 'page' : undefined}>Home</Link>
        <Link href="/#lessons" aria-current={current === 'lesson-1' ? 'page' : undefined}>Lessons</Link>
        <Link href="/lesson-2">Culture Map</Link>
        <Link href="/#journey">Story</Link>
        <Link href="/#about">About</Link>
      </nav>
      <Link className="round-header-cta" href="/lesson-1">LET&apos;S EXPLORE <ArrowRight aria-hidden="true" /></Link>
    </header>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="round-section-label">{children}</p>;
}

export function OpenPlateMark({ className = '' }: { className?: string }) {
  return <span className={`round-open-plate ${className}`} aria-hidden="true" />;
}

const noteIcons = {
  'EXPLORER TIP': '🍊',
  'CULTURE NOTE': '🌍',
  'LANGUAGE TIP': '💬',
  'THINK AGAIN': '🧠',
  'IN CLASS': '✦',
} as const;

export function PedagogyNote({ type, children }: { type: keyof typeof noteIcons; children: React.ReactNode }) {
  const tone = type.toLowerCase().replaceAll(' ', '-');
  return (
    <aside className={`round-note round-note-${tone}`}>
      <strong><span aria-hidden="true">{noteIcons[type]}</span>{type}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function RoundFooter() {
  return (
    <footer className="round-footer">
      <div className="round-footer-brand">
        <PaintedWordmark light />
        <p>Exploring Food, Culture, and Stereotypes</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/#journey">Food &amp; Cultural Heritage</Link>
        <Link href="/lesson-1#accessibility">Accessibility</Link>
        <Link href="/references">References</Link>
      </nav>
      <div className="round-footer-meta">
        <strong>Interactive Academic Unit · A2 English</strong>
        <p>there is always more beyond the plate.</p>
      </div>
    </footer>
  );
}
