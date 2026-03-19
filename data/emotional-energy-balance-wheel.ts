import * as base from "./life-balance-visualizer";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import { toolStoryOverrides } from "./tool-story-overrides";

const rules: TextReplacementRule[] = [
  ["Life Balance Visualizer", "Emotional Energy Balance Wheel"],
  { pattern: /life balance/gi, replacement: "emotional energy balance" },
  { pattern: /life domains/gi, replacement: "energy domains" },
  { pattern: /balance wheel/gi, replacement: "energy wheel" },
  { pattern: /daily life/gi, replacement: "emotional life" },
  { pattern: /routines/gi, replacement: "energy rhythms" },
];

const transformOptions = { skipKeys: ["key","value","field","id","kind","slug","href","icon"] };

export * from "./life-balance-visualizer";

export const heroPreviewResult = mapDeepStrings(base.heroPreviewResult, rules, transformOptions);

export const lifeBalanceMetadata = {
  ...mapDeepStrings(base.lifeBalanceMetadata, rules, transformOptions),
  eyebrow: "EMOTIONAL ENERGY TOOL",
  title: "Emotional Energy Balance Wheel",
  description: "See where emotional energy is being replenished, drained, overused, or quietly taxed across the week so you can rebalance the system.",
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

export const lifeBalanceStoryBlock = toolStoryOverrides["emotional-energy-balance-wheel"];

export const meaningBlocks = mapDeepStrings(base.meaningBlocks, rules, transformOptions);

export const nextStepPanel = mapDeepStrings(base.nextStepPanel, rules, transformOptions);

export const nextStepParagraphs = mapDeepStrings(base.nextStepParagraphs, rules, transformOptions);

export const reductionBlocks = mapDeepStrings(base.reductionBlocks, rules, transformOptions);

export const relatedBalanceTools = mapDeepStrings(base.relatedBalanceTools, rules, transformOptions);
