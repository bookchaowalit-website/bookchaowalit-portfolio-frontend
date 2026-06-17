"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface HeroTypingTextProps {
  greeting: string;
  name: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export function HeroTypingText({
  greeting,
  name,
  delay = 0,
  speed = 80,
  onComplete
}: HeroTypingTextProps) {
  const fullText = `${greeting} ${name}`;
  const [displayText, setDisplayText] = useState(fullText); // Start with full text for SSR
  const [currentIndex, setCurrentIndex] = useState(fullText.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Start the typing animation after mount
    const startAnimation = setTimeout(() => {
      setDisplayText("");
      setCurrentIndex(0);
      setIsAnimating(true);
      setShowCursor(true);
    }, delay);

    return () => clearTimeout(startAnimation);
  }, [delay]);

  useEffect(() => {
    if (!isAnimating || currentIndex >= fullText.length) {
      if (currentIndex >= fullText.length && isAnimating) {
        setIsAnimating(false);
        setShowCursor(false);
        onComplete?.();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(fullText.substring(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, fullText, speed, isAnimating, onComplete]);

  // Render text with gradient on name part
  const renderText = () => {
    const greetingWithSpace = `${greeting} `;

    if (displayText.length <= greetingWithSpace.length) {
      // Still typing greeting part
      return displayText;
    }

    // Typing name part - apply gradient
    const greetingPart = greetingWithSpace;
    const namePart = displayText.substring(greetingWithSpace.length);

    return (
      <>
        {greetingPart}
        <span className="font-bold text-foreground pb-1 inline-block">
          {namePart}
        </span>
      </>
    );
  };

  return (
    <>
      {renderText()}
      {showCursor && (
        <motion.span
          animate={reducedMotion ? {} : { opacity: [1, 0, 1] }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </>
  );
}
