"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_EMAIL } from "@/lib/site-config";

const inputClasses =
  "w-full bg-white border border-zinc-950/20 px-4 py-3 font-dm-sans text-[15px] text-zinc-950 focus:outline-none focus:border-burnt-sienna transition-colors";
const labelClasses = "font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/60 block mb-2";

export function AuditFormNL() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    company: "",
    website: "",
    tier: "Niet zeker",
    state: "",
    source: "",
    questions: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Auditaanvraag: ${values.company || values.name}`;
    const body = [
      `Naam: ${values.name}`,
      `Bedrijfsnaam: ${values.company}`,
      `Website URL: ${values.website || "Niet opgegeven"}`,
      `Welke tier past het best: ${values.tier}`,
      `Huidige marketingstaat: ${values.state}`,
      `Hoe heb je ons gevonden: ${values.source}`,
      `Vragen voor het boeken: ${values.questions || "Geen"}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    router.push("/nl/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className={labelClasses} htmlFor="name-nl">Naam</label>
        <input
          id="name-nl"
          required
          className={inputClasses}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="company-nl">Bedrijfsnaam</label>
        <input
          id="company-nl"
          required
          className={inputClasses}
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="website-nl">Website URL</label>
        <input
          id="website-nl"
          className={inputClasses}
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="tier-nl">Welke tier past het best</label>
        <select
          id="tier-nl"
          className={inputClasses}
          value={values.tier}
          onChange={(e) => setValues((v) => ({ ...v, tier: e.target.value }))}
        >
          <option>Startup</option>
          <option>Scaleup</option>
          <option>Niet zeker</option>
        </select>
      </div>
      <div>
        <label className={labelClasses} htmlFor="state-nl">
          Korte beschrijving van je huidige marketingstaat (2–3 zinnen)
        </label>
        <textarea
          id="state-nl"
          required
          rows={4}
          className={inputClasses}
          value={values.state}
          onChange={(e) => setValues((v) => ({ ...v, state: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="source-nl">Hoe heb je ons gevonden</label>
        <input
          id="source-nl"
          className={inputClasses}
          value={values.source}
          onChange={(e) => setValues((v) => ({ ...v, source: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="questions-nl">
          Iets wat je wilt vragen voor het boeken (optioneel)
        </label>
        <textarea
          id="questions-nl"
          rows={3}
          className={inputClasses}
          value={values.questions}
          onChange={(e) => setValues((v) => ({ ...v, questions: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        className="font-jakarta font-bold uppercase text-sm tracking-wide bg-sienna-400 text-zinc-950 px-6 py-3 hover:bg-sienna-400/90 transition-colors self-start"
      >
        Verstuur
      </button>
    </form>
  );
}
