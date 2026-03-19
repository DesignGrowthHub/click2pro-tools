import type { BoundaryStrengthFamilyTool } from "@/data/boundary-strength-family";

type BoundaryStrengthFamilyExperienceProps = {
  tool: BoundaryStrengthFamilyTool;
};

export function BoundaryStrengthFamilyExperience({ tool }: BoundaryStrengthFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
