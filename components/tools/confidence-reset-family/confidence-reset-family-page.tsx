import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { ConfidenceResetFamilyTool } from "@/data/confidence-reset-family";
import styles from "@/components/tools/confidence-reset-audit/confidence-reset-audit.module.css";
import { ConfidenceResetFamilyExperience } from "./confidence-reset-family-experience";

type ConfidenceResetFamilyPageProps = {
  pageUrl: string;
  tool: ConfidenceResetFamilyTool;
};

export function buildConfidenceResetFamilyMetadata(tool: ConfidenceResetFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function ConfidenceResetFamilyPage({ pageUrl, tool }: ConfidenceResetFamilyPageProps) {
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
          <ConfidenceResetFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
