'use client';

import { useTranslations } from 'next-intl';

const SUB_SECTIONS = ['indoor', 'onwater', 'trial'] as const;

export default function Programs() {
  const t = useTranslations('programs');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{t('title')}</h2>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">{t('intro')}</p>

      {SUB_SECTIONS.map((key) => (
        <div key={key} className="mb-6">
          <h3 className="text-pink-hot text-xs uppercase tracking-widest mb-2">
            {t(`${key}.title`)}
          </h3>
          <ul className="space-y-1">
            {(t.raw(`${key}.items`) as string[]).map((item, i) => (
              <li key={i} className="text-white/60 text-sm flex gap-2">
                <span className="text-pink-hot select-none">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="text-white/40 text-sm italic mt-4">{t('outro')}</p>
    </section>
  );
}
