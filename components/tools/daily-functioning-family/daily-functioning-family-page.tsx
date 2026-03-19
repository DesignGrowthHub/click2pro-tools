import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { DailyFunctioningFamilyTool } from "@/data/daily-functioning-family";
import styles from "@/components/tools/daily-functioning-stability-check/daily-functioning-stability-check.module.css";
import { DailyFunctioningFamilyExperience } from "./daily-functioning-family-experience";

type DailyFunctioningFamilyPageProps = {
  pageUrl: string;
  tool: DailyFunctioningFamilyTool;
};

export function buildDailyFunctioningFamilyMetadata(tool: DailyFunctioningFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function DailyFunctioningFamilyPage({ pageUrl, tool }: DailyFunctioningFamilyPageProps) {
  const structuredData = buildFamilyStructuredData(tool, pageUrl);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <div className={styles.page}>
        {tool.renderHeader(tool)}
        <main>
          {tool.renderHero(tool)}
          <DailyFunctioningFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
