import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost-dark" | "ghost-light" | "text-sienna";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  // Sienna 400 fill, Zinc 950 text — the only primary button treatment.
  primary:
    "inline-flex items-center justify-center gap-2 bg-sienna-400 text-zinc-950 px-6 py-3 hover:bg-sienna-400/90 transition-colors",
  // Ghost button, white border — for dark hero/CTA backgrounds.
  "ghost-dark":
    "inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 hover:bg-white/10 transition-colors",
  // Ghost button, zinc border — for light backgrounds (e.g. cookie banner reject).
  "ghost-light":
    "inline-flex items-center justify-center gap-2 border border-zinc-950 text-zinc-950 px-6 py-3 hover:bg-zinc-950/5 transition-colors",
  // Plain text link, Sienna accent — secondary in-copy links ("See what each tier includes →").
  "text-sienna":
    "inline-flex items-center gap-1 text-sienna-400 hover:underline underline-offset-4",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  const base =
    variant === "text-sienna"
      ? "font-dm-sans text-[15px]"
      : "font-jakarta font-bold uppercase text-sm tracking-wide";

  return (
    <Link href={href} className={`${base} ${VARIANT_CLASSES[variant]} ${className}`}>
      {children}
    </Link>
  );
}
