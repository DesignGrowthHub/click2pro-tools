import type { Metadata } from "next";
import {
  buildAttachmentPatternFamilyMetadata,
  AttachmentPatternFamilyPage,
} from "@/components/tools/attachment-pattern-family/attachment-pattern-family-page";
import { attachmentPatternFamilyToolRegistry } from "@/data/attachment-pattern-family";

const pageUrl = "https://click2pro.com/tools/attachment-pattern-spotter";
const tool = attachmentPatternFamilyToolRegistry["attachment-pattern-spotter"];

export const metadata: Metadata = buildAttachmentPatternFamilyMetadata(tool, pageUrl);

export default function AttachmentPatternSpotterPage() {
  return <AttachmentPatternFamilyPage pageUrl={pageUrl} tool={tool} />;
}
