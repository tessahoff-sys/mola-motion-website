import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950">
          This page doesn&apos;t exist. The foundations do.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6">
          You&apos;re either lost or following a broken link. Here&apos;s where to go instead.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 mt-10">
          <Link href="/" className="font-dm-sans text-[15px] text-burnt-sienna hover:underline underline-offset-4">
            Back to home →
          </Link>
          <Link href="/faq" className="font-dm-sans text-[15px] text-burnt-sienna hover:underline underline-offset-4">
            Read the FAQ →
          </Link>
          <Link href="/audit" className="font-dm-sans text-[15px] text-burnt-sienna hover:underline underline-offset-4">
            Start with the audit →
          </Link>
        </div>
      </div>
    </section>
  );
}
