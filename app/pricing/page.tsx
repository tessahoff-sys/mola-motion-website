import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { DeliverableList } from "@/components/DeliverableList";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What you get, and what it costs",
  description:
    "Every deliverable at every stage, with the price next to it. Startup audit €1,500. Scaleup audit €2,500. Foundations Sprint €2,500. Subscription from €1,500/month.",
  alternates: {
    languages: {
      en: `${SITE_URL}/pricing`,
      nl: `${SITE_URL}/nl/pricing`,
    },
  },
  openGraph: {
    title: "MOLA Motion: what you get, and what it costs",
    description:
      "Full deliverables and full pricing on one page. Audit-first, transparent because that's part of the pitch.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MOLA Motion marketing audit",
  provider: { "@type": "Organization", name: "MOLA Motion" },
  offers: [
    {
      "@type": "Offer",
      name: "Startup audit",
      price: "1500",
      priceCurrency: "EUR",
      description: "5-day marketing audit for pre-Series A B2B SaaS founders",
    },
    {
      "@type": "Offer",
      name: "Scaleup audit",
      price: "2500",
      priceCurrency: "EUR",
      description: "5-day marketing audit for B2B SaaS at €1-10M ARR",
    },
    {
      "@type": "Offer",
      name: "Startup Foundations Sprint",
      price: "2500",
      priceCurrency: "EUR",
      description: "2-week co-built foundations sprint for pre-Series A B2B SaaS founders",
    },
  ],
};

const objections = [
  {
    quote: "I can't afford to spend this before I know it works.",
    answer:
      "That's exactly why the engagement starts with an audit and not a retainer. The €1,500 buys a diagnostic. You find out what's broken and what to build before you commit to anything beyond that. If the audit says the foundations are solid, we tell you and you pay nothing more.",
  },
  {
    quote: "Other agencies charge less.",
    answer:
      "Most start with a retainer that funds the strategy work, you pay while they figure out what you need. The audit-first model means you pay €1,500 for the scoping, then decide. Total investment before the subscription is €4,000 for startups (audit plus sprint). That's not more expensive. It's priced differently because the work is sequenced honestly.",
  },
  {
    quote: "Why does the scaleup tier cost more?",
    answer:
      "Scaleup clients have more evidence to mine (customer interviews, win/loss data, existing materials) and more deliverables to produce: full messaging architecture, GTM motion design, sales enablement. The higher price reflects the scope, not a different team.",
  },
];

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            What you get.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            MOLA Motion works at two stages, with a different offer at each: different
            deliverables, different timelines, different prices. Most agencies don&apos;t publish
            this. We do, because transparency is part of how the audit-first model works.
          </p>
        </div>
      </section>

      {/* Jump nav — sticky below the main header */}
      <div className="sticky top-36 z-40 bg-zinc-50/95 backdrop-blur border-y border-zinc-950/10">
        <nav className="mx-auto max-w-4xl px-6 py-3 flex items-center gap-x-6 gap-y-2 overflow-x-auto">
          {[
            { href: "#audit", label: "Audit" },
            { href: "#foundations", label: "Foundations" },
            { href: "#subscription", label: "Subscription" },
            { href: "#add-ons", label: "Add-ons" },
            { href: "#compare", label: "Compare" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/60 hover:text-burnt-sienna transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Step 1: The audit */}
      <section id="audit" className="bg-zinc-50 border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Step 01</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            The audit.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            The first and only commitment before anything else is decided. Five working days, one
            founder interview, and a written recommendation for what to build next.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <DetailBox
              title="Startup audit · €1,500"
              meta="5 working days"
              items={[
                "Dimensions: ICP hypothesis, positioning, narrative, voice and messaging readiness, GTM approach",
                "1 founder interview",
                "Competitor scan + search demand pull",
                "Teardown of existing website and materials",
              ]}
              output="A strategic baseline note, a build recommendation, and a presentation session"
            />
            <DetailBox
              title="Scaleup audit · €2,500"
              meta="5 working days"
              items={[
                "Dimensions: ICP, positioning, narrative, voice and messaging, GTM, sales practices",
                "1 founder interview + up to 5 customer interviews",
                "Competitor scan + search demand pull",
                "Teardown of existing website and materials",
              ]}
              output="Full audit document, a build recommendation, and a presentation session"
            />
          </div>
        </div>
      </section>

      {/* Step 2: The foundations */}
      <section id="foundations" className="bg-white border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Step 02</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            The foundations.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            The audit gives you the recommendation. The foundations build it, in the right order.
          </p>

          {/* Startup tier */}
          <div className="mt-12">
            <Label color="sienna">Startup tier</Label>
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-2">
              Foundations Sprint
            </h3>
            <div className="bg-zinc-50 p-6 md:p-10 mt-6">
              <Label color="grey">Deliverables · in dependency order</Label>
              <div className="mt-6">
                <DeliverableList
                  items={[
                    {
                      title: "Positioning hypothesis",
                      description:
                        "One-sentence positioning: who it's for, what it does, what makes it different. Includes the founder story in buyer language, three paragraphs maximum. Treated as a hypothesis, refined as customers accumulate.",
                    },
                    {
                      title: "ICP definition (v1)",
                      description:
                        "Firmographic and behavioural sketch from available evidence and founder intuition. Labelled as version one. Revised quarterly as customers accumulate.",
                    },
                    {
                      title: "GTM hypothesis",
                      description:
                        "Dominant channel bet and 90-day direction. ICP-motion connection and rationale. A version-one bet that shapes what the content engine is pointed at from day one. Not a full motion design.",
                    },
                    {
                      title: "Voice note",
                      description:
                        "Tone adjectives, anti-language list, tone anchor, language rules, and verbatim examples from the founder's own words. Anchors all content production. Produced in Session 2 once a positioning draft exists.",
                    },
                    {
                      title: "Messaging starter",
                      description:
                        "Hero message, 3–5 supporting points, proof angles from existing customers. The working messaging layer the website and first content is built from.",
                    },
                    {
                      title: "Content database (optional)",
                      description:
                        "Only if the client explicitly needs one. Reference–Internal category drafted in full; other categories stubbed as rows. Delivered in the tool that matches the client's environment: Notion, Confluence, Airtable, Coda, Google Sheets, or Word + Excel.",
                    },
                    {
                      title: "Website brief and build",
                      description:
                        "Both brief and build included in the sprint. For founders without a site: what the site needs to say and the structure, then built as part of the sprint. For founders with an existing site: what to change and why, then updated during the sprint.",
                    },
                    {
                      title: "Content starter pack",
                      description:
                        "4 social post drafts + 1 long-form piece, ready to publish when the site goes live.",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-6">
              <div>
                <Label color="grey">Timeline</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  2 weeks, co-built in working sessions
                </p>
              </div>
              <div>
                <Label color="grey">Price</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">€2,500 fixed</p>
              </div>
            </div>
          </div>

          {/* Scaleup tier */}
          <div className="mt-16">
            <Label color="sienna">Scaleup tier</Label>
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-2">Foundations</h3>
            <div className="bg-zinc-50 p-6 md:p-10 mt-6">
              <Label color="grey">Deliverables · in dependency order</Label>
              <div className="mt-6">
                <DeliverableList
                  items={[
                    {
                      title: "ICP definition and validation",
                      description:
                        "Firmographic and behavioural definition built from customer interviews, win/loss analysis, and competitor research. Includes disqualifiers and buying trigger map.",
                    },
                    {
                      title: "Market research and competitor analysis",
                      description:
                        "Competitor positioning teardown, white-space identification, search demand analysis. The inputs that ground every downstream deliverable.",
                    },
                    {
                      title: "Positioning and narrative",
                      description:
                        "The positioning sentence and the full strategic narrative: market shift, the problem with the old way, the new reality, unique point of view, the solution, the outcome, the vision.",
                    },
                    {
                      title: "GTM motion design (conditional)",
                      description:
                        "Only included if the audit identifies a gap. If the existing GTM motion is solid, this deliverable is skipped. Covers channel strategy, funnel stages, ICP-motion connection, and 90-day plan.",
                    },
                    {
                      title: "Voice note",
                      description:
                        "Tone and language rules captured from founder interviews and brand materials. Anti-language list, verbatim examples, tone anchor. Anchors all content production.",
                    },
                    {
                      title: "Messaging architecture",
                      description:
                        "Full message hierarchy, channel variants, language rules, objection handling, and comparison content. Delivered in the client's tool environment: Notion, Confluence, Airtable, Coda, Google Sheets, or Word + Excel.",
                    },
                    {
                      title: "Website messaging brief",
                      description:
                        "Page-by-page briefs for 8–12 priority pages. Wireframes, SEO integration sheet, conversion path map. Brief only, client builds from the brief.",
                    },
                    {
                      title: "Sales enablement materials",
                      description: "Battle cards, objection handling guide, demo script, one-pager. Scoped by the audit.",
                    },
                    {
                      title: "Internal alignment session",
                      description:
                        "Presents the full messaging architecture to internal stakeholders. Run once all foundations are complete.",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-6">
              <div>
                <Label color="grey">Timeline</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  Modular, sequenced by audit recommendation. Typical: 6–10 weeks.
                </p>
              </div>
              <div>
                <Label color="grey">Price</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  Scoped per deliverable, typical range €8,000–15,000 for the full build
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: The subscription */}
      <section id="subscription" className="bg-zinc-50 border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Step 03</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            The subscription.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            This is the part most agencies sell you first. Here, it runs last, once foundations
            hold.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <DetailBox
              title="Startup subscription · €1,500/month"
              meta="Minimum 3 months, then month-to-month · organic only, no paid media at this tier"
              items={[
                "Content and social (4–6 posts/week + 1 long-form/month)",
                "SEO basics: on-page, meta, internal linking",
                "Competitor monitoring",
                "Monthly strategy update",
              ]}
            />
            <DetailBox
              title="Scaleup subscription · €2,500/month base"
              meta="Minimum 6 months, then month-to-month"
              items={[
                "Content and social",
                "SEO and AI-search discoverability",
                "Competitor monitoring",
                "Marketing ops",
                "Monthly strategy update",
              ]}
              optional="Paid media module, see add-ons below"
            />
          </div>
        </div>
      </section>

      {/* Add-ons and one-time projects */}
      <section id="add-ons" className="bg-white border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Beyond the base offer</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            Add-ons and one-time projects.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            Most clients run the base offer above and nothing else. These exist for when you need
            more, priced the same way as everything else: in the open.
          </p>

          <h3 className="font-dm-sans font-semibold text-lg text-zinc-950 mt-10">
            Standing modules, on top of the subscription
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Paid media",
                price: "€1,500/month",
                description:
                  "Specialist-led distribution across LinkedIn, Google, and Meta. Spend stays on your card, this is the management fee. Activates once foundations are locked and you're spending at least €5,000/month.",
              },
              {
                title: "Corporate Communications",
                price: "Priced per engagement",
                description:
                  "Writing and positioning for funding announcements, hiring moments, and other comms. We write, you or your PR firm distributes. A press-release-sized engagement typically runs around €750.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-50 border border-zinc-950/10 p-5">
                <p className="font-dm-sans font-semibold text-base text-zinc-950">{item.title}</p>
                <p className="font-space-mono uppercase text-[11px] tracking-wider text-burnt-sienna mt-1">
                  {item.price}
                </p>
                <p className="font-dm-sans text-[14px] leading-relaxed text-zinc-950/75 mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-dm-sans font-semibold text-lg text-zinc-950 mt-10">
            One-time projects, as needed
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Programmatic SEO / AI search hub",
                price: "€3,500",
                description:
                  "A structured content hub built to a standardized template, sized for scale. Maintenance runs on top: included in the scaleup subscription's SEO scope, or €500/quarter without it.",
              },
              {
                title: "Outbound playbook",
                price: "€2,500 (refresh €1,500)",
                description:
                  "Strategy and copy for cold outreach: sequences, account-list logic, signal-to-trigger mapping. You or your outbound partner runs it.",
              },
              {
                title: "Brand and tone-of-voice handbook",
                price: "€3,500 new · €1,500 audit and improve",
                description:
                  "The full version of the voice note: tone principles, vocabulary rules, exemplars across formats. Most clients start with the voice note included in foundations and upgrade here later.",
              },
              {
                title: "Additional campaign moment",
                price: "€1,500 each",
                description:
                  "The scaleup subscription includes one campaign per quarter. This is for anything beyond that.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-50 border border-zinc-950/10 p-5">
                <p className="font-dm-sans font-semibold text-base text-zinc-950">{item.title}</p>
                <p className="font-space-mono uppercase text-[11px] tracking-wider text-burnt-sienna mt-1">
                  {item.price}
                </p>
                <p className="font-dm-sans text-[14px] leading-relaxed text-zinc-950/75 mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section id="compare" className="bg-white border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 text-center mb-10">
            Side by side.
          </h2>
          <ComparisonTable
            columns={["Startup tier", "Scaleup tier"]}
            rows={[
              { label: "Stage", values: ["Pre-Series A, 1–2 customers", "€1–10M ARR"] },
              { label: "Team size", values: ["1–5, founder doing marketing", "5–50, one generalist or founder"] },
              { label: "Audit", values: ["€1,500", "€2,500"] },
              { label: "Foundations", values: ["€2,500 fixed (Sprint)", "Scoped per deliverable, typical €8,000–15,000"] },
              { label: "Foundation structure", values: ["Single 2-week sprint", "Modular, sequenced by audit"] },
              { label: "Website", values: ["Brief + build included", "Messaging brief only, client builds"] },
              { label: "Subscription", values: ["€1,500/month", "€2,500/month base"] },
              { label: "Minimum subscription", values: ["3 months", "6 months"] },
              { label: "Paid media", values: ["Rarely active at this stage", "Optional add-on, €1,500/mo"] },
              { label: "One-time projects", values: ["Available when ready", "Available when ready"] },
            ]}
          />
          <p className="font-dm-sans text-[14px] text-zinc-950/60 text-center mt-6">
            Not sure which one&apos;s you? When in doubt, the audit decides, both tiers start in
            the same place.
          </p>
        </div>
      </section>

      {/* Common objections */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {objections.map((o) => (
            <div key={o.quote} className="relative pl-6">
              <Triangle className="absolute left-0 top-1.5 w-3 h-3 text-burnt-sienna rotate-180" />
              <p className="font-dm-sans font-semibold text-lg text-zinc-950">
                &ldquo;{o.quote}&rdquo;
              </p>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                {o.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA — Sienna background */}
      <section className="relative bg-sienna-400 border-t border-zinc-950/10 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid text-zinc-950/[0.06]" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            The first step costs €1,500.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Start with the audit. Five days. One conversation. What comes back tells you what to
            build.
          </p>
          <div className="mt-8">
            <Button
              href={CTA_PRIMARY.href}
              variant="primary"
              className="!bg-charcoal !text-white hover:!bg-charcoal/90"
            >
              {CTA_PRIMARY.label} →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        id="faq"
        items={[
          {
            question: "What does the audit include?",
            answer:
              "One founder interview, a competitor scan and search demand analysis, a teardown of your existing website and materials, a strategic baseline note covering the state of your foundations, a build recommendation for what to do next, and a presentation session to walk through it together.",
          },
          {
            question: "What's the difference between the Foundations Sprint and Foundations at scaleup tier?",
            answer:
              "They produce the same kind of outcome, positioning, ICP, GTM, messaging, a website, but differently. The Foundations Sprint bundles everything into one two-week co-built engagement at startup tier. At scaleup tier, foundations are separate deliverables, scoped and sequenced by what the audit recommends, typically over six to ten weeks.",
          },
          {
            question: "Does the startup tier include a website build?",
            answer:
              "Yes. Both the website brief and the build are included in the Startup Foundations Sprint. For founders without a site, we brief and build it together during the sprint. For founders with an existing site, we brief what to change and update it as part of the sprint.",
          },
          {
            question: "When does the subscription start?",
            answer:
              "After the foundations are complete and approved, whether that's the Foundations Sprint at startup tier or the scaleup deliverables. The subscription doesn't start until foundations are in place, that's part of the model.",
          },
          {
            question: "What's the total cost from audit to six months of subscription at startup tier?",
            answer:
              "Audit: €1,500. Foundations Sprint: €2,500. Six months of subscription at €1,500/month: €9,000. Total: €13,000 over roughly seven months. That's the full path from no foundations to a running monthly engine.",
          },
          {
            question: "Is the subscription a rolling contract?",
            answer:
              "Minimum term is three months at startup tier and six months at scaleup tier. After the minimum, it's month to month with 30 days notice. There's no lock-in after the minimum.",
          },
          {
            question: "Can I buy individual deliverables at scaleup tier without running the full build?",
            answer:
              "Yes. At scaleup tier, deliverables are scoped individually and sequenced by the audit. You buy what the audit recommends, in the order it recommends. You don't pay for deliverables the audit says you don't need.",
          },
          {
            question: "When does the paid media add-on actually make sense?",
            answer:
              "Once foundations are locked and you're ready to spend at least €5,000/month, spend stays on your own card, the €1,500/month covers management. Most startup-tier clients aren't there yet, that's normal, not a sign you're behind.",
          },
        ]}
      />
    </>
  );
}
