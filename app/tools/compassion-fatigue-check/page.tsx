import type { Metadata } from "next";
import {
  buildBurnoutFamilyMetadata,
  BurnoutFamilyPage,
} from "@/components/tools/burnout-family/burnout-family-page";
import { compassionFatigueCheckTool } from "@/data/compassion-fatigue-check";

const pageUrl = "https://click2pro.com/tools/compassion-fatigue-check";

export const metadata: Metadata = buildBurnoutFamilyMetadata(
  compassionFatigueCheckTool,
  pageUrl,
);

export default function CompassionFatigueCheckPage() {
  return <BurnoutFamilyPage pageUrl={pageUrl} tool={compassionFatigueCheckTool} />;
}
