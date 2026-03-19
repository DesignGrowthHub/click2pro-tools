import * as base from "./emotional-trigger-decoder";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Emotional Trigger Decoder", "Criticism Trigger Decoder"],
  { pattern: /emotional trigger/gi, replacement: "criticism trigger" },
  { pattern: /emotional activation/gi, replacement: "criticism activation" },
  { pattern: /reactivity/gi, replacement: "criticism reactivity" },
  { pattern: /recovery drag/gi, replacement: "criticism carryover" },
  { pattern: /trigger/gi, replacement: "criticism trigger" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./emotional-trigger-decoder";

export const emotionalTriggerMetadata = {
  ...mapDeepStrings(base.emotionalTriggerMetadata, rules, transformOptions),
  eyebrow: "CRITICISM TRIGGER TOOL",
  title: "Criticism Trigger Decoder",
  description: "Decode why criticism lands so hard, where defensiveness or collapse begins, and which meanings make feedback feel much bigger than the moment itself.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateEmotionalTriggerResult(...args: Parameters<typeof base.calculateEmotionalTriggerResult>) {
  return mapDeepStrings(base.calculateEmotionalTriggerResult(...args), rules, transformOptions);
}

export const getInitialTriggerAnswers = base.getInitialTriggerAnswers;

export const isTriggerStepComplete = base.isTriggerStepComplete;

export const triggerSteps = mapDeepStrings(base.triggerSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const emotionalTriggerStoryBlock = toolStoryOverrides["criticism-trigger-decoder"];

export const emotionalTriggerFaqItems = mapDeepStrings(base.emotionalTriggerFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedDecoderTools = mapDeepStrings(base.relatedDecoderTools, rules, transformOptions);

export const triggerBands = mapDeepStrings(base.triggerBands, rules, transformOptions);

export const triggerDimensions = mapDeepStrings(base.triggerDimensions, rules, transformOptions);
