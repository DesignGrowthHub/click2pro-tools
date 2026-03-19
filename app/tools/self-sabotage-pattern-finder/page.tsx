import type { Metadata } from "next";
import {
  buildSelfSabotageFamilyMetadata,
  SelfSabotageFamilyPage,
} from "@/components/tools/self-sabotage-family/self-sabotage-family-page";
import { selfSabotageFamilyToolRegistry } from "@/data/self-sabotage-family";

const pageUrl = "https://click2pro.com/tools/self-sabotage-pattern-finder";
const tool = selfSabotageFamilyToolRegistry["self-sabotage-pattern-finder"];

export const metadata: Metadata = buildSelfSabotageFamilyMetadata(tool, pageUrl);

export default function SelfSabotagePatternFinderPage() {
  return <SelfSabotageFamilyPage pageUrl={pageUrl} tool={tool} />;
}
