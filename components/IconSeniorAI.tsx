import type { CSSProperties } from "react";

/**
 * Senior judgment, AI production: one solid triangle (the human call) with a lighter
 * outlined triangle behind it (the agents multiplying the output).
 */
export function IconSeniorAI({
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
      <g transform="translate(216,172) scale(0.5)" opacity="0.5">
        <path
          d="M 392.4,281.2 L 209.6,386.7 Q 166.0,411.9 166.0,361.5 L 166.0,150.5 Q 166.0,100.1 209.6,125.3 L 392.4,230.8 Q 436.0,256.0 392.4,281.2 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="22"
          strokeLinejoin="round"
        />
      </g>
      <g transform="translate(-16,64) scale(0.75)">
        <path
          d="M 392.4,281.2 L 209.6,386.7 Q 166.0,411.9 166.0,361.5 L 166.0,150.5 Q 166.0,100.1 209.6,125.3 L 392.4,230.8 Q 436.0,256.0 392.4,281.2 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
