'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { wedding } from '@/lib/data';
import { useT } from '@/lib/i18n';

/** Section 6 — Photo Gallery */
export default function Gallery() {
  const t = useT();
  return (
    <section id='gallery' className='bg-sand py-16 md:py-24'>
      <div className='section-container relative'>
        <Reveal className='text-center'>
          <p className='eyebrow'>{t.gallery.eyebrow}</p>
          <h2 className='section-title mt-3'>{t.gallery.title}</h2>
        </Reveal>

        <div className='mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4'>
          {wedding.gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 3) * 100}
              className={`group relative overflow-hidden rounded-md z-10 ${
                i % 5 === 0
                  ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-2'
                  : ''
              }`}
            >
              <div
                className={`relative w-full ${
                  i % 5 === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={`Wedding moment ${i + 1}`}
                  fill
                  sizes='(max-width: 768px) 50vw, 33vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/15' />
              </div>
            </Reveal>
          ))}
        </div>
        <img
          src='/images/decorations/leaf_background.webp'
          alt=''
          aria-hidden='true'
          className='absolute -left-20 -top-40 z-0 w-60 rotate-12 opacity-15 sm:top-4 sm:-left-96 sm:w-[500px]'
        />
      </div>
    </section>
  );
}
