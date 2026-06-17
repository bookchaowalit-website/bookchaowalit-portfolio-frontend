"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if user prefers reduced motion.
 * Respects CSS `prefers-reduced-motion: reduce` media query.
 * Use this to disable/simplify Framer Motion animations.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
