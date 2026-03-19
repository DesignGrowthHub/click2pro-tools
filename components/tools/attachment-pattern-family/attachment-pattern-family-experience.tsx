import type { AttachmentPatternFamilyTool } from "@/data/attachment-pattern-family";

type AttachmentPatternFamilyExperienceProps = {
  tool: AttachmentPatternFamilyTool;
};

export function AttachmentPatternFamilyExperience({ tool }: AttachmentPatternFamilyExperienceProps) {
  return tool.renderExperience(tool);
}
