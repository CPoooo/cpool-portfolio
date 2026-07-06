const credentials = [
  { label: "Based", value: "North Chicago, IL" },
  { label: "Currently", value: "Software Engineer, defense-adjacent SBIR" },
  { label: "Stack", value: "TypeScript, Next.js, Express, Neo4j, PostgreSQL" },
  {
    label: "Before this",
    value: "Attempting to throw a 5oz sphere hard (Pitcher)",
  },
  { label: "Training for", value: "600lb Deadlift before married" },
  {
    label: "Reading",
    value:
      "Designing Data-Intensive Applications, military history, scripture (recs wanted)",
  },
  {
    label: "Interested in",
    value: "Software that matters, and developers who actually give effort",
  },
  { label: "Looking to get into", value: "Systems programming, robotics" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 py-24 sm:py-32 border-t hairline"
    >
      <div className="flex items-baseline gap-4 mb-14">
        <p className="eyebrow">About</p>
      </div>

      <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <p className="font-display text-3xl sm:text-4xl leading-tight text-ink max-w-xl mb-8">
            I threw fastballs for a living before I ever shipped a line of code.
          </p>

          <div className="space-y-5 max-w-xl text-ink-muted text-[1.0625rem] leading-[1.75]">
            <p>
              Five years of collegiate baseball with nothing else on my mind
              besides how to optimize the human body — especially the one I was
              given — to throw a baseball 100mph. That teaches you things you
              can&apos;t learn any other way. The same single-minded dedication
              to a testable, iterable, provable system carries over almost
              one-to-one to software.
            </p>
            <p className="font-display italic text-ink text-lg">
              &ldquo;If you know the way broadly, you will see it in
              everything.&rdquo; — Miyamoto Musashi
            </p>
            <p>
              I don&apos;t know if I rival Miyamoto in philosophy, success, or
              ability to wield a sword (as far as you know), but this applies
              here too. Although I did throw harder than Miyamoto — he probably
              walked fewer batters, though.
            </p>
            <p>
              I build production tools for a defense-adjacent SBIR company:
              graph-backed data visualization, AI-assisted form pipelines,
              CAC-authenticated systems that have to work the first time.
              Outside of that I lift, code, and watch too many hybrid-training
              and system-design videos. I want to write Go and Rust. I want to
              be working in space. I love cool software, hard engineering
              problems, and removing friction between what I want to do and
              doing it — why can&apos;t I just think about opening my notes app
              and it opens? I want to optimize everything.
            </p>
          </div>
        </div>

        <div className="border-t hairline pt-6 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-12">
          <dl className="space-y-5">
            {credentials.map((c) => (
              <div key={c.label} className="border-b hairline pb-4">
                <dt className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-1.5">
                  {c.label}
                </dt>
                <dd className="text-ink text-sm sm:text-[15px] leading-relaxed">
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
