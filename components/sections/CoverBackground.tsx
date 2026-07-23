import type { CSSProperties } from 'react';

/**
 * Ambient falling petals behind the cover. Each petal defines its own
 * horizontal position, size, tint, sway distance, fall duration and delay.
 */
type Petal = {
  left: number; // % from the left edge
  color: string;
  size: number; // px font-size (drives the svg's 1em box)
  sway: number; // px horizontal drift, consumed by the keyframes
  duration: number; // s
  delay: number; // s
};

const PETALS: Petal[] = [
  { left: 24.55, color: '#b89b78', size: 10.86, sway: 0.23, duration: 11.86, delay: 0 },
  { left: 41.24, color: '#e6d6c4', size: 18.05, sway: 19.54, duration: 8.44, delay: 0 },
  { left: 90.2, color: '#918077', size: 12.23, sway: 11.88, duration: 11.73, delay: 1.3 },
  { left: 31.28, color: '#918077', size: 22.12, sway: 12.45, duration: 12.25, delay: 2.05 },
  { left: 23.12, color: '#e6d6c4', size: 19.0, sway: -21.84, duration: 10.37, delay: 3.27 },
  { left: 11.33, color: '#e6d6c4', size: 14.87, sway: -16.78, duration: 9.12, delay: 4.22 },
  { left: 21.86, color: '#918077', size: 23.6, sway: -13.87, duration: 10.8, delay: 1.26 },
  { left: 82.98, color: '#918077', size: 19.44, sway: 13.01, duration: 8.68, delay: 2.72 },
  { left: 14.86, color: '#e6d6c4', size: 14.12, sway: -5.3, duration: 11.01, delay: 5.17 },
  { left: 63.67, color: '#e6d6c4', size: 21.32, sway: 3.41, duration: 10.03, delay: 6.63 },
  { left: 23.98, color: '#918077', size: 11.74, sway: 24.38, duration: 11.36, delay: 5.12 },
  { left: 39.41, color: '#b89b78', size: 14.79, sway: 10.13, duration: 9.08, delay: 4.91 },
];

export const CoverBackground = () => {
  return (
    <div
      className='-z-10 absolute inset-0 pointer-events-none overflow-hidden'
    >
      {PETALS.map((p, i) => (
        <div
          key={i}
          className='absolute'
          style={
            {
              left: `${p.left}%`,
              top: '-30px',
              bottom: 'auto',
              color: p.color,
              fontSize: `${p.size}px`,
              '--sway': `${p.sway}px`,
              animation: `ambient-fall ${p.duration}s ease-in-out ${p.delay}s infinite`,
            } as CSSProperties
          }
        >
          <svg viewBox='0 0 24 24' fill='currentColor' width='1em' height='1em'>
            <path d='M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z' />
          </svg>
        </div>
      ))}
    </div>
  );
};
