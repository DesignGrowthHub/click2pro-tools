import * as base from "./sleep-pressure-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Sleep Pressure Check", "Nighttime Anxiety Pattern Check"],
  { pattern: /sleep pressure/gi, replacement: "nighttime anxiety load" },
  { pattern: /recovery debt/gi, replacement: "unfinished stress carryover" },
  { pattern: /nighttime disruption/gi, replacement: "nighttime anxiety" },
  { pattern: /next-day carryover/gi, replacement: "next-day exhaustion" },
  { pattern: /sleep/gi, replacement: "nighttime rest" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./sleep-pressure-check";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const sleepPressureMetadata = {
  ...mapDeepStrings(base.sleepPressureMetadata, rules, transformOptions),
  eyebrow: "NIGHTTIME ANXIETY TOOL",
  title: "Nighttime Anxiety Pattern Check",
  description: "See whether nighttime anxiety is being fueled by unfinished stress, mental scanning, body activation, fear of not sleeping, or weak evening downshift.",
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

export const sleepStoryBlock = toolStoryOverrides["nighttime-anxiety-pattern-check"];
