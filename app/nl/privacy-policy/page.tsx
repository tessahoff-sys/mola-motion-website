import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacybeleid",
  alternates: {
    languages: {
      en: `${SITE_URL}/privacy-policy`,
      nl: `${SITE_URL}/nl/privacy-policy`,
    },
  },
};

export default function PrivacyPolicyNL() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
          Privacybeleid.
        </h1>

        <div className="bg-zinc-50 p-5 mt-10">
          <p className="font-space-mono uppercase text-[10px] tracking-wider text-zinc-950/60">
            Concept: juridische toetsing volgt nog voor lancering
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">
            MOLA Motion (&quot;wij&quot;, &quot;ons&quot;) zet zich in om je privacy te beschermen
            en je gegevens te behandelen conform de Algemene Verordening Gegevensbescherming
            (AVG/GDPR). Dit beleid legt uit wat we verzamelen, hoe we het gebruiken, en welke
            rechten je erover hebt.
          </p>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              1. Welke gegevens we verzamelen
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We verzamelen de informatie die je ons rechtstreeks geeft (je naam, e-mailadres en
              bedrijfsnaam) wanneer je het auditaanvraagformulier invult, je abonneert op de
              nieuwsbrief, of ons op een andere manier contacteert. We verzamelen ook basale
              analysegegevens over hoe bezoekers deze site gebruiken, zoals bekeken pagina&apos;s
              en algemene gebruikspatronen.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              2. Hoe we het gebruiken
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We gebruiken je gegevens om te reageren op je aanvraag, om de diensten te leveren
              waarvoor je ons inschakelt (audits, foundationswerk en abonnementen) en om te
              begrijpen en verbeteren hoe deze site werkt. We gebruiken je gegevens niet voor iets
              anders dan deze doeleinden.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              3. Met wie we het delen
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We delen betaalgegevens met onze betalingsverwerker, Stripe, om diensten te
              factureren en betalingen te verwerken. We gebruiken een analyseprovider om
              sitegebruik op geaggregeerd niveau te begrijpen. We delen je gegevens niet met
              advertentienetwerken, en we verkopen je gegevens niet aan derden.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              4. Hoe lang we het bewaren
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Als je een aanvraag indient die niet tot een traject leidt, bewaren we die gegevens
              tot 3 jaar. Als een traject start, bewaren we gegevens voor de duur van de
              samenwerking plus 5 jaar, conform standaard boekhoudkundige en wettelijke
              bewaartermijnen.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              5. Jouw rechten
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Onder de AVG heb je het recht om de gegevens die we over je hebben in te zien,
              onjuiste gegevens te laten corrigeren, je gegevens te laten wissen, je gegevens in
              een overdraagbaar formaat te ontvangen, en bezwaar te maken tegen hoe we ze
              verwerken. Om een van deze rechten uit te oefenen, neem contact met ons op via de
              gegevens hieronder. Je hebt ook het recht om een klacht in te dienen bij je lokale
              gegevensbeschermingsautoriteit.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              6. Contact
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Voor vragen over dit beleid of je gegevens, neem contact met ons op via{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-burnt-sienna hover:underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
