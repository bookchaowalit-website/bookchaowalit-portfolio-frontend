"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Dumbbell, Target, TrendingUp, Heart, Brain, Zap } from "lucide-react";

export function FitnessJourneyClient() {
  const t = useTranslations("about_fitness");
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
              { text: t("titleWord1"), style: "block", size: "xl" },
              { text: t("titleWord2"), style: "cursive", size: "xl" },
              { text: <Dumbbell className="inline-block" />, style: "block", size: "lg" }
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
          <StickyNote rotation={-1} className="text-center" color="pink">
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
        {/* Philosophy Section */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("philosophyTitle")} 
            subtitle={t("philosophySubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("progressiveOverloadTitle")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("progressiveOverloadContent", {
                  blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("recoveryReflectionTitle")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("recoveryReflectionContent", {
                  yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Current Routine Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              {t("routineTitle")}
            </CardTitle>
            <CardDescription>{t("routineSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4 text-foreground" />
                  {t("weeklyStructure")}
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("dayMonThu")}</Badge>
                    {t("routineMonThu")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("dayTueFri")}</Badge>
                    {t("routineTueFri")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("dayWed")}</Badge>
                    {t("routineWed")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("daySat")}</Badge>
                    {t("routineSat")}
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{t("daySun")}</Badge>
                    {t("routineSun")}
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Brain className="h-4 w-4 text-foreground" />
                  {t("mentalBenefits")}
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• {t("benefit1")}</li>
                  <li>• {t("benefit2")}</li>
                  <li>• {t("benefit3")}</li>
                  <li>• {t("benefit4")}</li>
                  <li>• {t("benefit5")}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fitness Goals & Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t("goalsTitle")}
            </CardTitle>
            <CardDescription>{t("goalsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("cardio")}</h4>
                <p className="text-sm text-muted-foreground">{t("cardioTarget")}</p>
                <p className="text-sm">{t("cardioCurrent")}</p>
              </div>
              
              <div className="text-center">
                <Zap className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("strength")}</h4>
                <p className="text-sm text-muted-foreground">{t("strengthTarget")}</p>
                <p className="text-sm">{t("strengthCurrent")}</p>
              </div>
              
              <div className="text-center">
                <Target className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("consistency")}</h4>
                <p className="text-sm text-muted-foreground">{t("consistencyTarget")}</p>
                <p className="text-sm">{t("consistencyCurrent")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Applied to Tech */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("lessonsTitle")} 
            subtitle={t("lessonsSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("compoundTitle")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("compoundContent", {
                  pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("formTitle")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("formContent", {
                  green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("trackingTitle")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("trackingContent", {
                  blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Connection to Solopreneur Journey */}
        <Card>
          <CardHeader>
            <CardTitle>{t("solopreneurTitle")}</CardTitle>
            <CardDescription>{t("solopreneurSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t("solopreneurDescription")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">{t("physicalBenefits")}</h4>
                  <ul className="text-sm space-y-1">
                    <li>• {t("phys1")}</li>
                    <li>• {t("phys2")}</li>
                    <li>• {t("phys3")}</li>
                    <li>• {t("phys4")}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">{t("mentalBenefits")}</h4>
                  <ul className="text-sm space-y-1">
                    <li>• {t("ment1")}</li>
                    <li>• {t("ment2")}</li>
                    <li>• {t("ment3")}</li>
                    <li>• {t("ment4")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}