import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./decision-fatigue-simulator";
import { decisionToolMetadata, decisionFaqItems } from "./decision-fatigue-simulator";
import * as ConflictResponseSimulatorContent from "./conflict-response-simulator";
import { ToolHero as ConflictResponseSimulatorHero } from "@/components/tools/decision-fatigue-simulator/conflict-response-simulator-hero";
import { DecisionFatigueExperience as ConflictResponseSimulatorExperience } from "@/components/tools/decision-fatigue-simulator/conflict-response-simulator-experience";
import { DecisionEditorial as ConflictResponseSimulatorEditorial } from "@/components/tools/decision-fatigue-simulator/conflict-response-simulator-editorial";
import * as ToughConversationSimulatorContent from "./tough-conversation-simulator";
import { ToolHero as ToughConversationSimulatorHero } from "@/components/tools/decision-fatigue-simulator/tough-conversation-simulator-hero";
import { DecisionFatigueExperience as ToughConversationSimulatorExperience } from "@/components/tools/decision-fatigue-simulator/tough-conversation-simulator-experience";
import { DecisionEditorial as ToughConversationSimulatorEditorial } from "@/components/tools/decision-fatigue-simulator/tough-conversation-simulator-editorial";
import * as HighPressureChoiceSimulatorContent from "./high-pressure-choice-simulator";
import { ToolHero as HighPressureChoiceSimulatorHero } from "@/components/tools/decision-fatigue-simulator/high-pressure-choice-simulator-hero";
import { DecisionFatigueExperience as HighPressureChoiceSimulatorExperience } from "@/components/tools/decision-fatigue-simulator/high-pressure-choice-simulator-experience";
import { DecisionEditorial as HighPressureChoiceSimulatorEditorial } from "@/components/tools/decision-fatigue-simulator/high-pressure-choice-simulator-editorial";
import * as RelationshipDecisionSimulatorContent from "./relationship-decision-simulator";
import { ToolHero as RelationshipDecisionSimulatorHero } from "@/components/tools/decision-fatigue-simulator/relationship-decision-simulator-hero";
import { DecisionFatigueExperience as RelationshipDecisionSimulatorExperience } from "@/components/tools/decision-fatigue-simulator/relationship-decision-simulator-experience";
import { DecisionEditorial as RelationshipDecisionSimulatorEditorial } from "@/components/tools/decision-fatigue-simulator/relationship-decision-simulator-editorial";
import { ToolPageHeader } from "@/components/tools/decision-fatigue-simulator/tool-page-header";
import { ToolHero } from "@/components/tools/decision-fatigue-simulator/tool-hero";
import { DecisionFatigueExperience } from "@/components/tools/decision-fatigue-simulator/decision-fatigue-experience";
import { DecisionEditorial } from "@/components/tools/decision-fatigue-simulator/decision-editorial";

export const decisionFatigueFamilyKey = "decisionFatigue";
export const decisionFatigueBaseSlug = "decision-fatigue-simulator";

export type DecisionFatigueFamilyToolSlug =
  | "decision-fatigue-simulator"
  | "conflict-response-simulator"
  | "tough-conversation-simulator"
  | "high-pressure-choice-simulator"
  | "relationship-decision-simulator";
export type DecisionFatigueFamilyTool = FamilyToolBase<DecisionFatigueFamilyToolSlug> & {
  familyKey: typeof decisionFatigueFamilyKey;
  baseArchetypeSlug: typeof decisionFatigueBaseSlug;
  content: typeof content;
  renderHeader: (tool: DecisionFatigueFamilyTool) => ReactElement;
  renderHero: (tool: DecisionFatigueFamilyTool) => ReactElement;
  renderExperience: (tool: DecisionFatigueFamilyTool) => ReactElement;
  renderEditorial: (tool: DecisionFatigueFamilyTool) => ReactElement;
};

export function createDecisionFatigueFamilyTool(overrides: Partial<DecisionFatigueFamilyTool> = {}): DecisionFatigueFamilyTool {
  const baseTool: DecisionFatigueFamilyTool = {
    slug: "decision-fatigue-simulator",
    familyKey: decisionFatigueFamilyKey,
    baseArchetypeSlug: decisionFatigueBaseSlug,
    content: content,
    pageMetadata: {
      title: "Decision Fatigue Simulator - Measure How Mental Load Changes Your Choices",
      description: "See how repeated choices, uncertainty, low recovery, and mental clutter change your judgment across the day.",
      keywords: ["decision fatigue simulator","decision fatigue tool","mental load simulator","decision strain tool","clarity depletion simulator"],
      openGraphTitle: "Decision Fatigue Simulator",
      openGraphDescription: "A premium interactive decision lab for simulating clarity loss, cognitive load accumulation, and decision strain across one day.",
      twitterTitle: "Decision Fatigue Simulator",
      twitterDescription: "See how repeated choices, uncertainty, and low recovery change decision clarity across the day.",
    },
    toolMetadata: {
      title: decisionToolMetadata.title,
      description: decisionToolMetadata.description,
    },
    faqItems: decisionFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(DecisionFatigueExperience),
    renderEditorial: () => createElement(DecisionEditorial),
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

export const decisionFatigueBaseTool = createDecisionFatigueFamilyTool();

const ConflictResponseSimulatorTool = createDecisionFatigueFamilyTool({
  slug: "conflict-response-simulator",
  content: ConflictResponseSimulatorContent as typeof content,
  pageMetadata: {
    title: "Conflict Response Simulator - See How Tension Changes Your Decisions",
    description: "Explore how conflict pressure changes your clarity, timing, and response style once emotions rise.",
    keywords: ["conflict","response","simulator","style","tension","argument"],
    openGraphTitle: "Conflict Response Simulator",
    openGraphDescription: "Simulate how clarity changes once tension rises, emotional load builds, and you have to choose between withdrawal, repair, defensiveness, or direct response.",
    twitterTitle: "Conflict Response Simulator",
    twitterDescription: "Simulate how clarity changes once tension rises, emotional load builds, and you have to choose between withdrawal, repair, defensiveness, or direct response.",
  },
  toolMetadata: {
    title: ConflictResponseSimulatorContent.decisionToolMetadata.title,
    description: ConflictResponseSimulatorContent.decisionToolMetadata.description,
  },
  faqItems: ConflictResponseSimulatorContent.decisionFaqItems,
  renderHero: () => createElement(ConflictResponseSimulatorHero),
  renderExperience: () => createElement(ConflictResponseSimulatorExperience),
  renderEditorial: () => createElement(ConflictResponseSimulatorEditorial),
});

const ToughConversationSimulatorTool = createDecisionFatigueFamilyTool({
  slug: "tough-conversation-simulator",
  content: ToughConversationSimulatorContent as typeof content,
  pageMetadata: {
    title: "Tough Conversation Simulator - See How Ready You Are for a Hard Talk",
    description: "See what happens to clarity when a difficult conversation carries emotional weight, risk, or poor timing.",
    keywords: ["tough","conversation","simulator","difficult","hard","prep","pressure"],
    openGraphTitle: "Tough Conversation Simulator",
    openGraphDescription: "See how pressure, emotional exposure, uncertainty, and timing change your clarity when you need to have a difficult conversation well.",
    twitterTitle: "Tough Conversation Simulator",
    twitterDescription: "See how pressure, emotional exposure, uncertainty, and timing change your clarity when you need to have a difficult conversation well.",
  },
  toolMetadata: {
    title: ToughConversationSimulatorContent.decisionToolMetadata.title,
    description: ToughConversationSimulatorContent.decisionToolMetadata.description,
  },
  faqItems: ToughConversationSimulatorContent.decisionFaqItems,
  renderHero: () => createElement(ToughConversationSimulatorHero),
  renderExperience: () => createElement(ToughConversationSimulatorExperience),
  renderEditorial: () => createElement(ToughConversationSimulatorEditorial),
});

const HighPressureChoiceSimulatorTool = createDecisionFatigueFamilyTool({
  slug: "high-pressure-choice-simulator",
  content: HighPressureChoiceSimulatorContent as typeof content,
  pageMetadata: {
    title: "High-Pressure Choice Simulator - See How You Think Under Pressure",
    description: "Measure how urgency, consequences, low margin, and stress load affect judgment when a decision cannot wait.",
    keywords: ["high","pressure","choice","simulator","decision","under","urgent","decisions"],
    openGraphTitle: "High-Pressure Choice Simulator",
    openGraphDescription: "Simulate how urgency, consequences, low margin, and stress load affect judgment when a choice has to be made under pressure.",
    twitterTitle: "High-Pressure Choice Simulator",
    twitterDescription: "Simulate how urgency, consequences, low margin, and stress load affect judgment when a choice has to be made under pressure.",
  },
  toolMetadata: {
    title: HighPressureChoiceSimulatorContent.decisionToolMetadata.title,
    description: HighPressureChoiceSimulatorContent.decisionToolMetadata.description,
  },
  faqItems: HighPressureChoiceSimulatorContent.decisionFaqItems,
  renderHero: () => createElement(HighPressureChoiceSimulatorHero),
  renderExperience: () => createElement(HighPressureChoiceSimulatorExperience),
  renderEditorial: () => createElement(HighPressureChoiceSimulatorEditorial),
});

const RelationshipDecisionSimulatorTool = createDecisionFatigueFamilyTool({
  slug: "relationship-decision-simulator",
  content: RelationshipDecisionSimulatorContent as typeof content,
  pageMetadata: {
    title: "Relationship Decision Simulator - See Why the Decision Still Feels Stuck",
    description: "Map how hope, fear of regret, attachment pull, and mixed signals change clarity when a relationship decision stays open too long.",
    keywords: ["relationship","decision","simulator","stay","or","leave","choice","mixed"],
    openGraphTitle: "Relationship Decision Simulator",
    openGraphDescription: "Map how hope, doubt, attachment pull, fear of regret, and mixed signals change clarity when a relationship decision keeps getting delayed.",
    twitterTitle: "Relationship Decision Simulator",
    twitterDescription: "Map how hope, doubt, attachment pull, fear of regret, and mixed signals change clarity when a relationship decision keeps getting delayed.",
  },
  toolMetadata: {
    title: RelationshipDecisionSimulatorContent.decisionToolMetadata.title,
    description: RelationshipDecisionSimulatorContent.decisionToolMetadata.description,
  },
  faqItems: RelationshipDecisionSimulatorContent.decisionFaqItems,
  renderHero: () => createElement(RelationshipDecisionSimulatorHero),
  renderExperience: () => createElement(RelationshipDecisionSimulatorExperience),
  renderEditorial: () => createElement(RelationshipDecisionSimulatorEditorial),
});

export const decisionFatigueFamilyToolRegistry = {
  "decision-fatigue-simulator": decisionFatigueBaseTool,
  "conflict-response-simulator": ConflictResponseSimulatorTool,
  "tough-conversation-simulator": ToughConversationSimulatorTool,
  "high-pressure-choice-simulator": HighPressureChoiceSimulatorTool,
  "relationship-decision-simulator": RelationshipDecisionSimulatorTool,
};
