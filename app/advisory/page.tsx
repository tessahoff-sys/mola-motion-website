"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * /advisory was renamed to /fractional-cmo (clearer title, same content).
 * Static export, no server for a real 301, so this redirects client-side
 * and falls back to a manual link + meta refresh for crawlers/no-JS.
 */
export default function AdvisoryRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/fractional-cmo");
  }, [router]);

  return (
    <section className="bg-white">
      <meta httpEquiv="refresh" content="0; url=/fractional-cmo" />
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
          This moved.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
          Advisory is now Fractional CMO, same content, clearer name.
        </p>
        <div className="mt-10">
          <Link
            href="/fractional-cmo"
            className="font-dm-sans text-[15px] text-burnt-sienna hover:underline underline-offset-4"
          >
            Go to Fractional CMO →
          </Link>
        </div>
      </div>
    </section>
  );
}
