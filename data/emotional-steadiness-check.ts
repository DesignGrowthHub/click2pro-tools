import * as base from "./daily-functioning-stability-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Daily Functioning Stability Check", "Emotional Steadiness Check"],
  { pattern: /daily functioning/gi, replacement: "emotional steadiness" },
  { pattern: /stability/gi, replacement: "steadiness" },
  { pattern: /energy/gi, replacement: "emotional energy" },
  { pattern: /follow-through/gi, replacement: "regulation continuity" },
  { pattern: /recovery/gi, replacement: "emotional reset" },
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

export const dailyFunctioningStoryBlock = toolStoryOverrides["emotional-steadiness-check"];

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
  eyebrow: "EMOTIONAL STEADINESS TOOL",
  title: "Emotional Steadiness Check",
  description: "Check whether emotional steadiness is holding through the day or whether stress, triggers, fatigue, and weak resets are making the system wobble too easily.",
};
