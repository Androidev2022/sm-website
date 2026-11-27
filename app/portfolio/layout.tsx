import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Portfolio",
  "Explore selected websites, digital products, brand experiences and creative work delivered by SM Solutions."
);

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
