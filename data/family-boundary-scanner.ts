import * as base from "./boundary-strength-scanner";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Boundary Strength Scanner", "Family Boundary Scanner"],
  { pattern: /boundary strength/gi, replacement: "family boundary strength" },
  { pattern: /boundaries/gi, replacement: "family boundaries" },
  { pattern: /guilt/gi, replacement: "family guilt" },
  { pattern: /emotional pressure/gi, replacement: "family pressure" },
  { pattern: /requests/gi, replacement: "family expectations" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./boundary-strength-scanner";

export const boundaryStrengthMetadata = {
  ...mapDeepStrings(base.boundaryStrengthMetadata, rules, transformOptions),
  eyebrow: "FAMILY BOUNDARY TOOL",
  title: "Family Boundary Scanner",
  description: "Scan where family expectations, loyalty pressure, emotional pull, and old roles are making family boundaries harder to hold.",
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

export const boundaryStrengthStoryBlock = toolStoryOverrides["family-boundary-scanner"];

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBoundaryTools = mapDeepStrings(base.relatedBoundaryTools, rules, transformOptions);
