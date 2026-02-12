import { Layers, Rocket, Sparkles } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { ExperienceSection } from "@/components/profile/experience-section";
import { ProfileHeader } from "@/components/profile/profile-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const skills = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "React Admin",
    "Ant Design"
  ],
  backend: [
    "Golang",
    "Node.js",
    "Ruby",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "Firestore",
    "Prisma",
    "REST APIs",
    "gRPC",
    "Microservices",
    "Domain-Driven Design (DDD)",
    "eKYC Integration",
  ],
  devops_cloud: [
    "Docker",
    "CI/CD",
    "Google Cloud Run",
    "AWS",
    "Secrets Management (Conjur)",
    "Load Testing (k6)",
    "API Testing (Postman)"
  ]
};

export default function ProfilePage() {
  return (
    <PageContainer>
      <ProfileHeader />

      <ExperienceSection />

      <div className="mt-10 grid items-start gap-4 lg:grid-cols-2">
        <SpotlightCard>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" /> Main Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-semibold">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold">Devops</p>
                <div className="flex flex-wrap gap-2">
                  {skills.devops_cloud.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </SpotlightCard>

        <SpotlightCard>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" /> Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-start gap-3">
              <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                <Rocket className="h-4 w-4 text-primary" aria-hidden />
              </span>
              <p className="text-sm text-muted-foreground">
                Exciting projects are in the making. Stay tuned, I&apos;ll be sharing them here very
                soon.
              </p>
            </CardContent>
          </Card>
        </SpotlightCard>
      </div>
    </PageContainer>
  );
}
