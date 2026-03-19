import * as base from "./attachment-pattern-spotter";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Attachment Pattern Spotter", "Emotional Availability Profile"],
  { pattern: /attachment pattern/gi, replacement: "emotional availability pattern" },
  { pattern: /proximity needs/gi, replacement: "availability needs" },
  { pattern: /withdrawal habits/gi, replacement: "unavailability habits" },
  { pattern: /emotional safety/gi, replacement: "emotional openness" },
  { pattern: /attachment/gi, replacement: "availability" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./attachment-pattern-spotter";

export const attachmentPatternMetadata = {
  ...mapDeepStrings(base.attachmentPatternMetadata, rules, transformOptions),
  eyebrow: "EMOTIONAL AVAILABILITY TOOL",
  title: "Emotional Availability Profile",
  description: "See how open, reachable, responsive, and emotionally present you or a relationship dynamic feels when closeness actually matters.",
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

export const attachmentStoryBlock = toolStoryOverrides["emotional-availability-profile"];

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedAttachmentTools = mapDeepStrings(base.relatedAttachmentTools, rules, transformOptions);
