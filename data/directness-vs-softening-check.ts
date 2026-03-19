import * as base from "./communication-style-mirror";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Communication Style Mirror", "Directness vs Softening Check"],
  { pattern: /communication style/gi, replacement: "directness-softening pattern" },
  { pattern: /directness/gi, replacement: "directness vs softening" },
  { pattern: /repair/gi, replacement: "clarity repair" },
  { pattern: /conversations/gi, replacement: "high-stakes conversations" },
  { pattern: /tone/gi, replacement: "delivery style" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./communication-style-mirror";

export const communicationStyleMetadata = {
  ...mapDeepStrings(base.communicationStyleMetadata, rules, transformOptions),
  eyebrow: "DIRECTNESS TOOL",
  title: "Directness vs Softening Check",
  description: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export function calculateCommunicationStyleResult(...args: Parameters<typeof base.calculateCommunicationStyleResult>) {
  return mapDeepStrings(base.calculateCommunicationStyleResult(...args), rules, transformOptions);
}

export const communicationStyleSteps = mapDeepStrings(base.communicationStyleSteps, rules, transformOptions);

export const getInitialCommunicationStyleAnswers = base.getInitialCommunicationStyleAnswers;

export const isCommunicationStyleStepComplete = base.isCommunicationStyleStepComplete;

export const clarityRepairBlocks = mapDeepStrings(base.clarityRepairBlocks, rules, transformOptions);

export const communicationBands = mapDeepStrings(base.communicationBands, rules, transformOptions);

export const communicationDimensions = mapDeepStrings(base.communicationDimensions, rules, transformOptions);

export const communicationStoryBlock = toolStoryOverrides["directness-vs-softening-check"];

export const communicationStyleFaqItems = mapDeepStrings(base.communicationStyleFaqItems, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const pressureShiftBlocks = mapDeepStrings(base.pressureShiftBlocks, rules, transformOptions);

export const relatedCommunicationTools = mapDeepStrings(base.relatedCommunicationTools, rules, transformOptions);

export const communicationStyleMirrorMetadata = {
  ...mapDeepStrings(base.communicationStyleMirrorMetadata, rules, transformOptions),
  eyebrow: "DIRECTNESS TOOL",
  title: "Directness vs Softening Check",
  description: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
};
