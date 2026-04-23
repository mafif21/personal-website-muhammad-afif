import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { FeatureCard, type FeatureIconName } from "@/components/home/feature-card";
import { Hero3DScene } from "@/components/home/hero-3d-scene";
import { TechMarquee } from "@/components/home/tech-marquee";
import { TypingHeadline } from "@/components/home/typing-headline";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

const highlights: Array<{
  title: string;
  description: string;
  iconName: FeatureIconName;
  accent: "primary" | "accent" | "violet";
}> = [
  {
    title: "Frontend Craft",
    description:
      "Accessible, performant interfaces with React, Next.js, and design systems tuned for real product speed.",
    iconName: "Globe",
    accent: "primary"
  },
  {
    title: "Backend Systems",
    description:
      "Type-safe APIs, auth, queues, and integrations built on maintainable, observable architecture.",
    iconName: "Database",
    accent: "accent"
  },
  {
    title: "Product Thinking",
    description:
      "From idea to shipped feature with clean code, tight feedback loops, and metrics that matter.",
    iconName: "Braces",
    accent: "violet"
  },
  {
    title: "Reliability First",
    description:
      "Strong testing, CI/CD, and observability so the system stays calm when real users show up.",
    iconName: "ShieldCheck",
    accent: "primary"
  },
  {
    title: "Performance Minded",
    description:
      "Measured budgets for Core Web Vitals, bundle sizes, and API latency — not vibes.",
    iconName: "Gauge",
    accent: "accent"
  },
  {
    title: "Product Compass",
    description:
      "Aligns scope with business outcomes: pragmatic trade-offs, clear contracts, visible progress.",
    iconName: "Compass",
    accent: "violet"
  }
];

const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "30+", label: "Shipped features & services" },
  { value: "99.9%", label: "Target reliability on prod" },
  { value: "<200ms", label: "Typical API p95 latency" }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageContainer className="pb-6 pt-10 sm:pb-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="relative animate-fade-up">
            <Link
              href="/profile"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur transition-colors hover:bg-primary/10"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to full-stack roles & freelance
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Full-stack Software Engineer
            </p>

            <TypingHeadline
              prefix="Building secure, reliable"
              rotatingWords={["web systems.", "APIs.", "interfaces.", "platforms."]}
              className="mt-2 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            />

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and build end-to-end web products — from strongly-typed backend APIs to
              polished frontend UI — aligned with business goals and stable contracts. Clean code,
              tight CI/CD, and delivery you can count on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-[0_10px_40px_-14px_hsl(var(--glow-primary)/0.7)] transition-transform hover:scale-[1.02]"
              >
                <Link href="/profile">
                  <span className="relative z-10 flex items-center">
                    View Profile
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,hsl(0_0%_100%/0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                  />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm">
                <Link href="/contact">
                  <Mail className="mr-1.5 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>

              <div className="ml-1 flex items-center gap-1 pl-2">
                <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                  <Link href="https://github.com/" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                  <Link href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stat strip */}
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/70 bg-card/60 px-3 py-3 backdrop-blur-sm"
                >
                  <dt className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: 3D scene */}
          <div className="relative lg:pl-4">
            <Hero3DScene />
          </div>
        </div>
      </PageContainer>

      {/* TECH MARQUEE */}
      <section className="border-y border-border/60 bg-card/40 py-6 backdrop-blur-sm">
        <div className="container">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Tools & stack I reach for
            </p>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent sm:block" />
          </div>
          <TechMarquee />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <PageContainer className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            What I bring
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Thoughtful engineering across the{" "}
            <span className="gradient-text" style={{ backgroundImage: "var(--brand-gradient)" }}>
              whole stack
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A practical blend of craft, systems thinking, and product sense — the work that turns
            ideas into reliable software.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
              accent={item.accent}
              index={i}
            />
          ))}
        </div>

        {/* CTA card */}
        <div className="gradient-border relative mt-16 overflow-hidden rounded-2xl bg-card/70 p-8 backdrop-blur-sm sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-muted-foreground">
                I&apos;m currently taking on new fullstack engagements. Let&apos;s chat about what
                you&apos;re building.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/profile">See my work</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
