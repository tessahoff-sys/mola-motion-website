import { Label } from "@/components/Label";
import { Triangle } from "@/components/Triangle";

/**
 * A single company-stage line shared by both pricing tiers, with a marker showing
 * where each tier sits on it. Ties the two "who this is for" columns to one continuum
 * instead of reading as two unrelated blurbs.
 */
export function StageMarker({
  position,
  startLabel,
  endLabel,
  className = "",
}: {
  /** 0–1 position along the line. */
  position: number;
  startLabel: string;
  endLabel: string;
  className?: string;
}) {
  const pct = Math.min(100, Math.max(0, position * 100));
  return (
    <div className={className}>
      <div className="relative h-px bg-zinc-950/15 mt-1">
        <Triangle
          className="absolute top-1/2 w-3 h-3 text-burnt-sienna"
          style={{ left: `${pct}%`, transform: "translate(-50%, -50%) rotate(-90deg)" }}
        />
      </div>
      <div className="flex justify-between mt-3">
        <Label color="grey">{startLabel}</Label>
        <Label color="grey">{endLabel}</Label>
      </div>
    </div>
  );
}
