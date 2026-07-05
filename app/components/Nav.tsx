"use client";

import { useState } from "react";
import { EMAIL } from "../lib/my-info";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: `mailto:${EMAIL}` },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 sm:px-10 py-5">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.15em] uppercase text-ink"
        >
          Cameron
        </a>

        {/* desktop */}
        <nav className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-xs tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden flex flex-col gap-1.5 w-6"
        >
          <span className="h-px w-full bg-ink" />
          <span className="h-px w-full bg-ink" />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="sm:hidden flex flex-col gap-5 px-6 pb-6 pt-2 bg-bg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-[0.12em] uppercase text-ink-muted"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}