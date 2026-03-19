import * as base from "./communication-style-mirror";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Communication Style Mirror", "Conflict Style Mirror"],
  { pattern: /communication style/gi, replacement: "conflict style" },
  { pattern: /directness/gi, replacement: "conflict directness" },
  { pattern: /repair/gi, replacement: "conflict repair" },
  { pattern: /conversations/gi, replacement: "conflicts" },
  { pattern: /tone/gi, replacement: "conflict tone" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./communication-style-mirror";

export const communicationStyleMetadata = mapDeepStrings(base.communicationStyleMetadata, rules, transformOptions);

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

export const communicationStoryBlock = toolStoryOverrides["conflict-style-mirror"];

export const communicationStyleFaqItems = mapDeepStrings(base.communicationStyleFaqItems, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const pressureShiftBlocks = mapDeepStrings(base.pressureShiftBlocks, rules, transformOptions);

export const relatedCommunicationTools = mapDeepStrings(base.relatedCommunicationTools, rules, transformOptions);

export const communicationStyleMirrorMetadata = {
  ...mapDeepStrings(base.communicationStyleMirrorMetadata, rules, transformOptions),
  eyebrow: "CONFLICT STYLE TOOL",
  title: "Conflict Style Mirror",
  description: "See how you tend to move through conflict, whether you push, soften, withdraw, overexplain, or try to repair before the issue is actually clear.",
};
