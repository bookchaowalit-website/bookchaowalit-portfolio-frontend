"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    function toggle() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full p-3 shadow-lg",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label={t('backToTop')}
    >
      <ArrowUp size={20} />
    </button>
  );
}
