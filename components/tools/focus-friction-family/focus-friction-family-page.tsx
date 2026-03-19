import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { FocusFrictionFamilyTool } from "@/data/focus-friction-family";
import styles from "@/components/tools/focus-friction-audit/focus-friction-audit.module.css";
import { FocusFrictionFamilyExperience } from "./focus-friction-family-experience";

type FocusFrictionFamilyPageProps = {
  pageUrl: string;
  tool: FocusFrictionFamilyTool;
};

export function buildFocusFrictionFamilyMetadata(tool: FocusFrictionFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function FocusFrictionFamilyPage({ pageUrl, tool }: FocusFrictionFamilyPageProps) {
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
          <FocusFrictionFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
