import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { SelfSabotageFamilyTool } from "@/data/self-sabotage-family";
import styles from "@/components/tools/self-sabotage-pattern-finder/self-sabotage-pattern-finder.module.css";
import { SelfSabotageFamilyExperience } from "./self-sabotage-family-experience";

type SelfSabotageFamilyPageProps = {
  pageUrl: string;
  tool: SelfSabotageFamilyTool;
};

export function buildSelfSabotageFamilyMetadata(tool: SelfSabotageFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function SelfSabotageFamilyPage({ pageUrl, tool }: SelfSabotageFamilyPageProps) {
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
          <SelfSabotageFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
