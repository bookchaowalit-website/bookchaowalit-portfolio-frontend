"use client";

import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ArrowRight } from "lucide-react";
import inventory from "@/content/domain-inventory.json";

const categoryColors: Record<string, string> = {
  "tech-engineering": "#3B82F6",
  "business-finance": "#10B981",
  "creative-design": "#F59E0B",
  "life-health": "#EF4444",
  "professional": "#8B5CF6",
  "legal-governance": "#6366F1",
  "humanities": "#EC4899",
  "infrastructure": "#14B8A6",
};

const categoryIcons: Record<string, string> = {
  "tech-engineering": "💻",
  "business-finance": "📈",
  "creative-design": "🎨",
  "life-health": "❤️",
  "professional": "💼",
  "legal-governance": "⚖️",
  "humanities": "📚",
  "infrastructure": "🌍",
};

export function KnowledgeAtlasSection() {
  const t = useTranslations("home");
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ScrollReveal>
      <div className="py-8">
        <NotebookSectionHeader
          title={t("skillsTitle")}
          subtitle={t("skillsSubtitle")}
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {inventory.categories.map((cat, i) => {
            const color = categoryColors[cat.id] || "#888";
            const icon = categoryIcons[cat.id] || "📁";
            const domainCount = cat.domains.length;
            const noteColor = (["yellow", "pink", "green", "blue"] as const)[i % 4];

            return (
              <motion.div key={cat.id} variants={itemVariants} transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}>
                <Link href="/atlas">
                  <StickyNote
                    color={noteColor}
                    rotation={((i % 5) - 2) * 0.5}
                    className="h-full cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{icon}</span>
                        <h3 className="text-sm font-bold leading-tight">{cat.label}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Badge
                          variant="secondary"
                          className="text-[10px] py-0 px-1.5"
                          style={{ borderColor: color, color }}
                        >
                          {domainCount} {domainCount === 1 ? "domain" : "domains"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.domains.slice(0, 4).map((d) => {
                          const domain = inventory.domains.find((dom) => dom.id === d);
                          return domain ? (
                            <span key={d} className="text-[10px] text-muted-foreground">
                              {domain.name}
                            </span>
                          ) : null;
                        })}
                        {cat.domains.length > 4 && (
                          <span className="text-[10px] text-muted-foreground/60">
                            +{cat.domains.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </StickyNote>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/atlas">
              {t("exploreAtlas")}
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  );
}
