import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Tefal India Case Study",
  "See how SM Solutions improved Tefal India's digital shopping experience, product discovery and conversion performance."
);

export default function CaseDetailsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
