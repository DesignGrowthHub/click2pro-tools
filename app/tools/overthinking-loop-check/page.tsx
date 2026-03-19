import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { OverthinkingEditorial } from "@/components/tools/overthinking-loop-check/overthinking-editorial";
import { OverthinkingLoopExperience } from "@/components/tools/overthinking-loop-check/overthinking-loop-experience";
import { ToolHero } from "@/components/tools/overthinking-loop-check/tool-hero";
import { ToolPageHeader } from "@/components/tools/overthinking-loop-check/tool-page-header";
import { overthinkingFaqItems, overthinkingToolMetadata } from "@/data/overthinking-loop-check";
import styles from "@/components/tools/overthinking-loop-check/overthinking-loop-check.module.css";

const pageUrl = "https://click2pro.com/tools/overthinking-loop-check";

export const metadata: Metadata = {
  title: "Overthinking Loop Check - Understand Why Your Mind Won’t Switch Off",
  description:
    "See whether your thinking is helping you find clarity or trapping you in repetition, uncertainty, reassurance loops, and decision drag.",
  keywords: [
    "overthinking loop check",
    "overthinking tool",
    "rumination test tool",
    "thought pattern map",
    "decision drag tool",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Overthinking Loop Check",
    description:
      "A premium interactive pattern-map tool for decoding repetition, uncertainty pull, reassurance loops, and mental drag.",
    url: pageUrl,
    siteName: "Click2Pro Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overthinking Loop Check",
    description:
      "See whether your current thinking pattern is helping clarity or pulling you into a costly mental loop.",
  },
};

export default function OverthinkingLoopCheckPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Overthinking Loop Check",
      description: overthinkingToolMetadata.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Click2Pro Tools",
        url: "https://click2pro.com/tools",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tools",
          item: "https://click2pro.com/tools",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Overthinking Loop Check",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: overthinkingFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <div className={styles.page}>
        <ToolPageHeader />
        <main>
          <ToolHero />
          <OverthinkingLoopExperience />
          <ToolPageTrustSections />
          <OverthinkingEditorial />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
