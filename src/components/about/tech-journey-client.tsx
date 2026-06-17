"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Code, Zap, Rocket, Database, Brain } from "lucide-react";

export function TechJourneyClient() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
        initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "Tech", style: "block", size: "xl" },
              { text: "Journey", style: "cursive", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9, rotate: 1 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: -1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center">
            <p className="text-sm text-foreground">
              From <HandDrawnHighlight>hardware tinkering</HandDrawnHighlight> to{" "}
              <HandDrawnHighlight>AI systems</HandDrawnHighlight> — the evolution of a{" "}
              <HandDrawnHighlight>Tech Generalist</HandDrawnHighlight>
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Timeline */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader
            title="The Journey So Far"
            subtitle="Key milestones in my technical evolution"
            className="mb-6"
          />
          <div className="space-y-8">
            <div className="space-y-6">
                <StudyGuideBox title="2018-2021: Electronics Foundation" type="note">
                  <p className="text-foreground leading-relaxed text-sm">
                    Started with electronics at Chitralada Technology Institute.
                    Learned circuit analysis, microcontroller programming, and digital systems.
                    This hardware foundation taught me how computers really work at the lowest level.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Arduino</Badge>
                    <Badge variant="outline" className="text-xs">Circuit Design</Badge>
                    <Badge variant="outline" className="text-xs">Embedded C</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title="2021-2022: Infrastructure & Networking" type="tip">
                  <p className="text-foreground leading-relaxed text-sm">
                    Worked in data centers and ISP operations. Learned about scalable infrastructure,
                    network protocols, and how the internet actually works. This experience shapes how I think about
                    performance and reliability in software systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Fiber Optics</Badge>
                    <Badge variant="outline" className="text-xs">Network Administration</Badge>
                    <Badge variant="outline" className="text-xs">Server Management</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title="2022-2024: Web Development & SEO" type="important">
                  <p className="text-foreground leading-relaxed text-sm">
                    Transitioned into web development and digital marketing. Self-taught React, Next.js, and SEO.
                    Started with Shopify sites and grew into full-stack applications. This is where I discovered
                    my love for solving business problems with technology.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Next.js</Badge>
                    <Badge variant="outline" className="text-xs">SEO</Badge>
                    <Badge variant="outline" className="text-xs">Google Analytics</Badge>
                  </div>
                </StudyGuideBox>

                <StudyGuideBox title="2024-Present: AI & Full-Stack Mastery" type="tip">
                  <p className="text-foreground leading-relaxed text-sm">
                    Deep dive into AI/ML with RAG systems, LangChain, and multi-agent architectures.
                    Combining full-stack development with AI to create intelligent applications.
                    This is where my generalist approach really pays off.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">LangChain</Badge>
                    <Badge variant="outline" className="text-xs">LlamaIndex</Badge>
                    <Badge variant="outline" className="text-xs">FastAPI</Badge>
                    <Badge variant="outline" className="text-xs">Multi-Agent Systems</Badge>
                  </div>
                </StudyGuideBox>
              </div>
            </div>
        </NotebookPaper>

        {/* Key Turning Points */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Pivotal Moments
            </CardTitle>
            <CardDescription>Key decisions and discoveries that shaped my path</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">The First Bug Fix</h4>
                <p className="text-sm text-muted-foreground mb-2">When debugging became addictive</p>
                <p className="text-sm">
                  Spent 6 hours debugging a simple circuit that wouldn't work. When I finally found the loose connection,
                  the satisfaction was incredible. That's when I knew I loved problem-solving and would chase that feeling forever.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Discovering the Web</h4>
                <p className="text-sm text-muted-foreground mb-2">Realizing software could reach millions</p>
                <p className="text-sm">
                  Built my first website to showcase electronics projects. Seeing people from around the world visit and
                  interact with something I created was mind-blowing. The reach and impact potential of web development
                  convinced me to make the transition.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">The AI Awakening</h4>
                <p className="text-sm text-muted-foreground mb-2">When GPT-3 changed everything</p>
                <p className="text-sm">
                  First experimented with GPT-3 API in early 2021. Realized this wasn't just another tool—it was a
                  fundamental shift in how software could work. Started learning ML/AI seriously to stay ahead of the curve.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Going Solo</h4>
                <p className="text-sm text-muted-foreground mb-2">The leap into entrepreneurship</p>
                <p className="text-sm">
                  Decided to become a solopreneur after realizing I could combine my technical skills with business needs.
                  The freedom to choose projects, learn continuously, and directly impact clients' success is incredibly fulfilling.
                </p>
              </div>
              </div>
          </CardContent>
        </Card>

        {/* Technical Philosophy */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader
            title="Technical Philosophy"
            subtitle="How my journey shaped my approach to technology"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Hardware Thinking for Software Problems" type="tip">
              <p className="text-foreground leading-relaxed">
                My electronics background makes me think about <HandDrawnHighlight>performance, power consumption, and constraints</HandDrawnHighlight>
                even in software. I naturally consider resource usage, optimization, and failure modes—habits that lead to
                more robust applications.
              </p>
            </StudyGuideBox>

            <StudyGuideBox title="Infrastructure-Aware Development" type="note">
              <p className="text-foreground leading-relaxed">
                Having worked in data centers, I understand <HandDrawnHighlight>how code translates to actual hardware</HandDrawnHighlight>.
                This makes me conscious of deployment environments, scaling bottlenecks, and operational concerns from
                the early stages of development.
              </p>
            </StudyGuideBox>

            <StudyGuideBox title="Business-Driven Technology Choices" type="important">
              <p className="text-foreground leading-relaxed">
                My journey through different industries taught me that <HandDrawnHighlight>technology should serve business goals</HandDrawnHighlight>,
                not exist for its own sake. I choose tools and architectures based on actual needs, not just what's trendy
                or technically interesting.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Current Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Current Tech Arsenal
            </CardTitle>
            <CardDescription>Tools and technologies I'm actively using in 2024-2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? undefined : { opacity: 0, scale: 0 }}
                      animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Backend & AI</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "LangChain", "LlamaIndex", "PostgreSQL", "Redis"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? undefined : { opacity: 0, scale: 0 }}
                      animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tools & Analytics</h4>
                <div className="flex flex-wrap gap-2">
                  {["Google Analytics", "Facebook API", "Docker", "Git", "Vercel", "AWS"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={reducedMotion ? undefined : { opacity: 0, scale: 0 }}
                      animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.6 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader
            title="The Road Ahead"
            subtitle="Where technology is taking me next"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="AI-First Development" type="tip">
              <p className="text-foreground leading-relaxed">
                I see a future where <HandDrawnHighlight>AI augments every step of the development process</HandDrawnHighlight>.
                Not just code generation, but intelligent testing, automated optimization, and self-healing systems.
                I'm positioning myself to be at the forefront of this transformation.
              </p>
            </StudyGuideBox>

            <StudyGuideBox title="Edge Computing & IoT Renaissance" type="note">
              <p className="text-foreground leading-relaxed">
                My electronics background makes me excited about <HandDrawnHighlight>edge computing and IoT</HandDrawnHighlight>.
                As AI models get smaller and hardware gets more powerful, there will be incredible opportunities
                to build intelligent systems that work offline and respond instantly.
              </p>
            </StudyGuideBox>

            <StudyGuideBox title="Teaching & Community Building" type="important">
              <p className="text-foreground leading-relaxed">
                I want to help others make similar transitions. <HandDrawnHighlight>Creating educational content and mentoring</HandDrawnHighlight>
                the next generation of developers who can bridge hardware and software, technical and business,
                local and global perspectives.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>
      </div>
    </div>
  );
}
