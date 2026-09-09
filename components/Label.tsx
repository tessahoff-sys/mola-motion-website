import type { ReactNode } from "react";

const COLOR_CLASSES = {
  sienna: "text-burnt-sienna",
  grey: "text-zinc-950/50",
  white: "text-white/60",
} as const;

export function Label({
  children,
  color = "sienna",
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof COLOR_CLASSES;
  className?: string;
}) {
  return (
    <span
      className={`font-space-mono uppercase text-[11px] tracking-wider ${COLOR_CLASSES[color]} ${className}`}
    >
      {children}
    </span>
  );
}
