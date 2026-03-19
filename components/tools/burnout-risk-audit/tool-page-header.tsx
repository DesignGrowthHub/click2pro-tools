import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Audit", href: "#interactive-tool" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-burnout-load-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Burnout audit sections"
      ctaHref="#interactive-tool"
      ctaLabel="Start Audit"
      items={navigation}
    />
  );
}
