import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Mirror", href: "#interactive-communication-style-mirror" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Communication style mirror sections"
      ctaHref="#interactive-communication-style-mirror"
      ctaLabel="Start Mirror"
      items={navigation}
    />
  );
}
