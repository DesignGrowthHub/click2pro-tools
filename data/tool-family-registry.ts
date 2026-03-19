import { burnoutFamilyToolRegistry } from "./burnout-family-registry";
import { overthinkingFamilyToolRegistry } from "./overthinking-family";
import { peoplePleasingFamilyToolRegistry } from "./people-pleasing-family";
import { focusFrictionFamilyToolRegistry } from "./focus-friction-family";
import { decisionFatigueFamilyToolRegistry } from "./decision-fatigue-family";
import { lifeBalanceFamilyToolRegistry } from "./life-balance-family";
import { sleepPressureFamilyToolRegistry } from "./sleep-pressure-family";
import { attachmentPatternFamilyToolRegistry } from "./attachment-pattern-family";
import { emotionalTriggerFamilyToolRegistry } from "./emotional-trigger-family";
import { boundaryStrengthFamilyToolRegistry } from "./boundary-strength-family";
import { emotionalRecoveryFamilyToolRegistry } from "./emotional-recovery-family";
import { relationshipClarityFamilyToolRegistry } from "./relationship-clarity-family";
import { confidenceResetFamilyToolRegistry } from "./confidence-reset-family";
import { reassuranceSeekingFamilyToolRegistry } from "./reassurance-seeking-family";
import { resentmentBuildupFamilyToolRegistry } from "./resentment-buildup-family";
import { innerCriticFamilyToolRegistry } from "./inner-critic-family";
import { selfSabotageFamilyToolRegistry } from "./self-sabotage-family";
import { communicationStyleFamilyToolRegistry } from "./communication-style-family";
import { workStressFamilyToolRegistry } from "./work-stress-family";
import { dailyFunctioningFamilyToolRegistry } from "./daily-functioning-family";

export const toolFamilySlugRegistry = {
  ...Object.fromEntries(Object.keys(burnoutFamilyToolRegistry).map((slug) => [slug, "burnout"] as const)),
  ...Object.fromEntries(Object.keys(overthinkingFamilyToolRegistry).map((slug) => [slug, "overthinking"] as const)),
  ...Object.fromEntries(Object.keys(peoplePleasingFamilyToolRegistry).map((slug) => [slug, "peoplePleasing"] as const)),
  ...Object.fromEntries(Object.keys(focusFrictionFamilyToolRegistry).map((slug) => [slug, "focusFriction"] as const)),
  ...Object.fromEntries(Object.keys(decisionFatigueFamilyToolRegistry).map((slug) => [slug, "decisionFatigue"] as const)),
  ...Object.fromEntries(Object.keys(lifeBalanceFamilyToolRegistry).map((slug) => [slug, "lifeBalance"] as const)),
  ...Object.fromEntries(Object.keys(sleepPressureFamilyToolRegistry).map((slug) => [slug, "sleepPressure"] as const)),
  ...Object.fromEntries(Object.keys(attachmentPatternFamilyToolRegistry).map((slug) => [slug, "attachmentPattern"] as const)),
  ...Object.fromEntries(Object.keys(emotionalTriggerFamilyToolRegistry).map((slug) => [slug, "emotionalTrigger"] as const)),
  ...Object.fromEntries(Object.keys(boundaryStrengthFamilyToolRegistry).map((slug) => [slug, "boundaryStrength"] as const)),
  ...Object.fromEntries(Object.keys(emotionalRecoveryFamilyToolRegistry).map((slug) => [slug, "emotionalRecovery"] as const)),
  ...Object.fromEntries(Object.keys(relationshipClarityFamilyToolRegistry).map((slug) => [slug, "relationshipClarity"] as const)),
  ...Object.fromEntries(Object.keys(confidenceResetFamilyToolRegistry).map((slug) => [slug, "confidenceReset"] as const)),
  ...Object.fromEntries(Object.keys(reassuranceSeekingFamilyToolRegistry).map((slug) => [slug, "reassuranceSeeking"] as const)),
  ...Object.fromEntries(Object.keys(resentmentBuildupFamilyToolRegistry).map((slug) => [slug, "resentmentBuildup"] as const)),
  ...Object.fromEntries(Object.keys(innerCriticFamilyToolRegistry).map((slug) => [slug, "innerCritic"] as const)),
  ...Object.fromEntries(Object.keys(selfSabotageFamilyToolRegistry).map((slug) => [slug, "selfSabotage"] as const)),
  ...Object.fromEntries(Object.keys(communicationStyleFamilyToolRegistry).map((slug) => [slug, "communicationStyle"] as const)),
  ...Object.fromEntries(Object.keys(workStressFamilyToolRegistry).map((slug) => [slug, "workStress"] as const)),
  ...Object.fromEntries(Object.keys(dailyFunctioningFamilyToolRegistry).map((slug) => [slug, "dailyFunctioning"] as const)),
};

export type ToolFamilyKey = (typeof toolFamilySlugRegistry)[keyof typeof toolFamilySlugRegistry];
export type ToolFamilySlug = Extract<keyof typeof toolFamilySlugRegistry, string>;

const staticToolSlugs = new Set(["burnout-risk-audit","stress-load-meter","mental-fatigue-check","emotional-exhaustion-audit","compassion-fatigue-check","overthinking-loop-check","focus-friction-audit","decision-fatigue-simulator","life-balance-visualizer","sleep-pressure-check","attachment-pattern-spotter","emotional-trigger-decoder","boundary-strength-scanner","emotional-recovery-planner","relationship-clarity-check","confidence-reset-audit","reassurance-seeking-decoder","resentment-buildup-tracker","inner-critic-intensity-scan","self-sabotage-pattern-finder","communication-style-mirror","work-stress-load-mapper","daily-functioning-stability-check","people-pleasing-signal-check"]);

export function getToolFamilyKey(slug: string): ToolFamilyKey | undefined {
  return toolFamilySlugRegistry[slug as ToolFamilySlug];
}

export function isRegisteredToolFamilySlug(slug: string): slug is ToolFamilySlug {
  return slug in toolFamilySlugRegistry;
}

export const dynamicToolFamilySlugs = Object.keys(toolFamilySlugRegistry).filter(
  (slug) => !staticToolSlugs.has(slug),
) as ToolFamilySlug[];
