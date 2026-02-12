"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="container relative flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-main-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="hidden w-10 md:block" aria-hidden />
        </div>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:gap-2 md:flex"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm text-foreground/85 hover:bg-secondary hover:text-foreground",
                  "dark:text-foreground/85 dark:hover:bg-secondary dark:hover:text-foreground",
                  isActive && "bg-secondary text-foreground"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-main-nav"
          aria-label="Mobile navigation"
          className="border-t bg-background/95 px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Button
                  key={link.href}
                  variant={isActive ? "secondary" : "ghost"}
                  asChild
                  className={cn(
                    "justify-start text-foreground/90 hover:bg-secondary hover:text-foreground",
                    "dark:text-foreground/90 dark:hover:bg-secondary dark:hover:text-foreground"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
