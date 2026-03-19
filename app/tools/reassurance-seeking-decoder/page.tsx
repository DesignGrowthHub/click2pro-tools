import type { Metadata } from "next";
import {
  buildReassuranceSeekingFamilyMetadata,
  ReassuranceSeekingFamilyPage,
} from "@/components/tools/reassurance-seeking-family/reassurance-seeking-family-page";
import { reassuranceSeekingFamilyToolRegistry } from "@/data/reassurance-seeking-family";

const pageUrl = "https://click2pro.com/tools/reassurance-seeking-decoder";
const tool = reassuranceSeekingFamilyToolRegistry["reassurance-seeking-decoder"];

export const metadata: Metadata = buildReassuranceSeekingFamilyMetadata(tool, pageUrl);

export default function ReassuranceSeekingDecoderPage() {
  return <ReassuranceSeekingFamilyPage pageUrl={pageUrl} tool={tool} />;
}
