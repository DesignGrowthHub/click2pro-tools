import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { CommunicationStyleFamilyTool } from "@/data/communication-style-family";
import styles from "@/components/tools/communication-style-mirror/communication-style-mirror.module.css";
import { CommunicationStyleFamilyExperience } from "./communication-style-family-experience";

type CommunicationStyleFamilyPageProps = {
  pageUrl: string;
  tool: CommunicationStyleFamilyTool;
};

export function buildCommunicationStyleFamilyMetadata(tool: CommunicationStyleFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function CommunicationStyleFamilyPage({ pageUrl, tool }: CommunicationStyleFamilyPageProps) {
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
          <CommunicationStyleFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
