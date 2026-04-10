'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'zh' : 'en' });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
