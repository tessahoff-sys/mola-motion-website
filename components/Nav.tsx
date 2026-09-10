"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import {
  NAV_ITEMS,
  NAV_ITEMS_NL,
  CTA_PRIMARY,
  CTA_PRIMARY_NL,
} from "@/lib/site-config";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isNL = pathname?.startsWith("/nl");
  const navItems = isNL ? NAV_ITEMS_NL : NAV_ITEMS;
  const cta = isNL ? CTA_PRIMARY_NL : CTA_PRIMARY;
  // Strip a leading /nl to get the English equivalent path, or add it to get the Dutch one.
  const otherLangHref = isNL ? pathname.replace(/^\/nl/, "") || "/" : `/nl${pathname === "/" ? "" : pathname}`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-50/95 backdrop-blur border-b border-zinc-950/10">
      <div className="mx-auto max-w-7xl px-6 h-36 flex items-center justify-between gap-6">
        <Logo variant="light" height={84} className="shrink-0" href={isNL ? "/nl" : "/"} />

        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-jakarta font-bold uppercase text-sm tracking-wide text-zinc-950 hover:text-burnt-sienna transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0 ml-4">
          <div className="flex items-center gap-1.5 border border-zinc-950/15 px-2.5 py-1.5">
            <Link
              href={isNL ? otherLangHref : pathname}
              aria-current={!isNL ? "page" : undefined}
              className={`font-space-mono uppercase text-xs tracking-wider transition-colors ${
                !isNL ? "text-zinc-950 font-bold" : "text-zinc-950/40 hover:text-burnt-sienna"
              }`}
            >
              EN
            </Link>
            <span className="text-zinc-950/25 text-xs">/</span>
            <Link
              href={isNL ? pathname : otherLangHref}
              aria-current={isNL ? "page" : undefined}
              className={`font-space-mono uppercase text-xs tracking-wider transition-colors ${
                isNL ? "text-zinc-950 font-bold" : "text-zinc-950/40 hover:text-burnt-sienna"
              }`}
            >
              NL
            </Link>
          </div>
          <Button href={cta.href} variant="primary" className="whitespace-nowrap">
            {cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-9 h-9"
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-950 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-zinc-950 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-zinc-950 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-zinc-950/10 bg-zinc-50">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-jakarta font-bold uppercase text-sm tracking-wide text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 border border-zinc-950/15 px-3 py-2 w-fit">
              <Link
                href={isNL ? otherLangHref : pathname}
                onClick={() => setOpen(false)}
                className={`font-space-mono uppercase text-xs tracking-wider ${
                  !isNL ? "text-zinc-950 font-bold" : "text-zinc-950/40"
                }`}
              >
                EN
              </Link>
              <span className="text-zinc-950/25 text-xs">/</span>
              <Link
                href={isNL ? pathname : otherLangHref}
                onClick={() => setOpen(false)}
                className={`font-space-mono uppercase text-xs tracking-wider ${
                  isNL ? "text-zinc-950 font-bold" : "text-zinc-950/40"
                }`}
              >
                NL
              </Link>
            </div>
            <Button href={cta.href} variant="primary" className="w-full mt-2">
              {cta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
