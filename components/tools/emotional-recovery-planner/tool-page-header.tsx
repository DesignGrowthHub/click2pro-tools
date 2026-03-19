import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Planner", href: "#interactive-planner" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Emotional recovery planner sections"
      ctaHref="#interactive-planner"
      ctaLabel="Build My Plan"
      items={navigation}
    />
  );
}
