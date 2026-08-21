"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/routing";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const previousChildren = useRef(children);
  const previousPathname = useRef(pathname);
  const contentChanged =
    previousChildren.current !== children || previousPathname.current !== pathname;

  useIsomorphicLayoutEffect(() => {
    if (previousChildren.current === children && previousPathname.current === pathname) return;

    previousChildren.current = children;
    previousPathname.current = pathname;
    setIsVisible(false);

    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, [children, pathname]);

  return (
    <div
      style={{
        opacity: reducedMotion || (!contentChanged && isVisible) ? 1 : 0,
        transform: reducedMotion || (!contentChanged && isVisible)
          ? "translateY(0)"
          : "translateY(6px)",
        transition: reducedMotion || contentChanged
          ? "none"
          : "opacity 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
}
