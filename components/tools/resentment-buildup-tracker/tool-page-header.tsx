import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Tracker", href: "#interactive-resentment-tracker" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Resentment buildup tracker sections"
      ctaHref="#interactive-resentment-tracker"
      ctaLabel="Start Tracking"
      items={navigation}
    />
  );
}
