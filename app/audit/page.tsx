import type { Metadata } from "next";
import { Label } from "@/components/Label";
import { AuditForm } from "@/components/AuditForm";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Start with the audit",
  description:
    "A five-day paid marketing audit for B2B SaaS. €1,500 for startups, €2,500 for scaleups. One founder interview. What comes back tells you what to build first.",
  openGraph: {
    title: "Start with the MOLA Motion audit: five days, one conversation",
    description:
      "Paid marketing audit for B2B SaaS. €1,500 startup, €2,500 scaleup. What comes back decides what to build.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MOLA Motion marketing audit",
  provider: { "@type": "Organization", name: "MOLA Motion" },
  description:
    "A 5-day paid marketing audit for B2B SaaS companies. Assesses positioning, ICP, messaging, GTM, and website. Produces a strategic baseline note and a recommended scope for foundations.",
  offers: [
    { "@type": "Offer", name: "Startup audit", price: "1500", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Scaleup audit", price: "2500", priceCurrency: "EUR" },
  ],
};

const steps = [
  {
    label: "Step 1",
    text: "You fill in the form below. We confirm timing and send the interview prep questions, a short list to read before the conversation.",
  },
  {
    label: "Step 2",
    text: "The founder interview runs on day one. Five working days later, the strategic baseline note lands in your inbox.",
  },
  {
    label: "Step 3",
    text: "We schedule the presentation session. After that, you decide what to do next. No pressure. No retainer attached.",
  },
];

export default function Audit() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            Start with the audit.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            The audit is the first step of every MOLA Motion engagement. It runs in five working
            days. What comes back is a paid document, not a proposal, that tells you
            what&apos;s broken, what&apos;s solid, and what to build first.
          </p>
          <div className="mt-8">
            <Button href="#book" variant="primary">
              Book the audit →
            </Button>
          </div>
        </div>
      </section>

      {/* What you get — condensed, full breakdown lives on how-it-works */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">
            One founder interview. We run the rest in the background: competitor scan, search
            demand, and a teardown of what you already have. What comes back is a strategic
            baseline note, a build recommendation, and a presentation session to walk through it
            together.
          </p>
          <a
            href="/how-it-works#step-1"
            className="font-dm-sans text-[15px] text-burnt-sienna inline-block mt-4 hover:underline underline-offset-4"
          >
            See exactly what&apos;s in the audit, by tier →
          </a>
        </div>
      </section>

      {/* What happens after — 3-step mini timeline */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 text-center mb-12">
            What happens after.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-burnt-sienna text-burnt-sienna flex items-center justify-center font-space-mono text-xs shrink-0">
                    {i + 1}
                  </span>
                  <Label color="grey">{step.label}</Label>
                </div>
                <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
                  {step.text}
                </p>
                {i < steps.length - 1 && (
                  <Triangle className="hidden md:block absolute top-3 -right-6 w-4 h-4 text-burnt-sienna/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book the audit — form section */}
      <section id="book" className="bg-zinc-50 border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-xl px-6 py-20">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 text-center">
            Book the audit.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4 text-center">
            Fill in the form below. We&apos;ll confirm your start date within one working day.
          </p>
          <div className="mt-10">
            <AuditForm />
          </div>
          <p className="font-space-mono uppercase text-[10px] tracking-wider text-zinc-950/50 mt-6 text-center">
            The audit is invoiced upfront before work starts, payable by bank transfer.
            Five working days begin from payment confirmation.
          </p>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "What if I'm not sure which tier I am?",
            answer:
              "Fill in the form and describe your situation. If you're unsure, default to the startup audit (€1,500), it costs less and the assessment will tell us if your situation is closer to scaleup.",
          },
          {
            question: "How do I prepare for the interview?",
            answer:
              "We'll send four or five questions to read before the call. You don't need to prepare answers, just read them so the context is in your head. The interview is a conversation, not a presentation.",
          },
          {
            question: "Can I schedule the audit for a specific start date?",
            answer:
              "Yes. Mention the date you want to start in the form and we'll confirm whether it's available. Lead time is typically one to two weeks from enquiry to kickoff.",
          },
          {
            question: "What if I don't want to continue after the audit?",
            answer:
              "That's fine. The audit is a complete, self-contained deliverable. You own the strategic baseline note. You can use it to brief another agency, build the foundations yourself, or put it on the shelf. No obligation to continue.",
          },
        ]}
      />
    </>
  );
}
