'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Flourish from '@/components/Flourish';
import { wedding } from '@/lib/data';
import { useLang, useT } from '@/lib/i18n';

type Attendance = 'yes' | 'no';
type Side = 'groom' | 'bride';
type PartKey = 'groomHouse' | 'brideHouse' | 'church' | 'restaurant';

const ENDPOINT = process.env.NEXT_PUBLIC_RSVP_ENDPOINT;

export default function Rsvp() {
  const t = useT();
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [attendance, setAttendance] = useState<Attendance>('yes');
  const [side, setSide] = useState<Side>('groom');
  const [parts, setParts] = useState<PartKey[]>([]);
  const [partsError, setPartsError] = useState(false);

  // Stable keys + localized labels, so a language switch keeps the selection.
  const sideOptions: { key: Side; label: string }[] = [
    { key: 'groom', label: t.names.groom },
    { key: 'bride', label: t.names.bride },
  ];
  const partOptions: { key: PartKey; label: string }[] = [
    { key: 'groomHouse', label: t.rsvp.partGroomHouse },
    { key: 'brideHouse', label: t.rsvp.partBrideHouse },
    { key: 'church', label: t.rsvp.partChurch },
    { key: 'restaurant', label: t.rsvp.partRestaurant },
  ];

  function togglePart(part: PartKey) {
    setPartsError(false);
    setParts((current) =>
      current.includes(part)
        ? current.filter((p) => p !== part)
        : [...current, part],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // At least one part is required when attending.
    if (attendance === 'yes' && parts.length === 0) {
      setPartsError(true);
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // `side` is a stable key (groom/bride) used to route to the right sheet,
    // independent of the display name's language.
    const payload = { ...data, side, lang, submittedAt: new Date().toISOString() };

    setSubmitting(true);
    setError(false);
    try {
      if (!ENDPOINT) throw new Error('RSVP endpoint is not configured');
      // Google Apps Script web app: text/plain avoids a CORS preflight, and
      // no-cors keeps its redirect from being read as a (false) failure.
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass =
    'w-full border-b border-taupe bg-transparent px-1 py-2 font-serif text-lg text-espresso placeholder:text-mocha/60 focus:border-cocoa focus:outline-none';
  const optionClass = (active: boolean) =>
    `flex-1 border px-4 py-3 font-sans text-xs uppercase tracking-widest transition-colors ${
      active
        ? 'border-cocoa bg-cocoa text-cream'
        : 'border-taupe text-cocoa hover:bg-taupe/20'
    }`;

  return (
    <section id='rsvp' className='bg-sand py-16 md:py-24 font-black'>
      <div className='section-container max-w-2xl'>
        <Reveal className='text-center'>
          <p className='eyebrow'>{t.rsvp.eyebrow}</p>
          <h2 className='section-title mt-3'>{t.rsvp.title}</h2>
          <Flourish className='mx-auto mt-10 h-8 w-40 animate-float' />
          <p className='mx-auto mt-6 max-w-md font-serif text-lg font-light text-espresso/80'>
            {t.rsvp.deadline}
          </p>
        </Reveal>

        <Reveal delay={120} className='mt-12'>
          {submitted ? (
            <div className='rounded-lg border border-taupe/50 bg-cream p-10 text-center'>
              <p className='font-script text-4xl text-cocoa'>
                {t.rsvp.thankTitle}
              </p>
              <p className='mt-4 font-serif text-lg font-light text-espresso/80'>
                {attendance === 'yes' ? t.rsvp.thankText : t.rsvp.rejectText}
              </p>
              <p className='mt-6 font-sans text-xs uppercase tracking-widest text-mocha'>
                {wedding.hashtag}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div>
                <label htmlFor='name' className='eyebrow'>
                  {t.rsvp.fullName}
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  placeholder={t.rsvp.namePlaceholder}
                  className={`mt-2 ${fieldClass}`}
                />
              </div>

              <fieldset>
                <legend className='eyebrow'>{t.rsvp.guestOf}</legend>
                <div className='mt-3 flex gap-4'>
                  {sideOptions.map((opt) => (
                    <button
                      type='button'
                      key={opt.key}
                      onClick={() => setSide(opt.key)}
                      className={optionClass(side === opt.key)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <input
                  type='hidden'
                  name='guestOf'
                  value={side === 'groom' ? t.names.groom : t.names.bride}
                />
              </fieldset>

              <fieldset>
                <legend className='eyebrow'>{t.rsvp.attend}</legend>
                <div className='mt-3 flex gap-4'>
                  {(['yes', 'no'] as Attendance[]).map((opt) => (
                    <button
                      type='button'
                      key={opt}
                      onClick={() => setAttendance(opt)}
                      className={optionClass(attendance === opt)}
                    >
                      {opt === 'yes' ? t.rsvp.accept : t.rsvp.decline}
                    </button>
                  ))}
                </div>
                <input type='hidden' name='attendance' value={attendance} />
              </fieldset>

              {attendance === 'yes' && (
                <>
                  <fieldset>
                    <legend className='eyebrow'>
                      {t.rsvp.parts} <span className='text-red-700'>*</span>
                    </legend>
                    <p className='mt-1 font-sans text-[0.7rem] text-mocha/80'>
                      {t.rsvp.partsHint}
                    </p>
                    <div className='mt-3 flex flex-col gap-3'>
                      {partOptions.map((opt) => {
                        const active = parts.includes(opt.key);
                        return (
                          <button
                            type='button'
                            key={opt.key}
                            role='checkbox'
                            aria-checked={active}
                            onClick={() => togglePart(opt.key)}
                            className={`flex items-center gap-3 border px-4 py-3 text-left font-sans text-xs uppercase tracking-widest transition-colors ${
                              active
                                ? 'border-cocoa bg-cocoa/10 text-cocoa'
                                : 'border-taupe text-cocoa hover:bg-taupe/20'
                            }`}
                          >
                            <span
                              aria-hidden='true'
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                                active
                                  ? 'border-cocoa bg-cocoa text-cream'
                                  : 'border-taupe bg-transparent'
                              }`}
                            >
                              {active && (
                                <svg
                                  viewBox='0 0 24 24'
                                  className='h-3.5 w-3.5'
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M5 13l4 4L19 7'
                                  />
                                </svg>
                              )}
                            </span>
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                    {partsError && (
                      <p className='mt-2 font-sans text-[0.7rem] uppercase tracking-widest text-red-700'>
                        {t.rsvp.partsRequired}
                      </p>
                    )}
                    <input
                      type='hidden'
                      name='participation'
                      value={parts
                        .map(
                          (key) =>
                            partOptions.find((o) => o.key === key)?.label ??
                            key,
                        )
                        .join(', ')}
                    />
                  </fieldset>
                  <div>
                    <label htmlFor='guests' className='eyebrow'>
                      {t.rsvp.guests}
                    </label>
                    <input
                      id='guests'
                      name='guests'
                      type='number'
                      min={1}
                      max={10}
                      defaultValue={1}
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='eyebrow'>
                      {t.rsvp.note}
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={3}
                      placeholder={t.rsvp.notePlaceholder}
                      className={`mt-2 resize-none ${fieldClass}`}
                    />
                  </div>
                </>
              )}

              {error && (
                <p className='text-center font-sans text-xs uppercase tracking-widest text-red-700'>
                  {t.rsvp.error}
                </p>
              )}

              <button
                type='submit'
                disabled={submitting}
                className='w-full bg-cocoa py-4 font-sans text-xs uppercase tracking-widest text-cream transition-colors hover:bg-espresso disabled:cursor-not-allowed disabled:opacity-60'
              >
                {submitting ? t.rsvp.sending : t.rsvp.send}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
