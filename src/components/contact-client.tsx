"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";

export function ContactClient() {
  const reducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const errs: Record<string, string> = {};
    if (touched.name && formData.name.trim().length < 2) errs.name = 'Name must be at least 2 characters';
    if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email address';
    if (touched.subject && formData.subject.trim().length < 3) errs.subject = 'Subject must be at least 3 characters';
    if (touched.message && formData.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  }, [formData, touched]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched to show any remaining errors
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errors).length > 0) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors above before submitting.' });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Clear form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        className="text-center space-y-8 mb-12"
        initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle
            words={[
              { text: "Let's", style: "cursive", size: "xl" },
              { text: "Connect!", style: "bubble", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9, rotate: -1 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <div className="bg-muted border border-border p-4">
            <p className="text-foreground text-center leading-relaxed">
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
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-[family-name:var(--font-script)] font-bold text-foreground mb-2">
                Send Me a Message! ✍️
              </h3>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)] mb-6">
                Fill out the form below and I'll get back to you ASAP!
              </p>
            </motion.div>
            <div>
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 ${
                submitStatus.type === 'success'
                  ? 'bg-muted border border-border text-foreground'
                  : 'bg-muted border border-border text-foreground'
              }`}>
                <p className="text-sm font-medium">
                  {submitStatus.type === 'success' ? '✅ ' : '❌ '}
                  {submitStatus.message}
                </p>
              </div>
            )}

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
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-destructive font-[family-name:var(--font-doodle)]">{errors.name}</p>}
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
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive font-[family-name:var(--font-doodle)]">{errors.email}</p>}
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
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="text-xs text-destructive font-[family-name:var(--font-doodle)]">{errors.subject}</p>}
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
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-destructive font-[family-name:var(--font-doodle)]">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
            </div>
          </NotebookPaper>
        </SketchyFrame>

        {/* Contact Info */}
        <div className="space-y-6">
          <NotebookPaper className="py-8">
            <NotebookSectionHeader title="Contact Information" subtitle="How to reach me" className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">bookchaowalit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+66 65-416-9146</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Bangkok Metropolitan Area, Thailand</p>
                </div>
              </div>
            </div>
          </NotebookPaper>

          <NotebookPaper className="py-8">
            <NotebookSectionHeader title="Social Media & Freelance Platforms" subtitle="Connect with me or hire me" className="mb-4" />
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
                <a href="https://medium.com/@bookchaowalit" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📖</span>
                  Medium
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
          </NotebookPaper>

          <StickyNote rotation={-1}>
            <h3 className="font-bold font-[family-name:var(--font-doodle)] mb-2">What I Can Help With ✨</h3>
            <div className="space-y-2">
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
          </StickyNote>

          <NotebookPaper className="py-8">
            <NotebookSectionHeader title="Response Time" subtitle="When to expect a reply" className="mb-4" />
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
          </NotebookPaper>
        </div>
      </div>
    </div>
  );
}
