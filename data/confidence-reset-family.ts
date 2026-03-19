import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./confidence-reset-audit";
import { confidenceResetAuditMetadata, confidenceResetFaqItems } from "./confidence-reset-audit";
import * as SelfDoubtPatternAuditContent from "./self-doubt-pattern-audit";
import { ToolHero as SelfDoubtPatternAuditHero } from "@/components/tools/confidence-reset-audit/self-doubt-pattern-audit-hero";
import { ConfidenceResetExperience as SelfDoubtPatternAuditExperience } from "@/components/tools/confidence-reset-audit/self-doubt-pattern-audit-experience";
import { ConfidenceResetEditorial as SelfDoubtPatternAuditEditorial } from "@/components/tools/confidence-reset-audit/self-doubt-pattern-audit-editorial";
import * as ImposterFeelingsAuditContent from "./imposter-feelings-audit";
import { ToolHero as ImposterFeelingsAuditHero } from "@/components/tools/confidence-reset-audit/imposter-feelings-audit-hero";
import { ConfidenceResetExperience as ImposterFeelingsAuditExperience } from "@/components/tools/confidence-reset-audit/imposter-feelings-audit-experience";
import { ConfidenceResetEditorial as ImposterFeelingsAuditEditorial } from "@/components/tools/confidence-reset-audit/imposter-feelings-audit-editorial";
import * as DecisionConfidenceCheckContent from "./decision-confidence-check";
import { ToolHero as DecisionConfidenceCheckHero } from "@/components/tools/confidence-reset-audit/decision-confidence-check-hero";
import { ConfidenceResetExperience as DecisionConfidenceCheckExperience } from "@/components/tools/confidence-reset-audit/decision-confidence-check-experience";
import { ConfidenceResetEditorial as DecisionConfidenceCheckEditorial } from "@/components/tools/confidence-reset-audit/decision-confidence-check-editorial";
import * as VisibilityConfidenceCheckContent from "./visibility-confidence-check";
import { ToolHero as VisibilityConfidenceCheckHero } from "@/components/tools/confidence-reset-audit/visibility-confidence-check-hero";
import { ConfidenceResetExperience as VisibilityConfidenceCheckExperience } from "@/components/tools/confidence-reset-audit/visibility-confidence-check-experience";
import { ConfidenceResetEditorial as VisibilityConfidenceCheckEditorial } from "@/components/tools/confidence-reset-audit/visibility-confidence-check-editorial";
import { ToolPageHeader } from "@/components/tools/confidence-reset-audit/tool-page-header";
import { ToolHero } from "@/components/tools/confidence-reset-audit/tool-hero";
import { ConfidenceResetExperience } from "@/components/tools/confidence-reset-audit/confidence-reset-experience";
import { ConfidenceResetEditorial } from "@/components/tools/confidence-reset-audit/confidence-reset-editorial";

export const confidenceResetFamilyKey = "confidenceReset";
export const confidenceResetBaseSlug = "confidence-reset-audit";

export type ConfidenceResetFamilyToolSlug =
  | "confidence-reset-audit"
  | "self-doubt-pattern-audit"
  | "imposter-feelings-audit"
  | "decision-confidence-check"
  | "visibility-confidence-check";
export type ConfidenceResetFamilyTool = FamilyToolBase<ConfidenceResetFamilyToolSlug> & {
  familyKey: typeof confidenceResetFamilyKey;
  baseArchetypeSlug: typeof confidenceResetBaseSlug;
  content: typeof content;
  renderHeader: (tool: ConfidenceResetFamilyTool) => ReactElement;
  renderHero: (tool: ConfidenceResetFamilyTool) => ReactElement;
  renderExperience: (tool: ConfidenceResetFamilyTool) => ReactElement;
  renderEditorial: (tool: ConfidenceResetFamilyTool) => ReactElement;
};

export function createConfidenceResetFamilyTool(overrides: Partial<ConfidenceResetFamilyTool> = {}): ConfidenceResetFamilyTool {
  const baseTool: ConfidenceResetFamilyTool = {
    slug: "confidence-reset-audit",
    familyKey: confidenceResetFamilyKey,
    baseArchetypeSlug: confidenceResetBaseSlug,
    content: content,
    pageMetadata: {
      title: "Confidence Reset Audit - Find What Is Undermining Your Self-Trust",
      description: "Identify where self-trust is leaking through hesitation, second-guessing, comparison, perfection pressure, or slow recovery after mistakes.",
      keywords: ["confidence reset audit","self trust tool","confidence assessment","hesitation and self doubt","comparison and confidence","confidence after mistakes"],
      openGraphTitle: "Confidence Reset Audit",
      openGraphDescription: "A premium interactive tool for reading confidence instability, hesitation pressure, self-trust strength, comparison drag, and recovery after setbacks.",
      twitterTitle: "Confidence Reset Audit",
      twitterDescription: "See where confidence is getting interrupted through hesitation, second-guessing, comparison, perfection pressure, or fear of being wrong.",
    },
    toolMetadata: {
      title: confidenceResetAuditMetadata.title,
      description: confidenceResetAuditMetadata.description,
    },
    faqItems: confidenceResetFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(ConfidenceResetExperience),
    renderEditorial: () => createElement(ConfidenceResetEditorial),
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

export const confidenceResetBaseTool = createConfidenceResetFamilyTool();

const SelfDoubtPatternAuditTool = createConfidenceResetFamilyTool({
  slug: "self-doubt-pattern-audit",
  content: SelfDoubtPatternAuditContent as typeof content,
  pageMetadata: {
    title: "Self-Doubt Pattern Audit - See Why You Doubt Yourself So Fast",
    description: "Audit where self-doubt is coming from, how it gets reinforced, and which situations make your judgment feel least steady.",
    keywords: ["self","doubt","pattern","audit","check","why","do","i"],
    openGraphTitle: "Self-Doubt Pattern Audit",
    openGraphDescription: "Audit where self-doubt is coming from, how it gets reinforced, and which situations make your own judgment feel least steady.",
    twitterTitle: "Self-Doubt Pattern Audit",
    twitterDescription: "Audit where self-doubt is coming from, how it gets reinforced, and which situations make your own judgment feel least steady.",
  },
  toolMetadata: {
    title: SelfDoubtPatternAuditContent.confidenceResetAuditMetadata.title,
    description: SelfDoubtPatternAuditContent.confidenceResetAuditMetadata.description,
  },
  faqItems: SelfDoubtPatternAuditContent.confidenceResetFaqItems,
  renderHero: () => createElement(SelfDoubtPatternAuditHero),
  renderExperience: () => createElement(SelfDoubtPatternAuditExperience),
  renderEditorial: () => createElement(SelfDoubtPatternAuditEditorial),
});

const ImposterFeelingsAuditTool = createConfidenceResetFamilyTool({
  slug: "imposter-feelings-audit",
  content: ImposterFeelingsAuditContent as typeof content,
  pageMetadata: {
    title: "Imposter Feelings Audit - See What Is Driving the Imposter Feeling",
    description: "See whether imposter feelings are being driven by visibility, comparison, new responsibility, performance pressure, or a harsh internal standard.",
    keywords: ["imposter","feelings","audit","syndrome","check","feel","like","a"],
    openGraphTitle: "Imposter Feelings Audit",
    openGraphDescription: "See whether imposter feelings are being driven by visibility, comparison, new responsibilities, pressure to perform, or a harsh internal standard.",
    twitterTitle: "Imposter Feelings Audit",
    twitterDescription: "See whether imposter feelings are being driven by visibility, comparison, new responsibilities, pressure to perform, or a harsh internal standard.",
  },
  toolMetadata: {
    title: ImposterFeelingsAuditContent.confidenceResetAuditMetadata.title,
    description: ImposterFeelingsAuditContent.confidenceResetAuditMetadata.description,
  },
  faqItems: ImposterFeelingsAuditContent.confidenceResetFaqItems,
  renderHero: () => createElement(ImposterFeelingsAuditHero),
  renderExperience: () => createElement(ImposterFeelingsAuditExperience),
  renderEditorial: () => createElement(ImposterFeelingsAuditEditorial),
});

const DecisionConfidenceCheckTool = createConfidenceResetFamilyTool({
  slug: "decision-confidence-check",
  content: DecisionConfidenceCheckContent as typeof content,
  pageMetadata: {
    title: "Decision Confidence Check - See If You Trust Your Own Decisions",
    description: "Check whether decision confidence is being weakened by overanalysis, fear of mistakes, low self-trust, or pressure to get every move right.",
    keywords: ["decision","confidence","check","trust","my","self","doubt","second"],
    openGraphTitle: "Decision Confidence Check",
    openGraphDescription: "Check whether decision confidence is being weakened by overanalysis, fear of mistakes, low self-trust, or pressure to get every move exactly right.",
    twitterTitle: "Decision Confidence Check",
    twitterDescription: "Check whether decision confidence is being weakened by overanalysis, fear of mistakes, low self-trust, or pressure to get every move exactly right.",
  },
  toolMetadata: {
    title: DecisionConfidenceCheckContent.confidenceResetAuditMetadata.title,
    description: DecisionConfidenceCheckContent.confidenceResetAuditMetadata.description,
  },
  faqItems: DecisionConfidenceCheckContent.confidenceResetFaqItems,
  renderHero: () => createElement(DecisionConfidenceCheckHero),
  renderExperience: () => createElement(DecisionConfidenceCheckExperience),
  renderEditorial: () => createElement(DecisionConfidenceCheckEditorial),
});

const VisibilityConfidenceCheckTool = createConfidenceResetFamilyTool({
  slug: "visibility-confidence-check",
  content: VisibilityConfidenceCheckContent as typeof content,
  pageMetadata: {
    title: "Visibility Confidence Check - See Why Being Seen Shakes Your Confidence",
    description: "Map what happens to confidence when you become more visible, exposed, evaluated, or harder to ignore, and where self-protection starts to take over.",
    keywords: ["visibility","confidence","check","fear","of","being","seen","anxiety"],
    openGraphTitle: "Visibility Confidence Check",
    openGraphDescription: "Map what happens to confidence when you become more visible, exposed, evaluated, or harder to ignore, and where self-protection starts to take over.",
    twitterTitle: "Visibility Confidence Check",
    twitterDescription: "Map what happens to confidence when you become more visible, exposed, evaluated, or harder to ignore, and where self-protection starts to take over.",
  },
  toolMetadata: {
    title: VisibilityConfidenceCheckContent.confidenceResetAuditMetadata.title,
    description: VisibilityConfidenceCheckContent.confidenceResetAuditMetadata.description,
  },
  faqItems: VisibilityConfidenceCheckContent.confidenceResetFaqItems,
  renderHero: () => createElement(VisibilityConfidenceCheckHero),
  renderExperience: () => createElement(VisibilityConfidenceCheckExperience),
  renderEditorial: () => createElement(VisibilityConfidenceCheckEditorial),
});

export const confidenceResetFamilyToolRegistry = {
  "confidence-reset-audit": confidenceResetBaseTool,
  "self-doubt-pattern-audit": SelfDoubtPatternAuditTool,
  "imposter-feelings-audit": ImposterFeelingsAuditTool,
  "decision-confidence-check": DecisionConfidenceCheckTool,
  "visibility-confidence-check": VisibilityConfidenceCheckTool,
};
