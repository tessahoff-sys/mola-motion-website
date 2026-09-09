export const CATEGORIES = ["Positioning", "ICP", "Messaging", "GTM", "Website", "Case studies"] as const;
export type Category = (typeof CATEGORIES)[number];

export type BlogBlock = { type: "p" | "h2"; text: string };

export type BlogPost = {
  slug: string;
  category: Category;
  publishDate: string; // ISO date
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  body: BlogBlock[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "startup-marketing-foundations-b2b-saas",
    category: "Positioning",
    publishDate: "2026-07-21",
    metaTitle: "Why your B2B SaaS marketing isn't working",
    metaDescription:
      "Most early-stage B2B SaaS founders try to fix marketing by producing more content. That's not the problem. Here's what is, and what to build first.",
    ogTitle: "Why your B2B SaaS marketing isn't working",
    ogDescription: "It's not a content problem. Here's what it actually is, and what to build first.",
    h1: "Why your B2B SaaS marketing isn't working, and it's not a content problem.",
    body: [
      { type: "p", text: "Most early-stage B2B SaaS founders try to fix marketing by producing more content. More posts. More emails. A new website. Sometimes a rebrand." },
      { type: "p", text: "None of it converts. The conclusion is usually that the content wasn't good enough, the channel was wrong, or the timing was off. The real problem is almost always different. And it happens earlier." },
      { type: "p", text: "The problem isn't the content. It's what the content is built on." },
      { type: "p", text: "Content is an amplifier. If the foundations it amplifies are weak (unclear positioning, undefined ICP, a hero message that describes features instead of problems), more content makes the weak signal louder, not clearer. You get more visibility for a message that doesn't convert." },
      { type: "p", text: "Marketing foundations are the four things every piece of content, every sales conversation, and every website page is built from." },
      { type: "p", text: "Positioning: one sentence that says what you do, who you do it for, and why it's different from the alternatives. Not a tagline. Not a mission statement. An internal anchor that everything external is written from." },
      { type: "p", text: "ICP: a specific description of the buyer who is most likely to recognise the problem you solve, have the budget to fix it, and be ready to move. Specific enough to disqualify the wrong leads. Most v1 ICPs are too broad to write copy against." },
      { type: "p", text: "Messaging: the hierarchy of what to say. The hero message, the supporting points, the proof angles, the objection handling. The messaging starter tells you what to put in the hero section of your website and what to say when someone asks what you do." },
      { type: "p", text: "GTM hypothesis: a channel bet. Where does your ICP actually spend time? Where do they discover new tools or partners? A 90-day direction that shapes where you point the content engine. Not a strategy document. A bet with a rationale." },
      { type: "p", text: "Most early-stage founders skip all four and go straight to execution. The content produces activity, not pipeline." },
      { type: "h2", text: "Why this happens." },
      { type: "p", text: "The skip happens for a simple reason: the foundations feel like internal work. Writing a positioning statement is hard and unglamorous. Nobody sees it. Defining an ICP requires making decisions about who you're not going after, which feels like leaving money on the table. A GTM hypothesis requires committing to a channel bet before you have enough data to be certain, which founders trained to be evidence-based are reluctant to do." },
      { type: "p", text: "So instead: blog post. Tweet. New homepage copy. Things that feel like marketing because they're external." },
      { type: "h2", text: "What “solid for stage” means." },
      { type: "p", text: "Foundations don't need to be perfect. At pre-Series A with 1–2 customers, solid for stage means: one positioning sentence you can say out loud without wincing, a one-page ICP sketch specific enough to write copy against, a hero message that describes the problem before the product, and a channel bet with a rationale. That's it. Everything else is detail you add as customers accumulate." },
      { type: "p", text: "The test is simple: a peer who reads your positioning should be able to repeat back what you do in their own words. A prospect who reads your website hero should recognise their own problem in the first two sentences. If neither is true, the foundation isn't solid yet." },
      { type: "h2", text: "The right order." },
      { type: "p", text: "Positioning first. Then ICP. Then messaging from both. Then GTM to decide where the message goes. Then website and content from all of the above." },
      { type: "p", text: "This order exists because each foundation is built on the one before it. An ICP built before positioning is done risks defining the buyer around the wrong problem. Messaging built before ICP has no specific audience to write toward. A website built before messaging describes the product instead of the buyer's problem." },
      { type: "p", text: "The founders who get this right aren't always more experienced. They're the ones who ran the process in the right order, stayed patient enough not to skip a step, and got feedback at each stage before moving to the next." },
      { type: "h2", text: "One more thing." },
      { type: "p", text: "If you've been producing content for six months without seeing pipeline, the instinct is to blame the content. Before you do: read your positioning statement back. Say it out loud. Could a prospect hear that sentence and immediately recognise themselves in it? If the answer is no, or if you don't have a positioning statement at all, that's where to start." },
      { type: "p", text: "The content problem is almost never the content." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
