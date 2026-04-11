'use client';

import { useTranslations } from 'next-intl';

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconWeChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 9c-3.87 0-7 2.468-7 5.5 0 1.48.67 2.818 1.76 3.792L3 21l2.867-1.275A8.5 8.5 0 0 0 9 20c3.87 0 7-2.468 7-5.5S12.87 9 9 9Z" />
      <path d="M15.5 3C19.09 3 22 5.14 22 7.8c0 1.18-.54 2.25-1.41 3.03L21 13l-2.29-1.02A6.8 6.8 0 0 1 15.5 12.6c-.55 0-1.08-.06-1.59-.17" />
    </svg>
  );
}


export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-3">{t('title')}</h2>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">{t('intro')}</p>

      <ul className="space-y-4 text-sm">
        <li>
          <a
            href={`mailto:${t('email')}`}
            className="flex items-center gap-3 text-white/60 hover:text-pink-hot transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] leading-none group-hover:text-pink-hot transition-colors">mail</span>
            {t('email')}
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/mulanpaddlers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 hover:text-pink-hot transition-colors group"
          >
            <span className="group-hover:text-pink-hot transition-colors"><IconInstagram /></span>
            Instagram: {t('instagram')}
          </a>
        </li>
        <li>
          <a
            href="https://weixin.qq.com/f/IMeXx4FanqMubffEiiMar10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 hover:text-pink-hot transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] leading-none group-hover:text-pink-hot transition-colors">quick_phrases</span>
            {t('wechatLabel')}: {t('wechat')}
          </a>
        </li>
        <li>
          <a
            href="http://xhslink.com/m/7VOwqYfGzEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 hover:text-pink-hot transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] leading-none group-hover:text-pink-hot transition-colors">book</span>
            {t('rednoteLabel')}: {t('rednote')}
          </a>
        </li>
      </ul>
    </section>
  );
}
