import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const t = useTranslations('nav');
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Home size={14} />
            <span className="sr-only">{t('home')}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight size={14} className="text-muted-foreground/60" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href as any}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
