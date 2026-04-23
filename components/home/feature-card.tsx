"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Braces,
  Compass,
  Database,
  Gauge,
  Globe,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Braces,
  ShieldCheck,
  Gauge,
  Compass
};

export type FeatureIconName = keyof typeof iconMap;

type FeatureCardProps = {
  title: string;
  description: string;
  iconName: FeatureIconName;
  accent?: "primary" | "accent" | "violet";
  index?: number;
};

const accentRing: Record<NonNullable<FeatureCardProps["accent"]>, string> = {
  primary: "from-primary/80 via-primary/30 to-transparent",
  accent: "from-accent/80 via-accent/30 to-transparent",
  violet: "from-violet-500/80 via-violet-500/30 to-transparent"
};

const iconBg: Record<NonNullable<FeatureCardProps["accent"]>, string> = {
  primary: "bg-primary/12 text-primary",
  accent: "bg-accent/15 text-accent",
  violet: "bg-violet-500/15 text-violet-400"
};

export function FeatureCard({
  title,
  description,
  iconName,
  accent = "primary",
  index = 0
}: FeatureCardProps) {
  const Icon = iconMap[iconName] ?? Globe;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, hsl(var(--primary) / 0.18), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_hsl(var(--glow-primary)/0.45)]"
    >
      {/* Gradient top border */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accentRing[accent]}`}
      />
      {/* Mouse-tracking spotlight */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className={`relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${iconBg[accent]}`}>
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="relative font-display text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
