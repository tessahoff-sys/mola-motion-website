import { Label } from "./Label";
import { Triangle } from "./Triangle";

export function DetailBox({
  title,
  meta,
  items,
  output,
  optional,
}: {
  title: string;
  meta?: string;
  items: string[];
  /** The deliverable that comes out of this step — rendered as a standout block, not a bullet. */
  output?: string;
  /** An optional add-on, priced separately — rendered as a muted aside, not a bullet. */
  optional?: string;
}) {
  return (
    <div className="relative bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-zinc-950/10 p-6 md:p-8 pt-7">
      <div className="absolute top-0 left-0 h-1 w-12 bg-burnt-sienna" />
      <Label color="sienna">{title}</Label>
      {meta && (
        <p className="font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/50 mt-2">
          {meta}
        </p>
      )}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85 flex gap-2">
            <span className="text-burnt-sienna shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {output && (
        <div className="mt-5 bg-zinc-50 border border-burnt-sienna/25 p-4 flex gap-3 items-start">
          <Triangle className="w-3.5 h-3.5 text-burnt-sienna shrink-0 mt-1" />
          <div>
            <Label color="sienna" className="block">
              Output
            </Label>
            <p className="font-dm-sans font-medium text-[15px] leading-relaxed text-zinc-950 mt-1">
              {output}
            </p>
          </div>
        </div>
      )}
      {optional && (
        <div className="mt-5 border border-dashed border-zinc-950/20 p-4">
          <Label color="grey" className="block">
            Optional add-on
          </Label>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/70 mt-1">
            {optional}
          </p>
        </div>
      )}
    </div>
  );
}
