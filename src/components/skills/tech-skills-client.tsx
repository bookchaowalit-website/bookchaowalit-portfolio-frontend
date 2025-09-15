"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Cpu,
  Layers,
  Zap,
  Server,
  GitBranch,
  Terminal,
  Settings
} from "lucide-react";

export function TechSkillsClient() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-blue-600',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '3+ years', projects: 15 },
        { name: 'TypeScript', level: 90, experience: '2+ years', projects: 12 },
        { name: 'Tailwind CSS', level: 95, experience: '2+ years', projects: 20 },
        { name: 'JavaScript (ES6+)', level: 95, experience: '3+ years', projects: 25 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'text-green-600',
      skills: [
        { name: 'Python/FastAPI', level: 90, experience: '2+ years', projects: 8 },
        { name: 'Node.js/Express', level: 85, experience: '2+ years', projects: 6 },
        { name: 'PostgreSQL', level: 85, experience: '2+ years', projects: 10 },
        { name: 'REST APIs', level: 90, experience: '3+ years', projects: 15 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-purple-600',
      skills: [
        { name: 'LlamaIndex/RAG', level: 85, experience: '1+ year', projects: 5 },
        { name: 'LangChain', level: 80, experience: '1+ year', projects: 4 },
        { name: 'Multi-agent Systems', level: 75, experience: '1+ year', projects: 3 },
        { name: 'Data Analysis', level: 85, experience: '2+ years', projects: 8 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings className="w-6 h-6" />,
      color: 'text-orange-600',
      skills: [
        { name: 'Git/GitHub', level: 90, experience: '3+ years', projects: 30 },
        { name: 'Docker', level: 75, experience: '1+ year', projects: 5 },
        { name: 'AWS/Vercel', level: 80, experience: '2+ years', projects: 12 },
        { name: 'Linux/CLI', level: 85, experience: '3+ years', projects: 25 }
      ]
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      tech: ['Next.js', 'FastAPI', 'LlamaIndex', 'PostgreSQL'],
      description: 'Full-stack application with AI-driven analytics and data visualization',
      complexity: 'Advanced'
    },
    {
      title: 'E-commerce Solutions',
      tech: ['Shopify', 'React', 'Node.js', 'MongoDB'],
      description: 'Custom e-commerce platforms with payment integration and admin dashboards',
      complexity: 'Intermediate'
    },
    {
      title: 'Trading Bot Framework',
      tech: ['Python', 'FastAPI', 'Machine Learning', 'Docker'],
      description: 'Automated trading system with risk management and real-time data processing',
      complexity: 'Expert'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "Technical", style: "cursive", color: "text-blue-700", size: "xl" },
              { text: "Skills", style: "bubble", color: "text-purple-600", size: "xl" },
              { text: "&", style: "filled", color: "text-green-700", size: "lg" },
              { text: "Expertise", style: "block", color: "text-orange-600", size: "xl" },
              { text: "⚡", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            From full-stack web development to AI integration, explore my technical expertise
            and the technologies I use to build scalable, efficient solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Categories */}
      <div className="space-y-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <NotebookPaper className="py-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} bg-slate-100 p-3 rounded-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">Core technologies and proficiency levels</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
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
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
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
        ))}
      </div>

      {/* Notable Projects */}
      <NotebookPaper className="py-8 mb-8">
        <NotebookSectionHeader
          title="Notable Technical Projects"
          subtitle="Real-world applications showcasing my technical skills"
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={
                      project.complexity === 'Expert' ? 'destructive' :
                      project.complexity === 'Advanced' ? 'default' : 'secondary'
                    }>
                      {project.complexity}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </NotebookPaper>

      {/* Learning & Certifications */}
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <NotebookPaper className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-slate-800 mb-4">
            🎓 Continuous Learning & Certifications
          </h2>
          <p className="text-slate-600 font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying current. I regularly
            update my skills through online courses, certifications, and hands-on projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StickyNote color="blue" rotation={-2}>
              <div className="font-semibold text-sm">Google Cloud</div>
              <div className="text-xs text-muted-foreground mt-1">Secure BigLake Data</div>
            </StickyNote>
            <StickyNote color="yellow" rotation={1}>
              <div className="font-semibold text-sm">Meta</div>
              <div className="text-xs text-muted-foreground mt-1">Graph API Integration</div>
            </StickyNote>
            <StickyNote color="pink" rotation={-1}>
              <div className="font-semibold text-sm">Ongoing</div>
              <div className="text-xs text-muted-foreground mt-1">AI & ML Courses</div>
            </StickyNote>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
              <Button variant="outline" asChild>
                <Link href="/skills">← Back to Skills</Link>
              </Button>
          </div>
        </NotebookPaper>
      </motion.div>
    </div>
  );
}
