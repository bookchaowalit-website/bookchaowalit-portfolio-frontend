"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { motion, useReducedMotion } from "framer-motion";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { SketchyFrame } from "@/components/ui/notebook-elements";
import { useTranslations } from 'next-intl';
import { Rocket } from "lucide-react";

export function BusinessSection() {
  const t = useTranslations('business');
  const reducedMotion = useReducedMotion();

  const highlightedBusinesses = [
    {
      title: t('ionomadTitle'),
      description: t('ionomadDesc'),
      icon: <Rocket className="w-8 h-8 text-foreground" />,
      status: t('activeStatus')
    }
  ];

  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <MixedTypographyTitle
          words={[
            { text: t('myVenturesTitle'), style: "cursive", size: "lg" },
            { text: t('myVenturesSubtitle'), style: "bubble", size: "lg" },
            { text: t('myVenturesIcon'), style: "filled", size: "lg" }
          ]}
          className="mb-4"
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-muted border border-border p-4 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-center">
              {t('homeHeroDescription')}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 max-w-lg mx-auto gap-6">
        {highlightedBusinesses.map((business, index) => (
          <motion.div
            key={index}
            initial={reducedMotion ? false : { opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={reducedMotion ? undefined : { y: -5, scale: 1.02 }}
            className="h-full"
          >
            <SketchyFrame variant="dashed">
              <div className="p-5 h-full">
                <div className="flex flex-col h-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-foreground">{business.icon}</span>
                    <Badge
                      variant="secondary"
                      className="bg-muted text-foreground text-xs"
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
              </div>
            </SketchyFrame>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center pt-4"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
          <Button size="lg" asChild>
            <Link href="/business">
              {t('exploreVenturesButton')}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
