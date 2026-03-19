import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./daily-functioning-stability-check";
import { dailyFunctioningStabilityMetadata, dailyFunctioningFaqItems } from "./daily-functioning-stability-check";
import * as DayStructureStabilityCheckContent from "./day-structure-stability-check";
import { ToolHero as DayStructureStabilityCheckHero } from "@/components/tools/daily-functioning-stability-check/day-structure-stability-check-hero";
import { DailyFunctioningExperience as DayStructureStabilityCheckExperience } from "@/components/tools/daily-functioning-stability-check/day-structure-stability-check-experience";
import { DailyFunctioningEditorial as DayStructureStabilityCheckEditorial } from "@/components/tools/daily-functioning-stability-check/day-structure-stability-check-editorial";
import * as EnergyConsistencyCheckContent from "./energy-consistency-check";
import { ToolHero as EnergyConsistencyCheckHero } from "@/components/tools/daily-functioning-stability-check/energy-consistency-check-hero";
import { DailyFunctioningExperience as EnergyConsistencyCheckExperience } from "@/components/tools/daily-functioning-stability-check/energy-consistency-check-experience";
import { DailyFunctioningEditorial as EnergyConsistencyCheckEditorial } from "@/components/tools/daily-functioning-stability-check/energy-consistency-check-editorial";
import * as FollowThroughStabilityCheckContent from "./follow-through-stability-check";
import { ToolHero as FollowThroughStabilityCheckHero } from "@/components/tools/daily-functioning-stability-check/follow-through-stability-check-hero";
import { DailyFunctioningExperience as FollowThroughStabilityCheckExperience } from "@/components/tools/daily-functioning-stability-check/follow-through-stability-check-experience";
import { DailyFunctioningEditorial as FollowThroughStabilityCheckEditorial } from "@/components/tools/daily-functioning-stability-check/follow-through-stability-check-editorial";
import * as EmotionalSteadinessCheckContent from "./emotional-steadiness-check";
import { ToolHero as EmotionalSteadinessCheckHero } from "@/components/tools/daily-functioning-stability-check/emotional-steadiness-check-hero";
import { DailyFunctioningExperience as EmotionalSteadinessCheckExperience } from "@/components/tools/daily-functioning-stability-check/emotional-steadiness-check-experience";
import { DailyFunctioningEditorial as EmotionalSteadinessCheckEditorial } from "@/components/tools/daily-functioning-stability-check/emotional-steadiness-check-editorial";
import { ToolPageHeader } from "@/components/tools/daily-functioning-stability-check/tool-page-header";
import { ToolHero } from "@/components/tools/daily-functioning-stability-check/tool-hero";
import { DailyFunctioningExperience } from "@/components/tools/daily-functioning-stability-check/daily-functioning-experience";
import { DailyFunctioningEditorial } from "@/components/tools/daily-functioning-stability-check/daily-functioning-editorial";

export const dailyFunctioningFamilyKey = "dailyFunctioning";
export const dailyFunctioningBaseSlug = "daily-functioning-stability-check";

export type DailyFunctioningFamilyToolSlug =
  | "daily-functioning-stability-check"
  | "day-structure-stability-check"
  | "energy-consistency-check"
  | "follow-through-stability-check"
  | "emotional-steadiness-check";
export type DailyFunctioningFamilyTool = FamilyToolBase<DailyFunctioningFamilyToolSlug> & {
  familyKey: typeof dailyFunctioningFamilyKey;
  baseArchetypeSlug: typeof dailyFunctioningBaseSlug;
  content: typeof content;
  renderHeader: (tool: DailyFunctioningFamilyTool) => ReactElement;
  renderHero: (tool: DailyFunctioningFamilyTool) => ReactElement;
  renderExperience: (tool: DailyFunctioningFamilyTool) => ReactElement;
  renderEditorial: (tool: DailyFunctioningFamilyTool) => ReactElement;
};

export function createDailyFunctioningFamilyTool(overrides: Partial<DailyFunctioningFamilyTool> = {}): DailyFunctioningFamilyTool {
  const baseTool: DailyFunctioningFamilyTool = {
    slug: "daily-functioning-stability-check",
    familyKey: dailyFunctioningFamilyKey,
    baseArchetypeSlug: dailyFunctioningBaseSlug,
    content: content,
    pageMetadata: {
      title: "Daily Functioning Stability Check - See Why Everyday Life Feels Less Steady",
      description: "See where energy, focus, follow-through, emotional steadiness, or recovery margin are making daily life less stable than it used to feel.",
      keywords: ["daily functioning stability check","daily functioning assessment","how stable is my daily functioning","energy focus follow through tool","daily consistency dashboard","recovery margin check"],
      openGraphTitle: "Daily Functioning Stability Check",
      openGraphDescription: "A premium interactive tool for mapping steadiness across energy, clarity, follow-through, emotional stability, and recovery through the day.",
      twitterTitle: "Daily Functioning Stability Check",
      twitterDescription: "See where your day-to-day system feels stable, where it slips first, and what daily reset direction would help most.",
    },
    toolMetadata: {
      title: dailyFunctioningStabilityMetadata.title,
      description: dailyFunctioningStabilityMetadata.description,
    },
    faqItems: dailyFunctioningFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(DailyFunctioningExperience),
    renderEditorial: () => createElement(DailyFunctioningEditorial),
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

export const dailyFunctioningBaseTool = createDailyFunctioningFamilyTool();

const DayStructureStabilityCheckTool = createDailyFunctioningFamilyTool({
  slug: "day-structure-stability-check",
  content: DayStructureStabilityCheckContent as typeof content,
  pageMetadata: {
    title: "Day-Structure Stability Check - See If Your Day Has Enough Shape to Hold",
    description: "See whether your day structure supports focus, pacing, recovery, and follow-through or keeps collapsing under load.",
    keywords: ["day","structure","stability","check","daily","unstable","routine","rhythm"],
    openGraphTitle: "Day-Structure Stability Check",
    openGraphDescription: "See whether your day structure is steady enough to support focus, pacing, recovery, and follow-through or whether the rhythm keeps collapsing under load.",
    twitterTitle: "Day-Structure Stability Check",
    twitterDescription: "See whether your day structure is steady enough to support focus, pacing, recovery, and follow-through or whether the rhythm keeps collapsing under load.",
  },
  toolMetadata: {
    title: DayStructureStabilityCheckContent.dailyFunctioningStabilityMetadata.title,
    description: DayStructureStabilityCheckContent.dailyFunctioningStabilityMetadata.description,
  },
  faqItems: DayStructureStabilityCheckContent.dailyFunctioningFaqItems,
  renderHero: () => createElement(DayStructureStabilityCheckHero),
  renderExperience: () => createElement(DayStructureStabilityCheckExperience),
  renderEditorial: () => createElement(DayStructureStabilityCheckEditorial),
});

const EnergyConsistencyCheckTool = createDailyFunctioningFamilyTool({
  slug: "energy-consistency-check",
  content: EnergyConsistencyCheckContent as typeof content,
  pageMetadata: {
    title: "Energy Consistency Check - See Why Your Energy Feels So Uneven",
    description: "Check whether uneven activation, crashes, and weak recovery are reshaping the rest of the day more than you realise.",
    keywords: ["energy","consistency","check","uneven","daily","crash","stability"],
    openGraphTitle: "Energy Consistency Check",
    openGraphDescription: "Check whether energy is staying stable enough through the day or whether uneven activation, crashes, and weak recovery are quietly reshaping everything else.",
    twitterTitle: "Energy Consistency Check",
    twitterDescription: "Check whether energy is staying stable enough through the day or whether uneven activation, crashes, and weak recovery are quietly reshaping everything else.",
  },
  toolMetadata: {
    title: EnergyConsistencyCheckContent.dailyFunctioningStabilityMetadata.title,
    description: EnergyConsistencyCheckContent.dailyFunctioningStabilityMetadata.description,
  },
  faqItems: EnergyConsistencyCheckContent.dailyFunctioningFaqItems,
  renderHero: () => createElement(EnergyConsistencyCheckHero),
  renderExperience: () => createElement(EnergyConsistencyCheckExperience),
  renderEditorial: () => createElement(EnergyConsistencyCheckEditorial),
});

const FollowThroughStabilityCheckTool = createDailyFunctioningFamilyTool({
  slug: "follow-through-stability-check",
  content: FollowThroughStabilityCheckContent as typeof content,
  pageMetadata: {
    title: "Follow-Through Stability Check - See Why Tasks Keep Slipping Through",
    description: "See whether pressure, fragmentation, weak activation, and low recovery keep breaking follow-through across the day.",
    keywords: ["follow","through","stability","check","problems","task","consistency","can"],
    openGraphTitle: "Follow-Through Stability Check",
    openGraphDescription: "See whether your system can carry tasks through reliably or whether pressure, fragmentation, weak activation, and low recovery keep breaking follow-through.",
    twitterTitle: "Follow-Through Stability Check",
    twitterDescription: "See whether your system can carry tasks through reliably or whether pressure, fragmentation, weak activation, and low recovery keep breaking follow-through.",
  },
  toolMetadata: {
    title: FollowThroughStabilityCheckContent.dailyFunctioningStabilityMetadata.title,
    description: FollowThroughStabilityCheckContent.dailyFunctioningStabilityMetadata.description,
  },
  faqItems: FollowThroughStabilityCheckContent.dailyFunctioningFaqItems,
  renderHero: () => createElement(FollowThroughStabilityCheckHero),
  renderExperience: () => createElement(FollowThroughStabilityCheckExperience),
  renderEditorial: () => createElement(FollowThroughStabilityCheckEditorial),
});

const EmotionalSteadinessCheckTool = createDailyFunctioningFamilyTool({
  slug: "emotional-steadiness-check",
  content: EmotionalSteadinessCheckContent as typeof content,
  pageMetadata: {
    title: "Emotional Steadiness Check - See How Stable You Feel Day to Day",
    description: "Check whether emotional steadiness is holding through the day or whether stress, triggers, fatigue, and weak resets are making the system wobble too easily.",
    keywords: ["emotional","steadiness","check","emotionally","unstable","day","to","daily"],
    openGraphTitle: "Emotional Steadiness Check",
    openGraphDescription: "Check whether emotional steadiness is holding through the day or whether stress, triggers, fatigue, and weak resets are making the system wobble too easily.",
    twitterTitle: "Emotional Steadiness Check",
    twitterDescription: "Check whether emotional steadiness is holding through the day or whether stress, triggers, fatigue, and weak resets are making the system wobble too easily.",
  },
  toolMetadata: {
    title: EmotionalSteadinessCheckContent.dailyFunctioningStabilityMetadata.title,
    description: EmotionalSteadinessCheckContent.dailyFunctioningStabilityMetadata.description,
  },
  faqItems: EmotionalSteadinessCheckContent.dailyFunctioningFaqItems,
  renderHero: () => createElement(EmotionalSteadinessCheckHero),
  renderExperience: () => createElement(EmotionalSteadinessCheckExperience),
  renderEditorial: () => createElement(EmotionalSteadinessCheckEditorial),
});

export const dailyFunctioningFamilyToolRegistry = {
  "daily-functioning-stability-check": dailyFunctioningBaseTool,
  "day-structure-stability-check": DayStructureStabilityCheckTool,
  "energy-consistency-check": EnergyConsistencyCheckTool,
  "follow-through-stability-check": FollowThroughStabilityCheckTool,
  "emotional-steadiness-check": EmotionalSteadinessCheckTool,
};
