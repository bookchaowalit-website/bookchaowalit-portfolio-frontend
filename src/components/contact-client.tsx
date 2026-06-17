"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { SketchyFrame, StickyNote } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, PenTool, BookOpen, Briefcase, Zap, Bot, BarChart3, Code, ShoppingBag, TrendingUp, CheckCircle2, XCircle } from "lucide-react";

export function ContactClient() {
  const t = useTranslations("contact");
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
    if (touched.name && formData.name.trim().length < 2) errs.name = t("errorNameMin");
    if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = t("errorEmailInvalid");
    if (touched.subject && formData.subject.trim().length < 3) errs.subject = t("errorSubjectMin");
    if (touched.message && formData.message.trim().length < 10) errs.message = t("errorMessageMin");
    return errs;
  }, [formData, touched, t]);

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
      setSubmitStatus({ type: 'error', message: t("errorFixErrors") });
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
          message: data.message || t("successMessage")
        });
        // Clear form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t("errorMessage")
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: t("errorNetwork")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        className="text-center space-y-8 mb-12"
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
              { text: t("connectWord1"), style: "cursive", size: "xl" },
              { text: t("connectWord2"), style: "bubble", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
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
          <div className="bg-muted border border-border p-4">
            <p className="text-foreground text-center leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("introText") }} />
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <SketchyFrame variant="dashed" className="min-h-[600px]">
          <div className="p-6 h-full">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-[family-name:var(--font-script)] font-bold text-foreground mb-2">
                {t("sendMessage")}
              </h3>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)] mb-6">
                {t("formDescription")}
              </p>
            </motion.div>
            <div>
            {/* Status Message */}
            {submitStatus.type && (
              <div role="alert" aria-live="assertive" className={`mb-6 p-4 ${
                submitStatus.type === 'success'
                  ? 'bg-muted border border-border text-foreground'
                  : 'bg-muted border border-border text-foreground'
              }`}>
                <p className="text-sm font-medium">
                  {submitStatus.type === 'success' ? <CheckCircle2 className="w-4 h-4 inline mr-1" aria-hidden="true" /> : <XCircle className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="text-xs text-destructive font-[family-name:var(--font-doodle)]" role="alert">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="text-xs text-destructive font-[family-name:var(--font-doodle)]" role="alert">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t("subject")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("subjectPlaceholder")}
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p id="subject-error" className="text-xs text-destructive font-[family-name:var(--font-doodle)]" role="alert">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  className="min-h-32"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-destructive font-[family-name:var(--font-doodle)]" role="alert">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t("sending")}
                  </>
                ) : (
                  t("sendButton")
                )}
              </Button>
            </form>
            </div>
          </div>
        </SketchyFrame>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="py-8">
            <NotebookSectionHeader title={t("contactInfo")} subtitle={t("howToReachMe")} className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">{t("email")}</p>
                  <p className="text-sm text-muted-foreground">bookchaowalit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">{t("phone")}</p>
                  <p className="text-sm text-muted-foreground">+66 65-416-9146</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">{t("location")}</p>
                  <p className="text-sm text-muted-foreground">{t("locationDetails")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <NotebookSectionHeader title={t("socialMediaFreelancePlatforms")} subtitle={t("connectHireDescription")} className="mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://github.com/bookchaowalit" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://twitter.com/bookchaowalit" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://dev.to/bookchaowalit" target="_blank" rel="noopener noreferrer">
                  <PenTool className="w-4 h-4 mr-2" />
                  Dev.to
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://medium.com/@bookchaowalit" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Medium
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://www.upwork.com/freelancers/~01bb8b7612ad1fd8bc" target="_blank" rel="noopener noreferrer">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Upwork
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a href="https://fastwork.co/user/bookchao" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-4 h-4 mr-2" />
                  Fastwork
                </a>
              </Button>
            </div>
          </div>

          <StickyNote rotation={-1}>
            <h3 className="font-bold font-[family-name:var(--font-doodle)] mb-2">{t("whatICanHelp")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary"><Bot className="w-3 h-3" /></Badge>
                <span className="text-sm">{t("helpAi")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary"><BarChart3 className="w-3 h-3" /></Badge>
                <span className="text-sm">{t("helpSeo")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary"><Code className="w-3 h-3" /></Badge>
                <span className="text-sm">{t("helpFullStack")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary"><ShoppingBag className="w-3 h-3" /></Badge>
                <span className="text-sm">{t("helpShopify")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary"><TrendingUp className="w-3 h-3" /></Badge>
                <span className="text-sm">{t("helpData")}</span>
              </div>
            </div>
          </StickyNote>

          <div className="py-8">
            <NotebookSectionHeader title={t("responseTime")} subtitle={t("whenToExpectReply")} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              {t("responseDescription")}
            </p>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("generalInquiries")}</span>
                <Badge variant="outline">{t("timeGeneral")}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("projectDiscussions")}</span>
                <Badge variant="outline">{t("timeProjects")}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">{t("urgentMatters")}</span>
                <Badge variant="outline">{t("timeUrgent")}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
