import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Audit", href: "#interactive-confidence-audit" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Confidence reset audit sections"
      ctaHref="#interactive-confidence-audit"
      ctaLabel="Start Audit"
      items={navigation}
    />
  );
}
