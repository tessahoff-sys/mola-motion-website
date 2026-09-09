import type { CSSProperties } from "react";

export function Triangle({
  className = "",
  style,
  outline = false,
}: {
  className?: string;
  style?: CSSProperties;
  /** Stroke-only variant — for pairing a filled and an unfilled triangle in the same icon. */
  outline?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M 392.4,281.2 L 209.6,386.7 Q 166.0,411.9 166.0,361.5 L 166.0,150.5 Q 166.0,100.1 209.6,125.3 L 392.4,230.8 Q 436.0,256.0 392.4,281.2 Z"
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : "none"}
        strokeWidth={outline ? 24 : 0}
        strokeLinejoin="round"
      />
    </svg>
  );
}
