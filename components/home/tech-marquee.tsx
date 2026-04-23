"use client";

const techs = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Prisma",
  "tRPC",
  "GraphQL",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind",
  "Framer Motion",
  "Jest",
  "Playwright",
  "OpenTelemetry"
];

export function TechMarquee() {
  // duplicate list so the animation can loop seamlessly (-50% translate)
  const doubled = [...techs, ...techs];

  return (
    <div className="relative marquee-mask overflow-hidden">
      <div className="marquee-track flex w-max gap-3 py-1">
        {doubled.map((label, idx) => (
          <span
            key={`${label}-${idx}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-foreground/80 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-accent" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
