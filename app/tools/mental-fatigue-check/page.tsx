import type { Metadata } from "next";
import {
  buildBurnoutFamilyMetadata,
  BurnoutFamilyPage,
} from "@/components/tools/burnout-family/burnout-family-page";
import { mentalFatigueCheckTool } from "@/data/mental-fatigue-check";

const pageUrl = "https://click2pro.com/tools/mental-fatigue-check";

export const metadata: Metadata = buildBurnoutFamilyMetadata(
  mentalFatigueCheckTool,
  pageUrl,
);

export default function MentalFatigueCheckPage() {
  return <BurnoutFamilyPage pageUrl={pageUrl} tool={mentalFatigueCheckTool} />;
}
