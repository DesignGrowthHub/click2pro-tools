import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Check", href: "#interactive-clarity-check" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Relationship clarity check sections"
      ctaHref="#interactive-clarity-check"
      ctaLabel="Start Check"
      items={navigation}
    />
  );
}
