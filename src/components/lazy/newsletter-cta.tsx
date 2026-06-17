"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SketchyFrame } from "@/components/ui/notebook-elements";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { useState } from "react";
import { Check, Mail } from "lucide-react";

export function NewsletterCTA() {
  const reducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
      viewport={{ once: true }}
      aria-label="Newsletter signup"
    >
      <SketchyFrame variant="double">
        <div className="p-8 text-center">
          <MixedTypographyTitle
            words={[
              { text: "Stay", style: "cursive", size: "lg" },
              { text: "Updated!", style: "bubble", size: "lg" },
            ]}
            className="mb-4"
          />

          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 max-w-md mx-auto">
            Get the latest articles on web development, AI integration, and solopreneur insights delivered to your inbox.
          </p>

          {subscribed ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-primary"
            >
              <Check className="w-5 h-5" />
              <span className="font-[family-name:var(--font-doodle)]">
                Thanks! You&apos;re on the list.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
                className="flex-1 font-[family-name:var(--font-doodle)]"
              />
              <Button
                type="submit"
                className="font-[family-name:var(--font-comic)] gap-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4 font-[family-name:var(--font-doodle)]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </SketchyFrame>
    </motion.section>
  );
}
