import * as base from "./boundary-strength-scanner";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Boundary Strength Scanner", "Caretaker Boundary Scanner"],
  { pattern: /boundary strength/gi, replacement: "caretaker boundary strength" },
  { pattern: /boundaries/gi, replacement: "caretaker boundaries" },
  { pattern: /guilt/gi, replacement: "caretaker guilt" },
  { pattern: /emotional pressure/gi, replacement: "caretaking pressure" },
  { pattern: /requests/gi, replacement: "caretaking demands" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./boundary-strength-scanner";

export const boundaryStrengthMetadata = {
  ...mapDeepStrings(base.boundaryStrengthMetadata, rules, transformOptions),
  eyebrow: "CARETAKER BOUNDARY TOOL",
  title: "Caretaker Boundary Scanner",
  description: "Map where helping, rescuing, emotional caretaking, and over-responsibility are quietly weakening your ability to hold a clean limit.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateBoundaryStrengthResult(...args: Parameters<typeof base.calculateBoundaryStrengthResult>) {
  return mapDeepStrings(base.calculateBoundaryStrengthResult(...args), rules, transformOptions);
}

export const getInitialBoundaryStrengthAnswers = base.getInitialBoundaryStrengthAnswers;

export const isBoundaryStrengthStepComplete = base.isBoundaryStrengthStepComplete;

export const boundaryStrengthSteps = mapDeepStrings(base.boundaryStrengthSteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const boundaryStrengthBands = mapDeepStrings(base.boundaryStrengthBands, rules, transformOptions);

export const boundaryStrengthDimensions = mapDeepStrings(base.boundaryStrengthDimensions, rules, transformOptions);

export const boundaryStrengthFaqItems = mapDeepStrings(base.boundaryStrengthFaqItems, rules, transformOptions);

export const boundaryStrengthStoryBlock = toolStoryOverrides["caretaker-boundary-scanner"];

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBoundaryTools = mapDeepStrings(base.relatedBoundaryTools, rules, transformOptions);
