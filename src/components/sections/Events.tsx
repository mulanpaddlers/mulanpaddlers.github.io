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
          {(t.raw('regattas.items') as Array<{ date: string; name: string; location: string; url: string }>).map((item, i) => (
            <div key={i} className="border border-white/10 rounded p-4">
              <p className="text-pink-hot text-xs uppercase tracking-widest mb-1">{item.date}</p>
              <h3 className="text-white font-semibold text-base mb-1 flex items-center gap-1.5">
                {item.name}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open event website"
                  className="text-white/40 hover:text-pink-hot transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                  </svg>
                </a>
              </h3>
              <p className="text-white/50 text-sm">{item.location}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
