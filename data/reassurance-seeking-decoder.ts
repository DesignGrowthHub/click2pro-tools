import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type InitialResponseValue =
  | "tolerate-and-wait"
  | "mentally-check"
  | "want-reassurance-quickly"
  | "look-for-signs"
  | "feel-uneasy-until-i-know-more";

export type ReassuranceContextValue =
  | "relationships"
  | "health"
  | "mistakes"
  | "social-perception"
  | "decisions"
  | "safety"
  | "work-performance"
  | "future-outcomes"
  | "messages-communication"
  | "whether-someone-is-upset";

export type LoopPatternValue =
  | "uncertainty-rises-i-stay-steady"
  | "uncertainty-rises-i-check-briefly-i-settle"
  | "uncertainty-rises-i-seek-reassurance-i-calm-briefly"
  | "uncertainty-rises-reassurance-helps-doubt-returns"
  | "uncertainty-rises-i-keep-checking-relief-does-not-last";

export type CheckingFrequencyValue =
  | "rarely"
  | "sometimes"
  | "often"
  | "very-often"
  | "repeatedly";

export type ReassuranceFormKey =
  | "asking-someone-directly"
  | "rereading-messages-or-interactions"
  | "researching-online"
  | "checking-for-signs"
  | "mentally-replaying"
  | "asking-in-a-softened-indirect-way";

export type ReliefDurationValue =
  | "a-long-time"
  | "a-few-hours"
  | "a-short-while"
  | "barely-at-all"
  | "returns-quickly";

export type ReturnResponseValue =
  | "let-it-settle-on-its-own"
  | "seek-more-certainty"
  | "check-again-in-a-different-way"
  | "replay-and-analyze"
  | "feel-frustrated-still-not-settled";

export type LoopDriverValue =
  | "uncertainty-feels-intolerable"
  | "dont-trust-relief-to-last"
  | "need-stronger-certainty-than-realistic"
  | "dependent-on-external-calming"
  | "doubt-returns-before-reassurance-lands";

export type AwarenessValue =
  | "very-aware"
  | "mostly-aware"
  | "mixed"
  | "not-very-aware"
  | "barely-aware";

export type ContextZoneValue =
  | "relationships"
  | "health-body"
  | "work-performance"
  | "social-perception"
  | "decisions-future"
  | "safety-control";

export type SequenceKey =
  | "uncertainty-rises"
  | "emotional-tension-builds"
  | "seek-reassurance-check"
  | "temporary-relief"
  | "doubt-returns";

export type FinalPatternValue =
  | "seek-reassurance-sometimes-not-running-process"
  | "reassurance-helps-only-briefly"
  | "uncertainty-pulls-me-toward-checking"
  | "cycle-repeats-even-when-i-understand-it"
  | "return-of-doubt-is-hardest-part";

export type ReassuranceDimensionKey =
  | "uncertaintyIntolerance"
  | "reassurancePull"
  | "reliefFragility"
  | "relapseSpeed";

export type ReassuranceBandKey =
  | "low-reinforcement-pattern"
  | "mild-reassurance-pull"
  | "recurring-reassurance-loop"
  | "high-uncertainty-relief-cycle"
  | "rapid-relapse-high-reinforcement-pattern";

export type ReassuranceChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type ReassuranceAnswers = {
  initialResponse?: InitialResponseValue;
  uncertaintyToleranceDifficulty?: number;
  reassuranceContexts: ReassuranceContextValue[];
  loopPattern?: LoopPatternValue;
  checkingFrequency?: CheckingFrequencyValue;
  reassuranceFormOrder: ReassuranceFormKey[];
  reassuranceFormConfirmed: boolean;
  reliefDuration?: ReliefDurationValue;
  returnResponse?: ReturnResponseValue;
  reliefStrength?: number;
  loopDriver?: LoopDriverValue;
  focusDisruption?: number;
  emotionalTension?: number;
  relationshipWorkStrain?: number;
  temporaryReliefAwareness?: AwarenessValue;
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
  field: "initialResponse" | "returnResponse" | "loopDriver" | "finalPattern";
  options: ReassuranceChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "checkingFrequency" | "reliefDuration" | "temporaryReliefAwareness";
  options: ReassuranceChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "uncertaintyToleranceDifficulty" | "reliefStrength";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "reassuranceContexts";
  limit: number;
  options: ReassuranceChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: ReassuranceFormKey;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "focusDisruption" | "emotionalTension" | "relationshipWorkStrain";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "loopPattern" | "strongestZone";
  options: ReassuranceChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type ReassuranceStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type ReassuranceDimension = {
  key: ReassuranceDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type ReassuranceBand = {
  key: ReassuranceBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  reliefLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type ReassuranceContext = {
  key: ContextZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type LoopDriver = {
  key: LoopDriverValue;
  label: string;
  description: string;
  accent: string;
};

export type ResetDirection = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type SpilloverArea = {
  key: "focus-disruption" | "emotional-tension" | "relationship-work-strain";
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type ReassuranceContextScore = ReassuranceContext & {
  value: number;
};

export type PreviewMetric = {
  label: string;
  value: number;
  accent: string;
};

export type RelatedReassuranceTool = {
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

export type ReassuranceResult = {
  score: number;
  completionRatio: number;
  band: ReassuranceBand;
  dimensions: Record<ReassuranceDimensionKey, number>;
  primaryReassuranceContext: ReassuranceContext;
  dominantLoopDriver: LoopDriver;
  strongestSpilloverArea: SpilloverArea;
  mostUsefulResetDirection: ResetDirection;
  contextScores: ReassuranceContextScore[];
  spilloverAreas: SpilloverArea[];
  previewMetrics: PreviewMetric[];
  loopNodes: Array<{ label: string; value: number; accent: string }>;
  reassuranceLabel: string;
  interpretation: string;
  standout: string;
  reliefInsight: string;
  uncertaintyIntensity: number;
  reassurancePullLevel: number;
  reliefDurationLevel: number;
  relapseSpeedLevel: number;
  loopReinforcement: number;
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
  key: ReassuranceDimensionKey;
  paragraphs: string[];
};

export const reassuranceSeekingMetadata = {
  eyebrow: "UNCERTAINTY CYCLE TOOL",
  title: "Reassurance Seeking Decoder",
  description:
    "See how uncertainty turns into checking, reassurance, short relief, and the return of doubt. This tool maps the loop so you can understand why reassurance keeps fading so fast.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const reassuranceDimensions: ReassuranceDimension[] = [
  {
    key: "uncertaintyIntolerance",
    label: "Uncertainty Intolerance",
    description: "How hard it feels to let ambiguity exist without immediately trying to reduce it.",
    icon: "signal",
    accent: "#93C5FD",
  },
  {
    key: "reassurancePull",
    label: "Reassurance Pull",
    description: "How strongly the system gets pulled toward checking, asking, rereading, or seeking confirmation once doubt starts.",
    icon: "pattern",
    accent: "#67E8F9",
  },
  {
    key: "reliefFragility",
    label: "Relief Fragility",
    description: "How brief, shallow, or unstable the calming effect tends to be after reassurance arrives.",
    icon: "trend",
    accent: "#FCD34D",
  },
  {
    key: "relapseSpeed",
    label: "Relapse Speed",
    description: "How quickly doubt, tension, or the urge to check returns after temporary settling.",
    icon: "graph",
    accent: "#FB7185",
  },
];

export const reassuranceBands: ReassuranceBand[] = [
  {
    key: "low-reinforcement-pattern",
    min: 0,
    max: 24,
    title: "Low Reinforcement Pattern",
    descriptor: "Uncertainty may still be uncomfortable, but it is not strongly training a repeated reassurance loop.",
    summary:
      "The cycle does not appear heavily reinforced. Reassurance may happen sometimes, but it is not driving the whole uncertainty process.",
    interpretation:
      "This usually means uncertainty still has room to settle on its own. Reassurance may help occasionally, but it is not the main mechanism keeping the nervous system dependent on repeated calming.",
    standoutLead: "The strongest signal here is that the loop is not heavily self-sustaining.",
    reliefLead: "Relief is more likely to hold because the system is not demanding repeated proof.",
    gradientFrom: "#67E8F9",
    gradientTo: "#6EE7B7",
    glow: "rgba(103, 232, 249, 0.18)",
  },
  {
    key: "mild-reassurance-pull",
    min: 25,
    max: 44,
    title: "Mild Reassurance Pull",
    descriptor: "There is a noticeable pull toward certainty, but the cycle is not dominating every uncertainty moment.",
    summary:
      "Reassurance seems to function as a short-term stabilizer in specific contexts. The pull is real, but not yet strongly entrenched across the whole pattern.",
    interpretation:
      "This often means the system has learned that checking helps enough to repeat, but not enough to become the only way uncertainty is managed. The opportunity here is to interrupt the loop before it gets more automatic.",
    standoutLead: "The loop is present, but not fully leading.",
    reliefLead: "Relief likely works just enough to keep the habit appealing.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.18)",
  },
  {
    key: "recurring-reassurance-loop",
    min: 45,
    max: 64,
    title: "Recurring Reassurance Loop",
    descriptor: "Uncertainty is regularly turning into checking or reassurance because the system does not trust doubt to settle on its own.",
    summary:
      "This pattern suggests a recurring loop: uncertainty rises, reassurance is sought, relief appears, then the doubt comes back strongly enough to restart the process.",
    interpretation:
      "The important insight here is that the issue is not only the doubt. It is the whole relief structure around it. Reassurance works just enough to keep being used, but not enough to truly settle the uncertainty.",
    standoutLead: "The loop itself is now part of the problem, not only the original uncertainty.",
    reliefLead: "Relief is likely temporary because the reassurance is lowering tension without changing the need for certainty.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 211, 77, 0.16)",
  },
  {
    key: "high-uncertainty-relief-cycle",
    min: 65,
    max: 84,
    title: "High Uncertainty-Relief Cycle",
    descriptor: "The reassurance loop is carrying real force and likely affecting focus, tension, or important relationships and decisions.",
    summary:
      "This result usually means uncertainty is becoming hard to hold without action. Reassurance or checking is playing a central role in how the system tries to regulate discomfort.",
    interpretation:
      "The cycle likely feels exhausting because it produces real short-term relief while also keeping the need alive. The goal here is not to moralize the behavior. It is to weaken the reinforcement structure underneath it.",
    standoutLead: "The uncertainty-relief loop has become meaningfully self-reinforcing.",
    reliefLead: "Relief is probably real, but too fragile to create lasting internal settlement.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.16)",
  },
  {
    key: "rapid-relapse-high-reinforcement-pattern",
    min: 85,
    max: 100,
    title: "Rapid Relapse / High Reinforcement Pattern",
    descriptor: "Reassurance is likely calming the system briefly, but doubt is returning fast enough to keep the whole cycle highly active.",
    summary:
      "This pattern suggests that the return of doubt is now one of the main difficulties. Even when reassurance lands, the relief does not hold for long enough to truly settle the system.",
    interpretation:
      "When relapse is fast, people often feel confused because the reassurance was technically helpful, but the uncertainty is still back again soon after. That is why this pattern can feel so sticky. The short-term soothing is working, but not deeply enough to prevent repetition.",
    standoutLead: "The hardest part here is likely not asking for reassurance. It is how quickly the uncertainty re-activates afterward.",
    reliefLead: "Relief does not fully hold because the nervous system is still treating the uncertainty as unresolved and still requiring more proof.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.16)",
  },
];

const initialResponseOptions: ReassuranceChoiceOption[] = [
  { value: "tolerate-and-wait", marker: "A", label: "I tolerate it and wait", description: "I usually let the uncertainty exist without immediately trying to solve it." },
  { value: "mentally-check", marker: "B", label: "I start mentally checking", description: "My mind begins scanning for proof, review, or contradictions." },
  { value: "want-reassurance-quickly", marker: "C", label: "I want reassurance quickly", description: "The urge to ask, confirm, or be told comes on fast." },
  { value: "look-for-signs", marker: "D", label: "I look for signs or proof", description: "I start watching behavior, details, or cues to feel more certain." },
  { value: "feel-uneasy-until-i-know-more", marker: "E", label: "I feel uneasy until I know more", description: "Uncertainty feels active in the body and hard to leave alone." },
];

const reassuranceContextOptions: ReassuranceChoiceOption[] = [
  { value: "relationships", label: "Relationships" },
  { value: "health", label: "Health" },
  { value: "mistakes", label: "Mistakes" },
  { value: "social-perception", label: "Social perception" },
  { value: "decisions", label: "Decisions" },
  { value: "safety", label: "Safety" },
  { value: "work-performance", label: "Work performance" },
  { value: "future-outcomes", label: "Future outcomes" },
  { value: "messages-communication", label: "Messages / communication" },
  { value: "whether-someone-is-upset", label: "Whether someone is upset" },
];

const loopPatternOptions: ReassuranceChoiceOption[] = [
  { value: "uncertainty-rises-i-stay-steady", marker: "A", label: "Uncertainty rises -> I stay steady", description: "The discomfort appears, but the system does not need much external calming." },
  { value: "uncertainty-rises-i-check-briefly-i-settle", marker: "B", label: "Uncertainty rises -> I check briefly -> I settle", description: "There may be a little checking, but it usually does not keep going." },
  { value: "uncertainty-rises-i-seek-reassurance-i-calm-briefly", marker: "C", label: "Uncertainty rises -> I seek reassurance -> I calm briefly", description: "Reassurance helps, but mainly in the short term." },
  { value: "uncertainty-rises-reassurance-helps-doubt-returns", marker: "D", label: "Uncertainty rises -> reassurance helps -> doubt returns", description: "Relief comes, then uncertainty comes back strongly enough to reopen the loop." },
  { value: "uncertainty-rises-i-keep-checking-relief-does-not-last", marker: "E", label: "Uncertainty rises -> I keep checking because the relief does not last", description: "The system keeps reaching again because the settling is fragile." },
];

const checkingFrequencyOptions: ReassuranceChoiceOption[] = [
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
  { value: "repeatedly", label: "Repeatedly" },
];

export const reassuranceFormItems: Array<{ key: ReassuranceFormKey; label: string }> = [
  { key: "asking-someone-directly", label: "asking someone directly" },
  { key: "rereading-messages-or-interactions", label: "rereading messages or interactions" },
  { key: "researching-online", label: "researching online" },
  { key: "checking-for-signs", label: "checking for signs" },
  { key: "mentally-replaying", label: "mentally replaying" },
  { key: "asking-in-a-softened-indirect-way", label: "asking in a softened indirect way" },
];

const reliefDurationOptions: ReassuranceChoiceOption[] = [
  { value: "a-long-time", marker: "A", label: "A long time" },
  { value: "a-few-hours", marker: "B", label: "A few hours" },
  { value: "a-short-while", marker: "C", label: "A short while" },
  { value: "barely-at-all", marker: "D", label: "Barely at all" },
  { value: "returns-quickly", marker: "E", label: "It often returns quickly" },
];

const returnResponseOptions: ReassuranceChoiceOption[] = [
  { value: "let-it-settle-on-its-own", marker: "A", label: "I try to let it settle on its own", description: "I attempt not to immediately restart the loop." },
  { value: "seek-more-certainty", marker: "B", label: "I seek more certainty", description: "I feel pulled toward stronger or extra confirmation." },
  { value: "check-again-in-a-different-way", marker: "C", label: "I check again in a different way", description: "The form changes, but the certainty-seeking continues." },
  { value: "replay-and-analyze", marker: "D", label: "I replay and analyze", description: "The mind keeps working the uncertainty even without new information." },
  { value: "feel-frustrated-still-not-settled", marker: "E", label: "I feel frustrated that I still do not feel settled", description: "The hardest part becomes the fact that the reassurance did not truly hold." },
];

const loopDriverOptions: ReassuranceChoiceOption[] = [
  { value: "uncertainty-feels-intolerable", marker: "A", label: "Uncertainty feels intolerable" },
  { value: "dont-trust-relief-to-last", marker: "B", label: "I do not trust relief to last" },
  { value: "need-stronger-certainty-than-realistic", marker: "C", label: "I need stronger certainty than is realistic" },
  { value: "dependent-on-external-calming", marker: "D", label: "I become dependent on external calming" },
  { value: "doubt-returns-before-reassurance-lands", marker: "E", label: "The doubt returns before the reassurance really lands" },
];

const awarenessOptions: ReassuranceChoiceOption[] = [
  { value: "very-aware", label: "Very aware" },
  { value: "mostly-aware", label: "Mostly aware" },
  { value: "mixed", label: "Mixed" },
  { value: "not-very-aware", label: "Not very aware" },
  { value: "barely-aware", label: "Barely aware in the moment" },
];

const contextZoneOptions: ReassuranceChoiceOption[] = [
  { value: "relationships", marker: "R", label: "Relationships", description: "The loop is strongest around closeness, messages, tone, or where you stand." },
  { value: "health-body", marker: "H", label: "Health / body", description: "The loop is strongest around symptoms, sensations, safety, or what something means." },
  { value: "work-performance", marker: "W", label: "Work / performance", description: "The loop is strongest around whether you did enough, did it right, or will be judged." },
  { value: "social-perception", marker: "S", label: "Social perception", description: "The loop is strongest around what people think, noticed, or interpreted about you." },
  { value: "decisions-future", marker: "D", label: "Decisions / future", description: "The loop is strongest around making the right call and preventing future regret." },
  { value: "safety-control", marker: "C", label: "Safety / control", description: "The loop is strongest around keeping danger low and certainty high enough to feel safe." },
];

export const reassuranceSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "uncertainty-rises", label: "uncertainty rises" },
  { key: "emotional-tension-builds", label: "emotional tension builds" },
  { key: "seek-reassurance-check", label: "I seek reassurance/check" },
  { key: "temporary-relief", label: "I feel temporary relief" },
  { key: "doubt-returns", label: "the doubt returns" },
];

const finalPatternOptions: ReassuranceChoiceOption[] = [
  { value: "seek-reassurance-sometimes-not-running-process", marker: "A", label: "I seek reassurance sometimes, but it does not run the process" },
  { value: "reassurance-helps-only-briefly", marker: "B", label: "Reassurance helps, but only briefly" },
  { value: "uncertainty-pulls-me-toward-checking", marker: "C", label: "Uncertainty pulls me toward checking faster than I would like" },
  { value: "cycle-repeats-even-when-i-understand-it", marker: "D", label: "The cycle repeats even when I understand it logically" },
  { value: "return-of-doubt-is-hardest-part", marker: "E", label: "The return of doubt is the hardest part of the pattern" },
];

export const reassuranceSteps: ReassuranceStep[] = [
  {
    id: "initial-response",
    step: 1,
    kind: "scenario-choice",
    field: "initialResponse",
    eyebrow: "Signal 1 · first response",
    question: "When something feels uncertain, what most often happens first?",
    hint: "Choose the earliest shift in the cycle, not the later coping behavior.",
    options: initialResponseOptions,
  },
  {
    id: "uncertainty-tolerance",
    step: 2,
    kind: "slider",
    field: "uncertaintyToleranceDifficulty",
    eyebrow: "Signal 2 · uncertainty tolerance",
    question: "How hard is it to sit with uncertainty without checking, asking, or seeking confirmation?",
    hint: "Rate how difficult it feels before any reassurance action happens.",
    label: "Current difficulty tolerating uncertainty",
    minLabel: "Very easy",
    maxLabel: "Very difficult",
  },
  {
    id: "reassurance-contexts",
    step: 3,
    kind: "multi-select",
    field: "reassuranceContexts",
    eyebrow: "Signal 3 · reassurance contexts",
    question: "Which kinds of uncertainty pull you into reassurance most often?",
    hint: "Choose the contexts where uncertainty feels most likely to trigger checking or asking.",
    limit: 4,
    options: reassuranceContextOptions,
  },
  {
    id: "loop-pattern",
    step: 4,
    kind: "visual-choice",
    field: "loopPattern",
    eyebrow: "Signal 4 · loop pattern",
    question: "Which visual loop feels closest to your current pattern?",
    hint: "Treat this as a cycle read, not a diagnosis of character.",
    options: loopPatternOptions,
    columns: 2,
  },
  {
    id: "checking-frequency",
    step: 5,
    kind: "segmented",
    field: "checkingFrequency",
    eyebrow: "Signal 5 · checking frequency",
    question: "How often do you ask, check, research, reread, or seek confirmation once doubt starts?",
    hint: "Focus on what happens after the uncertainty is active.",
    options: checkingFrequencyOptions,
  },
  {
    id: "reassurance-forms",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Signal 6 · reassurance forms",
    question: "What form does reassurance most often take for you?",
    hint: "Rank the forms that show up most reliably when doubt gets active.",
    items: reassuranceFormItems,
  },
  {
    id: "relief-duration",
    step: 7,
    kind: "segmented",
    field: "reliefDuration",
    eyebrow: "Signal 7 · relief duration",
    question: "How long does reassurance usually help before doubt returns?",
    hint: "Pick how long the settling actually lasts, not how long you wish it would.",
    options: reliefDurationOptions,
  },
  {
    id: "return-response",
    step: 8,
    kind: "scenario-choice",
    field: "returnResponse",
    eyebrow: "Signal 8 · response when doubt returns",
    question: "When the doubt returns, what do you most often do next?",
    hint: "This is the part of the cycle where reinforcement often becomes strongest.",
    options: returnResponseOptions,
  },
  {
    id: "relief-strength",
    step: 9,
    kind: "slider",
    field: "reliefStrength",
    eyebrow: "Signal 9 · felt relief",
    question: "How much relief do you actually feel when you do get reassurance?",
    hint: "Rate the intensity of the drop, not how long it holds.",
    label: "Current reassurance relief strength",
    minLabel: "Very little",
    maxLabel: "A strong noticeable drop in anxiety/doubt",
  },
  {
    id: "loop-driver",
    step: 10,
    kind: "scenario-choice",
    field: "loopDriver",
    eyebrow: "Signal 10 · loop driver",
    question: "What usually keeps the loop going most?",
    hint: "Choose the force that seems to keep pulling the pattern back open.",
    options: loopDriverOptions,
  },
  {
    id: "spillover-impact",
    step: 11,
    kind: "triple-slider",
    eyebrow: "Signal 11 · spillover impact",
    question: "How much do these get affected by the cycle?",
    hint: "Use the sliders to show the practical cost once the loop is active.",
    fields: [
      {
        key: "focusDisruption",
        label: "Focus disruption",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "emotionalTension",
        label: "Emotional tension",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "relationshipWorkStrain",
        label: "Relationship / work strain",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "temporary-relief-awareness",
    step: 12,
    kind: "segmented",
    field: "temporaryReliefAwareness",
    eyebrow: "Signal 12 · in-the-moment awareness",
    question: "How aware are you, in the moment, that reassurance is only helping temporarily?",
    hint: "This is about the moment you seek or receive reassurance, not only hindsight.",
    options: awarenessOptions,
  },
  {
    id: "strongest-zone",
    step: 13,
    kind: "visual-choice",
    field: "strongestZone",
    eyebrow: "Signal 13 · strongest context zone",
    question: "Where does the loop feel strongest?",
    hint: "Choose the context where uncertainty seems most likely to restart the reassurance cycle.",
    options: contextZoneOptions,
    columns: 3,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Signal 14 · sequence order",
    question: "Put these in the order they usually happen for you",
    hint: "Order the cycle as it truly unfolds in your body and behavior, not the logical version of it.",
    items: reassuranceSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final cycle read",
    question: "Which statement feels closest to your current pattern?",
    hint: "This final read helps the tool compare the detailed cycle data with your overall lived experience.",
    options: finalPatternOptions,
  },
];

const initialResponseSeverity: Record<InitialResponseValue, number> = {
  "tolerate-and-wait": 12,
  "mentally-check": 62,
  "want-reassurance-quickly": 80,
  "look-for-signs": 74,
  "feel-uneasy-until-i-know-more": 72,
};

const reassuranceContextSeverity: Record<ReassuranceContextValue, number> = {
  relationships: 78,
  health: 84,
  mistakes: 70,
  "social-perception": 74,
  decisions: 68,
  safety: 82,
  "work-performance": 72,
  "future-outcomes": 66,
  "messages-communication": 76,
  "whether-someone-is-upset": 80,
};

const loopPatternSeverity: Record<LoopPatternValue, number> = {
  "uncertainty-rises-i-stay-steady": 10,
  "uncertainty-rises-i-check-briefly-i-settle": 28,
  "uncertainty-rises-i-seek-reassurance-i-calm-briefly": 58,
  "uncertainty-rises-reassurance-helps-doubt-returns": 78,
  "uncertainty-rises-i-keep-checking-relief-does-not-last": 90,
};

const checkingFrequencySeverity: Record<CheckingFrequencyValue, number> = {
  rarely: 14,
  sometimes: 38,
  often: 64,
  "very-often": 82,
  repeatedly: 94,
};

const reassuranceFormSeverity: Record<ReassuranceFormKey, number> = {
  "asking-someone-directly": 70,
  "rereading-messages-or-interactions": 76,
  "researching-online": 72,
  "checking-for-signs": 82,
  "mentally-replaying": 84,
  "asking-in-a-softened-indirect-way": 68,
};

const rankingWeights = [30, 24, 18, 14, 9, 5];

const reliefDurationSeverity: Record<ReliefDurationValue, number> = {
  "a-long-time": 14,
  "a-few-hours": 36,
  "a-short-while": 64,
  "barely-at-all": 86,
  "returns-quickly": 92,
};

const returnResponseSeverity: Record<ReturnResponseValue, number> = {
  "let-it-settle-on-its-own": 18,
  "seek-more-certainty": 72,
  "check-again-in-a-different-way": 82,
  "replay-and-analyze": 78,
  "feel-frustrated-still-not-settled": 74,
};

const loopDriverSeverity: Record<LoopDriverValue, number> = {
  "uncertainty-feels-intolerable": 80,
  "dont-trust-relief-to-last": 76,
  "need-stronger-certainty-than-realistic": 84,
  "dependent-on-external-calming": 72,
  "doubt-returns-before-reassurance-lands": 86,
};

const awarenessSeverity: Record<AwarenessValue, number> = {
  "very-aware": 22,
  "mostly-aware": 34,
  mixed: 52,
  "not-very-aware": 74,
  "barely-aware": 86,
};

const contextZoneSeverity: Record<ContextZoneValue, number> = {
  relationships: 72,
  "health-body": 84,
  "work-performance": 68,
  "social-perception": 70,
  "decisions-future": 66,
  "safety-control": 82,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "seek-reassurance-sometimes-not-running-process": 26,
  "reassurance-helps-only-briefly": 52,
  "uncertainty-pulls-me-toward-checking": 68,
  "cycle-repeats-even-when-i-understand-it": 80,
  "return-of-doubt-is-hardest-part": 76,
};

const sequenceWeights = [30, 24, 18, 16, 12];
const expectedSequence: SequenceKey[] = [
  "uncertainty-rises",
  "emotional-tension-builds",
  "seek-reassurance-check",
  "temporary-relief",
  "doubt-returns",
];

const scoringWeights = {
  initialResponse: 8,
  uncertaintyTolerance: 10,
  reassuranceContexts: 8,
  loopPattern: 6,
  checkingFrequency: 8,
  reassuranceForms: 8,
  reliefDuration: 10,
  returnResponse: 8,
  reliefStrength: 6,
  loopDriver: 8,
  spillover: 8,
  awareness: 6,
  strongestZone: 4,
  sequenceOrder: 4,
  finalPattern: 4,
} as const;

export const reassuranceContexts: ReassuranceContext[] = [
  {
    key: "relationships",
    label: "Relationships",
    description: "Uncertainty about messages, closeness, tone, or where you stand pulls the loop open.",
    accent: "#93C5FD",
  },
  {
    key: "health-body",
    label: "Health / body",
    description: "The loop gets activated by sensations, symptoms, safety signals, or what something might mean.",
    accent: "#67E8F9",
  },
  {
    key: "work-performance",
    label: "Work / performance",
    description: "The loop is strongest around whether you did enough, got it right, or will be judged.",
    accent: "#C4B5FD",
  },
  {
    key: "social-perception",
    label: "Social perception",
    description: "The loop is strongest around being seen the wrong way or reading other people’s reactions as uncertain.",
    accent: "#FB7185",
  },
  {
    key: "decisions-future",
    label: "Decisions / future",
    description: "The loop is strongest when the mind wants stronger certainty before it can feel settled enough to move.",
    accent: "#FCD34D",
  },
  {
    key: "safety-control",
    label: "Safety / control",
    description: "The loop is strongest when uncertainty feels costly because it threatens control, prevention, or safety.",
    accent: "#6EE7B7",
  },
];

export const loopDrivers: LoopDriver[] = [
  {
    key: "uncertainty-feels-intolerable",
    label: "Uncertainty feels intolerable",
    description: "The system reaches for relief quickly because ambiguity itself feels too expensive to hold.",
    accent: "#93C5FD",
  },
  {
    key: "dont-trust-relief-to-last",
    label: "Relief does not feel trustworthy",
    description: "Even when calm arrives, the system expects it to disappear, so the loop reopens early.",
    accent: "#67E8F9",
  },
  {
    key: "need-stronger-certainty-than-realistic",
    label: "Need for stronger certainty",
    description: "The system wants a level of proof or closure that real life rarely gives, so it keeps checking.",
    accent: "#FCD34D",
  },
  {
    key: "dependent-on-external-calming",
    label: "External calming carries too much weight",
    description: "The system learns to rely on outside reassurance more than internal settling.",
    accent: "#C4B5FD",
  },
  {
    key: "doubt-returns-before-reassurance-lands",
    label: "The doubt returns too fast",
    description: "The return of doubt outruns the calming effect, which makes repetition more likely.",
    accent: "#FB7185",
  },
];

const resetDirections: ResetDirection[] = [
  {
    key: "delay-the-reassurance-response",
    label: "Delay the reassurance response",
    description: "Create a slightly larger gap between uncertainty and checking so the cycle stops firing quite so automatically.",
    accent: "#67E8F9",
  },
  {
    key: "distinguish-information-from-soothing",
    label: "Distinguish information from soothing",
    description: "Learn to notice when the pull is for certainty versus when it is mainly for short-term calming.",
    accent: "#93C5FD",
  },
  {
    key: "reduce-relief-dependence",
    label: "Reduce dependence on quick relief",
    description: "Build more tolerance for unresolved tension so reassurance is not the only route to feeling better.",
    accent: "#6EE7B7",
  },
  {
    key: "shorten-checking-behavior",
    label: "Shorten the checking behavior",
    description: "Reduce the number of reassurance actions and the amount of time spent trying to feel fully settled.",
    accent: "#FCD34D",
  },
  {
    key: "work-on-return-of-doubt",
    label: "Work on the return of doubt",
    description: "Treat the relapse point as the main intervention target, because that is where the loop is getting renewed.",
    accent: "#FB7185",
  },
];

export const relatedReassuranceTools: RelatedReassuranceTool[] = [
  {
    title: "Overthinking Loop Check",
    description: "See whether repetitive thought is broad rumination or part of a reassurance-driven uncertainty cycle.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Relationship Clarity Check",
    description: "Separate true mixed signal from the kind of uncertainty that drives checking and reassurance loops.",
    category: "Relationships & Attachment",
    minutes: "5 min",
    icon: "signal",
    href: buildToolHref({ slug: "relationship-clarity-check", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Attachment Pattern Spotter",
    description: "Read whether reassurance seeking may be interacting with closeness sensitivity, distance, or uncertainty in connection.",
    category: "Relationships & Attachment",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "attachment-pattern-spotter", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Emotional Trigger Decoder",
    description: "Map the activation layer beneath reassurance seeking so the cycle makes more sense in context.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "emotional-trigger-decoder", categorySlug: "emotional-regulation" }),
  },
];

export const reassuranceFaqItems: FaqItem[] = [
  {
    question: "What does a reassurance-seeking score actually mean?",
    answer:
      "It is a directional read of how strongly uncertainty is turning into checking, reassurance, brief relief, and the return of doubt. It is not a diagnosis and not a judgment about neediness or character.",
  },
  {
    question: "Why does reassurance calm me only briefly?",
    answer:
      "Because reassurance often lowers the discomfort without fully changing the uncertainty structure underneath it. The nervous system feels better, but not convinced enough to stop checking for long.",
  },
  {
    question: "What is the difference between checking and getting clarity?",
    answer:
      "Clarity usually reduces uncertainty in a meaningful way. Checking often tries to reduce discomfort repeatedly without really creating lasting internal settlement. The difference is not only the action. It is whether the answer holds.",
  },
  {
    question: "Is reassurance seeking always about relationships?",
    answer:
      "No. It can show up in health, work, safety, decisions, social perception, and many other areas. Relationships are just one common context because emotional uncertainty there can feel especially expensive.",
  },
  {
    question: "Why does doubt come back even after I get the answer?",
    answer:
      "Often because the answer functioned more like temporary soothing than lasting resolution. If the system still treats the uncertainty as live, the doubt can restart even after reassurance seemed helpful.",
  },
  {
    question: "Can reassurance seeking become a habit loop?",
    answer:
      "Yes. If reassurance repeatedly reduces distress, even briefly, the brain learns it as a useful move. The problem is that brief relief can reinforce repetition just as strongly as lasting clarity would.",
  },
  {
    question: "How do I know whether I need information or soothing?",
    answer:
      "A useful clue is what happens after you get the answer. If the need truly was information, the uncertainty often reduces meaningfully. If it was mainly soothing, the calm may be real but short-lived, and the urge to recheck returns.",
  },
  {
    question: "What does it mean if I understand the pattern but still do it?",
    answer:
      "It usually means the loop is being driven by more than logic. Understanding helps, but it does not automatically change how compelling the relief feels in the moment. The body and habit layer still need new practice.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it when the cycle noticeably changes: after a stressful period, after trying a new uncertainty tolerance practice, or when you want to compare whether the relief is holding longer than it used to.",
  },
  {
    question: "What should I do if the return of doubt is the hardest part?",
    answer:
      "Treat the relapse point as the intervention point. Many people focus only on not asking or checking, but the return of doubt is often where the loop is actually getting renewed. Slowing that phase changes the pattern more effectively.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What this result is actually detecting",
    paragraphs: [
      "This decoder is not trying to tell you whether you are anxious, needy, or irrational. It is reading a cycle. Specifically, it is reading what happens after uncertainty becomes active: how quickly the urge to check rises, what form reassurance takes, how strong the relief feels, how long it lasts, and how fast the doubt returns.",
      "That matters because many people focus only on the reassurance behavior itself. But the more revealing part is the whole uncertainty-relief-relapse structure around it. A person may ask very little but still loop mentally for hours. Another person may ask directly and settle well. The important question is not simply whether reassurance happens. It is how the system uses it and what happens next.",
    ],
  },
  {
    title: "Why the score is only the headline",
    paragraphs: [
      "The overall score tells you how reinforced the cycle currently appears, but the more useful information is usually in the sub-patterns: is the strongest issue uncertainty intolerance, the pull toward reassurance, the fragility of the relief, or the speed of the relapse? Those are different mechanisms, and they respond to different kinds of change.",
      "That is why this tool also points to a primary context, a dominant loop driver, the strongest spillover area, and the most useful reset direction. The goal is not to label you. It is to show where the cycle is being taught to keep itself alive.",
    ],
  },
  {
    title: "How to read the result without judging yourself",
    paragraphs: [
      "Reassurance seeking makes sense. It exists because it works, at least briefly. If it did not reduce discomfort at all, nobody would keep doing it. The problem is not that the behavior is foolish. The problem is that the relief can be too temporary to create real internal settling.",
      "A higher result usually means the system has started depending more heavily on external certainty, repeated checking, or mental review because uncertainty feels too costly to leave unresolved. That is not a character flaw. It is a reinforcement pattern.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "uncertaintyIntolerance",
    paragraphs: [
      "Uncertainty Intolerance measures how difficult it feels to leave ambiguity alone. When this is high, the problem is not only the specific content of the doubt. The problem is that uncertainty itself starts to feel emotionally expensive.",
      "A person with higher uncertainty intolerance may know the issue is technically unresolved, but still feel unable to leave it in that state long enough for the system to settle on its own.",
    ],
  },
  {
    key: "reassurancePull",
    paragraphs: [
      "Reassurance Pull measures how strongly the system gets drawn toward asking, checking, rereading, researching, or looking for signs once uncertainty becomes active. This is the approach energy of the loop.",
      "When reassurance pull is high, the behavior can feel urgent even if part of you already knows the answer may not hold for long. That is what makes the cycle feel hard to interrupt in real time.",
    ],
  },
  {
    key: "reliefFragility",
    paragraphs: [
      "Relief Fragility measures how shallow or unstable the settling tends to be after reassurance arrives. This is important because a behavior can feel effective in the moment and still reinforce the cycle if the calm fades too fast.",
      "Fragile relief often leads people to believe they simply did not get enough reassurance, when the real issue is that reassurance is not changing the uncertainty structure deeply enough to last.",
    ],
  },
  {
    key: "relapseSpeed",
    paragraphs: [
      "Relapse Speed measures how quickly doubt, tension, or the urge to seek more certainty returns after the brief settling phase. Fast relapse is often the most frustrating part of the pattern because it makes reassurance feel both helpful and useless at the same time.",
      "When relapse speed is high, the cycle can become sticky even when you understand it logically. The system keeps learning that more certainty is needed because the settling does not stay settled.",
    ],
  },
];

export const strengthenBlocks: ContentBlock[] = [
  {
    title: "Low tolerance for ambiguity",
    body:
      "When uncertainty itself feels expensive, the system starts treating immediate settling as the priority. That makes reassurance more compelling even when you know it may not fully hold.",
  },
  {
    title: "Checking habits that feel harmless",
    body:
      "Rereading, researching, scanning for signs, or asking indirectly can feel small in the moment, but repeated certainty-seeking teaches the system to need those moves more often.",
  },
  {
    title: "Externalizing certainty",
    body:
      "If reassurance mainly comes from outside the self, the nervous system can start trusting external calming more than internal settling. That makes future uncertainty feel harder to hold alone.",
  },
  {
    title: "Brief relief followed by return of doubt",
    body:
      "Temporary relief is one of the strongest reinforcers of the cycle because it proves that reassurance helps while also leaving enough discomfort behind to restart the loop again soon after.",
  },
  {
    title: "Repeated mental review",
    body:
      "Even when no one else is involved, replaying, reanalyzing, or silently reviewing can function as internal reassurance. It keeps the certainty-seeking behavior active inside the mind.",
  },
  {
    title: "Emotionally expensive uncertainty contexts",
    body:
      "The loop grows faster in contexts where uncertainty feels tied to safety, rejection, health, or visible failure. The more expensive the uncertainty feels, the stronger the pull toward reassurance usually becomes.",
  },
];

export const weakenBlocks: ContentBlock[] = [
  {
    title: "Recognize the loop earlier",
    body:
      "The earlier you notice uncertainty turning into a certainty-seeking urge, the easier it is to change the response before the full cycle gets moving.",
  },
  {
    title: "Delay the reassurance response",
    body:
      "Even a short delay creates space between discomfort and the habitual soothing move. That gap is where tolerance starts to grow and the loop loses some automatic power.",
  },
  {
    title: "Separate information from soothing",
    body:
      "One of the most useful questions is whether you are truly seeking missing information or whether you are mainly trying to reduce internal discomfort. That distinction changes what actually helps.",
  },
  {
    title: "Increase uncertainty tolerance gradually",
    body:
      "Tolerance grows in small exposures, not through force. Leaving a little more ambiguity unanswered helps the system learn that settling can happen without full external confirmation.",
  },
  {
    title: "Shorten checking behavior",
    body:
      "If checking does happen, reducing the number of passes or the duration of the behavior can stop it from becoming a larger certainty ritual.",
  },
  {
    title: "Reduce the need for perfect certainty",
    body:
      "Many reassurance loops are powered by an unrealistic certainty threshold. Confidence in life often requires enough clarity, not total proof.",
  },
];

export const reassuranceStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Calm for a moment, then back in it again",
  quote:
    "After sending the message, Ava felt unsure. She reread the thread once, then twice. She asked a friend whether the tone sounded okay, and for ten minutes she felt calmer. Then a new thought appeared: what if they were only saying that to help? She reopened the conversation, searched for clues, and felt embarrassed that she was still stuck on it. From the outside, it looked like a small checking habit. Inside, it felt like a cycle that kept offering relief without ever fully letting her settle.",
  takeaway:
    "This is why reassurance seeking can feel so confusing: the relief is real enough to keep using, but not durable enough to create true internal resolution.",
  toneLabel: "Emotionally real",
  accent: "#67E8F9",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, the first step is usually not to ban reassurance completely. It is to read the cycle more accurately. Notice where the uncertainty starts, how fast the pull shows up, what form reassurance takes, and exactly when the doubt returns. Precision reduces shame and makes the pattern workable.",
  "The most useful interventions are often smaller than people expect. Delaying the reassurance response for a short window, reducing the number of checks, or naming the moment as soothing rather than information-seeking can already weaken the reinforcement structure underneath the habit.",
  "The long-term goal is not to become perfectly comfortable with uncertainty overnight. It is to build a steadier internal capacity to remain unsettled without immediately outsourcing the relief. When that capacity grows, reassurance stops carrying quite so much power over the whole process.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Reassurance-Seeking Reset Workbook",
  description:
    "A structured guide for weakening the uncertainty-relief-relapse cycle and building steadier internal settling without repeated checking.",
  buttonLabel: "View Next Step",
};

export const reassuranceSeekingDecoderMetadata = {
  title: reassuranceSeekingMetadata.title,
  description: reassuranceSeekingMetadata.description,
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
  return reassuranceBands.find((band) => score >= band.min && score <= band.max) ?? reassuranceBands[0];
}

function getRankingScore(order: ReassuranceFormKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = rankingWeights.reduce((sum, value) => sum + value, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const weight = rankingWeights[index] ?? rankingWeights[rankingWeights.length - 1];
    return sum + reassuranceFormSeverity[key] * weight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getSequenceScore(order: SequenceKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = sequenceWeights.reduce((sum, value) => sum + value, 0);
  const weightedMismatch = order.reduce((sum, key, index) => {
    const expectedIndex = expectedSequence.indexOf(key);
    const mismatch = Math.abs(expectedIndex - index);
    const mismatchScore = clampScore((mismatch / (expectedSequence.length - 1)) * 100);
    const weight = sequenceWeights[index] ?? sequenceWeights[sequenceWeights.length - 1];
    return sum + mismatchScore * weight;
  }, 0);

  return clampScore(weightedMismatch / totalWeight);
}

function getContextScores(answers: ReassuranceAnswers): ReassuranceContextScore[] {
  const baseTotals: Record<ContextZoneValue, number[]> = {
    relationships: [],
    "health-body": [],
    "work-performance": [],
    "social-perception": [],
    "decisions-future": [],
    "safety-control": [],
  };

  const push = (key: ContextZoneValue, value: number) => {
    baseTotals[key].push(value);
  };

  answers.reassuranceContexts.forEach((context) => {
    if (context === "relationships" || context === "messages-communication" || context === "whether-someone-is-upset") {
      push("relationships", reassuranceContextSeverity[context]);
    } else if (context === "health" || context === "safety") {
      push(context === "health" ? "health-body" : "safety-control", reassuranceContextSeverity[context]);
    } else if (context === "work-performance") {
      push("work-performance", reassuranceContextSeverity[context]);
    } else if (context === "social-perception") {
      push("social-perception", reassuranceContextSeverity[context]);
    } else if (context === "decisions" || context === "future-outcomes") {
      push("decisions-future", reassuranceContextSeverity[context]);
    } else if (context === "mistakes") {
      push("work-performance", 62);
      push("social-perception", 58);
    }
  });

  if (answers.strongestZone) {
    push(answers.strongestZone, contextZoneSeverity[answers.strongestZone]);
  }

  if (answers.loopDriver === "doubt-returns-before-reassurance-lands") {
    push("relationships", 46);
    push("social-perception", 42);
  }

  return reassuranceContexts
    .map((context) => ({
      ...context,
      value: clampScore(average(baseTotals[context.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getResetDirection(
  driver: LoopDriver,
  dimensions: Record<ReassuranceDimensionKey, number>,
  reliefStrength: number,
) {
  if (dimensions.relapseSpeed >= 72) {
    return resetDirections.find((item) => item.key === "work-on-return-of-doubt") ?? resetDirections[0];
  }

  if (driver.key === "uncertainty-feels-intolerable") {
    return resetDirections.find((item) => item.key === "delay-the-reassurance-response") ?? resetDirections[0];
  }

  if (driver.key === "dependent-on-external-calming") {
    return resetDirections.find((item) => item.key === "reduce-relief-dependence") ?? resetDirections[0];
  }

  if (driver.key === "need-stronger-certainty-than-realistic") {
    return resetDirections.find((item) => item.key === "distinguish-information-from-soothing") ?? resetDirections[0];
  }

  if (reliefStrength >= 68 && dimensions.reliefFragility >= 60) {
    return resetDirections.find((item) => item.key === "shorten-checking-behavior") ?? resetDirections[0];
  }

  return resetDirections.find((item) => item.key === "distinguish-information-from-soothing") ?? resetDirections[0];
}

export function getInitialReassuranceAnswers(): ReassuranceAnswers {
  return {
    reassuranceContexts: [],
    reassuranceFormOrder: reassuranceFormItems.map((item) => item.key),
    reassuranceFormConfirmed: false,
    sequenceOrder: reassuranceSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isReassuranceStepComplete(step: ReassuranceStep, answers: ReassuranceAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  if (step.kind === "drag-rank") {
    return answers.reassuranceFormOrder.length === step.items.length && answers.reassuranceFormConfirmed;
  }

  if (step.kind === "sequence-order") {
    return answers.sequenceOrder.length === step.items.length && answers.sequenceConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculateReassuranceResult(answers: ReassuranceAnswers): ReassuranceResult {
  const initialResponse = answers.initialResponse ? initialResponseSeverity[answers.initialResponse] : undefined;
  const uncertaintyTolerance =
    typeof answers.uncertaintyToleranceDifficulty === "number"
      ? clampScore(answers.uncertaintyToleranceDifficulty)
      : undefined;
  const reassuranceContextsScore =
    answers.reassuranceContexts.length > 0
      ? clampScore(
          average(answers.reassuranceContexts.map((item) => reassuranceContextSeverity[item])) * 0.72 +
            (answers.reassuranceContexts.length / 4) * 22,
        )
      : undefined;
  const loopPattern = answers.loopPattern ? loopPatternSeverity[answers.loopPattern] : undefined;
  const checkingFrequency = answers.checkingFrequency
    ? checkingFrequencySeverity[answers.checkingFrequency]
    : undefined;
  const reassuranceForms = answers.reassuranceFormConfirmed ? getRankingScore(answers.reassuranceFormOrder) : undefined;
  const reliefDuration = answers.reliefDuration ? reliefDurationSeverity[answers.reliefDuration] : undefined;
  const returnResponse = answers.returnResponse ? returnResponseSeverity[answers.returnResponse] : undefined;
  const reliefStrength =
    typeof answers.reliefStrength === "number" ? clampScore(answers.reliefStrength) : undefined;
  const loopDriver = answers.loopDriver ? loopDriverSeverity[answers.loopDriver] : undefined;
  const focusDisruption = typeof answers.focusDisruption === "number" ? clampScore(answers.focusDisruption) : undefined;
  const emotionalTension = typeof answers.emotionalTension === "number" ? clampScore(answers.emotionalTension) : undefined;
  const relationshipWorkStrain =
    typeof answers.relationshipWorkStrain === "number" ? clampScore(answers.relationshipWorkStrain) : undefined;
  const spillover =
    typeof focusDisruption === "number" &&
    typeof emotionalTension === "number" &&
    typeof relationshipWorkStrain === "number"
      ? clampScore((focusDisruption + emotionalTension + relationshipWorkStrain) / 3)
      : undefined;
  const awareness = answers.temporaryReliefAwareness
    ? awarenessSeverity[answers.temporaryReliefAwareness]
    : undefined;
  const strongestZone = answers.strongestZone ? contextZoneSeverity[answers.strongestZone] : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: initialResponse, weight: scoringWeights.initialResponse },
    { value: uncertaintyTolerance, weight: scoringWeights.uncertaintyTolerance },
    { value: reassuranceContextsScore, weight: scoringWeights.reassuranceContexts },
    { value: loopPattern, weight: scoringWeights.loopPattern },
    { value: checkingFrequency, weight: scoringWeights.checkingFrequency },
    { value: reassuranceForms, weight: scoringWeights.reassuranceForms },
    { value: reliefDuration, weight: scoringWeights.reliefDuration },
    { value: returnResponse, weight: scoringWeights.returnResponse },
    { value: reliefStrength, weight: scoringWeights.reliefStrength },
    { value: loopDriver, weight: scoringWeights.loopDriver },
    { value: spillover, weight: scoringWeights.spillover },
    { value: awareness, weight: scoringWeights.awareness },
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

  const dimensions: Record<ReassuranceDimensionKey, number> = {
    uncertaintyIntolerance: weightedAverage([
      { value: uncertaintyTolerance, weight: 0.42 },
      {
        value:
          answers.initialResponse === "feel-uneasy-until-i-know-more"
            ? 82
            : answers.initialResponse === "want-reassurance-quickly"
              ? 76
              : answers.initialResponse === "look-for-signs"
                ? 68
                : undefined,
        weight: 0.18,
      },
      { value: loopDriver, weight: 0.18 },
      { value: answers.reliefDuration === "returns-quickly" ? 74 : answers.reliefDuration === "barely-at-all" ? 66 : undefined, weight: 0.12 },
      { value: strongestZone, weight: 0.1 },
    ]),
    reassurancePull: weightedAverage([
      { value: checkingFrequency, weight: 0.32 },
      { value: reassuranceForms, weight: 0.18 },
      {
        value:
          answers.initialResponse === "want-reassurance-quickly"
            ? 86
            : answers.initialResponse === "mentally-check"
              ? 68
              : answers.initialResponse === "look-for-signs"
                ? 78
                : undefined,
        weight: 0.16,
      },
      { value: returnResponse, weight: 0.16 },
      { value: answers.loopPattern ? loopPatternSeverity[answers.loopPattern] : undefined, weight: 0.18 },
    ]),
    reliefFragility: weightedAverage([
      { value: reliefDuration, weight: 0.46 },
      { value: typeof reliefStrength === "number" ? clampScore(100 - reliefStrength * 0.32) : undefined, weight: 0.12 },
      { value: answers.temporaryReliefAwareness ? awarenessSeverity[answers.temporaryReliefAwareness] : undefined, weight: 0.16 },
      { value: loopDriver, weight: 0.16 },
      { value: finalPattern, weight: 0.1 },
    ]),
    relapseSpeed: weightedAverage([
      {
        value:
          answers.reliefDuration === "returns-quickly"
            ? 92
            : answers.reliefDuration === "barely-at-all"
              ? 86
              : answers.reliefDuration === "a-short-while"
                ? 68
                : undefined,
        weight: 0.34,
      },
      { value: returnResponse, weight: 0.2 },
      { value: finalPattern, weight: 0.16 },
      { value: spillover, weight: 0.14 },
      { value: sequenceOrder, weight: 0.16 },
    ]),
  };

  const contextScores = getContextScores(answers);
  const primaryReassuranceContext = contextScores[0] ?? reassuranceContexts[0];
  const dominantLoopDriver = loopDrivers.find((driver) => driver.key === answers.loopDriver) ?? loopDrivers[0];

  const spilloverAreas = [
    {
      key: "focus-disruption",
      label: "Focus disruption",
      description: "The loop is likely taking up more attentional bandwidth than the original uncertainty warrants.",
      accent: "#93C5FD",
      value: focusDisruption ?? 32,
    },
    {
      key: "emotional-tension",
      label: "Emotional tension",
      description: "The body and mood stay keyed up because the uncertainty never fully settles for long.",
      accent: "#FB7185",
      value: emotionalTension ?? 36,
    },
    {
      key: "relationship-work-strain",
      label: "Relationship / work strain",
      description: "The loop is spilling into interaction quality, responsiveness, or your wider functioning.",
      accent: "#C4B5FD",
      value: relationshipWorkStrain ?? 28,
    },
  ] satisfies SpilloverArea[];

  spilloverAreas.sort((left, right) => right.value - left.value);

  const strongestSpilloverArea = spilloverAreas[0];
  const mostUsefulResetDirection = getResetDirection(dominantLoopDriver, dimensions, reliefStrength ?? 40);

  const previewMetrics: PreviewMetric[] = [
    { label: "Uncertainty intensity", value: dimensions.uncertaintyIntolerance, accent: "#93C5FD" },
    { label: "Reassurance pull", value: dimensions.reassurancePull, accent: "#67E8F9" },
    { label: "Relief fragility", value: dimensions.reliefFragility, accent: "#FCD34D" },
    { label: "Relapse speed", value: dimensions.relapseSpeed, accent: "#FB7185" },
  ];

  const uncertaintyIntensity = dimensions.uncertaintyIntolerance;
  const reassurancePullLevel = dimensions.reassurancePull;
  const reliefDurationLevel = clampScore(100 - dimensions.reliefFragility);
  const relapseSpeedLevel = dimensions.relapseSpeed;
  const loopReinforcement = clampScore(
    weightedAverage([
      { value: dimensions.reassurancePull, weight: 0.34 },
      { value: dimensions.reliefFragility, weight: 0.3 },
      { value: dimensions.relapseSpeed, weight: 0.36 },
    ]),
  );

  const loopNodes = [
    { label: "Uncertainty", value: uncertaintyIntensity, accent: "#93C5FD" },
    { label: "Tension", value: emotionalTension ?? 48, accent: "#FB7185" },
    { label: "Reassurance", value: reassurancePullLevel, accent: "#67E8F9" },
    { label: "Relief", value: reliefStrength ?? 40, accent: "#6EE7B7" },
    { label: "Return of doubt", value: relapseSpeedLevel, accent: "#C4B5FD" },
  ];

  const reassuranceLabel = `Your pattern suggests that reassurance is reducing discomfort in the short term, but not changing the uncertainty structure enough for the nervous system to fully stop rechecking.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The cycle appears strongest around ${primaryReassuranceContext.label.toLowerCase()} and seems to be mainly driven by ${dominantLoopDriver.label.toLowerCase()}.`;
  const reliefInsight = `${band.reliefLead} The main reason the relief may not fully hold is that ${dominantLoopDriver.description.toLowerCase()}`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryReassuranceContext,
    dominantLoopDriver,
    strongestSpilloverArea,
    mostUsefulResetDirection,
    contextScores,
    spilloverAreas,
    previewMetrics,
    loopNodes,
    reassuranceLabel,
    interpretation,
    standout,
    reliefInsight,
    uncertaintyIntensity,
    reassurancePullLevel,
    reliefDurationLevel,
    relapseSpeedLevel,
    loopReinforcement,
  };
}

export const heroPreviewResult = calculateReassuranceResult({
  initialResponse: "feel-uneasy-until-i-know-more",
  uncertaintyToleranceDifficulty: 74,
  reassuranceContexts: ["relationships", "messages-communication", "whether-someone-is-upset", "social-perception"],
  loopPattern: "uncertainty-rises-reassurance-helps-doubt-returns",
  checkingFrequency: "very-often",
  reassuranceFormOrder: [
    "rereading-messages-or-interactions",
    "asking-someone-directly",
    "checking-for-signs",
    "mentally-replaying",
    "asking-in-a-softened-indirect-way",
    "researching-online",
  ],
  reassuranceFormConfirmed: true,
  reliefDuration: "a-short-while",
  returnResponse: "check-again-in-a-different-way",
  reliefStrength: 68,
  loopDriver: "dont-trust-relief-to-last",
  focusDisruption: 66,
  emotionalTension: 78,
  relationshipWorkStrain: 54,
  temporaryReliefAwareness: "mixed",
  strongestZone: "relationships",
  sequenceOrder: [
    "uncertainty-rises",
    "emotional-tension-builds",
    "seek-reassurance-check",
    "temporary-relief",
    "doubt-returns",
  ],
  sequenceConfirmed: true,
  finalPattern: "reassurance-helps-only-briefly",
});
