import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
          Privacy policy.
        </h1>

        <div className="bg-zinc-50 p-5 mt-10">
          <p className="font-space-mono uppercase text-[10px] tracking-wider text-zinc-950/60">
            Draft: legal review pending before launch
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80">
            MOLA Motion (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy
            and handling your data in line with the EU General Data Protection Regulation (GDPR).
            This policy explains what we collect, how we use it, and the rights you have over it.
          </p>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              1. What data we collect
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We collect the information you give us directly (your name, email address, and
              company name) when you submit the audit enquiry form, subscribe to the newsletter,
              or otherwise contact us. We also collect basic analytics data about how visitors use
              this site, such as pages viewed and general usage patterns.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              2. How we use it
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We use your data to respond to your enquiry, to deliver the services you engage us
              for (audits, foundations work, and subscriptions) and to understand and improve
              how this site works. We do not use your data for anything beyond these purposes.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              3. Who we share it with
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              We share payment details with our payment processor, Stripe, to invoice and process
              payment for services. We use an analytics provider to understand site usage in
              aggregate. We do not share your data with advertising networks, and we do not sell
              your data to any third party.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              4. How long we keep it
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              If you submit an enquiry that doesn&apos;t lead to an engagement, we retain that
              data for up to 3 years. If an engagement begins, we retain data for the duration of
              the relationship plus 5 years, in line with standard accounting and legal record-
              keeping requirements.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              5. Your rights
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              Under GDPR, you have the right to access the data we hold about you, to have
              inaccurate data corrected, to have your data erased, to receive your data in a
              portable format, and to object to how we process it. To exercise any of these
              rights, contact us using the details below. You also have the right to lodge a
              complaint with your local data protection authority.
            </p>
          </div>

          <div>
            <h2 className="font-dm-sans font-medium text-xl text-zinc-950">
              6. Contact
            </h2>
            <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/80 mt-3">
              For any question about this policy or your data, contact us at{" "}
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
