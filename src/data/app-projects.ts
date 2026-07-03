export type ProjectCategory =
  | "tools"
  | "productivity"
  | "content"
  | "creative"
  | "business"
  | "social"
  | "ai-data"
  | "misc"
  | "client-work";

export type ProjectStatus = "live" | "archived" | "wip";

export interface AppProject {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  url: string;
  githubUrl: string;
  tech: string[];
  featured: boolean;
  status: ProjectStatus;
}

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; description: string; icon: string }
> = {
  tools: {
    label: "Tools",
    description: "Developer utilities and everyday helpers",
    icon: "wrench",
  },
  productivity: {
    label: "Productivity",
    description: "Task management, time tracking, and organization",
    icon: "check-square",
  },
  content: {
    label: "Content",
    description: "Blogs, writing, knowledge bases, and media",
    icon: "file-text",
  },
  creative: {
    label: "Creative",
    description: "Art, design, music, and visual experiments",
    icon: "palette",
  },
  business: {
    label: "Business",
    description: "Commerce, analytics, and operations",
    icon: "briefcase",
  },
  social: {
    label: "Social",
    description: "Community, communication, and collaboration",
    icon: "users",
  },
  "ai-data": {
    label: "AI & Data",
    description: "Machine learning, AI tools, and data systems",
    icon: "brain",
  },
  misc: {
    label: "Misc",
    description: "Experiments and everything else",
    icon: "folder",
  },
  "client-work": {
    label: "Client Work",
    description: "Professional client projects",
    icon: "handshake",
  },
};

const gh = (slug: string) =>
  `https://github.com/bookchaowalit-website/bookchaowalit-${slug}-frontend`;
const sub = (slug: string) => `https://${slug}.bookchaowalit.com`;

export const allProjects: AppProject[] = [
  // ── Tools (22) ──────────────────────────────────────────
  { slug: "base64", name: "Base64 Encoder", category: "tools", description: "Encode and decode Base64 strings in real time", url: sub("base64"), githubUrl: gh("base64"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "clipboard-manager", name: "Clipboard Manager", category: "tools", description: "Manage and search clipboard history", url: sub("clipboard-manager"), githubUrl: gh("clipboard-manager"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "colorpicker", name: "Color Picker", category: "tools", description: "Pick, convert, and preview colors across formats", url: sub("colorpicker"), githubUrl: gh("colorpicker"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "cron", name: "Cron Expression", category: "tools", description: "Build and validate cron expressions visually", url: sub("cron"), githubUrl: gh("cron"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "date-calculator", name: "Date Calculator", category: "tools", description: "Calculate date differences and add durations", url: sub("date-calculator"), githubUrl: gh("date-calculator"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "deeplinks", name: "Deep Links", category: "tools", description: "Generate and test deep links for mobile apps", url: sub("deeplinks"), githubUrl: gh("deeplinks"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "diffchecker", name: "Diff Checker", category: "tools", description: "Compare text side-by-side and highlight changes", url: sub("diffchecker"), githubUrl: gh("diffchecker"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "hashgen", name: "Hash Generator", category: "tools", description: "Generate MD5, SHA-1, SHA-256 and other hashes", url: sub("hashgen"), githubUrl: gh("hashgen"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "jsonconverter", name: "JSON Converter", category: "tools", description: "Convert, format, and validate JSON data", url: sub("jsonconverter"), githubUrl: gh("jsonconverter"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "latency-test", name: "Latency Test", category: "tools", description: "Test network latency to endpoints worldwide", url: sub("latency-test"), githubUrl: gh("latency-test"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "markdown-editor", name: "Markdown Editor", category: "tools", description: "Live markdown editor with preview and export", url: sub("markdown-editor"), githubUrl: gh("markdown-editor"), tech: ["Next.js", "TypeScript", "MDX"], featured: true, status: "live" },
  { slug: "minifier", name: "Minifier", category: "tools", description: "Minify HTML, CSS, and JavaScript code", url: sub("minifier"), githubUrl: gh("minifier"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "number-converter", name: "Number Converter", category: "tools", description: "Convert numbers between binary, hex, decimal, and octal", url: sub("number-converter"), githubUrl: gh("number-converter"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "redirect-manager", name: "Redirect Manager", category: "tools", description: "Manage URL redirects with rules and analytics", url: sub("redirect-manager"), githubUrl: gh("redirect-manager"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "regex", name: "Regex Tester", category: "tools", description: "Test and debug regular expressions in real time", url: sub("regex"), githubUrl: gh("regex"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "speech-to-text", name: "Speech to Text", category: "tools", description: "Convert speech to text using browser APIs", url: sub("speech-to-text"), githubUrl: gh("speech-to-text"), tech: ["Next.js", "TypeScript", "Web Speech API"], featured: false, status: "live" },
  { slug: "text-summarizer", name: "Text Summarizer", category: "tools", description: "Summarize long text using extractive methods", url: sub("text-summarizer"), githubUrl: gh("text-summarizer"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "tools", name: "Tools Hub", category: "tools", description: "Central directory for all developer tools", url: sub("tools"), githubUrl: gh("tools"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "translation", name: "Translation", category: "tools", description: "Translate text between languages", url: sub("translation"), githubUrl: gh("translation"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "url-encoder", name: "URL Encoder", category: "tools", description: "Encode and decode URLs and query strings", url: sub("url-encoder"), githubUrl: gh("url-encoder"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "url-shortener", name: "URL Shortener", category: "tools", description: "Shorten URLs with custom aliases and tracking", url: sub("url-shortener"), githubUrl: gh("url-shortener"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "webhook-tester", name: "Webhook Tester", category: "tools", description: "Inspect and debug incoming webhook payloads", url: sub("webhook-tester"), githubUrl: gh("webhook-tester"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },

  // ── Productivity (15) ───────────────────────────────────
  { slug: "calendar-app", name: "Calendar App", category: "productivity", description: "Visual calendar with event scheduling", url: sub("calendar-app"), githubUrl: gh("calendar-app"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "checklists", name: "Checklists", category: "productivity", description: "Create and share checklists for any workflow", url: sub("checklists"), githubUrl: gh("checklists"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "goal-tracker", name: "Goal Tracker", category: "productivity", description: "Set, track, and achieve personal goals", url: sub("goal-tracker"), githubUrl: gh("goal-tracker"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "habit-tracker", name: "Habit Tracker", category: "productivity", description: "Build and maintain daily habits with streaks", url: sub("habit-tracker"), githubUrl: gh("habit-tracker"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "kanban-board", name: "Kanban Board", category: "productivity", description: "Drag-and-drop kanban board for task management", url: sub("kanban-board"), githubUrl: gh("kanban-board"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "learn", name: "Learn", category: "productivity", description: "Structured learning paths and progress tracking", url: sub("learn"), githubUrl: gh("learn"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "notes-app", name: "Notes App", category: "productivity", description: "Quick note-taking with markdown support", url: sub("notes-app"), githubUrl: gh("notes-app"), tech: ["Next.js", "TypeScript", "MDX"], featured: false, status: "live" },
  { slug: "pomodoro-timer", name: "Pomodoro Timer", category: "productivity", description: "Focus timer using the Pomodoro Technique", url: sub("pomodoro-timer"), githubUrl: gh("pomodoro-timer"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "reading", name: "Reading Tracker", category: "productivity", description: "Track books read and reading progress", url: sub("reading"), githubUrl: gh("reading"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "reminders", name: "Reminders", category: "productivity", description: "Set and manage reminders with notifications", url: sub("reminders"), githubUrl: gh("reminders"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "snippets", name: "Snippets", category: "productivity", description: "Save and organize code snippets", url: sub("snippets"), githubUrl: gh("snippets"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "ticket-booking", name: "Ticket Booking", category: "productivity", description: "Simple ticket and reservation booking system", url: sub("ticket-booking"), githubUrl: gh("ticket-booking"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "time-tracker", name: "Time Tracker", category: "productivity", description: "Track time spent on projects and tasks", url: sub("time-tracker"), githubUrl: gh("time-tracker"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "todo-board", name: "Todo Board", category: "productivity", description: "Simple todo list with boards and labels", url: sub("todo-board"), githubUrl: gh("todo-board"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "writing", name: "Writing", category: "productivity", description: "Distraction-free writing workspace", url: sub("writing"), githubUrl: gh("writing"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },

  // ── Content (18) ────────────────────────────────────────
  { slug: "artblog", name: "Art Blog", category: "content", description: "Showcase and blog for visual art pieces", url: sub("artblog"), githubUrl: gh("artblog"), tech: ["Next.js", "TypeScript", "MDX"], featured: false, status: "archived" },
  { slug: "bookreviews", name: "Book Reviews", category: "content", description: "Review and rate books with structured critiques", url: sub("bookreviews"), githubUrl: gh("bookreviews"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "certs", name: "Certificates", category: "content", description: "Display professional certifications and credentials", url: sub("certs"), githubUrl: gh("certs"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "changelog", name: "Changelog", category: "content", description: "Public changelog for tracking updates and releases", url: sub("changelog"), githubUrl: gh("changelog"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "coursenotes", name: "Course Notes", category: "content", description: "Organized notes from courses and workshops", url: sub("coursenotes"), githubUrl: gh("coursenotes"), tech: ["Next.js", "TypeScript", "MDX"], featured: false, status: "live" },
  { slug: "journal", name: "Journal", category: "content", description: "Personal journal with daily entries and reflections", url: sub("journal"), githubUrl: gh("journal"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "knowledgehub", name: "Knowledge Hub", category: "content", description: "Central knowledge base across domains", url: sub("knowledgehub"), githubUrl: gh("knowledgehub"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "linktree", name: "Linktree", category: "content", description: "Single-page link aggregator for social profiles", url: sub("linktree"), githubUrl: gh("linktree"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "mcpdocs", name: "MCP Docs", category: "content", description: "Documentation for MCP integrations and tools", url: sub("mcpdocs"), githubUrl: gh("mcpdocs"), tech: ["Next.js", "TypeScript", "MDX"], featured: false, status: "live" },
  { slug: "news-aggregator", name: "News Aggregator", category: "content", description: "Curated news feed from multiple sources", url: sub("news-aggregator"), githubUrl: gh("news-aggregator"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "newsletter", name: "Newsletter", category: "content", description: "Email newsletter signup and archive", url: sub("newsletter"), githubUrl: gh("newsletter"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "podcast", name: "Podcast", category: "content", description: "Podcast episodes with player and show notes", url: sub("podcast"), githubUrl: gh("podcast"), tech: ["Next.js", "TypeScript"], featured: false, status: "archived" },
  { slug: "press", name: "Press", category: "content", description: "Press kit, media mentions, and public appearances", url: sub("press"), githubUrl: gh("press"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "roadmaps", name: "Roadmaps", category: "content", description: "Public product roadmaps and development plans", url: sub("roadmaps"), githubUrl: gh("roadmaps"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "talks", name: "Talks", category: "content", description: "Conference talks, presentations, and slides", url: sub("talks"), githubUrl: gh("talks"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "techblog", name: "Tech Blog", category: "content", description: "Technical articles and tutorials", url: sub("techblog"), githubUrl: gh("techblog"), tech: ["Next.js", "TypeScript", "MDX"], featured: true, status: "live" },
  { slug: "techspace", name: "Tech Space", category: "content", description: "Comprehensive tech stack showcase", url: sub("techspace"), githubUrl: gh("techspace"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "wiki", name: "Wiki", category: "content", description: "Community-editable knowledge wiki", url: sub("wiki"), githubUrl: gh("wiki"), tech: ["Next.js", "TypeScript", "MDX"], featured: false, status: "live" },

  // ── Creative (10) ───────────────────────────────────────
  { slug: "ai-art-gallery", name: "AI Art Gallery", category: "creative", description: "Gallery of AI-generated artwork and experiments", url: sub("ai-art-gallery"), githubUrl: gh("ai-art-gallery"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "color-palettes", name: "Color Palettes", category: "creative", description: "Curated color palettes for design inspiration", url: sub("color-palettes"), githubUrl: gh("color-palettes"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "design", name: "Design", category: "creative", description: "Design portfolio and visual experiments", url: sub("design"), githubUrl: gh("design"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "game-collection", name: "Game Collection", category: "creative", description: "Collection of browser-based mini-games", url: sub("game-collection"), githubUrl: gh("game-collection"), tech: ["Next.js", "TypeScript"], featured: false, status: "wip" },
  { slug: "linerichmenu", name: "LINE Rich Menu", category: "creative", description: "Design tool for LINE messaging app rich menus", url: sub("linerichmenu"), githubUrl: gh("linerichmenu"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "meme-generator", name: "Meme Generator", category: "creative", description: "Create memes with custom text and templates", url: sub("meme-generator"), githubUrl: gh("meme-generator"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "music-playlist", name: "Music Playlist", category: "creative", description: "Curated music playlists and discovery", url: sub("music-playlist"), githubUrl: gh("music-playlist"), tech: ["Next.js", "TypeScript"], featured: false, status: "archived" },
  { slug: "photo", name: "Photo", category: "creative", description: "Photography portfolio and galleries", url: sub("photo"), githubUrl: gh("photo"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "quote-generator", name: "Quote Generator", category: "creative", description: "Generate and share inspirational quotes", url: sub("quote-generator"), githubUrl: gh("quote-generator"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "video-gallery", name: "Video Gallery", category: "creative", description: "Video portfolio with embedded player", url: sub("video-gallery"), githubUrl: gh("video-gallery"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },

  // ── Business (19) ───────────────────────────────────────
  { slug: "ab-testing", name: "A/B Testing", category: "business", description: "Run and analyze A/B tests for web pages", url: sub("ab-testing"), githubUrl: gh("ab-testing"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "analytics-dashboard", name: "Analytics Dashboard", category: "business", description: "Unified analytics dashboard for all properties", url: sub("analytics-dashboard"), githubUrl: gh("analytics-dashboard"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "contact-forms", name: "Contact Forms", category: "business", description: "Build and manage contact forms with submissions", url: sub("contact-forms"), githubUrl: gh("contact-forms"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "digital-products", name: "Digital Products", category: "business", description: "Sell and deliver digital products", url: sub("digital-products"), githubUrl: gh("digital-products"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "donation-tip-jar", name: "Donation / Tip Jar", category: "business", description: "Accept donations and tips for your work", url: sub("donation-tip-jar"), githubUrl: gh("donation-tip-jar"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "error-logs", name: "Error Logs", category: "business", description: "Centralized error logging and monitoring", url: sub("error-logs"), githubUrl: gh("error-logs"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "giveaways", name: "Giveaways", category: "business", description: "Run giveaways and promotions", url: sub("giveaways"), githubUrl: gh("giveaways"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "invoice-generator", name: "Invoice Generator", category: "business", description: "Generate professional invoices as PDF", url: sub("invoice-generator"), githubUrl: gh("invoice-generator"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "link-analytics", name: "Link Analytics", category: "business", description: "Track clicks and engagement for shared links", url: sub("link-analytics"), githubUrl: gh("link-analytics"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "popular-pages", name: "Popular Pages", category: "business", description: "Track and display most visited pages", url: sub("popular-pages"), githubUrl: gh("popular-pages"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "projects-showcase", name: "Projects Showcase", category: "business", description: "Configurable project showcase for clients", url: sub("projects-showcase"), githubUrl: gh("projects-showcase"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "seo-analyzer", name: "SEO Analyzer", category: "business", description: "Analyze and score pages for SEO best practices", url: sub("seo-analyzer"), githubUrl: gh("seo-analyzer"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "services", name: "Services", category: "business", description: "Service catalog with pricing and booking", url: sub("services"), githubUrl: gh("services"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "status", name: "Status Page", category: "business", description: "Public status page for service uptime", url: sub("status"), githubUrl: gh("status"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "team", name: "Team", category: "business", description: "Team directory with roles and contact info", url: sub("team"), githubUrl: gh("team"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "testimonials", name: "Testimonials", category: "business", description: "Collect and display client testimonials", url: sub("testimonials"), githubUrl: gh("testimonials"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "tracking", name: "Tracking", category: "business", description: "Unified tracking pixel and event manager", url: sub("tracking"), githubUrl: gh("tracking"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "uptime-monitor", name: "Uptime Monitor", category: "business", description: "Monitor website uptime and response times", url: sub("uptime-monitor"), githubUrl: gh("uptime-monitor"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "visitor-map", name: "Visitor Map", category: "business", description: "Visualize website visitors on an interactive map", url: sub("visitor-map"), githubUrl: gh("visitor-map"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },

  // ── Social (7) ──────────────────────────────────────────
  { slug: "announcements", name: "Announcements", category: "social", description: "Public announcements and updates feed", url: sub("announcements"), githubUrl: gh("announcements"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "collaborations", name: "Collaborations", category: "social", description: "Find and manage collaboration opportunities", url: sub("collaborations"), githubUrl: gh("collaborations"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "comments", name: "Comments", category: "social", description: "Comment system for blog posts and pages", url: sub("comments"), githubUrl: gh("comments"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "community", name: "Community", category: "social", description: "Community forum and discussion boards", url: sub("community"), githubUrl: gh("community"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "github", name: "GitHub", category: "social", description: "GitHub profile and activity dashboard", url: sub("github"), githubUrl: gh("github"), tech: ["Next.js", "TypeScript", "GitHub API"], featured: false, status: "live" },
  { slug: "guestbook", name: "Guestbook", category: "social", description: "Visitor guestbook for leaving messages", url: sub("guestbook"), githubUrl: gh("guestbook"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "ideas", name: "Ideas", category: "social", description: "Submit and vote on project ideas", url: sub("ideas"), githubUrl: gh("ideas"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },

  // ── AI & Data (5) ───────────────────────────────────────
  { slug: "chat-playground", name: "Chat Playground", category: "ai-data", description: "Experiment with different AI chat models", url: sub("chat-playground"), githubUrl: gh("chat-playground"), tech: ["Next.js", "TypeScript", "AI SDK"], featured: true, status: "live" },
  { slug: "mcplist", name: "MCP List", category: "ai-data", description: "Directory of MCP servers and tools", url: sub("mcplist"), githubUrl: gh("mcplist"), tech: ["Next.js", "TypeScript"], featured: true, status: "live" },
  { slug: "prompt-library", name: "Prompt Library", category: "ai-data", description: "Curated library of reusable AI prompts", url: sub("prompt-library"), githubUrl: gh("prompt-library"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "recommendation-engine", name: "Recommendation Engine", category: "ai-data", description: "Content recommendation system using ML", url: sub("recommendation-engine"), githubUrl: gh("recommendation-engine"), tech: ["Next.js", "TypeScript", "Python"], featured: false, status: "wip" },
  { slug: "sentiment-analyzer", name: "Sentiment Analyzer", category: "ai-data", description: "Analyze text sentiment with AI models", url: sub("sentiment-analyzer"), githubUrl: gh("sentiment-analyzer"), tech: ["Next.js", "TypeScript", "AI SDK"], featured: false, status: "live" },

  // ── Misc (3) ────────────────────────────────────────────
  { slug: "challenges", name: "Challenges", category: "misc", description: "Coding and design challenges", url: sub("challenges"), githubUrl: gh("challenges"), tech: ["Next.js", "TypeScript"], featured: false, status: "wip" },
  { slug: "devhub", name: "DevHub", category: "misc", description: "Developer hub with resources and tools", url: sub("devhub"), githubUrl: gh("devhub"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
  { slug: "lab", name: "Lab", category: "misc", description: "Experimental playground for new ideas", url: sub("lab"), githubUrl: gh("lab"), tech: ["Next.js", "TypeScript"], featured: false, status: "wip" },

  // ── Client Work (1) ─────────────────────────────────────
  { slug: "agencyrenting", name: "Agency Renting", category: "client-work", description: "Agency renting platform for creative professionals", url: sub("agencyrenting"), githubUrl: gh("agencyrenting"), tech: ["Next.js", "TypeScript"], featured: false, status: "live" },
];
