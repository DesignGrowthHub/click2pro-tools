import type { Metadata } from "next";
import { SiteFooter } from "@/components/tools/site-footer";
import { ToolPageTrustSections } from "@/components/tools/tool-page-trust-sections";
import { buildFamilyMetadata, buildFamilyStructuredData } from "@/data/family-engine";
import type { BoundaryStrengthFamilyTool } from "@/data/boundary-strength-family";
import styles from "@/components/tools/boundary-strength-scanner/boundary-strength-scanner.module.css";
import { BoundaryStrengthFamilyExperience } from "./boundary-strength-family-experience";

type BoundaryStrengthFamilyPageProps = {
  pageUrl: string;
  tool: BoundaryStrengthFamilyTool;
};

export function buildBoundaryStrengthFamilyMetadata(tool: BoundaryStrengthFamilyTool, pageUrl: string): Metadata {
  return buildFamilyMetadata(tool, pageUrl);
}

export function BoundaryStrengthFamilyPage({ pageUrl, tool }: BoundaryStrengthFamilyPageProps) {
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
          <BoundaryStrengthFamilyExperience tool={tool} />
          <ToolPageTrustSections />
          {tool.renderEditorial(tool)}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
