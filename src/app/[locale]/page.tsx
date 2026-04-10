import { setRequestLocale } from 'next-intl/server';
import PanelShell from '@/components/shell/PanelShell';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PanelShell />;
}
