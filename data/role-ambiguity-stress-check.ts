import * as base from "./work-stress-load-mapper";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Work Stress Load Mapper", "Role Ambiguity Stress Check"],
  { pattern: /work stress/gi, replacement: "role ambiguity stress" },
  { pattern: /work-pressure/gi, replacement: "role ambiguity pressure" },
  { pattern: /work pressure/gi, replacement: "role ambiguity pressure" },
  { pattern: /workload/gi, replacement: "expectation load" },
  { pattern: /meetings/gi, replacement: "unclear ownership" },
  { pattern: /ambiguity/gi, replacement: "role ambiguity" },
  { pattern: /invisible responsibility/gi, replacement: "blurred responsibility" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./work-stress-load-mapper";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const workStressMetadata = mapDeepStrings(base.workStressMetadata, rules, transformOptions);

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

export const workStressStoryBlock = toolStoryOverrides["role-ambiguity-stress-check"];

export const workStressLoadMapperMetadata = {
  ...mapDeepStrings(base.workStressLoadMapperMetadata, rules, transformOptions),
  eyebrow: "ROLE AMBIGUITY TOOL",
  title: "Role Ambiguity Stress Check",
  description: "Check whether unclear expectations, shifting priorities, vague accountability, and blurred ownership are the real sources of your work stress.",
};
