import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { EmotionalRecoveryFamilyTool } from "@/data/emotional-recovery-family";
import styles from "@/components/tools/emotional-recovery-planner/emotional-recovery-planner.module.css";
import { EmotionalRecoveryFamilyExperience } from "./emotional-recovery-family-experience";

type EmotionalRecoveryFamilyPageProps = {
  pageUrl: string;
  tool: EmotionalRecoveryFamilyTool;
};

export function buildEmotionalRecoveryFamilyMetadata(tool: EmotionalRecoveryFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function EmotionalRecoveryFamilyPage({ pageUrl, tool }: EmotionalRecoveryFamilyPageProps) {
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
          <EmotionalRecoveryFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
