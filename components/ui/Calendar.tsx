'use client';

import { useT } from '@/lib/i18n';

// Fixed September 2026 grid (Monday-first). Sep 1, 2026 falls on a Tuesday,
// so the month opens with one blank cell. `null` = empty cell.
const DAYS: (number | null)[] = [
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  null,
  null,
  null,
  null,
];

const SELECTED = 5;

/** Static wedding-date calendar — September 2026, the 5th marked with a heart. */
export default function Calendar() {
  const t = useT();
  return (
    <div className='mx-auto w-full max-w-md rounded-3xl bg-[#6f6155] p-6 text-cream shadow-xl sm:p-8'>
      <p className='text-center font-script text-3xl text-sand md:text-4xl'>
        {t.calendarTitle}
      </p>

      <div className='mt-6 grid grid-cols-7 text-center'>
        {t.weekdays.map((d) => (
          <span
            key={d}
            className='pb-3 font-sans text-xs uppercase tracking-widest text-sand'
          >
            {d}
          </span>
        ))}
      </div>

      <div className='h-px w-full bg-cream/25' />

      <div className='mt-3 grid grid-cols-7 gap-y-2 text-center'>
        {DAYS.map((day, i) =>
          day === null ? (
            <span key={`b${i}`} aria-hidden='true' />
          ) : day === SELECTED ? (
            <span
              key={day}
              className='relative mx-auto flex h-11 w-11 items-center justify-center animate-heartbeat'
              aria-current='date'
            >
              <svg
                viewBox='0 0 24 24'
                className='absolute inset-0 h-full w-full text-milk drop-shadow top-0'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M12 20.8c-.2 0-.4-.07-.56-.2C6.24 16.04 3 13.05 3 8.97 3 6.24 5.18 4 7.87 4c1.64 0 3.2.8 4.13 2.1C12.93 4.8 14.49 4 16.13 4 18.82 4 21 6.24 21 8.97c0 4.08-3.24 7.07-8.44 11.63-.16.13-.36.2-.56.2z' />
              </svg>
              <span className='relative z-10 font-script text-base text-espresso font-extrabold'>
                {day}
              </span>
              <span className='absolute top-2 right-1 bg-espresso w-2.5 h-2.5 rounded-full border border-white animate-ping'></span>
            </span>
          ) : (
            <span
              key={day}
              className='flex h-11 items-center justify-center font-serif text-lg text-milk'
            >
              {day}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
