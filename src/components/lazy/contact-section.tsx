"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center">
        <MixedTypographyTitle
          words={[
            { text: "Let's", style: "cursive", size: "lg" },
            { text: "Connect!", style: "bubble", size: "lg" },
            { text: "🤝", style: "block", size: "md" }
          ]}
          className="mb-6"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SketchyFrame variant="double">
          <NotebookPaper className="p-8">
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    📧 Quick Response
                  </Badge>
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    🌏 Available Globally
                  </Badge>
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    💬 Multiple Channels
                  </Badge>
                </div>

                <h3 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
                  Ready to Work Together?
                </h3>

                <p className="text-muted-foreground font-[family-name:var(--font-doodle)] leading-relaxed max-w-2xl mx-auto">
                  Whether you need <strong>AI integration</strong>, <strong>full-stack development</strong>,
                  or <strong>strategic consulting</strong> - I'm here to help your business grow.
                  Based in <strong>Bangkok</strong> but working with clients worldwide! 🇹🇭
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <div className="text-2xl mb-2">💻</div>
                    <p className="font-[family-name:var(--font-comic)] font-bold text-muted-foreground text-sm">
                      Development Projects
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <div className="text-2xl mb-2">🤖</div>
                    <p className="font-[family-name:var(--font-comic)] font-bold text-muted-foreground text-sm">
                      AI Consultation
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <div className="text-2xl mb-2">📈</div>
                    <p className="font-[family-name:var(--font-comic)] font-bold text-muted-foreground text-sm">
                      Business Growth
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-4 justify-center flex-wrap pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:bookchaowalit@gmail.com">
                      📧 Email Me
                    </a>
                  </Button>
                </motion.div>
              </div>

              <div className="flex justify-center gap-4 text-2xl">
                <motion.a
                  href="https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="hover:text-primary transition-colors"
                >
                  💼
                </motion.a>
                <motion.a
                  href="https://github.com/bookchaowalit"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="hover:text-primary transition-colors"
                >
                  🐙
                </motion.a>
                <motion.a
                  href="https://www.upwork.com/freelancers/~01bb8b7612ad1fd8bc"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="hover:text-primary transition-colors"
                >
                  🔧
                </motion.a>
                <motion.a
                  href="https://fastwork.co/user/bookchao"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="hover:text-primary transition-colors"
                >
                  ⚡
                </motion.a>
              </div>
            </div>
          </NotebookPaper>
        </SketchyFrame>
      </motion.div>
    </motion.section>
  );
}
