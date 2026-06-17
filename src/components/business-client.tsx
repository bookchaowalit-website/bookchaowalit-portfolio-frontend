"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";

// Business data - you can move this to a separate data file later
const businesses = [
  {
    title: "Ionomad",
    description: "A deeptech and marketing agency specializing in AI-driven solutions, content marketing, and digital transformation. We help businesses navigate the intersection of technology and marketing to achieve sustainable growth.",
    category: "Deeptech & Marketing Agency",
    services: ["AI-Powered Marketing", "Content Strategy", "Digital Transformation", "SEO & SEM", "Data Analytics", "Tech Consulting", "Brand Development"],
    socialMedia: {
      website: "https://www.ionomad.net",
      linkedin: "https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/",
      github: "https://github.com/bookchaowalit",
      twitter: "",
      email: "bookchaowalit@gmail.com"
    },
    status: "Active"
  }
];

export function BusinessClient() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 mb-16"
        initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "My", style: "cursive", size: "xl" },
              { text: "Business", style: "bubble", size: "xl" },
              { text: "Journey", style: "filled", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <SketchyFrame variant="dashed">
            <NotebookPaper className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    💼 Solopreneur
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    🇹🇭 Bangkok Based
                  </Badge>
                </div>

                <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
                  Building Ionomad: Deeptech & Marketing Agency
                </h2>

                <p className="text-lg text-muted-foreground font-[family-name:var(--font-doodle)] leading-relaxed">
                  As a <strong>solopreneur</strong>, I'm passionate about creating innovative solutions that solve real problems.
                  Through <strong>Ionomad</strong>, I combine <strong>cutting-edge deeptech</strong> with
                  <strong>strategic marketing</strong> to help businesses navigate the digital landscape. My agency focuses on
                  AI-driven solutions and data-powered marketing strategies that deliver measurable results.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    🤖 AI-Powered Marketing
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    📊 Data Analytics
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    🚀 Deeptech Solutions
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    📈 Digital Growth
                  </Badge>
                </div>
              </div>
            </NotebookPaper>
          </SketchyFrame>
        </motion.div>
      </motion.div>

      {/* Business Cards */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <NotebookSectionHeader
          title="Ionomad: Deeptech & Marketing Agency"
          subtitle="Specializing in AI-driven marketing solutions and digital transformation"
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={reducedMotion ? undefined : { opacity: 0, scale: 0.8, rotate: -2 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
              transition={reducedMotion ? { duration: 0 } : {
                duration: 0.6,
                delay: 1 + index * 0.2,
                ease: "backOut"
              }}
            >
              <SketchyFrame variant="double" className="h-full">
                <NotebookPaper className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={business.status === 'Active' ? 'default' : 'secondary'}
                        >
                          {business.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {business.category}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-script)] font-bold text-foreground mb-2">
                          {business.title}
                        </h3>
                        <p className="text-muted-foreground font-[family-name:var(--font-doodle)] leading-relaxed text-sm">
                          {business.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-[family-name:var(--font-comic)] font-bold text-foreground uppercase text-xs tracking-wide">
                          Services
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {business.services.map((service) => (
                            <Badge key={service} variant="outline" className="text-xs font-[family-name:var(--font-doodle)]">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-[family-name:var(--font-comic)] font-bold text-foreground uppercase text-xs tracking-wide">
                          Connect
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {business.socialMedia.website && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.website} target="_blank" rel="noopener noreferrer">
                                🌐 Website
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.linkedin && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                💼 LinkedIn
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.github && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.github} target="_blank" rel="noopener noreferrer">
                                🐙 GitHub
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.twitter && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                🐦 Twitter
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.email && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`mailto:${business.socialMedia.email}`}>
                                📧 Email
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </NotebookPaper>
              </SketchyFrame>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Future Ventures */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 1.5 }}
        className="mt-16"
      >
        <NotebookPaper className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
              🚀 Future Ventures & Services
            </h2>
            <p className="text-muted-foreground font-[family-name:var(--font-doodle)]">
              Exciting projects and services I'm developing to expand my impact in technology and finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SketchyFrame variant="dashed">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h3 className="font-semibold text-lg">AI-Powered Trading Systems</h3>
                    <Badge variant="outline" className="text-xs mt-1">Coming Soon</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Developing algorithmic trading systems using machine learning and AI for automated,
                  data-driven investment strategies across multiple asset classes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                  <Badge variant="secondary" className="text-xs">Algorithmic Trading</Badge>
                  <Badge variant="secondary" className="text-xs">Risk Management</Badge>
                </div>
              </div>
            </SketchyFrame>

            <SketchyFrame variant="dashed">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h3 className="font-semibold text-lg">Financial Technology Consulting</h3>
                    <Badge variant="outline" className="text-xs mt-1">Service Offering</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Helping fintech startups and traditional financial institutions integrate AI,
                  blockchain, and modern data technologies into their operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">FinTech</Badge>
                  <Badge variant="secondary" className="text-xs">Blockchain</Badge>
                  <Badge variant="secondary" className="text-xs">AI Integration</Badge>
                  <Badge variant="secondary" className="text-xs">Digital Transformation</Badge>
                </div>
              </div>
            </SketchyFrame>

            <SketchyFrame variant="dashed">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h3 className="font-semibold text-lg">Investment Analytics Platform</h3>
                    <Badge variant="outline" className="text-xs mt-1">In Development</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Building comprehensive analytics tools for portfolio management,
                  risk assessment, and investment decision-making with real-time data visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Data Visualization</Badge>
                  <Badge variant="secondary" className="text-xs">Portfolio Analysis</Badge>
                  <Badge variant="secondary" className="text-xs">Real-time Data</Badge>
                  <Badge variant="secondary" className="text-xs">Risk Analytics</Badge>
                </div>
              </div>
            </SketchyFrame>

            <SketchyFrame variant="dashed">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-lg">Trading Education & Mentorship</h3>
                    <Badge variant="outline" className="text-xs mt-1">Service Offering</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sharing knowledge and experience in trading strategies, risk management,
                  and technical analysis through personalized mentorship and educational content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Technical Analysis</Badge>
                  <Badge variant="secondary" className="text-xs">Risk Management</Badge>
                  <Badge variant="secondary" className="text-xs">Mentorship</Badge>
                  <Badge variant="secondary" className="text-xs">Education</Badge>
                </div>
              </div>
            </SketchyFrame>
          </div>
        </NotebookPaper>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9 }}
        animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 2 }}
        className="text-center space-y-6"
      >
        <NotebookPaper className="p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Whether you need AI-powered marketing strategies, deeptech solutions, or digital transformation consulting,
            Ionomad is here to help your business grow. Let's discuss how we can leverage technology and data to achieve your goals!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </div>
        </NotebookPaper>
      </motion.div>
    </div>
  );
}
