import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./resentment-buildup-tracker";
import { resentmentBuildupTrackerMetadata, resentmentFaqItems } from "./resentment-buildup-tracker";
import * as EmotionalOverloadBuildupCheckContent from "./emotional-overload-buildup-check";
import { ToolHero as EmotionalOverloadBuildupCheckHero } from "@/components/tools/resentment-buildup-tracker/emotional-overload-buildup-check-hero";
import { ResentmentBuildupExperience as EmotionalOverloadBuildupCheckExperience } from "@/components/tools/resentment-buildup-tracker/emotional-overload-buildup-check-experience";
import { ResentmentBuildupEditorial as EmotionalOverloadBuildupCheckEditorial } from "@/components/tools/resentment-buildup-tracker/emotional-overload-buildup-check-editorial";
import * as UnspokenNeedsAccumulationCheckContent from "./unspoken-needs-accumulation-check";
import { ToolHero as UnspokenNeedsAccumulationCheckHero } from "@/components/tools/resentment-buildup-tracker/unspoken-needs-accumulation-check-hero";
import { ResentmentBuildupExperience as UnspokenNeedsAccumulationCheckExperience } from "@/components/tools/resentment-buildup-tracker/unspoken-needs-accumulation-check-experience";
import { ResentmentBuildupEditorial as UnspokenNeedsAccumulationCheckEditorial } from "@/components/tools/resentment-buildup-tracker/unspoken-needs-accumulation-check-editorial";
import * as FairnessImbalanceTrackerContent from "./fairness-imbalance-tracker";
import { ToolHero as FairnessImbalanceTrackerHero } from "@/components/tools/resentment-buildup-tracker/fairness-imbalance-tracker-hero";
import { ResentmentBuildupExperience as FairnessImbalanceTrackerExperience } from "@/components/tools/resentment-buildup-tracker/fairness-imbalance-tracker-experience";
import { ResentmentBuildupEditorial as FairnessImbalanceTrackerEditorial } from "@/components/tools/resentment-buildup-tracker/fairness-imbalance-tracker-editorial";
import * as EmotionalCarryingLoadCheckContent from "./emotional-carrying-load-check";
import { ToolHero as EmotionalCarryingLoadCheckHero } from "@/components/tools/resentment-buildup-tracker/emotional-carrying-load-check-hero";
import { ResentmentBuildupExperience as EmotionalCarryingLoadCheckExperience } from "@/components/tools/resentment-buildup-tracker/emotional-carrying-load-check-experience";
import { ResentmentBuildupEditorial as EmotionalCarryingLoadCheckEditorial } from "@/components/tools/resentment-buildup-tracker/emotional-carrying-load-check-editorial";
import { ToolPageHeader } from "@/components/tools/resentment-buildup-tracker/tool-page-header";
import { ToolHero } from "@/components/tools/resentment-buildup-tracker/tool-hero";
import { ResentmentBuildupExperience } from "@/components/tools/resentment-buildup-tracker/resentment-buildup-experience";
import { ResentmentBuildupEditorial } from "@/components/tools/resentment-buildup-tracker/resentment-buildup-editorial";

export const resentmentBuildupFamilyKey = "resentmentBuildup";
export const resentmentBuildupBaseSlug = "resentment-buildup-tracker";

export type ResentmentBuildupFamilyToolSlug =
  | "resentment-buildup-tracker"
  | "emotional-overload-buildup-check"
  | "unspoken-needs-accumulation-check"
  | "fairness-imbalance-tracker"
  | "emotional-carrying-load-check";
export type ResentmentBuildupFamilyTool = FamilyToolBase<ResentmentBuildupFamilyToolSlug> & {
  familyKey: typeof resentmentBuildupFamilyKey;
  baseArchetypeSlug: typeof resentmentBuildupBaseSlug;
  content: typeof content;
  renderHeader: (tool: ResentmentBuildupFamilyTool) => ReactElement;
  renderHero: (tool: ResentmentBuildupFamilyTool) => ReactElement;
  renderExperience: (tool: ResentmentBuildupFamilyTool) => ReactElement;
  renderEditorial: (tool: ResentmentBuildupFamilyTool) => ReactElement;
};

export function createResentmentBuildupFamilyTool(overrides: Partial<ResentmentBuildupFamilyTool> = {}): ResentmentBuildupFamilyTool {
  const baseTool: ResentmentBuildupFamilyTool = {
    slug: "resentment-buildup-tracker",
    familyKey: resentmentBuildupFamilyKey,
    baseArchetypeSlug: resentmentBuildupBaseSlug,
    content: content,
    pageMetadata: {
      title: "Resentment Buildup Tracker - See Why Resentment Keeps Growing Quietly",
      description: "Map how silence, imbalance, over-accommodation, and unrepaired disappointment turn into stored pressure, distance, or shutdown.",
      keywords: ["resentment buildup tracker","resentment accumulation tool","stored emotional load check","unspoken needs resentment","resentment in relationships","silent carrying emotional cost"],
      openGraphTitle: "Resentment Buildup Tracker",
      openGraphDescription: "A premium interactive tool for decoding resentment buildup across unspoken needs, fairness imbalance, silent carrying, and withdrawal risk.",
      twitterTitle: "Resentment Buildup Tracker",
      twitterDescription: "See how resentment builds through silence, imbalance, over-carrying, and the hidden cost that shows up later.",
    },
    toolMetadata: {
      title: resentmentBuildupTrackerMetadata.title,
      description: resentmentBuildupTrackerMetadata.description,
    },
    faqItems: resentmentFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(ResentmentBuildupExperience),
    renderEditorial: () => createElement(ResentmentBuildupEditorial),
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

export const resentmentBuildupBaseTool = createResentmentBuildupFamilyTool();

const EmotionalOverloadBuildupCheckTool = createResentmentBuildupFamilyTool({
  slug: "emotional-overload-buildup-check",
  content: EmotionalOverloadBuildupCheckContent as typeof content,
  pageMetadata: {
    title: "Emotional Overload Buildup Check - See If Emotional Pressure Is Quietly Stacking Up",
    description: "Track whether emotional overload is building through overholding, weak recovery, quiet accumulation, and too little release.",
    keywords: ["emotional","overload","buildup","check","too","much","load","accumulation"],
    openGraphTitle: "Emotional Overload Buildup Check",
    openGraphDescription: "Track whether emotional overload is building through overholding, weak recovery, quiet accumulation, unprocessed strain, and too little release.",
    twitterTitle: "Emotional Overload Buildup Check",
    twitterDescription: "Track whether emotional overload is building through overholding, weak recovery, quiet accumulation, unprocessed strain, and too little release.",
  },
  toolMetadata: {
    title: EmotionalOverloadBuildupCheckContent.resentmentBuildupTrackerMetadata.title,
    description: EmotionalOverloadBuildupCheckContent.resentmentBuildupTrackerMetadata.description,
  },
  faqItems: EmotionalOverloadBuildupCheckContent.resentmentFaqItems,
  renderHero: () => createElement(EmotionalOverloadBuildupCheckHero),
  renderExperience: () => createElement(EmotionalOverloadBuildupCheckExperience),
  renderEditorial: () => createElement(EmotionalOverloadBuildupCheckEditorial),
});

const UnspokenNeedsAccumulationCheckTool = createResentmentBuildupFamilyTool({
  slug: "unspoken-needs-accumulation-check",
  content: UnspokenNeedsAccumulationCheckContent as typeof content,
  pageMetadata: {
    title: "Unspoken Needs Accumulation Check - See If Important Needs Keep Going Unsaid",
    description: "See whether important needs keep getting deferred, minimized, or silently stored until pressure builds underneath.",
    keywords: ["unspoken","needs","accumulation","check","not","expressed","silent"],
    openGraphTitle: "Unspoken Needs Accumulation Check",
    openGraphDescription: "See whether important needs keep getting deferred, minimized, or silently accumulated until pressure builds under the surface.",
    twitterTitle: "Unspoken Needs Accumulation Check",
    twitterDescription: "See whether important needs keep getting deferred, minimized, or silently accumulated until pressure builds under the surface.",
  },
  toolMetadata: {
    title: UnspokenNeedsAccumulationCheckContent.resentmentBuildupTrackerMetadata.title,
    description: UnspokenNeedsAccumulationCheckContent.resentmentBuildupTrackerMetadata.description,
  },
  faqItems: UnspokenNeedsAccumulationCheckContent.resentmentFaqItems,
  renderHero: () => createElement(UnspokenNeedsAccumulationCheckHero),
  renderExperience: () => createElement(UnspokenNeedsAccumulationCheckExperience),
  renderEditorial: () => createElement(UnspokenNeedsAccumulationCheckEditorial),
});

const FairnessImbalanceTrackerTool = createResentmentBuildupFamilyTool({
  slug: "fairness-imbalance-tracker",
  content: FairnessImbalanceTrackerContent as typeof content,
  pageMetadata: {
    title: "Fairness Imbalance Tracker - See If This Dynamic Keeps Leaning One Way",
    description: "Track whether fairness keeps slipping through overgiving, uneven effort, blurred responsibility, or one-sidedness that never gets repaired.",
    keywords: ["fairness","imbalance","tracker","unfair","relationship","dynamic","one","sided"],
    openGraphTitle: "Fairness Imbalance Tracker",
    openGraphDescription: "Track whether fairness keeps slipping through overgiving, uneven effort, blurred responsibility, or repeated one-sidedness that never gets repaired.",
    twitterTitle: "Fairness Imbalance Tracker",
    twitterDescription: "Track whether fairness keeps slipping through overgiving, uneven effort, blurred responsibility, or repeated one-sidedness that never gets repaired.",
  },
  toolMetadata: {
    title: FairnessImbalanceTrackerContent.resentmentBuildupTrackerMetadata.title,
    description: FairnessImbalanceTrackerContent.resentmentBuildupTrackerMetadata.description,
  },
  faqItems: FairnessImbalanceTrackerContent.resentmentFaqItems,
  renderHero: () => createElement(FairnessImbalanceTrackerHero),
  renderExperience: () => createElement(FairnessImbalanceTrackerExperience),
  renderEditorial: () => createElement(FairnessImbalanceTrackerEditorial),
});

const EmotionalCarryingLoadCheckTool = createResentmentBuildupFamilyTool({
  slug: "emotional-carrying-load-check",
  content: EmotionalCarryingLoadCheckContent as typeof content,
  pageMetadata: {
    title: "Emotional Carrying Load Check - See If You Are Carrying Too Much for Everyone Else",
    description: "See whether you are carrying too much emotional coordination, relational management, or unspoken responsibility for other people’s stability.",
    keywords: ["emotional","carrying","load","check","too","much","emotionally","overholding"],
    openGraphTitle: "Emotional Carrying Load Check",
    openGraphDescription: "See whether you are carrying too much emotional coordination, relational management, or unspoken responsibility for everyone else’s stability.",
    twitterTitle: "Emotional Carrying Load Check",
    twitterDescription: "See whether you are carrying too much emotional coordination, relational management, or unspoken responsibility for everyone else’s stability.",
  },
  toolMetadata: {
    title: EmotionalCarryingLoadCheckContent.resentmentBuildupTrackerMetadata.title,
    description: EmotionalCarryingLoadCheckContent.resentmentBuildupTrackerMetadata.description,
  },
  faqItems: EmotionalCarryingLoadCheckContent.resentmentFaqItems,
  renderHero: () => createElement(EmotionalCarryingLoadCheckHero),
  renderExperience: () => createElement(EmotionalCarryingLoadCheckExperience),
  renderEditorial: () => createElement(EmotionalCarryingLoadCheckEditorial),
});

export const resentmentBuildupFamilyToolRegistry = {
  "resentment-buildup-tracker": resentmentBuildupBaseTool,
  "emotional-overload-buildup-check": EmotionalOverloadBuildupCheckTool,
  "unspoken-needs-accumulation-check": UnspokenNeedsAccumulationCheckTool,
  "fairness-imbalance-tracker": FairnessImbalanceTrackerTool,
  "emotional-carrying-load-check": EmotionalCarryingLoadCheckTool,
};
