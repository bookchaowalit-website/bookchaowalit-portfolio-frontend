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
            { text: "My", style: "cursive", color: "text-purple-700", size: "lg" },
            { text: "Business", style: "bubble", color: "text-blue-600", size: "lg" },
            { text: "Ventures", style: "filled", color: "text-green-700", size: "lg" }
          ]}
          className="mb-4"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg max-w-2xl mx-auto">
            <p className="text-slate-700 text-center">
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
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      } text-xs`}
                    >
                      {business.status}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-script)] font-bold text-slate-800 text-lg mb-2">
                      {business.title}
                    </h3>
                    <p className="text-slate-600 font-[family-name:var(--font-doodle)] text-sm leading-relaxed">
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
