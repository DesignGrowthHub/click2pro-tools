import * as base from "./work-stress-load-mapper";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Work Stress Load Mapper", "Invisible Workload Mapper"],
  { pattern: /work stress/gi, replacement: "invisible workload" },
  { pattern: /work-pressure/gi, replacement: "hidden workload pressure" },
  { pattern: /work pressure/gi, replacement: "hidden workload pressure" },
  { pattern: /workload/gi, replacement: "hidden workload" },
  { pattern: /meetings/gi, replacement: "coordination" },
  { pattern: /ambiguity/gi, replacement: "under-recognized work" },
  { pattern: /invisible responsibility/gi, replacement: "invisible workload" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./work-stress-load-mapper";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const workStressMetadata = {
  ...mapDeepStrings(base.workStressMetadata, rules, transformOptions),
  eyebrow: "INVISIBLE WORKLOAD TOOL",
  title: "Invisible Workload Mapper",
  description: "Map the behind-the-scenes load that does not get counted clearly, including coordination, emotional labor, memory load, support work, and hidden responsibility.",
};

export function calculateWorkStressResult(...args: Parameters<typeof base.calculateWorkStressResult>) {
  return mapDeepStrings(base.calculateWorkStressResult(...args), rules, transformOptions);
}

export const getInitialWorkStressAnswers = base.getInitialWorkStressAnswers;

export const isWorkStressStepComplete = base.isWorkStressStepComplete;

export const workStressSteps = mapDeepStrings(base.workStressSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const loadReductionBlocks = mapDeepStrings(base.loadReductionBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const pressureIncreaseBlocks = mapDeepStrings(base.pressureIncreaseBlocks, rules, transformOptions);

export const relatedWorkStressTools = mapDeepStrings(base.relatedWorkStressTools, rules, transformOptions);

export const workStressBands = mapDeepStrings(base.workStressBands, rules, transformOptions);

export const workStressDimensions = mapDeepStrings(base.workStressDimensions, rules, transformOptions);

export const workStressFaqItems = mapDeepStrings(base.workStressFaqItems, rules, transformOptions);

export const workStressStoryBlock = toolStoryOverrides["invisible-workload-mapper"];

export const workStressLoadMapperMetadata = {
  ...mapDeepStrings(base.workStressLoadMapperMetadata, rules, transformOptions),
  eyebrow: "INVISIBLE WORKLOAD TOOL",
  title: "Invisible Workload Mapper",
  description: "Map the behind-the-scenes load that does not get counted clearly, including coordination, emotional labor, memory load, support work, and hidden responsibility.",
};
