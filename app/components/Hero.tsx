"use client";

import { useEffect, useState } from "react";

const slides = [
  { label: "PITCHING — MOUND, GAME DAY" },
  { label: "COOL LIFTING VIDEO" },
  {
    label: "PIC OF YOU CODING IN THE BIG EMPTY ROOM (YOUR GITHUB PROFILE PIC)",
  },
  { label: "PORTRAIT" },
  { label: "MORE HOBBY VIDEOS AND PICTURES" },
  { label: "COOL CLIPS AND PICTURES" },
  { label: "PIC OF JAZZY?" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative h-svh w-full overflow-hidden bg-surface"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <div className="h-full w-full flex items-center justify-center border border-line/60">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              {slide.label}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-10 left-6 sm:left-10 right-6 sm:right-10">
        <p className="eyebrow mb-4">Software engineer · North Chicago, IL</p>

        <h1 className="font-display font-normal text-[clamp(2.75rem,2rem+4.5vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
          Cameron Pool
        </h1>

        <p className="mt-3 font-display italic text-[clamp(1.1rem,1rem+1vw,1.75rem)] text-ink-muted max-w-2xl leading-snug">
          Ex baseball something something inspiration, inspiration, commas kinda
          look cool. Code something passionate about, furthermore
        </p>

        <div className="mt-8 flex items-center justify-between">
          <a
            href="#projects"
            className="ink-link font-mono text-xs tracking-[0.14em] uppercase text-ink"
          >
            TL;DR: the code is here ↓
          </a>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="text-accent index-label">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span className="index-label">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
