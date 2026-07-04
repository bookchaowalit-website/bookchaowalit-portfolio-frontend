"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Server, Activity, AlertTriangle, Database, Clock, ArrowRight,
  Zap, Shield, RefreshCw, GitBranch, Bell, CheckCircle2,
  XCircle, Loader2, ExternalLink, Cpu, Workflow, Send
} from "lucide-react";

interface SourceHealth {
  name: string;
  icon: string;
  rows: number;
  last_updated: string;
  status: string;
  new_items: number;
}

interface DashboardData {
  generated_at: string;
  sources: Record<string, SourceHealth>;
  alerts: Array<{ source: string; icon: string; direction: string; value: number; label: string }>;
  stats: { total_sources: number; active_sources: number; total_alerts: number; total_data_points: number };
  summary: Record<string, unknown>;
}

const architectureSteps = [
  { icon: Globe, label: "24 Scheduler Jobs", desc: "Async Python scrapers with Firecrawl fallback", color: "text-blue-500" },
  { icon: Clock, label: "24/7 Async Scheduler", desc: "Continuous loop with cron-based scheduling", color: "text-green-500" },
  { icon: Database, label: "SQLite + CSV", desc: "12 data categories, 2,400+ data points", color: "text-yellow-500" },
  { icon: Workflow, label: "Dashboard Engine", desc: "Health tracking + 105+ alert generation", color: "text-purple-500" },
  { icon: Send, label: "Telegram + Todoist", desc: "Morning digest + task push", color: "text-pink-500" },
];

const cronSchedule = [
  { time: "07:00", task: "DeFi Yields + Flight Prices (Mon)", status: "active" },
  { time: "08:00", task: "Stock Prices (10 symbols)", status: "active" },
  { time: "08:15", task: "Dashboard Refresh (1/3)", status: "active" },
  { time: "08:45", task: "Morning Digest → Telegram", status: "active" },
  { time: "09:00", task: "HackerNews + Property Listings", status: "active" },
  { time: "10:00", task: "Money Opportunities (13 sources)", status: "active" },
  { time: "10:05", task: "Job Match Filter", status: "active" },
  { time: "11:00", task: "AI Tools + ProductHunt + Dev.to", status: "active" },
  { time: "11:15", task: "Dashboard Refresh (2/3)", status: "active" },
  { time: "every 2h", task: "Tech News (Notebookspec + Matichon)", status: "active" },
  { time: "every 4h", task: "Crypto Prices (10 coins)", status: "active" },
  { time: "every 6h", task: "Jobs (19 boards) + Exchange Rates + Classifieds", status: "active" },
  { time: "20:15", task: "Dashboard Refresh (3/3)", status: "active" },
  { time: "20:45", task: "Evening Digest → Telegram", status: "active" },
];

function Globe({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  );
}

function StatCard({ icon: Icon, value, label, color }: { icon: React.ElementType; value: string | number; label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
      <div className={`p-2.5 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold">{typeof value === 'number' ? value.toLocaleString() : value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function SourceCard({ source, keyName, index }: { source: SourceHealth; keyName: string; index: number }) {
  const reducedMotion = useReducedMotion();
  const isActive = source.status === "active";
  const StatusIcon = isActive ? CheckCircle2 : source.status === "no_data" ? XCircle : Loader2;
  const statusColor = isActive ? "text-green-500" : source.status === "no_data" ? "text-yellow-500" : "text-red-500";

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.06 }}
      className="p-4 rounded-xl border bg-card hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{source.icon}</span>
          <span className="font-medium text-sm">{source.name}</span>
        </div>
        <StatusIcon className={`w-4 h-4 ${statusColor}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Rows</span>
          <span className="font-mono">{source.rows.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">New</span>
          <span className="font-mono">{source.new_items}</span>
        </div>
        <div className="flex justify-between col-span-2">
          <span className="text-muted-foreground">Updated</span>
          <span className="font-mono">{source.last_updated}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function LiveSystemsClient() {
  const reducedMotion = useReducedMotion();
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/scraper-dashboard.json")
      .then((r) => r.json())
      .then((data) => { setDashboard(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const sources = dashboard ? Object.entries(dashboard.sources) : [];
  const stats = dashboard?.stats;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
      {/* Hero */}
      <motion.div
        className="text-center space-y-6 py-8"
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium mb-4">
          <Activity className="w-3 h-3" />
          Live System — Running Daily
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Automation <span className="text-primary">Ecosystem</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A self-maintaining data pipeline that runs 24 scheduled jobs across 12 data categories,
          tracks market opportunities, cross-matches against products, and
          delivers actionable intelligence via Telegram and Todoist — all
          without manual intervention.
        </p>
      </motion.div>

      {/* Stats */}
      {stats && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <StatCard icon={Server} value={stats.total_sources} label="Total Sources" color="bg-blue-500" />
          <StatCard icon={Activity} value={stats.active_sources} label="Active Sources" color="bg-green-500" />
          <StatCard icon={Bell} value={stats.total_alerts} label="Active Alerts" color="bg-yellow-500" />
          <StatCard icon={Database} value={stats.total_data_points} label="Data Points" color="bg-purple-500" />
        </motion.div>
      )}

      {/* Source Health Grid */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">Source Health Monitor</h2>
            <p className="text-sm text-muted-foreground">Real-time status of all data scrapers</p>
          </div>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map(([key, source], i) => (
              <SourceCard key={key} source={source} keyName={key} index={i} />
            ))}
          </div>
        )}
        {dashboard && (
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Last generated: {dashboard.generated_at}
          </p>
        )}
      </section>

      {/* Architecture Flow */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">System Architecture</h2>
            <p className="text-sm text-muted-foreground">How data flows from web to actionable intelligence</p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {architectureSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="p-4 rounded-xl border bg-card text-center space-y-3">
                    <div className={`mx-auto w-fit p-2.5 rounded-lg bg-muted ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm">{step.label}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < architectureSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cron Schedule */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <RefreshCw className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">Daily Schedule</h2>
            <p className="text-sm text-muted-foreground">Automated cron jobs running on VPS</p>
          </div>
        </div>
        <div className="rounded-xl border overflow-hidden">
          <div className="grid grid-cols-[80px_1fr_80px] gap-0">
            <div className="bg-muted/50 px-3 py-2 text-xs font-semibold text-muted-foreground">Time</div>
            <div className="bg-muted/50 px-3 py-2 text-xs font-semibold text-muted-foreground">Task</div>
            <div className="bg-muted/50 px-3 py-2 text-xs font-semibold text-muted-foreground text-center">Status</div>
            {cronSchedule.map((item, i) => (
              <motion.div
                key={i}
                className="contents"
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={reducedMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: i * 0.05 }}
              >
                <div className="px-3 py-2.5 text-xs font-mono border-t">{item.time}</div>
                <div className="px-3 py-2.5 text-sm border-t">{item.task}</div>
                <div className="px-3 py-2.5 border-t flex justify-center">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                    item.status === "active"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === "active" ? "bg-green-500" : "bg-blue-500"}`} />
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">Resilience Features</h2>
            <p className="text-sm text-muted-foreground">Built to survive the real web</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Firecrawl Fallback",
              desc: "Every scraper has a universal fallback via Firecrawl search API. When direct scraping fails (DNS, 429, JS-rendered sites), data still flows.",
              icon: Shield,
            },
            {
              title: "Fast-Fail Detection",
              desc: "Network errors are detected immediately (name resolution, DNS, unreachable) instead of wasting time on retries. Fallback triggers in <1s.",
              icon: Zap,
            },
            {
              title: "Cross-Matching Engine",
              desc: "Scraped opportunities are automatically matched against product catalog keywords, surfacing actionable trends for existing shops.",
              icon: GitBranch,
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl border bg-card space-y-3"
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sample Alerts */}
      {dashboard && dashboard.alerts.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Live Alert Sample</h2>
              <p className="text-sm text-muted-foreground">Top alerts from the latest dashboard run</p>
            </div>
          </div>
          <div className="space-y-2">
            {dashboard.alerts.slice(0, 8).map((alert, i) => (
              <motion.div
                key={i}
                initial={reducedMotion ? false : { opacity: 0, x: -10 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg border bg-card text-sm"
              >
                <span className="text-lg">{alert.icon}</span>
                <span className="text-lg">{alert.direction}</span>
                <span className="flex-1 truncate">{alert.label}</span>
                <span className={`font-mono text-xs ${alert.direction === "🔺" ? "text-green-500" : "text-red-500"}`}>
                  {alert.direction === "🔺" ? "+" : ""}{typeof alert.value === 'number' ? alert.value.toFixed(1) : alert.value}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Footer note */}
      <motion.div
        className="text-center py-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">
          This page is powered by the same automation it describes.
          24 scheduler jobs run continuously and refresh data via static JSON.
        </p>
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
          <ExternalLink className="w-3 h-3" />
          <span>Part of the Solo Empire infrastructure</span>
        </div>
      </motion.div>
    </div>
  );
}
