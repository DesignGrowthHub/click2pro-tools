import * as base from "./decision-fatigue-simulator";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Decision Fatigue Simulator", "Relationship Decision Simulator"],
  { pattern: /decision fatigue/gi, replacement: "relationship decision strain" },
  { pattern: /decision/gi, replacement: "relationship decision" },
  { pattern: /choices/gi, replacement: "relationship choices" },
  { pattern: /choice/gi, replacement: "relationship choice" },
  { pattern: /clarity/gi, replacement: "relationship clarity" },
  { pattern: /uncertainty/gi, replacement: "mixed-signal uncertainty" },
  { pattern: /mental load/gi, replacement: "relational load" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./decision-fatigue-simulator";

export const decisionToolMetadata = {
  ...mapDeepStrings(base.decisionToolMetadata, rules, transformOptions),
  eyebrow: "RELATIONSHIP DECISION TOOL",
  title: "Relationship Decision Simulator",
  description: "Map how hope, doubt, attachment pull, fear of regret, and mixed signals change clarity when a relationship decision keeps getting delayed.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const simulatorScenarios = mapDeepStrings(base.simulatorScenarios, rules, transformOptions);

export function calculateDecisionFatigueSimulation(...args: Parameters<typeof base.calculateDecisionFatigueSimulation>) {
  return mapDeepStrings(base.calculateDecisionFatigueSimulation(...args), rules, transformOptions);
}

export const getInitialDecisionAnswers = base.getInitialDecisionAnswers;

export const isDecisionScenarioComplete = base.isDecisionScenarioComplete;

export const decisionBands = mapDeepStrings(base.decisionBands, rules, transformOptions);

export const decisionDimensions = mapDeepStrings(base.decisionDimensions, rules, transformOptions);

export const decisionFaqItems = mapDeepStrings(base.decisionFaqItems, rules, transformOptions);

export const decisionStoryBlock = toolStoryOverrides["relationship-decision-simulator"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecisionTools = mapDeepStrings(base.relatedDecisionTools, rules, transformOptions);
