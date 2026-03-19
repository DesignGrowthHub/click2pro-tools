import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./inner-critic-intensity-scan";
import { innerCriticIntensityScanMetadata, innerCriticFaqItems } from "./inner-critic-intensity-scan";
import * as PerfectionPressureScanContent from "./perfection-pressure-scan";
import { ToolHero as PerfectionPressureScanHero } from "@/components/tools/inner-critic-intensity-scan/perfection-pressure-scan-hero";
import { InnerCriticExperience as PerfectionPressureScanExperience } from "@/components/tools/inner-critic-intensity-scan/perfection-pressure-scan-experience";
import { InnerCriticEditorial as PerfectionPressureScanEditorial } from "@/components/tools/inner-critic-intensity-scan/perfection-pressure-scan-editorial";
import * as SelfJudgmentIntensityCheckContent from "./self-judgment-intensity-check";
import { ToolHero as SelfJudgmentIntensityCheckHero } from "@/components/tools/inner-critic-intensity-scan/self-judgment-intensity-check-hero";
import { InnerCriticExperience as SelfJudgmentIntensityCheckExperience } from "@/components/tools/inner-critic-intensity-scan/self-judgment-intensity-check-experience";
import { InnerCriticEditorial as SelfJudgmentIntensityCheckEditorial } from "@/components/tools/inner-critic-intensity-scan/self-judgment-intensity-check-editorial";
import * as ShameVoicePatternCheckContent from "./shame-voice-pattern-check";
import { ToolHero as ShameVoicePatternCheckHero } from "@/components/tools/inner-critic-intensity-scan/shame-voice-pattern-check-hero";
import { InnerCriticExperience as ShameVoicePatternCheckExperience } from "@/components/tools/inner-critic-intensity-scan/shame-voice-pattern-check-experience";
import { InnerCriticEditorial as ShameVoicePatternCheckEditorial } from "@/components/tools/inner-critic-intensity-scan/shame-voice-pattern-check-editorial";
import * as FailureFearInnerVoiceCheckContent from "./failure-fear-inner-voice-check";
import { ToolHero as FailureFearInnerVoiceCheckHero } from "@/components/tools/inner-critic-intensity-scan/failure-fear-inner-voice-check-hero";
import { InnerCriticExperience as FailureFearInnerVoiceCheckExperience } from "@/components/tools/inner-critic-intensity-scan/failure-fear-inner-voice-check-experience";
import { InnerCriticEditorial as FailureFearInnerVoiceCheckEditorial } from "@/components/tools/inner-critic-intensity-scan/failure-fear-inner-voice-check-editorial";
import { ToolPageHeader } from "@/components/tools/inner-critic-intensity-scan/tool-page-header";
import { ToolHero } from "@/components/tools/inner-critic-intensity-scan/tool-hero";
import { InnerCriticExperience } from "@/components/tools/inner-critic-intensity-scan/inner-critic-experience";
import { InnerCriticEditorial } from "@/components/tools/inner-critic-intensity-scan/inner-critic-editorial";

export const innerCriticFamilyKey = "innerCritic";
export const innerCriticBaseSlug = "inner-critic-intensity-scan";

export type InnerCriticFamilyToolSlug =
  | "inner-critic-intensity-scan"
  | "perfection-pressure-scan"
  | "self-judgment-intensity-check"
  | "shame-voice-pattern-check"
  | "failure-fear-inner-voice-check";
export type InnerCriticFamilyTool = FamilyToolBase<InnerCriticFamilyToolSlug> & {
  familyKey: typeof innerCriticFamilyKey;
  baseArchetypeSlug: typeof innerCriticBaseSlug;
  content: typeof content;
  renderHeader: (tool: InnerCriticFamilyTool) => ReactElement;
  renderHero: (tool: InnerCriticFamilyTool) => ReactElement;
  renderExperience: (tool: InnerCriticFamilyTool) => ReactElement;
  renderEditorial: (tool: InnerCriticFamilyTool) => ReactElement;
};

export function createInnerCriticFamilyTool(overrides: Partial<InnerCriticFamilyTool> = {}): InnerCriticFamilyTool {
  const baseTool: InnerCriticFamilyTool = {
    slug: "inner-critic-intensity-scan",
    familyKey: innerCriticFamilyKey,
    baseArchetypeSlug: innerCriticBaseSlug,
    content: content,
    pageMetadata: {
      title: "Inner Critic Intensity Scan - See How Harsh Your Inner Voice Has Become",
      description: "See how harsh, repetitive, perfection-driven, or undermining your inner voice gets under pressure and where it costs you most.",
      keywords: ["inner critic intensity scan","inner critic tool","negative self talk assessment","perfectionistic inner voice","harsh self talk under pressure","inner voice and confidence"],
      openGraphTitle: "Inner Critic Intensity Scan",
      openGraphDescription: "A premium interactive tool for reading harsh self-talk, repetition load, perfection pressure, and the internal cost of the critic under stress.",
      twitterTitle: "Inner Critic Intensity Scan",
      twitterDescription: "See how harsh, repetitive, perfectionistic, or undermining your inner voice becomes under pressure.",
    },
    toolMetadata: {
      title: innerCriticIntensityScanMetadata.title,
      description: innerCriticIntensityScanMetadata.description,
    },
    faqItems: innerCriticFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(InnerCriticExperience),
    renderEditorial: () => createElement(InnerCriticEditorial),
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

export const innerCriticBaseTool = createInnerCriticFamilyTool();

const PerfectionPressureScanTool = createInnerCriticFamilyTool({
  slug: "perfection-pressure-scan",
  content: PerfectionPressureScanContent as typeof content,
  pageMetadata: {
    title: "Perfection Pressure Scan - See How Much Pressure You Put on Yourself",
    description: "Scan how perfection pressure tightens standards, narrows your margin, and turns ordinary effort into a constant test.",
    keywords: ["perfection","pressure","scan","perfectionism","check","high","standards","perfect"],
    openGraphTitle: "Perfection Pressure Scan",
    openGraphDescription: "Scan how perfection pressure tightens your standards, narrows your margin, and turns ordinary effort into a constant test you feel behind on.",
    twitterTitle: "Perfection Pressure Scan",
    twitterDescription: "Scan how perfection pressure tightens your standards, narrows your margin, and turns ordinary effort into a constant test you feel behind on.",
  },
  toolMetadata: {
    title: PerfectionPressureScanContent.innerCriticIntensityScanMetadata.title,
    description: PerfectionPressureScanContent.innerCriticIntensityScanMetadata.description,
  },
  faqItems: PerfectionPressureScanContent.innerCriticFaqItems,
  renderHero: () => createElement(PerfectionPressureScanHero),
  renderExperience: () => createElement(PerfectionPressureScanExperience),
  renderEditorial: () => createElement(PerfectionPressureScanEditorial),
});

const SelfJudgmentIntensityCheckTool = createInnerCriticFamilyTool({
  slug: "self-judgment-intensity-check",
  content: SelfJudgmentIntensityCheckContent as typeof content,
  pageMetadata: {
    title: "Self-Judgment Intensity Check - See How Fast Self-Criticism Turns On",
    description: "See how quickly self-judgment rises under stress, how sharp the internal tone becomes, and what makes it worse.",
    keywords: ["self","judgment","intensity","check","harsh","judgement","criticism","internal"],
    openGraphTitle: "Self-Judgment Intensity Check",
    openGraphDescription: "See how quickly self-judgment rises under stress, how harsh the internal tone becomes, and what kinds of moments amplify it most.",
    twitterTitle: "Self-Judgment Intensity Check",
    twitterDescription: "See how quickly self-judgment rises under stress, how harsh the internal tone becomes, and what kinds of moments amplify it most.",
  },
  toolMetadata: {
    title: SelfJudgmentIntensityCheckContent.innerCriticIntensityScanMetadata.title,
    description: SelfJudgmentIntensityCheckContent.innerCriticIntensityScanMetadata.description,
  },
  faqItems: SelfJudgmentIntensityCheckContent.innerCriticFaqItems,
  renderHero: () => createElement(SelfJudgmentIntensityCheckHero),
  renderExperience: () => createElement(SelfJudgmentIntensityCheckExperience),
  renderEditorial: () => createElement(SelfJudgmentIntensityCheckEditorial),
});

const ShameVoicePatternCheckTool = createInnerCriticFamilyTool({
  slug: "shame-voice-pattern-check",
  content: ShameVoicePatternCheckContent as typeof content,
  pageMetadata: {
    title: "Shame Voice Pattern Check - See If Shame Is Running Your Inner Voice",
    description: "Map the voice that shows up after mistakes, exposure, criticism, or failure and see how shame changes your inner world.",
    keywords: ["shame","voice","pattern","check","internal","self","talk"],
    openGraphTitle: "Shame Voice Pattern Check",
    openGraphDescription: "Map the voice that shows up after mistakes, exposure, criticism, or failure and see how shame language reshapes your internal world.",
    twitterTitle: "Shame Voice Pattern Check",
    twitterDescription: "Map the voice that shows up after mistakes, exposure, criticism, or failure and see how shame language reshapes your internal world.",
  },
  toolMetadata: {
    title: ShameVoicePatternCheckContent.innerCriticIntensityScanMetadata.title,
    description: ShameVoicePatternCheckContent.innerCriticIntensityScanMetadata.description,
  },
  faqItems: ShameVoicePatternCheckContent.innerCriticFaqItems,
  renderHero: () => createElement(ShameVoicePatternCheckHero),
  renderExperience: () => createElement(ShameVoicePatternCheckExperience),
  renderEditorial: () => createElement(ShameVoicePatternCheckEditorial),
});

const FailureFearInnerVoiceCheckTool = createInnerCriticFamilyTool({
  slug: "failure-fear-inner-voice-check",
  content: FailureFearInnerVoiceCheckContent as typeof content,
  pageMetadata: {
    title: "Failure Fear Inner Voice Check - See If Fear of Failure Is Driving the Voice Inside",
    description: "See how fear of failure shapes the inner voice before, during, and after effort, and where that pressure starts shrinking your range.",
    keywords: ["failure","fear","inner","voice","check","of","self","talk"],
    openGraphTitle: "Failure Fear Inner Voice Check",
    openGraphDescription: "See how fear of failure shapes the inner voice before, during, and after effort, and where that pressure starts shrinking your range.",
    twitterTitle: "Failure Fear Inner Voice Check",
    twitterDescription: "See how fear of failure shapes the inner voice before, during, and after effort, and where that pressure starts shrinking your range.",
  },
  toolMetadata: {
    title: FailureFearInnerVoiceCheckContent.innerCriticIntensityScanMetadata.title,
    description: FailureFearInnerVoiceCheckContent.innerCriticIntensityScanMetadata.description,
  },
  faqItems: FailureFearInnerVoiceCheckContent.innerCriticFaqItems,
  renderHero: () => createElement(FailureFearInnerVoiceCheckHero),
  renderExperience: () => createElement(FailureFearInnerVoiceCheckExperience),
  renderEditorial: () => createElement(FailureFearInnerVoiceCheckEditorial),
});

export const innerCriticFamilyToolRegistry = {
  "inner-critic-intensity-scan": innerCriticBaseTool,
  "perfection-pressure-scan": PerfectionPressureScanTool,
  "self-judgment-intensity-check": SelfJudgmentIntensityCheckTool,
  "shame-voice-pattern-check": ShameVoicePatternCheckTool,
  "failure-fear-inner-voice-check": FailureFearInnerVoiceCheckTool,
};
