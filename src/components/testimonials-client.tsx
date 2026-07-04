"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SketchyFrame } from "@/components/ui/notebook-elements";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocale, useTranslations } from "next-intl";
import { Quote, MessageSquarePlus, Send } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsClientProps {
  testimonials: Testimonial[];
}

type CategoryFilter = "all" | Testimonial["category"];

export function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const reducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filters: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "client", label: t("filterClients") },
    { key: "colleague", label: t("filterColleagues") },
    { key: "partner", label: t("filterPartners") },
    { key: "mentor", label: t("filterMentors") },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  const getCategoryLabel = (category: Testimonial["category"]) => {
    const key = `category${category.charAt(0).toUpperCase() + category.slice(1)}` as const;
    return t(key);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <MixedTypographyTitle
          words={[
            { text: t("pageTitle"), style: "cursive", size: "lg" },
            { text: "★", style: "bubble", size: "lg" },
          ]}
        />
        <p className="text-muted-foreground font-[family-name:var(--font-doodle)] max-w-2xl mx-auto">
          {t("pageSubtitle")}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter.key)}
            className="font-[family-name:var(--font-doodle)]"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Testimonials Grid */}
      {filteredTestimonials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)]">
            {t("noTestimonials")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: index * 0.1 }
              }
              viewport={{ once: true }}
            >
              <SketchyFrame variant="double">
                <div className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />

                  {/* Quote Text */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-foreground font-[family-name:var(--font-doodle)] leading-relaxed text-pretty">
                      {locale === "th" ? (testimonial.quoteTh ?? testimonial.quote) : testimonial.quote}
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-[family-name:var(--font-comic)]">
                        {testimonial.avatarInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-comic)] font-bold text-foreground">
                        {locale === "th" ? (testimonial.nameTh ?? testimonial.name) : testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
                        {locale === "th" ? (testimonial.roleTh ?? testimonial.role) : testimonial.role}
                        {(locale === "th" ? (testimonial.companyTh ?? testimonial.company) : testimonial.company) && 
                          ` · ${locale === "th" ? (testimonial.companyTh ?? testimonial.company) : testimonial.company}`}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-muted text-foreground text-xs font-[family-name:var(--font-doodle)]"
                    >
                      {getCategoryLabel(testimonial.category)}
                    </Badge>
                  </div>
                </div>
              </SketchyFrame>
            </motion.div>
          ))}
        </div>
      )}

      {/* Testimonials Collection CTA */}
      <motion.div
        className="mt-16"
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SketchyFrame variant="double" className="p-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <MessageSquarePlus className="w-10 h-10 text-primary/60 mx-auto" />
            <h3 className="text-xl font-[family-name:var(--font-comic)] font-bold">
              {t("collectionTitle")}
            </h3>
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
              {t("collectionDesc")}
            </p>
            <div className="pt-2">
              <Button asChild size="lg">
                <a href="mailto:hello@bookchaowalit.com?subject=Testimonial%20Submission">
                  <Send className="w-4 h-4 mr-2" />
                  {t("collectionButton")}
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {t("collectionNote")}
            </p>
          </div>
        </SketchyFrame>
      </motion.div>
    </div>
  );
}
