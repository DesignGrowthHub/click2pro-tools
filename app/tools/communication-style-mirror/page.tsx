import type { Metadata } from "next";
import {
  buildCommunicationStyleFamilyMetadata,
  CommunicationStyleFamilyPage,
} from "@/components/tools/communication-style-family/communication-style-family-page";
import { communicationStyleFamilyToolRegistry } from "@/data/communication-style-family";

const pageUrl = "https://click2pro.com/tools/communication-style-mirror";
const tool = communicationStyleFamilyToolRegistry["communication-style-mirror"];

export const metadata: Metadata = buildCommunicationStyleFamilyMetadata(tool, pageUrl);

export default function CommunicationStyleMirrorPage() {
  return <CommunicationStyleFamilyPage pageUrl={pageUrl} tool={tool} />;
}
