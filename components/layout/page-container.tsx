import * as React from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return <section className={cn("container py-10 sm:py-20", className)}>{children}</section>;
}
