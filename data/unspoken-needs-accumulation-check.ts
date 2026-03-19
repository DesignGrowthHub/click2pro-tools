import * as base from "./resentment-buildup-tracker";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Resentment Buildup Tracker", "Unspoken Needs Accumulation Check"],
  { pattern: /resentment buildup/gi, replacement: "unspoken-needs accumulation" },
  { pattern: /resentment/gi, replacement: "unspoken need pressure" },
  { pattern: /unfairness/gi, replacement: "unmet needs" },
  { pattern: /silent carrying/gi, replacement: "silent deferral" },
  { pattern: /stored emotional pressure/gi, replacement: "stored unmet need pressure" },
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

export const resentmentStoryBlock = toolStoryOverrides["unspoken-needs-accumulation-check"];

export const resentmentBuildupTrackerMetadata = {
  ...mapDeepStrings(base.resentmentBuildupTrackerMetadata, rules, transformOptions),
  eyebrow: "UNSPOKEN NEEDS TOOL",
  title: "Unspoken Needs Accumulation Check",
  description: "See whether important needs keep getting deferred, minimized, or silently accumulated until pressure builds under the surface.",
};
