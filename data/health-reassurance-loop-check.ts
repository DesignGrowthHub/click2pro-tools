import * as base from "./reassurance-seeking-decoder";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Reassurance Seeking Decoder", "Health Reassurance Loop Check"],
  { pattern: /reassurance seeking/gi, replacement: "health reassurance seeking" },
  { pattern: /checking/gi, replacement: "symptom checking" },
  { pattern: /uncertainty/gi, replacement: "health uncertainty" },
  { pattern: /doubt/gi, replacement: "health doubt" },
  { pattern: /validation seeking/gi, replacement: "medical reassurance" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./reassurance-seeking-decoder";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const reassuranceSeekingMetadata = mapDeepStrings(base.reassuranceSeekingMetadata, rules, transformOptions);

export function calculateReassuranceResult(...args: Parameters<typeof base.calculateReassuranceResult>) {
  return mapDeepStrings(base.calculateReassuranceResult(...args), rules, transformOptions);
}

export const getInitialReassuranceAnswers = base.getInitialReassuranceAnswers;

export const isReassuranceStepComplete = base.isReassuranceStepComplete;

export const reassuranceSteps = mapDeepStrings(base.reassuranceSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reassuranceBands = mapDeepStrings(base.reassuranceBands, rules, transformOptions);

export const reassuranceDimensions = mapDeepStrings(base.reassuranceDimensions, rules, transformOptions);

export const reassuranceFaqItems = mapDeepStrings(base.reassuranceFaqItems, rules, transformOptions);

export const reassuranceStoryBlock = toolStoryOverrides["health-reassurance-loop-check"];

export const relatedReassuranceTools = mapDeepStrings(base.relatedReassuranceTools, rules, transformOptions);

export const strengthenBlocks = mapDeepStrings(base.strengthenBlocks, rules, transformOptions);

export const weakenBlocks = mapDeepStrings(base.weakenBlocks, rules, transformOptions);

export const reassuranceSeekingDecoderMetadata = {
  ...mapDeepStrings(base.reassuranceSeekingDecoderMetadata, rules, transformOptions),
  eyebrow: "HEALTH REASSURANCE TOOL",
  title: "Health Reassurance Loop Check",
  description: "Decode whether body sensations, uncertainty, symptom scanning, or fear of missing something serious are driving a health reassurance loop.",
};
