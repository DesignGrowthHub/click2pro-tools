import type { SleepPressureFamilyTool } from "@/data/sleep-pressure-family";

type SleepPressureFamilyExperienceProps = {
  tool: SleepPressureFamilyTool;
};

export function SleepPressureFamilyExperience({ tool }: SleepPressureFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
