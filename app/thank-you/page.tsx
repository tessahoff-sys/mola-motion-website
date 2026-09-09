import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";

export const metadata: Metadata = {
  title: "We've got it",
  description: "Your audit enquiry landed. We'll confirm your start date within one working day.",
};

const steps = [
  "You'll hear from us within one working day with a confirmed start date and a Stripe payment link.",
  "Once payment is confirmed, we'll send the interview prep questions and schedule the founder interview.",
  "Five working days from kickoff, the strategic baseline note lands in your inbox.",
];

export default function ThankYou() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
          We&apos;ve got it.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
          Your audit enquiry landed. We&apos;ll confirm your start date within one working day.
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
          <Button href="/blog" variant="text-sienna">
            While you wait, read the blog →
          </Button>
        </div>
      </div>
    </section>
  );
}
