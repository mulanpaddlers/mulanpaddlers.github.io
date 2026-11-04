'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import About from '@/components/sections/About';

// photo: null shows an initials placeholder until a real photo is added
// anchor: element id for a shareable link (must also be listed in DEEP_LINKS in PanelShell)
const MEMBERS: ReadonlyArray<{ key: string; photo: string | null; hasBio2: boolean; anchor?: string }> = [
  { key: 'coachEthan', photo: '/assets/coach-ethan.jpg', hasBio2: true, anchor: 'coach-ethan' },
  { key: 'captain', photo: '/assets/captain-jackie.jpeg', hasBio2: false },
  { key: 'coach', photo: '/assets/coach-steve.png', hasBio2: true },
];

// "Coach Ethan Lo" -> "EL" (skips the leading title word)
function initials(name: string) {
  const words = name.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w));
  return words.slice(-2).map((w) => w[0]).join('').toUpperCase();
}

export default function Team() {
  const t = useTranslations('team');

  return (
    <div className="space-y-10">
      {/* Team introduction */}
      <About />

      <section>
        <div className="space-y-8">
          {MEMBERS.map(({ key, photo, hasBio2, anchor }) => (
            <div key={key} id={anchor} className="flex flex-col sm:flex-row gap-5 scroll-mt-4">
              <div className="relative w-full h-80 sm:w-32 sm:h-32 flex-shrink-0 rounded overflow-hidden bg-white/5">
                {photo ? (
                  <Image
                    src={photo}
                    alt={t(`${key}.name`)}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 128px"
                  />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-white/30 text-3xl font-semibold">
                    {initials(t(`${key}.name`))}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-pink-hot text-xs uppercase tracking-widest mb-1">{t(`${key}.role`)}</p>
                <h3 className="text-white font-semibold text-base mb-2">{t(`${key}.name`)}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t(`${key}.bio`)}</p>
                {hasBio2 && <p className="text-white/60 text-sm leading-relaxed mt-3">{t(`${key}.bio2`)}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
