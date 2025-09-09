"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
  const t = useTranslations('home');

  // Get only featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{t('featuredProjectsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
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
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/projects">{t('viewAllProjects')}</Link>
        </Button>
      </div>
    </section>
  );
}
