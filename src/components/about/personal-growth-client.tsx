"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BookOpen, Target, Compass, Lightbulb, Brain } from "lucide-react";

export function PersonalGrowthClient() {
  const t = useTranslations("about_growth");
  const reducedMotion = useReducedMotion();
  
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
              { text: t("titleWord1"), style: "cursive", size: "xl" },
              { text: t("titleWord2"), style: "block", size: "xl" },
              { text: "🌱", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={-1} className="text-center" color="green">
            <p className="text-sm text-foreground">
              {t.rich("heroStickNote", {
                yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>,
                pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>,
                green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
              })}
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Core Philosophy */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("philosophyTitle")} 
            subtitle={t("philosophySubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("philosophy1Title")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy1Content", {
                  blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("philosophy2Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy2Content", {
                  yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("philosophy3Title")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy3Content", {
                  pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Current Learning Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {t("focusTitle")}
            </CardTitle>
            <CardDescription>{t("focusSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Brain className="h-4 w-4 text-foreground" />
                  {t("focusTechnical")}
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeActive")}</Badge>
                    {t("techGrowthItem1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeActive")}</Badge>
                    {t("techGrowthItem2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgePlanned")}</Badge>
                    {t("techGrowthItem3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeOngoing")}</Badge>
                    {t("techGrowthItem4")}
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Compass className="h-4 w-4 text-foreground" />
                  {t("focusPersonal")}
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeActive")}</Badge>
                    {t("persGrowthItem1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeActive")}</Badge>
                    {t("persGrowthItem2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeDaily")}</Badge>
                    {t("persGrowthItem3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("badgeWeekly")}</Badge>
                    {t("persGrowthItem4")}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              {t("methodsTitle")}
            </CardTitle>
            <CardDescription>{t("methodsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("method1Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("method1Desc")}</p>
                <p className="text-sm">
                  {t("method1Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("method2Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("method2Desc")}</p>
                <p className="text-sm">
                  {t("method2Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("method3Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("method3Desc")}</p>
                <p className="text-sm">
                  {t("method3Content")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Practices */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("reflectionTitle")} 
            subtitle={t("reflectionSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StudyGuideBox title={t("reflection1Title")} type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("reflection1Content", {
                    green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("reflection2Title")} type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("reflection2Content", {
                    blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("reflection3Title")} type="important">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("reflection3Content", {
                    yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("reflection4Title")} type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("reflection4Content", {
                    pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
            </div>
          </div>
        </div>

        {/* Key Insights & Lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              {t("lessonsTitle")}
            </CardTitle>
            <CardDescription>{t("lessonsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-px bg-border">
                <div className="bg-background p-4">
                  <h4 className="font-semibold">{t("lesson1Title")}</h4>
                  <p className="text-sm">
                    {t("lesson1Content")}
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">{t("lesson2Title")}</h4>
                  <p className="text-sm">
                    {t("lesson2Content")}
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">{t("lesson3Title")}</h4>
                  <p className="text-sm">
                    {t("lesson3Content")}
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">{t("lesson4Title")}</h4>
                  <p className="text-sm">
                    {t("lesson4Content")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Growth Areas */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("futureTitle")} 
            subtitle={t("futureSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("vision1Title")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("vision1Content", {
                  green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("vision2Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("vision2Content", {
                  blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("vision3Title")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("vision3Content", {
                  yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>
      </div>
    </div>
  );
}