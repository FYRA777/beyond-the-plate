'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const heroScenes = [
  { src: '/images/home-hero-plate-many-flavors.webp', alt: 'An overhead plate of hummus, chickpeas, grilled chicken, salad, lemon, and flatbread', phrase: 'Many flavors. Many stories.' },
  { src: '/images/home-hero-plate-ajiaco.webp', alt: 'An overhead bowl of potato, chicken, corn, herbs, and capers', phrase: 'A bowl can hold memory.' },
  { src: '/images/home-hero-plate-arroz-coco.webp', alt: 'An overhead plate of coconut rice, fried fish, and salad', phrase: 'Some dishes sound like home.' },
  { src: '/images/home-hero-plate-chile-nogada.webp', alt: 'An overhead plate with a roasted green pepper, walnut sauce, red seeds, and herbs', phrase: 'A plate can carry a nation’s story.' },
  { src: '/images/home-hero-plate-onigiri.webp', alt: 'An overhead plate with five handmade rice triangles and seaweed', phrase: 'Simple does not mean small.' },
  { src: '/images/home-hero-plate-ceviche.webp', alt: 'An overhead plate of fresh fish, red onion, herbs, corn, and sweet potato', phrase: 'Fresh flavors. Different perspectives.' },
] as const;

export function HomeFoodRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroScenes.length), 4000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <div className="home2-food-rotator">
      <div className="home2-food-images" aria-live="off">
        {heroScenes.map((scene, index) => (
          <Image
            key={scene.src}
            className={index === active ? 'is-active' : ''}
            src={scene.src}
            alt={index === active ? scene.alt : ''}
            fill
            sizes="(max-width: 760px) 94vw, (max-width: 1100px) 58vw, 42vw"
            priority={index === 0}
          />
        ))}
      </div>
      <div className="home2-food-caption">
        <span>{heroScenes[active].phrase}</span>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume food scene rotation' : 'Pause food scene rotation'}>
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </div>
      <div className="home2-food-progress" aria-hidden="true">
        {heroScenes.map((scene, index) => <span className={index === active ? 'is-active' : ''} key={scene.src} />)}
      </div>
    </div>
  );
}
