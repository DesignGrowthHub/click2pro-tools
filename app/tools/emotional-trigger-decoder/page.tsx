import type { Metadata } from "next";
import {
  buildEmotionalTriggerFamilyMetadata,
  EmotionalTriggerFamilyPage,
} from "@/components/tools/emotional-trigger-family/emotional-trigger-family-page";
import { emotionalTriggerFamilyToolRegistry } from "@/data/emotional-trigger-family";

const pageUrl = "https://click2pro.com/tools/emotional-trigger-decoder";
const tool = emotionalTriggerFamilyToolRegistry["emotional-trigger-decoder"];

export const metadata: Metadata = buildEmotionalTriggerFamilyMetadata(tool, pageUrl);

export default function EmotionalTriggerDecoderPage() {
  return <EmotionalTriggerFamilyPage pageUrl={pageUrl} tool={tool} />;
}
