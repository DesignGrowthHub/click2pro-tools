import type { Metadata } from "next";
import {
  buildEmotionalRecoveryFamilyMetadata,
  EmotionalRecoveryFamilyPage,
} from "@/components/tools/emotional-recovery-family/emotional-recovery-family-page";
import { emotionalRecoveryFamilyToolRegistry } from "@/data/emotional-recovery-family";

const pageUrl = "https://click2pro.com/tools/emotional-recovery-planner";
const tool = emotionalRecoveryFamilyToolRegistry["emotional-recovery-planner"];

export const metadata: Metadata = buildEmotionalRecoveryFamilyMetadata(tool, pageUrl);

export default function EmotionalRecoveryPlannerPage() {
  return <EmotionalRecoveryFamilyPage pageUrl={pageUrl} tool={tool} />;
}
