"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Palette, Lightbulb, Camera, Brush, Code, Sparkles } from "lucide-react";

export function CreativeWorksClient() {
  const t = useTranslations("about_creative");
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
              { text: "🎨", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center" color="yellow">
            <p className="text-sm text-foreground">
              {t.rich("heroStickNote", {
                yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>,
                pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
              })}
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Creative Philosophy */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("philosophyTitle")} 
            subtitle={t("philosophySubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("philosophy1Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy1Content", {
                  green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("philosophy2Title")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy2Content", {
                  blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Design Skills & Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              {t("toolsTitle")}
            </CardTitle>
            <CardDescription>{t("toolsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Brush className="h-4 w-4 text-foreground" />
                  {t("toolsDesign")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Canva", "Framer", "Photoshop", "Illustrator"].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Code className="h-4 w-4 text-foreground" />
                  {t("toolsCoding")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["CSS Animation", "SVG Graphics", "Canvas API", "Three.js", "Framer Motion", "Lottie"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Creative Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              {t("projectsTitle")}
            </CardTitle>
            <CardDescription>{t("projectsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("project1Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("project1Desc")}</p>
                <p className="text-sm">
                  {t("project1Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("project2Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("project2Desc")}</p>
                <p className="text-sm">
                  {t("project2Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("project3Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("project3Desc")}</p>
                <p className="text-sm">
                  {t("project3Content")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Creative Process */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("processTitle")} 
            subtitle={t("processSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StudyGuideBox title={t("process1Title")} type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("process1Content", {
                    yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("process2Title")} type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("process2Content", {
                    pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("process3Title")} type="important">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("process3Content", {
                    green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title={t("process4Title")} type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  {t.rich("process4Content", {
                    blue: (chunks) => <HandDrawnHighlight color="blue">{chunks}</HandDrawnHighlight>
                  })}
                </p>
              </StudyGuideBox>
            </div>
          </div>
        </div>

        {/* Creative Inspiration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              {t("inspirationTitle")}
            </CardTitle>
            <CardDescription>{t("inspirationSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Camera className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("insp1Title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("insp1Content")}
                </p>
              </div>
              
              <div className="text-center">
                <Brush className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("insp2Title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("insp2Content")}
                </p>
              </div>
              
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">{t("insp3Title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("insp3Content")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Tech Work */}
        <div className="py-8">
          <NotebookSectionHeader 
            title={t("techTitle")} 
            subtitle={t("techSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("tech1Title")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("tech1Content", {
                  yellow: (chunks) => <HandDrawnHighlight color="yellow">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("tech2Title")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("tech2Content", {
                  pink: (chunks) => <HandDrawnHighlight color="pink">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title={t("tech3Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("tech3Content", {
                  green: (chunks) => <HandDrawnHighlight color="green">{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>
      </div>
    </div>
  );
}