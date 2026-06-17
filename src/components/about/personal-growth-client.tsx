"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";
import { BookOpen, Target, Compass, Lightbulb, Brain } from "lucide-react";

export function PersonalGrowthClient() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
              { text: "Personal", style: "cursive", size: "xl" },
              { text: "Growth", style: "block", size: "xl" },
              { text: "🌱", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={-1} className="text-center">
            <p className="text-sm text-foreground">
              <HandDrawnHighlight>Continuous learning</HandDrawnHighlight> and{" "}
              <HandDrawnHighlight>self-reflection</HandDrawnHighlight> that shapes my approach to{" "}
              <HandDrawnHighlight>technology and life</HandDrawnHighlight>
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Core Philosophy */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Growth Mindset" 
            subtitle="Principles that guide my personal development"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Embrace the Learning Curve" type="tip">
              <p className="text-foreground leading-relaxed">
                Every challenge is an opportunity to grow. Whether it's learning a new programming language, 
                understanding a complex business domain, or developing leadership skills, I approach each with 
                <HandDrawnHighlight>curiosity over fear</HandDrawnHighlight>. The discomfort of not knowing 
                is temporary—the growth is permanent.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Fail Fast, Learn Faster" type="note">
              <p className="text-foreground leading-relaxed">
                I've learned to <HandDrawnHighlight>reframe failure as data</HandDrawnHighlight>. 
                Each mistake provides insights that accelerate learning. In both personal projects and client work, 
                I prefer rapid prototyping and iteration over perfectionism that delays feedback.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Systems Over Goals" type="important">
              <p className="text-foreground leading-relaxed">
                While goals provide direction, <HandDrawnHighlight>systems create lasting change</HandDrawnHighlight>. 
                Instead of "I want to be an AI expert," I focus on "I will spend 1 hour daily learning AI concepts." 
                This shift from outcomes to processes has been transformative.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Current Learning Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Current Learning Focus
            </CardTitle>
            <CardDescription>What I'm actively developing in 2024-2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Brain className="h-4 w-4 text-foreground" />
                  Technical Growth
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Active</Badge>
                    Advanced AI/ML model training and deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Active</Badge>
                    Cloud architecture patterns (AWS/GCP)
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Planned</Badge>
                    Blockchain and Web3 development
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Ongoing</Badge>
                    System design and scalability patterns
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <Compass className="h-4 w-4 text-foreground" />
                  Personal Development
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Active</Badge>
                    Public speaking and presentation skills
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Active</Badge>
                    Writing and content creation
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Daily</Badge>
                    Meditation and mindfulness practice
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Weekly</Badge>
                    Financial literacy and investment strategies
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Learning Methods That Work for Me
            </CardTitle>
            <CardDescription>How I effectively acquire and retain new knowledge</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-px bg-border">
              <div className="bg-background p-4">
                <h4 className="font-semibold">Active Learning Through Building</h4>
                <p className="text-sm text-muted-foreground mb-2">Learn by doing, not just reading</p>
                <p className="text-sm">
                  I create small projects for every new concept I learn. Want to understand GraphQL? Build a simple API. 
                  Learning about machine learning? Train a model on a dataset I care about. Building cements understanding.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Teaching and Documentation</h4>
                <p className="text-sm text-muted-foreground mb-2">The best way to learn is to teach</p>
                <p className="text-sm">
                  I write detailed documentation and tutorials for everything I learn. This forces me to understand concepts 
                  deeply enough to explain them clearly. Sometimes I teach colleagues or create content to share knowledge.
                </p>
              </div>
              <div className="bg-background p-4">
                <h4 className="font-semibold">Cross-Pollination</h4>
                <p className="text-sm text-muted-foreground mb-2">Connecting ideas across disciplines</p>
                <p className="text-sm">
                  I actively look for connections between different fields. How do design principles apply to code architecture? 
                  What can fitness teach about building habits? This cross-pollination often leads to innovative solutions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Practices */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Reflection & Self-Awareness" 
            subtitle="How I maintain clarity and direction"
            className="mb-6"
          />
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StudyGuideBox title="Weekly Reviews" type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  Every Friday, I review the week: What went well? What could improve? What did I learn? 
                  <HandDrawnHighlight>This practice prevents me from just reacting</HandDrawnHighlight>
                  to daily demands and helps maintain strategic focus.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="Monthly Deep Dives" type="tip">
                <p className="text-foreground leading-relaxed text-sm">
                  Once monthly, I step back for bigger picture reflection: Are my projects aligned with my values? 
                  What patterns am I noticing? <HandDrawnHighlight>This helps course-correct</HandDrawnHighlight> 
                  before small issues become big problems.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="Decision Journaling" type="important">
                <p className="text-foreground leading-relaxed text-sm">
                  I document important decisions with my reasoning at the time. Months later, I review: 
                  What worked? What didn't? <HandDrawnHighlight>This improves my decision-making process</HandDrawnHighlight> 
                  over time by learning from both successes and mistakes.
                </p>
              </StudyGuideBox>
              
              <StudyGuideBox title="Mindfulness Practice" type="note">
                <p className="text-foreground leading-relaxed text-sm">
                  Daily meditation isn't just relaxation—it's <HandDrawnHighlight>training for awareness</HandDrawnHighlight>. 
                  It helps me notice thought patterns, emotional reactions, and biases that might otherwise operate unconsciously.
                </p>
              </StudyGuideBox>
            </div>
          </div>
        </NotebookPaper>

        {/* Key Insights & Lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Key Life Lessons
            </CardTitle>
            <CardDescription>Insights that have shaped my worldview and approach</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-px bg-border">
                <div className="bg-background p-4">
                  <h4 className="font-semibold">Compound Growth is Powerful</h4>
                  <p className="text-sm">
                    Small, consistent improvements compound exponentially. 1% better each day leads to 37x improvement over a year. 
                    This applies to skills, relationships, health, and financial growth.
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">Comfort Zone is the Danger Zone</h4>
                  <p className="text-sm">
                    When I'm too comfortable, I'm not growing. The most transformative periods of my life have been 
                    when I deliberately chose discomfort—learning new technologies, taking on challenging projects, 
                    or starting my solopreneur journey.
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">Network Effects Are Everything</h4>
                  <p className="text-sm">
                    Your network determines your opportunities, learning speed, and impact. I invest heavily in relationships—
                    not for short-term gain, but because humans naturally want to help those they know and trust.
                  </p>
                </div>
                <div className="bg-background p-4">
                  <h4 className="font-semibold">Health is the Foundation</h4>
                  <p className="text-sm">
                    Everything else—career, relationships, creativity—depends on physical and mental health. 
                    Neglecting health for short-term productivity gains is always a losing trade in the long run.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Growth Areas */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Future Growth Vision" 
            subtitle="Where I'm heading in the next 3-5 years"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Leadership & Team Building" type="tip">
              <p className="text-foreground leading-relaxed">
                As I grow my consulting practice, I want to develop skills in <HandDrawnHighlight>building and leading distributed teams</HandDrawnHighlight>. 
                This includes remote team management, cross-cultural communication, and creating systems that help others do their best work.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Strategic Thinking & Business Acumen" type="note">
              <p className="text-foreground leading-relaxed">
                Technical skills got me here, but <HandDrawnHighlight>business strategy will determine impact</HandDrawnHighlight>. 
                I'm focusing on understanding market dynamics, competitive positioning, and how to identify and capitalize on emerging opportunities.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Content Creation & Thought Leadership" type="important">
              <p className="text-foreground leading-relaxed">
                I want to contribute more to the tech community through <HandDrawnHighlight>writing, speaking, and teaching</HandDrawnHighlight>. 
                Sharing knowledge not only helps others but also forces deeper understanding and creates valuable connections.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>
      </div>
    </div>
  );
}