const stats = [
  "PITCHER",
  "SOFTWARE ENGINEER",
  "HYBRID ATHLETE WANNABE",
  "TYPESCRIPT + NEXT.JS",
  "NEO4J + D3.JS",
  "2 YRS SHIPPING PRODUCTION SOFTWARE",
  "USED RUST/GO FOR A FEW MONTHS (OMG WOW)",
  "WANTS OUT OF JAVASCRIPT LAND",
  "BUT I DO LOVE TYPESCRIPT",
  "REACTJS/VUE",
  "POSTGRESQL",
  "CURIOUS NERD",
  "DOCKER",
  "SPELLED WHITTLE WRONG IN KINDERGARTEN SPELLING BEE",
  "TOP IN GAME VELOCITY: 93 MPH (YES THIS IS RELEVANT)"
];

export default function StatTicker() {
  const doubled = [...stats, ...stats];

  return (
    <div className="border-y hairline overflow-hidden py-4 bg-bg group">
      <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((s, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.14em] uppercase text-ink-muted whitespace-nowrap"
          >
            {s}
            <span className="text-accent-deep ml-8">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
