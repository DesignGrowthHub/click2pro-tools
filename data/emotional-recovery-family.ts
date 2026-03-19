import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./emotional-recovery-planner";
import { emotionalRecoveryMetadata, emotionalRecoveryFaqItems } from "./emotional-recovery-planner";
import * as BreakupRecoveryPlannerContent from "./breakup-recovery-planner";
import { ToolHero as BreakupRecoveryPlannerHero } from "@/components/tools/emotional-recovery-planner/breakup-recovery-planner-hero";
import { EmotionalRecoveryExperience as BreakupRecoveryPlannerExperience } from "@/components/tools/emotional-recovery-planner/breakup-recovery-planner-experience";
import { EmotionalRecoveryEditorial as BreakupRecoveryPlannerEditorial } from "@/components/tools/emotional-recovery-planner/breakup-recovery-planner-editorial";
import * as BurnoutRecoveryPlannerContent from "./burnout-recovery-planner";
import { ToolHero as BurnoutRecoveryPlannerHero } from "@/components/tools/emotional-recovery-planner/burnout-recovery-planner-hero";
import { EmotionalRecoveryExperience as BurnoutRecoveryPlannerExperience } from "@/components/tools/emotional-recovery-planner/burnout-recovery-planner-experience";
import { EmotionalRecoveryEditorial as BurnoutRecoveryPlannerEditorial } from "@/components/tools/emotional-recovery-planner/burnout-recovery-planner-editorial";
import * as WeeklyResetPlannerContent from "./weekly-reset-planner";
import { ToolHero as WeeklyResetPlannerHero } from "@/components/tools/emotional-recovery-planner/weekly-reset-planner-hero";
import { EmotionalRecoveryExperience as WeeklyResetPlannerExperience } from "@/components/tools/emotional-recovery-planner/weekly-reset-planner-experience";
import { EmotionalRecoveryEditorial as WeeklyResetPlannerEditorial } from "@/components/tools/emotional-recovery-planner/weekly-reset-planner-editorial";
import * as StressResetActionPlanContent from "./stress-reset-action-plan";
import { ToolHero as StressResetActionPlanHero } from "@/components/tools/emotional-recovery-planner/stress-reset-action-plan-hero";
import { EmotionalRecoveryExperience as StressResetActionPlanExperience } from "@/components/tools/emotional-recovery-planner/stress-reset-action-plan-experience";
import { EmotionalRecoveryEditorial as StressResetActionPlanEditorial } from "@/components/tools/emotional-recovery-planner/stress-reset-action-plan-editorial";
import { ToolPageHeader } from "@/components/tools/emotional-recovery-planner/tool-page-header";
import { ToolHero } from "@/components/tools/emotional-recovery-planner/tool-hero";
import { EmotionalRecoveryExperience } from "@/components/tools/emotional-recovery-planner/emotional-recovery-experience";
import { EmotionalRecoveryEditorial } from "@/components/tools/emotional-recovery-planner/emotional-recovery-editorial";

export const emotionalRecoveryFamilyKey = "emotionalRecovery";
export const emotionalRecoveryBaseSlug = "emotional-recovery-planner";

export type EmotionalRecoveryFamilyToolSlug =
  | "emotional-recovery-planner"
  | "breakup-recovery-planner"
  | "burnout-recovery-planner"
  | "weekly-reset-planner"
  | "stress-reset-action-plan";
export type EmotionalRecoveryFamilyTool = FamilyToolBase<EmotionalRecoveryFamilyToolSlug> & {
  familyKey: typeof emotionalRecoveryFamilyKey;
  baseArchetypeSlug: typeof emotionalRecoveryBaseSlug;
  content: typeof content;
  renderHeader: (tool: EmotionalRecoveryFamilyTool) => ReactElement;
  renderHero: (tool: EmotionalRecoveryFamilyTool) => ReactElement;
  renderExperience: (tool: EmotionalRecoveryFamilyTool) => ReactElement;
  renderEditorial: (tool: EmotionalRecoveryFamilyTool) => ReactElement;
};

export function createEmotionalRecoveryFamilyTool(overrides: Partial<EmotionalRecoveryFamilyTool> = {}): EmotionalRecoveryFamilyTool {
  const baseTool: EmotionalRecoveryFamilyTool = {
    slug: "emotional-recovery-planner",
    familyKey: emotionalRecoveryFamilyKey,
    baseArchetypeSlug: emotionalRecoveryBaseSlug,
    content: content,
    pageMetadata: {
      title: "Emotional Recovery Planner - Build a Reset Plan That Fits Your Real Capacity",
      description: "Understand your current emotional load, recovery room, available support, and the shortest realistic reset path from here.",
      keywords: ["emotional recovery planner","emotional reset tool","recovery capacity tool","overwhelm recovery plan","emotional load planner"],
      openGraphTitle: "Emotional Recovery Planner",
      openGraphDescription: "A premium interactive planning tool for turning emotional load, low capacity, and thin support into a realistic recovery path.",
      twitterTitle: "Emotional Recovery Planner",
      twitterDescription: "Map your current emotional load against real capacity and generate a calmer, more realistic 7-day recovery direction.",
    },
    toolMetadata: {
      title: emotionalRecoveryMetadata.title,
      description: emotionalRecoveryMetadata.description,
    },
    faqItems: emotionalRecoveryFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(EmotionalRecoveryExperience),
    renderEditorial: () => createElement(EmotionalRecoveryEditorial),
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

export const emotionalRecoveryBaseTool = createEmotionalRecoveryFamilyTool();

const BreakupRecoveryPlannerTool = createEmotionalRecoveryFamilyTool({
  slug: "breakup-recovery-planner",
  content: BreakupRecoveryPlannerContent as typeof content,
  pageMetadata: {
    title: "Breakup Recovery Planner - Build a Recovery Plan After a Breakup",
    description: "Turn breakup pain, looping attachment pulls, emotional shock, and low capacity into a calmer recovery plan you can actually follow this week.",
    keywords: ["breakup","recovery","planner","recover","after","heartbreak","post","plan"],
    openGraphTitle: "Breakup Recovery Planner",
    openGraphDescription: "Turn breakup pain, looping attachment pulls, emotional shock, and low capacity into a calmer recovery path you can actually follow this week.",
    twitterTitle: "Breakup Recovery Planner",
    twitterDescription: "Turn breakup pain, looping attachment pulls, emotional shock, and low capacity into a calmer recovery path you can actually follow this week.",
  },
  toolMetadata: {
    title: BreakupRecoveryPlannerContent.emotionalRecoveryMetadata.title,
    description: BreakupRecoveryPlannerContent.emotionalRecoveryMetadata.description,
  },
  faqItems: BreakupRecoveryPlannerContent.emotionalRecoveryFaqItems,
  renderHero: () => createElement(BreakupRecoveryPlannerHero),
  renderExperience: () => createElement(BreakupRecoveryPlannerExperience),
  renderEditorial: () => createElement(BreakupRecoveryPlannerEditorial),
});

const BurnoutRecoveryPlannerTool = createEmotionalRecoveryFamilyTool({
  slug: "burnout-recovery-planner",
  content: BurnoutRecoveryPlannerContent as typeof content,
  pageMetadata: {
    title: "Burnout Recovery Planner - Build a Real Recovery Plan for Burnout",
    description: "Separate exhaustion, depleted capacity, structure repair, and recovery margin so burnout recovery stops feeling vague.",
    keywords: ["burnout","recovery","planner","recover","from","reset","capacity","rebuild"],
    openGraphTitle: "Burnout Recovery Planner",
    openGraphDescription: "Build a more realistic burnout recovery path by separating exhaustion, depleted capacity, structure repair, and recovery margin instead of only trying to rest harder.",
    twitterTitle: "Burnout Recovery Planner",
    twitterDescription: "Build a more realistic burnout recovery path by separating exhaustion, depleted capacity, structure repair, and recovery margin instead of only trying to rest harder.",
  },
  toolMetadata: {
    title: BurnoutRecoveryPlannerContent.emotionalRecoveryMetadata.title,
    description: BurnoutRecoveryPlannerContent.emotionalRecoveryMetadata.description,
  },
  faqItems: BurnoutRecoveryPlannerContent.emotionalRecoveryFaqItems,
  renderHero: () => createElement(BurnoutRecoveryPlannerHero),
  renderExperience: () => createElement(BurnoutRecoveryPlannerExperience),
  renderEditorial: () => createElement(BurnoutRecoveryPlannerEditorial),
});

const WeeklyResetPlannerTool = createEmotionalRecoveryFamilyTool({
  slug: "weekly-reset-planner",
  content: WeeklyResetPlannerContent as typeof content,
  pageMetadata: {
    title: "Weekly Reset Planner - Find the Weekly Reset You Actually Need",
    description: "Translate weekly overload, unfinished stress, low margin, and repeated spillover into a reset plan that actually restores steadiness before the next week starts.",
    keywords: ["weekly","reset","planner","end","of","week","recovery","plan"],
    openGraphTitle: "Weekly Reset Planner",
    openGraphDescription: "Translate weekly overload, unfinished stress, low margin, and repeated spillover into a reset plan that actually restores steadiness before the next week starts.",
    twitterTitle: "Weekly Reset Planner",
    twitterDescription: "Translate weekly overload, unfinished stress, low margin, and repeated spillover into a reset plan that actually restores steadiness before the next week starts.",
  },
  toolMetadata: {
    title: WeeklyResetPlannerContent.emotionalRecoveryMetadata.title,
    description: WeeklyResetPlannerContent.emotionalRecoveryMetadata.description,
  },
  faqItems: WeeklyResetPlannerContent.emotionalRecoveryFaqItems,
  renderHero: () => createElement(WeeklyResetPlannerHero),
  renderExperience: () => createElement(WeeklyResetPlannerExperience),
  renderEditorial: () => createElement(WeeklyResetPlannerEditorial),
});

const StressResetActionPlanTool = createEmotionalRecoveryFamilyTool({
  slug: "stress-reset-action-plan",
  content: StressResetActionPlanContent as typeof content,
  pageMetadata: {
    title: "Stress Reset Action Plan - Build a Clear Plan to Bring Stress Down",
    description: "Turn rising stress, poor downshift, low margin, and repeated overload into a short reset plan with practical next steps.",
    keywords: ["stress","reset","action","plan","from","recovery"],
    openGraphTitle: "Stress Reset Action Plan",
    openGraphDescription: "Turn rising stress load, poor downshift, low margin, and repeated overload into a short stress reset plan that makes the next steps concrete.",
    twitterTitle: "Stress Reset Action Plan",
    twitterDescription: "Turn rising stress load, poor downshift, low margin, and repeated overload into a short stress reset plan that makes the next steps concrete.",
  },
  toolMetadata: {
    title: StressResetActionPlanContent.emotionalRecoveryMetadata.title,
    description: StressResetActionPlanContent.emotionalRecoveryMetadata.description,
  },
  faqItems: StressResetActionPlanContent.emotionalRecoveryFaqItems,
  renderHero: () => createElement(StressResetActionPlanHero),
  renderExperience: () => createElement(StressResetActionPlanExperience),
  renderEditorial: () => createElement(StressResetActionPlanEditorial),
});

export const emotionalRecoveryFamilyToolRegistry = {
  "emotional-recovery-planner": emotionalRecoveryBaseTool,
  "breakup-recovery-planner": BreakupRecoveryPlannerTool,
  "burnout-recovery-planner": BurnoutRecoveryPlannerTool,
  "weekly-reset-planner": WeeklyResetPlannerTool,
  "stress-reset-action-plan": StressResetActionPlanTool,
};
