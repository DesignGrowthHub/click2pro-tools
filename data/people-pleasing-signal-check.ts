import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type InitialResponseValue =
  | "clear-limit"
  | "quick-hesitation"
  | "pressure-to-yes"
  | "worry-disappointing"
  | "responsible-for-feelings";

export type AccommodationSituationValue =
  | "urgency"
  | "disappointment"
  | "conflict"
  | "family-expectations"
  | "partner-needs"
  | "work-requests"
  | "guilt"
  | "seen-as-difficult"
  | "helping-roles"
  | "emotional-intensity";

export type InnerShiftValue =
  | "stay-centered"
  | "soften-quickly"
  | "disappear-into-need"
  | "yes-before-checking"
  | "feel-strain-still-comply";

export type YesBeforeCheckValue = "never" | "rarely" | "sometimes" | "often" | "very-often";

export type PleasingDriverKey =
  | "guilt"
  | "approval"
  | "avoiding-conflict"
  | "urgency"
  | "feeling-responsible"
  | "fear-seeming-selfish";

export type AfterEffectValue =
  | "adjust-let-go"
  | "quietly-drained"
  | "resentful-later"
  | "pull-back-emotionally"
  | "irritated-stay-available";

export type NoticeNoValue = "very-easy" | "mostly-easy" | "mixed" | "difficult" | "very-difficult";

export type SocialPositionValue =
  | "know-position-clearly"
  | "know-but-soften"
  | "monitor-their-reaction"
  | "keep-it-smooth-pay-later";

export type OverexplainingValue = "rarely" | "sometimes" | "often" | "very-often" | "almost-always";

export type ResponseFlowValue =
  | "notice-decide-communicate"
  | "pressure-hesitate-soften"
  | "monitor-reaction-override"
  | "say-yes-feel-drain"
  | "say-yes-resentment-builds";

export type WeakZoneValue =
  | "family"
  | "romance-partner"
  | "work"
  | "friendship"
  | "helping-roles"
  | "emotionally-intense-people";

export type FinalPatternValue =
  | "steady-soften-few"
  | "override-to-keep-smooth"
  | "carry-others-comfort"
  | "notice-strain-later"
  | "costs-more-than-people-see";

export type PeoplePleasingDimensionKey =
  | "approvalPressure"
  | "selfSignalClarity"
  | "conflictGuiltOverride"
  | "resentmentRisk";

export type PeoplePleasingBandKey =
  | "clear-self-signal"
  | "selective-softening"
  | "approval-led-drift"
  | "high-self-override-pattern"
  | "quiet-self-erasure-risk";

export type HiddenCostKey =
  | "energy-drain"
  | "resentment-buildup"
  | "self-respect-drop"
  | "emotional-withdrawal";

export type PeoplePleasingAnswers = {
  initialResponse?: InitialResponseValue;
  ownNeedDifficulty?: number;
  accommodationSituations: AccommodationSituationValue[];
  innerShift?: InnerShiftValue;
  yesBeforeCheck?: YesBeforeCheckValue;
  driverRanking: PleasingDriverKey[];
  driverRankingConfirmed: boolean;
  afterEffect?: AfterEffectValue;
  noticeNo?: NoticeNoValue;
  disappointmentInfluence?: number;
  socialPosition?: SocialPositionValue;
  overexplaining?: OverexplainingValue;
  responseFlow?: ResponseFlowValue;
  energyDrain?: number;
  resentmentBuildup?: number;
  selfRespectDrop?: number;
  weakZone?: WeakZoneValue;
  finalPattern?: FinalPatternValue;
};

export type PleasingChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
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
  field: "initialResponse" | "afterEffect" | "socialPosition" | "finalPattern";
  options: PleasingChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "yesBeforeCheck" | "noticeNo" | "overexplaining";
  options: PleasingChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "ownNeedDifficulty" | "disappointmentInfluence";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "accommodationSituations";
  limit: number;
  options: PleasingChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: PleasingDriverKey;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "energyDrain" | "resentmentBuildup" | "selfRespectDrop";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "innerShift" | "responseFlow" | "weakZone";
  options: PleasingChoiceOption[];
  columns?: 2 | 3;
};

export type PeoplePleasingStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep;

export type PeoplePleasingDimension = {
  key: PeoplePleasingDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type PeoplePleasingBand = {
  key: PeoplePleasingBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  costLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type WeakZone = {
  key: WeakZoneValue;
  label: string;
  description: string;
  accent: string;
};

export type PleasingDriver = {
  key: PleasingDriverKey;
  label: string;
  description: string;
  accent: string;
};

export type OverridePattern = {
  key: string;
  label: string;
  summary: string;
};

export type HiddenCostMetric = {
  key: HiddenCostKey;
  label: string;
  description: string;
  accent: string;
  value: number;
};

export type RelatedPleasingTool = {
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

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type DriftStage = {
  key: "signal" | "pressure" | "override" | "cost";
  label: string;
  shortLabel: string;
  value: number;
  accent: string;
  note: string;
};

export type PeoplePleasingResult = {
  score: number;
  band: PeoplePleasingBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<PeoplePleasingDimensionKey, number>;
  primaryDriver: PleasingDriver;
  mainWeakZone: WeakZone;
  dominantPattern: OverridePattern;
  hiddenCost: HiddenCostMetric;
  weakZoneScores: Array<WeakZone & { value: number }>;
  hiddenCosts: HiddenCostMetric[];
  selfPriority: number;
  otherPriority: number;
  approvalMeter: number;
  resentmentLikelihood: number;
  driftStages: DriftStage[];
  signalLabel: string;
  interpretation: string;
  standout: string;
  hiddenCostInsight: string;
};

export const peoplePleasingMetadata = {
  eyebrow: "SOCIAL PATTERN TOOL",
  title: "People-Pleasing Signal Check",
  description:
    "See where your own signal gets overridden by approval pressure, guilt, emotional smoothing, or fear of disappointing others. This tool maps self-override before it becomes your new normal.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "signal" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const peoplePleasingDimensions: PeoplePleasingDimension[] = [
  {
    key: "approvalPressure",
    label: "Approval Pressure",
    description: "How quickly another person's reaction begins to outrank your own first signal.",
    icon: "insight",
    accent: "#FDA4AF",
  },
  {
    key: "selfSignalClarity",
    label: "Self-Signal Clarity",
    description: "How easy it is to notice what you actually want, need, or do not have room for in real time.",
    icon: "signal",
    accent: "#6EE7B7",
  },
  {
    key: "conflictGuiltOverride",
    label: "Conflict / Guilt Override",
    description: "How much guilt, urgency, or responsibility pressure weakens self-protection once it appears.",
    icon: "shield",
    accent: "#FCD34D",
  },
  {
    key: "resentmentRisk",
    label: "Resentment Risk",
    description: "How likely the pattern is to convert compliance into later drain, withdrawal, or resentment.",
    icon: "trend",
    accent: "#C4B5FD",
  },
];

export const weakZones: WeakZone[] = [
  {
    key: "family",
    label: "Family",
    description: "Places where history, loyalty, or old expectations can make self-protection softer than you intend.",
    accent: "#93C5FD",
  },
  {
    key: "romance-partner",
    label: "Romance / Partner",
    description: "Moments where closeness, disappointment, or the desire to stay connected changes what you say yes to.",
    accent: "#FDA4AF",
  },
  {
    key: "work",
    label: "Work",
    description: "Requests shaped by competence, responsiveness, and the fear of seeming difficult or less useful.",
    accent: "#67E8F9",
  },
  {
    key: "friendship",
    label: "Friendship",
    description: "Social moments where you keep the tone easy even when your internal signal is less sure.",
    accent: "#C4B5FD",
  },
  {
    key: "helping-roles",
    label: "Helping Roles",
    description: "Dynamics where being helpful becomes so central that you notice your own limit later than the request.",
    accent: "#6EE7B7",
  },
  {
    key: "emotionally-intense-people",
    label: "Emotionally Intense People",
    description: "Interactions where the other person's intensity compresses your pause and pulls you into smoothing fast.",
    accent: "#FCD34D",
  },
];

export const pleasingDrivers: PleasingDriver[] = [
  {
    key: "guilt",
    label: "Guilt",
    description: "The feeling that protecting your own need immediately becomes a moral problem you must repair.",
    accent: "#FCD34D",
  },
  {
    key: "approval",
    label: "Approval",
    description: "The pull to stay likable, easy, good, or emotionally safe in the other person's eyes.",
    accent: "#FDA4AF",
  },
  {
    key: "avoiding-conflict",
    label: "Avoiding conflict",
    description: "The tendency to prevent tension, awkwardness, or disagreement before you have checked your own position.",
    accent: "#C4B5FD",
  },
  {
    key: "urgency",
    label: "Urgency",
    description: "The pressure of the moment itself making it feel easier to comply now and sort out the cost later.",
    accent: "#67E8F9",
  },
  {
    key: "feeling-responsible",
    label: "Feeling responsible",
    description: "The sense that another person's disappointment, stress, or dysregulation has become yours to manage.",
    accent: "#93C5FD",
  },
  {
    key: "fear-seeming-selfish",
    label: "Fear of seeming selfish",
    description: "The reflex to soften your own need because taking up space feels risky to your identity or image.",
    accent: "#6EE7B7",
  },
];

export const peoplePleasingBands: PeoplePleasingBand[] = [
  {
    key: "clear-self-signal",
    min: 0,
    max: 24,
    title: "Clear Self-Signal",
    descriptor: "Your internal signal appears to stay fairly available even when other people's needs become emotionally present.",
    summary:
      "The pattern still includes care and flexibility, but your own limit usually remains readable enough to guide the response.",
    interpretation:
      "That does not mean every moment is easy. It means approval pressure does not seem to outrank self-protection by default, which makes accommodation more deliberate than automatic.",
    standoutLead:
      "The strongest signal is not hardness. It is steadiness: your system seems more able to stay in contact with your own position while still caring about the other person.",
    costLead:
      "When hidden cost shows up here, it is usually contextual rather than chronic - more likely tied to a few specific relationships than to your general pattern.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.26)",
  },
  {
    key: "selective-softening",
    min: 25,
    max: 44,
    title: "Selective Softening",
    descriptor: "Your self-signal is present, but certain social conditions make it softer, slower, or easier to negotiate away.",
    summary:
      "This usually looks like being steady in many situations, then becoming more accommodating around specific people, tones, or emotional pressures.",
    interpretation:
      "The important pattern here is selectivity. The drift is not constant, but it becomes easier to override yourself when guilt, urgency, or relational tension enters the room.",
    standoutLead:
      "The clearest signal is conditional drift. Your system often knows its position, but specific cues make it harder to hold that position cleanly.",
    costLead:
      "The hidden cost usually shows up after the interaction, when the social moment is over and your own strain becomes easier to feel than it was inside the request itself.",
    gradientFrom: "#93C5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(147, 197, 253, 0.24)",
  },
  {
    key: "approval-led-drift",
    min: 45,
    max: 64,
    title: "Approval-Led Drift",
    descriptor: "Your responses suggest that other people's comfort or reaction starts to lead the moment faster than your own need can stay fully visible.",
    summary:
      "At this level, people-pleasing often feels subtle. You may not see it as obvious self-betrayal in the moment, but the later cost is becoming more repeatable.",
    interpretation:
      "The issue here is less confusion about values and more the speed of social override. Approval, guilt, or the desire to keep things smooth begins shaping the answer before you have fully checked yourself.",
    standoutLead:
      "The strongest signal is ranking drift: the other person's likely feeling or reaction appears to rise in priority faster than your own signal can stay in first position.",
    costLead:
      "The hidden cost at this stage often builds quietly as drain, resentment, overexplaining, or a delayed recognition that you were never fully on board.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#FCD34D",
    glow: "rgba(253, 164, 175, 0.26)",
  },
  {
    key: "high-self-override-pattern",
    min: 65,
    max: 84,
    title: "High Self-Override Pattern",
    descriptor: "Your pattern suggests that self-protection weakens quickly once social pressure, guilt, or emotional responsibility enters the interaction.",
    summary:
      "This often feels like saying yes too early, cushioning too much, or staying available past the point where your internal signal was already warning you.",
    interpretation:
      "The pattern here is not about being too kind. It is about how reliably your own limit becomes secondary under pressure, which makes later resentment or withdrawal more likely.",
    standoutLead:
      "The clearest signal is speed. Social pressure seems to move faster than self-checking, so the override happens before the cost is fully visible to you.",
    costLead:
      "The hidden cost often builds in two stages: immediate smoothing on the outside, then drain, irritation, or self-erasure on the inside once the interaction has passed.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.24)",
  },
  {
    key: "quiet-self-erasure-risk",
    min: 85,
    max: 100,
    title: "Quiet Self-Erasure Risk",
    descriptor: "The current pattern points to self-protection becoming consistently quieter than approval pressure, responsibility, or emotional smoothing.",
    summary:
      "This does not mean you do not know yourself. It means the social override is becoming so automatic that your own no, discomfort, or limit is being felt later than the moment itself.",
    interpretation:
      "At this level, people-pleasing often looks small from the outside and expensive from the inside. The system is adapting quickly to the other person while leaving you to absorb the emotional cost afterward.",
    standoutLead:
      "The strongest signal is invisibility of cost. The pattern is not only that you comply, but that your own strain becomes easier to notice after the decision than during it.",
    costLead:
      "The hidden cost here is usually cumulative: energy loss, resentment, emotional withdrawal, and a quieter relationship to your own signal over time.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.28)",
  },
];

const overridePatterns: OverridePattern[] = [
  {
    key: "fast-softening",
    label: "Fast softening",
    summary: "You usually know your position, but it softens quickly once the relational tone becomes emotionally loaded.",
  },
  {
    key: "reaction-monitoring",
    label: "Reaction monitoring",
    summary: "You start tracking their reaction more closely than your own signal, which shifts the decision toward keeping the interaction smooth.",
  },
  {
    key: "anticipatory-yes",
    label: "Anticipatory yes",
    summary: "The system moves toward yes or compliance before self-checking has had enough room to happen.",
  },
  {
    key: "quiet-resentment-carryover",
    label: "Quiet resentment carryover",
    summary: "You stay available in the moment, then pay later through drain, irritation, or subtle withdrawal.",
  },
  {
    key: "responsibility-led-compliance",
    label: "Responsibility-led compliance",
    summary: "Another person's feeling becomes something you feel pressed to manage, even when it costs you more than it should.",
  },
];

const hiddenCostDefinitions: Array<Omit<HiddenCostMetric, "value">> = [
  {
    key: "energy-drain",
    label: "Energy drain",
    description: "The amount of invisible depletion the pattern creates after the socially smooth moment ends.",
    accent: "#67E8F9",
  },
  {
    key: "resentment-buildup",
    label: "Resentment buildup",
    description: "The quiet accumulation of irritation or inner protest when compliance keeps outranking consent.",
    accent: "#FDA4AF",
  },
  {
    key: "self-respect-drop",
    label: "Self-respect drop",
    description: "The feeling of becoming less solid with yourself after overriding what you already knew inside.",
    accent: "#C4B5FD",
  },
  {
    key: "emotional-withdrawal",
    label: "Emotional withdrawal",
    description: "The later distance that can appear when saying yes repeatedly becomes a substitute for honest availability.",
    accent: "#FCD34D",
  },
];

const initialResponseOptions: PleasingChoiceOption[] = [
  { value: "clear-limit", marker: "A", label: "A clear sense of my limit" },
  { value: "quick-hesitation", marker: "B", label: "A quick hesitation" },
  { value: "pressure-to-yes", marker: "C", label: "Pressure to say yes" },
  { value: "worry-disappointing", marker: "D", label: "Worry about disappointing them" },
  { value: "responsible-for-feelings", marker: "E", label: "Responsibility for how they might feel" },
];

const accommodationSituationOptions: PleasingChoiceOption[] = [
  { value: "urgency", label: "Urgency" },
  { value: "disappointment", label: "Disappointment" },
  { value: "conflict", label: "Conflict" },
  { value: "family-expectations", label: "Family expectations" },
  { value: "partner-needs", label: "Partner needs" },
  { value: "work-requests", label: "Work requests" },
  { value: "guilt", label: "Guilt" },
  { value: "seen-as-difficult", label: "Being seen as difficult" },
  { value: "helping-roles", label: "Helping roles" },
  { value: "emotional-intensity", label: "Emotional intensity" },
];

const innerShiftOptions: PleasingChoiceOption[] = [
  {
    value: "stay-centered",
    marker: "A",
    label: "I stay centered and decide clearly",
    description: "Your own signal stays available while you consider the request.",
  },
  {
    value: "soften-quickly",
    marker: "B",
    label: "I soften quickly",
    description: "The social tone shifts your position before the decision is fully yours.",
  },
  {
    value: "disappear-into-need",
    marker: "C",
    label: "I disappear into their need",
    description: "Their urgency or feeling becomes the main thing in the room.",
  },
  {
    value: "yes-before-checking",
    marker: "D",
    label: "I say yes before checking myself",
    description: "Compliance moves faster than reflection.",
  },
  {
    value: "feel-strain-still-comply",
    marker: "E",
    label: "I feel the strain but still comply",
    description: "Your signal is there, but it loses the ranking.",
  },
];

const yesFrequencyOptions: PleasingChoiceOption[] = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
];

export const pleasingDriverItems: Array<{ key: PleasingDriverKey; label: string }> = [
  { key: "guilt", label: "guilt" },
  { key: "approval", label: "approval" },
  { key: "avoiding-conflict", label: "avoiding conflict" },
  { key: "urgency", label: "urgency" },
  { key: "feeling-responsible", label: "feeling responsible" },
  { key: "fear-seeming-selfish", label: "fear of seeming selfish" },
];

const afterEffectOptions: PleasingChoiceOption[] = [
  { value: "adjust-let-go", marker: "A", label: "I adjust and let it go" },
  { value: "quietly-drained", marker: "B", label: "I feel quietly drained" },
  { value: "resentful-later", marker: "C", label: "I feel resentful later" },
  { value: "pull-back-emotionally", marker: "D", label: "I pull back emotionally" },
  { value: "irritated-stay-available", marker: "E", label: "I become irritated but stay available" },
];

const noticeNoOptions: PleasingChoiceOption[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "mostly-easy", label: "Mostly easy" },
  { value: "mixed", label: "Mixed" },
  { value: "difficult", label: "Difficult" },
  { value: "very-difficult", label: "Very difficult" },
];

const socialPositionOptions: PleasingChoiceOption[] = [
  { value: "know-position-clearly", marker: "A", label: "I usually know my position clearly" },
  { value: "know-but-soften", marker: "B", label: "I know my position but soften it quickly" },
  { value: "monitor-their-reaction", marker: "C", label: "I start monitoring their reaction more than my own need" },
  { value: "keep-it-smooth-pay-later", marker: "D", label: "I try to keep the interaction smooth even when I pay for it later" },
];

const overexplainingOptions: PleasingChoiceOption[] = [
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
  { value: "almost-always", label: "Almost always" },
];

const responseFlowOptions: PleasingChoiceOption[] = [
  {
    value: "notice-decide-communicate",
    marker: "A",
    label: "notice need -> decide -> communicate",
    description: "Your signal stays available long enough to shape the answer.",
  },
  {
    value: "pressure-hesitate-soften",
    marker: "B",
    label: "notice pressure -> hesitate -> soften",
    description: "The interaction starts redirecting the answer before you fully agree.",
  },
  {
    value: "monitor-reaction-override",
    marker: "C",
    label: "feel request -> monitor reaction -> override self",
    description: "Their likely response becomes the main reference point.",
  },
  {
    value: "say-yes-feel-drain",
    marker: "D",
    label: "say yes -> feel drain later",
    description: "The real cost becomes visible only after the moment has passed.",
  },
  {
    value: "say-yes-resentment-builds",
    marker: "E",
    label: "say yes -> resentment builds quietly",
    description: "Compliance protects the interaction now, but not the longer emotional cost.",
  },
];

const weakZoneOptions: PleasingChoiceOption[] = weakZones.map((zone) => ({
  value: zone.key,
  label: zone.label,
  description: zone.description,
}));

const finalPatternOptions: PleasingChoiceOption[] = [
  { value: "steady-soften-few", marker: "A", label: "I'm generally steady, but soften in a few situations" },
  { value: "override-to-keep-smooth", marker: "B", label: "I often override myself to keep things smooth" },
  { value: "carry-others-comfort", marker: "C", label: "I carry others' comfort too quickly" },
  { value: "notice-strain-later", marker: "D", label: "I tend to notice my own strain later than the moment it starts" },
  { value: "costs-more-than-people-see", marker: "E", label: "My people-pleasing looks small outside but costs me more than people see" },
];

export const peoplePleasingSteps: PeoplePleasingStep[] = [
  {
    id: "initial-response",
    step: 1,
    kind: "scenario-choice",
    field: "initialResponse",
    eyebrow: "Signal 01 · first inner move",
    question: "When someone asks for something that costs you more than you comfortably have room for, what do you usually feel first?",
    hint: "Pick the earliest honest signal, not the answer you wish you had later in the interaction.",
    options: initialResponseOptions,
  },
  {
    id: "prioritize-own-need",
    step: 2,
    kind: "slider",
    field: "ownNeedDifficulty",
    eyebrow: "Signal 02 · self-priority",
    question: "How hard is it to prioritize your own need when someone else's need feels emotionally present?",
    hint: "This is about how quickly their emotional presence changes your internal ranking.",
    label: "Difficulty prioritizing your need",
    minLabel: "Very easy",
    maxLabel: "Very difficult",
  },
  {
    id: "accommodation-situations",
    step: 3,
    kind: "multi-select",
    field: "accommodationSituations",
    eyebrow: "Signal 03 · social pressure contexts",
    question: "Which kinds of situations pull you toward over-accommodation most often?",
    hint: "Choose up to four. These create the pressure profile behind the result.",
    limit: 4,
    options: accommodationSituationOptions,
  },
  {
    id: "inner-shift",
    step: 4,
    kind: "visual-choice",
    field: "innerShift",
    eyebrow: "Signal 04 · visible inner shift",
    question: "Which visual feels closest to your usual inner shift in these moments?",
    hint: "Choose the pattern that matches the drift, not the one that sounds the most reasonable.",
    options: innerShiftOptions,
  },
  {
    id: "yes-before-check",
    step: 5,
    kind: "segmented",
    field: "yesBeforeCheck",
    eyebrow: "Signal 05 · early yes",
    question: "How often do you say yes before you fully check whether you want to?",
    hint: "This catches automatic accommodation before later reconsideration arrives.",
    options: yesFrequencyOptions,
  },
  {
    id: "pleasing-drivers",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Signal 06 · what drives the yes",
    question: "What usually drives the yes most strongly?",
    hint: "Rank the forces from most to least influential. Drag on desktop or use move buttons anywhere.",
    items: pleasingDriverItems,
  },
  {
    id: "after-effect",
    step: 7,
    kind: "scenario-choice",
    field: "afterEffect",
    eyebrow: "Signal 07 · later cost",
    question: "When you do over-accommodate, what tends to happen later?",
    hint: "The later effect often tells you more about the real cost than the socially smooth moment does.",
    options: afterEffectOptions,
  },
  {
    id: "notice-no",
    step: 8,
    kind: "segmented",
    field: "noticeNo",
    eyebrow: "Signal 08 · noticing the no",
    question: "How easy is it for you to notice your own no in real time?",
    hint: "This is less about courage and more about whether the signal remains readable before the answer is already moving outward.",
    options: noticeNoOptions,
  },
  {
    id: "disappointment-influence",
    step: 9,
    kind: "slider",
    field: "disappointmentInfluence",
    eyebrow: "Signal 09 · disappointment pull",
    question: "How much does another person's disappointment influence your decision once you feel it?",
    hint: "This slider captures how strongly their visible feeling changes your internal ranking.",
    label: "Influence of their disappointment",
    minLabel: "Barely changes it",
    maxLabel: "Changes it a lot",
  },
  {
    id: "social-position",
    step: 10,
    kind: "scenario-choice",
    field: "socialPosition",
    eyebrow: "Signal 10 · social softening",
    question: "Which statement feels most familiar?",
    hint: "Choose the option that describes your real interaction pattern, not only what happens on your most intense days.",
    options: socialPositionOptions,
  },
  {
    id: "overexplaining",
    step: 11,
    kind: "segmented",
    field: "overexplaining",
    eyebrow: "Signal 11 · cushioning the message",
    question: "How often do you overexplain, cushion, or soften what you really mean?",
    hint: "This often rises when directness starts feeling more dangerous than the later cost of self-override.",
    options: overexplainingOptions,
  },
  {
    id: "response-flow",
    step: 12,
    kind: "visual-choice",
    field: "responseFlow",
    eyebrow: "Signal 12 · response flow",
    question: "Choose the response flow that feels most like your pattern",
    hint: "Pick the sequence that feels most familiar from the inside, not the one that looks most socially acceptable.",
    options: responseFlowOptions,
  },
  {
    id: "hidden-costs",
    step: 13,
    kind: "triple-slider",
    eyebrow: "Signal 13 · hidden cost load",
    question: "How much do these get affected when you people-please?",
    hint: "This turns the result from a social read into a cost profile: what happens in you after the yes.",
    fields: [
      { key: "energyDrain", label: "Energy drain", minLabel: "Low", maxLabel: "High" },
      { key: "resentmentBuildup", label: "Resentment buildup", minLabel: "Low", maxLabel: "High" },
      { key: "selfRespectDrop", label: "Self-respect drop", minLabel: "Low", maxLabel: "High" },
    ],
  },
  {
    id: "weak-zone",
    step: 14,
    kind: "visual-choice",
    field: "weakZone",
    eyebrow: "Signal 14 · weak-zone context",
    question: "Where does your self-signal weaken most?",
    hint: "Choose the context where self-protection is most likely to soften, disappear, or arrive too late.",
    options: weakZoneOptions,
    columns: 3,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final self-read",
    question: "Which statement feels closest to your current pattern?",
    hint: "This final read helps the tool compare your self-description with the pattern gathered across the earlier signals.",
    options: finalPatternOptions,
  },
];

export const relatedPeoplePleasingTools: RelatedPleasingTool[] = [
  {
    title: "Boundary Strength Scanner",
    description: "See whether your limit becomes too flexible, too delayed, or too unclear once pressure enters.",
    category: "Boundaries & People-Pleasing",
    minutes: "6 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Attachment Pattern Spotter",
    description: "Read how closeness, reassurance, and withdrawal patterns may be shaping what feels hard to protect.",
    category: "Relationships & Attachment",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "attachment-pattern-spotter", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Resentment Buildup Tracker",
    description: "Trace where quiet accommodation is turning into later irritation, distance, or emotional numbness.",
    category: "Boundaries & People-Pleasing",
    minutes: "5 min",
    icon: "trend",
    href: buildToolHref({ slug: "resentment-buildup-tracker", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Confidence Reset Audit",
    description: "Check whether self-doubt or impression management is making your own signal easier to override.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "signal",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
];

export const peoplePleasingFaqItems: FaqItem[] = [
  {
    question: "What does a people-pleasing score actually mean?",
    answer:
      "It is a directional read of how easily your own signal gets outranked by approval pressure, guilt, or emotional responsibility in social moments. It describes a pattern, not a diagnosis.",
  },
  {
    question: "Is people-pleasing the same as kindness?",
    answer:
      "No. Kindness can include choice, steadiness, and room for your own limits. People-pleasing usually involves self-override, where care for the other person starts displacing clear care for your own signal.",
  },
  {
    question: "Why do I notice the cost later instead of in the moment?",
    answer:
      "Because the social part of the interaction may move faster than your internal check. The moment rewards smoothing, so the cost often becomes visible only after the pressure has passed and your own system has more room to register it.",
  },
  {
    question: "Why does guilt make my no disappear?",
    answer:
      "Guilt can rapidly change the internal ranking. Instead of asking what is true for you, the system starts asking what will reduce discomfort, protect the relationship, or keep you from feeling like the bad one.",
  },
  {
    question: "Can people-pleasing happen only in certain relationships?",
    answer:
      "Yes. Many people are fairly steady in some settings and much softer in others. Family roles, romance, work dynamics, and emotionally intense people can all activate different levels of self-override.",
  },
  {
    question: "Why do I feel resentful even when I agreed?",
    answer:
      "Because agreement and consent are not always the same thing. You may have complied socially while a quieter part of you was never fully on board, so resentment becomes the delayed signal of that override.",
  },
  {
    question: "Is this the same as weak boundaries?",
    answer:
      "They overlap, but they are not identical. Boundary strength is about the clarity and protection of limits. This tool is more specifically about what happens before the limit is even fully consulted - especially approval pressure, guilt, and self-smoothing.",
  },
  {
    question: "Why do I overexplain when I try to say no?",
    answer:
      "Overexplaining often appears when your system is trying to soften the impact of your limit, manage the other person's reaction, or prove that your no is reasonable enough to be allowed.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Every four to eight weeks is usually enough, or sooner if a specific relationship, job context, or family dynamic is changing quickly. The most useful comparison is whether you are noticing your own signal earlier and paying less later.",
  },
  {
    question: "What should I do if I keep overriding myself automatically?",
    answer:
      "Start smaller than a perfect no. Slow the first response, name the pressure driver, and practice one clearer sentence before problem-solving the other person's feeling. The first win is usually catching the override earlier, not becoming instantly unshakeable.",
  },
];

export const peoplePleasingStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "The yes can look small from the outside and still cost a lot inside.",
  quote:
    "This can happen in a moment that looks small from the outside. Saying yes feels easier than disappointing someone, so the person goes along, sounds fine, and keeps the interaction smooth. Later the real cost shows up as drain, irritation, or the strange feeling of being a little less visible to themselves. The agreement happened quickly. The self-loss arrived later.",
  takeaway:
    "That is the pattern this tool is built to make visible: the moment where self-protection gets outranked before the cost is fully conscious, then returns later as drain, resentment, or distance from your own signal.",
  toneLabel: "Common lived pattern",
  accent: "#FDA4AF",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What people-pleasing actually is",
    paragraphs: [
      "People-pleasing is not the same thing as generosity, warmth, or simply being thoughtful. At its core, it is a pattern in which self-protection gets outranked by approval pressure, guilt, responsibility, or the urge to keep the social moment smooth. That means the real question is not whether you care about other people. It is whether your own signal can remain available while you care about them. When it cannot, accommodation starts happening faster than consent.",
      "This matters because people-pleasing often looks polite on the outside. The interaction may stay calm. The other person may feel supported. Nothing dramatic has to happen. Yet internally, the process can be expensive. A person may feel the strain only later, once the urgency fades and their own system has enough room to notice what was overridden. That delay is one reason the pattern is so easy to underestimate. The social moment may be rewarded immediately while the private cost arrives in a slower, quieter way.",
      "A useful way to define people-pleasing is this: it is care that has started negotiating against self-trust. The pattern is not only about saying yes. It includes softening, cushioning, overexplaining, anticipating another person's disappointment, or monitoring their reaction so closely that your own internal answer becomes secondary. The more automatic that process becomes, the harder it is to tell the difference between genuine willingness and socially efficient self-override.",
    ],
  },
  {
    title: "Why it often starts before the person fully notices it",
    paragraphs: [
      "One of the most revealing parts of this pattern is how early it begins. Many people assume people-pleasing starts at the moment they say yes. In practice, it often starts earlier: in the first flash of pressure, the quick concern about how the other person will feel, the subtle tightening around being perceived as difficult, or the rapid shift from 'what do I want?' to 'what will keep this interaction okay?' By the time the verbal answer comes out, the override may already be halfway complete.",
      "That early shift is usually fast because it is social, not purely logical. The nervous system reads urgency, disappointment, frustration, vulnerability, or dependence and immediately starts calculating how to reduce friction. For some people, the calculation is not fully conscious. They simply notice that they softened, agreed, or took responsibility before they had time to check their own position. Later they call it weakness or confusion. Often it is actually speed. The social pressure outran the self-check.",
      "This is also why people can seem articulate about boundaries in theory and still struggle in real time. The difficult part is not always knowing the principle. It is keeping the self-signal accessible inside a live relational moment. If the other person's emotion begins to feel urgent enough, the principle can disappear behind the impulse to smooth, help, rescue, reassure, or avoid disappointment. That does not mean the person has no values. It means the social override is happening faster than the values are being consulted.",
    ],
  },
  {
    title: "How self-protection gets overridden in social moments",
    paragraphs: [
      "Self-protection usually does not disappear all at once. It gets outranked. The person may feel a flicker of hesitation, a mild internal no, or a sense of cost. Then another signal arrives that feels more socially urgent: guilt, fear of being selfish, concern about tone, worry about conflict, the desire to be helpful, or the emotional reality of the other person's need. The system starts prioritizing social regulation over internal accuracy. The answer becomes less about truth and more about impact.",
      "This is where people-pleasing becomes more subtle than simple compliance. A person may not explicitly think, 'I am erasing myself now.' They may think, 'It is fine,' 'It is not a big deal,' 'I can manage,' or 'I just do not want this to become a thing.' Those thoughts often function as bridges between self-signal and override. They make the adjustment feel reasonable enough to continue while lowering the chance that the real cost gets named in time.",
      "Over time, repeated overrides can shape identity. The person may start trusting their later resentment more than their earlier hesitation because the hesitation has become so easy to dismiss. Or they may become known as easy, calm, endlessly supportive, or low-maintenance while privately carrying more depletion and irritation than people around them realize. That gap matters. The more often self-protection is outranked without recognition, the more likely it is that care begins to feel expensive rather than chosen.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "approvalPressure" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Approval Pressure measures how strongly another person's reaction, disappointment, or neediness starts shaping your answer. When this score rises, the moment becomes less about what is true for you and more about keeping the interaction emotionally safe.",
      "A higher score here does not mean you are shallow or desperate for approval. It usually means your social radar is very fast, and that speed is outranking your internal check more often than you realize.",
    ],
  },
  {
    key: "selfSignalClarity" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Self-Signal Clarity looks at how available your own internal no, preference, or limit remains once pressure is in the room. This is not only about assertiveness. It is about whether the signal stays readable long enough to guide the response.",
      "When clarity is low, people often describe themselves as confused, indecisive, or too nice. Often the deeper issue is that their own signal is simply getting crowded out before it can fully register.",
    ],
  },
  {
    key: "conflictGuiltOverride" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Conflict / Guilt Override captures how much guilt, urgency, or fear of tension weakens self-protection. This is the dimension that makes a person's limit feel morally questionable once another person's need becomes visible.",
      "It matters because many people do not change their answer due to argument. They change it due to emotional pressure. The room starts feeling harder to tolerate than the later cost of the override.",
    ],
  },
  {
    key: "resentmentRisk" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Resentment Risk measures how likely the pattern is to turn into later drain, irritation, distance, or a drop in self-respect. This is the part that explains why someone can sound agreeable and still feel quietly burdened afterward.",
      "A higher resentment score does not mean you are secretly hostile. It usually means your system is signaling that care has started costing more than the interaction admitted in the moment.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Guilt that outruns consent",
    body:
      "When guilt arrives faster than self-checking, the internal question changes from 'do I want to?' to 'am I allowed not to?' That shift makes yes feel morally safer than honesty.",
  },
  {
    title: "Urgency that compresses reflection",
    body:
      "Urgent requests often create false scarcity. The person feels they must answer now, which leaves less room to feel the real cost before the response is already moving outward.",
  },
  {
    title: "Emotional responsibility for the other person",
    body:
      "If another person's disappointment, stress, or dysregulation starts feeling like something you must manage, your own need can become secondary very quickly.",
  },
  {
    title: "Fear of disappointing or seeming difficult",
    body:
      "The desire to stay good, easy, caring, or emotionally safe can make directness feel riskier than over-accommodation, especially in relationships with strong expectations.",
  },
  {
    title: "Overidentifying with others' comfort",
    body:
      "Care becomes costly when another person's ease starts mattering more than your own truth. The interaction may stay smoother, but the system often pays for that smoothness later.",
  },
  {
    title: "Conflict avoidance dressed as flexibility",
    body:
      "Sometimes people-pleasing hides behind language like being adaptable, understanding, or low-maintenance. The issue is not flexibility itself. It is when flexibility always bends in one direction.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Notice the body signal sooner",
    body:
      "For many people, the first accurate signal is physical: tightening, dropping, heaviness, or a subtle recoil. Catching that early often works better than waiting for a perfectly worded boundary sentence to appear.",
  },
  {
    title: "Check desire before responding",
    body:
      "Even a short pause changes the pattern. The goal is not to become cold. It is to ask what is actually true for you before the social moment has fully answered on your behalf.",
  },
  {
    title: "Delay the automatic yes",
    body:
      "A small buffer such as 'let me check' or 'I want to think about that' protects the signal from being overridden by immediacy, urgency, or the other person's visible emotion.",
  },
  {
    title: "Use shorter, clearer language",
    body:
      "Overexplaining often keeps the approval loop alive. Shorter answers reduce the amount of emotional negotiation you are trying to do after already noticing the limit.",
  },
  {
    title: "Tolerate some disappointment",
    body:
      "A healthier pattern usually requires learning that another person's discomfort is not automatically proof that your response was wrong. Discomfort is often part of honest relating.",
  },
  {
    title: "Separate care from self-erasure",
    body:
      "Real care does not require disappearing. The goal is not to stop helping. It is to help from a position that still includes you, your limit, and your long-term emotional reality.",
  },
];

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by treating it as a speed problem rather than a character problem. The first change is often not becoming perfectly boundaried. It is noticing the override earlier, especially in the moments where guilt, urgency, or another person's visible emotion begins to narrow your own internal room.",
  "Pick one weak-zone context and one driver instead of trying to fix the entire pattern at once. For example, if family disappointment is the main pull, practice one sentence that buys you time. If overexplaining is the main habit, practice one shorter response that protects your position without proving it to death. Smaller reps usually change the pattern faster than grand declarations do.",
  "Most importantly, measure progress by earlier recognition, not by zero discomfort. If you notice your own no sooner, feel less resentment later, or say yes more deliberately instead of automatically, the system is already becoming more honest and more protective of you.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "People-Pleasing Exit Plan Workbook",
  description:
    "A structured guide for catching self-override earlier, reducing approval pressure, and building responses that protect care without erasing your own signal.",
  buttonLabel: "View Next Step",
};

const initialResponseScores: Record<InitialResponseValue, number> = {
  "clear-limit": 10,
  "quick-hesitation": 34,
  "pressure-to-yes": 64,
  "worry-disappointing": 82,
  "responsible-for-feelings": 94,
};

const innerShiftScores: Record<InnerShiftValue, number> = {
  "stay-centered": 14,
  "soften-quickly": 42,
  "disappear-into-need": 92,
  "yes-before-checking": 86,
  "feel-strain-still-comply": 78,
};

const yesFrequencyScores: Record<YesBeforeCheckValue, number> = {
  never: 10,
  rarely: 28,
  sometimes: 52,
  often: 76,
  "very-often": 92,
};

const afterEffectScores: Record<AfterEffectValue, number> = {
  "adjust-let-go": 18,
  "quietly-drained": 58,
  "resentful-later": 92,
  "pull-back-emotionally": 82,
  "irritated-stay-available": 86,
};

const noticeNoDifficultyScores: Record<NoticeNoValue, number> = {
  "very-easy": 12,
  "mostly-easy": 28,
  mixed: 54,
  difficult: 78,
  "very-difficult": 94,
};

const noticeNoClarityScores: Record<NoticeNoValue, number> = {
  "very-easy": 92,
  "mostly-easy": 76,
  mixed: 50,
  difficult: 26,
  "very-difficult": 10,
};

const socialPositionScores: Record<SocialPositionValue, number> = {
  "know-position-clearly": 18,
  "know-but-soften": 44,
  "monitor-their-reaction": 78,
  "keep-it-smooth-pay-later": 88,
};

const overexplainingScores: Record<OverexplainingValue, number> = {
  rarely: 16,
  sometimes: 40,
  often: 68,
  "very-often": 84,
  "almost-always": 96,
};

const responseFlowScores: Record<ResponseFlowValue, number> = {
  "notice-decide-communicate": 14,
  "pressure-hesitate-soften": 48,
  "monitor-reaction-override": 86,
  "say-yes-feel-drain": 78,
  "say-yes-resentment-builds": 92,
};

const finalPatternScores: Record<FinalPatternValue, number> = {
  "steady-soften-few": 28,
  "override-to-keep-smooth": 62,
  "carry-others-comfort": 74,
  "notice-strain-later": 82,
  "costs-more-than-people-see": 94,
};

const weakZoneSeverity: Record<WeakZoneValue, number> = {
  family: 72,
  "romance-partner": 82,
  work: 66,
  friendship: 54,
  "helping-roles": 86,
  "emotionally-intense-people": 90,
};

const situationSeverity: Record<AccommodationSituationValue, number> = {
  urgency: 70,
  disappointment: 82,
  conflict: 80,
  "family-expectations": 84,
  "partner-needs": 78,
  "work-requests": 62,
  guilt: 88,
  "seen-as-difficult": 76,
  "helping-roles": 74,
  "emotional-intensity": 92,
};

const rankingSeverity: Record<PleasingDriverKey, number> = {
  guilt: 94,
  approval: 84,
  "avoiding-conflict": 82,
  urgency: 66,
  "feeling-responsible": 92,
  "fear-seeming-selfish": 78,
};

const rankingWeights = [1, 0.86, 0.72, 0.58, 0.44, 0.3];

const scoringWeights = {
  initialResponse: 8,
  ownNeedDifficulty: 10,
  accommodationSituations: 8,
  innerShift: 6,
  yesBeforeCheck: 8,
  driverRanking: 10,
  afterEffect: 10,
  noticeNo: 8,
  disappointmentInfluence: 8,
  socialPosition: 6,
  overexplaining: 6,
  responseFlow: 6,
  hiddenCosts: 8,
  weakZone: 4,
  finalPattern: 4,
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
  return peoplePleasingBands.find((band) => score >= band.min && score <= band.max) ?? peoplePleasingBands[0];
}

function getWeakZone(key: WeakZoneValue) {
  return weakZones.find((zone) => zone.key === key) ?? weakZones[0];
}

function getDriver(key: PleasingDriverKey) {
  return pleasingDrivers.find((driver) => driver.key === key) ?? pleasingDrivers[0];
}

function getRankingScore(order: PleasingDriverKey[]) {
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

function getDriverContributions(order: PleasingDriverKey[]) {
  return pleasingDrivers.map((driver, index) => {
    const rankingIndex = order.indexOf(driver.key);
    const rankingWeight =
      rankingIndex === -1 ? 0 : rankingWeights[rankingIndex] ?? rankingWeights[rankingWeights.length - 1];

    return {
      ...driver,
      value: clampScore(rankingSeverity[driver.key] * rankingWeight),
    };
  });
}

function getPatternLabel(
  innerShift: InnerShiftValue | undefined,
  responseFlow: ResponseFlowValue | undefined,
  finalPattern: FinalPatternValue | undefined,
) {
  if (innerShift === "disappear-into-need" || finalPattern === "carry-others-comfort") {
    return overridePatterns.find((pattern) => pattern.key === "responsibility-led-compliance") ?? overridePatterns[0];
  }

  if (responseFlow === "monitor-reaction-override" || socialPositionSuggestsMonitoring(finalPattern)) {
    return overridePatterns.find((pattern) => pattern.key === "reaction-monitoring") ?? overridePatterns[0];
  }

  if (innerShift === "yes-before-checking") {
    return overridePatterns.find((pattern) => pattern.key === "anticipatory-yes") ?? overridePatterns[0];
  }

  if (responseFlow === "say-yes-resentment-builds" || finalPattern === "notice-strain-later") {
    return overridePatterns.find((pattern) => pattern.key === "quiet-resentment-carryover") ?? overridePatterns[0];
  }

  return overridePatterns.find((pattern) => pattern.key === "fast-softening") ?? overridePatterns[0];
}

function socialPositionSuggestsMonitoring(finalPattern: FinalPatternValue | undefined) {
  return finalPattern === "override-to-keep-smooth" || finalPattern === "costs-more-than-people-see";
}

export function getInitialPeoplePleasingAnswers(): PeoplePleasingAnswers {
  return {
    accommodationSituations: [],
    driverRanking: pleasingDriverItems.map((item) => item.key),
    driverRankingConfirmed: false,
  };
}

export function isPeoplePleasingStepComplete(step: PeoplePleasingStep, answers: PeoplePleasingAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers.accommodationSituations.length > 0;
  }

  if (step.kind === "drag-rank") {
    return answers.driverRanking.length === step.items.length && answers.driverRankingConfirmed;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  return Boolean(answers[step.field]);
}

export function calculatePeoplePleasingResult(answers: PeoplePleasingAnswers): PeoplePleasingResult {
  const initialResponse = answers.initialResponse ? initialResponseScores[answers.initialResponse] : undefined;
  const ownNeedDifficulty =
    typeof answers.ownNeedDifficulty === "number" ? clampScore(answers.ownNeedDifficulty) : undefined;
  const situationsScore = answers.accommodationSituations.length
    ? clampScore(
        average(answers.accommodationSituations.map((item) => situationSeverity[item])) * 0.7 +
          (answers.accommodationSituations.length / 4) * 30,
      )
    : undefined;
  const innerShift = answers.innerShift ? innerShiftScores[answers.innerShift] : undefined;
  const yesBeforeCheck = answers.yesBeforeCheck ? yesFrequencyScores[answers.yesBeforeCheck] : undefined;
  const driverRanking = answers.driverRankingConfirmed ? getRankingScore(answers.driverRanking) : undefined;
  const afterEffect = answers.afterEffect ? afterEffectScores[answers.afterEffect] : undefined;
  const noticeNo = answers.noticeNo ? noticeNoDifficultyScores[answers.noticeNo] : undefined;
  const noticeNoClarity = answers.noticeNo ? noticeNoClarityScores[answers.noticeNo] : undefined;
  const disappointmentInfluence =
    typeof answers.disappointmentInfluence === "number" ? clampScore(answers.disappointmentInfluence) : undefined;
  const socialPosition = answers.socialPosition ? socialPositionScores[answers.socialPosition] : undefined;
  const overexplaining = answers.overexplaining ? overexplainingScores[answers.overexplaining] : undefined;
  const responseFlow = answers.responseFlow ? responseFlowScores[answers.responseFlow] : undefined;
  const energyDrain = typeof answers.energyDrain === "number" ? clampScore(answers.energyDrain) : undefined;
  const resentmentBuildup =
    typeof answers.resentmentBuildup === "number" ? clampScore(answers.resentmentBuildup) : undefined;
  const selfRespectDrop =
    typeof answers.selfRespectDrop === "number" ? clampScore(answers.selfRespectDrop) : undefined;
  const hiddenCostAverage =
    typeof energyDrain === "number" &&
    typeof resentmentBuildup === "number" &&
    typeof selfRespectDrop === "number"
      ? clampScore((energyDrain + resentmentBuildup + selfRespectDrop) / 3)
      : undefined;
  const weakZoneScore = answers.weakZone ? weakZoneSeverity[answers.weakZone] : undefined;
  const finalPattern = answers.finalPattern ? finalPatternScores[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: initialResponse, weight: scoringWeights.initialResponse },
    { value: ownNeedDifficulty, weight: scoringWeights.ownNeedDifficulty },
    { value: situationsScore, weight: scoringWeights.accommodationSituations },
    { value: innerShift, weight: scoringWeights.innerShift },
    { value: yesBeforeCheck, weight: scoringWeights.yesBeforeCheck },
    { value: driverRanking, weight: scoringWeights.driverRanking },
    { value: afterEffect, weight: scoringWeights.afterEffect },
    { value: noticeNo, weight: scoringWeights.noticeNo },
    { value: disappointmentInfluence, weight: scoringWeights.disappointmentInfluence },
    { value: socialPosition, weight: scoringWeights.socialPosition },
    { value: overexplaining, weight: scoringWeights.overexplaining },
    { value: responseFlow, weight: scoringWeights.responseFlow },
    { value: hiddenCostAverage, weight: scoringWeights.hiddenCosts },
    { value: weakZoneScore, weight: scoringWeights.weakZone },
    { value: finalPattern, weight: scoringWeights.finalPattern },
  ];

  const answeredWeight = scoredEntries.reduce((sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0), 0);
  const weightedTotal = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );
  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(score);
  const completionRatio = answeredWeight / 100;

  const driverTotals = getDriverContributions(answers.driverRanking).sort((left, right) => right.value - left.value);
  const primaryDriver = getDriver(driverTotals[0]?.key ?? "guilt");

  const mainWeakZone = getWeakZone(answers.weakZone ?? "work");
  const dominantPattern = getPatternLabel(answers.innerShift, answers.responseFlow, answers.finalPattern);

  const selfSignalClarity = weightedAverage([
    { value: initialResponse ? clampScore(100 - initialResponse) : undefined, weight: 0.18 },
    { value: typeof ownNeedDifficulty === "number" ? clampScore(100 - ownNeedDifficulty) : undefined, weight: 0.22 },
    { value: noticeNoClarity, weight: 0.24 },
    { value: typeof yesBeforeCheck === "number" ? clampScore(100 - yesBeforeCheck) : undefined, weight: 0.14 },
    { value: typeof socialPosition === "number" ? clampScore(100 - socialPosition) : undefined, weight: 0.12 },
    { value: typeof responseFlow === "number" ? clampScore(100 - responseFlow) : undefined, weight: 0.1 },
  ]);

  const dimensions: Record<PeoplePleasingDimensionKey, number> = {
    approvalPressure: weightedAverage([
      { value: initialResponse, weight: 0.16 },
      { value: ownNeedDifficulty, weight: 0.16 },
      { value: yesBeforeCheck, weight: 0.16 },
      { value: disappointmentInfluence, weight: 0.2 },
      { value: socialPosition, weight: 0.14 },
      { value: driverTotals.find((item) => item.key === "approval")?.value, weight: 0.1 },
      { value: driverTotals.find((item) => item.key === "fear-seeming-selfish")?.value, weight: 0.08 },
    ]),
    selfSignalClarity,
    conflictGuiltOverride: weightedAverage([
      { value: noticeNo, weight: 0.12 },
      { value: yesBeforeCheck, weight: 0.12 },
      { value: afterEffect, weight: 0.12 },
      { value: driverTotals.find((item) => item.key === "guilt")?.value, weight: 0.18 },
      { value: driverTotals.find((item) => item.key === "avoiding-conflict")?.value, weight: 0.16 },
      { value: driverTotals.find((item) => item.key === "feeling-responsible")?.value, weight: 0.18 },
      { value: innerShift, weight: 0.12 },
    ]),
    resentmentRisk: weightedAverage([
      { value: afterEffect, weight: 0.24 },
      { value: resentmentBuildup, weight: 0.24 },
      { value: selfRespectDrop, weight: 0.18 },
      { value: energyDrain, weight: 0.14 },
      {
        value:
          answers.afterEffect === "pull-back-emotionally" || answers.afterEffect === "irritated-stay-available"
            ? 82
            : answers.afterEffect === "resentful-later"
              ? 92
              : answers.afterEffect === "quietly-drained"
                ? 56
                : 24,
        weight: 0.1,
      },
      { value: finalPattern, weight: 0.1 },
    ]),
  };

  const selfOverrideTendency = weightedAverage([
    { value: clampScore(100 - dimensions.selfSignalClarity), weight: 0.48 },
    { value: dimensions.conflictGuiltOverride, weight: 0.3 },
    { value: dimensions.approvalPressure, weight: 0.22 },
  ]);

  const hiddenCosts: HiddenCostMetric[] = hiddenCostDefinitions
    .map((definition) => {
      const derivedValue =
        definition.key === "energy-drain"
          ? energyDrain ?? 38
          : definition.key === "resentment-buildup"
            ? resentmentBuildup ?? 34
            : definition.key === "self-respect-drop"
              ? selfRespectDrop ?? 30
              : clampScore(
                  weightedAverage([
                    {
                      value:
                        answers.afterEffect === "pull-back-emotionally"
                          ? 92
                          : answers.afterEffect === "irritated-stay-available"
                            ? 78
                            : answers.afterEffect === "resentful-later"
                              ? 64
                              : 28,
                      weight: 0.58,
                    },
                    { value: selfRespectDrop, weight: 0.2 },
                    { value: resentmentBuildup, weight: 0.22 },
                  ]),
                );

      return {
        ...definition,
        value: clampScore(derivedValue),
      };
    })
    .sort((left, right) => right.value - left.value);

  const weakZoneScores = weakZones
    .map((zone) => {
      const selectedBoost = answers.weakZone === zone.key ? 28 : 0;
      const situationBoost =
        zone.key === "family"
          ? answers.accommodationSituations.includes("family-expectations")
            ? 22
            : 0
          : zone.key === "romance-partner"
            ? answers.accommodationSituations.includes("partner-needs")
              ? 20
              : 0
            : zone.key === "work"
              ? answers.accommodationSituations.includes("work-requests")
                ? 18
                : 0
              : zone.key === "helping-roles"
                ? answers.accommodationSituations.includes("helping-roles")
                  ? 22
                  : 0
                : zone.key === "emotionally-intense-people"
                  ? answers.accommodationSituations.includes("emotional-intensity")
                    ? 24
                    : 0
                  : answers.accommodationSituations.includes("disappointment")
                    ? 12
                    : 0;

      return {
        ...zone,
        value: clampScore(weakZoneSeverity[zone.key] * 0.52 + selectedBoost + situationBoost),
      };
    })
    .sort((left, right) => right.value - left.value);

  const hiddenCost = hiddenCosts[0];
  const selfPriority = clampScore(dimensions.selfSignalClarity);
  const otherPriority = clampScore(weightedAverage([
    { value: dimensions.approvalPressure, weight: 0.58 },
    { value: dimensions.conflictGuiltOverride, weight: 0.42 },
  ]));

  const driftStages: DriftStage[] = [
    {
      key: "signal",
      label: "Internal signal",
      shortLabel: "Signal",
      value: selfPriority,
      accent: "#6EE7B7",
      note: "How available your own real answer stays at the beginning of the interaction.",
    },
    {
      key: "pressure",
      label: "Social pressure",
      shortLabel: "Pressure",
      value: dimensions.approvalPressure,
      accent: "#FDA4AF",
      note: "How quickly another person's feeling or likely reaction starts influencing the decision.",
    },
    {
      key: "override",
      label: "Self-override",
      shortLabel: "Override",
      value: selfOverrideTendency,
      accent: "#FCD34D",
      note: "The point where smoothing, guilt, or urgency starts outranking your own signal.",
    },
    {
      key: "cost",
      label: "Later cost",
      shortLabel: "Cost",
      value: clampScore(weightedAverage([
        { value: hiddenCosts[0]?.value, weight: 0.35 },
        { value: hiddenCosts[1]?.value, weight: 0.25 },
        { value: dimensions.resentmentRisk, weight: 0.4 },
      ])),
      accent: "#C4B5FD",
      note: "The later cost in energy, resentment, self-respect, or emotional distance.",
    },
  ];

  const approvalLead = driverTotals[0]?.label.toLowerCase() ?? "approval pressure";
  const zoneLead = weakZoneScores[0]?.label.toLowerCase() ?? mainWeakZone.label.toLowerCase();
  const signalLabel = `Your pattern suggests that self-protection weakens less from confusion and more from how quickly ${approvalLead} begins to outrank your own internal signal, especially around ${zoneLead}.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} Right now, ${primaryDriver.label.toLowerCase()} appears to be the strongest pleasing driver, while ${dominantPattern.label.toLowerCase()} is the dominant override pattern.`;
  const hiddenCostInsight = `${band.costLead} In this result, the hidden cost is most likely building through ${hiddenCost.label.toLowerCase()} and around ${mainWeakZone.label.toLowerCase()}.`;

  return {
    score,
    band,
    completionRatio,
    isComplete: completionRatio === 1 && Boolean(answers.finalPattern),
    dimensions,
    primaryDriver,
    mainWeakZone,
    dominantPattern,
    hiddenCost,
    weakZoneScores,
    hiddenCosts,
    selfPriority,
    otherPriority,
    approvalMeter: dimensions.approvalPressure,
    resentmentLikelihood: dimensions.resentmentRisk,
    driftStages,
    signalLabel,
    interpretation,
    standout,
    hiddenCostInsight,
  };
}

export const heroPreviewResult = calculatePeoplePleasingResult({
  ...getInitialPeoplePleasingAnswers(),
  initialResponse: "worry-disappointing",
  ownNeedDifficulty: 72,
  accommodationSituations: ["guilt", "family-expectations", "emotional-intensity", "partner-needs"],
  innerShift: "feel-strain-still-comply",
  yesBeforeCheck: "often",
  driverRanking: ["guilt", "feeling-responsible", "approval", "avoiding-conflict", "fear-seeming-selfish", "urgency"],
  driverRankingConfirmed: true,
  afterEffect: "resentful-later",
  noticeNo: "difficult",
  disappointmentInfluence: 78,
  socialPosition: "keep-it-smooth-pay-later",
  overexplaining: "very-often",
  responseFlow: "say-yes-resentment-builds",
  energyDrain: 76,
  resentmentBuildup: 82,
  selfRespectDrop: 68,
  weakZone: "family",
  finalPattern: "costs-more-than-people-see",
});
