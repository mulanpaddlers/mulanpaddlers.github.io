'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const IMAGES = [
  { src: '/assets/team-shot1.jpeg',      alt: 'Team together' },
  { src: '/assets/team-shot-2.jpeg',     alt: 'Team on the water' },
  { src: '/assets/team-shot-3.jpeg',     alt: 'Team celebration' },
  { src: '/assets/practice-shot-1.jpeg', alt: 'Practice drills' },
  { src: '/assets/practice-shot-2.jpeg', alt: 'Paddling technique' },
  { src: '/assets/practice-shot-3.jpeg', alt: 'Training session' },
  { src: '/assets/practice-shot-4.jpeg', alt: 'On-water practice' },
  { src: '/assets/practice-shot-5.jpeg', alt: 'Team training' },
];

export default function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-2">{t('title')}</h2>
      <p className="text-white/50 text-sm mb-5 leading-relaxed">{t('caption')}</p>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {IMAGES.map(({ src, alt }) => (
          <div key={src} className="relative aspect-video rounded overflow-hidden bg-white/5">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 45vw, 320px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
