import * as base from "./focus-friction-audit";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Focus Friction Audit", "Discipline Friction Check"],
  { pattern: /focus friction/gi, replacement: "discipline friction" },
  { pattern: /deep work/gi, replacement: "planned work" },
  { pattern: /attention/gi, replacement: "consistency" },
  { pattern: /interruption load/gi, replacement: "temptation load" },
  { pattern: /clarity deficit/gi, replacement: "weak structure" },
  { pattern: /momentum drag/gi, replacement: "discipline breakdown" },
  { pattern: /focus/gi, replacement: "consistency" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./focus-friction-audit";

export const focusToolMetadata = {
  ...mapDeepStrings(base.focusToolMetadata, rules, transformOptions),
  eyebrow: "DISCIPLINE TOOL",
  title: "Discipline Friction Check",
  description: "Check whether discipline keeps breaking because of weak structure, emotional friction, unclear standards, temptation load, or brittle follow-through systems.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateFocusFrictionAudit(...args: Parameters<typeof base.calculateFocusFrictionAudit>) {
  return mapDeepStrings(base.calculateFocusFrictionAudit(...args), rules, transformOptions);
}

export const focusAuditSteps = mapDeepStrings(base.focusAuditSteps, rules, transformOptions);

export const getInitialFocusAnswers = base.getInitialFocusAnswers;

export const isFocusStepComplete = base.isFocusStepComplete;

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const focusStoryBlock = toolStoryOverrides["discipline-friction-check"];

export const focusBands = mapDeepStrings(base.focusBands, rules, transformOptions);

export const focusDimensions = mapDeepStrings(base.focusDimensions, rules, transformOptions);

export const focusFaqItems = mapDeepStrings(base.focusFaqItems, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedFocusTools = mapDeepStrings(base.relatedFocusTools, rules, transformOptions);
