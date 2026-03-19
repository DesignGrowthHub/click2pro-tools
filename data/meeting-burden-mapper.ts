import * as base from "./work-stress-load-mapper";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Work Stress Load Mapper", "Meeting Burden Mapper"],
  { pattern: /work stress/gi, replacement: "meeting burden" },
  { pattern: /work-pressure/gi, replacement: "meeting pressure" },
  { pattern: /work pressure/gi, replacement: "meeting pressure" },
  { pattern: /workload/gi, replacement: "calendar load" },
  { pattern: /ambiguity/gi, replacement: "meeting sprawl" },
  { pattern: /invisible responsibility/gi, replacement: "coordination overhead" },
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

export const workStressStoryBlock = toolStoryOverrides["meeting-burden-mapper"];

export const workStressLoadMapperMetadata = {
  ...mapDeepStrings(base.workStressLoadMapperMetadata, rules, transformOptions),
  eyebrow: "MEETING LOAD TOOL",
  title: "Meeting Burden Mapper",
  description: "See how much strain is actually coming from meetings, coordination drag, context resets, weak agendas, and too little uninterrupted time to think.",
};
