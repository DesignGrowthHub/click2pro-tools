import type { Metadata } from "next";
import {
  buildFocusFrictionFamilyMetadata,
  FocusFrictionFamilyPage,
} from "@/components/tools/focus-friction-family/focus-friction-family-page";
import { focusFrictionFamilyToolRegistry } from "@/data/focus-friction-family";

const pageUrl = "https://click2pro.com/tools/focus-friction-audit";
const tool = focusFrictionFamilyToolRegistry["focus-friction-audit"];

export const metadata: Metadata = buildFocusFrictionFamilyMetadata(tool, pageUrl);

export default function FocusFrictionAuditPage() {
  return <FocusFrictionFamilyPage pageUrl={pageUrl} tool={tool} />;
}
