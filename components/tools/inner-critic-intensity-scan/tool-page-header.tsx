import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Scan", href: "#interactive-inner-critic-scan" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Inner critic intensity scan sections"
      ctaHref="#interactive-inner-critic-scan"
      ctaLabel="Start Scan"
      items={navigation}
    />
  );
}
