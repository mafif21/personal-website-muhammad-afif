"use client";

import * as React from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

/* -----------------------------------------------------------
   Rotating 3D cube at the center. Each face is a tech card.
----------------------------------------------------------- */

const cubeFaces = [
  {
    label: "Frontend",
    detail: "React · Next.js",
    icon: Layers,
    // translateZ + optional rotate to lay it on a cube face
    transform: "rotateY(0deg) translateZ(96px)",
    from: "from-violet-500/30",
    to: "to-indigo-500/10"
  },
  {
    label: "Backend",
    detail: "Node · Fastify",
    icon: Cpu,
    transform: "rotateY(90deg) translateZ(96px)",
    from: "from-sky-500/30",
    to: "to-cyan-400/10"
  },
  {
    label: "Data",
    detail: "Postgres · Prisma",
    icon: Database,
    transform: "rotateY(180deg) translateZ(96px)",
    from: "from-emerald-500/30",
    to: "to-teal-400/10"
  },
  {
    label: "Cloud",
    detail: "AWS · Vercel",
    icon: Cloud,
    transform: "rotateY(-90deg) translateZ(96px)",
    from: "from-fuchsia-500/30",
    to: "to-pink-400/10"
  },
  {
    label: "Secure",
    detail: "Auth · Audit",
    icon: ShieldCheck,
    transform: "rotateX(90deg) translateZ(96px)",
    from: "from-amber-500/30",
    to: "to-orange-400/10"
  },
  {
    label: "DevOps",
    detail: "CI/CD · Tests",
    icon: GitBranch,
    transform: "rotateX(-90deg) translateZ(96px)",
    from: "from-rose-500/30",
    to: "to-red-400/10"
  }
];

function RotatingCube({
  tiltX,
  tiltY
}: {
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
}) {
  return (
    <motion.div
      className="relative h-[192px] w-[192px] preserve-3d"
      style={{
        rotateX: tiltX,
        rotateY: tiltY
      }}
    >
      <motion.div
        className="absolute inset-0 preserve-3d"
        animate={{ rotateY: [0, 360], rotateX: [0, 20, 0, -20, 0] }}
        transition={{
          rotateY: { duration: 24, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {cubeFaces.map((face) => {
          const Icon = face.icon;
          return (
            <div
              key={face.label}
              className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/15 bg-gradient-to-br ${face.from} ${face.to} backdrop-blur-sm`}
              style={{
                transform: face.transform,
                boxShadow:
                  "0 0 0 1px hsl(var(--primary) / 0.2) inset, 0 20px 40px -20px hsl(var(--glow-primary) / 0.5)"
              }}
            >
              <Icon className="h-7 w-7 text-white drop-shadow" />
              <p className="text-[13px] font-semibold text-white drop-shadow">{face.label}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                {face.detail}
              </p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

/* -----------------------------------------------------------
   Floating cards that parallax with the cursor.
----------------------------------------------------------- */

type FloatCard = {
  label: string;
  detail: string;
  icon: LucideIcon;
  /** position as [top%, left%] relative to scene */
  pos: { top: string; left: string };
  /** depth: higher = closer to viewer (more parallax) */
  depth: number;
  accent: "primary" | "accent" | "violet";
  delay: number;
};

const floatingCards: FloatCard[] = [
  {
    label: "TypeScript",
    detail: "Strict mode · typed APIs",
    icon: Code2,
    pos: { top: "4%", left: "-6%" },
    depth: 40,
    accent: "primary",
    delay: 0.1
  },
  {
    label: "Realtime",
    detail: "WebSockets · tRPC",
    icon: Zap,
    pos: { top: "2%", left: "72%" },
    depth: 60,
    accent: "accent",
    delay: 0.25
  },
  {
    label: "Design system",
    detail: "Tokens · a11y",
    icon: Boxes,
    pos: { top: "72%", left: "-10%" },
    depth: 30,
    accent: "violet",
    delay: 0.4
  },
  {
    label: "Ship fast",
    detail: "CI/CD · previews",
    icon: Rocket,
    pos: { top: "78%", left: "66%" },
    depth: 55,
    accent: "primary",
    delay: 0.55
  }
];

const accentStyles: Record<FloatCard["accent"], { className: string; dot: string }> = {
  primary: { className: "border-primary/30 bg-card/85", dot: "hsl(var(--primary))" },
  accent: { className: "border-accent/40 bg-card/85", dot: "hsl(var(--accent))" },
  violet: { className: "border-violet-400/40 bg-card/85", dot: "hsl(262 85% 66%)" }
};

function FloatingCard({
  card,
  parallaxX,
  parallaxY
}: {
  card: FloatCard;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}) {
  const Icon = card.icon;
  const tx = useTransform(parallaxX, (v) => (v * card.depth) / 80);
  const ty = useTransform(parallaxY, (v) => (v * card.depth) / 80);
  const accent = accentStyles[card.accent];

  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ top: card.pos.top, left: card.pos.left, x: tx, y: ty }}
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: card.delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + card.depth / 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay
        }}
        className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 shadow-[0_10px_30px_-12px_hsl(var(--glow-primary)/0.5)] backdrop-blur-md ${accent.className}`}
      >
        <span
          className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in srgb, ${accent.dot} 14%, transparent)` }}
        >
          <Icon className="h-4 w-4" style={{ color: accent.dot }} />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-foreground">{card.label}</p>
          <p className="text-[11px] text-muted-foreground">{card.detail}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -----------------------------------------------------------
   Main hero 3D scene.
----------------------------------------------------------- */

export function Hero3DScene() {
  const sceneRef = React.useRef<HTMLDivElement>(null);

  // -1..1 range from mouse pos relative to scene center
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smoothed for cube tilt
  const tiltY = useSpring(useTransform(mx, [-1, 1], [-22, 22]), {
    stiffness: 90,
    damping: 18
  });
  const tiltX = useSpring(useTransform(my, [-1, 1], [18, -18]), {
    stiffness: 90,
    damping: 18
  });

  // Smoothed parallax offsets used by floating cards
  const parallaxX = useSpring(mx, { stiffness: 120, damping: 20 });
  const parallaxY = useSpring(my, { stiffness: 120, damping: 20 });

  const handleMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = sceneRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    },
    [mx, my]
  );

  const handleLeave = React.useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      ref={sceneRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate aspect-[5/5] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-background/60 via-background/30 to-background/60 p-6 perspective-1200 sm:aspect-[6/5] sm:p-8"
      style={{
        boxShadow:
          "0 0 0 1px hsl(var(--primary) / 0.18) inset, 0 40px 80px -30px hsl(var(--glow-primary) / 0.35)"
      }}
      aria-hidden
    >
      {/* Layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl aurora-1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-accent/25 blur-3xl aurora-2"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.32),transparent_65%)]"
      />

      {/* Orbit ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/25 animate-spin-slow"
        style={{ maskImage: "radial-gradient(circle, black 60%, transparent 100%)" }}
      />

      {/* Ambient sparkle dots */}
      <motion.span
        className="absolute left-[20%] top-[18%] h-1.5 w-1.5 rounded-full bg-primary"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[22%] top-[28%] h-1 w-1 rounded-full bg-accent"
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.span
        className="absolute left-[32%] bottom-[22%] h-1 w-1 rounded-full bg-primary/80"
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />

      {/* Rotating cube centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Pulse rings beneath cube */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse-ring"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 animate-pulse-ring"
            style={{ animationDelay: "1.2s" }}
          />

          <RotatingCube tiltX={tiltX} tiltY={tiltY} />

          {/* Status chip pinned under the cube */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3 py-1.5 text-[11px] font-medium text-foreground/80 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new work
            <Sparkles className="h-3 w-3 text-primary" />
          </motion.div>
        </div>
      </div>

      {/* Floating parallax cards */}
      {floatingCards.map((card) => (
        <FloatingCard key={card.label} card={card} parallaxX={parallaxX} parallaxY={parallaxY} />
      ))}

      {/* Corner label */}
      <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
        <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary to-accent" />
        Move · hover · explore
      </div>
    </div>
  );
}
