"use client";

import { Link } from "@/i18n/routing";

export function NavigationBrand() {
  return (
    <Link
      href="/"
      className="inline-block text-base md:text-xl font-bold whitespace-nowrap text-foreground transition-colors duration-300 hover:text-foreground/80 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]"
    >
      Chaowalit Greepoke
    </Link>
  );
}
