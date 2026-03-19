import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type DistanceReactionValue =
  | "stay-steady"
  | "wonder-what-changed"
  | "reconnect-quickly"
  | "pull-back-first";

export type ReassuranceNeedValue =
  | "very-little"
  | "a-little"
  | "moderate"
  | "high"
  | "very-high";

export type ReducedAvailabilityReactionValue =
  | "grounded-let-settle"
  | "monitor-closely"
  | "anxious-want-clarity"
  | "detach-protect";

export type ExpressNeedsValue =
  | "very-easy"
  | "mostly-easy"
  | "mixed"
  | "difficult"
  | "very-difficult";
export type RepairComfortValue =
  | "very-comfortable"
  | "mostly-comfortable"
  | "mixed"
  | "uncomfortable"
  | "very-uncomfortable";
export type ReceivingCareValue =
  | "very-easy"
  | "mostly-easy"
  | "mixed"
  | "difficult"
  | "very-difficult";
export type BoundaryVoiceValue =
  | "very-clear"
  | "mostly-clear"
  | "mixed"
  | "hard-to-hold"
  | "very-hard-to-hold";

export type FamiliarPatternValue =
  | "steady-close"
  | "activated-under-uncertainty"
  | "want-and-overwhelmed"
  | "protect-with-distance";

export type WithdrawalLikelihoodValue =
  | "very-unlikely"
  | "unlikely"
  | "mixed"
  | "likely"
  | "very-likely";

export type FinalPatternValue =
  | "secure-responsive"
  | "activated-unstable"
  | "alternate-overwhelmed"
  | "distance-over-expression";

export type RankItemKey =
  | "clarity-quickly"
  | "stay-steady"
  | "pull-back-exposed"
  | "need-reassurance"
  | "closeness-distance-tension";

export type AttachmentDimensionKey =
  | "closenessComfort"
  | "reassurancePull"
  | "withdrawalTendency"
  | "emotionalSteadiness";

export type AttachmentProfileKey =
  | "steady-secure"
  | "leaning-anxious"
  | "leaning-avoidant"
  | "mixed-push-pull"
  | "heightened-reassurance";

export type TriggerCategoryKey =
  | "uncertainty"
  | "distance"
  | "emotional-ambiguity"
  | "disappointment"
  | "overexposure";

export type AttachmentChoiceOption = {
  value: string;
  label: string;
  description?: string;
};

export type AttachmentAnswers = {
  distanceReaction?: DistanceReactionValue;
  closenessComfort?: number;
  reassuranceNeed?: ReassuranceNeedValue;
  reducedAvailabilityReaction?: ReducedAvailabilityReactionValue;
  expressNeeds?: ExpressNeedsValue;
  familiarPattern?: FamiliarPatternValue;
  overanalyze?: number;
  withdrawalLikelihood?: WithdrawalLikelihoodValue;
  repairComfort?: RepairComfortValue;
  receivingCare?: ReceivingCareValue;
  boundaryVoice?: BoundaryVoiceValue;
  assumptionSpeed?: number;
  ruptureRecovery?: number;
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
  field:
    | "distanceReaction"
    | "reducedAvailabilityReaction"
    | "familiarPattern"
    | "finalPattern";
  options: AttachmentChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field:
    | "reassuranceNeed"
    | "expressNeeds"
    | "withdrawalLikelihood"
    | "repairComfort"
    | "receivingCare"
    | "boundaryVoice";
  options: AttachmentChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "closenessComfort" | "overanalyze" | "assumptionSpeed" | "ruptureRecovery";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  items: Array<{
    key: RankItemKey;
    label: string;
  }>;
};

export type AttachmentStep = ScenarioChoiceStep | SegmentedStep | SliderStep | DragRankStep;

export type AttachmentDimension = {
  key: AttachmentDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type TriggerCategory = {
  key: TriggerCategoryKey;
  label: string;
  description: string;
  accent: string;
  icon: IconName;
};

export type TriggerScore = TriggerCategory & {
  value: number;
};

export type AttachmentProfile = {
  key: AttachmentProfileKey;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  triggerLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type RadarMetric = {
  key: "openness" | "steadiness" | "needForClarity" | "toleranceForDistance" | "expressionOfNeed";
  label: string;
  value: number;
  accent: string;
};

export type RelatedAttachmentTool = {
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
  key: AttachmentDimensionKey;
  paragraphs: string[];
};

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type AttachmentResult = {
  profile: AttachmentProfile;
  completionRatio: number;
  isComplete: boolean;
  activationIndex: number;
  dimensions: Record<AttachmentDimensionKey, number>;
  mapPlacement: {
    x: number;
    y: number;
  };
  triggerScores: TriggerScore[];
  radarMetrics: RadarMetric[];
  primaryActivationPattern: string;
  protectiveStrategy: string;
  relationalPressureTrigger: TriggerCategory;
  strongestStabilizingTrait: string;
  signalLabel: string;
  interpretation: string;
  standout: string;
  triggerInsight: string;
};

export const attachmentPatternMetadata = {
  eyebrow: "RELATIONSHIP PATTERN TOOL",
  title: "Attachment Pattern Spotter",
  description:
    "See how closeness, distance, reassurance, and uncertainty shape your relationship pattern. This tool helps you spot the attachment moves that show up before you fully notice them.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const attachmentDimensions: AttachmentDimension[] = [
  {
    key: "closenessComfort",
    label: "Closeness Comfort",
    description: "How naturally emotional proximity and relational openness feel when connection is going well.",
    icon: "signal",
    accent: "#93C5FD",
  },
  {
    key: "reassurancePull",
    label: "Reassurance Pull",
    description: "How quickly uncertainty in connection creates a pull toward clarity, confirmation, or emotional checking.",
    icon: "graph",
    accent: "#FDA4AF",
  },
  {
    key: "withdrawalTendency",
    label: "Withdrawal Tendency",
    description: "How likely the system is to protect itself through distance, shut-down, or emotional self-containment.",
    icon: "structure",
    accent: "#C4B5FD",
  },
  {
    key: "emotionalSteadiness",
    label: "Emotional Steadiness",
    description: "How able you tend to be to stay grounded without quickly escalating or collapsing when connection shifts.",
    icon: "shield",
    accent: "#6EE7B7",
  },
];

export const triggerCategories: TriggerCategory[] = [
  {
    key: "uncertainty",
    label: "Uncertainty",
    description: "Not knowing where you stand can activate monitoring, urgency, or a fast need for clarity.",
    accent: "#FCD34D",
    icon: "insight",
  },
  {
    key: "distance",
    label: "Distance",
    description: "Reduced availability or emotional distance may quickly register as a relational pressure signal.",
    accent: "#93C5FD",
    icon: "signal",
  },
  {
    key: "emotional-ambiguity",
    label: "Emotional ambiguity",
    description: "Mixed tone, unclear cues, or hard-to-read behavior can keep the system searching for meaning.",
    accent: "#67E8F9",
    icon: "pattern",
  },
  {
    key: "disappointment",
    label: "Disappointment",
    description: "Let-down or unmet expectation can activate protection before needs are fully expressed.",
    accent: "#FDA4AF",
    icon: "graph",
  },
  {
    key: "overexposure",
    label: "Overexposure",
    description: "Too much emotional intensity or vulnerability can trigger a wish to pull back and regain safety.",
    accent: "#C4B5FD",
    icon: "lock",
  },
];

export const attachmentProfiles: AttachmentProfile[] = [
  {
    key: "steady-secure",
    title: "Steady Secure Pattern",
    descriptor: "Closeness tends to feel workable, and shifts in connection do not rapidly destabilize the whole system.",
    summary: "Your responses suggest a pattern with relatively solid closeness comfort, lower reactive pull, and enough steadiness to stay responsive when connection moves around.",
    interpretation:
      "That does not mean relationships always feel easy. It means your system appears more able than average to tolerate temporary uncertainty without immediately reaching for reassurance or retreating into protection.",
    standoutLead: "The strongest signal is steadiness - not perfection, but enough internal support to avoid reacting faster than the relationship actually requires.",
    triggerLead: "When this pattern does get activated, it is usually more by specific context than by closeness itself.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#93C5FD",
    glow: "rgba(110, 231, 183, 0.24)",
  },
  {
    key: "leaning-anxious",
    title: "Leaning Anxious Pattern",
    descriptor: "Connection uncertainty tends to activate monitoring, reassurance pull, and a faster search for clarity.",
    summary: "Your pattern suggests that closeness matters strongly, but instability in connection can quickly pull the system into heightened alertness or emotional activation.",
    interpretation:
      "This does not mean you are needy or broken. It means relational uncertainty appears to register quickly enough that your system looks for signs, reassurance, or contact before steadiness has time to settle back in.",
    standoutLead: "The clearest signal is that uncertainty in connection activates faster than your system can fully downshift on its own.",
    triggerLead: "The main trigger is rarely closeness itself. It is the felt instability of closeness becoming harder to read.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#FCD34D",
    glow: "rgba(253, 164, 175, 0.22)",
  },
  {
    key: "leaning-avoidant",
    title: "Leaning Avoidant Pattern",
    descriptor: "Protection tends to show up more through distance, inward processing, or keeping too much inside.",
    summary: "Your responses suggest that emotional exposure and relational pressure may be easier to manage through self-containment than open expression.",
    interpretation:
      "That is not the same as not caring. It usually means closeness can become harder to stay inside once it starts to feel demanding, exposing, or harder to regulate from within.",
    standoutLead: "The strongest signal is protective distance - a system that seems to trust retreat more quickly than emotional reliance.",
    triggerLead: "The activating pressure often comes less from uncertainty alone and more from feeling too exposed, disappointed, or emotionally crowded.",
    gradientFrom: "#93C5FD",
    gradientTo: "#C4B5FD",
    glow: "rgba(147, 197, 253, 0.22)",
  },
  {
    key: "mixed-push-pull",
    title: "Mixed Push-Pull Pattern",
    descriptor: "Connection appears wanted and meaningful, but too much intensity can also activate overwhelm, retreat, or confusion.",
    summary: "This profile suggests that closeness and protection are both highly active, which can create an approach-and-retreat rhythm when relationships start to matter more.",
    interpretation:
      "People with this pattern often feel confused by their own responses because both needs are real. One part of the system wants connection, while another part wants safety, space, or self-protection once exposure rises.",
    standoutLead: "The clearest signal is internal conflict rather than one simple direction. Connection matters, but it does not always feel easy to stay inside once it deepens.",
    triggerLead: "Activation often comes from the point where wanting closeness and fearing what it might cost begin to collide.",
    gradientFrom: "#C4B5FD",
    gradientTo: "#FDA4AF",
    glow: "rgba(196, 181, 253, 0.24)",
  },
  {
    key: "heightened-reassurance",
    title: "Heightened Reassurance Dependency",
    descriptor: "Unclear connection appears to activate a strong need for confirmation, contact, or emotional certainty relatively quickly.",
    summary: "Your responses suggest that the system leans strongly toward reassurance-seeking when connection feels hard to read, even if closeness itself is not the problem.",
    interpretation:
      "This is not a moral failure. It is a pattern in which the mind and body seem to stabilize through relational confirmation. When that confirmation feels unavailable, activation can rise quickly.",
    standoutLead: "The strongest signal is how quickly the system seems to organize around needing clarity, reassurance, or emotional proof once uncertainty appears.",
    triggerLead: "The core trigger looks less like distance alone and more like the combination of distance plus not knowing what it means.",
    gradientFrom: "#FCD34D",
    gradientTo: "#FDA4AF",
    glow: "rgba(252, 211, 77, 0.22)",
  },
];

const distanceReactionOptions: AttachmentChoiceOption[] = [
  {
    value: "stay-steady",
    label: "A. I stay fairly steady and give space",
    description: "The first response is usually to remain grounded rather than escalate internally.",
  },
  {
    value: "wonder-what-changed",
    label: "B. I start wondering what changed",
    description: "A subtle monitoring pattern appears before anything outward necessarily happens.",
  },
  {
    value: "reconnect-quickly",
    label: "C. I feel more pulled to reconnect quickly",
    description: "The system wants clarification or connection soon after the shift is felt.",
  },
  {
    value: "pull-back-first",
    label: "D. I shut down or pull back first",
    description: "Protection tends to show up through distancing before emotional expression gets a turn.",
  },
];

const reassuranceNeedOptions: AttachmentChoiceOption[] = [
  { value: "very-little", label: "Very little" },
  { value: "a-little", label: "A little" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High" },
  { value: "very-high", label: "Very high" },
];

const reducedAvailabilityOptions: AttachmentChoiceOption[] = [
  {
    value: "grounded-let-settle",
    label: "A. I stay grounded and let things settle",
    description: "Temporary shifts in availability do not immediately destabilize the whole relational field.",
  },
  {
    value: "monitor-closely",
    label: "B. I monitor the change closely",
    description: "Attention tightens around the change, even if it is not addressed immediately.",
  },
  {
    value: "anxious-want-clarity",
    label: "C. I feel anxious and want clarity fast",
    description: "Uncertainty pulls for explanation, reassurance, or contact quickly.",
  },
  {
    value: "detach-protect",
    label: "D. I detach to protect myself",
    description: "The system tends to reduce emotional exposure when the connection feels less available.",
  },
];

const expressNeedsOptions: AttachmentChoiceOption[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "mostly-easy", label: "Mostly easy" },
  { value: "mixed", label: "Mixed" },
  { value: "difficult", label: "Difficult" },
  { value: "very-difficult", label: "Very difficult" },
];

const familiarPatternOptions: AttachmentChoiceOption[] = [
  {
    value: "steady-close",
    label: "A. I value closeness but usually stay steady",
    description: "Connection matters, but the system usually keeps enough steadiness to respond rather than react.",
  },
  {
    value: "activated-under-uncertainty",
    label: "B. I become more activated when connection feels uncertain",
    description: "The relationship feels most destabilizing when it becomes harder to read or trust.",
  },
  {
    value: "want-and-overwhelmed",
    label: "C. I want connection but also feel overwhelmed by too much of it",
    description: "Longing and protection can both become active at the same time.",
  },
  {
    value: "protect-with-distance",
    label: "D. I protect myself by creating distance",
    description: "The system tends to regain safety through space, privacy, or emotional restraint.",
  },
];

const withdrawalLikelihoodOptions: AttachmentChoiceOption[] = [
  { value: "very-unlikely", label: "Very unlikely" },
  { value: "unlikely", label: "Unlikely" },
  { value: "mixed", label: "Mixed" },
  { value: "likely", label: "Likely" },
  { value: "very-likely", label: "Very likely" },
];

const finalPatternOptions: AttachmentChoiceOption[] = [
  {
    value: "secure-responsive",
    label: "A. I usually stay fairly secure and responsive",
    description: "There is usually enough steadiness to remain present without escalating quickly.",
  },
  {
    value: "activated-unstable",
    label: "B. I become more activated when closeness feels unstable",
    description: "Relational uncertainty tends to trigger faster internal activation than I want.",
  },
  {
    value: "alternate-overwhelmed",
    label: "C. I alternate between wanting connection and feeling overwhelmed by it",
    description: "Closeness can feel deeply wanted and still become destabilizing once intensity rises.",
  },
  {
    value: "distance-over-expression",
    label: "D. I protect myself with distance more than expression",
    description: "Retreat or self-containment tends to come more naturally than openly naming need.",
  },
];

export const rankItems: Array<{ key: RankItemKey; label: string }> = [
  { key: "clarity-quickly", label: "I want clarity quickly when something feels off" },
  { key: "stay-steady", label: "I stay steady even when connection shifts" },
  { key: "pull-back-exposed", label: "I pull back when I feel too exposed" },
  { key: "need-reassurance", label: "I need reassurance when uncertainty rises" },
  { key: "closeness-distance-tension", label: "I struggle with closeness and distance at the same time" },
];

export const attachmentSteps: AttachmentStep[] = [
  {
    id: "distance-reaction",
    step: 1,
    eyebrow: "Step 01 · First reaction",
    hint: "This is about your first internal movement when connection feels less clear, not the polished response you might choose later.",
    question: "When someone important feels distant or harder to read, what happens first for you?",
    kind: "scenario-choice",
    field: "distanceReaction",
    options: distanceReactionOptions,
  },
  {
    id: "closeness-comfort",
    step: 2,
    eyebrow: "Step 02 · Closeness comfort",
    hint: "This slider reflects how natural emotional closeness feels when the relationship is going well and nothing active needs to be repaired.",
    question: "How comfortable are you with emotional closeness when things are going well?",
    kind: "slider",
    field: "closenessComfort",
    label: "Closeness comfort",
    minLabel: "Very uncomfortable",
    maxLabel: "Very comfortable",
  },
  {
    id: "reassurance-need",
    step: 3,
    eyebrow: "Step 03 · Reassurance pull",
    hint: "This is not about being too much. It is about how strongly uncertainty tends to pull the system toward reassurance.",
    question: "How much reassurance do you tend to need when a relationship feels uncertain?",
    kind: "segmented",
    field: "reassuranceNeed",
    options: reassuranceNeedOptions,
  },
  {
    id: "reduced-availability",
    step: 4,
    eyebrow: "Step 04 · Reduced availability",
    hint: "Choose the response that feels most familiar, even if you do not like it. The profile is meant to map the pattern, not judge it.",
    question: "If someone becomes less available than usual, which reaction feels most familiar?",
    kind: "scenario-choice",
    field: "reducedAvailabilityReaction",
    options: reducedAvailabilityOptions,
  },
  {
    id: "express-needs",
    step: 5,
    eyebrow: "Step 05 · Need expression",
    hint: "This step helps separate wanting closeness from feeling able to express emotional needs inside it.",
    question: "How easy is it for you to openly express emotional needs?",
    kind: "segmented",
    field: "expressNeeds",
    options: expressNeedsOptions,
  },
  {
    id: "familiar-pattern",
    step: 6,
    eyebrow: "Step 06 · Familiar relationship pattern",
    hint: "Pick the pattern that feels most recognizable overall, not only in one specific relationship.",
    question: "Which pattern feels most familiar in relationships?",
    kind: "scenario-choice",
    field: "familiarPattern",
    options: familiarPatternOptions,
  },
  {
    id: "overanalyze",
    step: 7,
    eyebrow: "Step 07 · Signal monitoring",
    hint: "Relational overanalysis often appears as trying to read tone, timing, silence, or change for hidden meaning.",
    question: "How often do you overanalyze relational signals, tone, or changes in behavior?",
    kind: "slider",
    field: "overanalyze",
    label: "Relational overanalysis",
    minLabel: "Hardly ever",
    maxLabel: "Very often",
  },
  {
    id: "withdrawal-likelihood",
    step: 8,
    eyebrow: "Step 08 · Protective withdrawal",
    hint: "This is about whether the system tends to move toward distance when it feels disappointed, exposed, or unsure.",
    question: "How likely are you to withdraw when you feel disappointed, exposed, or unsure?",
    kind: "segmented",
    field: "withdrawalLikelihood",
    options: withdrawalLikelihoodOptions,
  },
  {
    id: "repair-comfort",
    step: 9,
    eyebrow: "Step 09 · Repair comfort",
    hint: "This is about what happens after friction, not only before it. Repair ability often stabilizes attachment patterns more than perfect harmony does.",
    question: "How comfortable are you with repair after a difficult or tense relational moment?",
    kind: "segmented",
    field: "repairComfort",
    options: [
      { value: "very-comfortable", label: "Very comfortable" },
      { value: "mostly-comfortable", label: "Mostly comfortable" },
      { value: "mixed", label: "Mixed" },
      { value: "uncomfortable", label: "Uncomfortable" },
      { value: "very-uncomfortable", label: "Very uncomfortable" },
    ],
  },
  {
    id: "receiving-care",
    step: 10,
    eyebrow: "Step 10 · Receiving care",
    hint: "Some people want care but have trouble fully receiving it without questioning it, minimizing it, or feeling too exposed.",
    question: "How easy is it for you to receive care, reassurance, or comfort when it is offered sincerely?",
    kind: "segmented",
    field: "receivingCare",
    options: [
      { value: "very-easy", label: "Very easy" },
      { value: "mostly-easy", label: "Mostly easy" },
      { value: "mixed", label: "Mixed" },
      { value: "difficult", label: "Difficult" },
      { value: "very-difficult", label: "Very difficult" },
    ],
  },
  {
    id: "boundary-voice",
    step: 11,
    eyebrow: "Step 11 · Boundary voice",
    hint: "Boundaries matter here because unclear limits often make closeness feel more overwhelming and distance feel more loaded.",
    question: "How clearly can you hold a boundary without immediately fearing distance, conflict, or rejection?",
    kind: "segmented",
    field: "boundaryVoice",
    options: [
      { value: "very-clear", label: "Very clearly" },
      { value: "mostly-clear", label: "Mostly clearly" },
      { value: "mixed", label: "Mixed" },
      { value: "hard-to-hold", label: "Hard to hold" },
      { value: "very-hard-to-hold", label: "Very hard to hold" },
    ],
  },
  {
    id: "assumption-speed",
    step: 12,
    eyebrow: "Step 12 · Assumption speed",
    hint: "This measures how quickly your mind starts assigning meaning when connection changes, even before you have enough information.",
    question: "How quickly do you assume something has shifted when communication or connection feels quieter than usual?",
    kind: "slider",
    field: "assumptionSpeed",
    label: "Assumption speed",
    minLabel: "Very slowly",
    maxLabel: "Very quickly",
  },
  {
    id: "rupture-recovery",
    step: 13,
    eyebrow: "Step 13 · Settling after a wobble",
    hint: "Some patterns activate fast but also settle fairly well. Others stay relationally charged much longer than the moment itself.",
    question: "After a relational wobble, how long does it usually take your system to feel settled again?",
    kind: "slider",
    field: "ruptureRecovery",
    label: "Rupture recovery time",
    minLabel: "Settles fairly quickly",
    maxLabel: "Lingers a long time",
  },
  {
    id: "ranking",
    step: 14,
    eyebrow: "Step 14 · Relational priorities",
    hint: "Rank the statements below from most to least true for your current pattern. Drag on desktop or use the move buttons anywhere.",
    question: "Rank these from most to least true for your pattern",
    kind: "drag-rank",
    items: rankItems,
  },
  {
    id: "final-pattern",
    step: 15,
    eyebrow: "Step 15 · Final self-read",
    hint: "This last step helps the result language feel more human and more recognizably yours.",
    question: "Which statement feels closest to your current relationship pattern?",
    kind: "scenario-choice",
    field: "finalPattern",
    options: finalPatternOptions,
  },
];

export const relatedAttachmentTools: RelatedAttachmentTool[] = [
  {
    title: "Relationship Clarity Check",
    description: "Use a calmer lens to separate mixed signals, uncertainty, and assumptions from what is actually happening.",
    category: "Relationships & Attachment",
    minutes: "5 min",
    icon: "graph",
    href: buildToolHref({ slug: "relationship-clarity-check", categorySlug: "relationships-attachment" }),
  },
  {
    title: "Boundary Strength Scanner",
    description: "See whether your pattern is also being shaped by unclear boundaries, guilt, or difficulty protecting your own emotional limits.",
    category: "Boundaries & People-Pleasing",
    minutes: "7 min",
    icon: "shield",
    href: buildToolHref({ slug: "boundary-strength-scanner", categorySlug: "boundaries-people-pleasing" }),
  },
  {
    title: "Emotional Trigger Decoder",
    description: "Spot which emotional triggers intensify relational activation so you can respond with more context and less confusion.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "pattern",
    href: buildToolHref({
      slug: "emotional-trigger-decoder",
      categorySlug: "emotional-regulation",
    }),
  },
  {
    title: "Confidence Reset Audit",
    description: "Read how self-doubt may be amplifying reassurance pull, overanalysis, or fear of being misunderstood in connection.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "trend",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
];

export const attachmentFaqItems: FaqItem[] = [
  {
    question: "What does an attachment profile actually mean?",
    answer:
      "It is a directional read of how your system tends to respond to closeness, uncertainty, reassurance, and distance in relationships. It describes a pattern, not a diagnosis or fixed identity.",
  },
  {
    question: "Is anxious attachment the same as insecurity?",
    answer:
      "No. A leaning anxious pattern usually means uncertainty in connection activates quickly, not that you lack worth or maturity. It is a response style, not a character verdict.",
  },
  {
    question: "Can attachment patterns change over time?",
    answer:
      "Yes. Patterns can shift through safer relationships, clearer emotional language, stronger internal steadiness, and repeated experiences of connection that do not keep activating the same old protection loops.",
  },
  {
    question: "Why do I react strongly when someone feels distant?",
    answer:
      "Distance can register as a signal about safety, loss, or uncertainty long before your rational mind has sorted out what is actually happening. The intensity often comes from what the shift means to your system, not only the shift itself.",
  },
  {
    question: "What is the difference between avoidant and mixed patterns?",
    answer:
      "A leaning avoidant pattern tends to rely more consistently on distance and self-containment. A mixed push-pull pattern usually includes both a strong desire for closeness and a strong protection response once exposure rises.",
  },
  {
    question: "How often should I retake this profile?",
    answer:
      "Every one to three months is usually enough, or sooner if you are in a new relationship dynamic, a major rupture, or a period where your usual pattern feels more activated than normal.",
  },
  {
    question: "What should I do if my pattern feels highly activated?",
    answer:
      "Start by naming it without shaming it. Activated patterns usually settle better through slower interpretation, clearer emotional expression, and reducing reactive reassurance or distancing cycles one step at a time.",
  },
  {
    question: "Can I have one dominant pattern and still react differently in different relationships?",
    answer:
      "Yes. Most people have a general tendency, but the intensity can change depending on safety, history, communication quality, and how much uncertainty or emotional pressure the specific relationship carries.",
  },
  {
    question: "Why do some patterns feel stronger when life stress is already high?",
    answer:
      "Because stress lowers emotional buffer space. When the system is already carrying more load, reassurance pull, withdrawal, or overanalysis can activate faster and feel harder to regulate well.",
  },
  {
    question: "What usually changes first when attachment responses get steadier?",
    answer:
      "People often notice a little more pause before reacting. They may still feel the old activation, but they interpret it more slowly, express needs more clearly, or tolerate short periods of uncertainty without escalating as quickly.",
  },
];

export const attachmentStoryBlock = {
  eyebrow: "How this often feels",
  title: "The reaction usually makes sense once you understand what your system thinks the moment means.",
  quote:
    "This can happen when one part of the person knows they may be over-reading the moment, but another part reacts so quickly that activation has already started before there is a clean explanation. The body reads meaning fast. The mind catches up later. By then the relationship signal already feels louder than it did a minute ago.",
  takeaway:
    "That is why this tool maps closeness, uncertainty, reassurance, and withdrawal together. The reaction is rarely random. It is usually a patterned attempt to protect connection, self-protection, or both.",
  toneLabel: "Relational activation",
  accent: "#FDA4AF",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What attachment patterns actually are",
    paragraphs: [
      "Attachment patterns are not personality labels or hidden verdicts about whether you are good at relationships. They are repeated ways the nervous system and mind tend to respond when closeness, uncertainty, need, disappointment, or emotional risk show up in connection. Those responses often become so familiar that people stop noticing them as patterns and instead experience them as simply who they are. A profile tool is useful because it turns that felt normality into something visible enough to understand.",
      "What makes attachment patterns powerful is that they usually show up quickly and quietly. One person may feel distance and stay relatively grounded. Another may immediately begin monitoring for meaning. Another may feel pulled to reconnect fast. Another may go inward and protect through withdrawal before emotion is expressed. None of those responses appear out of nowhere. They are usually learned forms of protection, adaptation, or relational expectation that the system comes to trust over time.",
      "That is why a good attachment profile needs to be nuanced. The goal is not to flatten complex people into caricatures like anxious or avoidant and stop there. The better question is how closeness feels, how uncertainty is managed, how reassurance is used, how protection shows up, and what qualities in the system still create stability even when connection feels hard. That is the kind of read this tool is built to provide.",
    ],
  },
  {
    title: "Why attachment shows up in everyday relationship behavior",
    paragraphs: [
      "People often imagine attachment as something abstract that belongs only in psychology language. In practice, it shows up in ordinary moments. It appears when a message feels colder than usual. It appears when someone becomes less available, when you want reassurance, when you feel too exposed to say what you need, or when you suddenly start reading tone and timing for meaning. These moments are where attachment becomes behavioral rather than theoretical.",
      "That matters because many people judge themselves inside those moments without understanding the pattern underneath them. They think they are too much, too distant, too reactive, too needy, too self-protective, or too difficult. But when you step back, what often appears is not a moral problem. It is a relationship between uncertainty, closeness, and protection. The system is trying to preserve connection, safety, or both at once, and the form it takes depends on the pattern it has learned to trust.",
      "Seeing attachment at the level of behavior helps reduce shame. It also makes change possible. Once the pattern becomes visible in everyday actions, it stops being a foggy identity and starts becoming something you can work with more deliberately.",
    ],
  },
  {
    title: "Why closeness and uncertainty can activate very different responses",
    paragraphs: [
      "Closeness and uncertainty do not affect everyone in the same way because they are not neutral experiences inside the nervous system. For some people, closeness feels naturally regulating and uncertainty feels tolerable enough to wait through. For others, closeness feels good until it starts carrying too much emotional exposure. For others, uncertainty itself is the main activator. The same relationship event can land very differently depending on which of those systems is most sensitive.",
      "This is why two people can care equally and still react in opposite ways. One may move toward reassurance, contact, and clarity. Another may need space, self-containment, or distance. Another may want both closeness and distance at the same time and feel confused by the contradiction. Those reactions are not random. They often reflect the relational meaning the system is assigning to what is happening. Does this shift feel like risk? Exposure? Loss? Overwhelm? Ambiguity? The answer shapes the response.",
      "A refined profile helps because it shows which parts of this process become most active for you: comfort with closeness, pull toward reassurance, tendency to withdraw, or ability to stay emotionally steady when something shifts. That is more useful than simplistic labels because it reveals the mechanics beneath the reaction.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorialBlock[] = [
  {
    key: "closenessComfort",
    paragraphs: [
      "Closeness comfort reflects how natural emotional intimacy, openness, and proximity feel when connection is going well. It is not about liking people in theory. It is about how workable closeness feels in the body and mind once it becomes real.",
      "When this dimension is low, the system may value connection while still finding too much of it hard to tolerate for long. That often creates protection behaviors that are confusing unless the underlying discomfort with closeness is visible.",
    ],
  },
  {
    key: "reassurancePull",
    paragraphs: [
      "Reassurance pull captures how strongly uncertainty in connection activates the need for confirmation, clarity, or emotional checking. It often rises before a person has even decided whether they trust what they are noticing.",
      "A higher score here does not mean weakness. It usually means the system regulates uncertainty through relational confirmation faster than it regulates through internal steadiness alone.",
    ],
  },
  {
    key: "withdrawalTendency",
    paragraphs: [
      "Withdrawal tendency reflects how likely the system is to protect through distance, shut-down, privacy, or emotional restraint when something relational feels painful, exposing, or destabilizing.",
      "This can look calm from the outside, but internally it is often a strategy for regaining safety rather than a lack of feeling.",
    ],
  },
  {
    key: "emotionalSteadiness",
    paragraphs: [
      "Emotional steadiness is the system's capacity to stay present enough to respond without quickly tipping into either reassurance urgency or self-protective retreat.",
      "This dimension matters because it often determines whether relational shifts become manageable moments or rapidly expanding internal events.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Early patterns of connection",
    body:
      "Repeated early experiences of closeness, inconsistency, responsiveness, or emotional unpredictability often shape what the system expects from connection long before adult relationships begin.",
  },
  {
    title: "Uncertainty sensitivity and reassurance habits",
    body:
      "When uncertainty becomes hard to tolerate, people often build habits of checking, monitoring, or seeking reassurance to restore stability more quickly.",
  },
  {
    title: "Emotional exposure and protection",
    body:
      "If vulnerability has felt costly or overwhelming, protection may appear as distance, indirectness, or difficulty naming needs even when closeness is still deeply wanted.",
  },
  {
    title: "Relational memory and expectation",
    body:
      "The system often responds not only to what is happening now, but to what it has learned to expect from connection, disappointment, distance, or ambiguity over time.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Clearer emotional expression",
    body:
      "Naming needs earlier and more directly often reduces both reassurance spirals and silent withdrawal because the relational field becomes easier to read on both sides.",
  },
  {
    title: "Stronger internal steadiness",
    body:
      "Building the ability to pause before interpreting, pursuing, or retreating gives the pattern more room to respond instead of reenacting itself automatically.",
  },
  {
    title: "Tolerance for temporary uncertainty",
    body:
      "Not every shift in tone, timing, or availability needs immediate meaning. Strengthening this tolerance lowers the pressure on relationships to constantly regulate the nervous system in real time.",
  },
  {
    title: "Safer pacing and protection awareness",
    body:
      "Understanding what your system does to stay safe makes closeness easier to pace. That usually creates more stability than forcing yourself to act unlike your pattern before enough safety exists.",
  },
];

export const nextStepParagraphs = [
  "If your profile feels activated, begin by reading it as information rather than identity. The goal is not to decide what category of person you are. It is to understand what conditions activate your system, what protective moves appear most quickly, and what qualities already help you stay more stable.",
  "Usually the first useful shift is not dramatic. It is one relational skill that interrupts the automatic cycle: expressing a need earlier, waiting slightly longer before interpreting distance, noticing the urge to pull back before disappearing into it, or reducing how much reassurance is used to manage uncertainty moment by moment.",
  "If the pattern feels intense, move with compassion and pacing. Attachment work tends to become more stable when it respects protection rather than trying to shame it out of existence.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Secure Attachment Builder Workbook",
  description:
    "A structured guide for understanding activation patterns, creating steadier connection, and reducing reactive reassurance or distancing cycles.",
  buttonLabel: "View Next Step",
};

export function getInitialAttachmentAnswers(): AttachmentAnswers {
  return {
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

  const weighted = items.reduce((sum, item) => sum + item.value * item.weight, 0);
  return weighted / totalWeight;
}

function getProfile(key: AttachmentProfileKey) {
  return attachmentProfiles.find((profile) => profile.key === key) ?? attachmentProfiles[0];
}

function getTrigger(key: TriggerCategoryKey) {
  return triggerCategories.find((trigger) => trigger.key === key) ?? triggerCategories[0];
}

const distanceReactionMap: Record<
  DistanceReactionValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number; triggers: Partial<Record<TriggerCategoryKey, number>> }
> = {
  "stay-steady": {
    closeness: 74,
    reassurance: 18,
    withdrawal: 16,
    steadiness: 82,
    triggers: { uncertainty: 14, distance: 10 },
  },
  "wonder-what-changed": {
    closeness: 60,
    reassurance: 46,
    withdrawal: 24,
    steadiness: 56,
    triggers: { uncertainty: 32, "emotional-ambiguity": 28, distance: 20 },
  },
  "reconnect-quickly": {
    closeness: 58,
    reassurance: 78,
    withdrawal: 18,
    steadiness: 40,
    triggers: { uncertainty: 40, distance: 34, "emotional-ambiguity": 22 },
  },
  "pull-back-first": {
    closeness: 28,
    reassurance: 18,
    withdrawal: 84,
    steadiness: 38,
    triggers: { overexposure: 34, disappointment: 30, distance: 18 },
  },
};

const reassuranceNeedMap: Record<ReassuranceNeedValue, number> = {
  "very-little": 10,
  "a-little": 28,
  moderate: 50,
  high: 74,
  "very-high": 92,
};

const reducedAvailabilityMap: Record<
  ReducedAvailabilityReactionValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number; triggers: Partial<Record<TriggerCategoryKey, number>> }
> = {
  "grounded-let-settle": {
    closeness: 76,
    reassurance: 18,
    withdrawal: 18,
    steadiness: 82,
    triggers: { distance: 12, uncertainty: 14 },
  },
  "monitor-closely": {
    closeness: 60,
    reassurance: 50,
    withdrawal: 22,
    steadiness: 50,
    triggers: { uncertainty: 34, "emotional-ambiguity": 36, distance: 24 },
  },
  "anxious-want-clarity": {
    closeness: 62,
    reassurance: 82,
    withdrawal: 20,
    steadiness: 34,
    triggers: { uncertainty: 44, distance: 36, "emotional-ambiguity": 28 },
  },
  "detach-protect": {
    closeness: 30,
    reassurance: 22,
    withdrawal: 86,
    steadiness: 42,
    triggers: { disappointment: 34, overexposure: 30, distance: 18 },
  },
};

const expressNeedsMap: Record<ExpressNeedsValue, { closeness: number; withdrawal: number; steadiness: number; expression: number }> = {
  "very-easy": { closeness: 84, withdrawal: 14, steadiness: 76, expression: 92 },
  "mostly-easy": { closeness: 70, withdrawal: 24, steadiness: 66, expression: 74 },
  mixed: { closeness: 54, withdrawal: 44, steadiness: 52, expression: 52 },
  difficult: { closeness: 38, withdrawal: 62, steadiness: 40, expression: 30 },
  "very-difficult": { closeness: 24, withdrawal: 82, steadiness: 28, expression: 12 },
};

const repairComfortMap: Record<
  RepairComfortValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number }
> = {
  "very-comfortable": { closeness: 82, reassurance: 18, withdrawal: 14, steadiness: 86 },
  "mostly-comfortable": { closeness: 70, reassurance: 28, withdrawal: 24, steadiness: 72 },
  mixed: { closeness: 54, reassurance: 46, withdrawal: 42, steadiness: 54 },
  uncomfortable: { closeness: 38, reassurance: 62, withdrawal: 60, steadiness: 38 },
  "very-uncomfortable": { closeness: 24, reassurance: 74, withdrawal: 80, steadiness: 24 },
};

const receivingCareMap: Record<
  ReceivingCareValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number }
> = {
  "very-easy": { closeness: 84, reassurance: 18, withdrawal: 14, steadiness: 80 },
  "mostly-easy": { closeness: 72, reassurance: 28, withdrawal: 22, steadiness: 68 },
  mixed: { closeness: 56, reassurance: 46, withdrawal: 40, steadiness: 52 },
  difficult: { closeness: 40, reassurance: 60, withdrawal: 58, steadiness: 38 },
  "very-difficult": { closeness: 26, reassurance: 72, withdrawal: 76, steadiness: 24 },
};

const boundaryVoiceMap: Record<
  BoundaryVoiceValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number }
> = {
  "very-clear": { closeness: 78, reassurance: 18, withdrawal: 18, steadiness: 82 },
  "mostly-clear": { closeness: 68, reassurance: 28, withdrawal: 24, steadiness: 68 },
  mixed: { closeness: 54, reassurance: 42, withdrawal: 42, steadiness: 52 },
  "hard-to-hold": { closeness: 40, reassurance: 58, withdrawal: 56, steadiness: 38 },
  "very-hard-to-hold": { closeness: 28, reassurance: 70, withdrawal: 70, steadiness: 26 },
};

const familiarPatternMap: Record<
  FamiliarPatternValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number; triggers: Partial<Record<TriggerCategoryKey, number>> }
> = {
  "steady-close": {
    closeness: 80,
    reassurance: 26,
    withdrawal: 18,
    steadiness: 82,
    triggers: { uncertainty: 14, distance: 14 },
  },
  "activated-under-uncertainty": {
    closeness: 66,
    reassurance: 76,
    withdrawal: 24,
    steadiness: 40,
    triggers: { uncertainty: 42, "emotional-ambiguity": 28, distance: 26 },
  },
  "want-and-overwhelmed": {
    closeness: 46,
    reassurance: 60,
    withdrawal: 66,
    steadiness: 34,
    triggers: { overexposure: 36, uncertainty: 24, "emotional-ambiguity": 28 },
  },
  "protect-with-distance": {
    closeness: 24,
    reassurance: 20,
    withdrawal: 84,
    steadiness: 48,
    triggers: { disappointment: 34, overexposure: 32, distance: 18 },
  },
};

const withdrawalLikelihoodMap: Record<WithdrawalLikelihoodValue, number> = {
  "very-unlikely": 8,
  unlikely: 26,
  mixed: 52,
  likely: 74,
  "very-likely": 92,
};

const finalPatternMap: Record<
  FinalPatternValue,
  { closeness: number; reassurance: number; withdrawal: number; steadiness: number; triggers: Partial<Record<TriggerCategoryKey, number>> }
> = {
  "secure-responsive": {
    closeness: 82,
    reassurance: 20,
    withdrawal: 18,
    steadiness: 84,
    triggers: { uncertainty: 12, distance: 12 },
  },
  "activated-unstable": {
    closeness: 66,
    reassurance: 80,
    withdrawal: 24,
    steadiness: 36,
    triggers: { uncertainty: 44, distance: 28, "emotional-ambiguity": 26 },
  },
  "alternate-overwhelmed": {
    closeness: 44,
    reassurance: 64,
    withdrawal: 68,
    steadiness: 30,
    triggers: { overexposure: 36, uncertainty: 24, "emotional-ambiguity": 32 },
  },
  "distance-over-expression": {
    closeness: 22,
    reassurance: 22,
    withdrawal: 86,
    steadiness: 46,
    triggers: { disappointment: 36, overexposure: 34, distance: 18 },
  },
};

const rankDimensionMap: Record<
  RankItemKey,
  {
    closeness: number;
    reassurance: number;
    withdrawal: number;
    steadiness: number;
    triggers: Partial<Record<TriggerCategoryKey, number>>;
  }
> = {
  "clarity-quickly": {
    closeness: 52,
    reassurance: 86,
    withdrawal: 20,
    steadiness: 30,
    triggers: { uncertainty: 26, "emotional-ambiguity": 14 },
  },
  "stay-steady": {
    closeness: 72,
    reassurance: 18,
    withdrawal: 16,
    steadiness: 88,
    triggers: { uncertainty: 6, distance: 6 },
  },
  "pull-back-exposed": {
    closeness: 28,
    reassurance: 26,
    withdrawal: 88,
    steadiness: 38,
    triggers: { overexposure: 26, disappointment: 18 },
  },
  "need-reassurance": {
    closeness: 58,
    reassurance: 92,
    withdrawal: 20,
    steadiness: 28,
    triggers: { uncertainty: 24, distance: 14 },
  },
  "closeness-distance-tension": {
    closeness: 42,
    reassurance: 58,
    withdrawal: 68,
    steadiness: 26,
    triggers: { overexposure: 16, "emotional-ambiguity": 26, uncertainty: 12 },
  },
};

function getResolvedAnswers(answers: AttachmentAnswers) {
  return {
    distanceReaction: answers.distanceReaction ?? "wonder-what-changed",
    closenessComfort: typeof answers.closenessComfort === "number" ? clampScore(answers.closenessComfort) : 56,
    reassuranceNeed: answers.reassuranceNeed ?? "moderate",
    reducedAvailabilityReaction: answers.reducedAvailabilityReaction ?? "monitor-closely",
    expressNeeds: answers.expressNeeds ?? "mixed",
    familiarPattern: answers.familiarPattern ?? "activated-under-uncertainty",
    overanalyze: typeof answers.overanalyze === "number" ? clampScore(answers.overanalyze) : 48,
    withdrawalLikelihood: answers.withdrawalLikelihood ?? "mixed",
    repairComfort: answers.repairComfort ?? "mixed",
    receivingCare: answers.receivingCare ?? "mixed",
    boundaryVoice: answers.boundaryVoice ?? "mixed",
    assumptionSpeed: typeof answers.assumptionSpeed === "number" ? clampScore(answers.assumptionSpeed) : 46,
    ruptureRecovery: typeof answers.ruptureRecovery === "number" ? clampScore(answers.ruptureRecovery) : 50,
    rankingOrder: answers.rankingOrder.length ? answers.rankingOrder : rankItems.map((item) => item.key),
    finalPattern: answers.finalPattern ?? "activated-unstable",
  };
}

function getRankingWeights(order: RankItemKey[]) {
  const weightByIndex = [100, 80, 60, 40, 20];
  return Object.fromEntries(order.map((key, index) => [key, weightByIndex[index] ?? 20])) as Record<RankItemKey, number>;
}

export function isAttachmentStepComplete(step: AttachmentStep, answers: AttachmentAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "drag-rank") {
    return answers.rankingConfirmed;
  }

  return typeof answers[step.field] === "string";
}

function getProfileKey(dimensions: Record<AttachmentDimensionKey, number>): AttachmentProfileKey {
  const { closenessComfort, reassurancePull, withdrawalTendency, emotionalSteadiness } = dimensions;

  if (emotionalSteadiness >= 68 && closenessComfort >= 62 && reassurancePull <= 44 && withdrawalTendency <= 44) {
    return "steady-secure";
  }

  if (reassurancePull >= 78 && withdrawalTendency < 58) {
    return "heightened-reassurance";
  }

  if (reassurancePull >= 58 && withdrawalTendency >= 58) {
    return "mixed-push-pull";
  }

  if (withdrawalTendency >= 62 && closenessComfort <= 52) {
    return "leaning-avoidant";
  }

  if (reassurancePull >= 56) {
    return "leaning-anxious";
  }

  if (withdrawalTendency >= 56) {
    return "leaning-avoidant";
  }

  return "steady-secure";
}

function getPrimaryActivationPattern(profileKey: AttachmentProfileKey) {
  switch (profileKey) {
    case "steady-secure":
      return "Connection shifts tend to be met with enough internal room to respond without immediately escalating or retreating.";
    case "leaning-anxious":
      return "Uncertainty in connection activates monitoring and a faster pull for clarity or reassurance.";
    case "leaning-avoidant":
      return "Relational pressure is more likely to activate self-protection through space, privacy, or emotional self-containment.";
    case "mixed-push-pull":
      return "The system appears to want closeness and protection at the same time, which can create alternating approach and retreat.";
    case "heightened-reassurance":
      return "The profile suggests that reassurance works as a main stabilizer when connection becomes hard to read.";
  }
}

function getProtectiveStrategy(profileKey: AttachmentProfileKey, withdrawal: number, reassurance: number) {
  if (profileKey === "steady-secure") {
    return "Stay relationally present and communicate before the pattern needs to protect itself.";
  }

  if (profileKey === "mixed-push-pull") {
    return "Alternate between reaching for closeness and retreating when exposure or intensity rises.";
  }

  if (withdrawal > reassurance) {
    return "Create distance, go inward, or reduce emotional exposure to regain a sense of safety.";
  }

  return "Seek clarity, emotional proof, or reassurance to stabilize uncertainty more quickly.";
}

function getStrongestStabilizingTrait(
  dimensions: Record<AttachmentDimensionKey, number>,
  expressNeeds: ExpressNeedsValue,
  rankingWeights: Record<RankItemKey, number>,
) {
  const expressionScore = expressNeedsMap[expressNeeds].expression;

  const candidates = [
    {
      label: "Steady response capacity",
      value: dimensions.emotionalSteadiness + rankingWeights["stay-steady"] * 0.12,
    },
    {
      label: "Comfort with closeness",
      value: dimensions.closenessComfort,
    },
    {
      label: "Capacity to express need",
      value: expressionScore,
    },
  ].sort((left, right) => right.value - left.value);

  return candidates[0]?.label ?? "Reflective awareness";
}

export function calculateAttachmentProfile(answers: AttachmentAnswers): AttachmentResult {
  const resolved = getResolvedAnswers(answers);
  const answeredCount = attachmentSteps.filter((step) => isAttachmentStepComplete(step, answers)).length;
  const completionRatio = answeredCount / attachmentSteps.length;

  const distanceReaction = distanceReactionMap[resolved.distanceReaction];
  const reducedAvailabilityReaction = reducedAvailabilityMap[resolved.reducedAvailabilityReaction];
  const reassuranceNeed = reassuranceNeedMap[resolved.reassuranceNeed];
  const expressNeeds = expressNeedsMap[resolved.expressNeeds];
  const familiarPattern = familiarPatternMap[resolved.familiarPattern];
  const withdrawalLikelihood = withdrawalLikelihoodMap[resolved.withdrawalLikelihood];
  const repairComfort = repairComfortMap[resolved.repairComfort];
  const receivingCare = receivingCareMap[resolved.receivingCare];
  const boundaryVoice = boundaryVoiceMap[resolved.boundaryVoice];
  const finalPattern = finalPatternMap[resolved.finalPattern];
  const rankingWeights = getRankingWeights(resolved.rankingOrder);

  const rankContributions = resolved.rankingOrder.map((key) => ({
    ...rankDimensionMap[key],
    weight: (rankingWeights[key] ?? 20) / 100,
  }));

  const closenessComfort = clampScore(
    weightedAverage([
      { value: resolved.closenessComfort, weight: 1.45 },
      { value: distanceReaction.closeness, weight: 0.85 },
      { value: reducedAvailabilityReaction.closeness, weight: 0.75 },
      { value: expressNeeds.closeness, weight: 0.8 },
      { value: repairComfort.closeness, weight: 0.65 },
      { value: receivingCare.closeness, weight: 0.55 },
      { value: boundaryVoice.closeness, weight: 0.45 },
      { value: familiarPattern.closeness, weight: 1 },
      { value: finalPattern.closeness, weight: 1.05 },
      { value: 100 - withdrawalLikelihood, weight: 0.55 },
      { value: average(rankContributions.map((item) => item.closeness * item.weight)), weight: 0.9 },
    ]),
  );

  const reassurancePull = clampScore(
    weightedAverage([
      { value: reassuranceNeed, weight: 1.2 },
      { value: distanceReaction.reassurance, weight: 0.85 },
      { value: reducedAvailabilityReaction.reassurance, weight: 0.85 },
      { value: repairComfort.reassurance, weight: 0.5 },
      { value: receivingCare.reassurance, weight: 0.5 },
      { value: boundaryVoice.reassurance, weight: 0.4 },
      { value: familiarPattern.reassurance, weight: 1 },
      { value: finalPattern.reassurance, weight: 1.05 },
      { value: resolved.overanalyze, weight: 0.95 },
      { value: resolved.assumptionSpeed, weight: 0.72 },
      { value: average(rankContributions.map((item) => item.reassurance * item.weight)), weight: 0.8 },
    ]),
  );

  const withdrawalTendency = clampScore(
    weightedAverage([
      { value: distanceReaction.withdrawal, weight: 0.8 },
      { value: 100 - resolved.closenessComfort, weight: 0.5 },
      { value: reducedAvailabilityReaction.withdrawal, weight: 0.95 },
      { value: expressNeeds.withdrawal, weight: 0.7 },
      { value: repairComfort.withdrawal, weight: 0.45 },
      { value: receivingCare.withdrawal, weight: 0.4 },
      { value: boundaryVoice.withdrawal, weight: 0.5 },
      { value: familiarPattern.withdrawal, weight: 1 },
      { value: finalPattern.withdrawal, weight: 1.05 },
      { value: withdrawalLikelihood, weight: 1.1 },
      { value: resolved.ruptureRecovery, weight: 0.4 },
      { value: average(rankContributions.map((item) => item.withdrawal * item.weight)), weight: 0.8 },
    ]),
  );

  const emotionalSteadiness = clampScore(
    weightedAverage([
      { value: distanceReaction.steadiness, weight: 0.85 },
      { value: reducedAvailabilityReaction.steadiness, weight: 0.9 },
      { value: expressNeeds.steadiness, weight: 0.75 },
      { value: repairComfort.steadiness, weight: 0.65 },
      { value: receivingCare.steadiness, weight: 0.45 },
      { value: boundaryVoice.steadiness, weight: 0.6 },
      { value: familiarPattern.steadiness, weight: 1 },
      { value: finalPattern.steadiness, weight: 1.1 },
      { value: 100 - reassuranceNeed, weight: 0.4 },
      { value: 100 - resolved.overanalyze, weight: 0.85 },
      { value: 100 - resolved.assumptionSpeed, weight: 0.7 },
      { value: 100 - resolved.ruptureRecovery, weight: 0.75 },
      { value: 100 - withdrawalLikelihood, weight: 0.45 },
      { value: average(rankContributions.map((item) => item.steadiness * item.weight)), weight: 0.9 },
    ]),
  );

  const dimensions: Record<AttachmentDimensionKey, number> = {
    closenessComfort,
    reassurancePull,
    withdrawalTendency,
    emotionalSteadiness,
  };

  const triggerValues: Record<TriggerCategoryKey, number> = {
    uncertainty: 0,
    distance: 0,
    "emotional-ambiguity": 0,
    disappointment: 0,
    overexposure: 0,
  };

  const triggerSources = [
    distanceReaction.triggers,
    reducedAvailabilityReaction.triggers,
    familiarPattern.triggers,
    finalPattern.triggers,
    ...rankContributions.map((item) => item.triggers),
  ];

  triggerSources.forEach((source) => {
    (Object.entries(source) as Array<[TriggerCategoryKey, number]>).forEach(([key, value]) => {
      triggerValues[key] += value;
    });
  });

  triggerValues.uncertainty = clampScore(
    triggerValues.uncertainty + reassuranceNeed * 0.28 + resolved.overanalyze * 0.16 + resolved.assumptionSpeed * 0.12,
  );
  triggerValues.distance = clampScore(
    triggerValues.distance + reassuranceNeed * 0.16 + (100 - closenessComfort) * 0.06 + resolved.assumptionSpeed * 0.12,
  );
  triggerValues["emotional-ambiguity"] = clampScore(
    triggerValues["emotional-ambiguity"] +
      resolved.overanalyze * 0.28 +
      reassuranceNeed * 0.1 +
      resolved.ruptureRecovery * 0.1,
  );
  triggerValues.disappointment = clampScore(
    triggerValues.disappointment + withdrawalLikelihood * 0.24 + withdrawalTendency * 0.12 + resolved.ruptureRecovery * 0.16,
  );
  triggerValues.overexposure = clampScore(
    triggerValues.overexposure +
      withdrawalTendency * 0.24 +
      (100 - closenessComfort) * 0.2 +
      (100 - boundaryVoice.closeness) * 0.12,
  );

  const triggerScores = triggerCategories
    .map((trigger) => ({
      ...trigger,
      value: clampScore(triggerValues[trigger.key]),
    }))
    .sort((left, right) => right.value - left.value);

  const profileKey = getProfileKey(dimensions);
  const profile = getProfile(profileKey);
  const relationalPressureTrigger = getTrigger(triggerScores[0]?.key ?? "uncertainty");

  const activationIndex = clampScore(
    average([
      reassurancePull,
      withdrawalTendency,
      100 - emotionalSteadiness,
      triggerScores[0]?.value ?? 0,
    ]),
  );

  const primaryActivationPattern = getPrimaryActivationPattern(profileKey);
  const protectiveStrategy = getProtectiveStrategy(profileKey, withdrawalTendency, reassurancePull);
  const strongestStabilizingTrait = getStrongestStabilizingTrait(dimensions, resolved.expressNeeds, rankingWeights);

  const radarMetrics: RadarMetric[] = [
    {
      key: "openness",
      label: "Openness",
      value: clampScore(
        average([closenessComfort, expressNeeds.expression, boundaryVoice.closeness, 100 - withdrawalTendency * 0.25]),
      ),
      accent: "#93C5FD",
    },
    {
      key: "steadiness",
      label: "Steadiness",
      value: emotionalSteadiness,
      accent: "#6EE7B7",
    },
    {
      key: "needForClarity",
      label: "Need for clarity",
      value: clampScore(average([reassurancePull, resolved.overanalyze, resolved.assumptionSpeed, triggerValues.uncertainty])),
      accent: "#FCD34D",
    },
    {
      key: "toleranceForDistance",
      label: "Tolerance for distance",
      value: clampScore(100 - average([triggerValues.distance, reassurancePull * 0.7, resolved.overanalyze * 0.3])),
      accent: "#67E8F9",
    },
    {
      key: "expressionOfNeed",
      label: "Expression of need",
      value: clampScore(
        average([
          expressNeeds.expression,
          boundaryVoice.closeness,
          closenessComfort * 0.7,
          100 - withdrawalTendency * 0.35,
        ]),
      ),
      accent: "#FDA4AF",
    },
  ];

  const mapPlacement = {
    x: clampScore(closenessComfort),
    y: clampScore(withdrawalTendency),
  };

  const signalLabel =
    profileKey === "steady-secure"
      ? "Your responses suggest a pattern with enough comfort, expression, and steadiness to keep connection changes from immediately becoming relational emergencies."
      : profileKey === "leaning-anxious"
        ? "Your responses suggest that uncertainty in connection activates reassurance pull faster than your system can stay emotionally steady."
        : profileKey === "leaning-avoidant"
          ? "Your responses suggest that exposure, disappointment, or relational demand may activate protection through distance more quickly than open expression."
          : profileKey === "mixed-push-pull"
            ? "Your responses suggest a pattern where closeness is meaningful but can also activate overwhelm, creating both pursuit and retreat inside the same relationship field."
            : "Your responses suggest that reassurance is being used as a main stabilizer when connection feels unclear, inconsistent, or harder to trust.";

  const interpretation = `${profile.summary} ${profile.interpretation}`;
  const standout = `${profile.standoutLead} The strongest stabilizing trait visible here is ${strongestStabilizingTrait.toLowerCase()}, while the main protective strategy looks like ${protectiveStrategy.toLowerCase()}.`;
  const triggerInsight = `${profile.triggerLead} In this profile, the most likely relational pressure trigger appears to be ${relationalPressureTrigger.label.toLowerCase()}, with ${triggerScores[1]?.label.toLowerCase() ?? "other contextual pressure"} close behind.`;

  return {
    profile,
    completionRatio,
    isComplete: answeredCount === attachmentSteps.length,
    activationIndex,
    dimensions,
    mapPlacement,
    triggerScores,
    radarMetrics,
    primaryActivationPattern,
    protectiveStrategy,
    relationalPressureTrigger,
    strongestStabilizingTrait,
    signalLabel,
    interpretation,
    standout,
    triggerInsight,
  };
}

export const heroPreviewResult = calculateAttachmentProfile({
  distanceReaction: "reconnect-quickly",
  closenessComfort: 62,
  reassuranceNeed: "high",
  reducedAvailabilityReaction: "anxious-want-clarity",
  expressNeeds: "mixed",
  familiarPattern: "want-and-overwhelmed",
  overanalyze: 72,
  withdrawalLikelihood: "likely",
  repairComfort: "mixed",
  receivingCare: "difficult",
  boundaryVoice: "hard-to-hold",
  assumptionSpeed: 68,
  ruptureRecovery: 74,
  rankingOrder: [
    "clarity-quickly",
    "closeness-distance-tension",
    "need-reassurance",
    "pull-back-exposed",
    "stay-steady",
  ],
  rankingConfirmed: true,
  finalPattern: "alternate-overwhelmed",
});
