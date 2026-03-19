import * as base from "./confidence-reset-audit";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Confidence Reset Audit", "Imposter Feelings Audit"],
  { pattern: /confidence reset/gi, replacement: "imposter-feelings pattern" },
  { pattern: /confidence/gi, replacement: "self-belief" },
  { pattern: /self-trust/gi, replacement: "believability" },
  { pattern: /hesitation/gi, replacement: "fraud fear" },
  { pattern: /comparison/gi, replacement: "competence comparison" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./confidence-reset-audit";

export const confidenceResetMetadata = mapDeepStrings(base.confidenceResetMetadata, rules, transformOptions);

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateConfidenceResetResult(...args: Parameters<typeof base.calculateConfidenceResetResult>) {
  return mapDeepStrings(base.calculateConfidenceResetResult(...args), rules, transformOptions);
}

export const confidenceResetSteps = mapDeepStrings(base.confidenceResetSteps, rules, transformOptions);

export const getInitialConfidenceResetAnswers = base.getInitialConfidenceResetAnswers;

export const isConfidenceResetStepComplete = base.isConfidenceResetStepComplete;

export const confidenceResetBands = mapDeepStrings(base.confidenceResetBands, rules, transformOptions);

export const confidenceResetDimensions = mapDeepStrings(base.confidenceResetDimensions, rules, transformOptions);

export const confidenceResetFaqItems = mapDeepStrings(base.confidenceResetFaqItems, rules, transformOptions);

export const confidenceResetStoryBlock = toolStoryOverrides["imposter-feelings-audit"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const erosionBlocks = mapDeepStrings(base.erosionBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const relatedConfidenceTools = mapDeepStrings(base.relatedConfidenceTools, rules, transformOptions);

export const restoreBlocks = mapDeepStrings(base.restoreBlocks, rules, transformOptions);

export const confidenceResetAuditMetadata = {
  ...mapDeepStrings(base.confidenceResetAuditMetadata, rules, transformOptions),
  eyebrow: "IMPOSTER FEELINGS TOOL",
  title: "Imposter Feelings Audit",
  description: "See whether imposter feelings are being driven by visibility, comparison, new responsibilities, pressure to perform, or a harsh internal standard.",
};
