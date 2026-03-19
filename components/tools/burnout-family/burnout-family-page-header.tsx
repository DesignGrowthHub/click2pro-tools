import { ToolPageNav } from "@/components/tools/tool-page-nav";
import type { BurnoutFamilyTool } from "@/data/burnout-family";

type BurnoutFamilyPageHeaderProps = {
  tool: BurnoutFamilyTool;
};

const navigation = [
  { label: "Check", href: "#interactive-tool" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Guide", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function BurnoutFamilyPageHeader({ tool }: BurnoutFamilyPageHeaderProps) {
  return (
    <ToolPageNav
      ariaLabel={`${tool.toolMetadata.title} sections`}
      ctaHref="#interactive-tool"
      ctaLabel={tool.toolMetadata.primaryCta}
      items={navigation}
    />
  );
}
