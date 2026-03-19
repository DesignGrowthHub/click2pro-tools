import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type OverallClarityValue =
  | "very-clear"
  | "mostly-clear"
  | "mixed"
  | "often-unclear"
  | "very-confusing";

export type MainUnclearAreaValue =
  | "intentions"
  | "consistency"
  | "emotional-availability"
  | "where-i-stand"
  | "words-actions-match";

export type ConfusionPatternValue =
  | "hot-cold-behavior"
  | "delayed-replies"
  | "unclear-intentions"
  | "mixed-effort"
  | "poor-follow-through"
  | "avoidance"
  | "affection-without-clarity"
  | "words-actions-mismatch"
  | "conflict-avoidance"
  | "disappearing-after-closeness";

export type EmotionalSafetyValue =
  | "very-safe"
  | "mostly-safe"
  | "mixed"
  | "often-unsafe"
  | "not-safe";

export type ConfusionResponseValue =
  | "ask-directly"
  | "analyze-privately"
  | "wait-and-hope"
  | "seek-reassurance"
  | "pull-back-protect";

export type RelationshipPatternValue =
  | "steady-reciprocal"
  | "mostly-stable-occasional-uncertainty"
  | "warm-then-unclear"
  | "effort-uneven"
  | "closeness-without-clarity";

export type ConversationHandlingValue =
  | "very-directly"
  | "mostly-directly"
  | "mixed"
  | "often-avoided"
  | "rarely-addressed-clearly";

export type RankedTruthKey =
  | "dont-know-where-i-stand"
  | "words-actions-do-not-match"
  | "consistency-drops-when-important"
  | "emotional-safety-feels-uneven"
  | "analysis-because-clarity-is-weak";

export type HeaviestSourceValue =
  | "inconsistency"
  | "lack-of-direct-communication"
  | "emotional-ambiguity"
  | "mixed-effort"
  | "my-overanalysis";

export type SignalZoneValue =
  | "trust"
  | "communication"
  | "consistency"
  | "emotional-safety"
  | "intentions"
  | "future-direction";

export type FinalRealityValue =
  | "mostly-clear-soft-edges"
  | "care-here-consistency-weak"
  | "mixed-signals-keep-clarity-unstable"
  | "confusion-feels-relational"
  | "less-clarity-than-i-need";

export type RelationshipClarityDimensionKey =
  | "signalConsistency"
  | "emotionalSafety"
  | "communicationClarity"
  | "trustStability";

export type RelationshipClarityBandKey =
  | "clear-relational-signal"
  | "mostly-clear-soft-uncertainty"
  | "mixed-signal-relationship-pattern"
  | "high-relationship-ambiguity"
  | "low-clarity-high-confusion-connection";

export type SignalIssueKey =
  | "words-actions-mismatch"
  | "delayed-clarity"
  | "hot-cold-effort"
  | "emotional-ambiguity"
  | "avoidance";

export type CostMetricKey =
  | "energy-cost"
  | "mental-preoccupation"
  | "mood-disruption"
  | "hesitation-next-steps";

export type RelationshipChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type RelationshipClarityAnswers = {
  overallClarity?: OverallClarityValue;
  mainUnclearArea?: MainUnclearAreaValue;
  wordsActionsConsistency?: number;
  confusionPatterns: ConfusionPatternValue[];
  emotionalSafety?: EmotionalSafetyValue;
  confusionResponse?: ConfusionResponseValue;
  reinterpretationFrequency?: number;
  relationshipPattern?: RelationshipPatternValue;
  conversationHandling?: ConversationHandlingValue;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  trustStability?: number;
  heaviestSource?: HeaviestSourceValue;
  energyCost?: number;
  mentalPreoccupation?: number;
  moodDisruption?: number;
  strongestSignalProblem?: SignalZoneValue;
  finalReality?: FinalRealityValue;
};

type BaseStep = {
  id: string;
  step: number;
  eyebrow: string;
  question: string;
  hint: string;
};

export type ScenarioChoiceStep = BaseStep & {
  kind: "scenario-choice";
  field: "mainUnclearArea" | "confusionResponse" | "heaviestSource" | "finalReality";
  options: RelationshipChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "overallClarity" | "emotionalSafety" | "conversationHandling";
  options: RelationshipChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "wordsActionsConsistency" | "reinterpretationFrequency" | "trustStability";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "confusionPatterns";
  limit: number;
  options: RelationshipChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: RankedTruthKey;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "energyCost" | "mentalPreoccupation" | "moodDisruption";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "relationshipPattern" | "strongestSignalProblem";
  options: RelationshipChoiceOption[];
  columns?: 2 | 3;
};

export type RelationshipClarityStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep;

export type RelationshipClarityDimension = {
  key: RelationshipClarityDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type RelationshipClarityBand = {
  key: RelationshipClarityBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  breakdownLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type ConfusionDriver = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type SignalZone = {
  key: SignalZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type StableSignal = {
  key: string;
  label: string;
  description: string;
};

export type SignalIssue = {
  key: SignalIssueKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type SignalIssueScore = SignalIssue & {
  value: number;
};

export type RelationshipCostMetric = {
  key: CostMetricKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type RelatedRelationshipTool = {
  title: string;
  description: string;
  category: string;
  minutes: string;
  icon: IconName;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type EditorialBlock = {
  title: string;
  paragraphs: string[];
};

export type DimensionEditorialBlock = {
  key: RelationshipClarityDimensionKey;
  paragraphs: string[];
};

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type MatrixInsight = {
  label: string;
  value: number;
  accent: string;
};

export type RelationshipClarityResult = {
  score: number;
  band: RelationshipClarityBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<RelationshipClarityDimensionKey, number>;
  primaryConfusionDriver: ConfusionDriver;
  strongestStableSignal: StableSignal;
  heaviestUnresolvedZone: SignalZone;
  likelyPatternCost: RelationshipCostMetric;
  signalIssues: SignalIssueScore[];
  costMetrics: RelationshipCostMetric[];
  matrixPlacement: {
    x: number;
    y: number;
    label: string;
  };
  mixedSignalDensity: number;
  clarityLevel: number;
  signalLabel: string;
  interpretation: string;
  standout: string;
  breakdownInsight: string;
  matrixInsights: MatrixInsight[];
};

export const relationshipClarityMetadata = {
  eyebrow: "RELATIONSHIP SIGNAL TOOL",
  title: "Relationship Clarity Check",
  description:
    "See whether a relationship feels clear, mixed, steady, or quietly confusing. This tool reads consistency, emotional safety, communication, and trust so you can stop guessing from scraps.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "pattern" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const relationshipClarityDimensions: RelationshipClarityDimension[] = [
  {
    key: "signalConsistency",
    label: "Signal Consistency",
    description: "How reliably words, actions, effort, and follow-through point in the same direction over time.",
    icon: "signal",
    accent: "#93C5FD",
  },
  {
    key: "emotionalSafety",
    label: "Emotional Safety",
    description: "How possible it feels to be honest, ask directly, and stay emotionally open without bracing for fallout.",
    icon: "shield",
    accent: "#6EE7B7",
  },
  {
    key: "communicationClarity",
    label: "Communication Clarity",
    description: "How directly important conversations are named instead of being left to implication, delay, or guesswork.",
    icon: "structure",
    accent: "#67E8F9",
  },
  {
    key: "trustStability",
    label: "Trust Stability",
    description: "How steady and believable the connection feels when things matter, not only when things feel warm.",
    icon: "lock",
    accent: "#C4B5FD",
  },
];

export const signalZones: SignalZone[] = [
  {
    key: "trust",
    label: "Trust",
    description: "The relationship does not feel stable enough to relax into what is being shown over time.",
    accent: "#C4B5FD",
  },
  {
    key: "communication",
    label: "Communication",
    description: "Important meanings stay too implied, delayed, or softened to create real steadiness.",
    accent: "#67E8F9",
  },
  {
    key: "consistency",
    label: "Consistency",
    description: "The signal shifts too much between warmth, effort, availability, and follow-through.",
    accent: "#93C5FD",
  },
  {
    key: "emotional-safety",
    label: "Emotional Safety",
    description: "Being honest does not feel reliably safe enough for clarity to deepen.",
    accent: "#6EE7B7",
  },
  {
    key: "intentions",
    label: "Intentions",
    description: "There is warmth or contact, but the meaning of it still feels too open to interpretation.",
    accent: "#FCD34D",
  },
  {
    key: "future-direction",
    label: "Future Direction",
    description: "The connection may feel emotionally real, yet the trajectory remains too undefined to trust.",
    accent: "#FDA4AF",
  },
];

export const confusionDrivers: ConfusionDriver[] = [
  {
    key: "inconsistency",
    label: "Inconsistency",
    description: "The relational signal changes too much across time, attention, or follow-through to feel stable.",
    accent: "#93C5FD",
  },
  {
    key: "words-actions-mismatch",
    label: "Words / actions mismatch",
    description: "Language and behavior are not reinforcing each other strongly enough to create confidence.",
    accent: "#67E8F9",
  },
  {
    key: "emotional-ambiguity",
    label: "Emotional ambiguity",
    description: "Warmth exists, but the emotional meaning of it stays too undefined to feel reliable.",
    accent: "#FDA4AF",
  },
  {
    key: "low-directness",
    label: "Low directness",
    description: "Key conversations are not being handled clearly enough for confusion to actually reduce.",
    accent: "#6EE7B7",
  },
  {
    key: "trust-instability",
    label: "Trust instability",
    description: "The connection lacks enough steadiness for uncertainty to settle into confidence.",
    accent: "#C4B5FD",
  },
  {
    key: "future-ambiguity",
    label: "Future-direction ambiguity",
    description: "The relationship may feel meaningful, but its direction stays too undefined to feel secure.",
    accent: "#FCD34D",
  },
  {
    key: "analysis-after-weak-signal",
    label: "Analysis after weak signal",
    description: "Your mind is working hard to create clarity because the relationship itself is not offering enough of it directly.",
    accent: "#FDA4AF",
  },
];

export const stableSignals: StableSignal[] = [
  {
    key: "actions-reliable",
    label: "Actions still carry some steadiness",
    description: "Even if the relationship is unclear overall, actions appear more reliable than the other dimensions.",
  },
  {
    key: "honesty-has-room",
    label: "Honesty still has room",
    description: "There may still be enough emotional safety to name truth directly instead of only interpreting from distance.",
  },
  {
    key: "direct-conversations-possible",
    label: "Direct conversations are still possible",
    description: "Communication may be imperfect, but it has not collapsed into pure guessing or silent interpretation.",
  },
  {
    key: "trust-not-gone",
    label: "Trust is strained, not absent",
    description: "There is still some baseline of steadiness to build from, which matters if the relationship is worth clarifying.",
  },
];

export const signalIssues: SignalIssue[] = [
  {
    key: "words-actions-mismatch",
    label: "Words / actions mismatch",
    description: "What is said and what is done are not reinforcing the same message strongly enough.",
    accent: "#67E8F9",
    icon: "graph",
  },
  {
    key: "delayed-clarity",
    label: "Delayed clarity",
    description: "Important meaning arrives too late, too vaguely, or only after you have already spent time interpreting.",
    accent: "#FCD34D",
    icon: "time",
  },
  {
    key: "hot-cold-effort",
    label: "Hot-cold effort",
    description: "Warmth and effort appear, then weaken at the exact points where steadiness would matter most.",
    accent: "#93C5FD",
    icon: "trend",
  },
  {
    key: "emotional-ambiguity",
    label: "Emotional ambiguity",
    description: "Closeness exists, but its meaning, availability, or intention stays too open to interpretation.",
    accent: "#FDA4AF",
    icon: "insight",
  },
  {
    key: "avoidance",
    label: "Avoidance",
    description: "The signal gets weakened by sidestepping conversations, directness, or relational accountability.",
    accent: "#C4B5FD",
    icon: "structure",
  },
];

export const relationshipClarityBands: RelationshipClarityBand[] = [
  {
    key: "clear-relational-signal",
    min: 0,
    max: 24,
    title: "Clear Relational Signal",
    descriptor: "The relationship signal appears fairly coherent across consistency, communication, trust, and emotional safety.",
    summary:
      "That does not mean every moment is perfect. It means the connection is generally offering enough steadiness that uncertainty does not have to carry the whole experience.",
    interpretation:
      "At this level, confusion is more likely to be situational than structural. Warmth and truth seem to reinforce each other often enough that the relationship can be read without constant private analysis.",
    standoutLead:
      "The strongest signal here is coherence. The connection looks more readable because the important parts are usually saying the same thing at once.",
    breakdownLead:
      "If clarity softens here, it is usually around one specific topic rather than across the whole relationship field.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.24)",
  },
  {
    key: "mostly-clear-soft-uncertainty",
    min: 25,
    max: 44,
    title: "Mostly Clear with Soft Uncertainty",
    descriptor: "There is a mostly readable relationship signal here, but a few softer zones are still leaving interpretive gaps.",
    summary:
      "This often looks like a connection that is broadly stable yet still leaves one or two important areas less explicit than you would need for full ease.",
    interpretation:
      "The key distinction is that uncertainty exists without dominating the whole relationship. The signal is not absent, but it is not fully clean either.",
    standoutLead:
      "What stands out is partial coherence. Enough of the connection is steady to feel meaningful, but a specific weak zone keeps clarity from feeling complete.",
    breakdownLead:
      "Where clarity breaks down most at this level is usually in the gap between felt warmth and explicit direction.",
    gradientFrom: "#93C5FD",
    gradientTo: "#C4B5FD",
    glow: "rgba(147, 197, 253, 0.22)",
  },
  {
    key: "mixed-signal-relationship-pattern",
    min: 45,
    max: 64,
    title: "Mixed-Signal Relationship Pattern",
    descriptor: "The relationship is giving enough warmth or contact to keep you engaged, but not enough reliability to feel fully settled.",
    summary:
      "This is often the zone where analysis grows. The connection is not empty, yet the signal is not strong enough to stop you from having to interpret constantly.",
    interpretation:
      "At this level, confusion is less likely to be imagined. The relationship field itself appears to be sending competing messages through effort, timing, directness, or follow-through.",
    standoutLead:
      "The clearest signal is mismatch: the relationship is offering enough to sustain hope, but not enough consistency to create real steadiness.",
    breakdownLead:
      "The breakdown point here is usually not one dramatic event. It is the repeated need to keep decoding what the connection actually means.",
    gradientFrom: "#FCD34D",
    gradientTo: "#93C5FD",
    glow: "rgba(252, 211, 77, 0.22)",
  },
  {
    key: "high-relationship-ambiguity",
    min: 65,
    max: 84,
    title: "High Relationship Ambiguity",
    descriptor: "The signal currently looks too inconsistent, indirect, or emotionally uneven to support much steadiness from inside the connection itself.",
    summary:
      "This often feels like warmth without reliability, contact without direction, or enough ambiguity that you are left doing too much interpretive labor on your own.",
    interpretation:
      "The important point here is that the confusion appears relational, not only internal. The connection is not creating enough clarity through pattern, directness, or safety.",
    standoutLead:
      "What stands out most is the density of weak signal. Too many important areas are staying open, delayed, or contradictory at the same time.",
    breakdownLead:
      "Clarity tends to break down here through the accumulation of mixed cues, not just one missing conversation.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#C4B5FD",
    glow: "rgba(253, 164, 175, 0.24)",
  },
  {
    key: "low-clarity-high-confusion-connection",
    min: 85,
    max: 100,
    title: "Low-Clarity / High-Confusion Connection",
    descriptor: "The current relationship signal looks too unstable, indirect, or unresolved to offer much dependable clarity at all.",
    summary:
      "At this level, the connection may still matter deeply, but the signal itself is staying too weak for the relationship to feel emotionally readable or trustworthy.",
    interpretation:
      "This does not mean the relationship is fake or that your feelings are wrong. It means the clarity burden is landing too heavily on you because the connection is not supplying enough consistent truth on its own.",
    standoutLead:
      "The strongest signal here is not only uncertainty. It is the amount of interpretive work you have to keep doing because clarity is not arriving cleanly from the relationship itself.",
    breakdownLead:
      "Where clarity breaks down most at this stage is across the whole field: consistency, communication, safety, and trust are not reinforcing each other enough to stabilize meaning.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#FCD34D",
    glow: "rgba(252, 211, 77, 0.24)",
  },
];

const costMetricDefinitions: Array<Omit<RelationshipCostMetric, "value">> = [
  {
    key: "energy-cost",
    label: "Energy cost",
    description: "How much emotional or physical energy the ambiguity quietly drains over time.",
    accent: "#93C5FD",
  },
  {
    key: "mental-preoccupation",
    label: "Mental preoccupation",
    description: "How much space the relationship occupies in thought because the signal stays unresolved.",
    accent: "#67E8F9",
  },
  {
    key: "mood-disruption",
    label: "Mood disruption",
    description: "How strongly the uncertainty changes your baseline steadiness, optimism, or emotional ease.",
    accent: "#FDA4AF",
  },
  {
    key: "hesitation-next-steps",
    label: "Hesitation about next steps",
    description: "How much confusion is making movement, decisions, or emotional investment feel harder than they should.",
    accent: "#C4B5FD",
  },
];

const overallClarityOptions: RelationshipChoiceOption[] = [
  { value: "very-clear", label: "Very clear" },
  { value: "mostly-clear", label: "Mostly clear" },
  { value: "mixed", label: "Mixed" },
  { value: "often-unclear", label: "Often unclear" },
  { value: "very-confusing", label: "Very confusing" },
];

const mainUnclearAreaOptions: RelationshipChoiceOption[] = [
  { value: "intentions", marker: "A", label: "Their intentions" },
  { value: "consistency", marker: "B", label: "Their consistency" },
  { value: "emotional-availability", marker: "C", label: "Their emotional availability" },
  { value: "where-i-stand", marker: "D", label: "Where I stand with them" },
  { value: "words-actions-match", marker: "E", label: "Whether words and actions actually match" },
];

const confusionPatternOptions: RelationshipChoiceOption[] = [
  { value: "hot-cold-behavior", label: "Hot-cold behavior" },
  { value: "delayed-replies", label: "Delayed replies" },
  { value: "unclear-intentions", label: "Unclear intentions" },
  { value: "mixed-effort", label: "Mixed effort" },
  { value: "poor-follow-through", label: "Poor follow-through" },
  { value: "avoidance", label: "Avoidance" },
  { value: "affection-without-clarity", label: "Affection without clarity" },
  { value: "words-actions-mismatch", label: "Words / actions mismatch" },
  { value: "conflict-avoidance", label: "Conflict avoidance" },
  { value: "disappearing-after-closeness", label: "Disappearing after closeness" },
];

const emotionalSafetyOptions: RelationshipChoiceOption[] = [
  { value: "very-safe", label: "Very safe" },
  { value: "mostly-safe", label: "Mostly safe" },
  { value: "mixed", label: "Mixed" },
  { value: "often-unsafe", label: "Often unsafe" },
  { value: "not-safe", label: "Not safe" },
];

const confusionResponseOptions: RelationshipChoiceOption[] = [
  { value: "ask-directly", marker: "A", label: "Ask directly" },
  { value: "analyze-privately", marker: "B", label: "Analyze the pattern privately" },
  { value: "wait-and-hope", marker: "C", label: "Wait and hope clarity appears" },
  { value: "seek-reassurance", marker: "D", label: "Seek reassurance or signs" },
  { value: "pull-back-protect", marker: "E", label: "Pull back to protect myself" },
];

const relationshipPatternOptions: RelationshipChoiceOption[] = [
  {
    value: "steady-reciprocal",
    marker: "A",
    label: "steady and reciprocal",
    description: "The connection feels readable because warmth, effort, and clarity reinforce each other.",
  },
  {
    value: "mostly-stable-occasional-uncertainty",
    marker: "B",
    label: "mostly stable with occasional uncertainty",
    description: "The relationship is largely grounded, though a few softer zones still need naming.",
  },
  {
    value: "warm-then-unclear",
    marker: "C",
    label: "warm, then unclear",
    description: "There is genuine contact, but the signal softens exactly where clarity is needed most.",
  },
  {
    value: "effort-uneven",
    marker: "D",
    label: "effort is uneven",
    description: "The relationship keeps asking you to adapt to shifting availability or follow-through.",
  },
  {
    value: "closeness-without-clarity",
    marker: "E",
    label: "closeness exists, but clarity does not",
    description: "Emotional contact is present, yet the meaning of the relationship stays too unresolved.",
  },
];

const conversationHandlingOptions: RelationshipChoiceOption[] = [
  { value: "very-directly", label: "Very directly" },
  { value: "mostly-directly", label: "Mostly directly" },
  { value: "mixed", label: "Mixed" },
  { value: "often-avoided", label: "Often avoided" },
  { value: "rarely-addressed-clearly", label: "Rarely addressed clearly" },
];

export const rankedTruthItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "dont-know-where-i-stand", label: "I do not know where I stand" },
  { key: "words-actions-do-not-match", label: "Words and actions do not fully match" },
  { key: "consistency-drops-when-important", label: "Consistency drops at important moments" },
  { key: "emotional-safety-feels-uneven", label: "Emotional safety feels uneven" },
  { key: "analysis-because-clarity-is-weak", label: "I stay in analysis because clarity is weak" },
];

const heaviestSourceOptions: RelationshipChoiceOption[] = [
  { value: "inconsistency", marker: "A", label: "inconsistency" },
  { value: "lack-of-direct-communication", marker: "B", label: "lack of direct communication" },
  { value: "emotional-ambiguity", marker: "C", label: "emotional ambiguity" },
  { value: "mixed-effort", marker: "D", label: "mixed effort" },
  { value: "my-overanalysis", marker: "E", label: "my own overanalysis after unclear signals" },
];

const strongestSignalProblemOptions: RelationshipChoiceOption[] = signalZones.map((zone) => ({
  value: zone.key,
  label: zone.label,
  description: zone.description,
}));

const finalRealityOptions: RelationshipChoiceOption[] = [
  { value: "mostly-clear-soft-edges", marker: "A", label: "The relationship is mostly clear, with a few softer edges" },
  { value: "care-here-consistency-weak", marker: "B", label: "There is care here, but consistency is not strong enough" },
  { value: "mixed-signals-keep-clarity-unstable", marker: "C", label: "There are enough mixed signals to keep clarity unstable" },
  { value: "confusion-feels-relational", marker: "D", label: "The confusion feels relational, not just internal" },
  { value: "less-clarity-than-i-need", marker: "E", label: "I stay in this connection with less clarity than I actually need" },
];

export const relationshipClaritySteps: RelationshipClarityStep[] = [
  {
    id: "overall-clarity",
    step: 1,
    kind: "segmented",
    field: "overallClarity",
    eyebrow: "Signal 01 · overall read",
    question: "How clear does this relationship feel to you overall right now?",
    hint: "Use your lived sense of the connection, not only its warmest moments.",
    options: overallClarityOptions,
  },
  {
    id: "main-unclear-area",
    step: 2,
    kind: "scenario-choice",
    field: "mainUnclearArea",
    eyebrow: "Signal 02 · what feels least readable",
    question: "What feels most unclear most often?",
    hint: "Choose the part that generates the most interpretive work for you.",
    options: mainUnclearAreaOptions,
  },
  {
    id: "consistency-words-actions",
    step: 3,
    kind: "slider",
    field: "wordsActionsConsistency",
    eyebrow: "Signal 03 · follow-through reality",
    question: "How consistent are their actions compared to what they say?",
    hint: "This is one of the strongest clarity signals in the whole tool.",
    label: "Words and actions consistency",
    minLabel: "Very inconsistent",
    maxLabel: "Very consistent",
  },
  {
    id: "confusion-patterns",
    step: 4,
    kind: "multi-select",
    field: "confusionPatterns",
    eyebrow: "Signal 04 · recurring confusion patterns",
    question: "Which patterns create confusion most often?",
    hint: "Choose up to four. These form the mixed-signal spread in the result.",
    limit: 4,
    options: confusionPatternOptions,
  },
  {
    id: "emotional-safety",
    step: 5,
    kind: "segmented",
    field: "emotionalSafety",
    eyebrow: "Signal 05 · honesty safety",
    question: "How emotionally safe do you feel being honest in this connection?",
    hint: "Clarity is harder to build where truth does not feel safe to speak.",
    options: emotionalSafetyOptions,
  },
  {
    id: "response-to-confusion",
    step: 6,
    kind: "scenario-choice",
    field: "confusionResponse",
    eyebrow: "Signal 06 · what you do next",
    question: "When you feel confused, what do you most often do next?",
    hint: "This helps separate the relationship signal from the coping pattern it pulls you into.",
    options: confusionResponseOptions,
  },
  {
    id: "reinterpret-meaning",
    step: 7,
    kind: "slider",
    field: "reinterpretationFrequency",
    eyebrow: "Signal 07 · reinterpretation load",
    question: "How often do their actions leave you reinterpreting what the relationship means?",
    hint: "High reinterpretation usually points to a weak or unstable relationship signal.",
    label: "Reinterpretation frequency",
    minLabel: "Hardly ever",
    maxLabel: "Very often",
  },
  {
    id: "relationship-pattern",
    step: 8,
    kind: "visual-choice",
    field: "relationshipPattern",
    eyebrow: "Signal 08 · visual relationship pattern",
    question: "Which visual pattern feels closest to this relationship?",
    hint: "Choose the shape that matches the overall signal, not only the best day.",
    options: relationshipPatternOptions,
  },
  {
    id: "conversation-handling",
    step: 9,
    kind: "segmented",
    field: "conversationHandling",
    eyebrow: "Signal 09 · directness under pressure",
    question: "How directly are important conversations actually handled?",
    hint: "Indirectness often leaves the relationship emotionally louder and structurally less clear.",
    options: conversationHandlingOptions,
  },
  {
    id: "rank-confusion-truths",
    step: 10,
    kind: "drag-rank",
    eyebrow: "Signal 10 · what is most true about the confusion",
    question: "Rank these from most to least true about the confusion",
    hint: "Put the strongest truth first. That ordering helps the tool identify the primary confusion driver.",
    items: rankedTruthItems,
  },
  {
    id: "trust-stability",
    step: 11,
    kind: "slider",
    field: "trustStability",
    eyebrow: "Signal 11 · trust steadiness",
    question: "How much trust stability does this connection currently feel like it has?",
    hint: "This is not about perfect certainty. It is about whether the relationship feels believable over time.",
    label: "Trust stability",
    minLabel: "Very unstable",
    maxLabel: "Very stable",
  },
  {
    id: "heaviest-source",
    step: 12,
    kind: "scenario-choice",
    field: "heaviestSource",
    eyebrow: "Signal 12 · what makes it heavier",
    question: "What makes the confusion heavier than it should be?",
    hint: "Choose the factor that keeps the uncertainty alive the most.",
    options: heaviestSourceOptions,
  },
  {
    id: "relationship-costs",
    step: 13,
    kind: "triple-slider",
    eyebrow: "Signal 13 · real-life cost",
    question: "How much does this confusion affect your energy, focus, or mood?",
    hint: "This turns the result from a signal reading into a cost profile: what the ambiguity is actually doing to you.",
    fields: [
      { key: "energyCost", label: "Energy cost", minLabel: "Low", maxLabel: "High" },
      { key: "mentalPreoccupation", label: "Mental preoccupation", minLabel: "Low", maxLabel: "High" },
      { key: "moodDisruption", label: "Mood disruption", minLabel: "Low", maxLabel: "High" },
    ],
  },
  {
    id: "strongest-problem-zone",
    step: 14,
    kind: "visual-choice",
    field: "strongestSignalProblem",
    eyebrow: "Signal 14 · strongest problem zone",
    question: "Where is the strongest signal problem?",
    hint: "Choose the area where the relationship feels least dependable, not simply most emotionally loaded.",
    options: strongestSignalProblemOptions,
    columns: 3,
  },
  {
    id: "final-reality",
    step: 15,
    kind: "scenario-choice",
    field: "finalReality",
    eyebrow: "Signal 15 · current reality read",
    question: "Which statement feels closest to your current reality?",
    hint: "This final read helps the tool compare your overall sense with the specific signals gathered above.",
    options: finalRealityOptions,
  },
];

export const relatedRelationshipClarityTools: RelatedRelationshipTool[] = [
  {
    title: "Attachment Pattern Spotter",
    description: "Read your own relational response style so you can separate attachment activation from the relationship signal itself.",
    category: "Relationships & Attachment",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "attachment-pattern-spotter", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Boundary Strength Scanner",
    description: "Check whether pressure is making it harder to protect your own limit inside a confusing connection.",
    category: "Boundaries & People-Pleasing",
    minutes: "6 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "People-Pleasing Signal Check",
    description: "See whether approval pressure or emotional smoothing is making you stay in ambiguity longer than you need to.",
    category: "Boundaries & People-Pleasing",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "people-pleasing-signal-check", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Reassurance Seeking Decoder",
    description: "Trace how uncertainty in connection can turn into checking, reassurance loops, or interpretive overwork.",
    category: "Relationships & Attachment",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "reassurance-seeking-decoder", categorySlug: "relationships-attachment" }),
  },
];

export const relationshipClarityFaqItems: FaqItem[] = [
  {
    question: "What does a relationship clarity score actually mean?",
    answer:
      "It is a directional read of how much confusion load the relationship is currently creating through inconsistency, indirectness, weak safety, unstable trust, or mixed signals. It is not a verdict on the entire relationship and not a diagnosis.",
  },
  {
    question: "Are mixed signals always a bad sign?",
    answer:
      "Not automatically. Some uncertainty is normal, especially early on or during change. The problem is when mixed signals stop being occasional and start becoming the main way the relationship is experienced.",
  },
  {
    question: "What is the difference between uncertainty and inconsistency?",
    answer:
      "Uncertainty means not everything is known yet. Inconsistency means the signal itself keeps changing in a way that makes meaning harder to trust. One can be temporary; the other usually creates ongoing interpretive work.",
  },
  {
    question: "Why can warmth exist without real clarity?",
    answer:
      "Because warmth and clarity are not the same signal. A relationship can contain affection, chemistry, or emotional closeness while still lacking steady follow-through, direct communication, or reliable truth about where things stand.",
  },
  {
    question: "How does emotional safety affect clarity?",
    answer:
      "If honesty does not feel safe, clarity usually weakens. People say less, soften more, and rely on implication instead of directness, which makes confusion expand even when both people care.",
  },
  {
    question: "Can my overthinking make the confusion feel worse?",
    answer:
      "Yes, but overthinking is often secondary rather than primary. It usually grows because the relationship signal is weak, inconsistent, or incomplete enough that your mind keeps trying to close the gap.",
  },
  {
    question: "How do I know whether the confusion is relational or internal?",
    answer:
      "A good clue is whether the confusion decreases when behavior is steady and conversations are direct. If clarity keeps dropping because the signal itself is shifting, delayed, or inconsistent, the confusion is at least partly relational.",
  },
  {
    question: "Is low clarity the same as incompatibility?",
    answer:
      "No. A relationship can be low-clarity for several reasons, including timing, avoidance, mixed effort, or lack of explicit conversation. Incompatibility is one possibility, but it is not the only explanation.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Every few weeks is usually enough, or sooner if the relationship is changing quickly. The most useful comparison is whether the signal is becoming easier to read through consistency, directness, and trust rather than only through hope.",
  },
  {
    question: "What should I do if the relationship feels meaningful but unclear?",
    answer:
      "Treat meaning and clarity as separate questions. You can care deeply about a connection and still need more directness, consistency, or truth before investing further. The next move is usually to reduce interpretation and increase signal reading.",
  },
];

export const relationshipClarityStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Warmth can keep you close long after clarity has started to thin out.",
  quote:
    "This often happens when there is enough connection to keep hope alive, but not enough consistency to feel settled. The person starts analyzing details because the relationship feels real and unclear at the same time. A good moment restores hope. A confusing moment reopens the whole question. Gradually, the confusion starts taking up more space than the connection itself.",
  takeaway:
    "That is the exact tension this tool is built to surface: the difference between a relationship feeling meaningful and the relationship actually providing enough stable signal to feel clear.",
  toneLabel: "Common lived pattern",
  accent: "#67E8F9",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What relationship clarity actually means",
    paragraphs: [
      "Relationship clarity is not the same thing as certainty, intensity, or constant reassurance. It is the felt ability to read the connection without having to interpret every shift in tone, effort, timing, or availability. A relationship can still be complex, evolving, or emotionally rich and yet remain clear if what is happening is reasonably consistent across words, actions, communication, and trust.",
      "That distinction matters because people often confuse strong feeling with strong signal. A connection can feel powerful and still be hard to read. It can also feel calm and ordinary while being highly clear. Clarity is less about emotional volume and more about coherence. Do the important parts of the relationship say the same thing at once? Are direct conversations possible? Does the connection become more believable over time or more interpretive?",
      "A useful way to think about clarity is that it reduces guesswork. You do not have to know the entire future. You do need enough stability that your mind is not constantly working overtime to fill in what the relationship itself is not showing clearly. When clarity drops, people often start monitoring details, reading tone more closely, and trying to extract meaning from inconsistency. The relationship begins to take more interpretive effort than it should.",
    ],
  },
  {
    title: "Why confusion often feels heavier than the relationship itself",
    paragraphs: [
      "Confusion can become heavier than the connection because ambiguity is cognitively expensive. When a relationship is hard to read, the mind keeps reopening the file. Was that warmth real? Did that pullback mean anything? Am I overreacting or accurately noticing inconsistency? The connection may occupy only a few moments in real life while the ambiguity around it keeps expanding across attention, mood, and energy.",
      "This is one reason people can feel more exhausted by unclear relationships than by openly disappointing ones. A clear no hurts, but it resolves something. Ambiguity often refuses resolution. It leaves enough possibility alive that the person keeps analyzing, hoping, adjusting, and waiting for the next signal to reveal what is actually true. That back-and-forth is tiring because it keeps the nervous system leaning forward without much dependable ground underneath it.",
      "Confusion also becomes heavier when warmth is mixed into it. If the connection felt entirely empty, many people would leave it more quickly. What makes ambiguous relationships sticky is that they often contain real contact, real chemistry, or real emotional meaning. The problem is not that nothing is there. The problem is that what is there does not always come with enough structural clarity to feel steady. That combination can keep a person emotionally engaged and mentally overextended at the same time.",
    ],
  },
  {
    title: "How mixed signals create analysis and instability",
    paragraphs: [
      "Mixed signals are difficult because they force the person into interpretation. When words and actions do not fully match, when effort rises and falls at important moments, or when closeness appears without directness, the relationship stops being readable at face value. The mind then steps in to do the work the connection is not doing for itself. It starts comparing timelines, replaying conversations, tracking responsiveness, and trying to infer meaning from partial evidence.",
      "That analysis can look like overthinking from the outside, but it is often the downstream effect of weak signal quality. People do not usually interpret obsessively when the relationship is consistently clear. They do it when the connection keeps generating just enough warmth or ambiguity to make certainty impossible and detachment difficult. The analysis is an attempt to regain orientation.",
      "Instability grows when this pattern repeats. A relationship that cannot be read clearly starts shaping how safe it feels to speak, how much trust can stabilize, and how much energy gets lost to waiting or guessing. Over time, the person may stop asking only whether the relationship matters and begin asking whether the relationship is capable of providing enough truth to support that meaning. That is the deeper clarity question this tool is trying to answer.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorialBlock[] = [
  {
    key: "signalConsistency",
    paragraphs: [
      "Signal Consistency measures whether the connection is saying roughly the same thing across time, effort, follow-through, and behavior. It is one of the fastest ways to tell whether confusion is being created by the relationship field itself.",
      "Consistency does not require constant intensity. It requires enough reliability that the meaning of the relationship does not have to be rebuilt after every change in tone or pace.",
    ],
  },
  {
    key: "emotionalSafety",
    paragraphs: [
      "Emotional Safety looks at whether honesty feels possible in the connection. If truth feels risky, clarity almost always weakens because both people start relying on implication, buffering, or avoidance instead of directness.",
      "A lower safety score does not automatically mean the relationship is dangerous. It means the environment may not feel steady enough for clearer communication to land cleanly.",
    ],
  },
  {
    key: "communicationClarity",
    paragraphs: [
      "Communication Clarity measures how directly important topics are actually handled. Many relationships feel confusing not because nobody cares, but because key meanings are left too vague, delayed, or indirect.",
      "When this score is low, people often end up reading subtext because the actual text of the relationship is not strong enough.",
    ],
  },
  {
    key: "trustStability",
    paragraphs: [
      "Trust Stability captures whether the connection feels believable over time. Trust is not only about promises. It is about whether the relationship keeps organizing itself in a way that reduces uncertainty rather than repeatedly reopening it.",
      "A low trust score often explains why even warm moments do not create much relief. The warmth may feel real, but the relationship still does not feel stable enough to rest in.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Words and actions that do not reinforce each other",
    body:
      "When language suggests one thing and follow-through suggests another, clarity erodes fast. The mind starts treating every new interaction as fresh evidence because the signal has not settled.",
  },
  {
    title: "Poor follow-through at important moments",
    body:
      "Inconsistency matters most where steadiness matters most. Dropped plans, emotional pullback, or uneven effort during meaningful moments often creates more confusion than distance alone.",
  },
  {
    title: "Emotional ambiguity that keeps hope alive",
    body:
      "Warmth without direction is one of the hardest combinations to read. It creates enough emotional reality to stay engaged without enough definition to feel settled.",
  },
  {
    title: "Indirect communication",
    body:
      "When key conversations stay implied, delayed, or softened, the relationship leaves too much meaning to interpretation. Clarity usually declines not because nothing is being felt, but because too little is being said cleanly.",
  },
  {
    title: "Fluctuating effort",
    body:
      "Hot-cold behavior and mixed effort create instability because the relationship signal changes just enough to keep you adjusting your interpretation every time.",
  },
  {
    title: "Low trust stability",
    body:
      "If the connection does not feel believable over time, even positive moments may not produce much relief. Instead of trust growing, the person often stays watchful for the next contradiction.",
  },
  {
    title: "Unresolved conversations",
    body:
      "Clarity often weakens less from one difficult topic and more from what remains unaddressed around it. The unresolved space starts doing too much emotional work.",
  },
];

export const increaseClarityBlocks: InfoCardBlock[] = [
  {
    title: "Consistency over intensity",
    body:
      "Strong signal usually grows through reliability rather than emotional peaks. A calmer pattern that keeps matching itself is often clearer than a powerful one that shifts too much.",
  },
  {
    title: "Direct communication",
    body:
      "Clarity increases when important questions are handled plainly instead of through inference, hints, or long gaps. Directness reduces the need for private analysis.",
  },
  {
    title: "Emotional safety",
    body:
      "If truth can be spoken without disproportionate fallout, the relationship becomes easier to read. Safety gives honesty somewhere to land.",
  },
  {
    title: "Pattern reliability",
    body:
      "Clarity becomes stronger when behavior holds together across different moments, not only when the connection feels easy or close.",
  },
  {
    title: "Fewer interpretive gaps",
    body:
      "The less you have to infer from tone, delay, or scattered signals, the more readable the relationship becomes. Good signal reduces guesswork before it accumulates.",
  },
  {
    title: "Truth between words and actions",
    body:
      "When what is said and what is done keep reinforcing the same message, trust can stabilize and confusion naturally loses momentum.",
  },
];

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by separating meaning from signal. A relationship can matter to you and still be offering less clarity than you need. The first shift is not deciding everything immediately. It is becoming more precise about what is actually weak: consistency, directness, safety, trust, or a specific unresolved zone.",
  "Choose one question you no longer want to answer only through interpretation. That may be where you stand, whether effort is reciprocal, whether direct conversation is possible, or whether the future direction is concrete enough to trust. Precision matters here because vague confusion often stays vague until one part of it is named cleanly.",
  "Most importantly, measure progress by reduced interpretive labor. If you are having to decode less, trust behavior more, and spend less time rebuilding meaning after each shift, the relationship signal is becoming clearer whether the final answer is yes, no, or not yet.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Relationship Clarity Journal",
  description:
    "A structured guide for separating signal from hope, tracking consistency more clearly, and reducing confusion-driven overanalysis.",
  buttonLabel: "View Next Step",
};

const overallClarityDeficits: Record<OverallClarityValue, number> = {
  "very-clear": 10,
  "mostly-clear": 28,
  mixed: 54,
  "often-unclear": 78,
  "very-confusing": 94,
};

const mainUnclearSeverity: Record<MainUnclearAreaValue, number> = {
  intentions: 76,
  consistency: 86,
  "emotional-availability": 72,
  "where-i-stand": 82,
  "words-actions-match": 90,
};

const emotionalSafetyDeficits: Record<EmotionalSafetyValue, number> = {
  "very-safe": 12,
  "mostly-safe": 28,
  mixed: 52,
  "often-unsafe": 76,
  "not-safe": 94,
};

const confusionResponseSeverity: Record<ConfusionResponseValue, number> = {
  "ask-directly": 24,
  "analyze-privately": 68,
  "wait-and-hope": 76,
  "seek-reassurance": 72,
  "pull-back-protect": 64,
};

const relationshipPatternSeverity: Record<RelationshipPatternValue, number> = {
  "steady-reciprocal": 14,
  "mostly-stable-occasional-uncertainty": 34,
  "warm-then-unclear": 64,
  "effort-uneven": 78,
  "closeness-without-clarity": 90,
};

const conversationHandlingDeficits: Record<ConversationHandlingValue, number> = {
  "very-directly": 12,
  "mostly-directly": 26,
  mixed: 52,
  "often-avoided": 78,
  "rarely-addressed-clearly": 92,
};

const heaviestSourceSeverity: Record<HeaviestSourceValue, number> = {
  inconsistency: 90,
  "lack-of-direct-communication": 82,
  "emotional-ambiguity": 78,
  "mixed-effort": 74,
  "my-overanalysis": 56,
};

const signalZoneSeverity: Record<SignalZoneValue, number> = {
  trust: 84,
  communication: 76,
  consistency: 90,
  "emotional-safety": 80,
  intentions: 74,
  "future-direction": 72,
};

const finalRealitySeverity: Record<FinalRealityValue, number> = {
  "mostly-clear-soft-edges": 24,
  "care-here-consistency-weak": 52,
  "mixed-signals-keep-clarity-unstable": 74,
  "confusion-feels-relational": 82,
  "less-clarity-than-i-need": 92,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "dont-know-where-i-stand": 88,
  "words-actions-do-not-match": 92,
  "consistency-drops-when-important": 84,
  "emotional-safety-feels-uneven": 76,
  "analysis-because-clarity-is-weak": 72,
};

const patternSeverity: Record<ConfusionPatternValue, number> = {
  "hot-cold-behavior": 88,
  "delayed-replies": 66,
  "unclear-intentions": 84,
  "mixed-effort": 78,
  "poor-follow-through": 82,
  avoidance: 74,
  "affection-without-clarity": 86,
  "words-actions-mismatch": 94,
  "conflict-avoidance": 72,
  "disappearing-after-closeness": 90,
};

const rankingWeights = [1, 0.86, 0.72, 0.56, 0.4];

const scoringWeights = {
  overallClarity: 8,
  mainUnclearArea: 6,
  wordsActionsConsistency: 10,
  confusionPatterns: 8,
  emotionalSafety: 10,
  confusionResponse: 6,
  reinterpretationFrequency: 8,
  relationshipPattern: 6,
  conversationHandling: 8,
  rankingTruths: 8,
  trustStability: 8,
  heaviestSource: 6,
  relationshipCosts: 8,
  strongestSignalProblem: 4,
  finalReality: 6,
} as const;

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function weightedAverage(values: Array<{ value?: number; weight: number }>) {
  const active = values.filter((item) => typeof item.value === "number") as Array<{ value: number; weight: number }>;

  if (!active.length) {
    return 0;
  }

  const totalWeight = active.reduce((sum, item) => sum + item.weight, 0);
  const weightedTotal = active.reduce((sum, item) => sum + item.value * item.weight, 0);

  return clampScore(weightedTotal / totalWeight);
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function getBand(score: number) {
  return relationshipClarityBands.find((band) => score >= band.min && score <= band.max) ?? relationshipClarityBands[0];
}

function getZone(key: SignalZoneValue) {
  return signalZones.find((zone) => zone.key === key) ?? signalZones[0];
}

function getDriver(key: string) {
  return confusionDrivers.find((driver) => driver.key === key) ?? confusionDrivers[0];
}

function getRankingScore(order: RankedTruthKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = rankingWeights.reduce((sum, value) => sum + value, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const weight = rankingWeights[index] ?? rankingWeights[rankingWeights.length - 1];
    return sum + rankingSeverity[key] * weight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getIssueScores(answers: RelationshipClarityAnswers): SignalIssueScore[] {
  const baseTotals: Record<SignalIssueKey, number[]> = {
    "words-actions-mismatch": [],
    "delayed-clarity": [],
    "hot-cold-effort": [],
    "emotional-ambiguity": [],
    avoidance: [],
  };

  const push = (key: SignalIssueKey, value: number) => {
    baseTotals[key].push(value);
  };

  const unclearArea = answers.mainUnclearArea;
  if (unclearArea === "intentions") {
    push("delayed-clarity", 84);
    push("emotional-ambiguity", 72);
  } else if (unclearArea === "consistency") {
    push("hot-cold-effort", 86);
    push("words-actions-mismatch", 72);
  } else if (unclearArea === "emotional-availability") {
    push("emotional-ambiguity", 86);
    push("avoidance", 64);
  } else if (unclearArea === "where-i-stand") {
    push("delayed-clarity", 88);
    push("emotional-ambiguity", 74);
  } else if (unclearArea === "words-actions-match") {
    push("words-actions-mismatch", 94);
    push("hot-cold-effort", 58);
  }

  answers.confusionPatterns.forEach((pattern) => {
    if (pattern === "hot-cold-behavior") {
      push("hot-cold-effort", 92);
    } else if (pattern === "delayed-replies") {
      push("delayed-clarity", 74);
    } else if (pattern === "unclear-intentions") {
      push("delayed-clarity", 88);
      push("emotional-ambiguity", 70);
    } else if (pattern === "mixed-effort") {
      push("hot-cold-effort", 82);
    } else if (pattern === "poor-follow-through") {
      push("words-actions-mismatch", 84);
      push("hot-cold-effort", 68);
    } else if (pattern === "avoidance") {
      push("avoidance", 88);
    } else if (pattern === "affection-without-clarity") {
      push("emotional-ambiguity", 92);
      push("delayed-clarity", 66);
    } else if (pattern === "words-actions-mismatch") {
      push("words-actions-mismatch", 96);
    } else if (pattern === "conflict-avoidance") {
      push("avoidance", 78);
    } else if (pattern === "disappearing-after-closeness") {
      push("avoidance", 90);
      push("hot-cold-effort", 76);
    }
  });

  if (answers.relationshipPattern === "warm-then-unclear") {
    push("emotional-ambiguity", 84);
    push("delayed-clarity", 70);
  } else if (answers.relationshipPattern === "effort-uneven") {
    push("hot-cold-effort", 86);
  } else if (answers.relationshipPattern === "closeness-without-clarity") {
    push("emotional-ambiguity", 90);
    push("delayed-clarity", 78);
  } else if (answers.relationshipPattern === "mostly-stable-occasional-uncertainty") {
    push("delayed-clarity", 34);
  }

  if (answers.conversationHandling === "often-avoided" || answers.conversationHandling === "rarely-addressed-clearly") {
    push("avoidance", answers.conversationHandling === "rarely-addressed-clearly" ? 92 : 80);
    push("delayed-clarity", 76);
  }

  if (answers.heaviestSource === "inconsistency") {
    push("hot-cold-effort", 90);
    push("words-actions-mismatch", 70);
  } else if (answers.heaviestSource === "lack-of-direct-communication") {
    push("avoidance", 82);
    push("delayed-clarity", 86);
  } else if (answers.heaviestSource === "emotional-ambiguity") {
    push("emotional-ambiguity", 90);
  } else if (answers.heaviestSource === "mixed-effort") {
    push("hot-cold-effort", 84);
  } else if (answers.heaviestSource === "my-overanalysis") {
    push("delayed-clarity", 46);
  }

  if (answers.strongestSignalProblem === "trust") {
    push("words-actions-mismatch", 70);
    push("hot-cold-effort", 62);
  } else if (answers.strongestSignalProblem === "communication") {
    push("avoidance", 76);
    push("delayed-clarity", 78);
  } else if (answers.strongestSignalProblem === "consistency") {
    push("hot-cold-effort", 90);
  } else if (answers.strongestSignalProblem === "emotional-safety") {
    push("emotional-ambiguity", 72);
    push("avoidance", 58);
  } else if (answers.strongestSignalProblem === "intentions") {
    push("delayed-clarity", 82);
    push("emotional-ambiguity", 66);
  } else if (answers.strongestSignalProblem === "future-direction") {
    push("delayed-clarity", 78);
  }

  if (typeof answers.wordsActionsConsistency === "number") {
    const inverseConsistency = 100 - clampScore(answers.wordsActionsConsistency);
    push("words-actions-mismatch", inverseConsistency);
    push("hot-cold-effort", clampScore(inverseConsistency * 0.82));
  }

  if (typeof answers.reinterpretationFrequency === "number") {
    const reinterpret = clampScore(answers.reinterpretationFrequency);
    push("delayed-clarity", reinterpret);
    push("emotional-ambiguity", clampScore(reinterpret * 0.78));
  }

  return signalIssues
    .map((issue) => ({
      ...issue,
      value: clampScore(average(baseTotals[issue.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getStrongestStableSignal(dimensions: Record<RelationshipClarityDimensionKey, number>) {
  const sorted = [...relationshipClarityDimensions]
    .map((dimension) => ({ key: dimension.key, value: dimensions[dimension.key] }))
    .sort((left, right) => right.value - left.value);

  const top = sorted[0]?.key ?? "signalConsistency";

  if (top === "signalConsistency") {
    return stableSignals.find((signal) => signal.key === "actions-reliable") ?? stableSignals[0];
  }

  if (top === "emotionalSafety") {
    return stableSignals.find((signal) => signal.key === "honesty-has-room") ?? stableSignals[0];
  }

  if (top === "communicationClarity") {
    return stableSignals.find((signal) => signal.key === "direct-conversations-possible") ?? stableSignals[0];
  }

  return stableSignals.find((signal) => signal.key === "trust-not-gone") ?? stableSignals[0];
}

function getPrimaryDriverKey(
  answers: RelationshipClarityAnswers,
  issues: SignalIssueScore[],
  dimensions: Record<RelationshipClarityDimensionKey, number>,
) {
  if (answers.heaviestSource === "inconsistency" || answers.mainUnclearArea === "consistency") {
    return "inconsistency";
  }

  if (answers.mainUnclearArea === "words-actions-match" || issues[0]?.key === "words-actions-mismatch") {
    return "words-actions-mismatch";
  }

  if (answers.heaviestSource === "lack-of-direct-communication" || dimensions.communicationClarity < 45) {
    return "low-directness";
  }

  if (answers.heaviestSource === "emotional-ambiguity" || answers.mainUnclearArea === "emotional-availability") {
    return "emotional-ambiguity";
  }

  if (answers.strongestSignalProblem === "future-direction") {
    return "future-ambiguity";
  }

  if (answers.heaviestSource === "my-overanalysis") {
    return "analysis-after-weak-signal";
  }

  if (dimensions.trustStability < 44) {
    return "trust-instability";
  }

  return "inconsistency";
}

function getIssueValue(items: SignalIssueScore[], key: SignalIssueKey) {
  return items.find((item) => item.key === key)?.value ?? 50;
}

function getHesitationCost(answers: RelationshipClarityAnswers, score: number, trustStability: number) {
  return clampScore(
    weightedAverage([
      { value: typeof answers.reinterpretationFrequency === "number" ? answers.reinterpretationFrequency : undefined, weight: 0.3 },
      { value: 100 - trustStability, weight: 0.28 },
      { value: answers.finalReality ? finalRealitySeverity[answers.finalReality] : undefined, weight: 0.22 },
      { value: answers.heaviestSource ? heaviestSourceSeverity[answers.heaviestSource] : undefined, weight: 0.2 },
    ]),
  );
}

export function getInitialRelationshipClarityAnswers(): RelationshipClarityAnswers {
  return {
    confusionPatterns: [],
    rankingOrder: rankedTruthItems.map((item) => item.key),
    rankingConfirmed: false,
  };
}

export function isRelationshipClarityStepComplete(
  step: RelationshipClarityStep,
  answers: RelationshipClarityAnswers,
) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers.confusionPatterns.length > 0;
  }

  if (step.kind === "drag-rank") {
    return answers.rankingOrder.length === step.items.length && answers.rankingConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateRelationshipClarityResult(
  answers: RelationshipClarityAnswers,
): RelationshipClarityResult {
  const overallClarity = answers.overallClarity ? overallClarityDeficits[answers.overallClarity] : undefined;
  const mainUnclearArea = answers.mainUnclearArea ? mainUnclearSeverity[answers.mainUnclearArea] : undefined;
  const wordsActionsConsistency =
    typeof answers.wordsActionsConsistency === "number"
      ? clampScore(100 - answers.wordsActionsConsistency)
      : undefined;
  const confusionPatterns =
    answers.confusionPatterns.length > 0
      ? clampScore(
          average(answers.confusionPatterns.map((pattern) => patternSeverity[pattern])) * 0.72 +
            (answers.confusionPatterns.length / 4) * 24,
        )
      : undefined;
  const emotionalSafety = answers.emotionalSafety ? emotionalSafetyDeficits[answers.emotionalSafety] : undefined;
  const confusionResponse = answers.confusionResponse
    ? confusionResponseSeverity[answers.confusionResponse]
    : undefined;
  const reinterpretation =
    typeof answers.reinterpretationFrequency === "number" ? clampScore(answers.reinterpretationFrequency) : undefined;
  const relationshipPattern = answers.relationshipPattern
    ? relationshipPatternSeverity[answers.relationshipPattern]
    : undefined;
  const conversationHandling = answers.conversationHandling
    ? conversationHandlingDeficits[answers.conversationHandling]
    : undefined;
  const rankingTruths = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const trustStability =
    typeof answers.trustStability === "number" ? clampScore(100 - answers.trustStability) : undefined;
  const heaviestSource = answers.heaviestSource ? heaviestSourceSeverity[answers.heaviestSource] : undefined;
  const energyCost = typeof answers.energyCost === "number" ? clampScore(answers.energyCost) : undefined;
  const mentalPreoccupation =
    typeof answers.mentalPreoccupation === "number" ? clampScore(answers.mentalPreoccupation) : undefined;
  const moodDisruption =
    typeof answers.moodDisruption === "number" ? clampScore(answers.moodDisruption) : undefined;
  const relationshipCosts =
    typeof energyCost === "number" &&
    typeof mentalPreoccupation === "number" &&
    typeof moodDisruption === "number"
      ? clampScore((energyCost + mentalPreoccupation + moodDisruption) / 3)
      : undefined;
  const strongestSignalProblem = answers.strongestSignalProblem
    ? signalZoneSeverity[answers.strongestSignalProblem]
    : undefined;
  const finalReality = answers.finalReality ? finalRealitySeverity[answers.finalReality] : undefined;

  const scoredEntries = [
    { value: overallClarity, weight: scoringWeights.overallClarity },
    { value: mainUnclearArea, weight: scoringWeights.mainUnclearArea },
    { value: wordsActionsConsistency, weight: scoringWeights.wordsActionsConsistency },
    { value: confusionPatterns, weight: scoringWeights.confusionPatterns },
    { value: emotionalSafety, weight: scoringWeights.emotionalSafety },
    { value: confusionResponse, weight: scoringWeights.confusionResponse },
    { value: reinterpretation, weight: scoringWeights.reinterpretationFrequency },
    { value: relationshipPattern, weight: scoringWeights.relationshipPattern },
    { value: conversationHandling, weight: scoringWeights.conversationHandling },
    { value: rankingTruths, weight: scoringWeights.rankingTruths },
    { value: trustStability, weight: scoringWeights.trustStability },
    { value: heaviestSource, weight: scoringWeights.heaviestSource },
    { value: relationshipCosts, weight: scoringWeights.relationshipCosts },
    { value: strongestSignalProblem, weight: scoringWeights.strongestSignalProblem },
    { value: finalReality, weight: scoringWeights.finalReality },
  ];

  const answeredWeight = scoredEntries.reduce((sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0), 0);
  const weightedTotal = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );
  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(score);
  const completionRatio = answeredWeight / 100;

  const issueScores = getIssueScores(answers);
  const trustStabilityPositive =
    typeof answers.trustStability === "number" ? clampScore(answers.trustStability) : 50;
  const consistencyPositive =
    typeof answers.wordsActionsConsistency === "number" ? clampScore(answers.wordsActionsConsistency) : 50;

  const dimensions: Record<RelationshipClarityDimensionKey, number> = {
    signalConsistency: weightedAverage([
      { value: consistencyPositive, weight: 0.4 },
      { value: clampScore(100 - getIssueValue(issueScores, "words-actions-mismatch")), weight: 0.24 },
      { value: clampScore(100 - getIssueValue(issueScores, "hot-cold-effort")), weight: 0.24 },
      { value: answers.relationshipPattern === "steady-reciprocal" ? 88 : answers.relationshipPattern === "mostly-stable-occasional-uncertainty" ? 68 : undefined, weight: 0.12 },
    ]),
    emotionalSafety: weightedAverage([
      { value: typeof emotionalSafety === "number" ? clampScore(100 - emotionalSafety) : undefined, weight: 0.4 },
      { value: clampScore(100 - getIssueValue(issueScores, "emotional-ambiguity")), weight: 0.18 },
      { value: clampScore(100 - (moodDisruption ?? 50)), weight: 0.14 },
      { value: answers.confusionResponse === "ask-directly" ? 80 : answers.confusionResponse === "pull-back-protect" ? 38 : undefined, weight: 0.14 },
      { value: answers.conversationHandling === "very-directly" ? 84 : answers.conversationHandling === "mostly-directly" ? 70 : undefined, weight: 0.14 },
    ]),
    communicationClarity: weightedAverage([
      { value: typeof conversationHandling === "number" ? clampScore(100 - conversationHandling) : undefined, weight: 0.42 },
      { value: clampScore(100 - getIssueValue(issueScores, "delayed-clarity")), weight: 0.26 },
      { value: clampScore(100 - getIssueValue(issueScores, "avoidance")), weight: 0.18 },
      { value: answers.confusionResponse === "ask-directly" ? 84 : answers.confusionResponse === "analyze-privately" ? 42 : undefined, weight: 0.14 },
    ]),
    trustStability: weightedAverage([
      { value: trustStabilityPositive, weight: 0.42 },
      {
        value:
          typeof reinterpretation === "number"
            ? clampScore(100 - reinterpretation)
            : undefined,
        weight: 0.18,
      },
      { value: clampScore(100 - getIssueValue(issueScores, "words-actions-mismatch")), weight: 0.14 },
      { value: clampScore(100 - getIssueValue(issueScores, "hot-cold-effort")), weight: 0.14 },
      { value: answers.finalReality === "mostly-clear-soft-edges" ? 76 : answers.finalReality === "less-clarity-than-i-need" ? 22 : undefined, weight: 0.12 },
    ]),
  };

  const primaryDriver = getDriver(getPrimaryDriverKey(answers, issueScores, dimensions));
  const strongestStableSignal = getStrongestStableSignal(dimensions);
  const heaviestUnresolvedZone = getZone(answers.strongestSignalProblem ?? "consistency");

  const hesitationNextSteps = getHesitationCost(answers, score, trustStabilityPositive);

  const costMetrics: RelationshipCostMetric[] = costMetricDefinitions
    .map((definition) => {
      const value =
        definition.key === "energy-cost"
          ? energyCost ?? 34
          : definition.key === "mental-preoccupation"
            ? mentalPreoccupation ?? 38
            : definition.key === "mood-disruption"
              ? moodDisruption ?? 32
              : hesitationNextSteps;

      return {
        ...definition,
        value: clampScore(value),
      };
    })
    .sort((left, right) => right.value - left.value);

  const likelyPatternCost = costMetrics[0];

  const matrixPlacement = {
    x: clampScore((dimensions.signalConsistency + dimensions.communicationClarity) / 2),
    y: clampScore((dimensions.emotionalSafety + dimensions.trustStability) / 2),
    label:
      dimensions.signalConsistency >= 65 && dimensions.emotionalSafety >= 65
        ? "Coherent signal"
        : dimensions.signalConsistency < 50 && dimensions.emotionalSafety >= 50
          ? "Readable feelings, unstable structure"
          : dimensions.signalConsistency >= 50 && dimensions.emotionalSafety < 50
            ? "Some structure, low safety"
            : "Diffuse signal field",
  };

  const mixedSignalDensity = clampScore(average(issueScores.slice(0, 3).map((issue) => issue.value)));
  const clarityLevel = clampScore(100 - score);

  const signalLabel = `Your pattern suggests that the confusion is not coming from sensitivity alone - it is being reinforced by ${primaryDriver.label.toLowerCase()} and around ${heaviestUnresolvedZone.label.toLowerCase()} inside the connection itself.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} Right now, ${primaryDriver.label.toLowerCase()} appears to be the main driver, while ${strongestStableSignal.label.toLowerCase()} is the strongest stable signal still available.`;
  const breakdownInsight = `${band.breakdownLead} In this result, clarity appears to be thinning most around ${heaviestUnresolvedZone.label.toLowerCase()} and through ${likelyPatternCost.label.toLowerCase()}.`;

  const matrixInsights: MatrixInsight[] = [
    { label: "Consistency", value: dimensions.signalConsistency, accent: "#93C5FD" },
    { label: "Communication", value: dimensions.communicationClarity, accent: "#67E8F9" },
    { label: "Safety", value: dimensions.emotionalSafety, accent: "#6EE7B7" },
    { label: "Trust", value: dimensions.trustStability, accent: "#C4B5FD" },
  ];

  return {
    score,
    band,
    completionRatio,
    isComplete: completionRatio === 1 && Boolean(answers.finalReality),
    dimensions,
    primaryConfusionDriver: primaryDriver,
    strongestStableSignal,
    heaviestUnresolvedZone,
    likelyPatternCost,
    signalIssues: issueScores,
    costMetrics,
    matrixPlacement,
    mixedSignalDensity,
    clarityLevel,
    signalLabel,
    interpretation,
    standout,
    breakdownInsight,
    matrixInsights,
  };
}

export const heroPreviewResult = calculateRelationshipClarityResult({
  ...getInitialRelationshipClarityAnswers(),
  overallClarity: "often-unclear",
  mainUnclearArea: "where-i-stand",
  wordsActionsConsistency: 34,
  confusionPatterns: ["mixed-effort", "affection-without-clarity", "words-actions-mismatch", "delayed-replies"],
  emotionalSafety: "mixed",
  confusionResponse: "analyze-privately",
  reinterpretationFrequency: 82,
  relationshipPattern: "closeness-without-clarity",
  conversationHandling: "often-avoided",
  rankingOrder: [
    "words-actions-do-not-match",
    "dont-know-where-i-stand",
    "consistency-drops-when-important",
    "analysis-because-clarity-is-weak",
    "emotional-safety-feels-uneven",
  ],
  rankingConfirmed: true,
  trustStability: 38,
  heaviestSource: "emotional-ambiguity",
  energyCost: 68,
  mentalPreoccupation: 86,
  moodDisruption: 62,
  strongestSignalProblem: "intentions",
  finalReality: "mixed-signals-keep-clarity-unstable",
});
