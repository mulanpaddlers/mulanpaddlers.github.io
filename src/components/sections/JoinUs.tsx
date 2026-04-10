'use client';

import { useTranslations } from 'next-intl';

export default function JoinUs() {
  const t = useTranslations('join');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{t('title')}</h2>
      <p className="text-white/60 text-sm mb-8 leading-relaxed">{t('intro')}</p>

      <div className="space-y-4">
        {/* Request a Tryout */}
        <a
          href="mailto:mulanpaddlers@gmail.com?subject=Tryout%20Request"
          className="flex flex-col gap-1 border border-white/10 rounded p-5 hover:border-pink-hot transition-colors group"
        >
          <span className="text-white font-semibold text-sm group-hover:text-pink-hot transition-colors">
            {t('tryout.label')} →
          </span>
          <span className="text-white/50 text-xs leading-relaxed">{t('tryout.desc')}</span>
        </a>

        {/* Register to 2026 Program */}
        <a
          href="https://forms.gle/VhapiqWfRdmjvjyG7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-1 bg-pink-hot/10 border border-pink-hot/40 rounded p-5 hover:bg-pink-hot/20 transition-colors group"
        >
          <span className="text-pink-hot font-semibold text-sm group-hover:text-white transition-colors">
            {t('register.label')} →
          </span>
          <span className="text-white/50 text-xs leading-relaxed">{t('register.desc')}</span>
        </a>
      </div>

      <p className="text-white/30 text-xs mt-8 leading-relaxed">{t('note')}</p>
    </section>
  );
}
