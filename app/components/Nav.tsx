"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "GitHub", href: "https://github.com/CPoooo" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 sm:px-10 py-5 bg-bg/55 backdrop-blur-md backdrop-saturate-150 border-b border-line/40">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.15em] uppercase text-ink"
        >
          Cameron
        </a>

        <div className="hidden sm:flex items-center gap-9">
          <nav className="flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="ink-link font-mono text-xs tracking-[0.12em] uppercase text-ink-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 sm:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-6 w-6 flex-col justify-center"
          >
            <span
              className={`absolute h-px w-full bg-ink transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-px w-full bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-px w-full bg-ink transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-bg/55 backdrop-blur-md border-b border-line/40 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-[0.12em] uppercase text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
