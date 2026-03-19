import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./life-balance-visualizer";
import { lifeBalanceMetadata, balanceFaqItems } from "./life-balance-visualizer";
import * as WorkLifeBalanceVisualizerContent from "./work-life-balance-visualizer";
import { ToolHero as WorkLifeBalanceVisualizerHero } from "@/components/tools/life-balance-visualizer/work-life-balance-visualizer-hero";
import { LifeBalanceExperience as WorkLifeBalanceVisualizerExperience } from "@/components/tools/life-balance-visualizer/work-life-balance-visualizer-experience";
import { LifeBalanceEditorial as WorkLifeBalanceVisualizerEditorial } from "@/components/tools/life-balance-visualizer/work-life-balance-visualizer-editorial";
import * as EmotionalEnergyBalanceWheelContent from "./emotional-energy-balance-wheel";
import { ToolHero as EmotionalEnergyBalanceWheelHero } from "@/components/tools/life-balance-visualizer/emotional-energy-balance-wheel-hero";
import { LifeBalanceExperience as EmotionalEnergyBalanceWheelExperience } from "@/components/tools/life-balance-visualizer/emotional-energy-balance-wheel-experience";
import { LifeBalanceEditorial as EmotionalEnergyBalanceWheelEditorial } from "@/components/tools/life-balance-visualizer/emotional-energy-balance-wheel-editorial";
import * as RecoveryBalanceVisualizerContent from "./recovery-balance-visualizer";
import { ToolHero as RecoveryBalanceVisualizerHero } from "@/components/tools/life-balance-visualizer/recovery-balance-visualizer-hero";
import { LifeBalanceExperience as RecoveryBalanceVisualizerExperience } from "@/components/tools/life-balance-visualizer/recovery-balance-visualizer-experience";
import { LifeBalanceEditorial as RecoveryBalanceVisualizerEditorial } from "@/components/tools/life-balance-visualizer/recovery-balance-visualizer-editorial";
import * as PersonalCapacityBalanceCheckContent from "./personal-capacity-balance-check";
import { ToolHero as PersonalCapacityBalanceCheckHero } from "@/components/tools/life-balance-visualizer/personal-capacity-balance-check-hero";
import { LifeBalanceExperience as PersonalCapacityBalanceCheckExperience } from "@/components/tools/life-balance-visualizer/personal-capacity-balance-check-experience";
import { LifeBalanceEditorial as PersonalCapacityBalanceCheckEditorial } from "@/components/tools/life-balance-visualizer/personal-capacity-balance-check-editorial";
import { ToolPageHeader } from "@/components/tools/life-balance-visualizer/tool-page-header";
import { ToolHero } from "@/components/tools/life-balance-visualizer/tool-hero";
import { LifeBalanceExperience } from "@/components/tools/life-balance-visualizer/life-balance-experience";
import { LifeBalanceEditorial } from "@/components/tools/life-balance-visualizer/life-balance-editorial";

export const lifeBalanceFamilyKey = "lifeBalance";
export const lifeBalanceBaseSlug = "life-balance-visualizer";

export type LifeBalanceFamilyToolSlug =
  | "life-balance-visualizer"
  | "work-life-balance-visualizer"
  | "emotional-energy-balance-wheel"
  | "recovery-balance-visualizer"
  | "personal-capacity-balance-check";
export type LifeBalanceFamilyTool = FamilyToolBase<LifeBalanceFamilyToolSlug> & {
  familyKey: typeof lifeBalanceFamilyKey;
  baseArchetypeSlug: typeof lifeBalanceBaseSlug;
  content: typeof content;
  renderHeader: (tool: LifeBalanceFamilyTool) => ReactElement;
  renderHero: (tool: LifeBalanceFamilyTool) => ReactElement;
  renderExperience: (tool: LifeBalanceFamilyTool) => ReactElement;
  renderEditorial: (tool: LifeBalanceFamilyTool) => ReactElement;
};

export function createLifeBalanceFamilyTool(overrides: Partial<LifeBalanceFamilyTool> = {}): LifeBalanceFamilyTool {
  const baseTool: LifeBalanceFamilyTool = {
    slug: "life-balance-visualizer",
    familyKey: lifeBalanceFamilyKey,
    baseArchetypeSlug: lifeBalanceBaseSlug,
    content: content,
    pageMetadata: {
      title: "Life Balance Visualizer - See What Feels Full, Thin, or Out of Balance",
      description: "Map where life feels steady and where it feels stretched. This tool shows how load, recovery, emotional room, and daily support are balancing out right now.",
      keywords: ["life balance visualizer","life balance tool","balance wheel tool","capacity visualizer","life balance map"],
      openGraphTitle: "Life Balance Visualizer",
      openGraphDescription: "A premium interactive balance map for visualizing support, recovery, pressure, and life-shape distortion across eight key domains.",
      twitterTitle: "Life Balance Visualizer",
      twitterDescription: "See where life currently feels steady, stretched, or under-supported with a premium visual balance map.",
    },
    toolMetadata: {
      title: lifeBalanceMetadata.title,
      description: lifeBalanceMetadata.description,
    },
    faqItems: balanceFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(LifeBalanceExperience),
    renderEditorial: () => createElement(LifeBalanceEditorial),
  };

  return {
    ...baseTool,
    ...overrides,
    pageMetadata: {
      ...baseTool.pageMetadata,
      ...overrides.pageMetadata,
    },
    toolMetadata: {
      ...baseTool.toolMetadata,
      ...overrides.toolMetadata,
    },
    faqItems: overrides.faqItems ?? baseTool.faqItems,
    content: overrides.content ?? baseTool.content,
    renderHeader: overrides.renderHeader ?? baseTool.renderHeader,
    renderHero: overrides.renderHero ?? baseTool.renderHero,
    renderExperience: overrides.renderExperience ?? baseTool.renderExperience,
    renderEditorial: overrides.renderEditorial ?? baseTool.renderEditorial,
  };
}

export const lifeBalanceBaseTool = createLifeBalanceFamilyTool();

const WorkLifeBalanceVisualizerTool = createLifeBalanceFamilyTool({
  slug: "work-life-balance-visualizer",
  content: WorkLifeBalanceVisualizerContent as typeof content,
  pageMetadata: {
    title: "Work-Life Balance Visualizer - See Where Work Is Eating Into the Rest of Life",
    description: "Build a clearer picture of how work demand, spillover, recovery, home life, and time pressure are shaping your real work-life balance.",
    keywords: ["work","life","balance","visualizer","check","job","spillover","home"],
    openGraphTitle: "Work-Life Balance Visualizer",
    openGraphDescription: "Build a clearer picture of how work demand, recovery, home life, time pressure, and mental spillover are shaping your actual work-life balance.",
    twitterTitle: "Work-Life Balance Visualizer",
    twitterDescription: "Build a clearer picture of how work demand, recovery, home life, time pressure, and mental spillover are shaping your actual work-life balance.",
  },
  toolMetadata: {
    title: WorkLifeBalanceVisualizerContent.lifeBalanceMetadata.title,
    description: WorkLifeBalanceVisualizerContent.lifeBalanceMetadata.description,
  },
  faqItems: WorkLifeBalanceVisualizerContent.balanceFaqItems,
  renderHero: () => createElement(WorkLifeBalanceVisualizerHero),
  renderExperience: () => createElement(WorkLifeBalanceVisualizerExperience),
  renderEditorial: () => createElement(WorkLifeBalanceVisualizerEditorial),
});

const EmotionalEnergyBalanceWheelTool = createLifeBalanceFamilyTool({
  slug: "emotional-energy-balance-wheel",
  content: EmotionalEnergyBalanceWheelContent as typeof content,
  pageMetadata: {
    title: "Emotional Energy Balance Wheel - See Where Your Emotional Energy Is Going",
    description: "See which parts of life refill you, which parts quietly drain you, and where emotional energy keeps leaking out.",
    keywords: ["emotional","energy","balance","wheel","check","drain"],
    openGraphTitle: "Emotional Energy Balance Wheel",
    openGraphDescription: "See where emotional energy is being replenished, drained, overused, or quietly taxed across the week so you can rebalance the system.",
    twitterTitle: "Emotional Energy Balance Wheel",
    twitterDescription: "See where emotional energy is being replenished, drained, overused, or quietly taxed across the week so you can rebalance the system.",
  },
  toolMetadata: {
    title: EmotionalEnergyBalanceWheelContent.lifeBalanceMetadata.title,
    description: EmotionalEnergyBalanceWheelContent.lifeBalanceMetadata.description,
  },
  faqItems: EmotionalEnergyBalanceWheelContent.balanceFaqItems,
  renderHero: () => createElement(EmotionalEnergyBalanceWheelHero),
  renderExperience: () => createElement(EmotionalEnergyBalanceWheelExperience),
  renderEditorial: () => createElement(EmotionalEnergyBalanceWheelEditorial),
});

const RecoveryBalanceVisualizerTool = createLifeBalanceFamilyTool({
  slug: "recovery-balance-visualizer",
  content: RecoveryBalanceVisualizerContent as typeof content,
  pageMetadata: {
    title: "Recovery Balance Visualizer - See What Your Recovery Is Missing",
    description: "Map whether sleep, rest, decompression, margin, and active recovery are truly helping or only slowing the slide.",
    keywords: ["recovery","balance","visualizer","under","recovered","rest"],
    openGraphTitle: "Recovery Balance Visualizer",
    openGraphDescription: "Map how sleep, rest, decompression, margin, and active recovery are supporting you versus leaving the system structurally under-recovered.",
    twitterTitle: "Recovery Balance Visualizer",
    twitterDescription: "Map how sleep, rest, decompression, margin, and active recovery are supporting you versus leaving the system structurally under-recovered.",
  },
  toolMetadata: {
    title: RecoveryBalanceVisualizerContent.lifeBalanceMetadata.title,
    description: RecoveryBalanceVisualizerContent.lifeBalanceMetadata.description,
  },
  faqItems: RecoveryBalanceVisualizerContent.balanceFaqItems,
  renderHero: () => createElement(RecoveryBalanceVisualizerHero),
  renderExperience: () => createElement(RecoveryBalanceVisualizerExperience),
  renderEditorial: () => createElement(RecoveryBalanceVisualizerEditorial),
});

const PersonalCapacityBalanceCheckTool = createLifeBalanceFamilyTool({
  slug: "personal-capacity-balance-check",
  content: PersonalCapacityBalanceCheckContent as typeof content,
  pageMetadata: {
    title: "Personal Capacity Balance Check - See If Life Is Running Past Your Capacity",
    description: "Check whether your responsibilities, expectations, recovery, and available bandwidth still match what you can honestly carry.",
    keywords: ["personal","capacity","balance","check","bandwidth","too","much","on"],
    openGraphTitle: "Personal Capacity Balance Check",
    openGraphDescription: "See whether your current responsibilities, expectations, recovery, and available bandwidth are actually in balance with your personal capacity.",
    twitterTitle: "Personal Capacity Balance Check",
    twitterDescription: "See whether your current responsibilities, expectations, recovery, and available bandwidth are actually in balance with your personal capacity.",
  },
  toolMetadata: {
    title: PersonalCapacityBalanceCheckContent.lifeBalanceMetadata.title,
    description: PersonalCapacityBalanceCheckContent.lifeBalanceMetadata.description,
  },
  faqItems: PersonalCapacityBalanceCheckContent.balanceFaqItems,
  renderHero: () => createElement(PersonalCapacityBalanceCheckHero),
  renderExperience: () => createElement(PersonalCapacityBalanceCheckExperience),
  renderEditorial: () => createElement(PersonalCapacityBalanceCheckEditorial),
});

export const lifeBalanceFamilyToolRegistry = {
  "life-balance-visualizer": lifeBalanceBaseTool,
  "work-life-balance-visualizer": WorkLifeBalanceVisualizerTool,
  "emotional-energy-balance-wheel": EmotionalEnergyBalanceWheelTool,
  "recovery-balance-visualizer": RecoveryBalanceVisualizerTool,
  "personal-capacity-balance-check": PersonalCapacityBalanceCheckTool,
};
