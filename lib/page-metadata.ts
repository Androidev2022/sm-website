import type { Metadata } from "next";

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "SM Solutions",
      locale: "en_IN",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
