'use client';

import { useT } from '@/lib/i18n';

export const Footer = () => {
  const t = useT();
  return (
    <footer className='bg-espresso py-10 text-center'>
      <h3 className='font-serif animate-fade-up text-4xl text-sand leading-tight md:text-5xl gilded flex items-center justify-center gap-3'>
        {t.names.groom}
        <span className='block text-xl text-mocha md:text-2xl'>&amp;</span>
        {t.names.bride}
      </h3>

      <div className='mt-2 animate-fade-up font-sans text-sm uppercase tracking-widest text-taupe md:text-lg flex items-center gap-4 justify-center'>
        <div className='inline-block'>
          <svg
            viewBox='0 0 24 24'
            className='h-3 w-3'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M12 20.8c-.2 0-.4-.07-.56-.2C6.24 16.04 3 13.05 3 8.97 3 6.24 5.18 4 7.87 4c1.64 0 3.2.8 4.13 2.1C12.93 4.8 14.49 4 16.13 4 18.82 4 21 6.24 21 8.97c0 4.08-3.24 7.07-8.44 11.63-.16.13-.36.2-.56.2z' />
          </svg>
        </div>
        <span>{t.dateLabel}</span>
        <div className='inline-block'>
          <svg
            viewBox='0 0 24 24'
            className='h-3 w-3'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M12 20.8c-.2 0-.4-.07-.56-.2C6.24 16.04 3 13.05 3 8.97 3 6.24 5.18 4 7.87 4c1.64 0 3.2.8 4.13 2.1C12.93 4.8 14.49 4 16.13 4 18.82 4 21 6.24 21 8.97c0 4.08-3.24 7.07-8.44 11.63-.16.13-.36.2-.56.2z' />
          </svg>
        </div>
      </div>
    </footer>
  );
};
