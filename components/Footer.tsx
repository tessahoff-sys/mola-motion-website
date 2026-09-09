import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER_NAV_ITEMS, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Logo variant="dark" height={34} />
          <p className="font-dm-sans text-sm text-white/70 mt-4 leading-relaxed max-w-xs">
            Enterprise marketing for a startup budget.
          </p>
        </div>

        <div>
          <span className="font-space-mono text-[10px] uppercase tracking-wider text-white/50">
            Navigate
          </span>
          <nav className="flex flex-col gap-3 mt-4">
            {FOOTER_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-dm-sans text-sm text-white/85 hover:text-sienna-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <span className="font-space-mono text-[10px] uppercase tracking-wider text-white/50">
            Contact
          </span>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-dm-sans text-sm text-white/85 hover:text-sienna-400 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-sm text-white/85 hover:text-sienna-400 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-space-mono text-[10px] uppercase tracking-wider text-white/50">
            © {new Date().getFullYear()} MOLA Motion
          </span>
          <Link
            href="/privacy-policy"
            className="font-space-mono text-[10px] uppercase tracking-wider text-white/50 hover:text-sienna-400 transition-colors"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
