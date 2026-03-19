import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Visualizer", href: "#interactive-visualizer" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Life balance visualizer sections"
      ctaHref="#interactive-visualizer"
      ctaLabel="Start Visualizer"
      items={navigation}
    />
  );
}
