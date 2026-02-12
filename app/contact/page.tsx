import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const socials = [
  { icon: Github, href: "https://github.com/mafif21", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muhammadnurulafifmaliki", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" }
];

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Let&apos;s connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Have a project, collaboration, or role in mind? Send me a message and I&apos;ll get back
              to you.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-primary transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
