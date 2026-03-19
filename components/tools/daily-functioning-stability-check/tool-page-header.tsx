import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Check", href: "#interactive-daily-functioning-stability-check" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Daily functioning stability check sections"
      ctaHref="#interactive-daily-functioning-stability-check"
      ctaLabel="Start Check"
      items={navigation}
    />
  );
}
