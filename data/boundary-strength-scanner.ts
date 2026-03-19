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
  eyebrow: "BOUNDARY CLARITY TOOL",
  title: "Boundary Strength Scanner",
  description:
    "See where guilt, urgency, emotional pressure, or over-responsibility make your limits go soft. This tool maps how boundary strain happens in real moments, not just in theory.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "signal" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const peoplePleasingDimensions: PeoplePleasingDimension[] = [
  {
    key: "approvalPressure",
    label: "Boundary Pressure",
    description: "How strongly another person's reaction, urgency, or need starts pressing against your limit.",
    icon: "insight",
    accent: "#FB7185",
  },
  {
    key: "selfSignalClarity",
    label: "Limit Clarity",
    description: "How readable your real yes, no, or not-now remains while the interaction is still happening.",
    icon: "signal",
    accent: "#6EE7B7",
  },
  {
    key: "conflictGuiltOverride",
    label: "Guilt / Conflict Override",
    description: "How much guilt, fear of tension, or over-responsibility softens your limit once pressure appears.",
    icon: "shield",
    accent: "#FCD34D",
  },
  {
    key: "resentmentRisk",
    label: "After-Cost Load",
    description: "How likely the pattern is to leave you drained, resentful, self-doubting, or emotionally distant afterward.",
    icon: "trend",
    accent: "#C4B5FD",
  },
];

export const weakZones: WeakZone[] = [
  {
    key: "family",
    label: "Family",
    description: "History, loyalty, and old roles can make your limit feel negotiable before the conversation has really started.",
    accent: "#93C5FD",
  },
  {
    key: "romance-partner",
    label: "Romance / Partner",
    description: "Closeness and fear of distance can make it tempting to protect connection first and your boundary second.",
    accent: "#FB7185",
  },
  {
    key: "work",
    label: "Work",
    description: "Competence pressure, responsiveness, and power dynamics can make a clean limit feel professionally risky.",
    accent: "#67E8F9",
  },
  {
    key: "friendship",
    label: "Friendship",
    description: "You may keep the tone easy, flexible, or low-drama even when your own room is shrinking.",
    accent: "#C4B5FD",
  },
  {
    key: "helping-roles",
    label: "Caretaking Roles",
    description: "Helping identities can make limit-setting feel like failing the role instead of protecting your capacity.",
    accent: "#6EE7B7",
  },
  {
    key: "emotionally-intense-people",
    label: "Emotionally Intense People",
    description: "Another person's intensity can collapse your pause and make your limit feel less important than the moment.",
    accent: "#FCD34D",
  },
];

export const pleasingDrivers: PleasingDriver[] = [
  {
    key: "guilt",
    label: "Guilt",
    description: "The sense that protecting your limit instantly becomes something you now have to justify or repair.",
    accent: "#FCD34D",
  },
  {
    key: "approval",
    label: "Approval / Smoothness",
    description: "The urge to stay easy, likable, reasonable, or low-friction even when the real answer is less convenient.",
    accent: "#FB7185",
  },
  {
    key: "avoiding-conflict",
    label: "Avoiding conflict",
    description: "The reflex to prevent tension or awkwardness before you have fully held your actual position.",
    accent: "#C4B5FD",
  },
  {
    key: "urgency",
    label: "Urgency",
    description: "The pressure of the moment itself making it feel easier to bend now and sort out the cost later.",
    accent: "#67E8F9",
  },
  {
    key: "feeling-responsible",
    label: "Over-responsibility",
    description: "The sense that another person's stress, disappointment, or dysregulation has quietly become yours to manage.",
    accent: "#93C5FD",
  },
  {
    key: "fear-seeming-selfish",
    label: "Fear of seeming harsh",
    description: "The reflex to soften your limit because directness feels harsher, colder, or more selfish than you want to be.",
    accent: "#6EE7B7",
  },
];

export const peoplePleasingBands: PeoplePleasingBand[] = [
  {
    key: "clear-self-signal",
    min: 0,
    max: 24,
    title: "Clear Boundary Core",
    descriptor: "Your boundaries appear fairly readable and usable even when requests, disappointment, or urgency become emotionally present.",
    summary:
      "There is still flexibility and care in the pattern, but the limit usually stays available enough to guide the response instead of disappearing behind the moment.",
    interpretation:
      "That does not mean every limit is easy. It means pressure does not appear to outrank self-protection by default, so flexibility stays more deliberate than automatic.",
    standoutLead:
      "The strongest signal is not rigidity. It is steadiness: your system seems more able to stay connected to your own limit while still staying relational.",
    costLead:
      "When hidden cost shows up here, it is usually contextual instead of chronic, tied to a few specific relationships rather than to your general boundary pattern.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.26)",
  },
  {
    key: "selective-softening",
    min: 25,
    max: 44,
    title: "Selective Boundary Drift",
    descriptor: "Your limits are present, but certain conditions make them softer, slower, or easier to negotiate away.",
    summary:
      "This often looks like being clear in many situations, then becoming more flexible around specific people, tones, or emotional pressures.",
    interpretation:
      "The important pattern here is selectivity. The drift is not constant, but it becomes easier to soften the limit when guilt, urgency, disappointment, or relational tension enters the room.",
    standoutLead:
      "The clearest signal is conditional softening. Your system often knows its limit, but specific cues make it harder to hold that limit cleanly.",
    costLead:
      "The hidden cost usually appears after the interaction, when the social moment is over and your own strain becomes easier to feel than it was inside the request itself.",
    gradientFrom: "#93C5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(147, 197, 253, 0.24)",
  },
  {
    key: "approval-led-drift",
    min: 45,
    max: 64,
    title: "Pressure-Softened Limits",
    descriptor: "Other people's reactions, needs, or discomfort start shaping the moment faster than your own boundary can stay fully visible.",
    summary:
      "At this level, boundary strain often feels subtle. You may not experience it as dramatic collapse in the moment, but the later cost is becoming more repeatable.",
    interpretation:
      "The issue here is less confusion about values and more the speed of pressure. Guilt, urgency, approval, or the desire to keep things smooth begins shaping the response before you have fully checked your own room.",
    standoutLead:
      "The strongest signal is ranking drift: the other person's likely reaction appears to rise in priority faster than your boundary can stay in first position.",
    costLead:
      "The hidden cost at this stage often builds quietly as drain, resentment, overexplaining, or the delayed realization that you never fully had room for the yes you gave.",
    gradientFrom: "#FB7185",
    gradientTo: "#FCD34D",
    glow: "rgba(251, 113, 133, 0.26)",
  },
  {
    key: "high-self-override-pattern",
    min: 65,
    max: 84,
    title: "High Boundary Leakage",
    descriptor: "Your pattern suggests that self-protection weakens quickly once guilt, urgency, disappointment, or over-responsibility enters the interaction.",
    summary:
      "This often feels like staying open too long, cushioning too much, or remaining available past the point where your own limit was already warning you.",
    interpretation:
      "The pattern here is not about being unkind or weak. It is about how reliably your own boundary becomes secondary under pressure, which makes later resentment, depletion, or self-doubt more likely.",
    standoutLead:
      "The clearest signal is speed. Pressure appears to move faster than boundary checking, so the softening happens before the cost is fully visible to you.",
    costLead:
      "The hidden cost often builds in two stages: immediate smoothing on the outside, then drain, irritation, or loss of self-trust on the inside once the interaction has passed.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.24)",
  },
  {
    key: "quiet-self-erasure-risk",
    min: 85,
    max: 100,
    title: "Boundary Exhaustion Risk",
    descriptor: "The current pattern points to your boundary signal becoming consistently quieter than pressure, responsibility, and the desire to keep the moment manageable.",
    summary:
      "This does not mean you do not know your limits. It means the override is becoming so automatic that your no, discomfort, or capacity line is being felt later than the moment itself.",
    interpretation:
      "At this level, boundary strain often looks small from the outside and expensive from the inside. The system adapts quickly to the other person while leaving you to absorb the emotional cost afterward.",
    standoutLead:
      "The strongest signal is invisibility of cost. The pattern is not only that you bend, but that your own strain becomes easier to notice after the decision than during it.",
    costLead:
      "The hidden cost here is usually cumulative: energy loss, resentment, emotional withdrawal, and a quieter relationship to your own boundary over time.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.28)",
  },
];

const overridePatterns: OverridePattern[] = [
  {
    key: "fast-softening",
    label: "Fast softening",
    summary: "You usually know your limit, but it softens quickly once the relational tone becomes emotionally loaded.",
  },
  {
    key: "reaction-monitoring",
    label: "Reaction monitoring",
    summary: "You start tracking their reaction more closely than your own boundary, which shifts the decision toward keeping the interaction smooth.",
  },
  {
    key: "anticipatory-yes",
    label: "Premature availability",
    summary: "The system moves toward openness or compliance before boundary checking has had enough room to happen.",
  },
  {
    key: "quiet-resentment-carryover",
    label: "Quiet after-cost carryover",
    summary: "You stay flexible in the moment, then pay later through drain, irritation, or subtle withdrawal.",
  },
  {
    key: "responsibility-led-compliance",
    label: "Responsibility-led bending",
    summary: "Another person's feeling becomes something you feel pressed to manage, even when it costs you more than it should.",
  },
];

const hiddenCostDefinitions: Array<Omit<HiddenCostMetric, "value">> = [
  {
    key: "energy-drain",
    label: "Energy drain",
    description: "The amount of invisible depletion the pattern creates after the moment is over and your system catches up.",
    accent: "#67E8F9",
  },
  {
    key: "resentment-buildup",
    label: "Resentment buildup",
    description: "The quiet accumulation of irritation or inner protest when bending keeps outranking genuine room.",
    accent: "#FB7185",
  },
  {
    key: "self-respect-drop",
    label: "Self-trust drop",
    description: "The feeling of becoming less solid with yourself after overriding what you already knew about your limit.",
    accent: "#C4B5FD",
  },
  {
    key: "emotional-withdrawal",
    label: "Emotional withdrawal",
    description: "The later distance that can appear when staying open repeatedly becomes a substitute for honest availability.",
    accent: "#FCD34D",
  },
];

const initialResponseOptions: PleasingChoiceOption[] = [
  { value: "clear-limit", marker: "A", label: "A clear sense of my limit" },
  { value: "quick-hesitation", marker: "B", label: "A quick hesitation and scan of the room" },
  { value: "pressure-to-yes", marker: "C", label: "Pressure to stay open or say yes" },
  { value: "worry-disappointing", marker: "D", label: "Worry about letting them down" },
  { value: "responsible-for-feelings", marker: "E", label: "Responsibility for managing their reaction" },
];

const accommodationSituationOptions: PleasingChoiceOption[] = [
  { value: "urgency", label: "Urgency" },
  { value: "disappointment", label: "Visible disappointment" },
  { value: "conflict", label: "Conflict" },
  { value: "family-expectations", label: "Family expectations" },
  { value: "partner-needs", label: "Partner needs" },
  { value: "work-requests", label: "Work requests" },
  { value: "guilt", label: "Guilt" },
  { value: "seen-as-difficult", label: "Being seen as difficult" },
  { value: "helping-roles", label: "Caretaking roles" },
  { value: "emotional-intensity", label: "Emotional intensity" },
];

const innerShiftOptions: PleasingChoiceOption[] = [
  {
    value: "stay-centered",
    marker: "A",
    label: "I stay clear and decide cleanly",
    description: "Your limit stays available while you consider the request.",
  },
  {
    value: "soften-quickly",
    marker: "B",
    label: "I soften the limit quickly",
    description: "The social tone shifts your position before the decision is fully yours.",
  },
  {
    value: "disappear-into-need",
    marker: "C",
    label: "I disappear into their need",
    description: "Their urgency or feeling becomes the main thing in the room faster than your limit can stay centered.",
  },
  {
    value: "yes-before-checking",
    marker: "D",
    label: "I stay open before checking myself",
    description: "Availability moves faster than reflection.",
  },
  {
    value: "feel-strain-still-comply",
    marker: "E",
    label: "I feel the strain but still bend",
    description: "Your limit is there, but it loses the ranking.",
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
  { key: "approval", label: "approval / smoothness" },
  { key: "avoiding-conflict", label: "avoiding conflict" },
  { key: "urgency", label: "urgency" },
  { key: "feeling-responsible", label: "over-responsibility" },
  { key: "fear-seeming-selfish", label: "fear of seeming harsh" },
];

const afterEffectOptions: PleasingChoiceOption[] = [
  { value: "adjust-let-go", marker: "A", label: "I reset and move on" },
  { value: "quietly-drained", marker: "B", label: "I feel quietly drained" },
  { value: "resentful-later", marker: "C", label: "I feel resentful later" },
  { value: "pull-back-emotionally", marker: "D", label: "I pull back emotionally" },
  { value: "irritated-stay-available", marker: "E", label: "I stay available but feel irritated" },
];

const noticeNoOptions: PleasingChoiceOption[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "mostly-easy", label: "Mostly easy" },
  { value: "mixed", label: "Mixed" },
  { value: "difficult", label: "Difficult" },
  { value: "very-difficult", label: "Very difficult" },
];

const socialPositionOptions: PleasingChoiceOption[] = [
  { value: "know-position-clearly", marker: "A", label: "I usually know my limit clearly" },
  { value: "know-but-soften", marker: "B", label: "I know my limit but soften it quickly" },
  { value: "monitor-their-reaction", marker: "C", label: "I start monitoring their reaction more than my own limit" },
  { value: "keep-it-smooth-pay-later", marker: "D", label: "I keep the interaction smooth even when I pay for it later" },
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
    label: "notice limit -> decide -> say it",
    description: "Your boundary stays available long enough to shape the answer.",
  },
  {
    value: "pressure-hesitate-soften",
    marker: "B",
    label: "pressure enters -> hesitate -> soften limit",
    description: "The interaction starts redirecting the limit before you fully agree with the bend.",
  },
  {
    value: "monitor-reaction-override",
    marker: "C",
    label: "read reaction -> override limit",
    description: "Their likely response becomes the main reference point.",
  },
  {
    value: "say-yes-feel-drain",
    marker: "D",
    label: "stay open -> feel the cost later",
    description: "The real cost becomes visible only after the moment has passed.",
  },
  {
    value: "say-yes-resentment-builds",
    marker: "E",
    label: "bend now -> resentment builds later",
    description: "Flexibility protects the interaction now, but not the longer emotional cost.",
  },
];

const weakZoneOptions: PleasingChoiceOption[] = weakZones.map((zone) => ({
  value: zone.key,
  label: zone.label,
  description: zone.description,
}));

const finalPatternOptions: PleasingChoiceOption[] = [
  { value: "steady-soften-few", marker: "A", label: "My boundaries are mostly clear, with a few weak zones" },
  { value: "override-to-keep-smooth", marker: "B", label: "I often override a limit to keep the moment smooth" },
  { value: "carry-others-comfort", marker: "C", label: "I carry other people's comfort too quickly" },
  { value: "notice-strain-later", marker: "D", label: "I tend to notice the cost later than the boundary shift" },
  { value: "costs-more-than-people-see", marker: "E", label: "My boundary strain looks smaller outside than it feels inside" },
];

export const peoplePleasingSteps: PeoplePleasingStep[] = [
  {
    id: "initial-response",
    step: 1,
    kind: "scenario-choice",
    field: "initialResponse",
    eyebrow: "Boundary 01 · first inner move",
    question: "When a request pushes against your actual limit, what do you usually feel first?",
    hint: "Pick the earliest honest boundary signal, not the cleaner answer you wish you gave later.",
    options: initialResponseOptions,
  },
  {
    id: "prioritize-own-need",
    step: 2,
    kind: "slider",
    field: "ownNeedDifficulty",
    eyebrow: "Boundary 02 · limit clarity",
    question: "How hard is it to hold your own limit once someone else's need becomes emotionally present?",
    hint: "This is about how quickly their emotional presence changes the internal ranking of your boundary.",
    label: "Difficulty holding your limit",
    minLabel: "Very easy",
    maxLabel: "Very difficult",
  },
  {
    id: "accommodation-situations",
    step: 3,
    kind: "multi-select",
    field: "accommodationSituations",
    eyebrow: "Boundary 03 · pressure contexts",
    question: "Which situations soften your boundaries most often?",
    hint: "Choose up to four. These create the pressure profile behind the result.",
    limit: 4,
    options: accommodationSituationOptions,
  },
  {
    id: "inner-shift",
    step: 4,
    kind: "visual-choice",
    field: "innerShift",
    eyebrow: "Boundary 04 · visible inner shift",
    question: "Which pattern feels closest to your usual boundary shift under pressure?",
    hint: "Choose the pattern that matches the drift, not the one that sounds most mature in theory.",
    options: innerShiftOptions,
  },
  {
    id: "yes-before-check",
    step: 5,
    kind: "segmented",
    field: "yesBeforeCheck",
    eyebrow: "Boundary 05 · early openness",
    question: "How often do you stay open or say yes before you fully check whether you have room?",
    hint: "This catches automatic flexibility before later reconsideration arrives.",
    options: yesFrequencyOptions,
  },
  {
    id: "pleasing-drivers",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Boundary 06 · what bends the limit",
    question: "What usually bends the limit most strongly?",
    hint: "Rank the forces from most to least influential. Drag on desktop or use move buttons anywhere.",
    items: pleasingDriverItems,
  },
  {
    id: "after-effect",
    step: 7,
    kind: "scenario-choice",
    field: "afterEffect",
    eyebrow: "Boundary 07 · later cost",
    question: "When you let a limit go too far, what tends to happen later?",
    hint: "The later effect often tells you more about the real cost than the smooth interaction itself.",
    options: afterEffectOptions,
  },
  {
    id: "notice-no",
    step: 8,
    kind: "segmented",
    field: "noticeNo",
    eyebrow: "Boundary 08 · noticing the no",
    question: "How easy is it for you to notice your own no in real time?",
    hint: "This is less about courage and more about whether the boundary signal remains readable before the answer is already moving outward.",
    options: noticeNoOptions,
  },
  {
    id: "disappointment-influence",
    step: 9,
    kind: "slider",
    field: "disappointmentInfluence",
    eyebrow: "Boundary 09 · disappointment pull",
    question: "How much does another person's disappointment change your boundary once you feel it?",
    hint: "This slider captures how strongly their visible feeling changes your internal ranking.",
    label: "Effect of their disappointment",
    minLabel: "Barely changes it",
    maxLabel: "Changes it a lot",
  },
  {
    id: "social-position",
    step: 10,
    kind: "scenario-choice",
    field: "socialPosition",
    eyebrow: "Boundary 10 · boundary style",
    question: "Which statement feels most familiar?",
    hint: "Choose the option that describes your real interaction pattern, not only what happens on your most intense days.",
    options: socialPositionOptions,
  },
  {
    id: "overexplaining",
    step: 11,
    kind: "segmented",
    field: "overexplaining",
    eyebrow: "Boundary 11 · cushioning the message",
    question: "How often do you overexplain, justify, or soften a boundary?",
    hint: "This often rises when directness starts feeling more dangerous than the later cost of override.",
    options: overexplainingOptions,
  },
  {
    id: "response-flow",
    step: 12,
    kind: "visual-choice",
    field: "responseFlow",
    eyebrow: "Boundary 12 · response flow",
    question: "Choose the response flow that feels most like your boundary pattern",
    hint: "Pick the sequence that feels most familiar from the inside, not the one that looks most polished.",
    options: responseFlowOptions,
  },
  {
    id: "hidden-costs",
    step: 13,
    kind: "triple-slider",
    eyebrow: "Boundary 13 · hidden cost load",
    question: "How much do these get affected when your boundaries soften too far?",
    hint: "This turns the result from a boundary read into a cost profile: what happens in you after the moment.",
    fields: [
      { key: "energyDrain", label: "Energy drain", minLabel: "Low", maxLabel: "High" },
      { key: "resentmentBuildup", label: "Resentment buildup", minLabel: "Low", maxLabel: "High" },
      { key: "selfRespectDrop", label: "Self-trust drop", minLabel: "Low", maxLabel: "High" },
    ],
  },
  {
    id: "weak-zone",
    step: 14,
    kind: "visual-choice",
    field: "weakZone",
    eyebrow: "Boundary 14 · weak-zone context",
    question: "Where do your boundaries soften fastest?",
    hint: "Choose the context where self-protection is most likely to soften, disappear, or arrive too late.",
    options: weakZoneOptions,
    columns: 3,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Boundary 15 · final self-read",
    question: "Which statement feels closest to your current boundary pattern?",
    hint: "This final read helps the tool compare your self-description with the pattern gathered across the earlier signals.",
    options: finalPatternOptions,
  },
];

export const relatedPeoplePleasingTools: RelatedPleasingTool[] = [
  {
    title: "People-Pleasing Signal Check",
    description: "See whether approval pressure and emotional smoothing are quietly pulling your boundaries off center.",
    category: "Boundaries & People-Pleasing",
    minutes: "4 min",
    icon: "shield",
    href: buildToolHref({ slug: "people-pleasing-signal-check", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Attachment Pattern Spotter",
    description: "Read how closeness, reassurance, and withdrawal patterns may be shaping what feels hard to hold clearly.",
    category: "Relationships & Attachment",
    minutes: "4 min",
    icon: "insight",
    href: buildToolHref({ slug: "attachment-pattern-spotter", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Resentment Buildup Tracker",
    description: "Trace where repeated boundary bending is turning into stored irritation, distance, or overload.",
    category: "Boundaries & People-Pleasing",
    minutes: "5 min",
    icon: "trend",
    href: buildToolHref({ slug: "resentment-buildup-tracker", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Communication Style Mirror",
    description: "Check whether softness, overexplaining, or defensiveness are making it harder to say the real limit clearly.",
    category: "Communication & Conflict",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "communication-style-mirror", categorySlug: "communication-conflict" }),
  },
];

export const peoplePleasingFaqItems: FaqItem[] = [
  {
    question: "What does a boundary strength score actually mean?",
    answer:
      "It is a directional read of how clearly your limits stay available once pressure enters. A higher score here means more boundary strain, not that you are difficult, selfish, or doing relationships wrong.",
  },
  {
    question: "Is boundary strength the same as being rigid?",
    answer:
      "No. Healthy boundary strength still allows flexibility, warmth, and nuance. Rigidity usually shuts contact down, while clear boundaries help you stay honest without disappearing.",
  },
  {
    question: "Why do I notice the cost later instead of in the moment?",
    answer:
      "Because the interaction can move faster than your internal check. In the moment, the system may prioritize reducing tension. Once the pressure passes, your own strain finally has room to register.",
  },
  {
    question: "Why does guilt make my no disappear?",
    answer:
      "Guilt can change the internal ranking very quickly. Instead of asking what is true for you, the system starts asking what will reduce discomfort, protect the bond, or keep you from feeling like the bad one.",
  },
  {
    question: "Can boundary problems show up only in certain relationships?",
    answer:
      "Yes. Many people are fairly steady in some settings and much softer in others. Family roles, romance, work hierarchies, and emotionally intense people can all activate different levels of boundary softening.",
  },
  {
    question: "Why do I feel resentful even when I agreed?",
    answer:
      "Because agreement and real room are not always the same thing. You may have stayed open socially while a quieter part of you was already past capacity, so resentment becomes the delayed signal of that mismatch.",
  },
  {
    question: "What is the difference between weak boundaries and delayed boundaries?",
    answer:
      "Weak boundaries often feel unclear or porous from the start. Delayed boundaries can be clear internally, but they arrive too late because the pressure, guilt, or reaction management happens first.",
  },
  {
    question: "Why do I overexplain when I try to set a limit?",
    answer:
      "Overexplaining often appears when your system is trying to soften the impact, manage the other person's reaction, or prove that your limit is reasonable enough to be allowed.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Every four to eight weeks is usually enough, or sooner if a specific relationship, job context, or family dynamic is changing quickly. The most useful comparison is whether you are noticing the limit earlier and paying less later.",
  },
  {
    question: "What should I do if my boundaries keep collapsing automatically?",
    answer:
      "Start smaller than a perfect no. Slow the first response, name the pressure driver, and practice one clearer sentence before solving the other person's feeling. The first win is usually catching the boundary shift earlier, not becoming instantly unshakeable.",
  },
];

export const peoplePleasingStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "The outside can look flexible while the inside feels quietly overrun.",
  quote:
    "This can happen when saying yes feels easier than making the conversation heavier. The person stays open, handles it, sounds reasonable, and keeps the moment smooth. Only later do the real signals show up: annoyance, tiredness, or the feeling of not actually being okay with what was agreed to. The limit was there, but it was heard too late.",
  takeaway:
    "That is the pattern this tool is built to make visible: the moment where the boundary softens before the cost is fully conscious, then returns later as drain, resentment, or loss of self-trust.",
  toneLabel: "Common lived pattern",
  accent: "#FB7185",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What boundary strength actually is",
    paragraphs: [
      "Boundary strength is not the same thing as being hard, cold, or unavailable. It is the ability to stay connected to what is actually true for you while another person's need, emotion, urgency, or disappointment is present. In other words, the question is not whether you care. It is whether your care can remain in contact with your limit at the same time.",
      "That distinction matters because weak boundaries are often misread. From the outside, a person may look generous, adaptable, easy, or calm. Inside, they may be moving away from their own capacity line faster than they realize. The social moment stays smoother than the internal truth, so the cost is frequently delayed.",
      "A useful way to think about boundary strength is this: it is self-protection that can stay online without needing the other person to feel good about it first. When that capacity thins, the pattern is not only saying yes. It can also look like delaying the no, softening the limit, overexplaining it, or staying open long after your real room has already changed.",
    ],
  },
  {
    title: "Why boundary strain often begins before you consciously call it a boundary problem",
    paragraphs: [
      "A lot of people think the boundary problem starts when they finally say yes. In practice, it often starts earlier. It starts in the first tightening, the quick concern about how the other person will react, the urge to sound easy, or the immediate shift from 'what do I actually have room for?' to 'how do I keep this moment from becoming a problem?'",
      "That early shift is usually fast because it is relational, not purely logical. The nervous system reads disappointment, urgency, dependence, authority, or emotional intensity and starts calculating how to reduce friction. Sometimes the person later calls themselves weak or indecisive. Often the deeper issue is speed. The pressure outran the limit check.",
      "This also explains why people can sound thoughtful about boundaries in theory and still struggle in real time. Knowing the principle is not the same as keeping the principle available inside a live interaction. If the other person's emotion or expectation feels urgent enough, the principle can disappear behind the impulse to soothe, rescue, reassure, or stay good.",
    ],
  },
  {
    title: "How boundaries soften under pressure",
    paragraphs: [
      "Boundaries rarely disappear all at once. They get outranked. A person may feel a flicker of hesitation, a mild internal no, or a sense of cost. Then another signal arrives that feels more urgent: guilt, fear of conflict, concern about tone, the desire to be helpful, or the emotional reality of the other person's need. The system starts prioritizing relational management over internal accuracy.",
      "That is why boundary problems can feel subtle. A person may not think, 'I am abandoning my limit.' They may think, 'It is easier this way,' 'I can manage,' 'I do not want to make this heavy,' or 'I will deal with the cost later.' Those thoughts often act as bridges between a clear limit and a softened one.",
      "Over time, repeated softening can change self-trust. You begin to trust the later resentment, exhaustion, or withdrawal more than the earlier hesitation because the earlier signal has become so easy to negotiate away. The more often that happens, the more boundary work starts to feel emotional instead of practical, even though the root issue is still clarity under pressure.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "approvalPressure" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Boundary Pressure measures how strongly another person's reaction, disappointment, or urgency starts shaping the moment. When this score rises, the interaction becomes less about what is true for you and more about managing the atmosphere.",
      "A higher score here does not mean you do not care about yourself. It usually means the social radar is very fast, and that speed is outranking the boundary check more often than you realize.",
    ],
  },
  {
    key: "selfSignalClarity" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Limit Clarity looks at how available your own internal no, preference, or capacity line remains once pressure is in the room. This is not only about assertiveness. It is about whether the signal stays readable long enough to guide the response.",
      "When clarity is low, people often describe themselves as conflicted, inconsistent, or too flexible. Often the deeper issue is that their own limit is getting crowded out before it can fully register.",
    ],
  },
  {
    key: "conflictGuiltOverride" as PeoplePleasingDimensionKey,
    paragraphs: [
      "Guilt / Conflict Override captures how much guilt, urgency, over-responsibility, or fear of tension weakens your boundary. This is the dimension that makes a clear limit suddenly feel morally questionable once another person's need becomes visible.",
      "It matters because many people do not soften a boundary because someone argued better. They soften it because the room starts feeling harder to tolerate than the later cost of bending.",
    ],
  },
  {
    key: "resentmentRisk" as PeoplePleasingDimensionKey,
    paragraphs: [
      "After-Cost Load measures how likely the pattern is to turn into later drain, irritation, distance, or a drop in self-trust. This is the part that explains why someone can sound agreeable and still feel quietly burdened afterward.",
      "A higher after-cost score does not mean you are secretly hostile. It usually means your system is signaling that flexibility has started costing more than the interaction admitted in the moment.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Guilt that outruns the limit",
    body:
      "When guilt arrives faster than boundary checking, the internal question changes from 'what is true for me?' to 'am I allowed to hold the line?' That shift makes bending feel morally safer than honesty.",
  },
  {
    title: "Urgency that compresses reflection",
    body:
      "Urgent requests often create false scarcity. The person feels they must answer now, which leaves less room to feel the real limit before the response is already moving outward.",
  },
  {
    title: "Responsibility for the other person's state",
    body:
      "If another person's disappointment, stress, or dysregulation starts feeling like something you must manage, your own limit can become secondary very quickly.",
  },
  {
    title: "Fear of seeming difficult",
    body:
      "The desire to stay good, easy, caring, or emotionally safe can make directness feel riskier than clear boundary language, especially in relationships with strong expectations.",
  },
  {
    title: "Overidentifying with others' comfort",
    body:
      "Care becomes costly when another person's ease starts mattering more than your own capacity. The interaction may stay smoother, but the system often pays for that smoothness later.",
  },
  {
    title: "Flexibility that always bends one way",
    body:
      "Flexibility is not the issue by itself. The issue is when flexibility always bends toward preserving the moment and rarely toward preserving your own room.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Notice the body signal sooner",
    body:
      "For many people, the first accurate signal is physical: tightening, dropping, heaviness, or a subtle recoil. Catching that early often works better than waiting for a perfectly worded sentence to appear.",
  },
  {
    title: "Check room before responding",
    body:
      "Even a short pause changes the pattern. The goal is not to become cold. It is to ask what you actually have room for before the social moment has fully answered on your behalf.",
  },
  {
    title: "Delay the automatic openness",
    body:
      "A small buffer such as 'let me check' or 'I want to think about that' protects the boundary signal from being overridden by immediacy, urgency, or the other person's visible emotion.",
  },
  {
    title: "Use shorter, clearer language",
    body:
      "Overexplaining often keeps the approval loop alive. Shorter answers reduce the amount of emotional negotiation you are trying to do after already noticing the limit.",
  },
  {
    title: "Tolerate some disappointment",
    body:
      "A healthier pattern usually requires learning that another person's discomfort is not automatically proof that your boundary was wrong. Discomfort is often part of honest relating.",
  },
  {
    title: "Separate care from self-abandonment",
    body:
      "Real care does not require disappearing. The goal is not to stop helping. It is to help from a position that still includes you, your limit, and your long-term emotional reality.",
  },
];

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by treating it as a speed problem rather than a personality problem. The first change is often not becoming perfectly boundaried. It is noticing the softening earlier, especially in the moments where guilt, urgency, or another person's visible emotion begins to narrow your internal room.",
  "Pick one weak-zone context and one driver instead of trying to fix everything at once. If family disappointment is the main pull, practice one sentence that buys you time. If overexplaining is the main habit, practice one shorter response that protects your position without proving it to death. Smaller reps usually change the pattern faster than dramatic declarations do.",
  "Most importantly, measure progress by earlier recognition, not by zero discomfort. If you notice your no sooner, bend less automatically, or feel less resentment later, the system is already becoming clearer and more protective of you.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Boundary Reset Guide",
  description:
    "A structured guide for catching limit softening earlier, reducing guilt-based override, and practicing clearer boundaries without turning harder or colder.",
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
      label: "Boundary signal",
      shortLabel: "Signal",
      value: selfPriority,
      accent: "#6EE7B7",
      note: "How available your real limit stays at the beginning of the interaction.",
    },
    {
      key: "pressure",
      label: "Pressure load",
      shortLabel: "Pressure",
      value: dimensions.approvalPressure,
      accent: "#FB7185",
      note: "How quickly another person's feeling or likely reaction starts pressing against the limit.",
    },
    {
      key: "override",
      label: "Limit softening",
      shortLabel: "Softening",
      value: selfOverrideTendency,
      accent: "#FCD34D",
      note: "The point where smoothing, guilt, or urgency starts outranking your own boundary signal.",
    },
    {
      key: "cost",
      label: "After-cost",
      shortLabel: "Cost",
      value: clampScore(weightedAverage([
        { value: hiddenCosts[0]?.value, weight: 0.35 },
        { value: hiddenCosts[1]?.value, weight: 0.25 },
        { value: dimensions.resentmentRisk, weight: 0.4 },
      ])),
      accent: "#C4B5FD",
      note: "The later cost in energy, resentment, self-trust, or emotional distance.",
    },
  ];

  const approvalLead = driverTotals[0]?.label.toLowerCase() ?? "approval pressure";
  const zoneLead = weakZoneScores[0]?.label.toLowerCase() ?? mainWeakZone.label.toLowerCase();
  const signalLabel = `Your pattern suggests that boundary strain comes less from not caring about limits and more from how quickly ${approvalLead} begins to outrank your own boundary signal, especially around ${zoneLead}.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} Right now, ${primaryDriver.label.toLowerCase()} appears to be the strongest boundary-pressure driver, while ${dominantPattern.label.toLowerCase()} is the dominant softening pattern.`;
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

export type BoundaryStrengthResult = PeoplePleasingResult;
export type BoundaryStrengthAnswers = PeoplePleasingAnswers;
export type BoundaryStrengthStep = PeoplePleasingStep;
export type BoundaryFaqItem = FaqItem;
export type RelatedBoundaryTool = RelatedPleasingTool;

export const boundaryStrengthMetadata = peoplePleasingMetadata;
export const boundaryStrengthDimensions = peoplePleasingDimensions;
export const boundaryStrengthBands = peoplePleasingBands;
export const boundaryStrengthSteps = peoplePleasingSteps;
export const boundaryStrengthFaqItems = peoplePleasingFaqItems;
export const boundaryStrengthStoryBlock = peoplePleasingStoryBlock;
export const relatedBoundaryTools = relatedPeoplePleasingTools;
export const getInitialBoundaryStrengthAnswers = getInitialPeoplePleasingAnswers;
export const isBoundaryStrengthStepComplete = isPeoplePleasingStepComplete;
export const calculateBoundaryStrengthResult = calculatePeoplePleasingResult;
