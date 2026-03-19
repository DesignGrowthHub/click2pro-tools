import * as base from "./attachment-pattern-spotter";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Attachment Pattern Spotter", "Intimacy Avoidance Pattern Check"],
  { pattern: /attachment pattern/gi, replacement: "intimacy avoidance pattern" },
  { pattern: /proximity needs/gi, replacement: "closeness needs" },
  { pattern: /withdrawal habits/gi, replacement: "distance habits" },
  { pattern: /emotional safety/gi, replacement: "closeness safety" },
  { pattern: /attachment/gi, replacement: "intimacy" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./attachment-pattern-spotter";

export const attachmentPatternMetadata = {
  ...mapDeepStrings(base.attachmentPatternMetadata, rules, transformOptions),
  eyebrow: "INTIMACY AVOIDANCE TOOL",
  title: "Intimacy Avoidance Pattern Check",
  description: "Check whether closeness triggers distancing, over-independence, deactivation, emotional shutdown, or subtle forms of pulling back.",
};

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const attachmentSteps = mapDeepStrings(base.attachmentSteps, rules, transformOptions);

export function calculateAttachmentProfile(...args: Parameters<typeof base.calculateAttachmentProfile>) {
  return mapDeepStrings(base.calculateAttachmentProfile(...args), rules, transformOptions);
}

export const getInitialAttachmentAnswers = base.getInitialAttachmentAnswers;

export const isAttachmentStepComplete = base.isAttachmentStepComplete;

export const rankItems = mapDeepStrings(base.rankItems, rules, transformOptions);

export const attachmentDimensions = mapDeepStrings(base.attachmentDimensions, rules, transformOptions);

export const attachmentFaqItems = mapDeepStrings(base.attachmentFaqItems, rules, transformOptions);

export const attachmentProfiles = mapDeepStrings(base.attachmentProfiles, rules, transformOptions);

export const attachmentStoryBlock = toolStoryOverrides["intimacy-avoidance-pattern-check"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedAttachmentTools = mapDeepStrings(base.relatedAttachmentTools, rules, transformOptions);
