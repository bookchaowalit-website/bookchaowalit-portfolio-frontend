"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Camera, Scissors, Mic, Palette, Zap, Play, Edit, Film } from "lucide-react";

export function VideoSkillsClient() {
  const reducedMotion = useReducedMotion();

  const videoCategories = [
    {
      title: 'Video Editing',
      icon: <Scissors className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Adobe Premiere Pro', level: 90, experience: '3+ years', projects: 45 },
        { name: 'DaVinci Resolve', level: 85, experience: '2+ years', projects: 30 },
        { name: 'Final Cut Pro', level: 80, experience: '2+ years', projects: 25 },
        { name: 'Color Grading', level: 88, experience: '2+ years', projects: 35 }
      ]
    },
    {
      title: 'Motion Graphics',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'After Effects', level: 85, experience: '3+ years', projects: 40 },
        { name: 'Cinema 4D', level: 75, experience: '1+ year', projects: 15 },
        { name: 'Motion Design', level: 82, experience: '2+ years', projects: 28 },
        { name: 'Visual Effects', level: 78, experience: '1+ year', projects: 20 }
      ]
    },
    {
      title: 'Video Production',
      icon: <Camera className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Camera Operation', level: 80, experience: '2+ years', projects: 25 },
        { name: 'Lighting Setup', level: 75, experience: '2+ years', projects: 20 },
        { name: 'Audio Recording', level: 85, experience: '3+ years', projects: 35 },
        { name: 'Storyboarding', level: 82, experience: '2+ years', projects: 22 }
      ]
    },
    {
      title: 'Content Creation',
      icon: <Play className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'YouTube Production', level: 88, experience: '3+ years', projects: 50 },
        { name: 'Social Media Content', level: 90, experience: '3+ years', projects: 60 },
        { name: 'Educational Videos', level: 85, experience: '2+ years', projects: 30 },
        { name: 'Brand Videos', level: 82, experience: '2+ years', projects: 25 }
      ]
    }
  ];

  const videoTechniques = [
    {
      title: 'Advanced Editing',
      description: 'Multi-camera editing, complex timelines, and seamless transitions',
      icon: <Edit className="w-5 h-5" />
    },
    {
      title: 'Color Correction',
      description: 'Professional color grading and LUT application for cinematic looks',
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: 'Audio Design',
      description: 'Sound design, mixing, and mastering for immersive experiences',
      icon: <Mic className="w-5 h-5" />
    },
    {
      title: 'Motion Graphics',
      description: 'Creating engaging animations and visual effects for storytelling',
      icon: <Film className="w-5 h-5" />
    }
  ];

  const portfolioItems = [
    {
      title: 'Tech Tutorial Series',
      type: 'Educational Content',
      tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      description: 'Complete video tutorial series on web development and AI technologies'
    },
    {
      title: 'Brand Commercial',
      type: 'Commercial Production',
      tools: ['Cinema 4D', 'After Effects', 'Adobe Premiere Pro'],
      description: 'High-end commercial video with motion graphics and visual effects'
    },
    {
      title: 'Social Media Campaign',
      type: 'Content Marketing',
      tools: ['Final Cut Pro', 'CapCut', 'Adobe After Effects'],
      description: 'Viral social media video campaign with engaging animations and effects'
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
              { text: "Video", style: "cursive", size: "xl" },
              { text: "&", style: "bubble", size: "lg" },
              { text: "Production", style: "filled", size: "xl" },
              { text: "Skills", style: "block", size: "xl" },
              { text: "🎬", style: "block", size: "lg" }
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
            From concept to final cut, explore my video production expertise including
            editing, motion graphics, and content creation across multiple platforms.
          </p>
        </motion.div>
      </motion.div>

      {/* Video Categories */}
      <div className="space-y-8 mb-12">
        {videoCategories.map((category, categoryIndex) => {
          const paperColors = ["default", "yellow", "green", "blue"] as const;
          return (
          <motion.div
            key={category.title}
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <NotebookPaper className="py-6" color={paperColors[categoryIndex % 4]}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} bg-muted p-3`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">Professional video production and editing skills</p>
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
            </NotebookPaper>
          </motion.div>
        );
        })}
      </div>

      {/* Video Techniques */}
      <NotebookPaper className="py-8 mb-8">
        <NotebookSectionHeader
          title="Video Production Techniques"
          subtitle="Advanced skills and techniques I use in video production"
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTechniques.map((technique, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["yellow", "pink", "green", "blue"];
            const rotations = [-2, 1, -1, 2];
            return (
            <motion.div
              key={technique.title}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <StickyNote color={colors[index]} rotation={rotations[index]} className="text-center h-full p-5">
                <div className="space-y-3">
                  <div className="mx-auto w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                    {technique.icon}
                  </div>
                  <h3 className="text-lg font-bold">{technique.title}</h3>
                  <p className="text-sm text-muted-foreground">{technique.description}</p>
                </div>
              </StickyNote>
            </motion.div>
            );
          })}
        </div>
      </NotebookPaper>

      {/* Portfolio Highlights */}
      <NotebookPaper className="py-8 mb-8">
        <NotebookSectionHeader
          title="Video Portfolio Highlights"
          subtitle="Featured video projects showcasing my production expertise"
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["pink", "blue", "green", "yellow"];
            const rotations = [1, -1, 2, -2];
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
      </NotebookPaper>

      {/* Production Process */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            🎬 My Production Process
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Every video project follows a structured workflow from pre-production planning
            to post-production polish. I focus on storytelling, technical excellence, and
            audience engagement throughout the entire process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StickyNote rotation={-2} color="yellow">
              <div className="font-semibold text-sm">Pre-Production</div>
              <div className="text-xs text-muted-foreground mt-1">Planning & storyboarding</div>
            </StickyNote>
            <StickyNote rotation={1} color="pink">
              <div className="font-semibold text-sm">Production</div>
              <div className="text-xs text-muted-foreground mt-1">Shooting & recording</div>
            </StickyNote>
            <StickyNote rotation={-1} color="blue">
              <div className="font-semibold text-sm">Post-Production</div>
              <div className="text-xs text-muted-foreground mt-1">Editing & finishing</div>
            </StickyNote>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View Video Projects</Link>
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
