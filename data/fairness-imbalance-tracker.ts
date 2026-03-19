import * as base from "./resentment-buildup-tracker";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Resentment Buildup Tracker", "Fairness Imbalance Tracker"],
  { pattern: /resentment buildup/gi, replacement: "fairness imbalance" },
  { pattern: /resentment/gi, replacement: "fairness strain" },
  { pattern: /unfairness/gi, replacement: "fairness imbalance" },
  { pattern: /silent carrying/gi, replacement: "one-sided carrying" },
  { pattern: /stored emotional pressure/gi, replacement: "stored fairness pressure" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./resentment-buildup-tracker";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const resentmentBuildupMetadata = mapDeepStrings(base.resentmentBuildupMetadata, rules, transformOptions);

export function calculateResentmentResult(...args: Parameters<typeof base.calculateResentmentResult>) {
  return mapDeepStrings(base.calculateResentmentResult(...args), rules, transformOptions);
}

export const getInitialResentmentAnswers = base.getInitialResentmentAnswers;

export const isResentmentStepComplete = base.isResentmentStepComplete;

export const resentmentSteps = mapDeepStrings(base.resentmentSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const feedBlocks = mapDeepStrings(base.feedBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedResentmentTools = mapDeepStrings(base.relatedResentmentTools, rules, transformOptions);

export const relieveBlocks = mapDeepStrings(base.relieveBlocks, rules, transformOptions);

export const resentmentBands = mapDeepStrings(base.resentmentBands, rules, transformOptions);

export const resentmentDimensions = mapDeepStrings(base.resentmentDimensions, rules, transformOptions);

export const resentmentFaqItems = mapDeepStrings(base.resentmentFaqItems, rules, transformOptions);

export const resentmentStoryBlock = toolStoryOverrides["fairness-imbalance-tracker"];

export const resentmentBuildupTrackerMetadata = {
  ...mapDeepStrings(base.resentmentBuildupTrackerMetadata, rules, transformOptions),
  eyebrow: "FAIRNESS IMBALANCE TOOL",
  title: "Fairness Imbalance Tracker",
  description: "Track whether fairness keeps slipping through overgiving, uneven effort, blurred responsibility, or repeated one-sidedness that never gets repaired.",
};
