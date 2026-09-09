import { Label } from "./Label";
import { FaqList, type FaqItem } from "./FaqList";

export type { FaqItem };

export function Faq({ items, id }: { items: FaqItem[]; id?: string }) {
  return (
    <section id={id} className="bg-white scroll-mt-48">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Label color="grey">FAQ</Label>
        <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}
