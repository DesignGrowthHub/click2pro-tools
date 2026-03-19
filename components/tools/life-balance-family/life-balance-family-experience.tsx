import type { LifeBalanceFamilyTool } from "@/data/life-balance-family";

type LifeBalanceFamilyExperienceProps = {
  tool: LifeBalanceFamilyTool;
};

export function LifeBalanceFamilyExperience({ tool }: LifeBalanceFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
