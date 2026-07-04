"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect, useState } from "react";
import { Pencil, Home, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";

const translations = {
  en: {
    oops: 'Oops',
    subtitle: 'something went wrong',
    description: 'an unexpected error occurred. please try again.',
    tryAgain: 'try again',
    home: 'home',
    contact: 'contact'
  },
  th: {
    oops: 'อุ๊ปส์',
    subtitle: 'มีบางอย่างผิดพลาด',
    description: 'เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่อีกครั้ง',
    tryAgain: 'ลองอีกครั้ง',
    home: 'หน้าแรก',
    contact: 'ติดต่อ'
  }
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<'en' | 'th'>('en');

  useEffect(() => {
    console.error("Global error:", error);
    Sentry.captureException(error);
    
    // Detect locale from URL
    const pathLocale = window.location.pathname.match(/^\/(en|th)/)?.[1] as 'en' | 'th';
    if (pathLocale) setLocale(pathLocale);
  }, [error]);

  const t = translations[locale];

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-lg w-full relative">
            {/* Notebook page */}
            <div
              className="bg-muted border border-border p-8 space-y-6"
              style={{
                clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)"
              }}
            >
              {/* Notebook margin line */}
              <div className="absolute left-12 top-0 bottom-0 w-px bg-border/60" />

              {/* Three-ring holes */}
              <div className="absolute left-4 top-[20%] w-3 h-3 rounded-full border border-border/60 bg-background" />
              <div className="absolute left-4 top-[50%] w-3 h-3 rounded-full border border-border/60 bg-background" />
              <div className="absolute left-4 top-[80%] w-3 h-3 rounded-full border border-border/60 bg-background" />

              <div className="relative pl-8">
                <div className="text-center mb-6">
                  <p className="text-7xl font-[family-name:var(--font-doodle)] text-muted-foreground mb-2">
                    {t.oops}
                  </p>
                  <h1 className="text-2xl font-[family-name:var(--font-comic)] font-bold text-foreground mb-3">
                    {t.subtitle} <Pencil className="inline w-5 h-5" />
                  </h1>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
                    {t.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors"
                  >
                    {t.tryAgain}
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/"
                      className="flex items-center justify-center gap-2 px-3 py-2 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors"
                    >
                      <Home className="size-3.5 text-muted-foreground" />
                      {t.home}
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 px-3 py-2 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors"
                    >
                      <Mail className="size-3.5 text-muted-foreground" />
                      {t.contact}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
