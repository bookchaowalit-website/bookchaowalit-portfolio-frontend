"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { BookOpen, RotateCcw, Home } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-lg w-full relative">
        <div
          className="bg-muted border border-border p-8 space-y-6"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)",
          }}
        >
          <div className="absolute left-12 top-0 bottom-0 w-px bg-border/60" />
          <div className="absolute left-4 top-[20%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[50%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[80%] w-3 h-3 rounded-full border border-border/60 bg-background" />

          <div className="relative pl-8">
            <div className="text-center mb-6">
              <BookOpen className="mx-auto size-10 text-muted-foreground mb-3" />
              <h1 className="text-xl font-[family-name:var(--font-comic)] font-bold text-foreground mb-3">
                {locale === "en" ? "couldn't load blog" : "ไม่สามารถโหลดบล็อกได้"}
              </h1>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
                {locale === "en"
                  ? "something went wrong while loading the blog posts."
                  : "เกิดข้อผิดพลาดขณะโหลดบทความ"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={reset}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <RotateCcw className="size-3.5" />
                {locale === "en" ? "try again" : "ลองอีกครั้ง"}
              </button>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Home className="size-3.5" />
                {locale === "en" ? "go home" : "กลับหน้าแรก"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
