import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Article | Legend Physiotherapy Blog",
  description: "Expert physiotherapy insights, treatment tips, and recovery advice from experienced physiotherapists.",
  openGraph: {
    type: "article",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
