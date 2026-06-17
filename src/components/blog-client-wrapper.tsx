"use client";

import { motion } from "framer-motion";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function BlogHero() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="text-center space-y-8 mb-12"
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
            { text: "My", style: "cursive", size: "xl" },
            { text: "Blog", style: "bubble", size: "xl" },
            { text: "✍️", style: "block", size: "lg" }
          ]}
          className="mb-6"
        />
      </motion.div>

      <motion.div
        className="max-w-md mx-auto"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
      >
        <div className="bg-muted border border-border p-4">
          <p className="text-foreground text-center">
            Thoughts on web development, technology, and everything in between! 💭
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BlogSearchBar() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="max-w-md mx-auto mb-12"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
    >
      <div className="bg-muted border border-border p-2 hover:border-primary/40 transition-colors">
        <Input
          type="text"
          placeholder="Search articles... 🔍"
          className="w-full border-0 focus:ring-0 font-[family-name:var(--font-doodle)] bg-transparent"
        />
      </div>
    </motion.div>
  );
}

export function BlogNewsletter() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      className="mt-16"
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
    >
      <SketchyFrame variant="double">
        <NotebookPaper className="p-8 text-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 1.0 }}
          >
            <MixedTypographyTitle
              words={[
                { text: "Stay", style: "cursive", size: "lg" },
                { text: "Updated!", style: "bubble", size: "lg" },
                { text: "✉️", style: "block", size: "md" }
              ]}
              className="mb-6"
            />
          </motion.div>

          <motion.div
            className="max-w-sm mx-auto mb-6"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 1.2, ease: "backOut" }}
          >
            <div className="bg-muted border border-border p-3">
              <p className="text-foreground text-center text-sm">
                Get the latest articles and updates delivered straight to your inbox! 📨
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 1.4 }}
          >
            <Input
              type="email"
              placeholder="Enter your email ✨"
              className="flex-1 font-[family-name:var(--font-doodle)]"
            />
            <Button className="font-[family-name:var(--font-comic)]">Subscribe</Button>
          </motion.div>
        </NotebookPaper>
      </SketchyFrame>
    </motion.section>
  );
}

export function NotebookSection({
  title,
  subtitle,
  children,
  className = ""
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NotebookPaper className={`py-8 ${className}`}>
      <NotebookSectionHeader
        title={title}
        subtitle={subtitle}
        className="mb-8"
      />
      {children}
    </NotebookPaper>
  );
}
