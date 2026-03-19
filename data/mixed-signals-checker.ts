import * as base from "./relationship-clarity-check";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Relationship Clarity Check", "Mixed Signals Checker"],
  { pattern: /relationship clarity/gi, replacement: "mixed-signal clarity" },
  { pattern: /relationship/gi, replacement: "dynamic" },
  { pattern: /mixed signals/gi, replacement: "mixed signals" },
  { pattern: /trust/gi, replacement: "signal consistency" },
  { pattern: /connection/gi, replacement: "signal pattern" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./relationship-clarity-check";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const relationshipClarityMetadata = {
  ...mapDeepStrings(base.relationshipClarityMetadata, rules, transformOptions),
  eyebrow: "MIXED SIGNALS TOOL",
  title: "Mixed Signals Checker",
  description: "Separate genuine mixed signals from slow pacing, fear, inconsistency, low investment, or wishful reading so the pattern gets easier to call clearly.",
};

export function calculateRelationshipClarityResult(...args: Parameters<typeof base.calculateRelationshipClarityResult>) {
  return mapDeepStrings(base.calculateRelationshipClarityResult(...args), rules, transformOptions);
}

export const getInitialRelationshipClarityAnswers = base.getInitialRelationshipClarityAnswers;

export const isRelationshipClarityStepComplete = base.isRelationshipClarityStepComplete;

export const relationshipClaritySteps = mapDeepStrings(base.relationshipClaritySteps, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const increaseClarityBlocks = mapDeepStrings(base.increaseClarityBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relationshipClarityBands = mapDeepStrings(base.relationshipClarityBands, rules, transformOptions);

export const relationshipClarityDimensions = mapDeepStrings(base.relationshipClarityDimensions, rules, transformOptions);

export const relationshipClarityFaqItems = mapDeepStrings(base.relationshipClarityFaqItems, rules, transformOptions);

export const relationshipClarityStoryBlock = toolStoryOverrides["mixed-signals-checker"];

export const relatedRelationshipClarityTools = mapDeepStrings(base.relatedRelationshipClarityTools, rules, transformOptions);
