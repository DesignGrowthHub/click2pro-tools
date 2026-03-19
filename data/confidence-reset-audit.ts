import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type InitialBarrierValue =
  | "second-guessing"
  | "need-more-certainty"
  | "comparison"
  | "fear-of-being-wrong"
  | "hesitation";

export type WeakSituationValue =
  | "being-evaluated"
  | "making-decisions"
  | "speaking-up"
  | "visible-work"
  | "conflict"
  | "uncertainty"
  | "comparison"
  | "mistakes"
  | "social-exposure"
  | "leadership-moments";

export type ConfidencePatternValue =
  | "mostly-steady-brief-dips"
  | "good-externally-shaky-internally"
  | "interrupted-by-doubt"
  | "held-back-by-hesitation"
  | "drained-by-performance-pressure";

export type SecondGuessingValue =
  | "never"
  | "rarely"
  | "sometimes"
  | "often"
  | "very-often";

export type RankedTruthKey =
  | "hesitate-before-acting"
  | "compare-too-quickly"
  | "mistakes-hit-harder-than-they-should"
  | "need-too-much-certainty-to-move"
  | "lose-trust-under-pressure";

export type SetbackResponseValue =
  | "recover-and-adjust"
  | "replay-it-repeatedly"
  | "lose-momentum"
  | "question-capability"
  | "become-more-cautious";

export type PerfectionPressureValue =
  | "very-low"
  | "low"
  | "moderate"
  | "high"
  | "very-high";

export type FamiliarStatementValue =
  | "know-more-than-i-trust"
  | "move-but-doubt-follows"
  | "wait-too-long-to-feel-ready"
  | "drops-fast-when-observed";

export type DrainSourceValue =
  | "overthinking"
  | "comparison"
  | "criticism"
  | "lack-of-clarity"
  | "perfectionism"
  | "visible-mistakes"
  | "emotional-exhaustion"
  | "lack-of-support"
  | "pressure-to-perform";

export type BreakdownZoneValue =
  | "work"
  | "relationships"
  | "self-expression"
  | "decisions"
  | "visibility-performance"
  | "recovery-after-mistakes";

export type FinalPatternValue =
  | "mostly-steady-contextual"
  | "know-more-than-i-trust-under-pressure"
  | "hesitation-and-second-guessing-costly"
  | "need-self-trust-reset-not-motivation"
  | "looks-stronger-outside-than-inside";

export type ConfidenceDimensionKey =
  | "selfTrustStability"
  | "hesitationPressure"
  | "comparisonPerfectionDrag"
  | "recoveryStrength";

export type ConfidenceBandKey =
  | "stable-confidence-signal"
  | "mild-confidence-interruption"
  | "hesitation-led-confidence-strain"
  | "high-self-trust-disruption"
  | "confidence-recovery-deficit";

export type ConfidenceDrainKey =
  | "comparison"
  | "second-guessing"
  | "perfectionism"
  | "fear-of-being-wrong"
  | "visibility-pressure"
  | "slow-recovery-after-mistakes";

export type ConfidenceChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type ConfidenceResetAnswers = {
  initialBarrier?: InitialBarrierValue;
  selfTrustStability?: number;
  weakConfidenceSituations: WeakSituationValue[];
  confidencePattern?: ConfidencePatternValue;
  secondGuessingFrequency?: SecondGuessingValue;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  comparisonIntensity?: number;
  setbackResponse?: SetbackResponseValue;
  perfectionPressure?: PerfectionPressureValue;
  familiarStatement?: FamiliarStatementValue;
  recoveryEase?: number;
  drainSources: DrainSourceValue[];
  decisionQualityImpact?: number;
  visibilityImpact?: number;
  followThroughImpact?: number;
  breakdownZone?: BreakdownZoneValue;
  finalPattern?: FinalPatternValue;
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
  field: "initialBarrier" | "setbackResponse" | "familiarStatement" | "finalPattern";
  options: ConfidenceChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "secondGuessingFrequency" | "perfectionPressure";
  options: ConfidenceChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "selfTrustStability" | "comparisonIntensity" | "recoveryEase";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "weakConfidenceSituations" | "drainSources";
  limit: number;
  options: ConfidenceChoiceOption[];
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
    key: "decisionQualityImpact" | "visibilityImpact" | "followThroughImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "confidencePattern" | "breakdownZone";
  options: ConfidenceChoiceOption[];
  columns?: 2 | 3;
};

export type ConfidenceResetStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep;

export type ConfidenceResetDimension = {
  key: ConfidenceDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
  direction: "higher-is-stronger" | "higher-is-heavier";
};

export type ConfidenceBand = {
  key: ConfidenceBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  resetLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type ConfidenceDrain = {
  key: ConfidenceDrainKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type StableTrait = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type BreakdownZone = {
  key: BreakdownZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type ResetPriority = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type ConfidenceGainArea = {
  label: string;
  description: string;
  accent: string;
};

export type ConfidenceDrainScore = ConfidenceDrain & {
  value: number;
};

export type ConfidenceImpactMetric = {
  key: "decision-quality" | "visibility" | "follow-through";
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type ConfidencePreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type RelatedConfidenceTool = {
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

export type ConfidenceResetResult = {
  score: number;
  completionRatio: number;
  band: ConfidenceBand;
  dimensions: Record<ConfidenceDimensionKey, number>;
  primaryConfidenceDrain: ConfidenceDrain;
  strongestStableTrait: StableTrait;
  mainBreakdownZone: BreakdownZone;
  mostUsefulResetPriority: ResetPriority;
  likelyNextConfidenceGain: ConfidenceGainArea;
  drainSources: ConfidenceDrainScore[];
  impactMetrics: ConfidenceImpactMetric[];
  previewMetrics: ConfidencePreviewMetric[];
  confidenceLabel: string;
  interpretation: string;
  standout: string;
  resetInsight: string;
  selfTrustLevel: number;
  hesitationLoad: number;
  recoveryPotential: number;
  drainIntensity: number;
};

type ContentBlock = {
  title: string;
  body: string;
};

type MeaningBlock = {
  title: string;
  paragraphs: string[];
};

type DimensionEditorial = {
  key: ConfidenceDimensionKey;
  paragraphs: string[];
};

export const confidenceResetMetadata = {
  eyebrow: "SELF-TRUST TOOL",
  title: "Confidence Reset Audit",
  description:
    "See what is weakening self-trust - hesitation, comparison, perfection pressure, second-guessing, or slow recovery after mistakes. This tool treats confidence as something you can read clearly, not just feel vaguely.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const confidenceResetDimensions: ConfidenceResetDimension[] = [
  {
    key: "selfTrustStability",
    label: "Self-Trust Stability",
    description: "How steady your internal belief feels when you need to act, decide, or be visible.",
    icon: "signal",
    accent: "#67E8F9",
    direction: "higher-is-stronger",
  },
  {
    key: "hesitationPressure",
    label: "Hesitation Pressure",
    description: "How much delay, overchecking, or readiness-seeking is slowing confidence down.",
    icon: "pattern",
    accent: "#FCD34D",
    direction: "higher-is-heavier",
  },
  {
    key: "comparisonPerfectionDrag",
    label: "Comparison / Perfection Drag",
    description: "How much external standard pressure is draining confidence after it already weakens.",
    icon: "graph",
    accent: "#FB7185",
    direction: "higher-is-heavier",
  },
  {
    key: "recoveryStrength",
    label: "Recovery Strength",
    description: "How well confidence bounces back after doubt, mistakes, visibility, or emotional impact.",
    icon: "trend",
    accent: "#6EE7B7",
    direction: "higher-is-stronger",
  },
];

export const confidenceResetBands: ConfidenceBand[] = [
  {
    key: "stable-confidence-signal",
    min: 0,
    max: 24,
    title: "Stable Confidence Signal",
    descriptor: "Your self-trust is mostly intact and interruptions appear more contextual than structural.",
    summary:
      "Confidence is functioning with relatively little internal drag. Doubt may still show up, but it is not dominating the way you read yourself.",
    interpretation:
      "This usually means you still have reliable access to your own judgment. The goal is not a dramatic rebuild. It is protecting what already works and noticing the few contexts where confidence dips faster than expected.",
    standoutLead: "The strongest signal here is stability.",
    resetLead: "The best reset is precision rather than overhaul.",
    gradientFrom: "#67E8F9",
    gradientTo: "#6EE7B7",
    glow: "rgba(103, 232, 249, 0.18)",
  },
  {
    key: "mild-confidence-interruption",
    min: 25,
    max: 44,
    title: "Mild Confidence Interruption",
    descriptor: "Confidence is still available, but certain patterns interrupt it faster than they should.",
    summary:
      "You likely have enough ability and evidence already. The issue is that confidence gets nudged off course in predictable moments such as evaluation, visible work, or post-decision review.",
    interpretation:
      "This often means your confidence is not broken. It is being interrupted by a few recurring triggers. The most useful move is catching those patterns earlier so they do not quietly become the default reading of your capability.",
    standoutLead: "The confidence system is still working, but it is too easy to interrupt.",
    resetLead: "The reset starts with a lighter correction, not heavy self-improvement pressure.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.18)",
  },
  {
    key: "hesitation-led-confidence-strain",
    min: 45,
    max: 64,
    title: "Hesitation-Led Confidence Strain",
    descriptor: "Confidence is being thinned by delay, second-guessing, or the need to feel more ready than the moment requires.",
    summary:
      "The self-trust problem here is less about lack of ability and more about the amount of friction that appears before action, after decisions, or around visible exposure.",
    interpretation:
      "This pattern often looks subtle from the outside because it can sit behind capable behavior. Inside, though, it creates drag, extra checking, and a steady sense that confidence is harder to hold than it should be.",
    standoutLead: "The clearest signal is not weakness. It is hesitation pressure.",
    resetLead: "The reset needs to target movement and self-trust, not just motivation.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 211, 77, 0.16)",
  },
  {
    key: "high-self-trust-disruption",
    min: 65,
    max: 84,
    title: "High Self-Trust Disruption",
    descriptor: "Confidence is being interrupted in ways that meaningfully affect decisions, visibility, or follow-through.",
    summary:
      "This result usually means the cost has expanded beyond a passing dip. Confidence is likely breaking down in repeated places and asking you to work harder than necessary just to stay steady.",
    interpretation:
      "The goal here is not to hype yourself into feeling stronger. It is to stabilize the exact drains that keep knocking trust loose. Once those are named, confidence often becomes more practical again.",
    standoutLead: "Self-trust is dropping faster than your actual capability level suggests.",
    resetLead: "The first reset is usually removing drain before trying to add more pressure.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.16)",
  },
  {
    key: "confidence-recovery-deficit",
    min: 85,
    max: 100,
    title: "Confidence Recovery Deficit",
    descriptor: "Confidence is not only getting interrupted. It is also not restoring fast enough afterward.",
    summary:
      "This pattern often means doubt, performance pressure, or visible mistakes continue to affect you long after the triggering moment itself. Recovery is lagging behind the strain.",
    interpretation:
      "When recovery lags, confidence can start to feel globally lower even if the real issue is how long each hit stays active. The most useful reset is rebuilding recovery strength and reducing repeated drain, not pushing harder to prove yourself.",
    standoutLead: "The issue here is not simply a confidence dip. It is slow re-stabilization.",
    resetLead: "The reset has to rebuild recovery, not just ask for more courage.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.16)",
  },
];

const initialBarrierOptions: ConfidenceChoiceOption[] = [
  { value: "second-guessing", marker: "A", label: "I second-guess", description: "My first move is to question my own read." },
  { value: "need-more-certainty", marker: "B", label: "I need more certainty", description: "I feel I should know more before trusting myself." },
  { value: "comparison", marker: "C", label: "I compare myself to others", description: "Other people become the reference point faster than my own judgment." },
  { value: "fear-of-being-wrong", marker: "D", label: "I fear getting it wrong", description: "The cost of being wrong starts to outweigh trusting my call." },
  { value: "hesitation", marker: "E", label: "I hesitate even when I know enough", description: "I pause longer than the moment actually requires." },
];

const weakSituationOptions: ConfidenceChoiceOption[] = [
  { value: "being-evaluated", label: "Being evaluated" },
  { value: "making-decisions", label: "Making decisions" },
  { value: "speaking-up", label: "Speaking up" },
  { value: "visible-work", label: "Visible work" },
  { value: "conflict", label: "Conflict" },
  { value: "uncertainty", label: "Uncertainty" },
  { value: "comparison", label: "Comparison" },
  { value: "mistakes", label: "Mistakes" },
  { value: "social-exposure", label: "Social exposure" },
  { value: "leadership-moments", label: "Leadership moments" },
];

const confidencePatternOptions: ConfidenceChoiceOption[] = [
  {
    value: "mostly-steady-brief-dips",
    marker: "A",
    label: "Mostly steady with brief dips",
    description: "Confidence holds more often than it collapses.",
  },
  {
    value: "good-externally-shaky-internally",
    marker: "B",
    label: "Good externally, shaky internally",
    description: "Other people see capability sooner than you feel it.",
  },
  {
    value: "interrupted-by-doubt",
    marker: "C",
    label: "Easily interrupted by doubt",
    description: "Confidence starts, then gets cut off by internal questioning.",
  },
  {
    value: "held-back-by-hesitation",
    marker: "D",
    label: "Held back by hesitation",
    description: "Delay and extra readiness-seeking block confidence from turning into action.",
  },
  {
    value: "drained-by-performance-pressure",
    marker: "E",
    label: "Drained by pressure to perform well",
    description: "Confidence thins when the standard for being good enough becomes too high.",
  },
];

const secondGuessingOptions: ConfidenceChoiceOption[] = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
];

export const confidenceRankedTruthItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "hesitate-before-acting", label: "I hesitate before acting" },
  { key: "compare-too-quickly", label: "I compare too quickly" },
  { key: "mistakes-hit-harder-than-they-should", label: "Mistakes hit harder than they should" },
  { key: "need-too-much-certainty-to-move", label: "I need too much certainty to move" },
  { key: "lose-trust-under-pressure", label: "I lose trust in myself under pressure" },
];

const setbackResponseOptions: ConfidenceChoiceOption[] = [
  { value: "recover-and-adjust", marker: "A", label: "I recover and adjust", description: "The moment lands, but I stay capable of recalibrating." },
  { value: "replay-it-repeatedly", marker: "B", label: "I replay it repeatedly", description: "The mind keeps reopening the mistake or exposure." },
  { value: "lose-momentum", marker: "C", label: "I lose momentum", description: "I slow down more than the actual event justifies." },
  { value: "question-capability", marker: "D", label: "I question my capability", description: "The event quickly becomes evidence against myself." },
  { value: "become-more-cautious", marker: "E", label: "I become more cautious than necessary", description: "My next actions get smaller and tighter afterward." },
];

const perfectionPressureOptions: ConfidenceChoiceOption[] = [
  { value: "very-low", label: "Very low" },
  { value: "low", label: "Low" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High" },
  { value: "very-high", label: "Very high" },
];

const familiarStatementOptions: ConfidenceChoiceOption[] = [
  { value: "know-more-than-i-trust", marker: "A", label: "I know more than I trust in the moment" },
  { value: "move-but-doubt-follows", marker: "B", label: "I move, but doubt follows closely" },
  { value: "wait-too-long-to-feel-ready", marker: "C", label: "I wait too long to feel ready" },
  { value: "drops-fast-when-observed", marker: "D", label: "Confidence drops fastest when I feel observed" },
];

const drainSourceOptions: ConfidenceChoiceOption[] = [
  { value: "overthinking", label: "Overthinking" },
  { value: "comparison", label: "Comparison" },
  { value: "criticism", label: "Criticism" },
  { value: "lack-of-clarity", label: "Lack of clarity" },
  { value: "perfectionism", label: "Perfectionism" },
  { value: "visible-mistakes", label: "Visible mistakes" },
  { value: "emotional-exhaustion", label: "Emotional exhaustion" },
  { value: "lack-of-support", label: "Lack of support" },
  { value: "pressure-to-perform", label: "Pressure to perform" },
];

const breakdownZoneOptions: ConfidenceChoiceOption[] = [
  { value: "work", marker: "W", label: "Work", description: "Confidence dips around output, performance, or evaluation." },
  { value: "relationships", marker: "R", label: "Relationships", description: "Confidence thins around emotional exposure or relational steadiness." },
  { value: "self-expression", marker: "S", label: "Self-expression", description: "Speaking plainly or showing your real opinion feels heavier than it should." },
  { value: "decisions", marker: "D", label: "Decisions", description: "Trust is hardest to hold when you have to choose and move." },
  { value: "visibility-performance", marker: "V", label: "Visibility / performance", description: "The moment you feel seen, confidence gets less stable." },
  { value: "recovery-after-mistakes", marker: "M", label: "Recovery after mistakes", description: "The hardest part is getting confidence back once it drops." },
];

const finalPatternOptions: ConfidenceChoiceOption[] = [
  { value: "mostly-steady-contextual", marker: "A", label: "My confidence is mostly steady, but gets interrupted in a few contexts" },
  { value: "know-more-than-i-trust-under-pressure", marker: "B", label: "I know more than I trust under pressure" },
  { value: "hesitation-and-second-guessing-costly", marker: "C", label: "Hesitation and second-guessing are costing me more than lack of ability" },
  { value: "need-self-trust-reset-not-motivation", marker: "D", label: "I need a reset in self-trust, not just motivation" },
  { value: "looks-stronger-outside-than-inside", marker: "E", label: "Confidence looks stronger outside than it feels inside" },
];

export const confidenceResetSteps: ConfidenceResetStep[] = [
  {
    id: "initial-barrier",
    step: 1,
    kind: "scenario-choice",
    field: "initialBarrier",
    eyebrow: "Signal 1 · first interruption",
    question: "When you need to trust your own judgment, what most often gets in the way first?",
    hint: "Pick the earliest break in confidence, not the later fallout.",
    options: initialBarrierOptions,
  },
  {
    id: "self-trust-stability",
    step: 2,
    kind: "slider",
    field: "selfTrustStability",
    eyebrow: "Signal 2 · current baseline",
    question: "How steady does your self-trust feel right now overall?",
    hint: "Think about recent days, not your best or worst isolated moment.",
    label: "Current self-trust stability",
    minLabel: "Very unstable",
    maxLabel: "Very steady",
  },
  {
    id: "weak-situations",
    step: 3,
    kind: "multi-select",
    field: "weakConfidenceSituations",
    eyebrow: "Signal 3 · weak-signal contexts",
    question: "Which situations weaken your confidence most often?",
    hint: "Choose the moments where self-trust drops faster than your actual ability does.",
    limit: 4,
    options: weakSituationOptions,
  },
  {
    id: "confidence-pattern",
    step: 4,
    kind: "visual-choice",
    field: "confidencePattern",
    eyebrow: "Signal 4 · current confidence shape",
    question: "Which visual pattern feels closest to your current confidence state?",
    hint: "Treat this as a pattern read, not a personality label.",
    options: confidencePatternOptions,
    columns: 2,
  },
  {
    id: "second-guessing-frequency",
    step: 5,
    kind: "segmented",
    field: "secondGuessingFrequency",
    eyebrow: "Signal 5 · after-decision review",
    question: "How often do you second-guess decisions after already making them?",
    hint: "This is about what happens after the decision, not before it.",
    options: secondGuessingOptions,
  },
  {
    id: "confidence-ranking",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Signal 6 · confidence ranking",
    question: "Rank these from most to least true for your confidence pattern",
    hint: "Start with the belief or habit that costs you the most room right now.",
    items: confidenceRankedTruthItems,
  },
  {
    id: "comparison-intensity",
    step: 7,
    kind: "slider",
    field: "comparisonIntensity",
    eyebrow: "Signal 7 · comparison pull",
    question: "How much does comparison affect your confidence?",
    hint: "This includes silent comparison, not only obvious envy.",
    label: "Current comparison pull",
    minLabel: "Very little",
    maxLabel: "A lot",
  },
  {
    id: "setback-response",
    step: 8,
    kind: "scenario-choice",
    field: "setbackResponse",
    eyebrow: "Signal 8 · setback reaction",
    question: "When you make a mistake or feel exposed, what most often happens next?",
    hint: "Choose the pattern that lands most often, not the one you wish were true.",
    options: setbackResponseOptions,
  },
  {
    id: "perfection-pressure",
    step: 9,
    kind: "segmented",
    field: "perfectionPressure",
    eyebrow: "Signal 9 · performance pressure",
    question: "How much perfection pressure is currently shaping your actions?",
    hint: "Think about the pressure to get it right, look good, or avoid visible flaws.",
    options: perfectionPressureOptions,
  },
  {
    id: "familiar-confidence-statement",
    step: 10,
    kind: "scenario-choice",
    field: "familiarStatement",
    eyebrow: "Signal 10 · familiar confidence script",
    question: "Which statement feels most familiar?",
    hint: "This helps the tool distinguish low confidence from low trust in your own read.",
    options: familiarStatementOptions,
  },
  {
    id: "recovery-ease",
    step: 11,
    kind: "slider",
    field: "recoveryEase",
    eyebrow: "Signal 11 · recovery ease",
    question: "How easy is it to recover confidence after a setback?",
    hint: "Recovery matters as much as the initial hit.",
    label: "Recovery ease after setbacks",
    minLabel: "Very difficult",
    maxLabel: "Very easy",
  },
  {
    id: "drain-sources",
    step: 12,
    kind: "multi-select",
    field: "drainSources",
    eyebrow: "Signal 12 · post-drop drains",
    question: "What drains confidence most after it drops?",
    hint: "Pick the forces that keep the drop active, not only the trigger itself.",
    limit: 3,
    options: drainSourceOptions,
  },
  {
    id: "confidence-impact",
    step: 13,
    kind: "triple-slider",
    eyebrow: "Signal 13 · functional impact",
    question: "How much do these get affected when confidence drops?",
    hint: "Use the sliders to show the practical cost, not the abstract feeling.",
    fields: [
      {
        key: "decisionQualityImpact",
        label: "Decision quality",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "visibilityImpact",
        label: "Visibility / willingness to show up",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "followThroughImpact",
        label: "Follow-through",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "breakdown-zone",
    step: 14,
    kind: "visual-choice",
    field: "breakdownZone",
    eyebrow: "Signal 14 · breakdown zone",
    question: "Where does confidence break most often?",
    hint: "Choose the zone where confidence becomes least dependable, not merely most emotional.",
    options: breakdownZoneOptions,
    columns: 3,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final self-trust read",
    question: "Which statement feels closest to your current pattern?",
    hint: "This last answer helps align the detailed signals with your overall lived experience.",
    options: finalPatternOptions,
  },
];

const initialBarrierSeverity: Record<InitialBarrierValue, number> = {
  "second-guessing": 70,
  "need-more-certainty": 78,
  comparison: 64,
  "fear-of-being-wrong": 84,
  hesitation: 76,
};

const weakSituationSeverity: Record<WeakSituationValue, number> = {
  "being-evaluated": 82,
  "making-decisions": 74,
  "speaking-up": 68,
  "visible-work": 78,
  conflict: 62,
  uncertainty: 72,
  comparison: 80,
  mistakes: 84,
  "social-exposure": 66,
  "leadership-moments": 76,
};

const confidencePatternSeverity: Record<ConfidencePatternValue, number> = {
  "mostly-steady-brief-dips": 20,
  "good-externally-shaky-internally": 62,
  "interrupted-by-doubt": 78,
  "held-back-by-hesitation": 82,
  "drained-by-performance-pressure": 74,
};

const secondGuessingSeverity: Record<SecondGuessingValue, number> = {
  never: 0,
  rarely: 24,
  sometimes: 54,
  often: 78,
  "very-often": 92,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "hesitate-before-acting": 82,
  "compare-too-quickly": 72,
  "mistakes-hit-harder-than-they-should": 84,
  "need-too-much-certainty-to-move": 78,
  "lose-trust-under-pressure": 88,
};

const rankingWeights = [34, 24, 18, 14, 10];

const setbackResponseSeverity: Record<SetbackResponseValue, number> = {
  "recover-and-adjust": 18,
  "replay-it-repeatedly": 74,
  "lose-momentum": 78,
  "question-capability": 88,
  "become-more-cautious": 70,
};

const setbackRecoveryStrength: Record<SetbackResponseValue, number> = {
  "recover-and-adjust": 84,
  "replay-it-repeatedly": 34,
  "lose-momentum": 26,
  "question-capability": 18,
  "become-more-cautious": 32,
};

const perfectionPressureSeverity: Record<PerfectionPressureValue, number> = {
  "very-low": 10,
  low: 28,
  moderate: 54,
  high: 78,
  "very-high": 92,
};

const familiarStatementSeverity: Record<FamiliarStatementValue, number> = {
  "know-more-than-i-trust": 64,
  "move-but-doubt-follows": 72,
  "wait-too-long-to-feel-ready": 78,
  "drops-fast-when-observed": 74,
};

const drainSourceSeverity: Record<DrainSourceValue, number> = {
  overthinking: 72,
  comparison: 84,
  criticism: 78,
  "lack-of-clarity": 62,
  perfectionism: 86,
  "visible-mistakes": 82,
  "emotional-exhaustion": 70,
  "lack-of-support": 66,
  "pressure-to-perform": 80,
};

const breakdownZoneSeverity: Record<BreakdownZoneValue, number> = {
  work: 62,
  relationships: 56,
  "self-expression": 74,
  decisions: 82,
  "visibility-performance": 84,
  "recovery-after-mistakes": 80,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "mostly-steady-contextual": 26,
  "know-more-than-i-trust-under-pressure": 58,
  "hesitation-and-second-guessing-costly": 76,
  "need-self-trust-reset-not-motivation": 82,
  "looks-stronger-outside-than-inside": 68,
};

const scoringWeights = {
  initialBarrier: 8,
  selfTrustStability: 10,
  weakSituations: 8,
  confidencePattern: 6,
  secondGuessingFrequency: 8,
  rankedTruths: 10,
  comparisonIntensity: 8,
  setbackResponse: 8,
  perfectionPressure: 8,
  familiarStatement: 6,
  recoveryEase: 8,
  drainSources: 6,
  impact: 8,
  breakdownZone: 3,
  finalPattern: 3,
} as const;

export const confidenceDrains: ConfidenceDrain[] = [
  {
    key: "comparison",
    label: "Comparison pressure",
    description: "Other people become the standard faster than your own internal evidence.",
    accent: "#93C5FD",
    icon: "graph",
  },
  {
    key: "second-guessing",
    label: "Second-guessing",
    description: "Confidence drops through post-decision review, not just lack of knowledge.",
    accent: "#67E8F9",
    icon: "pattern",
  },
  {
    key: "perfectionism",
    label: "Perfection pressure",
    description: "The standard for moving feels too strict, so confidence thins before action can settle.",
    accent: "#FCD34D",
    icon: "signal",
  },
  {
    key: "fear-of-being-wrong",
    label: "Fear of being wrong",
    description: "The cost of error becomes heavier than the evidence you already have.",
    accent: "#FB7185",
    icon: "shield",
  },
  {
    key: "visibility-pressure",
    label: "Visibility pressure",
    description: "Confidence gets less stable when you feel watched, evaluated, or exposed.",
    accent: "#C4B5FD",
    icon: "insight",
  },
  {
    key: "slow-recovery-after-mistakes",
    label: "Slow recovery after mistakes",
    description: "The hit lasts longer than the event itself, so confidence does not restore quickly.",
    accent: "#6EE7B7",
    icon: "trend",
  },
];

export const confidenceZones: BreakdownZone[] = [
  {
    key: "work",
    label: "Work",
    description: "Confidence fades around performance, judgment, output quality, or evaluation.",
    accent: "#93C5FD",
  },
  {
    key: "relationships",
    label: "Relationships",
    description: "Confidence drops in relational exposure, expression, or fear of reading the moment wrong.",
    accent: "#FDA4AF",
  },
  {
    key: "self-expression",
    label: "Self-expression",
    description: "Speaking plainly or taking up room feels riskier than it should.",
    accent: "#67E8F9",
  },
  {
    key: "decisions",
    label: "Decisions",
    description: "Self-trust weakens most when you have to choose and back your own judgment.",
    accent: "#FCD34D",
  },
  {
    key: "visibility-performance",
    label: "Visibility / performance",
    description: "Confidence drops fastest when your work, presence, or capability becomes highly visible.",
    accent: "#C4B5FD",
  },
  {
    key: "recovery-after-mistakes",
    label: "Recovery after mistakes",
    description: "The hardest part is getting your footing back after doubt, error, or embarrassment.",
    accent: "#6EE7B7",
  },
];

const stableTraits: StableTrait[] = [
  {
    key: "baseline-capability",
    label: "Baseline capability is still intact",
    description: "The audit suggests the skill is there. The main issue is how quickly confidence gets interrupted around it.",
    accent: "#67E8F9",
  },
  {
    key: "movement-still-possible",
    label: "You still move even with doubt nearby",
    description: "Confidence may wobble, but there is still motion in the system. That matters because reset work can build on action, not only reflection.",
    accent: "#6EE7B7",
  },
  {
    key: "comparison-not-total",
    label: "Comparison has not taken over everything",
    description: "Outside pressure is present, but it is not completely replacing your own read of yourself.",
    accent: "#93C5FD",
  },
  {
    key: "recovery-is-available",
    label: "Recovery is still available",
    description: "Even if confidence drops hard, there is enough recovery strength left to rebuild from real evidence rather than from hype.",
    accent: "#6EE7B7",
  },
  {
    key: "you-know-more-than-you-credit",
    label: "You know more than you currently credit",
    description: "A useful part of the system is still online: your judgment is stronger than the confidence feeling makes it appear.",
    accent: "#C4B5FD",
  },
];

const resetPriorities: ResetPriority[] = [
  {
    key: "act-before-certainty",
    label: "Act before perfect certainty",
    description: "Reduce the amount of permission confidence has to earn before movement begins.",
    accent: "#67E8F9",
  },
  {
    key: "reduce-post-decision-review",
    label: "Reduce post-decision review",
    description: "Stop letting every decision reopen after it has already been made.",
    accent: "#93C5FD",
  },
  {
    key: "lower-comparison-pressure",
    label: "Lower comparison pressure",
    description: "Interrupt the habit of using other people as the speed test for your own adequacy.",
    accent: "#FB7185",
  },
  {
    key: "loosen-perfection-rules",
    label: "Loosen perfection rules",
    description: "Confidence rebuilds faster when good-enough performance is allowed to count again.",
    accent: "#FCD34D",
  },
  {
    key: "rebuild-after-mistakes",
    label: "Rebuild confidence after mistakes",
    description: "Reset how long setbacks stay active so they stop becoming evidence against you.",
    accent: "#6EE7B7",
  },
  {
    key: "reduce-performance-strain",
    label: "Reduce performance strain",
    description: "Confidence needs less exposure load and less pressure to prove itself in every visible moment.",
    accent: "#C4B5FD",
  },
];

const impactMetricDefinitions = [
  {
    key: "decision-quality",
    label: "Decision quality",
    description: "Confidence drops can make judgment narrower, slower, or less decisive than your actual ability supports.",
    accent: "#93C5FD",
  },
  {
    key: "visibility",
    label: "Visibility / willingness to show up",
    description: "Confidence strain often makes capable people shrink their presence more than outsiders realize.",
    accent: "#C4B5FD",
  },
  {
    key: "follow-through",
    label: "Follow-through",
    description: "When self-trust thins, momentum and completion usually become more expensive to hold onto.",
    accent: "#6EE7B7",
  },
] as const;

export const relatedConfidenceTools: RelatedConfidenceTool[] = [
  {
    title: "People-Pleasing Signal Check",
    description: "See whether approval pressure is pulling your confidence away from your own internal read.",
    category: "Boundaries & People-Pleasing",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "people-pleasing-signal-check", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Inner Critic Intensity Scan",
    description: "Surface how harsh internal commentary may be shaping hesitation, caution, and self-trust erosion.",
    category: "Self-Esteem & Confidence",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "inner-critic-intensity-scan", categorySlug: "self-esteem-confidence" }),
  },
  {
    title: "Overthinking Loop Check",
    description: "Separate useful reflection from the kind of repetitive thinking that keeps confidence from settling.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Boundary Strength Scanner",
    description: "Check whether pressure around other people is making it harder to trust and protect your own position.",
    category: "Boundaries & People-Pleasing",
    minutes: "6 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
];

export const confidenceResetFaqItems: FaqItem[] = [
  {
    question: "What does a confidence score actually mean?",
    answer:
      "It is a directional read of how unstable confidence feels right now under pressure. It measures interruption and self-trust strain, not worth, talent, or your value as a person.",
  },
  {
    question: "Is confidence the same as self-esteem?",
    answer:
      "Not exactly. Self-esteem is broader and more identity-level. This audit is focused on present confidence function: how well you trust yourself in decisions, visibility, mistakes, and pressure.",
  },
  {
    question: "Why do I know what to do but still hesitate?",
    answer:
      "Because hesitation is often not a knowledge problem. It is a self-trust problem. You may have enough information, but not enough internal permission to act before certainty feels complete.",
  },
  {
    question: "How does comparison drain confidence?",
    answer:
      "Comparison quietly shifts your standard away from your own evidence and toward someone else’s pace, performance, or image. That makes your confidence feel weaker even when your actual capability has not changed.",
  },
  {
    question: "Why do mistakes hit my confidence so hard?",
    answer:
      "For many people, the mistake itself is not the only problem. The deeper cost comes from how long the event stays active internally and how quickly it becomes proof against the self.",
  },
  {
    question: "Can confidence look stronger outside than it feels inside?",
    answer:
      "Yes. A person can appear capable, composed, and productive while still carrying heavy hesitation, post-decision doubt, or strong fear around being visibly wrong.",
  },
  {
    question: "What is the difference between low confidence and low trust in yourself?",
    answer:
      "Low confidence can sound like not feeling ready or strong. Low self-trust is more specific: it is the habit of not fully believing your own read, judgment, or capability even when evidence exists.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it when a pattern changes: after a stretch of higher pressure, after visible setbacks, or after practicing a new confidence habit for a few weeks. It works best as a comparison point, not a daily check.",
  },
  {
    question: "What should I do if hesitation is the biggest issue?",
    answer:
      "Work on shortening the gap between knowing and moving. Smaller decisions, shorter review windows, and acting before perfect readiness are usually more effective than waiting to feel fully confident first.",
  },
  {
    question: "Can confidence improve without becoming loud or performative?",
    answer:
      "Absolutely. Stronger confidence often looks calmer, cleaner, and less effortful rather than more dramatic. The point is steadier trust, not a bigger performance of certainty.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What the result is actually reading",
    paragraphs: [
      "This audit is not trying to decide whether you are a confident person. It is reading the current operating condition of confidence: how quickly self-trust drops, what interrupts it, and how well it restores after pressure, mistakes, or visible exposure. That distinction matters because many capable people mistake confidence strain for lack of ability.",
      "A higher score usually means the breakdown is happening at the level of trust, recovery, or pressure management. It does not mean you have become less capable. It means your inner system is discounting your capability more aggressively than it should.",
    ],
  },
  {
    title: "Why this often feels confusing in real life",
    paragraphs: [
      "Confidence problems are rarely constant. They tend to appear in patterns. A person may feel strong in routine work, then suddenly become hesitant in decisions, visible performance, or conflict. That is why the result focuses on breakdown points rather than broad labels.",
      "When the pattern is named clearly, confidence becomes more workable. You stop treating it like a random mood and start seeing the actual leaks: over-review, comparison, perfection rules, or slow recovery after mistakes.",
    ],
  },
  {
    title: "How to read the confidence reset states",
    paragraphs: [
      "The five result states describe how stable self-trust feels right now, from mostly intact to significantly disrupted. They are not identity categories and they are not permanent. They show where confidence is being interrupted and what the reset needs to target first.",
      "In practice, the most useful part of the result is usually not the headline score. It is the combination of primary drain, breakdown zone, strongest stable trait, and reset priority. That combination tells you where confidence is leaking and where it can be rebuilt fastest.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "selfTrustStability",
    paragraphs: [
      "Self-Trust Stability is the backbone of the tool. It measures how steady your internal belief feels when you need to decide, move, speak, or be seen. When this dimension is low, confidence can disappear faster than the moment objectively warrants.",
      "A person can have strong actual skill and still score lower here if they repeatedly override their own read, second-guess after decisions, or treat uncertainty as proof that they are not ready.",
    ],
  },
  {
    key: "hesitationPressure",
    paragraphs: [
      "Hesitation Pressure measures the drag that appears before action. It is not only fear. It also includes over-preparing, waiting for more certainty, delaying decisions, or needing a stronger internal feeling before moving than the situation truly requires.",
      "High hesitation pressure can make confidence look weak from the outside, even when the underlying issue is not low ability but friction before trust turns into action.",
    ],
  },
  {
    key: "comparisonPerfectionDrag",
    paragraphs: [
      "Comparison / Perfection Drag tracks the external and internal standards that make confidence more expensive. Comparison tells you that someone else’s pace or polish is the standard. Perfection pressure tells you your effort only counts if it is flawless enough to feel safe.",
      "Together, these forces can quietly drain confidence because they keep moving the threshold for feeling ready, good enough, or trustworthy.",
    ],
  },
  {
    key: "recoveryStrength",
    paragraphs: [
      "Recovery Strength measures how well confidence comes back after exposure, error, criticism, or doubt. Many confidence problems are really recovery problems. The initial hit matters, but the more expensive issue is how long it stays active afterward.",
      "When recovery strength is higher, a setback does not automatically become a story about who you are. It stays a moment. When it is lower, the moment lingers and starts shaping later decisions too.",
    ],
  },
];

export const erosionBlocks: ContentBlock[] = [
  {
    title: "Overthinking after the decision",
    body:
      "Confidence often erodes not in the decision itself, but in the review that comes after. If your mind keeps reopening choices, confidence never gets the chance to settle into evidence.",
  },
  {
    title: "Fear of being wrong in public",
    body:
      "When being wrong feels too costly, confidence becomes cautious and narrow. The system starts optimizing for safety rather than clarity, movement, or useful learning.",
  },
  {
    title: "Fast comparison loops",
    body:
      "Comparison drains confidence because it changes the reference point. Instead of asking what is true for you, the mind starts asking whether you measure up quickly enough against someone else.",
  },
  {
    title: "Visible mistakes that stay active too long",
    body:
      "A visible mistake can hit harder than a private one because it adds exposure, identity threat, and replay value. If recovery is weak, the event keeps coloring later moments too.",
  },
  {
    title: "Perfection pressure before movement",
    body:
      "Perfectionism does not only raise the bar. It can make every attempt feel like an evaluation. Confidence weakens when nothing counts unless it feels polished enough to be safe.",
  },
  {
    title: "Over-reliance on certainty",
    body:
      "Confidence thins when you believe you must feel fully sure before moving. Real self-trust usually grows through enough clarity, not perfect certainty.",
  },
  {
    title: "Weak recovery after setbacks",
    body:
      "If confidence drops and does not restore well, each new pressure point lands on an already thinned system. That is how a few isolated hits turn into a broader confidence strain.",
  },
];

export const restoreBlocks: ContentBlock[] = [
  {
    title: "Act before perfect certainty",
    body:
      "Small actions taken before full readiness retrain confidence to grow through movement, not only through feeling prepared enough first.",
  },
  {
    title: "Reduce post-decision review",
    body:
      "Confidence stabilizes when every decision is not reopened for reconsideration. Shorter review windows protect trust after the call has already been made.",
  },
  {
    title: "Build recovery after mistakes",
    body:
      "Recovery is part of confidence, not a separate issue. Faster repair after visible mistakes keeps one event from redefining the whole self-story.",
  },
  {
    title: "Catch comparison earlier",
    body:
      "Confidence grows when you notice the comparison shift earlier and return to your own evidence, pace, and values before the external standard fully takes over.",
  },
  {
    title: "Strengthen evidence of self-trust",
    body:
      "Confidence becomes sturdier when you track proof of your own judgment, follow-through, and recovery rather than waiting for a bigger feeling to arrive first.",
  },
  {
    title: "Use smaller confidence reps",
    body:
      "Steadier confidence rarely comes from one huge leap. It often comes from smaller repeated moments of speaking, deciding, showing up, and surviving imperfection without collapse.",
  },
];

export const confidenceResetStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Capable on the outside, shrinking on the inside",
  quote:
    "From the outside, this person looked steady. Work got done, responsibilities were handled, and other people often leaned on them because they seemed reliable. Inside, though, every visible choice took more out of them than anyone could see. A simple message could be drafted, softened, sent, and mentally reviewed long after it was over. A small mistake that other people forgot quickly could stay active in the mind for days. The deeper strain was not lack of ability. It was the slow habit of doubting their own read even when they were doing well.",
  takeaway:
    "This is what confidence strain often looks like in real life: not loud collapse, but a quieter loss of internal room through hesitation, post-decision doubt, and over-response to visible mistakes.",
  toneLabel: "Emotionally real",
  accent: "#67E8F9",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, start with the most local repair rather than a grand confidence project. Confidence is easier to rebuild when the reset is specific: shorten the delay before action, reduce the review after decisions, or improve how you recover after visible mistakes. Broad self-improvement pressure often makes the system tighter, not steadier.",
  "Use the result to ask a more useful question than \"How do I become more confident?\" Ask instead: \"Where does trust drop first, and what keeps it from coming back?\" That question usually leads to better action because it points to the actual leak rather than a vague goal.",
  "Most people do not need louder confidence. They need cleaner self-trust. They need fewer internal reversals after decisions, less comparison pressure running in the background, and more evidence that imperfect action can still count as solid action.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Confidence Rebuild in 30 Days",
  description:
    "A structured guide for restoring self-trust, reducing hesitation, and rebuilding confidence through smaller, steadier evidence-based actions.",
  buttonLabel: "View Next Step",
};

export const confidenceResetAuditMetadata = {
  title: confidenceResetMetadata.title,
  description: confidenceResetMetadata.description,
};

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function weightedAverage(values: Array<{ value?: number; weight: number }>) {
  const active = values.filter((item) => typeof item.value === "number") as Array<{
    value: number;
    weight: number;
  }>;

  if (!active.length) {
    return 0;
  }

  const totalWeight = active.reduce((sum, item) => sum + item.weight, 0);
  const weightedTotal = active.reduce((sum, item) => sum + item.value * item.weight, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getBand(score: number) {
  return confidenceResetBands.find((band) => score >= band.min && score <= band.max) ?? confidenceResetBands[0];
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

function getRankingContribution(order: RankedTruthKey[], key: RankedTruthKey) {
  const index = order.indexOf(key);

  if (index === -1) {
    return 0;
  }

  const weight = rankingWeights[index] ?? rankingWeights[rankingWeights.length - 1];
  return (rankingSeverity[key] * weight) / rankingWeights.reduce((sum, value) => sum + value, 0);
}

function getDrainValue(items: ConfidenceDrainScore[], key: ConfidenceDrainKey) {
  return items.find((item) => item.key === key)?.value ?? 40;
}

function getDrainScores(answers: ConfidenceResetAnswers): ConfidenceDrainScore[] {
  const baseTotals: Record<ConfidenceDrainKey, number[]> = {
    comparison: [],
    "second-guessing": [],
    perfectionism: [],
    "fear-of-being-wrong": [],
    "visibility-pressure": [],
    "slow-recovery-after-mistakes": [],
  };

  const push = (key: ConfidenceDrainKey, value: number) => {
    baseTotals[key].push(value);
  };

  if (answers.initialBarrier === "second-guessing") {
    push("second-guessing", 88);
  } else if (answers.initialBarrier === "need-more-certainty") {
    push("second-guessing", 72);
    push("fear-of-being-wrong", 60);
  } else if (answers.initialBarrier === "comparison") {
    push("comparison", 86);
  } else if (answers.initialBarrier === "fear-of-being-wrong") {
    push("fear-of-being-wrong", 92);
    push("perfectionism", 48);
  } else if (answers.initialBarrier === "hesitation") {
    push("second-guessing", 78);
  }

  answers.weakConfidenceSituations.forEach((situation) => {
    if (situation === "being-evaluated") {
      push("visibility-pressure", 88);
      push("fear-of-being-wrong", 72);
      push("perfectionism", 58);
    } else if (situation === "making-decisions") {
      push("second-guessing", 78);
      push("fear-of-being-wrong", 66);
    } else if (situation === "speaking-up") {
      push("visibility-pressure", 68);
      push("second-guessing", 56);
    } else if (situation === "visible-work") {
      push("visibility-pressure", 82);
      push("perfectionism", 70);
    } else if (situation === "conflict") {
      push("fear-of-being-wrong", 56);
      push("second-guessing", 48);
    } else if (situation === "uncertainty") {
      push("second-guessing", 72);
      push("fear-of-being-wrong", 62);
    } else if (situation === "comparison") {
      push("comparison", 92);
    } else if (situation === "mistakes") {
      push("slow-recovery-after-mistakes", 84);
      push("fear-of-being-wrong", 70);
      push("perfectionism", 66);
    } else if (situation === "social-exposure") {
      push("visibility-pressure", 74);
      push("comparison", 42);
    } else if (situation === "leadership-moments") {
      push("visibility-pressure", 78);
      push("fear-of-being-wrong", 64);
      push("perfectionism", 56);
    }
  });

  if (answers.confidencePattern === "good-externally-shaky-internally") {
    push("second-guessing", 70);
  } else if (answers.confidencePattern === "interrupted-by-doubt") {
    push("second-guessing", 86);
  } else if (answers.confidencePattern === "held-back-by-hesitation") {
    push("second-guessing", 82);
    push("fear-of-being-wrong", 52);
  } else if (answers.confidencePattern === "drained-by-performance-pressure") {
    push("perfectionism", 84);
    push("visibility-pressure", 74);
  }

  if (answers.secondGuessingFrequency) {
    push("second-guessing", secondGuessingSeverity[answers.secondGuessingFrequency]);
  }

  if (answers.rankingOrder.length) {
    push("second-guessing", getRankingContribution(answers.rankingOrder, "hesitate-before-acting") + 28);
    push("comparison", getRankingContribution(answers.rankingOrder, "compare-too-quickly") + 24);
    push("slow-recovery-after-mistakes", getRankingContribution(answers.rankingOrder, "mistakes-hit-harder-than-they-should") + 30);
    push("fear-of-being-wrong", getRankingContribution(answers.rankingOrder, "need-too-much-certainty-to-move") + 24);
    push("second-guessing", getRankingContribution(answers.rankingOrder, "lose-trust-under-pressure") + 18);
  }

  if (typeof answers.comparisonIntensity === "number") {
    push("comparison", clampScore(answers.comparisonIntensity));
  }

  if (answers.setbackResponse === "replay-it-repeatedly") {
    push("second-guessing", 68);
    push("slow-recovery-after-mistakes", 58);
  } else if (answers.setbackResponse === "lose-momentum") {
    push("slow-recovery-after-mistakes", 72);
  } else if (answers.setbackResponse === "question-capability") {
    push("slow-recovery-after-mistakes", 82);
    push("fear-of-being-wrong", 58);
  } else if (answers.setbackResponse === "become-more-cautious") {
    push("fear-of-being-wrong", 64);
    push("second-guessing", 56);
  }

  if (answers.perfectionPressure) {
    const pressure = perfectionPressureSeverity[answers.perfectionPressure];
    push("perfectionism", pressure);
    push("fear-of-being-wrong", clampScore(pressure * 0.7));
  }

  answers.drainSources.forEach((source) => {
    if (source === "overthinking") {
      push("second-guessing", 76);
    } else if (source === "comparison") {
      push("comparison", 90);
    } else if (source === "criticism") {
      push("fear-of-being-wrong", 78);
    } else if (source === "lack-of-clarity") {
      push("second-guessing", 52);
    } else if (source === "perfectionism") {
      push("perfectionism", 90);
    } else if (source === "visible-mistakes") {
      push("slow-recovery-after-mistakes", 82);
      push("visibility-pressure", 70);
    } else if (source === "emotional-exhaustion") {
      push("slow-recovery-after-mistakes", 60);
    } else if (source === "lack-of-support") {
      push("slow-recovery-after-mistakes", 54);
    } else if (source === "pressure-to-perform") {
      push("perfectionism", 78);
      push("visibility-pressure", 80);
    }
  });

  if (answers.breakdownZone === "work") {
    push("perfectionism", 58);
    push("visibility-pressure", 52);
  } else if (answers.breakdownZone === "relationships") {
    push("fear-of-being-wrong", 52);
  } else if (answers.breakdownZone === "self-expression") {
    push("visibility-pressure", 66);
    push("second-guessing", 48);
  } else if (answers.breakdownZone === "decisions") {
    push("second-guessing", 84);
  } else if (answers.breakdownZone === "visibility-performance") {
    push("visibility-pressure", 90);
    push("perfectionism", 58);
  } else if (answers.breakdownZone === "recovery-after-mistakes") {
    push("slow-recovery-after-mistakes", 92);
  }

  if (typeof answers.recoveryEase === "number") {
    push("slow-recovery-after-mistakes", clampScore(100 - answers.recoveryEase));
  }

  return confidenceDrains
    .map((drain) => ({
      ...drain,
      value: clampScore(average(baseTotals[drain.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getStrongestStableTrait(
  answers: ConfidenceResetAnswers,
  dimensions: Record<ConfidenceDimensionKey, number>,
  score: number,
) {
  if ((answers.selfTrustStability ?? 0) >= 68) {
    return stableTraits.find((trait) => trait.key === "baseline-capability") ?? stableTraits[0];
  }

  if ((answers.recoveryEase ?? 0) >= 64 || dimensions.recoveryStrength >= 64) {
    return stableTraits.find((trait) => trait.key === "recovery-is-available") ?? stableTraits[0];
  }

  if ((answers.comparisonIntensity ?? 50) <= 40) {
    return stableTraits.find((trait) => trait.key === "comparison-not-total") ?? stableTraits[0];
  }

  if (score <= 64) {
    return stableTraits.find((trait) => trait.key === "movement-still-possible") ?? stableTraits[0];
  }

  return stableTraits.find((trait) => trait.key === "you-know-more-than-you-credit") ?? stableTraits[0];
}

function getResetPriority(
  answers: ConfidenceResetAnswers,
  drains: ConfidenceDrainScore[],
  dimensions: Record<ConfidenceDimensionKey, number>,
) {
  const primaryDrain = drains[0]?.key ?? "second-guessing";

  if (dimensions.recoveryStrength <= 42 || primaryDrain === "slow-recovery-after-mistakes") {
    return resetPriorities.find((item) => item.key === "rebuild-after-mistakes") ?? resetPriorities[0];
  }

  if (primaryDrain === "comparison") {
    return resetPriorities.find((item) => item.key === "lower-comparison-pressure") ?? resetPriorities[0];
  }

  if (primaryDrain === "perfectionism") {
    return resetPriorities.find((item) => item.key === "loosen-perfection-rules") ?? resetPriorities[0];
  }

  if (answers.initialBarrier === "need-more-certainty" || dimensions.hesitationPressure >= 70) {
    return resetPriorities.find((item) => item.key === "act-before-certainty") ?? resetPriorities[0];
  }

  if (answers.breakdownZone === "visibility-performance") {
    return resetPriorities.find((item) => item.key === "reduce-performance-strain") ?? resetPriorities[0];
  }

  return resetPriorities.find((item) => item.key === "reduce-post-decision-review") ?? resetPriorities[0];
}

function getNextGainArea(
  priority: ResetPriority,
  zone: BreakdownZone,
): ConfidenceGainArea {
  if (priority.key === "act-before-certainty") {
    return {
      label: "Quicker decisions with less internal drag",
      description: "The next lift is likely to come from choosing sooner and not making confidence wait for perfect readiness.",
      accent: "#67E8F9",
    };
  }

  if (priority.key === "lower-comparison-pressure") {
    return {
      label: "Cleaner internal reference points",
      description: "Confidence should strengthen once outside comparison stops setting the pace for your adequacy.",
      accent: "#93C5FD",
    };
  }

  if (priority.key === "loosen-perfection-rules") {
    return {
      label: "More movement under visible standards",
      description: "You are likely to gain confidence fastest by allowing good-enough action to count again.",
      accent: "#FCD34D",
    };
  }

  if (priority.key === "rebuild-after-mistakes") {
    return {
      label: "Faster rebound after exposure or error",
      description: "The next gain area is recovery. Once the hits stop lingering so long, confidence usually stops feeling globally low.",
      accent: "#6EE7B7",
    };
  }

  if (zone.key === "visibility-performance" || priority.key === "reduce-performance-strain") {
    return {
      label: "Steadier presence when seen",
      description: "The most likely confidence gain is feeling less destabilized by being visible, observed, or evaluated.",
      accent: "#C4B5FD",
    };
  }

  return {
    label: "Stronger follow-through under pressure",
    description: "Once the main drain is reduced, confidence is most likely to return through cleaner completion and less internal reversal.",
    accent: "#67E8F9",
  };
}

export function getInitialConfidenceResetAnswers(): ConfidenceResetAnswers {
  return {
    weakConfidenceSituations: [],
    rankingOrder: confidenceRankedTruthItems.map((item) => item.key),
    rankingConfirmed: false,
    drainSources: [],
  };
}

export function isConfidenceResetStepComplete(
  step: ConfidenceResetStep,
  answers: ConfidenceResetAnswers,
) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  if (step.kind === "drag-rank") {
    return answers.rankingOrder.length === step.items.length && answers.rankingConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateConfidenceResetResult(
  answers: ConfidenceResetAnswers,
): ConfidenceResetResult {
  const initialBarrier = answers.initialBarrier ? initialBarrierSeverity[answers.initialBarrier] : undefined;
  const selfTrustDeficit =
    typeof answers.selfTrustStability === "number" ? clampScore(100 - answers.selfTrustStability) : undefined;
  const weakSituations =
    answers.weakConfidenceSituations.length > 0
      ? clampScore(
          average(answers.weakConfidenceSituations.map((item) => weakSituationSeverity[item])) * 0.72 +
            (answers.weakConfidenceSituations.length / 4) * 24,
        )
      : undefined;
  const confidencePattern = answers.confidencePattern ? confidencePatternSeverity[answers.confidencePattern] : undefined;
  const secondGuessing = answers.secondGuessingFrequency
    ? secondGuessingSeverity[answers.secondGuessingFrequency]
    : undefined;
  const rankedTruths = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const comparisonIntensity =
    typeof answers.comparisonIntensity === "number" ? clampScore(answers.comparisonIntensity) : undefined;
  const setbackResponse = answers.setbackResponse ? setbackResponseSeverity[answers.setbackResponse] : undefined;
  const perfectionPressure = answers.perfectionPressure
    ? perfectionPressureSeverity[answers.perfectionPressure]
    : undefined;
  const familiarStatement = answers.familiarStatement
    ? familiarStatementSeverity[answers.familiarStatement]
    : undefined;
  const recoveryDeficit =
    typeof answers.recoveryEase === "number" ? clampScore(100 - answers.recoveryEase) : undefined;
  const drainSources =
    answers.drainSources.length > 0
      ? clampScore(
          average(answers.drainSources.map((item) => drainSourceSeverity[item])) * 0.72 +
            (answers.drainSources.length / 3) * 18,
        )
      : undefined;
  const decisionQualityImpact =
    typeof answers.decisionQualityImpact === "number" ? clampScore(answers.decisionQualityImpact) : undefined;
  const visibilityImpact =
    typeof answers.visibilityImpact === "number" ? clampScore(answers.visibilityImpact) : undefined;
  const followThroughImpact =
    typeof answers.followThroughImpact === "number" ? clampScore(answers.followThroughImpact) : undefined;
  const confidenceImpact =
    typeof decisionQualityImpact === "number" &&
    typeof visibilityImpact === "number" &&
    typeof followThroughImpact === "number"
      ? clampScore((decisionQualityImpact + visibilityImpact + followThroughImpact) / 3)
      : undefined;
  const breakdownZone = answers.breakdownZone ? breakdownZoneSeverity[answers.breakdownZone] : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: initialBarrier, weight: scoringWeights.initialBarrier },
    { value: selfTrustDeficit, weight: scoringWeights.selfTrustStability },
    { value: weakSituations, weight: scoringWeights.weakSituations },
    { value: confidencePattern, weight: scoringWeights.confidencePattern },
    { value: secondGuessing, weight: scoringWeights.secondGuessingFrequency },
    { value: rankedTruths, weight: scoringWeights.rankedTruths },
    { value: comparisonIntensity, weight: scoringWeights.comparisonIntensity },
    { value: setbackResponse, weight: scoringWeights.setbackResponse },
    { value: perfectionPressure, weight: scoringWeights.perfectionPressure },
    { value: familiarStatement, weight: scoringWeights.familiarStatement },
    { value: recoveryDeficit, weight: scoringWeights.recoveryEase },
    { value: drainSources, weight: scoringWeights.drainSources },
    { value: confidenceImpact, weight: scoringWeights.impact },
    { value: breakdownZone, weight: scoringWeights.breakdownZone },
    { value: finalPattern, weight: scoringWeights.finalPattern },
  ];

  const answeredWeight = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0),
    0,
  );
  const weightedTotal = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );
  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(score);
  const completionRatio = answeredWeight / 100;

  const drainScores = getDrainScores(answers);

  const dimensions: Record<ConfidenceDimensionKey, number> = {
    selfTrustStability: weightedAverage([
      { value: answers.selfTrustStability, weight: 0.42 },
      { value: typeof secondGuessing === "number" ? clampScore(100 - secondGuessing) : undefined, weight: 0.18 },
      { value: clampScore(100 - getDrainValue(drainScores, "second-guessing")), weight: 0.12 },
      { value: typeof confidenceImpact === "number" ? clampScore(100 - confidenceImpact) : undefined, weight: 0.16 },
      { value: typeof answers.recoveryEase === "number" ? answers.recoveryEase : undefined, weight: 0.12 },
    ]),
    hesitationPressure: weightedAverage([
      {
        value:
          answers.initialBarrier === "hesitation"
            ? 84
            : answers.initialBarrier === "need-more-certainty"
              ? 82
              : answers.initialBarrier === "second-guessing"
                ? 72
                : answers.initialBarrier === "fear-of-being-wrong"
                  ? 70
                  : undefined,
        weight: 0.24,
      },
      { value: secondGuessing, weight: 0.22 },
      { value: rankedTruths, weight: 0.18 },
      { value: answers.breakdownZone === "decisions" ? 88 : answers.breakdownZone === "work" ? 64 : undefined, weight: 0.14 },
      { value: answers.familiarStatement === "wait-too-long-to-feel-ready" ? 86 : answers.familiarStatement === "move-but-doubt-follows" ? 68 : undefined, weight: 0.12 },
      { value: clampScore(getDrainValue(drainScores, "second-guessing") * 0.84), weight: 0.1 },
    ]),
    comparisonPerfectionDrag: weightedAverage([
      { value: comparisonIntensity, weight: 0.28 },
      { value: perfectionPressure, weight: 0.28 },
      { value: getDrainValue(drainScores, "comparison"), weight: 0.14 },
      { value: getDrainValue(drainScores, "perfectionism"), weight: 0.14 },
      { value: getDrainValue(drainScores, "visibility-pressure"), weight: 0.16 },
    ]),
    recoveryStrength: weightedAverage([
      { value: answers.recoveryEase, weight: 0.42 },
      { value: answers.setbackResponse ? setbackRecoveryStrength[answers.setbackResponse] : undefined, weight: 0.2 },
      { value: clampScore(100 - getDrainValue(drainScores, "slow-recovery-after-mistakes")), weight: 0.18 },
      { value: typeof confidenceImpact === "number" ? clampScore(100 - confidenceImpact) : undefined, weight: 0.1 },
      {
        value:
          answers.finalPattern === "mostly-steady-contextual"
            ? 74
            : answers.finalPattern === "need-self-trust-reset-not-motivation"
              ? 28
              : answers.finalPattern === "hesitation-and-second-guessing-costly"
                ? 34
                : undefined,
        weight: 0.1,
      },
    ]),
  };

  const primaryConfidenceDrain = drainScores[0] ?? confidenceDrains[0];
  const mainBreakdownZone = confidenceZones.find((zone) => zone.key === answers.breakdownZone) ?? confidenceZones[0];
  const strongestStableTrait = getStrongestStableTrait(answers, dimensions, score);
  const mostUsefulResetPriority = getResetPriority(answers, drainScores, dimensions);
  const likelyNextConfidenceGain = getNextGainArea(mostUsefulResetPriority, mainBreakdownZone);

  const impactMetrics: ConfidenceImpactMetric[] = impactMetricDefinitions.map((metric) => ({
    ...metric,
    value:
      metric.key === "decision-quality"
        ? decisionQualityImpact ?? 34
        : metric.key === "visibility"
          ? visibilityImpact ?? 36
          : followThroughImpact ?? 32,
  }));

  const previewMetrics: ConfidencePreviewMetric[] = [
    {
      label: "Self-trust stability",
      value: dimensions.selfTrustStability,
      accent: "#67E8F9",
    },
    {
      label: "Hesitation pressure",
      value: dimensions.hesitationPressure,
      accent: "#FCD34D",
    },
    {
      label: "Comparison / perfection drag",
      value: dimensions.comparisonPerfectionDrag,
      accent: "#FB7185",
    },
    {
      label: "Recovery strength",
      value: dimensions.recoveryStrength,
      accent: "#6EE7B7",
    },
  ];

  const selfTrustLevel = dimensions.selfTrustStability;
  const hesitationLoad = dimensions.hesitationPressure;
  const recoveryPotential = weightedAverage([
    { value: dimensions.recoveryStrength, weight: 0.65 },
    { value: clampScore(100 - score), weight: 0.35 },
  ]);
  const drainIntensity = clampScore(average(drainScores.slice(0, 3).map((drain) => drain.value)));

  const confidenceLabel = `Your pattern suggests that confidence is being interrupted less by lack of ability and more by ${primaryConfidenceDrain.label.toLowerCase()} and how quickly self-trust drops around ${mainBreakdownZone.label.toLowerCase()}.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The dominant drain appears to be ${primaryConfidenceDrain.label.toLowerCase()}, which means the leak is likely happening through ${primaryConfidenceDrain.description.toLowerCase()}`;
  const resetInsight = `${band.resetLead} The first reset is usually ${mostUsefulResetPriority.label.toLowerCase()}, especially in ${mainBreakdownZone.label.toLowerCase()} where the strain is most active.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryConfidenceDrain,
    strongestStableTrait,
    mainBreakdownZone,
    mostUsefulResetPriority,
    likelyNextConfidenceGain,
    drainSources: drainScores,
    impactMetrics,
    previewMetrics,
    confidenceLabel,
    interpretation,
    standout,
    resetInsight,
    selfTrustLevel,
    hesitationLoad,
    recoveryPotential,
    drainIntensity,
  };
}

export const heroPreviewResult = calculateConfidenceResetResult({
  initialBarrier: "need-more-certainty",
  selfTrustStability: 54,
  weakConfidenceSituations: ["making-decisions", "visible-work", "comparison", "mistakes"],
  confidencePattern: "good-externally-shaky-internally",
  secondGuessingFrequency: "often",
  rankingOrder: [
    "hesitate-before-acting",
    "lose-trust-under-pressure",
    "need-too-much-certainty-to-move",
    "mistakes-hit-harder-than-they-should",
    "compare-too-quickly",
  ],
  rankingConfirmed: true,
  comparisonIntensity: 68,
  setbackResponse: "lose-momentum",
  perfectionPressure: "high",
  familiarStatement: "know-more-than-i-trust",
  recoveryEase: 40,
  drainSources: ["overthinking", "perfectionism", "pressure-to-perform"],
  decisionQualityImpact: 62,
  visibilityImpact: 74,
  followThroughImpact: 58,
  breakdownZone: "visibility-performance",
  finalPattern: "know-more-than-i-trust-under-pressure",
});
