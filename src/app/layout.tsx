import type { ReactNode } from 'react';
import './globals.css';

// Root layout. html/body are provided by [locale]/layout.tsx.
// This file is required by Next.js App Router when app/page.tsx exists.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
