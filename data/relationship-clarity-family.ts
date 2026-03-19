import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./relationship-clarity-check";
import { relationshipClarityMetadata, relationshipClarityFaqItems } from "./relationship-clarity-check";
import * as DatingClarityCheckContent from "./dating-clarity-check";
import { ToolHero as DatingClarityCheckHero } from "@/components/tools/relationship-clarity-check/dating-clarity-check-hero";
import { RelationshipClarityExperience as DatingClarityCheckExperience } from "@/components/tools/relationship-clarity-check/dating-clarity-check-experience";
import { RelationshipClarityEditorial as DatingClarityCheckEditorial } from "@/components/tools/relationship-clarity-check/dating-clarity-check-editorial";
import * as TrustConsistencyCheckContent from "./trust-consistency-check";
import { ToolHero as TrustConsistencyCheckHero } from "@/components/tools/relationship-clarity-check/trust-consistency-check-hero";
import { RelationshipClarityExperience as TrustConsistencyCheckExperience } from "@/components/tools/relationship-clarity-check/trust-consistency-check-experience";
import { RelationshipClarityEditorial as TrustConsistencyCheckEditorial } from "@/components/tools/relationship-clarity-check/trust-consistency-check-editorial";
import * as MixedSignalsCheckerContent from "./mixed-signals-checker";
import { ToolHero as MixedSignalsCheckerHero } from "@/components/tools/relationship-clarity-check/mixed-signals-checker-hero";
import { RelationshipClarityExperience as MixedSignalsCheckerExperience } from "@/components/tools/relationship-clarity-check/mixed-signals-checker-experience";
import { RelationshipClarityEditorial as MixedSignalsCheckerEditorial } from "@/components/tools/relationship-clarity-check/mixed-signals-checker-editorial";
import * as EmotionalSafetyCheckContent from "./emotional-safety-check";
import { ToolHero as EmotionalSafetyCheckHero } from "@/components/tools/relationship-clarity-check/emotional-safety-check-hero";
import { RelationshipClarityExperience as EmotionalSafetyCheckExperience } from "@/components/tools/relationship-clarity-check/emotional-safety-check-experience";
import { RelationshipClarityEditorial as EmotionalSafetyCheckEditorial } from "@/components/tools/relationship-clarity-check/emotional-safety-check-editorial";
import { ToolPageHeader } from "@/components/tools/relationship-clarity-check/tool-page-header";
import { ToolHero } from "@/components/tools/relationship-clarity-check/tool-hero";
import { RelationshipClarityExperience } from "@/components/tools/relationship-clarity-check/relationship-clarity-experience";
import { RelationshipClarityEditorial } from "@/components/tools/relationship-clarity-check/relationship-clarity-editorial";

export const relationshipClarityFamilyKey = "relationshipClarity";
export const relationshipClarityBaseSlug = "relationship-clarity-check";

export type RelationshipClarityFamilyToolSlug =
  | "relationship-clarity-check"
  | "dating-clarity-check"
  | "trust-consistency-check"
  | "mixed-signals-checker"
  | "emotional-safety-check";
export type RelationshipClarityFamilyTool = FamilyToolBase<RelationshipClarityFamilyToolSlug> & {
  familyKey: typeof relationshipClarityFamilyKey;
  baseArchetypeSlug: typeof relationshipClarityBaseSlug;
  content: typeof content;
  renderHeader: (tool: RelationshipClarityFamilyTool) => ReactElement;
  renderHero: (tool: RelationshipClarityFamilyTool) => ReactElement;
  renderExperience: (tool: RelationshipClarityFamilyTool) => ReactElement;
  renderEditorial: (tool: RelationshipClarityFamilyTool) => ReactElement;
};

export function createRelationshipClarityFamilyTool(overrides: Partial<RelationshipClarityFamilyTool> = {}): RelationshipClarityFamilyTool {
  const baseTool: RelationshipClarityFamilyTool = {
    slug: "relationship-clarity-check",
    familyKey: relationshipClarityFamilyKey,
    baseArchetypeSlug: relationshipClarityBaseSlug,
    content: content,
    pageMetadata: {
      title: "Relationship Clarity Check - See If the Relationship Feels Clear or Confusing",
      description: "Separate mixed signals from real clarity by reading consistency, communication, emotional safety, trust stability, and confusion load.",
      keywords: ["relationship clarity check","mixed signals tool","relationship confusion test","relationship clarity assessment","mixed signals in relationships","clarity in dating or relationships"],
      openGraphTitle: "Relationship Clarity Check",
      openGraphDescription: "A premium interactive tool for reading relationship signal quality across consistency, communication, emotional safety, trust, and mixed-signal density.",
      twitterTitle: "Relationship Clarity Check",
      twitterDescription: "See whether confusion is coming from mixed signals, inconsistent follow-through, weak communication, emotional unsafety, or unstable trust.",
    },
    toolMetadata: {
      title: relationshipClarityMetadata.title,
      description: relationshipClarityMetadata.description,
    },
    faqItems: relationshipClarityFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(RelationshipClarityExperience),
    renderEditorial: () => createElement(RelationshipClarityEditorial),
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

export const relationshipClarityBaseTool = createRelationshipClarityFamilyTool();

const DatingClarityCheckTool = createRelationshipClarityFamilyTool({
  slug: "dating-clarity-check",
  content: DatingClarityCheckContent as typeof content,
  pageMetadata: {
    title: "Dating Clarity Check - See If This Dating Situation Is Actually Clear",
    description: "See whether the dating pattern is clear, inconsistent, avoidant, slowly building, or too ambiguous to keep carrying without clearer signals.",
    keywords: ["dating","clarity","check","confusion","early","mixed","signals","situation"],
    openGraphTitle: "Dating Clarity Check",
    openGraphDescription: "See whether your dating dynamic is actually clear, inconsistent, avoidant, slowly building, or too ambiguous to keep carrying without clearer signals.",
    twitterTitle: "Dating Clarity Check",
    twitterDescription: "See whether your dating dynamic is actually clear, inconsistent, avoidant, slowly building, or too ambiguous to keep carrying without clearer signals.",
  },
  toolMetadata: {
    title: DatingClarityCheckContent.relationshipClarityMetadata.title,
    description: DatingClarityCheckContent.relationshipClarityMetadata.description,
  },
  faqItems: DatingClarityCheckContent.relationshipClarityFaqItems,
  renderHero: () => createElement(DatingClarityCheckHero),
  renderExperience: () => createElement(DatingClarityCheckExperience),
  renderEditorial: () => createElement(DatingClarityCheckEditorial),
});

const TrustConsistencyCheckTool = createRelationshipClarityFamilyTool({
  slug: "trust-consistency-check",
  content: TrustConsistencyCheckContent as typeof content,
  pageMetadata: {
    title: "Trust Consistency Check - See If Trust Feels Steady or Keeps Shifting",
    description: "Check whether trust cues stay consistent over time or keep wobbling between warmth, distance, reassurance, and doubt.",
    keywords: ["trust","consistency","check","can","i","this","relationship","mixed"],
    openGraphTitle: "Trust Consistency Check",
    openGraphDescription: "Check whether trust signals are staying consistent over time or whether the pattern keeps wobbling between warmth, distance, reassurance, and uncertainty.",
    twitterTitle: "Trust Consistency Check",
    twitterDescription: "Check whether trust signals are staying consistent over time or whether the pattern keeps wobbling between warmth, distance, reassurance, and uncertainty.",
  },
  toolMetadata: {
    title: TrustConsistencyCheckContent.relationshipClarityMetadata.title,
    description: TrustConsistencyCheckContent.relationshipClarityMetadata.description,
  },
  faqItems: TrustConsistencyCheckContent.relationshipClarityFaqItems,
  renderHero: () => createElement(TrustConsistencyCheckHero),
  renderExperience: () => createElement(TrustConsistencyCheckExperience),
  renderEditorial: () => createElement(TrustConsistencyCheckEditorial),
});

const MixedSignalsCheckerTool = createRelationshipClarityFamilyTool({
  slug: "mixed-signals-checker",
  content: MixedSignalsCheckerContent as typeof content,
  pageMetadata: {
    title: "Mixed Signals Checker - See What the Pattern Is Really Telling You",
    description: "Separate genuine mixed signals from slow pacing, fear, inconsistency, low investment, or wishful reading so the pattern gets easier to call clearly.",
    keywords: ["mixed","signals","checker","relationship","confusing","are","they","interested"],
    openGraphTitle: "Mixed Signals Checker",
    openGraphDescription: "Separate genuine mixed signals from slow pacing, fear, inconsistency, low investment, or wishful reading so the pattern gets easier to call clearly.",
    twitterTitle: "Mixed Signals Checker",
    twitterDescription: "Separate genuine mixed signals from slow pacing, fear, inconsistency, low investment, or wishful reading so the pattern gets easier to call clearly.",
  },
  toolMetadata: {
    title: MixedSignalsCheckerContent.relationshipClarityMetadata.title,
    description: MixedSignalsCheckerContent.relationshipClarityMetadata.description,
  },
  faqItems: MixedSignalsCheckerContent.relationshipClarityFaqItems,
  renderHero: () => createElement(MixedSignalsCheckerHero),
  renderExperience: () => createElement(MixedSignalsCheckerExperience),
  renderEditorial: () => createElement(MixedSignalsCheckerEditorial),
});

const EmotionalSafetyCheckTool = createRelationshipClarityFamilyTool({
  slug: "emotional-safety-check",
  content: EmotionalSafetyCheckContent as typeof content,
  pageMetadata: {
    title: "Emotional Safety Check - See If This Relationship Feels Safe Enough",
    description: "See whether the relationship feels safe enough for honesty, repair, vulnerability, and steadiness or whether your system keeps bracing.",
    keywords: ["emotional","safety","check","safe","relationship","unsafe"],
    openGraphTitle: "Emotional Safety Check",
    openGraphDescription: "See whether a relationship feels emotionally safe enough for honesty, repair, vulnerability, and steadiness or whether the system keeps bracing instead.",
    twitterTitle: "Emotional Safety Check",
    twitterDescription: "See whether a relationship feels emotionally safe enough for honesty, repair, vulnerability, and steadiness or whether the system keeps bracing instead.",
  },
  toolMetadata: {
    title: EmotionalSafetyCheckContent.relationshipClarityMetadata.title,
    description: EmotionalSafetyCheckContent.relationshipClarityMetadata.description,
  },
  faqItems: EmotionalSafetyCheckContent.relationshipClarityFaqItems,
  renderHero: () => createElement(EmotionalSafetyCheckHero),
  renderExperience: () => createElement(EmotionalSafetyCheckExperience),
  renderEditorial: () => createElement(EmotionalSafetyCheckEditorial),
});

export const relationshipClarityFamilyToolRegistry = {
  "relationship-clarity-check": relationshipClarityBaseTool,
  "dating-clarity-check": DatingClarityCheckTool,
  "trust-consistency-check": TrustConsistencyCheckTool,
  "mixed-signals-checker": MixedSignalsCheckerTool,
  "emotional-safety-check": EmotionalSafetyCheckTool,
};
