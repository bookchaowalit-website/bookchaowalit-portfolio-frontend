"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  Palette,
  Monitor,
  PenTool,
  Layers,
  Eye,
  Heart,
  Zap
} from "lucide-react";

export function ArtSkillsClient() {
  const reducedMotion = useReducedMotion();

  const designCategories = [
    {
      title: 'UI/UX Design',
      icon: <Monitor className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Figma', level: 95, experience: '2+ years', projects: 25 },
        { name: 'User Research', level: 85, experience: '2+ years', projects: 15 },
        { name: 'Wireframing', level: 90, experience: '2+ years', projects: 20 },
        { name: 'Prototyping', level: 88, experience: '2+ years', projects: 18 }
      ]
    },
    {
      title: 'Visual Design',
      icon: <Palette className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Brand Identity', level: 85, experience: '2+ years', projects: 12 },
        { name: 'Graphic Design', level: 90, experience: '3+ years', projects: 30 },
        { name: 'Color Theory', level: 88, experience: '3+ years', projects: 25 },
        { name: 'Typography', level: 85, experience: '2+ years', projects: 20 }
      ]
    },
    {
      title: 'Digital Art',
      icon: <PenTool className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Digital Illustration', level: 80, experience: '2+ years', projects: 15 },
        { name: 'Concept Art', level: 75, experience: '1+ year', projects: 8 },
        { name: 'Character Design', level: 78, experience: '1+ year', projects: 10 },
        { name: 'Visual Storytelling', level: 82, experience: '2+ years', projects: 12 }
      ]
    },
    {
      title: 'Design Tools',
      icon: <Layers className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Adobe Creative Suite', level: 85, experience: '3+ years', projects: 35 },
        { name: 'Sketch', level: 80, experience: '1+ year', projects: 10 },
        { name: 'InVision', level: 75, experience: '1+ year', projects: 8 },
        { name: 'Principle', level: 70, experience: '6 months', projects: 5 }
      ]
    }
  ];

  const designPrinciples = [
    {
      title: 'User-Centered Design',
      description: 'Always putting users first in the design process',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Visual Hierarchy',
      description: 'Creating clear information architecture through design',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Consistency',
      description: 'Maintaining design patterns across all touchpoints',
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: 'Accessibility',
      description: 'Designing for all users, regardless of ability',
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const portfolioItems = [
    {
      title: 'Portfolio Website Design',
      type: 'UI/UX Design',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      description: 'Complete redesign of personal portfolio with modern aesthetics and improved user experience'
    },
    {
      title: 'Brand Identity for Tech Startup',
      type: 'Brand Design',
      tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      description: 'Full brand identity including logo, color palette, typography, and brand guidelines'
    },
    {
      title: 'Mobile App UI Design',
      type: 'Mobile Design',
      tools: ['Figma', 'Principle', 'Sketch'],
      description: 'User interface design for a fitness tracking mobile application with interactive prototypes'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "Creative", style: "cursive", size: "xl" },
              { text: "&", style: "bubble", size: "lg" },
              { text: "Design", style: "filled", size: "xl" },
              { text: "Skills", style: "block", size: "xl" },
              { text: "🎨", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            From UI/UX design to visual storytelling, explore my creative process and
            the design principles that guide my work across digital and traditional media.
          </p>
        </motion.div>
      </motion.div>

      {/* Design Categories */}
      <div className="space-y-8 mb-12">
        {designCategories.map((category, categoryIndex) => {
          const paperColors = ["default", "yellow", "green", "blue"] as const;
          return (
          <motion.div
            key={category.title}
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <div className="py-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} bg-muted p-3`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">Creative tools and design proficiency</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{skill.name}</CardTitle>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="w-full bg-muted h-2">
                            <motion.div
                              className="bg-foreground h-2"
                              initial={reducedMotion ? false : { width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{skill.experience}</span>
                            <span>{skill.projects} projects</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
        })}
      </div>

      {/* Design Principles */}
      <div className="py-8 mb-8">
        <NotebookSectionHeader
          title="Design Principles I Live By"
          subtitle="Core values that guide my creative process"
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["yellow", "pink", "green", "blue"];
            const rotations = [-2, 1, -1, 2];
            return (
            <motion.div
              key={principle.title}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <StickyNote color={colors[index]} rotation={rotations[index]} className="text-center h-full p-5">
                <div className="space-y-3">
                  <div className="mx-auto w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </StickyNote>
            </motion.div>
            );
          })}
        </div>
      </div>

      {/* Portfolio Highlights */}
      <div className="py-8 mb-8">
        <NotebookSectionHeader
          title="Design Portfolio Highlights"
          subtitle="Selected projects showcasing my design expertise"
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["blue", "yellow", "pink", "green"];
            const rotations = [1, -2, 2, -1];
            return (
            <motion.div
              key={item.title}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <StickyNote color={colors[index]} rotation={rotations[index]} className="h-full p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <Badge variant="secondary">{item.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </StickyNote>
            </motion.div>
            );
          })}
        </div>
      </div>

      {/* Creative Process */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            🎨 My Creative Process
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Every design project starts with understanding the problem, researching the users,
            and iterating through multiple concepts. I believe great design is invisible -
            it solves problems without drawing attention to itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StickyNote rotation={-2} color="yellow">
              <div className="font-semibold text-sm">Research First</div>
              <div className="text-xs text-muted-foreground mt-1">Understand users & problems</div>
            </StickyNote>
            <StickyNote rotation={1} color="green">
              <div className="font-semibold text-sm">Iterate Often</div>
              <div className="text-xs text-muted-foreground mt-1">Test & refine designs</div>
            </StickyNote>
            <StickyNote rotation={-1} color="blue">
              <div className="font-semibold text-sm">User Focus</div>
              <div className="text-xs text-muted-foreground mt-1">Design for real people</div>
            </StickyNote>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View Design Projects</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button variant="outline" asChild>
                <Link href="/skills">← Back to Skills</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
