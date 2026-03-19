import * as base from "./focus-friction-audit";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Focus Friction Audit", "Procrastination Friction Audit"],
  { pattern: /focus friction/gi, replacement: "procrastination friction" },
  { pattern: /deep work/gi, replacement: "meaningful progress" },
  { pattern: /attention/gi, replacement: "follow-through" },
  { pattern: /interruption load/gi, replacement: "avoidance cue load" },
  { pattern: /clarity deficit/gi, replacement: "task-start ambiguity" },
  { pattern: /momentum drag/gi, replacement: "follow-through drag" },
  { pattern: /focus/gi, replacement: "follow-through" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./focus-friction-audit";

export const focusToolMetadata = {
  ...mapDeepStrings(base.focusToolMetadata, rules, transformOptions),
  eyebrow: "PROCRASTINATION TOOL",
  title: "Procrastination Friction Audit",
  description: "See what is actually creating procrastination friction, from avoidance cues and task-start ambiguity to emotional resistance, dread, and weak follow-through momentum.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateFocusFrictionAudit(...args: Parameters<typeof base.calculateFocusFrictionAudit>) {
  return mapDeepStrings(base.calculateFocusFrictionAudit(...args), rules, transformOptions);
}

export const focusAuditSteps = mapDeepStrings(base.focusAuditSteps, rules, transformOptions);

export const getInitialFocusAnswers = base.getInitialFocusAnswers;

export const isFocusStepComplete = base.isFocusStepComplete;

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const focusStoryBlock = toolStoryOverrides["procrastination-friction-audit"];

export const focusBands = mapDeepStrings(base.focusBands, rules, transformOptions);

export const focusDimensions = mapDeepStrings(base.focusDimensions, rules, transformOptions);

export const focusFaqItems = mapDeepStrings(base.focusFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedFocusTools = mapDeepStrings(base.relatedFocusTools, rules, transformOptions);
