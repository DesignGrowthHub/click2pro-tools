import * as base from "./life-balance-visualizer";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Life Balance Visualizer", "Work-Life Balance Visualizer"],
  { pattern: /life balance/gi, replacement: "work-life balance" },
  { pattern: /life domains/gi, replacement: "work-life domains" },
  { pattern: /balance wheel/gi, replacement: "work-life balance wheel" },
  { pattern: /daily life/gi, replacement: "work and home life" },
  { pattern: /routines/gi, replacement: "work-life rhythms" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./life-balance-visualizer";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const lifeBalanceMetadata = {
  ...mapDeepStrings(base.lifeBalanceMetadata, rules, transformOptions),
  eyebrow: "WORK-LIFE BALANCE TOOL",
  title: "Work-Life Balance Visualizer",
  description: "Build a clearer picture of how work demand, recovery, home life, time pressure, and mental spillover are shaping your actual work-life balance.",
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

export const lifeBalanceStoryBlock = toolStoryOverrides["work-life-balance-visualizer"];

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBalanceTools = mapDeepStrings(base.relatedBalanceTools, rules, transformOptions);
