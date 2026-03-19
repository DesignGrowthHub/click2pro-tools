import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./reassurance-seeking-decoder";
import { reassuranceSeekingDecoderMetadata, reassuranceFaqItems } from "./reassurance-seeking-decoder";
import * as HealthReassuranceLoopCheckContent from "./health-reassurance-loop-check";
import { ToolHero as HealthReassuranceLoopCheckHero } from "@/components/tools/reassurance-seeking-decoder/health-reassurance-loop-check-hero";
import { ReassuranceSeekingExperience as HealthReassuranceLoopCheckExperience } from "@/components/tools/reassurance-seeking-decoder/health-reassurance-loop-check-experience";
import { ReassuranceSeekingEditorial as HealthReassuranceLoopCheckEditorial } from "@/components/tools/reassurance-seeking-decoder/health-reassurance-loop-check-editorial";
import * as RelationshipReassurancePatternCheckContent from "./relationship-reassurance-pattern-check";
import { ToolHero as RelationshipReassurancePatternCheckHero } from "@/components/tools/reassurance-seeking-decoder/relationship-reassurance-pattern-check-hero";
import { ReassuranceSeekingExperience as RelationshipReassurancePatternCheckExperience } from "@/components/tools/reassurance-seeking-decoder/relationship-reassurance-pattern-check-experience";
import { ReassuranceSeekingEditorial as RelationshipReassurancePatternCheckEditorial } from "@/components/tools/reassurance-seeking-decoder/relationship-reassurance-pattern-check-editorial";
import * as MistakeCheckingPatternDecoderContent from "./mistake-checking-pattern-decoder";
import { ToolHero as MistakeCheckingPatternDecoderHero } from "@/components/tools/reassurance-seeking-decoder/mistake-checking-pattern-decoder-hero";
import { ReassuranceSeekingExperience as MistakeCheckingPatternDecoderExperience } from "@/components/tools/reassurance-seeking-decoder/mistake-checking-pattern-decoder-experience";
import { ReassuranceSeekingEditorial as MistakeCheckingPatternDecoderEditorial } from "@/components/tools/reassurance-seeking-decoder/mistake-checking-pattern-decoder-editorial";
import * as SocialReassuranceSeekingCheckContent from "./social-reassurance-seeking-check";
import { ToolHero as SocialReassuranceSeekingCheckHero } from "@/components/tools/reassurance-seeking-decoder/social-reassurance-seeking-check-hero";
import { ReassuranceSeekingExperience as SocialReassuranceSeekingCheckExperience } from "@/components/tools/reassurance-seeking-decoder/social-reassurance-seeking-check-experience";
import { ReassuranceSeekingEditorial as SocialReassuranceSeekingCheckEditorial } from "@/components/tools/reassurance-seeking-decoder/social-reassurance-seeking-check-editorial";
import { ToolPageHeader } from "@/components/tools/reassurance-seeking-decoder/tool-page-header";
import { ToolHero } from "@/components/tools/reassurance-seeking-decoder/tool-hero";
import { ReassuranceSeekingExperience } from "@/components/tools/reassurance-seeking-decoder/reassurance-seeking-experience";
import { ReassuranceSeekingEditorial } from "@/components/tools/reassurance-seeking-decoder/reassurance-seeking-editorial";

export const reassuranceSeekingFamilyKey = "reassuranceSeeking";
export const reassuranceSeekingBaseSlug = "reassurance-seeking-decoder";

export type ReassuranceSeekingFamilyToolSlug =
  | "reassurance-seeking-decoder"
  | "health-reassurance-loop-check"
  | "relationship-reassurance-pattern-check"
  | "mistake-checking-pattern-decoder"
  | "social-reassurance-seeking-check";
export type ReassuranceSeekingFamilyTool = FamilyToolBase<ReassuranceSeekingFamilyToolSlug> & {
  familyKey: typeof reassuranceSeekingFamilyKey;
  baseArchetypeSlug: typeof reassuranceSeekingBaseSlug;
  content: typeof content;
  renderHeader: (tool: ReassuranceSeekingFamilyTool) => ReactElement;
  renderHero: (tool: ReassuranceSeekingFamilyTool) => ReactElement;
  renderExperience: (tool: ReassuranceSeekingFamilyTool) => ReactElement;
  renderEditorial: (tool: ReassuranceSeekingFamilyTool) => ReactElement;
};

export function createReassuranceSeekingFamilyTool(overrides: Partial<ReassuranceSeekingFamilyTool> = {}): ReassuranceSeekingFamilyTool {
  const baseTool: ReassuranceSeekingFamilyTool = {
    slug: "reassurance-seeking-decoder",
    familyKey: reassuranceSeekingFamilyKey,
    baseArchetypeSlug: reassuranceSeekingBaseSlug,
    content: content,
    pageMetadata: {
      title: "Reassurance Seeking Decoder - See Why Reassurance Stops Working So Fast",
      description: "Trace how uncertainty turns into checking, reassurance, brief relief, and the return of doubt across relationships, health, work, and decisions.",
      keywords: ["reassurance seeking decoder","reassurance seeking tool","checking cycle tool","uncertainty intolerance assessment","reassurance loop","temporary relief and doubt return"],
      openGraphTitle: "Reassurance Seeking Decoder",
      openGraphDescription: "A premium interactive tool for decoding reassurance seeking across uncertainty intensity, reassurance pull, relief fragility, and relapse speed.",
      twitterTitle: "Reassurance Seeking Decoder",
      twitterDescription: "See how uncertainty turns into checking, reassurance, temporary relief, and the return of doubt.",
    },
    toolMetadata: {
      title: reassuranceSeekingDecoderMetadata.title,
      description: reassuranceSeekingDecoderMetadata.description,
    },
    faqItems: reassuranceFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(ReassuranceSeekingExperience),
    renderEditorial: () => createElement(ReassuranceSeekingEditorial),
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

export const reassuranceSeekingBaseTool = createReassuranceSeekingFamilyTool();

const HealthReassuranceLoopCheckTool = createReassuranceSeekingFamilyTool({
  slug: "health-reassurance-loop-check",
  content: HealthReassuranceLoopCheckContent as typeof content,
  pageMetadata: {
    title: "Health Reassurance Loop Check - See If Health Anxiety Is Pulling You Into Checking",
    description: "Decode whether body sensations, uncertainty, symptom scanning, or fear of missing something serious are driving a health reassurance loop.",
    keywords: ["health","reassurance","loop","check","anxiety","symptom","checking","medical"],
    openGraphTitle: "Health Reassurance Loop Check",
    openGraphDescription: "Decode whether body sensations, uncertainty, symptom scanning, or fear of missing something serious are driving a health reassurance loop.",
    twitterTitle: "Health Reassurance Loop Check",
    twitterDescription: "Decode whether body sensations, uncertainty, symptom scanning, or fear of missing something serious are driving a health reassurance loop.",
  },
  toolMetadata: {
    title: HealthReassuranceLoopCheckContent.reassuranceSeekingDecoderMetadata.title,
    description: HealthReassuranceLoopCheckContent.reassuranceSeekingDecoderMetadata.description,
  },
  faqItems: HealthReassuranceLoopCheckContent.reassuranceFaqItems,
  renderHero: () => createElement(HealthReassuranceLoopCheckHero),
  renderExperience: () => createElement(HealthReassuranceLoopCheckExperience),
  renderEditorial: () => createElement(HealthReassuranceLoopCheckEditorial),
});

const RelationshipReassurancePatternCheckTool = createReassuranceSeekingFamilyTool({
  slug: "relationship-reassurance-pattern-check",
  content: RelationshipReassurancePatternCheckContent as typeof content,
  pageMetadata: {
    title: "Relationship Reassurance Pattern Check - See If Doubt Keeps Sending You Back for Proof",
    description: "See whether relationship doubt keeps turning into checking, needing proof, and temporary relief that never fully lasts.",
    keywords: ["relationship","reassurance","pattern","check","need","from","partner","doubt"],
    openGraphTitle: "Relationship Reassurance Pattern Check",
    openGraphDescription: "See whether relationship doubt keeps turning into checking, seeking certainty, needing proof, and temporary relief that never fully lasts.",
    twitterTitle: "Relationship Reassurance Pattern Check",
    twitterDescription: "See whether relationship doubt keeps turning into checking, seeking certainty, needing proof, and temporary relief that never fully lasts.",
  },
  toolMetadata: {
    title: RelationshipReassurancePatternCheckContent.reassuranceSeekingDecoderMetadata.title,
    description: RelationshipReassurancePatternCheckContent.reassuranceSeekingDecoderMetadata.description,
  },
  faqItems: RelationshipReassurancePatternCheckContent.reassuranceFaqItems,
  renderHero: () => createElement(RelationshipReassurancePatternCheckHero),
  renderExperience: () => createElement(RelationshipReassurancePatternCheckExperience),
  renderEditorial: () => createElement(RelationshipReassurancePatternCheckEditorial),
});

const MistakeCheckingPatternDecoderTool = createReassuranceSeekingFamilyTool({
  slug: "mistake-checking-pattern-decoder",
  content: MistakeCheckingPatternDecoderContent as typeof content,
  pageMetadata: {
    title: "Mistake Checking Pattern Decoder - See Why You Keep Rechecking for Errors",
    description: "Map how fear of mistakes turns into rereading, rechecking, and repeated certainty-seeking even after you already know enough.",
    keywords: ["mistake","checking","pattern","decoder","mistakes","repeatedly","rereading","over"],
    openGraphTitle: "Mistake Checking Pattern Decoder",
    openGraphDescription: "Map how fear of mistakes turns into rereading, rechecking, revisiting, and repeated certainty-seeking even after you already know enough.",
    twitterTitle: "Mistake Checking Pattern Decoder",
    twitterDescription: "Map how fear of mistakes turns into rereading, rechecking, revisiting, and repeated certainty-seeking even after you already know enough.",
  },
  toolMetadata: {
    title: MistakeCheckingPatternDecoderContent.reassuranceSeekingDecoderMetadata.title,
    description: MistakeCheckingPatternDecoderContent.reassuranceSeekingDecoderMetadata.description,
  },
  faqItems: MistakeCheckingPatternDecoderContent.reassuranceFaqItems,
  renderHero: () => createElement(MistakeCheckingPatternDecoderHero),
  renderExperience: () => createElement(MistakeCheckingPatternDecoderExperience),
  renderEditorial: () => createElement(MistakeCheckingPatternDecoderEditorial),
});

const SocialReassuranceSeekingCheckTool = createReassuranceSeekingFamilyTool({
  slug: "social-reassurance-seeking-check",
  content: SocialReassuranceSeekingCheckContent as typeof content,
  pageMetadata: {
    title: "Social Reassurance Seeking Check - See If Social Doubt Keeps Pulling You Back In",
    description: "See whether awkward moments, fear of judgment, or worry about how you came across are driving repeated social reassurance seeking.",
    keywords: ["social","reassurance","seeking","check","did","i","sound","weird"],
    openGraphTitle: "Social Reassurance Seeking Check",
    openGraphDescription: "See whether awkward moments, social doubt, fear of judgment, or uncertainty about how you came across are driving repeated social reassurance seeking.",
    twitterTitle: "Social Reassurance Seeking Check",
    twitterDescription: "See whether awkward moments, social doubt, fear of judgment, or uncertainty about how you came across are driving repeated social reassurance seeking.",
  },
  toolMetadata: {
    title: SocialReassuranceSeekingCheckContent.reassuranceSeekingDecoderMetadata.title,
    description: SocialReassuranceSeekingCheckContent.reassuranceSeekingDecoderMetadata.description,
  },
  faqItems: SocialReassuranceSeekingCheckContent.reassuranceFaqItems,
  renderHero: () => createElement(SocialReassuranceSeekingCheckHero),
  renderExperience: () => createElement(SocialReassuranceSeekingCheckExperience),
  renderEditorial: () => createElement(SocialReassuranceSeekingCheckEditorial),
});

export const reassuranceSeekingFamilyToolRegistry = {
  "reassurance-seeking-decoder": reassuranceSeekingBaseTool,
  "health-reassurance-loop-check": HealthReassuranceLoopCheckTool,
  "relationship-reassurance-pattern-check": RelationshipReassurancePatternCheckTool,
  "mistake-checking-pattern-decoder": MistakeCheckingPatternDecoderTool,
  "social-reassurance-seeking-check": SocialReassuranceSeekingCheckTool,
};
