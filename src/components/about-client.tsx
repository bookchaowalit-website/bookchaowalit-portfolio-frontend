"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";

export function AboutClient() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <motion.div
          initial={reducedMotion ? false : { scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/profile.webp" alt="Profile" />
            <AvatarFallback className="text-3xl">CG</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "About", style: "cursive", size: "xl" },
              { text: "Me", style: "bubble", size: "xl" },
              { text: "👨‍💻", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.6, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center">
            <p className="text-sm text-foreground">
              <strong>Tech Generalist</strong> with 5+ years of experience in{" "}
              <strong>full-stack development, AI integration</strong>{" "}
              and <strong>SEO optimization</strong> from Bangkok 🇹🇭
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Bio Section */}
        <div className="py-8">
          <NotebookSectionHeader
            title="My Story"
            subtitle="How I became a tech generalist"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Who I Am" type="note">
              <p className="text-foreground leading-relaxed">
                Hello, I'm <strong>Book</strong> — a Tech Generalist and Solopreneur who enjoys solving problems and building things end-to-end.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                I work across the spectrum of <strong>software engineering, data, AI, and digital growth</strong>, connecting different tools and technologies to create solutions that are practical and scalable. My background ranges from developing web platforms to designing data workflows, analyzing information, and applying AI to support smarter decision-making.
              </p>
            </StudyGuideBox>

            <StudyGuideBox title="What I Do" type="tip">
              <p className="text-foreground leading-relaxed">
                Beyond development, I focus on <strong>analysis and growth strategies</strong> — turning data into insights and insights into action. Whether it's improving websites, optimizing digital marketing, or creating automated systems, I help businesses and individuals reach their goals more effectively.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                As a solopreneur, I wear many hats — <strong>developer, engineer, analyst, and strategist</strong> — which allows me to stay flexible and adapt quickly to any challenge.
              </p>
            </StudyGuideBox>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-8">
          <NotebookSectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools I work with regularly"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Frontend Technologies" type="tip">
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript",
                  "Tailwind CSS", "HTML5", "CSS3", "Shopify Liquid"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>

            <StudyGuideBox title="Backend & AI" type="note">
              <div className="flex flex-wrap gap-2">
                {[
                  "FastAPI", "Python", "PostgreSQL", "LlamaIndex",
                  "LangChain", "RAG", "Multi-agent Systems", "REST APIs", "AI Integration"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>

            <StudyGuideBox title="Tools & Analytics" type="important">
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Analytics", "Facebook API", "SEO", "Git",
                  "Data Analysis", "Social Media Analytics", "A/B Testing", "ETL"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.6 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-[family-name:var(--font-doodle)] border border-border"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.3}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-8">
          <NotebookSectionHeader title="Professional Experience" subtitle="My career journey" className="mb-6" />
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">Full-stack Developer</h4>
              <p className="text-sm text-muted-foreground">Turfmapp • Jan 2024 - May 2025</p>
              <p className="text-sm mt-2">
                Integrated AI solutions using RAG with LlamaIndex and LangChain, implementing
                multi-agent systems with ReAct method. Developed front-end with Next.js and
                back-end with FastAPI. Created analytics tools using Facebook Graph API.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">SEO Specialist & Data Analyst</h4>
              <p className="text-sm text-muted-foreground">Turfmapp • May 2022 - Jan 2024</p>
              <p className="text-sm mt-2">
                Conducted SEO research to optimize website performance, drove improved search
                rankings and organic traffic. Analyzed social media data for strategic marketing
                decisions using A/B testing and experimental approaches.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">Data Center Technician</h4>
              <p className="text-sm text-muted-foreground">JasTel Network Co. Ltd. • May 2021 - Apr 2022</p>
              <p className="text-sm mt-2">
                Connected servers to cables and fiber optic lines, monitored and maintained
                data center operations to ensure optimal performance and uptime.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">Technical Staff (Apprenticeship)</h4>
              <p className="text-sm text-muted-foreground">True Corporation • Oct 2020 - Feb 2021</p>
              <p className="text-sm mt-2">
                Serviced customers to troubleshoot internet problems, including router changes,
                fiber optic repairs, and cable splicing using fusion splicers.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="py-8">
          <NotebookSectionHeader title="Education & Certifications" subtitle="My academic background" className="mb-6" />
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">High Vocational Certificate in Electronics</h4>
              <p className="text-sm text-muted-foreground">Chitralada Technology Institute</p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold font-[family-name:var(--font-doodle)]">Certifications</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Secure BigLake Data Skill Badge - Google (Mar 2025)</li>
                <li>• Google Analytics Certified</li>
                <li>• Facebook Graph API Integration</li>
                <li>• ETL and Data Pipeline Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <StickyNote rotation={-1}>
          <h3 className="font-bold font-[family-name:var(--font-doodle)] mb-2">Fun Facts 📝</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>🤖 Passionate about AI research and implementing cutting-edge AI models</li>
            <li>📊 Love analyzing data patterns and extracting meaningful insights</li>
            <li>🌐 Always exploring new web technologies and development frameworks</li>
            <li>🛠️ Enjoy building automated systems and data pipelines</li>
            <li>🇹🇭 Based in Bangkok, Thailand - embracing the vibrant tech scene</li>
            <li>💡 Born August 22, 2000 - Gen Z perspective on technology and innovation</li>
          </ul>
        </StickyNote>
      </div>
    </div>
  );
}
