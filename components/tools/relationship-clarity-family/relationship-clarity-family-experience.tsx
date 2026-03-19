import type { RelationshipClarityFamilyTool } from "@/data/relationship-clarity-family";

type RelationshipClarityFamilyExperienceProps = {
  tool: RelationshipClarityFamilyTool;
};

export function RelationshipClarityFamilyExperience({ tool }: RelationshipClarityFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
