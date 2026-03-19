import type { DailyFunctioningFamilyTool } from "@/data/daily-functioning-family";

type DailyFunctioningFamilyExperienceProps = {
  tool: DailyFunctioningFamilyTool;
};

export function DailyFunctioningFamilyExperience({ tool }: DailyFunctioningFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
