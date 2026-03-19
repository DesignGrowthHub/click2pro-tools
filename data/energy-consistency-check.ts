import * as base from "./daily-functioning-stability-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Daily Functioning Stability Check", "Energy Consistency Check"],
  { pattern: /daily functioning/gi, replacement: "energy consistency" },
  { pattern: /stability/gi, replacement: "consistency" },
  { pattern: /follow-through/gi, replacement: "usable output" },
  { pattern: /recovery/gi, replacement: "energy recovery" },
  { pattern: /emotional steadiness/gi, replacement: "energy steadiness" },
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

export const dailyFunctioningStoryBlock = toolStoryOverrides["energy-consistency-check"];

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
  eyebrow: "ENERGY CONSISTENCY TOOL",
  title: "Energy Consistency Check",
  description: "Check whether energy is staying stable enough through the day or whether uneven activation, crashes, and weak recovery are quietly reshaping everything else.",
};
