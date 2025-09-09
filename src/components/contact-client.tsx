"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        className="text-center space-y-8 mb-12"
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
              { text: "Let's", style: "cursive", color: "text-purple-700", size: "xl" },
              { text: "Connect!", style: "bubble", color: "text-blue-600", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
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
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-slate-700 text-center leading-relaxed">
              Always interested in <strong>new opportunities</strong>, <strong>AI projects</strong>, and innovative collaborations from <strong>Bangkok, Thailand</strong>! 🇹🇭
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <SketchyFrame variant="dashed" className="min-h-[600px]">
          <NotebookPaper className="p-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-[family-name:var(--font-script)] font-bold text-slate-800 mb-2">
                Send Me a Message! ✍️
              </h3>
              <p className="text-sm text-slate-600 font-[family-name:var(--font-doodle)] mb-6">
                Fill out the form below and I'll get back to you ASAP!
              </p>
            </motion.div>
            <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  className="min-h-32"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
            </div>
          </NotebookPaper>
        </SketchyFrame>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">bookchaowalit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+66 65-416-9146</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Bangkok Metropolitan Area, Thailand</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media & Freelance Platforms</CardTitle>
              <CardDescription>
                Connect with me on these platforms or hire me for projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://github.com/bookchaowalit" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🐙</span>
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">💼</span>
                    LinkedIn
                  </a>
                </Button>

                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://twitter.com/bookchaowalit" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🐦</span>
                    Twitter
                  </a>
                </Button>

                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://dev.to/bookchaowalit" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">✍️</span>
                    Dev.to
                  </a>
                </Button>

                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://www.upwork.com/freelancers/~01bb8b7612ad1fd8bc" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🔧</span>
                    Upwork
                  </a>
                </Button>

                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://fastwork.co/user/bookchao" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">⚡</span>
                    Fastwork
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">🤖</Badge>
                  <span className="text-sm">AI integration & RAG systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">📊</Badge>
                  <span className="text-sm">SEO optimization & analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">💻</Badge>
                  <span className="text-sm">Full-stack development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">🛍️</Badge>
                  <span className="text-sm">Shopify e-commerce solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">📈</Badge>
                  <span className="text-sm">Data analysis & social media insights</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24-48 hours (Bangkok timezone UTC+7).
                For urgent AI or development projects, please mention it in the subject line.
              </p>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">General inquiries</span>
                  <Badge variant="outline">24-48 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI/Development projects</span>
                  <Badge variant="outline">Same day</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Urgent matters</span>
                  <Badge variant="outline">2-4 hours</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
