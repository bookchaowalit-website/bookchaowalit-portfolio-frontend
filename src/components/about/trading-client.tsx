"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { TrendingUp, Brain, Target, Shield, BarChart3, Zap } from "lucide-react";

export function TradingClient() {
  const t = useTranslations("about_trading");
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
              { text: t("titleWord1"), style: "cursive", size: "xl" },
              { text: t("titleWord2"), style: "bubble", size: "lg" },
              { text: t("titleWord3"), style: "filled", size: "xl" },
              { text: "📈", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            {t("heroDescription")}
          </p>
        </motion.div>
      </motion.div>

      {/* Trading Philosophy */}
      <div className="py-8 mb-8">
        <NotebookSectionHeader
          title={t("philosophyTitle")}
          subtitle={t("philosophySubtitle")}
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyGuideBox title={t("philosophy1Title")} type="note">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  {t("philosophy1Content")}
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title={t("philosophy2Title")} type="tip">
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  {t("philosophy2Content")}
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title={t("philosophy3Title")} type="important">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  {t("philosophy3Content")}
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title={t("philosophy4Title")} type="note">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  {t("philosophy4Content")}
                </p>
              </div>
            </div>
          </StudyGuideBox>
        </div>
      </div>

      {/* Trading Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-foreground" />
              {t("experienceTitle")}
            </CardTitle>
            <CardDescription>{t("experienceSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">{t("exp1Title")}</h4>
              <p className="text-sm text-muted-foreground mb-2">{t("exp1Date")}</p>
              <p className="text-sm">
                {t("exp1Content")}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground">{t("exp2Title")}</h4>
              <p className="text-sm text-muted-foreground mb-2">{t("exp2Date")}</p>
              <p className="text-sm">
                {t("exp2Content")}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground">{t("exp3Title")}</h4>
              <p className="text-sm text-muted-foreground mb-2">{t("exp3Date")}</p>
              <p className="text-sm">
                {t("exp3Content")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-foreground" />
              {t("toolsTitle")}
            </CardTitle>
            <CardDescription>{t("toolsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">{t("toolsPlatforms")}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Binance", "Bybit", "MetaTrader 5", "TradingView"].map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">{t("toolsAnalysis")}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "Pandas", "NumPy", "TA-Lib", "Plotly"].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">{t("toolsSources")}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["CoinGecko", "Alpha Vantage", "Yahoo Finance", "TradingView API"].map((source) => (
                    <Badge key={source} variant="outline" className="text-xs">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Trading Vision */}
      <div className="py-8 mb-8">
        <NotebookSectionHeader
          title={t("visionTitle")}
          subtitle={t("visionSubtitle")}
          className="mb-6"
        />

        <div className="space-y-6">
          <StudyGuideBox title={t("vision1Title")} type="important">
            <p className="text-sm">
              {t("vision1Content")}
            </p>
          </StudyGuideBox>

          <StudyGuideBox title={t("vision2Title")} type="tip">
            <p className="text-sm">
              {t("vision2Content")}
            </p>
          </StudyGuideBox>

          <StudyGuideBox title={t("vision3Title")} type="note">
            <p className="text-sm">
              {t("vision3Content")}
            </p>
          </StudyGuideBox>

          <StudyGuideBox title={t("vision4Title")} type="important">
            <p className="text-sm">
              {t("vision4Content")}
            </p>
          </StudyGuideBox>
        </div>
      </div>

      {/* Future Projects */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 {t("futureTitle")}</CardTitle>
          <CardDescription>{t("futureSubtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">{t("proj1Title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("proj1Content")}
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">{t("proj2Title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("proj2Content")}
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">{t("proj3Title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("proj3Content")}
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">{t("proj4Title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("proj4Content")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground mb-4">
          {t("ctaText")}
        </p>
        <Button asChild>
          <Link href="/contact">
            {t("ctaButton")}
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
