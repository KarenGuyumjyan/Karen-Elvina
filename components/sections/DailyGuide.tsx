'use client';

import Reveal from '@/components/Reveal';
import Calendar from '@/components/ui/Calendar';
import Image from 'next/image';
import { houseEventNames, wedding } from '@/lib/data';
import { useT } from '@/lib/i18n';

export const DailyGuide = ({ hideHouses = false }: { hideHouses?: boolean }) => {
  const t = useT();
  // Non-text event data (time, icon) zipped with localized names by index.
  // `isHouse` is computed from the original (unlocalized) name during the zip,
  // so the house filter works even though `name` is overwritten below.
  const items = wedding.events
    .map((event, i) => ({
      ...event,
      name: t.events.items[i].name,
      isHouse: houseEventNames.includes(event.name),
    }))
    .filter((event) => event.icon)
    .filter((event) => !hideHouses || !event.isHouse);

  return (
    <section id='daily-guide' className='bg-sand/40 py-16 md:py-24 w-full'>
      <div className='section-container relative'>
        <Reveal className='text-center'>
          <p className='eyebrow'>{t.dailyGuide.eyebrow}</p>
          <h2 className='section-title mt-3'>{t.dailyGuide.title}</h2>
        </Reveal>

        <Reveal delay={200}>
          <div className='flex flex-col gap-4 items-center md:flex-row sm:gap-8 z-100'>
            <Reveal delay={200}>
              <div className='relative mx-auto mt-14 rounded-[2rem] bg-cream/70 p-5 shadow-sm ring-1 ring-taupe/30 sm:p-7'>
                <Calendar />
                <img
                  src='/images/decorations/leaf_background.webp'
                  alt=''
                  aria-hidden='true'
                  className='animate-float-versa pointer-events-none absolute rotate-[150deg] -left-4 -bottom-8 z-20 w-28 opacity-90 sm:-left-2 sm:w-28'
                />
              </div>
            </Reveal>

            <div className='mt-14 flex flex-col gap-4 w-full max-w-[396px] sm:max-w-[428px] md:w-1/2 md:max-w-1/2'>
              <p className='eyebrow block md:hidden text-2xl text-ink/50'>
                {t.dailyGuide.timing}
              </p>
              {items.map((event, i) => (
                  <Reveal key={event.name} delay={i * 200}>
                    <div className='group flex justify-between w-full rounded-[2rem] border border-taupe/40 bg-cream text-center shadow-sm p-4 transition-all duration-500 hover:bg-cream/80 hover:shadow-md hover:border-[#bf9c85]/50'>
                      <Image
                        src={event.icon}
                        alt={event.name}
                        width={64}
                        height={64}
                        className='shrink-0 w-[73px] h-[73px] bg-gradient-to-br from-white to-[#faf8f5] border border-cocoa/50 rounded-2xl flex items-center justify-center p-2.5 shadow-2xs group-hover:border-[#bf9c85]/60 group-hover:scale-105 transition-all duration-500'
                      />
                      <div className='flex flex-col items-end justify-center'>
                        <p className='mt-1 font-sans text-sm uppercase tracking-widest text-mocha'>
                          {t.dailyGuide.at} {event.time}
                        </p>
                        <p className='text-2xl text-espresso font-extrabold'>
                          {event.name}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        </Reveal>
        <img
          src='/images/decorations/leaf_background.webp'
          alt=''
          aria-hidden='true'
          className='absolute right-20 -top-16 -z-10 w-60 -rotate-45 opacity-10 sm:-right-10 sm:w-96'
        />
        <img
          src='/images/decorations/house_background.webp'
          alt=''
          aria-hidden='true'
          className='absolute block md:hidden -z-10 left-0 -bottom-10 opacity-20 w-[1000px] max-w-[1000px]'
        />
      </div>
    </section>
  );
};
