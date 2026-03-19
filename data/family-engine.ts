import type { Metadata } from "next";

export type FamilyPageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type FamilyToolMetadata = {
  title: string;
  description: string;
};

export type FamilyFaqItem = {
  question: string;
  answer: string;
};

export type FamilyToolBase<TSlug extends string = string> = {
  slug: TSlug;
  pageMetadata: FamilyPageMetadata;
  toolMetadata: FamilyToolMetadata;
  faqItems: FamilyFaqItem[];
};

export function buildFamilyMetadata<TSlug extends string>(
  tool: FamilyToolBase<TSlug>,
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

export function buildFamilyStructuredData<TSlug extends string>(
  tool: FamilyToolBase<TSlug>,
  pageUrl: string,
) {
  return [
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
}
