'use client';

import { useTranslations } from 'next-intl';

export default function Sponsorship() {
  const t = useTranslations('sponsorship');
  const offerItems = t.raw('offers.items') as string[];

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{t('title')}</h2>
      <p className="text-white/60 text-sm mb-3 leading-relaxed">{t('p1')}</p>
      <p className="text-white/60 text-sm mb-5 leading-relaxed">{t('p2')}</p>

      <p className="text-white/80 text-sm mb-2">{t('offers.title')}</p>
      <ul className="space-y-1 mb-5">
        {offerItems.map((item, i) => (
          <li key={i} className="text-white/60 text-sm">
            {item}
          </li>
        ))}
      </ul>

      <p className="text-white/60 text-sm mb-6 leading-relaxed">{t('p3')}</p>

      <a
        href="mailto:mulanpaddlers@gmail.com"
        className="inline-block bg-pink-hot text-white px-6 py-3 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
      >
        {t('cta')}
      </a>
    </section>
  );
}
