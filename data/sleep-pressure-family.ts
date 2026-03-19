import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./sleep-pressure-check";
import { sleepPressureMetadata, sleepFaqItems } from "./sleep-pressure-check";
import * as EveningShutdownCheckContent from "./evening-shutdown-check";
import { ToolHero as EveningShutdownCheckHero } from "@/components/tools/sleep-pressure-check/evening-shutdown-check-hero";
import { SleepPressureExperience as EveningShutdownCheckExperience } from "@/components/tools/sleep-pressure-check/evening-shutdown-check-experience";
import { SleepPressureEditorial as EveningShutdownCheckEditorial } from "@/components/tools/sleep-pressure-check/evening-shutdown-check-editorial";
import * as MorningRecoveryReadinessCheckContent from "./morning-recovery-readiness-check";
import { ToolHero as MorningRecoveryReadinessCheckHero } from "@/components/tools/sleep-pressure-check/morning-recovery-readiness-check-hero";
import { SleepPressureExperience as MorningRecoveryReadinessCheckExperience } from "@/components/tools/sleep-pressure-check/morning-recovery-readiness-check-experience";
import { SleepPressureEditorial as MorningRecoveryReadinessCheckEditorial } from "@/components/tools/sleep-pressure-check/morning-recovery-readiness-check-editorial";
import * as RestDebtCheckContent from "./rest-debt-check";
import { ToolHero as RestDebtCheckHero } from "@/components/tools/sleep-pressure-check/rest-debt-check-hero";
import { SleepPressureExperience as RestDebtCheckExperience } from "@/components/tools/sleep-pressure-check/rest-debt-check-experience";
import { SleepPressureEditorial as RestDebtCheckEditorial } from "@/components/tools/sleep-pressure-check/rest-debt-check-editorial";
import * as NighttimeAnxietyPatternCheckContent from "./nighttime-anxiety-pattern-check";
import { ToolHero as NighttimeAnxietyPatternCheckHero } from "@/components/tools/sleep-pressure-check/nighttime-anxiety-pattern-check-hero";
import { SleepPressureExperience as NighttimeAnxietyPatternCheckExperience } from "@/components/tools/sleep-pressure-check/nighttime-anxiety-pattern-check-experience";
import { SleepPressureEditorial as NighttimeAnxietyPatternCheckEditorial } from "@/components/tools/sleep-pressure-check/nighttime-anxiety-pattern-check-editorial";
import { ToolPageHeader } from "@/components/tools/sleep-pressure-check/tool-page-header";
import { ToolHero } from "@/components/tools/sleep-pressure-check/tool-hero";
import { SleepPressureExperience } from "@/components/tools/sleep-pressure-check/sleep-pressure-experience";
import { SleepPressureEditorial } from "@/components/tools/sleep-pressure-check/sleep-pressure-editorial";

export const sleepPressureFamilyKey = "sleepPressure";
export const sleepPressureBaseSlug = "sleep-pressure-check";

export type SleepPressureFamilyToolSlug =
  | "sleep-pressure-check"
  | "evening-shutdown-check"
  | "morning-recovery-readiness-check"
  | "rest-debt-check"
  | "nighttime-anxiety-pattern-check";
export type SleepPressureFamilyTool = FamilyToolBase<SleepPressureFamilyToolSlug> & {
  familyKey: typeof sleepPressureFamilyKey;
  baseArchetypeSlug: typeof sleepPressureBaseSlug;
  content: typeof content;
  renderHeader: (tool: SleepPressureFamilyTool) => ReactElement;
  renderHero: (tool: SleepPressureFamilyTool) => ReactElement;
  renderExperience: (tool: SleepPressureFamilyTool) => ReactElement;
  renderEditorial: (tool: SleepPressureFamilyTool) => ReactElement;
};

export function createSleepPressureFamilyTool(overrides: Partial<SleepPressureFamilyTool> = {}): SleepPressureFamilyTool {
  const baseTool: SleepPressureFamilyTool = {
    slug: "sleep-pressure-check",
    familyKey: sleepPressureFamilyKey,
    baseArchetypeSlug: sleepPressureBaseSlug,
    content: content,
    pageMetadata: {
      title: "Sleep Pressure Check - Find Out Why You Are Tired but Not Recovered",
      description: "See how sleep quality, mental carryover, shutdown difficulty, and rest debt may be shaping next-day energy, focus, and steadiness.",
      keywords: ["sleep pressure check","sleep recovery tool","recovery debt tool","sleep pressure score","carryover fatigue tool"],
      openGraphTitle: "Sleep Pressure Check",
      openGraphDescription: "A premium interactive recovery-pressure tool for mapping sleep debt, nighttime disruption, and next-day carryover.",
      twitterTitle: "Sleep Pressure Check",
      twitterDescription: "See how recovery debt, racing thoughts, and inconsistent sleep may be shaping the next day.",
    },
    toolMetadata: {
      title: sleepPressureMetadata.title,
      description: sleepPressureMetadata.description,
    },
    faqItems: sleepFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(SleepPressureExperience),
    renderEditorial: () => createElement(SleepPressureEditorial),
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

export const sleepPressureBaseTool = createSleepPressureFamilyTool();

const EveningShutdownCheckTool = createSleepPressureFamilyTool({
  slug: "evening-shutdown-check",
  content: EveningShutdownCheckContent as typeof content,
  pageMetadata: {
    title: "Evening Shutdown Check - See Why Your Mind Will Not Switch Off",
    description: "Find what keeps night-time shutdown from happening, from unfinished stress and stimulation overload to weak wind-down cues.",
    keywords: ["evening","shutdown","check","can","t","switch","off","night"],
    openGraphTitle: "Evening Shutdown Check",
    openGraphDescription: "See what is preventing real evening shutdown, from mental carryover and stimulation load to weak decompression cues and unfinished activation.",
    twitterTitle: "Evening Shutdown Check",
    twitterDescription: "See what is preventing real evening shutdown, from mental carryover and stimulation load to weak decompression cues and unfinished activation.",
  },
  toolMetadata: {
    title: EveningShutdownCheckContent.sleepPressureMetadata.title,
    description: EveningShutdownCheckContent.sleepPressureMetadata.description,
  },
  faqItems: EveningShutdownCheckContent.sleepFaqItems,
  renderHero: () => createElement(EveningShutdownCheckHero),
  renderExperience: () => createElement(EveningShutdownCheckExperience),
  renderEditorial: () => createElement(EveningShutdownCheckEditorial),
});

const MorningRecoveryReadinessCheckTool = createSleepPressureFamilyTool({
  slug: "morning-recovery-readiness-check",
  content: MorningRecoveryReadinessCheckContent as typeof content,
  pageMetadata: {
    title: "Morning Recovery Readiness Check - See How Recovered You Really Feel",
    description: "Check whether you are waking up with enough clarity, energy, and recovery margin to meet the day without starting already behind.",
    keywords: ["morning","recovery","readiness","check","wake","up","tired","restored"],
    openGraphTitle: "Morning Recovery Readiness Check",
    openGraphDescription: "Check whether your system is waking up with enough restoration, clarity, and recovery margin to meet the day without starting already behind.",
    twitterTitle: "Morning Recovery Readiness Check",
    twitterDescription: "Check whether your system is waking up with enough restoration, clarity, and recovery margin to meet the day without starting already behind.",
  },
  toolMetadata: {
    title: MorningRecoveryReadinessCheckContent.sleepPressureMetadata.title,
    description: MorningRecoveryReadinessCheckContent.sleepPressureMetadata.description,
  },
  faqItems: MorningRecoveryReadinessCheckContent.sleepFaqItems,
  renderHero: () => createElement(MorningRecoveryReadinessCheckHero),
  renderExperience: () => createElement(MorningRecoveryReadinessCheckExperience),
  renderEditorial: () => createElement(MorningRecoveryReadinessCheckEditorial),
});

const RestDebtCheckTool = createSleepPressureFamilyTool({
  slug: "rest-debt-check",
  content: RestDebtCheckContent as typeof content,
  pageMetadata: {
    title: "Rest Debt Check - See How Much Recovery You Owe Yourself",
    description: "Estimate whether constant effort, under-recovery, overstimulation, and thin reset time are creating a growing rest debt.",
    keywords: ["rest","debt","check","under","recovered","need","more"],
    openGraphTitle: "Rest Debt Check",
    openGraphDescription: "Estimate whether your system is carrying accumulated rest debt from constant effort, under-recovery, overstimulation, and too little true reset time.",
    twitterTitle: "Rest Debt Check",
    twitterDescription: "Estimate whether your system is carrying accumulated rest debt from constant effort, under-recovery, overstimulation, and too little true reset time.",
  },
  toolMetadata: {
    title: RestDebtCheckContent.sleepPressureMetadata.title,
    description: RestDebtCheckContent.sleepPressureMetadata.description,
  },
  faqItems: RestDebtCheckContent.sleepFaqItems,
  renderHero: () => createElement(RestDebtCheckHero),
  renderExperience: () => createElement(RestDebtCheckExperience),
  renderEditorial: () => createElement(RestDebtCheckEditorial),
});

const NighttimeAnxietyPatternCheckTool = createSleepPressureFamilyTool({
  slug: "nighttime-anxiety-pattern-check",
  content: NighttimeAnxietyPatternCheckContent as typeof content,
  pageMetadata: {
    title: "Nighttime Anxiety Pattern Check - See Why Anxiety Gets Louder at Night",
    description: "See whether unfinished stress, mental scanning, body activation, or fear of not sleeping are driving your night-time anxiety pattern.",
    keywords: ["nighttime","anxiety","pattern","check","anxious","at","night","sleep"],
    openGraphTitle: "Nighttime Anxiety Pattern Check",
    openGraphDescription: "See whether nighttime anxiety is being fueled by unfinished stress, mental scanning, body activation, fear of not sleeping, or weak evening downshift.",
    twitterTitle: "Nighttime Anxiety Pattern Check",
    twitterDescription: "See whether nighttime anxiety is being fueled by unfinished stress, mental scanning, body activation, fear of not sleeping, or weak evening downshift.",
  },
  toolMetadata: {
    title: NighttimeAnxietyPatternCheckContent.sleepPressureMetadata.title,
    description: NighttimeAnxietyPatternCheckContent.sleepPressureMetadata.description,
  },
  faqItems: NighttimeAnxietyPatternCheckContent.sleepFaqItems,
  renderHero: () => createElement(NighttimeAnxietyPatternCheckHero),
  renderExperience: () => createElement(NighttimeAnxietyPatternCheckExperience),
  renderEditorial: () => createElement(NighttimeAnxietyPatternCheckEditorial),
});

export const sleepPressureFamilyToolRegistry = {
  "sleep-pressure-check": sleepPressureBaseTool,
  "evening-shutdown-check": EveningShutdownCheckTool,
  "morning-recovery-readiness-check": MorningRecoveryReadinessCheckTool,
  "rest-debt-check": RestDebtCheckTool,
  "nighttime-anxiety-pattern-check": NighttimeAnxietyPatternCheckTool,
};
