import type { SelfSabotageFamilyTool } from "@/data/self-sabotage-family";

type SelfSabotageFamilyExperienceProps = {
  tool: SelfSabotageFamilyTool;
};

export function SelfSabotageFamilyExperience({ tool }: SelfSabotageFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
