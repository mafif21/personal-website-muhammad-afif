import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ProfileHeader() {
  return (
    <SpotlightCard className="mt-10">
      <Card className="overflow-hidden border-primary/20 bg-card/80">
        <CardContent className="p-0">
          <div className="grid gap-0 md:grid-cols-[220px_1fr]">
            <div className="relative min-h-[240px] border-b md:min-h-[280px] md:border-b-0 md:border-r">
              <Image
                src="/photos/profile.webp"
                alt="Afif Maliki profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden /> Available for new projects
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> Indonesia
                </Badge>
              </div>

              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Muhammad Nurul Afif Maliki</h1>
              <p className="mt-2 text-lg font-medium text-primary">Software Developer | Golang | Microservices | API & System Integration</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Hi, I’m Afif 👋 A full-stack engineer in Jakarta building Golang microservices for banking. I focus on reliable APIs, secure secrets, and clean service integrations (gRPC/protobuf), and I also ship Next.js features while improving CI/CD and code quality. 
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </SpotlightCard>
  );
}
