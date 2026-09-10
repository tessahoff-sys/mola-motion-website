"use client";

import { useEffect } from "react";

/**
 * Static export + App Router can't set a per-route <html lang>, since that
 * tag lives in the single root layout. This flips it to "nl" client-side
 * once a /nl page mounts. Not perfect for the pre-hydration HTML, but correct
 * for screen readers and browser translation prompts after load.
 */
export default function NLLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "nl";
    return () => {
      document.documentElement.lang = "en";
    };
  }, []);

  return <>{children}</>;
}
