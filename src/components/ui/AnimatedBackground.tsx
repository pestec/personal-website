export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,161,90,0.14),transparent),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(135,165,130,0.08),transparent)]" />

      {/* SVG goo filter merges the blobs into one another as they drift, like
          liquid metaballs, instead of three flat circles overlapping. */}
      <svg className="absolute h-0 w-0">
        <filter id="liquid-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11"
          />
        </filter>
      </svg>

      <div
        className="absolute inset-0 opacity-70"
        style={{ filter: "url(#liquid-goo)" }}
      >
        <div className="animate-blob absolute -left-40 top-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent-600/25" />
        <div
          className="animate-blob absolute right-[-15%] top-[15%] h-[26rem] w-[26rem] rounded-full bg-moss-500/15"
          style={{ animationDelay: "-9s" }}
        />
        <div
          className="animate-blob absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-400/15"
          style={{ animationDelay: "-17s" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
