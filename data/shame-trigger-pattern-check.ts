import * as base from "./emotional-trigger-decoder";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Emotional Trigger Decoder", "Shame Trigger Pattern Check"],
  { pattern: /emotional trigger/gi, replacement: "shame trigger" },
  { pattern: /emotional activation/gi, replacement: "shame activation" },
  { pattern: /reactivity/gi, replacement: "shame reactivity" },
  { pattern: /recovery drag/gi, replacement: "shame carryover" },
  { pattern: /trigger/gi, replacement: "shame trigger" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./emotional-trigger-decoder";

export const emotionalTriggerMetadata = {
  ...mapDeepStrings(base.emotionalTriggerMetadata, rules, transformOptions),
  eyebrow: "SHAME TRIGGER TOOL",
  title: "Shame Trigger Pattern Check",
  description: "Map what most quickly pulls the system into shame, self-contraction, hiding, collapse, or harsh self-surveillance after exposure or perceived failure.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateEmotionalTriggerResult(...args: Parameters<typeof base.calculateEmotionalTriggerResult>) {
  return mapDeepStrings(base.calculateEmotionalTriggerResult(...args), rules, transformOptions);
}

export const getInitialTriggerAnswers = base.getInitialTriggerAnswers;

export const isTriggerStepComplete = base.isTriggerStepComplete;

export const triggerSteps = mapDeepStrings(base.triggerSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const emotionalTriggerStoryBlock = toolStoryOverrides["shame-trigger-pattern-check"];

export const emotionalTriggerFaqItems = mapDeepStrings(base.emotionalTriggerFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecoderTools = mapDeepStrings(base.relatedDecoderTools, rules, transformOptions);

export const triggerBands = mapDeepStrings(base.triggerBands, rules, transformOptions);

export const triggerDimensions = mapDeepStrings(base.triggerDimensions, rules, transformOptions);
