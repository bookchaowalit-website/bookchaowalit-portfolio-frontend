"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Zap, Rocket } from "lucide-react";

export function TechJourneyClient() {
  const t = useTranslations("about_tech");
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
              { text: <Rocket className="inline-block" />, style: "block", size: "lg" }
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
          <StickyNote rotation={1} className="text-center">
            <p className="text-sm text-foreground">
              {t.rich("heroStickNote", {
                highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
              })}
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Timeline */}
        <div className="py-8">
          <NotebookSectionHeader
            title={t("timelineTitle")}
            subtitle={t("timelineSubtitle")}
            className="mb-6"
          />
          <div className="space-y-8">
            <div className="space-y-6">
                <StudyGuideBox title={t("milestone1Title")} type="note">
                  <p className="text-foreground leading-relaxed text-sm">
                    {t("milestone1Content")}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Arduino</Badge>
                    <Badge variant="outline" className="text-xs">Circuit Design</Badge>
                    <Badge variant="outline" className="text-xs">Embedded C</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title={t("milestone2Title")} type="tip">
                  <p className="text-foreground leading-relaxed text-sm">
                    {t("milestone2Content")}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Fiber Optics</Badge>
                    <Badge variant="outline" className="text-xs">Network Administration</Badge>
                    <Badge variant="outline" className="text-xs">Server Management</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title={t("milestone3Title")} type="important">
                  <p className="text-foreground leading-relaxed text-sm">
                    {t("milestone3Content")}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Next.js</Badge>
                    <Badge variant="outline" className="text-xs">SEO</Badge>
                    <Badge variant="outline" className="text-xs">Google Analytics</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title={t("milestone4Title")} type="tip">
                  <p className="text-foreground leading-relaxed text-sm">
                    {t("milestone4Content")}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">LangChain</Badge>
                    <Badge variant="outline" className="text-xs">LlamaIndex</Badge>
                    <Badge variant="outline" className="text-xs">FastAPI</Badge>
                    <Badge variant="outline" className="text-xs">Multi-Agent Systems</Badge>
                  </div>
                </StudyGuideBox>
              </div>
            </div>
        </div>

        {/* Key Turning Points */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              {t("pivotalTitle")}
            </CardTitle>
            <CardDescription>{t("pivotalSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("moment1Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("moment1Desc")}</p>
                <p className="text-sm">
                  {t("moment1Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("moment2Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("moment2Desc")}</p>
                <p className="text-sm">
                  {t("moment2Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("moment3Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("moment3Desc")}</p>
                <p className="text-sm">
                  {t("moment3Content")}
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">{t("moment4Title")}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t("moment4Desc")}</p>
                <p className="text-sm">
                  {t("moment4Content")}
                </p>
              </div>
              </div>
          </CardContent>
        </Card>

        {/* Technical Philosophy */}
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
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>

            <StudyGuideBox title={t("philosophy2Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy2Content", {
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>

            <StudyGuideBox title={t("philosophy3Title")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("philosophy3Content", {
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Current Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              {t("stackTitle")}
            </CardTitle>
            <CardDescription>{t("stackSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">{t("stackFrontend")}</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{t("stackBackend")}</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "LangChain", "LlamaIndex", "PostgreSQL", "Redis"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{t("stackTools")}</h4>
                <div className="flex flex-wrap gap-2">
                  {["Google Analytics", "Facebook API", "Docker", "Git", "Vercel", "AWS"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.6 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <div className="py-8">
          <NotebookSectionHeader
            title={t("nextTitle")}
            subtitle={t("nextSubtitle")}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t("road1Title")} type="tip">
              <p className="text-foreground leading-relaxed">
                {t.rich("road1Content", {
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>

            <StudyGuideBox title={t("road2Title")} type="note">
              <p className="text-foreground leading-relaxed">
                {t.rich("road2Content", {
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>

            <StudyGuideBox title={t("road3Title")} type="important">
              <p className="text-foreground leading-relaxed">
                {t.rich("road3Content", {
                  highlight: (chunks) => <HandDrawnHighlight>{chunks}</HandDrawnHighlight>
                })}
              </p>
            </StudyGuideBox>
          </div>
        </div>
      </div>
    </div>
  );
}
