"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { Code2, Palette, Server, Brain, Rocket, Shield, Database, Globe, Cpu, Sparkles } from "lucide-react";

interface StackItem {
  icon: React.ElementType;
  name: string;
  role: string;
  detail: string;
}

interface StackSection {
  title: string;
  items: StackItem[];
}

export function ColophonClient() {
  const t = useTranslations("colophon");
  const reducedMotion = useReducedMotion();

  const sections: StackSection[] = [
    {
      title: t("frontendTitle"),
      items: [
        { icon: Code2, name: "Next.js 15.5", role: t("nextjsRole"), detail: t("nextjsDetail") },
        { icon: Code2, name: "React 19", role: t("reactRole"), detail: t("reactDetail") },
        { icon: Code2, name: "TypeScript", role: t("tsRole"), detail: t("tsDetail") },
        { icon: Palette, name: "Tailwind CSS 4", role: t("twRole"), detail: t("twDetail") },
        { icon: Sparkles, name: "Framer Motion", role: t("fmRole"), detail: t("fmDetail") },
      ],
    },
    {
      title: t("i18nTitle"),
      items: [
        { icon: Globe, name: "next-intl", role: t("intlRole"), detail: t("intlDetail") },
        { icon: Globe, name: "English + Thai", role: t("localeRole"), detail: t("localeDetail") },
      ],
    },
    {
      title: t("infraTitle"),
      items: [
        { icon: Rocket, name: "Vercel", role: t("vercelRole"), detail: t("vercelDetail") },
        { icon: Server, name: "Edge Runtime", role: t("edgeRole"), detail: t("edgeDetail") },
        { icon: Database, name: "Static Generation", role: t("ssgRole"), detail: t("ssgDetail") },
      ],
    },
    {
      title: t("aiTitle"),
      items: [
        { icon: Brain, name: "MCP Servers", role: t("mcpRole"), detail: t("mcpDetail") },
        { icon: Cpu, name: "AI-Assisted Dev", role: t("aidevRole"), detail: t("aidevDetail") },
      ],
    },
    {
      title: t("qualityTitle"),
      items: [
        { icon: Shield, name: "JSON-LD / SEO", role: t("seoRole"), detail: t("seoDetail") },
        { icon: Shield, name: "Accessibility", role: t("a11yRole"), detail: t("a11yDetail") },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
      {/* Hero */}
      <motion.div
        className="text-center space-y-6 py-8"
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <MixedTypographyTitle
          words={[
            { text: t("titleWord1"), style: "cursive", size: "xl" },
            { text: t("titleWord2"), style: "bubble", size: "xl" },
          ]}
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
      </motion.div>

      {/* Intro Note */}
      <motion.div
        className="max-w-lg mx-auto"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.95, rotate: 1 }}
        animate={{ opacity: 1, scale: 1, rotate: -1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
      >
        <StickyNote rotation={-1} className="text-center">
          <p className="text-sm text-foreground">{t("introNote")}</p>
        </StickyNote>
      </motion.div>

      {/* Stack Sections */}
      {sections.map((section, si) => (
        <div key={section.title} className="space-y-4">
          <NotebookSectionHeader
            title={section.title}
            subtitle={t(`sectionSubtitle${si + 1}` as any)}
            className="mt-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.06 }}
                >
                  <StickyNote
                    color={(["yellow", "pink", "green", "blue"] as const)[i % 4]}
                    rotation={((i % 3) - 1) * 0.6}
                    className="h-full"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-background/60 shrink-0">
                        <Icon className="w-4 h-4 text-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold">{item.name}</h3>
                        <p className="text-xs font-medium text-primary/70">{item.role}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </StickyNote>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Design Philosophy */}
      <motion.div
        className="max-w-2xl mx-auto text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <NotebookSectionHeader
          title={t("philosophyTitle")}
          subtitle={t("philosophySubtitle")}
          className="mb-4"
        />
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          {t("philosophyNote")}
        </p>
      </motion.div>

      {/* Source Note */}
      <motion.div
        className="max-w-lg mx-auto"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        <StickyNote rotation={0.8} color="blue" className="text-center">
          <p className="text-sm text-foreground">{t("sourceNote")}</p>
        </StickyNote>
      </motion.div>
    </div>
  );
}
