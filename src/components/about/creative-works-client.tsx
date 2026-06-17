"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Palette, Lightbulb, Camera, Brush, Code, Sparkles } from "lucide-react";

export function CreativeWorksClient() {
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
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle 
            words={[
              { text: "Creative", style: "cursive", size: "xl" },
              { text: "Works", style: "block", size: "xl" },
              { text: "🎨", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={1} className="text-center" color="yellow">
            <p className="text-sm text-foreground">
              Where <HandDrawnHighlight color="yellow">technology meets artistry</HandDrawnHighlight> and{" "}
              <HandDrawnHighlight color="pink">innovation blends with expression</HandDrawnHighlight>
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Creative Philosophy */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Design Philosophy" 
            subtitle="How creativity enhances technical solutions"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Form Follows Function, Beauty Enhances Both" type="note">
              <p className="text-foreground leading-relaxed">
                I believe that <HandDrawnHighlight color="green">beautiful design isn't just decoration</HandDrawnHighlight>—it's functional. 
                Good design reduces cognitive load, improves user experience, and makes complex systems more approachable. 
                Every color choice, spacing decision, and interaction pattern serves a purpose.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Constraints Fuel Creativity" type="tip">
              <p className="text-foreground leading-relaxed">
                Working within technical constraints or business requirements often leads to my most creative solutions. 
                <HandDrawnHighlight color="blue">Limitations force innovation</HandDrawnHighlight>—whether it's designing a responsive layout 
                that works across all devices or creating an intuitive interface for complex data.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Design Skills & Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Design Skills & Tools
            </CardTitle>
            <CardDescription>Creative tools that complement my development skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Brush className="h-4 w-4 text-foreground" />
                  Design Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Canva", "Framer", "Photoshop", "Illustrator"].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Code className="h-4 w-4 text-foreground" />
                  Creative Coding
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["CSS Animation", "SVG Graphics", "Canvas API", "Three.js", "Framer Motion", "Lottie"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="secondary">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Creative Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Recent Creative Projects
            </CardTitle>
            <CardDescription>Blending artistry with functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">Interactive Data Visualizations</h4>
                <p className="text-sm text-muted-foreground mb-2">Making complex analytics beautiful and understandable</p>
                <p className="text-sm">
                  Created animated dashboard components that transform boring spreadsheet data into engaging visual stories. 
                  Used D3.js and custom CSS animations to make business metrics come alive.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Brand Identity Systems</h4>
                <p className="text-sm text-muted-foreground mb-2">Cohesive visual languages for digital products</p>
                <p className="text-sm">
                  Developed complete design systems including typography scales, color palettes, and component libraries 
                  that maintain brand consistency across web and mobile platforms.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Micro-Interactions & Animations</h4>
                <p className="text-sm text-muted-foreground mb-2">Details that delight users and enhance usability</p>
                <p className="text-sm">
                  Crafted subtle hover effects, loading animations, and transition states that provide feedback 
                  and guide users through complex workflows without being distracting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Creative Process */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="My Creative Process" 
            subtitle="From inspiration to implementation"
            className="mb-6"
          />
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StudyGuideBox title="1. Research & Inspiration" type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  I gather inspiration from <HandDrawnHighlight color="yellow">diverse sources</HandDrawnHighlight>
                  architecture, nature, minimalist art, and even street photography. I maintain a collection 
                  of design patterns and color combinations that catch my eye.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="2. Sketch & Wireframe" type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  Before touching any digital tools, I <HandDrawnHighlight color="pink">sketch ideas on paper</HandDrawnHighlight>. 
                  This helps me think through user flows and information hierarchy without getting distracted 
                  by colors or fancy effects.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="3. Prototype & Test" type="important">
                <p className="text-foreground leading-relaxed text-sm">
                  I create <HandDrawnHighlight color="green">interactive prototypes</HandDrawnHighlight> to test ideas 
                  with real users. This reveals usability issues early and validates design decisions 
                  before development begins.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="4. Iterate & Refine" type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  Design is never finished on the first try. I <HandDrawnHighlight color="blue">embrace feedback</HandDrawnHighlight> 
                  and continuously refine based on user behavior data and stakeholder input.
                </p>
              </StudyGuideBox>
            </div>
          </div>
        </NotebookPaper>

        {/* Creative Inspiration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Sources of Creative Inspiration
            </CardTitle>
            <CardDescription>What fuels my creative thinking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Camera className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Photography</h4>
                <p className="text-sm text-muted-foreground">
                  Street photography and architectural details teach me about composition, lighting, and visual hierarchy.
                </p>
              </div>
              
              <div className="text-center">
                <Brush className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Minimalism</h4>
                <p className="text-sm text-muted-foreground">
                  Less is more. Scandinavian design and Japanese aesthetics influence my approach to clean, functional interfaces.
                </p>
              </div>
              
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Nature Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  Fibonacci sequences, organic curves, and natural color palettes provide endless inspiration for digital designs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Tech Work */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Creativity → Better Tech" 
            subtitle="How creative thinking improves my development"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="User-Centered Development" type="important">
              <p className="text-foreground leading-relaxed">
                My design background means I always <HandDrawnHighlight color="yellow">start with the user experience</HandDrawnHighlight> 
                when architecting systems. I think about information architecture, user flows, and edge cases before 
                writing the first line of code.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Creative Problem Solving" type="tip">
              <p className="text-foreground leading-relaxed">
                Creative exercises train lateral thinking. When stuck on a technical problem, I often 
                <HandDrawnHighlight color="pink">apply design thinking methods</HandDrawnHighlight>—brainstorming wildly, 
                then constraining solutions, or approaching from completely different angles.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Aesthetic Code" type="note">
              <p className="text-foreground leading-relaxed">
                I believe code can be beautiful. <HandDrawnHighlight color="green">Clean architecture, consistent naming, 
                and elegant solutions</HandDrawnHighlight> have an aesthetic quality that makes codebases more 
                maintainable and enjoyable to work with.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>
      </div>
    </div>
  );
}