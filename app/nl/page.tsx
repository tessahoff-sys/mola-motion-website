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
import { CTA_PRIMARY_NL, CTA_SECONDARY_NL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "MOLA Motion" },
  description: "Enterprise marketing voor een startupbudget.",
  alternates: {
    languages: {
      en: SITE_URL,
      nl: `${SITE_URL}/nl`,
    },
  },
  openGraph: {
    title: "MOLA Motion",
    description: "Enterprise marketing voor een startupbudget.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOLA Motion: Marketingfoundations voor B2B SaaS",
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
  description: "Marketing productiebureau voor B2B SaaS-bedrijven zonder volledig marketingteam.",
  url: `${SITE_URL}/nl`,
  logo: `${SITE_URL}/logo/MOLA_icon_dark.png`,
  foundingDate: "2026",
  areaServed: "Europe",
  serviceType: ["Marketingaudit", "Marketingfoundations", "Contentmarketing"],
};

export default function HomeNL() {
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
            Jij weet wat je gebouwd hebt.
            <br />
            De markt nog niet.
          </h1>
          <p className="font-dm-sans text-base md:text-lg leading-relaxed text-white/80 mt-8 max-w-2xl">
            MOLA Motion is een marketing productiebureau voor B2B SaaS-bedrijven in twee fasen:
            founders met 1–2 klanten, en scale-ups met €1–10M ARR zonder eigen marketingteam.
            Elk traject begint met een betaalde audit die bepaalt wat er gebouwd moet worden.
            Geen retainer. Geen verkooppraatje vermomd als strategie.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Button
              href={CTA_PRIMARY_NL.href}
              variant="primary"
              className="!bg-charcoal !text-white hover:!bg-charcoal/90"
            >
              {CTA_PRIMARY_NL.label} →
            </Button>
            <Button href={CTA_SECONDARY_NL.href} variant="ghost-dark">
              {CTA_SECONDARY_NL.label} →
            </Button>
          </div>
        </div>
      </section>

      {/* Category claim bar — narrow centred, white background */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <Label color="sienna">Wat we doen</Label>
          <p className="font-dm-sans text-base md:text-lg text-zinc-950 mt-3">
            Enterprise marketing voor een startupbudget.
          </p>
        </div>
      </section>

      {/* Who this is for — 2-column, white background */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Label color="sienna">Startup tier</Label>
            <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
              Founders met 1–2 klanten
            </h2>
            <StageMarker
              position={0.15}
              startLabel="Eerste klanten"
              endLabel="€10M ARR"
              className="mt-5 max-w-xs"
            />
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-6">
              Je weet wat je gebouwd hebt en waarom het ertoe doet. De woorden zijn nog niet
              scherp. De website weerspiegelt niet wat je écht doet. Je sluit klanten via
              relaties, maar kunt dat niet consistent herhalen. We bouwen wat je nodig hebt samen
              met jou, in twee weken.
            </p>
            <Label color="grey" className="block mt-6">Vanaf €1.500</Label>
            <div className="mt-6">
              <Button href={CTA_SECONDARY_NL.href} variant="text-sienna">
                {CTA_SECONDARY_NL.label} →
              </Button>
            </div>
          </div>
          <div>
            <Label color="sienna">Scaleup tier</Label>
            <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
              B2B SaaS met €1–10M ARR zonder marketingteam
            </h2>
            <StageMarker
              position={0.7}
              startLabel="Eerste klanten"
              endLabel="€10M ARR"
              className="mt-5 max-w-xs"
            />
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-6">
              Marketing is inconsistent. Positionering is verspreid over kanalen. Je krijgt leads,
              maar de verkeerde. Je weet dat je senior marketingondersteuning nodig hebt, maar
              kunt een fulltime aanname nog niet verantwoorden. De audit vertelt je wat je moet
              bouwen. Daarna bouwen we het, in de juiste volgorde.
            </p>
            <Label color="grey" className="block mt-6">Vanaf €2.500</Label>
            <div className="mt-6">
              <Button href={CTA_SECONDARY_NL.href} variant="text-sienna">
                {CTA_SECONDARY_NL.label} →
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
              <Label color="grey">Stap 01 · 5 werkdagen</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">De audit.</h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                Één founder-interview. We beoordelen positionering, ICP, messaging, GTM, website
                en bestaand materiaal. Wat terugkomt is een betaald document dat je vertelt wat er
                niet klopt en wat je eerst moet bouwen.
              </p>
              <Label color="grey" className="block mt-4">€1.500 startup / €2.500 scaleup</Label>
              <Triangle className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-burnt-sienna z-10" />
            </div>
            <div className="md:px-10 relative">
              <BigNumeral n={2} className="absolute -top-3 right-2 text-5xl text-zinc-950/[0.06] md:block hidden" />
              <Label color="grey">Stap 02 · 2 weken of modulair</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">
                De foundations.
              </h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                Startup tier: een sprint van 2 weken, samen gebouwd. Positionering, ICP, messaging,
                GTM, website, content starter.
              </p>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-2">
                Scaleup tier: losse deliverables, bepaald door de audit, geleverd in de juiste
                volgorde.
              </p>
              <Triangle className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-burnt-sienna z-10" />
            </div>
            <div className="md:pl-10 relative">
              <BigNumeral n={3} className="absolute -top-3 right-2 text-5xl text-zinc-950/[0.06] md:block hidden" />
              <Label color="grey">Stap 03 · Doorlopend</Label>
              <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-3">
                Het abonnement.
              </h3>
              <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
                Content, SEO, concurrentiemonitoring, strategie. Minimaal drie tot zes maanden.
                Draait op foundations die goed zijn neergezet.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/nl/pricing" variant="text-sienna">
              Bekijk wat elke tier omvat →
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
              Audit-first, geen retainer-first.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Je verbindt je aan niets totdat je weet wat je nodig hebt. De audit is de eerste
              transactie. Die bepaalt wat er hierna komt.
            </p>
          </div>
          <div>
            <IconSeniorAI className="block mx-auto w-36 h-36 text-burnt-sienna mb-6" />
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
              Senior inzicht. AI-productie.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              20+ jaar ervaring in B2B SaaS-positionering en go-to-market stuurt de strategie,
              tone of voice en elke beslissing op jouw account. AI-agents nemen onderzoek,
              monitoring en contentproductie voor hun rekening. Die verdeling maakt de prijs
              mogelijk.
            </p>
          </div>
          <div>
            <IconFoundations className="block mx-auto w-36 h-36 text-burnt-sienna mb-6" />
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
              Foundations voor de motor.
            </h3>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Positionering, ICP, messaging, GTM. Scherp neergezet voordat er content gepubliceerd
              wordt. De meeste jonge bedrijven slaan dit over en vragen zich af waarom de
              marketing niet converteert. We starten het abonnement niet voordat de foundations
              staan.
            </p>
          </div>
        </div>
      </section>

      {/* Proof section — centred, Zinc 50 background */}
      <section className="relative bg-zinc-50 border-t border-zinc-950/10 overflow-hidden">
        <Triangle className="absolute top-1/2 -translate-y-1/2 -right-10 w-48 h-48 text-zinc-950/[0.04] rotate-6" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <Label color="sienna">Klantsignaal</Label>
          <h3 className="font-dm-sans font-semibold text-2xl text-zinc-950 mt-3">
            VIBOR: van gebouwd naar verteld
          </h3>
          <div className="mt-4 flex justify-center">
            <PullQuote className="text-left">
              &quot;Het product was klaar. Het verhaal nog niet.&quot;
            </PullQuote>
          </div>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            VIBOR is een workflow-orchestratieplatform voor freight en logistiek. Vóór de sprint
            verschoof de positionering afhankelijk van wie er in de kamer zat, normaal wanneer een
            foundersteam vooral bezig is met het bouwen van het product zelf. Nu loopt er één
            verhaal door de website, de sales deck en alles wat daaronder gepubliceerd wordt.
          </p>
          <Label color="grey" className="block mt-6">Startup tier · Foundations sprint</Label>
        </div>
      </section>

      {/* Bottom CTA — full-width, Sienna background */}
      <section className="relative bg-sienna-400 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid text-zinc-950/[0.06]" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Begin met vijf dagen.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            De audit vertelt je wat je moet bouwen. Één gesprek, vijf werkdagen. Al de rest
            gebeurt op de achtergrond.
          </p>
          <div className="mt-8">
            <Link
              href={CTA_PRIMARY_NL.href}
              className="inline-flex items-center justify-center gap-2 font-jakarta font-bold uppercase text-sm tracking-wide bg-charcoal text-white px-6 py-3 hover:bg-charcoal/90 transition-colors"
            >
              {CTA_PRIMARY_NL.label} →
            </Link>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "Wat is MOLA Motion?",
            answer:
              "MOLA Motion is een marketing productiebureau voor B2B SaaS-bedrijven in twee fasen: founders met 1–2 klanten, en scale-ups met €1–10M ARR zonder eigen marketingteam. Elk traject begint met een betaalde audit die positionering, ICP, messaging, GTM en website beoordeelt, en aanbeveelt wat er eerst gebouwd moet worden.",
          },
          {
            question: "Wat betekent “audit-first”?",
            answer:
              "Het betekent dat geen traject start voordat een betaalde diagnose de staat van je marketingfoundations heeft beoordeeld. De audit kost €1.500 voor startups en €2.500 voor scale-ups, duurt vijf werkdagen, en levert een adviesdocument op dat bepaalt wat er hierna komt. Je verbindt je aan niets voorbij de audit totdat je de uitkomst hebt gelezen.",
          },
          {
            question: "Wat is het verschil met het aannemen van een marketingmanager?",
            answer:
              "Een fulltime marketingmanager is een vaste kostenpost het hele jaar door, meestal €5.000–7.000 per maand inclusief salaris, secundaire voorwaarden en overhead, of er nu genoeg werk is om die tijd te vullen of niet. Bij MOLA Motion betaal je alleen voor wat er echt nodig is: senior strategie en inzicht, toegepast via AI-gedreven productie, zonder een fulltime aanname. Het audit-first model betekent ook dat je precies weet wat je koopt voordat je je aan iets doorlopends verbindt.",
          },
          {
            question: "Werken jullie ook met bedrijven buiten Europa?",
            answer:
              "De primaire ICP is Engelstalig Europa (Benelux, DACH, Noordse landen, VK), maar MOLA Motion werkt met B2B SaaS-bedrijven overal die passen bij het faseprofiel. Alle trajecten verlopen op afstand.",
          },
        ]}
      />
    </>
  );
}
