import type { Metadata } from "next";
import {
  buildDailyFunctioningFamilyMetadata,
  DailyFunctioningFamilyPage,
} from "@/components/tools/daily-functioning-family/daily-functioning-family-page";
import { dailyFunctioningFamilyToolRegistry } from "@/data/daily-functioning-family";

const pageUrl = "https://click2pro.com/tools/daily-functioning-stability-check";
const tool = dailyFunctioningFamilyToolRegistry["daily-functioning-stability-check"];

export const metadata: Metadata = buildDailyFunctioningFamilyMetadata(tool, pageUrl);

export default function DailyFunctioningStabilityCheckPage() {
  return <DailyFunctioningFamilyPage pageUrl={pageUrl} tool={tool} />;
}
