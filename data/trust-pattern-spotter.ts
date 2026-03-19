import * as base from "./attachment-pattern-spotter";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Attachment Pattern Spotter", "Trust Pattern Spotter"],
  { pattern: /attachment pattern/gi, replacement: "trust pattern" },
  { pattern: /proximity needs/gi, replacement: "trust needs" },
  { pattern: /withdrawal habits/gi, replacement: "doubt habits" },
  { pattern: /emotional safety/gi, replacement: "trust safety" },
  { pattern: /attachment/gi, replacement: "trust" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./attachment-pattern-spotter";

export const attachmentPatternMetadata = {
  ...mapDeepStrings(base.attachmentPatternMetadata, rules, transformOptions),
  eyebrow: "TRUST PATTERN TOOL",
  title: "Trust Pattern Spotter",
  description: "Map how quickly trust forms, where doubt enters, what makes security wobble, and whether trust is staying steady across closeness and stress.",
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

export const attachmentStoryBlock = toolStoryOverrides["trust-pattern-spotter"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedAttachmentTools = mapDeepStrings(base.relatedAttachmentTools, rules, transformOptions);
