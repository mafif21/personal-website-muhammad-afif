"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Clock3 } from "lucide-react";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Role = {
  role: string;
  company: string;
  period: string;
  summary: string;
  focus: string[];
};

const roles: Role[] = [
  {
    role: "Software Developer",
    company: "Bank CIMB NIAGA",
    period: "Oct 2024 - Present",
    summary:
      "Develop Golang microservices for a banking platform, shipping secure and compliant features (eKYC OTP, audit logs, user consent). Improve reliability with refactoring, OCR integration, CI/CD upgrades, and gRPC-based integrations.",
    focus: ["Golang", "Microservices", "API", "gRPC", "Security", "CI/CD", "Next.js"]
  },
  {
    role: "Backend Developer",
    company: "Faculty of Industrial Engineering Telkom University",
    period: "Feb 2024 - Jul 2024",
    summary:
      "Built and deployed Golang-based backend services to support internal academic web systems. Delivered REST APIs, integrated databases, and implemented containerized deployments with Docker. Validated system reliability through API testing and basic performance checks, and collaborated with stakeholders to translate workflow needs into clear endpoints and service logic.",
    focus: ["Design System", "Golang", "Microservices", "API", "gRPC", "Perfomance", "K6"]
  },
  {
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    period: "Aug 2023 - Jan 2024",
    summary:
      "Built and deployed backend features for a capstone project on Google Cloud. Developed Node.js (Express) APIs with Firestore, produced Swagger documentation aligned with business requirements, and shipped scalable releases on Cloud Run using Docker with horizontal scaling support.",
    focus: [
      "Google Cloud Platform (GCP)",
      "Cloud Run",
      "Docker",
      "Node.js (Express)",
      "Firestore",
      "Swagger"
    ]
  },
  {
    role: "Web Application Practicum Assistant",
    company: "EAD Laboratory",
    period: "Sep 2023 - Dec 2024",
    summary:
    "Supported web development practicum operations by maintaining course guidelines and mentoring students through hands-on labs. Provided structured debugging support for 18 students and built a PHP login and registration case study to teach sessions and cookies. Contributed to strong outcomes with an average final score of 76.57 and a 94% practicum completion rate.",
  focus: [
    "Debugging & Mentoring",
    "PHP",
    "Web Fundamentals",
    "Sessions & Cookies",
  ]
  },
  {
    role: "Fullstack Developer",
    company: "Balai Besar Bahan dan Barang Teknik",
    period: "Jun 2023 - Aug 2023",
    summary:
    "Built a multi-user asset management and lending system with role-based dashboards, real-time search, and QR code scanning. Delivered 28 backlog items through iterative development with the team.",
  focus: [
    "Dashboard & Admin Systems",
    "Asset Management",
    "Workflow Implementation",
    "QR Code Scanning",
    "Agile Delivery"
  ]
  },
];

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeRole = roles[activeIndex];
  const total = roles.length;

  const handleKeyNavigation = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    event.preventDefault();
    const nextIndex =
      event.key === "ArrowDown"
        ? (currentIndex + 1) % total
        : (currentIndex - 1 + total) % total;
    setActiveIndex(nextIndex);
    const nextTab = document.getElementById(`experience-tab-${nextIndex}`);
    nextTab?.focus();
  };

  return (
    <Card className="mt-10 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseBusiness className="h-5 w-5 text-primary" /> Experience Journey
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <div
            className="hide-scrollbar max-h-[240px] overflow-y-auto pr-2 scroll-smooth md:max-h-[340px]"
            role="tablist"
            aria-label="Experience timeline"
          >
            <div className="space-y-3">
              {roles.map((role, index) => (
                <button
                  key={`${role.role}-${index}`}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={`experience-panel-${index}`}
                  id={`experience-tab-${index}`}
                  tabIndex={activeIndex === index ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyNavigation(event, index)}
                  className={cn(
                    "w-full rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeIndex === index
                      ? "border-primary bg-primary/10"
                      : "bg-background/70 hover:bg-background"
                  )}
                >
                  <div >
                    <p className="font-semibold">{role.role}</p>
                    <p className="text-sm text-muted-foreground">{role.company}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" aria-hidden /> {role.period}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          key={activeRole.role}
          role="tabpanel"
          id={`experience-panel-${activeIndex}`}
          aria-labelledby={`experience-tab-${activeIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-3"
        >
          <div className="rounded-xl border bg-background/60 p-4">
            <p className="text-sm text-muted-foreground">{activeRole.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{activeRole.role}</h3>
            <p className="text-sm text-muted-foreground">{activeRole.company}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{activeRole.summary}</p>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">Main Focus</p>
            <div className="flex flex-wrap gap-2">
              {activeRole.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
