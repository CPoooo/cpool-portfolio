const credentials = [
  { label: "Based", value: "North Chicago, IL" },
  {
    label: "Currently",
    value:
      "Software Engineer, defense-adjacent SBIR. Mostly everything Typescript and Python professionaly. Typescript/Rust/Go for personal work",
  },
  {
    label: "Stack",
    value: "TypeScript, Next.js, Express, Neo4j, PostgreSQL, Python",
  },
  { label: "Training for", value: "600lb Deadlift and 4 hour marathon" },
  {
    label: "Currently Reading",
    value:
      "Designing Data-Intensive Applications, Deep Work, So Good They Cant Ignore You (recs wanted)",
  },
  {
    label: "Interested in",
    value: "Distributed Systems, Type Theory, Microservices, Linux",
  },
  { label: "Looking to get into", value: "Systems programming, robotics, HFT" },
  {
    label: "Before software",
    value:
      "Attempting to throw a 5oz sphere hard (Pitcher) as well as Striker of the month on Mario Strikers Charged",
  },
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
            Cool catchy header about coding, baseball, and lifting
          </p>

          <div className="space-y-5 max-w-xl text-ink-muted text-[1.0625rem] leading-[1.75]">
            <p>
              Five years of collegiate baseball with nothing else on my mind
              besides how to optimize the human body, especially the one I was
              given, to throw a baseball as hard as possible. That teaches you
              things you can&apos;t learn any other way. The same single-minded
              dedication to a testable, iterable, provable system carries over
              almost one-to-one to software.
            </p>
            <p className="font-display italic text-ink text-lg">
              &ldquo;If you know the way broadly, you will see it in
              everything.&rdquo; — Miyamoto Musashi
            </p>
            <p>
              Maybe too philosophical of a quote for a software portfolio.But it
              was literally the first thing I thought of it and it applies well.
              Anyways, I don&apos;t know if I rival Miyamoto in philosophy,
              success, or ability to wield a sword (as far as you know), but
              this applies here too. Although I did throw harder than Miyamoto —
              he probably would have walked fewer batters, though.
            </p>
            <p>
              Professionally I have built production tools for a
              defense-adjacent SBIR company: graph-backed data visualization
              utilizing Neo4j, NginX (mTLS Auth for use with gov CAC Card)
              Express, Vue, Typescript, D3.js, as a well as AI-assisted form
              filling chat application built with NextJS, ReactJS (duh this is
              next), Python, Flask, and Docker. SBIR contracted software tools
              expected on time and with both functional and non functional
              requirements. Outside of that I lift, code, and watch too many
              hybrid-training and system-design videos. I want to write Go and
              Rust , OCAML, and I love Type Theory, shoutout Bartoz Milewski. I
              want to be working on and in space. I love cool software, hard
              engineering problems, and removing friction between what I want to
              do and doing it, why can&apos;t I just think about opening my
              notes app and it opens? I like to optimize everything in my life.
              Add in something about loving type theory and wanting to work in a
              compiled language like Rust or Go? And for some reason OCAML?
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
