import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type TensionShiftValue =
  | "more-direct"
  | "more-careful"
  | "go-quieter"
  | "more-reactive"
  | "externally-calm-internally-guarded";

export type PressureSituationValue =
  | "conflict"
  | "disappointment"
  | "urgency"
  | "being-misunderstood"
  | "feeling-criticized"
  | "emotional-intensity"
  | "unclear-expectations"
  | "relational-distance"
  | "work-pressure"
  | "needing-to-say-no";

export type DialoguePatternValue =
  | "clear-and-steady"
  | "careful-but-contained"
  | "indirect-and-softened"
  | "sharp-and-defensive"
  | "withdrawn-and-hard-to-read";

export type RealThingEaseValue =
  | "very-easy"
  | "mostly-easy"
  | "mixed"
  | "difficult"
  | "very-difficult";

export type RankedTruthKey =
  | "soften-too-much"
  | "harder-to-read"
  | "sharper-than-intend"
  | "overexplain"
  | "avoid-central-thing";

export type DifficultConversationResponseValue =
  | "stay-clear-grounded"
  | "more-careful-wording"
  | "withdraw-or-minimize"
  | "push-harder"
  | "stop-feeling-heard";

export type FamiliarStatementValue =
  | "know-what-i-mean-not-cleanly"
  | "less-readable-under-pressure"
  | "too-soft-then-react-later"
  | "sharper-when-unheard"
  | "hard-to-say-central-thing-simply";

export type RepairComfortValue =
  | "very-comfortable"
  | "mostly-comfortable"
  | "mixed"
  | "uncomfortable"
  | "very-uncomfortable";

export type DistortionSourceValue =
  | "fear-of-conflict"
  | "over-softening"
  | "defensiveness"
  | "shutting-down"
  | "too-much-explanation";

export type PressureZoneValue =
  | "partner-intimacy"
  | "family"
  | "friendship"
  | "work"
  | "authority-situations"
  | "difficult-emotional-conversations";

export type SequenceKey =
  | "pressure-enters"
  | "adjust-how-speaking"
  | "clarity-drops-or-sharpness-rises"
  | "other-person-responds"
  | "repair-harder-or-needed";

export type FinalPatternValue =
  | "mostly-steady-few-pressure-shifts"
  | "thoughtful-but-clarity-diluted"
  | "harder-to-read-than-intend"
  | "tone-changes-faster-than-intention"
  | "issue-is-distortion-under-tension";

export type CommunicationDimensionKey =
  | "clarityUnderPressure"
  | "directnessStability"
  | "defensivenessGuarding"
  | "repairCapacity";

export type CommunicationBandKey =
  | "clear-communication-base"
  | "mild-pressure-distortion"
  | "patterned-communication-drift"
  | "high-tension-distortion"
  | "communication-under-pressure-breakdown";

export type DistortionCategoryKey =
  | "over-softening"
  | "defensiveness"
  | "shutdown-guarding"
  | "overexplaining"
  | "indirect-truth-telling";

export type StableTraitKey =
  | "care-for-impact"
  | "directness-available"
  | "steady-external-tone"
  | "repair-willingness"
  | "thoughtful-word-choice";

export type CommunicationAdjustmentKey =
  | "say-central-thing-sooner"
  | "reduce-overexplaining"
  | "notice-defensive-speed"
  | "keep-warmth-and-truth-together"
  | "repair-before-meaning-hardens";

export type ImpactMetricKey =
  | "clarity-loss"
  | "warmth-drop"
  | "repair-friction"
  | "felt-understanding-loss";

export type CommunicationChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type CommunicationStyleAnswers = {
  tensionShift?: TensionShiftValue;
  directnessBaseline?: number;
  pressureSituations: PressureSituationValue[];
  dialoguePattern?: DialoguePatternValue;
  realThingEase?: RealThingEaseValue;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  defensivenessIntensity?: number;
  difficultConversationResponse?: DifficultConversationResponseValue;
  clarityImpact?: number;
  warmthImpact?: number;
  honestyImpact?: number;
  familiarStatement?: FamiliarStatementValue;
  repairComfort?: RepairComfortValue;
  distortionSource?: DistortionSourceValue;
  pressureZone?: PressureZoneValue;
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
    | "tensionShift"
    | "difficultConversationResponse"
    | "familiarStatement"
    | "distortionSource"
    | "finalPattern";
  options: CommunicationChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "realThingEase" | "repairComfort";
  options: CommunicationChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "directnessBaseline" | "defensivenessIntensity";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "pressureSituations";
  limit: number;
  options: CommunicationChoiceOption[];
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
    key: "clarityImpact" | "warmthImpact" | "honestyImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "dialoguePattern" | "pressureZone";
  options: CommunicationChoiceOption[];
  columns?: 2 | 3;
};

export type SequenceOrderStep = BaseStep & {
  kind: "sequence-order";
  items: Array<{
    key: SequenceKey;
    label: string;
  }>;
};

export type CommunicationStyleStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep
  | SequenceOrderStep;

export type CommunicationDimension = {
  key: CommunicationDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type CommunicationBand = {
  key: CommunicationBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  shiftLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type DistortionCategory = {
  key: DistortionCategoryKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type StableTrait = {
  key: StableTraitKey;
  label: string;
  description: string;
};

export type PressureZone = {
  key: PressureZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type CommunicationAdjustment = {
  key: CommunicationAdjustmentKey;
  label: string;
  description: string;
  accent: string;
};

export type ImpactMetric = {
  key: ImpactMetricKey;
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

export type DialogueStage = {
  label: string;
  value: number;
  accent: string;
  kind: "intention" | "pressure" | "distortion" | "response" | "repair";
};

export type DistortionScore = DistortionCategory & {
  value: number;
};

export type RelatedCommunicationTool = {
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

export type CommunicationStyleResult = {
  score: number;
  completionRatio: number;
  band: CommunicationBand;
  dimensions: Record<CommunicationDimensionKey, number>;
  primaryCommunicationDistortion: DistortionScore;
  strongestStableTrait: StableTrait;
  mainPressureZone: PressureZone;
  mostUsefulCommunicationAdjustment: CommunicationAdjustment;
  distortionScores: DistortionScore[];
  impactMetrics: ImpactMetric[];
  previewMetrics: PreviewMetric[];
  dialogueStages: DialogueStage[];
  mirrorLabel: string;
  interpretation: string;
  standout: string;
  shiftInsight: string;
  directnessLevel: number;
  clarityLevel: number;
  warmthLevel: number;
  defensivenessLevel: number;
  repairStrength: number;
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
  key: CommunicationDimensionKey;
  paragraphs: string[];
};

export const communicationStyleMetadata = {
  eyebrow: "CONVERSATION PATTERN TOOL",
  title: "Communication Style Mirror",
  description:
    "See how pressure changes your tone, directness, defensiveness, and repair style. This tool helps you read your communication pattern from the inside out.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const communicationDimensions: CommunicationDimension[] = [
  {
    key: "clarityUnderPressure",
    label: "Clarity Under Pressure",
    description: "How much of the real message still comes through once tension, urgency, or emotion enter the conversation.",
    icon: "signal",
    accent: "#67E8F9",
  },
  {
    key: "directnessStability",
    label: "Directness Stability",
    description: "How well your truth stays connected to your wording instead of becoming diluted, indirect, or over-managed.",
    icon: "trend",
    accent: "#93C5FD",
  },
  {
    key: "defensivenessGuarding",
    label: "Defensiveness / Guarding",
    description: "How quickly the conversation picks up hardness, self-protection, withdrawal, or emotional armoring under pressure.",
    icon: "pattern",
    accent: "#FB7185",
  },
  {
    key: "repairCapacity",
    label: "Repair Capacity",
    description: "How much room remains for reconnection, clarification, and repair after the conversation distorts or lands imperfectly.",
    icon: "graph",
    accent: "#6EE7B7",
  },
];

export const communicationBands: CommunicationBand[] = [
  {
    key: "clear-communication-base",
    min: 0,
    max: 24,
    title: "Clear Communication Base",
    descriptor: "Your style generally holds its shape even when the conversation becomes more charged or important.",
    summary:
      "This usually means pressure changes your communication less than you may fear. You may still soften, guard, or sharpen in specific situations, but clarity, tone, and repair usually remain available enough to keep the real message intact.",
    interpretation:
      "A low score does not mean every conversation is effortless. It means distortion is not strongly running the system. The more useful task here is preserving what already works when the conversation matters.",
    standoutLead: "What stands out most is steadiness.",
    shiftLead: "Communication still moves under pressure, but the shift usually does not hijack the whole interaction.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#67E8F9",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-pressure-distortion",
    min: 25,
    max: 44,
    title: "Mild Pressure Distortion",
    descriptor: "The message is still available, but pressure introduces enough caution, softness, or defensiveness to blur it sometimes.",
    summary:
      "At this level, the issue is rarely a lack of care. It is more often that tension slightly changes the delivery before the central thing is said cleanly. That can create small but meaningful misunderstandings over time.",
    interpretation:
      "This pattern usually benefits from earlier noticing. The shift is present, but it is still workable close to the moment when it starts.",
    standoutLead: "What stands out most is subtle drift.",
    shiftLead: "The conversation often changes shape just enough to soften clarity or increase guarding before the meaning lands fully.",
    gradientFrom: "#93C5FD",
    gradientTo: "#67E8F9",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "patterned-communication-drift",
    min: 45,
    max: 64,
    title: "Patterned Communication Drift",
    descriptor: "Pressure is creating a repeatable shift in clarity, tone, directness, or repair rather than a one-off communication wobble.",
    summary:
      "This usually means you are not imagining the pattern. Conversations under tension tend to follow a familiar route: the wording changes, the message gets less direct, defensiveness or withdrawal increases, and repair becomes harder than it needed to be.",
    interpretation:
      "The good news is that patterned drift is readable. Once the style shift becomes specific, you can work on the exact distortion rather than treating every hard conversation like a global communication problem.",
    standoutLead: "What stands out most is repeatability.",
    shiftLead: "The distortion is happening in a recognizable way, which means the right adjustment can target the pressure point more precisely.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 211, 77, 0.16)",
  },
  {
    key: "high-tension-distortion",
    min: 65,
    max: 84,
    title: "High Tension Distortion",
    descriptor: "Once tension rises, your communication can change quickly enough that the real intention starts losing ground.",
    summary:
      "At this level, the issue is often speed. Pressure changes the tone, softness, sharpness, or readability of the message before you have fully chosen how you want to communicate. That can leave both clarity and connection carrying extra strain.",
    interpretation:
      "This does not mean you are a bad communicator. It means pressure is currently outrunning your usual communication steadiness. The most useful work is often learning to catch the shift one step earlier.",
    standoutLead: "What stands out most is acceleration.",
    shiftLead: "Communication is changing fast enough under tension that the conversation may start reflecting protection more than intention.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.18)",
  },
  {
    key: "communication-under-pressure-breakdown",
    min: 85,
    max: 100,
    title: "Communication Under Pressure Breakdown",
    descriptor: "Pressure is strongly reshaping tone, clarity, directness, and repair once difficult conversations begin to matter.",
    summary:
      "This suggests the conversation is carrying a heavy amount of distortion under pressure. The central issue is usually not lack of care, empathy, or thoughtfulness. It is that the style shift becomes forceful enough to change what the other person can actually receive from you.",
    interpretation:
      "At this level, the goal is not perfect communication. It is rebuilding a steadier path from intention to wording to repair, so the real message stops getting displaced by tension itself.",
    standoutLead: "What stands out most is how much the system is protecting in real time.",
    shiftLead: "The distortion is landing early and strongly enough that repair, understanding, and clarity all need more deliberate support.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(251, 113, 133, 0.2)",
  },
];

const tensionShiftOptions: CommunicationChoiceOption[] = [
  {
    value: "more-direct",
    marker: "A",
    label: "I become more direct",
    description: "Pressure tightens the message and pushes you toward saying it more plainly.",
  },
  {
    value: "more-careful",
    marker: "B",
    label: "I become more careful",
    description: "You start managing wording closely so the message lands without escalating things.",
  },
  {
    value: "go-quieter",
    marker: "C",
    label: "I go quieter",
    description: "Your communication pulls inward and becomes less immediately available.",
  },
  {
    value: "more-reactive",
    marker: "D",
    label: "I become more reactive",
    description: "Pressure changes speed and tone before you have fully chosen your response.",
  },
  {
    value: "externally-calm-internally-guarded",
    marker: "E",
    label: "I stay externally calm but internally guarded",
    description: "The outer tone can stay composed while inner openness narrows.",
  },
];

const pressureSituationOptions: CommunicationChoiceOption[] = [
  { value: "conflict", label: "Conflict" },
  { value: "disappointment", label: "Disappointment" },
  { value: "urgency", label: "Urgency" },
  { value: "being-misunderstood", label: "Being misunderstood" },
  { value: "feeling-criticized", label: "Feeling criticized" },
  { value: "emotional-intensity", label: "Emotional intensity" },
  { value: "unclear-expectations", label: "Unclear expectations" },
  { value: "relational-distance", label: "Relational distance" },
  { value: "work-pressure", label: "Work pressure" },
  { value: "needing-to-say-no", label: "Needing to say no" },
];

const dialoguePatternOptions: CommunicationChoiceOption[] = [
  {
    value: "clear-and-steady",
    marker: "A",
    label: "Clear and steady",
    description: "The message stays readable even as the conversation becomes more loaded.",
  },
  {
    value: "careful-but-contained",
    marker: "B",
    label: "Careful but contained",
    description: "You stay measured, but some of the full message may remain held back.",
  },
  {
    value: "indirect-and-softened",
    marker: "C",
    label: "Indirect and softened",
    description: "Care for impact starts diluting the center of what needs to be said.",
  },
  {
    value: "sharp-and-defensive",
    marker: "D",
    label: "Sharp and defensive",
    description: "Protection enters the tone quickly once you feel challenged or unheard.",
  },
  {
    value: "withdrawn-and-hard-to-read",
    marker: "E",
    label: "Withdrawn and hard to read",
    description: "The message gets harder for other people to locate, even when it is active inside you.",
  },
];

const realThingEaseOptions: CommunicationChoiceOption[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "mostly-easy", label: "Mostly easy" },
  { value: "mixed", label: "Mixed" },
  { value: "difficult", label: "Difficult" },
  { value: "very-difficult", label: "Very difficult" },
];

export const communicationRankingItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "soften-too-much", label: "I soften too much" },
  { key: "harder-to-read", label: "I become harder to read" },
  { key: "sharper-than-intend", label: "I become sharper than I intend" },
  { key: "overexplain", label: "I overexplain" },
  { key: "avoid-central-thing", label: "I avoid saying the central thing directly" },
];

const difficultConversationOptions: CommunicationChoiceOption[] = [
  {
    value: "stay-clear-grounded",
    marker: "A",
    label: "I stay clear and grounded",
    description: "The conversation gets harder, but your message stays anchored.",
  },
  {
    value: "more-careful-wording",
    marker: "B",
    label: "I become more careful with wording",
    description: "You keep connection in mind, but clarity may start narrowing around caution.",
  },
  {
    value: "withdraw-or-minimize",
    marker: "C",
    label: "I withdraw or minimize",
    description: "The conversation becomes less explicit, and some truth stays unspoken.",
  },
  {
    value: "push-harder",
    marker: "D",
    label: "I push harder",
    description: "You increase force in an attempt to be understood or not lose the point.",
  },
  {
    value: "stop-feeling-heard",
    marker: "E",
    label: "I stop feeling accurately heard",
    description: "The conversation starts feeling relationally distorted before the wording fully settles.",
  },
];

const familiarStatementOptions: CommunicationChoiceOption[] = [
  {
    value: "know-what-i-mean-not-cleanly",
    marker: "A",
    label: "I usually know what I mean, but don’t always say it cleanly",
  },
  {
    value: "less-readable-under-pressure",
    marker: "B",
    label: "I become less readable under pressure",
  },
  {
    value: "too-soft-then-react-later",
    marker: "C",
    label: "I stay too soft for too long, then react later",
  },
  {
    value: "sharper-when-unheard",
    marker: "D",
    label: "I become sharper when I feel unheard",
  },
  {
    value: "hard-to-say-central-thing-simply",
    marker: "E",
    label: "I struggle most with saying the central thing simply",
  },
];

const repairComfortOptions: CommunicationChoiceOption[] = [
  { value: "very-comfortable", label: "Very comfortable" },
  { value: "mostly-comfortable", label: "Mostly comfortable" },
  { value: "mixed", label: "Mixed" },
  { value: "uncomfortable", label: "Uncomfortable" },
  { value: "very-uncomfortable", label: "Very uncomfortable" },
];

const distortionSourceOptions: CommunicationChoiceOption[] = [
  {
    value: "fear-of-conflict",
    marker: "A",
    label: "Fear of conflict",
    description: "Pressure to keep the interaction calm starts shaping what you can say directly.",
  },
  {
    value: "over-softening",
    marker: "B",
    label: "Over-softening",
    description: "Care for impact blurs the center of the message before it lands.",
  },
  {
    value: "defensiveness",
    marker: "C",
    label: "Defensiveness",
    description: "Protection enters quickly when you feel challenged, criticized, or misread.",
  },
  {
    value: "shutting-down",
    marker: "D",
    label: "Shutting down",
    description: "Inner closure reduces readability, openness, or responsiveness in the conversation.",
  },
  {
    value: "too-much-explanation",
    marker: "E",
    label: "Too much explanation instead of clear truth",
    description: "The conversation gets longer without the central point getting clearer.",
  },
];

const pressureZoneOptions: CommunicationChoiceOption[] = [
  { value: "partner-intimacy", label: "Partner/intimacy" },
  { value: "family", label: "Family" },
  { value: "friendship", label: "Friendship" },
  { value: "work", label: "Work" },
  { value: "authority-situations", label: "Authority situations" },
  { value: "difficult-emotional-conversations", label: "Difficult emotional conversations" },
];

export const communicationSequenceItems: Array<{ key: SequenceKey; label: string }> = [
  { key: "pressure-enters", label: "Pressure enters the conversation" },
  { key: "adjust-how-speaking", label: "I adjust how I’m speaking" },
  { key: "clarity-drops-or-sharpness-rises", label: "Clarity drops or sharpness rises" },
  { key: "other-person-responds", label: "The other person responds" },
  { key: "repair-harder-or-needed", label: "Repair becomes harder or more necessary" },
];

const finalPatternOptions: CommunicationChoiceOption[] = [
  {
    value: "mostly-steady-few-pressure-shifts",
    marker: "A",
    label: "My communication is mostly steady, with a few pressure shifts",
  },
  {
    value: "thoughtful-but-clarity-diluted",
    marker: "B",
    label: "I stay thoughtful, but clarity sometimes gets diluted",
  },
  {
    value: "harder-to-read-than-intend",
    marker: "C",
    label: "Under pressure, I become harder to read than I mean to",
  },
  {
    value: "tone-changes-faster-than-intention",
    marker: "D",
    label: "Pressure changes my tone faster than my intention",
  },
  {
    value: "issue-is-distortion-under-tension",
    marker: "E",
    label: "My biggest communication issue is not care — it is distortion under tension",
  },
];

export const communicationStyleSteps: CommunicationStyleStep[] = [
  {
    id: "tension-shift",
    step: 1,
    kind: "scenario-choice",
    field: "tensionShift",
    eyebrow: "Step 1",
    question: "When tension enters a conversation, what most often changes first in your communication?",
    hint: "Pick the earliest shift, not the most extreme one.",
    options: tensionShiftOptions,
  },
  {
    id: "directness-baseline",
    step: 2,
    kind: "slider",
    field: "directnessBaseline",
    eyebrow: "Step 2",
    question: "How direct does your communication usually feel when something important needs to be said?",
    hint: "This is your baseline when you are trying to communicate something that matters.",
    label: "Directness baseline",
    minLabel: "Very indirect",
    maxLabel: "Very direct",
  },
  {
    id: "pressure-situations",
    step: 3,
    kind: "multi-select",
    field: "pressureSituations",
    limit: 4,
    eyebrow: "Step 3",
    question: "Which situations shift your communication style most often?",
    hint: "Choose the situations where your tone, wording, or readability noticeably changes.",
    options: pressureSituationOptions,
  },
  {
    id: "dialogue-pattern",
    step: 4,
    kind: "visual-choice",
    field: "dialoguePattern",
    columns: 2,
    eyebrow: "Step 4",
    question: "Which visual dialogue pattern feels closest to your style under pressure?",
    hint: "Pick the pattern that best reflects how the conversation actually sounds from the outside.",
    options: dialoguePatternOptions,
  },
  {
    id: "real-thing-ease",
    step: 5,
    kind: "segmented",
    field: "realThingEase",
    eyebrow: "Step 5",
    question: "How easy is it for you to say the real thing without over-softening it?",
    hint: "Focus on the central truth of the conversation, not the polished version after you have edited it in your head.",
    options: realThingEaseOptions,
  },
  {
    id: "ranked-truths",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Step 6",
    question: "Rank these from most to least true about your communication under pressure",
    hint: "Put the shift that distorts the message fastest at the top.",
    items: communicationRankingItems,
  },
  {
    id: "defensiveness-intensity",
    step: 7,
    kind: "slider",
    field: "defensivenessIntensity",
    eyebrow: "Step 7",
    question: "How much does defensiveness show up when you feel misunderstood or challenged?",
    hint: "Think about inner guarding as well as visible sharpness.",
    label: "Defensiveness intensity",
    minLabel: "Very little",
    maxLabel: "A lot",
  },
  {
    id: "difficult-conversation-response",
    step: 8,
    kind: "scenario-choice",
    field: "difficultConversationResponse",
    eyebrow: "Step 8",
    question: "When a conversation starts to feel difficult, what most often happens next?",
    hint: "Choose the shift you notice most often after the conversation becomes emotionally loaded.",
    options: difficultConversationOptions,
  },
  {
    id: "impact-sliders",
    step: 9,
    kind: "triple-slider",
    eyebrow: "Step 9",
    question: "How much do these get affected when communication pressure rises?",
    hint: "Use these sliders for the negative impact pressure tends to create.",
    fields: [
      { key: "clarityImpact", label: "Clarity", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
      { key: "warmthImpact", label: "Warmth", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
      { key: "honestyImpact", label: "Honesty/directness", minLabel: "Hardly affected", maxLabel: "Strongly affected" },
    ],
  },
  {
    id: "familiar-statement",
    step: 10,
    kind: "scenario-choice",
    field: "familiarStatement",
    eyebrow: "Step 10",
    question: "Which statement feels most familiar?",
    hint: "This one names the style pattern more broadly, not just the most recent example.",
    options: familiarStatementOptions,
  },
  {
    id: "repair-comfort",
    step: 11,
    kind: "segmented",
    field: "repairComfort",
    eyebrow: "Step 11",
    question: "How comfortable are you with repair after a difficult conversation?",
    hint: "Think about clarifying, reconnecting, or naming what got distorted after the fact.",
    options: repairComfortOptions,
  },
  {
    id: "distortion-source",
    step: 12,
    kind: "scenario-choice",
    field: "distortionSource",
    eyebrow: "Step 12",
    question: "What creates the biggest communication distortion for you?",
    hint: "Choose the source that most often pulls the conversation away from your intended message.",
    options: distortionSourceOptions,
  },
  {
    id: "pressure-zone",
    step: 13,
    kind: "visual-choice",
    field: "pressureZone",
    columns: 3,
    eyebrow: "Step 13",
    question: "Where does your communication style shift most visibly?",
    hint: "Choose the relational zone where your tone or clarity changes fastest.",
    options: pressureZoneOptions,
  },
  {
    id: "sequence-order",
    step: 14,
    kind: "sequence-order",
    eyebrow: "Step 14",
    question: "Put these in the order they usually happen for you",
    hint: "Order the conversation sequence as it tends to unfold in real time.",
    items: communicationSequenceItems,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Step 15",
    question: "Which statement feels closest to your current pattern?",
    hint: "Use this final step to name how pressure changes your communication, not how you wish you came across.",
    options: finalPatternOptions,
  },
];

const tensionShiftSeverity: Record<TensionShiftValue, number> = {
  "more-direct": 42,
  "more-careful": 40,
  "go-quieter": 76,
  "more-reactive": 86,
  "externally-calm-internally-guarded": 66,
};

const pressureSituationSeverity: Record<PressureSituationValue, number> = {
  conflict: 70,
  disappointment: 62,
  urgency: 58,
  "being-misunderstood": 78,
  "feeling-criticized": 82,
  "emotional-intensity": 74,
  "unclear-expectations": 64,
  "relational-distance": 60,
  "work-pressure": 54,
  "needing-to-say-no": 68,
};

const dialoguePatternSeverity: Record<DialoguePatternValue, number> = {
  "clear-and-steady": 16,
  "careful-but-contained": 38,
  "indirect-and-softened": 74,
  "sharp-and-defensive": 88,
  "withdrawn-and-hard-to-read": 84,
};

const realThingEaseSeverity: Record<RealThingEaseValue, number> = {
  "very-easy": 18,
  "mostly-easy": 32,
  mixed: 54,
  difficult: 74,
  "very-difficult": 88,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "soften-too-much": 72,
  "harder-to-read": 80,
  "sharper-than-intend": 82,
  overexplain: 68,
  "avoid-central-thing": 86,
};

const difficultConversationSeverity: Record<DifficultConversationResponseValue, number> = {
  "stay-clear-grounded": 16,
  "more-careful-wording": 40,
  "withdraw-or-minimize": 76,
  "push-harder": 84,
  "stop-feeling-heard": 72,
};

const familiarStatementSeverity: Record<FamiliarStatementValue, number> = {
  "know-what-i-mean-not-cleanly": 48,
  "less-readable-under-pressure": 72,
  "too-soft-then-react-later": 78,
  "sharper-when-unheard": 84,
  "hard-to-say-central-thing-simply": 76,
};

const repairComfortSeverity: Record<RepairComfortValue, number> = {
  "very-comfortable": 18,
  "mostly-comfortable": 34,
  mixed: 54,
  uncomfortable: 74,
  "very-uncomfortable": 88,
};

const distortionSourceSeverity: Record<DistortionSourceValue, number> = {
  "fear-of-conflict": 70,
  "over-softening": 74,
  defensiveness: 84,
  "shutting-down": 80,
  "too-much-explanation": 72,
};

const pressureZoneSeverity: Record<PressureZoneValue, number> = {
  "partner-intimacy": 76,
  family: 68,
  friendship: 56,
  work: 60,
  "authority-situations": 82,
  "difficult-emotional-conversations": 84,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "mostly-steady-few-pressure-shifts": 28,
  "thoughtful-but-clarity-diluted": 54,
  "harder-to-read-than-intend": 74,
  "tone-changes-faster-than-intention": 82,
  "issue-is-distortion-under-tension": 78,
};

const rankingWeights = [30, 24, 20, 16, 10];
const expectedSequence: SequenceKey[] = [
  "pressure-enters",
  "adjust-how-speaking",
  "clarity-drops-or-sharpness-rises",
  "other-person-responds",
  "repair-harder-or-needed",
];

const scoringWeights = {
  tensionShift: 8,
  directnessBaseline: 8,
  pressureSituations: 8,
  dialoguePattern: 6,
  realThingEase: 8,
  rankingOrder: 8,
  defensivenessIntensity: 8,
  difficultConversationResponse: 8,
  communicationImpact: 8,
  familiarStatement: 6,
  repairComfort: 6,
  distortionSource: 8,
  pressureZone: 4,
  sequenceOrder: 4,
  finalPattern: 6,
} as const;

export const communicationDistortions: DistortionCategory[] = [
  {
    key: "over-softening",
    label: "Over-softening",
    description: "Care for impact starts sanding the truth down until the message loses edge and specificity.",
    accent: "#93C5FD",
    icon: "signal",
  },
  {
    key: "defensiveness",
    label: "Defensiveness",
    description: "Protection enters fast enough that tone hardens before the message has fully landed.",
    accent: "#FB7185",
    icon: "trend",
  },
  {
    key: "shutdown-guarding",
    label: "Shutdown / guarding",
    description: "The conversation becomes less emotionally legible, even when a lot is still happening inside.",
    accent: "#C4B5FD",
    icon: "pattern",
  },
  {
    key: "overexplaining",
    label: "Overexplaining",
    description: "More words arrive, but the central point gets delayed or buried under context and pre-justification.",
    accent: "#FCD34D",
    icon: "graph",
  },
  {
    key: "indirect-truth-telling",
    label: "Indirect truth-telling",
    description: "The conversation circles the real issue without naming it simply enough for the other person to actually meet it.",
    accent: "#6EE7B7",
    icon: "insight",
  },
];

const stableTraits: StableTrait[] = [
  {
    key: "care-for-impact",
    label: "Care for impact",
    description: "You remain aware of how your words affect connection, even when tension is present.",
  },
  {
    key: "directness-available",
    label: "Directness available",
    description: "The ability to say the central thing is present, even if pressure sometimes distorts when it comes out.",
  },
  {
    key: "steady-external-tone",
    label: "Steady external tone",
    description: "Your surface tone does not immediately destabilize, which gives the conversation something steady to work with.",
  },
  {
    key: "repair-willingness",
    label: "Repair willingness",
    description: "There is still meaningful capacity to revisit, clarify, and reconnect after a conversation goes off-shape.",
  },
  {
    key: "thoughtful-word-choice",
    label: "Thoughtful word choice",
    description: "You tend to think about the wording rather than speaking without reflection, which can become a strength when paired with clarity.",
  },
];

export const pressureZones: PressureZone[] = [
  {
    key: "partner-intimacy",
    label: "Partner / intimacy",
    description: "Closeness raises the stakes, so softness, guarding, or reactivity can arrive faster.",
    accent: "#FB7185",
  },
  {
    key: "family",
    label: "Family",
    description: "Older roles and emotional history can make your communication shift before you fully notice it.",
    accent: "#FCD34D",
  },
  {
    key: "friendship",
    label: "Friendship",
    description: "You may protect ease or mutual comfort enough that the real issue becomes less direct.",
    accent: "#6EE7B7",
  },
  {
    key: "work",
    label: "Work",
    description: "Professional consequences can pull the style toward carefulness, overexplaining, or guardedness.",
    accent: "#93C5FD",
  },
  {
    key: "authority-situations",
    label: "Authority situations",
    description: "Power asymmetry can intensify pressure, defensiveness, or indirectness quickly.",
    accent: "#67E8F9",
  },
  {
    key: "difficult-emotional-conversations",
    label: "Difficult emotional conversations",
    description: "Emotion-heavy moments can change tone and readability before the core message is fully grounded.",
    accent: "#C4B5FD",
  },
];

const communicationAdjustments: CommunicationAdjustment[] = [
  {
    key: "say-central-thing-sooner",
    label: "Say the central thing sooner",
    description: "Reduce the time spent circling the point so the real message has a chance to land before pressure edits it.",
    accent: "#67E8F9",
  },
  {
    key: "reduce-overexplaining",
    label: "Reduce overexplaining",
    description: "Shorter, cleaner wording often restores more clarity than a longer explanation meant to prevent misunderstanding.",
    accent: "#FCD34D",
  },
  {
    key: "notice-defensive-speed",
    label: "Notice defensive speed",
    description: "Track the moment tone starts tightening so you can slow the reaction before it starts speaking for you.",
    accent: "#FB7185",
  },
  {
    key: "keep-warmth-and-truth-together",
    label: "Keep warmth and truth together",
    description: "The strongest conversations often hold both care and clarity instead of sacrificing one to protect the other.",
    accent: "#6EE7B7",
  },
  {
    key: "repair-before-meaning-hardens",
    label: "Repair before meaning hardens",
    description: "When distortion has already happened, earlier repair reduces how much misreading or distance gets to accumulate.",
    accent: "#C4B5FD",
  },
];

const impactMetricTemplates: Omit<ImpactMetric, "value">[] = [
  {
    key: "clarity-loss",
    label: "Clarity loss",
    description: "The message becomes harder to follow, locate, or trust in the moment.",
    accent: "#67E8F9",
  },
  {
    key: "warmth-drop",
    label: "Warmth drop",
    description: "Pressure narrows emotional openness enough that connection starts feeling cooler or thinner.",
    accent: "#93C5FD",
  },
  {
    key: "repair-friction",
    label: "Repair friction",
    description: "Once the conversation distorts, coming back together takes more effort than it should.",
    accent: "#6EE7B7",
  },
  {
    key: "felt-understanding-loss",
    label: "Felt understanding loss",
    description: "Even with good intentions, the interaction leaves both sides with less felt accuracy than the conversation needed.",
    accent: "#FB7185",
  },
];

export const relatedCommunicationTools: RelatedCommunicationTool[] = [
  {
    title: "Relationship Clarity Check",
    description: "See whether communication confusion is coming from signal inconsistency, weak directness, or unstable trust inside the connection.",
    category: "Relationships & Attachment",
    minutes: "5 min",
    icon: "signal",
    href: buildToolHref({ slug: "relationship-clarity-check", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Boundary Strength Scanner",
    description: "Explore where self-protection weakens in real conversations, especially when saying no or holding a line gets emotionally expensive.",
    category: "Boundaries & People-Pleasing",
    minutes: "5 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Attachment Pattern Spotter",
    description: "Read the relational system underneath your conversations so tone shifts make more sense in context.",
    category: "Relationships & Attachment",
    minutes: "8 min",
    icon: "insight",
    href: buildToolHref({ slug: "attachment-pattern-spotter", categorySlug: "relationships-attachment" }),
  },
  {
    title: "People-Pleasing Signal Check",
    description: "Spot where over-softening, approval pressure, or self-override are shaping what you say before you fully notice it.",
    category: "Boundaries & People-Pleasing",
    minutes: "6 min",
    icon: "pattern",
    href: buildToolHref({ slug: "people-pleasing-signal-check", categorySlug: "boundaries-people-pleasing" }),
  },
];

export const communicationStyleFaqItems: FaqItem[] = [
  {
    question: "What does a communication style score actually mean?",
    answer:
      "It is a directional read of how much your communication tends to distort under pressure. It does not measure whether you are a good or bad communicator overall. It measures how tone, clarity, directness, guarding, and repair shift once the conversation starts carrying more emotional weight.",
  },
  {
    question: "Why does my communication shift under pressure?",
    answer:
      "Because pressure changes what the nervous system prioritizes. Instead of only expressing the message, the system may start protecting against conflict, misunderstanding, criticism, escalation, or disconnection. That protective move can change how the message comes out.",
  },
  {
    question: "What is the difference between being direct and being harsh?",
    answer:
      "Directness keeps the message clear. Harshness adds unnecessary force. This tool separates those because many people fear directness when the real issue is tone tightening under pressure, not truth itself.",
  },
  {
    question: "Why do I soften so much that my real message disappears?",
    answer:
      "Often because care for impact starts outranking clarity. You may still want to be honest, but the system starts editing for comfort, safety, or smoothness before the central point has been said plainly enough.",
  },
  {
    question: "Can defensiveness make me harder to understand than I realize?",
    answer:
      "Yes. Defensiveness does not only sound sharp. It can also sound overexplained, guarded, overly careful, or emotionally less readable. In all of those cases, the listener may be receiving protection before they receive the core message.",
  },
  {
    question: "What is the difference between communication style and attachment style?",
    answer:
      "Attachment style is broader and relational. Communication style is more behavioral and moment-to-moment. This tool focuses on what happens in conversations themselves: wording, tone, directness, readability, and repair under pressure.",
  },
  {
    question: "Why do difficult conversations feel harder to repair afterward?",
    answer:
      "Because once clarity drops or tone shifts, both people are no longer responding only to the issue. They are also responding to the distortion. That adds more interpretation, more protection, and more emotional cleanup than the original message needed.",
  },
  {
    question: "How do I know whether my issue is clarity or tone?",
    answer:
      "A clarity problem means the message is hard to locate. A tone problem means the message may be understandable, but the emotional delivery changes what the other person can receive from it. Many people have some of both, but one usually leads.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it after a meaningful stretch of conversations, after a recurring conflict pattern becomes clearer, or after you have intentionally practiced a different way of saying the central thing for a few weeks. It works best for pattern comparison, not daily monitoring.",
  },
  {
    question: "What should I do if pressure changes my communication too fast?",
    answer:
      "Work one step earlier than the visible distortion. Notice the first tightening in tone, the first urge to overmanage wording, or the first inner withdrawal. The earlier you can catch the shift, the easier it is to keep truth, tone, and repair more aligned.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What communication style actually is",
    paragraphs: [
      "Communication style is not just whether you are talkative, quiet, direct, or polite. It is the moving relationship between what you mean, how you say it, what pressure does to that expression, and what the other person can actually receive from you when the stakes rise. That is why two people can both value honesty and still communicate very differently once the conversation becomes charged.",
      "The most useful way to understand communication style is as a pressure-sensitive pattern. Under easier conditions, many people sound thoughtful, calm, warm, and reasonably clear. The real style signature often shows up later, when urgency enters, disappointment lands, disagreement starts, or emotional activation narrows the system. This tool is built to reflect that version of communication, because that is usually where clarity or distortion becomes most consequential.",
    ],
  },
  {
    title: "Why communication often changes under pressure",
    paragraphs: [
      "Pressure changes communication because the job of the conversation quietly changes. Instead of only expressing the truth, the system starts trying to prevent something: conflict, rejection, criticism, escalation, abandonment, loss of control, or being misunderstood again. Once prevention joins the process, wording and tone usually begin to shift.",
      "That shift can sound very different depending on the person. Some people become gentler and less direct. Some become more careful and harder to read. Some get sharper. Some overexplain. Some stay outwardly composed while emotionally closing the door from the inside. None of those patterns automatically mean bad intent. They usually mean that protection has started editing expression before the central message lands cleanly.",
    ],
  },
  {
    title: "How clarity, tone, and directness become distorted in difficult moments",
    paragraphs: [
      "Clarity distorts when the conversation contains more management than message. You may speak around the point, pile too much explanation on top of it, soften it until it loses definition, or react quickly enough that tone overshadows meaning. Directness distorts when the truth is either under-spoken or over-forced. Tone distorts when protection becomes audible before intention does.",
      "That matters because people often mislabel the issue. Someone may say, 'I need to communicate better,' when the real issue is, 'Pressure changes my communication before I fully notice it.' Those are not the same problem. Better communication is too broad. Pressure distortion is specific. Once it becomes specific, it becomes much more workable.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "clarityUnderPressure",
    paragraphs: [
      "Clarity Under Pressure measures how much of the real message still survives once the conversation becomes emotionally loaded. Some people stay verbally clear even when they feel activated. Others still know what they mean inside, but the spoken version becomes diluted, delayed, or harder to locate from the outside.",
      "If this score is lower, it does not necessarily mean you lack insight. It usually means pressure is changing your delivery faster than you can keep your meaning intact. The work here is not finding more thoughts. It is helping the central thing come through with less distortion when the stakes rise.",
    ],
  },
  {
    key: "directnessStability",
    paragraphs: [
      "Directness Stability measures whether your message stays connected to its core truth once tension enters. Some people become indirect because they care deeply about impact. Others start explaining around the truth instead of naming it. Others become very direct, but only after a long stretch of self-editing that already weakened the interaction.",
      "A lower score here often means the truth is still present, but it is reaching the conversation in a compromised shape. The goal is not bluntness. It is staying close enough to the center of what you mean that the conversation does not have to guess its way there.",
    ],
  },
  {
    key: "defensivenessGuarding",
    paragraphs: [
      "Defensiveness / Guarding measures how quickly self-protection changes the conversation once you feel challenged, criticized, unseen, or emotionally exposed. This does not always sound aggressive. It can sound sharp, but it can also sound closed, overmanaged, overly rational, or quietly unavailable.",
      "A higher score here usually means the conversation begins reflecting protection very early. That can make the interaction feel more difficult than it actually is, because the other person is now responding to your guarding as well as to the original issue.",
    ],
  },
  {
    key: "repairCapacity",
    paragraphs: [
      "Repair Capacity measures how much room remains for coming back together after the message gets distorted. Good repair does not mean you never communicate imperfectly. It means the conversation can be revisited, clarified, and re-humanized before the misunderstanding hardens into something larger.",
      "When this score is lower, the problem is rarely only what happened in the first conversation. It is also what happens after: whether the distortion gets revisited, whether mutual understanding gets restored, and whether the relationship gets a chance to update the moment instead of carrying it forward unchanged.",
    ],
  },
];

export const pressureShiftBlocks: ContentBlock[] = [
  {
    title: "Fear of conflict",
    body:
      "When conflict feels expensive, many people start managing the interaction before they start saying the truth. That often creates indirectness or over-softening.",
  },
  {
    title: "Feeling misunderstood",
    body:
      "Misunderstanding can create a fast defensive shift, especially if being misread already feels emotionally charged or familiar.",
  },
  {
    title: "Defensiveness",
    body:
      "Once protection enters, the conversation may become sharper, more explanatory, more guarded, or less relationally open without you meaning for it to.",
  },
  {
    title: "Over-softening",
    body:
      "Care for impact is a strength until it starts weakening the message so much that the other person cannot meet what you actually mean.",
  },
  {
    title: "Emotional activation",
    body:
      "When the body is activated, language often gets faster, narrower, less flexible, or less connected to the original intention.",
  },
  {
    title: "Urgency",
    body:
      "Urgency compresses space. That can make clarity feel harder to protect, especially if you already tend to overmanage wording or react quickly.",
  },
  {
    title: "Difficulty saying the central thing directly",
    body:
      "Many conversations become longer and more confusing simply because the core message takes too long to arrive or never lands in a clean form.",
  },
];

export const clarityRepairBlocks: ContentBlock[] = [
  {
    title: "Simplify the real message",
    body:
      "Before you manage the conversation, name the sentence that actually matters. Simpler wording often restores more clarity than extra explanation.",
  },
  {
    title: "Reduce overexplaining",
    body:
      "More context does not always create more understanding. Sometimes it only delays the truth and increases the chance of distortion.",
  },
  {
    title: "Stay connected without becoming indirect",
    body:
      "Warmth and directness do not have to compete. The strongest communication often keeps both in the room at the same time.",
  },
  {
    title: "Notice defensive shifts earlier",
    body:
      "The first sign may be a tightening in tone, an urge to justify, a feeling of being less readable, or a desire to retreat behind composure.",
  },
  {
    title: "Keep tone and truth aligned",
    body:
      "A good repair target is congruence: saying something true in a tone that still leaves the other person able to hear it.",
  },
  {
    title: "Strengthen repair after distortion",
    body:
      "When the conversation goes off-shape, earlier clarification prevents one distorted exchange from becoming the story of the whole relationship.",
  },
];

export const communicationStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Good intention, altered delivery",
  quote:
    "In calm conversations, this person usually came across as thoughtful and careful. But when something important had to be said, especially around disappointment or misunderstanding, the message often changed under pressure. Sometimes the point got softened so much that the real issue disappeared. Sometimes the outside stayed calm while the inside became harder to read. Other times the point was held in too long and came out with more edge than intended. From the outside, people could call the conversation confusing. Inside, it felt like caring so much that pressure started editing the message before it fully landed.",
  takeaway:
    "This is how communication distortion often works in real life: not through lack of care, but through the way pressure changes clarity, readability, tone, or repair before the real message fully lands.",
  toneLabel: "Emotionally real",
  accent: "#67E8F9",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by working one step earlier than the obvious conversation problem. The visible issue may be overexplaining, shutdown, sharpness, or softness, but the real entry point is often the first inner shift: pressure rises, wording gets tighter, defensiveness appears, or you stop feeling accurately understood. That first shift is usually where the conversation becomes more workable again.",
  "The next useful move is to protect the central message. Before the conversation becomes long, edited, or reactive, ask yourself what the cleanest true sentence actually is. Then let the rest support it instead of replacing it. That one change often reduces both distortion and repair burden later.",
  "Finally, treat repair as part of communication strength, not as proof that you failed. The people who communicate best under pressure are not the ones who never distort. They are the ones who notice it faster, realign tone and truth sooner, and return to the conversation before misunderstanding hardens into distance.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Communication Repair Scripts",
  description:
    "A structured guide for saying the central thing more clearly, reducing pressure distortion, and improving repair after difficult conversations.",
  buttonLabel: "View Next Step",
};

export const communicationStyleMirrorMetadata = {
  title: communicationStyleMetadata.title,
  description: communicationStyleMetadata.description,
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
  return communicationBands.find((band) => score >= band.min && score <= band.max) ?? communicationBands[0];
}

function getDirectnessDistortion(value?: number) {
  if (typeof value !== "number") {
    return undefined;
  }

  if (value < 25) {
    return 88;
  }
  if (value < 40) {
    return 74;
  }
  if (value < 55) {
    return 52;
  }
  if (value <= 72) {
    return 24;
  }
  if (value <= 86) {
    return 40;
  }
  return 58;
}

function getDirectnessLevel(value?: number) {
  if (typeof value !== "number") {
    return 58;
  }

  return clampScore(value);
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

function getDistortionScores(answers: CommunicationStyleAnswers): DistortionScore[] {
  const directnessDistortion = getDirectnessDistortion(answers.directnessBaseline) ?? 0;
  const clarityImpact = answers.clarityImpact ?? 0;
  const warmthImpact = answers.warmthImpact ?? 0;
  const honestyImpact = answers.honestyImpact ?? 0;
  const defensiveness = answers.defensivenessIntensity ?? 0;

  const raw: Record<DistortionCategoryKey, number[]> = {
    "over-softening": [],
    defensiveness: [],
    "shutdown-guarding": [],
    overexplaining: [],
    "indirect-truth-telling": [],
  };

  if (answers.tensionShift === "more-careful") {
    raw["over-softening"].push(62);
  }
  if (answers.tensionShift === "go-quieter") {
    raw["shutdown-guarding"].push(82);
  }
  if (answers.tensionShift === "more-reactive") {
    raw.defensiveness.push(86);
  }
  if (answers.tensionShift === "externally-calm-internally-guarded") {
    raw["shutdown-guarding"].push(76);
  }

  if (answers.dialoguePattern === "indirect-and-softened") {
    raw["over-softening"].push(86);
    raw["indirect-truth-telling"].push(78);
  }
  if (answers.dialoguePattern === "sharp-and-defensive") {
    raw.defensiveness.push(90);
  }
  if (answers.dialoguePattern === "withdrawn-and-hard-to-read") {
    raw["shutdown-guarding"].push(90);
  }
  if (answers.dialoguePattern === "careful-but-contained") {
    raw["over-softening"].push(48);
    raw["shutdown-guarding"].push(42);
  }

  if (answers.difficultConversationResponse === "more-careful-wording") {
    raw["over-softening"].push(54);
  }
  if (answers.difficultConversationResponse === "withdraw-or-minimize") {
    raw["shutdown-guarding"].push(84);
    raw["indirect-truth-telling"].push(70);
  }
  if (answers.difficultConversationResponse === "push-harder") {
    raw.defensiveness.push(88);
  }
  if (answers.difficultConversationResponse === "stop-feeling-heard") {
    raw.defensiveness.push(62);
    raw["shutdown-guarding"].push(46);
  }

  if (answers.distortionSource === "fear-of-conflict") {
    raw["over-softening"].push(72);
    raw["indirect-truth-telling"].push(74);
  }
  if (answers.distortionSource === "over-softening") {
    raw["over-softening"].push(90);
  }
  if (answers.distortionSource === "defensiveness") {
    raw.defensiveness.push(92);
  }
  if (answers.distortionSource === "shutting-down") {
    raw["shutdown-guarding"].push(92);
  }
  if (answers.distortionSource === "too-much-explanation") {
    raw.overexplaining.push(90);
  }

  if (answers.familiarStatement === "too-soft-then-react-later") {
    raw["over-softening"].push(76);
    raw.defensiveness.push(54);
  }
  if (answers.familiarStatement === "less-readable-under-pressure") {
    raw["shutdown-guarding"].push(74);
  }
  if (answers.familiarStatement === "sharper-when-unheard") {
    raw.defensiveness.push(78);
  }
  if (answers.familiarStatement === "hard-to-say-central-thing-simply") {
    raw.overexplaining.push(68);
    raw["indirect-truth-telling"].push(82);
  }

  answers.pressureSituations.forEach((situation) => {
    if (situation === "conflict" || situation === "needing-to-say-no") {
      raw["over-softening"].push(42);
      raw.defensiveness.push(40);
    }
    if (situation === "being-misunderstood" || situation === "feeling-criticized") {
      raw.defensiveness.push(76);
    }
    if (situation === "emotional-intensity" || situation === "relational-distance") {
      raw["shutdown-guarding"].push(64);
    }
    if (situation === "urgency" || situation === "work-pressure") {
      raw.overexplaining.push(42);
    }
    if (situation === "unclear-expectations") {
      raw["indirect-truth-telling"].push(58);
    }
  });

  if (answers.pressureZone === "authority-situations") {
    raw["over-softening"].push(52);
    raw["shutdown-guarding"].push(44);
  }
  if (answers.pressureZone === "difficult-emotional-conversations") {
    raw.defensiveness.push(54);
    raw["shutdown-guarding"].push(56);
  }
  if (answers.pressureZone === "partner-intimacy") {
    raw["over-softening"].push(44);
    raw.defensiveness.push(42);
  }

  raw["over-softening"].push(honestyImpact * 0.36, directnessDistortion * 0.34);
  raw.defensiveness.push(defensiveness, warmthImpact * 0.18);
  raw["shutdown-guarding"].push(warmthImpact * 0.34, clarityImpact * 0.18);
  raw.overexplaining.push(clarityImpact * 0.32);
  raw["indirect-truth-telling"].push(honestyImpact * 0.42, directnessDistortion * 0.28);

  return communicationDistortions
    .map((distortion) => ({
      ...distortion,
      value: clampScore(average(raw[distortion.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getStrongestStableTrait(
  answers: CommunicationStyleAnswers,
  dimensions: Record<CommunicationDimensionKey, number>,
  directnessLevel: number,
) {
  const candidates: Array<{ trait: StableTrait; score: number }> = [
    {
      trait: stableTraits.find((item) => item.key === "care-for-impact") ?? stableTraits[0],
      score:
        100 -
        average([
          answers.warmthImpact ?? 38,
          answers.tensionShift === "more-careful" ? 28 : 42,
        ]) *
          0.7,
    },
    {
      trait: stableTraits.find((item) => item.key === "directness-available") ?? stableTraits[1],
      score: average([directnessLevel, 100 - (answers.honestyImpact ?? 42)]),
    },
    {
      trait: stableTraits.find((item) => item.key === "steady-external-tone") ?? stableTraits[2],
      score: average([
        100 - (answers.defensivenessIntensity ?? 46),
        answers.tensionShift === "externally-calm-internally-guarded" ? 72 : 58,
      ]),
    },
    {
      trait: stableTraits.find((item) => item.key === "repair-willingness") ?? stableTraits[3],
      score: dimensions.repairCapacity,
    },
    {
      trait: stableTraits.find((item) => item.key === "thoughtful-word-choice") ?? stableTraits[4],
      score:
        100 -
        average([
          answers.tensionShift === "more-careful" ? 32 : 44,
          answers.dialoguePattern === "careful-but-contained" ? 34 : 46,
        ]) *
          0.7,
    },
  ];

  return candidates.sort((left, right) => right.score - left.score)[0]?.trait ?? stableTraits[0];
}

function getAdjustment(
  dimensions: Record<CommunicationDimensionKey, number>,
  primaryDistortion: DistortionScore,
) {
  if (dimensions.clarityUnderPressure <= 44) {
    return communicationAdjustments.find((item) => item.key === "say-central-thing-sooner") ?? communicationAdjustments[0];
  }

  if (primaryDistortion.key === "overexplaining") {
    return communicationAdjustments.find((item) => item.key === "reduce-overexplaining") ?? communicationAdjustments[0];
  }

  if (primaryDistortion.key === "defensiveness" || dimensions.defensivenessGuarding >= 72) {
    return communicationAdjustments.find((item) => item.key === "notice-defensive-speed") ?? communicationAdjustments[0];
  }

  if (primaryDistortion.key === "over-softening" || primaryDistortion.key === "indirect-truth-telling") {
    return communicationAdjustments.find((item) => item.key === "keep-warmth-and-truth-together") ?? communicationAdjustments[0];
  }

  return communicationAdjustments.find((item) => item.key === "repair-before-meaning-hardens") ?? communicationAdjustments[0];
}

export function getInitialCommunicationStyleAnswers(): CommunicationStyleAnswers {
  return {
    pressureSituations: [],
    rankingOrder: communicationRankingItems.map((item) => item.key),
    rankingConfirmed: false,
    sequenceOrder: communicationSequenceItems.map((item) => item.key),
    sequenceConfirmed: false,
  };
}

export function isCommunicationStyleStepComplete(
  step: CommunicationStyleStep,
  answers: CommunicationStyleAnswers,
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

export function calculateCommunicationStyleResult(
  answers: CommunicationStyleAnswers,
): CommunicationStyleResult {
  const tensionShift = answers.tensionShift ? tensionShiftSeverity[answers.tensionShift] : undefined;
  const directnessDistortion = getDirectnessDistortion(answers.directnessBaseline);
  const pressureSituations =
    answers.pressureSituations.length > 0
      ? clampScore(
          average(answers.pressureSituations.map((situation) => pressureSituationSeverity[situation])) * 0.76 +
            (answers.pressureSituations.length / 4) * 18,
        )
      : undefined;
  const dialoguePattern = answers.dialoguePattern ? dialoguePatternSeverity[answers.dialoguePattern] : undefined;
  const realThingEase = answers.realThingEase ? realThingEaseSeverity[answers.realThingEase] : undefined;
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const defensivenessIntensity =
    typeof answers.defensivenessIntensity === "number" ? clampScore(answers.defensivenessIntensity) : undefined;
  const difficultConversation = answers.difficultConversationResponse
    ? difficultConversationSeverity[answers.difficultConversationResponse]
    : undefined;
  const communicationImpact =
    typeof answers.clarityImpact === "number" &&
    typeof answers.warmthImpact === "number" &&
    typeof answers.honestyImpact === "number"
      ? clampScore((answers.clarityImpact + answers.warmthImpact + answers.honestyImpact) / 3)
      : undefined;
  const familiarStatement = answers.familiarStatement
    ? familiarStatementSeverity[answers.familiarStatement]
    : undefined;
  const repairComfort = answers.repairComfort ? repairComfortSeverity[answers.repairComfort] : undefined;
  const distortionSource = answers.distortionSource ? distortionSourceSeverity[answers.distortionSource] : undefined;
  const pressureZone = answers.pressureZone ? pressureZoneSeverity[answers.pressureZone] : undefined;
  const sequenceOrder = answers.sequenceConfirmed ? getSequenceScore(answers.sequenceOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const weightedEntries = [
    { value: tensionShift, weight: scoringWeights.tensionShift },
    { value: directnessDistortion, weight: scoringWeights.directnessBaseline },
    { value: pressureSituations, weight: scoringWeights.pressureSituations },
    { value: dialoguePattern, weight: scoringWeights.dialoguePattern },
    { value: realThingEase, weight: scoringWeights.realThingEase },
    { value: rankingScore, weight: scoringWeights.rankingOrder },
    { value: defensivenessIntensity, weight: scoringWeights.defensivenessIntensity },
    { value: difficultConversation, weight: scoringWeights.difficultConversationResponse },
    { value: communicationImpact, weight: scoringWeights.communicationImpact },
    { value: familiarStatement, weight: scoringWeights.familiarStatement },
    { value: repairComfort, weight: scoringWeights.repairComfort },
    { value: distortionSource, weight: scoringWeights.distortionSource },
    { value: pressureZone, weight: scoringWeights.pressureZone },
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

  const clarityUnderPressure = clampScore(
    100 -
      weightedAverage([
        { value: realThingEase, weight: 0.16 },
        { value: answers.clarityImpact, weight: 0.26 },
        { value: dialoguePattern, weight: 0.18 },
        { value: difficultConversation, weight: 0.14 },
        { value: familiarStatement, weight: 0.14 },
        { value: sequenceOrder, weight: 0.12 },
      ]) *
        0.9,
  );

  const directnessStability = clampScore(
    100 -
      weightedAverage([
        { value: directnessDistortion, weight: 0.26 },
        { value: realThingEase, weight: 0.2 },
        { value: answers.honestyImpact, weight: 0.22 },
        { value: rankingScore, weight: 0.14 },
        { value: distortionSource, weight: 0.08 },
        { value: finalPattern, weight: 0.1 },
      ]) *
        0.88,
  );

  const defensivenessGuarding = weightedAverage([
    { value: defensivenessIntensity, weight: 0.3 },
    { value: tensionShift, weight: 0.16 },
    { value: dialoguePattern, weight: 0.18 },
    { value: difficultConversation, weight: 0.16 },
    { value: distortionSource, weight: 0.12 },
    { value: pressureZone, weight: 0.08 },
  ]);

  const repairCapacity = clampScore(
    100 -
      weightedAverage([
        { value: repairComfort, weight: 0.32 },
        { value: answers.warmthImpact, weight: 0.14 },
        { value: answers.clarityImpact, weight: 0.12 },
        { value: defensivenessIntensity, weight: 0.16 },
        { value: difficultConversation, weight: 0.12 },
        { value: sequenceOrder, weight: 0.14 },
      ]) *
        0.86,
  );

  const dimensions: Record<CommunicationDimensionKey, number> = {
    clarityUnderPressure,
    directnessStability,
    defensivenessGuarding,
    repairCapacity,
  };

  const distortionScores = getDistortionScores(answers);
  const primaryCommunicationDistortion = distortionScores[0] ?? {
    ...communicationDistortions[0],
    value: 38,
  };

  const mainPressureZone =
    pressureZones.find((zone) => zone.key === answers.pressureZone) ?? pressureZones[0];
  const directnessLevel = getDirectnessLevel(answers.directnessBaseline);
  const clarityLevel = clampScore(
    average([
      clarityUnderPressure,
      100 - (answers.clarityImpact ?? 42),
    ]),
  );
  const warmthLevel = clampScore(
    100 -
      average([
        answers.warmthImpact ?? 38,
        defensivenessGuarding * 0.48,
      ]),
  );
  const defensivenessLevel = clampScore(
    average([
      defensivenessGuarding,
      answers.defensivenessIntensity ?? 42,
    ]),
  );
  const repairStrength = repairCapacity;

  const strongestStableTrait = getStrongestStableTrait(answers, dimensions, directnessLevel);
  const mostUsefulCommunicationAdjustment = getAdjustment(dimensions, primaryCommunicationDistortion);

  const impactMetrics: ImpactMetric[] = [
    { ...impactMetricTemplates[0], value: answers.clarityImpact ?? clampScore(100 - clarityUnderPressure) },
    { ...impactMetricTemplates[1], value: answers.warmthImpact ?? clampScore(100 - warmthLevel) },
    {
      ...impactMetricTemplates[2],
      value: clampScore(100 - repairCapacity + (defensivenessGuarding - 50) * 0.18),
    },
    {
      ...impactMetricTemplates[3],
      value: clampScore(
        average([
          answers.clarityImpact ?? 42,
          answers.honestyImpact ?? 42,
          defensivenessGuarding * 0.54,
        ]),
      ),
    },
  ].sort((left, right) => right.value - left.value);

  const dialogueStages: DialogueStage[] = [
    { label: "Intention", value: clampScore(64 + directnessLevel * 0.2), accent: "#6EE7B7", kind: "intention" },
    {
      label: "Pressure",
      value: clampScore(54 + (pressureSituations ?? 48) * 0.28),
      accent: "#FCD34D",
      kind: "pressure",
    },
    {
      label: "Style shift",
      value: clampScore(44 + primaryCommunicationDistortion.value * 0.3),
      accent: "#FB7185",
      kind: "distortion",
    },
    {
      label: "Response",
      value: clampScore(40 + clarityLevel * 0.24),
      accent: "#93C5FD",
      kind: "response",
    },
    {
      label: "Repair",
      value: clampScore(36 + repairCapacity * 0.26),
      accent: "#C4B5FD",
      kind: "repair",
    },
  ];

  const previewMetrics: PreviewMetric[] = [
    { label: "Directness", value: directnessLevel, accent: "#93C5FD" },
    { label: "Clarity", value: clarityLevel, accent: "#67E8F9" },
    { label: "Warmth", value: warmthLevel, accent: "#6EE7B7" },
    { label: "Defensiveness", value: defensivenessLevel, accent: "#FB7185" },
    { label: "Repair strength", value: repairStrength, accent: "#C4B5FD" },
  ];

  const mirrorLabel =
    "Your pattern suggests that the issue is not lack of care or intention — it is the way pressure changes clarity, tone, or directness before the real message lands cleanly.";
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The strongest distortion currently looks like ${primaryCommunicationDistortion.label.toLowerCase()}, while your strongest stable trait appears to be ${strongestStableTrait.label.toLowerCase()}.`;
  const shiftInsight = `${band.shiftLead} The pressure zone where the communication style seems to shift fastest right now is ${mainPressureZone.label.toLowerCase()}.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryCommunicationDistortion,
    strongestStableTrait,
    mainPressureZone,
    mostUsefulCommunicationAdjustment,
    distortionScores,
    impactMetrics,
    previewMetrics,
    dialogueStages,
    mirrorLabel,
    interpretation,
    standout,
    shiftInsight,
    directnessLevel,
    clarityLevel,
    warmthLevel,
    defensivenessLevel,
    repairStrength,
  };
}

export const heroPreviewResult = calculateCommunicationStyleResult({
  tensionShift: "more-careful",
  directnessBaseline: 58,
  pressureSituations: ["being-misunderstood", "emotional-intensity", "needing-to-say-no", "conflict"],
  dialoguePattern: "careful-but-contained",
  realThingEase: "mixed",
  rankingOrder: [
    "avoid-central-thing",
    "overexplain",
    "soften-too-much",
    "harder-to-read",
    "sharper-than-intend",
  ],
  rankingConfirmed: true,
  defensivenessIntensity: 54,
  difficultConversationResponse: "more-careful-wording",
  clarityImpact: 62,
  warmthImpact: 44,
  honestyImpact: 58,
  familiarStatement: "hard-to-say-central-thing-simply",
  repairComfort: "mixed",
  distortionSource: "too-much-explanation",
  pressureZone: "partner-intimacy",
  sequenceOrder: [
    "pressure-enters",
    "adjust-how-speaking",
    "clarity-drops-or-sharpness-rises",
    "other-person-responds",
    "repair-harder-or-needed",
  ],
  sequenceConfirmed: true,
  finalPattern: "thoughtful-but-clarity-diluted",
});
