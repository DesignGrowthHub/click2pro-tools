import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type TriggerMomentValue =
  | "misunderstood"
  | "dismissed-ignored"
  | "criticized"
  | "uncertain-intentions"
  | "control-trapped";

export type FirstReactionValue =
  | "overthinking"
  | "defensiveness"
  | "shutdown"
  | "anger"
  | "anxiety"
  | "reassurance"
  | "distancing"
  | "body-tension"
  | "sadness"
  | "irritability";

export type AwarenessTimingValue =
  | "immediately"
  | "fairly-quickly"
  | "after-a-while"
  | "much-later"
  | "only-in-hindsight";

export type NextActionValue =
  | "seek-clarity"
  | "replay-moment"
  | "withdraw-quiet"
  | "react-outwardly"
  | "keep-functioning-activated";

export type ThemeValue =
  | "rejection"
  | "loss-control"
  | "disrespect"
  | "uncertainty"
  | "disappointment"
  | "abandonment"
  | "unfairness"
  | "being-unseen"
  | "pressure"
  | "failure";

export type RecoveryDurationValue =
  | "settle-quickly"
  | "lingers-a-while"
  | "through-the-day"
  | "much-longer";
export type TriggerPredictabilityValue = "easy-to-see" | "sometimes-surprised" | "often-catches-me" | "mostly-hindsight";
export type SupportNeededValue = "very-little" | "a-little" | "moderate" | "a-lot";

export type FinalPatternValue =
  | "recover-fairly-well"
  | "activate-quickly-stay"
  | "affect-function"
  | "struggle-to-settle";

export type RankItemKey =
  | "react-uncertainty"
  | "replay-moments"
  | "need-regulate-time"
  | "body-reacts-first"
  | "recovery-longer-than-realized";

export type TriggerDimensionKey =
  | "triggerSensitivity"
  | "reactionIntensity"
  | "spilloverLoad"
  | "recoveryDrag";

export type TriggerBandKey =
  | "stable-trigger-tolerance"
  | "situational-sensitivity"
  | "recurring-emotional-activation"
  | "high-trigger-reactivity"
  | "slow-recovery-trigger-pattern";

export type TriggerClusterKey =
  | "rejection-abandonment"
  | "disrespect-criticism"
  | "uncertainty-ambiguity"
  | "control-pressure"
  | "disappointment-unseen";

export type ReactionSequenceKey =
  | "clarity-and-reassurance"
  | "mental-replay-spiral"
  | "quiet-withdrawal"
  | "outward-protection"
  | "internal-carryover";

export type SpilloverAreaKey = "focus" | "body-tension" | "mood";

export type DecoderChoiceOption = {
  value: string;
  label: string;
  description?: string;
};

export type TriggerAnswers = {
  triggerMoment?: TriggerMomentValue;
  reactionIntensity?: number;
  firstReactions: FirstReactionValue[];
  awarenessTiming?: AwarenessTimingValue;
  nextAction?: NextActionValue;
  themes: ThemeValue[];
  focusImpact?: number;
  bodyTension?: number;
  moodCarryover?: number;
  recoveryDuration?: RecoveryDurationValue;
  triggerFrequency?: number;
  triggerPredictability?: TriggerPredictabilityValue;
  reassurancePull?: number;
  opennessDrop?: number;
  supportNeeded?: SupportNeededValue;
  rankingOrder: RankItemKey[];
  rankingConfirmed: boolean;
  finalPattern?: FinalPatternValue;
};

type BaseStep = {
  id: string;
  step: number;
  eyebrow: string;
  hint: string;
  question: string;
};

export type ScenarioChoiceStep = BaseStep & {
  kind: "scenario-choice";
  field: "triggerMoment" | "nextAction" | "recoveryDuration" | "finalPattern";
  options: DecoderChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "reactionIntensity" | "triggerFrequency" | "reassurancePull" | "opennessDrop";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "firstReactions" | "themes";
  limit: number;
  options: DecoderChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "awarenessTiming" | "triggerPredictability" | "supportNeeded";
  options: DecoderChoiceOption[];
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "focusImpact" | "bodyTension" | "moodCarryover";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: RankItemKey;
    label: string;
  }>;
};

export type TriggerStep =
  | ScenarioChoiceStep
  | SliderStep
  | MultiSelectStep
  | SegmentedStep
  | TripleSliderStep
  | DragRankStep;

export type TriggerDimension = {
  key: TriggerDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type TriggerBand = {
  key: TriggerBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  recoveryLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type TriggerCluster = {
  key: TriggerClusterKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
  x: number;
  y: number;
};

export type TriggerClusterScore = TriggerCluster & {
  value: number;
};

export type ReactionSequence = {
  key: ReactionSequenceKey;
  label: string;
  summary: string;
  accentFrom: string;
  accentTo: string;
  stages: string[];
};

export type SpilloverArea = {
  key: SpilloverAreaKey;
  label: string;
  accent: string;
  value: number;
};

export type RelatedDecoderTool = {
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
  key: TriggerDimensionKey;
  paragraphs: string[];
};

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type TriggerDecoderResult = {
  score: number;
  band: TriggerBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<TriggerDimensionKey, number>;
  clusterScores: TriggerClusterScore[];
  dominantCluster: TriggerCluster;
  dominantSequence: ReactionSequence;
  mainEmotionalTheme: string;
  recoveryLoadEstimate: string;
  spilloverAreas: SpilloverArea[];
  topSpilloverArea: SpilloverArea;
  signalLabel: string;
  interpretation: string;
  standout: string;
  recoveryInsight: string;
  triggerClusterInsight: string;
  reactionSequenceInsight: string;
  awarenessLabel: string;
  reactionPathStages: Array<{
    label: string;
    description: string;
    accent: string;
  }>;
};

export const emotionalTriggerMetadata = {
  eyebrow: "EMOTIONAL PATTERN TOOL",
  title: "Emotional Trigger Decoder",
  description:
    "See what activates you fastest, how the reaction unfolds, and what keeps it going after the moment has passed. This tool turns trigger patterns into something easier to read and work with.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const triggerDimensions: TriggerDimension[] = [
  {
    key: "triggerSensitivity",
    label: "Trigger Sensitivity",
    description: "How quickly certain themes or situations register as emotionally loaded before the rest of the sequence even unfolds.",
    icon: "signal",
    accent: "#67E8F9",
  },
  {
    key: "reactionIntensity",
    label: "Reaction Intensity",
    description: "How strongly the initial internal spike tends to land once a trigger is activated.",
    icon: "graph",
    accent: "#FB7185",
  },
  {
    key: "spilloverLoad",
    label: "Spillover Load",
    description: "How much the trigger expands beyond the moment into focus, body tension, and mood afterward.",
    icon: "pattern",
    accent: "#60A5FA",
  },
  {
    key: "recoveryDrag",
    label: "Recovery Drag",
    description: "How long it tends to take for the system to fully downshift once the trigger has already landed.",
    icon: "shield",
    accent: "#C4B5FD",
  },
];

export const triggerBands: TriggerBand[] = [
  {
    key: "stable-trigger-tolerance",
    min: 0,
    max: 24,
    title: "Stable Trigger Tolerance",
    descriptor: "Triggers still register, but they are less likely to expand into long chains of emotional carryover.",
    summary:
      "Your pattern suggests that activating moments are usually being absorbed without quickly taking over your thinking, body, or the rest of your day.",
    interpretation:
      "That does not mean nothing ever hits hard. It means there appears to be enough awareness, regulation room, or recovery capacity that emotional activation does not dominate the full sequence very often.",
    standoutLead:
      "The strongest signal is not the absence of triggers. It is that the system appears able to contain them before they spread.",
    recoveryLead:
      "Recovery usually looks shorter here because the sequence tends to stop closer to the original moment instead of becoming a longer internal event.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#67E8F9",
    glow: "rgba(110, 231, 183, 0.2)",
  },
  {
    key: "situational-sensitivity",
    min: 25,
    max: 44,
    title: "Situational Sensitivity",
    descriptor: "Certain themes activate more easily, but recovery is still usually available when the sequence is noticed in time.",
    summary:
      "Your responses suggest that some moments land faster than others, especially when they touch a meaningful emotional theme, but the pattern is not always escalating into full-day spillover.",
    interpretation:
      "People in this range often look mostly fine from the outside while still feeling specific situations hit harder than they appear to. The key difference is that the system still seems fairly reachable once the activation is recognized.",
    standoutLead:
      "The strongest signal is selectivity. Certain trigger themes matter more than general stress alone.",
    recoveryLead:
      "Recovery can still feel longer than expected when awareness arrives late or when the trigger touches an old emotional meaning instead of only the surface event.",
    gradientFrom: "#67E8F9",
    gradientTo: "#60A5FA",
    glow: "rgba(96, 165, 250, 0.2)",
  },
  {
    key: "recurring-emotional-activation",
    min: 45,
    max: 64,
    title: "Recurring Emotional Activation",
    descriptor: "Triggers are showing up as recognizable patterns with meaningful after-effects in thinking, body state, or mood.",
    summary:
      "Your pattern suggests that activation is not only about the initial moment. The larger issue appears to be how the reaction unfolds and lingers once it has already started.",
    interpretation:
      "This range often describes people who can name their triggers after the fact but still feel the aftermath pulling at focus, body tension, or emotional steadiness longer than they want. The pattern is recurring enough to decode, not random enough to ignore.",
    standoutLead:
      "The strongest signal is sequence length. The trigger seems to matter, but the spillover matters almost as much.",
    recoveryLead:
      "Recovery tends to stretch out here because the sequence often moves from the original moment into replay, tension, or mood carryover before it fully settles.",
    gradientFrom: "#FCD34D",
    gradientTo: "#FB7185",
    glow: "rgba(251, 113, 133, 0.2)",
  },
  {
    key: "high-trigger-reactivity",
    min: 65,
    max: 84,
    title: "High Trigger Reactivity",
    descriptor: "Certain situations appear to activate quickly and spread through the system with noticeable force.",
    summary:
      "Your responses suggest a pattern where emotional activation arrives fast and tends to influence the body, attention, or mood well beyond the original event.",
    interpretation:
      "That does not mean you are overreacting or failing. It usually means the system is treating certain themes as high-signal moments, and the cost shows up not only in intensity but in how much recovery they ask for afterward.",
    standoutLead:
      "The strongest signal is how quickly activation appears to become a whole-system event rather than a contained emotional response.",
    recoveryLead:
      "Recovery often feels slower here because the sequence does not stop at feeling triggered. It keeps moving through tension, interpretation, or functional spillover before it can downshift.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(251, 113, 133, 0.22)",
  },
  {
    key: "slow-recovery-trigger-pattern",
    min: 85,
    max: 100,
    title: "Slow-Recovery Trigger Pattern",
    descriptor: "The most important signal is not only how strongly triggers land, but how long they continue to affect the system afterward.",
    summary:
      "Your pattern suggests that emotional activation is becoming costly because recovery is not catching up quickly once the sequence begins.",
    interpretation:
      "In this range, the original moment may be only one part of the burden. The longer story is what happens after: body tension stays high, focus gets pulled off course, mood carries the residue, and the system takes longer than expected to fully settle.",
    standoutLead:
      "The strongest signal is extended carryover. The reaction seems to last longer in the system than people around you may realize.",
    recoveryLead:
      "Recovery tends to feel especially slow here because the trigger sequence appears to remain active after the event is over, which can make the whole day feel shaped by one moment.",
    gradientFrom: "#FCD34D",
    gradientTo: "#FB7185",
    glow: "rgba(252, 211, 77, 0.22)",
  },
];

export const triggerClusters: TriggerCluster[] = [
  {
    key: "rejection-abandonment",
    label: "Rejection / abandonment",
    description: "Moments that feel like exclusion, loss of connection, or being left emotionally unsupported.",
    accent: "#FDA4AF",
    icon: "signal",
    x: 22,
    y: 24,
  },
  {
    key: "disrespect-criticism",
    label: "Disrespect / criticism",
    description: "Moments that feel belittling, dismissive, sharply critical, or loaded with unfair judgment.",
    accent: "#FB7185",
    icon: "graph",
    x: 74,
    y: 20,
  },
  {
    key: "uncertainty-ambiguity",
    label: "Uncertainty / ambiguity",
    description: "Moments where tone, meaning, or intention feels hard to read and the mind starts scanning for clarity.",
    accent: "#67E8F9",
    icon: "pattern",
    x: 52,
    y: 48,
  },
  {
    key: "control-pressure",
    label: "Control / pressure",
    description: "Moments that carry pressure, constraint, overload, or the sense that your range of choice is shrinking.",
    accent: "#60A5FA",
    icon: "lock",
    x: 24,
    y: 78,
  },
  {
    key: "disappointment-unseen",
    label: "Disappointment / being unseen",
    description: "Moments that feel like being missed, let down, unrecognized, or emotionally unseen in a way that lands deeply.",
    accent: "#C4B5FD",
    icon: "insight",
    x: 78,
    y: 76,
  },
];

export const reactionSequences: ReactionSequence[] = [
  {
    key: "clarity-and-reassurance",
    label: "Clarity and reassurance loop",
    summary: "Activation quickly creates a need to check meaning, restore certainty, or get confirmation before the system can fully settle.",
    accentFrom: "#67E8F9",
    accentTo: "#60A5FA",
    stages: [
      "Trigger lands",
      "Internal spike",
      "Search for clarity",
      "Activation lingers",
      "Gradual recovery",
    ],
  },
  {
    key: "mental-replay-spiral",
    label: "Mental replay spiral",
    summary: "The moment keeps replaying internally, which extends the trigger beyond the original event and makes recovery slower.",
    accentFrom: "#C4B5FD",
    accentTo: "#67E8F9",
    stages: [
      "Trigger lands",
      "Internal spike",
      "Replay and analysis",
      "Spillover into focus",
      "Delayed recovery",
    ],
  },
  {
    key: "quiet-withdrawal",
    label: "Quiet withdrawal pattern",
    summary: "The system protects itself through silence, distance, or reduced outward expression while activation stays active underneath.",
    accentFrom: "#60A5FA",
    accentTo: "#C4B5FD",
    stages: [
      "Trigger lands",
      "Internal spike",
      "Go quiet or pull back",
      "Tension stays inside",
      "Slow re-entry",
    ],
  },
  {
    key: "outward-protection",
    label: "Outward protection pattern",
    summary: "Activation moves outward more quickly through defensiveness, sharpness, or visible reaction before regulation catches up.",
    accentFrom: "#FB7185",
    accentTo: "#FCD34D",
    stages: [
      "Trigger lands",
      "Internal spike",
      "External reaction",
      "Residual intensity",
      "Recovery reset",
    ],
  },
  {
    key: "internal-carryover",
    label: "Internal carryover pattern",
    summary: "The reaction may stay mostly internal, but it continues to shape body tension, mood, or functioning longer than the moment itself.",
    accentFrom: "#6EE7B7",
    accentTo: "#C4B5FD",
    stages: [
      "Trigger lands",
      "Internal spike",
      "Keep functioning",
      "Carryover builds",
      "Extended recovery",
    ],
  },
];

const triggerMomentOptions: DecoderChoiceOption[] = [
  {
    value: "misunderstood",
    label: "A. Feeling misunderstood",
    description: "The moment lands as if your intention, meaning, or internal reality has been missed.",
  },
  {
    value: "dismissed-ignored",
    label: "B. Feeling dismissed or ignored",
    description: "Something about the interaction feels minimizing, bypassing, or emotionally excluding.",
  },
  {
    value: "criticized",
    label: "C. Feeling criticized",
    description: "The moment carries judgment, correction, or a feeling of being evaluated harshly.",
  },
  {
    value: "uncertain-intentions",
    label: "D. Feeling uncertain about someone’s intentions",
    description: "Ambiguity itself becomes activating before anything is fully confirmed.",
  },
  {
    value: "control-trapped",
    label: "E. Feeling out of control or trapped",
    description: "Pressure, constraint, or loss of choice makes the moment feel hard to regulate from within.",
  },
];

const firstReactionOptions: DecoderChoiceOption[] = [
  { value: "overthinking", label: "Overthinking" },
  { value: "defensiveness", label: "Defensiveness" },
  { value: "shutdown", label: "Shutdown" },
  { value: "anger", label: "Anger" },
  { value: "anxiety", label: "Anxiety" },
  { value: "reassurance", label: "Urge for reassurance" },
  { value: "distancing", label: "Distancing" },
  { value: "body-tension", label: "Tension in the body" },
  { value: "sadness", label: "Sadness" },
  { value: "irritability", label: "Irritability" },
];

const awarenessTimingOptions: DecoderChoiceOption[] = [
  { value: "immediately", label: "Immediately" },
  { value: "fairly-quickly", label: "Fairly quickly" },
  { value: "after-a-while", label: "After a while" },
  { value: "much-later", label: "Much later" },
  { value: "only-in-hindsight", label: "Only in hindsight" },
];

const nextActionOptions: DecoderChoiceOption[] = [
  {
    value: "seek-clarity",
    label: "A. I seek clarity or reassurance",
    description: "The system wants explanation, confirmation, or a faster way to settle uncertainty.",
  },
  {
    value: "replay-moment",
    label: "B. I replay the moment mentally",
    description: "The mind stays with the event and keeps trying to resolve or re-understand it internally.",
  },
  {
    value: "withdraw-quiet",
    label: "C. I withdraw or go quiet",
    description: "Protection shows up through quiet distance while the activation stays active underneath.",
  },
  {
    value: "react-outwardly",
    label: "D. I react outwardly",
    description: "The first protective move is more visible through tone, pushback, or emotional reaction.",
  },
  {
    value: "keep-functioning-activated",
    label: "E. I keep functioning, but feel internally activated",
    description: "The moment keeps living in the body or mind even if nothing obvious happens outwardly.",
  },
];

const themeOptions: DecoderChoiceOption[] = [
  { value: "rejection", label: "Rejection" },
  { value: "loss-control", label: "Loss of control" },
  { value: "disrespect", label: "Disrespect" },
  { value: "uncertainty", label: "Uncertainty" },
  { value: "disappointment", label: "Disappointment" },
  { value: "abandonment", label: "Abandonment" },
  { value: "unfairness", label: "Unfairness" },
  { value: "being-unseen", label: "Being unseen" },
  { value: "pressure", label: "Pressure" },
  { value: "failure", label: "Failure" },
];

const recoveryDurationOptions: DecoderChoiceOption[] = [
  {
    value: "settle-quickly",
    label: "A. I settle fairly quickly",
    description: "The moment still lands, but the system usually stops carrying it for too long.",
  },
  {
    value: "lingers-a-while",
    label: "B. It lingers for a while",
    description: "The reaction stays active beyond the moment, but not always for the whole day.",
  },
  {
    value: "through-the-day",
    label: "C. It often follows me through the day",
    description: "The trigger keeps touching focus, tension, or mood long after the event ends.",
  },
  {
    value: "much-longer",
    label: "D. It can stay active much longer than I want",
    description: "Recovery tends to feel slower than expected once the system is fully activated.",
  },
];

const finalPatternOptions: DecoderChoiceOption[] = [
  {
    value: "recover-fairly-well",
    label: "A. I get triggered sometimes, but usually recover fairly well",
    description: "The pattern exists, but it does not usually take over the rest of the sequence.",
  },
  {
    value: "activate-quickly-stay",
    label: "B. Certain situations activate me quickly and stay with me",
    description: "Some themes land fast enough that the emotional after-effect becomes part of the real problem.",
  },
  {
    value: "affect-function",
    label: "C. My triggers often affect how I think, feel, and function afterward",
    description: "Spillover into focus, body state, or mood is becoming part of the signature pattern.",
  },
  {
    value: "struggle-to-settle",
    label: "D. Once activated, I struggle to fully settle quickly",
    description: "The trigger seems to matter most because recovery takes longer than it looks from the outside.",
  },
];

export const rankItems: Array<{ key: RankItemKey; label: string }> = [
  { key: "react-uncertainty", label: "I react strongly to uncertainty" },
  { key: "replay-moments", label: "I replay triggering moments afterward" },
  { key: "need-regulate-time", label: "I need time to regulate before responding well" },
  { key: "body-reacts-first", label: "My body often reacts before my mind catches up" },
  { key: "recovery-longer-than-realized", label: "Recovery takes longer than people around me realize" },
];

export const triggerSteps: TriggerStep[] = [
  {
    id: "trigger-moment",
    step: 1,
    eyebrow: "Step 01 · Fast activator",
    hint: "Choose the kind of moment that tends to register most quickly, even if several can affect you.",
    question: "What kind of moment tends to activate you most quickly?",
    kind: "scenario-choice",
    field: "triggerMoment",
    options: triggerMomentOptions,
  },
  {
    id: "reaction-intensity",
    step: 2,
    eyebrow: "Step 02 · Initial intensity",
    hint: "This slider is about the first internal spike once the trigger lands, not how you look from the outside.",
    question: "How intense does your emotional reaction usually feel at the start?",
    kind: "slider",
    field: "reactionIntensity",
    label: "Initial reaction intensity",
    minLabel: "Very low",
    maxLabel: "Very intense",
  },
  {
    id: "first-reactions",
    step: 3,
    eyebrow: "Step 03 · First reactions",
    hint: "Choose up to three responses that tend to show up first, even if they overlap or happen in quick succession.",
    question: "Which reactions show up first most often?",
    kind: "multi-select",
    field: "firstReactions",
    limit: 3,
    options: firstReactionOptions,
  },
  {
    id: "awareness",
    step: 4,
    eyebrow: "Step 04 · Awareness speed",
    hint: "Faster awareness often shortens the whole sequence. Later awareness often means the reaction has more time to spread.",
    question: "How quickly do you usually realize you’ve been triggered?",
    kind: "segmented",
    field: "awarenessTiming",
    options: awarenessTimingOptions,
  },
  {
    id: "next-action",
    step: 5,
    eyebrow: "Step 05 · What happens next",
    hint: "Pick the move that feels most familiar after the first internal spike has already happened.",
    question: "When triggered, what do you most often do next?",
    kind: "scenario-choice",
    field: "nextAction",
    options: nextActionOptions,
  },
  {
    id: "themes",
    step: 6,
    eyebrow: "Step 06 · Emotional themes",
    hint: "Choose up to three deeper themes that often sit underneath the trigger rather than only the surface event itself.",
    question: "Which themes tend to sit underneath your triggers most often?",
    kind: "multi-select",
    field: "themes",
    limit: 3,
    options: themeOptions,
  },
  {
    id: "spillover",
    step: 7,
    eyebrow: "Step 07 · Spillover load",
    hint: "This step captures what the trigger costs after the event: attention, tension, and mood carryover.",
    question: "How much does the trigger affect your focus, body tension, or mood afterward?",
    kind: "triple-slider",
    fields: [
      {
        key: "focusImpact",
        label: "Focus impact",
        minLabel: "Minimal",
        maxLabel: "Heavy",
      },
      {
        key: "bodyTension",
        label: "Body tension",
        minLabel: "Light",
        maxLabel: "High",
      },
      {
        key: "moodCarryover",
        label: "Mood carryover",
        minLabel: "Short",
        maxLabel: "Lingering",
      },
    ],
  },
  {
    id: "recovery-duration",
    step: 8,
    eyebrow: "Step 08 · Recovery time",
    hint: "This is about how long the reaction usually stays active once you have already been emotionally hooked.",
    question: "How long does recovery usually take once you’ve been activated?",
    kind: "scenario-choice",
    field: "recoveryDuration",
    options: recoveryDurationOptions,
  },
  {
    id: "trigger-frequency",
    step: 9,
    eyebrow: "Step 09 · frequency",
    hint: "This is not asking whether you have triggers at all. It is asking how often emotionally activating moments are happening in your current life context.",
    question: "How often are these kinds of triggers happening lately?",
    kind: "slider",
    field: "triggerFrequency",
    label: "Trigger frequency",
    minLabel: "Rarely",
    maxLabel: "Very often",
  },
  {
    id: "trigger-predictability",
    step: 10,
    eyebrow: "Step 10 · predictability",
    hint: "Some triggers are obvious and recognizable. Others only make sense once you are already inside the reaction.",
    question: "How predictable do your triggers usually feel before they land?",
    kind: "segmented",
    field: "triggerPredictability",
    options: [
      { value: "easy-to-see", label: "Easy to see" },
      { value: "sometimes-surprised", label: "Sometimes surprising" },
      { value: "often-catches-me", label: "Often catches me" },
      { value: "mostly-hindsight", label: "Mostly in hindsight" },
    ],
  },
  {
    id: "reassurance-pull",
    step: 11,
    eyebrow: "Step 11 · reassurance pull",
    hint: "Triggers often create a pull toward explanation, certainty, or emotional proof, even when the original moment is over.",
    question: "How much do triggers pull you toward reassurance, clarification, or checking afterward?",
    kind: "slider",
    field: "reassurancePull",
    label: "Reassurance pull",
    minLabel: "Very little",
    maxLabel: "A great deal",
  },
  {
    id: "openness-drop",
    step: 12,
    eyebrow: "Step 12 · openness drop",
    hint: "This captures the social and relational cost after activation, not only the private internal cost.",
    question: "How much do triggers make you less open, less warm, or less available afterward?",
    kind: "slider",
    field: "opennessDrop",
    label: "Openness / warmth drop",
    minLabel: "Hardly at all",
    maxLabel: "A great deal",
  },
  {
    id: "support-needed",
    step: 13,
    eyebrow: "Step 13 · support need",
    hint: "Some patterns settle mostly alone. Others need more space, co-regulation, or repair than the outside moment would suggest.",
    question: "How much support, space, or recovery help do you usually need after a meaningful trigger?",
    kind: "segmented",
    field: "supportNeeded",
    options: [
      { value: "very-little", label: "Very little" },
      { value: "a-little", label: "A little" },
      { value: "moderate", label: "Moderate" },
      { value: "a-lot", label: "A lot" },
    ],
  },
  {
    id: "ranking",
    step: 14,
    eyebrow: "Step 14 · Pattern priorities",
    hint: "Rank these from most to least true for your current trigger pattern. Drag on desktop or use the move buttons anywhere.",
    question: "Rank these from most to least true for your trigger pattern",
    kind: "drag-rank",
    items: rankItems,
  },
  {
    id: "final-pattern",
    step: 15,
    eyebrow: "Step 15 · Final self-read",
    hint: "Choose the line that best captures the whole pattern, not only the most recent incident.",
    question: "Which statement feels closest to your current pattern?",
    kind: "scenario-choice",
    field: "finalPattern",
    options: finalPatternOptions,
  },
];

export const relatedDecoderTools: RelatedDecoderTool[] = [
  {
    title: "Overthinking Loop Check",
    description: "See whether trigger aftermath turns into replay, rumination, or decision drag once the moment is over.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({
      slug: "overthinking-loop-check",
      categorySlug: "anxiety-overthinking",
    }),
  },
  {
    title: "Attachment Pattern Spotter",
    description: "Map how closeness, uncertainty, reassurance, and distance shape the emotional meaning behind triggers in relationships.",
    category: "Relationships & Attachment",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({
      slug: "attachment-pattern-spotter",
      categorySlug: "relationships-attachment",
    }),
  },
  {
    title: "Sleep Pressure Check",
    description: "See whether low recovery is making emotional activation sharper, longer, or harder to downshift after the moment ends.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "time",
    href: buildToolHref({
      slug: "sleep-pressure-check",
      categorySlug: "sleep-recovery",
    }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Move from decoding the trigger to planning a steadier recovery rhythm once the system has already been activated.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "trend",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
];

export const emotionalTriggerFaqItems: FaqItem[] = [
  {
    question: "What does a trigger reactivity score actually mean?",
    answer:
      "It is a structured read of how quickly emotional activation tends to build, how far it spreads, and how long recovery usually takes. It describes a response pattern, not a diagnosis.",
  },
  {
    question: "Why do some triggers affect me longer than the moment itself?",
    answer:
      "Because the real cost is often in the sequence after the trigger: replay, body tension, mood carryover, reassurance loops, or a slower return to baseline. The moment ends first. The system often does not.",
  },
  {
    question: "What is the difference between being sensitive and being dysregulated?",
    answer:
      "Sensitivity means certain themes register quickly or deeply. Dysregulation usually means the system has a harder time returning to steadiness once activated. They can overlap, but they are not the same thing.",
  },
  {
    question: "Can sleep and stress make triggers worse?",
    answer:
      "Yes. Accumulated stress, low recovery, and high body tension often lower emotional buffer space, which makes the same trigger land harder and linger longer than it might otherwise.",
  },
  {
    question: "Why does my body react before I fully understand what happened?",
    answer:
      "The body often registers pattern familiarity faster than the thinking mind can explain it. Tension, urgency, or shutdown can appear before you have words for why the moment felt loaded.",
  },
  {
    question: "How often should I retake this decoder?",
    answer:
      "Every month or two is usually enough, or sooner if you are in a high-stress stretch, a difficult relationship dynamic, or a period where certain triggers feel unusually amplified.",
  },
  {
    question: "What should I do if recovery always takes longer than I expect?",
    answer:
      "Treat recovery time as part of the pattern, not as proof that you failed the moment. Usually the next useful step is protecting post-trigger recovery and reducing the secondary spirals that keep the sequence alive.",
  },
  {
    question: "Can one trigger theme show up as several different reactions?",
    answer:
      "Yes. The same underlying theme can lead to overthinking, shutdown, anger, reassurance seeking, or body tension depending on context, stress level, and how much room the system has in that moment.",
  },
  {
    question: "Why can recovery take longer even when I do not react outwardly?",
    answer:
      "Because the cost may be internal rather than visible. A person can stay composed externally while still carrying replay, tension, lowered focus, or mood drag long after the trigger moment itself ends.",
  },
  {
    question: "What tends to improve first when trigger work starts helping?",
    answer:
      "Awareness usually improves before the triggers disappear. People often notice they can name the sequence sooner, catch the body shift earlier, or reduce the secondary spirals that used to keep the activation going.",
  },
];

export const emotionalTriggerStoryBlock = {
  eyebrow: "How this often feels",
  title: "The visible reaction may be brief, but the real cost often shows up in what stays active afterward.",
  quote:
    "A person may handle the moment reasonably well on the outside and still keep carrying it afterward. The visible reaction is brief, but the body or mind stays active much longer than other people can see. The trigger is over. The system is still working on it.",
  takeaway:
    "That is why this decoder separates the trigger from the recovery. The after-sequence often explains more of the real burden than the initial spike alone.",
  toneLabel: "Sequence insight",
  accent: "#67E8F9",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What emotional triggers actually are",
    paragraphs: [
      "Emotional triggers are not random overreactions and they are not proof that a person is weak, immature, or unable to handle life. A trigger is a moment that lands with more charge than the surface event alone would seem to explain. Something in the interaction, tone, pressure, or context touches a deeper emotional theme, and the system responds as if the moment matters at more than one level at once. That is why people often say a trigger felt bigger than what happened. They are usually describing the hidden meaning underneath the event, not only the event itself.",
      "A good trigger decoder matters because most people only notice the most visible part of the sequence. They notice that they got anxious, went quiet, became defensive, replayed the moment, or could not stop thinking about it afterward. What they often miss is the architecture underneath: what type of moment activated them, which emotional theme was touched, what the system did first, how quickly awareness arrived, and what made the recovery period shorter or longer. When those pieces become visible, the reaction stops feeling random and starts becoming readable.",
      "That readability is important because shame often grows where patterns remain vague. People judge themselves for being too sensitive, too reactive, too affected, or too slow to let something go. But once the sequence is mapped, the story changes. The question becomes less What is wrong with me? and more What kinds of moments activate me, how does the sequence unfold, and what helps it stop expanding? That is a much more workable question.",
    ],
  },
  {
    title: "Why some moments hit harder than they look from the outside",
    paragraphs: [
      "One of the most confusing parts of trigger patterns is that the outside event can look small while the inside impact feels large. A delayed reply, a sharp comment, an unclear tone, a dismissive gesture, an unexpected criticism, or the feeling of being ignored may not look dramatic to other people. But the nervous system does not respond only to dramatic events. It responds to emotional meaning, perceived threat, prior pattern recognition, and how resourced or depleted the system already is in that moment.",
      "That means two people can move through the same situation and have very different internal experiences. One may register the moment, adapt, and move on. Another may feel uncertainty spike immediately. Another may go into body tension before the mind catches up. Another may look calm while replaying the interaction for hours. None of those responses prove that the event was objectively massive or objectively trivial. They reveal how that moment landed in the emotional system of the person inside it.",
      "This is also why trigger work benefits from precision. It is not enough to say that you are sensitive or that a comment bothered you. The useful layer is understanding what kind of emotional theme the moment touched. Was it rejection, disrespect, uncertainty, pressure, or disappointment? Once that becomes clearer, recovery work becomes more accurate because it is responding to the real pattern rather than only to the surface trigger.",
    ],
  },
  {
    title: "How reaction and recovery are different parts of the same pattern",
    paragraphs: [
      "People often focus on the first few seconds of a trigger and assume that is the whole story. But reaction and recovery are different parts of the same pattern, and often the recovery part is what creates the larger cost. The first spike might be fast, but the actual burden may show up later as replay, body tension, irritability, low focus, or a mood that stays altered long after the event ends. That is why some triggers feel exhausting even when you did not visibly explode or break down. The sequence kept running in quieter ways.",
      "Understanding this difference helps explain why some people say they handle things reasonably well and still feel worn down by them. They may not be reacting dramatically outwardly, but the system is still paying for the trigger internally. Recovery drag can become the hidden tax: a slower return to baseline, more difficulty concentrating, lingering tension, or a need for more time and space than other people realize. When this hidden portion is ignored, people often underestimate how much emotional energy a single moment actually cost them.",
      "A more accurate decoder therefore looks at both phases. It reads what activates the system and what keeps the system activated after the original moment is over. That second part is often where the most practical insight lives, because shortening recovery time is frequently more achievable than preventing every activating moment from happening in the first place.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorialBlock[] = [
  {
    key: "triggerSensitivity",
    paragraphs: [
      "Trigger sensitivity describes how quickly certain themes or situations register as emotionally loaded. It is not only about big events. It is about which kinds of moments your system reads as high-signal and how rapidly that reading begins.",
      "A higher score here usually means that certain themes are easy to activate, especially when the system is already carrying stress, uncertainty, or low recovery in the background.",
    ],
  },
  {
    key: "reactionIntensity",
    paragraphs: [
      "Reaction intensity reflects the force of the internal spike once a trigger has already landed. Some people notice this as body activation, some as emotional flooding, some as strong defensiveness, and some as immediate mental escalation.",
      "This dimension matters because intensity often shapes which coping strategy appears next: seeking clarity, replaying the moment, going quiet, reacting outwardly, or trying to look functional while staying activated inside.",
    ],
  },
  {
    key: "spilloverLoad",
    paragraphs: [
      "Spillover load captures how far the trigger spreads after the event: into focus, body tension, mood carryover, productivity, or how present you feel for the rest of the day.",
      "A higher score here often explains why a relatively brief interaction can still feel draining for hours. The moment ended, but its consequences kept traveling through the system.",
    ],
  },
  {
    key: "recoveryDrag",
    paragraphs: [
      "Recovery drag reflects how long it usually takes for the system to fully settle once it has been emotionally activated. Some people downshift quickly. Others feel as if the body or mind keeps holding the charge long after they want to be done with it.",
      "This is often the hidden differentiator between ordinary sensitivity and a pattern that feels costly. Long recovery windows can make isolated triggers feel like they reshape whole days.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Accumulated stress and low buffer space",
    body:
      "When the system is already carrying load, the same trigger can land harder because there is less spare regulation capacity available in the moment.",
  },
  {
    title: "Uncertainty and incomplete meaning",
    body:
      "Ambiguity often keeps activation alive because the mind keeps trying to finish a story that still feels emotionally unresolved.",
  },
  {
    title: "Relational sensitivity and emotional themes",
    body:
      "Triggers often intensify when a moment touches themes like rejection, disrespect, disappointment, or being unseen rather than only the surface event itself.",
  },
  {
    title: "Body tension and low recovery",
    body:
      "High baseline tension, poor sleep, and under-recovery can all reduce emotional shock absorption and make the body react faster than the mind can contextualize.",
  },
  {
    title: "Repeated exposure to the same trigger",
    body:
      "If similar moments keep happening, the system may become quicker to anticipate them and slower to fully trust that it is safe again afterward.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Faster awareness",
    body:
      "Noticing activation earlier often shortens the full sequence because the trigger has less time to spread into replay, tension, and mood carryover.",
  },
  {
    title: "Naming the actual pattern",
    body:
      "When you can say this is uncertainty, disrespect, or disappointment instead of only feeling overwhelmed, the response becomes easier to work with.",
  },
  {
    title: "Reducing secondary spirals",
    body:
      "Many triggers grow less from the original moment and more from what happens next: replay, reassurance loops, harsh self-judgment, or suppressing the whole response without processing it.",
  },
  {
    title: "Body regulation and recovery protection",
    body:
      "Tension release, breathing space, sleep support, and pacing after the trigger often reduce recovery drag more effectively than trying to think your way out of activation alone.",
  },
  {
    title: "Healthier response spacing",
    body:
      "A little more time between trigger and response often creates a better outcome than forcing immediate clarity while the system is still carrying charge.",
  },
];

export const nextStepParagraphs = [
  "If your result looks elevated, try not to read it as evidence that you are too much or too fragile. The more useful reading is that certain themes are getting amplified by the way the sequence unfolds after activation starts. That means the next step is not to become emotionless. It is to work the sequence more skillfully.",
  "In practice, that usually means identifying one part of the chain that is easiest to influence first. For some people that is noticing the trigger earlier. For others it is reducing mental replay, protecting post-trigger recovery, naming body tension before it becomes the whole day, or giving themselves more time before sending a reactive message. Small sequence shifts are often more powerful than grand promises to stop getting triggered.",
  "If recovery is the biggest burden, take that seriously. A trigger that lasts longer than it looks can quietly drain emotional capacity even if the outward moment seemed small. Protecting recovery is not indulgent. It is part of changing the pattern.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Emotional Regulation Toolkit",
  description:
    "A structured guide for recognizing activation faster, reducing spillover, and shortening the gap between trigger and recovery.",
  buttonLabel: "View Next Step",
};

export function getInitialTriggerAnswers(): TriggerAnswers {
  return {
    firstReactions: [],
    themes: [],
    rankingOrder: rankItems.map((item) => item.key),
    rankingConfirmed: false,
  };
}

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function weightedAverage(items: Array<{ value: number; weight: number }>) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  if (!totalWeight) {
    return 0;
  }

  const total = items.reduce((sum, item) => sum + item.value * item.weight, 0);
  return total / totalWeight;
}

function getBand(score: number) {
  return triggerBands.find((band) => score >= band.min && score <= band.max) ?? triggerBands[2];
}

function getCluster(key: TriggerClusterKey) {
  return triggerClusters.find((cluster) => cluster.key === key) ?? triggerClusters[0];
}

function getSequence(key: ReactionSequenceKey) {
  return reactionSequences.find((sequence) => sequence.key === key) ?? reactionSequences[0];
}

const triggerMomentMap: Record<
  TriggerMomentValue,
  {
    total: number;
    sensitivity: number;
    clusters: Partial<Record<TriggerClusterKey, number>>;
    sequences: Partial<Record<ReactionSequenceKey, number>>;
    themeLabel: string;
  }
> = {
  misunderstood: {
    total: 56,
    sensitivity: 62,
    clusters: {
      "disappointment-unseen": 42,
      "uncertainty-ambiguity": 24,
    },
    sequences: {
      "mental-replay-spiral": 18,
      "internal-carryover": 12,
    },
    themeLabel: "being misunderstood",
  },
  "dismissed-ignored": {
    total: 66,
    sensitivity: 74,
    clusters: {
      "disappointment-unseen": 34,
      "rejection-abandonment": 26,
    },
    sequences: {
      "quiet-withdrawal": 14,
      "internal-carryover": 16,
    },
    themeLabel: "being dismissed or ignored",
  },
  criticized: {
    total: 72,
    sensitivity: 76,
    clusters: {
      "disrespect-criticism": 44,
      "disappointment-unseen": 18,
    },
    sequences: {
      "outward-protection": 18,
      "mental-replay-spiral": 12,
    },
    themeLabel: "criticism",
  },
  "uncertain-intentions": {
    total: 70,
    sensitivity: 78,
    clusters: {
      "uncertainty-ambiguity": 48,
      "rejection-abandonment": 18,
    },
    sequences: {
      "clarity-and-reassurance": 22,
      "mental-replay-spiral": 16,
    },
    themeLabel: "uncertainty",
  },
  "control-trapped": {
    total: 74,
    sensitivity: 74,
    clusters: {
      "control-pressure": 46,
      "disrespect-criticism": 18,
    },
    sequences: {
      "outward-protection": 16,
      "internal-carryover": 18,
    },
    themeLabel: "loss of control",
  },
};

const firstReactionMap: Record<
  FirstReactionValue,
  {
    overall: number;
    sensitivity: number;
    intensity: number;
    spillover: number;
    recovery: number;
    clusters: Partial<Record<TriggerClusterKey, number>>;
    sequences: Partial<Record<ReactionSequenceKey, number>>;
  }
> = {
  overthinking: {
    overall: 70,
    sensitivity: 62,
    intensity: 54,
    spillover: 78,
    recovery: 74,
    clusters: { "uncertainty-ambiguity": 20, "disappointment-unseen": 10 },
    sequences: { "mental-replay-spiral": 24 },
  },
  defensiveness: {
    overall: 60,
    sensitivity: 52,
    intensity: 72,
    spillover: 56,
    recovery: 50,
    clusters: { "disrespect-criticism": 22, "control-pressure": 10 },
    sequences: { "outward-protection": 24 },
  },
  shutdown: {
    overall: 66,
    sensitivity: 58,
    intensity: 54,
    spillover: 72,
    recovery: 80,
    clusters: { "rejection-abandonment": 16, "disappointment-unseen": 16 },
    sequences: { "quiet-withdrawal": 24 },
  },
  anger: {
    overall: 64,
    sensitivity: 54,
    intensity: 82,
    spillover: 60,
    recovery: 56,
    clusters: { "disrespect-criticism": 18, "control-pressure": 16 },
    sequences: { "outward-protection": 22 },
  },
  anxiety: {
    overall: 68,
    sensitivity: 74,
    intensity: 72,
    spillover: 66,
    recovery: 64,
    clusters: { "uncertainty-ambiguity": 20, "rejection-abandonment": 12 },
    sequences: { "clarity-and-reassurance": 14, "mental-replay-spiral": 12 },
  },
  reassurance: {
    overall: 62,
    sensitivity: 70,
    intensity: 60,
    spillover: 58,
    recovery: 58,
    clusters: { "uncertainty-ambiguity": 16, "rejection-abandonment": 14 },
    sequences: { "clarity-and-reassurance": 24 },
  },
  distancing: {
    overall: 64,
    sensitivity: 52,
    intensity: 56,
    spillover: 66,
    recovery: 76,
    clusters: { "control-pressure": 12, "disappointment-unseen": 12 },
    sequences: { "quiet-withdrawal": 18, "internal-carryover": 10 },
  },
  "body-tension": {
    overall: 72,
    sensitivity: 68,
    intensity: 74,
    spillover: 80,
    recovery: 76,
    clusters: { "control-pressure": 18, "uncertainty-ambiguity": 12 },
    sequences: { "internal-carryover": 24 },
  },
  sadness: {
    overall: 64,
    sensitivity: 58,
    intensity: 52,
    spillover: 74,
    recovery: 72,
    clusters: { "rejection-abandonment": 18, "disappointment-unseen": 16 },
    sequences: { "quiet-withdrawal": 14, "internal-carryover": 12 },
  },
  irritability: {
    overall: 60,
    sensitivity: 50,
    intensity: 64,
    spillover: 60,
    recovery: 54,
    clusters: { "control-pressure": 14, "disrespect-criticism": 12 },
    sequences: { "outward-protection": 18, "internal-carryover": 8 },
  },
};

const awarenessTimingMap: Record<
  AwarenessTimingValue,
  { total: number; delay: number; label: string }
> = {
  immediately: { total: 14, delay: 12, label: "immediately" },
  "fairly-quickly": { total: 30, delay: 28, label: "fairly quickly" },
  "after-a-while": { total: 54, delay: 56, label: "after a while" },
  "much-later": { total: 78, delay: 82, label: "much later" },
  "only-in-hindsight": { total: 92, delay: 94, label: "mostly in hindsight" },
};

const nextActionMap: Record<
  NextActionValue,
  {
    total: number;
    intensity: number;
    spillover: number;
    recovery: number;
    clusters: Partial<Record<TriggerClusterKey, number>>;
    sequences: Partial<Record<ReactionSequenceKey, number>>;
    label: string;
  }
> = {
  "seek-clarity": {
    total: 56,
    intensity: 58,
    spillover: 54,
    recovery: 50,
    clusters: { "uncertainty-ambiguity": 20, "rejection-abandonment": 10 },
    sequences: { "clarity-and-reassurance": 28 },
    label: "seeking clarity or reassurance",
  },
  "replay-moment": {
    total: 76,
    intensity: 62,
    spillover: 80,
    recovery: 82,
    clusters: { "uncertainty-ambiguity": 12, "disappointment-unseen": 12 },
    sequences: { "mental-replay-spiral": 30 },
    label: "replaying the moment mentally",
  },
  "withdraw-quiet": {
    total: 70,
    intensity: 50,
    spillover: 72,
    recovery: 78,
    clusters: { "rejection-abandonment": 10, "disappointment-unseen": 14 },
    sequences: { "quiet-withdrawal": 30 },
    label: "withdrawing or going quiet",
  },
  "react-outwardly": {
    total: 64,
    intensity: 78,
    spillover: 58,
    recovery: 56,
    clusters: { "disrespect-criticism": 18, "control-pressure": 12 },
    sequences: { "outward-protection": 30 },
    label: "reacting outwardly",
  },
  "keep-functioning-activated": {
    total: 74,
    intensity: 60,
    spillover: 78,
    recovery: 76,
    clusters: { "control-pressure": 12, "uncertainty-ambiguity": 10 },
    sequences: { "internal-carryover": 32 },
    label: "staying outwardly functional while internally activated",
  },
};

const themeMap: Record<
  ThemeValue,
  {
    total: number;
    label: string;
    clusters: Partial<Record<TriggerClusterKey, number>>;
  }
> = {
  rejection: {
    total: 74,
    label: "rejection",
    clusters: { "rejection-abandonment": 26 },
  },
  "loss-control": {
    total: 70,
    label: "loss of control",
    clusters: { "control-pressure": 26 },
  },
  disrespect: {
    total: 72,
    label: "disrespect",
    clusters: { "disrespect-criticism": 26 },
  },
  uncertainty: {
    total: 74,
    label: "uncertainty",
    clusters: { "uncertainty-ambiguity": 26 },
  },
  disappointment: {
    total: 68,
    label: "disappointment",
    clusters: { "disappointment-unseen": 24 },
  },
  abandonment: {
    total: 78,
    label: "abandonment",
    clusters: { "rejection-abandonment": 28 },
  },
  unfairness: {
    total: 68,
    label: "unfairness",
    clusters: { "disrespect-criticism": 18, "control-pressure": 12 },
  },
  "being-unseen": {
    total: 70,
    label: "being unseen",
    clusters: { "disappointment-unseen": 28 },
  },
  pressure: {
    total: 66,
    label: "pressure",
    clusters: { "control-pressure": 24 },
  },
  failure: {
    total: 64,
    label: "failure",
    clusters: { "disappointment-unseen": 14, "control-pressure": 12 },
  },
};

const recoveryDurationMap: Record<
  RecoveryDurationValue,
  { total: number; recovery: number; label: string }
> = {
  "settle-quickly": {
    total: 18,
    recovery: 20,
    label: "fairly quick recovery",
  },
  "lingers-a-while": {
    total: 46,
    recovery: 50,
    label: "same-day lingering recovery",
  },
  "through-the-day": {
    total: 74,
    recovery: 76,
    label: "through-the-day carryover",
  },
  "much-longer": {
    total: 92,
    recovery: 94,
    label: "extended recovery drag",
  },
};

const triggerPredictabilityMap: Record<TriggerPredictabilityValue, { total: number; sensitivity: number; label: string }> = {
  "easy-to-see": { total: 18, sensitivity: 20, label: "fairly predictable" },
  "sometimes-surprised": { total: 42, sensitivity: 44, label: "sometimes surprising" },
  "often-catches-me": { total: 74, sensitivity: 76, label: "often catching you off guard" },
  "mostly-hindsight": { total: 92, sensitivity: 94, label: "mostly only clear in hindsight" },
};

const supportNeededMap: Record<SupportNeededValue, { total: number; recovery: number; label: string }> = {
  "very-little": { total: 18, recovery: 18, label: "little support needed" },
  "a-little": { total: 38, recovery: 38, label: "a small amount of support needed" },
  moderate: { total: 62, recovery: 64, label: "moderate support needed" },
  "a-lot": { total: 88, recovery: 90, label: "significant support needed" },
};

const finalPatternMap: Record<
  FinalPatternValue,
  {
    total: number;
    sensitivity: number;
    intensity: number;
    spillover: number;
    recovery: number;
  }
> = {
  "recover-fairly-well": {
    total: 20,
    sensitivity: 28,
    intensity: 24,
    spillover: 20,
    recovery: 18,
  },
  "activate-quickly-stay": {
    total: 56,
    sensitivity: 70,
    intensity: 62,
    spillover: 58,
    recovery: 54,
  },
  "affect-function": {
    total: 74,
    sensitivity: 62,
    intensity: 68,
    spillover: 80,
    recovery: 70,
  },
  "struggle-to-settle": {
    total: 88,
    sensitivity: 70,
    intensity: 74,
    spillover: 82,
    recovery: 92,
  },
};

const rankMap: Record<
  RankItemKey,
  {
    total: number;
    sensitivity: number;
    intensity: number;
    spillover: number;
    recovery: number;
    clusters: Partial<Record<TriggerClusterKey, number>>;
    sequences: Partial<Record<ReactionSequenceKey, number>>;
  }
> = {
  "react-uncertainty": {
    total: 72,
    sensitivity: 82,
    intensity: 56,
    spillover: 62,
    recovery: 58,
    clusters: { "uncertainty-ambiguity": 22 },
    sequences: { "clarity-and-reassurance": 12, "mental-replay-spiral": 10 },
  },
  "replay-moments": {
    total: 76,
    sensitivity: 54,
    intensity: 56,
    spillover: 82,
    recovery: 84,
    clusters: { "uncertainty-ambiguity": 10, "disappointment-unseen": 10 },
    sequences: { "mental-replay-spiral": 24 },
  },
  "need-regulate-time": {
    total: 66,
    sensitivity: 48,
    intensity: 60,
    spillover: 70,
    recovery: 80,
    clusters: { "control-pressure": 8 },
    sequences: { "internal-carryover": 14, "quiet-withdrawal": 10 },
  },
  "body-reacts-first": {
    total: 68,
    sensitivity: 62,
    intensity: 78,
    spillover: 74,
    recovery: 72,
    clusters: { "control-pressure": 12, "uncertainty-ambiguity": 8 },
    sequences: { "internal-carryover": 22 },
  },
  "recovery-longer-than-realized": {
    total: 80,
    sensitivity: 54,
    intensity: 56,
    spillover: 78,
    recovery: 92,
    clusters: { "disappointment-unseen": 8, "rejection-abandonment": 6 },
    sequences: { "internal-carryover": 18, "mental-replay-spiral": 10 },
  },
};

function getResolvedAnswers(answers: TriggerAnswers) {
  return {
    triggerMoment: answers.triggerMoment ?? "uncertain-intentions",
    reactionIntensity: typeof answers.reactionIntensity === "number" ? clampScore(answers.reactionIntensity) : 56,
    firstReactions: answers.firstReactions.length ? answers.firstReactions : (["overthinking"] as FirstReactionValue[]),
    awarenessTiming: answers.awarenessTiming ?? "fairly-quickly",
    nextAction: answers.nextAction ?? "replay-moment",
    themes: answers.themes.length ? answers.themes : (["uncertainty"] as ThemeValue[]),
    focusImpact: typeof answers.focusImpact === "number" ? clampScore(answers.focusImpact) : 48,
    bodyTension: typeof answers.bodyTension === "number" ? clampScore(answers.bodyTension) : 52,
    moodCarryover: typeof answers.moodCarryover === "number" ? clampScore(answers.moodCarryover) : 46,
    recoveryDuration: answers.recoveryDuration ?? "lingers-a-while",
    triggerFrequency: typeof answers.triggerFrequency === "number" ? clampScore(answers.triggerFrequency) : 42,
    triggerPredictability: answers.triggerPredictability ?? "sometimes-surprised",
    reassurancePull: typeof answers.reassurancePull === "number" ? clampScore(answers.reassurancePull) : 44,
    opennessDrop: typeof answers.opennessDrop === "number" ? clampScore(answers.opennessDrop) : 36,
    supportNeeded: answers.supportNeeded ?? "moderate",
    rankingOrder: answers.rankingOrder.length ? answers.rankingOrder : rankItems.map((item) => item.key),
    finalPattern: answers.finalPattern ?? "activate-quickly-stay",
  };
}

function getRankingWeights(order: RankItemKey[]) {
  const weightByIndex = [100, 80, 60, 40, 20];
  return Object.fromEntries(order.map((key, index) => [key, weightByIndex[index] ?? 20])) as Record<RankItemKey, number>;
}

export function isTriggerStepComplete(step: TriggerStep, answers: TriggerAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return Array.isArray(answers[step.field]) && answers[step.field].length > 0;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  if (step.kind === "drag-rank") {
    return answers.rankingConfirmed;
  }

  return typeof answers[step.field] === "string";
}

function getRecoveryEstimate(value: number) {
  if (value <= 30) {
    return "Quick reset window";
  }

  if (value <= 55) {
    return "Lingering same-day recovery";
  }

  if (value <= 75) {
    return "Extended carryover window";
  }

  return "Long reset window";
}

function getSignalLabel(score: number, band: TriggerBand, dominantCluster: TriggerCluster, dominantSequence: ReactionSequence) {
  if (score <= 24) {
    return `Your pattern suggests that ${dominantCluster.label.toLowerCase()} can still land, but the sequence usually stays contained before ${dominantSequence.label.toLowerCase()} fully takes over.`;
  }

  if (score <= 44) {
    return `Your pattern suggests that ${dominantCluster.label.toLowerCase()} can activate you quickly, but the larger story is how much sequence awareness arrives before the reaction spreads.`;
  }

  if (score <= 64) {
    return `Your pattern suggests that certain emotional themes activate quickly, but the deeper impact comes from how ${dominantSequence.label.toLowerCase()} extends the reaction afterward.`;
  }

  if (score <= 84) {
    return `Your pattern suggests that activation builds quickly around ${dominantCluster.label.toLowerCase()}, and the sequence appears to affect focus, tension, and recovery more than the moment itself reveals on the surface.`;
  }

  return `Your pattern suggests that certain emotional themes activate quickly, but the deeper burden comes from how long ${dominantSequence.label.toLowerCase()} keeps affecting focus, tension, and recovery after the trigger has already landed.`;
}

export function calculateEmotionalTriggerResult(answers: TriggerAnswers): TriggerDecoderResult {
  const resolved = getResolvedAnswers(answers);
  const answeredCount = triggerSteps.filter((step) => isTriggerStepComplete(step, answers)).length;
  const completionRatio = answeredCount / triggerSteps.length;

  const triggerMoment = triggerMomentMap[resolved.triggerMoment];
  const selectedFirstReactions = resolved.firstReactions.map((reaction) => firstReactionMap[reaction]);
  const awareness = awarenessTimingMap[resolved.awarenessTiming];
  const nextAction = nextActionMap[resolved.nextAction];
  const selectedThemes = resolved.themes.map((theme) => themeMap[theme]);
  const recoveryDuration = recoveryDurationMap[resolved.recoveryDuration];
  const triggerPredictability = triggerPredictabilityMap[resolved.triggerPredictability];
  const supportNeeded = supportNeededMap[resolved.supportNeeded];
  const finalPattern = finalPatternMap[resolved.finalPattern];
  const spilloverAreas: SpilloverArea[] = [
    { key: "focus", label: "Focus", accent: "#60A5FA", value: resolved.focusImpact },
    { key: "body-tension", label: "Body tension", accent: "#FB7185", value: resolved.bodyTension },
    { key: "mood", label: "Mood carryover", accent: "#C4B5FD", value: resolved.moodCarryover },
  ];
  const spilloverAverage = average(spilloverAreas.map((item) => item.value));
  const rankingWeights = getRankingWeights(resolved.rankingOrder);

  const rankedContributions = resolved.rankingOrder.map((key) => ({
    ...rankMap[key],
    weight: (rankingWeights[key] ?? 20) / 100,
  }));

  const step3Value = clampScore(
    average(selectedFirstReactions.map((reaction) => reaction.overall)) +
      Math.max(0, selectedFirstReactions.length - 1) * 6,
  );
  const step6Value = clampScore(
    average(selectedThemes.map((theme) => theme.total)) + Math.max(0, selectedThemes.length - 1) * 5,
  );
  const step9Value = clampScore(
    average(rankedContributions.map((item) => item.total * item.weight)) +
      Math.max(0, resolved.rankingOrder.length - 3) * 2,
  );

  const dimensions: Record<TriggerDimensionKey, number> = {
    triggerSensitivity: clampScore(
      weightedAverage([
        { value: triggerMoment.sensitivity, weight: 1.2 },
        { value: average(selectedThemes.map((theme) => theme.total)), weight: 1 },
        { value: average(selectedFirstReactions.map((reaction) => reaction.sensitivity)), weight: 0.65 },
        { value: awareness.delay, weight: 0.45 },
        { value: resolved.triggerFrequency, weight: 0.55 },
        { value: triggerPredictability.sensitivity, weight: 0.75 },
        { value: finalPattern.sensitivity, weight: 0.75 },
        { value: average(rankedContributions.map((item) => item.sensitivity * item.weight)), weight: 0.65 },
      ]),
    ),
    reactionIntensity: clampScore(
      weightedAverage([
        { value: resolved.reactionIntensity, weight: 1.2 },
        { value: average(selectedFirstReactions.map((reaction) => reaction.intensity)), weight: 1 },
        { value: nextAction.intensity, weight: 0.8 },
        { value: resolved.bodyTension, weight: 0.45 },
        { value: resolved.reassurancePull, weight: 0.28 },
        { value: finalPattern.intensity, weight: 0.75 },
        { value: average(rankedContributions.map((item) => item.intensity * item.weight)), weight: 0.45 },
      ]),
    ),
    spilloverLoad: clampScore(
      weightedAverage([
        { value: spilloverAverage, weight: 1.3 },
        { value: average(selectedFirstReactions.map((reaction) => reaction.spillover)), weight: 0.8 },
        { value: nextAction.spillover, weight: 0.8 },
        { value: awareness.delay, weight: 0.55 },
        { value: resolved.opennessDrop, weight: 0.52 },
        { value: recoveryDuration.recovery, weight: 0.4 },
        { value: finalPattern.spillover, weight: 0.7 },
        { value: average(rankedContributions.map((item) => item.spillover * item.weight)), weight: 0.55 },
      ]),
    ),
    recoveryDrag: clampScore(
      weightedAverage([
        { value: recoveryDuration.recovery, weight: 1.25 },
        { value: spilloverAverage, weight: 0.75 },
        { value: average(selectedFirstReactions.map((reaction) => reaction.recovery)), weight: 0.8 },
        { value: nextAction.recovery, weight: 0.8 },
        { value: awareness.delay, weight: 0.7 },
        { value: supportNeeded.recovery, weight: 0.7 },
        { value: finalPattern.recovery, weight: 0.95 },
        { value: average(rankedContributions.map((item) => item.recovery * item.weight)), weight: 0.7 },
      ]),
    ),
  };

  const score = clampScore(
    weightedAverage([
      { value: triggerMoment.total, weight: 7 },
      { value: resolved.reactionIntensity, weight: 8 },
      { value: step3Value, weight: 6 },
      { value: awareness.total, weight: 6 },
      { value: nextAction.total, weight: 7 },
      { value: step6Value, weight: 7 },
      { value: spilloverAverage, weight: 9 },
      { value: recoveryDuration.total, weight: 7 },
      { value: resolved.triggerFrequency, weight: 7 },
      { value: triggerPredictability.total, weight: 6 },
      { value: resolved.reassurancePull, weight: 6 },
      { value: resolved.opennessDrop, weight: 5 },
      { value: supportNeeded.total, weight: 5 },
      { value: step9Value, weight: 6 },
      { value: finalPattern.total, weight: 8 },
    ]),
  );

  const clusterTotals: Record<TriggerClusterKey, number> = {
    "rejection-abandonment": 0,
    "disrespect-criticism": 0,
    "uncertainty-ambiguity": 0,
    "control-pressure": 0,
    "disappointment-unseen": 0,
  };

  const sequenceTotals: Record<ReactionSequenceKey, number> = {
    "clarity-and-reassurance": 0,
    "mental-replay-spiral": 0,
    "quiet-withdrawal": 0,
    "outward-protection": 0,
    "internal-carryover": 0,
  };

  const addClusterValues = (source: Partial<Record<TriggerClusterKey, number>>, multiplier = 1) => {
    (Object.entries(source) as Array<[TriggerClusterKey, number]>).forEach(([key, value]) => {
      clusterTotals[key] += value * multiplier;
    });
  };

  const addSequenceValues = (source: Partial<Record<ReactionSequenceKey, number>>, multiplier = 1) => {
    (Object.entries(source) as Array<[ReactionSequenceKey, number]>).forEach(([key, value]) => {
      sequenceTotals[key] += value * multiplier;
    });
  };

  addClusterValues(triggerMoment.clusters, 1.15);
  addSequenceValues(triggerMoment.sequences, 1);
  selectedFirstReactions.forEach((reaction) => {
    addClusterValues(reaction.clusters, 1);
    addSequenceValues(reaction.sequences, 1);
  });
  addClusterValues(nextAction.clusters, 1.1);
  addSequenceValues(nextAction.sequences, 1.25);
  selectedThemes.forEach((theme) => addClusterValues(theme.clusters, 1.2));
  rankedContributions.forEach((item) => {
    addClusterValues(item.clusters, item.weight);
    addSequenceValues(item.sequences, item.weight);
  });

  clusterTotals["uncertainty-ambiguity"] += dimensions.triggerSensitivity * 0.08;
  clusterTotals["control-pressure"] += resolved.bodyTension * 0.08;
  clusterTotals["disappointment-unseen"] += resolved.moodCarryover * 0.08;
  clusterTotals["rejection-abandonment"] += resolved.moodCarryover * 0.05;
  clusterTotals["disrespect-criticism"] += dimensions.reactionIntensity * 0.05;
  clusterTotals["uncertainty-ambiguity"] += resolved.reassurancePull * 0.08;
  clusterTotals["disappointment-unseen"] += resolved.opennessDrop * 0.08;

  sequenceTotals["mental-replay-spiral"] += average([
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.overthinking) ? 18 : 0,
    nextAction.label === "replaying the moment mentally" ? 28 : 0,
    resolved.focusImpact * 0.1,
  ]);
  sequenceTotals["clarity-and-reassurance"] += average([
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.reassurance) ? 18 : 0,
    resolved.triggerMoment === "uncertain-intentions" ? 12 : 0,
    resolved.reassurancePull * 0.2,
    dimensions.triggerSensitivity * 0.08,
  ]);
  sequenceTotals["quiet-withdrawal"] += average([
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.shutdown) ? 16 : 0,
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.distancing) ? 16 : 0,
    resolved.nextAction === "withdraw-quiet" ? 24 : 0,
  ]);
  sequenceTotals["outward-protection"] += average([
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.anger) ? 14 : 0,
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap.defensiveness) ? 14 : 0,
    resolved.nextAction === "react-outwardly" ? 26 : 0,
  ]);
  sequenceTotals["internal-carryover"] += average([
    selectedFirstReactions.some((reaction) => reaction === firstReactionMap["body-tension"]) ? 18 : 0,
    resolved.nextAction === "keep-functioning-activated" ? 28 : 0,
    resolved.opennessDrop * 0.18,
    dimensions.recoveryDrag * 0.08,
  ]);

  const clusterScores = triggerClusters
    .map((cluster) => ({
      ...cluster,
      value: clampScore(clusterTotals[cluster.key]),
    }))
    .sort((left, right) => right.value - left.value);
  const dominantCluster = getCluster(clusterScores[0]?.key ?? "uncertainty-ambiguity");

  const dominantSequenceKey =
    (Object.entries(sequenceTotals).sort((left, right) => right[1] - left[1])[0]?.[0] as ReactionSequenceKey | undefined) ??
    "internal-carryover";
  const dominantSequence = getSequence(dominantSequenceKey);

  const topSpilloverArea = [...spilloverAreas].sort((left, right) => right.value - left.value)[0] ?? spilloverAreas[0];
  const mainTheme =
    selectedThemes
      .sort((left, right) => right.total - left.total)
      .map((theme) => theme.label)[0] ?? triggerMoment.themeLabel;
  const band = getBand(score);
  const recoveryLoadEstimate = getRecoveryEstimate(dimensions.recoveryDrag);
  const awarenessLabel = awareness.label;
  const signalLabel = getSignalLabel(score, band, dominantCluster, dominantSequence);
  const interpretation = `${band.summary} ${band.interpretation}`;
  const triggerClusterInsight = `Dominant trigger cluster: ${dominantCluster.label}. The pattern appears to organize itself most strongly around ${mainTheme.toLowerCase()}, which helps explain why the moment can feel bigger than it looks from the outside.`;
  const reactionSequenceInsight = `Dominant reaction sequence: ${dominantSequence.label}. The pattern seems most likely to move from the initial spike into ${dominantSequence.summary.toLowerCase()}`;
  const standout = `${band.standoutLead} Right now the strongest spillover appears to land in ${topSpilloverArea.label.toLowerCase()}, while the main trigger theme looks most tied to ${dominantCluster.label.toLowerCase()}.`;
  const recoveryInsight = `${band.recoveryLead} Awareness currently tends to arrive ${awarenessLabel}, which can make ${topSpilloverArea.label.toLowerCase()} and ${supportNeeded.label.toLowerCase()} more likely than the original moment alone would suggest.`;

  const reactionPathStages = [
    {
      label: dominantCluster.label,
      description: "Trigger theme",
      accent: dominantCluster.accent,
    },
    {
      label: "Internal spike",
      description: `${dimensions.reactionIntensity} intensity`,
      accent: "#FB7185",
    },
    {
      label: dominantSequence.label,
      description: "Primary pathway",
      accent: dominantSequence.accentFrom,
    },
    {
      label: topSpilloverArea.label,
      description: "Main spillover area",
      accent: topSpilloverArea.accent,
    },
    {
      label: recoveryLoadEstimate,
      description: "Recovery tendency",
      accent: "#C4B5FD",
    },
  ];

  return {
    score,
    band,
    completionRatio,
    isComplete: answeredCount === triggerSteps.length,
    dimensions,
    clusterScores,
    dominantCluster,
    dominantSequence,
    mainEmotionalTheme: mainTheme,
    recoveryLoadEstimate,
    spilloverAreas,
    topSpilloverArea,
    signalLabel,
    interpretation,
    standout,
    recoveryInsight,
    triggerClusterInsight,
    reactionSequenceInsight,
    awarenessLabel,
    reactionPathStages,
  };
}

export const heroPreviewResult = calculateEmotionalTriggerResult({
  triggerMoment: "uncertain-intentions",
  reactionIntensity: 74,
  firstReactions: ["overthinking", "anxiety", "body-tension"],
  awarenessTiming: "after-a-while",
  nextAction: "replay-moment",
  themes: ["uncertainty", "being-unseen", "rejection"],
  focusImpact: 68,
  bodyTension: 76,
  moodCarryover: 64,
  recoveryDuration: "through-the-day",
  triggerFrequency: 62,
  triggerPredictability: "often-catches-me",
  reassurancePull: 58,
  opennessDrop: 54,
  supportNeeded: "moderate",
  rankingOrder: [
    "react-uncertainty",
    "replay-moments",
    "recovery-longer-than-realized",
    "body-reacts-first",
    "need-regulate-time",
  ],
  rankingConfirmed: true,
  finalPattern: "affect-function",
});
