"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_EMAIL } from "@/lib/site-config";

const inputClasses =
  "w-full bg-white border border-zinc-950/20 px-4 py-3 font-dm-sans text-[15px] text-zinc-950 focus:outline-none focus:border-burnt-sienna transition-colors";
const labelClasses = "font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/60 block mb-2";

export function AuditForm() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    company: "",
    website: "",
    tier: "Not sure",
    state: "",
    source: "",
    questions: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Audit enquiry: ${values.company || values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Company name: ${values.company}`,
      `Website URL: ${values.website || "Not provided"}`,
      `Which tier fits best: ${values.tier}`,
      `Current marketing state: ${values.state}`,
      `How did you find us: ${values.source}`,
      `Questions before booking: ${values.questions || "None"}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className={labelClasses} htmlFor="name">Name</label>
        <input
          id="name"
          required
          className={inputClasses}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="company">Company name</label>
        <input
          id="company"
          required
          className={inputClasses}
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="website">Website URL</label>
        <input
          id="website"
          className={inputClasses}
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="tier">Which tier fits best</label>
        <select
          id="tier"
          className={inputClasses}
          value={values.tier}
          onChange={(e) => setValues((v) => ({ ...v, tier: e.target.value }))}
        >
          <option>Startup</option>
          <option>Scaleup</option>
          <option>Not sure</option>
        </select>
      </div>
      <div>
        <label className={labelClasses} htmlFor="state">
          Brief description of current marketing state (2–3 sentences)
        </label>
        <textarea
          id="state"
          required
          rows={4}
          className={inputClasses}
          value={values.state}
          onChange={(e) => setValues((v) => ({ ...v, state: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="source">How did you find us</label>
        <input
          id="source"
          className={inputClasses}
          value={values.source}
          onChange={(e) => setValues((v) => ({ ...v, source: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses} htmlFor="questions">
          Anything you&apos;d like to ask before booking (optional)
        </label>
        <textarea
          id="questions"
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
        Send
      </button>
    </form>
  );
}
