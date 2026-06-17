"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  Search,
  Home,
  FolderKanban,
  Briefcase,
  GraduationCap,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Globe,
  User,
  TrendingUp,
  FileText,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

type CommandItem = {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
  group: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const reducedMotion = useReducedMotion();

  // Toggle palette with Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  }, []);

  const switchLanguage = useCallback(() => {
    const newLocale = locale === "en" ? "th" : "en";
    const pathWithoutLocale = pathname.replace(/^\/(en|th)/, "") || "/";
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  }, [locale, pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(`/${locale}${href}`);
    },
    [router, locale]
  );

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        description: "Go to homepage",
        icon: <Home className="size-4" />,
        action: () => navigateTo("/"),
        keywords: ["home", "main", "landing"],
        group: "Navigation",
      },
      {
        id: "projects",
        label: "Projects",
        description: "View all projects",
        icon: <FolderKanban className="size-4" />,
        action: () => navigateTo("/projects"),
        keywords: ["projects", "work", "portfolio", "code"],
        group: "Navigation",
      },
      {
        id: "business",
        label: "Business",
        description: "My ventures and services",
        icon: <Briefcase className="size-4" />,
        action: () => navigateTo("/business"),
        keywords: ["business", "ventures", "services", "company"],
        group: "Navigation",
      },
      {
        id: "skills",
        label: "Skills",
        description: "Technologies and tools",
        icon: <GraduationCap className="size-4" />,
        action: () => navigateTo("/skills"),
        keywords: ["skills", "technologies", "tools", "stack"],
        group: "Navigation",
      },
      {
        id: "blog",
        label: "Blog",
        description: "Read articles and posts",
        icon: <BookOpen className="size-4" />,
        action: () => navigateTo("/blog"),
        keywords: ["blog", "articles", "posts", "writing"],
        group: "Navigation",
      },
      {
        id: "contact",
        label: "Contact",
        description: "Get in touch",
        icon: <Mail className="size-4" />,
        action: () => navigateTo("/contact"),
        keywords: ["contact", "email", "message", "reach"],
        group: "Navigation",
      },
      {
        id: "about",
        label: "About",
        description: "My story and background",
        icon: <User className="size-4" />,
        action: () => navigateTo("/about"),
        keywords: ["about", "story", "background", "bio"],
        group: "Navigation",
      },
      {
        id: "fitness",
        label: "Fitness Journey",
        description: "How fitness shapes my problem-solving",
        icon: <TrendingUp className="size-4" />,
        action: () => navigateTo("/about/fitness"),
        keywords: ["fitness", "health", "exercise", "gym"],
        group: "About",
      },
      {
        id: "creative",
        label: "Creative Works",
        description: "Where technology meets artistry",
        icon: <FileText className="size-4" />,
        action: () => navigateTo("/about/creative"),
        keywords: ["creative", "art", "design", "works"],
        group: "About",
      },
      {
        id: "theme",
        label: "Toggle Theme",
        description: "Switch between light and dark mode",
        icon: <Sun className="size-4" />,
        action: toggleTheme,
        keywords: ["theme", "dark", "light", "mode", "toggle"],
        group: "Actions",
      },
      {
        id: "language",
        label: "Switch Language",
        description: `Change to ${locale === "en" ? "Thai" : "English"}`,
        icon: <Globe className="size-4" />,
        action: switchLanguage,
        keywords: ["language", "locale", "thai", "english", "switch"],
        group: "Actions",
      },
      {
        id: "help",
        label: "Show Help",
        description: "Keyboard shortcuts and site features",
        icon: <HelpCircle className="size-4" />,
        action: () => {
          document.dispatchEvent(new CustomEvent("open-help"));
          setOpen(false);
        },
        keywords: ["help", "shortcuts", "keyboard", "guide", "features"],
        group: "Actions",
      },
    ],
    [navigateTo, toggleTheme, switchLanguage, locale]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.includes(q))
    );
  }, [query, items]);

  // Group filtered items
  const grouped = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    for (const item of filtered) {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    }
    return groups;
  }, [filtered]);

  const flatList = useMemo(() => filtered, [filtered]);

  // Keyboard navigation within results
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % flatList.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatList.length) % flatList.length);
      } else if (e.key === "Enter" && flatList[selectedIndex]) {
        e.preventDefault();
        flatList[selectedIndex].action();
      }
    },
    [flatList, selectedIndex]
  );

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Track flat index for rendering
  let flatIdx = -1;

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.15, ease: "easeOut" as const };

  return (
    <>
      {/* Keyboard shortcut hint — rendered in navigation area */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border px-2 py-1 hover:border-primary/40 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Open command palette (Cmd+K)"
      >
        <Search className="size-3" />
        <kbd className="font-mono">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Dialog */}
            <motion.div
              role="dialog"
              aria-label="Command palette"
              aria-modal="true"
              className="fixed left-1/2 top-[20%] z-[70] w-full max-w-lg -translate-x-1/2 border border-border bg-background shadow-2xl"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96, y: -10 }}
              transition={transition}
              onKeyDown={handleKeyDown}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <Search className="size-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search pages..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  aria-label="Search commands"
                />
                <kbd className="hidden sm:inline text-[10px] font-mono text-muted-foreground border border-border px-1.5 py-0.5">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-72 overflow-y-auto py-2" role="listbox">
                {flatList.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                )}
                {Object.entries(grouped).map(([group, groupItems]) => (
                  <div key={group}>
                    <div className="px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {group}
                    </div>
                    {groupItems.map((item) => {
                      flatIdx++;
                      const idx = flatIdx;
                      const isSelected = idx === selectedIndex;
                      return (
                        <button
                          key={item.id}
                          data-index={idx}
                          role="option"
                          aria-selected={isSelected}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors focus-visible:outline-none ${
                            isSelected
                              ? "bg-muted text-foreground"
                              : "text-foreground hover:bg-muted/50"
                          }`}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        >
                          <span className="flex size-7 items-center justify-center text-muted-foreground shrink-0">
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">{item.label}</div>
                            {item.description && (
                              <div className="text-xs text-muted-foreground truncate">
                                {item.description}
                              </div>
                            )}
                          </div>
                          {isSelected && (
                            <ArrowRight className="size-3.5 text-muted-foreground shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="font-mono border border-border px-1 py-0.5">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="font-mono border border-border px-1 py-0.5">↵</kbd>
                    select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="font-mono border border-border px-1 py-0.5">esc</kbd>
                  close
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
