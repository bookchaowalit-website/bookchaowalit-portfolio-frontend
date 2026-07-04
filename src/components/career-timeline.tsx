"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { Badge } from "@/components/ui/badge";
import { Rocket, ChevronDown } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  company: string;
  desc: string;
  detail: string;
  tech: string[];
  isCurrent?: boolean;
}

interface PivotalMoment {
  title: string;
  desc: string;
}

interface Philosophy {
  title: string;
  content: string;
}

function MilestoneCard({
  milestone,
  index,
  isLeft,
}: {
  milestone: Milestone;
  index: number;
  isLeft: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative flex w-full md:justify-${isLeft ? "start" : "end"} justify-center`}
      initial={reducedMotion ? false : { opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
    >
      {/* Desktop: alternating card */}
      <div className="w-full md:w-[calc(50%-2rem)] ml-0 md:ml-0">
        <motion.div
          className={`relative border border-border bg-background p-4 cursor-pointer hover:bg-secondary/50 transition-colors ${
            milestone.isCurrent ? "ring-2 ring-primary/30" : ""
          }`}
          onClick={() => setExpanded(!expanded)}
          whileHover={reducedMotion ? {} : { scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Year badge */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground">{milestone.year}</span>
            {milestone.isCurrent && (
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
            )}
          </div>

          <h3 className="text-sm font-semibold mb-1">{milestone.title}</h3>
          <p className="text-xs text-muted-foreground mb-2">{milestone.company}</p>
          <p className="text-sm text-foreground leading-relaxed">{milestone.desc}</p>

          {/* Expand indicator */}
          <motion.div
            className="flex items-center gap-1 mt-2 text-xs text-muted-foreground"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="size-3" />
            <span>{expanded ? "Less" : "More"}</span>
          </motion.div>

          {/* Expandable detail */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-foreground leading-relaxed mt-3 pt-3 border-t border-border">
                  {milestone.detail}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {milestone.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Center dot on the timeline line (desktop only) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:flex items-center justify-center">
        <motion.div
          className={`size-4 rounded-full border-2 border-primary ${
            milestone.isCurrent ? "bg-primary" : "bg-background"
          }`}
          initial={reducedMotion ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.2 + index * 0.1 }}
        />
      </div>

      {/* Mobile dot */}
      <div className="absolute left-0 top-4 md:hidden flex items-center justify-center">
        <motion.div
          className={`size-3 rounded-full border-2 border-primary ${
            milestone.isCurrent ? "bg-primary" : "bg-background"
          }`}
          initial={reducedMotion ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function PivotalCard({ moment, index }: { moment: PivotalMoment; index: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="border border-border bg-background p-4 hover:bg-secondary/50 transition-colors"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
    >
      <h4 className="text-sm font-semibold mb-1">{moment.title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{moment.desc}</p>
    </motion.div>
  );
}

function PhilosophyCard({ philosophy, index }: { philosophy: Philosophy; index: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="border border-border bg-background p-4"
      initial={reducedMotion ? false : { opacity: 0, y: 15, rotate: 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.15 }}
    >
      <h4 className="text-sm font-semibold mb-2">{philosophy.title}</h4>
      <p className="text-sm text-foreground leading-relaxed">{philosophy.content}</p>
    </motion.div>
  );
}

export function CareerTimeline() {
  const t = useTranslations("timeline");
  const reducedMotion = useReducedMotion();

  const milestones: Milestone[] = [
    {
      year: t("m1Year"),
      title: t("m1Title"),
      company: t("m1Company"),
      desc: t("m1Desc"),
      detail: t("m1Detail"),
      tech: t("m1Tech").split(",").map((s) => s.trim()),
    },
    {
      year: t("m2Year"),
      title: t("m2Title"),
      company: t("m2Company"),
      desc: t("m2Desc"),
      detail: t("m2Detail"),
      tech: t("m2Tech").split(",").map((s) => s.trim()),
    },
    {
      year: t("m3Year"),
      title: t("m3Title"),
      company: t("m3Company"),
      desc: t("m3Desc"),
      detail: t("m3Detail"),
      tech: t("m3Tech").split(",").map((s) => s.trim()),
    },
    {
      year: t("m4Year"),
      title: t("m4Title"),
      company: t("m4Company"),
      desc: t("m4Desc"),
      detail: t("m4Detail"),
      tech: t("m4Tech").split(",").map((s) => s.trim()),
    },
    {
      year: t("m5Year"),
      title: t("m5Title"),
      company: t("m5Company"),
      desc: t("m5Desc"),
      detail: t("m5Detail"),
      tech: t("m5Tech").split(",").map((s) => s.trim()),
    },
    {
      year: t("m6Year"),
      title: t("m6Title"),
      company: t("m6Company"),
      desc: t("m6Desc"),
      detail: t("m6Detail"),
      tech: t("m6Tech").split(",").map((s) => s.trim()),
      isCurrent: true,
    },
  ];

  const pivotalMoments: PivotalMoment[] = [
    { title: t("p1Title"), desc: t("p1Desc") },
    { title: t("p2Title"), desc: t("p2Desc") },
    { title: t("p3Title"), desc: t("p3Desc") },
    { title: t("p4Title"), desc: t("p4Desc") },
  ];

  const philosophies: Philosophy[] = [
    { title: t("ph1Title"), content: t("ph1Content") },
    { title: t("ph2Title"), content: t("ph2Content") },
    { title: t("ph3Title"), content: t("ph3Content") },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: t("titleWord1"), style: "block", size: "xl" },
              { text: t("titleWord2"), style: "cursive", size: "xl" },
              { text: <Rocket className="inline-block" />, style: "block", size: "lg" },
            ]}
            className="mb-6"
          />
        </motion.div>

        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center">
            <p className="text-sm text-foreground">{t("introNote")}</p>
          </StickyNote>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <div className="py-8">
        <NotebookSectionHeader
          title={t("timelineTitle")}
          subtitle={t("timelineSubtitle")}
          className="mb-8"
        />

        {/* Timeline with vertical line */}
        <div className="relative pl-6 md:pl-0">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"
            initial={reducedMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={index}
                milestone={milestone}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pivotal Moments */}
      <div className="py-8">
        <NotebookSectionHeader
          title={t("pivotalTitle")}
          subtitle={t("pivotalSubtitle")}
          className="mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pivotalMoments.map((moment, index) => (
            <PivotalCard key={index} moment={moment} index={index} />
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-8">
        <NotebookSectionHeader
          title={t("philosophyTitle")}
          subtitle={t("philosophySubtitle")}
          className="mb-6"
        />
        <div className="space-y-4">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard key={index} philosophy={philosophy} index={index} />
          ))}
        </div>
      </div>

      {/* Current Role / What's Next */}
      <div className="py-8">
        <NotebookSectionHeader
          title={t("nextTitle")}
          subtitle={t("nextSubtitle")}
          className="mb-4"
        />
        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <StickyNote rotation={-1} className="text-center">
            <p className="text-sm text-foreground">{t("currentRole")}</p>
          </StickyNote>
        </motion.div>
      </div>
    </div>
  );
}
