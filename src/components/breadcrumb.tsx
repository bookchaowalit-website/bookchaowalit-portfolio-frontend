"use client";

import { ChevronRight, Home } from "lucide-react";
import { Link } from "@/i18n/routing";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
            {item.href ? (
              <Link
                href={item.href as any}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
