import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type FirstSlipValue =
  | "energy"
  | "focus"
  | "emotional-steadiness"
  | "follow-through"
  | "recovery-after-pushing-through";

export type WeakAreaValue =
  | "morning-startup"
  | "focus-blocks"
  | "emotional-steadiness"
  | "staying-organized"
  | "completing-what-i-start"
  | "patience"
  | "daily-recovery"
  | "sleep-wind-down"
  | "consistency"
  | "handling-normal-pressure";

export type RhythmPatternValue =
  | "mostly-steady"
  | "steady-with-one-clear-dip"
  | "uneven-and-reactive"
  | "functional-but-fragile"
  | "small-stress-changes-whole-day";

export type EnergyConsistencyValue =
  | "very-consistent"
  | "mostly-consistent"
  | "mixed"
  | "often-uneven"
  | "highly-uneven";

export type RankedTruthKey =
  | "start-but-not-sustain"
  | "small-stress-changes-whole-day"
  | "function-with-hidden-cost"
  | "less-steady-as-day-goes-on"
  | "recovery-after-pushing-too-weak";

export type SlippageResponseValue =
  | "reset-and-stabilize"
  | "keep-going-quality-drops"
  | "more-reactive-or-overloaded"
  | "lose-consistency-and-drift"
  | "finish-day-more-depleted-than-expected";

export type FamiliarStatementValue =
  | "mostly-stable-with-weak-spots"
  | "function-but-not-much-margin"
  | "looks-more-stable-outside-than-inside"
  | "steadiness-changes-too-much-with-pressure"
  | "issue-is-inconsistency-under-load";

export type SlipPointValue =
  | "mornings"
  | "mid-day-focus"
  | "afternoons"
  | "emotional-pressure-moments"
  | "after-interruptions"
  | "end-of-day-recovery";

export type WeakeningFactorValue =
  | "low-energy"
  | "too-much-mental-load"
  | "emotional-carryover"
  | "weak-structure-or-rhythm"
  | "not-enough-recovery-margin";

export type SequenceKey =
  | "pressure-or-demand-rises"
  | "one-part-starts-slipping"
  | "steadiness-drops"
  | "follow-through-or-regulation-weaker"
  | "recovery-after-day-harder";

export type FinalPatternValue =
  | "fairly-stable-right-now"
  | "less-resilient-than-it-looks"
  | "steadiness-breaks-too-easily"
  | "rhythm-too-fragile-under-load"
  | "need-more-stability-not-effort";

export type DailyStabilityDimensionKey =
  | "energyStability"
  | "cognitiveFollowThrough"
  | "emotionalSteadiness"
  | "recoveryMargin";

export type DailyStabilityBandKey =
  | "stable-daily-functioning"
  | "mild-daily-fragility"
  | "inconsistent-daily-functioning"
  | "high-daily-instability"
  | "low-stability-low-recovery-margin-pattern";

export type InstabilityDriverKey =
  | "low-energy"
  | "mental-load"
  | "emotional-carryover"
  | "weak-rhythm"
  | "low-recovery-margin"
  | "pressure-sensitivity";

export type StableTraitKey =
  | "baseline-functioning-base"
  | "usable-energy-windows"
  | "follow-through-when-buffered"
  | "emotional-composure-pockets"
  | "recovery-responsiveness";

export type ResetDirectionKey =
  | "protect-morning-launch"
  | "reduce-cognitive-friction"
  | "contain-emotional-carryover"
  | "stabilize-day-rhythm"
  | "rebuild-recovery-margin"
  | "catch-slip-point-earlier";

export type CostMetricKey =
  | "clarity-loss"
  | "follow-through-drag"
  | "emotional-wobble"
  | "day-end-recovery-cost";

export type DailyFunctionChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type DailyFunctioningAnswers = {
  overallSteadiness?: number;
  firstSlip?: FirstSlipValue;
  weakAreas: WeakAreaValue[];
  rhythmPattern?: RhythmPatternValue;
  energyConsistency?: EnergyConsistencyValue;
  pressureDisruption?: number;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  slippageResponse?: SlippageResponseValue;
  clarityImpact?: number;
  followThroughImpact?: number;
  emotionalImpact?: number;
  familiarStatement?: FamiliarStatementValue;
  recoveryThroughDay?: number;
  strongestSlipPoint?: SlipPointValue;
  weakeningFactor?: WeakeningFactorValue;
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
    | "firstSlip"
    | "slippageResponse"
    | "familiarStatement"
    | "weakeningFactor"
    | "finalPattern";
  options: DailyFunctionChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "energyConsistency";
  options: DailyFunctionChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "overallSteadiness" | "pressureDisruption" | "recoveryThroughDay";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "weakAreas";
  limit: number;
  options: DailyFunctionChoiceOption[];
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
    key: "clarityImpact" | "followThroughImpact" | "emotionalImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "rhythmPattern" | "strongestSlipPoint";
  options: DailyFunctionChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type DailyFunctioningStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type DailyStabilityDimension = {
  key: DailyStabilityDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type DailyStabilityBand = {
  key: DailyStabilityBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  slipLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type InstabilityDriver = {
  key: InstabilityDriverKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type InstabilityDriverScore = InstabilityDriver & {
  value: number;
};

export type SlipPoint = {
  key: SlipPointValue;
  label: string;
  description: string;
  accent: string;
};

export type SlipPointScore = SlipPoint & {
  value: number;
};

export type StableTrait = {
  key: StableTraitKey;
  label: string;
  description: string;
};

export type ResetDirection = {
  key: ResetDirectionKey;
  label: string;
  description: string;
  accent: string;
};

export type CostMetric = {
  key: CostMetricKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type PreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type DashboardMetric = {
  label: string;
  value: number;
  accent: string;
  description: string;
};

export type RelatedDailyTool = {
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

export type DailyFunctioningResult = {
  score: number;
  completionRatio: number;
  band: DailyStabilityBand;
  dimensions: Record<DailyStabilityDimensionKey, number>;
  primaryInstabilityDriver: InstabilityDriverScore;
  strongestSlipPoint: SlipPoint;
  strongestRemainingStableTrait: StableTrait;
  mostUsefulDailyResetDirection: ResetDirection;
  driverScores: InstabilityDriverScore[];
  slipPointScores: SlipPointScore[];
  costMetrics: CostMetric[];
  previewMetrics: PreviewMetric[];
  dashboardMetrics: DashboardMetric[];
  stabilityLabel: string;
  interpretation: string;
  standout: string;
  slipInsight: string;
  overallSteadinessLevel: number;
  rhythmConsistency: number;
  energyLevel: number;
  cognitiveLevel: number;
  emotionalLevel: number;
  recoveryLevel: number;
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
  key: DailyStabilityDimensionKey;
  paragraphs: string[];
};

export const dailyFunctioningMetadata = {
  eyebrow: "DAILY STABILITY TOOL",
  title: "Daily Functioning Stability Check",
  description:
    "See where energy, follow-through, emotional steadiness, or recovery margin are making daily life less stable than it looks from the outside.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const dailyStabilityDimensions: DailyStabilityDimension[] = [
  {
    key: "energyStability",
    label: "Energy Stability",
    description: "How even your usable energy stays across a normal day before wobble starts spreading into the rest of the system.",
    icon: "signal",
    accent: "#67E8F9",
  },
  {
    key: "cognitiveFollowThrough",
    label: "Cognitive Follow-Through",
    description: "How well clarity, continuity, and completion hold once attention is asked to keep working under normal pressure.",
    icon: "graph",
    accent: "#93C5FD",
  },
  {
    key: "emotionalSteadiness",
    label: "Emotional Steadiness",
    description: "How buffered your mood, patience, and regulation remain when the day becomes more demanding or reactive.",
    icon: "insight",
    accent: "#C4B5FD",
  },
  {
    key: "recoveryMargin",
    label: "Recovery Margin",
    description: "How much capacity your system still has to reset during the day instead of only after it has already been overrun.",
    icon: "shield",
    accent: "#6EE7B7",
  },
];

export const dailyStabilityBands: DailyStabilityBand[] = [
  {
    key: "stable-daily-functioning",
    min: 0,
    max: 24,
    title: "Stable Daily Functioning",
    descriptor: "Your day-to-day system currently has enough steadiness that strain is not strongly reorganizing the whole day.",
    summary:
      "This usually means your daily functioning still has a dependable operating base. Dips may happen, but they do not automatically destabilize energy, clarity, follow-through, or recovery all at once.",
    interpretation:
      "A low score does not mean life is easy. It means the system is still holding shape. The best use of this result is often protecting what is already helping your days stay steady.",
    standoutLead: "What stands out most is usable steadiness.",
    slipLead: "Where the daily system loses shape seems contained rather than contagious right now.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#67E8F9",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-daily-fragility",
    min: 25,
    max: 44,
    title: "Mild Daily Fragility",
    descriptor: "Your days are still workable, but one or two predictable weak points are reducing resilience more than they should.",
    summary:
      "At this level, the issue is often not crisis. It is that steadiness has become thinner. The day may still function reasonably well, but small disruptions, weak recovery, or low margin are having more influence than they used to.",
    interpretation:
      "This is usually a good moment for earlier support. You do not need to wait for the whole day to feel unstable before adjusting the part that keeps slipping first.",
    standoutLead: "What stands out most is a thinner buffer.",
    slipLead: "The system still works, but it is carrying less spare steadiness than the outside may suggest.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "inconsistent-daily-functioning",
    min: 45,
    max: 64,
    title: "Inconsistent Daily Functioning",
    descriptor: "Your daily system is holding in places, but steadiness is breaking enough under pressure that the pattern has become noticeable.",
    summary:
      "This usually means the issue is not one symptom. It is how easily the day changes once energy dips, pressure rises, interruptions land, or recovery margin falls below what the day needs.",
    interpretation:
      "The encouraging part is that inconsistency creates a readable pattern. Once the specific slip points become visible, the problem stops being a vague sense that you should be handling the day better.",
    standoutLead: "What stands out most is pattern visibility.",
    slipLead: "The daily system is not failing everywhere. It is becoming predictable in where and how steadiness starts to drop.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 211, 77, 0.16)",
  },
  {
    key: "high-daily-instability",
    min: 65,
    max: 84,
    title: "High Daily Instability",
    descriptor: "Once one part of the day slips, the rest of the system is currently more likely to wobble with it.",
    summary:
      "At this level, the issue is often speed. Small strain spreads quickly enough that energy, clarity, follow-through, emotional steadiness, or recovery do not stay compartmentalized. The whole day starts paying for the first weak spot.",
    interpretation:
      "This does not mean you are not functioning. It means functioning is taking more hidden compensation than it should. The next useful move is usually to intervene earlier and more structurally.",
    standoutLead: "What stands out most is fast contagion.",
    slipLead: "Where the day loses shape seems to be early enough, or forceful enough, that it changes the rest of the operating system with it.",
    gradientFrom: "#FCA5A5",
    gradientTo: "#FCD34D",
    glow: "rgba(252, 165, 165, 0.18)",
  },
  {
    key: "low-stability-low-recovery-margin-pattern",
    min: 85,
    max: 100,
    title: "Low Stability / Low Recovery Margin Pattern",
    descriptor: "Your daily system is likely carrying low buffer and low reset capacity at the same time, which makes steadiness hard to maintain once load rises.",
    summary:
      "This suggests daily functioning is being affected less by one dramatic issue and more by how quickly steadiness drops once energy, clarity, or recovery margin gets stressed. The pattern is operating like a low-buffer system that has too little room to absorb normal strain.",
    interpretation:
      "A high score here is not a diagnosis. It is a map of low margin. The most useful next step is rebuilding steadiness in the system itself instead of asking for more force from the person inside it.",
    standoutLead: "What stands out most is low buffer across multiple parts of the day.",
    slipLead: "The daily system appears to lose steadiness early enough that recovery, not only effort, now needs direct support.",
    gradientFrom: "#FCA5A5",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 165, 165, 0.2)",
  },
];

const firstSlipOptions: DailyFunctionChoiceOption[] = [
  { value: "energy", marker: "A", label: "Energy", description: "The day gets thinner fast once usable energy drops." },
  { value: "focus", marker: "B", label: "Focus", description: "Mental steadiness is usually the first thing to narrow." },
  {
    value: "emotional-steadiness",
    marker: "C",
    label: "Emotional steadiness",
    description: "The day becomes less buffered emotionally before other problems become obvious.",
  },
  {
    value: "follow-through",
    marker: "D",
    label: "Follow-through",
    description: "You can start, but consistency or completion begins slipping first.",
  },
  {
    value: "recovery-after-pushing-through",
    marker: "E",
    label: "Recovery after pushing through",
    description: "The bigger cost lands after effort, not always during it.",
  },
];

const weakAreaOptions: DailyFunctionChoiceOption[] = [
  { value: "morning-startup", label: "Morning startup" },
  { value: "focus-blocks", label: "Focus blocks" },
  { value: "emotional-steadiness", label: "Emotional steadiness" },
  { value: "staying-organized", label: "Staying organized" },
  { value: "completing-what-i-start", label: "Completing what I start" },
  { value: "patience", label: "Patience" },
  { value: "daily-recovery", label: "Daily recovery" },
  { value: "sleep-wind-down", label: "Sleep / wind-down" },
  { value: "consistency", label: "Consistency" },
  { value: "handling-normal-pressure", label: "Handling normal pressure" },
];

const rhythmPatternOptions: DailyFunctionChoiceOption[] = [
  {
    value: "mostly-steady",
    marker: "A",
    label: "Mostly steady",
    description: "The day has a readable base and strain does not spread too easily.",
  },
  {
    value: "steady-with-one-clear-dip",
    marker: "B",
    label: "Steady with one clear dip",
    description: "There is a recognizable wobble point, but the rest of the day still holds.",
  },
  {
    value: "uneven-and-reactive",
    marker: "C",
    label: "Uneven and reactive",
    description: "The day changes shape quickly depending on what hits it.",
  },
  {
    value: "functional-but-fragile",
    marker: "D",
    label: "Functional but fragile",
    description: "You can still get through the day, but the structure feels easier to destabilize than it looks.",
  },
  {
    value: "small-stress-changes-whole-day",
    marker: "E",
    label: "Inconsistent enough that small stress changes the whole day",
    description: "The system has low margin, so even normal strain can reorganize it.",
  },
];

const energyConsistencyOptions: DailyFunctionChoiceOption[] = [
  { value: "very-consistent", label: "Very consistent" },
  { value: "mostly-consistent", label: "Mostly consistent" },
  { value: "mixed", label: "Mixed" },
  { value: "often-uneven", label: "Often uneven" },
  { value: "highly-uneven", label: "Highly uneven" },
];

export const dailyFunctioningRankingItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "start-but-not-sustain", label: "I can start but not sustain" },
  { key: "small-stress-changes-whole-day", label: "Small stress changes the whole day" },
  { key: "function-with-hidden-cost", label: "I function, but with hidden cost" },
  { key: "less-steady-as-day-goes-on", label: "I become less steady as the day goes on" },
  { key: "recovery-after-pushing-too-weak", label: "Recovery after pushing through is too weak" },
];

const slippageResponseOptions: DailyFunctionChoiceOption[] = [
  {
    value: "reset-and-stabilize",
    marker: "A",
    label: "I reset and stabilize fairly well",
    description: "The system can usually recover enough to keep the day usable.",
  },
  {
    value: "keep-going-quality-drops",
    marker: "B",
    label: "I keep going, but quality drops",
    description: "The day continues, but steadiness and precision thin out.",
  },
  {
    value: "more-reactive-or-overloaded",
    marker: "C",
    label: "I become more reactive or overloaded",
    description: "Pressure spreads into regulation and the day becomes harder to hold.",
  },
  {
    value: "lose-consistency-and-drift",
    marker: "D",
    label: "I lose consistency and drift",
    description: "The day becomes looser, less anchored, and harder to pull back together.",
  },
  {
    value: "finish-day-more-depleted-than-expected",
    marker: "E",
    label: "I finish the day more depleted than I expected",
    description: "The main cost lands through the hidden drain the slip creates.",
  },
];

const familiarStatementOptions: DailyFunctionChoiceOption[] = [
  { value: "mostly-stable-with-weak-spots", marker: "A", label: "My system is mostly stable, with a few weak spots" },
  { value: "function-but-not-much-margin", marker: "B", label: "I can function, but not with much margin" },
  {
    value: "looks-more-stable-outside-than-inside",
    marker: "C",
    label: "I look more stable outside than it feels inside",
  },
  {
    value: "steadiness-changes-too-much-with-pressure",
    marker: "D",
    label: "Daily steadiness changes too much with pressure",
  },
  {
    value: "issue-is-inconsistency-under-load",
    marker: "E",
    label: "My issue is not effort — it is inconsistency under load",
  },
];

const slipPointOptions: DailyFunctionChoiceOption[] = [
  { value: "mornings", label: "Mornings" },
  { value: "mid-day-focus", label: "Mid-day focus" },
  { value: "afternoons", label: "Afternoons" },
  { value: "emotional-pressure-moments", label: "Emotional pressure moments" },
  { value: "after-interruptions", label: "After interruptions" },
  { value: "end-of-day-recovery", label: "End-of-day recovery" },
];

const weakeningFactorOptions: DailyFunctionChoiceOption[] = [
  {
    value: "low-energy",
    marker: "A",
    label: "Low energy",
    description: "The day becomes less stable because the usable energy base is too thin.",
  },
  {
    value: "too-much-mental-load",
    marker: "B",
    label: "Too much mental load",
    description: "The day starts slipping when the mind is carrying too much at once.",
  },
  {
    value: "emotional-carryover",
    marker: "C",
    label: "Emotional carryover",
    description: "What the day is emotionally holding keeps changing how the rest of it functions.",
  },
  {
    value: "weak-structure-or-rhythm",
    marker: "D",
    label: "Weak structure or rhythm",
    description: "The day lacks enough shape to stay steady once real-life variability enters it.",
  },
  {
    value: "not-enough-recovery-margin",
    marker: "E",
    label: "Not enough recovery margin",
    description: "There is too little built-in reset capacity for the level of demand being carried.",
  },
];

export const dailyFunctioningSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "pressure-or-demand-rises", label: "Pressure or demand rises" },
  { key: "one-part-starts-slipping", label: "One part of the day starts slipping" },
  { key: "steadiness-drops", label: "Steadiness drops" },
  { key: "follow-through-or-regulation-weaker", label: "Follow-through or regulation gets weaker" },
  { key: "recovery-after-day-harder", label: "Recovery after the day is harder" },
];

const finalPatternOptions: DailyFunctionChoiceOption[] = [
  { value: "fairly-stable-right-now", marker: "A", label: "My daily functioning is fairly stable right now" },
  {
    value: "less-resilient-than-it-looks",
    marker: "B",
    label: "I can manage most days, but the system is less resilient than it looks",
  },
  {
    value: "steadiness-breaks-too-easily",
    marker: "C",
    label: "The issue is not one symptom — it is how easily steadiness breaks",
  },
  {
    value: "rhythm-too-fragile-under-load",
    marker: "D",
    label: "Some part of my daily rhythm is too fragile under load",
  },
  {
    value: "need-more-stability-not-effort",
    marker: "E",
    label: "I need more stability in the system, not just more effort from myself",
  },
];

export const dailyFunctioningSteps: DailyFunctioningStep[] = [
  {
    id: "overall-steadiness",
    step: 1,
    kind: "slider",
    field: "overallSteadiness",
    eyebrow: "Step 1",
    question: "How steady does your day-to-day functioning feel right now overall?",
    hint: "This is about how dependable the day feels from inside it, not how productive it looks from outside.",
    label: "Overall daily steadiness",
    minLabel: "Very unstable",
    maxLabel: "Very steady",
  },
  {
    id: "first-slip",
    step: 2,
    kind: "scenario-choice",
    field: "firstSlip",
    eyebrow: "Step 2",
    question: "What tends to slip first on harder days?",
    hint: "Pick the earliest wobble point, not necessarily the biggest cost later.",
    options: firstSlipOptions,
  },
  {
    id: "weak-areas",
    step: 3,
    kind: "multi-select",
    field: "weakAreas",
    limit: 4,
    eyebrow: "Step 3",
    question: "Which daily-life areas feel least stable right now?",
    hint: "Choose the places where steadiness is most likely to narrow, drift, or become expensive to maintain.",
    options: weakAreaOptions,
  },
  {
    id: "rhythm-pattern",
    step: 4,
    kind: "visual-choice",
    field: "rhythmPattern",
    columns: 2,
    eyebrow: "Step 4",
    question: "Which visual rhythm pattern feels closest to your current days?",
    hint: "Choose the pattern that best matches the shape of a normal day, not the best day or the worst day.",
    options: rhythmPatternOptions,
  },
  {
    id: "energy-consistency",
    step: 5,
    kind: "segmented",
    field: "energyConsistency",
    eyebrow: "Step 5",
    question: "How consistent is your energy across a normal day?",
    hint: "Think about usable steadiness, not just whether you can push yourself through.",
    options: energyConsistencyOptions,
  },
  {
    id: "pressure-disruption",
    step: 6,
    kind: "slider",
    field: "pressureDisruption",
    eyebrow: "Step 6",
    question: "How much does normal pressure disrupt your focus or follow-through?",
    hint: "Rate how much ordinary demands are enough to pull the day off course.",
    label: "Pressure disruption",
    minLabel: "Very little",
    maxLabel: "A lot",
  },
  {
    id: "ranked-functioning-truths",
    step: 7,
    kind: "drag-rank",
    eyebrow: "Step 7",
    question: "Rank these from most to least true about your functioning pattern",
    hint: "Put the pattern that costs steadiness fastest at the top.",
    items: dailyFunctioningRankingItems,
  },
  {
    id: "slippage-response",
    step: 8,
    kind: "scenario-choice",
    field: "slippageResponse",
    eyebrow: "Step 8",
    question: "When the day starts slipping, what usually happens next?",
    hint: "Choose the next phase of the day after the first sign of instability appears.",
    options: slippageResponseOptions,
  },
  {
    id: "impact-sliders",
    step: 9,
    kind: "triple-slider",
    eyebrow: "Step 9",
    question: "How much do these get affected on unstable days?",
    hint: "Use these sliders for the negative impact instability tends to create.",
    fields: [
      { key: "clarityImpact", label: "Clarity", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
      {
        key: "followThroughImpact",
        label: "Follow-through",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "emotionalImpact",
        label: "Emotional steadiness",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "familiar-statement",
    step: 10,
    kind: "scenario-choice",
    field: "familiarStatement",
    eyebrow: "Step 10",
    question: "Which statement feels most familiar?",
    hint: "Use this to name the broader daily pattern, not only what happened most recently.",
    options: familiarStatementOptions,
  },
  {
    id: "recovery-through-day",
    step: 11,
    kind: "slider",
    field: "recoveryThroughDay",
    eyebrow: "Step 11",
    question: "How well do you recover through the day after stress, effort, or a difficult block?",
    hint: "This is about regaining steadiness after strain, not only about sleeping at night.",
    label: "Recovery through the day",
    minLabel: "Very poorly",
    maxLabel: "Very well",
  },
  {
    id: "strongest-slip-point",
    step: 12,
    kind: "visual-choice",
    field: "strongestSlipPoint",
    columns: 3,
    eyebrow: "Step 12",
    question: "Where is your strongest daily slip point?",
    hint: "Pick the part of the day where steadiness weakens fastest or most reliably.",
    options: slipPointOptions,
  },
  {
    id: "weakening-factor",
    step: 13,
    kind: "scenario-choice",
    field: "weakeningFactor",
    eyebrow: "Step 13",
    question: "What usually weakens functioning most?",
    hint: "Choose the factor that most often turns an ordinary day into a less stable one.",
    options: weakeningFactorOptions,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Step 14",
    question: "Put these in the order they usually happen for you",
    hint: "Order the instability pattern as it tends to unfold in a normal pressured day.",
    items: dailyFunctioningSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Step 15",
    question: "Which statement feels closest to your current pattern?",
    hint: "Use the final step to describe the operating pattern of the day, not to judge yourself for having it.",
    options: finalPatternOptions,
  },
];

const firstSlipSeverity: Record<FirstSlipValue, number> = {
  energy: 72,
  focus: 74,
  "emotional-steadiness": 76,
  "follow-through": 78,
  "recovery-after-pushing-through": 82,
};

const weakAreaSeverity: Record<WeakAreaValue, number> = {
  "morning-startup": 70,
  "focus-blocks": 78,
  "emotional-steadiness": 76,
  "staying-organized": 68,
  "completing-what-i-start": 74,
  patience: 70,
  "daily-recovery": 82,
  "sleep-wind-down": 76,
  consistency: 72,
  "handling-normal-pressure": 78,
};

const rhythmPatternSeverity: Record<RhythmPatternValue, number> = {
  "mostly-steady": 18,
  "steady-with-one-clear-dip": 40,
  "uneven-and-reactive": 78,
  "functional-but-fragile": 66,
  "small-stress-changes-whole-day": 88,
};

const energyConsistencySeverity: Record<EnergyConsistencyValue, number> = {
  "very-consistent": 18,
  "mostly-consistent": 34,
  mixed: 56,
  "often-uneven": 76,
  "highly-uneven": 90,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "start-but-not-sustain": 78,
  "small-stress-changes-whole-day": 86,
  "function-with-hidden-cost": 72,
  "less-steady-as-day-goes-on": 74,
  "recovery-after-pushing-too-weak": 82,
};

const slippageResponseSeverity: Record<SlippageResponseValue, number> = {
  "reset-and-stabilize": 20,
  "keep-going-quality-drops": 56,
  "more-reactive-or-overloaded": 82,
  "lose-consistency-and-drift": 78,
  "finish-day-more-depleted-than-expected": 88,
};

const familiarStatementSeverity: Record<FamiliarStatementValue, number> = {
  "mostly-stable-with-weak-spots": 28,
  "function-but-not-much-margin": 58,
  "looks-more-stable-outside-than-inside": 68,
  "steadiness-changes-too-much-with-pressure": 76,
  "issue-is-inconsistency-under-load": 80,
};

const slipPointSeverity: Record<SlipPointValue, number> = {
  mornings: 66,
  "mid-day-focus": 72,
  afternoons: 70,
  "emotional-pressure-moments": 82,
  "after-interruptions": 80,
  "end-of-day-recovery": 84,
};

const weakeningFactorSeverity: Record<WeakeningFactorValue, number> = {
  "low-energy": 74,
  "too-much-mental-load": 80,
  "emotional-carryover": 78,
  "weak-structure-or-rhythm": 76,
  "not-enough-recovery-margin": 84,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "fairly-stable-right-now": 24,
  "less-resilient-than-it-looks": 58,
  "steadiness-breaks-too-easily": 78,
  "rhythm-too-fragile-under-load": 72,
  "need-more-stability-not-effort": 82,
};

const rankingWeights = [30, 24, 18, 16, 12];
const expectedSequence: SequenceKey[] = [
  "pressure-or-demand-rises",
  "one-part-starts-slipping",
  "steadiness-drops",
  "follow-through-or-regulation-weaker",
  "recovery-after-day-harder",
];

const scoringWeights = {
  overallSteadiness: 10,
  firstSlip: 6,
  weakAreas: 8,
  rhythmPattern: 6,
  energyConsistency: 8,
  pressureDisruption: 8,
  rankingOrder: 8,
  slippageResponse: 8,
  impacts: 8,
  familiarStatement: 6,
  recoveryThroughDay: 8,
  strongestSlipPoint: 4,
  weakeningFactor: 6,
  sequenceOrder: 4,
  finalPattern: 6,
} as const;

export const instabilityDrivers: InstabilityDriver[] = [
  {
    key: "low-energy",
    label: "Low energy",
    description: "The day loses steadiness because the energy base thins faster than the rest of the system can compensate for.",
    accent: "#67E8F9",
    icon: "signal",
  },
  {
    key: "mental-load",
    label: "Too much mental load",
    description: "The day destabilizes because cognitive carrying demand is outrunning the clarity and completion capacity available.",
    accent: "#93C5FD",
    icon: "graph",
  },
  {
    key: "emotional-carryover",
    label: "Emotional carryover",
    description: "The day keeps getting shaped by emotional residue, pressure, or reactivity that has not fully settled.",
    accent: "#C4B5FD",
    icon: "insight",
  },
  {
    key: "weak-rhythm",
    label: "Weak structure or rhythm",
    description: "The system needs more predictable rhythm because small disruptions are having too much influence on the day shape.",
    accent: "#FCD34D",
    icon: "pattern",
  },
  {
    key: "low-recovery-margin",
    label: "Low recovery margin",
    description: "The day is operating with too little reset room, which makes small strain accumulate instead of clear.",
    accent: "#6EE7B7",
    icon: "shield",
  },
  {
    key: "pressure-sensitivity",
    label: "Pressure sensitivity",
    description: "Ordinary stressors are changing the whole day too quickly, which suggests the system currently has low buffer for demand.",
    accent: "#FCA5A5",
    icon: "trend",
  },
];

export const slipPoints: SlipPoint[] = [
  {
    key: "mornings",
    label: "Mornings",
    description: "The system is losing steadiness early, before the day has had enough time to settle into a usable rhythm.",
    accent: "#67E8F9",
  },
  {
    key: "mid-day-focus",
    label: "Mid-day focus",
    description: "The day is holding initially, but sustained clarity and continuity become harder to keep through the middle stretch.",
    accent: "#93C5FD",
  },
  {
    key: "afternoons",
    label: "Afternoons",
    description: "Steadiness is thinning as the day progresses, which often reflects load accumulation or weak energy support.",
    accent: "#FCD34D",
  },
  {
    key: "emotional-pressure-moments",
    label: "Emotional pressure moments",
    description: "The main instability point appears when the day becomes emotionally charged, tense, or relationally loaded.",
    accent: "#C4B5FD",
  },
  {
    key: "after-interruptions",
    label: "After interruptions",
    description: "The harder part is not the interruption itself. It is rebuilding steadiness once the day has been knocked off its track.",
    accent: "#FCA5A5",
  },
  {
    key: "end-of-day-recovery",
    label: "End-of-day recovery",
    description: "The day may still function outwardly, but the real loss appears in how hard it is to come back down afterward.",
    accent: "#6EE7B7",
  },
];

const stableTraits: StableTrait[] = [
  {
    key: "baseline-functioning-base",
    label: "Baseline functioning base",
    description: "There is still a meaningful operating base here, which means the system can be strengthened rather than rebuilt from zero.",
  },
  {
    key: "usable-energy-windows",
    label: "Usable energy windows",
    description: "Even if energy is uneven overall, parts of the day still hold enough usable energy to become anchors.",
  },
  {
    key: "follow-through-when-buffered",
    label: "Follow-through when buffered",
    description: "Completion and continuity still show up when the day has enough structure and margin around them.",
  },
  {
    key: "emotional-composure-pockets",
    label: "Emotional composure pockets",
    description: "There is still some emotional steadiness available, even if it becomes harder to keep once pressure rises.",
  },
  {
    key: "recovery-responsiveness",
    label: "Recovery responsiveness",
    description: "Your system still knows how to settle when it gets enough pause, which is a meaningful strength to build around.",
  },
];

const resetDirections: ResetDirection[] = [
  {
    key: "protect-morning-launch",
    label: "Protect the morning launch",
    description: "Strengthen the first stable part of the day so the system does not begin already close to slipping.",
    accent: "#67E8F9",
  },
  {
    key: "reduce-cognitive-friction",
    label: "Reduce cognitive friction",
    description: "Lower the mental reopening cost inside the day so follow-through has a better chance to stay intact.",
    accent: "#93C5FD",
  },
  {
    key: "contain-emotional-carryover",
    label: "Contain emotional carryover",
    description: "Give the system a faster way to metabolize emotional load so it stops reshaping the rest of the day.",
    accent: "#C4B5FD",
  },
  {
    key: "stabilize-day-rhythm",
    label: "Stabilize the day rhythm",
    description: "A cleaner daily shape often restores more steadiness than asking for more discipline from a low-margin system.",
    accent: "#FCD34D",
  },
  {
    key: "rebuild-recovery-margin",
    label: "Rebuild recovery margin",
    description: "The next gain is likely to come from more reset room, not more pushing through the same fragile pattern.",
    accent: "#6EE7B7",
  },
  {
    key: "catch-slip-point-earlier",
    label: "Catch the slip point earlier",
    description: "The more quickly you notice the first wobble, the less likely the rest of the day is to reorganize around it.",
    accent: "#FCA5A5",
  },
];

const costMetricTemplates: Omit<CostMetric, "value">[] = [
  {
    key: "clarity-loss",
    label: "Clarity loss",
    description: "The day becomes harder to read, prioritize, or think through cleanly once steadiness drops.",
    accent: "#67E8F9",
  },
  {
    key: "follow-through-drag",
    label: "Follow-through drag",
    description: "Completion gets weaker not necessarily because you do not care, but because the system stops holding continuity well enough.",
    accent: "#93C5FD",
  },
  {
    key: "emotional-wobble",
    label: "Emotional wobble",
    description: "Mood, patience, or regulation become less buffered once the day starts carrying more strain than it can absorb cleanly.",
    accent: "#C4B5FD",
  },
  {
    key: "day-end-recovery-cost",
    label: "Harder day-end recovery",
    description: "The after-cost shows up when the day remains active in the system longer than it should.",
    accent: "#6EE7B7",
  },
];

export const relatedDailyTools: RelatedDailyTool[] = [
  {
    title: "Life Balance Visualizer",
    description: "See whether broader life support is uneven in ways that are making daily steadiness harder to maintain.",
    category: "Life Balance & Habits",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "life-balance-visualizer", categorySlug: "life-balance-habits" }),
  },
  {
    title: "Sleep Pressure Check",
    description: "Read whether weak overnight recovery is quietly shaping the way daytime functioning narrows or drifts.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "sleep-pressure-check", categorySlug: "sleep-recovery" }),
  },
  {
    title: "Burnout Risk Audit",
    description: "Explore whether repeated low-margin days are moving into deeper exhaustion, detachment, or capacity loss.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "trend",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Turn ongoing strain, low recovery, and depleted margin into a realistic short reset path.",
    category: "Emotional Regulation",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
];

export const dailyFunctioningFaqItems: FaqItem[] = [
  {
    question: "What does a daily functioning score actually mean?",
    answer:
      "It is a directional read of how stable or unstable your day-to-day operating system feels right now. It does not measure your worth, willpower, or identity. It measures how reliably energy, clarity, follow-through, emotional steadiness, and recovery are holding together under current load.",
  },
  {
    question: "Is low daily stability the same as burnout?",
    answer:
      "No. Burnout is a larger depletion pattern. Daily stability is more immediate and operational. It asks whether the day itself holds shape once normal pressure, interruptions, or effort enter it. A person can have low daily steadiness without full burnout, and long stretches of low steadiness can also contribute to burnout over time.",
  },
  {
    question: "Why do small stressors affect my whole day so quickly?",
    answer:
      "Because small stressors often only expose the real issue: low margin. If the system is already running with thin energy, weak rhythm, unfinished recovery, or high carryover, even ordinary pressure can spread more quickly than it should.",
  },
  {
    question: "What is a recovery margin?",
    answer:
      "Recovery margin is the amount of usable reset capacity your system still has during and after the day. It is the difference between barely getting through and having enough room to recover from effort without the whole day turning fragile.",
  },
  {
    question: "How do I know where my day usually starts slipping?",
    answer:
      "Look for the earliest repeatable wobble, not the loudest outcome. For some people it is mornings. For others it is after interruptions, during emotional pressure, or at the end of the day when recovery should begin. The slip point is where steadiness first narrows, even if the visible cost shows up later.",
  },
  {
    question: "Why can I look functional while feeling unstable inside?",
    answer:
      "Because functioning and steadiness are not the same thing. Many people can still respond, work, show up, and be competent while internally running on thin buffer, hidden compensation, or weak recovery. The outside can stay organized long after the inside feels less supported.",
  },
  {
    question: "What is the difference between fatigue and low daily steadiness?",
    answer:
      "Fatigue is one contributor. Low daily steadiness is a broader pattern. It includes how energy, clarity, rhythm, regulation, and recovery interact across the whole day. You can be tired but still steady, or not extremely tired and still operationally inconsistent.",
  },
  {
    question: "Can structure improve functioning even when energy is uneven?",
    answer:
      "Yes. Better rhythm does not replace energy, but it can reduce how much energy gets wasted. Clearer sequencing, earlier resets, protected anchors, and lower friction often help a low-margin day hold together more cleanly.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it after a meaningful change in load, sleep, schedule, stress pattern, or recovery quality. It is also useful after you have made a stability-oriented change for a few weeks and want to compare whether the day is holding shape more reliably.",
  },
  {
    question: "What should I do if my day feels manageable until one point and then falls apart?",
    answer:
      "That one point is the best place to start. The goal is not to fix the entire day all at once. It is to understand the first slip point, reduce what destabilizes it, and give the system more support there so the rest of the day stops having to compensate for it.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What daily functioning actually means",
    paragraphs: [
      "Daily functioning is the practical question of whether your day can hold together. It is not only about whether you get things done. It is about whether energy stays usable enough, attention stays coherent enough, emotions stay buffered enough, and recovery remains available enough for the day to feel steady instead of constantly close to wobbling.",
      "That matters because people often use broad labels like tired, overwhelmed, or unmotivated when the more accurate issue is that the system itself feels operationally unstable. A day can still look functional from the outside while being internally narrow, fragile, or expensive to maintain. This tool is designed to map that difference.",
    ],
  },
  {
    title: "Why functioning is not only about productivity or motivation",
    paragraphs: [
      "Productivity measures output. Functioning measures how well the system is carrying the day while producing that output. A person may still finish tasks while clarity is thinner, patience is shorter, follow-through is more erratic, and recovery is becoming less available. From the outside, everything may still look fine enough. Inside, the amount of compensation required to keep the day moving can be growing quickly.",
      "This is why motivation advice often feels off when daily steadiness is the real issue. The person may not need more pressure. They may need more support, more rhythm, less friction, or more recovery margin. A low-margin system can produce respectable output for a while, but it usually pays for that output somewhere else.",
    ],
  },
  {
    title: "How small instability compounds through the day",
    paragraphs: [
      "Instability compounds because days are cumulative systems. If mornings begin thin, the rest of the day starts with less buffer. If interruptions hit at the wrong time, focus becomes harder to rebuild. If emotional pressure lands and does not clear, later tasks ask more from a less steady system. If recovery after a difficult block never really happens, the evening starts carrying more residue than it should.",
      "That compounding effect is why people often feel confused by their own inconsistency. They may think, 'I should be able to handle normal days better than this,' when the real pattern is that one small slip point keeps spreading into clarity loss, lower follow-through, emotional wobble, and weaker recovery later. Once you can see that sequence, the day stops feeling random.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "energyStability",
    paragraphs: [
      "Energy Stability measures whether your usable energy stays steady enough to support the rest of the day. This is not only about how tired you feel. It is about whether the day still has enough dependable fuel underneath it to support attention, steadiness, and recovery without constant compensation.",
      "When this score drops, the day often becomes more fragile than it first appears. Tasks feel heavier, transitions cost more, and other weak points become easier to trigger because the system has less baseline support.",
    ],
  },
  {
    key: "cognitiveFollowThrough",
    paragraphs: [
      "Cognitive Follow-Through measures how well your mind can stay clear, hold continuity, and bring things forward once the day becomes more complex or interrupted. Many people do not lose ability outright. They lose coherence. They can still think, but the cost of staying organized and following through rises faster than it should.",
      "A lower score here often explains why the day can start well and then become slippery. The issue is not necessarily effort. It is that the thinking system is spending too much energy on re-entry, recovery, or holding itself together.",
    ],
  },
  {
    key: "emotionalSteadiness",
    paragraphs: [
      "Emotional Steadiness measures how buffered you remain when the day becomes tense, reactive, disappointing, or overloaded. This is not about being emotionless. It is about whether feelings move through the day without reorganizing the whole operating system too quickly.",
      "If this score is lower, pressure is likely spreading through mood, patience, or regulation faster than you want. That often makes the day feel less stable even when the visible task list has not dramatically changed.",
    ],
  },
  {
    key: "recoveryMargin",
    paragraphs: [
      "Recovery Margin measures how much reset capacity exists inside the day and after it. Some people can have a difficult block and still come back. Others find that once a push happens, the system never fully re-stabilizes. The day keeps carrying the strain forward.",
      "A lower recovery margin usually means the problem is not only what the day is asking. It is also how little room the system currently has to clear effort, emotion, or disruption once it has landed.",
    ],
  },
];

export const disruptionBlocks: ContentBlock[] = [
  {
    title: "Low sleep or weak recovery",
    body:
      "When recovery is incomplete, the day starts with less operating room, which makes ordinary pressure spread faster.",
  },
  {
    title: "Too much load",
    body:
      "Even when nothing is dramatic, a day with too much demand and too little margin often becomes easier to destabilize.",
  },
  {
    title: "Emotional carryover",
    body:
      "Unprocessed tension, disappointment, or relational stress can keep shaping the day long after the original moment has passed.",
  },
  {
    title: "Poor structure",
    body:
      "Weak rhythm means the day has fewer anchors, which makes wobble points more likely to spread into the rest of the system.",
  },
  {
    title: "Interruptions",
    body:
      "The interruption itself is often smaller than the re-entry cost it creates once steadiness has already thinned.",
  },
  {
    title: "Low margin",
    body:
      "When the day is operating too close to capacity, small changes become system-wide changes more easily.",
  },
  {
    title: "Pushing through without reset",
    body:
      "What looks like resilience can quietly become accumulation when the system keeps performing without enough clearing.",
  },
];

export const restorationBlocks: ContentBlock[] = [
  {
    title: "Protect rhythm",
    body:
      "A steadier day usually comes from stronger anchors, not just stronger effort. Rhythm reduces how much each disruption can spread.",
  },
  {
    title: "Notice early slip points",
    body:
      "The earlier you catch the wobble, the less likely the rest of the day is to reorganize around it.",
  },
  {
    title: "Improve recovery margin",
    body:
      "Steadiness improves when the system has more room to reset during and after effort instead of only compensating through force.",
  },
  {
    title: "Lower friction in the day",
    body:
      "Simpler transitions, clearer sequencing, and fewer unnecessary reopenings often restore more stability than generic motivation pressure.",
  },
  {
    title: "Support steadiness instead of forcing output",
    body:
      "A stable system usually produces better output than a fragile one that is constantly being pushed harder.",
  },
  {
    title: "Reduce hidden carryover",
    body:
      "What lingers emotionally or cognitively after a difficult block often matters as much as the block itself.",
  },
];

export const dailyFunctioningStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "The issue is not always discipline",
  quote:
    "This can look like someone telling themselves they just need more discipline. From the outside, enough is still getting done that nobody would call it a crisis. But a normal amount of pressure can change the whole day. If the morning starts thin, focus never really settles. If an interruption lands at the wrong time, the next few hours go loose. If something emotionally stressful happens, even a small thing, the rest of the day feels less buffered. The deeper issue is often not character. It is a daily system with too little margin to stay steady under ordinary load.",
  takeaway:
    "This is how low daily steadiness often works in real life: not as a dramatic collapse, but as a system that is easier to knock off course than it looks from the outside.",
  toneLabel: "Emotionally real",
  accent: "#67E8F9",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by locating the earliest reliable slip point. It may be mornings, emotional pressure, interruptions, afternoons, or end-of-day recovery. The more precise that point becomes, the less tempting it is to treat the whole day like one giant problem.",
  "Then work on the system before the symptom. If the issue is low recovery margin, more effort will usually worsen it. If the issue is weak rhythm, more motivation will not fix the structural wobble. If the issue is emotional carryover, more output pressure can actually make the day less stable. Matching the adjustment to the true driver is what makes improvement feel real instead of theoretical.",
  "Finally, let daily steadiness become a legitimate goal. Many people only track visible output, then wonder why the day keeps feeling off. A steadier system often creates better productivity, mood, and recovery anyway, but it does so by supporting the operating base rather than by extracting more from a low-margin day.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Weekly Reset Planner",
  description:
    "A structured guide for improving daily steadiness, protecting recovery margin, and rebuilding a more stable rhythm across the week.",
  buttonLabel: "View Next Step",
};

export const dailyFunctioningStabilityMetadata = {
  title: dailyFunctioningMetadata.title,
  description: dailyFunctioningMetadata.description,
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
  return dailyStabilityBands.find((band) => score >= band.min && score <= band.max) ?? dailyStabilityBands[0];
}

function getInverseStabilityScore(value?: number) {
  if (typeof value !== "number") {
    return undefined;
  }

  return clampScore(100 - value);
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

function getDriverScores(answers: DailyFunctioningAnswers): InstabilityDriverScore[] {
  const raw: Record<InstabilityDriverKey, number[]> = {
    "low-energy": [],
    "mental-load": [],
    "emotional-carryover": [],
    "weak-rhythm": [],
    "low-recovery-margin": [],
    "pressure-sensitivity": [],
  };

  if (answers.firstSlip === "energy") {
    raw["low-energy"].push(92);
  }
  if (answers.firstSlip === "focus" || answers.firstSlip === "follow-through") {
    raw["mental-load"].push(88);
  }
  if (answers.firstSlip === "emotional-steadiness") {
    raw["emotional-carryover"].push(90);
  }
  if (answers.firstSlip === "recovery-after-pushing-through") {
    raw["low-recovery-margin"].push(92);
  }

  answers.weakAreas.forEach((area) => {
    if (["morning-startup", "daily-recovery", "sleep-wind-down", "consistency"].includes(area)) {
      raw["low-energy"].push(weakAreaSeverity[area] * 0.6);
      raw["weak-rhythm"].push(weakAreaSeverity[area] * 0.46);
    }
    if (["focus-blocks", "staying-organized", "completing-what-i-start"].includes(area)) {
      raw["mental-load"].push(weakAreaSeverity[area] * 0.76);
    }
    if (["emotional-steadiness", "patience"].includes(area)) {
      raw["emotional-carryover"].push(weakAreaSeverity[area] * 0.74);
    }
    if (area === "handling-normal-pressure") {
      raw["pressure-sensitivity"].push(weakAreaSeverity[area] * 0.82);
    }
    if (area === "daily-recovery" || area === "sleep-wind-down") {
      raw["low-recovery-margin"].push(weakAreaSeverity[area] * 0.82);
    }
  });

  if (answers.rhythmPattern === "uneven-and-reactive") {
    raw["pressure-sensitivity"].push(88);
    raw["weak-rhythm"].push(74);
  }
  if (answers.rhythmPattern === "functional-but-fragile") {
    raw["weak-rhythm"].push(78);
    raw["low-recovery-margin"].push(58);
  }
  if (answers.rhythmPattern === "small-stress-changes-whole-day") {
    raw["pressure-sensitivity"].push(94);
    raw["weak-rhythm"].push(84);
  }
  if (answers.rhythmPattern === "steady-with-one-clear-dip") {
    raw["low-energy"].push(42);
  }

  if (answers.energyConsistency) {
    raw["low-energy"].push(energyConsistencySeverity[answers.energyConsistency]);
  }

  if (typeof answers.pressureDisruption === "number") {
    raw["mental-load"].push(answers.pressureDisruption * 0.62);
    raw["pressure-sensitivity"].push(answers.pressureDisruption * 0.72);
  }

  if (answers.slippageResponse === "keep-going-quality-drops") {
    raw["mental-load"].push(54);
  }
  if (answers.slippageResponse === "more-reactive-or-overloaded") {
    raw["emotional-carryover"].push(82);
    raw["pressure-sensitivity"].push(74);
  }
  if (answers.slippageResponse === "lose-consistency-and-drift") {
    raw["weak-rhythm"].push(82);
  }
  if (answers.slippageResponse === "finish-day-more-depleted-than-expected") {
    raw["low-recovery-margin"].push(88);
    raw["low-energy"].push(58);
  }

  if (answers.familiarStatement === "function-but-not-much-margin") {
    raw["low-recovery-margin"].push(72);
  }
  if (answers.familiarStatement === "looks-more-stable-outside-than-inside") {
    raw["low-recovery-margin"].push(66);
    raw["pressure-sensitivity"].push(44);
  }
  if (answers.familiarStatement === "steadiness-changes-too-much-with-pressure") {
    raw["pressure-sensitivity"].push(90);
  }
  if (answers.familiarStatement === "issue-is-inconsistency-under-load") {
    raw["weak-rhythm"].push(74);
    raw["pressure-sensitivity"].push(68);
  }

  if (typeof answers.recoveryThroughDay === "number") {
    raw["low-recovery-margin"].push((100 - answers.recoveryThroughDay) * 0.94);
  }

  if (answers.strongestSlipPoint) {
    if (answers.strongestSlipPoint === "mornings" || answers.strongestSlipPoint === "afternoons") {
      raw["low-energy"].push(slipPointSeverity[answers.strongestSlipPoint] * 0.82);
    }
    if (answers.strongestSlipPoint === "mid-day-focus" || answers.strongestSlipPoint === "after-interruptions") {
      raw["mental-load"].push(slipPointSeverity[answers.strongestSlipPoint] * 0.74);
    }
    if (answers.strongestSlipPoint === "emotional-pressure-moments") {
      raw["emotional-carryover"].push(slipPointSeverity[answers.strongestSlipPoint] * 0.84);
      raw["pressure-sensitivity"].push(58);
    }
    if (answers.strongestSlipPoint === "end-of-day-recovery") {
      raw["low-recovery-margin"].push(slipPointSeverity[answers.strongestSlipPoint] * 0.9);
    }
  }

  if (answers.weakeningFactor === "low-energy") {
    raw["low-energy"].push(92);
  }
  if (answers.weakeningFactor === "too-much-mental-load") {
    raw["mental-load"].push(92);
  }
  if (answers.weakeningFactor === "emotional-carryover") {
    raw["emotional-carryover"].push(92);
  }
  if (answers.weakeningFactor === "weak-structure-or-rhythm") {
    raw["weak-rhythm"].push(92);
  }
  if (answers.weakeningFactor === "not-enough-recovery-margin") {
    raw["low-recovery-margin"].push(94);
  }

  if (typeof answers.clarityImpact === "number") {
    raw["mental-load"].push(answers.clarityImpact * 0.72);
    raw["pressure-sensitivity"].push(answers.clarityImpact * 0.3);
  }
  if (typeof answers.followThroughImpact === "number") {
    raw["mental-load"].push(answers.followThroughImpact * 0.76);
    raw["weak-rhythm"].push(answers.followThroughImpact * 0.28);
  }
  if (typeof answers.emotionalImpact === "number") {
    raw["emotional-carryover"].push(answers.emotionalImpact * 0.8);
  }

  if (answers.finalPattern === "less-resilient-than-it-looks") {
    raw["low-recovery-margin"].push(64);
  }
  if (answers.finalPattern === "steadiness-breaks-too-easily") {
    raw["pressure-sensitivity"].push(84);
  }
  if (answers.finalPattern === "rhythm-too-fragile-under-load") {
    raw["weak-rhythm"].push(86);
  }
  if (answers.finalPattern === "need-more-stability-not-effort") {
    raw["low-recovery-margin"].push(72);
    raw["weak-rhythm"].push(54);
  }

  return instabilityDrivers
    .map((driver) => ({
      ...driver,
      value: clampScore(average(raw[driver.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getSlipPointScores(answers: DailyFunctioningAnswers): SlipPointScore[] {
  const raw: Record<SlipPointValue, number[]> = {
    mornings: [],
    "mid-day-focus": [],
    afternoons: [],
    "emotional-pressure-moments": [],
    "after-interruptions": [],
    "end-of-day-recovery": [],
  };

  if (answers.firstSlip === "energy") {
    raw.mornings.push(58);
    raw.afternoons.push(64);
  }
  if (answers.firstSlip === "focus") {
    raw["mid-day-focus"].push(76);
    raw["after-interruptions"].push(56);
  }
  if (answers.firstSlip === "emotional-steadiness") {
    raw["emotional-pressure-moments"].push(82);
  }
  if (answers.firstSlip === "follow-through") {
    raw["mid-day-focus"].push(66);
    raw["after-interruptions"].push(72);
  }
  if (answers.firstSlip === "recovery-after-pushing-through") {
    raw["end-of-day-recovery"].push(88);
  }

  answers.weakAreas.forEach((area) => {
    if (area === "morning-startup") {
      raw.mornings.push(86);
    }
    if (area === "focus-blocks" || area === "staying-organized" || area === "completing-what-i-start") {
      raw["mid-day-focus"].push(weakAreaSeverity[area] * 0.86);
    }
    if (area === "emotional-steadiness" || area === "patience" || area === "handling-normal-pressure") {
      raw["emotional-pressure-moments"].push(weakAreaSeverity[area] * 0.84);
    }
    if (area === "daily-recovery" || area === "sleep-wind-down") {
      raw["end-of-day-recovery"].push(weakAreaSeverity[area] * 0.9);
    }
    if (area === "consistency") {
      raw.afternoons.push(54);
      raw["after-interruptions"].push(50);
    }
  });

  if (answers.rhythmPattern === "steady-with-one-clear-dip") {
    raw.afternoons.push(48);
  }
  if (answers.rhythmPattern === "uneven-and-reactive") {
    raw["after-interruptions"].push(74);
    raw["emotional-pressure-moments"].push(62);
  }
  if (answers.rhythmPattern === "functional-but-fragile") {
    raw.afternoons.push(68);
  }
  if (answers.rhythmPattern === "small-stress-changes-whole-day") {
    raw["after-interruptions"].push(84);
    raw["emotional-pressure-moments"].push(82);
  }

  if (typeof answers.pressureDisruption === "number") {
    raw["mid-day-focus"].push(answers.pressureDisruption * 0.58);
    raw["after-interruptions"].push(answers.pressureDisruption * 0.72);
  }

  if (answers.slippageResponse === "more-reactive-or-overloaded") {
    raw["emotional-pressure-moments"].push(82);
  }
  if (answers.slippageResponse === "lose-consistency-and-drift") {
    raw.afternoons.push(72);
  }
  if (answers.slippageResponse === "finish-day-more-depleted-than-expected") {
    raw["end-of-day-recovery"].push(90);
  }

  if (typeof answers.recoveryThroughDay === "number") {
    raw["end-of-day-recovery"].push((100 - answers.recoveryThroughDay) * 0.9);
  }

  if (answers.strongestSlipPoint) {
    raw[answers.strongestSlipPoint].push(96);
  }

  if (answers.weakeningFactor === "low-energy") {
    raw.mornings.push(62);
    raw.afternoons.push(74);
  }
  if (answers.weakeningFactor === "too-much-mental-load") {
    raw["mid-day-focus"].push(78);
  }
  if (answers.weakeningFactor === "emotional-carryover") {
    raw["emotional-pressure-moments"].push(86);
  }
  if (answers.weakeningFactor === "weak-structure-or-rhythm") {
    raw.mornings.push(58);
    raw.afternoons.push(66);
  }
  if (answers.weakeningFactor === "not-enough-recovery-margin") {
    raw["end-of-day-recovery"].push(84);
  }

  if (typeof answers.clarityImpact === "number") {
    raw["mid-day-focus"].push(answers.clarityImpact * 0.38);
  }
  if (typeof answers.followThroughImpact === "number") {
    raw["after-interruptions"].push(answers.followThroughImpact * 0.42);
  }
  if (typeof answers.emotionalImpact === "number") {
    raw["emotional-pressure-moments"].push(answers.emotionalImpact * 0.42);
  }

  return slipPoints
    .map((point) => ({
      ...point,
      value: clampScore(average(raw[point.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getStableTrait(dimensions: Record<DailyStabilityDimensionKey, number>, score: number) {
  if (score <= 34) {
    return stableTraits.find((item) => item.key === "baseline-functioning-base") ?? stableTraits[0];
  }

  const highest = Object.entries(dimensions).sort((left, right) => right[1] - left[1])[0]?.[0] as
    | DailyStabilityDimensionKey
    | undefined;

  if (highest === "energyStability") {
    return stableTraits.find((item) => item.key === "usable-energy-windows") ?? stableTraits[0];
  }
  if (highest === "cognitiveFollowThrough") {
    return stableTraits.find((item) => item.key === "follow-through-when-buffered") ?? stableTraits[0];
  }
  if (highest === "emotionalSteadiness") {
    return stableTraits.find((item) => item.key === "emotional-composure-pockets") ?? stableTraits[0];
  }
  if (highest === "recoveryMargin") {
    return stableTraits.find((item) => item.key === "recovery-responsiveness") ?? stableTraits[0];
  }

  return stableTraits[0];
}

function getResetDirection(
  primaryDriver: InstabilityDriverScore,
  strongestSlipPoint: SlipPointScore,
  dimensions: Record<DailyStabilityDimensionKey, number>,
) {
  if (strongestSlipPoint.key === "mornings") {
    return resetDirections.find((item) => item.key === "protect-morning-launch") ?? resetDirections[0];
  }

  if (primaryDriver.key === "mental-load") {
    return resetDirections.find((item) => item.key === "reduce-cognitive-friction") ?? resetDirections[0];
  }

  if (primaryDriver.key === "emotional-carryover") {
    return resetDirections.find((item) => item.key === "contain-emotional-carryover") ?? resetDirections[0];
  }

  if (primaryDriver.key === "weak-rhythm") {
    return resetDirections.find((item) => item.key === "stabilize-day-rhythm") ?? resetDirections[0];
  }

  if (primaryDriver.key === "low-recovery-margin" || dimensions.recoveryMargin <= 46) {
    return resetDirections.find((item) => item.key === "rebuild-recovery-margin") ?? resetDirections[0];
  }

  return resetDirections.find((item) => item.key === "catch-slip-point-earlier") ?? resetDirections[0];
}

export function getInitialDailyFunctioningAnswers(): DailyFunctioningAnswers {
  return {
    weakAreas: [],
    rankingOrder: dailyFunctioningRankingItems.map((item) => item.key),
    rankingConfirmed: false,
    sequenceOrder: dailyFunctioningSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isDailyFunctioningStepComplete(
  step: DailyFunctioningStep,
  answers: DailyFunctioningAnswers,
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

  if (step.kind === "sequence-order") {
    return answers.sequenceOrder.length === step.items.length && answers.sequenceConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateDailyFunctioningResult(
  answers: DailyFunctioningAnswers,
): DailyFunctioningResult {
  const overallSteadiness = getInverseStabilityScore(answers.overallSteadiness);
  const firstSlip = answers.firstSlip ? firstSlipSeverity[answers.firstSlip] : undefined;
  const weakAreas =
    answers.weakAreas.length > 0
      ? clampScore(
          average(answers.weakAreas.map((area) => weakAreaSeverity[area])) * 0.78 +
            (answers.weakAreas.length / 4) * 16,
        )
      : undefined;
  const rhythmPattern = answers.rhythmPattern ? rhythmPatternSeverity[answers.rhythmPattern] : undefined;
  const energyConsistency = answers.energyConsistency
    ? energyConsistencySeverity[answers.energyConsistency]
    : undefined;
  const pressureDisruption =
    typeof answers.pressureDisruption === "number" ? clampScore(answers.pressureDisruption) : undefined;
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const slippageResponse = answers.slippageResponse
    ? slippageResponseSeverity[answers.slippageResponse]
    : undefined;
  const impacts =
    typeof answers.clarityImpact === "number" &&
    typeof answers.followThroughImpact === "number" &&
    typeof answers.emotionalImpact === "number"
      ? clampScore((answers.clarityImpact + answers.followThroughImpact + answers.emotionalImpact) / 3)
      : undefined;
  const familiarStatement = answers.familiarStatement
    ? familiarStatementSeverity[answers.familiarStatement]
    : undefined;
  const recoveryThroughDay = getInverseStabilityScore(answers.recoveryThroughDay);
  const strongestSlipPoint = answers.strongestSlipPoint
    ? slipPointSeverity[answers.strongestSlipPoint]
    : undefined;
  const weakeningFactor = answers.weakeningFactor
    ? weakeningFactorSeverity[answers.weakeningFactor]
    : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const weightedEntries = [
    { value: overallSteadiness, weight: scoringWeights.overallSteadiness },
    { value: firstSlip, weight: scoringWeights.firstSlip },
    { value: weakAreas, weight: scoringWeights.weakAreas },
    { value: rhythmPattern, weight: scoringWeights.rhythmPattern },
    { value: energyConsistency, weight: scoringWeights.energyConsistency },
    { value: pressureDisruption, weight: scoringWeights.pressureDisruption },
    { value: rankingScore, weight: scoringWeights.rankingOrder },
    { value: slippageResponse, weight: scoringWeights.slippageResponse },
    { value: impacts, weight: scoringWeights.impacts },
    { value: familiarStatement, weight: scoringWeights.familiarStatement },
    { value: recoveryThroughDay, weight: scoringWeights.recoveryThroughDay },
    { value: strongestSlipPoint, weight: scoringWeights.strongestSlipPoint },
    { value: weakeningFactor, weight: scoringWeights.weakeningFactor },
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

  const energyStability = clampScore(
    100 -
      weightedAverage([
        { value: overallSteadiness, weight: 0.18 },
        { value: energyConsistency, weight: 0.24 },
        { value: firstSlip === undefined ? undefined : answers.firstSlip === "energy" ? 92 : 36, weight: 0.12 },
        { value: weakAreas, weight: 0.12 },
        { value: recoveryThroughDay, weight: 0.18 },
        { value: strongestSlipPoint, weight: 0.16 },
      ]) *
        0.88,
  );

  const cognitiveFollowThrough = clampScore(
    100 -
      weightedAverage([
        { value: pressureDisruption, weight: 0.22 },
        { value: firstSlip === undefined ? undefined : ["focus", "follow-through"].includes(answers.firstSlip ?? "") ? 88 : 32, weight: 0.12 },
        { value: rankingScore, weight: 0.12 },
        { value: answers.clarityImpact, weight: 0.16 },
        { value: answers.followThroughImpact, weight: 0.2 },
        { value: familiarStatement, weight: 0.1 },
        { value: strongestSlipPoint, weight: 0.08 },
      ]) *
        0.9,
  );

  const emotionalSteadiness = clampScore(
    100 -
      weightedAverage([
        { value: firstSlip === undefined ? undefined : answers.firstSlip === "emotional-steadiness" ? 92 : 34, weight: 0.14 },
        { value: weakAreas, weight: 0.12 },
        { value: slippageResponse, weight: 0.16 },
        { value: answers.emotionalImpact, weight: 0.26 },
        { value: weakeningFactor, weight: 0.14 },
        { value: strongestSlipPoint, weight: 0.18 },
      ]) *
        0.88,
  );

  const recoveryMargin = clampScore(
    100 -
      weightedAverage([
        { value: recoveryThroughDay, weight: 0.28 },
        { value: firstSlip === undefined ? undefined : answers.firstSlip === "recovery-after-pushing-through" ? 92 : 38, weight: 0.1 },
        { value: rankingScore, weight: 0.1 },
        { value: slippageResponse, weight: 0.16 },
        { value: weakeningFactor, weight: 0.14 },
        { value: strongestSlipPoint, weight: 0.08 },
        { value: finalPattern, weight: 0.14 },
      ]) *
        0.9,
  );

  const dimensions: Record<DailyStabilityDimensionKey, number> = {
    energyStability,
    cognitiveFollowThrough,
    emotionalSteadiness,
    recoveryMargin,
  };

  const driverScores = getDriverScores(answers);
  const primaryInstabilityDriver = driverScores[0] ?? {
    ...instabilityDrivers[0],
    value: 42,
  };

  const slipPointScores = getSlipPointScores(answers);
  const strongestSlipPointObject = slipPointScores[0] ?? {
    ...slipPoints[0],
    value: 38,
  };
  const strongestSlipPointMeta =
    slipPoints.find((item) => item.key === strongestSlipPointObject.key) ?? slipPoints[0];

  const strongestRemainingStableTrait = getStableTrait(dimensions, score);
  const mostUsefulDailyResetDirection = getResetDirection(
    primaryInstabilityDriver,
    strongestSlipPointObject,
    dimensions,
  );

  const costMetrics: CostMetric[] = [
    {
      ...costMetricTemplates[0],
      value: answers.clarityImpact ?? clampScore(100 - cognitiveFollowThrough + 12),
    },
    {
      ...costMetricTemplates[1],
      value: answers.followThroughImpact ?? clampScore(100 - cognitiveFollowThrough + 8),
    },
    {
      ...costMetricTemplates[2],
      value: answers.emotionalImpact ?? clampScore(100 - emotionalSteadiness + 10),
    },
    {
      ...costMetricTemplates[3],
      value: clampScore(100 - recoveryMargin + (strongestSlipPointObject.key === "end-of-day-recovery" ? 12 : 0)),
    },
  ].sort((left, right) => right.value - left.value);

  const overallSteadinessLevel =
    typeof answers.overallSteadiness === "number" ? clampScore(answers.overallSteadiness) : clampScore(100 - score);
  const rhythmConsistency = clampScore(
    average([
      overallSteadinessLevel,
      energyStability,
      cognitiveFollowThrough,
      clampScore(100 - strongestSlipPointObject.value * 0.72),
    ]),
  );
  const energyLevel = energyStability;
  const cognitiveLevel = clampScore(average([cognitiveFollowThrough, 100 - (answers.clarityImpact ?? 42)]));
  const emotionalLevel = emotionalSteadiness;
  const recoveryLevel = recoveryMargin;

  const previewMetrics: PreviewMetric[] = [
    { label: "Overall steadiness", value: overallSteadinessLevel, accent: "#67E8F9" },
    { label: "Energy consistency", value: energyLevel, accent: "#93C5FD" },
    { label: "Mental clarity", value: cognitiveLevel, accent: "#FCD34D" },
    { label: "Follow-through reliability", value: cognitiveFollowThrough, accent: "#C4B5FD" },
    { label: "Emotional stability", value: emotionalLevel, accent: "#FCA5A5" },
    { label: "Recovery through day", value: recoveryLevel, accent: "#6EE7B7" },
  ];

  const dashboardMetrics: DashboardMetric[] = [
    {
      label: "Overall steadiness",
      value: overallSteadinessLevel,
      accent: "#67E8F9",
      description: "How stable the day feels across its full operating span.",
    },
    {
      label: "Rhythm consistency",
      value: rhythmConsistency,
      accent: "#93C5FD",
      description: "How reliably the day keeps shape instead of becoming reactive.",
    },
    {
      label: "Slip-point strength",
      value: clampScore(100 - strongestSlipPointObject.value),
      accent: "#FCD34D",
      description: "How much buffer remains at the point where the day tends to narrow first.",
    },
    {
      label: "Recovery margin",
      value: recoveryLevel,
      accent: "#6EE7B7",
      description: "How much reset capacity remains once effort and pressure have landed.",
    },
  ];

  const stabilityLabel =
    "Your pattern suggests that daily functioning is being affected less by one dramatic issue and more by how quickly steadiness drops once energy, clarity, or recovery margin gets stressed.";
  const interpretation = band.interpretation;
  const standout = `${band.standoutLead} The primary instability driver currently looks like ${primaryInstabilityDriver.label.toLowerCase()}, while the strongest remaining stable trait appears to be ${strongestRemainingStableTrait.label.toLowerCase()}.`;
  const slipInsight = `${band.slipLead} The daily system seems to lose steadiness first around ${strongestSlipPointMeta.label.toLowerCase()}, and the most useful reset direction is ${mostUsefulDailyResetDirection.label.toLowerCase()}.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryInstabilityDriver,
    strongestSlipPoint: strongestSlipPointMeta,
    strongestRemainingStableTrait,
    mostUsefulDailyResetDirection,
    driverScores,
    slipPointScores,
    costMetrics,
    previewMetrics,
    dashboardMetrics,
    stabilityLabel,
    interpretation,
    standout,
    slipInsight,
    overallSteadinessLevel,
    rhythmConsistency,
    energyLevel,
    cognitiveLevel,
    emotionalLevel,
    recoveryLevel,
  };
}

export const heroPreviewResult = calculateDailyFunctioningResult({
  overallSteadiness: 46,
  firstSlip: "focus",
  weakAreas: ["focus-blocks", "consistency", "daily-recovery", "handling-normal-pressure"],
  rhythmPattern: "functional-but-fragile",
  energyConsistency: "mixed",
  pressureDisruption: 68,
  rankingOrder: [
    "small-stress-changes-whole-day",
    "function-with-hidden-cost",
    "less-steady-as-day-goes-on",
    "start-but-not-sustain",
    "recovery-after-pushing-too-weak",
  ],
  rankingConfirmed: true,
  slippageResponse: "keep-going-quality-drops",
  clarityImpact: 66,
  followThroughImpact: 72,
  emotionalImpact: 54,
  familiarStatement: "function-but-not-much-margin",
  recoveryThroughDay: 38,
  strongestSlipPoint: "after-interruptions",
  weakeningFactor: "too-much-mental-load",
  sequenceOrder: [
    "pressure-or-demand-rises",
    "one-part-starts-slipping",
    "steadiness-drops",
    "follow-through-or-regulation-weaker",
    "recovery-after-day-harder",
  ],
  sequenceConfirmed: true,
  finalPattern: "less-resilient-than-it-looks",
});
