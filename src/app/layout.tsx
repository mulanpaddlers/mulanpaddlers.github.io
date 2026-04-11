import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'MulanPaddlers',
  description: "MulanPaddlers — Women's Dragon Boat Team in the Greater Toronto Area",
  openGraph: {
    title: 'MulanPaddlers',
    description: "MulanPaddlers — Women's Dragon Boat Team in the Greater Toronto Area",
    images: [
      {
        url: 'https://www.mulanpaddlers.com/assets/team-shot1.jpeg',
        width: 1200,
        height: 630,
        alt: 'MulanPaddlers team',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#1E2A44',
};

// Root layout owns the document shell.
// lang is set to a neutral default here; [locale]/layout.tsx overrides it
// via suppressHydrationWarning so React does not throw on the mismatch.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
