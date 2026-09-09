import type { CSSProperties } from "react";

/**
 * Foundations before the engine: a triangle resting on stacked, widening bars —
 * built solid before anything runs on top of it.
 */
export function IconFoundations({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="76 140 360 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="96" y="430" width="320" height="26" rx="4" fill="currentColor" opacity="1" />
      <rect x="136" y="390" width="240" height="26" rx="4" fill="currentColor" opacity="0.7" />
      <rect x="176" y="350" width="160" height="26" rx="4" fill="currentColor" opacity="0.45" />
      <g transform="translate(112,110) scale(0.5)">
        <path
          d="M 392.4,281.2 L 209.6,386.7 Q 166.0,411.9 166.0,361.5 L 166.0,150.5 Q 166.0,100.1 209.6,125.3 L 392.4,230.8 Q 436.0,256.0 392.4,281.2 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
