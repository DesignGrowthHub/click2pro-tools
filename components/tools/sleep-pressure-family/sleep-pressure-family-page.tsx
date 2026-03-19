import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { SleepPressureFamilyTool } from "@/data/sleep-pressure-family";
import styles from "@/components/tools/sleep-pressure-check/sleep-pressure-check.module.css";
import { SleepPressureFamilyExperience } from "./sleep-pressure-family-experience";

type SleepPressureFamilyPageProps = {
  pageUrl: string;
  tool: SleepPressureFamilyTool;
};

export function buildSleepPressureFamilyMetadata(tool: SleepPressureFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function SleepPressureFamilyPage({ pageUrl, tool }: SleepPressureFamilyPageProps) {
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
          <SleepPressureFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
