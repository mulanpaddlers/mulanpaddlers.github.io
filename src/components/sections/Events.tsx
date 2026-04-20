'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Tab = 'regattas' | 'practiceCalendar';

export default function Events() {
  const t = useTranslations('events');
  const [activeTab, setActiveTab] = useState<Tab>('practiceCalendar');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'practiceCalendar', label: t('tabs.practiceCalendar') },
    { id: 'regattas', label: t('tabs.regattas') },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-2">{t('title')}</h2>
      <p className="text-white/50 text-sm mb-6 leading-relaxed">{t('intro')}</p>

      {/* Tab bar */}
      <div className="flex gap-6 border-b border-white/10 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-sm font-medium tracking-wide transition-colors ${
              activeTab === tab.id
                ? 'text-pink-hot border-b-2 border-pink-hot'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'practiceCalendar' ? (
        <div className="rounded overflow-hidden border border-white/10">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=b5f4b313614bcff7b39b72285c81018cc661dd058a0adfa14860da2ccb394981%40group.calendar.google.com&ctz=America%2FToronto"
            className="w-full"
            height="500"
            frameBorder="0"
            scrolling="no"
            title="Practice Calendar"
          />
        </div>
      ) : (
        <div className="space-y-4">
          {(t.raw('regattas.items') as Array<{ date: string; name: string; location: string; mapUrl: string; url?: string; viewOnMap: string; registerUrl?: string; registerLabel?: string }>).map((item, i) => (
            <div key={i} className="border border-white/10 rounded p-4">
              <p className="text-pink-hot text-xs uppercase tracking-widest mb-1">{item.date}</p>
              <h3 className="text-white font-semibold text-base mb-1">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-hot transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </h3>
              <p className="text-white/50 text-sm">
                {item.location}{' '}
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-hot hover:underline"
                >
                  {item.viewOnMap}
                </a>
              </p>
              {item.registerUrl && item.registerLabel && (
                <a
                  href={item.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-semibold tracking-wide text-pink-hot border border-pink-hot/50 rounded px-3 py-1 hover:bg-pink-hot/10 transition-colors"
                >
                  {item.registerLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
