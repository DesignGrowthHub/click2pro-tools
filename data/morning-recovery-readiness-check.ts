import * as base from "./sleep-pressure-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Sleep Pressure Check", "Morning Recovery Readiness Check"],
  { pattern: /sleep pressure/gi, replacement: "morning recovery readiness" },
  { pattern: /recovery debt/gi, replacement: "overnight recovery gap" },
  { pattern: /nighttime disruption/gi, replacement: "night carryover" },
  { pattern: /next-day carryover/gi, replacement: "morning carryover" },
  { pattern: /sleep/gi, replacement: "recovery" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./sleep-pressure-check";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const sleepPressureMetadata = {
  ...mapDeepStrings(base.sleepPressureMetadata, rules, transformOptions),
  eyebrow: "MORNING READINESS TOOL",
  title: "Morning Recovery Readiness Check",
  description: "Check whether your system is waking up with enough restoration, clarity, and recovery margin to meet the day without starting already behind.",
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

export const sleepStoryBlock = toolStoryOverrides["morning-recovery-readiness-check"];
