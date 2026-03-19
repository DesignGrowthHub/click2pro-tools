import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import type { BurnoutFamilyTool } from "@/data/burnout-family";
import type { BurnoutFamilyToolSlug } from "@/data/burnout-family-registry";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";
import { BurnoutFamilyEditorial } from "./burnout-family-editorial";
import { BurnoutFamilyExperience } from "./burnout-family-experience";
import { BurnoutFamilyHero } from "./burnout-family-hero";
import { BurnoutFamilyPageHeader } from "./burnout-family-page-header";

type BurnoutFamilyPageProps = {
  pageUrl: string;
  tool: BurnoutFamilyTool;
};

export function buildBurnoutFamilyMetadata(
  tool: BurnoutFamilyTool,
  pageUrl: string,
): Metadata {
  return {
    title: tool.pageMetadata.title,
    description: tool.pageMetadata.description,
    keywords: tool.pageMetadata.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: tool.pageMetadata.openGraphTitle,
      description: tool.pageMetadata.openGraphDescription,
      url: pageUrl,
      siteName: "Click2Pro Tools",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.pageMetadata.twitterTitle,
      description: tool.pageMetadata.twitterDescription,
    },
  };
}

export function BurnoutFamilyPage({ pageUrl, tool }: BurnoutFamilyPageProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: tool.toolMetadata.title,
      description: tool.toolMetadata.description,
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
          name: tool.toolMetadata.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqItems.map((item) => ({
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
        <BurnoutFamilyPageHeader tool={tool} />
        <main>
          <BurnoutFamilyHero tool={tool} />
          <BurnoutFamilyExperience toolSlug={tool.slug as BurnoutFamilyToolSlug} />
          <ToolPageTrustSections />
          <BurnoutFamilyEditorial tool={tool} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
