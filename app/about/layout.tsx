import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "About Us",
  "Meet SM Solutions, a digital growth partner combining strategy, creativity and technology to build measurable business impact."
);

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
