import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Check", href: "#interactive-tool" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Sleep pressure check sections"
      ctaHref="#interactive-tool"
      ctaLabel="Start Check"
      items={navigation}
    />
  );
}
