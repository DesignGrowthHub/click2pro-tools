import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./work-stress-load-mapper";
import { workStressLoadMapperMetadata, workStressFaqItems } from "./work-stress-load-mapper";
import * as MeetingBurdenMapperContent from "./meeting-burden-mapper";
import { ToolHero as MeetingBurdenMapperHero } from "@/components/tools/work-stress-load-mapper/meeting-burden-mapper-hero";
import { WorkStressLoadExperience as MeetingBurdenMapperExperience } from "@/components/tools/work-stress-load-mapper/meeting-burden-mapper-experience";
import { WorkStressLoadEditorial as MeetingBurdenMapperEditorial } from "@/components/tools/work-stress-load-mapper/meeting-burden-mapper-editorial";
import * as RoleAmbiguityStressCheckContent from "./role-ambiguity-stress-check";
import { ToolHero as RoleAmbiguityStressCheckHero } from "@/components/tools/work-stress-load-mapper/role-ambiguity-stress-check-hero";
import { WorkStressLoadExperience as RoleAmbiguityStressCheckExperience } from "@/components/tools/work-stress-load-mapper/role-ambiguity-stress-check-experience";
import { WorkStressLoadEditorial as RoleAmbiguityStressCheckEditorial } from "@/components/tools/work-stress-load-mapper/role-ambiguity-stress-check-editorial";
import * as ContextSwitchingLoadCheckContent from "./context-switching-load-check";
import { ToolHero as ContextSwitchingLoadCheckHero } from "@/components/tools/work-stress-load-mapper/context-switching-load-check-hero";
import { WorkStressLoadExperience as ContextSwitchingLoadCheckExperience } from "@/components/tools/work-stress-load-mapper/context-switching-load-check-experience";
import { WorkStressLoadEditorial as ContextSwitchingLoadCheckEditorial } from "@/components/tools/work-stress-load-mapper/context-switching-load-check-editorial";
import * as InvisibleWorkloadMapperContent from "./invisible-workload-mapper";
import { ToolHero as InvisibleWorkloadMapperHero } from "@/components/tools/work-stress-load-mapper/invisible-workload-mapper-hero";
import { WorkStressLoadExperience as InvisibleWorkloadMapperExperience } from "@/components/tools/work-stress-load-mapper/invisible-workload-mapper-experience";
import { WorkStressLoadEditorial as InvisibleWorkloadMapperEditorial } from "@/components/tools/work-stress-load-mapper/invisible-workload-mapper-editorial";
import { ToolPageHeader } from "@/components/tools/work-stress-load-mapper/tool-page-header";
import { ToolHero } from "@/components/tools/work-stress-load-mapper/tool-hero";
import { WorkStressLoadExperience } from "@/components/tools/work-stress-load-mapper/work-stress-load-experience";
import { WorkStressLoadEditorial } from "@/components/tools/work-stress-load-mapper/work-stress-load-editorial";

export const workStressFamilyKey = "workStress";
export const workStressBaseSlug = "work-stress-load-mapper";

export type WorkStressFamilyToolSlug =
  | "work-stress-load-mapper"
  | "meeting-burden-mapper"
  | "role-ambiguity-stress-check"
  | "context-switching-load-check"
  | "invisible-workload-mapper";
export type WorkStressFamilyTool = FamilyToolBase<WorkStressFamilyToolSlug> & {
  familyKey: typeof workStressFamilyKey;
  baseArchetypeSlug: typeof workStressBaseSlug;
  content: typeof content;
  renderHeader: (tool: WorkStressFamilyTool) => ReactElement;
  renderHero: (tool: WorkStressFamilyTool) => ReactElement;
  renderExperience: (tool: WorkStressFamilyTool) => ReactElement;
  renderEditorial: (tool: WorkStressFamilyTool) => ReactElement;
};

export function createWorkStressFamilyTool(overrides: Partial<WorkStressFamilyTool> = {}): WorkStressFamilyTool {
  const baseTool: WorkStressFamilyTool = {
    slug: "work-stress-load-mapper",
    familyKey: workStressFamilyKey,
    baseArchetypeSlug: workStressBaseSlug,
    content: content,
    pageMetadata: {
      title: "Work Stress Load Mapper - See What Is Really Driving Your Job Stress",
      description: "See whether work stress is coming from volume, ambiguity, switching, emotional labor, invisible responsibility, or low control.",
      keywords: ["work stress load mapper","work stress assessment","work pressure tool","job stress causes","why work feels overwhelming","workload vs low control"],
      openGraphTitle: "Work Stress Load Mapper",
      openGraphDescription: "A premium interactive tool for mapping volume, ambiguity, switching, emotional labor, invisible burden, and low control inside work stress.",
      twitterTitle: "Work Stress Load Mapper",
      twitterDescription: "See what is actually driving work stress instead of treating all job pressure like one thing.",
    },
    toolMetadata: {
      title: workStressLoadMapperMetadata.title,
      description: workStressLoadMapperMetadata.description,
    },
    faqItems: workStressFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(WorkStressLoadExperience),
    renderEditorial: () => createElement(WorkStressLoadEditorial),
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

export const workStressBaseTool = createWorkStressFamilyTool();

const MeetingBurdenMapperTool = createWorkStressFamilyTool({
  slug: "meeting-burden-mapper",
  content: MeetingBurdenMapperContent as typeof content,
  pageMetadata: {
    title: "Meeting Burden Mapper - See If Meetings Are Quietly Overloading You",
    description: "See how much stress is coming from meetings, coordination drag, context resets, weak agendas, and too little uninterrupted time.",
    keywords: ["meeting","burden","mapper","overload","too","many","meetings","fatigue"],
    openGraphTitle: "Meeting Burden Mapper",
    openGraphDescription: "See how much stress is actually coming from meetings, coordination drag, context resets, weak agendas, and too little uninterrupted time to think.",
    twitterTitle: "Meeting Burden Mapper",
    twitterDescription: "See how much stress is actually coming from meetings, coordination drag, context resets, weak agendas, and too little uninterrupted time to think.",
  },
  toolMetadata: {
    title: MeetingBurdenMapperContent.workStressLoadMapperMetadata.title,
    description: MeetingBurdenMapperContent.workStressLoadMapperMetadata.description,
  },
  faqItems: MeetingBurdenMapperContent.workStressFaqItems,
  renderHero: () => createElement(MeetingBurdenMapperHero),
  renderExperience: () => createElement(MeetingBurdenMapperExperience),
  renderEditorial: () => createElement(MeetingBurdenMapperEditorial),
});

const RoleAmbiguityStressCheckTool = createWorkStressFamilyTool({
  slug: "role-ambiguity-stress-check",
  content: RoleAmbiguityStressCheckContent as typeof content,
  pageMetadata: {
    title: "Role Ambiguity Stress Check - See If Unclear Expectations Are the Real Problem",
    description: "Check whether vague expectations, shifting priorities, blurred ownership, and unclear accountability are driving your work stress.",
    keywords: ["role","ambiguity","stress","check","unclear","vague","expectations","at"],
    openGraphTitle: "Role Ambiguity Stress Check",
    openGraphDescription: "Check whether unclear expectations, shifting priorities, vague accountability, and blurred ownership are the real sources of your work stress.",
    twitterTitle: "Role Ambiguity Stress Check",
    twitterDescription: "Check whether unclear expectations, shifting priorities, vague accountability, and blurred ownership are the real sources of your work stress.",
  },
  toolMetadata: {
    title: RoleAmbiguityStressCheckContent.workStressLoadMapperMetadata.title,
    description: RoleAmbiguityStressCheckContent.workStressLoadMapperMetadata.description,
  },
  faqItems: RoleAmbiguityStressCheckContent.workStressFaqItems,
  renderHero: () => createElement(RoleAmbiguityStressCheckHero),
  renderExperience: () => createElement(RoleAmbiguityStressCheckExperience),
  renderEditorial: () => createElement(RoleAmbiguityStressCheckEditorial),
});

const ContextSwitchingLoadCheckTool = createWorkStressFamilyTool({
  slug: "context-switching-load-check",
  content: ContextSwitchingLoadCheckContent as typeof content,
  pageMetadata: {
    title: "Context Switching Load Check - See If Task Switching Is Making Work Heavier",
    description: "See whether constant task switching, interruption recovery, shallow restarts, and fragmented attention are making the workday heavier than it looks.",
    keywords: ["context","switching","load","check","task","stress","fragmented","workday"],
    openGraphTitle: "Context Switching Load Check",
    openGraphDescription: "See whether constant task switching, interruption recovery, shallow restarts, and fragmented attention are making the workday heavier than it looks.",
    twitterTitle: "Context Switching Load Check",
    twitterDescription: "See whether constant task switching, interruption recovery, shallow restarts, and fragmented attention are making the workday heavier than it looks.",
  },
  toolMetadata: {
    title: ContextSwitchingLoadCheckContent.workStressLoadMapperMetadata.title,
    description: ContextSwitchingLoadCheckContent.workStressLoadMapperMetadata.description,
  },
  faqItems: ContextSwitchingLoadCheckContent.workStressFaqItems,
  renderHero: () => createElement(ContextSwitchingLoadCheckHero),
  renderExperience: () => createElement(ContextSwitchingLoadCheckExperience),
  renderEditorial: () => createElement(ContextSwitchingLoadCheckEditorial),
});

const InvisibleWorkloadMapperTool = createWorkStressFamilyTool({
  slug: "invisible-workload-mapper",
  content: InvisibleWorkloadMapperContent as typeof content,
  pageMetadata: {
    title: "Invisible Workload Mapper - See How Much Hidden Work You Are Carrying",
    description: "Map the behind-the-scenes load that often goes uncounted, including coordination, memory load, emotional labor, support work, and hidden responsibility.",
    keywords: ["invisible","workload","mapper","hidden","work","load","unseen","emotional"],
    openGraphTitle: "Invisible Workload Mapper",
    openGraphDescription: "Map the behind-the-scenes load that does not get counted clearly, including coordination, emotional labor, memory load, support work, and hidden responsibility.",
    twitterTitle: "Invisible Workload Mapper",
    twitterDescription: "Map the behind-the-scenes load that does not get counted clearly, including coordination, emotional labor, memory load, support work, and hidden responsibility.",
  },
  toolMetadata: {
    title: InvisibleWorkloadMapperContent.workStressLoadMapperMetadata.title,
    description: InvisibleWorkloadMapperContent.workStressLoadMapperMetadata.description,
  },
  faqItems: InvisibleWorkloadMapperContent.workStressFaqItems,
  renderHero: () => createElement(InvisibleWorkloadMapperHero),
  renderExperience: () => createElement(InvisibleWorkloadMapperExperience),
  renderEditorial: () => createElement(InvisibleWorkloadMapperEditorial),
});

export const workStressFamilyToolRegistry = {
  "work-stress-load-mapper": workStressBaseTool,
  "meeting-burden-mapper": MeetingBurdenMapperTool,
  "role-ambiguity-stress-check": RoleAmbiguityStressCheckTool,
  "context-switching-load-check": ContextSwitchingLoadCheckTool,
  "invisible-workload-mapper": InvisibleWorkloadMapperTool,
};
