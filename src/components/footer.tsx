"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 400;

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })}
      initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: 10 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
      className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Back to top"
    >
      <ArrowUp className="size-4" />
    </motion.button>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const reducedMotion = useReducedMotion();

  const hoverPrimary = reducedMotion ? {} : { y: -3, scale: 1.08 };
  const hoverSecondary = reducedMotion ? {} : { y: -2, scale: 1.05 };

  return (
    <>
      <footer className="mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            {/* Hand-drawn title */}
            <motion.div
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl font-[family-name:var(--font-script)] text-foreground mb-4">
                Thanks for visiting!
              </h2>
            </motion.div>

            {/* Navigation with doodle style */}
            <motion.nav
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            >
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(1deg)` }}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(-0.5deg)` }}
                >
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(0.5deg)` }}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/business"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(-0.8deg)` }}
                >
                  Business
                </Link>
              </motion.div>
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(-1deg)` }}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div whileHover={hoverSecondary}>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                  style={{ transform: `rotate(0.5deg)` }}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.nav>

            {/* Social Media Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-6"
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="https://github.com/bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <span role="img" aria-hidden="true">🐙</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span role="img" aria-hidden="true">💼</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <span role="img" aria-hidden="true">🐦</span>
              </motion.a>
              <motion.a
                href="https://dev.to/bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Dev.to"
              >
                <span role="img" aria-hidden="true">✍️</span>
              </motion.a>
              <motion.a
                href="https://medium.com/@bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Medium"
              >
                <span role="img" aria-hidden="true">📖</span>
              </motion.a>
              <motion.a
                href="https://www.upwork.com/freelancers/~01bb8b7612ad1fd8bc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Upwork"
              >
                <span role="img" aria-hidden="true">🔧</span>
              </motion.a>
              <motion.a
                href="https://fastwork.co/user/bookchao"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Fastwork"
              >
                <span role="img" aria-hidden="true">⚡</span>
              </motion.a>
              <motion.a
                href="mailto:bookchaowalit@gmail.com"
                whileHover={hoverPrimary}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <span role="img" aria-hidden="true">📧</span>
              </motion.a>
            </motion.div>

            {/* Hand-drawn doodle symbols */}
            <motion.div
              className="flex justify-center items-center gap-8 mb-6"
              initial={reducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
            >
              {/* Star doodle */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-primary/60"
                aria-hidden="true"
              >
                <path
                  d="M12 2l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 15l-3.5 2.5L10 13l-3.5-2.5h4.5L12 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              {/* Heart doodle */}
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                className="text-foreground/60"
                aria-hidden="true"
              >
                <path
                  d="M12 18s-8-4-8-10c0-3 2-5 5-5 2 0 3 1 3 1s1-1 3-1c3 0 5 2 5 5 0 6-8 10-8 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Squiggle doodle */}
              <svg
                width="40"
                height="16"
                viewBox="0 0 40 16"
                className="text-secondary/60"
                aria-hidden="true"
              >
                <path
                  d="M2 8c4-3 8 3 12-2 4-3 8 2 12-1 4-2 8 3 10 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Simple copyright */}
            <motion.div
              initial={reducedMotion ? undefined : { opacity: 0 }}
              animate={reducedMotion ? undefined : { opacity: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
                © {currentYear} Book (เชาวลิต กรีโภค)
              </p>
              <p className="text-xs text-foreground mt-1">
                Made with <span aria-hidden="true">❤️</span> in Bangkok, Thailand <span aria-hidden="true">🇹🇭</span>
              </p>
              <p className="text-xs text-foreground mt-1">
                Solopreneur • Full-Stack Developer • AI Specialist
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
