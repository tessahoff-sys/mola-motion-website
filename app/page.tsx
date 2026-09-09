import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { BigNumeral } from "@/components/BigNumeral";
import { PullQuote } from "@/components/PullQuote";
import { IconAuditFirst } from "@/components/IconAuditFirst";
import { IconSeniorAI } from "@/components/IconSeniorAI";
import { IconFoundations } from "@/components/IconFoundations";
import { StageMarker } from "@/components/StageMarker";
import { CTA_PRIMARY, CTA_SECONDARY, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Marketing foundations for B2B SaaS",
  description:
    "MOLA Motion builds marketing foundations for B2B SaaS companies without a full marketing team. Starts with a paid audit. Senior strategy, AI production.",
  openGraph: {
    title: "MOLA Motion",
    description: "Enterprise marketing for a startup budget.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOLA Motion: Marketing foundations for B2B SaaS",
      },
    ],
  },
};

// Hero murmuration — triangles in varied sizes roaming the banner in loose,
// flocking paths, each on its own timing so the flock never moves in sync.
// The one literal nod to "Motion" in the wordmark.
type TrailTriangle = {
  size: number;
  left: number;
  bottom: number;
  opacity: number;
  pattern: 1 | 2 | 3 | 4 | 5;
  duration: number;
  delay: number;
};

const HERO_TRAIL: TrailTriangle[] = [
  { size: 10, left: 4, bottom: 8, opacity: 0.07, pattern: 1, duration: 17, delay: -2 },
  { size: 16, left: 14, bottom: 62, opacity: 0.08, pattern: 3, duration: 21, delay: -9 },
  { size: 24, left: 22, bottom: 25, opacity: 0.09, pattern: 2, duration: 15, delay: -5 },
  { size: 34, left: 38, bottom: 74, opacity: 0.1, pattern: 4, duration: 24, delay: -14 },
  { size: 46, left: 48, bottom: 15, opacity: 0.11, pattern: 5, duration: 18, delay: -3 },
  { size: 60, left: 62, bottom: 55, opacity: 0.12, pattern: 1, duration: 22, delay: -11 },
  { size: 76, left: 30, bottom: 45, opacity: 0.13, pattern: 3, duration: 16, delay: -7 },
  { size: 94, left: 78, bottom: 30, opacity: 0.14, pattern: 2, duration: 26, delay: -18 },
  { size: 114, left: 86, bottom: 68, opacity: 0.17, pattern: 4, duration: 19, delay: -4 },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MOLA Motion",
  description: "Marketing production agency for B2B SaaS companies without a full marketing team.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/MOLA_icon_dark.png`,
  foundingDate: "2026",
  areaServed: "Europe",
  serviceType: ["Marketing audit", "Marketing foundations", "Content marketing", "Fractional CMO"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero — full-width, Burnt Sienna background, centred */}
      <section className="relative bg-burnt-sienna text-white overflow-hidden">
        {HERO_TRAIL.map((t, i) => (
          <Triangle
            key={i}
            className={`absolute text-white hero-murmur-${t.pattern}`}
            style={{
              width: t.size,
              height: t.size,
              left: `${t.left}%`,
              bottom: `${t.bottom}%`,
              opacity: t.opacity,
              animationDuration: `${t.duration}s`,
              animationDelay: `${t.delay}s`,
            }}
          />
        ))}
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center flex flex-col items-center">
          <h1 className="font-jakarta font-bold uppercase text-[36px] md:text-[48px] leading-[1.1] tracking-tight">
            You know what you built.
            <br />
            The market doesn&apos;t.
          </h1>
          <p className="font-dm-sans text-base md:text-lg leading-relaxed text-white/80 mt-8 max-w-2xl">
            MOLA Motion is a marketing production agency for B2B SaaS companies at two stages:
            founders with 1–2 customers building toward Series A, and scaleups at €1–10M ARR
            without a full marketing team. Every engagement starts with a paid audit that decides
            what to build. Not a retainer. Not a pitch dressed as strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Button
              href={CTA_PRIMARY.href}
              variant="primary"
              className="!bg-charcoal !text-white hover:!bg-charcoal/90"
            >
              {CTA_PRIMARY.label} →
            </Button>
            <Button href={CTA_SECONDARY.href} variant="ghost-dark">
              {CTA_SECONDARY.label} →
            </Button>
          </div>
        </div>
      </section>

      {/* Category claim bar — narrow centred, white background */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <Label color="sienna">What we do</Label>
          <p className="font-dm-sans text-base md:text-lg text-zinc-950 mt-3">
            Enterprise marketing for a startup budget.
          </p>
        </div>
      </section>

      {/* Who this is for — 2-column, white background */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Label color="sienna">Startup tier</Label>
            <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
              Pre-Series A founders with 1–2 customers
            </h2>
            <StageMarker
              position={0.15}
              startLabel="First customers"
              endLabel="€10M ARR"
              className="mt-5 max-w-xs"
            />
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-6">
              You know what you built and why it matters. The words aren&apos;t sharp yet. The
              website doesn&apos;t reflect what you actually do. You&apos;re closing customers on
              relationships but can&apos;t replicate it consistently. The Foundations Sprint builds
              what you need, in two weeks, co-built with you.
            </p>
            <Label color="grey" className="block mt-6">From €1,500</Label>
            <div className="mt-6">
              <Button href={CTA_SECONDARY.href} variant="text-sienna">
                {CTA_SECONDARY.label} →
              </Button>
            </div>
          </div>
          <div>
            <Label color="sienna">Scaleup tier</Label>
            <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
              B2B SaaS at €1–10M ARR without a marketing team
            </h2>
            <StageMarker
              position={0.7}
              startLabel="First customers"
              endLabel="€10M ARR"
              className="mt-5 max-w-xs"
            />
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-6">
              Marketing is inconsistent. Positioning is scattered across channels. You&apos;re
              getting leads but the wrong ones. You know you need a senior marketer but can&apos;t
              justify a CMO hire yet. The audit tells you what to build. Then we build it, in the
              right order.
            </p>
            <Label color="grey" className="block mt-6">From €2,500</Label>
            <div className="mt-6">
              <Button href={CTA_SECONDARY.href} variant="text-sienna">
                {CTA_SECONDARY.label} →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — visual 3-step, horizontal, Zinc 50 background */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-burnt-sienna relative">
            <div className="md:pr-10 relative">
              <BigNumeral n={1} className="absolute -top-3 right-2 text-5xl text-zinc-950/[0.06] md:block hidden" />
              <Label color="grey">Step 01 · 5 working days</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">The audit.</h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                One founder interview. We assess positioning, ICP, messaging, GTM, website, and
                existing materials. What comes back is a paid document, not a proposal, that
                tells you what&apos;s broken and what to build first.
              </p>
              <Label color="grey" className="block mt-4">€1,500 startup / €2,500 scaleup</Label>
              <Triangle className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-burnt-sienna z-10" />
            </div>
            <div className="md:px-10 relative">
              <BigNumeral n={2} className="absolute -top-3 right-2 text-5xl text-zinc-950/[0.06] md:block hidden" />
              <Label color="grey">Step 02 · 2 weeks or modular</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">
                The foundations.
              </h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                Startup tier: a 2-week co-built sprint. Positioning, ICP, messaging, GTM, website,
                content starter. Scaleup tier: separate deliverables, scoped by the audit,
                delivered in the right order.
              </p>
              <Triangle className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-burnt-sienna z-10" />
            </div>
            <div className="md:pl-10 relative">
              <BigNumeral n={3} className="absolute -top-3 right-2 text-5xl text-zinc-950/[0.06] md:block hidden" />
              <Label color="grey">Step 03 · Ongoing</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">
                The subscription.
              </h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                Content, SEO, competitor monitoring, strategy. Minimum three to six months. Runs
                on top of foundations that were built right.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/pricing" variant="text-sienna">
              See what each tier includes →
            </Button>
          </div>
        </div>
      </section>

      {/* What makes this different — 3-column, white background */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <IconAuditFirst className="block mx-auto w-36 h-36 text-burnt-sienna mb-6" />
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
              Audit-first, not retainer-first.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              You don&apos;t commit to more until you know what you need. The audit is the first
              transaction. It decides what comes next. Not a sales process dressed up as
              analysis.
            </p>
          </div>
          <div>
            <IconSeniorAI className="block mx-auto w-36 h-36 text-burnt-sienna mb-6" />
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
              Senior judgment. AI production.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              20+ years in B2B SaaS positioning and go-to-market runs strategy, tone of voice, and
              every judgment call on your account. AI agents handle drafting, research,
              monitoring, and content production. That split is what makes the pricing possible.
            </p>
          </div>
          <div>
            <IconFoundations className="block mx-auto w-36 h-36 text-burnt-sienna mb-6" />
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
              Foundations before the engine.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Positioning, ICP, messaging, GTM. Built sharp before content starts publishing.
              Most early-stage companies skip this and wonder why the marketing doesn&apos;t
              convert. We don&apos;t start the subscription until the foundations hold.
            </p>
          </div>
        </div>
      </section>

      {/* Proof section — centred, Zinc 50 background */}
      <section className="relative bg-zinc-50 border-t border-zinc-950/10 overflow-hidden">
        <Triangle className="absolute top-1/2 -translate-y-1/2 -right-10 w-48 h-48 text-zinc-950/[0.04] rotate-6" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <Label color="sienna">Client signal</Label>
          <h3 className="font-dm-sans font-semibold text-2xl text-zinc-950 mt-3">
            VIBOR: From built to explainable
          </h3>
          <div className="mt-4 flex justify-center">
            <PullQuote className="text-left">
              &quot;The product was ready. The story wasn&apos;t yet.&quot;
            </PullQuote>
          </div>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            VIBOR is a workflow orchestration platform for freight and logistics. Before the
            sprint, positioning shifted depending on who was in the room, which is normal when a
            founder team is heads-down building the product itself. Now one narrative runs
            through the site, the sales deck, and everything published under it.
          </p>
          <Label color="grey" className="block mt-6">Startup tier · Foundations sprint</Label>
        </div>
      </section>

      {/* Bottom CTA — full-width, Sienna background */}
      <section className="relative bg-sienna-400 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid text-zinc-950/[0.06]" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Start with five days.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            The audit tells you what to build. One conversation, five working days. Everything
            else runs in the background.
          </p>
          <div className="mt-8">
            <Link
              href={CTA_PRIMARY.href}
              className="inline-flex items-center justify-center gap-2 font-jakarta font-bold uppercase text-sm tracking-wide bg-charcoal text-white px-6 py-3 hover:bg-charcoal/90 transition-colors"
            >
              {CTA_PRIMARY.label} →
            </Link>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "What is MOLA Motion?",
            answer:
              "MOLA Motion is a marketing production agency for B2B SaaS companies at two stages: founders with 1–2 customers building toward Series A, and scaleups at €1–10M ARR without a full marketing team. Every engagement starts with a paid audit that assesses positioning, ICP, messaging, GTM, and website, then recommends what to build first.",
          },
          {
            question: "What does “audit-first” mean?",
            answer:
              "It means no engagement starts until a paid diagnostic has assessed the state of your marketing foundations. The audit costs €1,500 for startups and €2,500 for scaleups, takes five working days, and produces a recommendation document that decides what comes next. You don't commit to anything beyond the audit until you've read the output.",
          },
          {
            question: "How is this different from hiring a fractional CMO?",
            answer:
              "A fractional CMO is a senior hire priced accordingly, typically €5,000–15,000 per month. MOLA Motion delivers the same strategic quality at a price an early-stage company can carry, by pairing senior judgment with AI agents on production. The audit-first model also means you know exactly what you're buying before any ongoing commitment.",
          },
          {
            question: "Do you work with companies outside Europe?",
            answer:
              "The primary ICP is English-speaking Europe (Benelux, DACH, Nordics, UK), but MOLA Motion works with B2B SaaS companies anywhere that match the stage profile. All engagements run remotely.",
          },
        ]}
      />
    </>
  );
}
