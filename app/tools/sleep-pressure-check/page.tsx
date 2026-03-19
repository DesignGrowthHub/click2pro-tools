import type { Metadata } from "next";
import {
  buildSleepPressureFamilyMetadata,
  SleepPressureFamilyPage,
} from "@/components/tools/sleep-pressure-family/sleep-pressure-family-page";
import { sleepPressureFamilyToolRegistry } from "@/data/sleep-pressure-family";

const pageUrl = "https://click2pro.com/tools/sleep-pressure-check";
const tool = sleepPressureFamilyToolRegistry["sleep-pressure-check"];

export const metadata: Metadata = buildSleepPressureFamilyMetadata(tool, pageUrl);

export default function SleepPressureCheckPage() {
  return <SleepPressureFamilyPage pageUrl={pageUrl} tool={tool} />;
}
