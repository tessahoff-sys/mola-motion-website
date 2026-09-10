import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { PullQuote } from "@/components/PullQuote";
import { CTA_PRIMARY_NL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Over MOLA Motion: wie het gebouwd heeft en waarom",
  description:
    "MOLA Motion is gebouwd door een marketeer met 20+ jaar ervaring in B2B SaaS-positionering en GTM. Dit is het verhaal achter het audit-first, AI-productiemodel.",
  alternates: {
    languages: {
      en: `${SITE_URL}/about`,
      nl: `${SITE_URL}/nl/about`,
    },
  },
  openGraph: {
    title: "Over MOLA Motion: wie erachter zit en waarom",
    description: "Gebouwd door een senior B2B SaaS-marketeer. Audit-first, AI-productiemodel. Dit is waarom het bestaat.",
    type: "website",
  },
};

export default function AboutNL() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="flex justify-center mb-4">
            <Triangle className="w-5 h-5 text-burnt-sienna" />
          </div>
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
            Over MOLA Motion.
          </h1>

          {/* Why this exists — editorial layout, centred narrow */}
          <div className="mt-12 flex flex-col gap-5">
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Ik begon MOLA Motion omdat ik op zoek was naar een nieuwe baan. Ik kwam steeds
              dezelfde vacature tegen: eerste PMM, eerste Marketing Director, brede scope, veel
              ambitie, alles voor iedereen willen doen. Een medior marketeer kan die scope
              waarschijnlijk niet aan. Een senior neemt het salaris niet aan. Dus blijft de rol
              open staan, of wordt ze verkeerd ingevuld.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              De meeste van deze bedrijven waren SaaS-startups en scale-ups. Slimme founders en
              engineers die weten hoe je iets bouwt, maar wat dan? Ze weten dat ze marketing
              nodig hebben. Ze weten alleen niet wat dat betekent.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Rond diezelfde tijd zag ik SaaS-bedrijven complete platforms bouwen met een fractie
              van de engineers die het vroeger kostte, AI die het werk deed dat een team vroeger
              deed. Dat bracht me op dezelfde vraag over marketing. Als ik AI-agents inzet voor
              de productie, kan ik aanbieden wat ik weet: 20+ jaar B2B SaaS-positionering,
              go-to-marketstrategie en messaging, voor een prijs die deze bedrijven daadwerkelijk
              kunnen dragen.
            </p>
          </div>

          <PullQuote className="my-12 mx-auto max-w-md">
            Als ik AI-agents inzet voor de productie, kan ik aanbieden wat ik weet voor een prijs
            die deze bedrijven daadwerkelijk kunnen dragen.
          </PullQuote>

          {/* The model — editorial layout */}
          <div className="flex flex-col gap-5">
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Eén senior marketeer stuurt de strategie, tone of voice en elke beslissing op het
              account, keurt goed wat er live gaat, en lost onduidelijkheden op. AI-agents nemen
              de productie voor hun rekening: opstellen, research, monitoring, content-varianten,
              battlecard-updates. Specialistische partners komen erbij voor vakwerk, white-label,
              designpolish op decks en advertenties. Die verdeling maakt de prijs mogelijk zonder
              in te leveren op kwaliteit.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Het audit-first stuk is belangrijk. De meeste bureaus beginnen met een retainer. Het
              bureau zoekt op jouw kosten uit wat je nodig hebt zodra je getekend hebt. Een
              betaalde diagnose die toegang geeft tot de samenwerking is een eerlijke eerste
              transactie. Beide partijen verbinden zich eraan. En het advies is betrouwbaar, omdat
              de audit zelf het echte werk is, geen verkooppraatje vermomd als analyse.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
              Ik heb de agents zelf gebouwd en verfijnd op basis van wat ik weet dat de output zou
              moeten zijn. Dat is geen badge. Het is een kwaliteitseis. Als je niet weet hoe goede
              positionering klinkt, kun je het verschil niet horen tussen scherpe output en
              zelfverzekerd klinkende onzin. De agents zijn een versterker van inzicht, geen
              vervanging ervoor.
            </p>
          </div>
        </div>
      </section>

      {/* The first client — proof section, Zinc 50 background */}
      <section className="relative bg-zinc-50 border-t border-zinc-950/10 overflow-hidden">
        <Triangle className="absolute top-1/2 -translate-y-1/2 -left-10 w-40 h-40 text-zinc-950/[0.04] -rotate-6" />
        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
          <Label color="sienna" className="block mb-3">Klantvoorbeeld</Label>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
            VIBOR is een workflow-orchestratieplatform voor freight en logistiek. Toen we
            begonnen, wisten ze hoe ze het product moesten bouwen, maar konden ze de waarde niet
            duidelijk verwoorden voor verschillende doelgroepen. Na de sprint hebben ze een
            consistente manier om over zichzelf te praten, op elk kanaal en in elk format. Ze
            weten wat ze wel en niet moeten zeggen. Dat is de basis. Alles daarna loopt rechter
            dankzij die basis.
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
            title="Achtergrond"
            items={[
              "20+ jaar in marketing, positionering en go-to-market voor B2B SaaS",
              "Bouwde de agent-stack vanaf nul, verfijnd met elk traject",
              "Ervaring als Marketing Director en Head of Marketing bij SaaS-bedrijven in Europa",
              "Gevestigd in Europa. Werkt wereldwijd met Engelstalige markten.",
            ]}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-sienna-400 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Werk met iemand die dit specifieke werk op deze specifieke fase al gedaan heeft.
          </h2>
          <div className="mt-8">
            <Button
              href={CTA_PRIMARY_NL.href}
              variant="primary"
              className="!bg-charcoal !text-white hover:!bg-charcoal/90"
            >
              {CTA_PRIMARY_NL.label} →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "Is dit een team of een zelfstandige?",
            answer:
              "MOLA Motion is één senior marketeer die strategie en voice stuurt, met AI-agents voor de productie en specialistische partners voor vakwerk (design, specifieke tekstformats) op white-labelbasis. Je werkt rechtstreeks met één persoon. Geen accountmanagers, geen juniors, geen overdracht halverwege het traject.",
          },
          {
            question: "Met hoeveel klanten werk je gelijktijdig?",
            answer:
              "Een klein aantal: genoeg om elk traject senior aandacht te geven. Het model hangt af van één senior marketeer die de strategie stuurt op elk traject, wat de capaciteit beperkt tot een aantal dat de kwaliteit beschermt.",
          },
          {
            question: "Waar ben je gevestigd?",
            answer:
              "Gevestigd in Europa. MOLA Motion werkt met B2B SaaS-bedrijven in Europa en Engelstalige markten: Benelux, DACH, Noordse landen, VK, en verder. Alle trajecten verlopen op afstand.",
          },
        ]}
      />
    </>
  );
}
