"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Globe, Cpu, Server, Settings } from "lucide-react";

export function TechSkillsClient() {
  const reducedMotion = useReducedMotion();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Python', level: 95, experience: '3+ years', projects: 20 },
        { name: 'C#', level: 85, experience: '2+ years', projects: 8 },
        { name: 'Java', level: 80, experience: '2+ years', projects: 6 },
        { name: 'HTML', level: 95, experience: '4+ years', projects: 30 },
        { name: 'CSS', level: 95, experience: '4+ years', projects: 30 },
        { name: 'Javascript', level: 95, experience: '3+ years', projects: 25 },
        { name: 'PHP', level: 85, experience: '2+ years', projects: 10 },
        { name: 'Liquid', level: 80, experience: '1+ year', projects: 5 },
        { name: 'SQL', level: 90, experience: '3+ years', projects: 15 },
        { name: 'Dart', level: 85, experience: '1+ year', projects: 3 },
        { name: 'Go', level: 75, experience: '1+ year', projects: 2 }
      ]
    },
    {
      title: 'Library',
      icon: <Server className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'jQuery', level: 90, experience: '3+ years', projects: 15 },
        { name: 'React', level: 95, experience: '3+ years', projects: 20 },
        { name: 'Pandas', level: 85, experience: '2+ years', projects: 8 },
        { name: 'Numpy', level: 85, experience: '2+ years', projects: 8 },
        { name: 'Plotly', level: 80, experience: '1+ year', projects: 5 },
        { name: 'Axios', level: 90, experience: '2+ years', projects: 12 },
        { name: 'Huggingface', level: 75, experience: '1+ year', projects: 4 },
        { name: 'Gofiber', level: 70, experience: '6 months', projects: 2 }
      ]
    },
    {
      title: 'Framework',
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Express.js', level: 85, experience: '2+ years', projects: 8 },
        { name: 'FastAPI', level: 90, experience: '2+ years', projects: 10 },
        { name: 'Next.js', level: 95, experience: '2+ years', projects: 15 },
        { name: 'Angular', level: 80, experience: '2+ years', projects: 6 },
        { name: 'Vue', level: 80, experience: '2+ years', projects: 7 },
        { name: '.Net', level: 80, experience: '2+ years', projects: 6 },
        { name: 'Spring Boot', level: 75, experience: '1+ year', projects: 4 },
        { name: 'Laravel', level: 80, experience: '2+ years', projects: 7 },
        { name: 'Llamaindex', level: 85, experience: '1+ year', projects: 5 },
        { name: 'Langchain', level: 80, experience: '1+ year', projects: 4 },
        { name: 'Pytorch', level: 75, experience: '1+ year', projects: 3 },
        { name: 'Apache Airflow', level: 70, experience: '6 months', projects: 2 },
        { name: 'Flutter', level: 85, experience: '1+ year', projects: 3 }
      ]
    },
    {
      title: 'Database',
      icon: <Settings className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'SQLite', level: 85, experience: '2+ years', projects: 8 },
        { name: 'Postgresql', level: 90, experience: '3+ years', projects: 12 },
        { name: 'SQL Server', level: 85, experience: '2+ years', projects: 8 },
        { name: 'MongoDB', level: 80, experience: '2+ years', projects: 6 },
        { name: 'Neon', level: 75, experience: '1+ year', projects: 4 },
        { name: 'Supabase', level: 80, experience: '1+ year', projects: 5 }
      ]
    },
    {
      title: 'Cloud',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'DigitalOcean', level: 85, experience: '2+ years', projects: 8 },
        { name: 'GCP', level: 80, experience: '1+ year', projects: 5 },
        { name: 'Docker', level: 85, experience: '2+ years', projects: 10 },
        { name: 'AWS', level: 80, experience: '2+ years', projects: 7 },
        { name: 'K8s', level: 70, experience: '1+ year', projects: 3 },
        { name: 'Lens', level: 65, experience: '6 months', projects: 2 }
      ]
    },
    {
      title: 'Runtime',
      icon: <Server className="w-6 h-6" />,
      color: 'text-foreground',
      skills: [
        { name: 'Nodejs', level: 90, experience: '3+ years', projects: 18 }
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
              { text: "Technical", style: "cursive", size: "xl" },
              { text: "Skills", style: "bubble", size: "xl" },
              { text: "&", style: "filled", size: "lg" },
              { text: "Expertise", style: "block", size: "xl" },
              { text: "⚡", style: "block", size: "lg" }
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
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <NotebookPaper className="py-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} bg-muted p-3`}>
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
          {projects.map((project, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["blue", "green", "yellow", "pink", "blue", "green"];
            const rotations = [-1, 2, -2, 1, -1, 2];
            return (
            <motion.div
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <StickyNote color={colors[index]} rotation={rotations[index]} className="h-full p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <Badge variant={
                      project.complexity === 'Expert' ? 'destructive' :
                      project.complexity === 'Advanced' ? 'default' : 'secondary'
                    }>
                      {project.complexity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
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

      {/* Learning & Certifications */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            🎓 Continuous Learning & Certifications
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying current. I regularly
            update my skills through online courses, certifications, and hands-on projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StickyNote rotation={-2} color="yellow">
              <div className="font-semibold text-sm">Google Cloud</div>
              <div className="text-xs text-muted-foreground mt-1">Secure BigLake Data</div>
            </StickyNote>
            <StickyNote rotation={1} color="pink">
              <div className="font-semibold text-sm">Meta</div>
              <div className="text-xs text-muted-foreground mt-1">Graph API Integration</div>
            </StickyNote>
            <StickyNote rotation={-1} color="green">
              <div className="font-semibold text-sm">Ongoing</div>
              <div className="text-xs text-muted-foreground mt-1">AI & ML Courses</div>
            </StickyNote>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
              <Button variant="outline" asChild>
                <Link href="/skills">← Back to Skills</Link>
              </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
