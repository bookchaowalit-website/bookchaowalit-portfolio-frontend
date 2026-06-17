"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

function AnimatedErrorFallback({ error, onReset }: { error: Error | null; onReset: () => void }) {
  const reducedMotion = useReducedMotion();
  return (
    <div
      role="alert"
      className="min-h-[300px] flex items-center justify-center p-8"
    >
      <motion.div
        className="relative bg-muted border border-border p-6 max-w-md text-center space-y-4"
        style={{
          clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)"
        }}
        initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: -0.5 }}
        transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Notebook margin line */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-border/60" />

        <div className="relative">
          <p className="text-4xl font-[family-name:var(--font-doodle)] text-muted-foreground mb-2">
            oops!
          </p>
          <h2 className="text-lg font-[family-name:var(--font-comic)] font-bold text-foreground">
            Something went wrong ✏️
          </h2>
          <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)] mt-2">
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={onReset}
            className="mt-4 px-4 py-2 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            try again →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <AnimatedErrorFallback
          error={this.state.error}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
