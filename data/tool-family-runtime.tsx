import type { ReactElement } from "react";
import type { Metadata } from "next";
import {
  buildBurnoutFamilyMetadata,
  BurnoutFamilyPage,
} from "@/components/tools/burnout-family/burnout-family-page";
import {
  buildOverthinkingFamilyMetadata,
  OverthinkingFamilyPage,
} from "@/components/tools/overthinking-family/overthinking-family-page";
import {
  buildPeoplePleasingFamilyMetadata,
  PeoplePleasingFamilyPage,
} from "@/components/tools/people-pleasing-family/people-pleasing-family-page";
import {
  buildFocusFrictionFamilyMetadata,
  FocusFrictionFamilyPage,
} from "@/components/tools/focus-friction-family/focus-friction-family-page";
import {
  buildDecisionFatigueFamilyMetadata,
  DecisionFatigueFamilyPage,
} from "@/components/tools/decision-fatigue-family/decision-fatigue-family-page";
import {
  buildLifeBalanceFamilyMetadata,
  LifeBalanceFamilyPage,
} from "@/components/tools/life-balance-family/life-balance-family-page";
import {
  buildSleepPressureFamilyMetadata,
  SleepPressureFamilyPage,
} from "@/components/tools/sleep-pressure-family/sleep-pressure-family-page";
import {
  buildAttachmentPatternFamilyMetadata,
  AttachmentPatternFamilyPage,
} from "@/components/tools/attachment-pattern-family/attachment-pattern-family-page";
import {
  buildEmotionalTriggerFamilyMetadata,
  EmotionalTriggerFamilyPage,
} from "@/components/tools/emotional-trigger-family/emotional-trigger-family-page";
import {
  buildBoundaryStrengthFamilyMetadata,
  BoundaryStrengthFamilyPage,
} from "@/components/tools/boundary-strength-family/boundary-strength-family-page";
import {
  buildEmotionalRecoveryFamilyMetadata,
  EmotionalRecoveryFamilyPage,
} from "@/components/tools/emotional-recovery-family/emotional-recovery-family-page";
import {
  buildRelationshipClarityFamilyMetadata,
  RelationshipClarityFamilyPage,
} from "@/components/tools/relationship-clarity-family/relationship-clarity-family-page";
import {
  buildConfidenceResetFamilyMetadata,
  ConfidenceResetFamilyPage,
} from "@/components/tools/confidence-reset-family/confidence-reset-family-page";
import {
  buildReassuranceSeekingFamilyMetadata,
  ReassuranceSeekingFamilyPage,
} from "@/components/tools/reassurance-seeking-family/reassurance-seeking-family-page";
import {
  buildResentmentBuildupFamilyMetadata,
  ResentmentBuildupFamilyPage,
} from "@/components/tools/resentment-buildup-family/resentment-buildup-family-page";
import {
  buildInnerCriticFamilyMetadata,
  InnerCriticFamilyPage,
} from "@/components/tools/inner-critic-family/inner-critic-family-page";
import {
  buildSelfSabotageFamilyMetadata,
  SelfSabotageFamilyPage,
} from "@/components/tools/self-sabotage-family/self-sabotage-family-page";
import {
  buildCommunicationStyleFamilyMetadata,
  CommunicationStyleFamilyPage,
} from "@/components/tools/communication-style-family/communication-style-family-page";
import {
  buildWorkStressFamilyMetadata,
  WorkStressFamilyPage,
} from "@/components/tools/work-stress-family/work-stress-family-page";
import {
  buildDailyFunctioningFamilyMetadata,
  DailyFunctioningFamilyPage,
} from "@/components/tools/daily-functioning-family/daily-functioning-family-page";
import { burnoutFamilyToolRegistry } from "@/data/burnout-family-registry";
import { overthinkingFamilyToolRegistry } from "@/data/overthinking-family";
import { peoplePleasingFamilyToolRegistry } from "@/data/people-pleasing-family";
import { focusFrictionFamilyToolRegistry } from "@/data/focus-friction-family";
import { decisionFatigueFamilyToolRegistry } from "@/data/decision-fatigue-family";
import { lifeBalanceFamilyToolRegistry } from "@/data/life-balance-family";
import { sleepPressureFamilyToolRegistry } from "@/data/sleep-pressure-family";
import { attachmentPatternFamilyToolRegistry } from "@/data/attachment-pattern-family";
import { emotionalTriggerFamilyToolRegistry } from "@/data/emotional-trigger-family";
import { boundaryStrengthFamilyToolRegistry } from "@/data/boundary-strength-family";
import { emotionalRecoveryFamilyToolRegistry } from "@/data/emotional-recovery-family";
import { relationshipClarityFamilyToolRegistry } from "@/data/relationship-clarity-family";
import { confidenceResetFamilyToolRegistry } from "@/data/confidence-reset-family";
import { reassuranceSeekingFamilyToolRegistry } from "@/data/reassurance-seeking-family";
import { resentmentBuildupFamilyToolRegistry } from "@/data/resentment-buildup-family";
import { innerCriticFamilyToolRegistry } from "@/data/inner-critic-family";
import { selfSabotageFamilyToolRegistry } from "@/data/self-sabotage-family";
import { communicationStyleFamilyToolRegistry } from "@/data/communication-style-family";
import { workStressFamilyToolRegistry } from "@/data/work-stress-family";
import { dailyFunctioningFamilyToolRegistry } from "@/data/daily-functioning-family";
import { getToolFamilyKey, type ToolFamilyKey } from "@/data/tool-family-registry";

type ToolFamilyRuntimeEntry<TTool = unknown> = {
  registry: Record<string, TTool>;
  buildMetadata: (tool: TTool, pageUrl: string) => Metadata;
  renderPage: (tool: TTool, pageUrl: string) => ReactElement;
};

function createToolFamilyRuntimeEntry<TTool>(
  entry: ToolFamilyRuntimeEntry<TTool>,
): ToolFamilyRuntimeEntry<unknown> {
  return entry as ToolFamilyRuntimeEntry<unknown>;
}

export const toolFamilyRuntimeRegistry: Record<
  ToolFamilyKey,
  ToolFamilyRuntimeEntry<unknown>
> = {
  burnout: createToolFamilyRuntimeEntry({
    registry: burnoutFamilyToolRegistry,
    buildMetadata: buildBurnoutFamilyMetadata,
    renderPage: (tool, pageUrl) => <BurnoutFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  overthinking: createToolFamilyRuntimeEntry({
    registry: overthinkingFamilyToolRegistry,
    buildMetadata: buildOverthinkingFamilyMetadata,
    renderPage: (tool, pageUrl) => <OverthinkingFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  peoplePleasing: createToolFamilyRuntimeEntry({
    registry: peoplePleasingFamilyToolRegistry,
    buildMetadata: buildPeoplePleasingFamilyMetadata,
    renderPage: (tool, pageUrl) => <PeoplePleasingFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  focusFriction: createToolFamilyRuntimeEntry({
    registry: focusFrictionFamilyToolRegistry,
    buildMetadata: buildFocusFrictionFamilyMetadata,
    renderPage: (tool, pageUrl) => <FocusFrictionFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  decisionFatigue: createToolFamilyRuntimeEntry({
    registry: decisionFatigueFamilyToolRegistry,
    buildMetadata: buildDecisionFatigueFamilyMetadata,
    renderPage: (tool, pageUrl) => <DecisionFatigueFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  lifeBalance: createToolFamilyRuntimeEntry({
    registry: lifeBalanceFamilyToolRegistry,
    buildMetadata: buildLifeBalanceFamilyMetadata,
    renderPage: (tool, pageUrl) => <LifeBalanceFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  sleepPressure: createToolFamilyRuntimeEntry({
    registry: sleepPressureFamilyToolRegistry,
    buildMetadata: buildSleepPressureFamilyMetadata,
    renderPage: (tool, pageUrl) => <SleepPressureFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  attachmentPattern: createToolFamilyRuntimeEntry({
    registry: attachmentPatternFamilyToolRegistry,
    buildMetadata: buildAttachmentPatternFamilyMetadata,
    renderPage: (tool, pageUrl) => <AttachmentPatternFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  emotionalTrigger: createToolFamilyRuntimeEntry({
    registry: emotionalTriggerFamilyToolRegistry,
    buildMetadata: buildEmotionalTriggerFamilyMetadata,
    renderPage: (tool, pageUrl) => <EmotionalTriggerFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  boundaryStrength: createToolFamilyRuntimeEntry({
    registry: boundaryStrengthFamilyToolRegistry,
    buildMetadata: buildBoundaryStrengthFamilyMetadata,
    renderPage: (tool, pageUrl) => <BoundaryStrengthFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  emotionalRecovery: createToolFamilyRuntimeEntry({
    registry: emotionalRecoveryFamilyToolRegistry,
    buildMetadata: buildEmotionalRecoveryFamilyMetadata,
    renderPage: (tool, pageUrl) => <EmotionalRecoveryFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  relationshipClarity: createToolFamilyRuntimeEntry({
    registry: relationshipClarityFamilyToolRegistry,
    buildMetadata: buildRelationshipClarityFamilyMetadata,
    renderPage: (tool, pageUrl) => <RelationshipClarityFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  confidenceReset: createToolFamilyRuntimeEntry({
    registry: confidenceResetFamilyToolRegistry,
    buildMetadata: buildConfidenceResetFamilyMetadata,
    renderPage: (tool, pageUrl) => <ConfidenceResetFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  reassuranceSeeking: createToolFamilyRuntimeEntry({
    registry: reassuranceSeekingFamilyToolRegistry,
    buildMetadata: buildReassuranceSeekingFamilyMetadata,
    renderPage: (tool, pageUrl) => <ReassuranceSeekingFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  resentmentBuildup: createToolFamilyRuntimeEntry({
    registry: resentmentBuildupFamilyToolRegistry,
    buildMetadata: buildResentmentBuildupFamilyMetadata,
    renderPage: (tool, pageUrl) => <ResentmentBuildupFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  innerCritic: createToolFamilyRuntimeEntry({
    registry: innerCriticFamilyToolRegistry,
    buildMetadata: buildInnerCriticFamilyMetadata,
    renderPage: (tool, pageUrl) => <InnerCriticFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  selfSabotage: createToolFamilyRuntimeEntry({
    registry: selfSabotageFamilyToolRegistry,
    buildMetadata: buildSelfSabotageFamilyMetadata,
    renderPage: (tool, pageUrl) => <SelfSabotageFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  communicationStyle: createToolFamilyRuntimeEntry({
    registry: communicationStyleFamilyToolRegistry,
    buildMetadata: buildCommunicationStyleFamilyMetadata,
    renderPage: (tool, pageUrl) => <CommunicationStyleFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  workStress: createToolFamilyRuntimeEntry({
    registry: workStressFamilyToolRegistry,
    buildMetadata: buildWorkStressFamilyMetadata,
    renderPage: (tool, pageUrl) => <WorkStressFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
  dailyFunctioning: createToolFamilyRuntimeEntry({
    registry: dailyFunctioningFamilyToolRegistry,
    buildMetadata: buildDailyFunctioningFamilyMetadata,
    renderPage: (tool, pageUrl) => <DailyFunctioningFamilyPage pageUrl={pageUrl} tool={tool} />,
  }),
};

export function getToolFamilyRuntime(slug: string) {
  const familyKey = getToolFamilyKey(slug);

  if (!familyKey) {
    return null;
  }

  const runtime = toolFamilyRuntimeRegistry[familyKey];
  const tool = runtime.registry[slug];

  if (!tool) {
    return null;
  }

  return {
    familyKey,
    runtime,
    tool,
  };
}
