"use client";

import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(timeout);
  }, [pathname, isMounted]);

  // Don't animate on initial mount to prevent hydration issues
  if (!isMounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loading"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.15, ease: "easeOut" }}
          className="flex items-center justify-center min-h-[40vh]"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={reducedMotion ? { duration: 0 } : { 
              rotate: { duration: 0.8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
            className="rounded-full h-6 w-6 border-2 border-primary border-t-transparent"
          />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
          transition={reducedMotion ? { duration: 0 } : { 
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}