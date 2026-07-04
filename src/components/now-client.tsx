"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { Calendar, Code2, BookOpen, Dumbbell, Lightbulb, Coffee, Target, Music } from "lucide-react";

interface NowItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: "yellow" | "pink" | "green" | "blue";
}

function NowCard({ item, index }: { item: NowItem; index: number }) {
  const reducedMotion = useReducedMotion();
  const Icon = item.icon;
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 15, rotate: (index % 2 === 0 ? 1 : -1) }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.08 }}
    >
      <StickyNote color={item.color} rotation={((index % 3) - 1) * 0.8} className="h-full">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-background/60 shrink-0">
            <Icon className="w-4 h-4 text-foreground" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>
      </StickyNote>
    </motion.div>
  );
}

export function NowClient() {
  const t = useTranslations("now");
  const reducedMotion = useReducedMotion();

  const nowItems: NowItem[] = [
    { icon: Code2, title: t("focusTitle"), description: t("focusDesc"), color: "blue" },
    { icon: BookOpen, title: t("learningTitle"), description: t("learningDesc"), color: "green" },
    { icon: Lightbulb, title: t("buildingTitle"), description: t("buildingDesc"), color: "yellow" },
    { icon: Dumbbell, title: t("fitnessTitle"), description: t("fitnessDesc"), color: "pink" },
    { icon: Target, title: t("goalTitle"), description: t("goalDesc"), color: "blue" },
    { icon: Coffee, title: t("consumingTitle"), description: t("consumingDesc"), color: "yellow" },
    { icon: Music, title: t("listeningTitle"), description: t("listeningDesc"), color: "pink" },
    { icon: Calendar, title: t("scheduleTitle"), description: t("scheduleDesc"), color: "green" },
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
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {t("lastUpdated")}
        </div>
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

      {/* What I'm doing now */}
      <NotebookSectionHeader
        title={t("nowSectionTitle")}
        subtitle={t("nowSectionSubtitle")}
        className="mt-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nowItems.map((item, i) => (
          <NowCard key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* Philosophy */}
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
    </div>
  );
}
