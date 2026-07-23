'use client';

import { useEffect, useRef, useState } from 'react';

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const el = new Audio(
      'https://uinvite.am/templates/032/assets/bg-music.mp3',
    );
    el.loop = true;
    el.volume = 0.6;
    el.muted = true; // muted autoplay IS permitted; sound turns on at first gesture
    el.addEventListener('error', () => setAvailable(false));
    audioRef.current = el;

    const gestures = ['pointerdown', 'keydown', 'touchstart'] as const;

    const unlock = (event: Event) => {
      // The toggle button manages its own clicks — skip it here so the same
      // click isn't handled twice (which caused the play()/pause() crash).
      const target = event.target as Node | null;
      if (buttonRef.current && target && buttonRef.current.contains(target)) {
        return;
      }
      el.muted = false;
      if (el.paused) void el.play().catch(() => {});
      setPlaying(true);
      gestures.forEach((e) => window.removeEventListener(e, unlock));
    };

    // Begin immediately (muted). Becomes audible on the first interaction.
    void el.play().catch(() => {});
    gestures.forEach((e) => window.addEventListener(e, unlock));

    return () => {
      gestures.forEach((e) => window.removeEventListener(e, unlock));
      el.pause();
      audioRef.current = null;
    };
  }, []);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    el.muted = false;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      if (el.paused) void el.play().catch(() => {});
      setPlaying(true);
    }
  }

  if (!available) return null;

  return (
    <button
      ref={buttonRef}
      type='button'
      onClick={toggle}
      aria-label={playing ? 'Pause' : 'Play'}
      aria-pressed={playing}
      className='fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center
        rounded-full border border-gold/50 bg-ink/80 text-gold backdrop-blur
        transition-all duration-300 hover:bg-gold hover:text-ink
        focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70'
    >
      <span
        className={`text-lg ${playing ? 'animate-slow-spin' : ''}`}
        aria-hidden
      >
        {playing ? '♫' : '⏸'}
      </span>
    </button>
  );
}
