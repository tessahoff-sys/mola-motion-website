"use client";

import { useState } from "react";
import { CATEGORIES, type BlogPost } from "@/lib/blog";
import { PostCard } from "./PostCard";

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {["All", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`font-jakarta font-bold uppercase text-xs tracking-wide px-4 py-2 transition-colors ${
              active === cat
                ? "bg-charcoal text-white"
                : "bg-transparent text-zinc-950/60 hover:text-zinc-950 border border-zinc-950/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="font-dm-sans text-[15px] text-zinc-950/60 md:col-span-2 text-center py-10">
            No posts in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
