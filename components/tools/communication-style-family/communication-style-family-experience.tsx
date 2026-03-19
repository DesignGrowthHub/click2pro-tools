import type { CommunicationStyleFamilyTool } from "@/data/communication-style-family";

type CommunicationStyleFamilyExperienceProps = {
  tool: CommunicationStyleFamilyTool;
};

export function CommunicationStyleFamilyExperience({ tool }: CommunicationStyleFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
