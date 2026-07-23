'use client';

import Reveal from '@/components/Reveal';
import Flourish from '@/components/Flourish';
import { wedding } from '@/lib/data';
import { useT } from '@/lib/i18n';
import WhipFloral from '../WhipFloral';

type EventCardProps = {
  venue: string;
  time?: string;
  address: string;
  mapUrl?: string;
  viewMap: string;
  delay: number;
};

function EventCard({
  venue,
  time,
  address,
  mapUrl,
  viewMap,
  delay,
}: EventCardProps) {
  return (
    <Reveal
      delay={delay}
      className='flex flex-col items-center w-full rounded-lg border border-taupe/40 bg-cream p-8 text-center shadow-sm md:p-10'
    >
      <h3 className='font-script text-4xl text-cocoa'>{venue}</h3>
      <Flourish className='mx-auto mt-4 h-5 w-24 whip' />

      <p className='mt-1 font-sans text-sm uppercase tracking-widest text-mocha'>
        {time}
      </p>

      <div className='mt-6'>
        <p className='mt-1 font-serif text-base font-light text-espresso/70'>
          {address}
        </p>
      </div>

      {mapUrl && (
        <a
          href={mapUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-8 inline-block border border-cocoa px-6 py-2 font-sans text-xs uppercase tracking-widest text-cocoa transition-colors hover:bg-cocoa hover:text-cream'
        >
          {viewMap}
        </a>
      )}
    </Reveal>
  );
}

/** Section 7 — Event details / Location */
export default function Events() {
  const t = useT();
  // Zip non-text event data (time, map, icon) with localized text by index.
  const cards = wedding.events
    .map((event, i) => ({ ...event, ...t.events.items[i] }))
    .filter((event) => event.venue);

  return (
    <section id='events' className='bg-sand/520 py-16 md:py-24'>
      <div className='section-container flex flex-col items-center relative'>
        <Reveal className='text-center'>
          <p className='eyebrow'>{t.events.eyebrow}</p>
          <h2 className='section-title mt-3'>{t.events.title}</h2>
        </Reveal>
        <WhipFloral
          className=' -left-[30px] top-20 w-[140px] sm:w-[180px] z-10 md:left-48'
          spriteClassName='absolute -scale-x-100 rotate-[20deg] opacity-70'
          origin='left bottom'
          amps={[0.45, 1.65, 4.2]}
          duration={6}
          delays={[0.7, 1.06, 1.54]}
          midOrigin='50% 67%'
          tipOrigin='50% 33%'
        />
        <WhipFloral
          className=' -right-[30px] bottom-[832px] w-[140px] sm:w-[180px] z-10 md:right-32'
          spriteClassName='absolute -rotate-[20deg] opacity-70'
          origin='left bottom'
          amps={[0.45, 1.65, 4.2]}
          duration={6}
          delays={[0.7, 1.06, 1.54]}
          midOrigin='50% 67%'
          tipOrigin='50% 33%'
        />
        <img
          src='/images/decorations/leaf_background.webp'
          alt=''
          aria-hidden='true'
          className='animate-float-versa pointer-events-none absolute rotate-[150deg] -left-2 -bottom-32 z-20 w-28 opacity-90 md:left-48 sm:w-28'
        />
        <img
          src='/images/decorations/leaf_background.webp'
          alt=''
          aria-hidden='true'
          className='absolute right-8 -top-44 z-1 w-60 -rotate-45 opacity-10 sm:-right-10 sm:w-96 sm:-top-80'
        />

        <img
          src='/images/decorations/leaf_background.webp'
          alt=''
          aria-hidden='true'
          className='absolute left-4 -bottom-6 z-1 w-80 -rotate-20 opacity-10 sm:-left-20 sm:w-[460px] sm:-bottom-48'
        />
        <div className='mt-16 flex flex-col gap-8 justify-center items-center w-full md:max-w-[500px]'>
          {cards.map((event, i) => (
            <EventCard
              key={event.name}
              venue={event.venue}
              time={event.time}
              address={event.address}
              mapUrl={event.mapUrl}
              viewMap={t.events.viewMap}
              delay={i * 140}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
