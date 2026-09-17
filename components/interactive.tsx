'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronRight, Eye, Lightbulb, LockKeyhole, Play, RotateCcw, Sparkles, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

type ModelTool = { name: string; title: string; description: string; inputSchema: object; annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean }; execute: (input: unknown) => unknown };
type ModelContext = { registerTool: (tool: ModelTool, options?: { signal?: AbortSignal }) => void | Promise<void> };

const pollOptions = [['yes', 'YES'], ['no', 'NO'], ['not-sure', "I'M NOT SURE YET"]] as const;

export function QuickChoice({ question, options, feedback }: { question: string; options: string[]; feedback?: string }) {
  const [answer, setAnswer] = useState('');
  const groupId = `quick-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  return <div className="quick-choice"><h3 id={`${groupId}-label`}>{question}</h3><div role="radiogroup" aria-labelledby={`${groupId}-label`} className="choice-row">{options.map((option) => <label key={option} className={`choice-pill ${answer === option ? 'selected' : ''}`}><input type="radio" name={groupId} value={option} checked={answer === option} onChange={() => setAnswer(option)} /><span>{option}</span></label>)}</div>{answer && feedback && <output className="feedback">{feedback}</output>}</div>;
}

export function InitialPoll() {
  const [answer, setAnswer] = useState('');
  const id = useId();
  useEffect(() => { queueMicrotask(() => setAnswer(localStorage.getItem('btp-initial-poll') || '')); }, []);
  const record = (value: string) => { setAnswer(value); localStorage.setItem('btp-initial-poll', value); };

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const valid = ['yes', 'no', 'not-sure'];
    const report = () => undefined;
    try {
      void Promise.resolve(context.registerTool({
        name: 'record_initial_culture_poll', title: 'Record initial culture poll',
        description: 'Record the student’s current answer to whether one dish can tell the whole story of a culture.',
        inputSchema: { type: 'object', properties: { answer: { type: 'string', enum: valid } }, required: ['answer'], additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          const value = (input as { answer?: string })?.answer;
          if (!value || !valid.includes(value)) throw new Error('Answer must be yes, no, or not-sure.');
          record(value);
          return { saved: true, answer: value };
        },
      }, { signal: lifecycle.signal })).catch(report);
      void Promise.resolve(context.registerTool({
        name: 'read_initial_culture_poll', title: 'Read initial culture poll',
        description: 'Read the poll answer saved on this device.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute() { return { answer: localStorage.getItem('btp-initial-poll') || null }; },
      }, { signal: lifecycle.signal })).catch(report);
    } catch { /* Unsupported browsers keep the visible experience. */ }
    return () => lifecycle.abort();
  }, []);

  return (
    <div className="poll-box">
      <p className="poll-label">YOUR ANSWER · NO SCORE</p>
      <h3>If one food cannot tell the whole story of our classroom, can one dish tell the whole story of a culture?</h3>
      <RadioGroup value={answer} onValueChange={record} aria-label="Can one dish tell the whole story of a culture?" className="choice-row">
        {pollOptions.map(([value, label]) => <label className={`choice-pill ${answer === value ? 'selected' : ''}`} key={value} htmlFor={`${id}-${value}`}><RadioGroupItem id={`${id}-${value}`} value={value} /><span>{label}</span></label>)}
      </RadioGroup>
      <p className="save-note"><LockKeyhole aria-hidden="true" /> Your choice stays only on this device. You can change it.</p>
      {answer && <output className="feedback">Keep your answer in mind. We will return to this question later.</output>}
    </div>
  );
}

const observations = [
  { name: 'Charred surface', alt: 'Close view of two charred corn cobs, lime wedges, seasoning, and a hand on a worn table', src: '/images/observation-corn.webp' },
  { name: 'Uneven rounds', alt: 'Close view of stacked rustic flatbreads with irregular edges and crumbs on a ceramic plate', src: '/images/observation-flatbread.webp' },
  { name: 'Wrapped parcel', alt: 'Close view of a hand opening a leaf-wrapped parcel with a savory filling on a wooden table', src: '/images/observation-parcel.webp' },
  { name: 'Purple kernels', alt: 'Two hands holding deep purple kernels above a weathered bowl on a linen-covered table', src: '/images/observation-purple-corn.webp' },
  { name: 'Steam and herbs', alt: 'Close view of steaming potato and herb soup with bread and a hand in the softly blurred background', src: '/images/observation-soup.webp' },
  { name: 'Red seeds', alt: 'Close view of a hand lifting a cut red fruit with scattered seeds and a kitchen knife on a worn board', src: '/images/observation-pomegranate.webp' },
] as const;

export function ObservationGallery() {
  const [active, setActive] = useState(0);
  const [thought, setThought] = useState('');
  return (
    <div className="observation-experience">
      <div className="observation-grid" aria-label="Six mystery food details">
        {observations.map(({ name, alt, src }, index) => {
          return (
          <button key={name} className={`observation-card observation-card-${index + 1} ${active === index ? 'active' : ''}`} onClick={() => setActive(index)} aria-pressed={active === index}>
            <Image src={src} alt={alt} fill sizes="(max-width: 460px) 100vw, (max-width: 760px) 50vw, 28vw" priority={index < 2} />
            <span>VIEW 0{index + 1}</span>
            <small>{name}</small>
          </button>
          );
        })}
      </div>
      <div className="observation-prompts">
        <p><strong>I NOTICE</strong> What can you see?</p>
        <p><strong>I THINK</strong> What do you think is happening?</p>
        <p><strong>I WONDER</strong> What would you like to know?</p>
        <RadioGroup value={thought} onValueChange={setThought} aria-label="First thought" className="stacked-choices">
          {['I know this.', 'This looks new to me.', 'I think this comes from...'].map((label) => <label key={label} className="line-choice"><RadioGroupItem value={label} /><span>{label}</span></label>)}
        </RadioGroup>
        {thought && <div className="why-question"><Lightbulb aria-hidden="true" /><div><strong>How do you know?</strong><p>A first thought can come from memory, a photo, a story, or an assumption.</p></div></div>}
      </div>
    </div>
  );
}

export function MysteryReveal() {
  const [step, setStep] = useState<'look' | 'clue' | 'reveal'>('look');
  return (
    <div className="mystery-reveal">
      <div className={`market-crate reveal-${step}`}>
        <Image src="/images/lesson1-mystery-covered.webp" alt="A hand beginning to uncover the approved Mystery Box parcel" fill sizes="(max-width: 1050px) 100vw, 60vw" />
        <div className="crate-cover" aria-hidden="true"><span>HANDLE WITH CURIOSITY</span></div>
      </div>
      <div className="reveal-controls">
        <div className="route-buttons" aria-label="Mystery box route">
          <Button variant={step === 'look' ? 'default' : 'outline'} onClick={() => setStep('look')}><Eye aria-hidden="true" /> LOOK</Button>
          <Button variant={step === 'clue' ? 'default' : 'outline'} onClick={() => setStep('clue')}>READ A CLUE</Button>
          <Button variant={step === 'reveal' ? 'default' : 'outline'} onClick={() => setStep('reveal')}><Sparkles aria-hidden="true" /> REVEAL</Button>
        </div>
        <div className="clue-panel" aria-live="polite">
          {step === 'look' && <><strong>LOOK CLOSELY.</strong><p>Notice color, shape, surface, and size. Do not name a country yet.</p></>}
          {step === 'clue' && <><strong>CLUE</strong><p>These foods can connect to different homes, places, and everyday traditions. The same ingredient can carry different stories.</p></>}
          {step === 'reveal' && <><strong>THE REVEAL</strong><p>You saw ingredients and preparations—not a whole culture. A photo can start a question. Context helps us understand.</p></>}
        </div>
      </div>
    </div>
  );
}

export function ReflectionBox({ storageKey, prompt, placeholder = 'Write one or two short sentences…' }: { storageKey: string; prompt: string; placeholder?: string }) {
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);
  useEffect(() => { queueMicrotask(() => setValue(localStorage.getItem(`btp-${storageKey}`) || '')); }, [storageKey]);
  const save = () => { localStorage.setItem(`btp-${storageKey}`, value); setSaved(true); window.setTimeout(() => setSaved(false), 1600); };
  return <div className="reflection-box"><label htmlFor={storageKey}>{prompt}</label><Textarea id={storageKey} value={value} onChange={(event) => { setValue(event.target.value); setSaved(false); }} onBlur={save} placeholder={placeholder} /><div className="reflection-actions"><small>Private on this device · sharing is optional</small><Button size="sm" onClick={save}>{saved ? <Check aria-hidden="true" /> : null}{saved ? 'SAVED' : 'SAVE'}</Button></div></div>;
}

const colombiaStories = [
  { id: 'caribbean', region: 'CARIBBEAN', title: 'ARROZ CON COCO', place: "Cartagena · Colombia's Caribbean coast", look: 'Dark, glossy rice with a gently toasted color and a clean plated presentation.', ingredient: 'Rice + coconut milk', context: "In Cartagena, on Colombia's Caribbean coast, arroz con coco is rice prepared with coconut milk. It is one food story from the Caribbean region. Different families and communities can have different food traditions.", closer: 'Coconut can bring a sweet, rich flavor to rice. Recipes and pairings can change.', think: 'One food from the Caribbean does not represent every Caribbean table.', image: '/images/home-hero-plate-arroz-coco.webp', alt: 'Overhead isolated plate of Colombian arroz con coco with natural toasted rice texture' },
  { id: 'andes', region: 'ANDEAN / BOGOTÁ', title: 'AJIACO SANTAFEREÑO', place: 'Bogotá · Andean region', look: 'A warm soup with potatoes, corn, chicken, guascas, and capers visible from above.', ingredient: 'Three potatoes + corn + chicken + guascas', context: 'Ajiaco Santafereño is a soup connected to Bogotá. It includes three types of potato, corn, chicken, and guascas. Different cooks can have different versions of this traditional dish.', closer: 'Pastusa, sabanera, and criolla potatoes can give the soup different textures.', think: 'A tradition can have different versions and still be meaningful.', image: '/images/home-hero-plate-ajiaco.webp', alt: 'Overhead isolated bowl of ajiaco Santafereño with potatoes, corn, chicken, and guascas' },
  { id: 'orinoquia', region: 'ORINOQUÍA / CASANARE', title: 'TERNERA A LA LLANERA / MAMONA', place: 'Parts of Casanare · Llanos', look: 'Fire-roasted beef with visible char and fibers, served with simple regional accompaniments.', ingredient: 'Meat + fire + large skewers', context: 'In parts of Casanare, mamona is also called ternera a la llanera. The meat is traditionally cooked over fire on large skewers. In some documented communities, it is connected to festive moments.', closer: 'The cooking process uses open fire, time, and shared work.', think: 'One famous dish cannot describe all food traditions from the Llanos.', image: '/images/l2-plate-mamona.png', alt: 'Overhead isolated plate of fire-roasted ternera a la llanera with cassava and arepa' },
  { id: 'amazon', region: 'AMAZON', title: 'CASABE', place: 'Leticia + Puerto Nariño · Colombian Amazon', look: 'A thin, round cassava flatbread with toasted marks and naturally uneven texture.', ingredient: 'Cassava + hot tiesto', context: 'In food traditions documented in Leticia and Puerto Nariño, casabe is made from cassava and cooked on a hot surface called a tiesto. This knowledge is connected to different Indigenous communities in the Colombian Amazon.', closer: 'Making cassava safe to eat requires knowledge and careful processing.', think: 'This is one documented food story. It does not represent every Amazon community.', image: '/images/l2-plate-casabe.png', alt: 'Overhead isolated plate of thin round cassava casabe with natural toasted texture' },
] as const;

export function ColombiaExplorer() {
  const [storyId, setStoryId] = useState('caribbean');
  const story = colombiaStories.find((item) => item.id === storyId) || colombiaStories[0];
  return (
    <Tabs defaultValue="map" className="story-tabs">
      <TabsList aria-label="Ways to explore Colombia" className="story-tabs-list">
        <TabsTrigger value="map">EXPLORE THE MAP</TabsTrigger><TabsTrigger value="stories">EXPLORE AS STORIES</TabsTrigger>
      </TabsList>
      <TabsContent value="map">
        <div className="map-layout">
          <div className="map-stage" aria-label="Interactive diagram of four Colombian food regions">
            <svg className="colombia-map-svg" viewBox="-79 -12.5 12.2 16.9" aria-hidden="true">
              <g transform="scale(1 -1)">
                <path d="M -66.876326 1.253361 L -67.065048 1.130112 L -67.259998 1.719999 L -67.53781 2.037163 L -67.868565 1.692455 L -69.816973 1.714805 L -69.804597 1.089081 L -69.218638 0.985677 L -69.252434 0.602651 L -69.452396 0.706159 L -70.015566 0.541414 L -70.020656 -0.185156 L -69.577065 -0.549992 L -69.420486 -1.122619 L -69.444102 -1.556287 L -69.893635 -4.298187 L -70.394044 -3.766591 L -70.692682 -3.742872 L -70.047709 -2.725156 L -70.813476 -2.256865 L -71.413646 -2.342802 L -71.774761 -2.16979 L -72.325787 -2.434218 L -73.070392 -2.308954 L -73.659504 -1.260491 L -74.122395 -1.002833 L -74.441601 -0.53082 L -75.106625 -0.057205 L -75.373223 -0.152032 L -75.801466 0.084801 L -76.292314 0.416047 L -76.57638 0.256936 L -77.424984 0.395687 L -77.668613 0.825893 L -77.855061 0.809925 L -78.855259 1.380924 L -78.990935 1.69137 L -78.617831 1.766404 L -78.662118 2.267355 L -78.42761 2.629556 L -77.931543 2.696606 L -77.510431 3.325017 L -77.12769 3.849636 L -77.496272 4.087606 L -77.307601 4.667984 L -77.533221 5.582812 L -77.318815 5.845354 L -77.476661 6.691116 L -77.881571 7.223771 L -77.753414 7.70984 L -77.431108 7.638061 L -77.242566 7.935278 L -77.474723 8.524286 L -77.353361 8.670505 L -76.836674 8.638749 L -76.086384 9.336821 L -75.6746 9.443248 L -75.664704 9.774003 L -75.480426 10.61899 L -74.906895 11.083045 L -74.276753 11.102036 L -74.197223 11.310473 L -73.414764 11.227015 L -72.627835 11.731972 L -72.238195 11.95555 L -71.75409 12.437303 L -71.399822 12.376041 L -71.137461 12.112982 L -71.331584 11.776284 L -71.973922 11.608672 L -72.227575 11.108702 L -72.614658 10.821975 L -72.905286 10.450344 L -73.027604 9.73677 L -73.304952 9.152 L -72.78873 9.085027 L -72.660495 8.625288 L -72.439862 8.405275 L -72.360901 8.002638 L -72.479679 7.632506 L -72.444487 7.423785 L -72.198352 7.340431 L -71.960176 6.991615 L -70.674234 7.087785 L -70.093313 6.960376 L -69.38948 6.099861 L -68.985319 6.206805 L -68.265052 6.153268 L -67.695087 6.267318 L -67.34144 6.095468 L -67.521532 5.55687 L -67.744697 5.221129 L -67.823012 4.503937 L -67.621836 3.839482 L -67.337564 3.542342 L -67.303173 3.318454 L -67.809938 2.820655 L -67.447092 2.600281 L -67.181294 2.250638 L -66.876326 1.253361 Z" />
                <circle className="map-marker marker-caribbean" cx="-74.82" cy="10.32" r=".22" />
                <circle className="map-marker marker-andes" cx="-74.25" cy="4.72" r=".22" />
                <circle className="map-marker marker-orinoquia" cx="-71.78" cy="5.15" r=".22" />
                <circle className="map-marker marker-amazon" cx="-71.35" cy="-1.55" r=".22" />
              </g>
            </svg>
            {colombiaStories.map((item, index) => <button key={item.id} className={`map-pin pin-${index + 1} ${storyId === item.id ? 'active' : ''}`} onClick={() => setStoryId(item.id)} aria-pressed={storyId === item.id}><span>0{index + 1}</span>{item.region}</button>)}
            <small>STORY MAP · NOT TO SCALE</small>
          </div>
          <FoodStory story={story} />
        </div>
      </TabsContent>
      <TabsContent value="stories">
        <div className="story-list-layout"><div className="story-menu">{colombiaStories.map((item, index) => <button key={item.id} onClick={() => setStoryId(item.id)} aria-pressed={storyId === item.id}><span>0{index + 1}</span><strong>{item.region}</strong><small>{item.title}</small></button>)}</div><FoodStory story={story} /></div>
      </TabsContent>
    </Tabs>
  );
}

function FoodStory({ story }: { story: typeof colombiaStories[number] }) {
  return (
    <article className="food-story" key={story.id}>
      <div className="food-story-photo food-story-plate"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 1050px) 100vw, 55vw" /></div>
      <p className="food-region">{story.region}</p><h3>{story.title}</h3>
      <dl><div><dt>PLACE</dt><dd>{story.place}</dd></div><div><dt>LOOK</dt><dd>{story.look}</dd></div><div><dt>FOOD / INGREDIENT</dt><dd>{story.ingredient}</dd></div><div><dt>CONTEXT</dt><dd>{story.context}</dd></div><div><dt>LOOK CLOSER</dt><dd>{story.closer}</dd></div><div className="think-row"><dt>THINK AGAIN</dt><dd>{story.think}</dd></div></dl>
      <p className="one-story">ONE STORY, NOT THE WHOLE STORY.</p>
      <a href="https://patrimonio.mincultura.gov.co/Paginas/INVENTARIO-DE-RECETAS-DE-COCINAS-TRADICIONALES-COLOMBIANAS.aspx" target="_blank" rel="noreferrer">SOURCE / LEARN MORE ↗</a>
    </article>
  );
}

const worldStories = [
  { country: 'MEXICO', known: 'TACOS', closer: 'CHILE EN NOGADA', copy: 'Chile en nogada is a traditional dish connected to Puebla. It uses seasonal ingredients. Its green, white, and red presentation is connected to Mexican patriotic traditions.', question: 'Which is “more Mexican”?', options: ['Tacos', 'Chile en nogada', 'Both can tell Mexican food stories'], answer: 2, reveal: 'Both can tell Mexican food stories. Neither can tell every Mexican story.', line: 'FAMOUS ≠ COMPLETE', image: '/images/home-hero-plate-chile-nogada.webp', alt: 'Overhead isolated plate of chile en nogada with walnut sauce, pomegranate, and parsley', kind: 'plate' },
  { country: 'JAPAN', known: 'SUSHI', closer: 'ONIGIRI', copy: 'Onigiri is an everyday rice food in Japan. It can have many different fillings, including regional ingredients.', question: 'Can everyday food be part of culture too?', options: ['Yes', 'No'], answer: 0, reveal: 'Culture does not live only in celebrations. It can also live in everyday food.', line: 'EVERYDAY ≠ UNIMPORTANT', image: '/images/home-hero-plate-onigiri.webp', alt: 'Overhead isolated plate of handmade Japanese onigiri with varied fillings', kind: 'plate' },
  { country: 'REPUBLIC OF KOREA', known: 'KIMCHI', closer: 'KIMJANG', copy: 'Kimjang is the practice of preparing and sharing kimchi together. It can connect families, communities, seasons, and traditional knowledge. There are regional differences in how it is prepared.', question: 'Is this story only about food?', options: ['Yes', 'No'], answer: 1, reveal: 'No. It is also about people, sharing, and tradition.', line: 'FOOD + PEOPLE + PRACTICE + COMMUNITY', image: '/images/l2-kimjang.png', alt: 'Several adults preparing kimchi together by hand in a naturally lit community kitchen', anchorImage: '/images/l2-plate-kimchi.png', anchorAlt: 'Overhead isolated bowl of authentic napa-cabbage kimchi', kind: 'process' },
  { country: 'PERU', known: 'CEVICHE', closer: 'ONE DISH, MANY VERSIONS', copy: 'Ceviche is prepared in different ways in different parts of Peru. It can be connected to everyday meals, celebrations, and social gatherings.', question: 'Can a famous dish still have many local stories?', options: ['Yes', 'No'], answer: 0, reveal: 'Yes. Recipes and meanings can change from one region to another.', line: 'ONE NAME. MANY STORIES.', image: '/images/home-hero-plate-ceviche.webp', alt: 'Overhead isolated plate of Peruvian ceviche with fish, red onion, citrus, and corn', kind: 'plate' },
] as const;

export function WorldStoryExplorer() {
  return <div className="world-stories">{worldStories.map((story, storyIndex) => <WorldStoryCard key={story.country} story={story} index={storyIndex} />)}</div>;
}

function WorldStoryCard({ story, index }: { story: typeof worldStories[number]; index: number }) {
  const [choice, setChoice] = useState<number | null>(null);
  return <article className={`world-story world-story-${story.kind}`}><div className="world-story-top"><span>0{index + 1}</span><p>{story.country}</p></div><div className="world-story-visual">{story.kind === 'process' ? <><figure className="kimchi-food-anchor"><div className="kimchi-plate-image"><Image src={story.anchorImage} alt={story.anchorAlt} fill sizes="(max-width: 760px) 70vw, 28vw" /></div><figcaption>FOOD · KIMCHI</figcaption></figure><figure className="kimjang-context-photo"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 1050px) 100vw, 48vw" /><figcaption>PEOPLE · PRACTICE · COMMUNITY</figcaption></figure></> : <Image src={story.image} alt={story.alt} fill sizes="(max-width: 1050px) 100vw, 48vw" />}</div><div className="known-closer"><div><small>YOU MAY KNOW…</small><strong>{story.known}</strong></div><ChevronRight aria-hidden="true" /><div><small>LOOK CLOSER</small><strong>{story.closer}</strong></div></div><p className="world-copy">{story.copy}</p><fieldset><legend>{story.question}</legend>{story.options.map((option, optionIndex) => <button key={option} type="button" className={choice === optionIndex ? 'selected' : ''} onClick={() => setChoice(optionIndex)}>{option}</button>)}</fieldset>{choice !== null && <output className="reasoning-feedback"><strong>{choice === story.answer ? 'LOOK CLOSER' : 'THINK AGAIN'}</strong><p>{story.reveal}</p></output>}<p className="world-line">{story.line}</p></article>;
}

type Category = 'fact' | 'experience' | 'stereotype';
const cases: { text: string; answer: Category; why: string }[] = [
  { text: 'My grandmother prepares a special soup for birthdays.', answer: 'experience', why: 'This happened in one family. It does not say every family does the same.' },
  { text: 'Ceviche can have different regional versions in Peru.', answer: 'fact', why: 'This can be checked in a reliable source, such as UNESCO.' },
  { text: 'Japanese food is only sushi.', answer: 'stereotype', why: '“Only” removes many foods and treats a complex culture as one story.' },
  { text: 'I tried casabe for the first time last year.', answer: 'experience', why: 'This is one person’s real experience.' },
  { text: 'Kimjang has different regional traditions in the Republic of Korea.', answer: 'fact', why: 'Reliable cultural sources document regional differences.' },
  { text: 'People from the Caribbean coast always eat coconut rice.', answer: 'stereotype', why: '“Always” treats many different people as if they all eat the same food.' },
];

export function AssumptionTable() {
  const [answers, setAnswers] = useState<Record<number, Category>>({});
  return <div className="assumption-table">{cases.map((item, index) => <article key={item.text} className="case-card"><div className="case-number">0{index + 1}</div><p>{item.text}</p><RadioGroup value={answers[index] || ''} onValueChange={(value) => setAnswers((current) => ({ ...current, [index]: value as Category }))} className="case-choices" aria-label={`Classify: ${item.text}`}>{(['fact', 'experience', 'stereotype'] as Category[]).map((category) => { const optionId = `case-${index + 1}-${category}`; return <label key={category} htmlFor={optionId} className={answers[index] === category ? 'selected' : ''}><RadioGroupItem id={optionId} value={category} /><span>{category}</span></label>; })}</RadioGroup>{answers[index] && <output className={`case-feedback ${answers[index] === item.answer ? 'is-right' : ''}`}><strong>{answers[index] === item.answer ? `Yes. This is an ${item.answer}.` : `Look again. This is an ${item.answer}.`}</strong><p>{item.why}</p></output>}</article>)}</div>;
}

const contextLines = ['My family eats tamales at Christmas.', 'Some families eat tamales at Christmas.', 'Families from this country eat tamales at Christmas.', 'Everyone from this country eats tamales at Christmas.'];
export function ContextStepper() {
  const [step, setStep] = useState(0);
  return <div className="context-stepper"><div className="step-track">{contextLines.map((_, index) => <button key={index} onClick={() => setStep(index)} aria-label={`Show sentence ${index + 1}`} aria-current={step === index ? 'step' : undefined}>{index + 1}</button>)}</div><blockquote>{contextLines[step]}</blockquote><p>{step < 2 ? 'The sentence still shows a limited group.' : step === 2 ? 'The family context is gone. The group is much bigger.' : 'The context is gone. “Everyone” makes a complete generalization.'}</p><Button variant="outline" onClick={() => setStep((step + 1) % contextLines.length)}>{step === 3 ? <RotateCcw aria-hidden="true" /> : null}{step === 3 ? 'START AGAIN' : 'MAKE THE GROUP BIGGER'} </Button></div>;
}

export function RewritePractice() {
  const [show, setShow] = useState(false);
  return <div className="rewrite-practice"><p className="bad-sentence">“Mexican people only eat tacos and spicy food.”</p><p className="rewrite-prompt">How can we add context and make this more precise?</p><div className="word-bank" aria-label="Useful words">{['some foods', 'many traditions', 'regions', 'families', 'can be different'].map((word) => <span key={word}>{word}</span>)}</div><Textarea aria-label="Your respectful rewrite" placeholder="Mexico has…" /><Button onClick={() => setShow(true)}>COMPARE WITH AN EXAMPLE</Button>{show && <div className="model-answer"><strong>ONE RESPECTFUL MODEL</strong><p>Mexico has many food traditions. Some foods are famous, but regions and families can be different.</p><small>Your sentence can be different and still be respectful.</small></div>}</div>;
}

const precisionClaims = [
  { broad: 'Everyone eats this.', options: ['Some people eat this.', 'Nobody eats this.'], answer: 0, why: '“Some people” makes the group smaller and leaves room for different experiences.' },
  { broad: 'People here always prepare it this way.', options: ['People here prepare it one way.', 'Some families may prepare it this way.'], answer: 1, why: '“Some families” and “may” add care and precision.' },
  { broad: 'They never eat this.', options: ['Some people may not eat this.', 'They dislike this food.'], answer: 0, why: 'This version avoids speaking for a whole group.' },
] as const;

export function LanguageInUse() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return (
    <div className="language-in-use">
      {precisionClaims.map((claim, index) => (
        <article key={claim.broad}>
          <div className="claim-before"><small>BROAD CLAIM</small><p>{claim.broad}</p></div>
          <span className="claim-arrow" aria-hidden="true">→</span>
          <fieldset>
            <legend>Choose the clearer version.</legend>
            {claim.options.map((option, optionIndex) => <button type="button" key={option} className={answers[index] === optionIndex ? 'selected' : ''} onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}>{option}</button>)}
          </fieldset>
          {answers[index] !== undefined && <output><strong>{answers[index] === claim.answer ? 'CLEARER + MORE PRECISE' : 'LOOK CLOSER'}</strong><p>{claim.why}</p></output>}
        </article>
      ))}
    </div>
  );
}

export function PrivateStereotypeReflection() {
  const [answer, setAnswer] = useState('');
  return <div className="private-reflection"><LockKeyhole aria-hidden="true" /><div><h3>Have you ever heard a food stereotype about your city, region, or country?</h3><RadioGroup value={answer} onValueChange={setAnswer} className="choice-row">{['YES', 'NO', "I'M NOT SURE"].map((option) => <label className={answer === option ? 'selected choice-pill' : 'choice-pill'} key={option}><RadioGroupItem value={option} /><span>{option}</span></label>)}</RadioGroup>{answer && <ReflectionBox storageKey="private-stereotype" prompt="Optional: What was it?" /> }<p><strong>You do not have to share your answer with the class.</strong></p></div></div>;
}

export function EmptyLabel() {
  const [selected, setSelected] = useState<string[]>([]);
  const [label, setLabel] = useState('');
  const choices = ['I can describe what I see.', 'I can ask questions.', 'I know what everyone from that culture eats.'];
  const toggle = (choice: string) => setSelected((current) => current.includes(choice) ? current.filter((item) => item !== choice) : [...current, choice]);
  return <div className="empty-label"><div className="empty-label-photo"><Image src="/images/l3-yuca-plate.png" alt="Overhead isolated plate of prepared yuca with natural fibrous texture and herbs" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div><label className="photo-label-field" htmlFor="yuca-photo-label"><span>Write a short label for this photo.</span><input id="yuca-photo-label" value={label} onChange={(event) => setLabel(event.target.value)} placeholder="Prepared yuca…" /></label><h3>What can you truly know from one photo?</h3>{choices.map((choice) => <button key={choice} onClick={() => toggle(choice)} className={selected.includes(choice) ? 'selected' : ''}>{choice}</button>)}{selected.length > 0 && <p className="feedback">{selected.includes(choices[2]) ? 'A photo cannot tell us what everyone eats. Look, describe, and ask for context.' : 'Good. Observation and questions can begin the learning.'}</p>}</div></div>;
}

const rephraseSituations = [
  { line: 'That’s weird.', choices: ['That’s new to me. What is it?', 'Why would anyone eat that?'], answer: 0, why: 'This names your experience and opens a respectful question.' },
  { line: 'People really eat that?', choices: ['When do people in your family or community eat this?', 'So everyone in your country eats this?'], answer: 0, why: 'This asks about a real group without speaking for everyone.' },
  { line: 'That looks disgusting.', choices: ['I haven’t tried this before. What does it taste like?', 'I could never understand that food.'], answer: 0, why: 'You can be honest about your experience without judging another person’s food.' },
  { line: 'Everyone from your region eats this, right?', choices: ['Is this common in your family or community?', 'So this represents everyone from your region?'], answer: 0, why: 'This asks about a specific experience without turning it into a claim about everyone.' },
];

export function RephraseIt() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return <div className="rephrase-grid">{rephraseSituations.map((item, index) => <article key={item.line}><p className="speech-bad">{item.line}</p><span className="turn-arrow" aria-hidden="true">↓</span><fieldset><legend>Choose a second response.</legend>{item.choices.map((choice, choiceIndex) => <button key={choice} className={answers[index] === choiceIndex ? 'selected' : ''} onClick={() => setAnswers((current) => ({ ...current, [index]: choiceIndex }))}>{choice}</button>)}</fieldset>{answers[index] !== undefined && <output className="reasoning-feedback"><strong>{answers[index] === item.answer ? 'RESPECTFUL + PRECISE' : 'PAUSE AND TRY AGAIN'}</strong><p>{item.why}</p></output>}</article>)}</div>;
}

export function EmotionSelector() {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ['respected', 'embarrassed', 'curious', 'uncomfortable', 'included', 'judged'];
  const toggle = (item: string) => setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  return <div className="emotion-selector"><p>Words can affect people in different ways. Select any possible effects.</p><div>{options.map((item) => <button key={item} aria-pressed={selected.includes(item)} onClick={() => toggle(item)}>{selected.includes(item) && <Check aria-hidden="true" />}{item}</button>)}</div>{selected.length > 0 && <p className="feedback">There is not only one possible feeling. Intention and impact can be different.</p>}</div>;
}

export function RepairChoice() {
  const [choice, setChoice] = useState<number | null>(null);
  const options = ['Sorry you got offended.', 'Sorry. My comment was disrespectful. Can I say it differently?'];
  return <div className="repair-choice"><h3>REPAIR OR EXCUSE?</h3>{options.map((item, index) => <button key={item} className={choice === index ? 'selected' : ''} onClick={() => setChoice(index)}>“{item}”</button>)}{choice !== null && <p className="feedback"><strong>{choice === 1 ? 'This takes responsibility.' : 'Look again.'}</strong> A good apology names the action and makes space to repair it.</p>}</div>;
}

const listeningScript = [
  { speaker: 'Mia', line: 'What is that? It looks a little strange to me.' },
  { speaker: 'Daniel', line: 'It’s kimchi. My family eats it with different meals.' },
  { speaker: 'Mia', line: 'I’m sorry. I didn’t mean to judge it. It’s just new to me. What does it taste like?' },
  { speaker: 'Daniel', line: 'It can be spicy and sour.' },
  { speaker: 'Mia', line: 'That sounds interesting. Thanks for explaining.' },
] as const;

const listeningQuestions = [
  { question: 'What changed in Mia’s response?', options: ['The food changed.', 'Her way of speaking changed.', 'Daniel changed the topic.'], answer: 1 },
  { question: 'Which sentence shows respectful curiosity?', options: ['It looks strange.', 'What does it taste like?', 'I don’t want it.'], answer: 1 },
] as const;

export function ListeningActivity() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<'idle' | 'playing' | 'complete'>('idle');
  const [supported, setSupported] = useState(true);

  useEffect(() => () => { audioRef.current?.pause(); }, []);

  const playConversation = () => {
    const audio = audioRef.current;
    if (!audio) { setSupported(false); return; }
    audio.currentTime = 0;
    setStatus('playing');
    void audio.play().catch(() => { setSupported(false); setStatus('idle'); });
  };

  return (
    <div className="listening-activity">
      <div className="listening-player">
        <audio ref={audioRef} src="/audio/lesson4-kimchi-dialogue.mp3" preload="metadata" onPlay={() => { setSupported(true); setStatus('playing'); }} onEnded={() => setStatus('complete')} onError={() => { setSupported(false); setStatus('idle'); }}><track kind="captions" src="/audio/lesson4-kimchi-dialogue.vtt" srcLang="en" label="English" /></audio>
        <Volume2 aria-hidden="true" />
        <div><small>A2 CONVERSATION · ABOUT 20–25 SECONDS</small><p>Listen for the moment when judgment becomes curiosity.</p></div>
        <div className="listening-controls">
          <Button type="button" onClick={playConversation} disabled={status === 'playing'} aria-label="Play the recorded conversation"><Play aria-hidden="true" />PLAY</Button>
          <Button type="button" variant="outline" onClick={playConversation} disabled={status !== 'complete'} aria-label="Replay the recorded conversation"><RotateCcw aria-hidden="true" />REPLAY</Button>
          <Button type="button" variant="outline" aria-expanded={showTranscript} onClick={() => setShowTranscript((current) => !current)}>{showTranscript ? 'HIDE TRANSCRIPT' : 'SHOW TRANSCRIPT'}</Button>
        </div>
        <p className="listening-status" aria-live="polite">{status === 'playing' ? 'Conversation playing…' : status === 'complete' ? 'Conversation complete. Replay or answer the questions.' : !supported ? 'Audio is not available in this browser. Use the transcript.' : 'No autoplay. Press Play when you are ready.'}</p>
      </div>
      {showTranscript && <div className="listening-transcript"><h3>TRANSCRIPT</h3>{listeningScript.map((item, index) => <p key={`${item.speaker}-${index}`}><strong>{item.speaker}:</strong> {item.line}</p>)}</div>}
      <div className="listening-questions">
        {listeningQuestions.map((item, index) => <fieldset key={item.question}><legend>{index + 1}. {item.question}</legend>{item.options.map((option, optionIndex) => <button type="button" key={option} className={answers[index] === optionIndex ? 'selected' : ''} onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}>{option}</button>)}{answers[index] !== undefined && <output><strong>{answers[index] === item.answer ? 'YES. LISTEN CLOSELY.' : 'LOOK CLOSER.'}</strong><p>Look closer. Mia does not have to pretend she already likes the food. She changes judgment into a respectful question.</p></output>}</fieldset>)}
      </div>
      <div className="listening-language-tip"><small>LANGUAGE TIP</small><span>It’s just new to me.</span><span>What does it taste like?</span><span>Thanks for explaining.</span></div>
    </div>
  );
}

const contextItems = ['We explained what the food is.', 'We explained where / who it is connected to.', 'We explained when it is shared or prepared.', 'We explained why it matters.', "We did not present one story as everyone’s story.", 'We checked our information.', 'We used respectful English.', 'We identified one possible stereotype or assumption.', 'We included one respectful question.'];
export function ContextCheck() {
  const [checked, setChecked] = useState<boolean[]>(contextItems.map(() => false));
  const total = checked.filter(Boolean).length;
  const level = total === contextItems.length ? 'READY TO SHARE' : total >= 6 ? 'ALMOST THERE' : 'KEEP EXPLORING';
  return <div className="context-check"><div className="check-progress"><span style={{ width: `${(total / contextItems.length) * 100}%` }} /><strong>{total} / {contextItems.length}</strong></div><div className="check-grid">{contextItems.map((item, index) => <label key={item}><Checkbox checked={checked[index]} onCheckedChange={(value) => setChecked((current) => current.map((entry, itemIndex) => itemIndex === index ? Boolean(value) : entry))} /><span>{item}</span></label>)}</div><div className={`readiness readiness-${level.toLowerCase().replaceAll(' ', '-')}`}><small>YOUR CHECK</small><strong>{level}</strong><p>{total === contextItems.length ? 'Your story has context, care, and a question.' : 'Use the unchecked lines to decide what to add next.'}</p></div></div>;
}

export function ThenNow() {
  const [initial, setInitial] = useState<string | null>(null);
  const labels: Record<string, string> = { yes: 'YES', no: 'NO', 'not-sure': "I'M NOT SURE YET" };
  useEffect(() => { queueMicrotask(() => setInitial(localStorage.getItem('btp-initial-poll'))); }, []);
  return <div className="then-now"><div className="then"><small>AT THE BEGINNING…</small>{initial ? <><p>You answered:</p><strong>{labels[initial]}</strong></> : <p>You considered the essential question. No saved answer was found on this device.</p>}</div><div className="now"><small>NOW…</small><h3>One dish cannot define a whole culture because…</h3><div className="sentence-support">{['people are different', 'families have different traditions', 'regions can be different', 'one story is not everyone’s story', 'food needs context'].map((item) => <span key={item}>{item}</span>)}</div><ReflectionBox storageKey="final-essential-question" prompt="Complete the sentence in your own words." placeholder="One dish cannot define a whole culture because…" /></div></div>;
}
