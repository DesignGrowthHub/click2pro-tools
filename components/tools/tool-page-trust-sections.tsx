import { testimonials, trustCards, usageStats } from "@/data/tools-home";
import { Testimonials } from "./testimonials";
import { TrustStrip } from "./trust-strip";
import { ValueMetrics } from "./value-metrics";

export function ToolPageTrustSections() {
  return (
    <>
      <TrustStrip cards={trustCards} />
      <Testimonials testimonials={testimonials} />
      <ValueMetrics stats={usageStats} />
    </>
  );
}
