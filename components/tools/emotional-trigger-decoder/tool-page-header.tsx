import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Decoder", href: "#interactive-decoder" },
  { label: "Insights", href: "#visual-insights" },
  { label: "What It Means", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Emotional trigger decoder sections"
      ctaHref="#interactive-decoder"
      ctaLabel="Start Decoding"
      items={navigation}
    />
  );
}
