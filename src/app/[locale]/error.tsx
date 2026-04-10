'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LocaleError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">
          MulanPaddlers
        </p>
        <p className="text-white/60 text-sm mb-8">Something went wrong.</p>
        <button
          onClick={reset}
          className="text-white/60 hover:text-pink-hot text-xs uppercase tracking-widest transition-colors border-b border-transparent hover:border-pink-hot pb-0.5"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
