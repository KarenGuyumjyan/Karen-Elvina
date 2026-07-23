'use client';

import { useLang } from '@/lib/i18n';
import type { Lang } from '@/lib/translations';

const OPTIONS: { key: Lang; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'hy', label: 'ՀԱՅ' },
];

/** Segmented EN | ՀԱՅ language switch, fixed to the top-right. */
export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role='group'
      aria-label='Language'
      className='fixed right-5 top-5 z-50 flex items-center rounded-full border border-gold/50 bg-ink/80 p-1 backdrop-blur'
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.key;
        return (
          <button
            key={opt.key}
            type='button'
            onClick={() => setLang(opt.key)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 ${
              active
                ? 'bg-taupe text-2f2620'
                : 'text-parchment/70 hover:text-taupe'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
