import { ToolPageNav } from "@/components/tools/tool-page-nav";

const navigation = [
  { label: "Decoder", href: "#interactive-reassurance-decoder" },
  { label: "Insights", href: "#visual-insights" },
  { label: "Meaning", href: "#what-this-result-usually-means" },
  { label: "FAQ", href: "#faq" },
];

export function ToolPageHeader() {
  return (
    <ToolPageNav
      ariaLabel="Reassurance seeking decoder sections"
      ctaHref="#interactive-reassurance-decoder"
      ctaLabel="Start Decoder"
      items={navigation}
    />
  );
}
