import * as base from "./daily-functioning-stability-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Daily Functioning Stability Check", "Day-Structure Stability Check"],
  { pattern: /daily functioning/gi, replacement: "day structure" },
  { pattern: /stability/gi, replacement: "structure stability" },
  { pattern: /energy/gi, replacement: "daily energy" },
  { pattern: /follow-through/gi, replacement: "day continuity" },
  { pattern: /recovery/gi, replacement: "daily reset" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./daily-functioning-stability-check";

export const dailyFunctioningMetadata = {
  ...mapDeepStrings(base.dailyFunctioningMetadata, rules, transformOptions),
  eyebrow: "DAY STRUCTURE TOOL",
  title: "Day-Structure Stability Check",
  description: "See whether your day structure is steady enough to support focus, pacing, recovery, and follow-through or whether the rhythm keeps collapsing under load.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateDailyFunctioningResult(...args: Parameters<typeof base.calculateDailyFunctioningResult>) {
  return mapDeepStrings(base.calculateDailyFunctioningResult(...args), rules, transformOptions);
}

export const dailyFunctioningSteps = mapDeepStrings(base.dailyFunctioningSteps, rules, transformOptions);

export const getInitialDailyFunctioningAnswers = base.getInitialDailyFunctioningAnswers;

export const isDailyFunctioningStepComplete = base.isDailyFunctioningStepComplete;

export const dailyFunctioningFaqItems = mapDeepStrings(base.dailyFunctioningFaqItems, rules, transformOptions);

export const dailyFunctioningStoryBlock = toolStoryOverrides["day-structure-stability-check"];

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
  eyebrow: "DAY STRUCTURE TOOL",
  title: "Day-Structure Stability Check",
  description: "See whether your day structure is steady enough to support focus, pacing, recovery, and follow-through or whether the rhythm keeps collapsing under load.",
};
