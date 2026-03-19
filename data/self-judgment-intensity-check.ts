import * as base from "./inner-critic-intensity-scan";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Inner Critic Intensity Scan", "Self-Judgment Intensity Check"],
  { pattern: /inner critic/gi, replacement: "self-judgment" },
  { pattern: /harsh/gi, replacement: "judgmental" },
  { pattern: /self-talk/gi, replacement: "self-appraisal" },
  { pattern: /perfectionistic/gi, replacement: "hypercritical" },
  { pattern: /shame voice/gi, replacement: "judgment voice" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./inner-critic-intensity-scan";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const innerCriticMetadata = mapDeepStrings(base.innerCriticMetadata, rules, transformOptions);

export function calculateInnerCriticResult(...args: Parameters<typeof base.calculateInnerCriticResult>) {
  return mapDeepStrings(base.calculateInnerCriticResult(...args), rules, transformOptions);
}

export const getInitialInnerCriticAnswers = base.getInitialInnerCriticAnswers;

export const innerCriticSteps = mapDeepStrings(base.innerCriticSteps, rules, transformOptions);

export const isInnerCriticStepComplete = base.isInnerCriticStepComplete;

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const innerCriticBands = mapDeepStrings(base.innerCriticBands, rules, transformOptions);

export const innerCriticDimensions = mapDeepStrings(base.innerCriticDimensions, rules, transformOptions);

export const innerCriticFaqItems = mapDeepStrings(base.innerCriticFaqItems, rules, transformOptions);

export const innerCriticStoryBlock = toolStoryOverrides["self-judgment-intensity-check"];

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedInnerCriticTools = mapDeepStrings(base.relatedInnerCriticTools, rules, transformOptions);

export const softenBlocks = mapDeepStrings(base.softenBlocks, rules, transformOptions);

export const strengthenBlocks = mapDeepStrings(base.strengthenBlocks, rules, transformOptions);

export const innerCriticIntensityScanMetadata = {
  ...mapDeepStrings(base.innerCriticIntensityScanMetadata, rules, transformOptions),
  eyebrow: "SELF-JUDGMENT TOOL",
  title: "Self-Judgment Intensity Check",
  description: "See how quickly self-judgment rises under stress, how harsh the internal tone becomes, and what kinds of moments amplify it most.",
};
