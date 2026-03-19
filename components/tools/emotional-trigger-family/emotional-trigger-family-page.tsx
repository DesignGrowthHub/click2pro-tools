import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { EmotionalTriggerFamilyTool } from "@/data/emotional-trigger-family";
import styles from "@/components/tools/emotional-trigger-decoder/emotional-trigger-decoder.module.css";
import { EmotionalTriggerFamilyExperience } from "./emotional-trigger-family-experience";

type EmotionalTriggerFamilyPageProps = {
  pageUrl: string;
  tool: EmotionalTriggerFamilyTool;
};

export function buildEmotionalTriggerFamilyMetadata(tool: EmotionalTriggerFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function EmotionalTriggerFamilyPage({ pageUrl, tool }: EmotionalTriggerFamilyPageProps) {
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
          <EmotionalTriggerFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
