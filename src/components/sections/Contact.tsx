'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{t('title')}</h2>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">{t('intro')}</p>

      <ul className="space-y-3 text-sm">
        <li>
          <a
            href={`mailto:${t('email')}`}
            className="text-white/60 hover:text-pink-hot transition-colors"
          >
            {t('email')}
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/mulanpaddlers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-pink-hot transition-colors"
          >
            Instagram: {t('instagram')}
          </a>
        </li>
        <li className="text-white/60">WeChat: {t('wechat')}</li>
      </ul>
    </section>
  );
}
