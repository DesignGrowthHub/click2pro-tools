import type { Metadata } from "next";
import {
  buildRelationshipClarityFamilyMetadata,
  RelationshipClarityFamilyPage,
} from "@/components/tools/relationship-clarity-family/relationship-clarity-family-page";
import { relationshipClarityFamilyToolRegistry } from "@/data/relationship-clarity-family";

const pageUrl = "https://click2pro.com/tools/relationship-clarity-check";
const tool = relationshipClarityFamilyToolRegistry["relationship-clarity-check"];

export const metadata: Metadata = buildRelationshipClarityFamilyMetadata(tool, pageUrl);

export default function RelationshipClarityCheckPage() {
  return <RelationshipClarityFamilyPage pageUrl={pageUrl} tool={tool} />;
}
