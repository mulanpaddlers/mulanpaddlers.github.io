import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'MulanPaddlers | 木兰桨手',
    description: "MulanPaddlers — Women's Dragon Boat Team in the Greater Toronto Area | 大多伦多地区女子龙舟队",
    openGraph: {
      title: 'MulanPaddlers | 木兰桨手',
      description: "MulanPaddlers — Women's Dragon Boat Team in the Greater Toronto Area | 大多伦多地区女子龙舟队",
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
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'zh')) {
    notFound();
  }

  // Required for static export: tells next-intl to use the URL param
  // instead of reading request headers, keeping the route statically renderable.
  setRequestLocale(locale);

  const messages = await getMessages();

  // html/body are owned by app/layout.tsx.
  // suppressHydrationWarning on the root html tag handles the lang attribute
  // update from the default "en" to the actual locale without a hydration error.
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
