"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const t = useTranslations('common');

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(100);
        return;
      }
      const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      setProgress(pct);
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-50 transition-[width] duration-150 ease-out"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
      }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={t('readingProgress')}
    />
  );
}
