import type { InnerCriticFamilyTool } from "@/data/inner-critic-family";

type InnerCriticFamilyExperienceProps = {
  tool: InnerCriticFamilyTool;
};

export function InnerCriticFamilyExperience({ tool }: InnerCriticFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
