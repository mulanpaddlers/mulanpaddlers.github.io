'use client';

import Image from 'next/image';
import { useState } from 'react';
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

interface GalleryProps {
  onLightboxChange?: (open: boolean) => void;
}

export default function Gallery({ onLightboxChange }: GalleryProps) {
  const t = useTranslations('gallery');
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  const open = (img: { src: string; alt: string }) => {
    setSelected(img);
    onLightboxChange?.(true);
  };
  const close = () => {
    setSelected(null);
    onLightboxChange?.(false);
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-2">{t('title')}</h2>
      <p className="text-white/50 text-sm mb-5 leading-relaxed">{t('caption')}</p>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {IMAGES.map(({ src, alt }) => (
          <button
            key={src}
            onClick={() => open({ src, alt })}
            className="relative aspect-video rounded overflow-hidden bg-white/5 focus:outline-none focus:ring-2 focus:ring-pink-hot"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 45vw, 320px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close image"
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-pink-hot hover:border-pink-hot transition-colors text-base"
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-3xl max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
