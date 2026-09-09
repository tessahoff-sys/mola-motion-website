"use client";

import { useState, type FormEvent } from "react";
import { Label } from "@/components/Label";
import { Triangle } from "@/components/Triangle";
import { MATERIALS_UPLOAD_URL, CONTACT_EMAIL } from "@/lib/site-config";

const inputClasses =
  "w-full bg-white border border-zinc-950/20 px-4 py-3 font-dm-sans text-[15px] text-zinc-950 focus:outline-none focus:border-burnt-sienna transition-colors";
const labelClasses = "font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/60 block mb-2";
const boxClasses = "relative bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-zinc-950/10 p-6 md:p-8 pt-7";
const stripeClasses = "absolute top-0 left-0 h-1 w-12 bg-burnt-sienna";

const WHAT_TO_SEND = [
  "Company deck or one-pager: whatever you use to explain the company to an outsider",
  "Existing website copy, or the live site itself if it's not already public",
  "Brand guidelines or a style guide, if one exists",
  "Writing you're proud of, or a document describing how you want to sound",
  "Customer testimonials, case studies, or sales materials",
  "Anything else that explains the product, the customers, or the market",
];

export function MaterialsFlow() {
  const [identity, setIdentity] = useState({ name: "", email: "" });
  const [links, setLinks] = useState("");
  const [linksSent, setLinksSent] = useState(false);
  const identityReady = identity.name.trim().length > 0 && identity.email.trim().length > 0;

  function handleLinksSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Materials: brand references from ${identity.name || "Not provided"}`;
    const body = [
      `Name: ${identity.name}`,
      `Email: ${identity.email}`,
      "",
      "Brands/websites whose tone they like:",
      links,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setLinksSent(true);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Who this is from */}
      <div className={boxClasses}>
        <div className={stripeClasses} />
        <Label color="sienna">Who this is from</Label>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor="m-name">
              Name
            </label>
            <input
              id="m-name"
              required
              className={inputClasses}
              value={identity.name}
              onChange={(e) => setIdentity((v) => ({ ...v, name: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="m-email">
              Email
            </label>
            <input
              id="m-email"
              type="email"
              required
              className={inputClasses}
              value={identity.email}
              onChange={(e) => setIdentity((v) => ({ ...v, email: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* 2. What to send + upload, same box */}
      <div className={boxClasses}>
        <div className={stripeClasses} />
        <Label color="sienna">What to send</Label>
        <div className="mt-5 grid gap-8 md:grid-cols-2 items-start">
          <div>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">
              We use this to work out how your brand sounds, not just what it sells. Anything in
              these categories helps:
            </p>
            <ul className="mt-5 space-y-3">
              {WHAT_TO_SEND.map((item) => (
                <li key={item} className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85 flex gap-2">
                  <span className="text-burnt-sienna shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-zinc-50 border border-burnt-sienna/25 p-4 flex gap-3 items-start">
              <Triangle className="w-3.5 h-3.5 text-burnt-sienna shrink-0 mt-1" />
              <div>
                <Label color="sienna" className="block">
                  Tone of voice
                </Label>
                <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950 mt-1">
                  This is the main input we use to figure out how you should sound in writing.
                  The more real examples, the better the read.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <a
                href={MATERIALS_UPLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-jakarta font-bold uppercase text-sm tracking-wide inline-flex items-center justify-center gap-2 bg-sienna-400 text-zinc-950 px-6 py-3 hover:bg-sienna-400/90 transition-colors"
              >
                Upload your materials →
              </a>
            </div>
            <p className="font-dm-sans text-[13px] leading-relaxed text-zinc-950/50 mt-4 text-right">
              {identityReady
                ? `Dropbox will ask for your name before the upload finishes. Enter "${identity.name}" there too, so we know it's yours.`
                : "Fill in your name and email above. Dropbox will ask for your name again before the upload finishes; enter the same one there so we know it's yours."}{" "}
              Trouble with the link? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-burnt-sienna hover:underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>{" "}
              instead.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Other brands' tone, separate from their own materials */}
      <div className={boxClasses}>
        <div className={stripeClasses} />
        <Label color="sienna">Brands whose tone you like</Label>
        <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
          Separate from your own materials above: if there are other companies or websites (not
          necessarily competitors) whose voice you&apos;d want us to notice, drop the links below.
        </p>
        {linksSent ? (
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-6">
            Your email app should have opened with everything filled in. Just hit send.
          </p>
        ) : (
          <form onSubmit={handleLinksSubmit} className="flex flex-col gap-5 mt-6">
            <div>
              <label className={labelClasses} htmlFor="m-links">
                Links, one per line
              </label>
              <textarea
                id="m-links"
                required
                rows={4}
                className={inputClasses}
                value={links}
                onChange={(e) => setLinks(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="font-jakarta font-bold uppercase text-sm tracking-wide bg-sienna-400 text-zinc-950 px-6 py-3 hover:bg-sienna-400/90 transition-colors self-start"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
