import type { Metadata } from "next";
import { BlogFilter } from "@/components/BlogFilter";
import { Triangle } from "@/components/Triangle";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Marketing insights for B2B SaaS founders",
  description:
    "Ideas, frameworks, and analysis for B2B SaaS founders building their marketing foundations. Positioning, ICP, messaging, GTM, and more.",
  openGraph: {
    title: "MOLA Motion blog: B2B SaaS marketing foundations",
    description: "Positioning, ICP, messaging, GTM. Written for founders doing it themselves.",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex justify-center mb-4">
          <Triangle className="w-5 h-5 text-burnt-sienna" />
        </div>
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center">
          Ideas for B2B SaaS founders building their marketing.
        </h1>
        <p className="font-dm-sans text-base leading-relaxed text-zinc-950/80 mt-6 max-w-xl mx-auto text-center">
          Positioning, ICP, messaging, GTM: the things that make the marketing work before the
          engine runs. Written for founders doing it themselves.
        </p>

        <div className="mt-14">
          {POSTS.length > 0 ? (
            <BlogFilter posts={POSTS} />
          ) : (
            <div className="bg-white p-10 text-center max-w-md mx-auto">
              <p className="font-dm-sans text-[15px] text-zinc-950/80">
                First article coming shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
