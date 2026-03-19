import * as base from "./life-balance-visualizer";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Life Balance Visualizer", "Recovery Balance Visualizer"],
  { pattern: /life balance/gi, replacement: "recovery balance" },
  { pattern: /life domains/gi, replacement: "recovery domains" },
  { pattern: /balance wheel/gi, replacement: "recovery wheel" },
  { pattern: /daily life/gi, replacement: "recovery patterns" },
  { pattern: /routines/gi, replacement: "recovery rhythms" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./life-balance-visualizer";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const lifeBalanceMetadata = {
  ...mapDeepStrings(base.lifeBalanceMetadata, rules, transformOptions),
  eyebrow: "RECOVERY BALANCE TOOL",
  title: "Recovery Balance Visualizer",
  description: "Map how sleep, rest, decompression, margin, and active recovery are supporting you versus leaving the system structurally under-recovered.",
};

export const balanceDomains = mapDeepStrings(base.balanceDomains, rules, transformOptions);

export function calculateLifeBalance(...args: Parameters<typeof base.calculateLifeBalance>) {
  return mapDeepStrings(base.calculateLifeBalance(...args), rules, transformOptions);
}

export const getInitialBalanceAnswers = base.getInitialBalanceAnswers;

export const isBalanceDomainComplete = base.isBalanceDomainComplete;

export const balanceBands = mapDeepStrings(base.balanceBands, rules, transformOptions);

export const balanceDimensions = mapDeepStrings(base.balanceDimensions, rules, transformOptions);

export const balanceFaqItems = mapDeepStrings(base.balanceFaqItems, rules, transformOptions);

export const dimensionEditorial = mapDeepStrings(base.dimensionEditorial, rules, transformOptions);

export const increaseBlocks = mapDeepStrings(base.increaseBlocks, rules, transformOptions);

export const lifeBalanceStoryBlock = toolStoryOverrides["recovery-balance-visualizer"];

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBalanceTools = mapDeepStrings(base.relatedBalanceTools, rules, transformOptions);
