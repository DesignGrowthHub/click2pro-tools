import type { Metadata } from "next";
import {
  buildDecisionFatigueFamilyMetadata,
  DecisionFatigueFamilyPage,
} from "@/components/tools/decision-fatigue-family/decision-fatigue-family-page";
import { decisionFatigueFamilyToolRegistry } from "@/data/decision-fatigue-family";

const pageUrl = "https://click2pro.com/tools/decision-fatigue-simulator";
const tool = decisionFatigueFamilyToolRegistry["decision-fatigue-simulator"];

export const metadata: Metadata = buildDecisionFatigueFamilyMetadata(tool, pageUrl);

export default function DecisionFatigueSimulatorPage() {
  return <DecisionFatigueFamilyPage pageUrl={pageUrl} tool={tool} />;
}
