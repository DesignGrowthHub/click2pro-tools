import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import type { OverthinkingFamilyTool } from "@/data/overthinking-family";
import styles from "@/components/tools/overthinking-loop-check/overthinking-loop-check.module.css";
import { OverthinkingFamilyEditorial } from "./overthinking-family-editorial";
import { OverthinkingFamilyExperience } from "./overthinking-family-experience";
import { OverthinkingFamilyHero } from "./overthinking-family-hero";
import { OverthinkingFamilyPageHeader } from "./overthinking-family-page-header";

type OverthinkingFamilyPageProps = {
  pageUrl: string;
  tool: OverthinkingFamilyTool;
};

export function buildOverthinkingFamilyMetadata(
  tool: OverthinkingFamilyTool,
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

export function OverthinkingFamilyPage({
  pageUrl,
  tool,
}: OverthinkingFamilyPageProps) {
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
        <OverthinkingFamilyPageHeader tool={tool} />
        <main>
          <OverthinkingFamilyHero tool={tool} />
          <OverthinkingFamilyExperience toolSlug={tool.slug} />
          <ToolPageTrustSections />
          <OverthinkingFamilyEditorial tool={tool} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
