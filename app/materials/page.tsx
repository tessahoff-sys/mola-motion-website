import type { Metadata } from "next";
import { Label } from "@/components/Label";
import { MaterialsFlow } from "@/components/MaterialsFlow";

/**
 * Unlisted page — not in NAV_ITEMS or FOOTER_NAV_ITEMS, and noindexed below.
 * One reusable link, shared directly with a client when materials are needed
 * (audit kickoff, foundations sprint, anything else). Not tied to a specific
 * client — files land in one inbox folder and get sorted after.
 */
export const metadata: Metadata = {
  title: "Send your materials",
  robots: { index: false, follow: false },
};

export default function Materials() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-xl px-6 pt-28 pb-16 text-center">
          <Label color="sienna">Materials</Label>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 mt-3">
            Send your materials.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            No account needed on your end. Three quick things below, then drop the files in and
            we&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <MaterialsFlow />
        </div>
      </section>
    </>
  );
}
