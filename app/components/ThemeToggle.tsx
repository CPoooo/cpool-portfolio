"use client";

import { useEffect, useState } from "react";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20.2 14.6a8.2 8.2 0 1 1-8.8-11 6.6 6.6 0 0 0 8.8 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    window.localStorage.setItem("theme", next);
  }

  // Render an inert placeholder until mount so the toggle never flashes
  // the wrong state before we know what's actually on <html>.
  if (theme === null) {
    return <div className="h-8 w-14" aria-hidden />;
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Toggle light and dark mode"
      onClick={toggle}
      className="relative h-8 w-14 shrink-0 rounded-full border border-line/60 bg-surface transition-colors"
    >
      {/* static end icons for context */}
      <SunIcon
        className={`absolute left-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-opacity duration-300 ${
          isLight ? "opacity-0" : "opacity-40 text-ink-muted"
        }`}
      />
      <MoonIcon
        className={`absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-opacity duration-300 ${
          isLight ? "opacity-40 text-ink-muted" : "opacity-0"
        }`}
      />

      {/* sliding knob, iOS-style spring-ish easing */}
      <span
        className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? (
          <SunIcon className="h-3.5 w-3.5 text-bg" />
        ) : (
          <MoonIcon className="h-3.5 w-3.5 text-bg" />
        )}
      </span>
    </button>
  );
}