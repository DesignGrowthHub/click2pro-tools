import type { FocusFrictionFamilyTool } from "@/data/focus-friction-family";

type FocusFrictionFamilyExperienceProps = {
  tool: FocusFrictionFamilyTool;
};

export function FocusFrictionFamilyExperience({ tool }: FocusFrictionFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
