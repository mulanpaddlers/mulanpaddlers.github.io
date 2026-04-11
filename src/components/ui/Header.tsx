'use client';

import LanguageToggle from './LanguageToggle';
import type { SectionId } from '@/components/shell/PanelShell';

interface HeaderProps {
  onPanelOpen: (id: SectionId) => void;
  activePanel: SectionId | null;
  lightboxOpen?: boolean;
}

export default function Header({ onPanelOpen: _onPanelOpen, activePanel, lightboxOpen }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
      {!activePanel && !lightboxOpen && <LanguageToggle />}
    </header>
  );
}
