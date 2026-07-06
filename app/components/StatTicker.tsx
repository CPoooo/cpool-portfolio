const stats = [
  "SOFTWARE ENGINEER",
  "HYBRID ATHLETE WANNABE",
  "TYPESCRIPT + NEXT.JS",
  "NEO4J + D3.JS",
  "2 YRS SHIPPING PRODUCTION SOFTWARE",
  "TYPE THEORY ENTHUSIAST",
  "WANTS OUT OF JAVASCRIPT LAND",
  "BUT I DO LOVE TYPESCRIPT",
  "ACTUALLY LIKES TO READ CODE",
  "REACTJS/VUE",
  "POSTGRESQL",
  "DOCKER",
  "SPELLED \'WHITTLE\' WRONG IN KINDERGARTEN SPELLING BEE",
  "THREW A BASEBALL 93MPH ONE SINGULAR TIME",
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
