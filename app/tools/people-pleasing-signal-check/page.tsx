import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { PeoplePleasingEditorial } from "@/components/tools/people-pleasing-signal-check/people-pleasing-editorial";
import { PeoplePleasingExperience } from "@/components/tools/people-pleasing-signal-check/people-pleasing-experience";
import { ToolHero } from "@/components/tools/people-pleasing-signal-check/tool-hero";
import { ToolPageHeader } from "@/components/tools/people-pleasing-signal-check/tool-page-header";
import {
  peoplePleasingFaqItems,
  peoplePleasingMetadata,
} from "@/data/people-pleasing-signal-check";
import styles from "@/components/tools/people-pleasing-signal-check/people-pleasing-signal-check.module.css";

const pageUrl = "https://click2pro.com/tools/people-pleasing-signal-check";

export const metadata: Metadata = {
  title: "People-Pleasing Signal Check - See Where You Override Yourself to Keep the Peace",
  description:
    "See where approval pressure, guilt, emotional smoothing, and over-accommodation are quietly overriding your own internal signal.",
  keywords: [
    "people pleasing test",
    "people pleasing signal check",
    "approval pressure tool",
    "over accommodation assessment",
    "self override pattern tool",
    "guilt and people pleasing",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "People-Pleasing Signal Check",
    description:
      "A premium interactive tool for mapping approval pressure, self-signal clarity, self-override, resentment risk, and the hidden cost of over-accommodation.",
    url: pageUrl,
    siteName: "Click2Pro Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People-Pleasing Signal Check",
    description:
      "See where your own signals get overridden by guilt, approval pressure, and fear of disappointing others.",
  },
};

export default function PeoplePleasingSignalCheckPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: peoplePleasingMetadata.title,
      description: peoplePleasingMetadata.description,
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
          name: peoplePleasingMetadata.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: peoplePleasingFaqItems.map((item) => ({
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
          <PeoplePleasingExperience />
          <ToolPageTrustSections />
          <PeoplePleasingEditorial />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
