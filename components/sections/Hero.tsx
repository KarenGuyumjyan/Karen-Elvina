'use client';

import Image from 'next/image';
import { useT } from '@/lib/i18n';

/** Section 1 — Hero / Cover */
export default function Hero() {
  const t = useT();
  return (
    <section className='relative flex min-h-screen items-center justify-center bg-sand/40 pt-10 sm:py-4'>
      {/* soft radial glow */}
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5),_transparent_70%)]' />

      <img
        src='/images/decorations/leaf_background.webp'
        alt=''
        aria-hidden='true'
        className='absolute -left-20 top-4 z-1 w-60 -rotate-6 opacity-15 sm:-left-10 sm:w-80'
      />

      <div className='section-container relative z-10 text-center px-0 sm:px-6'>
        <div className='mt-8 animate-fade-up'>
          <span className='font-serif text-lg tracking-widest text-cocoa md:text-xl'>
            {t.hero.weddingOf}
          </span>
        </div>

        <h1 className='mt-4 animate-fade-up font-script text-5xl leading-none text-espresso sm:text-7xl md:text-8xl'>
          {t.names.groom}
          <span className='mx-3 text-taupe'>&amp;</span>
          {t.names.bride}
        </h1>

        <div className='mx-auto w-[390px] animate-fade-up sm:w-[440px]'>
          <div className='relative'>
            <img
              src='/images/decorations/leaf_invitation.webp'
              alt=''
              aria-hidden='true'
              className='animate-float-slow pointer-events-none absolute -left-2 -bottom-8 z-20 w-28 opacity-90 sm:-left-2 sm:w-40'
            />
            <div
              className='absolute overflow-hidden'
              style={{
                top: '7%',
                left: '12.5%',
                right: '14.5%',
                bottom: '12%',
                transform: 'rotate(-4.4deg)',
              }}
            >
              <Image
                src='/images/gallery/heroImage.JPG'
                alt={`${t.names.groom} & ${t.names.bride}`}
                fill
                sizes='340px'
                priority
                className='object-cover'
              />
            </div>
            <Image
              src='/images/decorations/frame.webp'
              alt=''
              aria-hidden='true'
              width={1094}
              height={1554}
              priority
              className='relative z-10 h-auto w-full select-none'
            />
          </div>
        </div>

        <div className='divider mt-5 animate-fade-up' />

        <p className='mt-2 animate-fade-up font-sans text-base uppercase tracking-widest text-cocoa md:text-lg'>
          {t.dateLabel}
        </p>

        <a
          href='#rsvp'
          className='group mt-16 mb-12 inline-flex flex-col items-center gap-2 animate-fade-in md:hidden '
          aria-label='Scroll to invitation'
        >
          <span className='font-sans text-[0.7rem] uppercase tracking-widest text-mocha animate-float'>
            {t.scroll}
          </span>
          <span className='h-10 w-px bg-mocha/50 transition-all group-hover:h-14' />
        </a>
      </div>
    </section>
  );
}
