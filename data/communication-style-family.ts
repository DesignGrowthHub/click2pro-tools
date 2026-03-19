import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./communication-style-mirror";
import { communicationStyleMirrorMetadata, communicationStyleFaqItems } from "./communication-style-mirror";
import * as ConflictStyleMirrorContent from "./conflict-style-mirror";
import { ToolHero as ConflictStyleMirrorHero } from "@/components/tools/communication-style-mirror/conflict-style-mirror-hero";
import { CommunicationStyleExperience as ConflictStyleMirrorExperience } from "@/components/tools/communication-style-mirror/conflict-style-mirror-experience";
import { CommunicationStyleEditorial as ConflictStyleMirrorEditorial } from "@/components/tools/communication-style-mirror/conflict-style-mirror-editorial";
import * as RepairConversationStyleCheckContent from "./repair-conversation-style-check";
import { ToolHero as RepairConversationStyleCheckHero } from "@/components/tools/communication-style-mirror/repair-conversation-style-check-hero";
import { CommunicationStyleExperience as RepairConversationStyleCheckExperience } from "@/components/tools/communication-style-mirror/repair-conversation-style-check-experience";
import { CommunicationStyleEditorial as RepairConversationStyleCheckEditorial } from "@/components/tools/communication-style-mirror/repair-conversation-style-check-editorial";
import * as DirectnessVsSofteningCheckContent from "./directness-vs-softening-check";
import { ToolHero as DirectnessVsSofteningCheckHero } from "@/components/tools/communication-style-mirror/directness-vs-softening-check-hero";
import { CommunicationStyleExperience as DirectnessVsSofteningCheckExperience } from "@/components/tools/communication-style-mirror/directness-vs-softening-check-experience";
import { CommunicationStyleEditorial as DirectnessVsSofteningCheckEditorial } from "@/components/tools/communication-style-mirror/directness-vs-softening-check-editorial";
import * as DifficultConversationPatternMirrorContent from "./difficult-conversation-pattern-mirror";
import { ToolHero as DifficultConversationPatternMirrorHero } from "@/components/tools/communication-style-mirror/difficult-conversation-pattern-mirror-hero";
import { CommunicationStyleExperience as DifficultConversationPatternMirrorExperience } from "@/components/tools/communication-style-mirror/difficult-conversation-pattern-mirror-experience";
import { CommunicationStyleEditorial as DifficultConversationPatternMirrorEditorial } from "@/components/tools/communication-style-mirror/difficult-conversation-pattern-mirror-editorial";
import { ToolPageHeader } from "@/components/tools/communication-style-mirror/tool-page-header";
import { ToolHero } from "@/components/tools/communication-style-mirror/tool-hero";
import { CommunicationStyleExperience } from "@/components/tools/communication-style-mirror/communication-style-experience";
import { CommunicationStyleEditorial } from "@/components/tools/communication-style-mirror/communication-style-editorial";

export const communicationStyleFamilyKey = "communicationStyle";
export const communicationStyleBaseSlug = "communication-style-mirror";

export type CommunicationStyleFamilyToolSlug =
  | "communication-style-mirror"
  | "conflict-style-mirror"
  | "repair-conversation-style-check"
  | "directness-vs-softening-check"
  | "difficult-conversation-pattern-mirror";
export type CommunicationStyleFamilyTool = FamilyToolBase<CommunicationStyleFamilyToolSlug> & {
  familyKey: typeof communicationStyleFamilyKey;
  baseArchetypeSlug: typeof communicationStyleBaseSlug;
  content: typeof content;
  renderHeader: (tool: CommunicationStyleFamilyTool) => ReactElement;
  renderHero: (tool: CommunicationStyleFamilyTool) => ReactElement;
  renderExperience: (tool: CommunicationStyleFamilyTool) => ReactElement;
  renderEditorial: (tool: CommunicationStyleFamilyTool) => ReactElement;
};

export function createCommunicationStyleFamilyTool(overrides: Partial<CommunicationStyleFamilyTool> = {}): CommunicationStyleFamilyTool {
  const baseTool: CommunicationStyleFamilyTool = {
    slug: "communication-style-mirror",
    familyKey: communicationStyleFamilyKey,
    baseArchetypeSlug: communicationStyleBaseSlug,
    content: content,
    pageMetadata: {
      title: "Communication Style Mirror - See How Pressure Changes the Way You Speak",
      description: "See how pressure changes your clarity, tone, directness, defensiveness, and repair inside difficult conversations.",
      keywords: ["communication style mirror","communication style tool","difficult conversation assessment","communication under pressure","how do i communicate in conflict","conversation behavior tool"],
      openGraphTitle: "Communication Style Mirror",
      openGraphDescription: "A premium interactive tool for reading directness, clarity, warmth, defensiveness, and repair in conversations that matter.",
      twitterTitle: "Communication Style Mirror",
      twitterDescription: "See how your communication style shifts under pressure, urgency, disagreement, or emotional activation.",
    },
    toolMetadata: {
      title: communicationStyleMirrorMetadata.title,
      description: communicationStyleMirrorMetadata.description,
    },
    faqItems: communicationStyleFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(CommunicationStyleExperience),
    renderEditorial: () => createElement(CommunicationStyleEditorial),
  };

  return {
    ...baseTool,
    ...overrides,
    pageMetadata: {
      ...baseTool.pageMetadata,
      ...overrides.pageMetadata,
    },
    toolMetadata: {
      ...baseTool.toolMetadata,
      ...overrides.toolMetadata,
    },
    faqItems: overrides.faqItems ?? baseTool.faqItems,
    content: overrides.content ?? baseTool.content,
    renderHeader: overrides.renderHeader ?? baseTool.renderHeader,
    renderHero: overrides.renderHero ?? baseTool.renderHero,
    renderExperience: overrides.renderExperience ?? baseTool.renderExperience,
    renderEditorial: overrides.renderEditorial ?? baseTool.renderEditorial,
  };
}

export const communicationStyleBaseTool = createCommunicationStyleFamilyTool();

const ConflictStyleMirrorTool = createCommunicationStyleFamilyTool({
  slug: "conflict-style-mirror",
  content: ConflictStyleMirrorContent as typeof content,
  pageMetadata: {
    title: "Conflict Style Mirror - See How You Tend to Move Through Conflict",
    description: "See whether you push, soften, withdraw, overexplain, or try to repair before the issue is even clear.",
    keywords: ["conflict","style","mirror","argument","how","i","handle"],
    openGraphTitle: "Conflict Style Mirror",
    openGraphDescription: "See how you tend to move through conflict, whether you push, soften, withdraw, overexplain, or try to repair before the issue is actually clear.",
    twitterTitle: "Conflict Style Mirror",
    twitterDescription: "See how you tend to move through conflict, whether you push, soften, withdraw, overexplain, or try to repair before the issue is actually clear.",
  },
  toolMetadata: {
    title: ConflictStyleMirrorContent.communicationStyleMirrorMetadata.title,
    description: ConflictStyleMirrorContent.communicationStyleMirrorMetadata.description,
  },
  faqItems: ConflictStyleMirrorContent.communicationStyleFaqItems,
  renderHero: () => createElement(ConflictStyleMirrorHero),
  renderExperience: () => createElement(ConflictStyleMirrorExperience),
  renderEditorial: () => createElement(ConflictStyleMirrorEditorial),
});

const RepairConversationStyleCheckTool = createCommunicationStyleFamilyTool({
  slug: "repair-conversation-style-check",
  content: RepairConversationStyleCheckContent as typeof content,
  pageMetadata: {
    title: "Repair Conversation Style Check - See How You Try to Repair After Tension",
    description: "Check what your repair style looks like after misunderstanding or rupture, and whether repair becomes clearer, softer, more avoidant, or more pressured.",
    keywords: ["repair","conversation","style","check","after","conflict","apology","relationship"],
    openGraphTitle: "Repair Conversation Style Check",
    openGraphDescription: "Check what your repair style looks like after tension, misunderstanding, or rupture and whether repair becomes clearer, softer, more avoidant, or more pressured.",
    twitterTitle: "Repair Conversation Style Check",
    twitterDescription: "Check what your repair style looks like after tension, misunderstanding, or rupture and whether repair becomes clearer, softer, more avoidant, or more pressured.",
  },
  toolMetadata: {
    title: RepairConversationStyleCheckContent.communicationStyleMirrorMetadata.title,
    description: RepairConversationStyleCheckContent.communicationStyleMirrorMetadata.description,
  },
  faqItems: RepairConversationStyleCheckContent.communicationStyleFaqItems,
  renderHero: () => createElement(RepairConversationStyleCheckHero),
  renderExperience: () => createElement(RepairConversationStyleCheckExperience),
  renderEditorial: () => createElement(RepairConversationStyleCheckEditorial),
});

const DirectnessVsSofteningCheckTool = createCommunicationStyleFamilyTool({
  slug: "directness-vs-softening-check",
  content: DirectnessVsSofteningCheckContent as typeof content,
  pageMetadata: {
    title: "Directness vs Softening Check - See If You Keep Diluting What You Mean",
    description: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
    keywords: ["directness","vs","softening","check","too","direct","much","communication"],
    openGraphTitle: "Directness vs Softening Check",
    openGraphDescription: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
    twitterTitle: "Directness vs Softening Check",
    twitterDescription: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
  },
  toolMetadata: {
    title: DirectnessVsSofteningCheckContent.communicationStyleMirrorMetadata.title,
    description: DirectnessVsSofteningCheckContent.communicationStyleMirrorMetadata.description,
  },
  faqItems: DirectnessVsSofteningCheckContent.communicationStyleFaqItems,
  renderHero: () => createElement(DirectnessVsSofteningCheckHero),
  renderExperience: () => createElement(DirectnessVsSofteningCheckExperience),
  renderEditorial: () => createElement(DirectnessVsSofteningCheckEditorial),
});

const DifficultConversationPatternMirrorTool = createCommunicationStyleFamilyTool({
  slug: "difficult-conversation-pattern-mirror",
  content: DifficultConversationPatternMirrorContent as typeof content,
  pageMetadata: {
    title: "Difficult Conversation Pattern Mirror - See What Happens When the Talk Really Matters",
    description: "Mirror what happens when a conversation matters: where clarity shifts, defensiveness rises, repair weakens, or your tone changes under pressure.",
    keywords: ["difficult","conversation","pattern","mirror","hard","tough","talks","pressure"],
    openGraphTitle: "Difficult Conversation Pattern Mirror",
    openGraphDescription: "Mirror what happens when a conversation matters: where clarity shifts, defensiveness rises, repair weakens, or your tone changes under pressure.",
    twitterTitle: "Difficult Conversation Pattern Mirror",
    twitterDescription: "Mirror what happens when a conversation matters: where clarity shifts, defensiveness rises, repair weakens, or your tone changes under pressure.",
  },
  toolMetadata: {
    title: DifficultConversationPatternMirrorContent.communicationStyleMirrorMetadata.title,
    description: DifficultConversationPatternMirrorContent.communicationStyleMirrorMetadata.description,
  },
  faqItems: DifficultConversationPatternMirrorContent.communicationStyleFaqItems,
  renderHero: () => createElement(DifficultConversationPatternMirrorHero),
  renderExperience: () => createElement(DifficultConversationPatternMirrorExperience),
  renderEditorial: () => createElement(DifficultConversationPatternMirrorEditorial),
});

export const communicationStyleFamilyToolRegistry = {
  "communication-style-mirror": communicationStyleBaseTool,
  "conflict-style-mirror": ConflictStyleMirrorTool,
  "repair-conversation-style-check": RepairConversationStyleCheckTool,
  "directness-vs-softening-check": DirectnessVsSofteningCheckTool,
  "difficult-conversation-pattern-mirror": DifficultConversationPatternMirrorTool,
};
