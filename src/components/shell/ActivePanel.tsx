'use client';

import { useEffect, useRef } from 'react';

interface ActivePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ActivePanel({ isOpen, onClose, children }: ActivePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      ref={panelRef}
      tabIndex={-1}
      className={`absolute inset-0 z-30 flex items-center justify-center p-3 sm:p-6 outline-none transition-all duration-500 ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[80vh] overflow-y-auto rounded bg-navy border border-white/10 shadow-2xl p-5 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close panel"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/40 hover:text-pink-hot transition-colors text-lg leading-none min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
