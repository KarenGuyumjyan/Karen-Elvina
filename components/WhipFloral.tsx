// The floral image is split into three overlapping horizontal bands. Each band
// is a full copy of the image masked to its slice, then nested so the rotations
// accumulate toward the tip — giving the "whip" sway.
const MASK_BASE =
  "linear-gradient(to top, black 0%, black 26%, transparent 42%)";
const MASK_MID =
  "linear-gradient(to top, transparent 26%, black 38%, black 60%, transparent 74%)";
const MASK_TIP = "linear-gradient(to top, transparent 58%, black 74%, black 100%)";

const DEFAULT_LEAF_SRC = "/images/decorations/leaf_invitation.webp";

type Vars = {
  "--whip-amp": number;
  "--whip-dur": string;
  "--whip-delay": string;
};

function whipVars(amp: number, dur: number, delay: number): React.CSSProperties {
  return {
    "--whip-amp": amp,
    "--whip-dur": `${dur}s`,
    "--whip-delay": `${delay}s`,
  } as Vars as React.CSSProperties;
}

type WhipFloralProps = {
  /** Positioning + size utilities for the outer wrapper. */
  className?: string;
  /** Rotation / flip / opacity applied to the image itself. */
  spriteClassName?: string;
  /** Image source (defaults to the minimalism-brown floral). */
  src?: string;
  /** transform-origin of the whole sprig (its anchor point). */
  origin: string;
  /** Max sway in degrees for [base, mid, tip]. */
  amps: [number, number, number];
  /** Sway duration in seconds. */
  duration: number;
  /** Animation delay in seconds for [base, mid, tip]. */
  delays: [number, number, number];
  /** transform-origin for the mid and tip pivots. */
  midOrigin: string;
  tipOrigin: string;
};

export default function WhipFloral({
  className = "",
  spriteClassName = "",
  src = DEFAULT_LEAF_SRC,
  origin,
  amps,
  duration,
  delays,
  midOrigin,
  tipOrigin,
}: WhipFloralProps) {
  const overlay: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
  };

  return (
    <span
      aria-hidden="true"
      className={`whip pointer-events-none absolute block ${className}`}
      style={{ transformOrigin: origin, ...whipVars(amps[0], duration, delays[0]) }}
    >
      {/* base band */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`block h-auto w-full ${spriteClassName}`}
        style={{ WebkitMaskImage: MASK_BASE, maskImage: MASK_BASE }}
      />

      {/* mid band */}
      <span
        className="whip block"
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: midOrigin,
          ...whipVars(amps[1], duration, delays[1]),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className={spriteClassName}
          style={{ ...overlay, WebkitMaskImage: MASK_MID, maskImage: MASK_MID }}
        />

        {/* tip band */}
        <span
          className="whip block"
          style={{
            position: "absolute",
            inset: 0,
            transformOrigin: tipOrigin,
            ...whipVars(amps[2], duration, delays[2]),
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className={spriteClassName}
            style={{ ...overlay, WebkitMaskImage: MASK_TIP, maskImage: MASK_TIP }}
          />
        </span>
      </span>
    </span>
  );
}
