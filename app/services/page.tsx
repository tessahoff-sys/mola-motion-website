"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * /services was merged into /pricing (now "What you get, and what it costs").
 * This is a static export, so there's no server to issue a real 301 — this page
 * redirects client-side and falls back to a manual link + meta refresh for
 * crawlers and no-JS visitors.
 */
export default function ServicesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pricing");
  }, [router]);

  return (
    <section className="bg-white">
      <meta httpEquiv="refresh" content="0; url=/pricing" />
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
          This moved.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
          What you get is now on the pricing page, deliverables and cost together.
        </p>
        <div className="mt-10">
          <Link
            href="/pricing"
            className="font-dm-sans text-[15px] text-burnt-sienna hover:underline underline-offset-4"
          >
            Go to what you get, and what it costs →
          </Link>
        </div>
      </div>
    </section>
  );
}
