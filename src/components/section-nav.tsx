"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const sectionKeys = [
  { id: "hero", translationKey: "home" },
  { id: "atlas", translationKey: "knowledgeAtlas" },
  { id: "about", translationKey: "about" },
  { id: "projects", translationKey: "portfolio" },
  { id: "business", translationKey: "business" },
  { id: "blog", translationKey: "blog" },
  { id: "newsletter", translationKey: "newsletter" },
  { id: "contact", translationKey: "contact" },
] as const;

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const mobileRef = useRef<HTMLDivElement>(null);
  const tNav = useTranslations("nav");

  const sections = sectionKeys.map((s) => ({
    id: s.id,
    label: tNav(s.translationKey as any),
  }));

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  // Only show on homepage (usePathname returns path without locale prefix)
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sections is derived from static translations
  }, [isHomepage]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      setMobileOpen(false);
    }
  };

  if (!isVisible || !isHomepage) return null;

  const activeLabel = sections.find((s) => s.id === activeSection)?.label ?? "";

  return (
    <>
      {/* Desktop: side dots */}
      <motion.nav
        initial={reducedMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={reducedMotion ? undefined : { opacity: 0, x: -20 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
        aria-label="Section navigation"
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative flex items-center justify-start p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`block rounded-full transition-all ${
                  isActive ? "w-3 h-3 bg-foreground" : "w-2 h-2 bg-muted-foreground/50 group-hover:bg-foreground/70"
                }`}
              />
              <span className="absolute left-8 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border px-2 py-1">
                {section.label}
              </span>
            </button>
          );
        })}
      </motion.nav>

      {/* Mobile: floating pill button + expandable picker */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden" ref={mobileRef}>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.8, y: 10 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.15 }}
              className="absolute bottom-12 right-0 bg-background border border-border rounded p-2 grid grid-cols-2 gap-1 min-w-[200px]"
              role="menu"
              aria-label="Section navigation"
            >
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-xs px-3 py-2 text-left rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isActive
                        ? "bg-foreground text-background font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    role="menuitem"
                    aria-current={isActive ? "true" : undefined}
                  >
                    {section.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Section navigation — currently ${activeLabel}`}
          aria-expanded={mobileOpen}
        >
          <span className="w-2 h-2 rounded-full bg-foreground/60" />
          <span>{activeLabel}</span>
        </button>
      </div>
    </>
  );
}
