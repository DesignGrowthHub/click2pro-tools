import type { Metadata } from "next";
import {
  buildInnerCriticFamilyMetadata,
  InnerCriticFamilyPage,
} from "@/components/tools/inner-critic-family/inner-critic-family-page";
import { innerCriticFamilyToolRegistry } from "@/data/inner-critic-family";

const pageUrl = "https://click2pro.com/tools/inner-critic-intensity-scan";
const tool = innerCriticFamilyToolRegistry["inner-critic-intensity-scan"];

export const metadata: Metadata = buildInnerCriticFamilyMetadata(tool, pageUrl);

export default function InnerCriticIntensityScanPage() {
  return <InnerCriticFamilyPage pageUrl={pageUrl} tool={tool} />;
}
