import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { SiteHeader } from "@/components/tools/site-header";
import { Testimonials } from "@/components/tools/testimonials";
import { ToolsDiscoveryHome } from "@/components/tools/tools-discovery-home";
import { TrustStrip } from "@/components/tools/trust-strip";
import { ValueMetrics } from "@/components/tools/value-metrics";
import styles from "@/components/tools/tools-home.module.css";
import { normalizeToolClusterSlug } from "@/data/tool-clusters";
import {
  defaultToolSort,
  pathways,
  testimonials,
  trustCards,
  type ToolSort,
  usageStats,
} from "@/data/tools-home";
import { Pathways } from "@/components/tools/pathways";

type SearchValue = string | string[] | undefined;

type ToolsPageProps = {
  searchParams?: Promise<Record<string, SearchValue>>;
};

export const metadata: Metadata = {
  title: "Psychology Tools Library: Search Burnout, Confidence, Relationship, and Focus Tools",
  description:
    "Search a premium library of psychology tools for burnout, overthinking, confidence, attachment, work stress, emotional triggers, and everyday recovery patterns.",
  keywords: [
    "psychology tools",
    "mental health tools",
    "self-assessment tools",
    "burnout tools",
    "focus tools",
    "relationship tools",
  ],
  alternates: {
    canonical: "/tools",
  },
};

function takeFirst(value: SearchValue) {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeSort(value: string | undefined): ToolSort {
  if (value === "quickest" || value === "alphabetical") {
    return value;
  }

  return defaultToolSort;
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentQuery = takeFirst(resolvedSearchParams.query)?.trim() ?? "";
  const requestedCluster = normalizeToolClusterSlug(
    takeFirst(resolvedSearchParams.cluster) ?? takeFirst(resolvedSearchParams.category) ?? null,
  );
  const requestedFormat = takeFirst(resolvedSearchParams.format) ?? null;
  const requestedView = takeFirst(resolvedSearchParams.view);
  const focusToolSlug = takeFirst(resolvedSearchParams.focus) ?? null;
  const currentSort = normalizeSort(takeFirst(resolvedSearchParams.sort));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Click2Pro Tools",
    description:
      "A premium searchable library of psychology tools for burnout, confidence, relationships, focus, sleep, work stress, and emotional regulation.",
    url: "https://click2pro.com/tools",
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <div className={styles.page} id="top">
        <SiteHeader />
        <main>
          <ToolsDiscoveryHome
            afterSearchContent={
              <>
                <TrustStrip cards={trustCards} />
                <Testimonials testimonials={testimonials} />
                <ValueMetrics stats={usageStats} />
              </>
            }
            initialCluster={requestedCluster}
            initialFocusToolSlug={focusToolSlug}
            initialFormat={requestedFormat}
            initialQuery={currentQuery}
            initialSort={currentSort}
            initialView={
              requestedView === "popular" ||
              requestedView === "recommended" ||
              requestedView === "new"
                ? requestedView
                : "all"
            }
          />
          <Pathways pathways={pathways} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
