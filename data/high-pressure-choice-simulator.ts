import * as base from "./decision-fatigue-simulator";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Decision Fatigue Simulator", "High-Pressure Choice Simulator"],
  { pattern: /decision fatigue/gi, replacement: "high-pressure choice load" },
  { pattern: /repeated choices/gi, replacement: "high-pressure choices" },
  { pattern: /decision/gi, replacement: "choice" },
  { pattern: /choices/gi, replacement: "high-pressure choices" },
  { pattern: /clarity/gi, replacement: "judgment" },
  { pattern: /uncertainty/gi, replacement: "consequence pressure" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./decision-fatigue-simulator";

export const decisionToolMetadata = {
  ...mapDeepStrings(base.decisionToolMetadata, rules, transformOptions),
  eyebrow: "HIGH-PRESSURE CHOICE TOOL",
  title: "High-Pressure Choice Simulator",
  description: "Simulate how urgency, consequences, low margin, and stress load affect judgment when a choice has to be made under pressure.",
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

export const decisionStoryBlock = toolStoryOverrides["high-pressure-choice-simulator"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecisionTools = mapDeepStrings(base.relatedDecisionTools, rules, transformOptions);
