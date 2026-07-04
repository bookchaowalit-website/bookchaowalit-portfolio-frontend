"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { Laptop, Code2, Workflow, Bot, Zap, ExternalLink } from "lucide-react";

interface UseItem {
  name: string;
  description: string;
  url?: string;
}

function UseCard({ item, index }: { item: UseItem; index: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.05 }}
      className="bg-background p-4 border-b border-r border-border last:border-b-0 hover:bg-secondary transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold">{item.name}</h4>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="size-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function UseSection({ title, icon: Icon, items }: { title: string; icon: React.ElementType; items: UseItem[] }) {
  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
        {items.map((item, i) => (
          <UseCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export function UsesClient() {
  const t = useTranslations("uses");
  const reducedMotion = useReducedMotion();

  const hardware: UseItem[] = [
    { name: t("hw1Name"), description: t("hw1Desc") },
    { name: t("hw2Name"), description: t("hw2Desc") },
    { name: t("hw3Name"), description: t("hw3Desc") },
    { name: t("hw4Name"), description: t("hw4Desc") },
    { name: t("hw5Name"), description: t("hw5Desc") },
  ];

  const software: UseItem[] = [
    { name: t("sw1Name"), description: t("sw1Desc"), url: "https://code.visualstudio.com" },
    { name: t("sw2Name"), description: t("sw2Desc"), url: "https://warp.dev" },
    { name: t("sw3Name"), description: t("sw3Desc"), url: "https://www.google.com/chrome" },
    { name: t("sw4Name"), description: t("sw4Desc"), url: "https://figma.com" },
    { name: t("sw5Name"), description: t("sw5Desc"), url: "https://obsidian.md" },
    { name: t("sw6Name"), description: t("sw6Desc"), url: "https://www.notion.so" },
  ];

  const devWorkflow: UseItem[] = [
    { name: t("dw1Name"), description: t("dw1Desc") },
    { name: t("dw2Name"), description: t("dw2Desc") },
    { name: t("dw3Name"), description: t("dw3Desc") },
    { name: t("dw4Name"), description: t("dw4Desc") },
    { name: t("dw5Name"), description: t("dw5Desc") },
    { name: t("dw6Name"), description: t("dw6Desc") },
  ];

  const aiMcp: UseItem[] = [
    { name: t("ai1Name"), description: t("ai1Desc") },
    { name: t("ai2Name"), description: t("ai2Desc") },
    { name: t("ai3Name"), description: t("ai3Desc") },
    { name: t("ai4Name"), description: t("ai4Desc") },
    { name: t("ai5Name"), description: t("ai5Desc") },
  ];

  const productivity: UseItem[] = [
    { name: t("pd1Name"), description: t("pd1Desc") },
    { name: t("pd2Name"), description: t("pd2Desc") },
    { name: t("pd3Name"), description: t("pd3Desc") },
    { name: t("pd4Name"), description: t("pd4Desc") },
    { name: t("pd5Name"), description: t("pd5Desc") },
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
            { text: t("titleWord2"), style: "filled", size: "xl" },
          ]}
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
      </motion.div>

      {/* Sticky Note Intro */}
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

      {/* Hardware */}
      <UseSection title={t("hardwareTitle")} icon={Laptop} items={hardware} />

      {/* Software & Tools */}
      <UseSection title={t("softwareTitle")} icon={Code2} items={software} />

      {/* Development Workflow */}
      <UseSection title={t("workflowTitle")} icon={Workflow} items={devWorkflow} />

      {/* AI & MCP */}
      <UseSection title={t("aiTitle")} icon={Bot} items={aiMcp} />

      {/* Productivity */}
      <UseSection title={t("productivityTitle")} icon={Zap} items={productivity} />

      {/* Footer */}
      <div className="py-8 text-center">
        <NotebookSectionHeader
          title={t("footerTitle")}
          subtitle={t("footerSubtitle")}
          className="mb-4"
        />
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          {t("footerNote")}
        </p>
      </div>
    </div>
  );
}
