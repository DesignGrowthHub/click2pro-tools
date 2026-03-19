import type { DecisionFatigueFamilyTool } from "@/data/decision-fatigue-family";

type DecisionFatigueFamilyExperienceProps = {
  tool: DecisionFatigueFamilyTool;
};

export function DecisionFatigueFamilyExperience({ tool }: DecisionFatigueFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
