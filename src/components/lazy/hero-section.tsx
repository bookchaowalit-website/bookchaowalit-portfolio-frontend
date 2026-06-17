"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from 'next-intl';
import { HeroTypingText } from "@/components/ui/hero-typing-text";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('home');
  const locale = useLocale();
  const heroSpacing = locale === 'th'
    ? "text-center space-y-8 pt-16 pb-24 md:pt-20 md:pb-36"
    : "text-center space-y-8 pt-16 pb-16 md:pt-20 md:pb-24";
  const headingTracking = locale === 'th'
    ? "tracking-[0.04em]"
    : "tracking-tight";

  return (
    <section className={heroSpacing}>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative w-32 h-32 mx-auto"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <Image
            src="/profile.webp"
            alt={t('heroAlt')}
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSAwAAAABBxAREYiImP8AAFZQOCAYAAAANAEAnQEqEAAQAAUAAMACJbACdLoAAP7+FgAA"
          />
        </motion.div>

        <div className="relative py-4 overflow-visible">
          <h1 className={`text-4xl md:text-6xl font-bold ${headingTracking} font-[family-name:var(--font-script)] leading-loose md:leading-loose pb-2`}>
            <HeroTypingText
              greeting={t('greeting')}
              name={t('name')}
              delay={800}
              speed={80}
            />
          </h1>
        </div>

        <div className="relative space-y-6">
          <div>
            <MixedTypographyTitle
              words={[
                { text: t('heroWord1'), style: "block", size: "lg" },
                { text: t('heroWord2'), style: "cursive", size: "lg" },
                { text: t('heroWord3'), style: "outlined", size: "md" },
                { text: t('heroWord4'), style: "block", size: "lg" },
                { text: t('heroWord5'), style: "shaded", size: "lg" }
              ]}
              className="mb-4"
            />
          </div>

          {/* Concrete value prop — immediately communicates what I do */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-balance font-[family-name:var(--font-sarabun)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('heroValueProp')}
          </motion.p>

          <div className="flex justify-center">
            <div className="bg-muted border border-border p-4 max-w-md">
              <p className="text-muted-foreground text-center leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('heroSubtitle') }} />
            </div>
          </div>

        </div>
      </motion.div>

      <div className="flex gap-4 justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg">
            <Link href="/projects">{t('viewWork')}</Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">{t('getInTouch')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
