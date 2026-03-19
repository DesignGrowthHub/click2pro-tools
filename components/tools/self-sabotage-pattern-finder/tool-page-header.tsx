import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Finder", href: "#interactive-self-sabotage-finder" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Self-sabotage pattern finder sections"
      ctaHref="#interactive-self-sabotage-finder"
      ctaLabel="Start Finder"
      items={navigation}
    />
  );
}
