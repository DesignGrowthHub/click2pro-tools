import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type InitialResponseValue =
  | "speak-early-clear"
  | "hesitate-and-wait"
  | "not-a-big-deal"
  | "stay-quiet-absorb"
  | "function-while-hardening";

export type ResentmentSourceValue =
  | "uneven-effort"
  | "taken-for-granted"
  | "repeated-emotional-labor"
  | "unmet-needs"
  | "lack-of-appreciation"
  | "unclear-reciprocity"
  | "overgiving"
  | "low-follow-through"
  | "lack-of-repair"
  | "carrying-too-much-alone";

export type BuildupPatternValue =
  | "clear-things-early"
  | "pressure-builds-slowly"
  | "minimize-until-it-spills"
  | "become-distant-before-admit"
  | "resentment-arrives-later";

export type NeedNamingValue =
  | "very-easy"
  | "mostly-easy"
  | "mixed"
  | "difficult"
  | "very-difficult";

export type SilenceDriverKey =
  | "guilt"
  | "avoid-conflict"
  | "minimize-own-need"
  | "hope-it-changes"
  | "responsible-for-other"
  | "seem-demanding";

export type FirstSignValue =
  | "inner-irritation"
  | "emotional-distance"
  | "reduced-warmth"
  | "passive-compliance-heaviness"
  | "shutdown-or-sharpness";

export type CarryingFrequencyValue = "never" | "rarely" | "sometimes" | "often" | "very-often";

export type PatternTruthKey =
  | "say-less-than-feel"
  | "keep-giving-while-strained"
  | "builds-quietly-before-notice"
  | "pull-back-instead-of-naming"
  | "disappointment-lingers";

export type BuildupIntensifierValue =
  | "repetition-without-repair"
  | "emotional-invisibility"
  | "unfair-responsibility"
  | "no-acknowledgment"
  | "not-safe-to-say-truth";

export type ContextZoneValue =
  | "partner-intimacy"
  | "family"
  | "friendship"
  | "work"
  | "emotional-labor-caretaking"
  | "one-sided-dynamics";

export type SequenceKey =
  | "something-feels-off"
  | "stay-quiet-or-soften"
  | "keep-carrying-it"
  | "distance-or-irritation-builds"
  | "comes-out-later";

export type FinalPatternValue =
  | "clear-before-serious"
  | "builds-in-repeating-areas"
  | "notice-later-than-it-starts"
  | "keep-adapting-until-colder"
  | "stored-cost-bigger-than-people-see";

export type ResentmentDimensionKey =
  | "unspokenNeedLoad"
  | "fairnessImbalance"
  | "silentCarryingPressure"
  | "withdrawalHardeningRisk";

export type ResentmentBandKey =
  | "low-stored-pressure"
  | "mild-buildup-pattern"
  | "quiet-resentment-accumulation"
  | "high-stored-emotional-load"
  | "deep-buildup-withdrawal-risk";

export type EmotionalCostKey =
  | "warmth-reduction"
  | "availability-drop"
  | "patience-drain"
  | "distance-risk";

export type ResentmentChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type ResentmentAnswers = {
  initialResponse?: InitialResponseValue;
  inwardlyHolding?: number;
  resentmentSources: ResentmentSourceValue[];
  buildupPattern?: BuildupPatternValue;
  needNaming?: NeedNamingValue;
  silenceDriverRanking: SilenceDriverKey[];
  silenceDriverRankingConfirmed: boolean;
  firstSign?: FirstSignValue;
  imbalanceLevel?: number;
  carryingFrequency?: CarryingFrequencyValue;
  patternTruthRanking: PatternTruthKey[];
  patternTruthRankingConfirmed: boolean;
  buildupIntensifier?: BuildupIntensifierValue;
  warmthImpact?: number;
  emotionalAvailabilityImpact?: number;
  patienceImpact?: number;
  strongestZone?: ContextZoneValue;
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
  field: "initialResponse" | "firstSign" | "buildupIntensifier" | "finalPattern";
  options: ResentmentChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "needNaming" | "carryingFrequency";
  options: ResentmentChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "inwardlyHolding" | "imbalanceLevel";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "resentmentSources";
  limit: number;
  options: ResentmentChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  field: "silenceDriverRanking" | "patternTruthRanking";
  items: Array<{
    key: string;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "warmthImpact" | "emotionalAvailabilityImpact" | "patienceImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "buildupPattern" | "strongestZone";
  options: ResentmentChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type ResentmentStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type ResentmentDimension = {
  key: ResentmentDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type ResentmentBand = {
  key: ResentmentBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  hardeningLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type ResentmentContext = {
  key: ContextZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type BuildupDriver = {
  key: SilenceDriverKey;
  label: string;
  description: string;
  accent: string;
};

export type ReliefDirection = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type EmotionalCostArea = {
  key: EmotionalCostKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type ResentmentContextScore = ResentmentContext & {
  value: number;
};

export type PreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type CurveStage = {
  label: string;
  value: number;
  accent: string;
  description: string;
};

export type RelatedResentmentTool = {
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

export type ResentmentResult = {
  score: number;
  completionRatio: number;
  band: ResentmentBand;
  dimensions: Record<ResentmentDimensionKey, number>;
  primaryBuildupDriver: BuildupDriver;
  mainResentmentContext: ResentmentContext;
  strongestEmotionalCost: EmotionalCostArea;
  mostUsefulReliefDirection: ReliefDirection;
  contextScores: ResentmentContextScore[];
  emotionalCosts: EmotionalCostArea[];
  previewMetrics: PreviewMetric[];
  curveStages: CurveStage[];
  resentmentLabel: string;
  interpretation: string;
  standout: string;
  hardeningInsight: string;
  buildupIntensity: number;
  fairnessImbalanceLevel: number;
  carryingLoadLevel: number;
  withdrawalRiskLevel: number;
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
  key: ResentmentDimensionKey;
  paragraphs: string[];
};

export const resentmentBuildupMetadata = {
  eyebrow: "STORED EMOTIONAL LOAD TOOL",
  title: "Resentment Buildup Tracker",
  description:
    "See how silence, over-carrying, blurred fairness, and unspoken needs turn into stored pressure over time. This tool helps you spot resentment before it hardens into distance.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const resentmentDimensions: ResentmentDimension[] = [
  {
    key: "unspokenNeedLoad",
    label: "Unspoken Need Load",
    description: "How much is being carried internally because needs are delayed, softened, or not fully named.",
    icon: "pattern",
    accent: "#93C5FD",
  },
  {
    key: "fairnessImbalance",
    label: "Fairness Imbalance",
    description: "How one-sided, under-repaired, or under-acknowledged the dynamic currently feels.",
    icon: "graph",
    accent: "#FCD34D",
  },
  {
    key: "silentCarryingPressure",
    label: "Silent Carrying Pressure",
    description: "How much weight keeps being absorbed without being redistributed, clarified, or relieved.",
    icon: "trend",
    accent: "#C4B5FD",
  },
  {
    key: "withdrawalHardeningRisk",
    label: "Withdrawal / Hardening Risk",
    description: "How likely the stored pressure is to show up later as coolness, distance, shutdown, or sharpness.",
    icon: "shield",
    accent: "#FB7185",
  },
];

export const resentmentBands: ResentmentBand[] = [
  {
    key: "low-stored-pressure",
    min: 0,
    max: 24,
    title: "Low Stored Pressure",
    descriptor: "There may still be disappointment or imbalance at times, but it is not strongly accumulating into stored emotional weight.",
    summary:
      "The pattern suggests that concerns are usually getting processed, repaired, or released before they harden into longer resentment.",
    interpretation:
      "This does not mean every dynamic is easy. It means stored emotional load is not dominating the system. The task here is usually maintenance: protect the channels that let tension clear before it becomes colder or heavier.",
    standoutLead: "The strongest signal here is release capacity.",
    hardeningLead: "Hardening is less likely because the system is still letting truth move before distance has to carry it.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-buildup-pattern",
    min: 25,
    max: 44,
    title: "Mild Buildup Pattern",
    descriptor: "Some resentment is accumulating in repeating places, but it has not yet become the dominant emotional atmosphere.",
    summary:
      "There is enough stored pressure to notice a pattern: a few needs are being delayed, a few imbalances are lingering, and the emotional cost is beginning to last longer than the original moment.",
    interpretation:
      "This often means the issue is not one major rupture. It is smaller unprocessed moments that are not clearing fully. The most useful move is earlier noticing and lighter repair before heaviness becomes your main way of carrying the truth.",
    standoutLead: "The buildup is present, but still interruptible.",
    hardeningLead: "Hardening usually starts when the system keeps adapting after it has already registered the cost.",
    gradientFrom: "#93C5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "quiet-resentment-accumulation",
    min: 45,
    max: 64,
    title: "Quiet Resentment Accumulation",
    descriptor: "The emotional cost is building more quietly than it first appears, and it is likely affecting warmth, patience, or internal openness.",
    summary:
      "This pattern suggests resentment is accumulating through repeated over-carrying, delayed truth, or unrepaired imbalance rather than one dramatic event.",
    interpretation:
      "The important insight here is that the stored load has become meaningful enough to shape how you feel later, even when you look composed in the moment. The pressure is no longer only situational. It is becoming cumulative.",
    standoutLead: "The strongest pattern here is silent accumulation.",
    hardeningLead: "Emotional hardening often begins when disappointment keeps getting metabolized privately instead of redistributed clearly.",
    gradientFrom: "#C4B5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(196, 181, 253, 0.16)",
  },
  {
    key: "high-stored-emotional-load",
    min: 65,
    max: 84,
    title: "High Stored Emotional Load",
    descriptor: "The resentment system is carrying real weight and is likely changing how available, warm, or patient you can stay.",
    summary:
      "This result usually means the stored pressure is not minor anymore. Fairness, acknowledgment, or reciprocity are not being restored fast enough, and the emotional after-cost is starting to shape the relationship or environment itself.",
    interpretation:
      "At this level, resentment is often less about anger and more about depletion with a memory. The system remembers where it kept carrying, kept minimizing, or kept going without repair. That is why distance can begin to feel easier than openness.",
    standoutLead: "The system is carrying more than it is clearing.",
    hardeningLead: "Hardening becomes likely when unspoken truth has to protect itself by reducing warmth or availability.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.18)",
  },
  {
    key: "deep-buildup-withdrawal-risk",
    min: 85,
    max: 100,
    title: "Deep Buildup / Withdrawal Risk",
    descriptor: "Resentment is likely deeply stored, and emotional distance or shutdown may already be functioning as protection against carrying more.",
    summary:
      "This pattern suggests the buildup is no longer only internal irritation. It is approaching structural emotional withdrawal: less warmth, less patience, less available energy for the same dynamic to keep repeating.",
    interpretation:
      "When resentment reaches this level, people often feel confused because the coldness arrives later than the original moment. The stored cost is what explains that gap. The nervous system has been keeping score even when the outward self stayed reasonable.",
    standoutLead: "The heaviest signal here is stored protection.",
    hardeningLead: "Hardening is most likely beginning where repeated imbalance has outlasted your willingness to keep quietly carrying it.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(253, 164, 175, 0.18)",
  },
];

const initialResponseOptions: ResentmentChoiceOption[] = [
  {
    value: "speak-early-clear",
    marker: "A",
    label: "I speak early and clearly",
    description: "I usually name the issue before it has much time to accumulate.",
  },
  {
    value: "hesitate-and-wait",
    marker: "B",
    label: "I hesitate and wait",
    description: "I pause and hope the moment may settle or resolve on its own.",
  },
  {
    value: "not-a-big-deal",
    marker: "C",
    label: "I tell myself it is not a big deal",
    description: "I often downplay the impact to keep the situation moving.",
  },
  {
    value: "stay-quiet-absorb",
    marker: "D",
    label: "I stay quiet and absorb it",
    description: "I hold the discomfort privately and keep carrying the interaction.",
  },
  {
    value: "function-while-hardening",
    marker: "E",
    label: "I keep functioning, but feel something harden inside",
    description: "Outwardly I stay steady, but internally a colder layer starts forming.",
  },
];

const resentmentSourceOptions: ResentmentChoiceOption[] = [
  { value: "uneven-effort", label: "Uneven effort" },
  { value: "taken-for-granted", label: "Being taken for granted" },
  { value: "repeated-emotional-labor", label: "Repeated emotional labor" },
  { value: "unmet-needs", label: "Unmet needs" },
  { value: "lack-of-appreciation", label: "Lack of appreciation" },
  { value: "unclear-reciprocity", label: "Unclear reciprocity" },
  { value: "overgiving", label: "Overgiving" },
  { value: "low-follow-through", label: "Low follow-through" },
  { value: "lack-of-repair", label: "Lack of repair" },
  { value: "carrying-too-much-alone", label: "Carrying too much alone" },
];

const buildupPatternOptions: ResentmentChoiceOption[] = [
  {
    value: "clear-things-early",
    marker: "A",
    label: "I clear things early",
    description: "Pressure usually gets named before it becomes stored emotional weight.",
  },
  {
    value: "pressure-builds-slowly",
    marker: "B",
    label: "Pressure builds slowly over time",
    description: "The accumulation happens through small repeated moments rather than one obvious rupture.",
  },
  {
    value: "minimize-until-it-spills",
    marker: "C",
    label: "I minimize too much until it spills",
    description: "I downplay the cost until it suddenly feels larger than expected.",
  },
  {
    value: "become-distant-before-admit",
    marker: "D",
    label: "I become distant before I admit what is wrong",
    description: "The system protects by reducing openness before words fully arrive.",
  },
  {
    value: "resentment-arrives-later",
    marker: "E",
    label: "The resentment arrives later than the moment itself",
    description: "The emotional cost keeps developing after the original moment has already passed.",
  },
];

const needNamingOptions: ResentmentChoiceOption[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "mostly-easy", label: "Mostly easy" },
  { value: "mixed", label: "Mixed" },
  { value: "difficult", label: "Difficult" },
  { value: "very-difficult", label: "Very difficult" },
];

export const silenceDriverItems: Array<{ key: SilenceDriverKey; label: string }> = [
  { key: "guilt", label: "guilt" },
  { key: "avoid-conflict", label: "not wanting conflict" },
  { key: "minimize-own-need", label: "minimizing my own need" },
  { key: "hope-it-changes", label: "hoping it will change on its own" },
  { key: "responsible-for-other", label: "feeling responsible for the other person" },
  { key: "seem-demanding", label: "not wanting to seem demanding" },
];

const firstSignOptions: ResentmentChoiceOption[] = [
  {
    value: "inner-irritation",
    marker: "A",
    label: "Inner irritation",
    description: "The first signal is a small internal edge, not yet visible outside.",
  },
  {
    value: "emotional-distance",
    marker: "B",
    label: "Emotional distance",
    description: "I become less open, less relaxed, or less naturally warm.",
  },
  {
    value: "reduced-warmth",
    marker: "C",
    label: "Reduced warmth",
    description: "Care may still be present, but the generosity inside it starts thinning out.",
  },
  {
    value: "passive-compliance-heaviness",
    marker: "D",
    label: "Passive compliance with internal heaviness",
    description: "I keep doing what is needed, but with a heavier inward feeling.",
  },
  {
    value: "shutdown-or-sharpness",
    marker: "E",
    label: "Shutdown or sharpness later",
    description: "The stored load eventually shows up as colder distance or a harder edge.",
  },
];

const carryingFrequencyOptions: ResentmentChoiceOption[] = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
];

export const patternTruthItems: Array<{ key: PatternTruthKey; label: string }> = [
  { key: "say-less-than-feel", label: "I say less than I feel" },
  { key: "keep-giving-while-strained", label: "I keep giving after I am already strained" },
  { key: "builds-quietly-before-notice", label: "Resentment builds quietly before I fully notice it" },
  { key: "pull-back-instead-of-naming", label: "I pull back instead of naming what is wrong" },
  { key: "disappointment-lingers", label: "I feel disappointment long after the moment passed" },
];

const buildupIntensifierOptions: ResentmentChoiceOption[] = [
  { value: "repetition-without-repair", marker: "A", label: "Repetition without repair" },
  { value: "emotional-invisibility", marker: "B", label: "Emotional invisibility" },
  { value: "unfair-responsibility", marker: "C", label: "Unfair responsibility" },
  { value: "no-acknowledgment", marker: "D", label: "No acknowledgment or appreciation" },
  { value: "not-safe-to-say-truth", marker: "E", label: "Feeling like I cannot safely say what is true" },
];

const contextZoneOptions: ResentmentChoiceOption[] = [
  {
    value: "partner-intimacy",
    marker: "P",
    label: "Partner / intimacy",
    description: "The buildup is strongest where closeness and fairness are supposed to be mutual.",
  },
  {
    value: "family",
    marker: "F",
    label: "Family",
    description: "History, obligation, or old roles make it easier to carry and harder to name.",
  },
  {
    value: "friendship",
    marker: "R",
    label: "Friendship",
    description: "Reciprocity or appreciation feel softer and less reliably restored than they should.",
  },
  {
    value: "work",
    marker: "W",
    label: "Work",
    description: "The stored pressure comes from effort, responsibility, or follow-through that does not feel fairly held.",
  },
  {
    value: "emotional-labor-caretaking",
    marker: "E",
    label: "Emotional labor / caretaking",
    description: "You end up carrying mood, regulation, logistics, or emotional maintenance more than feels fair.",
  },
  {
    value: "one-sided-dynamics",
    marker: "O",
    label: "Repeated one-sided dynamics",
    description: "The pattern is less about one person and more about being placed in the same uneven role again and again.",
  },
];

export const resentmentSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "something-feels-off", label: "something feels off or unfair" },
  { key: "stay-quiet-or-soften", label: "I stay quiet or soften it" },
  { key: "keep-carrying-it", label: "I keep carrying it" },
  { key: "distance-or-irritation-builds", label: "distance or irritation builds" },
  { key: "comes-out-later", label: "it comes out later or changes how I relate" },
];

const finalPatternOptions: ResentmentChoiceOption[] = [
  {
    value: "clear-before-serious",
    marker: "A",
    label: "I usually clear things before buildup gets serious",
  },
  {
    value: "builds-in-repeating-areas",
    marker: "B",
    label: "Resentment builds in a few repeating areas",
  },
  {
    value: "notice-later-than-it-starts",
    marker: "C",
    label: "I notice resentment later than the moment it starts",
  },
  {
    value: "keep-adapting-until-colder",
    marker: "D",
    label: "I often keep adapting until I feel emotionally colder or heavier",
  },
  {
    value: "stored-cost-bigger-than-people-see",
    marker: "E",
    label: "The stored cost is bigger than people around me realize",
  },
];

export const resentmentSteps: ResentmentStep[] = [
  {
    id: "initial-response",
    step: 1,
    kind: "scenario-choice",
    field: "initialResponse",
    eyebrow: "Signal 1 · first response",
    question:
      "When something feels unfair, disappointing, or too one-sided, what do you most often do first?",
    hint: "Choose the earliest move in the pattern, not how you explain it later.",
    options: initialResponseOptions,
  },
  {
    id: "inwardly-holding",
    step: 2,
    kind: "slider",
    field: "inwardlyHolding",
    eyebrow: "Signal 2 · internal holding",
    question: "How often do you let something pass outwardly while still feeling it inwardly?",
    hint: "This is about what gets held privately even when the outside remains composed.",
    label: "How much gets held inside",
    minLabel: "Hardly ever",
    maxLabel: "Very often",
  },
  {
    id: "resentment-sources",
    step: 3,
    kind: "multi-select",
    field: "resentmentSources",
    eyebrow: "Signal 3 · resentment sources",
    question: "Which situations tend to create resentment most often for you?",
    hint: "Choose the repeating sources, not only the most recent one.",
    limit: 4,
    options: resentmentSourceOptions,
  },
  {
    id: "buildup-pattern",
    step: 4,
    kind: "visual-choice",
    field: "buildupPattern",
    eyebrow: "Signal 4 · buildup pattern",
    question: "Which visual buildup pattern feels closest to your current experience?",
    hint: "Treat this like a pressure pattern read, not a personality label.",
    options: buildupPatternOptions,
    columns: 2,
  },
  {
    id: "need-naming",
    step: 5,
    kind: "segmented",
    field: "needNaming",
    eyebrow: "Signal 5 · naming early",
    question: "How easy is it for you to name a need before resentment builds?",
    hint: "Choose what is true in practice, not what you believe you should be able to do.",
    options: needNamingOptions,
  },
  {
    id: "silence-driver-ranking",
    step: 6,
    kind: "drag-rank",
    field: "silenceDriverRanking",
    eyebrow: "Signal 6 · silence drivers",
    question: "What most often keeps you from speaking earlier?",
    hint: "Rank the drivers that most reliably keep the truth inside longer than it should stay there.",
    items: silenceDriverItems,
  },
  {
    id: "first-sign",
    step: 7,
    kind: "scenario-choice",
    field: "firstSign",
    eyebrow: "Signal 7 · first sign",
    question: "When resentment builds, how does it usually show up first?",
    hint: "Choose the first emotional or relational shift, not only the later rupture.",
    options: firstSignOptions,
  },
  {
    id: "imbalance-level",
    step: 8,
    kind: "slider",
    field: "imbalanceLevel",
    eyebrow: "Signal 8 · fairness imbalance",
    question: "How much imbalance does the situation currently feel like it has?",
    hint: "Think about effort, care, repair, and responsibility together.",
    label: "Current imbalance level",
    minLabel: "Very balanced",
    maxLabel: "Very uneven",
  },
  {
    id: "carrying-frequency",
    step: 9,
    kind: "segmented",
    field: "carryingFrequency",
    eyebrow: "Signal 9 · carrying too much",
    question: "How often do you feel you are carrying more than you have actually agreed to?",
    hint: "This includes emotional, practical, and relational carrying.",
    options: carryingFrequencyOptions,
  },
  {
    id: "pattern-truth-ranking",
    step: 10,
    kind: "drag-rank",
    field: "patternTruthRanking",
    eyebrow: "Signal 10 · pattern truths",
    question: "Rank these from most to least true for your pattern",
    hint: "Start with the truth that costs the most room or warmth right now.",
    items: patternTruthItems,
  },
  {
    id: "buildup-intensifier",
    step: 11,
    kind: "scenario-choice",
    field: "buildupIntensifier",
    eyebrow: "Signal 11 · intensifier",
    question: "What usually makes the buildup worse over time?",
    hint: "Choose the force that most reliably turns disappointment into stored pressure.",
    options: buildupIntensifierOptions,
  },
  {
    id: "impact-sliders",
    step: 12,
    kind: "triple-slider",
    eyebrow: "Signal 12 · emotional cost",
    question: "How much do these get affected when resentment builds?",
    hint: "Use the sliders to show the quieter relational cost, not only the visible outburst risk.",
    fields: [
      {
        key: "warmthImpact",
        label: "Warmth",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "emotionalAvailabilityImpact",
        label: "Emotional availability",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "patienceImpact",
        label: "Patience",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "strongest-zone",
    step: 13,
    kind: "visual-choice",
    field: "strongestZone",
    eyebrow: "Signal 13 · strongest context",
    question: "Where does the buildup feel strongest?",
    hint: "Choose the context where stored pressure is most likely to gather and remain.",
    options: contextZoneOptions,
    columns: 3,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Signal 14 · buildup order",
    question: "Put these in the order they usually happen for you",
    hint: "Order the pattern as it really unfolds, not only how it looks from the outside.",
    items: resentmentSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final read",
    question: "Which statement feels closest to your current pattern?",
    hint: "This final read aligns the detailed signals with your overall lived sense of the buildup.",
    options: finalPatternOptions,
  },
];

const initialResponseSeverity: Record<InitialResponseValue, number> = {
  "speak-early-clear": 12,
  "hesitate-and-wait": 50,
  "not-a-big-deal": 66,
  "stay-quiet-absorb": 80,
  "function-while-hardening": 92,
};

const resentmentSourceSeverity: Record<ResentmentSourceValue, number> = {
  "uneven-effort": 78,
  "taken-for-granted": 82,
  "repeated-emotional-labor": 86,
  "unmet-needs": 74,
  "lack-of-appreciation": 76,
  "unclear-reciprocity": 72,
  overgiving: 80,
  "low-follow-through": 70,
  "lack-of-repair": 84,
  "carrying-too-much-alone": 88,
};

const buildupPatternSeverity: Record<BuildupPatternValue, number> = {
  "clear-things-early": 12,
  "pressure-builds-slowly": 56,
  "minimize-until-it-spills": 76,
  "become-distant-before-admit": 82,
  "resentment-arrives-later": 70,
};

const needNamingSeverity: Record<NeedNamingValue, number> = {
  "very-easy": 12,
  "mostly-easy": 28,
  mixed: 50,
  difficult: 74,
  "very-difficult": 88,
};

const silenceDriverSeverity: Record<SilenceDriverKey, number> = {
  guilt: 74,
  "avoid-conflict": 70,
  "minimize-own-need": 82,
  "hope-it-changes": 62,
  "responsible-for-other": 84,
  "seem-demanding": 76,
};

const firstSignSeverity: Record<FirstSignValue, number> = {
  "inner-irritation": 52,
  "emotional-distance": 76,
  "reduced-warmth": 72,
  "passive-compliance-heaviness": 78,
  "shutdown-or-sharpness": 88,
};

const carryingFrequencySeverity: Record<CarryingFrequencyValue, number> = {
  never: 8,
  rarely: 26,
  sometimes: 52,
  often: 76,
  "very-often": 90,
};

const patternTruthSeverity: Record<PatternTruthKey, number> = {
  "say-less-than-feel": 74,
  "keep-giving-while-strained": 86,
  "builds-quietly-before-notice": 82,
  "pull-back-instead-of-naming": 80,
  "disappointment-lingers": 72,
};

const buildupIntensifierSeverity: Record<BuildupIntensifierValue, number> = {
  "repetition-without-repair": 90,
  "emotional-invisibility": 84,
  "unfair-responsibility": 86,
  "no-acknowledgment": 78,
  "not-safe-to-say-truth": 88,
};

const contextZoneSeverity: Record<ContextZoneValue, number> = {
  "partner-intimacy": 78,
  family: 76,
  friendship: 68,
  work: 70,
  "emotional-labor-caretaking": 88,
  "one-sided-dynamics": 84,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "clear-before-serious": 18,
  "builds-in-repeating-areas": 48,
  "notice-later-than-it-starts": 64,
  "keep-adapting-until-colder": 82,
  "stored-cost-bigger-than-people-see": 88,
};

const rankingWeights = [28, 22, 18, 14, 10, 8];
const truthRankingWeights = [34, 24, 18, 14, 10];

const sequenceWeights = [30, 24, 18, 16, 12];
const expectedSequence: SequenceKey[] = [
  "something-feels-off",
  "stay-quiet-or-soften",
  "keep-carrying-it",
  "distance-or-irritation-builds",
  "comes-out-later",
];

const scoringWeights = {
  initialResponse: 8,
  inwardlyHolding: 10,
  resentmentSources: 8,
  buildupPattern: 6,
  needNaming: 8,
  silenceDriverRanking: 8,
  firstSign: 6,
  imbalanceLevel: 8,
  carryingFrequency: 8,
  patternTruthRanking: 8,
  buildupIntensifier: 6,
  emotionalCost: 8,
  strongestZone: 4,
  sequenceOrder: 4,
  finalPattern: 4,
} as const;

export const resentmentContexts: ResentmentContext[] = [
  {
    key: "partner-intimacy",
    label: "Partner / intimacy",
    description: "Stored pressure gathers where closeness and mutual effort should feel more reliable than they currently do.",
    accent: "#93C5FD",
  },
  {
    key: "family",
    label: "Family",
    description: "History, obligation, and role expectations make it easier to keep carrying longer than feels fair.",
    accent: "#FCD34D",
  },
  {
    key: "friendship",
    label: "Friendship",
    description: "Reciprocity, follow-through, or emotional balance may be softer than the bond itself suggests.",
    accent: "#6EE7B7",
  },
  {
    key: "work",
    label: "Work",
    description: "Responsibility and effort may be accumulating in ways that are not being restored through clarity, appreciation, or support.",
    accent: "#C4B5FD",
  },
  {
    key: "emotional-labor-caretaking",
    label: "Emotional labor / caretaking",
    description: "You may be carrying regulation, support, or maintenance work that has quietly become too one-sided.",
    accent: "#FB7185",
  },
  {
    key: "one-sided-dynamics",
    label: "Repeated one-sided dynamics",
    description: "The stored load is strongest where you keep landing in the same uneven role across time.",
    accent: "#FDA4AF",
  },
];

export const buildupDrivers: BuildupDriver[] = [
  {
    key: "guilt",
    label: "Guilt-led silence",
    description: "The system keeps carrying because disappointing someone feels heavier than disappointing yourself.",
    accent: "#FCD34D",
  },
  {
    key: "avoid-conflict",
    label: "Conflict avoidance",
    description: "Short-term smoothness gets prioritized, even when the cost reappears later as stored irritation or distance.",
    accent: "#93C5FD",
  },
  {
    key: "minimize-own-need",
    label: "Need minimization",
    description: "Your own need gets downgraded so often that the emotional cost has to show up later in a different form.",
    accent: "#C4B5FD",
  },
  {
    key: "hope-it-changes",
    label: "Waiting for change without naming it",
    description: "You keep leaving room for the pattern to improve on its own, which prolongs the carrying phase.",
    accent: "#6EE7B7",
  },
  {
    key: "responsible-for-other",
    label: "Emotional responsibility for the other person",
    description: "You absorb more of the emotional load because someone else’s discomfort feels yours to manage.",
    accent: "#FB7185",
  },
  {
    key: "seem-demanding",
    label: "Fear of seeming demanding",
    description: "The need stays quiet because asking for balance or care feels too risky for your self-image or the relationship tone.",
    accent: "#FDA4AF",
  },
];

const reliefDirections: ReliefDirection[] = [
  {
    key: "name-earlier",
    label: "Name the strain earlier",
    description: "Catch the signal before the system has already converted it into stored heaviness.",
    accent: "#93C5FD",
  },
  {
    key: "restore-fairness",
    label: "Restore fairness sooner",
    description: "Do not let effort, repair, or responsibility stay uneven long enough to become the emotional baseline.",
    accent: "#FCD34D",
  },
  {
    key: "reduce-silent-carrying",
    label: "Reduce silent carrying",
    description: "Notice where you are holding extra labor or disappointment without actively redistributing it.",
    accent: "#C4B5FD",
  },
  {
    key: "speak-before-hardening",
    label: "Speak before hardening begins",
    description: "Treat distance, coolness, or internal heaviness as early protection signals rather than personality shifts.",
    accent: "#FB7185",
  },
  {
    key: "rebuild-reciprocity",
    label: "Rebuild reciprocity",
    description: "Look for concrete ways the exchange can become more mutual, acknowledged, and repairable over time.",
    accent: "#6EE7B7",
  },
];

const emotionalCostTemplates: Omit<EmotionalCostArea, "value">[] = [
  {
    key: "warmth-reduction",
    label: "Warmth reduction",
    description: "Care may still exist, but the natural generosity inside it begins to thin out.",
    accent: "#FCD34D",
  },
  {
    key: "availability-drop",
    label: "Emotional availability drop",
    description: "The system becomes less open, less soft, or less willing to keep offering the same level of access.",
    accent: "#93C5FD",
  },
  {
    key: "patience-drain",
    label: "Patience drain",
    description: "Tolerance narrows because too much has been privately carried for too long.",
    accent: "#C4B5FD",
  },
  {
    key: "distance-risk",
    label: "Distance or shutdown risk",
    description: "Withdrawal starts feeling easier because the system is trying not to store any more unpaid emotional cost.",
    accent: "#FB7185",
  },
];

export const relatedResentmentTools: RelatedResentmentTool[] = [
  {
    title: "Boundary Strength Scanner",
    description: "See whether limits are getting delayed, softened, or missed in the moment before the later buildup begins.",
    category: "Boundaries & People-Pleasing",
    minutes: "6 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "People-Pleasing Signal Check",
    description: "Trace whether approval pressure or over-accommodation is helping the resentment system fill up quietly.",
    category: "Boundaries & People-Pleasing",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "people-pleasing-signal-check", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Relationship Clarity Check",
    description: "Separate stored resentment from confusion caused by mixed signals, weak reciprocity, or unclear effort.",
    category: "Relationships & Attachment",
    minutes: "5 min",
    icon: "signal",
    href: buildToolHref({ slug: "relationship-clarity-check", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Emotional Trigger Decoder",
    description: "Read the activation layer beneath stored resentment so later irritation or withdrawal makes more sense.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "emotional-trigger-decoder", categorySlug: "emotional-regulation" }),
  },
];

export const resentmentFaqItems: FaqItem[] = [
  {
    question: "What does a resentment buildup score actually mean?",
    answer:
      "It is a directional read of how much emotional pressure appears to be accumulating through silence, imbalance, or repeated self-override. It describes stored load, not character and not a diagnosis.",
  },
  {
    question: "Why does resentment build slowly instead of all at once?",
    answer:
      "Because it often forms through repetition. Small moments that are not repaired, acknowledged, or redistributed can pile up until the emotional after-cost becomes heavier than the original event.",
  },
  {
    question: "Is resentment always caused by weak boundaries?",
    answer:
      "No. Boundaries may be one part of it, but resentment can also build through unfairness, lack of repair, emotional invisibility, unclear reciprocity, or having no safe channel to speak honestly.",
  },
  {
    question: "Why do I feel cold later instead of upset in the moment?",
    answer:
      "Because the system may stay functional first and store the cost second. The colder feeling often appears after the carrying phase, when distance becomes the easiest way to stop absorbing more.",
  },
  {
    question: "What is the difference between resentment and irritation?",
    answer:
      "Irritation can be brief and situational. Resentment usually has memory. It carries the sense that something important has stayed unfair, unseen, or unrepaired across time.",
  },
  {
    question: "Can resentment build even when I care deeply about the person?",
    answer:
      "Yes. Care does not prevent resentment. In some cases it increases the risk, because people will keep adapting, giving, or carrying longer in relationships they value.",
  },
  {
    question: "Why does unfairness feel heavier over time?",
    answer:
      "Because repeated unfairness starts affecting meaning, not just workload. It changes how safe, mutual, or appreciated the relationship or environment feels, which is why the cost expands beyond the original task or moment.",
  },
  {
    question: "How do I know if I am carrying more than I realize?",
    answer:
      "A clue is delayed heaviness: feeling fine enough in the moment, then later noticing distance, sharpness, low warmth, or a private sense that too much keeps landing on you.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it when a repeating dynamic changes, after an important conversation or repair attempt, or when you notice that distance, heaviness, or patience loss is becoming more or less active than before.",
  },
  {
    question: "What should I do if distance has already started to build?",
    answer:
      "Treat the distance as information, not failure. It often means the system has been carrying too much for too long. The next step is usually clearer naming, fairer redistribution, and more repair, not forcing immediate warmth back on top of unresolved weight.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What this tracker is actually reading",
    paragraphs: [
      "This tool is not measuring whether you are angry or whether you have a right to feel frustrated. It is reading accumulation. Specifically, it is reading what happens when a person keeps adapting to disappointment, uneven effort, low repair, or unspoken need for longer than their system can metabolize cleanly.",
      "That matters because resentment is often misunderstood as a dramatic emotion. In real life it is frequently quieter. It can look like carrying on, keeping things smooth, staying helpful, or appearing fine, while internally a memory of imbalance is building pressure. The outward behavior may still look functional. The inward state is where the accumulation lives.",
    ],
  },
  {
    title: "Why the score is only the headline",
    paragraphs: [
      "The total score tells you how much stored emotional pressure appears to be active right now, but the more useful information is usually underneath it. Is the problem mainly that needs stay unspoken? Is the issue fairness and reciprocity? Is it the amount of silent carrying? Or is the real shift showing up later as distance, reduced warmth, or hardening?",
      "Those are different pathways into resentment, and they do not all need the same response. That is why this tool also points to a primary buildup driver, a strongest context, the emotional cost showing up most clearly, and the relief direction likely to help first.",
    ],
  },
  {
    title: "How to read the result without turning it into blame",
    paragraphs: [
      "Resentment often forms because something meaningful is being over-carried, under-repaired, or left unspoken for too long. That does not automatically mean someone is villainous, and it does not automatically mean you are weak. It means a cost is staying active without enough truth, fairness, or adjustment to release it.",
      "A higher result usually means the system has stopped treating the issue as small. The emotional body has registered the imbalance, even if the outward self keeps minimizing it. Read that as information. The point is not to become harsher. It is to become more accurate about what has been stored.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "unspokenNeedLoad",
    paragraphs: [
      "Unspoken Need Load measures how much emotional weight is building because important needs are being delayed, softened, or privately managed rather than named. This is often where resentment begins: not with rage, but with a steady refusal to fully count your own need in real time.",
      "When this score is higher, the person may still look considerate, patient, or adaptable. But under the surface, the system is carrying unmet truth. The more often that happens, the more likely resentment becomes the place where those uncounted needs eventually try to make themselves felt.",
    ],
  },
  {
    key: "fairnessImbalance",
    paragraphs: [
      "Fairness Imbalance measures how uneven the dynamic currently feels across effort, repair, reciprocity, or acknowledgment. Resentment tends to thicken when the system stops believing that balance will return on its own.",
      "This dimension matters because fairness is not only practical. It is emotional. When the exchange stays one-sided long enough, people do not only feel tired. They start feeling less safe to keep giving in the same way. That is often where warmth begins to change.",
    ],
  },
  {
    key: "silentCarryingPressure",
    paragraphs: [
      "Silent Carrying Pressure measures how much weight is being absorbed without being redistributed, clarified, or openly processed. This includes emotional labor, invisible problem-solving, holding disappointment privately, and continuing after your real room has already narrowed.",
      "High silent carrying often creates a delayed emotional bill. The person may stay reasonable in the moment, but the system keeps adding internal weight. Later, that stored weight shows up as heaviness, irritability, reduced generosity, or the need to pull back.",
    ],
  },
  {
    key: "withdrawalHardeningRisk",
    paragraphs: [
      "Withdrawal / Hardening Risk measures how likely the stored pressure is to show up later as coolness, less patience, reduced openness, or a sharper emotional edge. This is the protective end of the resentment system.",
      "Many people think resentment should look loud if it is real. Often it does not. Often it looks like less warmth, less easy access, less softness, or a feeling that you cannot keep offering the same level of emotional availability without betraying yourself.",
    ],
  },
];

export const feedBlocks: ContentBlock[] = [
  {
    title: "Repeated over-accommodation",
    body:
      "When you keep adjusting to what others need without updating the exchange honestly, the system learns that your own strain is expected to stay private.",
  },
  {
    title: "Weak repair after the impact",
    body:
      "Resentment grows quickly when the original moment passes but the acknowledgment, repair, or change never really arrives.",
  },
  {
    title: "Feeling unseen or unacknowledged",
    body:
      "The emotional cost gets heavier when the labor, care, or carrying you provide is treated like background rather than something real and finite.",
  },
  {
    title: "Carrying more than feels fair",
    body:
      "Stored pressure rises when the system notices that the exchange is repeatedly unequal, even if nobody is naming that inequality directly.",
  },
  {
    title: "Minimizing personal need",
    body:
      "If your need keeps getting framed as too small to mention, too inconvenient, or too much trouble, resentment often becomes the place where it returns with more weight.",
  },
  {
    title: "No safe channel for the truth",
    body:
      "When saying what is true feels emotionally risky, the system may choose silence first and distance later. That is one of the clearest resentment pathways.",
  },
];

export const relieveBlocks: ContentBlock[] = [
  {
    title: "Naming earlier",
    body:
      "Earlier truth usually costs less than later hardening. The goal is not perfect confrontation. It is reducing the amount of unpaid emotional carrying that accumulates in silence.",
  },
  {
    title: "Restoring fairness",
    body:
      "Resentment softens when responsibility, effort, and repair become more mutual. Fairness does not have to be identical. It does have to feel alive.",
  },
  {
    title: "Reducing silent carrying",
    body:
      "Notice where you are doing invisible emotional or practical work and treat that carrying as real load rather than background personality.",
  },
  {
    title: "Speaking before hardening",
    body:
      "Distance, low warmth, and heaviness are often earlier than people think. If you notice them sooner, they can become signals instead of the new normal.",
  },
  {
    title: "Reading resentment as a signal",
    body:
      "Resentment usually points to miscounted cost, not personal failure. Reading it accurately makes change more possible and shame less useful.",
  },
  {
    title: "Rebuilding reciprocity",
    body:
      "Where possible, look for concrete shifts in acknowledgment, repair, responsiveness, and shared responsibility. Stored pressure drops when the exchange becomes more believable again.",
  },
];

export const resentmentStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Fine on the outside, carrying far too much inside",
  quote:
    "This can build through a long line of small yeses: one more favor, one more emotional check-in, one more task nobody really asked whether there was room to carry. Nothing looks dramatic at first. The person stays helpful, warm enough, and outwardly fine. A few weeks later, replies feel flatter, simple interactions start feeling heavier, and irritation appears over things that seem too small to explain it. What changed is usually not character. It is the amount of uncounted emotional weight being carried without saying so.",
  takeaway:
    "This is how resentment often works: the later coldness makes more sense once you can see the earlier silence, imbalance, and private over-carrying that built it.",
  toneLabel: "Emotionally real",
  accent: "#FCD34D",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, the first step is usually not forcing yourself to be warmer or more patient. It is becoming more accurate about where the load is actually accumulating. Notice which moments you smooth over, which needs you downgrade, and where effort or repair stops feeling believable enough to reset the exchange.",
  "The next move is often earlier naming with lower drama. Resentment tends to grow when truth waits until the system is already colder. Speaking earlier does not require turning every strain into a major conversation. It often looks like smaller, clearer acknowledgments of what is not working, what feels uneven, and what cannot keep being privately absorbed.",
  "The long-term goal is not to become less caring. It is to stop using private carrying as the main way you protect connection. When fairness, reciprocity, and acknowledgment return sooner, the emotional body no longer has to hold so much evidence for so long.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Resentment Reset Guide",
  description:
    "A structured guide for recognizing buildup earlier, reducing silent carrying, and restoring clearer, fairer emotional exchange before distance hardens.",
  buttonLabel: "View Next Step",
};

export const resentmentBuildupTrackerMetadata = {
  title: resentmentBuildupMetadata.title,
  description: resentmentBuildupMetadata.description,
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
  return resentmentBands.find((band) => score >= band.min && score <= band.max) ?? resentmentBands[0];
}

function getRankingScore(order: SilenceDriverKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = rankingWeights.reduce((sum, value) => sum + value, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const weight = rankingWeights[index] ?? rankingWeights[rankingWeights.length - 1];
    return sum + silenceDriverSeverity[key] * weight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getTruthRankingScore(order: PatternTruthKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = truthRankingWeights.reduce((sum, value) => sum + value, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const weight = truthRankingWeights[index] ?? truthRankingWeights[truthRankingWeights.length - 1];
    return sum + patternTruthSeverity[key] * weight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getSequenceScore(order: SequenceKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = sequenceWeights.reduce((sum, value) => sum + value, 0);
  const weightedFit = order.reduce((sum, key, index) => {
    const expectedIndex = expectedSequence.indexOf(key);
    const mismatch = Math.abs(expectedIndex - index);
    const fitScore = clampScore(100 - (mismatch / (expectedSequence.length - 1)) * 100);
    const weight = sequenceWeights[index] ?? sequenceWeights[sequenceWeights.length - 1];
    return sum + fitScore * weight;
  }, 0);

  return clampScore(weightedFit / totalWeight);
}

function getContextScores(answers: ResentmentAnswers): ResentmentContextScore[] {
  const totals: Record<ContextZoneValue, number[]> = {
    "partner-intimacy": [],
    family: [],
    friendship: [],
    work: [],
    "emotional-labor-caretaking": [],
    "one-sided-dynamics": [],
  };

  const push = (key: ContextZoneValue, value: number) => {
    totals[key].push(value);
  };

  answers.resentmentSources.forEach((source) => {
    switch (source) {
      case "uneven-effort":
        push("one-sided-dynamics", 84);
        push("partner-intimacy", 72);
        break;
      case "taken-for-granted":
        push("family", 80);
        push("work", 74);
        push("one-sided-dynamics", 76);
        break;
      case "repeated-emotional-labor":
        push("emotional-labor-caretaking", 90);
        push("family", 72);
        push("partner-intimacy", 68);
        break;
      case "unmet-needs":
        push("partner-intimacy", 80);
        push("friendship", 66);
        break;
      case "lack-of-appreciation":
        push("work", 78);
        push("family", 74);
        break;
      case "unclear-reciprocity":
        push("friendship", 76);
        push("partner-intimacy", 72);
        push("one-sided-dynamics", 78);
        break;
      case "overgiving":
        push("emotional-labor-caretaking", 84);
        push("one-sided-dynamics", 80);
        break;
      case "low-follow-through":
        push("work", 72);
        push("partner-intimacy", 70);
        push("friendship", 68);
        break;
      case "lack-of-repair":
        push("partner-intimacy", 84);
        push("family", 80);
        push("friendship", 72);
        break;
      case "carrying-too-much-alone":
        push("emotional-labor-caretaking", 88);
        push("work", 76);
        push("family", 82);
        break;
    }
  });

  if (answers.strongestZone) {
    push(answers.strongestZone, contextZoneSeverity[answers.strongestZone]);
  }

  if (answers.buildupIntensifier === "unfair-responsibility") {
    push("one-sided-dynamics", 80);
    push("emotional-labor-caretaking", 74);
  }

  return resentmentContexts
    .map((context) => ({
      ...context,
      value: clampScore(average(totals[context.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getReliefDirection(
  driver: BuildupDriver,
  dimensions: Record<ResentmentDimensionKey, number>,
  strongestCost: EmotionalCostArea,
) {
  if (dimensions.withdrawalHardeningRisk >= 74 || strongestCost.key === "distance-risk") {
    return reliefDirections.find((item) => item.key === "speak-before-hardening") ?? reliefDirections[0];
  }

  if (dimensions.fairnessImbalance >= 74) {
    return reliefDirections.find((item) => item.key === "restore-fairness") ?? reliefDirections[0];
  }

  if (dimensions.silentCarryingPressure >= 72) {
    return reliefDirections.find((item) => item.key === "reduce-silent-carrying") ?? reliefDirections[0];
  }

  if (driver.key === "minimize-own-need") {
    return reliefDirections.find((item) => item.key === "name-earlier") ?? reliefDirections[0];
  }

  return reliefDirections.find((item) => item.key === "rebuild-reciprocity") ?? reliefDirections[0];
}

export function getInitialResentmentAnswers(): ResentmentAnswers {
  return {
    resentmentSources: [],
    silenceDriverRanking: silenceDriverItems.map((item) => item.key),
    silenceDriverRankingConfirmed: false,
    patternTruthRanking: patternTruthItems.map((item) => item.key),
    patternTruthRankingConfirmed: false,
    sequenceOrder: resentmentSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isResentmentStepComplete(step: ResentmentStep, answers: ResentmentAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  if (step.kind === "drag-rank") {
    if (step.field === "silenceDriverRanking") {
      return answers.silenceDriverRanking.length === step.items.length && answers.silenceDriverRankingConfirmed;
    }

    return answers.patternTruthRanking.length === step.items.length && answers.patternTruthRankingConfirmed;
  }

  if (step.kind === "sequence-order") {
    return answers.sequenceOrder.length === step.items.length && answers.sequenceConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateResentmentResult(answers: ResentmentAnswers): ResentmentResult {
  const initialResponse = answers.initialResponse ? initialResponseSeverity[answers.initialResponse] : undefined;
  const inwardlyHolding =
    typeof answers.inwardlyHolding === "number" ? clampScore(answers.inwardlyHolding) : undefined;
  const resentmentSourcesScore =
    answers.resentmentSources.length > 0
      ? clampScore(
          average(answers.resentmentSources.map((item) => resentmentSourceSeverity[item])) * 0.76 +
            (answers.resentmentSources.length / 4) * 18,
        )
      : undefined;
  const buildupPattern = answers.buildupPattern ? buildupPatternSeverity[answers.buildupPattern] : undefined;
  const needNaming = answers.needNaming ? needNamingSeverity[answers.needNaming] : undefined;
  const silenceDriverRanking = answers.silenceDriverRankingConfirmed
    ? getRankingScore(answers.silenceDriverRanking)
    : undefined;
  const firstSign = answers.firstSign ? firstSignSeverity[answers.firstSign] : undefined;
  const imbalanceLevel =
    typeof answers.imbalanceLevel === "number" ? clampScore(answers.imbalanceLevel) : undefined;
  const carryingFrequency = answers.carryingFrequency
    ? carryingFrequencySeverity[answers.carryingFrequency]
    : undefined;
  const patternTruthRanking = answers.patternTruthRankingConfirmed
    ? getTruthRankingScore(answers.patternTruthRanking)
    : undefined;
  const buildupIntensifier = answers.buildupIntensifier
    ? buildupIntensifierSeverity[answers.buildupIntensifier]
    : undefined;
  const warmthImpact = typeof answers.warmthImpact === "number" ? clampScore(answers.warmthImpact) : undefined;
  const emotionalAvailabilityImpact =
    typeof answers.emotionalAvailabilityImpact === "number"
      ? clampScore(answers.emotionalAvailabilityImpact)
      : undefined;
  const patienceImpact = typeof answers.patienceImpact === "number" ? clampScore(answers.patienceImpact) : undefined;
  const emotionalCost =
    typeof warmthImpact === "number" &&
    typeof emotionalAvailabilityImpact === "number" &&
    typeof patienceImpact === "number"
      ? clampScore((warmthImpact + emotionalAvailabilityImpact + patienceImpact) / 3)
      : undefined;
  const strongestZone = answers.strongestZone ? contextZoneSeverity[answers.strongestZone] : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: initialResponse, weight: scoringWeights.initialResponse },
    { value: inwardlyHolding, weight: scoringWeights.inwardlyHolding },
    { value: resentmentSourcesScore, weight: scoringWeights.resentmentSources },
    { value: buildupPattern, weight: scoringWeights.buildupPattern },
    { value: needNaming, weight: scoringWeights.needNaming },
    { value: silenceDriverRanking, weight: scoringWeights.silenceDriverRanking },
    { value: firstSign, weight: scoringWeights.firstSign },
    { value: imbalanceLevel, weight: scoringWeights.imbalanceLevel },
    { value: carryingFrequency, weight: scoringWeights.carryingFrequency },
    { value: patternTruthRanking, weight: scoringWeights.patternTruthRanking },
    { value: buildupIntensifier, weight: scoringWeights.buildupIntensifier },
    { value: emotionalCost, weight: scoringWeights.emotionalCost },
    { value: strongestZone, weight: scoringWeights.strongestZone },
    { value: sequenceOrder, weight: scoringWeights.sequenceOrder },
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

  const dimensions: Record<ResentmentDimensionKey, number> = {
    unspokenNeedLoad: weightedAverage([
      { value: needNaming, weight: 0.32 },
      { value: inwardlyHolding, weight: 0.26 },
      {
        value:
          answers.initialResponse === "not-a-big-deal"
            ? 74
            : answers.initialResponse === "stay-quiet-absorb"
              ? 84
              : answers.initialResponse === "function-while-hardening"
                ? 88
                : undefined,
        weight: 0.16,
      },
      { value: silenceDriverRanking, weight: 0.14 },
      {
        value:
          answers.patternTruthRanking[0] === "say-less-than-feel"
            ? 84
            : answers.patternTruthRanking[0] === "builds-quietly-before-notice"
              ? 72
              : undefined,
        weight: 0.12,
      },
    ]),
    fairnessImbalance: weightedAverage([
      { value: imbalanceLevel, weight: 0.34 },
      { value: resentmentSourcesScore, weight: 0.22 },
      { value: buildupIntensifier, weight: 0.16 },
      { value: strongestZone, weight: 0.08 },
      { value: carryingFrequency, weight: 0.1 },
      { value: finalPattern, weight: 0.1 },
    ]),
    silentCarryingPressure: weightedAverage([
      { value: inwardlyHolding, weight: 0.24 },
      { value: carryingFrequency, weight: 0.22 },
      { value: silenceDriverRanking, weight: 0.16 },
      { value: patternTruthRanking, weight: 0.18 },
      { value: sequenceOrder, weight: 0.2 },
    ]),
    withdrawalHardeningRisk: weightedAverage([
      { value: firstSign, weight: 0.18 },
      { value: warmthImpact, weight: 0.14 },
      { value: emotionalAvailabilityImpact, weight: 0.18 },
      { value: patienceImpact, weight: 0.12 },
      { value: buildupPattern, weight: 0.14 },
      { value: finalPattern, weight: 0.12 },
      { value: sequenceOrder, weight: 0.12 },
    ]),
  };

  const contextScores = getContextScores(answers);
  const mainResentmentContext = contextScores[0] ?? resentmentContexts[0];
  const primaryBuildupDriver =
    buildupDrivers.find((driver) => driver.key === answers.silenceDriverRanking[0]) ?? buildupDrivers[0];

  const emotionalCosts = [
    {
      ...emotionalCostTemplates[0],
      value: warmthImpact ?? 30,
    },
    {
      ...emotionalCostTemplates[1],
      value: emotionalAvailabilityImpact ?? 34,
    },
    {
      ...emotionalCostTemplates[2],
      value: patienceImpact ?? 36,
    },
    {
      ...emotionalCostTemplates[3],
      value: clampScore(
        weightedAverage([
          { value: dimensions.withdrawalHardeningRisk, weight: 0.72 },
          { value: firstSign, weight: 0.28 },
        ]),
      ),
    },
  ] satisfies EmotionalCostArea[];

  emotionalCosts.sort((left, right) => right.value - left.value);

  const strongestEmotionalCost = emotionalCosts[0];
  const mostUsefulReliefDirection = getReliefDirection(
    primaryBuildupDriver,
    dimensions,
    strongestEmotionalCost,
  );

  const buildupIntensity = clampScore(
    weightedAverage([
      { value: dimensions.unspokenNeedLoad, weight: 0.24 },
      { value: dimensions.fairnessImbalance, weight: 0.26 },
      { value: dimensions.silentCarryingPressure, weight: 0.3 },
      { value: dimensions.withdrawalHardeningRisk, weight: 0.2 },
    ]),
  );
  const fairnessImbalanceLevel = dimensions.fairnessImbalance;
  const carryingLoadLevel = dimensions.silentCarryingPressure;
  const withdrawalRiskLevel = dimensions.withdrawalHardeningRisk;

  const previewMetrics: PreviewMetric[] = [
    { label: "Buildup intensity", value: buildupIntensity, accent: "#FB7185" },
    { label: "Fairness imbalance", value: fairnessImbalanceLevel, accent: "#FCD34D" },
    { label: "Unspoken need load", value: dimensions.unspokenNeedLoad, accent: "#93C5FD" },
    { label: "Silent carrying", value: carryingLoadLevel, accent: "#6EE7B7" },
    { label: "Withdrawal risk", value: withdrawalRiskLevel, accent: "#C4B5FD" },
  ];

  const curveStages: CurveStage[] = [
    {
      label: "What lands",
      value: clampScore(weightedAverage([{ value: fairnessImbalanceLevel, weight: 1 }])),
      accent: "#FCD34D",
      description: "A moment of imbalance, disappointment, or one-sidedness gets registered.",
    },
    {
      label: "What stays inside",
      value: dimensions.unspokenNeedLoad,
      accent: "#93C5FD",
      description: "The need or impact remains present, but not fully spoken or redistributed.",
    },
    {
      label: "What keeps being carried",
      value: carryingLoadLevel,
      accent: "#C4B5FD",
      description: "The system continues carrying the weight across time, roles, or repeated moments.",
    },
    {
      label: "What changes relationally",
      value: clampScore(((warmthImpact ?? 34) + (emotionalAvailabilityImpact ?? 36)) / 2),
      accent: "#FDA4AF",
      description: "Warmth and openness begin to shift before the stored pressure is fully named.",
    },
    {
      label: "What hardens later",
      value: withdrawalRiskLevel,
      accent: "#FB7185",
      description: "Distance, shutdown, or sharpness start protecting against carrying more.",
    },
  ];

  const resentmentLabel =
    "Your pattern suggests that resentment is building less from one dramatic event and more from repeated moments where fairness, effort, or emotional acknowledgment are not being restored in time.";
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The buildup appears strongest around ${mainResentmentContext.label.toLowerCase()} and is being led most by ${primaryBuildupDriver.label.toLowerCase()}.`;
  const hardeningInsight = `${band.hardeningLead} The clearest emotional cost showing first is ${strongestEmotionalCost.label.toLowerCase()}, which suggests the stored load is beginning to change how available the system can stay.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryBuildupDriver,
    mainResentmentContext,
    strongestEmotionalCost,
    mostUsefulReliefDirection,
    contextScores,
    emotionalCosts,
    previewMetrics,
    curveStages,
    resentmentLabel,
    interpretation,
    standout,
    hardeningInsight,
    buildupIntensity,
    fairnessImbalanceLevel,
    carryingLoadLevel,
    withdrawalRiskLevel,
  };
}

export const heroPreviewResult = calculateResentmentResult({
  initialResponse: "stay-quiet-absorb",
  inwardlyHolding: 78,
  resentmentSources: [
    "repeated-emotional-labor",
    "carrying-too-much-alone",
    "lack-of-repair",
    "taken-for-granted",
  ],
  buildupPattern: "resentment-arrives-later",
  needNaming: "difficult",
  silenceDriverRanking: [
    "responsible-for-other",
    "minimize-own-need",
    "avoid-conflict",
    "guilt",
    "hope-it-changes",
    "seem-demanding",
  ],
  silenceDriverRankingConfirmed: true,
  firstSign: "emotional-distance",
  imbalanceLevel: 74,
  carryingFrequency: "often",
  patternTruthRanking: [
    "builds-quietly-before-notice",
    "keep-giving-while-strained",
    "pull-back-instead-of-naming",
    "say-less-than-feel",
    "disappointment-lingers",
  ],
  patternTruthRankingConfirmed: true,
  buildupIntensifier: "repetition-without-repair",
  warmthImpact: 72,
  emotionalAvailabilityImpact: 78,
  patienceImpact: 68,
  strongestZone: "emotional-labor-caretaking",
  sequenceOrder: [
    "something-feels-off",
    "stay-quiet-or-soften",
    "keep-carrying-it",
    "distance-or-irritation-builds",
    "comes-out-later",
  ],
  sequenceConfirmed: true,
  finalPattern: "keep-adapting-until-colder",
});
