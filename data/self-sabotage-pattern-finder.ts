import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type MomentumResponseValue =
  | "stay-steady"
  | "slow-down"
  | "overcomplicate"
  | "hesitate-delay"
  | "pull-back";

export type DerailmentContextValue =
  | "visibility"
  | "evaluation"
  | "uncertainty"
  | "mistakes"
  | "success-getting-close"
  | "higher-expectations"
  | "comparison"
  | "pressure"
  | "commitment"
  | "follow-through-over-time";

export type ProgressPatternValue =
  | "steady-path"
  | "strong-start-then-slowdown"
  | "almost-there-then-avoidance"
  | "repeated-stop-start-cycles"
  | "progress-rises-then-self-doubt";

export type PreDerailmentStateValue =
  | "start-doubting-myself"
  | "pressure-feels-bigger"
  | "become-less-clear"
  | "feel-exposed-or-judged"
  | "lose-emotional-energy";

export type RankedTruthKey =
  | "hesitate-when-real"
  | "overthink-instead-of-finishing"
  | "inconsistent-after-good-start"
  | "pull-back-when-visibility-increases"
  | "create-friction-near-finish-line";

export type PerfectionPressureValue =
  | "very-low"
  | "low"
  | "moderate"
  | "high"
  | "very-high";

export type PostBreakResponseValue =
  | "reset-and-continue"
  | "delay-and-come-back"
  | "analysis-instead-of-action"
  | "avoid-the-next-step"
  | "disconnect-from-goal";

export type ReinforcementDriverValue =
  | "fear-of-exposure"
  | "uncertainty"
  | "perfection-pressure"
  | "success-discomfort"
  | "disappointment-in-myself";

export type ContextZoneValue =
  | "work-projects"
  | "visibility-performance"
  | "relationships"
  | "self-expression"
  | "decisions"
  | "finishing-what-i-start";

export type AwarenessValue =
  | "very-aware"
  | "mostly-aware"
  | "mixed"
  | "barely-aware"
  | "only-later";

export type SequenceKey =
  | "progress-starts"
  | "pressure-rises"
  | "doubt-avoidance-increases"
  | "momentum-breaks"
  | "distance-from-goal";

export type FinalPatternValue =
  | "predictable-situations"
  | "internal-pressure-more-than-ability"
  | "often-get-close-then-stall"
  | "delay-complexity-withdrawal"
  | "need-help-at-the-break-point";

export type SelfSabotageDimensionKey =
  | "triggerProximity"
  | "progressFragility"
  | "pressureBasedAvoidance"
  | "followThroughDisruption";

export type SelfSabotageBandKey =
  | "low-interruption-pattern"
  | "mild-progress-disruption"
  | "recurring-self-sabotage-cycle"
  | "high-derailment-pattern"
  | "strong-progress-break-system";

export type DerailmentTriggerKey =
  | "exposure"
  | "uncertainty"
  | "perfection-pressure"
  | "self-doubt"
  | "success-discomfort"
  | "disappointment-fear-of-failure";

export type InterruptionPointKey =
  | "when-stakes-rise"
  | "after-a-strong-start"
  | "as-visibility-increases"
  | "when-pressure-outruns-clarity"
  | "near-the-finish-line";

export type HiddenCostKey =
  | "confidence-drop"
  | "momentum-loss"
  | "inconsistency"
  | "distance-from-goals";

export type InterruptionStrategyKey =
  | "catch-the-transition-earlier"
  | "simplify-the-next-step"
  | "separate-progress-from-exposure"
  | "lower-the-perfection-load"
  | "repair-self-trust-after-the-break";

export type SelfSabotageChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type SelfSabotageAnswers = {
  momentumResponse?: MomentumResponseValue;
  tractionLossFrequency?: number;
  derailmentContexts: DerailmentContextValue[];
  progressPattern?: ProgressPatternValue;
  preDerailmentState?: PreDerailmentStateValue;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  fearOfBeingWrong?: number;
  perfectionPressure?: PerfectionPressureValue;
  postBreakResponse?: PostBreakResponseValue;
  confidenceDrop?: number;
  consistencyDrop?: number;
  followThroughDrop?: number;
  reinforcementDriver?: ReinforcementDriverValue;
  hardestHitZone?: ContextZoneValue;
  awarenessTiming?: AwarenessValue;
  sequenceOrder: SequenceKey[];
  sequenceConfirmed: boolean;
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
  field:
    | "momentumResponse"
    | "preDerailmentState"
    | "postBreakResponse"
    | "reinforcementDriver"
    | "finalPattern";
  options: SelfSabotageChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "perfectionPressure" | "awarenessTiming";
  options: SelfSabotageChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "tractionLossFrequency" | "fearOfBeingWrong";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "derailmentContexts";
  limit: number;
  options: SelfSabotageChoiceOption[];
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
    key: "confidenceDrop" | "consistencyDrop" | "followThroughDrop";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "progressPattern" | "hardestHitZone";
  options: SelfSabotageChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type SelfSabotageStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type SelfSabotageDimension = {
  key: SelfSabotageDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type SelfSabotageBand = {
  key: SelfSabotageBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  breakLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type DerailmentTrigger = {
  key: DerailmentTriggerKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type DerailmentTriggerScore = DerailmentTrigger & {
  value: number;
};

export type InterruptionPoint = {
  key: InterruptionPointKey;
  label: string;
  description: string;
  accent: string;
};

export type HiddenCostArea = {
  key: HiddenCostKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type InterruptionStrategy = {
  key: InterruptionStrategyKey;
  label: string;
  description: string;
  accent: string;
};

export type PreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type ProgressStage = {
  label: string;
  value: number;
  accent: string;
  kind: "start" | "momentum" | "pressure" | "break" | "drift";
};

export type RelatedSelfSabotageTool = {
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

export type SelfSabotageResult = {
  score: number;
  completionRatio: number;
  band: SelfSabotageBand;
  dimensions: Record<SelfSabotageDimensionKey, number>;
  primaryDerailmentTrigger: DerailmentTrigger;
  mostCommonInterruptionPoint: InterruptionPoint;
  strongestHiddenCost: HiddenCostArea;
  mostUsefulInterruptionStrategy: InterruptionStrategy;
  triggerScores: DerailmentTriggerScore[];
  costMetrics: HiddenCostArea[];
  previewMetrics: PreviewMetric[];
  progressStages: ProgressStage[];
  sabotageLabel: string;
  interpretation: string;
  standout: string;
  breakInsight: string;
  momentumLevel: number;
  interruptionTiming: number;
  triggerPressure: number;
  avoidanceTendency: number;
  followThroughStability: number;
  restartFlex: number;
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
  key: SelfSabotageDimensionKey;
  paragraphs: string[];
};

export const selfSabotageMetadata = {
  eyebrow: "PROGRESS PATTERN TOOL",
  title: "Self-Sabotage Pattern Finder",
  description:
    "See where progress keeps breaking, what pressure point interrupts momentum, and why the pattern keeps returning even when you care about the goal.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const selfSabotageDimensions: SelfSabotageDimension[] = [
  {
    key: "triggerProximity",
    label: "Trigger Proximity",
    description: "How quickly pressure, exposure, or self-doubt start clustering around forward movement once it begins to matter more.",
    icon: "signal",
    accent: "#FB7185",
  },
  {
    key: "progressFragility",
    label: "Progress Fragility",
    description: "How easily momentum loses traction after a good start, a meaningful opportunity, or a more visible stretch of progress.",
    icon: "trend",
    accent: "#93C5FD",
  },
  {
    key: "pressureBasedAvoidance",
    label: "Pressure-Based Avoidance",
    description: "How strongly pressure turns into delay, overcomplication, distancing, or withdrawal instead of the next concrete step.",
    icon: "pattern",
    accent: "#FCD34D",
  },
  {
    key: "followThroughDisruption",
    label: "Follow-Through Disruption",
    description: "How much the break affects confidence, consistency, completion, and your ability to stay connected to the goal afterward.",
    icon: "graph",
    accent: "#C4B5FD",
  },
];

export const selfSabotageBands: SelfSabotageBand[] = [
  {
    key: "low-interruption-pattern",
    min: 0,
    max: 24,
    title: "Low Interruption Pattern",
    descriptor: "Forward movement usually holds, even when pressure rises or the goal becomes more real.",
    summary:
      "This usually means your system can absorb a meaningful amount of pressure without turning it into a full derailment pattern. You may still slow down occasionally, but the break is not strongly running the process.",
    interpretation:
      "A low score does not mean progress is always easy. It means hesitation, visibility pressure, or uncertainty are not consistently overriding momentum once it starts. The system still has enough room to reorient and continue.",
    standoutLead: "What stands out most is continuity.",
    breakLead: "The break stays smaller because pressure is not regularly turning into a larger internal derailment sequence.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-progress-disruption",
    min: 25,
    max: 44,
    title: "Mild Progress Disruption",
    descriptor: "The pattern appears in certain contexts, especially when stakes, visibility, or uncertainty rise.",
    summary:
      "This suggests progress is not broadly collapsing, but there are clear moments where movement becomes more fragile than it needs to be. You may slow down, complicate the next step, or briefly distance once the goal starts to matter more.",
    interpretation:
      "At this level, the derailment often looks subtle from the outside. It may show up as delay, tightening, or extra friction rather than obvious avoidance. The useful question is not whether the pattern exists, but where it becomes active first.",
    standoutLead: "The system is interrupting movement selectively, not randomly.",
    breakLead: "The break point tends to show up at predictable transitions, not because the goal is wrong, but because the pressure around it changes.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "recurring-self-sabotage-cycle",
    min: 45,
    max: 64,
    title: "Recurring Self-Sabotage Cycle",
    descriptor: "Progress is repeatedly meeting an internal interruption point once exposure, uncertainty, or follow-through pressure builds.",
    summary:
      "This result usually means the issue is no longer a one-off delay. There is a repeating process where movement starts, pressure gathers, and the system shifts into slowing, distancing, or creating new friction instead of carrying momentum through.",
    interpretation:
      "The important insight here is that the pattern is structured. That makes it workable. Self-sabotage at this level is often less about laziness and more about the exact point where progress starts to feel emotionally expensive.",
    standoutLead: "The clearest signal is recurrence.",
    breakLead: "The break tends to happen because pressure is growing faster than your system can stay connected to the next step.",
    gradientFrom: "#C4B5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(196, 181, 253, 0.16)",
  },
  {
    key: "high-derailment-pattern",
    min: 65,
    max: 84,
    title: "High Derailment Pattern",
    descriptor: "The interruption point is strong enough to regularly distort momentum, increase avoidance, and weaken follow-through once progress gets real.",
    summary:
      "This usually means the system is not only getting interrupted, but reorganizing around the interruption. Progress may start well, but once visibility, expectations, or the reality of completion rise, the pattern begins to take over the flow.",
    interpretation:
      "At this level, the problem is rarely lack of ability. The bigger problem is that forward motion is becoming emotionally heavier precisely when more steadiness is needed. That is why the pattern can feel so confusing and discouraging.",
    standoutLead: "The strongest feature is derailment force.",
    breakLead: "The first crack often appears before the outside can see it: momentum tightens, clarity drops, or avoidance starts getting rationalized as something else.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.18)",
  },
  {
    key: "strong-progress-break-system",
    min: 85,
    max: 100,
    title: "Strong Progress Break System",
    descriptor: "The derailment pattern is functioning like a reliable internal break system once progress becomes visible, consequential, or emotionally charged.",
    summary:
      "This suggests self-sabotage is no longer an occasional interruption. It has become a stronger internal process that repeatedly breaks momentum near meaningful progress, often through overcomplication, delay, distancing, or disconnection.",
    interpretation:
      "At this level, many people say the pattern feels almost built in. The reason it repeats is not because you do not care. It is because the system has learned to protect itself by interrupting the very movement that makes the stakes feel more real.",
    standoutLead: "The heaviest signal here is system strength.",
    breakLead: "The break is usually beginning earlier than it looks, with pressure and avoidance joining the process before the outer stall becomes obvious.",
    gradientFrom: "#FB7185",
    gradientTo: "#FDA4AF",
    glow: "rgba(253, 164, 175, 0.18)",
  },
];

const momentumResponseOptions: SelfSabotageChoiceOption[] = [
  {
    value: "stay-steady",
    marker: "A",
    label: "I stay fairly steady",
    description: "Pressure may rise, but it does not quickly reorganize the whole process.",
  },
  {
    value: "slow-down",
    marker: "B",
    label: "I slow down",
    description: "Momentum starts softening as the goal becomes more real or consequential.",
  },
  {
    value: "overcomplicate",
    marker: "C",
    label: "I overcomplicate",
    description: "More moving pieces, more standards, and more thought start replacing simple next-step movement.",
  },
  {
    value: "hesitate-delay",
    marker: "D",
    label: "I hesitate or delay",
    description: "The next step becomes harder to enter even when you still care about the goal.",
  },
  {
    value: "pull-back",
    marker: "E",
    label: "I pull back from it",
    description: "Distance starts creating relief, even though it also costs momentum.",
  },
];

const derailmentContextOptions: SelfSabotageChoiceOption[] = [
  { value: "visibility", label: "Visibility" },
  { value: "evaluation", label: "Evaluation" },
  { value: "uncertainty", label: "Uncertainty" },
  { value: "mistakes", label: "Mistakes" },
  { value: "success-getting-close", label: "Success getting close" },
  { value: "higher-expectations", label: "Higher expectations" },
  { value: "comparison", label: "Comparison" },
  { value: "pressure", label: "Pressure" },
  { value: "commitment", label: "Commitment" },
  { value: "follow-through-over-time", label: "Follow-through over time" },
];

const progressPatternOptions: SelfSabotageChoiceOption[] = [
  {
    value: "steady-path",
    marker: "A",
    label: "Steady path",
    description: "Movement stays relatively consistent even as the stakes rise.",
  },
  {
    value: "strong-start-then-slowdown",
    marker: "B",
    label: "Strong start then slowdown",
    description: "Early momentum is available, but something shifts once it has to keep going.",
  },
  {
    value: "almost-there-then-avoidance",
    marker: "C",
    label: "Almost there then avoidance",
    description: "The closer progress gets to becoming real, the more distance starts looking appealing.",
  },
  {
    value: "repeated-stop-start-cycles",
    marker: "D",
    label: "Repeated stop-start cycles",
    description: "You move, then interrupt, then restart, then lose traction again.",
  },
  {
    value: "progress-rises-then-self-doubt",
    marker: "E",
    label: "Progress rises, then self-doubt interrupts it",
    description: "The break is less about laziness and more about what happens when progress triggers inner pressure.",
  },
];

const preDerailmentOptions: SelfSabotageChoiceOption[] = [
  {
    value: "start-doubting-myself",
    marker: "A",
    label: "I start doubting myself",
    description: "Trust weakens before action has fully turned into progress.",
  },
  {
    value: "pressure-feels-bigger",
    marker: "B",
    label: "The pressure suddenly feels bigger",
    description: "The task becomes emotionally heavier than the step itself seems to justify.",
  },
  {
    value: "become-less-clear",
    marker: "C",
    label: "I become less clear",
    description: "Clarity drops and complexity starts multiplying around the next move.",
  },
  {
    value: "feel-exposed-or-judged",
    marker: "D",
    label: "I feel exposed or judged",
    description: "Visibility becomes part of the process, and the system starts protecting against it.",
  },
  {
    value: "lose-emotional-energy",
    marker: "E",
    label: "I lose emotional energy for it",
    description: "Momentum fades because the inside starts disconnecting before the outside fully stalls.",
  },
];

export const sabotageRankingItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "hesitate-when-real", label: "I hesitate when something becomes real" },
  { key: "overthink-instead-of-finishing", label: "I overthink and delay instead of finishing" },
  { key: "inconsistent-after-good-start", label: "I become inconsistent after a good start" },
  { key: "pull-back-when-visibility-increases", label: "I pull back when visibility increases" },
  { key: "create-friction-near-finish-line", label: "I create extra friction near the finish line" },
];

const perfectionPressureOptions: SelfSabotageChoiceOption[] = [
  { value: "very-low", label: "Very low" },
  { value: "low", label: "Low" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High" },
  { value: "very-high", label: "Very high" },
];

const postBreakOptions: SelfSabotageChoiceOption[] = [
  {
    value: "reset-and-continue",
    marker: "A",
    label: "I reset and continue",
    description: "The break is noticeable, but it does not take over the whole process.",
  },
  {
    value: "delay-and-come-back",
    marker: "B",
    label: "I delay and tell myself I'll come back",
    description: "The system buys temporary relief through postponement.",
  },
  {
    value: "analysis-instead-of-action",
    marker: "C",
    label: "I shift into analysis instead of action",
    description: "Thinking expands while movement contracts.",
  },
  {
    value: "avoid-the-next-step",
    marker: "D",
    label: "I avoid the next step",
    description: "The very next move becomes the hardest thing to re-enter.",
  },
  {
    value: "disconnect-from-goal",
    marker: "E",
    label: "I disconnect from the goal for a while",
    description: "Distance creates relief, but it also lowers continuity and trust.",
  },
];

const reinforcementDriverOptions: SelfSabotageChoiceOption[] = [
  { value: "fear-of-exposure", marker: "A", label: "Fear of exposure" },
  { value: "uncertainty", marker: "B", label: "Uncertainty" },
  { value: "perfection-pressure", marker: "C", label: "Perfection pressure" },
  { value: "success-discomfort", marker: "D", label: "Success discomfort" },
  { value: "disappointment-in-myself", marker: "E", label: "Disappointment in myself" },
];

const contextZoneOptions: SelfSabotageChoiceOption[] = [
  {
    value: "work-projects",
    marker: "W",
    label: "Work / projects",
    description: "The break tends to show up around output, delivery, ownership, or professional stakes.",
  },
  {
    value: "visibility-performance",
    marker: "V",
    label: "Visibility / performance",
    description: "The interruption gets stronger when you are being seen, evaluated, or asked to perform.",
  },
  {
    value: "relationships",
    marker: "R",
    label: "Relationships",
    description: "Follow-through or honesty breaks more easily when relational stakes become emotionally real.",
  },
  {
    value: "self-expression",
    marker: "S",
    label: "Self-expression",
    description: "The derailment appears around saying, showing, or publishing what feels most personally yours.",
  },
  {
    value: "decisions",
    marker: "D",
    label: "Decisions",
    description: "The break happens when commitment or choice starts carrying irreversible weight.",
  },
  {
    value: "finishing-what-i-start",
    marker: "F",
    label: "Finishing what I start",
    description: "The largest disruption appears when the process moves out of beginning and into completion.",
  },
];

const awarenessOptions: SelfSabotageChoiceOption[] = [
  { value: "very-aware", label: "Very aware" },
  { value: "mostly-aware", label: "Mostly aware" },
  { value: "mixed", label: "Mixed" },
  { value: "barely-aware", label: "Barely aware" },
  { value: "only-later", label: "Usually only later" },
];

const finalPatternOptions: SelfSabotageChoiceOption[] = [
  {
    value: "predictable-situations",
    marker: "A",
    label: "I interrupt progress in a few predictable situations",
  },
  {
    value: "internal-pressure-more-than-ability",
    marker: "B",
    label: "I lose traction more from internal pressure than lack of ability",
  },
  {
    value: "often-get-close-then-stall",
    marker: "C",
    label: "I often get close, then stall",
  },
  {
    value: "delay-complexity-withdrawal",
    marker: "D",
    label: "My sabotage looks like delay, complexity, or withdrawal rather than obvious quitting",
  },
  {
    value: "need-help-at-the-break-point",
    marker: "E",
    label: "I need help at the exact point the pattern breaks, not just before starting",
  },
];

export const sabotageSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "progress-starts", label: "progress starts" },
  { key: "pressure-rises", label: "pressure rises" },
  { key: "doubt-avoidance-increases", label: "doubt / avoidance increases" },
  { key: "momentum-breaks", label: "momentum breaks" },
  { key: "distance-from-goal", label: "I distance from the task or goal" },
];

export const selfSabotageSteps: SelfSabotageStep[] = [
  {
    id: "momentum-response",
    step: 1,
    kind: "scenario-choice",
    field: "momentumResponse",
    eyebrow: "Signal 1 · momentum change",
    question: "When something starts to matter more, what most often happens to your momentum?",
    hint: "Choose the earliest shift that usually appears once the stakes or visibility begin to rise.",
    options: momentumResponseOptions,
  },
  {
    id: "traction-loss-frequency",
    step: 2,
    kind: "slider",
    field: "tractionLossFrequency",
    eyebrow: "Signal 2 · traction loss",
    question: "How often do you get close to progress, then lose traction?",
    hint: "This is about how often momentum breaks once progress starts to become meaningful.",
    label: "Near-progress traction loss",
    minLabel: "Hardly ever",
    maxLabel: "Very often",
  },
  {
    id: "derailment-contexts",
    step: 3,
    kind: "multi-select",
    field: "derailmentContexts",
    eyebrow: "Signal 3 · trigger contexts",
    question: "Which situations trigger derailment most often?",
    hint: "Choose the contexts where forward movement becomes heavier, more fragile, or easier to abandon.",
    limit: 4,
    options: derailmentContextOptions,
  },
  {
    id: "progress-pattern",
    step: 4,
    kind: "visual-choice",
    field: "progressPattern",
    eyebrow: "Signal 4 · path read",
    question: "Which visual progress pattern feels closest to your experience?",
    hint: "Treat this as a progress-shape reading rather than a label about your identity.",
    options: progressPatternOptions,
    columns: 2,
  },
  {
    id: "pre-derailment-state",
    step: 5,
    kind: "scenario-choice",
    field: "preDerailmentState",
    eyebrow: "Signal 5 · just before the break",
    question: "What most often happens right before the derailment point?",
    hint: "Choose the internal shift that usually arrives before the outer stall becomes obvious.",
    options: preDerailmentOptions,
  },
  {
    id: "ranked-truths",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Signal 6 · progress truths",
    question: "Rank these from most to least true about your pattern",
    hint: "Put the costliest interruption first, even if it looks subtle from the outside.",
    items: sabotageRankingItems,
  },
  {
    id: "fear-of-being-wrong",
    step: 7,
    kind: "slider",
    field: "fearOfBeingWrong",
    eyebrow: "Signal 7 · fear load",
    question: "How much does fear of being wrong affect follow-through?",
    hint: "Think about the pressure of error, exposure, or visible imperfection once the task becomes more real.",
    label: "Fear of being wrong",
    minLabel: "Very little",
    maxLabel: "A lot",
  },
  {
    id: "perfection-pressure",
    step: 8,
    kind: "segmented",
    field: "perfectionPressure",
    eyebrow: "Signal 8 · standards pressure",
    question: "How much does pressure to do it well or perfectly affect action?",
    hint: "This is about how much doing it well starts competing with simply doing the next step.",
    options: perfectionPressureOptions,
  },
  {
    id: "post-break-response",
    step: 9,
    kind: "scenario-choice",
    field: "postBreakResponse",
    eyebrow: "Signal 9 · after the break",
    question: "When progress breaks, what tends to happen next?",
    hint: "Choose the pattern that usually follows the interruption, not the version you wish happened more often.",
    options: postBreakOptions,
  },
  {
    id: "hidden-cost-sliders",
    step: 10,
    kind: "triple-slider",
    eyebrow: "Signal 10 · hidden cost",
    question: "How much do these get affected when self-sabotage appears?",
    hint: "Map the cost of the interruption after it has already started altering the process.",
    fields: [
      {
        key: "confidenceDrop",
        label: "Confidence drop",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "consistencyDrop",
        label: "Consistency drop",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "followThroughDrop",
        label: "Follow-through drop",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "reinforcement-driver",
    step: 11,
    kind: "scenario-choice",
    field: "reinforcementDriver",
    eyebrow: "Signal 11 · reinforcement driver",
    question: "What usually reinforces the pattern most?",
    hint: "Choose the pressure source that keeps the interruption alive once it begins.",
    options: reinforcementDriverOptions,
  },
  {
    id: "hardest-hit-zone",
    step: 12,
    kind: "visual-choice",
    field: "hardestHitZone",
    eyebrow: "Signal 12 · hardest-hit zone",
    question: "Where does sabotage hit hardest?",
    hint: "Choose the area where the pattern most reliably breaks continuity or follow-through.",
    options: contextZoneOptions,
    columns: 3,
  },
  {
    id: "awareness-timing",
    step: 13,
    kind: "segmented",
    field: "awarenessTiming",
    eyebrow: "Signal 13 · awareness timing",
    question: "How aware are you in the moment that the derailment is happening?",
    hint: "This is about whether you can catch the break while it is forming or only after it has already run.",
    options: awarenessOptions,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Signal 14 · interruption sequence",
    question: "Put these in the order they usually happen for you",
    hint: "Order the sequence as it tends to unfold in real time, not how you think it should unfold.",
    items: sabotageSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final read",
    question: "Which statement feels closest to your current pattern?",
    hint: "Use this final step to name the pattern as it actually behaves, especially around progress that matters.",
    options: finalPatternOptions,
  },
];

const momentumResponseSeverity: Record<MomentumResponseValue, number> = {
  "stay-steady": 16,
  "slow-down": 48,
  overcomplicate: 72,
  "hesitate-delay": 80,
  "pull-back": 88,
};

const derailmentContextSeverity: Record<DerailmentContextValue, number> = {
  visibility: 76,
  evaluation: 82,
  uncertainty: 70,
  mistakes: 68,
  "success-getting-close": 88,
  "higher-expectations": 80,
  comparison: 74,
  pressure: 72,
  commitment: 62,
  "follow-through-over-time": 78,
};

const progressPatternSeverity: Record<ProgressPatternValue, number> = {
  "steady-path": 18,
  "strong-start-then-slowdown": 54,
  "almost-there-then-avoidance": 88,
  "repeated-stop-start-cycles": 78,
  "progress-rises-then-self-doubt": 74,
};

const preDerailmentSeverity: Record<PreDerailmentStateValue, number> = {
  "start-doubting-myself": 78,
  "pressure-feels-bigger": 74,
  "become-less-clear": 66,
  "feel-exposed-or-judged": 82,
  "lose-emotional-energy": 70,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "hesitate-when-real": 76,
  "overthink-instead-of-finishing": 82,
  "inconsistent-after-good-start": 72,
  "pull-back-when-visibility-increases": 78,
  "create-friction-near-finish-line": 86,
};

const perfectionSeverity: Record<PerfectionPressureValue, number> = {
  "very-low": 18,
  low: 34,
  moderate: 58,
  high: 78,
  "very-high": 92,
};

const postBreakSeverity: Record<PostBreakResponseValue, number> = {
  "reset-and-continue": 16,
  "delay-and-come-back": 58,
  "analysis-instead-of-action": 78,
  "avoid-the-next-step": 84,
  "disconnect-from-goal": 88,
};

const reinforcementSeverity: Record<ReinforcementDriverValue, number> = {
  "fear-of-exposure": 80,
  uncertainty: 66,
  "perfection-pressure": 84,
  "success-discomfort": 86,
  "disappointment-in-myself": 74,
};

const contextZoneSeverity: Record<ContextZoneValue, number> = {
  "work-projects": 72,
  "visibility-performance": 84,
  relationships: 56,
  "self-expression": 80,
  decisions: 70,
  "finishing-what-i-start": 88,
};

const awarenessSeverity: Record<AwarenessValue, number> = {
  "very-aware": 18,
  "mostly-aware": 36,
  mixed: 54,
  "barely-aware": 80,
  "only-later": 92,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "predictable-situations": 42,
  "internal-pressure-more-than-ability": 74,
  "often-get-close-then-stall": 84,
  "delay-complexity-withdrawal": 78,
  "need-help-at-the-break-point": 86,
};

const rankingWeights = [30, 24, 20, 16, 10];
const expectedSequence: SequenceKey[] = [
  "progress-starts",
  "pressure-rises",
  "doubt-avoidance-increases",
  "momentum-breaks",
  "distance-from-goal",
];

const scoringWeights = {
  momentumResponse: 8,
  tractionLossFrequency: 10,
  derailmentContexts: 8,
  progressPattern: 6,
  preDerailmentState: 8,
  rankingOrder: 8,
  fearOfBeingWrong: 6,
  perfectionPressure: 6,
  postBreakResponse: 8,
  hiddenCost: 8,
  reinforcementDriver: 8,
  hardestHitZone: 4,
  awarenessTiming: 6,
  sequenceOrder: 4,
  finalPattern: 6,
} as const;

export const derailmentTriggers: DerailmentTrigger[] = [
  {
    key: "exposure",
    label: "Exposure",
    description: "The pattern is strongly tied to being seen, evaluated, or becoming more publicly measurable.",
    accent: "#FB7185",
    icon: "signal",
  },
  {
    key: "uncertainty",
    label: "Uncertainty",
    description: "Low clarity or open-endedness increases the pressure enough to start undermining action.",
    accent: "#93C5FD",
    icon: "pattern",
  },
  {
    key: "perfection-pressure",
    label: "Perfection pressure",
    description: "Standards tighten once progress matters, so movement starts competing with not doing it wrong.",
    accent: "#FCD34D",
    icon: "graph",
  },
  {
    key: "self-doubt",
    label: "Self-doubt",
    description: "Trust in your own judgment drops fast enough to interrupt momentum even when ability is already there.",
    accent: "#C4B5FD",
    icon: "trend",
  },
  {
    key: "success-discomfort",
    label: "Success discomfort",
    description: "The closer progress gets to becoming real, the more the system starts protecting against what that success would mean.",
    accent: "#67E8F9",
    icon: "insight",
  },
  {
    key: "disappointment-fear-of-failure",
    label: "Disappointment / fear of failure",
    description: "The break is reinforced by wanting to avoid the emotional hit of not meeting the standard or outcome.",
    accent: "#6EE7B7",
    icon: "structure",
  },
];

export const interruptionPoints: InterruptionPoint[] = [
  {
    key: "when-stakes-rise",
    label: "When the stakes rise",
    description: "The interruption begins once the work stops feeling casual and starts carrying more meaning, risk, or consequence.",
    accent: "#FB7185",
  },
  {
    key: "after-a-strong-start",
    label: "After a strong start",
    description: "Momentum is available early, but fragility appears once steady continuation matters more than beginning well.",
    accent: "#93C5FD",
  },
  {
    key: "as-visibility-increases",
    label: "As visibility increases",
    description: "The break point gets stronger once the process becomes more exposed, observed, or open to evaluation.",
    accent: "#67E8F9",
  },
  {
    key: "when-pressure-outruns-clarity",
    label: "When pressure outruns clarity",
    description: "The pattern intensifies when internal pressure grows faster than your sense of the next concrete move.",
    accent: "#FCD34D",
  },
  {
    key: "near-the-finish-line",
    label: "Near the finish line",
    description: "The system becomes most fragile when the work is close enough to completion for the outcome to feel real.",
    accent: "#C4B5FD",
  },
];

const interruptionStrategies: InterruptionStrategy[] = [
  {
    key: "catch-the-transition-earlier",
    label: "Catch the transition earlier",
    description: "The first intervention is noticing the shift from movement into internal pressure before the outer stall fully forms.",
    accent: "#93C5FD",
  },
  {
    key: "simplify-the-next-step",
    label: "Simplify the next step",
    description: "When the pattern overcomplicates, the most useful interruption is making the next move smaller, plainer, and less loaded.",
    accent: "#67E8F9",
  },
  {
    key: "separate-progress-from-exposure",
    label: "Separate progress from exposure",
    description: "The system steadies when forward movement stops meaning immediate visibility, judgment, or public measuring.",
    accent: "#FB7185",
  },
  {
    key: "lower-the-perfection-load",
    label: "Lower the perfection load",
    description: "Progress becomes more durable when doing it well no longer competes with simply doing the next necessary step.",
    accent: "#FCD34D",
  },
  {
    key: "repair-self-trust-after-the-break",
    label: "Repair self-trust after the break",
    description: "The fastest recovery often comes from shortening how long one interruption gets to define the meaning of the whole goal.",
    accent: "#C4B5FD",
  },
];

const hiddenCostTemplates: Omit<HiddenCostArea, "value">[] = [
  {
    key: "confidence-drop",
    label: "Confidence drop",
    description: "The interruption weakens trust in your ability right when the process most needs steadiness.",
    accent: "#93C5FD",
  },
  {
    key: "momentum-loss",
    label: "Momentum loss",
    description: "Forward movement becomes harder to hold, rebuild, or re-enter once the internal break has appeared.",
    accent: "#67E8F9",
  },
  {
    key: "inconsistency",
    label: "Inconsistency",
    description: "The pattern creates uneven follow-through even when effort and intention are still present.",
    accent: "#C4B5FD",
  },
  {
    key: "distance-from-goals",
    label: "Distance from goals",
    description: "The system creates relief by distancing from the task, but that distance slowly reduces connection to the goal itself.",
    accent: "#FB7185",
  },
];

export const relatedSelfSabotageTools: RelatedSelfSabotageTool[] = [
  {
    title: "Confidence Reset Audit",
    description: "See where self-trust is already thinning once hesitation, comparison, or post-mistake doubt enter the process.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "signal",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
  {
    title: "Focus Friction Audit",
    description: "Separate progress derailment from practical attention friction so you do not confuse sabotage with task design problems.",
    category: "Focus & Procrastination",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "focus-friction-audit", categorySlug: "focus-procrastination" }),
  },
  {
    title: "Inner Critic Intensity Scan",
    description: "Read whether a harsh, repetitive internal voice is one of the forces weakening momentum from the inside.",
    category: "Self-Esteem & Confidence",
    minutes: "5 min",
    icon: "insight",
    href: buildToolHref({ slug: "inner-critic-intensity-scan", categorySlug: "self-esteem-confidence" }),
  },
  {
    title: "Overthinking Loop Check",
    description: "See whether derailment is being reinforced by reflective loops that expand thought while action gets narrower.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
];

export const selfSabotageFaqItems: FaqItem[] = [
  {
    question: "What does a self-sabotage score actually mean?",
    answer:
      "It is a directional read of how strong your progress-interruption pattern appears to be right now. It measures where momentum breaks, how much pressure fuels the break, and what the cost looks like afterward. It is not a judgment of character or ability.",
  },
  {
    question: "Is self-sabotage the same as procrastination?",
    answer:
      "Not exactly. Procrastination is one possible surface behavior. Self-sabotage is broader: it includes slowing, overcomplicating, withdrawing, disconnecting, or stalling at the exact point progress becomes more meaningful or visible.",
  },
  {
    question: "Why does progress sometimes make me pull back?",
    answer:
      "Progress can increase exposure, evaluation, expectation, or the reality of success. If those feel emotionally expensive, the system may create a break not because you do not want the goal, but because getting closer to it changes the pressure around it.",
  },
  {
    question: "What is the difference between self-sabotage and burnout?",
    answer:
      "Burnout is more about depleted capacity, emotional exhaustion, and reduced recovery. Self-sabotage is more about the pattern that appears when momentum is present, but pressure, fear, or exposure interrupt follow-through once progress begins to matter.",
  },
  {
    question: "Why do I derail when something becomes visible or important?",
    answer:
      "Because visibility and importance often turn a task into something more emotionally loaded. The system starts treating the next move as higher risk, so the pattern may show up as tightening, analysis, delay, or distance instead of simple continuation.",
  },
  {
    question: "Can perfectionism create self-sabotage?",
    answer:
      "Yes. Perfection pressure often makes progress feel heavier than it is. The problem is not only wanting to do it well. It is when doing it well starts competing with doing it at all, especially once the work becomes more real or close to completion.",
  },
  {
    question: "Why do I recognize the pattern and still repeat it?",
    answer:
      "Because recognition and interruption are different skills. Many people understand the pattern in hindsight, but the break still happens in real time because pressure rises faster than awareness, trust, or a usable next step.",
  },
  {
    question: "How do I know where the break point happens?",
    answer:
      "Look for the smallest recurring shift just before the outer stall. It may be a drop in clarity, a rise in perfection pressure, more checking, more delay, or a sudden desire to back away. That pre-break shift is often more useful than the visible stall itself.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it after a meaningful stretch of work, after a visible interruption pattern repeats, or after you have tried a new way of handling the break point for a few weeks. It works best as a comparison tool rather than a daily score chase.",
  },
  {
    question: "What should I do if the interruption keeps happening near the finish line?",
    answer:
      "Treat the finish line as a real trigger rather than a proof of failure. Shrink the final step, reduce exposure where possible, and protect the moment when completion starts feeling emotionally loaded. The goal is to support the exact stretch where the system usually pulls away.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What this tool is actually detecting",
    paragraphs: [
      "This tool is not trying to decide whether you are disciplined enough, motivated enough, or serious enough. It is reading the structure of interruption. Specifically, it looks at what happens once progress is no longer just an idea and starts carrying more consequence, visibility, pressure, or emotional charge.",
      "That matters because self-sabotage is often misunderstood as a vague personality flaw. In practice, it is usually a process. Something begins to move. Pressure gathers. A familiar trigger point appears. Then momentum shifts into delay, overcomplication, withdrawal, or inconsistency. The pattern makes more sense when it is read as a sequence rather than a character verdict.",
    ],
  },
  {
    title: "Why the result matters beyond the total score",
    paragraphs: [
      "The overall score tells you how strong the derailment pattern appears right now, but the deeper value is in what sits underneath it. Is the break happening because visibility rises? Because perfection pressure becomes louder? Because the moment of progress activates self-doubt? Because uncertainty grows faster than clarity? Those are different systems, and they need different interventions.",
      "That is why this tool also identifies a primary derailment trigger, the most common interruption point, the hidden cost the pattern leaves behind, and a strategy that is more specific than just 'try harder.' When the break becomes precise, it usually becomes more workable.",
    ],
  },
  {
    title: "How to read the pattern without using it against yourself",
    paragraphs: [
      "If this result lands strongly, it does not mean you secretly do not want good things or that you cannot be trusted with progress. It means the system has learned to protect itself at a particular transition point. That protection may be expensive, but it usually has an emotional logic.",
      "Reading the pattern well means noticing where movement stops feeling like movement and starts feeling like risk. The goal is not to shame the interruption. It is to understand its timing well enough that you can support the process before the same break runs again.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "triggerProximity",
    paragraphs: [
      "Trigger Proximity measures how quickly progress starts attracting pressure once it becomes more visible, real, or consequential. Some systems can hold movement for a while before the pressure arrives. Others feel the activation almost immediately after momentum starts to matter.",
      "A higher score here usually means self-sabotage is not showing up late in the process. It is joining the process early. The trigger may look like evaluation, exposure, success getting close, or fear of being wrong, but the pattern is how quickly those forces attach themselves to movement.",
    ],
  },
  {
    key: "progressFragility",
    paragraphs: [
      "Progress Fragility measures how easily momentum loses traction. This is the difference between a process that can absorb wobble and continue, and a process where one rise in pressure starts breaking the line.",
      "When this score is higher, starting may not be the main problem. The problem is continuity. Progress feels possible until the system has to keep going through a more meaningful, exposed, or higher-stakes stretch.",
    ],
  },
  {
    key: "pressureBasedAvoidance",
    paragraphs: [
      "Pressure-Based Avoidance measures how strongly the system turns pressure into distance. That distance may not look like obvious quitting. It can look like extra planning, added complexity, temporary delay, shifting into analysis, or telling yourself you will come back later.",
      "This matters because many derailment patterns hide behind intelligent-sounding behavior. The outer behavior may look reasonable. The key question is whether the behavior is still serving the goal, or whether it is mainly reducing discomfort around the goal.",
    ],
  },
  {
    key: "followThroughDisruption",
    paragraphs: [
      "Follow-Through Disruption measures the cost after the break appears. This includes confidence drop, inconsistency, loss of momentum, and emotional distance from the goal once the interruption has already happened.",
      "Higher scores here usually mean the pattern is not ending with one delay. It is affecting what comes next. The system is paying for the interruption not only in the moment, but in how much harder it becomes to reconnect, restart, and trust yourself again afterward.",
    ],
  },
];

export const triggerBlocks: ContentBlock[] = [
  {
    title: "Visibility",
    body:
      "Progress often becomes emotionally heavier when being seen becomes part of the process. The work may not have changed, but exposure has.",
  },
  {
    title: "Evaluation",
    body:
      "The derailment can strengthen when the goal starts feeling measurable, judgeable, or open to external interpretation.",
  },
  {
    title: "Uncertainty",
    body:
      "Low clarity makes the next step feel less stable, and many people respond by slowing, complicating, or stepping out of motion altogether.",
  },
  {
    title: "Perfection pressure",
    body:
      "The pattern intensifies when doing it well begins to compete with doing it at all. Progress becomes emotionally expensive because the standard keeps rising.",
  },
  {
    title: "Success getting real",
    body:
      "Some derailments strengthen precisely because progress is working. The closer the outcome gets to becoming real, the more loaded it can feel.",
  },
  {
    title: "Fear of being wrong",
    body:
      "If visible error feels costly enough, the system may prefer hesitation, overthinking, or distance over the risk of moving imperfectly.",
  },
  {
    title: "Internal pressure after a good start",
    body:
      "A strong beginning can create its own load. Once expectations rise, continuity starts feeling heavier than the initial momentum felt.",
  },
];

export const interruptionBlocks: ContentBlock[] = [
  {
    title: "Catch the break earlier",
    body:
      "Look for the shift before the stall: more complexity, less clarity, more self-questioning, or a desire to step back. Early detection creates room the full derailment does not.",
  },
  {
    title: "Reduce the pressure load at the transition point",
    body:
      "The most useful intervention often happens where the process stops feeling simple and starts feeling emotionally consequential. Lowering the load there changes the whole pattern.",
  },
  {
    title: "Act before the story gets bigger",
    body:
      "Once the internal narrative expands, action narrows. A smaller move taken earlier often interrupts sabotage more effectively than a bigger move taken later.",
  },
  {
    title: "Simplify the next step",
    body:
      "When the pattern overcomplicates, the most stabilizing move is usually reducing the next action to something concrete enough that pressure has less space to take over.",
  },
  {
    title: "Separate progress from exposure",
    body:
      "If visibility is a strong trigger, it helps to distinguish movement from being seen. Not every next step needs to feel public in order to count as real progress.",
  },
  {
    title: "Repair self-trust after interruption",
    body:
      "A derailment costs more when one break becomes proof that the whole goal is failing. Faster repair reduces how much weight the interruption gets to carry.",
  },
];

export const selfSabotageStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Strong beginning, hidden break",
  quote:
    "This can look like someone who is good at starting. They can outline the project, gather momentum, and even feel genuinely excited. The trouble begins when the work starts becoming real. If someone might see it, if the deadline gets closer, or if the finish line starts carrying more consequence, movement slows down. More research appears. A better plan suddenly feels necessary. Sometimes the person simply drifts. From the outside it looks inconsistent. Inside, it often feels like some protective part shows up exactly where progress starts to matter most.",
  takeaway:
    "This is how self-sabotage often works in real life: not as obvious quitting, but as a quieter interruption pattern that appears precisely when forward movement starts feeling more exposed, important, or irreversible.",
  toneLabel: "Emotionally real",
  accent: "#FB7185",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by locating the transition point more than the end result. In many cases the system does not break at the obvious stall. It breaks earlier, when pressure first rises, clarity first drops, or the task first starts feeling more exposed than it did a moment before.",
  "The next helpful move is to make the interruption smaller and more visible. Shorten the window between feeling the internal shift and taking one concrete step anyway. Reduce the size of the next move. Lower the perfection load. If visibility is the trigger, protect movement from feeling instantly public. If fear of being wrong is the trigger, prioritize continuation over elegance.",
  "The longer-term goal is not perfect consistency. It is building a process that can survive the point where progress becomes emotionally meaningful. That usually means strengthening the exact stretch where the old pattern used to take over, not only getting better at beginnings.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Self-Sabotage Pattern Breaker",
  description:
    "A structured guide for identifying your derailment point earlier, reducing avoidance under pressure, and protecting momentum when progress starts to matter more.",
  buttonLabel: "View Next Step",
};

export const selfSabotagePatternFinderMetadata = {
  title: selfSabotageMetadata.title,
  description: selfSabotageMetadata.description,
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
  return selfSabotageBands.find((band) => score >= band.min && score <= band.max) ?? selfSabotageBands[0];
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

function getSequenceScore(order: SequenceKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalDistance = order.reduce((sum, key, index) => {
    const targetIndex = expectedSequence.indexOf(key);
    return sum + Math.abs(index - targetIndex);
  }, 0);
  const maxDistance = 12;
  return clampScore(100 - (totalDistance / maxDistance) * 100);
}

function getTriggerScores(answers: SelfSabotageAnswers): DerailmentTriggerScore[] {
  const tractionLoss = answers.tractionLossFrequency ?? 0;
  const fearWrong = answers.fearOfBeingWrong ?? 0;
  const perfection = answers.perfectionPressure ? perfectionSeverity[answers.perfectionPressure] : 0;
  const hiddenCost =
    typeof answers.confidenceDrop === "number" &&
    typeof answers.consistencyDrop === "number" &&
    typeof answers.followThroughDrop === "number"
      ? average([answers.confidenceDrop, answers.consistencyDrop, answers.followThroughDrop])
      : 0;

  const raw: Record<DerailmentTriggerKey, number[]> = {
    exposure: [],
    uncertainty: [],
    "perfection-pressure": [],
    "self-doubt": [],
    "success-discomfort": [],
    "disappointment-fear-of-failure": [],
  };

  if (answers.reinforcementDriver) {
    raw[
      answers.reinforcementDriver === "fear-of-exposure"
        ? "exposure"
        : answers.reinforcementDriver === "perfection-pressure"
          ? "perfection-pressure"
          : answers.reinforcementDriver === "success-discomfort"
            ? "success-discomfort"
            : answers.reinforcementDriver === "uncertainty"
              ? "uncertainty"
              : "disappointment-fear-of-failure"
    ].push(reinforcementSeverity[answers.reinforcementDriver]);
  }

  if (answers.preDerailmentState === "feel-exposed-or-judged") {
    raw.exposure.push(90);
  }
  if (answers.preDerailmentState === "become-less-clear") {
    raw.uncertainty.push(82);
  }
  if (answers.preDerailmentState === "start-doubting-myself") {
    raw["self-doubt"].push(88);
  }
  if (answers.preDerailmentState === "pressure-feels-bigger") {
    raw["perfection-pressure"].push(68);
    raw.exposure.push(58);
  }
  if (answers.preDerailmentState === "lose-emotional-energy") {
    raw["disappointment-fear-of-failure"].push(58);
  }

  if (answers.progressPattern === "almost-there-then-avoidance") {
    raw["success-discomfort"].push(92);
  }
  if (answers.progressPattern === "progress-rises-then-self-doubt") {
    raw["self-doubt"].push(88);
  }
  if (answers.progressPattern === "repeated-stop-start-cycles") {
    raw.uncertainty.push(60);
    raw["disappointment-fear-of-failure"].push(64);
  }
  if (answers.progressPattern === "strong-start-then-slowdown") {
    raw["perfection-pressure"].push(62);
  }

  if (answers.momentumResponse === "overcomplicate") {
    raw["perfection-pressure"].push(78);
  }
  if (answers.momentumResponse === "hesitate-delay") {
    raw["self-doubt"].push(74);
  }
  if (answers.momentumResponse === "pull-back") {
    raw.exposure.push(64);
    raw["success-discomfort"].push(66);
  }

  answers.derailmentContexts.forEach((context) => {
    if (context === "visibility" || context === "evaluation") {
      raw.exposure.push(86);
    }
    if (context === "uncertainty" || context === "commitment") {
      raw.uncertainty.push(78);
    }
    if (context === "higher-expectations" || context === "pressure") {
      raw["perfection-pressure"].push(74);
    }
    if (context === "comparison") {
      raw["self-doubt"].push(74);
    }
    if (context === "success-getting-close") {
      raw["success-discomfort"].push(92);
    }
    if (context === "mistakes" || context === "follow-through-over-time") {
      raw["disappointment-fear-of-failure"].push(70);
    }
  });

  if (answers.hardestHitZone === "visibility-performance" || answers.hardestHitZone === "self-expression") {
    raw.exposure.push(84);
  }
  if (answers.hardestHitZone === "finishing-what-i-start") {
    raw["success-discomfort"].push(80);
  }
  if (answers.hardestHitZone === "decisions") {
    raw.uncertainty.push(74);
  }
  if (answers.hardestHitZone === "work-projects") {
    raw["perfection-pressure"].push(64);
  }

  raw["self-doubt"].push(fearWrong * 0.72, hiddenCost * 0.32);
  raw["perfection-pressure"].push(perfection, fearWrong * 0.26);
  raw["disappointment-fear-of-failure"].push(hiddenCost * 0.52);
  raw.exposure.push(tractionLoss * 0.18);
  raw.uncertainty.push(tractionLoss * 0.2);
  raw["success-discomfort"].push(tractionLoss * 0.22);

  return derailmentTriggers
    .map((trigger) => ({
      ...trigger,
      value: clampScore(average(raw[trigger.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getInterruptionPointScores(answers: SelfSabotageAnswers) {
  const scores: Record<InterruptionPointKey, number[]> = {
    "when-stakes-rise": [],
    "after-a-strong-start": [],
    "as-visibility-increases": [],
    "when-pressure-outruns-clarity": [],
    "near-the-finish-line": [],
  };

  if (answers.momentumResponse && answers.momentumResponse !== "stay-steady") {
    scores["when-stakes-rise"].push(momentumResponseSeverity[answers.momentumResponse]);
  }

  if (answers.progressPattern === "strong-start-then-slowdown" || answers.progressPattern === "repeated-stop-start-cycles") {
    scores["after-a-strong-start"].push(progressPatternSeverity[answers.progressPattern]);
  }

  if (
    answers.derailmentContexts.some((item) => item === "visibility" || item === "evaluation") ||
    answers.preDerailmentState === "feel-exposed-or-judged" ||
    answers.hardestHitZone === "visibility-performance" ||
    answers.hardestHitZone === "self-expression"
  ) {
    scores["as-visibility-increases"].push(84);
  }

  if (
    answers.preDerailmentState === "become-less-clear" ||
    answers.preDerailmentState === "pressure-feels-bigger" ||
    answers.derailmentContexts.some((item) => item === "uncertainty" || item === "pressure")
  ) {
    scores["when-pressure-outruns-clarity"].push(82);
  }

  if (
    answers.progressPattern === "almost-there-then-avoidance" ||
    answers.hardestHitZone === "finishing-what-i-start" ||
    answers.finalPattern === "often-get-close-then-stall" ||
    answers.rankingOrder[0] === "create-friction-near-finish-line"
  ) {
    scores["near-the-finish-line"].push(90);
  }

  return interruptionPoints
    .map((point) => ({
      ...point,
      value: clampScore(average(scores[point.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getStrategy(
  dimensions: Record<SelfSabotageDimensionKey, number>,
  primaryTrigger: DerailmentTriggerScore,
  interruptionPoint: InterruptionPoint,
) {
  if (dimensions.triggerProximity >= 78) {
    return interruptionStrategies.find((item) => item.key === "catch-the-transition-earlier") ?? interruptionStrategies[0];
  }

  if (primaryTrigger.key === "perfection-pressure") {
    return interruptionStrategies.find((item) => item.key === "lower-the-perfection-load") ?? interruptionStrategies[0];
  }

  if (primaryTrigger.key === "exposure" || interruptionPoint.key === "as-visibility-increases") {
    return interruptionStrategies.find((item) => item.key === "separate-progress-from-exposure") ?? interruptionStrategies[0];
  }

  if (dimensions.progressFragility >= 72 || primaryTrigger.key === "uncertainty") {
    return interruptionStrategies.find((item) => item.key === "simplify-the-next-step") ?? interruptionStrategies[0];
  }

  return (
    interruptionStrategies.find((item) => item.key === "repair-self-trust-after-the-break") ??
    interruptionStrategies[0]
  );
}

export function getInitialSelfSabotageAnswers(): SelfSabotageAnswers {
  return {
    derailmentContexts: [],
    rankingOrder: sabotageRankingItems.map((item) => item.key),
    rankingConfirmed: false,
    sequenceOrder: sabotageSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isSelfSabotageStepComplete(step: SelfSabotageStep, answers: SelfSabotageAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  if (step.kind === "drag-rank") {
    return answers.rankingOrder.length === step.items.length && answers.rankingConfirmed;
  }

  if (step.kind === "sequence-order") {
    return answers.sequenceOrder.length === step.items.length && answers.sequenceConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateSelfSabotageResult(answers: SelfSabotageAnswers): SelfSabotageResult {
  const momentumResponse = answers.momentumResponse ? momentumResponseSeverity[answers.momentumResponse] : undefined;
  const tractionLoss =
    typeof answers.tractionLossFrequency === "number" ? clampScore(answers.tractionLossFrequency) : undefined;
  const derailmentContexts =
    answers.derailmentContexts.length > 0
      ? clampScore(
          average(answers.derailmentContexts.map((context) => derailmentContextSeverity[context])) * 0.76 +
            (answers.derailmentContexts.length / 4) * 18,
        )
      : undefined;
  const progressPattern = answers.progressPattern ? progressPatternSeverity[answers.progressPattern] : undefined;
  const preDerailment = answers.preDerailmentState
    ? preDerailmentSeverity[answers.preDerailmentState]
    : undefined;
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const fearOfBeingWrong =
    typeof answers.fearOfBeingWrong === "number" ? clampScore(answers.fearOfBeingWrong) : undefined;
  const perfectionPressure = answers.perfectionPressure ? perfectionSeverity[answers.perfectionPressure] : undefined;
  const postBreak = answers.postBreakResponse ? postBreakSeverity[answers.postBreakResponse] : undefined;
  const hiddenCostAverage =
    typeof answers.confidenceDrop === "number" &&
    typeof answers.consistencyDrop === "number" &&
    typeof answers.followThroughDrop === "number"
      ? clampScore((answers.confidenceDrop + answers.consistencyDrop + answers.followThroughDrop) / 3)
      : undefined;
  const reinforcementDriver = answers.reinforcementDriver
    ? reinforcementSeverity[answers.reinforcementDriver]
    : undefined;
  const hardestHitZone = answers.hardestHitZone ? contextZoneSeverity[answers.hardestHitZone] : undefined;
  const awarenessTiming = answers.awarenessTiming ? awarenessSeverity[answers.awarenessTiming] : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const weightedEntries = [
    { value: momentumResponse, weight: scoringWeights.momentumResponse },
    { value: tractionLoss, weight: scoringWeights.tractionLossFrequency },
    { value: derailmentContexts, weight: scoringWeights.derailmentContexts },
    { value: progressPattern, weight: scoringWeights.progressPattern },
    { value: preDerailment, weight: scoringWeights.preDerailmentState },
    { value: rankingScore, weight: scoringWeights.rankingOrder },
    { value: fearOfBeingWrong, weight: scoringWeights.fearOfBeingWrong },
    { value: perfectionPressure, weight: scoringWeights.perfectionPressure },
    { value: postBreak, weight: scoringWeights.postBreakResponse },
    { value: hiddenCostAverage, weight: scoringWeights.hiddenCost },
    { value: reinforcementDriver, weight: scoringWeights.reinforcementDriver },
    { value: hardestHitZone, weight: scoringWeights.hardestHitZone },
    { value: awarenessTiming, weight: scoringWeights.awarenessTiming },
    { value: sequenceOrder, weight: scoringWeights.sequenceOrder },
    { value: finalPattern, weight: scoringWeights.finalPattern },
  ];

  const answeredWeight = weightedEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0),
    0,
  );
  const weightedTotal = weightedEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );

  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(score);
  const completionRatio = answeredWeight / 100;

  const dimensions: Record<SelfSabotageDimensionKey, number> = {
    triggerProximity: weightedAverage([
      { value: momentumResponse, weight: 0.16 },
      { value: preDerailment, weight: 0.24 },
      { value: derailmentContexts, weight: 0.18 },
      { value: reinforcementDriver, weight: 0.16 },
      { value: awarenessTiming, weight: 0.12 },
      { value: sequenceOrder, weight: 0.14 },
    ]),
    progressFragility: weightedAverage([
      { value: tractionLoss, weight: 0.26 },
      { value: progressPattern, weight: 0.22 },
      { value: rankingScore, weight: 0.16 },
      { value: postBreak, weight: 0.14 },
      { value: hardestHitZone, weight: 0.08 },
      { value: finalPattern, weight: 0.14 },
    ]),
    pressureBasedAvoidance: weightedAverage([
      { value: fearOfBeingWrong, weight: 0.18 },
      { value: perfectionPressure, weight: 0.2 },
      { value: preDerailment, weight: 0.16 },
      { value: postBreak, weight: 0.2 },
      { value: reinforcementDriver, weight: 0.12 },
      { value: finalPattern, weight: 0.14 },
    ]),
    followThroughDisruption: weightedAverage([
      { value: hiddenCostAverage, weight: 0.32 },
      { value: tractionLoss, weight: 0.16 },
      { value: postBreak, weight: 0.16 },
      { value: awarenessTiming, weight: 0.1 },
      { value: hardestHitZone, weight: 0.08 },
      { value: finalPattern, weight: 0.18 },
    ]),
  };

  const triggerScores = getTriggerScores(answers);
  const primaryDerailmentTrigger = triggerScores[0] ?? derailmentTriggers[0];
  const interruptionPointScores = getInterruptionPointScores(answers);
  const mostCommonInterruptionPoint = interruptionPointScores[0] ?? interruptionPoints[0];

  const momentumLoss = clampScore(
    average([
      answers.tractionLossFrequency ?? 42,
      answers.followThroughDrop ?? 44,
      postBreak ?? 52,
      progressPattern ?? 48,
    ]),
  );
  const distanceFromGoals = clampScore(
    average([
      answers.followThroughDrop ?? 42,
      answers.consistencyDrop ?? 40,
      answers.postBreakResponse === "disconnect-from-goal" ? 92 : answers.postBreakResponse === "avoid-the-next-step" ? 78 : 46,
      answers.finalPattern === "often-get-close-then-stall" ? 74 : 48,
    ]),
  );

  const costMetrics = [
    { ...hiddenCostTemplates[0], value: answers.confidenceDrop ?? 36 },
    { ...hiddenCostTemplates[1], value: momentumLoss },
    { ...hiddenCostTemplates[2], value: answers.consistencyDrop ?? 38 },
    { ...hiddenCostTemplates[3], value: distanceFromGoals },
  ].sort((left, right) => right.value - left.value);

  const strongestHiddenCost = costMetrics[0];
  const mostUsefulInterruptionStrategy = getStrategy(
    dimensions,
    primaryDerailmentTrigger,
    mostCommonInterruptionPoint,
  );

  const momentumLevel = clampScore(100 - dimensions.progressFragility * 0.62);
  const interruptionTiming = clampScore(
    weightedAverage([
      { value: dimensions.triggerProximity, weight: 0.52 },
      { value: mostCommonInterruptionPoint.key === "near-the-finish-line" ? 78 : 62, weight: 0.18 },
      { value: awarenessTiming, weight: 0.14 },
      { value: sequenceOrder, weight: 0.16 },
    ]),
  );
  const triggerPressure = clampScore(
    weightedAverage([
      { value: primaryDerailmentTrigger.value, weight: 0.46 },
      { value: perfectionPressure, weight: 0.16 },
      { value: fearOfBeingWrong, weight: 0.18 },
      { value: derailmentContexts, weight: 0.2 },
    ]),
  );
  const avoidanceTendency = clampScore(
    weightedAverage([
      { value: dimensions.pressureBasedAvoidance, weight: 0.58 },
      { value: postBreak, weight: 0.18 },
      { value: finalPattern, weight: 0.14 },
      { value: awarenessTiming, weight: 0.1 },
    ]),
  );
  const followThroughStability = clampScore(100 - dimensions.followThroughDisruption * 0.76);
  const restartFlex = clampScore(
    100 -
      average([
        answers.followThroughDrop ?? 50,
        awarenessTiming ?? 50,
        postBreak ?? 50,
      ]) *
        0.74,
  );

  const progressStages: ProgressStage[] = [
    { label: "Start", value: 24, accent: "#6EE7B7", kind: "start" },
    {
      label: "Momentum",
      value: clampScore(58 + momentumLevel * 0.24),
      accent: "#93C5FD",
      kind: "momentum",
    },
    {
      label: "Pressure point",
      value: clampScore(66 + triggerPressure * 0.16),
      accent: "#FCD34D",
      kind: "pressure",
    },
    {
      label: "Interruption",
      value: clampScore(52 - avoidanceTendency * 0.16),
      accent: "#FB7185",
      kind: "break",
    },
    {
      label: "Aftermath",
      value: clampScore(28 + followThroughStability * 0.18),
      accent: "#C4B5FD",
      kind: "drift",
    },
  ];

  const previewMetrics: PreviewMetric[] = [
    { label: "Momentum", value: momentumLevel, accent: "#93C5FD" },
    { label: "Interruption timing", value: interruptionTiming, accent: "#FCD34D" },
    { label: "Trigger pressure", value: triggerPressure, accent: "#FB7185" },
    { label: "Avoidance load", value: avoidanceTendency, accent: "#67E8F9" },
    { label: "Follow-through stability", value: followThroughStability, accent: "#C4B5FD" },
  ];

  const sabotageLabel =
    "Your pattern suggests that progress breaks less from lack of interest and more from how pressure, exposure, or self-doubt interact once movement starts to matter more.";
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The strongest driver currently looks like ${primaryDerailmentTrigger.label.toLowerCase()}, and the most common interruption point appears to be ${mostCommonInterruptionPoint.label.toLowerCase()}.`;
  const breakInsight = `${band.breakLead} The clearest hidden cost right now is ${strongestHiddenCost.label.toLowerCase()}, which means the interruption is changing more than your pace alone.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryDerailmentTrigger,
    mostCommonInterruptionPoint,
    strongestHiddenCost,
    mostUsefulInterruptionStrategy,
    triggerScores,
    costMetrics,
    previewMetrics,
    progressStages,
    sabotageLabel,
    interpretation,
    standout,
    breakInsight,
    momentumLevel,
    interruptionTiming,
    triggerPressure,
    avoidanceTendency,
    followThroughStability,
    restartFlex,
  };
}

export const heroPreviewResult = calculateSelfSabotageResult({
  momentumResponse: "overcomplicate",
  tractionLossFrequency: 78,
  derailmentContexts: ["visibility", "success-getting-close", "higher-expectations", "follow-through-over-time"],
  progressPattern: "almost-there-then-avoidance",
  preDerailmentState: "pressure-feels-bigger",
  rankingOrder: [
    "create-friction-near-finish-line",
    "overthink-instead-of-finishing",
    "pull-back-when-visibility-increases",
    "hesitate-when-real",
    "inconsistent-after-good-start",
  ],
  rankingConfirmed: true,
  fearOfBeingWrong: 74,
  perfectionPressure: "very-high",
  postBreakResponse: "analysis-instead-of-action",
  confidenceDrop: 68,
  consistencyDrop: 72,
  followThroughDrop: 84,
  reinforcementDriver: "success-discomfort",
  hardestHitZone: "finishing-what-i-start",
  awarenessTiming: "mixed",
  sequenceOrder: [
    "progress-starts",
    "pressure-rises",
    "doubt-avoidance-increases",
    "momentum-breaks",
    "distance-from-goal",
  ],
  sequenceConfirmed: true,
  finalPattern: "often-get-close-then-stall",
});
