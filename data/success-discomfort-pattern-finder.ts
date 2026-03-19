import * as base from "./self-sabotage-pattern-finder";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Self-Sabotage Pattern Finder", "Success Discomfort Pattern Finder"],
  { pattern: /self-sabotage/gi, replacement: "success discomfort" },
  { pattern: /progress/gi, replacement: "growth" },
  { pattern: /derailment/gi, replacement: "success disruption" },
  { pattern: /follow-through/gi, replacement: "staying expanded" },
  { pattern: /interruption/gi, replacement: "success interruption" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./self-sabotage-pattern-finder";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const selfSabotageMetadata = mapDeepStrings(base.selfSabotageMetadata, rules, transformOptions);

export function calculateSelfSabotageResult(...args: Parameters<typeof base.calculateSelfSabotageResult>) {
  return mapDeepStrings(base.calculateSelfSabotageResult(...args), rules, transformOptions);
}

export const getInitialSelfSabotageAnswers = base.getInitialSelfSabotageAnswers;

export const isSelfSabotageStepComplete = base.isSelfSabotageStepComplete;

export const selfSabotageSteps = mapDeepStrings(base.selfSabotageSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const interruptionBlocks = mapDeepStrings(base.interruptionBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedSelfSabotageTools = mapDeepStrings(base.relatedSelfSabotageTools, rules, transformOptions);

export const selfSabotageBands = mapDeepStrings(base.selfSabotageBands, rules, transformOptions);

export const selfSabotageDimensions = mapDeepStrings(base.selfSabotageDimensions, rules, transformOptions);

export const selfSabotageFaqItems = mapDeepStrings(base.selfSabotageFaqItems, rules, transformOptions);

export const selfSabotageStoryBlock = toolStoryOverrides["success-discomfort-pattern-finder"];

export const triggerBlocks = mapDeepStrings(base.triggerBlocks, rules, transformOptions);

export const selfSabotagePatternFinderMetadata = {
  ...mapDeepStrings(base.selfSabotagePatternFinderMetadata, rules, transformOptions),
  eyebrow: "SUCCESS DISCOMFORT TOOL",
  title: "Success Discomfort Pattern Finder",
  description: "See whether expansion, recognition, momentum, or success itself starts creating discomfort that makes it harder to stay consistent.",
};
