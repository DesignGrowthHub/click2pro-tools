import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { AttachmentPatternFamilyTool } from "@/data/attachment-pattern-family";
import styles from "@/components/tools/attachment-pattern-spotter/attachment-pattern-spotter.module.css";
import { AttachmentPatternFamilyExperience } from "./attachment-pattern-family-experience";

type AttachmentPatternFamilyPageProps = {
  pageUrl: string;
  tool: AttachmentPatternFamilyTool;
};

export function buildAttachmentPatternFamilyMetadata(tool: AttachmentPatternFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function AttachmentPatternFamilyPage({ pageUrl, tool }: AttachmentPatternFamilyPageProps) {
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
          <AttachmentPatternFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
