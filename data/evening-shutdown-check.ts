import * as base from "./sleep-pressure-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Sleep Pressure Check", "Evening Shutdown Check"],
  { pattern: /sleep pressure/gi, replacement: "evening shutdown friction" },
  { pattern: /recovery debt/gi, replacement: "carryover activation" },
  { pattern: /nighttime disruption/gi, replacement: "shutdown disruption" },
  { pattern: /next-day carryover/gi, replacement: "evening spillover" },
  { pattern: /sleep/gi, replacement: "shutdown" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./sleep-pressure-check";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const sleepPressureMetadata = {
  ...mapDeepStrings(base.sleepPressureMetadata, rules, transformOptions),
  eyebrow: "EVENING SHUTDOWN TOOL",
  title: "Evening Shutdown Check",
  description: "See what is preventing real evening shutdown, from mental carryover and stimulation load to weak decompression cues and unfinished activation.",
};

export function calculateSleepPressure(...args: Parameters<typeof base.calculateSleepPressure>) {
  return mapDeepStrings(base.calculateSleepPressure(...args), rules, transformOptions);
}

export const getInitialSleepAnswers = base.getInitialSleepAnswers;

export const isSleepStepComplete = base.isSleepStepComplete;

export const sleepPressureSteps = mapDeepStrings(base.sleepPressureSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedSleepTools = mapDeepStrings(base.relatedSleepTools, rules, transformOptions);

export const sleepBands = mapDeepStrings(base.sleepBands, rules, transformOptions);

export const sleepDimensions = mapDeepStrings(base.sleepDimensions, rules, transformOptions);

export const sleepFaqItems = mapDeepStrings(base.sleepFaqItems, rules, transformOptions);

export const sleepStoryBlock = toolStoryOverrides["evening-shutdown-check"];
