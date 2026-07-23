/** A small brown botanical flourish used as a section ornament. */
export default function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={`text-taupe ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 20h38" />
      <path d="M116 20H78" />
      <path d="M42 20c6-8 12-8 18 0s12 8 18 0" />
      <path d="M60 12c-3-6-1-9 0-11 1 2 3 5 0 11Z" fill="currentColor" fillOpacity="0.35" />
      <circle cx="60" cy="20" r="1.6" fill="currentColor" />
      <path d="M30 20c-3-4-7-4-9-1M90 20c3-4 7-4 9-1" />
    </svg>
  );
}
