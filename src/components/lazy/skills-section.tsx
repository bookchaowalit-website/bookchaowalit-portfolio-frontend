"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper } from "@/components/ui/notebook-elements";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const t = useTranslations('home');

  return (
    <ScrollReveal>
      <NotebookPaper className="py-8">
        <NotebookSectionHeader
          title={t('skillsTitle')}
          subtitle={t('skillsSubtitle')}
        />
        <div className="space-y-6">
          <StudyGuideBox
            title={t('computerLanguageTitle')}
            type="tip"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('computerLanguageSkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-blue-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>

          <StudyGuideBox
            title={t('libraryTitle')}
            type="note"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('librarySkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.04,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-green-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>

          <StudyGuideBox
            title={t('frameworkTitle')}
            type="important"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('frameworkSkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + index * 0.03,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-purple-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>

          <StudyGuideBox
            title={t('databaseTitle')}
            type="tip"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('databaseSkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.5 + index * 0.03,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-orange-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>

          <StudyGuideBox
            title={t('cloudTitle')}
            type="note"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('cloudSkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 2.0 + index * 0.03,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-cyan-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>

          <StudyGuideBox
            title={t('runtimeTitle')}
            type="important"
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {t.raw('runtimeSkills').map((skill: string, index: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 2.5 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-red-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>
        </div>
      </NotebookPaper>
    </ScrollReveal>
  );
}
