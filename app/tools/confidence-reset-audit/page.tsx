import type { Metadata } from "next";
import {
  buildConfidenceResetFamilyMetadata,
  ConfidenceResetFamilyPage,
} from "@/components/tools/confidence-reset-family/confidence-reset-family-page";
import { confidenceResetFamilyToolRegistry } from "@/data/confidence-reset-family";

const pageUrl = "https://click2pro.com/tools/confidence-reset-audit";
const tool = confidenceResetFamilyToolRegistry["confidence-reset-audit"];

export const metadata: Metadata = buildConfidenceResetFamilyMetadata(tool, pageUrl);

export default function ConfidenceResetAuditPage() {
  return <ConfidenceResetFamilyPage pageUrl={pageUrl} tool={tool} />;
}
