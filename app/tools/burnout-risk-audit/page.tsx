import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { BurnoutAuditExperience } from "@/components/tools/burnout-risk-audit/burnout-audit-experience";
import { BurnoutEditorial } from "@/components/tools/burnout-risk-audit/burnout-editorial";
import { ToolHero } from "@/components/tools/burnout-risk-audit/tool-hero";
import { ToolPageHeader } from "@/components/tools/burnout-risk-audit/tool-page-header";
import {
  burnoutFaqItems,
  burnoutToolMetadata,
} from "@/data/burnout-risk-audit";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

const pageUrl = "https://click2pro.com/tools/burnout-risk-audit";

export const metadata: Metadata = {
  title: "Burnout Risk Audit - Check Your Stress, Recovery, and Burnout Pattern",
  description:
    "See whether you are dealing with everyday stress, real burnout strain, or a deeper recovery gap. The audit maps energy, recovery, mental load, and emotional wear in a practical way.",
  keywords: [
    "burnout risk audit",
    "burnout test tool",
    "burnout recovery tool",
    "mental exhaustion audit",
    "stress vs burnout tool",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Burnout Risk Audit",
    description:
      "A premium interactive burnout tool for mapping energy debt, recovery quality, cognitive strain, and emotional wear.",
    url: pageUrl,
    siteName: "Click2Pro Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnout Risk Audit",
    description:
      "Understand whether you're dealing with temporary strain, active depletion, or a deeper recovery deficit.",
  },
};

export default function BurnoutRiskAuditPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Burnout Risk Audit",
      description: burnoutToolMetadata.description,
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
          name: "Burnout Risk Audit",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: burnoutFaqItems.map((item) => ({
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
          <BurnoutAuditExperience />
          <ToolPageTrustSections />
          <BurnoutEditorial />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
