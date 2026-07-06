import { Bold } from "lucide-react";
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
            Open to any software roles building technology they care about, and
            has a dev team that actually likes to program.
          </p>
          <div className="mt-2">
            <p className="text-ink-muted text-sm max-w-sm">
              Interested in many fields of software/technology: web dev,
              defense, infra, ai, hft, robotics, computer vision, distributed
              systems, game dev, <span className="font-bold">anything</span>{" "}
              software related really{" "}
              <span className="text-accent">
                (well of course besides maintaing legacy j**a code 🤮) <br />
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-ink-muted text-sm max-w-sm">
              Something something reach out or something else need to add just a
              little bit more here. Looks better, this way.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-widest uppercase">
          <a
            href={`mailto:${EMAIL}`}
            className="text-ink-muted hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/cameron-pool-9b1a6b313/"
            target="_blank"
            rel="noreferrer"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/CPoooo"
            target="_blank"
            rel="noreferrer"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-accent hover:text-ink transition-colors"
          >
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
