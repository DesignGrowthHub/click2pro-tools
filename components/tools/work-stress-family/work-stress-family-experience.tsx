import type { WorkStressFamilyTool } from "@/data/work-stress-family";

type WorkStressFamilyExperienceProps = {
  tool: WorkStressFamilyTool;
};

export function WorkStressFamilyExperience({ tool }: WorkStressFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
