import type { Metadata } from "next";
import {
  buildBurnoutFamilyMetadata,
  BurnoutFamilyPage,
} from "@/components/tools/burnout-family/burnout-family-page";
import { emotionalExhaustionAuditTool } from "@/data/emotional-exhaustion-audit";

const pageUrl = "https://click2pro.com/tools/emotional-exhaustion-audit";

export const metadata: Metadata = buildBurnoutFamilyMetadata(
  emotionalExhaustionAuditTool,
  pageUrl,
);

export default function EmotionalExhaustionAuditPage() {
  return <BurnoutFamilyPage pageUrl={pageUrl} tool={emotionalExhaustionAuditTool} />;
}
