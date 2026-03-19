import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { DecisionFatigueFamilyTool } from "@/data/decision-fatigue-family";
import styles from "@/components/tools/decision-fatigue-simulator/decision-fatigue-simulator.module.css";
import { DecisionFatigueFamilyExperience } from "./decision-fatigue-family-experience";

type DecisionFatigueFamilyPageProps = {
  pageUrl: string;
  tool: DecisionFatigueFamilyTool;
};

export function buildDecisionFatigueFamilyMetadata(tool: DecisionFatigueFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function DecisionFatigueFamilyPage({ pageUrl, tool }: DecisionFatigueFamilyPageProps) {
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
          <DecisionFatigueFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
