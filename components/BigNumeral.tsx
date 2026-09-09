export function BigNumeral({ n, className = "" }: { n: number | string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-jakarta font-bold leading-none select-none pointer-events-none ${className}`}
    >
      {typeof n === "number" ? String(n).padStart(2, "0") : n}
    </span>
  );
}
