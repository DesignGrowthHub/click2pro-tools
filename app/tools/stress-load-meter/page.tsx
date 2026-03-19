import type { Metadata } from "next";
import {
  buildBurnoutFamilyMetadata,
  BurnoutFamilyPage,
} from "@/components/tools/burnout-family/burnout-family-page";
import { stressLoadMeterTool } from "@/data/stress-load-meter";

const pageUrl = "https://click2pro.com/tools/stress-load-meter";

export const metadata: Metadata = buildBurnoutFamilyMetadata(
  stressLoadMeterTool,
  pageUrl,
);

export default function StressLoadMeterPage() {
  return <BurnoutFamilyPage pageUrl={pageUrl} tool={stressLoadMeterTool} />;
}
