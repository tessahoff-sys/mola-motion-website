import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers to common questions about MOLA Motion: the audit, the model, pricing, and how this compares to a fractional CMO or agency.",
  openGraph: {
    title: "MOLA Motion FAQ: the audit, pricing, and how the model works",
    description: "Answers to the most common questions about working with MOLA Motion.",
    type: "website",
  },
};

const groups: { category: string; items: FaqItem[] }[] = [
  {
    category: "About the model",
    items: [
      {
        question: "What is MOLA Motion?",
        answer:
          "MOLA Motion is a marketing production agency for B2B SaaS companies at two stages: founders with 1–2 customers building toward Series A, and scaleups at €1–10M ARR without a full marketing team. Every engagement starts with a paid audit that assesses positioning, ICP, messaging, GTM, website, and sales enablement, then recommends what to build first.",
      },
      {
        question: "What does “marketing production agency” mean?",
        answer:
          "It means the work gets built, not just planned. Unlike a consulting engagement that ends with a strategy document, MOLA Motion produces the deliverables (positioning statement, messaging architecture, website, content) and runs the ongoing subscription that keeps production moving each month.",
      },
      {
        question: "How is this different from an AI marketing agency?",
        answer:
          "Most AI marketing agencies use AI to produce content at volume. MOLA Motion uses AI agents for production, but the judgment behind that production (what to position, what to say, where to distribute) stays with a senior marketer with 20+ years in B2B SaaS. The AI is a force multiplier on judgment, not a substitute for it.",
      },
    ],
  },
  {
    category: "About the audit",
    items: [
      {
        question: "Why does the engagement start with a paid audit?",
        answer:
          "Because most founders at this stage don't know exactly what marketing they need, and any agency that tells them what to buy without a diagnostic is selling something, not diagnosing something. The audit is a self-contained, paid piece of work. What it produces has value regardless of whether you continue.",
      },
      {
        question: "What happens during the five days of the audit?",
        answer:
          "Day one is the founder interview. Days two through four are research and analysis: competitor scan, search demand pull, teardown of existing materials. Day five is drafting and synthesis. The strategic baseline note is delivered on day five, and a presentation session is scheduled for the following week.",
      },
      {
        question: "Can I run just the audit?",
        answer:
          "Yes. The audit is a complete deliverable. You can use the output to brief another agency, build the foundations yourself, or do nothing with it. Most clients continue because the recommendation is specific, but you're not committed to anything beyond the audit until you decide to be.",
      },
    ],
  },
  {
    category: "Comparing alternatives",
    items: [
      {
        question: "How is this different from a fractional CMO?",
        answer:
          "A fractional CMO is typically engaged for a minimum of two to three days per week at €5,000–15,000 per month. That's appropriate for companies past the point where a foundations-first model applies. MOLA Motion is structured for companies that need foundations built before they need leadership in place.",
      },
      {
        question: "How is this different from a traditional agency?",
        answer:
          "Traditional agencies sell retainers. The strategy gets figured out on your dime after you've signed. The audit-first model means the scope is decided before the engagement starts, you're not paying for an agency to work out what you need while billing you for the hours.",
      },
      {
        question: "How is this different from hiring a freelancer on Toptal or Growth Collective?",
        answer:
          "A freelancer gives you a specific pair of hands. There's no strategic view of what to build or in what order. MOLA Motion provides the strategic layer (what to build, in what order, from what foundations) and the production layer (building it).",
      },
      {
        question: "How is this different from April Dunford's positioning consulting?",
        answer:
          "April Dunford does positioning work: methodology-based, project-scoped, no execution layer. MOLA Motion does positioning work and then builds the execution layer from it: the messaging architecture, the website, the content, the subscription. The engagement doesn't end with a positioning document.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "What's the total investment for a startup engagement?",
        answer:
          "Audit: €1,500. Foundations Sprint: €2,500. Subscription at €1,500/month for a minimum three months: €4,500. Total over four to five months: €8,500. That's the full path from diagnostic to live engine.",
      },
      {
        question: "Why do you publish pricing?",
        answer:
          "Because hiding pricing is a sales tactic. Founders at this stage are evaluating whether they can afford to engage, making them book a call to find out the price wastes their time and signals that the pricing is either embarrassing or negotiable. It isn't either.",
      },
    ],
  },
  {
    category: "Working with MOLA Motion",
    items: [
      {
        question: "How many clients does MOLA Motion work with at a time?",
        answer:
          "A small number: enough to give each engagement senior attention. The model relies on one senior marketer running strategy on every engagement, which caps capacity at a number that protects quality.",
      },
      {
        question: "What do I need to have in place before starting?",
        answer:
          "A product that exists and at least one paying customer (or a very strong reason you're the right stage for a startup audit). The audit can work with minimal materials. What it needs is a conversation with you.",
      },
      {
        question: "What if the audit recommends foundations I can't afford yet?",
        answer:
          "The audit's job is to recommend what to build. Not to sell the next phase. If the full foundations scope isn't the right investment at this moment, the audit will tell you what the highest-priority single thing is and you can start there.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            Frequently asked questions.
          </h1>
        </div>
      </section>

      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-3xl px-6 pb-20 flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-2">
                <Triangle className="w-2.5 h-2.5 text-burnt-sienna" />
                <Label color="sienna">{group.category}</Label>
              </div>
              <div className="mt-2">
                <FaqList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href={CTA_PRIMARY.href} variant="primary">
            {CTA_PRIMARY.label} →
          </Button>
          <Button href="/pricing" variant="text-sienna">
            See what&apos;s included →
          </Button>
        </div>
      </section>
    </>
  );
}
