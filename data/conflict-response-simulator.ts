import * as base from "./decision-fatigue-simulator";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Decision Fatigue Simulator", "Conflict Response Simulator"],
  { pattern: /decision fatigue/gi, replacement: "conflict-response strain" },
  { pattern: /decision/gi, replacement: "response" },
  { pattern: /choices/gi, replacement: "responses" },
  { pattern: /choice/gi, replacement: "response" },
  { pattern: /clarity/gi, replacement: "response clarity" },
  { pattern: /uncertainty/gi, replacement: "interpersonal tension" },
  { pattern: /mental load/gi, replacement: "emotional load" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./decision-fatigue-simulator";

export const decisionToolMetadata = {
  ...mapDeepStrings(base.decisionToolMetadata, rules, transformOptions),
  eyebrow: "CONFLICT RESPONSE TOOL",
  title: "Conflict Response Simulator",
  description: "Simulate how clarity changes once tension rises, emotional load builds, and you have to choose between withdrawal, repair, defensiveness, or direct response.",
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

export const decisionStoryBlock = toolStoryOverrides["conflict-response-simulator"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecisionTools = mapDeepStrings(base.relatedDecisionTools, rules, transformOptions);
