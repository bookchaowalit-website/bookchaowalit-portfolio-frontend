"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Code, Palette, Database, Cloud, Server } from "lucide-react";
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function SkillsClient() {
  const reducedMotion = useReducedMotion();
  const skillCategories = [
    {
      id: 'tech',
      title: 'Programming Languages',
      description: 'Programming languages and core technologies',
      icon: <Code className="w-8 h-8 text-background" />,
      skills: ['Python', 'C#', 'Java', 'HTML', 'CSS', 'Javascript', 'PHP', 'Liquid', 'SQL', 'Dart', 'Go'],
      href: '/skills/tech'
    },
    {
      id: 'library',
      title: 'Library',
      description: 'Libraries and packages for development',
      icon: <Palette className="w-8 h-8 text-background" />,
      skills: ['jQuery', 'React', 'Pandas', 'Numpy', 'Plotly', 'Axios', 'Huggingface', 'Gofiber'],
      href: '/skills/tech'
    },
    {
      id: 'framework',
      title: 'Framework',
      description: 'Development frameworks and platforms',
      icon: <Server className="w-8 h-8 text-background" />,
      skills: ['Express.js', 'FastAPI', 'Next.js', 'Angular', 'Vue', '.Net', 'Spring Boot', 'Laravel', 'Llamaindex', 'Langchain', 'Pytorch', 'Apache Airflow', 'Flutter'],
      href: '/skills/tech'
    },
    {
      id: 'database',
      title: 'Database',
      description: 'Database systems and technologies',
      icon: <Database className="w-8 h-8 text-background" />,
      skills: ['SQLite', 'Postgresql', 'SQL Server', 'MongoDB', 'Neon', 'Supabase'],
      href: '/skills/tech'
    },
    {
      id: 'cloud',
      title: 'Cloud',
      description: 'Cloud platforms and containerization',
      icon: <Cloud className="w-8 h-8 text-background" />,
      skills: ['DigitalOcean', 'GCP', 'Docker', 'AWS', 'K8s', 'Lens'],
      href: '/skills/tech'
    },
    {
      id: 'runtime',
      title: 'Runtime',
      description: 'Runtime environments and platforms',
      icon: <Server className="w-8 h-8 text-background" />,
      skills: ['Nodejs'],
      href: '/skills/tech'
    }
  ];

  const quickSkills = [
    { name: 'Python', level: 'Expert', category: 'tech' },
    { name: 'React/Next.js', level: 'Expert', category: 'tech' },
    { name: 'FastAPI', level: 'Advanced', category: 'tech' },
    { name: 'PostgreSQL', level: 'Advanced', category: 'tech' },
    { name: 'Docker', level: 'Advanced', category: 'tech' },
    { name: 'Flutter', level: 'Advanced', category: 'tech' },
    { name: 'AWS', level: 'Advanced', category: 'tech' },
    { name: 'Nodejs', level: 'Expert', category: 'tech' },
    { name: 'MongoDB', level: 'Advanced', category: 'tech' },
    { name: 'Langchain', level: 'Advanced', category: 'tech' },
    { name: 'Pytorch', level: 'Intermediate', category: 'tech' },
    { name: 'K8s', level: 'Intermediate', category: 'tech' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-12">
      {/* Hero Section */}
      <NotebookPaper className="py-8">
        <motion.div
          className="text-center space-y-8"
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
                { text: "My", style: "cursive", size: "xl" },
                { text: "Skills", style: "bubble", size: "xl" },
                { text: "&", style: "filled", size: "lg" },
                { text: "Expertise", style: "block", size: "xl" },
                { text: "🚀", style: "block", size: "lg" }
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
              A comprehensive showcase of my technical, creative, and multimedia skills.
              Click on each category to explore detailed breakdowns and real-world applications.
            </p>
          </motion.div>
        </motion.div>
      </NotebookPaper>

      {/* Skill Categories Grid */}
      <NotebookPaper className="py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 * index }}
              whileHover={reducedMotion ? undefined : { y: -5 }}
            >
              <a href={category.href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                <Card className="h-full hover:bg-secondary transition-colors cursor-pointer group border hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={reducedMotion ? undefined : { rotate: 5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {category.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Explore Skills →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </NotebookPaper>

      {/* Quick Skills Overview */}
      <div className="mb-8">
        <NotebookSectionHeader
          title="Quick Skills Overview"
          subtitle="My proficiency levels across different technologies and tools"
          className="mb-6"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <StickyNote
                rotation={(index % 2 === 0 ? 1 : -1) * 2}
                className="text-center"
                color={(["yellow", "pink", "green", "blue"] as const)[index % 4]}
              >
                <div className="font-semibold text-sm">{skill.name}</div>
                <Badge
                  variant={skill.level === 'Expert' ? 'default' : 'secondary'}
                  className="text-xs mt-1"
                >
                  {skill.level}
                </Badge>
              </StickyNote>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning & Growth */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <NotebookPaper className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            🚀 Continuous Learning & Growth
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Technology and creative fields evolve rapidly. I'm committed to staying current with the latest
            tools, techniques, and trends. Each skill category represents an ongoing journey of learning and mastery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button asChild>
                <Link href="/contact">Discuss a Project</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={reducedMotion ? undefined : { scale: 1.05 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }}>
              <Button variant="outline" asChild>
                <Link href="/about">Learn My Story</Link>
              </Button>
            </motion.div>
          </div>
        </NotebookPaper>
      </motion.div>
    </div>
  );
}
