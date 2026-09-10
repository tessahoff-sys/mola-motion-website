import type { Metadata } from "next";
import { Label } from "@/components/Label";
import { AuditFormNL } from "@/components/AuditFormNL";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { Button } from "@/components/Button";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Begin met de audit",
  description:
    "Een betaalde marketingaudit van vijf dagen voor B2B SaaS. €1.500 voor startups, €2.500 voor scale-ups. Één founder-interview. Wat terugkomt vertelt je wat je eerst moet bouwen.",
  alternates: {
    languages: {
      en: `${SITE_URL}/audit`,
      nl: `${SITE_URL}/nl/audit`,
    },
  },
  openGraph: {
    title: "Begin met de MOLA Motion audit: vijf dagen, één gesprek",
    description:
      "Betaalde marketingaudit voor B2B SaaS. €1.500 startup, €2.500 scaleup. Wat terugkomt bepaalt wat je bouwt.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MOLA Motion marketingaudit",
  provider: { "@type": "Organization", name: "MOLA Motion" },
  description:
    "Een betaalde marketingaudit van 5 dagen voor B2B SaaS-bedrijven. Beoordeelt positionering, ICP, messaging, GTM en website. Levert een strategische baseline note en een aanbevolen scope voor foundations.",
  offers: [
    { "@type": "Offer", name: "Startup audit", price: "1500", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Scaleup audit", price: "2500", priceCurrency: "EUR" },
  ],
};

const steps = [
  {
    label: "Stap 1",
    text: "Je vult het formulier hieronder in. We bevestigen de timing en sturen de voorbereidende interviewvragen, een korte lijst om te lezen voor het gesprek.",
  },
  {
    label: "Stap 2",
    text: "Het founder-interview vindt plaats op dag één. Vijf werkdagen later landt de strategische baseline note in je inbox.",
  },
  {
    label: "Stap 3",
    text: "We plannen de presentatiesessie in. Daarna besluit je zelf wat je hierna doet. Geen druk. Geen retainer verbonden.",
  },
];

export default function AuditNL() {
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
            Begin met de audit.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            De audit is de eerste stap van elk MOLA Motion-traject. Het duurt vijf werkdagen. Wat
            terugkomt is een betaald document dat je vertelt wat er niet klopt, wat solide is, en
            wat je eerst moet bouwen.
          </p>
          <div className="mt-8">
            <Button href="#book" variant="primary">
              Boek de audit →
            </Button>
          </div>
        </div>
      </section>

      {/* What you get — condensed, full breakdown lives on how-it-works */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">
            Één founder-interview. De rest doen wij op de achtergrond: concurrentiescan,
            zoekvraaganalyse, en een doorlichting van wat je al hebt. Wat terugkomt is een
            strategische baseline note, een bouwadvies, en een presentatiesessie om het samen
            door te nemen.
          </p>
          <a
            href="/nl/how-it-works#step-1"
            className="font-dm-sans text-[15px] text-burnt-sienna inline-block mt-4 hover:underline underline-offset-4"
          >
            Bekijk precies wat er in de audit zit, per tier →
          </a>
        </div>
      </section>

      {/* What happens after — 3-step mini timeline */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 text-center mb-12">
            Wat er hierna gebeurt.
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
            Boek de audit.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4 text-center">
            Vul het formulier hieronder in. We bevestigen je startdatum binnen één werkdag.
          </p>
          <div className="mt-10">
            <AuditFormNL />
          </div>
          <p className="font-space-mono uppercase text-[10px] tracking-wider text-zinc-950/50 mt-6 text-center">
            De audit wordt vooraf gefactureerd voordat het werk start, te betalen per
            bankoverschrijving. Vijf werkdagen gaan in vanaf bevestiging van betaling.
          </p>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "Wat als ik niet zeker weet welke tier ik ben?",
            answer:
              "Vul het formulier in en beschrijf je situatie. Bij twijfel, ga uit van de startup audit (€1.500), die kost minder en de beoordeling vertelt ons of jouw situatie dichter bij scaleup ligt.",
          },
          {
            question: "Hoe bereid ik me voor op het interview?",
            answer:
              "We sturen vier of vijf vragen om te lezen voor het gesprek. Je hoeft geen antwoorden voor te bereiden, lees ze gewoon zodat de context in je hoofd zit. Het interview is een gesprek, geen presentatie.",
          },
          {
            question: "Kan ik de audit plannen op een specifieke startdatum?",
            answer:
              "Ja. Vermeld in het formulier de datum waarop je wilt starten en we bevestigen of die beschikbaar is. Doorlooptijd is doorgaans één tot twee weken van aanvraag tot start.",
          },
          {
            question: "Wat als ik na de audit niet wil doorgaan?",
            answer:
              "Geen probleem. De audit is een volledige, op zichzelf staande deliverable. De strategische baseline note is van jou. Je kunt het gebruiken om een ander bureau te briefen, de foundations zelf te bouwen, of het op de plank laten liggen. Geen verplichting om door te gaan.",
          },
        ]}
      />
    </>
  );
}
