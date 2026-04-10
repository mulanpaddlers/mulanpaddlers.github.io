'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section>
      {/* Team photo header */}
      <div className="relative w-full aspect-[16/9] rounded overflow-hidden mb-6">
        <Image
          src="/assets/team-shot1.jpeg"
          alt="MulanPaddlers team"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 672px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
      </div>

      <h2 className="text-xl font-bold text-white mb-5">{t('title')}</h2>
      <div className="space-y-4 text-white/60 text-sm leading-relaxed">
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
      </div>
    </section>
  );
}
