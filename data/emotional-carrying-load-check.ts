import * as base from "./resentment-buildup-tracker";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Resentment Buildup Tracker", "Emotional Carrying Load Check"],
  { pattern: /resentment buildup/gi, replacement: "emotional carrying load" },
  { pattern: /resentment/gi, replacement: "carrying strain" },
  { pattern: /unfairness/gi, replacement: "over-carrying" },
  { pattern: /silent carrying/gi, replacement: "emotional carrying" },
  { pattern: /stored emotional pressure/gi, replacement: "stored carrying pressure" },
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

export const resentmentStoryBlock = toolStoryOverrides["emotional-carrying-load-check"];

export const resentmentBuildupTrackerMetadata = {
  ...mapDeepStrings(base.resentmentBuildupTrackerMetadata, rules, transformOptions),
  eyebrow: "EMOTIONAL CARRYING TOOL",
  title: "Emotional Carrying Load Check",
  description: "See whether you are carrying too much emotional coordination, relational management, or unspoken responsibility for everyone else’s stability.",
};
