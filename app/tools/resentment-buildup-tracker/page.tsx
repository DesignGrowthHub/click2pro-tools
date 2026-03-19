import type { Metadata } from "next";
import {
  buildResentmentBuildupFamilyMetadata,
  ResentmentBuildupFamilyPage,
} from "@/components/tools/resentment-buildup-family/resentment-buildup-family-page";
import { resentmentBuildupFamilyToolRegistry } from "@/data/resentment-buildup-family";

const pageUrl = "https://click2pro.com/tools/resentment-buildup-tracker";
const tool = resentmentBuildupFamilyToolRegistry["resentment-buildup-tracker"];

export const metadata: Metadata = buildResentmentBuildupFamilyMetadata(tool, pageUrl);

export default function ResentmentBuildupTrackerPage() {
  return <ResentmentBuildupFamilyPage pageUrl={pageUrl} tool={tool} />;
}
