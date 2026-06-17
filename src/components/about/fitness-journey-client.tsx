"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Dumbbell, Target, TrendingUp, Heart, Brain, Zap } from "lucide-react";

export function FitnessJourneyClient() {
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
              { text: "Fitness", style: "block", size: "xl" },
              { text: "Journey", style: "cursive", size: "xl" },
              { text: "💪", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <StickyNote rotation={-1} className="text-center" color="pink">
            <p className="text-sm text-foreground">
              How <HandDrawnHighlight color="yellow">fitness principles</HandDrawnHighlight> shape my approach to{" "}
              <HandDrawnHighlight color="pink">problem-solving</HandDrawnHighlight> and{" "}
              <HandDrawnHighlight color="green">building sustainable solutions</HandDrawnHighlight>
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Philosophy Section */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Mind-Body Connection" 
            subtitle="How fitness shapes my tech mindset"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Progressive Overload = Continuous Learning" type="tip">
              <p className="text-foreground leading-relaxed">
                Just like in fitness, I believe in <HandDrawnHighlight color="blue">progressive overload</HandDrawnHighlight> in learning new technologies. 
                I gradually increase the complexity of projects I take on, ensuring steady growth without burnout. 
                Whether it's mastering a new framework or understanding complex AI concepts, consistency beats intensity.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Recovery and Reflection" type="note">
              <p className="text-foreground leading-relaxed">
                Recovery days in fitness taught me the importance of <HandDrawnHighlight color="yellow">stepping back and reflecting</HandDrawnHighlight>. 
                In my work, I regularly take time to review code, analyze project outcomes, and plan improvements. 
                This prevents technical debt and ensures long-term sustainability.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Current Routine Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              Current Fitness Routine
            </CardTitle>
            <CardDescription>How I stay physically and mentally sharp</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4 text-foreground" />
                  Weekly Structure
                </h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Mon/Thu</Badge>
                    Upper Body Strength
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Tue/Fri</Badge>
                    Lower Body Strength
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Wed</Badge>
                    Cardio & Mobility
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Sat</Badge>
                    Active Recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Sun</Badge>
                    Complete Rest
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Brain className="h-4 w-4 text-foreground" />
                  Mental Benefits
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• Enhanced problem-solving clarity</li>
                  <li>• Better stress management during tight deadlines</li>
                  <li>• Improved focus during long coding sessions</li>
                  <li>• Higher energy levels throughout the day</li>
                  <li>• Better sleep quality for cognitive recovery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fitness Goals & Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Goals & Progress Tracking
            </CardTitle>
            <CardDescription>Data-driven approach to fitness, just like in tech</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Cardiovascular</h4>
                <p className="text-sm text-muted-foreground">Target: Sub-6 min/km 5K</p>
                <p className="text-sm">Current: 6:20 min/km</p>
              </div>
              
              <div className="text-center">
                <Zap className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Strength</h4>
                <p className="text-sm text-muted-foreground">Target: 1.5x BW Bench</p>
                <p className="text-sm">Current: 1.2x BW</p>
              </div>
              
              <div className="text-center">
                <Target className="h-8 w-8 text-foreground mx-auto mb-2" />
                <h4 className="font-semibold">Consistency</h4>
                <p className="text-sm text-muted-foreground">Target: 85% weekly</p>
                <p className="text-sm">Current: 78%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Applied to Tech */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Fitness → Tech Lessons" 
            subtitle="Principles I apply from gym to code"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Compound Movements = System Architecture" type="important">
              <p className="text-foreground leading-relaxed">
                <HandDrawnHighlight color="pink">Compound exercises</HandDrawnHighlight> work multiple muscle groups efficiently, 
                just like good system architecture addresses multiple concerns with elegant solutions. 
                I focus on building systems that solve multiple problems rather than one-off fixes.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Form Over Weight = Code Quality Over Speed" type="tip">
              <p className="text-foreground leading-relaxed">
                Perfect form with lighter weights prevents injury and builds better habits. Similarly, 
                <HandDrawnHighlight color="green">writing clean, maintainable code</HandDrawnHighlight> is more valuable 
                than rushing to meet deadlines with technical debt.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Tracking Progress = Analytics & Metrics" type="note">
              <p className="text-foreground leading-relaxed">
                I log every workout with sets, reps, and weights. This same <HandDrawnHighlight color="blue">data-driven approach</HandDrawnHighlight> applies 
                to tracking project metrics, user analytics, and performance optimization in my development work.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Connection to Solopreneur Journey */}
        <Card>
          <CardHeader>
            <CardTitle>Fitness as a Solopreneur Advantage</CardTitle>
            <CardDescription>Why physical health is crucial for independent work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a solopreneur, I am both my greatest asset and my single point of failure. Maintaining physical fitness isn't just about health—it's about business continuity and peak performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Physical Benefits</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reduced back pain from long coding sessions</li>
                    <li>• Higher energy levels for client meetings</li>
                    <li>• Better posture during video calls</li>
                    <li>• Improved immune system (less sick days)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Mental Benefits</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Enhanced creativity during problem-solving</li>
                    <li>• Better decision-making under pressure</li>
                    <li>• Increased confidence in presentations</li>
                    <li>• Improved work-life balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}