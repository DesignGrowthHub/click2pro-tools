import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { RelationshipClarityFamilyTool } from "@/data/relationship-clarity-family";
import styles from "@/components/tools/relationship-clarity-check/relationship-clarity-check.module.css";
import { RelationshipClarityFamilyExperience } from "./relationship-clarity-family-experience";

type RelationshipClarityFamilyPageProps = {
  pageUrl: string;
  tool: RelationshipClarityFamilyTool;
};

export function buildRelationshipClarityFamilyMetadata(tool: RelationshipClarityFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function RelationshipClarityFamilyPage({ pageUrl, tool }: RelationshipClarityFamilyPageProps) {
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
          <RelationshipClarityFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
