import React from 'react';

export default function ShineButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button onClick={onClick} className='mt-8 relative overflow-hidden rounded-full bg-espresso px-12 py-3 font-medium text-white text-xl shadow-lg transition-all duration-300 hover:bg-ink hover:shadow-ink/25 active:scale-95'>
      <span className='relative z-10'>{text}</span>

      <span className='absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/25 to-transparent'></span>
    </button>
  );
}
