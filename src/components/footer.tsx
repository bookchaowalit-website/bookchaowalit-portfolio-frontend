"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Hand-drawn title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl font-[family-name:var(--font-script)] text-foreground mb-4">
              Thanks for visiting!
            </h2>
            {/* Hand-drawn underline */}
            <motion.svg
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-primary/60"
              width="180"
              height="8"
              viewBox="0 0 180 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            >
              <motion.path
                d="M5 4c20 1 35-1 55 2 15-2 25 1 40-1 20 2 30-1 45 1 10-1 15 0 20 0"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>

          {/* Navigation with doodle style */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                style={{ transform: `rotate(1deg)` }}
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                style={{ transform: `rotate(-0.5deg)` }}
              >
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                style={{ transform: `rotate(0.5deg)` }}
              >
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href="/business"
                className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                style={{ transform: `rotate(-0.8deg)` }}
              >
                Business
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary font-[family-name:var(--font-doodle)] text-lg transition-colors duration-200"
                style={{ transform: `rotate(-1deg)` }}
              >
                Blog
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/bookchaowalit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="GitHub"
            >
              🐙
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="LinkedIn"
            >
              💼
            </motion.a>
            <motion.a
              href="https://twitter.com/bookchaowalit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Twitter"
            >
              🐦
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~01bb8b7612ad1fd8bc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Upwork"
            >
              🔧
            </motion.a>
            <motion.a
              href="https://fastwork.co/user/bookchao"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Fastwork"
            >
              ⚡
            </motion.a>
            <motion.a
              href="mailto:bookchaowalit@gmail.com"
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Email"
            >
              📧
            </motion.a>
          </motion.div>

          {/* Hand-drawn doodle symbols */}
          <motion.div
            className="flex justify-center items-center gap-8 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Star doodle */}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-primary/60"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M12 2l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 15l-3.5 2.5L10 13l-3.5-2.5h4.5L12 2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>

            {/* Heart doodle */}
            <motion.svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              className="text-foreground/60"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M12 18s-8-4-8-10c0-3 2-5 5-5 2 0 3 1 3 1s1-1 3-1c3 0 5 2 5 5 0 6-8 10-8 10z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Squiggle doodle */}
            <motion.svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              className="text-secondary/60"
            >
              <motion.path
                d="M2 8c4-3 8 3 12-2 4-3 8 2 12-1 4-2 8 3 10 0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>

          {/* Simple copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)]">
              © {currentYear} Book (เชาวลิต กรีโภค)
            </p>
            <p className="text-xs text-foreground mt-1">
              Made with ❤️ in Bangkok, Thailand 🇹🇭
            </p>
            <p className="text-xs text-foreground mt-1">
              Solopreneur • Full-Stack Developer • AI Specialist
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
