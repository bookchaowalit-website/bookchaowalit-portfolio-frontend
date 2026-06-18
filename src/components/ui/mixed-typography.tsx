"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { Lightbulb, StickyNote, AlertTriangle, AlertCircle } from "lucide-react";

// Mixed typography component with different styles in one composition
export function MixedTypographyTitle({
  words,
  className = ""
}: {
  words: Array<{
    text: ReactNode;
    style: "block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble";
    size?: "sm" | "md" | "lg" | "xl";
  }>;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const getTextStyle = (style: "block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble", size?: "sm" | "md" | "lg" | "xl") => {
    const sizeClasses: Record<"sm" | "md" | "lg" | "xl", string> = {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl",
      xl: "text-5xl"
    };

    const baseStyles: Record<"block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble", string> = {
      block: `font-[family-name:var(--font-comic)] font-black uppercase tracking-wider text-foreground`,
      cursive: `font-[family-name:var(--font-script)] italic text-foreground/80`,
      outlined: `font-[family-name:var(--font-comic)] font-bold text-foreground [text-shadow:_0_0_2px_var(--background),_2px_2px_0_currentColor,_-1px_-1px_0_currentColor,_1px_-1px_0_currentColor,_-1px_1px_0_currentColor]`,
      filled: `font-[family-name:var(--font-doodle)] font-bold text-foreground`,
      shaded: `font-[family-name:var(--font-comic)] font-black text-foreground [text-shadow:_3px_3px_0_rgba(0,0,0,0.2)]`,
      bubble: `font-[family-name:var(--font-comic)] font-black text-foreground [text-shadow:_2px_2px_0_var(--background),_-1px_-1px_0_var(--background),_1px_-1px_0_var(--background),_-1px_1px_0_var(--background),_3px_3px_0_var(--muted-foreground)]`
    };

    return `${sizeClasses[size || 'md']} ${baseStyles[style]}`;
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 heading-depth-lg ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={getTextStyle(word.style, word.size)}
          initial={reducedMotion ? false : { opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: (index % 2 === 0 ? 2 : -2) }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1, ease: "backOut" }}
          whileHover={reducedMotion ? undefined : {
            scale: 1.1,
            rotate: (index % 2 === 0 ? 5 : -5),
            transition: { duration: 0.2 }
          }}
          style={{
            transformOrigin: "center center"
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}

// Notebook-style section header
export function NotebookSectionHeader({
  title,
  subtitle,
  className = ""
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <div className={`relative mb-8 section-rule ${className}`}>
      {/* Main title with mixed styles */}
      <div className="relative">
        <motion.h2
          className="text-4xl font-[family-name:var(--font-script)] text-foreground mb-2"
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* Hand-drawn underline */}
        <motion.svg
          className="absolute -bottom-1 left-0 text-muted-foreground/60"
          width="200"
          height="8"
          viewBox="0 0 200 8"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.8, ease: "easeInOut" }}
        >
          <motion.path
            d="M5 4c20 1 40-1 60 2 15-2 30 1 45-1 20 2 35-1 50 1 10-1 20 0 25 0"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      {subtitle && (
        <motion.p
          className="text-lg font-[family-name:var(--font-doodle)] text-muted-foreground ml-4 italic"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  );
}

// Study guide style info box
export function StudyGuideBox({
  title,
  children,
  type = "tip",
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  type?: "tip" | "note" | "warning" | "important";
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const styles = {
    tip: "bg-muted/60 border-border text-foreground",
    note: "bg-muted border-border text-foreground",
    warning: "bg-muted/40 border-border/70 text-foreground",
    important: "bg-muted/90 border-foreground/30 text-foreground"
  };

  const icons: Record<string, ReactNode> = {
    tip: <Lightbulb className="w-6 h-6 text-foreground" />,
    note: <StickyNote className="w-6 h-6 text-foreground" style={{ strokeWidth: 1.5 }} />,
    warning: <AlertTriangle className="w-6 h-6 text-foreground" />,
    important: <AlertCircle className="w-6 h-6 text-foreground" />
  };

  const rotations = {
    tip: -0.5,
    note: 0.3,
    warning: -0.8,
    important: 0
  };

  const borderStyles = {
    tip: "border-solid",
    note: "border-dashed",
    warning: "border-dotted",
    important: "border-solid"
  };

  return (
    <motion.div
      className={`${styles[type]} border ${borderStyles[type]} p-4 ${className}`}
      style={{ transform: `rotate(${rotations[type]}deg)` }}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: rotations[type] - 4 }}
      animate={{ opacity: 1, scale: 1, rotate: rotations[type] }}
      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icons[type]}</span>
        <div>
          <div className="font-[family-name:var(--font-comic)] font-bold text-lg mb-2 uppercase tracking-wide" role="heading" aria-level={3}>
            {title}
          </div>
          <div className="font-[family-name:var(--font-doodle)] text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
