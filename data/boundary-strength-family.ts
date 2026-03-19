import { createElement, type ReactElement } from "react";
import type { FamilyToolBase } from "./family-engine";
import * as content from "./boundary-strength-scanner";
import { boundaryStrengthMetadata, boundaryStrengthFaqItems } from "./boundary-strength-scanner";
import * as WorkBoundaryCheckContent from "./work-boundary-check";
import { ToolHero as WorkBoundaryCheckHero } from "@/components/tools/boundary-strength-scanner/work-boundary-check-hero";
import { BoundaryStrengthExperience as WorkBoundaryCheckExperience } from "@/components/tools/boundary-strength-scanner/work-boundary-check-experience";
import { BoundaryStrengthEditorial as WorkBoundaryCheckEditorial } from "@/components/tools/boundary-strength-scanner/work-boundary-check-editorial";
import * as FamilyBoundaryScannerContent from "./family-boundary-scanner";
import { ToolHero as FamilyBoundaryScannerHero } from "@/components/tools/boundary-strength-scanner/family-boundary-scanner-hero";
import { BoundaryStrengthExperience as FamilyBoundaryScannerExperience } from "@/components/tools/boundary-strength-scanner/family-boundary-scanner-experience";
import { BoundaryStrengthEditorial as FamilyBoundaryScannerEditorial } from "@/components/tools/boundary-strength-scanner/family-boundary-scanner-editorial";
import * as EmotionalBoundaryCheckContent from "./emotional-boundary-check";
import { ToolHero as EmotionalBoundaryCheckHero } from "@/components/tools/boundary-strength-scanner/emotional-boundary-check-hero";
import { BoundaryStrengthExperience as EmotionalBoundaryCheckExperience } from "@/components/tools/boundary-strength-scanner/emotional-boundary-check-experience";
import { BoundaryStrengthEditorial as EmotionalBoundaryCheckEditorial } from "@/components/tools/boundary-strength-scanner/emotional-boundary-check-editorial";
import * as CaretakerBoundaryScannerContent from "./caretaker-boundary-scanner";
import { ToolHero as CaretakerBoundaryScannerHero } from "@/components/tools/boundary-strength-scanner/caretaker-boundary-scanner-hero";
import { BoundaryStrengthExperience as CaretakerBoundaryScannerExperience } from "@/components/tools/boundary-strength-scanner/caretaker-boundary-scanner-experience";
import { BoundaryStrengthEditorial as CaretakerBoundaryScannerEditorial } from "@/components/tools/boundary-strength-scanner/caretaker-boundary-scanner-editorial";
import { ToolPageHeader } from "@/components/tools/boundary-strength-scanner/tool-page-header";
import { ToolHero } from "@/components/tools/boundary-strength-scanner/tool-hero";
import { BoundaryStrengthExperience } from "@/components/tools/boundary-strength-scanner/boundary-strength-experience";
import { BoundaryStrengthEditorial } from "@/components/tools/boundary-strength-scanner/boundary-strength-editorial";

export const boundaryStrengthFamilyKey = "boundaryStrength";
export const boundaryStrengthBaseSlug = "boundary-strength-scanner";

export type BoundaryStrengthFamilyToolSlug =
  | "boundary-strength-scanner"
  | "work-boundary-check"
  | "family-boundary-scanner"
  | "emotional-boundary-check"
  | "caretaker-boundary-scanner";
export type BoundaryStrengthFamilyTool = FamilyToolBase<BoundaryStrengthFamilyToolSlug> & {
  familyKey: typeof boundaryStrengthFamilyKey;
  baseArchetypeSlug: typeof boundaryStrengthBaseSlug;
  content: typeof content;
  renderHeader: (tool: BoundaryStrengthFamilyTool) => ReactElement;
  renderHero: (tool: BoundaryStrengthFamilyTool) => ReactElement;
  renderExperience: (tool: BoundaryStrengthFamilyTool) => ReactElement;
  renderEditorial: (tool: BoundaryStrengthFamilyTool) => ReactElement;
};

export function createBoundaryStrengthFamilyTool(overrides: Partial<BoundaryStrengthFamilyTool> = {}): BoundaryStrengthFamilyTool {
  const baseTool: BoundaryStrengthFamilyTool = {
    slug: "boundary-strength-scanner",
    familyKey: boundaryStrengthFamilyKey,
    baseArchetypeSlug: boundaryStrengthBaseSlug,
    content: content,
    pageMetadata: {
      title: "Boundary Strength Scanner - See Where Your Limits Get Soft Under Pressure",
      description: "See where guilt, urgency, emotional pressure, and over-responsibility make it harder to hold a clean limit in real conversations.",
      keywords: ["boundary test","weak boundaries check","boundary strength scanner","how to know if i have weak boundaries","boundary issues assessment","people pleasing boundaries tool"],
      openGraphTitle: "Boundary Strength Scanner",
      openGraphDescription: "A premium interactive tool for reading limit clarity, guilt-based override, pressure points, weak zones, and the hidden cost of soft boundaries.",
      twitterTitle: "Boundary Strength Scanner",
      twitterDescription: "See where your boundaries stay clear, where they soften, and what pressure tends to bend them fastest.",
    },
    toolMetadata: {
      title: boundaryStrengthMetadata.title,
      description: boundaryStrengthMetadata.description,
    },
    faqItems: boundaryStrengthFaqItems,
    renderHeader: () => createElement(ToolPageHeader),
    renderHero: () => createElement(ToolHero),
    renderExperience: () => createElement(BoundaryStrengthExperience),
    renderEditorial: () => createElement(BoundaryStrengthEditorial),
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

export const boundaryStrengthBaseTool = createBoundaryStrengthFamilyTool();

const WorkBoundaryCheckTool = createBoundaryStrengthFamilyTool({
  slug: "work-boundary-check",
  content: WorkBoundaryCheckContent as typeof content,
  pageMetadata: {
    title: "Work Boundary Check - See Where Work Keeps Crossing Your Limits",
    description: "Check where workload, urgency, blurred expectations, and constant availability are making your work boundaries too soft.",
    keywords: ["work","boundary","check","boundaries","availability","pressure","job"],
    openGraphTitle: "Work Boundary Check",
    openGraphDescription: "Check where workload, urgency, availability pressure, and blurred expectations are making your work boundaries softer than they need to be.",
    twitterTitle: "Work Boundary Check",
    twitterDescription: "Check where workload, urgency, availability pressure, and blurred expectations are making your work boundaries softer than they need to be.",
  },
  toolMetadata: {
    title: WorkBoundaryCheckContent.boundaryStrengthMetadata.title,
    description: WorkBoundaryCheckContent.boundaryStrengthMetadata.description,
  },
  faqItems: WorkBoundaryCheckContent.boundaryStrengthFaqItems,
  renderHero: () => createElement(WorkBoundaryCheckHero),
  renderExperience: () => createElement(WorkBoundaryCheckExperience),
  renderEditorial: () => createElement(WorkBoundaryCheckEditorial),
});

const FamilyBoundaryScannerTool = createBoundaryStrengthFamilyTool({
  slug: "family-boundary-scanner",
  content: FamilyBoundaryScannerContent as typeof content,
  pageMetadata: {
    title: "Family Boundary Scanner - See Why Family Limits Feel Harder to Hold",
    description: "Map where family expectations, loyalty pressure, emotional pull, and old roles keep pushing past your limits.",
    keywords: ["family","boundary","scanner","boundaries","guilt","roles"],
    openGraphTitle: "Family Boundary Scanner",
    openGraphDescription: "Scan where family expectations, loyalty pressure, emotional pull, and old roles are making family boundaries harder to hold.",
    twitterTitle: "Family Boundary Scanner",
    twitterDescription: "Scan where family expectations, loyalty pressure, emotional pull, and old roles are making family boundaries harder to hold.",
  },
  toolMetadata: {
    title: FamilyBoundaryScannerContent.boundaryStrengthMetadata.title,
    description: FamilyBoundaryScannerContent.boundaryStrengthMetadata.description,
  },
  faqItems: FamilyBoundaryScannerContent.boundaryStrengthFaqItems,
  renderHero: () => createElement(FamilyBoundaryScannerHero),
  renderExperience: () => createElement(FamilyBoundaryScannerExperience),
  renderEditorial: () => createElement(FamilyBoundaryScannerEditorial),
});

const EmotionalBoundaryCheckTool = createBoundaryStrengthFamilyTool({
  slug: "emotional-boundary-check",
  content: EmotionalBoundaryCheckContent as typeof content,
  pageMetadata: {
    title: "Emotional Boundary Check - See If You Absorb Too Much Emotion",
    description: "See whether you are taking in too much emotional tone, overholding other people, or losing your own signal when feelings run high.",
    keywords: ["emotional","boundary","check","boundaries","absorbing","emotions","enmeshment"],
    openGraphTitle: "Emotional Boundary Check",
    openGraphDescription: "See whether you are absorbing too much emotional tone, overholding other people, or losing your own signal when feelings run high.",
    twitterTitle: "Emotional Boundary Check",
    twitterDescription: "See whether you are absorbing too much emotional tone, overholding other people, or losing your own signal when feelings run high.",
  },
  toolMetadata: {
    title: EmotionalBoundaryCheckContent.boundaryStrengthMetadata.title,
    description: EmotionalBoundaryCheckContent.boundaryStrengthMetadata.description,
  },
  faqItems: EmotionalBoundaryCheckContent.boundaryStrengthFaqItems,
  renderHero: () => createElement(EmotionalBoundaryCheckHero),
  renderExperience: () => createElement(EmotionalBoundaryCheckExperience),
  renderEditorial: () => createElement(EmotionalBoundaryCheckEditorial),
});

const CaretakerBoundaryScannerTool = createBoundaryStrengthFamilyTool({
  slug: "caretaker-boundary-scanner",
  content: CaretakerBoundaryScannerContent as typeof content,
  pageMetadata: {
    title: "Caretaker Boundary Scanner - See If Helping Has Turned Into Overcarrying",
    description: "Map where helping, rescuing, and emotional caretaking are quietly weakening your ability to say a clear no.",
    keywords: ["caretaker","boundary","scanner","overcaregiving","rescuing","people","pattern"],
    openGraphTitle: "Caretaker Boundary Scanner",
    openGraphDescription: "Map where helping, rescuing, emotional caretaking, and over-responsibility are quietly weakening your ability to hold a clean limit.",
    twitterTitle: "Caretaker Boundary Scanner",
    twitterDescription: "Map where helping, rescuing, emotional caretaking, and over-responsibility are quietly weakening your ability to hold a clean limit.",
  },
  toolMetadata: {
    title: CaretakerBoundaryScannerContent.boundaryStrengthMetadata.title,
    description: CaretakerBoundaryScannerContent.boundaryStrengthMetadata.description,
  },
  faqItems: CaretakerBoundaryScannerContent.boundaryStrengthFaqItems,
  renderHero: () => createElement(CaretakerBoundaryScannerHero),
  renderExperience: () => createElement(CaretakerBoundaryScannerExperience),
  renderEditorial: () => createElement(CaretakerBoundaryScannerEditorial),
});

export const boundaryStrengthFamilyToolRegistry = {
  "boundary-strength-scanner": boundaryStrengthBaseTool,
  "work-boundary-check": WorkBoundaryCheckTool,
  "family-boundary-scanner": FamilyBoundaryScannerTool,
  "emotional-boundary-check": EmotionalBoundaryCheckTool,
  "caretaker-boundary-scanner": CaretakerBoundaryScannerTool,
};
