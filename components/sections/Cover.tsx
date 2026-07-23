'use client';

import { useEffect, useState } from 'react';
import WhipFloral from '@/components/WhipFloral';
import { useT } from '@/lib/i18n';
import ShineButton from '../ui/ShineButton';
import { CoverBackground } from './CoverBackground'

/** Opening cover card — click "Open" to reveal the invitation. */
export default function Cover() {
  const t = useT();
  const [opened, setOpened] = useState(false);

  // Lock scroll while the cover is showing.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  function handleOpen() {
    setOpened(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  return (
    <div
      aria-hidden={opened}
      className={`fixed inset-0 z-40 flex items-center justify-center bg-taupe/100 p-4 transition-all duration-1000 ${
        opened ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100'
      }`}
    >
      <div className='relative w-full max-w-2xl rounded-2xl bg-cream py-5 text-center shadow-2xl md:py-8 overflow-hidden'>
        <WhipFloral
          className='-right-[40px] -top-[70px] w-[140px] sm:w-[180px]'
          spriteClassName='rotate-[200deg] opacity-70'
          origin='right top'
          amps={[0.3, 1.1, 2.8]}
          duration={7}
          delays={[0, 0.24, 0.56]}
          midOrigin='50% 33%'
          tipOrigin='50% 67%'
        />
        <WhipFloral
          className='-bottom-[40px] -left-[30px] w-[140px] sm:w-[180px]'
          spriteClassName='-scale-x-100 rotate-[10deg] opacity-70'
          origin='left bottom'
          amps={[0.45, 1.65, 4.2]}
          duration={6}
          delays={[0.7, 1.06, 1.54]}
          midOrigin='50% 67%'
          tipOrigin='50% 33%'
        />

        <div className='relative z-10 flex flex-col items-center'>
          <span className='flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-cream shadow-md animate-heartbeat'>
            <svg
              viewBox='0 0 24 24'
              className='h-8 w-8'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M12 20.8c-.2 0-.4-.07-.56-.2C6.24 16.04 3 13.05 3 8.97 3 6.24 5.18 4 7.87 4c1.64 0 3.2.8 4.13 2.1C12.93 4.8 14.49 4 16.13 4 18.82 4 21 6.24 21 8.97c0 4.08-3.24 7.07-8.44 11.63-.16.13-.36.2-.56.2z' />
            </svg>
          </span>

          <h1 className='mt-5 font-serif text-4xl leading-tight md:text-5xl gilded'>
            {t.names.groom}
            <span className='block text-xl text-mocha md:text-2xl'>&amp;</span>
            {t.names.bride}
          </h1>

          <div className='my-5 flex items-center justify-center gap-3 text-mocha'>
            <span className='h-px w-16 bg-taupe/70' />
            <span className='text-lg'>&#10086;</span>
            <span className='h-px w-16 bg-taupe/70' />
          </div>

          <p className='font-serif text-xl text-cocoa font-bold'>{t.dateLabel}</p>

          <p className='mt-5 font-serif text-xl text-mocha'>
            {t.cover.invites}
          </p>

          <ShineButton onClick={handleOpen} text={t.cover.open} />
        </div>
      </div>
      <CoverBackground />
    </div>
  );
}
