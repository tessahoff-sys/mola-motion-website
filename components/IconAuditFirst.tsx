import type { CSSProperties } from "react";

/**
 * Audit-first: a triangle held inside a magnifying glass — assessment before commitment.
 * Shares the exact triangle path used across the brand (see Triangle.tsx) for consistency.
 */
export function IconAuditFirst({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="220" cy="220" r="150" stroke="currentColor" strokeWidth="28" />
      <line
        x1="326"
        y1="326"
        x2="430"
        y2="430"
        stroke="currentColor"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <g transform="translate(61.6,79.2) scale(0.55)">
        <path
          d="M 392.4,281.2 L 209.6,386.7 Q 166.0,411.9 166.0,361.5 L 166.0,150.5 Q 166.0,100.1 209.6,125.3 L 392.4,230.8 Q 436.0,256.0 392.4,281.2 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
