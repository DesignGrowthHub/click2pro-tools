import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { WorkStressFamilyTool } from "@/data/work-stress-family";
import styles from "@/components/tools/work-stress-load-mapper/work-stress-load-mapper.module.css";
import { WorkStressFamilyExperience } from "./work-stress-family-experience";

type WorkStressFamilyPageProps = {
  pageUrl: string;
  tool: WorkStressFamilyTool;
};

export function buildWorkStressFamilyMetadata(tool: WorkStressFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function WorkStressFamilyPage({ pageUrl, tool }: WorkStressFamilyPageProps) {
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
          <WorkStressFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
