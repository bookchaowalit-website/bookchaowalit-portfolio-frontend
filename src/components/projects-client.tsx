"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";

export function ProjectsClient() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="text-center space-y-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle 
            words={[
              { text: "My", style: "cursive", size: "xl" },
              { text: "Amazing", style: "bubble", size: "xl" },
              { text: "Projects", style: "filled", size: "xl" },
              { text: "✨", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
        >
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-muted-foreground text-center">
              A showcase of different technologies and creative approaches to problem-solving 🚀
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <NotebookSectionHeader 
          title="Featured Projects" 
          subtitle="My best work that I'm most proud of"
          className="mb-8"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
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
                        <Badge variant="secondary" className="bg-orange-100 text-foreground border-orange-300">
                          Featured
                        </Badge>
                        <div className="flex gap-2">
                          {project.demoUrl && (
                            <Button size="sm" asChild>
                              <Link href={project.demoUrl} target="_blank">
                                Demo
                              </Link>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" asChild>
                              <Link href={project.githubUrl} target="_blank">
                                Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-script)] font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-[family-name:var(--font-doodle)] leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(project.tech) && project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="font-[family-name:var(--font-doodle)]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-[family-name:var(--font-comic)] font-bold text-muted-foreground uppercase text-sm tracking-wide">
                            Highlights
                          </h4>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </NotebookPaper>
              </SketchyFrame>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mb-16"
      >
        <NotebookSectionHeader 
          title="Other Projects" 
          subtitle="More cool stuff I've built"
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 1.6 + index * 0.1 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex gap-1">
                      {project.demoUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.demoUrl} target="_blank">
                            Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {Array.isArray(project.tech) && project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {Array.isArray(project.tech) && project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="text-center space-y-6"
      >
        <NotebookPaper className="p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-script)] font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            I'm always excited to work on new projects and collaborate with other developers. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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