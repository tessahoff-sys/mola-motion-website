import type { Metadata } from "next";
import Link from "next/link";
import { Triangle } from "@/components/Triangle";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Inzichten voor B2B SaaS founders",
  description:
    "Ideeën, frameworks en analyses voor B2B SaaS founders die hun marketingfoundations bouwen. Positionering, ICP, messaging, GTM, en meer.",
  alternates: {
    languages: {
      en: `${SITE_URL}/blog`,
      nl: `${SITE_URL}/nl/blog`,
    },
  },
  openGraph: {
    title: "MOLA Motion blog: B2B SaaS marketingfoundations",
    description: "Positionering, ICP, messaging, GTM. Geschreven voor founders die het zelf doen.",
    type: "website",
  },
};

// Articles are written in English for now; Dutch translations follow once there's
// enough of a backlog to justify maintaining both. Link out to the English blog
// rather than showing English post content inside a Dutch-language shell.
export default function BlogIndexNL() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex justify-center mb-4">
          <Triangle className="w-5 h-5 text-burnt-sienna" />
        </div>
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
          Ideeën voor B2B SaaS founders die hun marketing bouwen.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6 max-w-xl mx-auto text-center">
          Positionering, ICP, messaging, GTM: de dingen die de marketing laten werken voordat de
          motor draait. Geschreven voor founders die het zelf doen.
        </p>

        <div className="mt-14">
          <div className="bg-white p-10 text-center max-w-md mx-auto">
            <p className="font-dm-sans text-[15px] text-zinc-950/80">
              De artikelen zijn momenteel alleen in het Engels beschikbaar.
            </p>
            <Link
              href="/blog"
              className="font-dm-sans text-[15px] text-burnt-sienna inline-block mt-3 hover:underline underline-offset-4"
            >
              Naar de Engelse blog →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
