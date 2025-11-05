"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function NavigationBrand() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Link href="/" className="text-xl font-bold">
        Chaowalit Greepoke
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/" className="text-xl font-bold text-foreground hover:text-foreground/80 transition-all duration-300">
        Chaowalit Greepoke
      </Link>
    </motion.div>
  );
}
