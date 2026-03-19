import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./focus-friction-audit";
import { focusToolMetadata, focusFaqItems } from "./focus-friction-audit";
import * as ProcrastinationFrictionAuditContent from "./procrastination-friction-audit";
import { ToolHero as ProcrastinationFrictionAuditHero } from "@/components/tools/focus-friction-audit/procrastination-friction-audit-hero";
import { FocusFrictionExperience as ProcrastinationFrictionAuditExperience } from "@/components/tools/focus-friction-audit/procrastination-friction-audit-experience";
import { FocusEditorial as ProcrastinationFrictionAuditEditorial } from "@/components/tools/focus-friction-audit/procrastination-friction-audit-editorial";
import * as ExecutiveFunctionFrictionCheckContent from "./executive-function-friction-check";
import { ToolHero as ExecutiveFunctionFrictionCheckHero } from "@/components/tools/focus-friction-audit/executive-function-friction-check-hero";
import { FocusFrictionExperience as ExecutiveFunctionFrictionCheckExperience } from "@/components/tools/focus-friction-audit/executive-function-friction-check-experience";
import { FocusEditorial as ExecutiveFunctionFrictionCheckEditorial } from "@/components/tools/focus-friction-audit/executive-function-friction-check-editorial";
import * as TaskInitiationDifficultyAuditContent from "./task-initiation-difficulty-audit";
import { ToolHero as TaskInitiationDifficultyAuditHero } from "@/components/tools/focus-friction-audit/task-initiation-difficulty-audit-hero";
import { FocusFrictionExperience as TaskInitiationDifficultyAuditExperience } from "@/components/tools/focus-friction-audit/task-initiation-difficulty-audit-experience";
import { FocusEditorial as TaskInitiationDifficultyAuditEditorial } from "@/components/tools/focus-friction-audit/task-initiation-difficulty-audit-editorial";
import * as DisciplineFrictionCheckContent from "./discipline-friction-check";
import { ToolHero as DisciplineFrictionCheckHero } from "@/components/tools/focus-friction-audit/discipline-friction-check-hero";
import { FocusFrictionExperience as DisciplineFrictionCheckExperience } from "@/components/tools/focus-friction-audit/discipline-friction-check-experience";
import { FocusEditorial as DisciplineFrictionCheckEditorial } from "@/components/tools/focus-friction-audit/discipline-friction-check-editorial";
import { ToolPageHeader } from "@/components/tools/focus-friction-audit/tool-page-header";
import { ToolHero } from "@/components/tools/focus-friction-audit/tool-hero";
import { FocusFrictionExperience } from "@/components/tools/focus-friction-audit/focus-friction-experience";
import { FocusEditorial } from "@/components/tools/focus-friction-audit/focus-editorial";

export const focusFrictionFamilyKey = "focusFriction";
export const focusFrictionBaseSlug = "focus-friction-audit";

export type FocusFrictionFamilyToolSlug =
  | "focus-friction-audit"
  | "procrastination-friction-audit"
  | "executive-function-friction-check"
  | "task-initiation-difficulty-audit"
  | "discipline-friction-check";
export type FocusFrictionFamilyTool = FamilyToolBase<FocusFrictionFamilyToolSlug> & {
  familyKey: typeof focusFrictionFamilyKey;
  baseArchetypeSlug: typeof focusFrictionBaseSlug;
  content: typeof content;
  renderHeader: (tool: FocusFrictionFamilyTool) => ReactElement;
  renderHero: (tool: FocusFrictionFamilyTool) => ReactElement;
  renderExperience: (tool: FocusFrictionFamilyTool) => ReactElement;
  renderEditorial: (tool: FocusFrictionFamilyTool) => ReactElement;
};

export function createFocusFrictionFamilyTool(overrides: Partial<FocusFrictionFamilyTool> = {}): FocusFrictionFamilyTool {
  const baseTool: FocusFrictionFamilyTool = {
    slug: "focus-friction-audit",
    familyKey: focusFrictionFamilyKey,
    baseArchetypeSlug: focusFrictionBaseSlug,
    content: content,
    pageMetadata: {
      title: "Focus Friction Audit - See What Keeps Breaking Your Focus",
      description: "Find out why focus feels harder than it should. This audit maps start resistance, interruption drag, unclear next steps, and attention drop in plain language.",
      keywords: ["focus friction audit","focus tool","productivity friction audit","attention breakdown tool","start resistance check"],
      openGraphTitle: "Focus Friction Audit",
      openGraphDescription: "A premium interactive operational focus tool for diagnosing interruption load, start resistance, clarity deficit, and momentum drag.",
      twitterTitle: "Focus Friction Audit",
      twitterDescription: "See why focus is breaking down and which blockers are making work feel heavier than it should.",
    },
    toolMetadata: {
      title: focusToolMetadata.title,
      description: focusToolMetadata.description,
    },
    faqItems: focusFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(FocusFrictionExperience),
    renderEditorial: () => createElement(FocusEditorial),
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

export const focusFrictionBaseTool = createFocusFrictionFamilyTool();

const ProcrastinationFrictionAuditTool = createFocusFrictionFamilyTool({
  slug: "procrastination-friction-audit",
  content: ProcrastinationFrictionAuditContent as typeof content,
  pageMetadata: {
    title: "Procrastination Friction Audit - Find Why You Keep Delaying the Start",
    description: "See what sits underneath procrastination, from dread and low clarity to task aversion, pressure, and weak starting momentum.",
    keywords: ["procrastination","friction","audit","triggers","task","avoidance","delay","pattern"],
    openGraphTitle: "Procrastination Friction Audit",
    openGraphDescription: "See what is actually creating procrastination friction, from avoidance cues and task aversion to emotional resistance, low clarity, and weak starting momentum.",
    twitterTitle: "Procrastination Friction Audit",
    twitterDescription: "See what is actually creating procrastination friction, from avoidance cues and task aversion to emotional resistance, low clarity, and weak starting momentum.",
  },
  toolMetadata: {
    title: ProcrastinationFrictionAuditContent.focusToolMetadata.title,
    description: ProcrastinationFrictionAuditContent.focusToolMetadata.description,
  },
  faqItems: ProcrastinationFrictionAuditContent.focusFaqItems,
  renderHero: () => createElement(ProcrastinationFrictionAuditHero),
  renderExperience: () => createElement(ProcrastinationFrictionAuditExperience),
  renderEditorial: () => createElement(ProcrastinationFrictionAuditEditorial),
});

const ExecutiveFunctionFrictionCheckTool = createFocusFrictionFamilyTool({
  slug: "executive-function-friction-check",
  content: ExecutiveFunctionFrictionCheckContent as typeof content,
  pageMetadata: {
    title: "Executive Function Friction Check - See Where Tasks Start Falling Apart",
    description: "Map where planning, sequencing, working memory, and task carryover are making everyday work harder to organize.",
    keywords: ["executive","function","friction","check","planning","difficulty","sequencing","problems"],
    openGraphTitle: "Executive Function Friction Check",
    openGraphDescription: "Map where executive function friction is building, including planning strain, sequencing drag, weak working memory, start resistance, and lost task continuity.",
    twitterTitle: "Executive Function Friction Check",
    twitterDescription: "Map where executive function friction is building, including planning strain, sequencing drag, weak working memory, start resistance, and lost task continuity.",
  },
  toolMetadata: {
    title: ExecutiveFunctionFrictionCheckContent.focusToolMetadata.title,
    description: ExecutiveFunctionFrictionCheckContent.focusToolMetadata.description,
  },
  faqItems: ExecutiveFunctionFrictionCheckContent.focusFaqItems,
  renderHero: () => createElement(ExecutiveFunctionFrictionCheckHero),
  renderExperience: () => createElement(ExecutiveFunctionFrictionCheckExperience),
  renderEditorial: () => createElement(ExecutiveFunctionFrictionCheckEditorial),
});

const TaskInitiationDifficultyAuditTool = createFocusFrictionFamilyTool({
  slug: "task-initiation-difficulty-audit",
  content: TaskInitiationDifficultyAuditContent as typeof content,
  pageMetadata: {
    title: "Task Initiation Difficulty Audit - See Why Starting Feels So Hard",
    description: "Find out whether starting is getting blocked by overwhelm, vague first steps, emotional resistance, low energy, or pressure.",
    keywords: ["task","initiation","difficulty","audit","hard","to","start","tasks"],
    openGraphTitle: "Task Initiation Difficulty Audit",
    openGraphDescription: "See whether task initiation difficulty is being driven by overwhelm, vague starting points, emotional resistance, low activation, or pressure-sensitive avoidance.",
    twitterTitle: "Task Initiation Difficulty Audit",
    twitterDescription: "See whether task initiation difficulty is being driven by overwhelm, vague starting points, emotional resistance, low activation, or pressure-sensitive avoidance.",
  },
  toolMetadata: {
    title: TaskInitiationDifficultyAuditContent.focusToolMetadata.title,
    description: TaskInitiationDifficultyAuditContent.focusToolMetadata.description,
  },
  faqItems: TaskInitiationDifficultyAuditContent.focusFaqItems,
  renderHero: () => createElement(TaskInitiationDifficultyAuditHero),
  renderExperience: () => createElement(TaskInitiationDifficultyAuditExperience),
  renderEditorial: () => createElement(TaskInitiationDifficultyAuditEditorial),
});

const DisciplineFrictionCheckTool = createFocusFrictionFamilyTool({
  slug: "discipline-friction-check",
  content: DisciplineFrictionCheckContent as typeof content,
  pageMetadata: {
    title: "Discipline Friction Check - See Why Consistency Keeps Slipping",
    description: "Check whether discipline breaks down because the system is running on weak structure, emotional pushback, tempting distractions, or follow-through fatigue.",
    keywords: ["discipline","friction","check","problems","consistency","issues","follow","through"],
    openGraphTitle: "Discipline Friction Check",
    openGraphDescription: "Check whether discipline keeps breaking because of weak structure, emotional friction, unclear standards, temptation load, or brittle follow-through systems.",
    twitterTitle: "Discipline Friction Check",
    twitterDescription: "Check whether discipline keeps breaking because of weak structure, emotional friction, unclear standards, temptation load, or brittle follow-through systems.",
  },
  toolMetadata: {
    title: DisciplineFrictionCheckContent.focusToolMetadata.title,
    description: DisciplineFrictionCheckContent.focusToolMetadata.description,
  },
  faqItems: DisciplineFrictionCheckContent.focusFaqItems,
  renderHero: () => createElement(DisciplineFrictionCheckHero),
  renderExperience: () => createElement(DisciplineFrictionCheckExperience),
  renderEditorial: () => createElement(DisciplineFrictionCheckEditorial),
});

export const focusFrictionFamilyToolRegistry = {
  "focus-friction-audit": focusFrictionBaseTool,
  "procrastination-friction-audit": ProcrastinationFrictionAuditTool,
  "executive-function-friction-check": ExecutiveFunctionFrictionCheckTool,
  "task-initiation-difficulty-audit": TaskInitiationDifficultyAuditTool,
  "discipline-friction-check": DisciplineFrictionCheckTool,
};
