import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY_NL, CONTACT_EMAIL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fractional CMO en communicatiestrategie",
  description:
    "Fractional CMO en communicatieadvies voor B2B SaaS sinds 2022, deel van een marketingcarrière die begon in 2004. Voor bedrijven boven €10M ARR die senior leiderschap nodig hebben zonder fulltime aanname.",
  alternates: {
    languages: {
      en: `${SITE_URL}/fractional-cmo`,
      nl: `${SITE_URL}/nl/fractional-cmo`,
    },
  },
  openGraph: {
    title: "MOLA Motion: Fractional CMO en communicatiestrategie",
    description:
      "Senior marketingleiderschap of communicatiestrategie, direct geleverd. Fractional CMO-werk sinds 2022, per opdracht bepaald.",
    type: "website",
  },
};

export default function FractionalCMONL() {
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
              Ik werk als fractional CMO en communicatieadviseur sinds 2022
            </span>
            , gebaseerd op een marketingcarrière in B2B SaaS-positionering en go-to-market die
            begon in 2004.
          </p>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-4">
            Twee dingen vallen hieronder: senior marketingleiderschap voor bedrijven die een CMO
            nodig hebben zonder fulltime aanname, en communicatiestrategie en storytelling voor
            hoe een bedrijf zijn verhaal vertelt, extern en intern, als doorlopend adviseur of als
            tijdelijk communicatieadviseur voor een specifiek moment.
          </p>
        </div>
      </section>

      {/* Fractional CMO */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-4xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="sienna">Fractional CMO</Label>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Voor bedrijven boven €10M ARR die een senior marketingleider nodig hebben zonder
              fulltime aanname. Een fractional CMO-opdracht omvat: strategie en prioritering over
              de marketingfunctie, leiderschap van een bestaand intern team, afstemming tussen
              marketing en sales, rapportage op boardniveau, en het narratief richting investeerders.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Per gesprek bepaald en geprijsd, op basis van scope, uren per week en duur.
            </p>
            <div className="mt-6">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost-light">
                Neem contact op →
              </Button>
            </div>
          </div>
          <DetailBox
            title="Voor wie dit is"
            items={[
              "B2B SaaS-bedrijven boven €10M ARR met een intern marketingteam dat senior leiderschap nodig heeft",
              "Bedrijven in transitie, tussen een vertrekkende CMO en een permanente aanname",
              "Bedrijven die zich voorbereiden op een Series C of een nieuwe markt betreden",
              "Situaties die een CMO-aanwezigheid nodig hebben voor een bepaalde periode in plaats van doorlopend",
            ]}
          />
        </div>
      </section>

      {/* Communications strategy */}
      <section className="bg-white border-t border-zinc-950/10">
        <div className="mx-auto max-w-4xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="sienna">Communicatiestrategie</Label>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Een communicatiestrategie-opdracht omvat het verhaal en de storytelling die een
              bedrijf extern gebruikt (naar pers, investeerders, partners) en de interne
              communicatie-infrastructuur die het team en het board op één lijn houdt.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Afhankelijk van de scope kan dit omvatten: een thought-leadershipplatform voor de
              directie (LinkedIn, bylines, spreekpitches), strategie voor pers- en analistenrelaties,
              investeerdersnarratief en updatesjablonen, of een volledige externe communicatie-architectuur.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Dit kan ook de vorm aannemen van een tijdelijke rol als communicatieadviseur:
              ingezet voor een bepaalde periode, een fondsenwerving, een lancering, een crisis, in
              plaats van een doorlopende opdracht.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Net als de fractional CMO-opdracht wordt dit per gesprek bepaald. De juiste vorm
              hangt af van wat er al staat en wat het bedrijf het meest nodig heeft.
            </p>
          </div>
          <DetailBox
            title="Voor wie dit is"
            items={[
              "Bedrijven die zich voorbereiden op een fondsenwerving, een publieke aankondiging, marktuitbreiding, of een herpositionering",
              "Bedrijven met een sterk productverhaal dat de juiste doelgroep niet bereikt",
              "Founders die een thought-leadershippositie moeten opbouwen voor een Series B of C",
              "Bedrijven die een communicatieadviseur nodig hebben voor een bepaalde periode in plaats van een doorlopende opdracht",
            ]}
          />
        </div>
      </section>

      {/* How to start */}
      <section className="bg-zinc-50 border-t border-zinc-950/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950">
            Hoe te starten.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Beide aanbiedingen beginnen met een gesprek, niet met een audit. Heb je senior
            leiderschap of communicatieondersteuning nodig, neem dan rechtstreeks contact op.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-dm-sans text-[15px] text-burnt-sienna block mt-3 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Of, als je niet zeker weet welk aanbod past, begin dan met de audit. Die werkt in elke
            fase en de uitkomst vertelt het je.
          </p>
          <div className="mt-8">
            <Button href={CTA_PRIMARY_NL.href} variant="primary">
              {CTA_PRIMARY_NL.label} →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "Hoe lang doe je al fractional CMO-werk?",
            answer:
              "Sinds 2022, deel van een marketingcarrière in B2B SaaS-positionering en go-to-market die begon in 2004. Het fractional en communicatieadvieswerk draait op hetzelfde inzicht dat over die carrière is opgebouwd.",
          },
          {
            question: "Hoeveel uur per week omvat een fractional CMO-opdracht?",
            answer:
              "Per opdracht bepaald, doorgaans één tot drie dagen per week, al is een fulltime opdracht ook mogelijk. Sommige bedrijven hebben een CMO-aanwezigheid nodig voor specifieke periodes (een fondsenwerving, een herlancering, een marktintroductie) in plaats van een doorlopende regeling. Beide zijn mogelijk.",
          },
          {
            question: "Kan het communicatiewerk kortdurend zijn in plaats van doorlopend?",
            answer:
              "Ja. Communicatiestrategiewerk neemt vaak de vorm aan van een tijdelijke adviesrol: voor een fondsenwerving, een lancering, een crisis, of een ander specifiek moment. Fractional CMO-werk is ook beschikbaar voor bepaalde periodes in plaats van een doorlopende regeling.",
          },
          {
            question: "Werk je ook met bedrijven buiten B2B SaaS voor deze opdrachten?",
            answer:
              "Jazeker. Mijn meest recente ervaring ligt in B2B SaaS, maar ik heb in veel sectoren gewerkt. Die ervaring is breed toepasbaar, en een nieuwe markt of product leer ik snel, dankzij diezelfde ervaring.",
          },
        ]}
      />
    </>
  );
}
