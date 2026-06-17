"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper } from "@/components/ui/notebook-elements";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { TrendingUp, Brain, Target, Shield, BarChart3, Zap } from "lucide-react";

export function TradingClient() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-8 py-8"
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
              { text: "Trading", style: "cursive", size: "xl" },
              { text: "&", style: "bubble", size: "lg" },
              { text: "Investing", style: "filled", size: "xl" },
              { text: "📈", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.9 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            My journey from traditional trading to building AI-powered investment systems.
            Exploring the intersection of finance, technology, and data-driven decision making.
          </p>
        </motion.div>
      </motion.div>

      {/* Trading Philosophy */}
      <NotebookPaper className="py-8 mb-8">
        <NotebookSectionHeader
          title="Trading Philosophy"
          subtitle="My approach to markets and risk management"
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyGuideBox title="Risk-First Approach" type="note">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  Risk management is the foundation of all trading decisions.
                  Position sizing, stop losses, and portfolio diversification are non-negotiable.
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title="Data-Driven Decisions" type="tip">
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  Every trade must be backed by data and analysis.
                  Technical indicators, fundamental analysis, and market sentiment all play crucial roles.
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title="Continuous Learning" type="important">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  Markets evolve constantly. Staying updated with new strategies,
                  tools, and market conditions is essential for long-term success.
                </p>
              </div>
            </div>
          </StudyGuideBox>

          <StudyGuideBox title="AI Integration" type="note">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-foreground mt-1" />
              <div>
                <p className="text-sm">
                  Leveraging AI and machine learning for pattern recognition,
                  predictive analytics, and automated trading systems.
                </p>
              </div>
            </div>
          </StudyGuideBox>
        </div>
      </NotebookPaper>

      {/* Trading Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-foreground" />
              Trading Experience
            </CardTitle>
            <CardDescription>My journey through different markets and strategies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Cryptocurrency Trading</h4>
              <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
              <p className="text-sm">
                Started with Bitcoin and Ethereum, expanded to altcoins and DeFi protocols.
                Focus on technical analysis, on-chain metrics, and market sentiment analysis.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground">Forex & Commodities</h4>
              <p className="text-sm text-muted-foreground mb-2">2022 - Present</p>
              <p className="text-sm">
                Trading major currency pairs and commodities like gold, silver, and oil.
                Emphasis on macroeconomic analysis and inter-market relationships.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground">Stock Market Analysis</h4>
              <p className="text-sm text-muted-foreground mb-2">2023 - Present</p>
              <p className="text-sm">
                Focus on technology stocks, ETFs, and options strategies.
                Combining fundamental analysis with technical indicators.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-foreground" />
              Tools & Platforms
            </CardTitle>
            <CardDescription>Technology stack for trading and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Trading Platforms</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Binance", "Bybit", "MetaTrader 5", "TradingView"].map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Analysis Tools</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "Pandas", "NumPy", "TA-Lib", "Plotly"].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Data Sources</h4>
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
      <NotebookPaper className="py-8 mb-8">
        <NotebookSectionHeader
          title="AI-Powered Trading Vision"
          subtitle="Building the future of algorithmic trading"
          className="mb-6"
        />

        <div className="space-y-6">
          <StudyGuideBox title="Machine Learning Models" type="important">
            <p className="text-sm">
              Developing predictive models using LSTM networks, gradient boosting algorithms,
              and ensemble methods for price prediction and pattern recognition.
            </p>
          </StudyGuideBox>

          <StudyGuideBox title="Automated Trading Systems" type="tip">
            <p className="text-sm">
              Creating algorithmic trading bots that can execute trades based on predefined
              criteria, risk parameters, and market conditions without human intervention.
            </p>
          </StudyGuideBox>

          <StudyGuideBox title="Sentiment Analysis" type="note">
            <p className="text-sm">
              Integrating natural language processing to analyze news articles, social media,
              and market sentiment to inform trading decisions.
            </p>
          </StudyGuideBox>

          <StudyGuideBox title="Risk Management AI" type="important">
            <p className="text-sm">
              Implementing AI-driven risk assessment and portfolio optimization to dynamically
              adjust position sizes and stop losses based on market volatility.
            </p>
          </StudyGuideBox>
        </div>
      </NotebookPaper>

      {/* Future Projects */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Future Trading Projects</CardTitle>
          <CardDescription>Exciting developments in AI-driven trading systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">Crypto Prediction Model</h4>
              <p className="text-sm text-muted-foreground">
                Machine learning model for predicting cryptocurrency price movements
                using technical indicators and market sentiment data.
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">Automated Trading Bot</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered trading bot for executing trades across multiple exchanges
                with real-time risk management and performance monitoring.
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">Portfolio Optimizer</h4>
              <p className="text-sm text-muted-foreground">
                Advanced portfolio optimization tool using modern portfolio theory
                and AI-driven asset allocation strategies.
              </p>
            </div>

            <div className="p-4 border">
              <h4 className="font-semibold text-foreground mb-2">Market Sentiment Analyzer</h4>
              <p className="text-sm text-muted-foreground">
                NLP-powered tool for analyzing market sentiment from news,
                social media, and financial reports to inform trading decisions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? undefined : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground mb-4">
          Interested in discussing trading strategies, AI applications in finance, or collaboration opportunities?
        </p>
        <Button asChild>
          <Link href="/contact">
            Let's Connect
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
