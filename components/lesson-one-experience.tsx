'use client';

import Image from 'next/image';
import { useEffect, useId, useState } from 'react';
import { Check, Lightbulb, LockKeyhole, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const observationChoices = ['COLOR', 'SHAPE', 'TEXTURE', 'SIZE'] as const;

export function ObservationFocus() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (choice: string) => setSelected((current) => current.includes(choice) ? current.filter((item) => item !== choice) : [...current, choice]);

  return (
    <div className="l1-observation-tool">
      <figure className="l1-detail-photo">
        <Image src="/images/lesson1-mystery-covered.webp" alt="A hand lifting a linen cloth to reveal part of a tied green leaf parcel in a wooden tray" fill sizes="(max-width: 760px) 100vw, 56vw" />
        <span>LOOK CLOSELY</span>
      </figure>
      <div className="l1-observation-choices">
        <p>What details can you notice?</p>
        <div aria-label="Observation details">
          {observationChoices.map((choice, index) => (
            <button type="button" key={choice} aria-pressed={selected.includes(choice)} onClick={() => toggle(choice)}>
              <span>0{index + 1}</span>{choice}{selected.includes(choice) && <Check aria-hidden="true" />}
            </button>
          ))}
        </div>
        <div className="l1-sentence-support" aria-label="Sentence support">
          <strong>TRY:</strong><span>It looks…</span><span>It seems…</span><span>I can see…</span>
        </div>
        {selected.length > 0 && <output>Good noticing. You selected {selected.join(', ').toLowerCase()}. There is no score here.</output>}
      </div>
    </div>
  );
}

const routes = [
  { id: 'look', label: 'LOOK', note: 'Notice color, shape, texture, and size.', icon: '👀' },
  { id: 'smell', label: 'SMELL', note: 'Optional. Only if the setting makes it appropriate.', icon: '〰' },
  { id: 'touch', label: 'TOUCH', note: 'Only if appropriate and you want to.', icon: '✋' },
  { id: 'taste', label: 'TASTE', note: 'Only if safe and completely voluntary.', icon: '◌' },
  { id: 'visual', label: 'VISUAL ROUTE', note: 'Explore through images and clues. Equal value.', icon: '▣' },
] as const;

export function ExploreRoutePicker() {
  const [route, setRoute] = useState('look');
  const active = routes.find((item) => item.id === route) || routes[0];
  return (
    <div className="l1-route-picker">
      <div className="l1-routes" aria-label="Ways to explore">
        {routes.map((item, index) => (
          <button type="button" key={item.id} className={`l1-route l1-route-${index + 1}`} aria-pressed={route === item.id} onClick={() => setRoute(item.id)}>
            <span aria-hidden="true">{item.icon}</span><strong>{item.label}</strong><small>{item.note}</small>
          </button>
        ))}
      </div>
      <output className="l1-route-feedback"><strong>Your route: {active.label}</strong><span>{active.note}</span></output>
    </div>
  );
}

export function DescribeGuess() {
  const [choice, setChoice] = useState('');
  const [clue, setClue] = useState(0);
  const choose = (value: string) => {
    setChoice(value);
    if (value === 'clue') setClue((current) => Math.min(current + 1, 2));
  };
  return (
    <div className="l1-guess-tool">
      <div className="l1-guess-photo">
        <Image src="/images/lesson1-mystery-covered.webp" alt="A covered leaf-wrapped parcel in a wooden tray on a worn table" fill sizes="(max-width: 760px) 100vw, 48vw" />
        <span className={`l1-clue-window l1-clue-${clue}`} aria-hidden="true" />
      </div>
      <div className="l1-guess-controls">
        <p className="l1-hand-note">guess ≠ fact</p>
        <div>
          <Button variant="outline" onClick={() => choose('idea')} aria-pressed={choice === 'idea'}><Lightbulb aria-hidden="true" /> I HAVE AN IDEA</Button>
          <Button variant="outline" onClick={() => choose('unsure')} aria-pressed={choice === 'unsure'}>I&apos;M NOT SURE</Button>
          <Button variant="outline" onClick={() => choose('clue')} aria-pressed={choice === 'clue'}><Search aria-hidden="true" /> I NEED ANOTHER CLUE</Button>
        </div>
        <output aria-live="polite">
          {!choice && 'Choose the response that fits you. No answer is wrong.'}
          {choice === 'idea' && 'Hold onto your idea. Use “I think it could be…” so your guess stays open.'}
          {choice === 'unsure' && 'Not knowing yet is a useful place to begin.'}
          {choice === 'clue' && clue === 1 && 'Clue 1: I can see a natural leaf, string, and a wrapped shape.'}
          {choice === 'clue' && clue === 2 && 'Clue 2: The wrapping can help hold and protect food while it cooks.'}
        </output>
      </div>
    </div>
  );
}

export function MemoryConnection() {
  const [choice, setChoice] = useState('');
  const [memory, setMemory] = useState('');
  const [saved, setSaved] = useState(false);
  const id = useId();
  useEffect(() => { queueMicrotask(() => setMemory(localStorage.getItem('btp-l1-memory') || '')); }, []);
  const save = () => { localStorage.setItem('btp-l1-memory', memory); setSaved(true); window.setTimeout(() => setSaved(false), 1500); };
  const choices = ['MY MEMORY', 'SOMETHING I HAVE SEEN', 'I PREFER NOT TO SHARE'];
  return (
    <div className="l1-memory-tool">
      <RadioGroup value={choice} onValueChange={setChoice} aria-label="Memory connection choice">
        {choices.map((label, index) => <label key={label} htmlFor={`${id}-${index}`} className={choice === label ? 'is-selected' : ''}><RadioGroupItem id={`${id}-${index}`} value={label} /><span>0{index + 1}</span><strong>{label}</strong></label>)}
      </RadioGroup>
      {choice && choice !== 'I PREFER NOT TO SHARE' && (
        <div className="l1-memory-write">
          <label htmlFor={`${id}-memory`}>Optional: finish one sentence frame in your own words.</label>
          <Textarea id={`${id}-memory`} value={memory} onChange={(event) => { setMemory(event.target.value); setSaved(false); }} onBlur={save} placeholder="It reminds me of…" />
          <Button size="sm" onClick={save}>{saved && <Check aria-hidden="true" />}{saved ? 'SAVED' : 'SAVE PRIVATELY'}</Button>
        </div>
      )}
      {choice === 'I PREFER NOT TO SHARE' && <output><LockKeyhole aria-hidden="true" /> That choice is valid. Personal disclosure is always optional.</output>}
    </div>
  );
}

export function RevealMoment() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`l1-reveal-tool ${revealed ? 'is-revealed' : ''}`}>
      <div className="l1-reveal-images">
        <Image className="l1-reveal-covered" src="/images/lesson1-mystery-covered.webp" alt={revealed ? '' : 'A linen cloth covering a leaf-wrapped food parcel in a wooden tray'} fill sizes="(max-width: 760px) 100vw, 64vw" />
        <Image className="l1-reveal-open" src="/images/observation-parcel.webp" alt={revealed ? 'An opened leaf parcel showing a rustic rice and savory filling on a wooden table' : ''} fill sizes="(max-width: 760px) 100vw, 64vw" />
        <span aria-hidden="true" />
      </div>
      <div className="l1-reveal-action">
        <p>First impressions give us clues. Context gives us more.</p>
        <Button onClick={() => setRevealed((value) => !value)}><Sparkles aria-hidden="true" />{revealed ? 'COVER AGAIN' : 'REVEAL THE FOOD'}</Button>
        <output aria-live="polite">{revealed ? 'The full food is visible. Were you surprised?' : 'The food is still partly hidden.'}</output>
      </div>
    </div>
  );
}

export function ParticipationModes() {
  const [mode, setMode] = useState('');
  return (
    <div className="l1-participation">
      {['SPEAK', 'READ', 'WRITE', 'PARTNER'].map((item) => <button type="button" key={item} onClick={() => setMode(item)} aria-pressed={mode === item}>{item}</button>)}
      {mode && <output>Your participation route: <strong>{mode}</strong></output>}
    </div>
  );
}
