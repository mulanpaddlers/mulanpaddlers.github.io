'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 py-4 px-6 text-center pointer-events-none">
      <p className="text-white/20 text-xs tracking-wider">{t('tagline')}</p>
    </footer>
  );
}
