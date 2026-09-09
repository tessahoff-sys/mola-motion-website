import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { PullQuote } from "@/components/PullQuote";
import { CTA_PRIMARY } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About MOLA Motion: who built it and why",
  description:
    "MOLA Motion was built by a marketer with 20+ years in B2B SaaS positioning and GTM. Here's the story behind the audit-first, AI-production model.",
  openGraph: {
    title: "About MOLA Motion: who's behind it and why",
    description: "Built by a senior B2B SaaS marketer. Audit-first, AI-production model. Here's why it exists.",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
            About MOLA Motion.
          </h1>

          {/* Why this exists — editorial layout, centred narrow */}
          <div className="mt-12 flex flex-col gap-5">
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              I started MOLA Motion because I was looking for a new job. I kept seeing the same
              post: first PMM, first Marketing Director, broad scope, lots of ambition, wanting
              to do everything for everyone. A medior marketer probably can&apos;t handle that
              scope. A senior one won&apos;t take the pay. So the role sits open, or gets filled
              wrong.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Most of these companies were SaaS startups and scaleups. Smart founders and
              engineers who know how to build something, but then what? They know they need
              marketing. They just don&apos;t know what that means.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Around the same time, I kept seeing SaaS companies build entire platforms with a
              fraction of the engineers it used to take, AI doing the work a team used to. That
              made me ask the same question about marketing. If I use AI agents to handle
              production, I can offer what I know: 20+ years of B2B SaaS positioning, go-to-market
              strategy, and messaging, at a price these companies can actually carry.
            </p>
          </div>

          <PullQuote className="my-12 mx-auto max-w-md">
            If I use AI agents to handle production, I can offer what I know at a price these
            companies can actually carry.
          </PullQuote>

          {/* The model — editorial layout */}
          <div className="flex flex-col gap-5">
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              One senior marketer runs strategy, tone of voice, and every judgment call on the
              account, approving what ships, resolving anything ambiguous. AI agents handle
              production: drafting, research, monitoring, content cuts, battlecard updates.
              Specialist partners come in white-labelled for craft work, designer polish on
              decks and ads. That split is what makes the pricing possible without sacrificing
              quality.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              The audit-first gate matters. Most agency relationships start with a retainer. The
              agency figures out what you need on your dime once you&apos;ve signed. A paid
              diagnostic that gates the engagement is an honest first transaction, it commits
              both sides, and it makes the recommendation trustworthy because the work it scopes
              was the work, not a pitch dressed up as analysis.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              I built the agents myself and refined them based on what I know the output should
              be. That&apos;s not a badge. It&apos;s a quality constraint. If you don&apos;t know
              what good positioning sounds like, you can&apos;t tell the difference between sharp
              output and confident-sounding slop. The agents are a force multiplier on judgment,
              not a substitute for it.
            </p>
          </div>
        </div>
      </section>

      {/* The first client — proof section, Zinc 50 background */}
      <section className="relative bg-zinc-50 border-t border-zinc-950/10 overflow-hidden">
        <Triangle className="absolute top-1/2 -translate-y-1/2 -left-10 w-40 h-40 text-zinc-950/[0.04] -rotate-6" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
            VIBOR is a workflow orchestration platform for freight and logistics. When we started,
            they knew how to build the product but couldn&apos;t articulate the value clearly
            across audiences. After the sprint, they have a consistent way of speaking about
            themselves, across every channel and format. They know what to say and what not to
            say. That&apos;s the foundation. Everything after it runs straighter because of it.
          </p>
          <Label color="grey" className="block mt-6">
            Startup tier · Foundations sprint
          </Label>
        </div>
      </section>

      {/* Background — credential block */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <DetailBox
            title="Background"
            items={[
              "20+ years in marketing, positioning, and go-to-market for B2B SaaS",
              "Built the agent stack from scratch, refined with every engagement",
              "Marketing Director and Head of Marketing experience across SaaS companies in Europe",
              "Based in Europe. Works with English-speaking markets globally.",
            ]}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-sienna-400 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Work with someone who has done this specific work at this specific stage.
          </h2>
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
        items={[
          {
            question: "Is this a team or a solo practitioner?",
            answer:
              "MOLA Motion is one senior marketer running strategy and voice, with AI agents handling production and specialist partners on craft work (design, specific copy formats) on a white-labelled basis. You work directly with one person. No account managers, no juniors, no handoff mid-engagement.",
          },
          {
            question: "How many clients do you work with at a time?",
            answer:
              "A small number: enough to give each engagement senior attention. The model depends on one senior marketer running strategy on every engagement, which caps capacity at a number that protects quality.",
          },
          {
            question: "Where are you based?",
            answer:
              "Based in Europe. MOLA Motion works with B2B SaaS companies across Europe and English-speaking markets: Benelux, DACH, Nordics, UK, and beyond. All engagements run remotely.",
          },
        ]}
      />
    </>
  );
}
