import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY_NL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over MOLA Motion: de audit, het model, prijzen, en hoe dit zich verhoudt tot intern aannemen of een bureau.",
  alternates: {
    languages: {
      en: `${SITE_URL}/faq`,
      nl: `${SITE_URL}/nl/faq`,
    },
  },
  openGraph: {
    title: "MOLA Motion FAQ: de audit, prijzen, en hoe het model werkt",
    description: "Antwoorden op de meest gestelde vragen over werken met MOLA Motion.",
    type: "website",
  },
};

const groups: { category: string; items: FaqItem[] }[] = [
  {
    category: "Over het model",
    items: [
      {
        question: "Wat is MOLA Motion?",
        answer:
          "MOLA Motion is een marketing productiebureau voor B2B SaaS-bedrijven in twee fasen: founders met 1–2 klanten op weg naar Series A, en scale-ups met €1–10M ARR zonder eigen marketingteam. Elk traject begint met een betaalde audit die positionering, ICP, messaging, GTM, website en sales enablement beoordeelt, en aanbeveelt wat er eerst gebouwd moet worden.",
      },
      {
        question: "Wat betekent “marketing productiebureau”?",
        answer:
          "Het betekent dat het werk gebouwd wordt, niet alleen gepland. In tegenstelling tot een adviestraject dat eindigt met een strategiedocument, produceert MOLA Motion de deliverables (positioneringszin, messaging architecture, website, content) en draait het de doorlopende abonnement die de productie elke maand laat doorlopen.",
      },
      {
        question: "Hoe verhoudt dit zich tot een AI-marketingbureau?",
        answer:
          "De meeste AI-marketingbureaus gebruiken AI om content in volume te produceren. MOLA Motion gebruikt AI-agents voor de productie, maar het inzicht achter die productie (wat te positioneren, wat te zeggen, waar te verspreiden) blijft bij een senior marketeer met 20+ jaar ervaring in B2B SaaS. De AI is een versterker van inzicht, geen vervanging ervoor.",
      },
    ],
  },
  {
    category: "Over de audit",
    items: [
      {
        question: "Waarom begint het traject met een betaalde audit?",
        answer:
          "Omdat de meeste founders op dit punt niet precies weten welke marketing ze nodig hebben, en elk bureau dat vertelt wat je moet kopen zonder diagnose iets verkoopt, geen diagnose stelt. De audit is een op zichzelf staand, betaald stuk werk. Wat het oplevert heeft waarde, ongeacht of je doorgaat.",
      },
      {
        question: "Wat gebeurt er tijdens de vijf dagen van de audit?",
        answer:
          "Dag één is het founder-interview. Dagen twee tot vier zijn onderzoek en analyse: concurrentiescan, zoekvraaganalyse, doorlichting van bestaand materiaal. Dag vijf is opstellen en synthese. De strategische baseline note wordt op dag vijf geleverd, en een presentatiesessie wordt de week erna ingepland.",
      },
      {
        question: "Kan ik alleen de audit doen?",
        answer:
          "Ja. De audit is een volledige deliverable. Je kunt de uitkomst gebruiken om een ander bureau te briefen, de foundations zelf te bouwen, of er niets mee te doen. De meeste klanten gaan door omdat het advies specifiek is, maar je verbindt je aan niets voorbij de audit totdat je daarvoor kiest.",
      },
    ],
  },
  {
    category: "Vergelijking met alternatieven",
    items: [
      {
        question: "Wat is het verschil met het aannemen van een marketingmanager?",
        answer:
          "Een fulltime marketingmanager is een vaste kostenpost het hele jaar door, meestal €5.000–7.000 per maand inclusief salaris, secundaire voorwaarden en overhead, of er nu genoeg werk is om die tijd te vullen of niet. MOLA Motion is opgezet voor bedrijven die eerst foundations moeten bouwen, en rekent daarna alleen voor wat er echt nodig is.",
      },
      {
        question: "Wat is het verschil met een traditioneel bureau?",
        answer:
          "Traditionele bureaus verkopen retainers. De strategie wordt op jouw kosten uitgezocht nadat je getekend hebt. Het audit-first model betekent dat de scope bepaald is voordat het traject start, je betaalt niet voor een bureau dat uitzoekt wat je nodig hebt terwijl het je de uren in rekening brengt.",
      },
      {
        question: "Wat is het verschil met een freelancer via Toptal of Growth Collective?",
        answer:
          "Een freelancer geeft je een specifiek paar handen. Er is geen strategisch zicht op wat er gebouwd moet worden of in welke volgorde. MOLA Motion levert de strategische laag (wat te bouwen, in welke volgorde, vanuit welke foundations) en de productielaag (het bouwen ervan).",
      },
      {
        question: "Wat is het verschil met de positioneringsconsultancy van April Dunford?",
        answer:
          "April Dunford doet positioneringswerk: methodologiegedreven, projectgebonden, zonder uitvoeringslaag. MOLA Motion doet positioneringswerk en bouwt daarna de uitvoeringslaag erop: de messaging architecture, de website, de content, het abonnement. Het traject eindigt niet met een positioneringsdocument.",
      },
    ],
  },
  {
    category: "Prijzen",
    items: [
      {
        question: "Wat is de totale investering voor een startup-traject?",
        answer:
          "Audit: €1.500. Foundations Sprint: €2.500. Abonnement à €1.500/maand voor minimaal drie maanden: €4.500. Totaal over vier tot vijf maanden: €8.500. Dat is het volledige pad van diagnose tot lopende motor.",
      },
      {
        question: "Waarom publiceer je prijzen?",
        answer:
          "Omdat prijzen verbergen een verkooptactiek is. Founders op dit punt beoordelen of ze het zich kunnen veroorloven, ze een gesprek laten boeken om de prijs te ontdekken verspilt hun tijd en suggereert dat de prijs óf gênant óf onderhandelbaar is. Geen van beide is het.",
      },
    ],
  },
  {
    category: "Werken met MOLA Motion",
    items: [
      {
        question: "Met hoeveel klanten werkt MOLA Motion gelijktijdig?",
        answer:
          "Een klein aantal: genoeg om elk traject senior aandacht te geven. Het model hangt af van één senior marketeer die de strategie stuurt op elk traject, wat de capaciteit beperkt tot een aantal dat de kwaliteit beschermt.",
      },
      {
        question: "Wat moet ik geregeld hebben voordat we starten?",
        answer:
          "Een product dat bestaat en minstens één betalende klant (of een sterke reden waarom je in de juiste fase zit voor een startup audit). De audit kan werken met minimaal materiaal. Wat het nodig heeft is een gesprek met jou.",
      },
      {
        question: "Wat als de audit foundations aanbeveelt die ik me nog niet kan veroorloven?",
        answer:
          "De taak van de audit is aanbevelen wat je moet bouwen. Niet de volgende fase verkopen. Als de volledige foundations-scope nu niet de juiste investering is, vertelt de audit je wat het belangrijkste enkele ding is en kun je daar beginnen.",
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

export default function FaqNL() {
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
            Veelgestelde vragen.
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
          <Button href={CTA_PRIMARY_NL.href} variant="primary">
            {CTA_PRIMARY_NL.label} →
          </Button>
          <Button href="/nl/pricing" variant="text-sienna">
            Bekijk wat er inbegrepen is →
          </Button>
        </div>
      </section>
    </>
  );
}
