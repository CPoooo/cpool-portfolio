"use client";

import { useEffect, useState } from "react";

// Replace `label` slots with real <img>/<video> once media is ready.
// Keep the mix of athletic + technical shots deliberate — that contrast
// is the point.
const slides = [
  { label: "PITCHING — MOUND, GAME DAY" },
  { label: "COOL LIFTING VIDEO" },
  { label: "AT THE DESK — SHIPPING CODE" },
  { label: "PORTRAIT" },
  { label: "COOL CLIPS AND PICTURES" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-svh w-full overflow-hidden bg-surface">
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 transition-opacity duration-200 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          {/* placeholder */}
          <div className="h-full w-full flex items-center justify-center border border-line/60">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              {slide.label}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/10 to-transparent pointer-events-none" />

      <div className="absolute bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex items-end justify-between">
        <div>
          <h1 className="font-display italic text-5xl sm:text-7xl leading-[0.95] text-ink">
            Cameron
          </h1>
          <p className="mt-3 font-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-ink-muted">
            Software Engineer — North Chicago, IL
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-ink-muted">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
