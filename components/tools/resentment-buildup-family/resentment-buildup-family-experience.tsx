import type { ResentmentBuildupFamilyTool } from "@/data/resentment-buildup-family";

type ResentmentBuildupFamilyExperienceProps = {
  tool: ResentmentBuildupFamilyTool;
};

export function ResentmentBuildupFamilyExperience({ tool }: ResentmentBuildupFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
