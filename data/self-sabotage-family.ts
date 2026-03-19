import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./self-sabotage-pattern-finder";
import { selfSabotagePatternFinderMetadata, selfSabotageFaqItems } from "./self-sabotage-pattern-finder";
import * as FinishLineResistanceCheckContent from "./finish-line-resistance-check";
import { ToolHero as FinishLineResistanceCheckHero } from "@/components/tools/self-sabotage-pattern-finder/finish-line-resistance-check-hero";
import { SelfSabotageExperience as FinishLineResistanceCheckExperience } from "@/components/tools/self-sabotage-pattern-finder/finish-line-resistance-check-experience";
import { SelfSabotageEditorial as FinishLineResistanceCheckEditorial } from "@/components/tools/self-sabotage-pattern-finder/finish-line-resistance-check-editorial";
import * as VisibilitySabotagePatternCheckContent from "./visibility-sabotage-pattern-check";
import { ToolHero as VisibilitySabotagePatternCheckHero } from "@/components/tools/self-sabotage-pattern-finder/visibility-sabotage-pattern-check-hero";
import { SelfSabotageExperience as VisibilitySabotagePatternCheckExperience } from "@/components/tools/self-sabotage-pattern-finder/visibility-sabotage-pattern-check-experience";
import { SelfSabotageEditorial as VisibilitySabotagePatternCheckEditorial } from "@/components/tools/self-sabotage-pattern-finder/visibility-sabotage-pattern-check-editorial";
import * as SuccessDiscomfortPatternFinderContent from "./success-discomfort-pattern-finder";
import { ToolHero as SuccessDiscomfortPatternFinderHero } from "@/components/tools/self-sabotage-pattern-finder/success-discomfort-pattern-finder-hero";
import { SelfSabotageExperience as SuccessDiscomfortPatternFinderExperience } from "@/components/tools/self-sabotage-pattern-finder/success-discomfort-pattern-finder-experience";
import { SelfSabotageEditorial as SuccessDiscomfortPatternFinderEditorial } from "@/components/tools/self-sabotage-pattern-finder/success-discomfort-pattern-finder-editorial";
import * as FollowThroughBreakpointCheckContent from "./follow-through-breakpoint-check";
import { ToolHero as FollowThroughBreakpointCheckHero } from "@/components/tools/self-sabotage-pattern-finder/follow-through-breakpoint-check-hero";
import { SelfSabotageExperience as FollowThroughBreakpointCheckExperience } from "@/components/tools/self-sabotage-pattern-finder/follow-through-breakpoint-check-experience";
import { SelfSabotageEditorial as FollowThroughBreakpointCheckEditorial } from "@/components/tools/self-sabotage-pattern-finder/follow-through-breakpoint-check-editorial";
import { ToolPageHeader } from "@/components/tools/self-sabotage-pattern-finder/tool-page-header";
import { ToolHero } from "@/components/tools/self-sabotage-pattern-finder/tool-hero";
import { SelfSabotageExperience } from "@/components/tools/self-sabotage-pattern-finder/self-sabotage-experience";
import { SelfSabotageEditorial } from "@/components/tools/self-sabotage-pattern-finder/self-sabotage-editorial";

export const selfSabotageFamilyKey = "selfSabotage";
export const selfSabotageBaseSlug = "self-sabotage-pattern-finder";

export type SelfSabotageFamilyToolSlug =
  | "self-sabotage-pattern-finder"
  | "finish-line-resistance-check"
  | "visibility-sabotage-pattern-check"
  | "success-discomfort-pattern-finder"
  | "follow-through-breakpoint-check";
export type SelfSabotageFamilyTool = FamilyToolBase<SelfSabotageFamilyToolSlug> & {
  familyKey: typeof selfSabotageFamilyKey;
  baseArchetypeSlug: typeof selfSabotageBaseSlug;
  content: typeof content;
  renderHeader: (tool: SelfSabotageFamilyTool) => ReactElement;
  renderHero: (tool: SelfSabotageFamilyTool) => ReactElement;
  renderExperience: (tool: SelfSabotageFamilyTool) => ReactElement;
  renderEditorial: (tool: SelfSabotageFamilyTool) => ReactElement;
};

export function createSelfSabotageFamilyTool(overrides: Partial<SelfSabotageFamilyTool> = {}): SelfSabotageFamilyTool {
  const baseTool: SelfSabotageFamilyTool = {
    slug: "self-sabotage-pattern-finder",
    familyKey: selfSabotageFamilyKey,
    baseArchetypeSlug: selfSabotageBaseSlug,
    content: content,
    pageMetadata: {
      title: "Self-Sabotage Pattern Finder - See Where Your Progress Keeps Breaking",
      description: "See where progress repeatedly breaks, what trigger point interrupts momentum, and how pressure or avoidance weaken follow-through.",
      keywords: ["self sabotage pattern finder","self sabotage assessment","progress interruption tool","follow through problems","why do i stall near success","derailment pattern tool"],
      openGraphTitle: "Self-Sabotage Pattern Finder",
      openGraphDescription: "A premium interactive tool for reading progress interruption, derailment triggers, pressure-based avoidance, and follow-through breakdown.",
      twitterTitle: "Self-Sabotage Pattern Finder",
      twitterDescription: "See where progress tends to break, what usually happens just before, and which internal pattern is interrupting follow-through.",
    },
    toolMetadata: {
      title: selfSabotagePatternFinderMetadata.title,
      description: selfSabotagePatternFinderMetadata.description,
    },
    faqItems: selfSabotageFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(SelfSabotageExperience),
    renderEditorial: () => createElement(SelfSabotageEditorial),
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

export const selfSabotageBaseTool = createSelfSabotageFamilyTool();

const FinishLineResistanceCheckTool = createSelfSabotageFamilyTool({
  slug: "finish-line-resistance-check",
  content: FinishLineResistanceCheckContent as typeof content,
  pageMetadata: {
    title: "Finish-Line Resistance Check - See Why You Stall Near the End",
    description: "Check what starts happening near completion, why the finish line gets harder to cross, and where progress begins to stall right before done.",
    keywords: ["finish","line","resistance","check","stall","near","completion","can"],
    openGraphTitle: "Finish-Line Resistance Check",
    openGraphDescription: "Check what starts happening near completion, why the finish line gets harder to cross, and where progress begins to stall right before done.",
    twitterTitle: "Finish-Line Resistance Check",
    twitterDescription: "Check what starts happening near completion, why the finish line gets harder to cross, and where progress begins to stall right before done.",
  },
  toolMetadata: {
    title: FinishLineResistanceCheckContent.selfSabotagePatternFinderMetadata.title,
    description: FinishLineResistanceCheckContent.selfSabotagePatternFinderMetadata.description,
  },
  faqItems: FinishLineResistanceCheckContent.selfSabotageFaqItems,
  renderHero: () => createElement(FinishLineResistanceCheckHero),
  renderExperience: () => createElement(FinishLineResistanceCheckExperience),
  renderEditorial: () => createElement(FinishLineResistanceCheckEditorial),
});

const VisibilitySabotagePatternCheckTool = createSelfSabotageFamilyTool({
  slug: "visibility-sabotage-pattern-check",
  content: VisibilitySabotagePatternCheckContent as typeof content,
  pageMetadata: {
    title: "Visibility Sabotage Pattern Check - See If More Attention Makes You Pull Back",
    description: "Map what happens when your work, voice, or success becomes more visible and why the system may start pulling back right then.",
    keywords: ["visibility","sabotage","pattern","check","fear","of","when","seen"],
    openGraphTitle: "Visibility Sabotage Pattern Check",
    openGraphDescription: "Map what happens when your work, voice, or success becomes more visible and why the system may start pulling back right when exposure increases.",
    twitterTitle: "Visibility Sabotage Pattern Check",
    twitterDescription: "Map what happens when your work, voice, or success becomes more visible and why the system may start pulling back right when exposure increases.",
  },
  toolMetadata: {
    title: VisibilitySabotagePatternCheckContent.selfSabotagePatternFinderMetadata.title,
    description: VisibilitySabotagePatternCheckContent.selfSabotagePatternFinderMetadata.description,
  },
  faqItems: VisibilitySabotagePatternCheckContent.selfSabotageFaqItems,
  renderHero: () => createElement(VisibilitySabotagePatternCheckHero),
  renderExperience: () => createElement(VisibilitySabotagePatternCheckExperience),
  renderEditorial: () => createElement(VisibilitySabotagePatternCheckEditorial),
});

const SuccessDiscomfortPatternFinderTool = createSelfSabotageFamilyTool({
  slug: "success-discomfort-pattern-finder",
  content: SuccessDiscomfortPatternFinderContent as typeof content,
  pageMetadata: {
    title: "Success Discomfort Pattern Finder - See If Success Makes You Step Back",
    description: "See whether expansion, recognition, momentum, or success itself starts creating discomfort that makes it harder to stay consistent.",
    keywords: ["success","discomfort","pattern","finder","anxiety","pull","back","after"],
    openGraphTitle: "Success Discomfort Pattern Finder",
    openGraphDescription: "See whether expansion, recognition, momentum, or success itself starts creating discomfort that makes it harder to stay consistent.",
    twitterTitle: "Success Discomfort Pattern Finder",
    twitterDescription: "See whether expansion, recognition, momentum, or success itself starts creating discomfort that makes it harder to stay consistent.",
  },
  toolMetadata: {
    title: SuccessDiscomfortPatternFinderContent.selfSabotagePatternFinderMetadata.title,
    description: SuccessDiscomfortPatternFinderContent.selfSabotagePatternFinderMetadata.description,
  },
  faqItems: SuccessDiscomfortPatternFinderContent.selfSabotageFaqItems,
  renderHero: () => createElement(SuccessDiscomfortPatternFinderHero),
  renderExperience: () => createElement(SuccessDiscomfortPatternFinderExperience),
  renderEditorial: () => createElement(SuccessDiscomfortPatternFinderEditorial),
});

const FollowThroughBreakpointCheckTool = createSelfSabotageFamilyTool({
  slug: "follow-through-breakpoint-check",
  content: FollowThroughBreakpointCheckContent as typeof content,
  pageMetadata: {
    title: "Follow-Through Breakpoint Check - See Where Follow-Through Usually Breaks",
    description: "Find where follow-through drops, what pressures trigger the break, and why effort alone is not carrying you through the whole arc.",
    keywords: ["follow","through","breakpoint","check","problems","why","do","i"],
    openGraphTitle: "Follow-Through Breakpoint Check",
    openGraphDescription: "Identify where follow-through usually breaks, what pressures trigger the drop, and why effort alone does not carry you through the whole arc.",
    twitterTitle: "Follow-Through Breakpoint Check",
    twitterDescription: "Identify where follow-through usually breaks, what pressures trigger the drop, and why effort alone does not carry you through the whole arc.",
  },
  toolMetadata: {
    title: FollowThroughBreakpointCheckContent.selfSabotagePatternFinderMetadata.title,
    description: FollowThroughBreakpointCheckContent.selfSabotagePatternFinderMetadata.description,
  },
  faqItems: FollowThroughBreakpointCheckContent.selfSabotageFaqItems,
  renderHero: () => createElement(FollowThroughBreakpointCheckHero),
  renderExperience: () => createElement(FollowThroughBreakpointCheckExperience),
  renderEditorial: () => createElement(FollowThroughBreakpointCheckEditorial),
});

export const selfSabotageFamilyToolRegistry = {
  "self-sabotage-pattern-finder": selfSabotageBaseTool,
  "finish-line-resistance-check": FinishLineResistanceCheckTool,
  "visibility-sabotage-pattern-check": VisibilitySabotagePatternCheckTool,
  "success-discomfort-pattern-finder": SuccessDiscomfortPatternFinderTool,
  "follow-through-breakpoint-check": FollowThroughBreakpointCheckTool,
};
