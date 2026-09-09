import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { BigNumeral } from "@/components/BigNumeral";

export const metadata: Metadata = {
  title: "How MOLA Motion works: audit, foundations, subscription",
  description:
    "Every engagement starts with a 5-day paid audit. Then foundations. Then the subscription. Here's exactly how each step works and what you get.",
  openGraph: {
    title: "How MOLA Motion works: the three-step model",
    description:
      "Audit first. Foundations next. Then the subscription runs. Here's exactly how each step works.",
    type: "website",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How MOLA Motion works",
  description: "Three-step model: paid audit, foundations build, ongoing subscription.",
  step: [
    {
      "@type": "HowToStep",
      name: "The audit",
      text: "A 5-day paid diagnostic assessing positioning, ICP, messaging, GTM, and website.",
    },
    {
      "@type": "HowToStep",
      name: "The foundations",
      text: "Positioning, ICP, messaging, GTM, and website built in the right order.",
    },
    {
      "@type": "HowToStep",
      name: "The subscription",
      text: "Ongoing content, SEO, competitor monitoring, and strategy.",
    },
  ],
};

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            How it works.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            Most marketing engagements start with the agency deciding what you need. This one
            starts with a paid diagnostic that finds out. Here&apos;s how the model works, in
            three steps, in order.
          </p>
        </div>
      </section>

      {/* Step 1: The audit — text left, detail right */}
      <section id="step-1" className="relative bg-white border-t border-zinc-950/10 overflow-hidden scroll-mt-48">
        <BigNumeral n={1} className="absolute -top-6 left-0 text-[10rem] text-zinc-950/[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="grey">Step 01</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">The audit.</h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              The audit is the first and only commitment you make before anything else is
              decided.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              It runs in five working days, starting with one founder interview. We do the rest:{" "}
              <span className="font-semibold text-zinc-950">
                figure out who you should be selling to, what you should say and why it&apos;s
                different, and where you should be showing up to find customers.
              </span>{" "}
              You&apos;ll see those written up using the shorthand we use internally, ICP,
              positioning, GTM, in the breakdown on the right.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              What comes back tells you where your foundations stand, what&apos;s broken,
              what&apos;s solid, and what to build first. A paid recommendation. Not a proposal.
              Not a scope for a retainer you&apos;re already being sold.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <DetailBox
              title="Startup audit · €1,500"
              meta="5 working days"
              items={[
                "1 founder interview",
                "Competitor scan + search demand pull",
                "Teardown of existing website and materials",
              ]}
              output="A strategic baseline note covering ICP hypothesis, positioning, narrative, voice and messaging, and GTM approach, plus a build recommendation and a presentation session"
            />
            <DetailBox
              title="Scaleup audit · €2,500"
              meta="5 working days"
              items={[
                "1 founder interview + up to 5 customer interviews",
                "Competitor scan + search demand pull",
                "Teardown of existing website and materials",
              ]}
              output="A full audit document covering ICP, positioning, narrative, voice and messaging, GTM, and sales practices, plus a build recommendation and a presentation session"
            />
          </div>
        </div>
      </section>

      {/* Step 2: The foundations — detail left, text right */}
      <section className="relative bg-zinc-50 border-t border-zinc-950/10 overflow-hidden">
        <BigNumeral n={2} className="absolute -top-6 right-0 text-[10rem] text-zinc-950/[0.05]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="bg-white p-6 md:p-8">
              <Label color="sienna">Startup tier</Label>
              <p className="font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/50 mt-2">
                Single two-week co-built sprint
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "ICP definition",
                  "Positioning hypothesis",
                  "GTM hypothesis",
                  "Voice note",
                  "Messaging starter",
                  "Website brief and build",
                  "Content starter pack",
                ].map((item) => (
                  <li key={item} className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85 flex gap-2">
                    <span className="text-burnt-sienna shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8">
              <Label color="sienna">Scaleup tier</Label>
              <p className="font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/50 mt-2">
                Separate deliverables, scoped by the audit
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "ICP definition and validation",
                  "Market research and competitor analysis",
                  "Positioning and narrative",
                  "GTM motion design (if needed)",
                  "Voice note",
                  "Messaging architecture",
                  "Website messaging brief",
                  "Sales enablement materials",
                ].map((item) => (
                  <li key={item} className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85 flex gap-2">
                    <span className="text-burnt-sienna shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Label color="grey">Step 02</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">
              The foundations.
            </h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              The audit gives you the recommendation. The foundations build it.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Positioning before messaging. ICP before content. GTM before subscription.{" "}
              <span className="font-semibold text-zinc-950">
                Know who you&apos;re selling to and what makes you different before you write
                anything, and know where you&apos;ll actually find customers before you spend on
                getting in front of them.
              </span>
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              A couple of the terms on the left, spelled out: a voice note is a short reference
              for how you should sound in writing, tone, words to avoid, examples in your own
              words. A messaging starter (or, at scaleup tier, a full messaging architecture)
              turns positioning into the actual lines you use on the site, in sales, and in
              content. The website and content pieces come last, once the words underneath them
              are locked.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              At startup tier, everything on the left is built together with you, across two
              weeks of working sessions, not handed over afterward as a stack of documents.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              At scaleup tier, each deliverable on the left is scoped and sequenced by the audit,
              then built and delivered on its own timeline, not bundled into a single sprint.
            </p>
            <div className="mt-6">
              <Button href="/pricing" variant="text-sienna">
                See what each tier includes in full detail →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: The subscription — text left, detail right */}
      <section className="relative bg-white border-t border-zinc-950/10 overflow-hidden">
        <BigNumeral n={3} className="absolute -top-6 left-0 text-[10rem] text-zinc-950/[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="grey">Step 03</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">
              The subscription.
            </h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              This is the part most agencies sell you first.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Here, it runs last. Once foundations hold, the subscription runs the engine:{" "}
              <span className="font-semibold text-zinc-950">
                we keep publishing content, make sure people can find you on Google and in AI
                answers like ChatGPT, keep an eye on competitors, and send you a plain update on
                what&apos;s working every month.
              </span>{" "}
              It starts only once foundations are built, never in parallel while content is
              already publishing on positioning that hasn&apos;t been tested.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              A senior marketer runs strategy, tone of voice, and every judgment call on your
              account, approving what ships, resolving anything ambiguous. AI agents handle
              production: drafting, research, monitoring, content cuts, battlecard updates. A
              monthly update arrives in your inbox: performance, decisions, what&apos;s coming
              next.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <DetailBox
              title="Startup subscription · €1,500/month"
              meta="Minimum 3 months · organic only, no paid media at this tier"
              items={[
                "Content and social (4–6 posts/week + 1 long-form/month)",
                "SEO basics: on-page, meta, internal linking",
                "Competitor monitoring",
                "Monthly strategy update",
              ]}
            />
            <DetailBox
              title="Scaleup subscription · €2,500/month base"
              meta="Minimum 6 months"
              items={[
                "Content and social",
                "SEO and AI-search discoverability",
                "Competitor monitoring",
                "Marketing ops",
                "Monthly strategy update",
              ]}
              optional="Paid media module, priced separately"
            />
          </div>
        </div>
      </section>

      {/* Why the order matters — centred, narrow */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Why the order matters.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Most marketing engagements skip the diagnostic and start execution. Content publishes
            before the ICP is defined. The website is built before positioning is locked. Paid
            acquisition runs before the message is tested. The result is a lot of marketing
            activity that doesn&apos;t compound, because the foundation it&apos;s built on
            isn&apos;t solid.
          </p>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
            The three-step model exists to stop that from happening.
          </p>
          <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-3">
            The audit finds the gaps. The foundations fill them. The subscription runs on top of
            something that was built right.
          </p>
          <div className="mt-8">
            <Button href="/pricing" variant="text-sienna">
              See what each tier includes in detail →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "How long does the whole process take?",
            answer:
              "The audit runs in five working days. At startup tier, the Foundations Sprint runs for two weeks after. The subscription starts from there, minimum three months. The full path from first conversation to live subscription is roughly three to four weeks.",
          },
          {
            question: "Do I have to go through all three steps?",
            answer:
              "The audit is required before anything else is agreed. The foundations step depends on what the audit recommends, some clients have solid foundations and move to subscription sooner, though this is uncommon at early stage. The subscription requires foundations to be in place.",
          },
          {
            question: "What happens during the founder interview?",
            answer:
              "It's a structured conversation covering: who your customers are, what they say when they describe the problem you solve, how you explain what you do and to whom, what's working in your sales motion, and what you've tried in marketing. The interview is recorded with your permission and becomes a primary input for the audit.",
          },
          {
            question: "What do I get at the end of the audit?",
            answer:
              "A strategic baseline note covering current state across each dimension and the gaps that matter most. A build recommendation: what to build first, whether that's the Foundations Sprint at startup tier or the scaleup build path. A presentation session where we walk through findings together.",
          },
          {
            question: "Can I run just the audit without committing to anything after?",
            answer:
              "Yes. The audit is a complete, self-contained deliverable. What comes back has value on its own, you could take the recommendation and build the foundations yourself, or use it to brief another agency. Most clients continue because the scope is clear, not because they're locked in.",
          },
        ]}
      />
    </>
  );
}
