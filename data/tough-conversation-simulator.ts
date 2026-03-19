import * as base from "./decision-fatigue-simulator";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Decision Fatigue Simulator", "Tough Conversation Simulator"],
  { pattern: /decision fatigue/gi, replacement: "conversation pressure" },
  { pattern: /decision/gi, replacement: "conversation" },
  { pattern: /choices/gi, replacement: "moves" },
  { pattern: /choice/gi, replacement: "move" },
  { pattern: /clarity/gi, replacement: "conversation clarity" },
  { pattern: /uncertainty/gi, replacement: "interpersonal uncertainty" },
  { pattern: /mental load/gi, replacement: "conversation load" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./decision-fatigue-simulator";

export const decisionToolMetadata = {
  ...mapDeepStrings(base.decisionToolMetadata, rules, transformOptions),
  eyebrow: "CONVERSATION SIMULATOR",
  title: "Tough Conversation Simulator",
  description: "See how pressure, emotional exposure, uncertainty, and timing change your clarity when you need to have a difficult conversation well.",
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

export const decisionStoryBlock = toolStoryOverrides["tough-conversation-simulator"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecisionTools = mapDeepStrings(base.relatedDecisionTools, rules, transformOptions);
