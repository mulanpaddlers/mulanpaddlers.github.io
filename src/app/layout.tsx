import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'MulanPaddlers',
  description: "MulanPaddlers — Women's Dragon Boat Team in the Greater Toronto Area",
};

// Root layout owns the document shell.
// lang is set to a neutral default here; [locale]/layout.tsx overrides it
// via suppressHydrationWarning so React does not throw on the mismatch.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
