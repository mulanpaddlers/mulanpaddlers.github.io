'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { SectionId } from '@/components/shell/PanelShell';

const NAV_SECTIONS: SectionId[] = [
  'about',
  'programs',
  'gallery',
  'sponsorship',
  'faq',
  'contact',
  'join',
];

interface HeroProps {
  onPanelOpen: (id: SectionId) => void;
}

export default function Hero({ onPanelOpen }: HeroProps) {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');

  return (
    <div className="text-center px-4 sm:px-6 pt-2 pb-6 sm:py-16 md:py-20 w-full max-w-lg mx-auto">
      {/* Logo — responsive via wrapper + fill */}
      <div className="relative w-44 h-44 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-4 sm:mb-6">
        <Image
          src="/assets/logo.png"
          alt="MulanPaddlers"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2 sm:mb-4">
        MulanPaddlers
      </h1>
      <p className="text-base sm:text-base md:text-lg text-white/80 mb-1">{t('headline')}</p>
      <p className="text-sm sm:text-sm text-white/60 mb-6 sm:mb-12 max-w-xs sm:max-w-sm mx-auto leading-snug">
        {t('subheadline')}
      </p>

      <nav aria-label="Sections" className="flex flex-wrap md:flex-nowrap justify-center gap-x-4 sm:gap-x-5 gap-y-3 mb-6 sm:mb-12">
        {NAV_SECTIONS.map((id) => (
          <button
            key={id}
            onClick={() => onPanelOpen(id)}
            className="text-white/80 hover:text-pink-hot text-xs uppercase tracking-widest transition-colors border-b border-transparent hover:border-pink-hot pb-0.5 min-h-[44px] flex items-center"
          >
            {tNav(id)}
          </button>
        ))}
      </nav>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => onPanelOpen('join')}
          className="bg-pink-hot text-white px-7 py-3 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          {t('cta.primary')}
        </button>
        <button
          onClick={() => onPanelOpen('contact')}
          className="border border-white/20 text-white/60 px-7 py-3 text-xs uppercase tracking-widest hover:border-white/40 hover:text-white/80 transition-colors w-full sm:w-auto"
        >
          {t('cta.secondary')}
        </button>
      </div>
    </div>
  );
}
