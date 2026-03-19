import type { ReassuranceSeekingFamilyTool } from "@/data/reassurance-seeking-family";

type ReassuranceSeekingFamilyExperienceProps = {
  tool: ReassuranceSeekingFamilyTool;
};

export function ReassuranceSeekingFamilyExperience({ tool }: ReassuranceSeekingFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
