"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
      }}
      className={cn("group relative overflow-hidden rounded-xl", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${position.x}% ${position.y}%, hsl(var(--primary) / 0.2), transparent 42%)`
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
