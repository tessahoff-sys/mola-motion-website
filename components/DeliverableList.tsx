export type Deliverable = { title: string; description: string };

export function DeliverableList({ items }: { items: Deliverable[] }) {
  return (
    <ol className="flex flex-col gap-6 relative">
      {items.length > 1 && (
        <div className="absolute left-[13px] top-7 bottom-7 w-px bg-burnt-sienna/25" aria-hidden="true" />
      )}
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-4 relative">
          <span className="relative z-10 shrink-0 w-7 h-7 rounded-full border border-burnt-sienna text-burnt-sienna bg-white flex items-center justify-center font-space-mono text-[11px]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="pt-0.5">
            <h3 className="font-dm-sans font-semibold text-base text-zinc-950">{item.title}</h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/75 mt-1">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
