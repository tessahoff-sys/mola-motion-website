import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/Label";
import { Triangle } from "@/components/Triangle";
import { POSTS, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      type: "article",
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="flex items-center justify-center gap-3">
          <Label color="grey">{formatDate(post.publishDate)}</Label>
          <Label color="sienna">{post.category}</Label>
        </div>
        <h1 className="font-dm-sans font-semibold text-3xl md:text-4xl text-zinc-950 text-center mt-4">
          {post.h1}
        </h1>

        <div className="mt-12 flex flex-col gap-5">
          {post.body.map((block, i) =>
            block.type === "h2" ? (
              <h2
                key={i}
                className="flex items-center gap-2 font-dm-sans font-medium text-xl text-zinc-950 mt-4"
              >
                <Triangle className="w-3 h-3 text-burnt-sienna shrink-0" />
                {block.text}
              </h2>
            ) : (
              <p key={i} className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
                {block.text}
              </p>
            )
          )}
        </div>

        <div className="relative mt-14 bg-zinc-50 p-6 md:p-8 pt-8 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-burnt-sienna" />
          <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/85">
            MOLA Motion builds marketing foundations for B2B SaaS founders. If you want to know
            where your foundations stand, the audit tells you, in five working days.{" "}
            <Link href="/audit" className="text-burnt-sienna hover:underline underline-offset-4">
              Start with the audit →
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
