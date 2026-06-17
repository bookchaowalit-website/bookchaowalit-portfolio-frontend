import { type ProjectStatus } from "@/data/app-projects";

export const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "Live", dot: "bg-foreground", text: "text-foreground" },
  wip: { label: "WIP", dot: "bg-muted-foreground", text: "text-muted-foreground" },
  archived: { label: "Archived", dot: "bg-muted", text: "text-muted" },
};
