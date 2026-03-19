import type { Metadata } from "next";
import {
  buildBoundaryStrengthFamilyMetadata,
  BoundaryStrengthFamilyPage,
} from "@/components/tools/boundary-strength-family/boundary-strength-family-page";
import { boundaryStrengthFamilyToolRegistry } from "@/data/boundary-strength-family";

const pageUrl = "https://click2pro.com/tools/boundary-strength-scanner";
const tool = boundaryStrengthFamilyToolRegistry["boundary-strength-scanner"];

export const metadata: Metadata = buildBoundaryStrengthFamilyMetadata(tool, pageUrl);

export default function BoundaryStrengthScannerPage() {
  return <BoundaryStrengthFamilyPage pageUrl={pageUrl} tool={tool} />;
}
