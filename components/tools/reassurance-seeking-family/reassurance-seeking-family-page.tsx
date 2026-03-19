import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { ReassuranceSeekingFamilyTool } from "@/data/reassurance-seeking-family";
import styles from "@/components/tools/reassurance-seeking-decoder/reassurance-seeking-decoder.module.css";
import { ReassuranceSeekingFamilyExperience } from "./reassurance-seeking-family-experience";

type ReassuranceSeekingFamilyPageProps = {
  pageUrl: string;
  tool: ReassuranceSeekingFamilyTool;
};

export function buildReassuranceSeekingFamilyMetadata(tool: ReassuranceSeekingFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function ReassuranceSeekingFamilyPage({ pageUrl, tool }: ReassuranceSeekingFamilyPageProps) {
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
          <ReassuranceSeekingFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
