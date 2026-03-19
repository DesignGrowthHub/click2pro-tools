import { ToolPageNav } from "@/components/tools/tool-page-nav";
import type { OverthinkingFamilyTool } from "@/data/overthinking-family";

type OverthinkingFamilyPageHeaderProps = {
  tool: OverthinkingFamilyTool;
};

export function OverthinkingFamilyPageHeader({
  tool,
}: OverthinkingFamilyPageHeaderProps) {
  return (
    <ToolPageNav
      ariaLabel={tool.navigation.ariaLabel}
      ctaHref="#interactive-tool"
      ctaLabel={tool.navigation.ctaLabel}
      items={tool.navigation.items}
    />
  );
}
