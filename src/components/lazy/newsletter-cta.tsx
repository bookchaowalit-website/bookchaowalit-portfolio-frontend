"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SketchyFrame } from "@/components/ui/notebook-elements";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { useState } from "react";
import { Check, Mail, Loader2, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function NewsletterCTA() {
  const reducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations('newsletter');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t('errorMessage'));
        return;
      }

      setSubscribed(true);
      setEmail("");
    } catch {
      setError(t('errorMessage'));
    } finally {
      setLoading(false);
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
              { text: t('titleWord1'), style: "cursive", size: "lg" },
              { text: t('titleWord2'), style: "bubble", size: "lg" },
            ]}
            className="mb-4"
          />

          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 max-w-md mx-auto">
            {t('description')}
          </p>

          {subscribed ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-primary"
            >
              <Check className="w-5 h-5" />
              <span className="font-[family-name:var(--font-doodle)]">
                {t('subscribedMessage')}
              </span>
            </motion.div>
          ) : (
            <>
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
                  disabled={loading}
                  aria-label="Email address for newsletter"
                  className="flex-1 font-[family-name:var(--font-doodle)]"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="font-[family-name:var(--font-comic)] gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                  {t('subscribe')}
                </Button>
              </form>
              {error && (
                <motion.p
                  initial={reducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-destructive mt-2 font-[family-name:var(--font-doodle)] flex items-center justify-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.p>
              )}
            </>
          )}

          <p className="text-xs text-muted-foreground mt-4 font-[family-name:var(--font-doodle)]">
            {t('noSpam')}
          </p>
        </div>
      </SketchyFrame>
    </motion.section>
  );
}
