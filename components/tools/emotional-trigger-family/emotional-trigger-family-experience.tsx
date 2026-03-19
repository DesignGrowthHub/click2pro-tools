import type { EmotionalTriggerFamilyTool } from "@/data/emotional-trigger-family";

type EmotionalTriggerFamilyExperienceProps = {
  tool: EmotionalTriggerFamilyTool;
};

export function EmotionalTriggerFamilyExperience({ tool }: EmotionalTriggerFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
