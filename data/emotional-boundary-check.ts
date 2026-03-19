import * as base from "./boundary-strength-scanner";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Boundary Strength Scanner", "Emotional Boundary Check"],
  { pattern: /boundary strength/gi, replacement: "emotional boundary strength" },
  { pattern: /boundaries/gi, replacement: "emotional boundaries" },
  { pattern: /guilt/gi, replacement: "emotional guilt" },
  { pattern: /emotional pressure/gi, replacement: "emotional spillover" },
  { pattern: /requests/gi, replacement: "emotional pulls" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./boundary-strength-scanner";

export const boundaryStrengthMetadata = {
  ...mapDeepStrings(base.boundaryStrengthMetadata, rules, transformOptions),
  eyebrow: "EMOTIONAL BOUNDARY TOOL",
  title: "Emotional Boundary Check",
  description: "See whether you are absorbing too much emotional tone, overholding other people, or losing your own signal when feelings run high.",
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

export const boundaryStrengthStoryBlock = toolStoryOverrides["emotional-boundary-check"];

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBoundaryTools = mapDeepStrings(base.relatedBoundaryTools, rules, transformOptions);
