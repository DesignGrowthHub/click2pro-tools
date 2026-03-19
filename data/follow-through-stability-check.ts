import * as base from "./daily-functioning-stability-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Daily Functioning Stability Check", "Follow-Through Stability Check"],
  { pattern: /daily functioning/gi, replacement: "follow-through stability" },
  { pattern: /stability/gi, replacement: "follow-through stability" },
  { pattern: /energy/gi, replacement: "task energy" },
  { pattern: /follow-through/gi, replacement: "follow-through" },
  { pattern: /recovery/gi, replacement: "completion recovery" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./daily-functioning-stability-check";

export const dailyFunctioningMetadata = mapDeepStrings(base.dailyFunctioningMetadata, rules, transformOptions);

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateDailyFunctioningResult(...args: Parameters<typeof base.calculateDailyFunctioningResult>) {
  return mapDeepStrings(base.calculateDailyFunctioningResult(...args), rules, transformOptions);
}

export const dailyFunctioningSteps = mapDeepStrings(base.dailyFunctioningSteps, rules, transformOptions);

export const getInitialDailyFunctioningAnswers = base.getInitialDailyFunctioningAnswers;

export const isDailyFunctioningStepComplete = base.isDailyFunctioningStepComplete;

export const dailyFunctioningFaqItems = mapDeepStrings(base.dailyFunctioningFaqItems, rules, transformOptions);

export const dailyFunctioningStoryBlock = toolStoryOverrides["follow-through-stability-check"];

export const dailyStabilityBands = mapDeepStrings(base.dailyStabilityBands, rules, transformOptions);

export const dailyStabilityDimensions = mapDeepStrings(base.dailyStabilityDimensions, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedDailyTools = mapDeepStrings(base.relatedDailyTools, rules, transformOptions);

export const restorationBlocks = mapDeepStrings(base.restorationBlocks, rules, transformOptions);

export const disruptionBlocks = mapDeepStrings(base.disruptionBlocks, rules, transformOptions);

export const dailyFunctioningStabilityMetadata = {
  ...mapDeepStrings(base.dailyFunctioningStabilityMetadata, rules, transformOptions),
  eyebrow: "FOLLOW-THROUGH STABILITY TOOL",
  title: "Follow-Through Stability Check",
  description: "See whether your system can carry tasks through reliably or whether pressure, fragmentation, weak activation, and low recovery keep breaking follow-through.",
};
