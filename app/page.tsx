import Link from "next/link";
import { ArrowRight, Braces, Database, Globe } from "lucide-react";

import { DanglingBadge } from "@/components/dangling-badge";
import { HeroAccessories } from "@/components/home/hero-accessories";
import { TypingHeadline } from "@/components/home/typing-headline";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "Frontend Craft",
    description: "Accessible, performant interfaces with React, Next.js, and design systems.",
    icon: Globe
  },
  {
    title: "Backend Systems",
    description: "Type-safe APIs, auth, and integrations with maintainable architecture.",
    icon: Database
  },
  {
    title: "Product Thinking",
    description: "From idea to shipped feature with clean code, metrics, and iteration.",
    icon: Braces
  }
];

export default function HomePage() {
  return (
    <PageContainer>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Full-stack Software Engineer
          </p>
          <TypingHeadline
            prefix="Building secure and reliable"
            rotatingWords={["web systems.", "backend.", "frontend."]}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
          />
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            I build end-to-end web apps, from backend APIs to frontend UI, aligned with business needs and stable contracts. I focus on clean code, best practices, and reliable delivery through strong testing and CI/CD.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/profile">
                View Profile <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="relative isolate min-h-[430px] rounded-3xl border border-primary/15 bg-background/40 p-4 sm:p-6">
          <HeroAccessories />
          <DanglingBadge className="relative z-10 animate-float" />
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-primary/20 bg-card/75">
              <CardHeader>
                <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
}
