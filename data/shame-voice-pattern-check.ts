import * as base from "./inner-critic-intensity-scan";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Inner Critic Intensity Scan", "Shame Voice Pattern Check"],
  { pattern: /inner critic/gi, replacement: "shame voice" },
  { pattern: /harsh/gi, replacement: "shaming" },
  { pattern: /self-talk/gi, replacement: "internal shame language" },
  { pattern: /perfectionistic/gi, replacement: "exposure-sensitive" },
  { pattern: /shame voice/gi, replacement: "shame voice" },
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

export const innerCriticStoryBlock = toolStoryOverrides["shame-voice-pattern-check"];

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedInnerCriticTools = mapDeepStrings(base.relatedInnerCriticTools, rules, transformOptions);

export const softenBlocks = mapDeepStrings(base.softenBlocks, rules, transformOptions);

export const strengthenBlocks = mapDeepStrings(base.strengthenBlocks, rules, transformOptions);

export const innerCriticIntensityScanMetadata = {
  ...mapDeepStrings(base.innerCriticIntensityScanMetadata, rules, transformOptions),
  eyebrow: "SHAME VOICE TOOL",
  title: "Shame Voice Pattern Check",
  description: "Map the voice that shows up after mistakes, exposure, criticism, or failure and see how shame language reshapes your internal world.",
};
