import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { LifeBalanceFamilyTool } from "@/data/life-balance-family";
import styles from "@/components/tools/life-balance-visualizer/life-balance-visualizer.module.css";
import { LifeBalanceFamilyExperience } from "./life-balance-family-experience";

type LifeBalanceFamilyPageProps = {
  pageUrl: string;
  tool: LifeBalanceFamilyTool;
};

export function buildLifeBalanceFamilyMetadata(tool: LifeBalanceFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function LifeBalanceFamilyPage({ pageUrl, tool }: LifeBalanceFamilyPageProps) {
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
          <LifeBalanceFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
