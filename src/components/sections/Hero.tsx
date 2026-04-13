'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { SectionId } from '@/components/shell/PanelShell';

const NAV_SECTIONS: SectionId[] = [
  'about',
  'team',
  'programs',
  'events',
  'gallery',
  'sponsorship',
  'faq',
];

interface HeroProps {
  onPanelOpen: (id: SectionId) => void;
}

export default function Hero({ onPanelOpen }: HeroProps) {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');

  return (
    <div className="text-center px-4 sm:px-6 pt-2 pb-6 sm:py-8 md:py-8 w-full max-w-lg sm:max-w-3xl mx-auto">
      {/* Logo — responsive via wrapper + fill */}
      <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-[344px] lg:h-[344px] mx-auto mb-3 sm:mb-4">
        <Image
          src="/assets/logo.png"
          alt="MulanPaddlers"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
        MulanPaddlers
      </h1>
      <p className="text-lg sm:text-lg md:text-xl text-white/80 mb-1">{t('headline')}</p>
      <p className="text-base sm:text-base text-white/60 mb-5 sm:mb-6 max-w-sm sm:max-w-lg mx-auto leading-snug">
        {t('subheadline')}
      </p>

      <nav aria-label="Sections" className="mb-5 sm:mb-6">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 sm:gap-x-5 sm:gap-y-0 sm:flex-nowrap">
          {NAV_SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => onPanelOpen(id)}
              className="text-white/80 hover:text-pink-hot text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest transition-colors border-b border-transparent hover:border-pink-hot pb-0.5 min-h-[36px] sm:min-h-[44px] flex items-center whitespace-nowrap"
            >
              {tNav(id)}
            </button>
          ))}
        </div>
      </nav>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => onPanelOpen('join')}
          className="bg-pink-hot text-white px-7 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          {t('cta.primary')}
        </button>
        <button
          onClick={() => onPanelOpen('contact')}
          className="border border-white/20 text-white/60 px-7 py-3 text-sm uppercase tracking-widest hover:border-white/40 hover:text-white/80 transition-colors w-full sm:w-auto"
        >
          {t('cta.secondary')}
        </button>
      </div>
    </div>
  );
}
