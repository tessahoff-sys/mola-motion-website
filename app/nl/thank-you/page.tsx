import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Binnen",
  description: "Je auditaanvraag is binnen. We bevestigen je startdatum binnen één werkdag.",
  alternates: {
    languages: {
      en: `${SITE_URL}/thank-you`,
      nl: `${SITE_URL}/nl/thank-you`,
    },
  },
};

const steps = [
  "Je hoort binnen één werkdag van ons met een bevestigde startdatum en een betaallink.",
  "Zodra de betaling bevestigd is, sturen we de voorbereidende interviewvragen en plannen we het founder-interview.",
  "Vijf werkdagen na de start landt de strategische baseline note in je inbox.",
];

export default function ThankYouNL() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
          Binnen.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
          Je auditaanvraag is binnen. We bevestigen je startdatum binnen één werkdag.
        </p>

        <div className="text-left mt-14 flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={step} className="flex gap-4">
              <Label color="sienna" className="shrink-0">{i + 1}.</Label>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Button href="/nl/blog" variant="text-sienna">
            Lees in de tussentijd de blog →
          </Button>
        </div>
      </div>
    </section>
  );
}
