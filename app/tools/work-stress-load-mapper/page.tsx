import type { Metadata } from "next";
import {
  buildWorkStressFamilyMetadata,
  WorkStressFamilyPage,
} from "@/components/tools/work-stress-family/work-stress-family-page";
import { workStressFamilyToolRegistry } from "@/data/work-stress-family";

const pageUrl = "https://click2pro.com/tools/work-stress-load-mapper";
const tool = workStressFamilyToolRegistry["work-stress-load-mapper"];

export const metadata: Metadata = buildWorkStressFamilyMetadata(tool, pageUrl);

export default function WorkStressLoadMapperPage() {
  return <WorkStressFamilyPage pageUrl={pageUrl} tool={tool} />;
}
