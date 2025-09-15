import { Metadata } from "next";
import { VideoSkillsClient } from "@/components/skills/video-skills-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  await params; // Await params for Next.js 15 compatibility

  return {
    title: "Video Production Skills | Bookchaowalit",
    description: "Explore my video production and editing skills including Adobe Premiere Pro, After Effects, motion graphics, and content creation. See my video portfolio and production expertise.",
    keywords: ["video editing", "Adobe Premiere Pro", "After Effects", "motion graphics", "video production", "content creation"],
    openGraph: {
      title: "Video Production Skills | Bookchaowalit",
      description: "Professional video production portfolio showcasing editing, motion graphics, and content creation skills",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Video Production Skills | Bookchaowalit",
      description: "Professional video production portfolio showcasing editing, motion graphics, and content creation skills",
    },
    alternates: {
      canonical: "/skills/video",
    },
  };
}

export default function VideoSkillsPage() {
  return <VideoSkillsClient />;
}
