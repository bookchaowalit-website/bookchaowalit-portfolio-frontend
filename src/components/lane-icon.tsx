import { BarChart3, Command, TrendingUp, Library, Terminal, Sparkles, type LucideIcon } from "lucide-react";
import type { ProblemLane } from "@/data/app-projects";

const laneIcons: Record<ProblemLane, LucideIcon> = {
  decisions: BarChart3,
  "solo-ops": Command,
  growth: TrendingUp,
  knowledge: Library,
  "dev-ai": Terminal,
  experience: Sparkles,
};

export function LaneIcon({ lane, className }: { lane: ProblemLane; className?: string }) {
  const Icon = laneIcons[lane];
  return <Icon className={className} aria-hidden="true" />;
}

// Maps each problem lane to a SketchyFrame variant (from notebook-elements.tsx),
// grouping lanes by feel: decisions/growth read as structured & measurable,
// solo-ops/dev-ai as technical & operational, knowledge/experience as organic & human.
export const laneFrameVariant: Record<ProblemLane, "dashed" | "double" | "wavy"> = {
  decisions: "double",
  growth: "double",
  "solo-ops": "dashed",
  "dev-ai": "dashed",
  knowledge: "wavy",
  experience: "wavy",
};
