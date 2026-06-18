"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect dark mode state.
 * Observes the `dark` class on <html> and localStorage "theme" key.
 * Falls back to system prefers-color-scheme preference.
 */
export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial detection
    const stored = localStorage.getItem("theme");
    const initial =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(initial);

    // Watch for class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Watch for system preference changes
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };
    mql.addEventListener("change", handler);

    return () => {
      observer.disconnect();
      mql.removeEventListener("change", handler);
    };
  }, []);

  return isDark;
}
