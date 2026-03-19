import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { InnerCriticFamilyTool } from "@/data/inner-critic-family";
import styles from "@/components/tools/inner-critic-intensity-scan/inner-critic-intensity-scan.module.css";
import { InnerCriticFamilyExperience } from "./inner-critic-family-experience";

type InnerCriticFamilyPageProps = {
  pageUrl: string;
  tool: InnerCriticFamilyTool;
};

export function buildInnerCriticFamilyMetadata(tool: InnerCriticFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function InnerCriticFamilyPage({ pageUrl, tool }: InnerCriticFamilyPageProps) {
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
          <InnerCriticFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
