"use client";

import { motion } from "framer-motion";
import { Atom, Boxes, Rocket, ShieldCheck } from "lucide-react";

const chips = [
  { label: "Next.js", icon: Rocket, className: "left-0 top-8" },
  { label: "Type-safe API", icon: ShieldCheck, className: "right-2 top-24" },
  { label: "Clean UI", icon: Boxes, className: "left-6 bottom-16" },
  { label: "Fast DX", icon: Atom, className: "right-0 bottom-8" }
];

export function HeroAccessories() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl"
        animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {chips.map((chip, index) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={chip.label}
            className={`absolute hidden rounded-full border bg-card/90 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur md:flex md:items-center md:gap-1.5 ${chip.className}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.3, delay: index * 0.07 },
              y: { duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Icon className="h-3.5 w-3.5 text-primary" />
            {chip.label}
          </motion.div>
        );
      })}

      <motion.span
        className="absolute right-14 top-12 h-2.5 w-2.5 rounded-full bg-primary/70"
        animate={{ y: [0, -10, 0], opacity: [0.8, 0.3, 0.8] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-12 top-20 h-2 w-2 rounded-full bg-accent/70"
        animate={{ y: [0, 10, 0], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
