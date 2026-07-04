"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Pencil, Home, RotateCcw } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('common');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-lg w-full relative">
        {/* Notebook page */}
        <div
          className="bg-muted border border-border p-8 space-y-6"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)",
          }}
        >
          {/* Notebook margin line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-border/60" />

          {/* Three-ring holes */}
          <div className="absolute left-4 top-[20%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[50%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[80%] w-3 h-3 rounded-full border border-border/60 bg-background" />

          <div className="relative pl-8">
            {/* Header */}
            <div className="text-center mb-6">
              <p className="text-5xl font-[family-name:var(--font-doodle)] text-muted-foreground mb-2">
                {t('errorTitle')}
              </p>
              <h1 className="text-xl font-[family-name:var(--font-comic)] font-bold text-foreground mb-3">
                {t('errorSubtitle')} <Pencil className="inline w-5 h-5" />
              </h1>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
                {t('errorDescription')}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={reset}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <RotateCcw className="size-3.5" />
                {t('tryAgain')}
              </button>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Home className="size-3.5" />
                {t('goHome')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
