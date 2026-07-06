// really types in a portfolio? sure
type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  demoHref?: string;
};

// Swap in real screenshots when ready — replace the placeholder div
// in each card with an <img>, keep the grayscale/hover classes.
// i wonder what i should do for the 2 kbsi projects, since I cant really show them
const projects: Project[] = [
  {
    title: "quicklift",
    description: "A workout-log PWA that parses Hevy exports into training insights.",
    stack: "Next.js · Drizzle · Neon · Clerk",
    href: "https://github.com",
  },
  {
    title: "REST API + Test Suite",
    description: "Full auth-backed API built to get fluent with testing and CI.",
    stack: "Express · Drizzle ORM · Vitest",
    href: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-24 sm:py-32 border-t hairline">
      <p className="eyebrow mb-10">Projects (The Cool Stuff)</p>

      <div className="grid sm:grid-cols-2 gap-px bg-line">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group bg-bg p-8 sm:p-10 flex flex-col justify-between min-h-70 hover:bg-surface transition-colors"
          >
            <div className="h-32 w-full mb-6 border hairline flex items-center justify-center grayscale group-hover:grayscale-0 transition-[filter] duration-300">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted">
                Screenshot
              </span>
            </div>

            <div>
              <h3 className="font-display italic text-2xl text-ink mb-2">
                {p.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
                  {p.stack}
                </span>
                <span className="font-mono text-xs text-ink-muted group-hover:text-accent transition-colors">
                  View →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
