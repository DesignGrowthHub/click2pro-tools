import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { ResentmentBuildupFamilyTool } from "@/data/resentment-buildup-family";
import styles from "@/components/tools/resentment-buildup-tracker/resentment-buildup-tracker.module.css";
import { ResentmentBuildupFamilyExperience } from "./resentment-buildup-family-experience";

type ResentmentBuildupFamilyPageProps = {
  pageUrl: string;
  tool: ResentmentBuildupFamilyTool;
};

export function buildResentmentBuildupFamilyMetadata(tool: ResentmentBuildupFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function ResentmentBuildupFamilyPage({ pageUrl, tool }: ResentmentBuildupFamilyPageProps) {
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
          <ResentmentBuildupFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
