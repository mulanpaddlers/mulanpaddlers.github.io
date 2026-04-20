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
  const tEvents = useTranslations('events');

  return (
    <div className="text-center px-4 sm:px-6 pt-2 pb-6 sm:py-8 md:py-8 w-full max-w-lg sm:max-w-3xl mx-auto">
      {/* Logo — responsive via wrapper + fill */}
      <div className="relative w-[250px] h-[250px] sm:w-[270px] sm:h-[270px] md:w-72 md:h-72 lg:w-[344px] lg:h-[344px] mx-auto mb-3 sm:mb-4">
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

      {/* Panda Cup CTA */}
      <div className="mb-5 sm:mb-6 px-4 py-3 border border-pink-hot/20 rounded bg-pink-hot/5 text-center">
        <p className="text-white/70 text-sm mb-2">{tEvents('pandaCupCta.text')}</p>
        <a
          href={tEvents('pandaCupCta.url')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold tracking-wide text-pink-hot border border-pink-hot/50 rounded px-3 py-1 hover:bg-pink-hot/10 transition-colors"
        >
          {tEvents('pandaCupCta.label')}
        </a>
      </div>

      <nav aria-label="Sections" className="mb-5 sm:mb-6">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6 sm:gap-y-0 sm:flex-nowrap">
          {NAV_SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => onPanelOpen(id)}
              className="text-white/80 hover:text-pink-hot text-sm uppercase tracking-wide sm:tracking-widest transition-colors border-b border-transparent hover:border-pink-hot pb-0.5 min-h-[44px] flex items-center whitespace-nowrap"
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
