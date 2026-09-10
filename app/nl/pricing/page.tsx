import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { DetailBox } from "@/components/DetailBox";
import { DeliverableList } from "@/components/DeliverableList";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Faq } from "@/components/Faq";
import { Triangle } from "@/components/Triangle";
import { CTA_PRIMARY_NL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wat je krijgt, en wat het kost",
  description:
    "Elke deliverable in elke fase, met de prijs erbij. Startup audit €1.500. Scaleup audit €2.500. Foundations Sprint €2.500. Abonnement vanaf €1.500/maand.",
  alternates: {
    languages: {
      en: `${SITE_URL}/pricing`,
      nl: `${SITE_URL}/nl/pricing`,
    },
  },
  openGraph: {
    title: "MOLA Motion: wat je krijgt, en wat het kost",
    description:
      "Volledige deliverables en volledige prijzen op één pagina. Audit-first, transparant omdat dat deel is van het verhaal.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MOLA Motion marketingaudit",
  provider: { "@type": "Organization", name: "MOLA Motion" },
  offers: [
    {
      "@type": "Offer",
      name: "Startup audit",
      price: "1500",
      priceCurrency: "EUR",
      description: "5-daagse marketingaudit voor jonge B2B SaaS founders",
    },
    {
      "@type": "Offer",
      name: "Scaleup audit",
      price: "2500",
      priceCurrency: "EUR",
      description: "5-daagse marketingaudit voor B2B SaaS met €1-10M ARR",
    },
    {
      "@type": "Offer",
      name: "Startup Foundations Sprint",
      price: "2500",
      priceCurrency: "EUR",
      description: "Sprint van 2 weken, samen gebouwd, voor jonge B2B SaaS founders",
    },
  ],
};

const objections = [
  {
    quote: "Ik kan me dit niet veroorloven voordat ik weet dat het werkt.",
    answer:
      "Precies daarom begint het traject met een audit en geen retainer. De €1.500 kopen een diagnose. Je ontdekt wat er niet klopt en wat je moet bouwen voordat je je aan iets anders verbindt. Als de audit zegt dat de foundations solide zijn, vertellen we je dat en betaal je niets meer.",
  },
  {
    quote: "Andere bureaus zijn goedkoper.",
    answer:
      "De meeste beginnen met een retainer die het strategiewerk financiert, jij betaalt terwijl zij uitzoeken wat je nodig hebt. Het audit-first model betekent dat je €1.500 betaalt voor de scoping, en dan beslist. De totale investering voordat een eventueel abonnement begint, is €4.000 voor startups (audit plus sprint). Dat is niet duurder. Het is anders geprijsd omdat het werk eerlijk in volgorde staat.",
  },
  {
    quote: "Waarom kost de scaleup tier meer?",
    answer:
      "Scaleup-klanten hebben meer bewijsmateriaal om uit te putten (klantinterviews, win/loss-data, bestaand materiaal) en meer deliverables om te produceren: volledige messaging architecture, GTM motion design, sales enablement. De hogere prijs weerspiegelt de scope, niet een ander team.",
  },
];

export default function PricingNL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
            Wat je krijgt.
          </h1>
          <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
            MOLA Motion werkt op twee niveaus, met een ander aanbod bij elk: andere deliverables,
            andere tijdlijnen, andere prijzen. De meeste bureaus publiceren dit niet. Wij wel,
            omdat transparantie deel is van hoe het audit-first model werkt.
          </p>
        </div>
      </section>

      {/* Jump nav — sticky below the main header */}
      <div className="sticky top-36 z-40 bg-zinc-50/95 backdrop-blur border-y border-zinc-950/10">
        <nav className="mx-auto max-w-4xl px-6 py-3 flex items-center gap-x-6 gap-y-2 overflow-x-auto">
          {[
            { href: "#audit", label: "Audit" },
            { href: "#foundations", label: "Foundations" },
            { href: "#subscription", label: "Abonnement" },
            { href: "#add-ons", label: "Add-ons" },
            { href: "#compare", label: "Vergelijk" },
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
          <Label color="grey">Stap 01</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            De audit.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            De eerste en enige verbintenis voordat er iets anders besloten wordt. Vijf werkdagen,
            één founder-interview, en een schriftelijk advies voor wat je hierna moet bouwen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <DetailBox
              title="Startup audit · €1.500"
              meta="5 werkdagen"
              items={[
                "Dimensies: ICP-hypothese, positionering, narratief, voice en messaging, GTM-aanpak",
                "1 founder-interview",
                "Concurrentiescan + zoekvraaganalyse",
                "Doorlichting van bestaande website en materiaal",
              ]}
              output="Een strategische baseline note, een bouwadvies, en een presentatiesessie"
            />
            <DetailBox
              title="Scaleup audit · €2.500"
              meta="5 werkdagen"
              items={[
                "Dimensies: ICP, positionering, narratief, voice en messaging, GTM, salespraktijken",
                "1 founder-interview + tot 5 klantinterviews",
                "Concurrentiescan + zoekvraaganalyse",
                "Doorlichting van bestaande website en materiaal",
              ]}
              output="Volledig auditdocument, een bouwadvies, en een presentatiesessie"
            />
          </div>
        </div>
      </section>

      {/* Step 2: The foundations */}
      <section id="foundations" className="bg-white border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Stap 02</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            De foundations.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            De audit geeft je het advies. De foundations bouwen het, in de juiste volgorde.
          </p>

          {/* Startup tier */}
          <div className="mt-12">
            <Label color="sienna">Startup tier</Label>
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-2">
              Foundations Sprint
            </h3>
            <div className="bg-zinc-50 p-6 md:p-10 mt-6">
              <Label color="grey">Deliverables · in afhankelijkheidsvolgorde</Label>
              <div className="mt-6">
                <DeliverableList
                  items={[
                    {
                      title: "Positioneringshypothese",
                      description:
                        "Positionering in één zin: voor wie het is, wat het doet, wat het anders maakt. Inclusief het founder-verhaal in kopertaal, maximaal drie paragrafen. Behandeld als hypothese, verfijnd naarmate er klanten bijkomen.",
                    },
                    {
                      title: "ICP-definitie (v1)",
                      description:
                        "Firmografische en gedragsschets op basis van beschikbaar bewijs en founder-intuïtie. Gelabeld als versie één. Elk kwartaal herzien naarmate er klanten bijkomen.",
                    },
                    {
                      title: "GTM-hypothese",
                      description:
                        "Dominante kanaalkeuze en 90-dagenrichting. Verband en onderbouwing tussen ICP en motion. Een eerste-versie-keuze die vanaf dag één bepaalt waar de content-engine op gericht is. Geen volledig motion design.",
                    },
                    {
                      title: "Voice note",
                      description:
                        "Toon-adjectieven, lijst met te vermijden taal, toon-anker, taalregels, en letterlijke voorbeelden in de woorden van de founder. Vormt de basis voor alle contentproductie. Opgesteld in Sessie 2 zodra een positioneringsconcept er is.",
                    },
                    {
                      title: "Messaging starter",
                      description:
                        "Hero message, 3–5 ondersteunende punten, bewijsangles van bestaande klanten. De werkende messaginglaag waaruit de website en eerste content gebouwd worden.",
                    },
                    {
                      title: "Content database (optioneel)",
                      description:
                        "Alleen als de klant er expliciet één nodig heeft. Categorie Referentie-Intern volledig uitgewerkt; andere categorieën als kale rijen. Geleverd in de tool die past bij de omgeving van de klant: Notion, Confluence, Airtable, Coda, Google Sheets, of Word + Excel.",
                    },
                    {
                      title: "Website brief en build",
                      description:
                        "Zowel brief als build zitten in de sprint. Voor founders zonder site: wat de site moet zeggen en de structuur, dan gebouwd als deel van de sprint. Voor founders met een bestaande site: wat er moet veranderen en waarom, dan bijgewerkt tijdens de sprint.",
                    },
                    {
                      title: "Content starterpakket",
                      description:
                        "4 concept social posts + 1 long-form stuk, klaar om te publiceren zodra de site live gaat.",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-6">
              <div>
                <Label color="grey">Tijdlijn</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  2 weken, samen gebouwd in werksessies
                </p>
              </div>
              <div>
                <Label color="grey">Prijs</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">€2.500 vast</p>
              </div>
            </div>
          </div>

          {/* Scaleup tier */}
          <div className="mt-16">
            <Label color="sienna">Scaleup tier</Label>
            <h3 className="font-dm-sans font-semibold text-xl text-zinc-950 mt-2">Foundations</h3>
            <div className="bg-zinc-50 p-6 md:p-10 mt-6">
              <Label color="grey">Deliverables · in afhankelijkheidsvolgorde</Label>
              <div className="mt-6">
                <DeliverableList
                  items={[
                    {
                      title: "ICP-definitie en validatie",
                      description:
                        "Firmografische en gedragsdefinitie opgebouwd uit klantinterviews, win/loss-analyse en concurrentieonderzoek. Inclusief disqualifiers en koopsignalenkaart.",
                    },
                    {
                      title: "Marktonderzoek en concurrentieanalyse",
                      description:
                        "Doorlichting van concurrentiepositionering, identificatie van witruimte, analyse van zoekvraag. De input waarop elke volgende deliverable rust.",
                    },
                    {
                      title: "Positionering en narratief",
                      description:
                        "De positioneringszin en het volledige strategische narratief: marktverschuiving, het probleem met de oude manier, de nieuwe realiteit, uniek gezichtspunt, de oplossing, het resultaat, de visie.",
                    },
                    {
                      title: "GTM motion design (voorwaardelijk)",
                      description:
                        "Alleen inbegrepen als de audit een gat signaleert. Als de bestaande GTM-motion solide is, wordt deze deliverable overgeslagen. Omvat kanaalstrategie, funnelstadia, verband ICP-motion, en 90-dagenplan.",
                    },
                    {
                      title: "Voice note",
                      description:
                        "Toon- en taalregels opgesteld uit founder-interviews en brandmateriaal. Lijst met te vermijden taal, letterlijke voorbeelden, toon-anker. Vormt de basis voor alle contentproductie.",
                    },
                    {
                      title: "Messaging architecture",
                      description:
                        "Volledige berichthiërarchie, kanaalvarianten, taalregels, omgaan met bezwaren, en vergelijkende content. Geleverd in de tool-omgeving van de klant: Notion, Confluence, Airtable, Coda, Google Sheets, of Word + Excel.",
                    },
                    {
                      title: "Website messaging brief",
                      description:
                        "Pagina-per-pagina briefs voor 8–12 prioriteitspagina's. Wireframes, SEO-integratieblad, conversiepad-kaart. Alleen brief, klant bouwt op basis daarvan.",
                    },
                    {
                      title: "Sales enablement materiaal",
                      description: "Battle cards, gids voor bezwaarafhandeling, demoscript, one-pager. Bepaald door de audit.",
                    },
                    {
                      title: "Interne afstemsessie",
                      description:
                        "Presenteert de volledige messaging architecture aan interne stakeholders. Uitgevoerd zodra alle foundations af zijn.",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-6">
              <div>
                <Label color="grey">Tijdlijn</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  Modulair, in volgorde gezet door het advies van de audit. Typisch: 6–10 weken.
                </p>
              </div>
              <div>
                <Label color="grey">Prijs</Label>
                <p className="font-dm-sans text-[15px] text-zinc-950 mt-2">
                  Bepaald per deliverable, typische range €8.000–15.000 voor de volledige build
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: The subscription */}
      <section id="subscription" className="bg-zinc-50 border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Stap 03</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            Het abonnement.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            Dit is het deel dat de meeste bureaus je als eerste verkopen. Hier komt het als
            laatste, zodra de foundations staan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <DetailBox
              title="Startup abonnement · €1.500/maand"
              meta="Minimaal 3 maanden, dan maand tot maand · alleen organisch, geen paid media op dit niveau"
              items={[
                "Content en social (4–6 posts/week + 1 long-form/maand)",
                "SEO basis: on-page, meta, interne links",
                "Concurrentiemonitoring",
                "Maandelijkse strategie-update",
              ]}
            />
            <DetailBox
              title="Scaleup abonnement · vanaf €2.500/maand"
              meta="Minimaal 6 maanden, dan maand tot maand"
              items={[
                "Content en social",
                "SEO en vindbaarheid in AI-zoekresultaten",
                "Concurrentiemonitoring",
                "Marketing ops",
                "Maandelijkse strategie-update",
              ]}
              optional="Paid media module, zie add-ons hieronder"
            />
          </div>
        </div>
      </section>

      {/* Add-ons and one-time projects */}
      <section id="add-ons" className="bg-white border-t border-zinc-950/10 scroll-mt-48">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Label color="grey">Naast het basisaanbod</Label>
          <h2 className="font-dm-sans font-semibold text-2xl md:text-3xl text-zinc-950 mt-3">
            Add-ons en eenmalige projecten.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5 max-w-2xl">
            De meeste klanten draaien alleen het basisaanbod hierboven. Dit is er voor als je meer
            nodig hebt, geprijsd op dezelfde open manier als al het andere.
          </p>

          <h3 className="font-dm-sans font-semibold text-lg text-zinc-950 mt-10">
            Vaste modules, naast het abonnement
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Paid media",
                price: "€1.500/maand",
                description:
                  "Distributie geleid door een specialist op LinkedIn, Google en Meta. Het budget blijft op jouw kaart, dit is de beheervergoeding. Start zodra de foundations vastliggen en je minimaal €5.000/maand uitgeeft.",
              },
              {
                title: "Corporate Communications",
                price: "Geprijsd per opdracht",
                description:
                  "Tekst en positionering voor financieringsaankondigingen, aanwervingsmomenten en andere communicatie. Wij schrijven, jij of je PR-bureau verspreidt. Een opdracht ter grootte van een persbericht kost doorgaans rond €750.",
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
            Eenmalige projecten, naar behoefte
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Programmatic SEO / AI-search hub",
                price: "€3.500",
                description:
                  "Een gestructureerde content hub gebouwd volgens een gestandaardiseerd template, geschikt voor schaal. Onderhoud komt daarbovenop: inbegrepen in de SEO-scope van het scaleup abonnement, of €500/kwartaal zonder dat.",
              },
              {
                title: "Outbound playbook",
                price: "€2.500 (refresh €1.500)",
                description:
                  "Strategie en tekst voor cold outreach: sequenties, account-listlogica, signaal-naar-trigger mapping. Jij of je outbound-partner voert het uit.",
              },
              {
                title: "Brand- en tone-of-voice handboek",
                price: "€3.500 nieuw · €1.500 doorlichten en verbeteren",
                description:
                  "De volledige versie van de voice note: toonprincipes, woordenschatregels, voorbeelden in diverse formats. De meeste klanten starten met de voice note uit de foundations en upgraden hier later naar.",
              },
              {
                title: "Extra campagnemoment",
                price: "€1.500 per stuk",
                description:
                  "Het scaleup abonnement bevat één campagne per kwartaal. Dit is voor alles daarboven.",
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
            Naast elkaar.
          </h2>
          <ComparisonTable
            columns={["Startup tier", "Scaleup tier"]}
            rows={[
              { label: "Fase", values: ["1–2 klanten", "€1–10M ARR"] },
              { label: "Teamgrootte", values: ["1–5, founder doet marketing", "5–50, één generalist of founder"] },
              { label: "Audit", values: ["€1.500", "€2.500"] },
              { label: "Foundations", values: ["€2.500 vast (Sprint)", "Bepaald per deliverable, typisch €8.000–15.000"] },
              { label: "Foundationsstructuur", values: ["Eén sprint van 2 weken", "Modulair, in volgorde gezet door de audit"] },
              { label: "Website", values: ["Brief + build inbegrepen", "Alleen messaging brief, klant bouwt"] },
              { label: "Abonnement", values: ["€1.500/maand", "vanaf €2.500/maand"] },
              { label: "Minimaal abonnement", values: ["3 maanden", "6 maanden"] },
              { label: "Paid media", values: ["Zelden actief op dit niveau", "Optionele add-on, €1.500/maand"] },
              { label: "Eenmalige projecten", values: ["Beschikbaar wanneer nodig", "Beschikbaar wanneer nodig"] },
            ]}
          />
          <p className="font-dm-sans text-[14px] text-zinc-950/60 text-center mt-6">
            Niet zeker welke voor jou is? In geval van twijfel bepaalt de audit dat, beide tiers
            starten op dezelfde plek.
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
            De eerste stap kost €1.500.
          </h2>
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-5">
            Begin met de audit. Vijf dagen. Één gesprek. Wat terugkomt vertelt je wat je moet
            bouwen.
          </p>
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
        id="faq"
        items={[
          {
            question: "Wat zit er in de audit?",
            answer:
              "Één founder-interview, een concurrentiescan en zoekvraaganalyse, een doorlichting van je bestaande website en materiaal, een strategische baseline note over de staat van je foundations, een bouwadvies voor wat je hierna moet doen, en een presentatiesessie om het samen door te nemen.",
          },
          {
            question: "Wat is het verschil tussen de Foundations Sprint en Foundations op scaleup tier?",
            answer:
              "Ze leveren dezelfde soort uitkomst, positionering, ICP, GTM, messaging, een website, maar op een andere manier. De Foundations Sprint bundelt alles in één samen gebouwd traject van twee weken op startup tier. Op scaleup tier zijn foundations losse deliverables, bepaald en in volgorde gezet op basis van het advies van de audit, doorgaans over zes tot tien weken.",
          },
          {
            question: "Zit er een website build in de startup tier?",
            answer:
              "Ja. Zowel de website brief als de build zitten in de Startup Foundations Sprint. Voor founders zonder site briefen en bouwen we die samen tijdens de sprint. Voor founders met een bestaande site briefen we wat er moet veranderen en werken we die bij tijdens de sprint.",
          },
          {
            question: "Wanneer start het abonnement?",
            answer:
              "Nadat de foundations af en goedgekeurd zijn, of dat de Foundations Sprint is op startup tier of de scaleup-deliverables. Het abonnement start niet voordat de foundations er staan, dat is deel van het model.",
          },
          {
            question: "Wat is de totale kost van audit tot zes maanden abonnement op startup tier?",
            answer:
              "Audit: €1.500. Foundations Sprint: €2.500. Zes maanden abonnement à €1.500/maand: €9.000. Totaal: €13.000 over ongeveer zeven maanden. Dat is het volledige pad van geen foundations tot een lopende maandelijkse motor.",
          },
          {
            question: "Is het abonnement een doorlopend contract?",
            answer:
              "Minimale looptijd is drie maanden op startup tier en zes maanden op scaleup tier. Na het minimum is het maand tot maand met 30 dagen opzegtermijn. Geen lock-in na het minimum.",
          },
          {
            question: "Kan ik losse deliverables kopen op scaleup tier zonder de volledige build te draaien?",
            answer:
              "Ja. Op scaleup tier worden deliverables individueel bepaald en in volgorde gezet door de audit. Je koopt wat de audit aanbeveelt, in de volgorde die hij aanbeveelt. Je betaalt niet voor deliverables waarvan de audit zegt dat je ze niet nodig hebt.",
          },
          {
            question: "Wanneer is de paid media add-on eigenlijk zinvol?",
            answer:
              "Zodra de foundations vastliggen en je bereid bent minimaal €5.000/maand uit te geven, blijft het budget op je eigen kaart, de €1.500/maand dekt het beheer. De meeste klanten op startup tier zijn daar nog niet, dat is normaal, geen teken dat je achterloopt.",
          },
        ]}
      />
    </>
  );
}
