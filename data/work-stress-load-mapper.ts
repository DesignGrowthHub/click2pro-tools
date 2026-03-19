import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type PrimaryLoadSourceValue =
  | "too-much-volume"
  | "too-much-switching"
  | "too-much-ambiguity"
  | "too-many-people-needs"
  | "too-little-control";

export type PressureSourceValue =
  | "deadlines"
  | "interruptions"
  | "role-ambiguity"
  | "meetings"
  | "emotional-labor"
  | "reactive-requests"
  | "lack-of-control"
  | "context-switching"
  | "invisible-responsibility"
  | "under-recognition";

export type LoadPatternValue =
  | "steady-and-manageable"
  | "busy-but-structured"
  | "fragmented-and-reactive"
  | "heavy-and-ambiguous"
  | "always-carrying-more-than-visible";

export type RankedStressKey =
  | "too-much-volume"
  | "unclear-expectations"
  | "switching-tasks-too-often"
  | "other-peoples-urgency"
  | "emotional-labor"
  | "lack-of-recognition-or-support";

export type SwitchingFrequencyValue =
  | "rarely"
  | "sometimes"
  | "often"
  | "very-often"
  | "constantly";

export type FamiliarWorkPatternValue =
  | "full-but-workable"
  | "carrying-more-than-role-shows"
  | "fragmentation-more-than-volume"
  | "unclear-expectations-drain"
  | "people-pressure-heavier";

export type RecoveryFactorValue =
  | "follows-me-mentally"
  | "no-clear-stopping-point"
  | "never-feel-fully-caught-up"
  | "emotional-tone-stays-with-me"
  | "absorb-too-much-without-relief";

export type StressZoneValue =
  | "workload-volume"
  | "meetings-interruptions"
  | "expectations-ambiguity"
  | "people-emotional-labor"
  | "invisible-responsibility"
  | "low-control-low-autonomy";

export type LoadVisibilityValue =
  | "very-visible"
  | "mostly-visible"
  | "mixed"
  | "often-underseen"
  | "barely-recognized";

export type SequenceKey =
  | "work-pressure-rises"
  | "switching-or-ambiguity-increases"
  | "clarity-drops"
  | "strain-builds"
  | "recovery-hardens";

export type FinalPatternValue =
  | "real-but-manageable"
  | "heavier-because-fragmented"
  | "carrying-more-than-obvious"
  | "control-and-clarity-too-low"
  | "distribution-makes-it-heavier";

export type WorkStressDimensionKey =
  | "demandDensity"
  | "controlDeficit"
  | "fragmentationLoad"
  | "hiddenEmotionalBurden";

export type WorkStressBandKey =
  | "manageable-work-load"
  | "mild-structural-strain"
  | "fragmented-work-pressure"
  | "high-work-stress-concentration"
  | "overloaded-low-control-work-pattern";

export type StressDriverKey =
  | "volume-overload"
  | "ambiguity-drag"
  | "switching-friction"
  | "people-pressure"
  | "emotional-labor"
  | "low-control"
  | "invisible-responsibility"
  | "under-recognition";

export type HiddenCostKey =
  | "clarity-drop"
  | "patience-erosion"
  | "poor-recovery-after-work"
  | "under-recognized-overload";

export type LoadAdjustmentKey =
  | "clarify-the-work-structure"
  | "reduce-switching"
  | "restore-control"
  | "make-invisible-load-visible"
  | "rebalance-people-pressure"
  | "protect-stopping-points";

export type WorkStressChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type WorkStressAnswers = {
  primaryLoadSource?: PrimaryLoadSourceValue;
  overallOverload?: number;
  pressureSources: PressureSourceValue[];
  loadPattern?: LoadPatternValue;
  controlLevel?: number;
  rankingOrder: RankedStressKey[];
  rankingConfirmed: boolean;
  switchingFrequency?: SwitchingFrequencyValue;
  familiarWorkPattern?: FamiliarWorkPatternValue;
  emotionalLabor?: number;
  clarityImpact?: number;
  patienceImpact?: number;
  recoveryImpact?: number;
  hardestRecoveryFactor?: RecoveryFactorValue;
  stressZone?: StressZoneValue;
  loadVisibility?: LoadVisibilityValue;
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
    | "primaryLoadSource"
    | "familiarWorkPattern"
    | "hardestRecoveryFactor"
    | "finalPattern";
  options: WorkStressChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "switchingFrequency" | "loadVisibility";
  options: WorkStressChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "overallOverload" | "controlLevel" | "emotionalLabor";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "pressureSources";
  limit: number;
  options: WorkStressChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: RankedStressKey;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "clarityImpact" | "patienceImpact" | "recoveryImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "loadPattern" | "stressZone";
  options: WorkStressChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type WorkStressStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type WorkStressDimension = {
  key: WorkStressDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type WorkStressBand = {
  key: WorkStressBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  sourceLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type StressDriver = {
  key: StressDriverKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type StressDriverScore = StressDriver & {
  value: number;
};

export type StressZone = {
  key: StressZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type HiddenCostMetric = {
  key: HiddenCostKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type WorkLoadAdjustment = {
  key: LoadAdjustmentKey;
  label: string;
  description: string;
  accent: string;
};

export type PreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type LoadDistributionSegment = {
  key: string;
  label: string;
  value: number;
  accent: string;
  note: string;
};

export type RelatedWorkStressTool = {
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

export type WorkStressResult = {
  score: number;
  completionRatio: number;
  band: WorkStressBand;
  dimensions: Record<WorkStressDimensionKey, number>;
  primaryStressDriver: StressDriverScore;
  heaviestConcentrationZone: StressZone;
  strongestHiddenCost: HiddenCostMetric;
  mostUsefulWorkLoadAdjustment: WorkLoadAdjustment;
  sourceScores: StressDriverScore[];
  loadSegments: LoadDistributionSegment[];
  hiddenCosts: HiddenCostMetric[];
  previewMetrics: PreviewMetric[];
  loadLabel: string;
  interpretation: string;
  standout: string;
  sourceInsight: string;
  demandLevel: number;
  controlLevel: number;
  switchingLoad: number;
  ambiguityPressure: number;
  invisibleBurdenLevel: number;
  peoplePressureLevel: number;
  recoveryCost: number;
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
  key: WorkStressDimensionKey;
  paragraphs: string[];
};

export const workStressMetadata = {
  eyebrow: "WORKLOAD & PRESSURE TOOL",
  title: "Work Stress Load Mapper",
  description:
    "See what is really driving job stress - volume, switching, ambiguity, emotional labor, invisible work, or low control. This tool turns work stress into a map you can actually use.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const workStressDimensions: WorkStressDimension[] = [
  {
    key: "demandDensity",
    label: "Demand Density",
    description: "How tightly volume, urgency, expectations, and responsibility are stacked inside the work day.",
    icon: "signal",
    accent: "#67E8F9",
  },
  {
    key: "controlDeficit",
    label: "Control Deficit",
    description: "How much the work feels imposed, hard to pace, or hard to shape from the inside of the role.",
    icon: "shield",
    accent: "#93C5FD",
  },
  {
    key: "fragmentationLoad",
    label: "Fragmentation Load",
    description: "How much switching, interruptions, ambiguity, and reactive flow break continuity and clarity.",
    icon: "pattern",
    accent: "#FCD34D",
  },
  {
    key: "hiddenEmotionalBurden",
    label: "Hidden / Emotional Burden",
    description: "How much invisible responsibility, emotional labor, and under-recognized carrying are adding weight behind the scenes.",
    icon: "graph",
    accent: "#FB7185",
  },
];

export const workStressBands: WorkStressBand[] = [
  {
    key: "manageable-work-load",
    min: 0,
    max: 24,
    title: "Manageable Work Load",
    descriptor: "The load is real, but the structure still leaves enough control, clarity, and recovery to stay workable.",
    summary:
      "This usually means work stress is present without strongly distorting the whole system. Pressure may spike in specific windows, but the load is not overwhelmingly fragmented or hidden right now.",
    interpretation:
      "The most useful move at this level is protection. Notice what is currently making the work sustainable, because those supports are often easier to preserve than to rebuild once they disappear.",
    standoutLead: "What stands out most is that the load still has shape.",
    sourceLead: "Where the map points most strongly is less toward overload and more toward maintenance.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#67E8F9",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-structural-strain",
    min: 25,
    max: 44,
    title: "Mild Structural Strain",
    descriptor: "Stress is beginning to come less from effort alone and more from how the work is organized, interrupted, or carried.",
    summary:
      "At this level, the issue is often not dramatic overload. It is that one or two structural stress sources are quietly making the day heavier than it looks from the outside.",
    interpretation:
      "This kind of strain responds well to targeted adjustments. The earlier you name the specific pressure source, the less likely it is to spread into a broader work-stress problem.",
    standoutLead: "What stands out most is concentration.",
    sourceLead: "Where the map is breaking the load apart is into identifiable pressure pockets rather than one vague feeling of stress.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "fragmented-work-pressure",
    min: 45,
    max: 64,
    title: "Fragmented Work Pressure",
    descriptor: "The load is not only heavy. It is being split, scattered, or made harder to recover from by the way work is flowing.",
    summary:
      "This usually means your work stress has structure. Volume may be part of it, but switching, ambiguity, invisible carrying, and low control are likely doing as much damage as the raw amount of work.",
    interpretation:
      "The helpful reframe here is that better coping alone is not the main fix. The work pattern itself needs more definition, fewer collisions, or more visible support.",
    standoutLead: "What stands out most is fragmentation.",
    sourceLead: "Where the map points now is toward stacked stressors that keep amplifying one another instead of staying contained.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 211, 77, 0.16)",
  },
  {
    key: "high-work-stress-concentration",
    min: 65,
    max: 84,
    title: "High Work Stress Concentration",
    descriptor: "Pressure is pooling strongly enough in a few areas that clarity, patience, and recovery are likely taking a visible hit.",
    summary:
      "At this level, work stress is acting less like background strain and more like a concentrated system load. The job may be asking for more carrying, more switching, or more emotional holding than the structure can support cleanly.",
    interpretation:
      "The path forward is usually not to push harder. It is to identify what is most mis-shaped in the work pattern and reduce the points where pressure keeps compounding.",
    standoutLead: "What stands out most is pressure stacking.",
    sourceLead: "Where the load is actually coming from is likely a tight cluster of demand, low control, fragmentation, or invisible burden rather than a single bad day.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.18)",
  },
  {
    key: "overloaded-low-control-work-pattern",
    min: 85,
    max: 100,
    title: "Overloaded / Low-Control Work Pattern",
    descriptor: "The work is currently carrying a high amount of strain, and the structure around it is not giving enough control, containment, or recovery room back.",
    summary:
      "This suggests work stress is not coming from one single factor. It is being amplified by how volume, fragmentation, ambiguity, emotional carrying, or invisible responsibility are stacking together without enough control or stopping space.",
    interpretation:
      "A high score here is not a verdict about resilience. It is a signal that the load pattern itself needs attention. The most useful next steps are structural, not moral.",
    standoutLead: "What stands out most is load concentration with too little room around it.",
    sourceLead: "Where the map points most strongly is toward a work design problem as much as a stress problem.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(251, 113, 133, 0.2)",
  },
];

const primaryLoadSourceOptions: WorkStressChoiceOption[] = [
  {
    value: "too-much-volume",
    marker: "A",
    label: "Too much volume",
    description: "There is simply more work than fits cleanly into the available capacity.",
  },
  {
    value: "too-much-switching",
    marker: "B",
    label: "Too much switching",
    description: "The load feels heavy because attention keeps getting split across too many moving parts.",
  },
  {
    value: "too-much-ambiguity",
    marker: "C",
    label: "Too much ambiguity",
    description: "Unclear expectations or unclear ownership are making the work harder than the tasks themselves.",
  },
  {
    value: "too-many-people-needs",
    marker: "D",
    label: "Too many people needs",
    description: "The work feels heavier because it is carrying requests, emotions, availability, or response pressure.",
  },
  {
    value: "too-little-control",
    marker: "E",
    label: "Too little control over the work",
    description: "The strain comes from having too little say over pace, order, or scope.",
  },
];

const pressureSourceOptions: WorkStressChoiceOption[] = [
  { value: "deadlines", label: "Deadlines" },
  { value: "interruptions", label: "Interruptions" },
  { value: "role-ambiguity", label: "Role ambiguity" },
  { value: "meetings", label: "Meetings" },
  { value: "emotional-labor", label: "Emotional labor" },
  { value: "reactive-requests", label: "Reactive requests" },
  { value: "lack-of-control", label: "Lack of control" },
  { value: "context-switching", label: "Context switching" },
  { value: "invisible-responsibility", label: "Invisible responsibility" },
  { value: "under-recognition", label: "Under-recognition" },
];

const loadPatternOptions: WorkStressChoiceOption[] = [
  {
    value: "steady-and-manageable",
    marker: "A",
    label: "Steady and manageable",
    description: "The work asks a lot at times, but the pattern is still readable and containable.",
  },
  {
    value: "busy-but-structured",
    marker: "B",
    label: "Busy but structured",
    description: "The volume is real, but the day still has enough order to stay workable.",
  },
  {
    value: "fragmented-and-reactive",
    marker: "C",
    label: "Fragmented and reactive",
    description: "The load feels heavy because continuity keeps breaking before work can settle.",
  },
  {
    value: "heavy-and-ambiguous",
    marker: "D",
    label: "Heavy and ambiguous",
    description: "The work is not only large. It is underdefined enough to make effort feel less containable.",
  },
  {
    value: "always-carrying-more-than-visible",
    marker: "E",
    label: "Always carrying more than is visible",
    description: "The role looks smaller from the outside than it feels from the inside.",
  },
];

export const workStressRankingItems: Array<{ key: RankedStressKey; label: string }> = [
  { key: "too-much-volume", label: "Too much volume" },
  { key: "unclear-expectations", label: "Unclear expectations" },
  { key: "switching-tasks-too-often", label: "Switching tasks too often" },
  { key: "other-peoples-urgency", label: "Other people’s urgency" },
  { key: "emotional-labor", label: "Emotional labor" },
  { key: "lack-of-recognition-or-support", label: "Lack of recognition or support" },
];

const switchingFrequencyOptions: WorkStressChoiceOption[] = [
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
  { value: "constantly", label: "Constantly" },
];

const familiarPatternOptions: WorkStressChoiceOption[] = [
  {
    value: "full-but-workable",
    marker: "A",
    label: "The work is full, but workable",
  },
  {
    value: "carrying-more-than-role-shows",
    marker: "B",
    label: "I am carrying more than the role visibly shows",
  },
  {
    value: "fragmentation-more-than-volume",
    marker: "C",
    label: "The stress comes from fragmentation more than volume",
  },
  {
    value: "unclear-expectations-drain",
    marker: "D",
    label: "Unclear expectations drain more than hard tasks",
  },
  {
    value: "people-pressure-heavier",
    marker: "E",
    label: "People pressure makes the load feel heavier",
  },
];

const recoveryFactorOptions: WorkStressChoiceOption[] = [
  {
    value: "follows-me-mentally",
    marker: "A",
    label: "It follows me mentally after work",
    description: "The task list leaves the office, but the load does not.",
  },
  {
    value: "no-clear-stopping-point",
    marker: "B",
    label: "There is no clear stopping point",
    description: "The day can end without the work feeling psychologically closed.",
  },
  {
    value: "never-feel-fully-caught-up",
    marker: "C",
    label: "I never feel fully caught up",
    description: "The load keeps recovery from feeling earned or complete.",
  },
  {
    value: "emotional-tone-stays-with-me",
    marker: "D",
    label: "The emotional tone of work stays with me",
    description: "The carryover is not only cognitive. It is also emotional.",
  },
  {
    value: "absorb-too-much-without-relief",
    marker: "E",
    label: "I keep absorbing too much without relief",
    description: "The role is taking in more strain than it is releasing.",
  },
];

const stressZoneOptions: WorkStressChoiceOption[] = [
  { value: "workload-volume", label: "Workload volume" },
  { value: "meetings-interruptions", label: "Meetings / interruptions" },
  { value: "expectations-ambiguity", label: "Expectations / ambiguity" },
  { value: "people-emotional-labor", label: "People / emotional labor" },
  { value: "invisible-responsibility", label: "Invisible responsibility" },
  { value: "low-control-low-autonomy", label: "Low control / low autonomy" },
];

const loadVisibilityOptions: WorkStressChoiceOption[] = [
  { value: "very-visible", label: "Very visible" },
  { value: "mostly-visible", label: "Mostly visible" },
  { value: "mixed", label: "Mixed" },
  { value: "often-underseen", label: "Often underseen" },
  { value: "barely-recognized", label: "Barely recognized" },
];

export const workStressSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "work-pressure-rises", label: "Work pressure rises" },
  { key: "switching-or-ambiguity-increases", label: "Switching / ambiguity increases" },
  { key: "clarity-drops", label: "Clarity drops" },
  { key: "strain-builds", label: "Emotional or mental strain builds" },
  { key: "recovery-hardens", label: "Recovery becomes harder after work" },
];

const finalPatternOptions: WorkStressChoiceOption[] = [
  {
    value: "real-but-manageable",
    marker: "A",
    label: "My work stress is real, but mostly manageable",
  },
  {
    value: "heavier-because-fragmented",
    marker: "B",
    label: "The load is heavier because it is fragmented or under-structured",
  },
  {
    value: "carrying-more-than-obvious",
    marker: "C",
    label: "I am carrying more than is obvious from the outside",
  },
  {
    value: "control-and-clarity-too-low",
    marker: "D",
    label: "Control and clarity are too low for the amount of pressure",
  },
  {
    value: "distribution-makes-it-heavier",
    marker: "E",
    label: "The work stress is less about effort and more about how the load is distributed",
  },
];

export const workStressSteps: WorkStressStep[] = [
  {
    id: "primary-load-source",
    step: 1,
    kind: "scenario-choice",
    field: "primaryLoadSource",
    eyebrow: "Step 1",
    question: "What makes work feel heavy most often right now?",
    hint: "Choose the pressure source that explains the heaviness most clearly, not the one that is most socially acceptable to name.",
    options: primaryLoadSourceOptions,
  },
  {
    id: "overall-overload",
    step: 2,
    kind: "slider",
    field: "overallOverload",
    eyebrow: "Step 2",
    question: "How overloaded does your work currently feel overall?",
    hint: "This is about how heavy the full system feels, not only how busy one day has been.",
    label: "Overall overload",
    minLabel: "Very manageable",
    maxLabel: "Very overloaded",
  },
  {
    id: "pressure-sources",
    step: 3,
    kind: "multi-select",
    field: "pressureSources",
    limit: 5,
    eyebrow: "Step 3",
    question: "Which pressure sources are most active right now?",
    hint: "Pick the stressors that are currently shaping the load the most.",
    options: pressureSourceOptions,
  },
  {
    id: "load-pattern",
    step: 4,
    kind: "visual-choice",
    field: "loadPattern",
    columns: 2,
    eyebrow: "Step 4",
    question: "Which visual load pattern feels closest to your work life right now?",
    hint: "Choose the shape of the work, not only the emotional story you tell yourself about it.",
    options: loadPatternOptions,
  },
  {
    id: "control-level",
    step: 5,
    kind: "slider",
    field: "controlLevel",
    eyebrow: "Step 5",
    question: "How much control do you feel over the order and pace of your work?",
    hint: "Think about how much say you actually have, not how much responsibility you carry.",
    label: "Control over pace and order",
    minLabel: "Very little control",
    maxLabel: "Strong control",
  },
  {
    id: "ranked-work-stress",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Step 6",
    question: "Rank these from most to least stressful in your work pattern",
    hint: "Place the stressor that drains the most usable capacity at the top.",
    items: workStressRankingItems,
  },
  {
    id: "switching-frequency",
    step: 7,
    kind: "segmented",
    field: "switchingFrequency",
    eyebrow: "Step 7",
    question: "How often does context switching break your momentum?",
    hint: "Think about how often continuity gets broken before work can settle into depth.",
    options: switchingFrequencyOptions,
  },
  {
    id: "familiar-work-pattern",
    step: 8,
    kind: "scenario-choice",
    field: "familiarWorkPattern",
    eyebrow: "Step 8",
    question: "Which statement feels most familiar?",
    hint: "Choose the statement that best describes the structure of the stress, not only the emotion of it.",
    options: familiarPatternOptions,
  },
  {
    id: "emotional-labor",
    step: 9,
    kind: "slider",
    field: "emotionalLabor",
    eyebrow: "Step 9",
    question: "How much emotional labor is part of your work pattern?",
    hint: "Include carrying tone, smoothing situations, absorbing stress, and staying available to other people’s needs.",
    label: "Emotional labor",
    minLabel: "Very little",
    maxLabel: "A great deal",
  },
  {
    id: "impact-sliders",
    step: 10,
    kind: "triple-slider",
    eyebrow: "Step 10",
    question: "How much do these get affected when work stress rises?",
    hint: "Use these sliders for the negative impact work pressure tends to create.",
    fields: [
      { key: "clarityImpact", label: "Clarity", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
      { key: "patienceImpact", label: "Patience", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
      {
        key: "recoveryImpact",
        label: "Recovery after work",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "hardest-recovery-factor",
    step: 11,
    kind: "scenario-choice",
    field: "hardestRecoveryFactor",
    eyebrow: "Step 11",
    question: "What usually makes the load harder to recover from?",
    hint: "Choose the factor that keeps the stress active even after the workday should be over.",
    options: recoveryFactorOptions,
  },
  {
    id: "stress-zone",
    step: 12,
    kind: "visual-choice",
    field: "stressZone",
    columns: 3,
    eyebrow: "Step 12",
    question: "Where is the strongest stress concentration?",
    hint: "Pick the zone where pressure gathers the fastest and stays the longest.",
    options: stressZoneOptions,
  },
  {
    id: "load-visibility",
    step: 13,
    kind: "segmented",
    field: "loadVisibility",
    eyebrow: "Step 13",
    question: "How visible does your actual load feel to other people around you?",
    hint: "This is about how accurately your real carrying burden is seen, not whether people know you are busy.",
    options: loadVisibilityOptions,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Step 14",
    question: "Put these in the order they usually happen for you",
    hint: "Order the stress sequence as it tends to unfold inside a normal pressure cycle.",
    items: workStressSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Step 15",
    question: "Which statement feels closest to your current work pattern?",
    hint: "Use the final step to describe how the load is built, not to summarize your whole career.",
    options: finalPatternOptions,
  },
];

const primaryLoadSourceSeverity: Record<PrimaryLoadSourceValue, number> = {
  "too-much-volume": 72,
  "too-much-switching": 70,
  "too-much-ambiguity": 76,
  "too-many-people-needs": 74,
  "too-little-control": 82,
};

const pressureSourceSeverity: Record<PressureSourceValue, number> = {
  deadlines: 66,
  interruptions: 76,
  "role-ambiguity": 84,
  meetings: 58,
  "emotional-labor": 80,
  "reactive-requests": 74,
  "lack-of-control": 86,
  "context-switching": 82,
  "invisible-responsibility": 78,
  "under-recognition": 70,
};

const loadPatternSeverity: Record<LoadPatternValue, number> = {
  "steady-and-manageable": 18,
  "busy-but-structured": 34,
  "fragmented-and-reactive": 78,
  "heavy-and-ambiguous": 84,
  "always-carrying-more-than-visible": 88,
};

const rankingSeverity: Record<RankedStressKey, number> = {
  "too-much-volume": 76,
  "unclear-expectations": 82,
  "switching-tasks-too-often": 80,
  "other-peoples-urgency": 78,
  "emotional-labor": 74,
  "lack-of-recognition-or-support": 70,
};

const switchingFrequencySeverity: Record<SwitchingFrequencyValue, number> = {
  rarely: 20,
  sometimes: 42,
  often: 68,
  "very-often": 82,
  constantly: 92,
};

const familiarWorkPatternSeverity: Record<FamiliarWorkPatternValue, number> = {
  "full-but-workable": 28,
  "carrying-more-than-role-shows": 72,
  "fragmentation-more-than-volume": 74,
  "unclear-expectations-drain": 76,
  "people-pressure-heavier": 70,
};

const recoveryFactorSeverity: Record<RecoveryFactorValue, number> = {
  "follows-me-mentally": 72,
  "no-clear-stopping-point": 84,
  "never-feel-fully-caught-up": 82,
  "emotional-tone-stays-with-me": 76,
  "absorb-too-much-without-relief": 86,
};

const stressZoneSeverity: Record<StressZoneValue, number> = {
  "workload-volume": 74,
  "meetings-interruptions": 72,
  "expectations-ambiguity": 84,
  "people-emotional-labor": 80,
  "invisible-responsibility": 86,
  "low-control-low-autonomy": 88,
};

const loadVisibilitySeverity: Record<LoadVisibilityValue, number> = {
  "very-visible": 22,
  "mostly-visible": 38,
  mixed: 56,
  "often-underseen": 76,
  "barely-recognized": 90,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "real-but-manageable": 28,
  "heavier-because-fragmented": 68,
  "carrying-more-than-obvious": 76,
  "control-and-clarity-too-low": 84,
  "distribution-makes-it-heavier": 74,
};

const rankingWeights = [28, 22, 18, 14, 10, 8];
const expectedSequence: SequenceKey[] = [
  "work-pressure-rises",
  "switching-or-ambiguity-increases",
  "clarity-drops",
  "strain-builds",
  "recovery-hardens",
];

const scoringWeights = {
  primaryLoadSource: 8,
  overallOverload: 10,
  pressureSources: 8,
  loadPattern: 6,
  controlLevelInverse: 8,
  rankingOrder: 8,
  switchingFrequency: 8,
  familiarWorkPattern: 6,
  emotionalLabor: 8,
  impact: 8,
  hardestRecoveryFactor: 6,
  stressZone: 6,
  loadVisibilityInverse: 6,
  sequenceOrder: 4,
  finalPattern: 4,
} as const;

export const workStressDrivers: StressDriver[] = [
  {
    key: "volume-overload",
    label: "Volume overload",
    description: "The raw amount of work is taking up more capacity than the role can metabolize cleanly.",
    accent: "#67E8F9",
    icon: "signal",
  },
  {
    key: "ambiguity-drag",
    label: "Ambiguity drag",
    description: "The work is draining extra energy because expectations, ownership, or definition stay too unclear.",
    accent: "#C4B5FD",
    icon: "pattern",
  },
  {
    key: "switching-friction",
    label: "Switching friction",
    description: "Interruptions, meetings, and reactive pivots are making continuity too expensive to protect.",
    accent: "#FCD34D",
    icon: "trend",
  },
  {
    key: "people-pressure",
    label: "People pressure",
    description: "The stress load is being inflated by responsiveness, availability, urgency from others, or relational demand.",
    accent: "#93C5FD",
    icon: "insight",
  },
  {
    key: "emotional-labor",
    label: "Emotional labor",
    description: "The job includes smoothing, carrying tone, absorbing pressure, and holding more feeling than the role admits.",
    accent: "#6EE7B7",
    icon: "graph",
  },
  {
    key: "low-control",
    label: "Low control",
    description: "Stress is rising because the work asks a lot while giving too little say over pace, order, or constraints.",
    accent: "#FB7185",
    icon: "shield",
  },
  {
    key: "invisible-responsibility",
    label: "Invisible responsibility",
    description: "A meaningful part of the role is happening off the visible org chart or outside the cleanly named workload.",
    accent: "#FDA4AF",
    icon: "pattern",
  },
  {
    key: "under-recognition",
    label: "Under-recognition",
    description: "The burden feels heavier because the real load is underseen, under-supported, or under-acknowledged.",
    accent: "#D6B36A",
    icon: "trend",
  },
];

export const workStressZones: StressZone[] = [
  {
    key: "workload-volume",
    label: "Workload volume",
    description: "The work is simply too full for the current pacing, capacity, or recovery room available to it.",
    accent: "#67E8F9",
  },
  {
    key: "meetings-interruptions",
    label: "Meetings / interruptions",
    description: "Attention keeps breaking before work can settle, which makes effort feel heavier than the hours alone suggest.",
    accent: "#FCD34D",
  },
  {
    key: "expectations-ambiguity",
    label: "Expectations / ambiguity",
    description: "Unclear success criteria, unclear ownership, or unclear boundaries are multiplying the stress cost of ordinary tasks.",
    accent: "#C4B5FD",
  },
  {
    key: "people-emotional-labor",
    label: "People / emotional labor",
    description: "The role is carrying more tone, care, responsiveness, and relational management than the title usually reveals.",
    accent: "#93C5FD",
  },
  {
    key: "invisible-responsibility",
    label: "Invisible responsibility",
    description: "A lot of the load is real, but not visible enough to receive the right acknowledgment, boundary, or redistribution.",
    accent: "#FDA4AF",
  },
  {
    key: "low-control-low-autonomy",
    label: "Low control / low autonomy",
    description: "Pressure feels heavier because the role does not give enough steering control back to the person carrying it.",
    accent: "#FB7185",
  },
];

const workLoadAdjustments: WorkLoadAdjustment[] = [
  {
    key: "clarify-the-work-structure",
    label: "Clarify the work structure",
    description: "Reduce stress at the source by defining expectations, done states, and ownership more explicitly before more effort gets added.",
    accent: "#C4B5FD",
  },
  {
    key: "reduce-switching",
    label: "Reduce switching",
    description: "Create more protected blocks, fewer reactive pivots, and cleaner batching so the day stops bleeding energy between contexts.",
    accent: "#FCD34D",
  },
  {
    key: "restore-control",
    label: "Restore control",
    description: "Even small increases in pacing control, order control, or decision latitude can reduce how oppressive the same volume feels.",
    accent: "#FB7185",
  },
  {
    key: "make-invisible-load-visible",
    label: "Make invisible load visible",
    description: "Name the uncounted work so it can be acknowledged, redistributed, scoped, or supported instead of silently accumulating.",
    accent: "#FDA4AF",
  },
  {
    key: "rebalance-people-pressure",
    label: "Rebalance people pressure",
    description: "Reduce how much of the day is being spent carrying urgency, emotional tone, or availability for everybody else.",
    accent: "#93C5FD",
  },
  {
    key: "protect-stopping-points",
    label: "Protect stopping points",
    description: "If the load follows you home, the work needs cleaner edges so recovery can start before the next day is already loading.",
    accent: "#6EE7B7",
  },
];

const hiddenCostTemplates: Omit<HiddenCostMetric, "value">[] = [
  {
    key: "clarity-drop",
    label: "Clarity drop",
    description: "Work pressure is making it harder to think cleanly, prioritize, or hold a stable mental map of what matters.",
    accent: "#67E8F9",
  },
  {
    key: "patience-erosion",
    label: "Patience erosion",
    description: "The load is thinning relational tolerance and increasing friction with tasks, people, or interruptions.",
    accent: "#93C5FD",
  },
  {
    key: "poor-recovery-after-work",
    label: "Poor recovery after work",
    description: "The day is staying live in the system long enough to weaken the quality of the off-hours that should help reset it.",
    accent: "#6EE7B7",
  },
  {
    key: "under-recognized-overload",
    label: "Under-recognized overload",
    description: "Part of what hurts is not only the burden itself, but how much of it stays unseen or unsupported.",
    accent: "#FB7185",
  },
];

export const relatedWorkStressTools: RelatedWorkStressTool[] = [
  {
    title: "Burnout Risk Audit",
    description: "Read whether work strain has already moved from structural pressure into emotional exhaustion, cynicism, or capacity loss.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Focus Friction Audit",
    description: "Separate switching, start resistance, and execution drag from the broader load pattern around the work itself.",
    category: "Focus & Procrastination",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "focus-friction-audit", categorySlug: "focus-procrastination" }),
  },
  {
    title: "Decision Fatigue Simulator",
    description: "See how repeated choices, uncertainty, and low recovery quietly drain clarity across the workday.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Turn accumulated emotional load and low capacity into a realistic short recovery path after demanding stretches.",
    category: "Emotional Regulation",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
];

export const workStressFaqItems: FaqItem[] = [
  {
    question: "What does a work stress score actually mean?",
    answer:
      "It is a directional read of how much structured pressure is currently sitting inside your work pattern. It does not measure whether you are strong enough, grateful enough, or coping well enough. It measures how heavy the system is becoming once demand, control, switching, ambiguity, and hidden burden are considered together.",
  },
  {
    question: "Is work stress the same as burnout?",
    answer:
      "No. Burnout is a broader depletion pattern. Work stress load is more specific. It looks at what is composing the pressure right now: too much volume, too little control, too much fragmentation, too much emotional carrying, or too much invisible burden. Mapping that structure can help before the load turns into deeper depletion.",
  },
  {
    question: "Why can ambiguity be as stressful as workload?",
    answer:
      "Because ambiguity keeps the work mentally open. Unclear expectations, unclear ownership, and unclear stopping points make the brain keep spending energy on interpretation, not just execution. That means even a moderate task load can start feeling disproportionately heavy.",
  },
  {
    question: "What is the difference between being busy and being fragmented?",
    answer:
      "Being busy means there is a lot to do. Being fragmented means the work keeps breaking into pieces before you can complete anything cleanly. Fragmentation is often more tiring than volume because it disrupts continuity, clarity, and the sense of making progress.",
  },
  {
    question: "How does emotional labor increase work stress?",
    answer:
      "Emotional labor adds a second workload. You are not only doing tasks. You are also regulating tone, staying available, absorbing urgency, smoothing interactions, or carrying difficult emotional content. That extra layer is real load, even when it is rarely counted as such.",
  },
  {
    question: "Why does low control make work feel heavier?",
    answer:
      "Because strain rises when demand is high and steering power is low. When you cannot shape pace, order, boundaries, or methods, the same amount of work often feels more oppressive. Control does not remove pressure, but it changes how trapped the nervous system feels inside it.",
  },
  {
    question: "What is invisible responsibility at work?",
    answer:
      "Invisible responsibility is work that matters but is not clearly counted. It includes emotional holding, remembering, smoothing, follow-up, anticipatory problem-solving, keeping things from breaking, or carrying implicit ownership that never made it into the role description.",
  },
  {
    question: "Can work stress continue even after the workday ends?",
    answer:
      "Yes. Many work-stress patterns continue through mental carryover, emotional residue, unfinished ambiguity, or the feeling that there is no true stopping point. When that happens, the issue is no longer only the workload. It is also the weak boundary between work demand and recovery space.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it after a meaningful change in workload, team structure, role expectations, or recovery quality. It is also useful after you have made one specific structural adjustment, such as reducing meetings, clarifying priorities, or naming invisible work more clearly, and want to compare the pattern.",
  },
  {
    question: "What should I do if the main issue is not volume but structure?",
    answer:
      "Start by naming the structural stressor in plain language. Is it low control, ambiguity, fragmentation, emotional labor, invisible responsibility, or lack of recognition? Once the driver is clear, the next step is not generic stress management. It is changing the work pattern where it is mis-shaped.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What work stress actually is",
    paragraphs: [
      "Work stress is not only a feeling of being busy. It is the strain created when the demands of work and the shape of work stop fitting together well. Some people are carrying too much volume. Some are carrying a moderate amount of work in a badly designed flow. Some are carrying tasks plus emotional labor, invisible responsibility, and too many interruptions. All of those can feel like stress, but they are not the same problem.",
      "That distinction matters because vague stress advice usually treats all work strain as one thing. It says to recover more, organize better, or become more resilient. Those suggestions can help at the edges, but they miss the more practical question: what is the load actually made of right now? This page is built around that question. The goal is not to moralize your response to work. It is to make the stress pattern more readable.",
    ],
  },
  {
    title: "Why work stress is not only about being busy",
    paragraphs: [
      "Two people can work the same number of hours and have very different stress loads. One may have a demanding week that is still well bounded, clearly prioritized, and recoverable. The other may have less raw volume but much more ambiguity, more interruptions, more meetings, more emotional management, and less control over what happens next. The second person often feels worse, even though the calendar does not look as intense on paper.",
      "That is because stress is shaped by structure as much as by quantity. Busy work can still feel coherent. Fragmented work often does not. A role with decent workload but poor visibility, weak support, or constant switching may create more nervous-system strain than a heavier role with better definition and more autonomy. This is why many people blame themselves for not handling work better when the real problem is that the work pattern itself is underbounded or misaligned.",
    ],
  },
  {
    title: "How pressure gets amplified by ambiguity, switching, and invisible load",
    paragraphs: [
      "Work pressure rarely comes from one clean source. It usually amplifies through interaction effects. A moderately demanding job becomes much harder when expectations are unclear. A reasonable workload becomes exhausting when context switching keeps breaking momentum. A high-care role becomes heavier when emotional labor and invisible responsibility stay uncounted. Each factor raises the cost of the others.",
      "This is why work stress can feel confusing from the inside. You may tell yourself the issue is just volume, when the more expensive part is actually the mental reopening caused by ambiguity or the residue created by emotional carryover. You may think you should simply focus better, when the deeper issue is that the workday has been designed around interruption and urgency rather than coherent flow. Naming amplification points is often the first moment the stress starts feeling actionable again.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "demandDensity",
    paragraphs: [
      "Demand Density measures how tightly the work is packed with volume, urgency, expectations, and responsibility. High demand density does not always mean dramatic overtime. It can also mean that the day has too little slack for ordinary complexity, which leaves the nervous system with almost no buffer when anything goes off script.",
      "If this score is high, the question is not only how much you are doing. It is how compressive the work pattern has become. Dense work creates pressure by leaving too little room for sequencing, thought, recovery, and human pacing.",
    ],
  },
  {
    key: "controlDeficit",
    paragraphs: [
      "Control Deficit measures the gap between what the work demands and how much influence you have over pace, order, methods, timing, or constraints. Many people can carry significant demand when they have enough steering control. The same demand feels much heavier when the shape of the day is largely happening to them rather than with them.",
      "A higher score here often explains why effort alone is not solving the problem. If control is too low, more effort can actually increase strain because it adds more exertion without changing the conditions that make the work oppressive.",
    ],
  },
  {
    key: "fragmentationLoad",
    paragraphs: [
      "Fragmentation Load measures how much the workday is being broken into pieces by switching, meetings, interruptions, reactive requests, or unclear priorities. This matters because fragmented work burns energy both on the task and on the transition cost between tasks. It is hard to feel grounded inside work that never fully settles.",
      "People often underestimate fragmentation because it can look productive from the outside. You touched many things, answered many messages, attended the meetings, and stayed responsive. But inside, the nervous system may be paying for dozens of unfinished transitions and lost re-entry costs.",
    ],
  },
  {
    key: "hiddenEmotionalBurden",
    paragraphs: [
      "Hidden / Emotional Burden measures the part of work that is real but hard to count. This includes emotional labor, invisible coordination, anticipatory holding, tone management, relational smoothing, and burden that stays under-recognized by the people around you. It is often the reason someone says, 'It should not feel this heavy,' while still feeling deeply taxed.",
      "A higher score here does not mean the visible work is unimportant. It means there is more going on beneath the visible work than the role is admitting. That hidden layer often makes recovery worse, patience thinner, and recognition feel emotionally more important than it might otherwise.",
    ],
  },
];

export const pressureIncreaseBlocks: ContentBlock[] = [
  {
    title: "Too much volume",
    body:
      "Raw workload still matters. Even strong systems bend when the role simply asks for more than fits the available bandwidth.",
  },
  {
    title: "Low control",
    body:
      "Stress rises when the work is intense and the person carrying it has too little say over timing, pacing, or method.",
  },
  {
    title: "Unclear expectations",
    body:
      "Ambiguity turns ordinary tasks into mentally open loops, which makes work feel heavier long before the task list itself looks extreme.",
  },
  {
    title: "Interruptions and switching",
    body:
      "Fragmentation increases strain because every forced pivot adds transition cost and reduces the sense of actually finishing anything cleanly.",
  },
  {
    title: "Emotional labor",
    body:
      "People-facing pressure, tone management, and carrying emotional residue can exhaust capacity even when the visible task load seems manageable.",
  },
  {
    title: "Invisible responsibility",
    body:
      "The work that is not clearly counted often becomes the work that is hardest to explain, defend, or recover from.",
  },
  {
    title: "Under-recognition",
    body:
      "Feeling unseen does not only hurt morale. It also makes heavy work feel less containable because the system around it is not accurately responding.",
  },
  {
    title: "No clean stopping point",
    body:
      "Recovery gets weaker when the workday ends operationally but not psychologically.",
  },
];

export const loadReductionBlocks: ContentBlock[] = [
  {
    title: "Create clearer boundaries around workflow",
    body:
      "Work often feels lighter when the sequencing rules become clearer, even before volume changes.",
  },
  {
    title: "Reduce switching",
    body:
      "Protecting longer blocks of continuity can lower work stress faster than squeezing more tasks into the same fragmented day.",
  },
  {
    title: "Increase control where possible",
    body:
      "Even partial control over timing, order, or batching can make the same load feel more survivable.",
  },
  {
    title: "Make invisible load visible",
    body:
      "Naming the hidden work is often the first step toward support, recognition, or redistribution.",
  },
  {
    title: "Lower emotional carryover",
    body:
      "If the tone of work keeps following you home, the system needs stronger decompression and cleaner role edges.",
  },
  {
    title: "Improve recovery after work",
    body:
      "Recovery gets more effective when the work is given a real stopping point instead of only a calendar endpoint.",
  },
];

export const workStressStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "The problem is not always that you should handle it better",
  quote:
    "This often looks like someone telling themselves they just need to be more efficient. On paper, the role may not even look impossible. But the day is full of meetings that break concentration, requests that arrive without warning, decisions made with half the context, and small forms of emotional labor nobody counts. The person stays responsible, responsive, and outwardly composed. Then evening comes, and the mind is still open, the body still tense, and guilt still hanging around. The turning point is realizing the issue is not weakness. The issue is a work structure carrying fragmentation, ambiguity, and invisible weight.",
  takeaway:
    "This is how work stress often operates in real life: not only through volume, but through the way pressure is distributed across ambiguity, switching, emotional carryover, and underseen responsibility.",
  toneLabel: "Emotionally real",
  accent: "#67E8F9",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, begin by naming the load source more precisely than 'I am stressed.' Ask whether the heavier force is volume, fragmentation, ambiguity, low control, emotional labor, invisible responsibility, or under-recognition. Precision matters because each driver needs a different adjustment. Without that clarity, people usually default to pushing harder inside the same conditions.",
  "Next, identify one structural lever rather than trying to fix everything at once. That may mean reducing task-switching for part of the day, creating a clearer stopping point, surfacing invisible work in a more concrete way, or clarifying expectations where ambiguity keeps reopening the same loop. A single structural change often produces more relief than a vague goal to 'cope better.'",
  "Finally, pay attention to what the load is costing, not just what is causing it. If clarity is dropping, decisions will degrade. If patience is thinning, relational friction will rise. If recovery after work is poor, the next day starts already compromised. These costs help reveal what deserves attention first.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Workplace Stress Reset Planner",
  description:
    "A structured guide for making the real sources of work pressure visible, reducing fragmentation, and rebuilding more controllable, recoverable work flow.",
  buttonLabel: "View Next Step",
};

export const workStressLoadMapperMetadata = {
  title: workStressMetadata.title,
  description: workStressMetadata.description,
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
  return workStressBands.find((band) => score >= band.min && score <= band.max) ?? workStressBands[0];
}

function getInverseControlScore(value?: number) {
  if (typeof value !== "number") {
    return undefined;
  }

  return clampScore(100 - value);
}

function getRankingScore(order: RankedStressKey[]) {
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

function getSourceScores(answers: WorkStressAnswers): StressDriverScore[] {
  const raw: Record<StressDriverKey, number[]> = {
    "volume-overload": [],
    "ambiguity-drag": [],
    "switching-friction": [],
    "people-pressure": [],
    "emotional-labor": [],
    "low-control": [],
    "invisible-responsibility": [],
    "under-recognition": [],
  };

  if (answers.primaryLoadSource === "too-much-volume") {
    raw["volume-overload"].push(92);
  }
  if (answers.primaryLoadSource === "too-much-switching") {
    raw["switching-friction"].push(90);
  }
  if (answers.primaryLoadSource === "too-much-ambiguity") {
    raw["ambiguity-drag"].push(92);
  }
  if (answers.primaryLoadSource === "too-many-people-needs") {
    raw["people-pressure"].push(88);
    raw["emotional-labor"].push(72);
  }
  if (answers.primaryLoadSource === "too-little-control") {
    raw["low-control"].push(94);
  }

  answers.pressureSources.forEach((source) => {
    if (source === "deadlines") {
      raw["volume-overload"].push(72);
    }
    if (source === "interruptions") {
      raw["switching-friction"].push(82);
    }
    if (source === "role-ambiguity") {
      raw["ambiguity-drag"].push(92);
    }
    if (source === "meetings") {
      raw["switching-friction"].push(62);
      raw["people-pressure"].push(38);
    }
    if (source === "emotional-labor") {
      raw["emotional-labor"].push(92);
      raw["people-pressure"].push(62);
    }
    if (source === "reactive-requests") {
      raw["switching-friction"].push(76);
      raw["people-pressure"].push(78);
    }
    if (source === "lack-of-control") {
      raw["low-control"].push(94);
    }
    if (source === "context-switching") {
      raw["switching-friction"].push(94);
    }
    if (source === "invisible-responsibility") {
      raw["invisible-responsibility"].push(94);
    }
    if (source === "under-recognition") {
      raw["under-recognition"].push(92);
    }
  });

  if (answers.loadPattern === "fragmented-and-reactive") {
    raw["switching-friction"].push(88);
    raw["low-control"].push(58);
  }
  if (answers.loadPattern === "heavy-and-ambiguous") {
    raw["ambiguity-drag"].push(90);
    raw["volume-overload"].push(66);
  }
  if (answers.loadPattern === "always-carrying-more-than-visible") {
    raw["invisible-responsibility"].push(94);
    raw["under-recognition"].push(82);
    raw["emotional-labor"].push(58);
  }
  if (answers.loadPattern === "busy-but-structured") {
    raw["volume-overload"].push(42);
  }

  if (answers.switchingFrequency) {
    raw["switching-friction"].push(switchingFrequencySeverity[answers.switchingFrequency]);
  }

  if (answers.familiarWorkPattern === "fragmentation-more-than-volume") {
    raw["switching-friction"].push(86);
  }
  if (answers.familiarWorkPattern === "unclear-expectations-drain") {
    raw["ambiguity-drag"].push(88);
  }
  if (answers.familiarWorkPattern === "people-pressure-heavier") {
    raw["people-pressure"].push(82);
  }
  if (answers.familiarWorkPattern === "carrying-more-than-role-shows") {
    raw["invisible-responsibility"].push(90);
    raw["under-recognition"].push(72);
  }

  if (typeof answers.emotionalLabor === "number") {
    raw["emotional-labor"].push(answers.emotionalLabor);
    raw["people-pressure"].push(answers.emotionalLabor * 0.62);
  }

  if (typeof answers.overallOverload === "number") {
    raw["volume-overload"].push(answers.overallOverload * 0.8);
    raw["ambiguity-drag"].push(answers.overallOverload * 0.16);
  }

  if (typeof answers.controlLevel === "number") {
    raw["low-control"].push((100 - answers.controlLevel) * 0.94);
  }

  if (answers.hardestRecoveryFactor === "follows-me-mentally") {
    raw["volume-overload"].push(56);
    raw["ambiguity-drag"].push(46);
  }
  if (answers.hardestRecoveryFactor === "no-clear-stopping-point") {
    raw["low-control"].push(72);
    raw["volume-overload"].push(52);
  }
  if (answers.hardestRecoveryFactor === "never-feel-fully-caught-up") {
    raw["volume-overload"].push(72);
    raw["ambiguity-drag"].push(54);
  }
  if (answers.hardestRecoveryFactor === "emotional-tone-stays-with-me") {
    raw["emotional-labor"].push(78);
    raw["people-pressure"].push(52);
  }
  if (answers.hardestRecoveryFactor === "absorb-too-much-without-relief") {
    raw["emotional-labor"].push(86);
    raw["invisible-responsibility"].push(68);
  }

  if (answers.stressZone === "workload-volume") {
    raw["volume-overload"].push(86);
  }
  if (answers.stressZone === "meetings-interruptions") {
    raw["switching-friction"].push(84);
  }
  if (answers.stressZone === "expectations-ambiguity") {
    raw["ambiguity-drag"].push(90);
  }
  if (answers.stressZone === "people-emotional-labor") {
    raw["people-pressure"].push(84);
    raw["emotional-labor"].push(86);
  }
  if (answers.stressZone === "invisible-responsibility") {
    raw["invisible-responsibility"].push(92);
  }
  if (answers.stressZone === "low-control-low-autonomy") {
    raw["low-control"].push(92);
  }

  if (answers.loadVisibility === "often-underseen") {
    raw["invisible-responsibility"].push(78);
    raw["under-recognition"].push(86);
  }
  if (answers.loadVisibility === "barely-recognized") {
    raw["invisible-responsibility"].push(88);
    raw["under-recognition"].push(94);
  }

  if (answers.finalPattern === "heavier-because-fragmented") {
    raw["switching-friction"].push(72);
    raw["ambiguity-drag"].push(54);
  }
  if (answers.finalPattern === "carrying-more-than-obvious") {
    raw["invisible-responsibility"].push(88);
    raw["under-recognition"].push(84);
  }
  if (answers.finalPattern === "control-and-clarity-too-low") {
    raw["low-control"].push(90);
    raw["ambiguity-drag"].push(72);
  }
  if (answers.finalPattern === "distribution-makes-it-heavier") {
    raw["switching-friction"].push(60);
    raw["low-control"].push(56);
    raw["invisible-responsibility"].push(54);
  }

  if (typeof answers.clarityImpact === "number") {
    raw["ambiguity-drag"].push(answers.clarityImpact * 0.54);
    raw["switching-friction"].push(answers.clarityImpact * 0.38);
  }
  if (typeof answers.patienceImpact === "number") {
    raw["people-pressure"].push(answers.patienceImpact * 0.46);
    raw["emotional-labor"].push(answers.patienceImpact * 0.34);
  }
  if (typeof answers.recoveryImpact === "number") {
    raw["emotional-labor"].push(answers.recoveryImpact * 0.42);
    raw["invisible-responsibility"].push(answers.recoveryImpact * 0.28);
  }

  return workStressDrivers
    .map((driver) => ({
      ...driver,
      value: clampScore(average(raw[driver.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getAdjustment(
  dimensions: Record<WorkStressDimensionKey, number>,
  primaryStressDriver: StressDriverScore,
  strongestHiddenCost: HiddenCostMetric,
) {
  if (primaryStressDriver.key === "low-control" || dimensions.controlDeficit >= 72) {
    return workLoadAdjustments.find((item) => item.key === "restore-control") ?? workLoadAdjustments[0];
  }

  if (primaryStressDriver.key === "switching-friction" || dimensions.fragmentationLoad >= 70) {
    return workLoadAdjustments.find((item) => item.key === "reduce-switching") ?? workLoadAdjustments[0];
  }

  if (primaryStressDriver.key === "ambiguity-drag") {
    return workLoadAdjustments.find((item) => item.key === "clarify-the-work-structure") ?? workLoadAdjustments[0];
  }

  if (
    primaryStressDriver.key === "invisible-responsibility" ||
    primaryStressDriver.key === "under-recognition" ||
    strongestHiddenCost.key === "under-recognized-overload"
  ) {
    return workLoadAdjustments.find((item) => item.key === "make-invisible-load-visible") ?? workLoadAdjustments[0];
  }

  if (primaryStressDriver.key === "people-pressure" || primaryStressDriver.key === "emotional-labor") {
    return workLoadAdjustments.find((item) => item.key === "rebalance-people-pressure") ?? workLoadAdjustments[0];
  }

  return workLoadAdjustments.find((item) => item.key === "protect-stopping-points") ?? workLoadAdjustments[0];
}

export function getInitialWorkStressAnswers(): WorkStressAnswers {
  return {
    pressureSources: [],
    rankingOrder: workStressRankingItems.map((item) => item.key),
    rankingConfirmed: false,
    sequenceOrder: workStressSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isWorkStressStepComplete(step: WorkStressStep, answers: WorkStressAnswers) {
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

export function calculateWorkStressResult(answers: WorkStressAnswers): WorkStressResult {
  const primaryLoadSource = answers.primaryLoadSource
    ? primaryLoadSourceSeverity[answers.primaryLoadSource]
    : undefined;
  const overallOverload =
    typeof answers.overallOverload === "number" ? clampScore(answers.overallOverload) : undefined;
  const pressureSources =
    answers.pressureSources.length > 0
      ? clampScore(
          average(answers.pressureSources.map((source) => pressureSourceSeverity[source])) * 0.76 +
            (answers.pressureSources.length / 5) * 20,
        )
      : undefined;
  const loadPattern = answers.loadPattern ? loadPatternSeverity[answers.loadPattern] : undefined;
  const controlInverse = getInverseControlScore(answers.controlLevel);
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const switchingFrequency = answers.switchingFrequency
    ? switchingFrequencySeverity[answers.switchingFrequency]
    : undefined;
  const familiarWorkPattern = answers.familiarWorkPattern
    ? familiarWorkPatternSeverity[answers.familiarWorkPattern]
    : undefined;
  const emotionalLabor =
    typeof answers.emotionalLabor === "number" ? clampScore(answers.emotionalLabor) : undefined;
  const impact =
    typeof answers.clarityImpact === "number" &&
    typeof answers.patienceImpact === "number" &&
    typeof answers.recoveryImpact === "number"
      ? clampScore((answers.clarityImpact + answers.patienceImpact + answers.recoveryImpact) / 3)
      : undefined;
  const hardestRecoveryFactor = answers.hardestRecoveryFactor
    ? recoveryFactorSeverity[answers.hardestRecoveryFactor]
    : undefined;
  const stressZone = answers.stressZone ? stressZoneSeverity[answers.stressZone] : undefined;
  const loadVisibility = answers.loadVisibility ? loadVisibilitySeverity[answers.loadVisibility] : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const weightedEntries = [
    { value: primaryLoadSource, weight: scoringWeights.primaryLoadSource },
    { value: overallOverload, weight: scoringWeights.overallOverload },
    { value: pressureSources, weight: scoringWeights.pressureSources },
    { value: loadPattern, weight: scoringWeights.loadPattern },
    { value: controlInverse, weight: scoringWeights.controlLevelInverse },
    { value: rankingScore, weight: scoringWeights.rankingOrder },
    { value: switchingFrequency, weight: scoringWeights.switchingFrequency },
    { value: familiarWorkPattern, weight: scoringWeights.familiarWorkPattern },
    { value: emotionalLabor, weight: scoringWeights.emotionalLabor },
    { value: impact, weight: scoringWeights.impact },
    { value: hardestRecoveryFactor, weight: scoringWeights.hardestRecoveryFactor },
    { value: stressZone, weight: scoringWeights.stressZone },
    { value: loadVisibility, weight: scoringWeights.loadVisibilityInverse },
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

  const sourceScores = getSourceScores(answers);
  const primaryStressDriver = sourceScores[0] ?? {
    ...workStressDrivers[0],
    value: 42,
  };

  const demandDensity = weightedAverage([
    { value: overallOverload, weight: 0.28 },
    { value: primaryLoadSource, weight: 0.14 },
    { value: pressureSources, weight: 0.18 },
    { value: rankingScore, weight: 0.14 },
    { value: emotionalLabor, weight: 0.1 },
    { value: familiarWorkPattern, weight: 0.08 },
    { value: finalPattern, weight: 0.08 },
  ]);

  const controlDeficit = weightedAverage([
    { value: controlInverse, weight: 0.34 },
    { value: sourceScores.find((item) => item.key === "low-control")?.value, weight: 0.18 },
    { value: sourceScores.find((item) => item.key === "ambiguity-drag")?.value, weight: 0.1 },
    { value: stressZone, weight: 0.12 },
    { value: hardestRecoveryFactor, weight: 0.1 },
    { value: loadVisibility, weight: 0.08 },
    { value: finalPattern, weight: 0.08 },
  ]);

  const fragmentationLoad = weightedAverage([
    { value: switchingFrequency, weight: 0.24 },
    { value: loadPattern, weight: 0.18 },
    { value: sourceScores.find((item) => item.key === "switching-friction")?.value, weight: 0.18 },
    { value: pressureSources, weight: 0.12 },
    { value: familiarWorkPattern, weight: 0.1 },
    { value: answers.clarityImpact, weight: 0.08 },
    { value: sequenceOrder, weight: 0.1 },
  ]);

  const hiddenEmotionalBurden = weightedAverage([
    { value: emotionalLabor, weight: 0.22 },
    { value: hardestRecoveryFactor, weight: 0.18 },
    { value: loadVisibility, weight: 0.16 },
    { value: answers.patienceImpact, weight: 0.1 },
    { value: answers.recoveryImpact, weight: 0.12 },
    { value: sourceScores.find((item) => item.key === "invisible-responsibility")?.value, weight: 0.12 },
    { value: sourceScores.find((item) => item.key === "under-recognition")?.value, weight: 0.1 },
  ]);

  const dimensions: Record<WorkStressDimensionKey, number> = {
    demandDensity,
    controlDeficit,
    fragmentationLoad,
    hiddenEmotionalBurden,
  };

  const heaviestConcentrationZone =
    workStressZones.find((zone) => zone.key === answers.stressZone) ?? workStressZones[0];

  const hiddenCosts: HiddenCostMetric[] = [
    {
      ...hiddenCostTemplates[0],
      value: answers.clarityImpact ?? clampScore(fragmentationLoad * 0.86),
    },
    {
      ...hiddenCostTemplates[1],
      value:
        answers.patienceImpact ??
        clampScore(
          average([
            sourceScores.find((item) => item.key === "people-pressure")?.value ?? 0,
            hiddenEmotionalBurden * 0.84,
          ]),
        ),
    },
    {
      ...hiddenCostTemplates[2],
      value:
        answers.recoveryImpact ??
        clampScore(
          average([
            hiddenEmotionalBurden,
            demandDensity * 0.54,
            hardestRecoveryFactor ?? 0,
          ]),
        ),
    },
    {
      ...hiddenCostTemplates[3],
      value: clampScore(
        average([
          sourceScores.find((item) => item.key === "invisible-responsibility")?.value ?? 0,
          sourceScores.find((item) => item.key === "under-recognition")?.value ?? 0,
          loadVisibility ?? 0,
        ]),
      ),
    },
  ].sort((left, right) => right.value - left.value);

  const strongestHiddenCost = hiddenCosts[0] ?? {
    ...hiddenCostTemplates[0],
    value: 44,
  };

  const mostUsefulWorkLoadAdjustment = getAdjustment(
    dimensions,
    primaryStressDriver,
    strongestHiddenCost,
  );

  const volumeDriver = sourceScores.find((item) => item.key === "volume-overload")?.value ?? 0;
  const ambiguityDriver = sourceScores.find((item) => item.key === "ambiguity-drag")?.value ?? 0;
  const switchingDriver = sourceScores.find((item) => item.key === "switching-friction")?.value ?? 0;
  const peopleDriver = sourceScores.find((item) => item.key === "people-pressure")?.value ?? 0;
  const emotionalDriver = sourceScores.find((item) => item.key === "emotional-labor")?.value ?? 0;
  const lowControlDriver = sourceScores.find((item) => item.key === "low-control")?.value ?? 0;
  const invisibleDriver = sourceScores.find((item) => item.key === "invisible-responsibility")?.value ?? 0;
  const recognitionDriver = sourceScores.find((item) => item.key === "under-recognition")?.value ?? 0;

  const loadSegments: LoadDistributionSegment[] = [
    {
      key: "volume",
      label: "Volume",
      value: volumeDriver,
      accent: "#67E8F9",
      note: "How much raw quantity is doing the stressing.",
    },
    {
      key: "ambiguity",
      label: "Ambiguity",
      value: ambiguityDriver,
      accent: "#C4B5FD",
      note: "How much unclear expectation is inflating the load.",
    },
    {
      key: "switching",
      label: "Switching",
      value: switchingDriver,
      accent: "#FCD34D",
      note: "How much fragmentation and reactive change are costing.",
    },
    {
      key: "people-pressure",
      label: "People pressure",
      value: peopleDriver,
      accent: "#93C5FD",
      note: "How much the job is being shaped by other people’s needs or urgency.",
    },
    {
      key: "emotional-labor",
      label: "Emotional labor",
      value: emotionalDriver,
      accent: "#6EE7B7",
      note: "How much emotional carrying is sitting behind the visible work.",
    },
    {
      key: "low-control",
      label: "Low control",
      value: lowControlDriver,
      accent: "#FB7185",
      note: "How much strain is coming from too little steering power.",
    },
  ];

  const demandLevel = clampScore(
    average([
      demandDensity,
      overallOverload ?? demandDensity,
    ]),
  );
  const controlLevel =
    typeof answers.controlLevel === "number" ? clampScore(answers.controlLevel) : clampScore(100 - controlDeficit);
  const switchingLoad = clampScore(average([fragmentationLoad, switchingDriver]));
  const ambiguityPressure = clampScore(average([ambiguityDriver, stressZone ?? ambiguityDriver * 0.6]));
  const invisibleBurdenLevel = clampScore(
    average([
      hiddenEmotionalBurden,
      invisibleDriver,
      recognitionDriver,
    ]),
  );
  const peoplePressureLevel = clampScore(average([peopleDriver, emotionalDriver]));
  const recoveryCost =
    hiddenCosts.find((metric) => metric.key === "poor-recovery-after-work")?.value ??
    clampScore(hiddenEmotionalBurden * 0.82);

  const previewMetrics: PreviewMetric[] = [
    { label: "Workload density", value: demandLevel, accent: "#67E8F9" },
    { label: "Ambiguity pressure", value: ambiguityPressure, accent: "#C4B5FD" },
    { label: "Switching load", value: switchingLoad, accent: "#FCD34D" },
    { label: "Control level", value: controlLevel, accent: "#93C5FD" },
    { label: "Invisible burden", value: invisibleBurdenLevel, accent: "#FB7185" },
    { label: "People pressure", value: peoplePressureLevel, accent: "#6EE7B7" },
  ];

  const loadLabel =
    "Your pattern suggests that work stress is not coming from one single factor — it is being amplified by how volume, fragmentation, ambiguity, or invisible burden are stacking together without enough control or recovery space.";
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The strongest visible driver currently looks like ${primaryStressDriver.label.toLowerCase()}, while the biggest hidden cost appears to be ${strongestHiddenCost.label.toLowerCase()}.`;
  const sourceInsight = `${band.sourceLead} The heaviest concentration zone right now is ${heaviestConcentrationZone.label.toLowerCase()}, and the most useful adjustment looks like ${mostUsefulWorkLoadAdjustment.label.toLowerCase()}.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryStressDriver,
    heaviestConcentrationZone,
    strongestHiddenCost,
    mostUsefulWorkLoadAdjustment,
    sourceScores,
    loadSegments,
    hiddenCosts,
    previewMetrics,
    loadLabel,
    interpretation,
    standout,
    sourceInsight,
    demandLevel,
    controlLevel,
    switchingLoad,
    ambiguityPressure,
    invisibleBurdenLevel,
    peoplePressureLevel,
    recoveryCost,
  };
}

export const heroPreviewResult = calculateWorkStressResult({
  primaryLoadSource: "too-much-switching",
  overallOverload: 71,
  pressureSources: [
    "interruptions",
    "context-switching",
    "reactive-requests",
    "invisible-responsibility",
    "lack-of-control",
  ],
  loadPattern: "fragmented-and-reactive",
  controlLevel: 36,
  rankingOrder: [
    "switching-tasks-too-often",
    "unclear-expectations",
    "other-peoples-urgency",
    "too-much-volume",
    "emotional-labor",
    "lack-of-recognition-or-support",
  ],
  rankingConfirmed: true,
  switchingFrequency: "very-often",
  familiarWorkPattern: "fragmentation-more-than-volume",
  emotionalLabor: 64,
  clarityImpact: 72,
  patienceImpact: 58,
  recoveryImpact: 76,
  hardestRecoveryFactor: "no-clear-stopping-point",
  stressZone: "meetings-interruptions",
  loadVisibility: "often-underseen",
  sequenceOrder: [
    "work-pressure-rises",
    "switching-or-ambiguity-increases",
    "clarity-drops",
    "strain-builds",
    "recovery-hardens",
  ],
  sequenceConfirmed: true,
  finalPattern: "heavier-because-fragmented",
});
