import * as base from "./focus-friction-audit";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Focus Friction Audit", "Executive Function Friction Check"],
  { pattern: /focus friction/gi, replacement: "executive function friction" },
  { pattern: /deep work/gi, replacement: "multi-step work" },
  { pattern: /attention/gi, replacement: "planning and sequencing" },
  { pattern: /interruption load/gi, replacement: "working-memory interference" },
  { pattern: /clarity deficit/gi, replacement: "sequencing strain" },
  { pattern: /momentum drag/gi, replacement: "follow-through drift" },
  { pattern: /focus/gi, replacement: "execution" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./focus-friction-audit";

export const focusToolMetadata = {
  ...mapDeepStrings(base.focusToolMetadata, rules, transformOptions),
  eyebrow: "EXECUTIVE FUNCTION TOOL",
  title: "Executive Function Friction Check",
  description: "Map where executive function friction is building, including planning strain, sequencing drag, weak working memory, start resistance, and lost task continuity.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateFocusFrictionAudit(...args: Parameters<typeof base.calculateFocusFrictionAudit>) {
  return mapDeepStrings(base.calculateFocusFrictionAudit(...args), rules, transformOptions);
}

export const focusAuditSteps = mapDeepStrings(base.focusAuditSteps, rules, transformOptions);

export const getInitialFocusAnswers = base.getInitialFocusAnswers;

export const isFocusStepComplete = base.isFocusStepComplete;

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const focusStoryBlock = toolStoryOverrides["executive-function-friction-check"];

export const focusBands = mapDeepStrings(base.focusBands, rules, transformOptions);

export const focusDimensions = mapDeepStrings(base.focusDimensions, rules, transformOptions);

export const focusFaqItems = mapDeepStrings(base.focusFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedFocusTools = mapDeepStrings(base.relatedFocusTools, rules, transformOptions);
