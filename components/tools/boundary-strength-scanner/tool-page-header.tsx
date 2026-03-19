import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Check", href: "#interactive-signal-check" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Boundary strength scanner sections"
      ctaHref="#interactive-signal-check"
      ctaLabel="Start Check"
      items={navigation}
    />
  );
}
