import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Simulator", href: "#interactive-simulator" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Decision fatigue simulator sections"
      ctaHref="#interactive-simulator"
      ctaLabel="Start Simulator"
      items={navigation}
    />
  );
}
