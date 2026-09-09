import { Triangle } from "./Triangle";

export function PullQuote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={`relative pl-8 ${className}`}>
      <Triangle className="absolute left-0 top-1.5 w-4 h-4 text-burnt-sienna" />
      <p className="font-dm-sans font-medium text-xl md:text-2xl leading-snug text-zinc-950">
        {children}
      </p>
    </blockquote>
  );
}
