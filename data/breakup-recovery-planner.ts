import * as base from "./emotional-recovery-planner";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Emotional Recovery Planner", "Breakup Recovery Planner"],
  { pattern: /emotional recovery/gi, replacement: "breakup recovery" },
  { pattern: /emotional load/gi, replacement: "heartbreak load" },
  { pattern: /low capacity/gi, replacement: "heartbreak capacity loss" },
  { pattern: /support/gi, replacement: "support after the breakup" },
  { pattern: /recovery path/gi, replacement: "breakup recovery path" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./emotional-recovery-planner";

export const emotionalRecoveryMetadata = {
  ...mapDeepStrings(base.emotionalRecoveryMetadata, rules, transformOptions),
  eyebrow: "BREAKUP RECOVERY TOOL",
  title: "Breakup Recovery Planner",
  description: "Turn breakup pain, looping attachment pulls, emotional shock, and low capacity into a calmer recovery path you can actually follow this week.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateEmotionalRecoveryResult(...args: Parameters<typeof base.calculateEmotionalRecoveryResult>) {
  return mapDeepStrings(base.calculateEmotionalRecoveryResult(...args), rules, transformOptions);
}

export const getInitialRecoveryAnswers = base.getInitialRecoveryAnswers;

export const isRecoveryStepComplete = base.isRecoveryStepComplete;

export const recoveryPlannerSteps = mapDeepStrings(base.recoveryPlannerSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const emotionalRecoveryFaqItems = mapDeepStrings(base.emotionalRecoveryFaqItems, rules, transformOptions);

export const emotionalRecoveryStoryBlock = toolStoryOverrides["breakup-recovery-planner"];

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const recoveryBands = mapDeepStrings(base.recoveryBands, rules, transformOptions);

export const recoveryDimensions = mapDeepStrings(base.recoveryDimensions, rules, transformOptions);

export const relatedRecoveryTools = mapDeepStrings(base.relatedRecoveryTools, rules, transformOptions);

export const restorationBlocks = mapDeepStrings(base.restorationBlocks, rules, transformOptions);
