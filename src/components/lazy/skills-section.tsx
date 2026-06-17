"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper } from "@/components/ui/notebook-elements";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function SkillsSection() {
  const t = useTranslations('home');
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: t('computerLanguageTitle'),
      type: "tip" as const,
      skills: t.raw('computerLanguageSkills'),
      rotationClass: "rotate-1"
    },
    {
      title: t('libraryTitle'),
      type: "note" as const,
      skills: t.raw('librarySkills'),
      rotationClass: "-rotate-1"
    },
    {
      title: t('frameworkTitle'),
      type: "important" as const,
      skills: t.raw('frameworkSkills'),
      rotationClass: "rotate-0.5"
    },
    {
      title: t('databaseTitle'),
      type: "tip" as const,
      skills: t.raw('databaseSkills'),
      rotationClass: "-rotate-1"
    },
    {
      title: t('cloudTitle'),
      type: "note" as const,
      skills: t.raw('cloudSkills'),
      rotationClass: "rotate-1"
    },
    {
      title: t('runtimeTitle'),
      type: "important" as const,
      skills: t.raw('runtimeSkills'),
      rotationClass: "-rotate-0.5"
    }
  ];

  return (
    <ScrollReveal>
      <NotebookPaper className="py-8">
        <NotebookSectionHeader
          title={t('skillsTitle')}
          subtitle={t('skillsSubtitle')}
        />
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
            >
              <StudyGuideBox
                title={category.title}
                type={category.type}
                className="mb-4"
              >
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <motion.div
                      key={skill}
                      className={`group relative transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 ${category.rotationClass}`}
                      initial={reducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
                      animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : {
                        duration: 0.15,
                        delay: categoryIndex * 0.06 + skillIndex * 0.01,
                        ease: "easeOut"
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className={`text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-border transition-all duration-200 group-hover:border-opacity-80`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </StudyGuideBox>
            </motion.div>
          ))}
        </motion.div>
      </NotebookPaper>
    </ScrollReveal>
  );
}
