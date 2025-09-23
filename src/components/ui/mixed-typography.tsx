"use client";

import { motion } from "framer-motion";

// Mixed typography component with different styles in one composition
export function MixedTypographyTitle({ 
  words,
  className = "" 
}: { 
  words: Array<{
    text: string;
    style: "block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble";
    color?: string;
    size?: "sm" | "md" | "lg" | "xl";
  }>;
  className?: string;
}) {
  const getTextStyle = (style: "block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble", color?: string, size?: "sm" | "md" | "lg" | "xl") => {
    const sizeClasses: Record<"sm" | "md" | "lg" | "xl", string> = {
      sm: "text-2xl",
      md: "text-3xl", 
      lg: "text-4xl",
      xl: "text-5xl"
    };

    const baseStyles: Record<"block" | "cursive" | "outlined" | "filled" | "shaded" | "bubble", string> = {
      block: `font-[family-name:var(--font-comic)] font-black uppercase tracking-wider ${color || 'text-slate-900'}`,
      cursive: `font-[family-name:var(--font-script)] italic ${color || 'text-purple-700'}`,
      outlined: `font-[family-name:var(--font-comic)] font-bold ${color || 'text-blue-600'} [text-shadow:_0_0_2px_white,_2px_2px_0_currentColor,_-1px_-1px_0_currentColor,_1px_-1px_0_currentColor,_-1px_1px_0_currentColor]`,
      filled: `font-[family-name:var(--font-doodle)] font-bold ${color || 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'}`,
      shaded: `font-[family-name:var(--font-comic)] font-black ${color || 'text-slate-800'} [text-shadow:_3px_3px_0_rgba(0,0,0,0.3)]`,
      bubble: `font-[family-name:var(--font-comic)] font-black ${color || 'text-orange-600'} [text-shadow:_2px_2px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_3px_3px_0_#333]`
    };

    return `${sizeClasses[size || 'md']} ${baseStyles[style]}`;
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={getTextStyle(word.style, word.color, word.size)}
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: (index % 2 === 0 ? 2 : -2) }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
          whileHover={{ 
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
  return (
    <div className={`relative mb-8 ${className}`}>
      {/* Main title with mixed styles */}
      <div className="relative">
        <motion.h2 
          className="text-4xl font-[family-name:var(--font-script)] text-slate-900 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        
        {/* Hand-drawn underline */}
        <motion.svg 
          className="absolute -bottom-1 left-0 text-accent/60" 
          width="200" 
          height="8" 
          viewBox="0 0 200 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
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
          className="text-lg font-[family-name:var(--font-doodle)] text-slate-700 ml-4 italic"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
  const styles = {
    tip: "bg-green-50 border-green-300 text-green-900",
    note: "bg-blue-50 border-blue-300 text-blue-900",  
    warning: "bg-yellow-50 border-yellow-300 text-yellow-900",
    important: "bg-red-50 border-red-300 text-red-900"
  };

  const icons = {
    tip: "💡",
    note: "📝",
    warning: "⚠️", 
    important: "❗"
  };

  return (
    <motion.div 
      className={`${styles[type]} border-2 border-dashed p-4 rounded-lg ${className}`}
      style={{ transform: "rotate(-0.5deg)" }}
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: -0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icons[type]}</span>
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