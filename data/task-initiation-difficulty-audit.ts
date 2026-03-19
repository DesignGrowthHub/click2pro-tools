import * as base from "./focus-friction-audit";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Focus Friction Audit", "Task Initiation Difficulty Audit"],
  { pattern: /focus friction/gi, replacement: "task initiation difficulty" },
  { pattern: /deep work/gi, replacement: "starting tasks" },
  { pattern: /attention/gi, replacement: "activation" },
  { pattern: /interruption load/gi, replacement: "start resistance" },
  { pattern: /clarity deficit/gi, replacement: "unclear starting edges" },
  { pattern: /momentum drag/gi, replacement: "initiation drag" },
  { pattern: /focus/gi, replacement: "task start" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./focus-friction-audit";

export const focusToolMetadata = {
  ...mapDeepStrings(base.focusToolMetadata, rules, transformOptions),
  eyebrow: "TASK INITIATION TOOL",
  title: "Task Initiation Difficulty Audit",
  description: "See whether task initiation difficulty is being driven by overwhelm, vague starting points, emotional resistance, low activation, or pressure-sensitive avoidance.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateFocusFrictionAudit(...args: Parameters<typeof base.calculateFocusFrictionAudit>) {
  return mapDeepStrings(base.calculateFocusFrictionAudit(...args), rules, transformOptions);
}

export const focusAuditSteps = mapDeepStrings(base.focusAuditSteps, rules, transformOptions);

export const getInitialFocusAnswers = base.getInitialFocusAnswers;

export const isFocusStepComplete = base.isFocusStepComplete;

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const focusStoryBlock = toolStoryOverrides["task-initiation-difficulty-audit"];

export const focusBands = mapDeepStrings(base.focusBands, rules, transformOptions);

export const focusDimensions = mapDeepStrings(base.focusDimensions, rules, transformOptions);

export const focusFaqItems = mapDeepStrings(base.focusFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedFocusTools = mapDeepStrings(base.relatedFocusTools, rules, transformOptions);
