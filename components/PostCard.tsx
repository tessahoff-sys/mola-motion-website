import Link from "next/link";
import { Label } from "./Label";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="relative bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-zinc-950/10 p-6 md:p-8 pt-7 flex flex-col gap-3">
      <div className="absolute top-0 left-0 h-1 w-12 bg-burnt-sienna" />
      <div className="flex items-center gap-3">
        <Label color="grey">{formatDate(post.publishDate)}</Label>
        <Label color="sienna">{post.category}</Label>
      </div>
      <h3 className="font-dm-sans font-semibold text-xl text-zinc-950">
        <Link href={`/blog/${post.slug}`} className="hover:text-burnt-sienna transition-colors">
          {post.h1}
        </Link>
      </h3>
      <p className="font-dm-sans text-[15px] leading-relaxed text-zinc-950/75">
        {post.ogDescription}
      </p>
      <Link href={`/blog/${post.slug}`} className="font-dm-sans text-sm text-burnt-sienna hover:underline underline-offset-4 mt-1">
        Read more →
      </Link>
    </article>
  );
}
