'use client';

import { useTranslations } from 'next-intl';

type FAQItem = { q: string; a: string };

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FAQItem[];

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-6">{t('title')}</h2>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i}>
            <p className="text-white/90 text-sm font-medium mb-1">{item.q}</p>
            <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
