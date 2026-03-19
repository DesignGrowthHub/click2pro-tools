import type { ConfidenceResetFamilyTool } from "@/data/confidence-reset-family";

type ConfidenceResetFamilyExperienceProps = {
  tool: ConfidenceResetFamilyTool;
};

export function ConfidenceResetFamilyExperience({ tool }: ConfidenceResetFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
