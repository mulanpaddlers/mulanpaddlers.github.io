'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Programs from '@/components/sections/Programs';
import Gallery from '@/components/sections/Gallery';
import Sponsorship from '@/components/sections/Sponsorship';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import JoinUs from '@/components/sections/JoinUs';
import Team from '@/components/sections/Team';
import ActivePanel from '@/components/shell/ActivePanel';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export type SectionId = 'about' | 'team' | 'programs' | 'gallery' | 'sponsorship' | 'faq' | 'contact' | 'join';


export default function PanelShell() {
  const [activePanel, setActivePanel] = useState<SectionId | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePanel(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setActivePanel(null);

  const sectionMap: Record<SectionId, React.ReactNode> = {
    about: <About />,
    team: <Team />,
    programs: <Programs />,
    gallery: <Gallery onLightboxChange={setLightboxOpen} />,
    sponsorship: <Sponsorship />,
    faq: <FAQ />,
    contact: <Contact />,
    join: <JoinUs />,
  };

  return (
    <div className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background: hero image with navy overlay */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-all duration-700 ${
          activePanel ? 'brightness-50' : 'brightness-100'
        }`}
      >
        <Image
          src="/assets/lake-view-3.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Navy overlay for text legibility */}
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <Header onPanelOpen={setActivePanel} activePanel={activePanel} lightboxOpen={lightboxOpen} />

      {/* Hero content — fades out when a panel is open */}
      <div
        className={`relative z-10 flex items-center justify-center min-h-screen transition-opacity duration-500 ${
          activePanel ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Hero onPanelOpen={setActivePanel} />
      </div>

      {/* Backdrop — clicking it closes the panel */}
      {activePanel && (
        <div
          className="absolute inset-0 z-20"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <ActivePanel isOpen={!!activePanel} onClose={close}>
        {activePanel && sectionMap[activePanel]}
      </ActivePanel>

      <Footer />
    </div>
  );
}
