import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY, CONTACT_EMAIL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fractional CMO and communications strategy",
  description:
    "Fractional CMO and communications advisory for B2B SaaS since 2022, part of a marketing career that began in 2004. For companies above €10M ARR that need senior leadership without a full-time hire.",
  alternates: {
    languages: {
      en: `${SITE_URL}/fractional-cmo`,
      nl: `${SITE_URL}/nl/fractional-cmo`,
    },
  },
  openGraph: {
    title: "MOLA Motion: Fractional CMO and communications strategy",
    description:
      "Senior marketing leadership or communications strategy, delivered directly. Fractional CMO work since 2022, scoped per engagement.",
    type: "website",
  },
};

export default function FractionalCMO() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            Fractional CMO.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            <span className="font-semibold text-zinc-950">
              I&apos;ve worked as a fractional CMO and communications advisor since 2022
            </span>
            , part of a marketing career in B2B SaaS positioning and go-to-market that started in
            2004.
          </p>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-4">
            Two things fall under this: senior marketing leadership for companies that need a CMO
            in place without a full-time hire, and communications strategy and storytelling for
            how a company tells its story, externally and internally, either as an ongoing
            advisor or a temporary communications advisor for a specific moment.
          </p>
        </div>
      </section>

      {/* Fractional CMO */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-4xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="sienna">Fractional CMO</Label>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              For companies above €10M ARR that need a senior marketing leader in place without a
              full-time hire. A fractional CMO engagement covers: strategy and prioritisation
              across the marketing function, leadership of an existing internal team, alignment
              between marketing and sales, board-level reporting, and investor-facing narrative.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Scoped and priced per conversation, based on scope, hours per week, and duration.
            </p>
            <div className="mt-6">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost-light">
                Reach out to discuss →
              </Button>
            </div>
          </div>
          <DetailBox
            title="Who this fits"
            items={[
              "B2B SaaS companies above €10M ARR with an internal marketing team that needs senior leadership",
              "Companies in transition, between a departing CMO and a permanent hire",
              "Companies preparing for a Series C or entering a new market",
              "Situations that need a CMO presence for a defined window rather than ongoing",
            ]}
          />
        </div>
      </section>

      {/* Communications strategy */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-4xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="sienna">Communications strategy</Label>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              A communications strategy engagement covers the story and storytelling a company
              uses externally (to press, to investors, to partners) and the internal
              communications infrastructure that keeps the team and the board aligned.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Depending on scope, this may include: an executive thought leadership platform
              (LinkedIn, bylines, speaking pitches), press and analyst relations strategy,
              investor narrative and update templates, or a full external communications
              architecture.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              This can also take the shape of a temporary communications advisor role: embedded
              for a defined window, a fundraise, a launch, a crisis, rather than an ongoing
              engagement.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Like the fractional CMO engagement, this is scoped per conversation. The right shape
              depends on what&apos;s already in place and what the company needs most.
            </p>
          </div>
          <DetailBox
            title="Who this fits"
            items={[
              "Companies preparing for a fundraise, a public announcement, a market expansion, or a reposition",
              "Companies with a strong product story that isn't reaching the right audience",
              "Founders who need to build a thought leadership presence before a Series B or C",
              "Companies that need a communications advisor for a defined window rather than an ongoing engagement",
            ]}
          />
        </div>
      </section>

      {/* How to start */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            How to start.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Both offerings start with a conversation, not an audit. If you need senior leadership
            or communications support, reach out directly.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-dm-sans text-[15px] text-burnt-sienna block mt-3 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Or if you&apos;re not sure which offering fits, start with the audit. It works at any
            stage and the output will tell you.
          </p>
          <div className="mt-8">
            <Button href={CTA_PRIMARY.href} variant="primary">
              {CTA_PRIMARY.label} →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "How long have you been doing fractional CMO work?",
            answer:
              "Since 2022, part of a marketing career in B2B SaaS positioning and go-to-market that started in 2004. The fractional and communications advisory work runs on the same judgment built up over that career.",
          },
          {
            question: "How many hours per week does a fractional CMO engagement involve?",
            answer:
              "Scoped per engagement, typically one to three days per week, though full-time engagements are also available. Some companies need a CMO presence for specific windows (a fundraise, a relaunch, a market entry) rather than an ongoing arrangement. Both are available.",
          },
          {
            question: "Can the communications work be short-term rather than ongoing?",
            answer:
              "Yes. Communications strategy work often takes the shape of a temporary advisor role: for a fundraise, a launch, a crisis, or another specific moment. Fractional CMO work is also available for defined windows rather than an ongoing arrangement.",
          },
          {
            question: "Do you work with companies outside B2B SaaS for these engagements?",
            answer:
              "Yes. My most recent experience is in B2B SaaS, but I've worked across many industries. That experience carries over well, and a new market or product is quick to pick up because of it.",
          },
        ]}
      />
    </>
  );
}
