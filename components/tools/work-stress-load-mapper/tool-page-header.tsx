import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Map", href: "#interactive-work-stress-load-mapper" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Work stress load mapper sections"
      ctaHref="#interactive-work-stress-load-mapper"
      ctaLabel="Start Mapping"
      items={navigation}
    />
  );
}
