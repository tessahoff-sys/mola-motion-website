export const SITE_URL = "https://molamotion.com";

export const CONTACT_EMAIL = "hello@molamotion.com";

export const LINKEDIN_URL = "https://www.linkedin.com/company/mola-marketing-communication/";

// Dropbox File Request needs no account on the sender's side and drops files straight into
// a folder you choose — simplest option for a static site with no upload backend.
export const MATERIALS_UPLOAD_URL = "https://www.dropbox.com/request/3nhu1s1hsew5yk3x80c4";

export const NAV_ITEMS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Fractional CMO", href: "/fractional-cmo" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_NAV_ITEMS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Fractional CMO", href: "/fractional-cmo" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
] as const;

// CTA hierarchy — strict, per brief Section 2. Do not add new tiers or labels.
export const CTA_PRIMARY = { label: "Start with the audit", href: "/audit" } as const;
export const CTA_SECONDARY = { label: "See how it works", href: "/how-it-works" } as const;
export const CTA_PASSIVE = { label: "Read the blog", href: "/blog" } as const;
