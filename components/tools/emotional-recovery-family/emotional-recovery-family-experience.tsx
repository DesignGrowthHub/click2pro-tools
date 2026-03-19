import type { EmotionalRecoveryFamilyTool } from "@/data/emotional-recovery-family";

type EmotionalRecoveryFamilyExperienceProps = {
  tool: EmotionalRecoveryFamilyTool;
};

export function EmotionalRecoveryFamilyExperience({ tool }: EmotionalRecoveryFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
