'use client';
import Reveal from '@/components/Reveal';

import { useEffect, useState } from 'react';
import Flourish from '@/components/Flourish';
import { wedding } from '@/lib/data';
import { useT } from '@/lib/i18n';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

/** Section 4 — Save the Date / Countdown */
export default function Countdown() {
  const t = useT();
  const target = new Date(wedding.dateISO).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: { label: string; value: number }[] = [
    { label: t.countdown.days, value: time?.days ?? 0 },
    { label: t.countdown.hours, value: time?.hours ?? 0 },
    { label: t.countdown.minutes, value: time?.minutes ?? 0 },
    { label: t.countdown.seconds, value: time?.seconds ?? 0 },
  ];

  return (
    <section
      id='countdown'
      className='relative bg-espresso py-16 text-cream md:pb-24'
    >
      <img
        src='/images/decorations/house_background.webp'
        alt=''
        aria-hidden='true'
        className='absolute left-0 z-1 w-full opacity-10 md:-left-10 md:-bottom-2/4'
      />
      <Reveal>
        <div className='section-container text-center'>
          <p className='font-sans text-xs uppercase tracking-widest text-taupe'>
            {t.countdown.eyebrow}
          </p>
          <h2 className='mt-3 font-script text-5xl text-cream md:text-6xl'>
            {t.countdown.title}
          </h2>
          <Flourish className='mx-auto mt-6 h-6 w-32 text-taupe' />

          <div className='mx-auto mt-14 grid max-w-2xl grid-cols-4 gap-3 md:gap-6'>
            {units.map((u) => (
              <div
                key={u.label}
                className='rounded-lg border border-taupe/30 bg-white/5 px-2 py-6 backdrop-blur-sm md:py-8'
              >
                <div className='font-serif text-3xl tabular-nums md:text-5xl'>
                  {u.value.toString().padStart(2, '0')}
                </div>
                <div className='mt-2 font-sans text-[0.65rem] uppercase tracking-widest text-taupe md:text-xs'>
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          <p className='mt-12 font-serif text-xl font-light text-cream/90'>
            {t.dateLabel}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
