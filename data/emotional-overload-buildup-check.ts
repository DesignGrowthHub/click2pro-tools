import * as base from "./resentment-buildup-tracker";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Resentment Buildup Tracker", "Emotional Overload Buildup Check"],
  { pattern: /resentment buildup/gi, replacement: "emotional overload buildup" },
  { pattern: /resentment/gi, replacement: "emotional overload" },
  { pattern: /unfairness/gi, replacement: "overload" },
  { pattern: /silent carrying/gi, replacement: "emotional carrying" },
  { pattern: /stored emotional pressure/gi, replacement: "stored emotional load" },
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

export const resentmentStoryBlock = toolStoryOverrides["emotional-overload-buildup-check"];

export const resentmentBuildupTrackerMetadata = {
  ...mapDeepStrings(base.resentmentBuildupTrackerMetadata, rules, transformOptions),
  eyebrow: "EMOTIONAL OVERLOAD TOOL",
  title: "Emotional Overload Buildup Check",
  description: "Track whether emotional overload is building through overholding, weak recovery, quiet accumulation, unprocessed strain, and too little release.",
};
