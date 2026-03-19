import * as base from "./self-sabotage-pattern-finder";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Self-Sabotage Pattern Finder", "Visibility Sabotage Pattern Check"],
  { pattern: /self-sabotage/gi, replacement: "visibility sabotage" },
  { pattern: /progress/gi, replacement: "visibility" },
  { pattern: /derailment/gi, replacement: "exposure derailment" },
  { pattern: /follow-through/gi, replacement: "staying visible" },
  { pattern: /interruption/gi, replacement: "visibility interruption" },
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

export const selfSabotageStoryBlock = toolStoryOverrides["visibility-sabotage-pattern-check"];

export const triggerBlocks = mapDeepStrings(base.triggerBlocks, rules, transformOptions);

export const selfSabotagePatternFinderMetadata = {
  ...mapDeepStrings(base.selfSabotagePatternFinderMetadata, rules, transformOptions),
  eyebrow: "VISIBILITY SABOTAGE TOOL",
  title: "Visibility Sabotage Pattern Check",
  description: "Map what happens when your work, voice, or success becomes more visible and why the system may start pulling back right when exposure increases.",
};
