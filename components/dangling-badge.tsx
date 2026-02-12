"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DanglingBadge({ className }: { className?: string }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const rotateX = useSpring(useTransform(cursorY, [-80, 80], [12, -12]), {
    damping: 18,
    stiffness: 150
  });
  const rotateY = useSpring(useTransform(cursorX, [-80, 80], [-14, 14]), {
    damping: 18,
    stiffness: 150
  });

  const shadowX = useSpring(useTransform(cursorX, [-80, 80], [-12, 12]), {
    damping: 16,
    stiffness: 120
  });

  return (
    <div className={cn("relative mx-auto w-full max-w-[360px] [perspective:1200px]", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto mt-6 w-fit"
      >
        <span
          aria-hidden
          className="absolute left-1/2 top-[-74px] h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/80 to-primary/30"
        />

        <span
          aria-hidden
          className="absolute left-1/2 top-[-10px] h-5 w-5 -translate-x-1/2 rounded-full border-2 border-primary/70 bg-background shadow-sm"
        />

        <motion.div
          animate={{ rotateZ: [-4, 4, -4] }}
          transition={{ duration: 5.6, ease: "easeInOut", repeat: Infinity }}
          style={{ transformOrigin: "50% -42px" }}
          className="relative"
        >
          <motion.div
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              cursorX.set(event.clientX - rect.left - rect.width / 2);
              cursorY.set(event.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              cursorX.set(0);
              cursorY.set(0);
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[300px] overflow-hidden rounded-2xl border border-primary/20 bg-card/95 p-4 shadow-xl"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,hsl(var(--primary)/0.2),transparent_40%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 top-0 h-24 w-24 rotate-12 bg-gradient-to-b from-white/45 to-transparent blur-sm"
            />

            <Badge className="mb-3 w-fit" variant="secondary">
              Open to collaboration
            </Badge>

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/15 p-2.5">
                  <Code2 className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-base font-semibold">Afif Maliki</p>
                  <p className="text-xs text-muted-foreground">Fullstack Developer</p>
                </div>
              </div>

              <div className="inline-flex gap-1.5">
                <span className="rounded-full bg-primary/12 p-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                </span>
                <span className="rounded-full bg-accent/15 p-1.5">
                  <Zap className="h-3.5 w-3.5 text-accent" aria-hidden />
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border bg-background/60 p-2">
                <p className="text-xs text-muted-foreground">Focus</p>
                <p className="text-xs font-semibold">UI + API</p>
              </div>
              <div className="rounded-lg border bg-background/60 p-2">
                <p className="text-xs text-muted-foreground">Stack</p>
                <p className="text-xs font-semibold">TypeScript</p>
              </div>
              <div className="rounded-lg border bg-background/60 p-2">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-xs font-semibold">Available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            style={{ x: shadowX }}
            className="mx-auto mt-4 h-4 w-44 rounded-full bg-foreground/15 blur-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
