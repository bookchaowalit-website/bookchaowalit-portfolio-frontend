"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, BarChart3, Globe, Wrench, Lightbulb, Code } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutClient() {
  const reducedMotion = useReducedMotion();
  const t = useTranslations('about');

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
          initial={reducedMotion ? false : { scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/profile.webp" alt="Profile" />
            <AvatarFallback className="text-3xl">CG</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          <MixedTypographyTitle
            words={[
              { text: t("titleWord1"), style: "cursive", size: "xl" },
              { text: t("titleWord2"), style: "bubble", size: "xl" },
              { text: <Code className="inline-block" />, style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.6, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center">
            <p className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }} />
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Bio Section */}
        <div className="py-8">
          <NotebookSectionHeader
            title={t('myStoryTitle')}
            subtitle={t('myStorySubtitle')}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t('whoIAmTitle')} type="note">
              <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('whoIAmContent1') }} />
              <p className="text-foreground leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: t.raw('whoIAmContent2') }} />
            </StudyGuideBox>

            <StudyGuideBox title={t('whatIDoTitle')} type="tip">
              <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('whatIDoContent1') }} />
              <p className="text-foreground leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: t.raw('whatIDoContent2') }} />
            </StudyGuideBox>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-8">
          <NotebookSectionHeader
            title={t('technicalSkillsTitle')}
            subtitle={t('technicalSkillsDescription')}
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title={t('frontendTitle')} type="tip">
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript",
                  "Tailwind CSS", "HTML5", "CSS3", "Shopify Liquid"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>

            <StudyGuideBox title={t('backendTitle')} type="note">
              <div className="flex flex-wrap gap-2">
                {[
                  "FastAPI", "Python", "PostgreSQL", "LlamaIndex",
                  "LangChain", "RAG", "Multi-agent Systems", "REST APIs", "AI Integration"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>

            <StudyGuideBox title={t('toolsTitle')} type="important">
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Analytics", "Facebook API", "SEO", "Git",
                  "Data Analysis", "Social Media Analytics", "A/B Testing", "ETL"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.6 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.3}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-8">
          <NotebookSectionHeader title={t('experienceTitle')} subtitle={t('experienceSubtitle')} className="mb-6" />
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('exp1Role')}</h4>
              <p className="text-sm text-muted-foreground">{t('exp1Company')} • {t('exp1Period')}</p>
              <p className="text-sm mt-2">
                {t('exp1Desc')}
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('exp2Role')}</h4>
              <p className="text-sm text-muted-foreground">{t('exp2Company')} • {t('exp2Period')}</p>
              <p className="text-sm mt-2">
                {t('exp2Desc')}
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('exp3Role')}</h4>
              <p className="text-sm text-muted-foreground">{t('exp3Company')} • {t('exp3Period')}</p>
              <p className="text-sm mt-2">
                {t('exp3Desc')}
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('exp4Role')}</h4>
              <p className="text-sm text-muted-foreground">{t('exp4Company')} • {t('exp4Period')}</p>
              <p className="text-sm mt-2">
                {t('exp4Desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="py-8">
          <NotebookSectionHeader title={t('educationTitle')} subtitle={t('educationSubtitle')} className="mb-6" />
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('edu1Title')}</h4>
              <p className="text-sm text-muted-foreground">{t('edu1School')}</p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">{t('certTitle')}</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {t('cert1')}</li>
                <li>• {t('cert2')}</li>
                <li>• {t('cert3')}</li>
                <li>• {t('cert4')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <StickyNote rotation={-1}>
          <h3 className="font-bold font-[family-name:var(--font-doodle)] mb-2">{t('funFactsTitle')}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><Bot className="w-4 h-4 mt-0.5 shrink-0" /> {t('funFact1')}</li>
            <li className="flex items-start gap-2"><BarChart3 className="w-4 h-4 mt-0.5 shrink-0" /> {t('funFact2')}</li>
            <li className="flex items-start gap-2"><Globe className="w-4 h-4 mt-0.5 shrink-0" /> {t('funFact3')}</li>
            <li className="flex items-start gap-2"><Wrench className="w-4 h-4 mt-0.5 shrink-0" /> {t('funFact4')}</li>
            <li className="flex items-start gap-2"><Lightbulb className="w-4 h-4 mt-0.5 shrink-0" /> {t('funFact5')}</li>
          </ul>
        </StickyNote>
      </div>
    </div>
  );
}
