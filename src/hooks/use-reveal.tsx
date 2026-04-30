import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Returns a ref + boolean indicating
 * whether the element has entered the viewport.
 * Apply transition classes based on `visible` to animate in.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      options
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/**
 * Convenience component that wraps children in a div which fades+slides in
 * when scrolled into view. Optional `delay` in ms staggers entries.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: any;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as any}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </As>
  );
}
