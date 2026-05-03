'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Tab = 'general' | 'commandSystem';
type FAQItem = { q: string; a: string };
type Command = { name: string; lines: string[]; effect?: string; note?: string };
type Section = { title: string; commands: Command[]; sequential?: boolean };
type CommandSystem = { subtitle: string; sections: Section[] };

export default function FAQ() {
  const t = useTranslations('faq');
  const [activeTab, setActiveTab] = useState<Tab>('commandSystem');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'commandSystem', label: t('tabs.commandSystem') },
    { id: 'general', label: t('tabs.general') },
  ];

  const items = t.raw('items') as FAQItem[];
  const commandSystem = t.raw('commandSystem') as CommandSystem;

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-2">{t('title')}</h2>

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

      {activeTab === 'general' ? (
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i}>
              <p className="text-white/90 text-sm font-medium mb-1">{item.q}</p>
              <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {commandSystem.sections.map((section, si) => (
            <div key={si}>
              <p className="text-white text-sm font-semibold mb-3">{section.title}</p>
              {section.sequential ? (
                <div className="space-y-1 pl-1">
                  {section.commands.map((cmd, ci) => (
                    <div key={ci}>
                      <div className="flex gap-3 items-baseline">
                        <p className="text-pink-hot text-sm font-medium w-36 shrink-0">{cmd.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{cmd.lines.join(' · ')}</p>
                      </div>
                      {ci < section.commands.length - 1 && (
                        <p className="text-white/30 text-xs pl-1 my-1">↓</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {section.commands.map((cmd, ci) => (
                    <div key={ci} className="flex gap-3 items-baseline">
                      <p className="text-pink-hot text-sm font-medium w-36 shrink-0">{cmd.name}</p>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {cmd.lines.join(' · ')}{cmd.note ? ` — ${cmd.note}` : ''}{cmd.effect ? <span className="text-white/70"> → {cmd.effect}</span> : null}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
