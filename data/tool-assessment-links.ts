import assessmentRegistry from "./c2p-assessment-registry.json";
import { TOOL_REGISTRY } from "./tool-registry";
import type { LiveToolSlug } from "./tools-home";

type AssessmentRegistryRow = {
  slug: string;
  title: string;
  audience: string;
  format: string;
  url: string;
  signals: string[];
};

export type ToolAssessmentLink = {
  slug: string;
  title: string;
  href: string;
  supportingLine: string;
};

type AssessmentSlugTriple = readonly [string, string, string];

type MappingGroup = {
  slugs: readonly LiveToolSlug[];
  assessments: AssessmentSlugTriple;
};

const assessmentRows = assessmentRegistry.rows as AssessmentRegistryRow[];
const adultAssessmentRows = assessmentRows.filter((row) => row.audience === "adults");
const adultAssessmentMap = new Map(adultAssessmentRows.map((row) => [row.slug, row]));

function triple(a: string, b: string, c: string): AssessmentSlugTriple {
  return [a, b, c];
}

function summarizeAssessment(row: AssessmentRegistryRow) {
  const raw = (row.signals[1] ?? row.signals[0] ?? row.title).replace(/\s+/g, " ").trim();
  if (raw.length <= 120) {
    return raw;
  }

  const shortened = raw.slice(0, 117);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : shortened.length)}...`;
}

function buildAssessmentLink(slug: string): ToolAssessmentLink {
  const row = adultAssessmentMap.get(slug);

  if (!row) {
    throw new Error(`Missing adult assessment slug in registry: ${slug}`);
  }

  if (!row.url.startsWith("/assessments/")) {
    throw new Error(`Assessment URL must start with /assessments/: ${slug}`);
  }

  return {
    slug: row.slug,
    title: row.title,
    href: row.url,
    supportingLine: summarizeAssessment(row),
  };
}

function buildSlugMap(groups: readonly MappingGroup[]) {
  const map: Partial<Record<LiveToolSlug, AssessmentSlugTriple>> = {};

  groups.forEach((group) => {
    group.slugs.forEach((slug) => {
      if (map[slug]) {
        throw new Error(`Duplicate tool-to-assessment mapping for ${slug}`);
      }

      const uniqueAssessmentCount = new Set(group.assessments).size;
      if (uniqueAssessmentCount !== 3) {
        throw new Error(`Tool ${slug} must have exactly 3 unique assessment links.`);
      }

      map[slug] = group.assessments;
    });
  });

  const missing = TOOL_REGISTRY.map((tool) => tool.slug).filter((slug) => !map[slug]);
  if (missing.length > 0) {
    throw new Error(`Missing assessment mappings for: ${missing.join(", ")}`);
  }

  return map as Record<LiveToolSlug, AssessmentSlugTriple>;
}

const burnoutCore = triple(
  "personality-burnout-and-stress-report",
  "burnout-test",
  "cognitive-fatigue-test",
);
const burnoutWork = triple(
  "personality-burnout-and-stress-report",
  "work-burnout-test",
  "burnout-test",
);
const burnoutMental = triple(
  "cognitive-fatigue-test",
  "cognitive-overload-test",
  "mental-clarity-test",
);
const burnoutCompassion = triple(
  "compassion-fatigue-test",
  "burnout-test",
  "personality-burnout-and-stress-report",
);
const burnoutReset = triple(
  "personality-burnout-and-stress-report",
  "emotional-recovery-style-test",
  "burnout-test",
);
const workMeetings = triple(
  "cognitive-overload-test",
  "information-overload-test",
  "load-management-test",
);
const workContext = triple(
  "cognitive-overload-test",
  "attention-control-test",
  "information-overload-test",
);
const overthinkingCore = triple(
  "overthinking-test",
  "rumination-test",
  "cognitive-overload-test",
);
const reassuranceCore = triple(
  "reassurance-seeking-test",
  "overthinking-test",
  "attachment-style-test",
);
const healthReassurance = triple(
  "why-do-i-feel-like-something-is-wrong",
  "why-do-i-feel-anxious-for-no-reason",
  "why-do-i-feel-like-something-inside-me-is-not-right",
);
const mistakeChecking = triple(
  "reassurance-seeking-test",
  "perfectionism-test",
  "rumination-test",
);
const socialReassurance = triple(
  "rejection-sensitivity-test",
  "social-skills-test",
  "confidence-test",
);
const attachmentCore = triple(
  "attachment-and-relationship-style-report",
  "attachment-style-test",
  "relationship-attachment-test",
);
const attachmentAvailability = triple(
  "attachment-and-relationship-style-report",
  "emotional-availability-test",
  "relationship-satisfaction-test",
);
const attachmentAvoidance = triple(
  "attachment-and-relationship-style-report",
  "intimacy-avoidance-test",
  "emotional-availability-test",
);
const attachmentTrust = triple(
  "attachment-and-relationship-style-report",
  "trust-issues-test",
  "relationship-satisfaction-test",
);
const vulnerabilityCore = triple(
  "attachment-and-relationship-style-report",
  "emotional-availability-test",
  "attachment-style-test",
);
const relationshipCore = triple(
  "relationship-satisfaction-test",
  "attachment-and-relationship-style-report",
  "trust-issues-test",
);
const datingMixedSignals = triple(
  "relationship-infatuation-obsession-analysis",
  "relationship-satisfaction-test",
  "partner-red-flag-test",
);
const relationshipSafety = triple(
  "toxic-pattern-and-red-flag-report",
  "partner-red-flag-test",
  "toxic-relationship-test",
);
const breakupRecovery = triple(
  "closure-and-emotional-recovery-report",
  "why-am-i-not-over-the-breakup-yet",
  "why-do-i-feel-stuck-after-a-breakup",
);
const resentmentCore = triple(
  "relationship-satisfaction-test",
  "emotional-boundary-style-test",
  "conflict-style-test",
);
const resentmentLoad = triple(
  "people-pleasing-test",
  "emotional-boundary-style-test",
  "relationship-satisfaction-test",
);
const peoplePleasingCore = triple(
  "people-pleasing-test",
  "assertiveness-test",
  "emotional-boundary-style-test",
);
const peoplePleasingApproval = triple(
  "people-pleasing-test",
  "self-trust-test",
  "confidence-test",
);
const peoplePleasingFawning = triple(
  "people-pleasing-test",
  "assertiveness-test",
  "conflict-style-test",
);
const workBoundary = triple(
  "emotional-boundary-style-test",
  "assertiveness-test",
  "burnout-test",
);
const familyBoundary = triple(
  "why-do-i-feel-guilty-for-wanting-distance-from-family",
  "why-do-i-feel-responsible-for-fixing-family-tension",
  "emotional-boundary-style-test",
);
const caretakerBoundary = triple(
  "why-do-i-feel-like-i-have-to-be-the-strong-one",
  "why-do-i-feel-like-i-am-carrying-my-family-emotionally",
  "emotional-boundary-style-test",
);
const confidenceCore = triple(
  "confidence-test",
  "self-esteem-test",
  "self-trust-test",
);
const imposterCore = triple(
  "imposter-syndrome-deep-report",
  "imposter-syndrome-test",
  "self-esteem-test",
);
const decisionConfidence = triple(
  "decision-confidence-test",
  "self-trust-test",
  "confidence-test",
);
const visibilityConfidence = triple(
  "confidence-test",
  "self-esteem-test",
  "rejection-sensitivity-test",
);
const innerCriticCore = triple(
  "shame-patterns-test",
  "self-esteem-test",
  "perfectionism-test",
);
const selfJudgmentCore = triple(
  "shame-patterns-test",
  "guilt-patterns-test",
  "self-esteem-test",
);
const failureFearCore = triple(
  "perfectionism-test",
  "imposter-syndrome-test",
  "confidence-test",
);
const selfSabotageCore = triple(
  "self-sabotage-test",
  "confidence-test",
  "follow-through-test",
);
const selfSabotageFinishLine = triple(
  "self-sabotage-test",
  "follow-through-test",
  "perfectionism-test",
);
const selfSabotageFollowThrough = triple(
  "follow-through-test",
  "task-initiation-test",
  "procrastination-test",
);
const focusCore = triple(
  "executive-function-test",
  "attention-control-test",
  "cognitive-overload-test",
);
const startTaskCore = triple(
  "task-initiation-test",
  "procrastination-test",
  "follow-through-test",
);
const disciplineCore = triple(
  "discipline-style-test",
  "follow-through-test",
  "motivation-style-test",
);
const dailyFunctioningCore = triple(
  "motivation-style-test",
  "follow-through-test",
  "discipline-style-test",
);
const sleepCore = triple(
  "why-do-i-feel-tired-all-the-time",
  "cognitive-fatigue-test",
  "burnout-test",
);
const sleepShutdown = triple(
  "why-does-my-mind-never-stop-thinking",
  "why-do-i-overthink-most-when-i-am-trying-to-sleep",
  "cognitive-fatigue-test",
);
const nighttimeAnxiety = triple(
  "why-do-i-feel-like-nighttime-makes-everything-feel-worse",
  "why-do-i-overthink-most-when-i-am-trying-to-sleep",
  "overthinking-test",
);
const energyRecovery = triple(
  "mental-stamina-test",
  "cognitive-fatigue-test",
  "burnout-test",
);
const emotionalRegulationCore = triple(
  "emotional-regulation-test",
  "reaction-under-pressure-test",
  "emotional-recovery-style-test",
);
const angerTriggerCore = triple(
  "emotional-regulation-test",
  "reaction-under-pressure-test",
  "conflict-style-test",
);
const rejectionTriggerCore = triple(
  "rejection-sensitivity-test",
  "emotional-regulation-test",
  "attachment-style-test",
);
const shameTriggerCore = triple(
  "shame-patterns-test",
  "emotional-regulation-test",
  "self-esteem-test",
);
const criticismTriggerCore = triple(
  "rejection-sensitivity-test",
  "emotional-regulation-test",
  "confidence-test",
);
const recoveryCore = triple(
  "closure-and-emotional-recovery-report",
  "emotional-recovery-style-test",
  "emotional-regulation-test",
);
const weeklyResetCore = triple(
  "emotional-recovery-style-test",
  "emotional-regulation-test",
  "burnout-test",
);
const emotionalEnergyCore = triple(
  "emotional-recovery-style-test",
  "emotional-regulation-test",
  "anhedonia-and-motivation-pattern-scan",
);
const communicationCore = triple(
  "communication-style-test",
  "assertiveness-test",
  "conflict-style-test",
);
const conflictCommunication = triple(
  "conflict-style-test",
  "communication-style-test",
  "assertiveness-test",
);
const decisionCore = triple(
  "decision-making-style-test",
  "decision-confidence-test",
  "decision-friction-test",
);
const decisionPressureCore = triple(
  "decision-making-style-test",
  "reaction-under-pressure-test",
  "decision-speed-test",
);
const relationshipDecisionCore = triple(
  "decision-making-style-test",
  "decision-confidence-test",
  "relationship-satisfaction-test",
);

const mappingGroups = [
  {
    slugs: ["burnout-risk-audit"] as const,
    assessments: burnoutCore,
  },
  {
    slugs: ["stress-load-meter"] as const,
    assessments: triple(
      "personality-burnout-and-stress-report",
      "burnout-test",
      "load-management-test",
    ),
  },
  {
    slugs: ["mental-fatigue-check"] as const,
    assessments: burnoutMental,
  },
  {
    slugs: ["emotional-exhaustion-audit"] as const,
    assessments: triple(
      "personality-burnout-and-stress-report",
      "burnout-test",
      "emotional-regulation-test",
    ),
  },
  {
    slugs: ["compassion-fatigue-check"] as const,
    assessments: burnoutCompassion,
  },
  {
    slugs: [
      "overthinking-loop-check",
      "rumination-pattern-check",
      "worry-cycle-mapper",
      "catastrophizing-pattern-check",
      "intrusive-thought-response-check",
    ] as const,
    assessments: overthinkingCore,
  },
  {
    slugs: [
      "people-pleasing-signal-check",
      "over-accommodation-check",
    ] as const,
    assessments: peoplePleasingCore,
  },
  {
    slugs: [
      "approval-dependence-check",
      "self-abandonment-pattern-check",
    ] as const,
    assessments: peoplePleasingApproval,
  },
  {
    slugs: ["fawning-pattern-check"] as const,
    assessments: peoplePleasingFawning,
  },
  {
    slugs: ["focus-friction-audit", "executive-function-friction-check"] as const,
    assessments: focusCore,
  },
  {
    slugs: [
      "procrastination-friction-audit",
      "task-initiation-difficulty-audit",
    ] as const,
    assessments: startTaskCore,
  },
  {
    slugs: ["discipline-friction-check"] as const,
    assessments: disciplineCore,
  },
  {
    slugs: ["decision-fatigue-simulator"] as const,
    assessments: triple(
      "decision-making-style-test",
      "cognitive-overload-test",
      "decision-friction-test",
    ),
  },
  {
    slugs: [
      "conflict-response-simulator",
      "tough-conversation-simulator",
    ] as const,
    assessments: conflictCommunication,
  },
  {
    slugs: ["high-pressure-choice-simulator"] as const,
    assessments: decisionPressureCore,
  },
  {
    slugs: ["relationship-decision-simulator"] as const,
    assessments: relationshipDecisionCore,
  },
  {
    slugs: [
      "life-balance-visualizer",
      "work-life-balance-visualizer",
      "personal-capacity-balance-check",
    ] as const,
    assessments: triple(
      "burnout-test",
      "work-burnout-test",
      "emotional-recovery-style-test",
    ),
  },
  {
    slugs: ["emotional-energy-balance-wheel"] as const,
    assessments: emotionalEnergyCore,
  },
  {
    slugs: ["recovery-balance-visualizer"] as const,
    assessments: triple(
      "emotional-recovery-style-test",
      "cognitive-fatigue-test",
      "burnout-test",
    ),
  },
  {
    slugs: [
      "sleep-pressure-check",
      "morning-recovery-readiness-check",
      "rest-debt-check",
    ] as const,
    assessments: sleepCore,
  },
  {
    slugs: ["evening-shutdown-check"] as const,
    assessments: sleepShutdown,
  },
  {
    slugs: ["nighttime-anxiety-pattern-check"] as const,
    assessments: nighttimeAnxiety,
  },
  {
    slugs: ["attachment-pattern-spotter"] as const,
    assessments: attachmentCore,
  },
  {
    slugs: ["emotional-availability-profile"] as const,
    assessments: attachmentAvailability,
  },
  {
    slugs: ["intimacy-avoidance-pattern-check"] as const,
    assessments: attachmentAvoidance,
  },
  {
    slugs: ["trust-pattern-spotter"] as const,
    assessments: attachmentTrust,
  },
  {
    slugs: ["vulnerability-readiness-profile"] as const,
    assessments: vulnerabilityCore,
  },
  {
    slugs: ["emotional-trigger-decoder"] as const,
    assessments: emotionalRegulationCore,
  },
  {
    slugs: ["anger-trigger-decoder"] as const,
    assessments: angerTriggerCore,
  },
  {
    slugs: ["rejection-trigger-decoder"] as const,
    assessments: rejectionTriggerCore,
  },
  {
    slugs: ["shame-trigger-pattern-check"] as const,
    assessments: shameTriggerCore,
  },
  {
    slugs: ["criticism-trigger-decoder"] as const,
    assessments: criticismTriggerCore,
  },
  {
    slugs: ["boundary-strength-scanner", "emotional-boundary-check"] as const,
    assessments: peoplePleasingCore,
  },
  {
    slugs: ["work-boundary-check"] as const,
    assessments: workBoundary,
  },
  {
    slugs: ["family-boundary-scanner"] as const,
    assessments: familyBoundary,
  },
  {
    slugs: ["caretaker-boundary-scanner"] as const,
    assessments: caretakerBoundary,
  },
  {
    slugs: ["emotional-recovery-planner"] as const,
    assessments: recoveryCore,
  },
  {
    slugs: ["breakup-recovery-planner"] as const,
    assessments: breakupRecovery,
  },
  {
    slugs: ["burnout-recovery-planner"] as const,
    assessments: triple(
      "personality-burnout-and-stress-report",
      "work-burnout-test",
      "emotional-recovery-style-test",
    ),
  },
  {
    slugs: ["weekly-reset-planner"] as const,
    assessments: weeklyResetCore,
  },
  {
    slugs: ["stress-reset-action-plan"] as const,
    assessments: burnoutReset,
  },
  {
    slugs: [
      "relationship-clarity-check",
      "trust-consistency-check",
    ] as const,
    assessments: relationshipCore,
  },
  {
    slugs: ["dating-clarity-check", "mixed-signals-checker"] as const,
    assessments: datingMixedSignals,
  },
  {
    slugs: ["emotional-safety-check"] as const,
    assessments: relationshipSafety,
  },
  {
    slugs: ["confidence-reset-audit", "self-doubt-pattern-audit"] as const,
    assessments: confidenceCore,
  },
  {
    slugs: ["imposter-feelings-audit"] as const,
    assessments: imposterCore,
  },
  {
    slugs: ["decision-confidence-check"] as const,
    assessments: decisionConfidence,
  },
  {
    slugs: ["visibility-confidence-check"] as const,
    assessments: visibilityConfidence,
  },
  {
    slugs: ["reassurance-seeking-decoder"] as const,
    assessments: reassuranceCore,
  },
  {
    slugs: ["health-reassurance-loop-check"] as const,
    assessments: healthReassurance,
  },
  {
    slugs: ["relationship-reassurance-pattern-check"] as const,
    assessments: triple(
      "reassurance-seeking-test",
      "trust-issues-test",
      "attachment-style-test",
    ),
  },
  {
    slugs: ["mistake-checking-pattern-decoder"] as const,
    assessments: mistakeChecking,
  },
  {
    slugs: ["social-reassurance-seeking-check"] as const,
    assessments: socialReassurance,
  },
  {
    slugs: [
      "resentment-buildup-tracker",
      "unspoken-needs-accumulation-check",
      "fairness-imbalance-tracker",
    ] as const,
    assessments: resentmentCore,
  },
  {
    slugs: [
      "emotional-overload-buildup-check",
      "emotional-carrying-load-check",
    ] as const,
    assessments: resentmentLoad,
  },
  {
    slugs: [
      "inner-critic-intensity-scan",
      "perfection-pressure-scan",
    ] as const,
    assessments: innerCriticCore,
  },
  {
    slugs: [
      "self-judgment-intensity-check",
      "shame-voice-pattern-check",
    ] as const,
    assessments: selfJudgmentCore,
  },
  {
    slugs: ["failure-fear-inner-voice-check"] as const,
    assessments: failureFearCore,
  },
  {
    slugs: [
      "self-sabotage-pattern-finder",
      "visibility-sabotage-pattern-check",
      "success-discomfort-pattern-finder",
    ] as const,
    assessments: selfSabotageCore,
  },
  {
    slugs: ["finish-line-resistance-check"] as const,
    assessments: selfSabotageFinishLine,
  },
  {
    slugs: ["follow-through-breakpoint-check"] as const,
    assessments: selfSabotageFollowThrough,
  },
  {
    slugs: [
      "communication-style-mirror",
      "repair-conversation-style-check",
      "directness-vs-softening-check",
      "difficult-conversation-pattern-mirror",
    ] as const,
    assessments: communicationCore,
  },
  {
    slugs: ["conflict-style-mirror"] as const,
    assessments: conflictCommunication,
  },
  {
    slugs: ["work-stress-load-mapper"] as const,
    assessments: burnoutWork,
  },
  {
    slugs: ["meeting-burden-mapper"] as const,
    assessments: workMeetings,
  },
  {
    slugs: ["role-ambiguity-stress-check"] as const,
    assessments: triple(
      "work-burnout-test",
      "burnout-test",
      "decision-friction-test",
    ),
  },
  {
    slugs: ["context-switching-load-check"] as const,
    assessments: workContext,
  },
  {
    slugs: ["invisible-workload-mapper"] as const,
    assessments: triple(
      "personality-burnout-and-stress-report",
      "load-management-test",
      "work-burnout-test",
    ),
  },
  {
    slugs: ["daily-functioning-stability-check", "day-structure-stability-check"] as const,
    assessments: dailyFunctioningCore,
  },
  {
    slugs: ["energy-consistency-check"] as const,
    assessments: energyRecovery,
  },
  {
    slugs: ["follow-through-stability-check"] as const,
    assessments: triple(
      "follow-through-test",
      "discipline-style-test",
      "task-initiation-test",
    ),
  },
  {
    slugs: ["emotional-steadiness-check"] as const,
    assessments: emotionalRegulationCore,
  },
] as const satisfies readonly MappingGroup[];

const toolAssessmentSlugMap = buildSlugMap(mappingGroups);

const toolAssessmentLinkMapDraft: Partial<
  Record<LiveToolSlug, readonly [ToolAssessmentLink, ToolAssessmentLink, ToolAssessmentLink]>
> = {};

(Object.entries(toolAssessmentSlugMap) as [LiveToolSlug, AssessmentSlugTriple][]).forEach(
  ([toolSlug, assessmentSlugs]) => {
    toolAssessmentLinkMapDraft[toolSlug] = assessmentSlugs.map((slug) =>
      buildAssessmentLink(slug),
    ) as [ToolAssessmentLink, ToolAssessmentLink, ToolAssessmentLink];
  },
);

export const toolAssessmentLinkMap = toolAssessmentLinkMapDraft as Record<
  LiveToolSlug,
  readonly [ToolAssessmentLink, ToolAssessmentLink, ToolAssessmentLink]
>;

export function getToolAssessmentLinks(slug: string) {
  return toolAssessmentLinkMap[slug as LiveToolSlug] ?? null;
}
