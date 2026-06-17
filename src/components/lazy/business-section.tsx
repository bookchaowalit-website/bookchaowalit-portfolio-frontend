"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { useTranslations } from 'next-intl';

export function BusinessSection() {
  const t = useTranslations('business');

  const highlightedBusinesses = [
    {
      title: "Ionomad",
      description: "A deeptech and marketing agency specializing in AI-driven solutions, content marketing, and digital transformation.",
      icon: "🚀",
      status: t('activeStatus')
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <MixedTypographyTitle
          words={[
            { text: "My", style: "cursive", size: "lg" },
            { text: "Business", style: "bubble", size: "lg" },
            { text: "Ventures", style: "filled", size: "lg" }
          ]}
          className="mb-4"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-muted border border-border p-4 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-center">
              As a <strong>solopreneur</strong>, I build businesses that combine technology with genuine value creation 🚀
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlightedBusinesses.map((business, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="h-full"
          >
            <SketchyFrame variant="dashed">
              <NotebookPaper className="p-5 h-full">
                <div className="flex flex-col h-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{business.icon}</span>
                    <Badge
                      variant="secondary"
                      className={`${
                        business.status === 'Active'
                          ? 'bg-muted text-foreground'
                          : 'bg-muted text-foreground'
                      } text-xs`}
                    >
                      {business.status}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-script)] font-bold text-foreground text-lg mb-2">
                      {business.title}
                    </h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-doodle)] text-sm leading-relaxed">
                      {business.description}
                    </p>
                  </div>
                </div>
              </NotebookPaper>
            </SketchyFrame>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" asChild>
            <Link href="/business">
              Explore All My Ventures
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
