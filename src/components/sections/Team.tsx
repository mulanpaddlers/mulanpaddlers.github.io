'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const MEMBERS = [
  { key: 'coach', photo: '/assets/coach-steve.png', hasBio2: true },
  { key: 'captain', photo: '/assets/captain-jackie.jpeg', hasBio2: false },
] as const;

export default function Team() {
  const t = useTranslations('team');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-6">{t('title')}</h2>
      <div className="space-y-8">
        {MEMBERS.map(({ key, photo, hasBio2 }) => (
          <div key={key} className="flex flex-col sm:flex-row gap-5">
            <div className="relative w-full sm:w-32 sm:h-32 h-48 flex-shrink-0 rounded overflow-hidden bg-white/5">
              <Image
                src={photo}
                alt={t(`${key}.name`)}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 128px"
              />
            </div>
            <div className="flex-1">
              <p className="text-pink-hot text-xs uppercase tracking-widest mb-1">{t(`${key}.role`)}</p>
              <h3 className="text-white font-semibold text-base mb-2">{t(`${key}.name`)}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t(`${key}.bio`)}</p>
              {hasBio2 && <p className="text-white/60 text-sm leading-relaxed mt-3">{t(`${key}.bio2`)}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
