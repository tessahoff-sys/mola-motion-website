import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { BigNumeral } from "@/components/BigNumeral";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hoe MOLA Motion werkt: audit, foundations, abonnement",
  description:
    "Elk traject begint met een betaalde audit van 5 dagen. Dan de foundations. Dan het abonnement. Hier lees je precies hoe elke stap werkt en wat je krijgt.",
  alternates: {
    languages: {
      en: `${SITE_URL}/how-it-works`,
      nl: `${SITE_URL}/nl/how-it-works`,
    },
  },
  openGraph: {
    title: "Hoe MOLA Motion werkt: het driestappenmodel",
    description:
      "Eerst de audit. Dan de foundations. Dan draait het abonnement. Hier lees je precies hoe elke stap werkt.",
    type: "website",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Hoe MOLA Motion werkt",
  description: "Driestappenmodel: betaalde audit, foundations bouwen, doorlopend abonnement.",
  step: [
    {
      "@type": "HowToStep",
      name: "De audit",
      text: "Een betaalde diagnose van 5 dagen die positionering, ICP, messaging, GTM en website beoordeelt.",
    },
    {
      "@type": "HowToStep",
      name: "De foundations",
      text: "Positionering, ICP, messaging, GTM en website gebouwd in de juiste volgorde.",
    },
    {
      "@type": "HowToStep",
      name: "Het abonnement",
      text: "Doorlopende content, SEO, concurrentiemonitoring en strategie.",
    },
  ],
};

export default function HowItWorksNL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            Hoe het werkt.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            De meeste marketingtrajecten beginnen met het bureau dat beslist wat je nodig hebt.
            Dit begint met een betaalde diagnose die dat uitzoekt. Zo werkt het model, in drie
            stappen, in volgorde.
          </p>
        </div>
      </section>

      {/* Step 1: The audit — text left, detail right */}
      <section id="step-1" className="relative bg-white border-t border-zinc-950/10 overflow-hidden scroll-mt-48">
        <BigNumeral n={1} className="absolute -top-6 left-0 text-[10rem] text-zinc-950/[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Label color="grey">Stap 01</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">De audit.</h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              De audit is de eerste en enige verbintenis die je aangaat voordat er iets anders
              besloten wordt.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Het duurt vijf werkdagen, beginnend met één founder-interview. De rest doen wij:{" "}
              <span className="font-semibold text-zinc-950">
                uitzoeken aan wie je zou moeten verkopen, wat je zou moeten zeggen en waarom het
                anders is, en waar je zichtbaar moet zijn om klanten te vinden.
              </span>{" "}
              Je ziet dat terug in de afkortingen die we intern gebruiken, ICP, positionering,
              GTM, in het overzicht rechts.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Wat terugkomt vertelt je waar je foundations staan, wat er niet klopt, wat solide
              is, en wat je eerst moet bouwen. Een betaald advies. Geen voorstel. Geen scope voor
              een retainer die je al aangeboden wordt.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <DetailBox
              title="Startup audit · €1.500"
              meta="5 werkdagen"
              items={[
                "1 founder-interview",
                "Concurrentiescan + zoekvraaganalyse",
                "Doorlichting van bestaande website en materiaal",
              ]}
              output="Een strategische baseline note met ICP-hypothese, positionering, narratief, voice en messaging, en GTM-aanpak, plus een bouwadvies en een presentatiesessie"
            />
            <DetailBox
              title="Scaleup audit · €2.500"
              meta="5 werkdagen"
              items={[
                "1 founder-interview + tot 5 klantinterviews",
                "Concurrentiescan + zoekvraaganalyse",
                "Doorlichting van bestaande website en materiaal",
              ]}
              output="Een volledig auditdocument met ICP, positionering, narratief, voice en messaging, GTM en salespraktijken, plus een bouwadvies en een presentatiesessie"
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
                Eén sprint van twee weken, samen gebouwd
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "ICP-definitie",
                  "Positioneringshypothese",
                  "GTM-hypothese",
                  "Voice note",
                  "Messaging starter",
                  "Website brief en build",
                  "Content starterpakket",
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
                Losse deliverables, bepaald door de audit
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "ICP-definitie en validatie",
                  "Marktonderzoek en concurrentieanalyse",
                  "Positionering en narratief",
                  "GTM motion design (indien nodig)",
                  "Voice note",
                  "Messaging architecture",
                  "Website messaging brief",
                  "Sales enablement materiaal",
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
            <Label color="grey">Stap 02</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">
              De foundations.
            </h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              De audit geeft je het advies. De foundations bouwen het.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Positionering voor messaging. ICP voor content. GTM voor abonnement.{" "}
              <span className="font-semibold text-zinc-950">
                Weet aan wie je verkoopt en wat je anders maakt voordat je iets schrijft, en weet
                waar je daadwerkelijk klanten vindt voordat je geld uitgeeft om onder hun aandacht
                te komen.
              </span>
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Een paar termen uitgelegd: een voice note is een korte referentie voor hoe je moet
              klinken in tekst, toon, woorden om te vermijden, voorbeelden in je eigen woorden.
              Een messaging starter (of, op scaleup tier, een volledige messaging architecture)
              vertaalt positionering naar de daadwerkelijke zinnen die je gebruikt op de site, in
              sales en in content. De website en content komen als laatste, zodra de woorden
              daaronder vastliggen.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Bij startup tier bouwen we alles in de Foundations Sprint samen met jou, verspreid
              over twee weken werksessies, niet achteraf opgeleverd als een stapel documenten.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Bij scaleup tier wordt elke deliverable bepaald en in volgorde gezet door de audit,
              en vervolgens gebouwd en geleverd op zijn eigen tijdlijn, niet gebundeld in één
              sprint.
            </p>
            <div className="mt-6">
              <Button href="/nl/pricing" variant="text-sienna">
                Bekijk precies wat elke tier omvat →
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
            <Label color="grey">Stap 03</Label>
            <h2 className="font-dm-sans font-medium text-2xl text-zinc-950 mt-3">
              Het abonnement.
            </h2>
            <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-5">
              Dit is het deel dat de meeste bureaus je als eerste verkopen.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Hier komt het als laatste. Zodra de foundations staan, draait het abonnement de
              motor:{" "}
              <span className="font-semibold text-zinc-950">
                we blijven content publiceren, zorgen dat mensen je vinden op Google en in
                AI-antwoorden zoals ChatGPT, Gemini en Claude, houden concurrenten in de gaten,
                en sturen je elke maand een helder overzicht van wat werkt.
              </span>{" "}
              Het start pas zodra de foundations gebouwd zijn, nooit parallel terwijl er al
              content gepubliceerd wordt op positionering die niet getest is.
            </p>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
              Een senior marketeer stuurt de strategie, tone of voice en elke beslissing op jouw
              account, keurt goed wat er live gaat, en lost onduidelijkheden op. AI-agents nemen
              de productie voor hun rekening: opstellen, research, monitoring, content-varianten,
              battlecard-updates. Elke maand krijg je een update in je inbox: resultaten,
              besluiten, wat er nog aankomt.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <DetailBox
              title="Startup abonnement · €1.500/maand"
              meta="Minimaal 3 maanden · alleen organisch, geen paid media op dit niveau"
              items={[
                "Content en social (4–6 posts/week + 1 long-form/maand)",
                "SEO basis: on-page, meta, interne links",
                "Concurrentiemonitoring",
                "Maandelijkse strategie-update",
              ]}
            />
            <DetailBox
              title="Scaleup abonnement · vanaf €2.500/maand"
              meta="Minimaal 6 maanden"
              items={[
                "Content en social",
                "SEO en vindbaarheid in AI-zoekresultaten",
                "Concurrentiemonitoring",
                "Marketing ops",
                "Maandelijkse strategie-update",
              ]}
              optional="Paid media module, apart geprijsd"
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
            Waarom de volgorde ertoe doet.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            De meeste marketingtrajecten slaan de diagnose over en starten meteen met uitvoering.
            Content wordt gepubliceerd voordat de ICP is bepaald. De website wordt gebouwd
            voordat positionering vastligt. Paid acquisitie draait voordat het bericht getest is.
            Het resultaat is veel marketingactiviteit die niet optelt, omdat de basis waarop het
            gebouwd is niet solide is.
          </p>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-4">
            Het driestappenmodel bestaat om dat te voorkomen.
          </p>
          <p className="font-dm-sans font-semibold text-base leading-snug text-zinc-950 mt-3">
            De audit vindt de gaten. De foundations vullen ze. Het abonnement draait op iets dat
            goed is neergezet.
          </p>
          <div className="mt-8">
            <Button href="/nl/pricing" variant="text-sienna">
              Bekijk precies wat elke tier omvat →
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "Hoe lang duurt het hele proces?",
            answer:
              "De audit duurt vijf werkdagen. Bij startup tier volgt daarna de Foundations Sprint van twee weken. Het abonnement start vanaf dat punt, minimaal drie maanden. Het volledige pad van eerste gesprek tot lopend abonnement duurt ongeveer drie tot vier weken.",
          },
          {
            question: "Moet ik alle drie de stappen doorlopen?",
            answer:
              "De audit is verplicht voordat er iets anders wordt afgesproken. De foundations-stap hangt af van wat de audit aanbeveelt, sommige klanten hebben al solide foundations en gaan sneller door naar het abonnement, al is dat in een vroege fase ongebruikelijk. Het abonnement vereist dat de foundations er staan.",
          },
          {
            question: "Wat gebeurt er tijdens het founder-interview?",
            answer:
              "Het is een gestructureerd gesprek over: wie je klanten zijn, wat ze zeggen als ze het probleem beschrijven dat jij oplost, hoe jij uitlegt wat je doet en aan wie, wat werkt in je sales motion, en wat je al hebt geprobeerd in marketing. Het interview wordt met jouw toestemming opgenomen en vormt een belangrijke input voor de audit.",
          },
          {
            question: "Wat krijg ik aan het einde van de audit?",
            answer:
              "Een strategische baseline note met de huidige staat op elk vlak en de belangrijkste gaten. Een bouwadvies: wat je eerst moet bouwen, of dat de Foundations Sprint is bij startup tier of het scaleup bouwpad. Een presentatiesessie waarin we de bevindingen samen doornemen.",
          },
          {
            question: "Kan ik alleen de audit doen zonder me daarna aan iets te verbinden?",
            answer:
              "Ja. De audit is een volledige, op zichzelf staande deliverable. Wat je terugkrijgt heeft op zichzelf waarde, je kunt het advies gebruiken om de foundations zelf te bouwen, of om een ander bureau te briefen. De meeste klanten gaan door omdat de scope duidelijk is, niet omdat ze ergens aan vastzitten.",
          },
        ]}
      />
    </>
  );
}
