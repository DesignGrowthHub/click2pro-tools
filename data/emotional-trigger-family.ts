import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./emotional-trigger-decoder";
import { emotionalTriggerMetadata, emotionalTriggerFaqItems } from "./emotional-trigger-decoder";
import * as AngerTriggerDecoderContent from "./anger-trigger-decoder";
import { ToolHero as AngerTriggerDecoderHero } from "@/components/tools/emotional-trigger-decoder/anger-trigger-decoder-hero";
import { EmotionalTriggerExperience as AngerTriggerDecoderExperience } from "@/components/tools/emotional-trigger-decoder/anger-trigger-decoder-experience";
import { EmotionalTriggerEditorial as AngerTriggerDecoderEditorial } from "@/components/tools/emotional-trigger-decoder/anger-trigger-decoder-editorial";
import * as RejectionTriggerDecoderContent from "./rejection-trigger-decoder";
import { ToolHero as RejectionTriggerDecoderHero } from "@/components/tools/emotional-trigger-decoder/rejection-trigger-decoder-hero";
import { EmotionalTriggerExperience as RejectionTriggerDecoderExperience } from "@/components/tools/emotional-trigger-decoder/rejection-trigger-decoder-experience";
import { EmotionalTriggerEditorial as RejectionTriggerDecoderEditorial } from "@/components/tools/emotional-trigger-decoder/rejection-trigger-decoder-editorial";
import * as ShameTriggerPatternCheckContent from "./shame-trigger-pattern-check";
import { ToolHero as ShameTriggerPatternCheckHero } from "@/components/tools/emotional-trigger-decoder/shame-trigger-pattern-check-hero";
import { EmotionalTriggerExperience as ShameTriggerPatternCheckExperience } from "@/components/tools/emotional-trigger-decoder/shame-trigger-pattern-check-experience";
import { EmotionalTriggerEditorial as ShameTriggerPatternCheckEditorial } from "@/components/tools/emotional-trigger-decoder/shame-trigger-pattern-check-editorial";
import * as CriticismTriggerDecoderContent from "./criticism-trigger-decoder";
import { ToolHero as CriticismTriggerDecoderHero } from "@/components/tools/emotional-trigger-decoder/criticism-trigger-decoder-hero";
import { EmotionalTriggerExperience as CriticismTriggerDecoderExperience } from "@/components/tools/emotional-trigger-decoder/criticism-trigger-decoder-experience";
import { EmotionalTriggerEditorial as CriticismTriggerDecoderEditorial } from "@/components/tools/emotional-trigger-decoder/criticism-trigger-decoder-editorial";
import { ToolPageHeader } from "@/components/tools/emotional-trigger-decoder/tool-page-header";
import { ToolHero } from "@/components/tools/emotional-trigger-decoder/tool-hero";
import { EmotionalTriggerExperience } from "@/components/tools/emotional-trigger-decoder/emotional-trigger-experience";
import { EmotionalTriggerEditorial } from "@/components/tools/emotional-trigger-decoder/emotional-trigger-editorial";

export const emotionalTriggerFamilyKey = "emotionalTrigger";
export const emotionalTriggerBaseSlug = "emotional-trigger-decoder";

export type EmotionalTriggerFamilyToolSlug =
  | "emotional-trigger-decoder"
  | "anger-trigger-decoder"
  | "rejection-trigger-decoder"
  | "shame-trigger-pattern-check"
  | "criticism-trigger-decoder";
export type EmotionalTriggerFamilyTool = FamilyToolBase<EmotionalTriggerFamilyToolSlug> & {
  familyKey: typeof emotionalTriggerFamilyKey;
  baseArchetypeSlug: typeof emotionalTriggerBaseSlug;
  content: typeof content;
  renderHeader: (tool: EmotionalTriggerFamilyTool) => ReactElement;
  renderHero: (tool: EmotionalTriggerFamilyTool) => ReactElement;
  renderExperience: (tool: EmotionalTriggerFamilyTool) => ReactElement;
  renderEditorial: (tool: EmotionalTriggerFamilyTool) => ReactElement;
};

export function createEmotionalTriggerFamilyTool(overrides: Partial<EmotionalTriggerFamilyTool> = {}): EmotionalTriggerFamilyTool {
  const baseTool: EmotionalTriggerFamilyTool = {
    slug: "emotional-trigger-decoder",
    familyKey: emotionalTriggerFamilyKey,
    baseArchetypeSlug: emotionalTriggerBaseSlug,
    content: content,
    pageMetadata: {
      title: "Emotional Trigger Decoder - Understand What Sets You Off and Why",
      description: "See which situations activate you fastest, how the reaction unfolds, and what slows recovery once the trigger lands.",
      keywords: ["emotional trigger decoder","trigger reactivity tool","emotional trigger pattern","trigger analysis tool","emotional recovery tool"],
      openGraphTitle: "Emotional Trigger Decoder",
      openGraphDescription: "A premium interactive tool for mapping trigger clusters, reaction pathways, spillover load, and recovery drag.",
      twitterTitle: "Emotional Trigger Decoder",
      twitterDescription: "See what kinds of situations activate you most strongly and why recovery may take longer than it looks.",
    },
    toolMetadata: {
      title: emotionalTriggerMetadata.title,
      description: emotionalTriggerMetadata.description,
    },
    faqItems: emotionalTriggerFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(EmotionalTriggerExperience),
    renderEditorial: () => createElement(EmotionalTriggerEditorial),
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

export const emotionalTriggerBaseTool = createEmotionalTriggerFamilyTool();

const AngerTriggerDecoderTool = createEmotionalTriggerFamilyTool({
  slug: "anger-trigger-decoder",
  content: AngerTriggerDecoderContent as typeof content,
  pageMetadata: {
    title: "Anger Trigger Decoder - See What Is Really Fueling Your Anger",
    description: "Decode whether anger is getting triggered by disrespect, blocked agency, pressure build-up, unfairness, or old carryover.",
    keywords: ["anger","trigger","decoder","triggers","why","am","i","angry"],
    openGraphTitle: "Anger Trigger Decoder",
    openGraphDescription: "Decode what is really fueling anger activation, from disrespect and blocked agency to accumulated pressure, unfairness, and unprocessed carryover.",
    twitterTitle: "Anger Trigger Decoder",
    twitterDescription: "Decode what is really fueling anger activation, from disrespect and blocked agency to accumulated pressure, unfairness, and unprocessed carryover.",
  },
  toolMetadata: {
    title: AngerTriggerDecoderContent.emotionalTriggerMetadata.title,
    description: AngerTriggerDecoderContent.emotionalTriggerMetadata.description,
  },
  faqItems: AngerTriggerDecoderContent.emotionalTriggerFaqItems,
  renderHero: () => createElement(AngerTriggerDecoderHero),
  renderExperience: () => createElement(AngerTriggerDecoderExperience),
  renderEditorial: () => createElement(AngerTriggerDecoderEditorial),
});

const RejectionTriggerDecoderTool = createEmotionalTriggerFamilyTool({
  slug: "rejection-trigger-decoder",
  content: RejectionTriggerDecoderContent as typeof content,
  pageMetadata: {
    title: "Rejection Trigger Decoder - See Why Rejection Lands So Hard",
    description: "Map what sets off rejection sensitivity, how quickly it turns into self-protection, and what makes it last.",
    keywords: ["rejection","trigger","decoder","sensitivity","fear","of","pattern"],
    openGraphTitle: "Rejection Trigger Decoder",
    openGraphDescription: "See how rejection sensitivity gets activated, what signals set it off fastest, and how quickly the system moves into self-protection or overinterpretation.",
    twitterTitle: "Rejection Trigger Decoder",
    twitterDescription: "See how rejection sensitivity gets activated, what signals set it off fastest, and how quickly the system moves into self-protection or overinterpretation.",
  },
  toolMetadata: {
    title: RejectionTriggerDecoderContent.emotionalTriggerMetadata.title,
    description: RejectionTriggerDecoderContent.emotionalTriggerMetadata.description,
  },
  faqItems: RejectionTriggerDecoderContent.emotionalTriggerFaqItems,
  renderHero: () => createElement(RejectionTriggerDecoderHero),
  renderExperience: () => createElement(RejectionTriggerDecoderExperience),
  renderEditorial: () => createElement(RejectionTriggerDecoderEditorial),
});

const ShameTriggerPatternCheckTool = createEmotionalTriggerFamilyTool({
  slug: "shame-trigger-pattern-check",
  content: ShameTriggerPatternCheckContent as typeof content,
  pageMetadata: {
    title: "Shame Trigger Pattern Check - See What Pulls You Into Shame",
    description: "See what most quickly pulls you into shame, hiding, collapse, or harsh self-surveillance after exposure or perceived failure.",
    keywords: ["shame","trigger","pattern","check","triggers","spiral","self","conscious"],
    openGraphTitle: "Shame Trigger Pattern Check",
    openGraphDescription: "Map what most quickly pulls the system into shame, self-contraction, hiding, collapse, or harsh self-surveillance after exposure or perceived failure.",
    twitterTitle: "Shame Trigger Pattern Check",
    twitterDescription: "Map what most quickly pulls the system into shame, self-contraction, hiding, collapse, or harsh self-surveillance after exposure or perceived failure.",
  },
  toolMetadata: {
    title: ShameTriggerPatternCheckContent.emotionalTriggerMetadata.title,
    description: ShameTriggerPatternCheckContent.emotionalTriggerMetadata.description,
  },
  faqItems: ShameTriggerPatternCheckContent.emotionalTriggerFaqItems,
  renderHero: () => createElement(ShameTriggerPatternCheckHero),
  renderExperience: () => createElement(ShameTriggerPatternCheckExperience),
  renderEditorial: () => createElement(ShameTriggerPatternCheckEditorial),
});

const CriticismTriggerDecoderTool = createEmotionalTriggerFamilyTool({
  slug: "criticism-trigger-decoder",
  content: CriticismTriggerDecoderContent as typeof content,
  pageMetadata: {
    title: "Criticism Trigger Decoder - See Why Feedback Feels Bigger Than the Moment",
    description: "Decode why criticism hits so hard, where defensiveness or collapse begins, and which meanings make feedback linger.",
    keywords: ["criticism","trigger","decoder","triggers","feedback","sensitivity","defensive","reaction"],
    openGraphTitle: "Criticism Trigger Decoder",
    openGraphDescription: "Decode why criticism lands so hard, where defensiveness or collapse begins, and which meanings make feedback feel much bigger than the moment itself.",
    twitterTitle: "Criticism Trigger Decoder",
    twitterDescription: "Decode why criticism lands so hard, where defensiveness or collapse begins, and which meanings make feedback feel much bigger than the moment itself.",
  },
  toolMetadata: {
    title: CriticismTriggerDecoderContent.emotionalTriggerMetadata.title,
    description: CriticismTriggerDecoderContent.emotionalTriggerMetadata.description,
  },
  faqItems: CriticismTriggerDecoderContent.emotionalTriggerFaqItems,
  renderHero: () => createElement(CriticismTriggerDecoderHero),
  renderExperience: () => createElement(CriticismTriggerDecoderExperience),
  renderEditorial: () => createElement(CriticismTriggerDecoderEditorial),
});

export const emotionalTriggerFamilyToolRegistry = {
  "emotional-trigger-decoder": emotionalTriggerBaseTool,
  "anger-trigger-decoder": AngerTriggerDecoderTool,
  "rejection-trigger-decoder": RejectionTriggerDecoderTool,
  "shame-trigger-pattern-check": ShameTriggerPatternCheckTool,
  "criticism-trigger-decoder": CriticismTriggerDecoderTool,
};
