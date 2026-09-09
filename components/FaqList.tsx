export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-zinc-950/10">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-dm-sans font-medium text-lg text-zinc-950">
            {item.question}
            <span className="shrink-0 text-burnt-sienna transition-transform group-open:rotate-45 text-xl leading-none">
              +
            </span>
          </summary>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/75 mt-3">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
