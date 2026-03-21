import { ToolAssessmentLinks } from "@/components/tools/tool-assessment-links";
import { ToolSupportLinks } from "@/components/tools/tool-support-links";
import { ToolTopicInfographics } from "@/components/tools/tool-infographics/tool-topic-infographics";

export function ToolLowerPageAdditions() {
  return (
    <>
      <ToolTopicInfographics />
      <ToolAssessmentLinks />
      <ToolSupportLinks />
    </>
  );
}
