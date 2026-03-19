import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type FirstVoiceToneValue =
  | "fair-steady"
  | "disappointed-tense"
  | "harsh-critical"
  | "demanding-perfectionistic"
  | "quiet-undermining";

export type ActivationContextValue =
  | "mistakes"
  | "visibility"
  | "comparison"
  | "conflict"
  | "uncertainty"
  | "being-judged"
  | "underperformance"
  | "unfinished-work"
  | "disappointment"
  | "social-exposure";

export type VoicePatternValue =
  | "occasional-manageable"
  | "sharp-in-stressful-moments"
  | "repetitive-and-draining"
  | "perfectionistic-and-relentless"
  | "subtle-but-always-there";

export type RepetitionValue =
  | "barely-repetitive"
  | "slightly"
  | "moderately"
  | "strongly"
  | "constantly-repetitive";

export type RankedTruthKey =
  | "should-have-done-better"
  | "replays-mistakes-too-long"
  | "hesitate-before-action"
  | "raises-the-standard-after-trying"
  | "weakens-trust-in-my-ability";

export type AfterActivationValue =
  | "correct-and-move-on"
  | "lose-momentum"
  | "keep-replaying-what-happened"
  | "pull-back-or-get-quieter"
  | "function-with-heavy-pressure";

export type ConfidenceImpactSpeedValue =
  | "very-slowly"
  | "slowly"
  | "moderately"
  | "quickly"
  | "almost-immediately";

export type FamiliarStatementValue =
  | "present-but-manageable"
  | "gets-louder-under-pressure"
  | "more-relentless-than-people-guess"
  | "looks-like-high-standards-feels-like-erosion";

export type CriticFormValue =
  | "harsh-judgment"
  | "pressure-to-be-better"
  | "comparison-and-deficiency"
  | "replaying-flaws"
  | "predicting-future-failure";

export type HardestHitZoneValue =
  | "work-performance"
  | "relationships"
  | "visible-expression"
  | "decisions"
  | "recovery-after-mistakes"
  | "self-image-and-comparison";

export type FinalPatternValue =
  | "not-running-the-system"
  | "intensifies-under-pressure"
  | "stronger-and-more-repetitive-than-i-admit"
  | "background-pressure-affects-confidence-and-energy"
  | "need-less-punishment-more-steadiness";

export type InnerCriticDimensionKey =
  | "harshnessIntensity"
  | "repetitionLoad"
  | "perfectionPressure"
  | "selfTrustErosion";

export type InnerCriticBandKey =
  | "low-critic-pressure"
  | "mild-inner-tension"
  | "repetitive-critical-pattern"
  | "high-internal-pressure"
  | "deep-critic-saturation";

export type CriticStyleKey =
  | "harsh-judgment"
  | "perfection-pressure"
  | "comparison-deficiency"
  | "replaying-flaws"
  | "future-failure-forecasting";

export type InternalCostKey =
  | "confidence-drop"
  | "visibility-shrinkage"
  | "follow-through-disruption"
  | "recovery-difficulty";

export type InnerCriticChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

export type InnerCriticAnswers = {
  firstVoiceTone?: FirstVoiceToneValue;
  criticIntensity?: number;
  activationContexts: ActivationContextValue[];
  voicePattern?: VoicePatternValue;
  repetitionLevel?: RepetitionValue;
  rankingOrder: RankedTruthKey[];
  rankingConfirmed: boolean;
  perfectionPressure?: number;
  afterActivation?: AfterActivationValue;
  confidenceImpactSpeed?: ConfidenceImpactSpeedValue;
  familiarStatement?: FamiliarStatementValue;
  selfTrustRecoveryEase?: number;
  criticForm?: CriticFormValue;
  confidenceDrop?: number;
  visibilityShrinkage?: number;
  followThroughDisruption?: number;
  hardestHitZone?: HardestHitZoneValue;
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
    | "firstVoiceTone"
    | "afterActivation"
    | "familiarStatement"
    | "criticForm"
    | "finalPattern";
  options: InnerCriticChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "repetitionLevel" | "confidenceImpactSpeed";
  options: InnerCriticChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "criticIntensity" | "perfectionPressure" | "selfTrustRecoveryEase";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "activationContexts";
  limit: number;
  options: InnerCriticChoiceOption[];
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
    key: "confidenceDrop" | "visibilityShrinkage" | "followThroughDisruption";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type VisualChoiceStep = BaseStep & {
  kind: "visual-choice";
  field: "voicePattern" | "hardestHitZone";
  options: InnerCriticChoiceOption[];
  columns?: 2 | 3;
};

export type InnerCriticStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep
  | VisualChoiceStep;

export type InnerCriticDimension = {
  key: InnerCriticDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type InnerCriticBand = {
  key: InnerCriticBandKey;
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

export type CriticStyle = {
  key: CriticStyleKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type CriticStyleScore = CriticStyle & {
  value: number;
};

export type ActivationContextProfile = {
  key: ActivationContextValue;
  label: string;
  description: string;
  accent: string;
};

export type SofteningDirection = {
  key: string;
  label: string;
  description: string;
  accent: string;
};

export type InternalCostArea = {
  key: InternalCostKey;
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

export type WaveformBar = {
  value: number;
  accent: string;
};

export type RelatedInnerCriticTool = {
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

export type InnerCriticResult = {
  score: number;
  completionRatio: number;
  band: InnerCriticBand;
  dimensions: Record<InnerCriticDimensionKey, number>;
  primaryCriticStyle: CriticStyle;
  mainActivationContext: ActivationContextProfile;
  strongestInternalCost: InternalCostArea;
  mostUsefulSofteningDirection: SofteningDirection;
  patternScores: CriticStyleScore[];
  costMetrics: InternalCostArea[];
  previewMetrics: PreviewMetric[];
  waveform: WaveformBar[];
  criticLabel: string;
  interpretation: string;
  standout: string;
  costInsight: string;
  criticIntensityLevel: number;
  repetitionLevelScore: number;
  perfectionPressureLevel: number;
  selfTrustErosionLevel: number;
  postMistakeIntensity: number;
  recoveryDifficulty: number;
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
  key: InnerCriticDimensionKey;
  paragraphs: string[];
};

export const innerCriticMetadata = {
  eyebrow: "INNER VOICE TOOL",
  title: "Inner Critic Intensity Scan",
  description:
    "See how harsh, repetitive, or perfection-driven your inner voice has become. This tool maps where the voice bites hardest and what it is costing you day to day.",
  metadata: [
    { label: "2-4 minutes", icon: "time" as IconName },
    { label: "free tool", icon: "signal" as IconName },
    { label: "private by design", icon: "privacy" as IconName },
  ],
};

export const innerCriticDimensions: InnerCriticDimension[] = [
  {
    key: "harshnessIntensity",
    label: "Harshness Intensity",
    description: "How sharp, punishing, or cutting the tone becomes once the critic activates.",
    icon: "signal",
    accent: "#FB7185",
  },
  {
    key: "repetitionLoad",
    label: "Repetition Load",
    description: "How long the critic keeps talking, replaying, or reopening the same internal attack.",
    icon: "pattern",
    accent: "#67E8F9",
  },
  {
    key: "perfectionPressure",
    label: "Perfection Pressure",
    description: "How strongly the voice raises standards, moves the goalposts, or treats effort as never quite enough.",
    icon: "graph",
    accent: "#FCD34D",
  },
  {
    key: "selfTrustErosion",
    label: "Self-Trust Erosion",
    description: "How quickly the critic turns pressure or mistakes into reduced confidence, visibility, or follow-through.",
    icon: "trend",
    accent: "#C4B5FD",
  },
];

export const innerCriticBands: InnerCriticBand[] = [
  {
    key: "low-critic-pressure",
    min: 0,
    max: 24,
    title: "Low Critic Pressure",
    descriptor: "The inner voice may still tighten under stress, but it is not strongly dominating the system or staying active for long.",
    summary:
      "This pattern suggests the critic is present more as a manageable evaluator than a draining internal force. It may speak up in pressure moments, but it is not strongly shaping confidence, recovery, or action afterward.",
    interpretation:
      "A lower score does not mean you never judge yourself. It means the inner voice has not become the main operating climate. There is still enough steadiness in the system for correction to happen without prolonged self-attack.",
    standoutLead: "The strongest signal here is proportion.",
    costLead: "The cost stays lower because the voice does not keep escalating after the moment has already happened.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.16)",
  },
  {
    key: "mild-inner-tension",
    min: 25,
    max: 44,
    title: "Mild Inner Tension",
    descriptor: "The critic has enough force to create internal pressure in certain contexts, especially when stress or exposure rises.",
    summary:
      "This usually means the voice is not overwhelming all the time, but it gets sharper or more repetitive in predictable moments and can temporarily lower confidence or freedom of movement.",
    interpretation:
      "At this level, the inner critic often passes as ambition or conscientiousness. The more useful question is whether the voice is truly helping you correct, or whether it is adding a layer of unnecessary tension that outlasts the situation.",
    standoutLead: "The critic is active, but still interruptible.",
    costLead: "The cost tends to show up as extra tension, tighter standards, or slower recovery after visible pressure points.",
    gradientFrom: "#93C5FD",
    gradientTo: "#C4B5FD",
    glow: "rgba(147, 197, 253, 0.16)",
  },
  {
    key: "repetitive-critical-pattern",
    min: 45,
    max: 64,
    title: "Repetitive Critical Pattern",
    descriptor: "The inner voice is no longer just evaluating. It is becoming a repeating pressure loop that drains room, confidence, or momentum.",
    summary:
      "This pattern suggests the critic has grown more repetitive and more influential. It likely shows up as replaying mistakes, moving standards upward, or turning pressure into a long internal echo rather than a brief correction.",
    interpretation:
      "This is where many people start saying the problem is not one thought, but the way the voice keeps returning. The repetition matters because it turns a moment of pressure into an ongoing internal atmosphere.",
    standoutLead: "The strongest feature here is repetition.",
    costLead: "The system pays for the voice not only in the moment, but in how long confidence or energy takes to come back afterward.",
    gradientFrom: "#C4B5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(196, 181, 253, 0.16)",
  },
  {
    key: "high-internal-pressure",
    min: 65,
    max: 84,
    title: "High Internal Pressure",
    descriptor: "The critic has real force and is likely shaping hesitation, visibility, recovery, and the speed at which self-trust drops under stress.",
    summary:
      "This result usually means the voice has moved beyond occasional harshness into a stronger internal pressure system. It may sound like standards, but it behaves more like chronic internal demand with a real cost to confidence and follow-through.",
    interpretation:
      "At this level, the problem is rarely that you do not care enough. The problem is that the internal climate has become punishing enough to make effort, risk, and recovery more expensive than they should be.",
    standoutLead: "The system is carrying too much internal pressure from the inside.",
    costLead: "The cost tends to land where self-trust should recover, but instead stays reduced or strained after the critic speaks.",
    gradientFrom: "#FB7185",
    gradientTo: "#C4B5FD",
    glow: "rgba(251, 113, 133, 0.18)",
  },
  {
    key: "deep-critic-saturation",
    min: 85,
    max: 100,
    title: "Deep Critic Saturation",
    descriptor: "The inner critic is likely functioning like a background pressure field, not just a reaction to isolated mistakes or stressful moments.",
    summary:
      "This pattern suggests the critic is strong, repetitive, and costly enough to shape daily confidence from underneath. It may be affecting energy, visibility, recovery, and self-trust even when nothing dramatic is happening outside.",
    interpretation:
      "When the critic reaches this level, people often say it feels less like a thought and more like an internal weather system. The harshness may be explicit or subtle, but the bigger issue is how continuously it is influencing confidence, effort, and rest from the inside.",
    standoutLead: "The heaviest signal here is saturation.",
    costLead: "The loudest cost is often not one harsh sentence, but the cumulative erosion created by pressure that keeps running in the background.",
    gradientFrom: "#FB7185",
    gradientTo: "#FDA4AF",
    glow: "rgba(253, 164, 175, 0.18)",
  },
];

const firstVoiceToneOptions: InnerCriticChoiceOption[] = [
  {
    value: "fair-steady",
    marker: "A",
    label: "Fair but steady",
    description: "The voice sounds corrective without becoming punishing.",
  },
  {
    value: "disappointed-tense",
    marker: "B",
    label: "Disappointed and tense",
    description: "It tightens quickly and carries frustration or pressure.",
  },
  {
    value: "harsh-critical",
    marker: "C",
    label: "Harsh and critical",
    description: "It goes sharp fast and feels attacking rather than useful.",
  },
  {
    value: "demanding-perfectionistic",
    marker: "D",
    label: "Demanding and perfectionistic",
    description: "It sounds like nothing is acceptable unless it reaches an internal ideal.",
  },
  {
    value: "quiet-undermining",
    marker: "E",
    label: "Quiet but undermining",
    description: "The voice is less loud, but it steadily weakens trust from underneath.",
  },
];

const activationContextOptions: InnerCriticChoiceOption[] = [
  { value: "mistakes", label: "Mistakes" },
  { value: "visibility", label: "Visibility" },
  { value: "comparison", label: "Comparison" },
  { value: "conflict", label: "Conflict" },
  { value: "uncertainty", label: "Uncertainty" },
  { value: "being-judged", label: "Being judged" },
  { value: "underperformance", label: "Underperformance" },
  { value: "unfinished-work", label: "Unfinished work" },
  { value: "disappointment", label: "Disappointment" },
  { value: "social-exposure", label: "Social exposure" },
];

const voicePatternOptions: InnerCriticChoiceOption[] = [
  {
    value: "occasional-manageable",
    marker: "A",
    label: "Occasional and manageable",
    description: "It appears in certain moments but does not stay in charge for long.",
  },
  {
    value: "sharp-in-stressful-moments",
    marker: "B",
    label: "Sharp in stressful moments",
    description: "It spikes when pressure rises, then fades more once the moment passes.",
  },
  {
    value: "repetitive-and-draining",
    marker: "C",
    label: "Repetitive and draining",
    description: "The main cost is how long it keeps talking after the trigger happened.",
  },
  {
    value: "perfectionistic-and-relentless",
    marker: "D",
    label: "Perfectionistic and relentless",
    description: "The voice keeps raising the internal bar and rarely counts effort as enough.",
  },
  {
    value: "subtle-but-always-there",
    marker: "E",
    label: "Subtle but always present underneath",
    description: "It feels quieter, but it colors decisions and confidence in the background.",
  },
];

const repetitionOptions: InnerCriticChoiceOption[] = [
  { value: "barely-repetitive", label: "Barely repetitive" },
  { value: "slightly", label: "Slightly" },
  { value: "moderately", label: "Moderately" },
  { value: "strongly", label: "Strongly" },
  { value: "constantly-repetitive", label: "Constantly repetitive" },
];

export const criticRankingItems: Array<{ key: RankedTruthKey; label: string }> = [
  { key: "should-have-done-better", label: "it tells me I should have done better" },
  { key: "replays-mistakes-too-long", label: "it replays mistakes too long" },
  { key: "hesitate-before-action", label: "it makes me hesitate before action" },
  { key: "raises-the-standard-after-trying", label: "it raises the standard after I already tried" },
  { key: "weakens-trust-in-my-ability", label: "it weakens trust in my own ability" },
];

const afterActivationOptions: InnerCriticChoiceOption[] = [
  {
    value: "correct-and-move-on",
    marker: "A",
    label: "I correct and move on",
    description: "The voice stays closer to feedback than punishment.",
  },
  {
    value: "lose-momentum",
    marker: "B",
    label: "I lose momentum",
    description: "The critic makes forward motion feel heavier than it should.",
  },
  {
    value: "keep-replaying-what-happened",
    marker: "C",
    label: "I keep replaying what happened",
    description: "The issue stays mentally active long after the event itself is over.",
  },
  {
    value: "pull-back-or-get-quieter",
    marker: "D",
    label: "I pull back or get quieter",
    description: "The critic reduces visibility and internal room almost immediately.",
  },
  {
    value: "function-with-heavy-pressure",
    marker: "E",
    label: "I continue functioning, but with heavy internal pressure",
    description: "The outside keeps moving while the inside gets tighter and harder.",
  },
];

const confidenceImpactSpeedOptions: InnerCriticChoiceOption[] = [
  { value: "very-slowly", label: "Very slowly" },
  { value: "slowly", label: "Slowly" },
  { value: "moderately", label: "Moderately" },
  { value: "quickly", label: "Quickly" },
  { value: "almost-immediately", label: "Almost immediately" },
];

const familiarStatementOptions: InnerCriticChoiceOption[] = [
  {
    value: "present-but-manageable",
    marker: "A",
    label: "My critic is present, but manageable",
  },
  {
    value: "gets-louder-under-pressure",
    marker: "B",
    label: "It gets louder under pressure",
  },
  {
    value: "more-relentless-than-people-guess",
    marker: "C",
    label: "It is more relentless than people would guess",
  },
  {
    value: "looks-like-high-standards-feels-like-erosion",
    marker: "D",
    label: "It looks like high standards, but feels like internal erosion",
  },
];

const criticFormOptions: InnerCriticChoiceOption[] = [
  { value: "harsh-judgment", marker: "A", label: "Harsh judgment" },
  { value: "pressure-to-be-better", marker: "B", label: "Pressure to be better" },
  { value: "comparison-and-deficiency", marker: "C", label: "Comparison and deficiency" },
  { value: "replaying-flaws", marker: "D", label: "Replaying flaws" },
  { value: "predicting-future-failure", marker: "E", label: "Predicting future failure" },
];

const hardestHitZoneOptions: InnerCriticChoiceOption[] = [
  {
    value: "work-performance",
    marker: "W",
    label: "Work / performance",
    description: "The critic tightens around output, competence, or visible standards.",
  },
  {
    value: "relationships",
    marker: "R",
    label: "Relationships",
    description: "The voice grows louder around connection, conflict, or emotional evaluation.",
  },
  {
    value: "visible-expression",
    marker: "V",
    label: "Visible expression",
    description: "The critic hits hardest when you are seen, heard, posted, or exposed.",
  },
  {
    value: "decisions",
    marker: "D",
    label: "Decisions",
    description: "The voice makes judgment feel risky and reverses trust quickly.",
  },
  {
    value: "recovery-after-mistakes",
    marker: "M",
    label: "Recovery after mistakes",
    description: "The strongest hit is not the mistake itself, but how long it stays active.",
  },
  {
    value: "self-image-and-comparison",
    marker: "S",
    label: "Self-image and comparison",
    description: "The critic centers on deficiency, image, and where you think you are not measuring up.",
  },
];

const finalPatternOptions: InnerCriticChoiceOption[] = [
  {
    value: "not-running-the-system",
    marker: "A",
    label: "My inner critic is there, but not running the system",
  },
  {
    value: "intensifies-under-pressure",
    marker: "B",
    label: "It intensifies under pressure and slows me down",
  },
  {
    value: "stronger-and-more-repetitive-than-i-admit",
    marker: "C",
    label: "It is stronger and more repetitive than I want to admit",
  },
  {
    value: "background-pressure-affects-confidence-and-energy",
    marker: "D",
    label: "It has become a background pressure that affects confidence and energy",
  },
  {
    value: "need-less-punishment-more-steadiness",
    marker: "E",
    label: "I need less punishment from inside and more internal steadiness",
  },
];

export const innerCriticSteps: InnerCriticStep[] = [
  {
    id: "first-voice-tone",
    step: 1,
    kind: "scenario-choice",
    field: "firstVoiceTone",
    eyebrow: "Signal 1 · first tone",
    question: "When something goes wrong, what does your inner voice most often sound like first?",
    hint: "Choose the earliest tone that shows up before you start explaining or managing it.",
    options: firstVoiceToneOptions,
  },
  {
    id: "critic-intensity",
    step: 2,
    kind: "slider",
    field: "criticIntensity",
    eyebrow: "Signal 2 · overall intensity",
    question: "How intense does your inner critic feel under pressure right now?",
    hint: "Think about felt force, not whether the content is technically true.",
    label: "Current critic intensity",
    minLabel: "Very mild",
    maxLabel: "Very intense",
  },
  {
    id: "activation-contexts",
    step: 3,
    kind: "multi-select",
    field: "activationContexts",
    eyebrow: "Signal 3 · activation contexts",
    question: "Which situations activate it most often?",
    hint: "Choose the recurring contexts where the voice becomes noticeably sharper or more repetitive.",
    limit: 4,
    options: activationContextOptions,
  },
  {
    id: "voice-pattern",
    step: 4,
    kind: "visual-choice",
    field: "voicePattern",
    eyebrow: "Signal 4 · voice pattern",
    question: "Which visual voice-pattern feels closest to your current experience?",
    hint: "Treat this as a pressure texture read rather than a personality label.",
    options: voicePatternOptions,
    columns: 2,
  },
  {
    id: "repetition-level",
    step: 5,
    kind: "segmented",
    field: "repetitionLevel",
    eyebrow: "Signal 5 · repetition",
    question: "How repetitive is the critic once it starts?",
    hint: "This is about how long the voice keeps looping or reopening the same message.",
    options: repetitionOptions,
  },
  {
    id: "ranking-order",
    step: 6,
    kind: "drag-rank",
    eyebrow: "Signal 6 · critic truths",
    question: "Rank these from most to least true about your inner critic",
    hint: "Start with the message that costs the most energy, confidence, or room right now.",
    items: criticRankingItems,
  },
  {
    id: "perfection-pressure",
    step: 7,
    kind: "slider",
    field: "perfectionPressure",
    eyebrow: "Signal 7 · perfection pressure",
    question: "How much perfection pressure is built into the voice?",
    hint: "Think about how quickly the critic turns effort into not-enoughness.",
    label: "Perfection pressure inside the voice",
    minLabel: "Very little",
    maxLabel: "Extremely high",
  },
  {
    id: "after-activation",
    step: 8,
    kind: "scenario-choice",
    field: "afterActivation",
    eyebrow: "Signal 8 · immediate aftermath",
    question: "When the critic gets active, what tends to happen next?",
    hint: "Choose the most common internal consequence, not the best-case version of the pattern.",
    options: afterActivationOptions,
  },
  {
    id: "confidence-impact-speed",
    step: 9,
    kind: "segmented",
    field: "confidenceImpactSpeed",
    eyebrow: "Signal 9 · speed of impact",
    question: "How quickly does the critic affect confidence once it appears?",
    hint: "This is about how fast self-trust drops after the voice enters the room.",
    options: confidenceImpactSpeedOptions,
  },
  {
    id: "familiar-statement",
    step: 10,
    kind: "scenario-choice",
    field: "familiarStatement",
    eyebrow: "Signal 10 · familiar read",
    question: "Which statement feels most familiar?",
    hint: "Pick the sentence that sounds most like your current internal reality.",
    options: familiarStatementOptions,
  },
  {
    id: "self-trust-recovery",
    step: 11,
    kind: "slider",
    field: "selfTrustRecoveryEase",
    eyebrow: "Signal 11 · recovery",
    question: "How easy is it to recover self-trust after the inner critic gets activated?",
    hint: "This is the rebound time of your system, not whether you logically know the critic is unfair.",
    label: "Ease of recovering self-trust",
    minLabel: "Very difficult",
    maxLabel: "Very easy",
  },
  {
    id: "critic-form",
    step: 12,
    kind: "scenario-choice",
    field: "criticForm",
    eyebrow: "Signal 12 · main form",
    question: "What form does the critic most often take?",
    hint: "Choose the recurring attack style that best matches the voice in practice.",
    options: criticFormOptions,
  },
  {
    id: "cost-sliders",
    step: 13,
    kind: "triple-slider",
    eyebrow: "Signal 13 · internal cost",
    question: "How much do these get affected when the critic is active?",
    hint: "Use the sliders to show what the voice costs after it arrives, not only how loud it sounds.",
    fields: [
      {
        key: "confidenceDrop",
        label: "Confidence drop",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "visibilityShrinkage",
        label: "Visibility shrinkage",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
      {
        key: "followThroughDisruption",
        label: "Follow-through disruption",
        minLabel: "Hardly affected",
        maxLabel: "Strongly affected",
      },
    ],
  },
  {
    id: "hardest-hit-zone",
    step: 14,
    kind: "visual-choice",
    field: "hardestHitZone",
    eyebrow: "Signal 14 · hardest-hit zone",
    question: "Where does the critic hit hardest?",
    hint: "Choose the part of life where the inner voice most reliably weakens confidence or room.",
    options: hardestHitZoneOptions,
    columns: 3,
  },
  {
    id: "final-pattern",
    step: 15,
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Signal 15 · final read",
    question: "Which statement feels closest to your current pattern?",
    hint: "Use this final step to anchor the pattern as it feels from the inside, not just how it looks outside.",
    options: finalPatternOptions,
  },
];

const firstVoiceToneSeverity: Record<FirstVoiceToneValue, number> = {
  "fair-steady": 14,
  "disappointed-tense": 42,
  "harsh-critical": 82,
  "demanding-perfectionistic": 88,
  "quiet-undermining": 70,
};

const activationContextSeverity: Record<ActivationContextValue, number> = {
  mistakes: 84,
  visibility: 72,
  comparison: 82,
  conflict: 58,
  uncertainty: 68,
  "being-judged": 78,
  underperformance: 80,
  "unfinished-work": 70,
  disappointment: 66,
  "social-exposure": 74,
};

const voicePatternSeverity: Record<VoicePatternValue, number> = {
  "occasional-manageable": 18,
  "sharp-in-stressful-moments": 48,
  "repetitive-and-draining": 72,
  "perfectionistic-and-relentless": 88,
  "subtle-but-always-there": 78,
};

const repetitionSeverity: Record<RepetitionValue, number> = {
  "barely-repetitive": 12,
  slightly: 30,
  moderately: 54,
  strongly: 78,
  "constantly-repetitive": 92,
};

const rankingSeverity: Record<RankedTruthKey, number> = {
  "should-have-done-better": 72,
  "replays-mistakes-too-long": 80,
  "hesitate-before-action": 76,
  "raises-the-standard-after-trying": 86,
  "weakens-trust-in-my-ability": 84,
};

const afterActivationSeverity: Record<AfterActivationValue, number> = {
  "correct-and-move-on": 16,
  "lose-momentum": 64,
  "keep-replaying-what-happened": 78,
  "pull-back-or-get-quieter": 70,
  "function-with-heavy-pressure": 84,
};

const confidenceImpactSpeedSeverity: Record<ConfidenceImpactSpeedValue, number> = {
  "very-slowly": 18,
  slowly: 36,
  moderately: 54,
  quickly: 78,
  "almost-immediately": 92,
};

const familiarStatementSeverity: Record<FamiliarStatementValue, number> = {
  "present-but-manageable": 24,
  "gets-louder-under-pressure": 54,
  "more-relentless-than-people-guess": 80,
  "looks-like-high-standards-feels-like-erosion": 86,
};

const criticFormSeverity: Record<CriticFormValue, number> = {
  "harsh-judgment": 80,
  "pressure-to-be-better": 84,
  "comparison-and-deficiency": 76,
  "replaying-flaws": 78,
  "predicting-future-failure": 82,
};

const hardestHitZoneSeverity: Record<HardestHitZoneValue, number> = {
  "work-performance": 76,
  relationships: 62,
  "visible-expression": 84,
  decisions: 72,
  "recovery-after-mistakes": 90,
  "self-image-and-comparison": 86,
};

const finalPatternSeverity: Record<FinalPatternValue, number> = {
  "not-running-the-system": 22,
  "intensifies-under-pressure": 54,
  "stronger-and-more-repetitive-than-i-admit": 78,
  "background-pressure-affects-confidence-and-energy": 84,
  "need-less-punishment-more-steadiness": 88,
};

const rankingWeights = [30, 24, 20, 16, 10];

const scoringWeights = {
  firstVoiceTone: 8,
  criticIntensity: 10,
  activationContexts: 8,
  voicePattern: 6,
  repetitionLevel: 8,
  rankingOrder: 8,
  perfectionPressure: 8,
  afterActivation: 8,
  confidenceImpactSpeed: 8,
  familiarStatement: 6,
  selfTrustRecoveryEase: 8,
  criticForm: 6,
  internalCost: 8,
  hardestHitZone: 4,
  finalPattern: 4,
} as const;

export const activationContextProfiles: ActivationContextProfile[] = [
  {
    key: "mistakes",
    label: "Mistakes",
    description: "The critic intensifies most when an error or flaw becomes visible enough to feel personally meaningful.",
    accent: "#FB7185",
  },
  {
    key: "visibility",
    label: "Visibility",
    description: "The voice grows louder when you are being seen, evaluated, or asked to occupy more space.",
    accent: "#67E8F9",
  },
  {
    key: "comparison",
    label: "Comparison",
    description: "The critic tightens when your mind starts using other people as proof that you are behind or not enough.",
    accent: "#93C5FD",
  },
  {
    key: "conflict",
    label: "Conflict",
    description: "The voice becomes more active when tension exposes the risk of being wrong, difficult, or disappointing.",
    accent: "#C4B5FD",
  },
  {
    key: "uncertainty",
    label: "Uncertainty",
    description: "The critic amplifies when clarity is low and your mind wants certainty before trust feels safe.",
    accent: "#FCD34D",
  },
  {
    key: "being-judged",
    label: "Being judged",
    description: "The strongest activation comes from evaluation, scrutiny, or the sense that someone else may be deciding your worth.",
    accent: "#FDA4AF",
  },
  {
    key: "underperformance",
    label: "Underperformance",
    description: "The voice tightens when you feel you are not meeting the standard you think you should already meet.",
    accent: "#FB7185",
  },
  {
    key: "unfinished-work",
    label: "Unfinished work",
    description: "The critic stays active when something is incomplete and the mind treats unfinished as personal failure.",
    accent: "#FCD34D",
  },
  {
    key: "disappointment",
    label: "Disappointment",
    description: "The inner voice gets louder when something does not go as hoped and quickly turns that into self-judgment.",
    accent: "#C4B5FD",
  },
  {
    key: "social-exposure",
    label: "Social exposure",
    description: "The critic rises when you feel observed, compared, or socially measurable in subtle ways.",
    accent: "#93C5FD",
  },
];

export const criticStyles: CriticStyle[] = [
  {
    key: "harsh-judgment",
    label: "Harsh judgment",
    description: "The voice goes sharp quickly and treats mistakes or strain like evidence against you.",
    accent: "#FB7185",
    icon: "signal",
  },
  {
    key: "perfection-pressure",
    label: "Perfection pressure",
    description: "The critic keeps raising the bar and turns effort into an endless should-have-been-better standard.",
    accent: "#FCD34D",
    icon: "graph",
  },
  {
    key: "comparison-deficiency",
    label: "Comparison deficiency",
    description: "The voice uses other people as proof that you are lacking, behind, or not measuring up.",
    accent: "#93C5FD",
    icon: "pattern",
  },
  {
    key: "replaying-flaws",
    label: "Replaying flaws",
    description: "The inner critic keeps reopening what went wrong and will not let the moment stay finished.",
    accent: "#67E8F9",
    icon: "trend",
  },
  {
    key: "future-failure-forecasting",
    label: "Future-failure forecasting",
    description: "The voice projects failure forward so the next move feels risky before it even happens.",
    accent: "#C4B5FD",
    icon: "insight",
  },
];

const softeningDirections: SofteningDirection[] = [
  {
    key: "notice-tone-first",
    label: "Notice the tone before debating the content",
    description: "The fastest softening often starts by hearing how punishing the voice is before you try to argue with every sentence it says.",
    accent: "#93C5FD",
  },
  {
    key: "reduce-repetition-window",
    label: "Reduce the repetition window",
    description: "Interrupt how long the critic keeps replaying after the event so one moment stops becoming a full internal spiral.",
    accent: "#67E8F9",
  },
  {
    key: "separate-correction-from-punishment",
    label: "Separate correction from punishment",
    description: "Keep the useful signal, but lower the attack. Self-talk becomes more effective when it stops treating pressure like a moral verdict.",
    accent: "#FB7185",
  },
  {
    key: "loosen-perfection-rules",
    label: "Loosen perfection rules",
    description: "The voice softens when effort is allowed to count without having to pass an impossible internal standard first.",
    accent: "#FCD34D",
  },
  {
    key: "rebuild-trust-after-mistakes",
    label: "Rebuild trust after mistakes",
    description: "The next repair is often not confidence hype. It is shortening how long the critic gets to define the meaning of a setback.",
    accent: "#C4B5FD",
  },
  {
    key: "stabilize-internal-response",
    label: "Build a steadier internal response",
    description: "What helps most is not silencing every critical thought, but creating a more reliable inner voice that can respond without eroding trust.",
    accent: "#FDA4AF",
  },
];

const costTemplates: Omit<InternalCostArea, "value">[] = [
  {
    key: "confidence-drop",
    label: "Confidence drop",
    description: "The voice rapidly lowers trust in your own ability or adequacy after stress or mistakes.",
    accent: "#93C5FD",
  },
  {
    key: "visibility-shrinkage",
    label: "Visibility shrinkage",
    description: "The critic makes it harder to take up space, be seen, or stay expressed once pressure rises.",
    accent: "#C4B5FD",
  },
  {
    key: "follow-through-disruption",
    label: "Follow-through disruption",
    description: "Momentum drops because internal pressure makes action, completion, or consistency more expensive.",
    accent: "#67E8F9",
  },
  {
    key: "recovery-difficulty",
    label: "Recovery difficulty",
    description: "The issue is not only what the voice says, but how long it keeps the system away from steadier self-trust afterward.",
    accent: "#FB7185",
  },
];

export const relatedInnerCriticTools: RelatedInnerCriticTool[] = [
  {
    title: "Confidence Reset Audit",
    description: "See where self-trust is already thinning under hesitation, pressure, and post-mistake recovery strain.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "signal",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
  {
    title: "Overthinking Loop Check",
    description: "Trace when the critic turns one thought into a longer mental replay or self-questioning loop.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Self-Sabotage Pattern Finder",
    description: "Explore whether harsh self-talk is feeding delay, withdrawal, or self-undermining patterns downstream.",
    category: "Personality & Behavior",
    minutes: "6 min",
    icon: "insight",
    href: buildToolHref({ slug: "self-sabotage-pattern-finder", categorySlug: "personality-behavior" }),
  },
  {
    title: "Emotional Trigger Decoder",
    description: "Read the activation layer underneath the critic so the internal attack sequence makes more sense.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "emotional-trigger-decoder", categorySlug: "emotional-regulation" }),
  },
];

export const innerCriticFaqItems: FaqItem[] = [
  {
    question: "What does an inner critic score actually mean?",
    answer:
      "It is a directional read of how forceful, repetitive, and costly your critical inner voice appears to be right now. It measures internal pressure load, not worth, talent, or diagnosis.",
  },
  {
    question: "Is the inner critic the same as low confidence?",
    answer:
      "Not exactly. Low confidence is an outcome state. The inner critic is one possible driver. This tool focuses on the voice itself: tone, repetition, perfection pressure, and how quickly it erodes self-trust.",
  },
  {
    question: "Why does my inner voice get harsher under pressure?",
    answer:
      "Pressure often makes the critic believe it needs to become louder to keep you safe, better, or more controlled. The problem is that the extra force may create strain that outlasts the situation.",
  },
  {
    question: "What is the difference between high standards and internal punishment?",
    answer:
      "High standards can guide correction. Internal punishment attacks the self, moves the goalposts, or keeps replaying after useful learning is already possible. The difference is not only content. It is also tone and after-cost.",
  },
  {
    question: "Why does the critic repeat the same message?",
    answer:
      "Because repetition creates a false sense of control. The mind keeps reopening the issue as if more replay will create safety, certainty, or improvement, even when it mostly creates pressure.",
  },
  {
    question: "Can the inner critic affect follow-through and visibility?",
    answer:
      "Yes. A strong critic often reduces room before action, makes exposure feel expensive, and lowers the internal energy available for completion once the pressure is active.",
  },
  {
    question: "Why do mistakes activate it so strongly?",
    answer:
      "Mistakes can trigger the critic because they combine imperfection, exposure, and the fear of being judged. For many people the biggest cost is not the mistake itself, but how much meaning the voice attaches to it afterward.",
  },
  {
    question: "How do I know whether my critic is perfectionistic or shame-based?",
    answer:
      "Perfectionistic criticism usually sounds like demand, standard-raising, or never-enough pressure. Shame-based criticism sounds more like deficiency, self-attack, or the feeling that a mistake proves something bad about who you are. Many patterns contain both.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Retake it when pressure contexts change, after a period of visible stress or setback, or after you have been practicing a different response to the critic for a few weeks. It works best as a before-and-after read, not a daily score chase.",
  },
  {
    question: "What should I do if the critic feels louder than my own steadiness?",
    answer:
      "Start with the part of the pattern that is most changeable first: tone, repetition window, perfection rules, or recovery after mistakes. The goal is not to instantly silence the voice. It is to make steady internal leadership stronger than attack.",
  },
];

export const meaningBlocks: MeaningBlock[] = [
  {
    title: "What this scan is actually reading",
    paragraphs: [
      "This tool is not measuring whether you ever think negatively about yourself. It is reading the strength and texture of the inner critic as a system. Specifically, it looks at how harsh the voice gets, how repetitive it becomes, how much perfection pressure it carries, and how strongly it starts eroding self-trust once stress appears.",
      "That matters because inner criticism is often talked about too vaguely. Some self-talk is corrective and brief. Some of it becomes an internal pressure climate. The difference is not just whether the thought is negative. It is how forceful, repetitive, and costly the voice becomes after a mistake, pressure point, or visible moment.",
    ],
  },
  {
    title: "Why the score is only the headline",
    paragraphs: [
      "The total score tells you how strong the inner critic currently appears to be, but the more useful information is underneath it. Is the voice mainly harsh? Is it more repetitive than punishing? Is the real problem perfection pressure? Or is the biggest cost how quickly confidence and momentum erode after the voice gets active?",
      "Those are different internal mechanics. A person whose critic is perfectionistic needs a different first intervention than someone whose critic is subtle but constant, or someone whose main issue is replaying mistakes long after the event is over. That is why this tool also points to a primary critic style, strongest activation context, most obvious internal cost, and a useful softening direction.",
    ],
  },
  {
    title: "How to read the result without turning it into another criticism loop",
    paragraphs: [
      "The point of the scan is not to prove that your inner world is harsh so you can judge yourself for that too. It is to make the pattern more visible. Once the voice becomes more visible, it stops blending into identity quite so completely. You can start hearing it as a pattern with a tone, style, and pressure cost instead of simply believing every sentence it produces.",
      "A higher result does not mean you are weak, broken, or doomed to keep talking to yourself this way. It means the critic has gained more force than is useful, and the internal system is paying for it in confidence, visibility, recovery, or follow-through. That is a workable problem when it becomes specific enough to read.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorial[] = [
  {
    key: "harshnessIntensity",
    paragraphs: [
      "Harshness Intensity measures how sharp, punishing, or attacking the tone becomes when the critic activates. Some internal voices are stern but proportionate. Others move quickly into contempt, disappointment, or self-attack. That tonal difference matters because harshness changes how safe it feels to recover from mistakes or keep showing up.",
      "A higher score here usually means the inner critic is doing more than evaluating. It is using force as if pressure will create improvement. In practice, that often creates compliance on the outside and erosion on the inside.",
    ],
  },
  {
    key: "repetitionLoad",
    paragraphs: [
      "Repetition Load measures how long the critic keeps talking after the triggering moment. This is where many people get worn down. One sharp internal sentence is difficult enough. The real drain often comes from the voice replaying, reopening, and repeating until the nervous system treats the event like it is still happening.",
      "When repetition is high, the critic becomes less like commentary and more like a loop. That loop narrows attention, drains energy, and makes it harder to return to steadier internal ground after pressure or error.",
    ],
  },
  {
    key: "perfectionPressure",
    paragraphs: [
      "Perfection Pressure measures how strongly the inner voice treats effort as insufficient, moves the standard upward, or insists that good-enough performance does not count. This dimension often hides in plain sight because it can sound like discipline or ambition.",
      "The difference is cost. Helpful standards guide action. Perfection pressure makes action, recovery, and learning more expensive. It tells you the problem is not only what happened, but that you should have already been beyond needing to struggle at all.",
    ],
  },
  {
    key: "selfTrustErosion",
    paragraphs: [
      "Self-Trust Erosion measures how quickly the critic changes your relationship to yourself after it activates. This includes confidence drop, visibility shrinkage, disrupted follow-through, and difficulty recovering internal steadiness.",
      "This is the downstream impact dimension. Some critics sound intense, but fade without doing too much damage. Others change the internal system fast. The voice may only speak for a moment, yet confidence falls, hesitation rises, and your willingness to keep going narrows almost immediately.",
    ],
  },
];

export const strengthenBlocks: ContentBlock[] = [
  {
    title: "High pressure without enough recovery",
    body:
      "The inner critic tends to strengthen when the system is already strained. Low recovery makes the voice more believable because there is less internal space available to question its tone or accuracy.",
  },
  {
    title: "Comparison that becomes self-measurement",
    body:
      "Comparison sharpens the critic because it gives it fresh material. The voice uses someone else’s pace, polish, or visibility as proof that you are behind or not enough.",
  },
  {
    title: "Visible mistakes that stay active too long",
    body:
      "Many people are not only hurt by the error. They are hurt by how long the critic keeps replaying it and treating it like identity evidence instead of one imperfect moment.",
  },
  {
    title: "Unresolved shame under the surface",
    body:
      "When shame is already nearby, the critic does not have to work hard to become intense. It can move quickly from correction into attack because the self already feels vulnerable to condemnation.",
  },
  {
    title: "Perfectionism dressed as responsibility",
    body:
      "The critic grows louder when high standards stop functioning like guidance and start functioning like constant internal threat. The voice says it is helping, but it mainly raises pressure.",
  },
  {
    title: "Being judged or emotionally exposed",
    body:
      "Evaluation, scrutiny, and exposure often increase critic intensity because the internal system assumes protection requires more control, more review, and less room for error.",
  },
  {
    title: "Weak recovery after setbacks",
    body:
      "If the voice stays active long after stress or mistakes, each new trigger lands on a system that is already partly worn down. That is how inner criticism becomes chronic background pressure.",
  },
];

export const softenBlocks: ContentBlock[] = [
  {
    title: "Notice tone, not only content",
    body:
      "Many people debate whether the critic is technically correct while missing how punishing the tone has become. Noticing the tone first helps you see when the voice has crossed from feedback into attack.",
  },
  {
    title: "Reduce the repetition window",
    body:
      "Softening the critic often starts by shortening how long it gets to keep talking after the event. One message is easier to work with than a whole internal replay loop.",
  },
  {
    title: "Separate correction from punishment",
    body:
      "Useful self-talk can acknowledge an error without turning it into self-erosion. The more clearly you separate learning from attack, the less the critic gets to masquerade as responsibility.",
  },
  {
    title: "Recover trust after mistakes",
    body:
      "Self-trust rebuilds when mistakes stop becoming endless internal evidence against you. Faster repair reduces how much one event gets to define the next one.",
  },
  {
    title: "Lower perfection pressure",
    body:
      "The inner voice softens when effort is allowed to count again before it reaches impossible standards. Good-enough action creates more room than internal demand ever will.",
  },
  {
    title: "Build a steadier internal response",
    body:
      "What helps most is often not trying to become endlessly positive. It is strengthening a more proportionate internal leader that can respond without collapsing into punishment, deficiency, or endless replay.",
  },
];

export const innerCriticStoryBlock: EditorialStory = {
  eyebrow: "How this often feels in real life",
  title: "Capable on the outside, worn down by the voice inside",
  quote:
    "Nina looked capable from the outside. She met deadlines, prepared carefully, and usually sounded composed. Inside, though, every visible mistake felt expensive. A small slip could turn into an hour of replay. A decent piece of work could still trigger the thought that it should have been stronger. Even when nobody else was criticizing her, the internal voice kept tightening the standard and questioning whether she really deserved trust. What drained her most was not a lack of ability. It was the way the critic kept turning pressure into self-erosion from the inside.",
  takeaway:
    "This is how the inner critic often works in real life: not as one dramatic sentence, but as a repeated internal pressure system that wears down confidence, rest, and room over time.",
  toneLabel: "Emotionally real",
  accent: "#FB7185",
};

export const nextStepParagraphs = [
  "If this pattern feels familiar, start by locating the part of the critic that is most workable first. For some people that is the harsh tone. For others it is the repetition window, the perfection rule, or the way self-trust fails to recover after a mistake. A focused entry point usually helps more than trying to become instantly kind to yourself in every situation.",
  "The next useful move is usually small and mechanical before it becomes emotional. Interrupt the replay sooner. Notice when the voice has shifted from guidance into attack. Lower one perfection rule that makes effort feel invalid unless it is exceptional. Those changes matter because they reduce the force of the critic in real time instead of only discussing it afterward.",
  "The long-term goal is not to eliminate all inner evaluation. It is to build a steadier internal response that can correct, learn, and move without using punishment as the main fuel source. Less attack from inside does not make you less responsible. It usually makes you more durable, more visible, and more trustworthy to yourself.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Inner Critic Reframe Workbook",
  description:
    "A structured guide for reducing harsh internal pressure, interrupting repetitive self-attack, and rebuilding a steadier inner voice.",
  buttonLabel: "View Next Step",
};

export const innerCriticIntensityScanMetadata = {
  title: innerCriticMetadata.title,
  description: innerCriticMetadata.description,
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
  return innerCriticBands.find((band) => score >= band.min && score <= band.max) ?? innerCriticBands[0];
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

function getContextScore(answers: InnerCriticAnswers, key: ActivationContextValue) {
  const totals: number[] = [];

  if (answers.activationContexts.includes(key)) {
    totals.push(activationContextSeverity[key]);
  }

  if (answers.hardestHitZone === "work-performance" && (key === "underperformance" || key === "being-judged")) {
    totals.push(74);
  }

  if (answers.hardestHitZone === "visible-expression" && (key === "visibility" || key === "social-exposure")) {
    totals.push(82);
  }

  if (answers.hardestHitZone === "self-image-and-comparison" && key === "comparison") {
    totals.push(88);
  }

  if (answers.hardestHitZone === "recovery-after-mistakes" && key === "mistakes") {
    totals.push(86);
  }

  if (answers.hardestHitZone === "decisions" && key === "uncertainty") {
    totals.push(74);
  }

  if (answers.criticForm === "comparison-and-deficiency" && key === "comparison") {
    totals.push(86);
  }

  if (answers.criticForm === "predicting-future-failure" && key === "uncertainty") {
    totals.push(78);
  }

  if (answers.firstVoiceTone === "demanding-perfectionistic" && key === "underperformance") {
    totals.push(72);
  }

  if (answers.firstVoiceTone === "harsh-critical" && key === "mistakes") {
    totals.push(78);
  }

  return clampScore(average(totals));
}

function getPatternScores(answers: InnerCriticAnswers): CriticStyleScore[] {
  const repetition = answers.repetitionLevel ? repetitionSeverity[answers.repetitionLevel] : 0;
  const intensity = typeof answers.criticIntensity === "number" ? clampScore(answers.criticIntensity) : 0;
  const perfection = typeof answers.perfectionPressure === "number" ? clampScore(answers.perfectionPressure) : 0;
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) ?? 0 : 0;
  const recoveryDifficulty =
    typeof answers.selfTrustRecoveryEase === "number" ? clampScore(100 - answers.selfTrustRecoveryEase) : 0;
  const confidenceImpact = answers.confidenceImpactSpeed
    ? confidenceImpactSpeedSeverity[answers.confidenceImpactSpeed]
    : 0;

  const raw: Record<CriticStyleKey, number[]> = {
    "harsh-judgment": [],
    "perfection-pressure": [],
    "comparison-deficiency": [],
    "replaying-flaws": [],
    "future-failure-forecasting": [],
  };

  if (answers.firstVoiceTone === "harsh-critical") {
    raw["harsh-judgment"].push(92);
  }
  if (answers.firstVoiceTone === "demanding-perfectionistic") {
    raw["perfection-pressure"].push(94);
  }
  if (answers.firstVoiceTone === "quiet-undermining") {
    raw["comparison-deficiency"].push(68);
    raw["future-failure-forecasting"].push(58);
  }
  if (answers.firstVoiceTone === "disappointed-tense") {
    raw["harsh-judgment"].push(58);
    raw["perfection-pressure"].push(54);
  }

  if (answers.criticForm) {
    raw[
      answers.criticForm === "pressure-to-be-better"
        ? "perfection-pressure"
        : answers.criticForm === "comparison-and-deficiency"
          ? "comparison-deficiency"
          : answers.criticForm === "replaying-flaws"
            ? "replaying-flaws"
            : answers.criticForm === "predicting-future-failure"
              ? "future-failure-forecasting"
              : "harsh-judgment"
    ].push(criticFormSeverity[answers.criticForm]);
  }

  if (answers.voicePattern === "repetitive-and-draining") {
    raw["replaying-flaws"].push(86);
  }
  if (answers.voicePattern === "perfectionistic-and-relentless") {
    raw["perfection-pressure"].push(90);
    raw["replaying-flaws"].push(62);
  }
  if (answers.voicePattern === "subtle-but-always-there") {
    raw["comparison-deficiency"].push(60);
    raw["future-failure-forecasting"].push(64);
  }

  if (answers.afterActivation === "keep-replaying-what-happened") {
    raw["replaying-flaws"].push(90);
  }
  if (answers.afterActivation === "function-with-heavy-pressure") {
    raw["perfection-pressure"].push(72);
  }
  if (answers.afterActivation === "pull-back-or-get-quieter") {
    raw["comparison-deficiency"].push(58);
  }
  if (answers.afterActivation === "lose-momentum") {
    raw["future-failure-forecasting"].push(60);
  }

  answers.activationContexts.forEach((context) => {
    if (context === "mistakes" || context === "disappointment") {
      raw["harsh-judgment"].push(66);
      raw["replaying-flaws"].push(72);
    }
    if (context === "unfinished-work" || context === "underperformance") {
      raw["perfection-pressure"].push(74);
    }
    if (context === "comparison" || context === "social-exposure") {
      raw["comparison-deficiency"].push(84);
    }
    if (context === "uncertainty") {
      raw["future-failure-forecasting"].push(74);
    }
    if (context === "visibility" || context === "being-judged") {
      raw["perfection-pressure"].push(62);
      raw["harsh-judgment"].push(58);
    }
  });

  if (answers.hardestHitZone === "self-image-and-comparison") {
    raw["comparison-deficiency"].push(90);
  }
  if (answers.hardestHitZone === "recovery-after-mistakes") {
    raw["replaying-flaws"].push(88);
  }
  if (answers.hardestHitZone === "work-performance") {
    raw["perfection-pressure"].push(74);
  }
  if (answers.hardestHitZone === "decisions") {
    raw["future-failure-forecasting"].push(72);
  }
  if (answers.hardestHitZone === "visible-expression") {
    raw["harsh-judgment"].push(56);
    raw["comparison-deficiency"].push(60);
  }

  raw["harsh-judgment"].push(intensity * 0.82, confidenceImpact * 0.58);
  raw["replaying-flaws"].push(repetition, rankingScore * 0.74);
  raw["perfection-pressure"].push(perfection, intensity * 0.4);
  raw["future-failure-forecasting"].push(recoveryDifficulty * 0.52);
  raw["comparison-deficiency"].push(confidenceImpact * 0.42);

  return criticStyles
    .map((style) => ({
      ...style,
      value: clampScore(average(raw[style.key])),
    }))
    .sort((left, right) => right.value - left.value);
}

function getSofteningDirection(
  dimensions: Record<InnerCriticDimensionKey, number>,
  primaryStyle: CriticStyleScore,
  strongestCost: InternalCostArea,
) {
  if (dimensions.perfectionPressure >= 74 || primaryStyle.key === "perfection-pressure") {
    return softeningDirections.find((item) => item.key === "loosen-perfection-rules") ?? softeningDirections[0];
  }

  if (dimensions.repetitionLoad >= 72 || primaryStyle.key === "replaying-flaws") {
    return softeningDirections.find((item) => item.key === "reduce-repetition-window") ?? softeningDirections[0];
  }

  if (dimensions.harshnessIntensity >= 74 || primaryStyle.key === "harsh-judgment") {
    return softeningDirections.find((item) => item.key === "separate-correction-from-punishment") ?? softeningDirections[0];
  }

  if (strongestCost.key === "recovery-difficulty" || dimensions.selfTrustErosion >= 74) {
    return softeningDirections.find((item) => item.key === "rebuild-trust-after-mistakes") ?? softeningDirections[0];
  }

  if (primaryStyle.key === "comparison-deficiency") {
    return softeningDirections.find((item) => item.key === "notice-tone-first") ?? softeningDirections[0];
  }

  return softeningDirections.find((item) => item.key === "stabilize-internal-response") ?? softeningDirections[0];
}

export function getInitialInnerCriticAnswers(): InnerCriticAnswers {
  return {
    activationContexts: [],
    rankingOrder: criticRankingItems.map((item) => item.key),
    rankingConfirmed: false,
  };
}

export function isInnerCriticStepComplete(step: InnerCriticStep, answers: InnerCriticAnswers) {
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

export function calculateInnerCriticResult(answers: InnerCriticAnswers): InnerCriticResult {
  const firstVoiceTone = answers.firstVoiceTone ? firstVoiceToneSeverity[answers.firstVoiceTone] : undefined;
  const criticIntensity =
    typeof answers.criticIntensity === "number" ? clampScore(answers.criticIntensity) : undefined;
  const activationContexts =
    answers.activationContexts.length > 0
      ? clampScore(
          average(answers.activationContexts.map((item) => activationContextSeverity[item])) * 0.74 +
            (answers.activationContexts.length / 4) * 20,
        )
      : undefined;
  const voicePattern = answers.voicePattern ? voicePatternSeverity[answers.voicePattern] : undefined;
  const repetitionLevel = answers.repetitionLevel ? repetitionSeverity[answers.repetitionLevel] : undefined;
  const rankingScore = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const perfectionPressure =
    typeof answers.perfectionPressure === "number" ? clampScore(answers.perfectionPressure) : undefined;
  const afterActivation = answers.afterActivation ? afterActivationSeverity[answers.afterActivation] : undefined;
  const confidenceImpactSpeed = answers.confidenceImpactSpeed
    ? confidenceImpactSpeedSeverity[answers.confidenceImpactSpeed]
    : undefined;
  const familiarStatement = answers.familiarStatement
    ? familiarStatementSeverity[answers.familiarStatement]
    : undefined;
  const selfTrustRecoveryDifficulty =
    typeof answers.selfTrustRecoveryEase === "number"
      ? clampScore(100 - answers.selfTrustRecoveryEase)
      : undefined;
  const criticForm = answers.criticForm ? criticFormSeverity[answers.criticForm] : undefined;
  const internalCostAverage =
    typeof answers.confidenceDrop === "number" &&
    typeof answers.visibilityShrinkage === "number" &&
    typeof answers.followThroughDisruption === "number"
      ? clampScore(
          (answers.confidenceDrop + answers.visibilityShrinkage + answers.followThroughDisruption) / 3,
        )
      : undefined;
  const hardestHitZone = answers.hardestHitZone ? hardestHitZoneSeverity[answers.hardestHitZone] : undefined;
  const finalPattern = answers.finalPattern ? finalPatternSeverity[answers.finalPattern] : undefined;

  const weightedEntries = [
    { value: firstVoiceTone, weight: scoringWeights.firstVoiceTone },
    { value: criticIntensity, weight: scoringWeights.criticIntensity },
    { value: activationContexts, weight: scoringWeights.activationContexts },
    { value: voicePattern, weight: scoringWeights.voicePattern },
    { value: repetitionLevel, weight: scoringWeights.repetitionLevel },
    { value: rankingScore, weight: scoringWeights.rankingOrder },
    { value: perfectionPressure, weight: scoringWeights.perfectionPressure },
    { value: afterActivation, weight: scoringWeights.afterActivation },
    { value: confidenceImpactSpeed, weight: scoringWeights.confidenceImpactSpeed },
    { value: familiarStatement, weight: scoringWeights.familiarStatement },
    { value: selfTrustRecoveryDifficulty, weight: scoringWeights.selfTrustRecoveryEase },
    { value: criticForm, weight: scoringWeights.criticForm },
    { value: internalCostAverage, weight: scoringWeights.internalCost },
    { value: hardestHitZone, weight: scoringWeights.hardestHitZone },
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

  const dimensions: Record<InnerCriticDimensionKey, number> = {
    harshnessIntensity: weightedAverage([
      { value: firstVoiceTone, weight: 0.26 },
      { value: criticIntensity, weight: 0.24 },
      { value: criticForm, weight: 0.18 },
      { value: afterActivation, weight: 0.14 },
      { value: confidenceImpactSpeed, weight: 0.08 },
      { value: familiarStatement, weight: 0.1 },
    ]),
    repetitionLoad: weightedAverage([
      { value: repetitionLevel, weight: 0.34 },
      { value: rankingScore, weight: 0.2 },
      { value: voicePattern, weight: 0.16 },
      {
        value:
          answers.afterActivation === "keep-replaying-what-happened"
            ? 92
            : answers.afterActivation === "function-with-heavy-pressure"
              ? 68
              : answers.afterActivation === "pull-back-or-get-quieter"
                ? 54
                : afterActivation,
        weight: 0.14,
      },
      {
        value:
          answers.criticForm === "replaying-flaws"
            ? 88
            : answers.criticForm === "predicting-future-failure"
              ? 72
              : undefined,
        weight: 0.08,
      },
      { value: activationContexts, weight: 0.08 },
    ]),
    perfectionPressure: weightedAverage([
      { value: perfectionPressure, weight: 0.34 },
      {
        value:
          answers.firstVoiceTone === "demanding-perfectionistic"
            ? 94
            : answers.firstVoiceTone === "disappointed-tense"
              ? 56
              : undefined,
        weight: 0.14,
      },
      { value: criticForm, weight: 0.16 },
      { value: voicePattern, weight: 0.12 },
      {
        value:
          answers.activationContexts.some((item) =>
            ["underperformance", "unfinished-work", "being-judged", "visibility"].includes(item),
          )
            ? 78
            : undefined,
        weight: 0.12,
      },
      { value: finalPattern, weight: 0.12 },
    ]),
    selfTrustErosion: weightedAverage([
      { value: selfTrustRecoveryDifficulty, weight: 0.24 },
      { value: confidenceImpactSpeed, weight: 0.14 },
      { value: internalCostAverage, weight: 0.26 },
      { value: rankingScore, weight: 0.1 },
      { value: finalPattern, weight: 0.14 },
      { value: familiarStatement, weight: 0.12 },
    ]),
  };

  const patternScores = getPatternScores(answers);
  const primaryCriticStyle = patternScores[0] ?? {
    ...criticStyles[0],
    value: 0,
  };

  const activationProfileScores = activationContextProfiles
    .map((profile) => ({
      ...profile,
      value: getContextScore(answers, profile.key),
    }))
    .sort((left, right) => right.value - left.value);

  const mainActivationContext = activationProfileScores[0] ?? activationContextProfiles[0];

  const recoveryDifficulty = selfTrustRecoveryDifficulty ?? clampScore(100 - (answers.selfTrustRecoveryEase ?? 50));

  const costMetrics = [
    {
      ...costTemplates[0],
      value: answers.confidenceDrop ?? 38,
    },
    {
      ...costTemplates[1],
      value: answers.visibilityShrinkage ?? 34,
    },
    {
      ...costTemplates[2],
      value: answers.followThroughDisruption ?? 36,
    },
    {
      ...costTemplates[3],
      value: recoveryDifficulty,
    },
  ].sort((left, right) => right.value - left.value);

  const strongestInternalCost = costMetrics[0];
  const mostUsefulSofteningDirection = getSofteningDirection(dimensions, primaryCriticStyle, strongestInternalCost);

  const criticIntensityLevel = criticIntensity ?? clampScore(score * 0.92);
  const repetitionLevelScore = dimensions.repetitionLoad;
  const perfectionPressureLevel = dimensions.perfectionPressure;
  const selfTrustErosionLevel = dimensions.selfTrustErosion;
  const postMistakeIntensity = clampScore(
    weightedAverage([
      { value: answers.activationContexts.includes("mistakes") ? 84 : 42, weight: 0.34 },
      {
        value:
          answers.afterActivation === "keep-replaying-what-happened"
            ? 86
            : answers.afterActivation === "lose-momentum"
              ? 70
              : afterActivation,
        weight: 0.22,
      },
      { value: recoveryDifficulty, weight: 0.24 },
      {
        value:
          answers.hardestHitZone === "recovery-after-mistakes"
            ? 90
            : answers.hardestHitZone === "work-performance"
              ? 66
              : undefined,
        weight: 0.2,
      },
    ]),
  );

  const previewMetrics: PreviewMetric[] = [
    { label: "Harshness", value: dimensions.harshnessIntensity, accent: "#FB7185" },
    { label: "Repetition", value: repetitionLevelScore, accent: "#67E8F9" },
    { label: "Perfection pressure", value: perfectionPressureLevel, accent: "#FCD34D" },
    { label: "Post-mistake intensity", value: postMistakeIntensity, accent: "#FDA4AF" },
    { label: "Self-trust erosion", value: selfTrustErosionLevel, accent: "#C4B5FD" },
  ];

  const waveform = [
    criticIntensityLevel * 0.58,
    dimensions.harshnessIntensity * 0.72,
    repetitionLevelScore * 0.84,
    perfectionPressureLevel * 0.62,
    dimensions.harshnessIntensity * 0.92,
    postMistakeIntensity * 0.76,
    repetitionLevelScore * 0.9,
    selfTrustErosionLevel * 0.68,
    recoveryDifficulty * 0.64,
    selfTrustErosionLevel * 0.9,
  ].map((value, index) => ({
    value: clampScore(value),
    accent:
      index % 5 === 0
        ? "#FB7185"
        : index % 5 === 1
          ? "#67E8F9"
          : index % 5 === 2
            ? "#C4B5FD"
            : index % 5 === 3
              ? "#FCD34D"
              : "#93C5FD",
  }));

  const criticLabel =
    "Your pattern suggests that the critic is doing more than evaluating mistakes — it is shaping pressure, repetition, and the speed at which self-trust drops under stress.";
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The most active critic style appears to be ${primaryCriticStyle.label.toLowerCase()}, and it is most easily triggered around ${mainActivationContext.label.toLowerCase()}.`;
  const costInsight = `${band.costLead} The clearest internal cost right now is ${strongestInternalCost.label.toLowerCase()}, which suggests the voice is affecting more than thoughts alone.`;

  return {
    score,
    completionRatio,
    band,
    dimensions,
    primaryCriticStyle,
    mainActivationContext,
    strongestInternalCost,
    mostUsefulSofteningDirection,
    patternScores,
    costMetrics,
    previewMetrics,
    waveform,
    criticLabel,
    interpretation,
    standout,
    costInsight,
    criticIntensityLevel,
    repetitionLevelScore,
    perfectionPressureLevel,
    selfTrustErosionLevel,
    postMistakeIntensity,
    recoveryDifficulty,
  };
}

export const heroPreviewResult = calculateInnerCriticResult({
  firstVoiceTone: "demanding-perfectionistic",
  criticIntensity: 76,
  activationContexts: ["mistakes", "visibility", "underperformance", "being-judged"],
  voicePattern: "repetitive-and-draining",
  repetitionLevel: "strongly",
  rankingOrder: [
    "raises-the-standard-after-trying",
    "replays-mistakes-too-long",
    "weakens-trust-in-my-ability",
    "hesitate-before-action",
    "should-have-done-better",
  ],
  rankingConfirmed: true,
  perfectionPressure: 82,
  afterActivation: "function-with-heavy-pressure",
  confidenceImpactSpeed: "quickly",
  familiarStatement: "looks-like-high-standards-feels-like-erosion",
  selfTrustRecoveryEase: 30,
  criticForm: "pressure-to-be-better",
  confidenceDrop: 78,
  visibilityShrinkage: 66,
  followThroughDisruption: 72,
  hardestHitZone: "work-performance",
  finalPattern: "background-pressure-affects-confidence-and-energy",
});
