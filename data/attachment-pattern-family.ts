import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./attachment-pattern-spotter";
import { attachmentPatternMetadata, attachmentFaqItems } from "./attachment-pattern-spotter";
import * as EmotionalAvailabilityProfileContent from "./emotional-availability-profile";
import { ToolHero as EmotionalAvailabilityProfileHero } from "@/components/tools/attachment-pattern-spotter/emotional-availability-profile-hero";
import { AttachmentPatternExperience as EmotionalAvailabilityProfileExperience } from "@/components/tools/attachment-pattern-spotter/emotional-availability-profile-experience";
import { AttachmentPatternEditorial as EmotionalAvailabilityProfileEditorial } from "@/components/tools/attachment-pattern-spotter/emotional-availability-profile-editorial";
import * as IntimacyAvoidancePatternCheckContent from "./intimacy-avoidance-pattern-check";
import { ToolHero as IntimacyAvoidancePatternCheckHero } from "@/components/tools/attachment-pattern-spotter/intimacy-avoidance-pattern-check-hero";
import { AttachmentPatternExperience as IntimacyAvoidancePatternCheckExperience } from "@/components/tools/attachment-pattern-spotter/intimacy-avoidance-pattern-check-experience";
import { AttachmentPatternEditorial as IntimacyAvoidancePatternCheckEditorial } from "@/components/tools/attachment-pattern-spotter/intimacy-avoidance-pattern-check-editorial";
import * as TrustPatternSpotterContent from "./trust-pattern-spotter";
import { ToolHero as TrustPatternSpotterHero } from "@/components/tools/attachment-pattern-spotter/trust-pattern-spotter-hero";
import { AttachmentPatternExperience as TrustPatternSpotterExperience } from "@/components/tools/attachment-pattern-spotter/trust-pattern-spotter-experience";
import { AttachmentPatternEditorial as TrustPatternSpotterEditorial } from "@/components/tools/attachment-pattern-spotter/trust-pattern-spotter-editorial";
import * as VulnerabilityReadinessProfileContent from "./vulnerability-readiness-profile";
import { ToolHero as VulnerabilityReadinessProfileHero } from "@/components/tools/attachment-pattern-spotter/vulnerability-readiness-profile-hero";
import { AttachmentPatternExperience as VulnerabilityReadinessProfileExperience } from "@/components/tools/attachment-pattern-spotter/vulnerability-readiness-profile-experience";
import { AttachmentPatternEditorial as VulnerabilityReadinessProfileEditorial } from "@/components/tools/attachment-pattern-spotter/vulnerability-readiness-profile-editorial";
import { ToolPageHeader } from "@/components/tools/attachment-pattern-spotter/tool-page-header";
import { ToolHero } from "@/components/tools/attachment-pattern-spotter/tool-hero";
import { AttachmentPatternExperience } from "@/components/tools/attachment-pattern-spotter/attachment-pattern-experience";
import { AttachmentPatternEditorial } from "@/components/tools/attachment-pattern-spotter/attachment-pattern-editorial";

export const attachmentPatternFamilyKey = "attachmentPattern";
export const attachmentPatternBaseSlug = "attachment-pattern-spotter";

export type AttachmentPatternFamilyToolSlug =
  | "attachment-pattern-spotter"
  | "emotional-availability-profile"
  | "intimacy-avoidance-pattern-check"
  | "trust-pattern-spotter"
  | "vulnerability-readiness-profile";
export type AttachmentPatternFamilyTool = FamilyToolBase<AttachmentPatternFamilyToolSlug> & {
  familyKey: typeof attachmentPatternFamilyKey;
  baseArchetypeSlug: typeof attachmentPatternBaseSlug;
  content: typeof content;
  renderHeader: (tool: AttachmentPatternFamilyTool) => ReactElement;
  renderHero: (tool: AttachmentPatternFamilyTool) => ReactElement;
  renderExperience: (tool: AttachmentPatternFamilyTool) => ReactElement;
  renderEditorial: (tool: AttachmentPatternFamilyTool) => ReactElement;
};

export function createAttachmentPatternFamilyTool(overrides: Partial<AttachmentPatternFamilyTool> = {}): AttachmentPatternFamilyTool {
  const baseTool: AttachmentPatternFamilyTool = {
    slug: "attachment-pattern-spotter",
    familyKey: attachmentPatternFamilyKey,
    baseArchetypeSlug: attachmentPatternBaseSlug,
    content: content,
    pageMetadata: {
      title: "Attachment Pattern Spotter - Understand How You React to Closeness and Distance",
      description: "Explore how you respond to closeness, uncertainty, reassurance, distance, and emotional availability in relationships.",
      keywords: ["attachment pattern spotter","attachment profile tool","relationship pattern tool","attachment style profiler","relationship response profile"],
      openGraphTitle: "Attachment Pattern Spotter",
      openGraphDescription: "A premium interactive relationship pattern profiler for mapping closeness comfort, reassurance pull, withdrawal tendency, and emotional steadiness.",
      twitterTitle: "Attachment Pattern Spotter",
      twitterDescription: "See how closeness, distance, reassurance, and emotional availability shape your relationship pattern.",
    },
    toolMetadata: {
      title: attachmentPatternMetadata.title,
      description: attachmentPatternMetadata.description,
    },
    faqItems: attachmentFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(AttachmentPatternExperience),
    renderEditorial: () => createElement(AttachmentPatternEditorial),
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

export const attachmentPatternBaseTool = createAttachmentPatternFamilyTool();

const EmotionalAvailabilityProfileTool = createAttachmentPatternFamilyTool({
  slug: "emotional-availability-profile",
  content: EmotionalAvailabilityProfileContent as typeof content,
  pageMetadata: {
    title: "Emotional Availability Profile - See How Reachable This Pattern Really Is",
    description: "See how open, responsive, emotionally present, and reachable you or this relationship pattern feels when closeness matters.",
    keywords: ["emotional","availability","profile","emotionally","unavailable","in","relationships","presence"],
    openGraphTitle: "Emotional Availability Profile",
    openGraphDescription: "See how open, reachable, responsive, and emotionally present you or a relationship dynamic feels when closeness actually matters.",
    twitterTitle: "Emotional Availability Profile",
    twitterDescription: "See how open, reachable, responsive, and emotionally present you or a relationship dynamic feels when closeness actually matters.",
  },
  toolMetadata: {
    title: EmotionalAvailabilityProfileContent.attachmentPatternMetadata.title,
    description: EmotionalAvailabilityProfileContent.attachmentPatternMetadata.description,
  },
  faqItems: EmotionalAvailabilityProfileContent.attachmentFaqItems,
  renderHero: () => createElement(EmotionalAvailabilityProfileHero),
  renderExperience: () => createElement(EmotionalAvailabilityProfileExperience),
  renderEditorial: () => createElement(EmotionalAvailabilityProfileEditorial),
});

const IntimacyAvoidancePatternCheckTool = createAttachmentPatternFamilyTool({
  slug: "intimacy-avoidance-pattern-check",
  content: IntimacyAvoidancePatternCheckContent as typeof content,
  pageMetadata: {
    title: "Intimacy Avoidance Pattern Check - See If Closeness Makes You Pull Back",
    description: "Check whether closeness triggers distancing, shutdown, over-independence, or quieter forms of emotional retreat.",
    keywords: ["intimacy","avoidance","pattern","check","avoid","distancing","pulling","away"],
    openGraphTitle: "Intimacy Avoidance Pattern Check",
    openGraphDescription: "Check whether closeness triggers distancing, over-independence, deactivation, emotional shutdown, or subtle forms of pulling back.",
    twitterTitle: "Intimacy Avoidance Pattern Check",
    twitterDescription: "Check whether closeness triggers distancing, over-independence, deactivation, emotional shutdown, or subtle forms of pulling back.",
  },
  toolMetadata: {
    title: IntimacyAvoidancePatternCheckContent.attachmentPatternMetadata.title,
    description: IntimacyAvoidancePatternCheckContent.attachmentPatternMetadata.description,
  },
  faqItems: IntimacyAvoidancePatternCheckContent.attachmentFaqItems,
  renderHero: () => createElement(IntimacyAvoidancePatternCheckHero),
  renderExperience: () => createElement(IntimacyAvoidancePatternCheckExperience),
  renderEditorial: () => createElement(IntimacyAvoidancePatternCheckEditorial),
});

const TrustPatternSpotterTool = createAttachmentPatternFamilyTool({
  slug: "trust-pattern-spotter",
  content: TrustPatternSpotterContent as typeof content,
  pageMetadata: {
    title: "Trust Pattern Spotter - See How Trust Builds, Wobbles, or Breaks",
    description: "Map how quickly trust forms, where doubt enters, what makes security wobble, and whether trust stays steady under stress.",
    keywords: ["trust","pattern","spotter","issues","how","builds","relationship"],
    openGraphTitle: "Trust Pattern Spotter",
    openGraphDescription: "Map how quickly trust forms, where doubt enters, what makes security wobble, and whether trust is staying steady across closeness and stress.",
    twitterTitle: "Trust Pattern Spotter",
    twitterDescription: "Map how quickly trust forms, where doubt enters, what makes security wobble, and whether trust is staying steady across closeness and stress.",
  },
  toolMetadata: {
    title: TrustPatternSpotterContent.attachmentPatternMetadata.title,
    description: TrustPatternSpotterContent.attachmentPatternMetadata.description,
  },
  faqItems: TrustPatternSpotterContent.attachmentFaqItems,
  renderHero: () => createElement(TrustPatternSpotterHero),
  renderExperience: () => createElement(TrustPatternSpotterExperience),
  renderEditorial: () => createElement(TrustPatternSpotterEditorial),
});

const VulnerabilityReadinessProfileTool = createAttachmentPatternFamilyTool({
  slug: "vulnerability-readiness-profile",
  content: VulnerabilityReadinessProfileContent as typeof content,
  pageMetadata: {
    title: "Vulnerability Readiness Profile - See How Ready You Feel to Open Up",
    description: "See how ready your system is for honesty, emotional risk, and deeper closeness without shutting down or oversharing.",
    keywords: ["vulnerability","readiness","profile","ready","to","open","up","emotional"],
    openGraphTitle: "Vulnerability Readiness Profile",
    openGraphDescription: "See how ready your system is for honesty, emotional risk, closeness, and deeper self-revelation without collapsing into shutdown or overexposure.",
    twitterTitle: "Vulnerability Readiness Profile",
    twitterDescription: "See how ready your system is for honesty, emotional risk, closeness, and deeper self-revelation without collapsing into shutdown or overexposure.",
  },
  toolMetadata: {
    title: VulnerabilityReadinessProfileContent.attachmentPatternMetadata.title,
    description: VulnerabilityReadinessProfileContent.attachmentPatternMetadata.description,
  },
  faqItems: VulnerabilityReadinessProfileContent.attachmentFaqItems,
  renderHero: () => createElement(VulnerabilityReadinessProfileHero),
  renderExperience: () => createElement(VulnerabilityReadinessProfileExperience),
  renderEditorial: () => createElement(VulnerabilityReadinessProfileEditorial),
});

export const attachmentPatternFamilyToolRegistry = {
  "attachment-pattern-spotter": attachmentPatternBaseTool,
  "emotional-availability-profile": EmotionalAvailabilityProfileTool,
  "intimacy-avoidance-pattern-check": IntimacyAvoidancePatternCheckTool,
  "trust-pattern-spotter": TrustPatternSpotterTool,
  "vulnerability-readiness-profile": VulnerabilityReadinessProfileTool,
};
