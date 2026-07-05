const credentials = [
  { label: "Based", value: "North Chicago, IL" },
  { label: "Currently", value: "Software Engineer, defense-adjacent SBIR" },
  { label: "Stack", value: "TypeScript, Next.js, Express, Neo4j, PostgreSQL" },
  { label: "Before this", value: "Attempting to throws 5oz sphere hard (Pitcher)" },
  { label: "Training for", value: "600lb Deadlift before married" },
  { label: "Reading", value: "Designing Data Intensive Applications, Military history, Scripture, (book recommendations wanted...)" },
  { label: "Interested in", value: "Software that matters, and developers that actually give effort" },
  { label: "Looking to get into", value: "Anything systems programming/robotics" },
];

export default function About() {
  return (
    <section className="px-6 sm:px-10 py-24 sm:py-32 grid sm:grid-cols-[1.1fr_0.9fr] gap-16">
      <div>
        <p className="eyebrow mb-6">About</p>
        <p className="font-display text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
          I threw fastballs for a living before I ever shipped a line of code.
        </p>
        <div className="mt-8 space-y-5 max-w-xl text-ink-muted leading-relaxed">
          <p>
            Five years of collegiate baseball with nothing else on my mind besides how to optimize the
            human body (especially the one I was given) in order to throw a baseball 100mph.
            This teaches you things that you can't learn without the journey. The same single minded
            dedication and development of a testable, iterable, provable, system to work towards this
            extremely unreal goal of a 100mph pitching velocity carries over almost one to one to software systems.
            “If you know the way broadly, you will see it in everything.” ~ Miyamoto Musashi
            Now I don't know if I rival Miyamoto in philosophy, success, or ability to wield a sword (as far as you know)
            but this applies here as well. Although I did throw harder than Miyamoto (although he probably would have walked less batters, anyways...)
          </p>
          <p>
            I build production tools for a defense-adjacent SBIR company:
            graph-backed data visualization, AI-assisted form pipelines,
            CAC-authenticated systems that have to work the first time. Outside
            of that, I really just lift and code and probably watch too many hybrid training videos and
            system design videos. I want to write Go code and Rust code. I wish to be working in space. I love
            cool software, math, hard engineering problems, automation, removing friction between what I want to
            do and doing it (why cant i just think about opening my notes app and it opens), and optimizing EVERYTHING in life
          </p>
        </div>
      </div>

      <div className="border-t hairline pt-6 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-12">
        <dl className="space-y-6">
          {credentials.map((c) => (
            <div key={c.label} className="border-b hairline pb-4">
              <dt className="font-mono text-xs tracking-[0.14em] uppercase text-accent mb-1.5">
                {c.label}
              </dt>
              <dd className="text-ink text-sm sm:text-base">{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
