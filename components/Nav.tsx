"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { NAV_ITEMS, CTA_PRIMARY } from "@/lib/site-config";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-50/95 backdrop-blur border-b border-zinc-950/10">
      <div className="mx-auto max-w-7xl px-6 h-36 flex items-center justify-between gap-6">
        <Logo variant="light" height={84} className="shrink-0" />

        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-jakarta font-bold uppercase text-sm tracking-wide text-zinc-950 hover:text-burnt-sienna transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0 ml-4">
          <Button href={CTA_PRIMARY.href} variant="primary" className="whitespace-nowrap">
            {CTA_PRIMARY.label}
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
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-jakarta font-bold uppercase text-sm tracking-wide text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
            <Button href={CTA_PRIMARY.href} variant="primary" className="w-full mt-2">
              {CTA_PRIMARY.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
