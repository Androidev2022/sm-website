import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Our Clients",
  "Explore the businesses and brands partnering with SM Solutions across industries to build and grow their digital presence."
);

export default function ClientsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
