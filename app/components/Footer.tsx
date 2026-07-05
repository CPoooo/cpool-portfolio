import { EMAIL } from "../lib/my-info";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-16 border-t hairline">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10">
        <div>
          <p className="font-display italic text-2xl text-ink mb-2">
            Reach out please and thank you!
          </p>
          <p className="text-ink-muted text-sm max-w-sm">
            Open to any software roles building technology they care about, and has a dev team that
            that actually likes to program.
            Web dev, defense, infra, ANYTHING (okay please just dont be legacy java) with real consequences/users
            on the other end.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-widest uppercase">
          <a href={`mailto:${EMAIL}`} className="text-ink-muted hover:text-accent transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/cameron-pool-9b1a6b313/" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/CPoooo" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="/resume.pdf" download className="text-accent hover:text-ink transition-colors">
            Resume ↓
          </a>
        </div>
      </div>

      <p className="mt-16 font-mono text-[10px] tracking-widest uppercase text-ink-muted/60">
        North Chicago, IL
      </p>
    </footer>
  );
}
