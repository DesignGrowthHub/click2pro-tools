import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Profiler", href: "#interactive-profiler" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Attachment pattern spotter sections"
      ctaHref="#interactive-profiler"
      ctaLabel="Start Spotting"
      items={navigation}
    />
  );
}
