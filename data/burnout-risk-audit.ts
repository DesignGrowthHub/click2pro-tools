import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type EmotionalDrainValue = "rarely" | "sometimes" | "often" | "almost-constantly";
export type SwitchOffValue = "very-easy" | "mostly-easy" | "mixed" | "difficult" | "very-difficult";
export type SleepRestorationValue =
  | "deeply-restorative"
  | "mostly-restorative"
  | "inconsistent"
  | "poor"
  | "barely-restorative";
export type TaskHeavinessValue = "rarely" | "sometimes" | "often" | "constantly";
export type DrainAreaValue =
  | "workload"
  | "emotional-strain"
  | "lack-of-rest"
  | "family-demands"
  | "uncertainty"
  | "conflict"
  | "overthinking"
  | "low-motivation";
export type EmotionalDetachmentValue = "never" | "rarely" | "sometimes" | "often" | "very-often";
export type RecoverySpeedValue = "very-quickly" | "reasonably" | "slowly" | "hardly-at-all";
export type MorningDreadValue = "rarely" | "sometimes" | "often" | "almost-every-day";
export type WeekendResetValue =
  | "fully-reset"
  | "mostly-reset"
  | "partial-reset"
  | "barely-reset"
  | "does-not-reset";
export type SupportRecognitionValue =
  | "strongly-supported"
  | "mostly-supported"
  | "mixed"
  | "under-recognized"
  | "deeply-under-recognized";
export type BoundaryLeakValue = "rarely" | "sometimes" | "often" | "almost-constantly";
export type CurrentStateValue =
  | "stretched-but-functioning"
  | "increasingly-tired"
  | "recovery-not-catching-up"
  | "persistently-depleted";

export type BurnoutBandKey =
  | "stable-load"
  | "early-strain"
  | "active-depletion"
  | "elevated-burnout-risk"
  | "severe-recovery-deficit";

export type BurnoutDimensionKey =
  | "energyDebt"
  | "recoveryQuality"
  | "cognitiveStrain"
  | "emotionalWear";

export type SourceBucketKey =
  | "workload"
  | "emotional-strain"
  | "lack-of-rest"
  | "relational-family-load"
  | "uncertainty-overthinking-conflict";

export type BurnoutAnswers = {
  emotionalDrain?: EmotionalDrainValue;
  eveningEnergy?: number;
  switchOff?: SwitchOffValue;
  sleepRestoration?: SleepRestorationValue;
  taskHeaviness?: TaskHeavinessValue;
  drainSources: DrainAreaValue[];
  emotionalDetachment?: EmotionalDetachmentValue;
  recoverySpeed?: RecoverySpeedValue;
  concentrationDrop?: number;
  motivationDrop?: number;
  morningDread?: MorningDreadValue;
  weekendReset?: WeekendResetValue;
  irritabilityImpact?: number;
  supportRecognition?: SupportRecognitionValue;
  boundaryLeak?: BoundaryLeakValue;
  currentState?: CurrentStateValue;
};

export type BurnoutChoiceOption = {
  value: string;
  label: string;
  description?: string;
  accent?: string;
};

type BaseStep = {
  id: string;
  eyebrow: string;
  question: string;
  hint: string;
};

export type SingleChoiceStep = BaseStep & {
  kind: "single-choice";
  field:
    | "emotionalDrain"
    | "switchOff"
    | "sleepRestoration"
    | "taskHeaviness"
    | "emotionalDetachment"
    | "recoverySpeed"
    | "morningDread"
    | "weekendReset"
    | "supportRecognition"
    | "boundaryLeak"
    | "currentState";
  variant: "cards" | "segments" | "visual" | "statement";
  options: BurnoutChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "eveningEnergy" | "irritabilityImpact";
  minLabel: string;
  maxLabel: string;
  scaleHint: string;
};

export type DualSliderStep = BaseStep & {
  kind: "dual-slider";
  fields: [
    {
      key: "concentrationDrop";
      label: string;
      minLabel: string;
      maxLabel: string;
    },
    {
      key: "motivationDrop";
      label: string;
      minLabel: string;
      maxLabel: string;
    },
  ];
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "drainSources";
  limit: number;
  options: BurnoutChoiceOption[];
};

export type BurnoutAuditStep = SingleChoiceStep | SliderStep | DualSliderStep | MultiSelectStep;

export type BurnoutBand = {
  key: BurnoutBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  nextStepLead: string;
  signalTone: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type BurnoutDimension = {
  key: BurnoutDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type SourceBucket = {
  key: SourceBucketKey;
  label: string;
  accent: string;
};

export type BurnoutAuditResult = {
  score: number;
  band: BurnoutBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<BurnoutDimensionKey, number>;
  recoveryCapacity: number;
  recoveryGap: number;
  sourceSplit: Array<SourceBucket & { value: number }>;
  dominantDimensions: BurnoutDimension[];
  dominantSources: Array<SourceBucket & { value: number }>;
  signalLabel: string;
  interpretation: string;
  standout: string;
  nextStep: string;
  alignmentNote: string;
  currentStateValue: number | null;
};

export type RelatedToolCard = {
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

export const burnoutToolMetadata = {
  eyebrow: "BURNOUT & RECOVERY TOOL",
  title: "Burnout Risk Audit",
  description:
    "See whether everyday stress is still moving through you or whether it is turning into real burnout strain. The audit maps energy, recovery, mental load, and emotional wear so the result feels specific, not vague.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "signal" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const burnoutDimensions: BurnoutDimension[] = [
  {
    key: "energyDebt",
    label: "Energy Debt",
    description: "How much daily demand is outpacing the energy you have left to spend.",
    icon: "signal",
    accent: "#6FD3FF",
  },
  {
    key: "recoveryQuality",
    label: "Recovery Quality",
    description: "Whether sleep and lighter moments are actually restoring you rather than only pausing demand.",
    icon: "shield",
    accent: "#3DDC97",
  },
  {
    key: "cognitiveStrain",
    label: "Cognitive Strain",
    description: "How much mental switching, heaviness, and attention drop are building friction through the day.",
    icon: "graph",
    accent: "#F6C177",
  },
  {
    key: "emotionalWear",
    label: "Emotional Wear",
    description: "The degree of emotional drain, numbness, or disconnection collecting in the background.",
    icon: "insight",
    accent: "#FF7B72",
  },
];

export const sourceBuckets: SourceBucket[] = [
  { key: "workload", label: "Workload", accent: "#6FD3FF" },
  { key: "emotional-strain", label: "Emotional strain", accent: "#A78BFA" },
  { key: "lack-of-rest", label: "Lack of rest", accent: "#3DDC97" },
  { key: "relational-family-load", label: "Relational / family load", accent: "#FF7B72" },
  {
    key: "uncertainty-overthinking-conflict",
    label: "Uncertainty / overthinking / conflict",
    accent: "#F6C177",
  },
];

export const burnoutBands: BurnoutBand[] = [
  {
    key: "stable-load",
    min: 0,
    max: 24,
    title: "Stable Load",
    summary: "Your current pattern suggests that demand is present, but recovery is still broadly keeping pace.",
    interpretation:
      "Nothing here suggests zero stress. It suggests that strain still looks contained, which usually means your system has enough flexibility to recover between pushes.",
    standoutLead: "The strongest signal is not collapse, but where friction could accumulate if conditions stay noisy.",
    nextStepLead:
      "Protect what is already working. Small maintenance moves matter most when your system still has room to respond well.",
    signalTone: "steady",
    gradientFrom: "#6FD3FF",
    gradientTo: "#3DDC97",
    glow: "rgba(111, 211, 255, 0.34)",
  },
  {
    key: "early-strain",
    min: 25,
    max: 44,
    title: "Early Strain",
    summary: "Pressure appears to be rising, even if you are still functioning reasonably well on the surface.",
    interpretation:
      "This is often the zone where people say they are coping, but notice they have less patience, less mental room, and a thinner recovery margin than usual.",
    standoutLead: "The pattern suggests that demand is starting to collect faster than it is being processed.",
    nextStepLead:
      "The most effective move here is not a dramatic reset. It is trimming the sources that create avoidable friction before they harden into depletion.",
    signalTone: "moderately elevated",
    gradientFrom: "#6FD3FF",
    gradientTo: "#F6C177",
    glow: "rgba(246, 193, 119, 0.28)",
  },
  {
    key: "active-depletion",
    min: 45,
    max: 64,
    title: "Active Depletion",
    summary: "Your answers suggest that recovery is no longer fully catching up with what your days are costing.",
    interpretation:
      "This usually feels less like one dramatic crash and more like a steady drop in resilience, concentration, emotional availability, and bounce-back speed.",
    standoutLead: "The audit is picking up a real mismatch between load and replenishment.",
    nextStepLead:
      "Focus on reducing load and increasing true recovery at the same time. Either one alone often feels too weak at this stage.",
    signalTone: "elevated",
    gradientFrom: "#F6C177",
    gradientTo: "#FF7B72",
    glow: "rgba(255, 123, 114, 0.26)",
  },
  {
    key: "elevated-burnout-risk",
    min: 65,
    max: 84,
    title: "Elevated Burnout Risk",
    summary: "The signal profile points to meaningful strain across several parts of your recovery system at once.",
    interpretation:
      "When scores land here, people are often still performing in patches, but doing it with a lot more cost, numbness, and effort than usual.",
    standoutLead: "This is less about a busy week and more about a pattern that is starting to take up core capacity.",
    nextStepLead:
      "Try to reduce commitments, decision density, and emotional spillover quickly. Waiting for a perfect break usually leaves the pattern untouched.",
    signalTone: "high",
    gradientFrom: "#FF9B73",
    gradientTo: "#FF7B72",
    glow: "rgba(255, 123, 114, 0.34)",
  },
  {
    key: "severe-recovery-deficit",
    min: 85,
    max: 100,
    title: "Severe Recovery Deficit",
    summary: "Your pattern suggests that depletion is deep and that lighter moments are not restoring capacity very effectively.",
    interpretation:
      "This does not label you. It does suggest that your system may be carrying more sustained debt than quick fixes can realistically repair.",
    standoutLead: "The strongest signal here is how little recovery appears to be changing the overall load picture.",
    nextStepLead:
      "Treat this as a serious prompt to simplify, recover, and get support around whatever is keeping demand continuously high.",
    signalTone: "very high",
    gradientFrom: "#FF7B72",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.28)",
  },
];

export const burnoutAuditSteps: BurnoutAuditStep[] = [
  {
    id: "step-1",
    kind: "single-choice",
    field: "emotionalDrain",
    eyebrow: "Signal 01 · emotional wear",
    question: "How often have you felt emotionally drained by your day recently?",
    hint: "Go with the answer that reflects your recent baseline, not your single worst day.",
    variant: "cards",
    options: [
      { value: "rarely", label: "Rarely", description: "Drain shows up occasionally, but it is not the tone of most days." },
      { value: "sometimes", label: "Sometimes", description: "Some days cost more emotionally than they used to." },
      { value: "often", label: "Often", description: "Emotional drain is becoming a repeated part of your day." },
      {
        value: "almost-constantly",
        label: "Almost constantly",
        description: "The feeling is present enough that it is shaping your baseline capacity.",
      },
    ],
  },
  {
    id: "step-2",
    kind: "slider",
    field: "eveningEnergy",
    eyebrow: "Signal 02 · energy reserve",
    question: "How much physical energy do you usually have left by evening?",
    hint: "This measures what is left after a normal day, not how energized you feel on a rare easy one.",
    minLabel: "Fully depleted",
    maxLabel: "Still steady",
    scaleHint: "Low remaining energy raises the audit's energy-debt signal.",
  },
  {
    id: "step-3",
    kind: "single-choice",
    field: "switchOff",
    eyebrow: "Signal 03 · mental switching",
    question: "How difficult has it been to switch off mentally after work or responsibilities?",
    hint: "Think about the hours after effort ends. Does your mind keep dragging the day behind it?",
    variant: "segments",
    options: [
      { value: "very-easy", label: "Very easy" },
      { value: "mostly-easy", label: "Mostly easy" },
      { value: "mixed", label: "Mixed" },
      { value: "difficult", label: "Difficult" },
      { value: "very-difficult", label: "Very difficult" },
    ],
  },
  {
    id: "step-4",
    kind: "single-choice",
    field: "sleepRestoration",
    eyebrow: "Signal 04 · recovery quality",
    question: "How restorative has your recent sleep actually felt?",
    hint: "This is about how sleep lands in your body and mind, not only how many hours were in bed.",
    variant: "visual",
    options: [
      { value: "deeply-restorative", label: "Deeply restorative", description: "You wake up noticeably reset most days." },
      { value: "mostly-restorative", label: "Mostly restorative", description: "Sleep helps, even if it is not perfect." },
      { value: "inconsistent", label: "Inconsistent", description: "Some sleep helps, some sleep barely touches the load." },
      { value: "poor", label: "Poor", description: "Sleep happens, but it rarely feels like real repair." },
      { value: "barely-restorative", label: "Barely restorative", description: "Even rest is not bringing you back very much." },
    ],
  },
  {
    id: "step-5",
    kind: "single-choice",
    field: "taskHeaviness",
    eyebrow: "Signal 05 · load friction",
    question: "How often do small tasks or decisions feel heavier than they should?",
    hint: "This signal often shows up before people call themselves burned out.",
    variant: "cards",
    options: [
      { value: "rarely", label: "Rarely", description: "Most tasks still feel proportionate to the effort required." },
      { value: "sometimes", label: "Sometimes", description: "You notice more friction than usual on routine tasks." },
      { value: "often", label: "Often", description: "Simple decisions now cost noticeable mental energy." },
      { value: "constantly", label: "Constantly", description: "Even low-stakes tasks feel unexpectedly heavy or effortful." },
    ],
  },
  {
    id: "step-6",
    kind: "multi-select",
    field: "drainSources",
    eyebrow: "Signal 06 · source mapping",
    question: "Which areas are draining you most right now?",
    hint: "Choose up to three. The tool uses these to show where the load is clustering.",
    limit: 3,
    options: [
      { value: "workload", label: "Workload" },
      { value: "emotional-strain", label: "Emotional strain" },
      { value: "lack-of-rest", label: "Lack of rest" },
      { value: "family-demands", label: "Family demands" },
      { value: "uncertainty", label: "Uncertainty" },
      { value: "conflict", label: "Conflict" },
      { value: "overthinking", label: "Overthinking" },
      { value: "low-motivation", label: "Low motivation" },
    ],
  },
  {
    id: "step-7",
    kind: "single-choice",
    field: "emotionalDetachment",
    eyebrow: "Signal 07 · emotional availability",
    question: "How often do you feel detached, numb, or less emotionally available than usual?",
    hint: "This does not need to be dramatic to matter. Subtle distance still counts.",
    variant: "segments",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "very-often", label: "Very often" },
    ],
  },
  {
    id: "step-8",
    kind: "single-choice",
    field: "recoverySpeed",
    eyebrow: "Signal 08 · bounce-back speed",
    question: "How quickly do you feel mentally recovered after rest or a lighter day?",
    hint: "The issue is not whether you can stop. It is whether stopping actually gives capacity back.",
    variant: "cards",
    options: [
      { value: "very-quickly", label: "Very quickly", description: "A lighter day usually helps noticeably." },
      { value: "reasonably", label: "Reasonably", description: "Recovery happens, though it may need some space." },
      { value: "slowly", label: "Slowly", description: "Relief shows up, but it is delayed and incomplete." },
      { value: "hardly-at-all", label: "Hardly at all", description: "Even lighter periods do very little to reset you." },
    ],
  },
  {
    id: "step-9",
    kind: "dual-slider",
    eyebrow: "Signal 09 · performance drift",
    question: "How much has your concentration or motivation dropped lately?",
    hint: "Set each slider separately. A drop in one can be stronger than the other.",
    fields: [
      {
        key: "concentrationDrop",
        label: "Concentration drop",
        minLabel: "No drop",
        maxLabel: "Major drop",
      },
      {
        key: "motivationDrop",
        label: "Motivation drop",
        minLabel: "No drop",
        maxLabel: "Major drop",
      },
    ],
  },
  {
    id: "step-10",
    kind: "single-choice",
    field: "morningDread",
    eyebrow: "Signal 10 · morning resistance",
    question: "How often does the next day feel heavy before it has properly begun?",
    hint: "This is often an early sign that recovery is not fully catching up, even if you are still functioning.",
    variant: "cards",
    options: [
      { value: "rarely", label: "Rarely", description: "Most mornings still feel workable once the day starts." },
      { value: "sometimes", label: "Sometimes", description: "You can feel the day landing heavier before it properly begins." },
      { value: "often", label: "Often", description: "Morning heaviness is becoming part of the baseline." },
      {
        value: "almost-every-day",
        label: "Almost every day",
        description: "The next day often feels costly before you have actually entered it.",
      },
    ],
  },
  {
    id: "step-11",
    kind: "single-choice",
    field: "weekendReset",
    eyebrow: "Signal 11 · recovery depth",
    question: "How much does a lighter day or weekend actually reset you right now?",
    hint: "This is about whether time off returns capacity, not simply whether you technically stop working.",
    variant: "visual",
    options: [
      { value: "fully-reset", label: "Fully reset", description: "A lighter stretch clearly restores energy and mental room." },
      { value: "mostly-reset", label: "Mostly reset", description: "Recovery time helps in a noticeable way." },
      { value: "partial-reset", label: "Partial reset", description: "It helps some, but the load still follows you." },
      { value: "barely-reset", label: "Barely reset", description: "Time off helps less than it should." },
      { value: "does-not-reset", label: "Does not reset", description: "Even lighter periods are not bringing you back very much." },
    ],
  },
  {
    id: "step-12",
    kind: "slider",
    field: "irritabilityImpact",
    eyebrow: "Signal 12 · emotional spillover",
    question: "How much is strain showing up as irritability, short patience, or lower emotional buffer?",
    hint: "Even if you stay composed outwardly, a lower internal buffer still matters.",
    minLabel: "Hardly at all",
    maxLabel: "A great deal",
    scaleHint: "Higher spillover usually means burnout load is affecting the emotional tone of the day.",
  },
  {
    id: "step-13",
    kind: "single-choice",
    field: "supportRecognition",
    eyebrow: "Signal 13 · support climate",
    question: "How supported, recognized, or understood do you feel in the places carrying the most load?",
    hint: "Strain tends to build faster when effort is high but support around it stays thin.",
    variant: "cards",
    options: [
      { value: "strongly-supported", label: "Strongly supported", description: "The effort feels visible and backed." },
      { value: "mostly-supported", label: "Mostly supported", description: "There is enough recognition to reduce isolation." },
      { value: "mixed", label: "Mixed", description: "Some support is there, but it is inconsistent." },
      { value: "under-recognized", label: "Under-recognized", description: "You carry a lot that feels lightly seen." },
      {
        value: "deeply-under-recognized",
        label: "Deeply under-recognized",
        description: "The load feels heavy and insufficiently acknowledged.",
      },
    ],
  },
  {
    id: "step-14",
    kind: "single-choice",
    field: "boundaryLeak",
    eyebrow: "Signal 14 · load leakage",
    question: "How often does the day's pressure keep leaking into time that is supposed to be yours?",
    hint: "Think about emotional carryover, background obligation, and how hard it is to truly be off.",
    variant: "segments",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "almost-constantly", label: "Almost constantly" },
    ],
  },
  {
    id: "step-15",
    kind: "single-choice",
    field: "currentState",
    eyebrow: "Signal 15 · self-read",
    question: "Which statement feels closest to your current state?",
    hint: "This last step does not diagnose anything. It helps the audit compare the signal pattern with how you experience yourself.",
    variant: "statement",
    options: [
      { value: "stretched-but-functioning", label: "A", description: "I feel stretched, but still functioning well" },
      { value: "increasingly-tired", label: "B", description: "I feel increasingly tired and less resilient" },
      {
        value: "recovery-not-catching-up",
        label: "C",
        description: "I feel drained and my recovery does not seem to catch up",
      },
      {
        value: "persistently-depleted",
        label: "D",
        description: "I feel persistently depleted and disconnected from my usual capacity",
      },
    ],
  },
];

export const relatedBurnoutTools: RelatedToolCard[] = [
  {
    title: "Overthinking Loop Check",
    description: "Spot whether mental replay, anticipation, or second-guessing is consuming recovery space.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolsHref({ category: "anxiety-overthinking", focus: "overthinking-loop-check" }),
  },
  {
    title: "Sleep Pressure Check",
    description: "Understand whether shutdown difficulty and night-time tension are feeding next-day depletion.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "time",
    href: buildToolHref({ slug: "sleep-pressure-check", categorySlug: "sleep-recovery" }),
  },
  {
    title: "Decision Fatigue Simulator",
    description: "See how accumulated choices, unfinished loops, and context-switching quietly erode bandwidth.",
    category: "Focus & Procrastination",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Turn emotional spillover into a calmer, more deliberate reset rhythm for the week ahead.",
    category: "Emotional Regulation",
    minutes: "6 min",
    icon: "insight",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
];

export const burnoutFaqItems: FaqItem[] = [
  {
    question: "What does a burnout risk score actually mean?",
    answer:
      "It is a directional readout of load, recovery quality, cognitive strain, and emotional wear. A higher score means your current pattern looks harder to replenish, not that you have been diagnosed with anything.",
  },
  {
    question: "Is burnout the same as being stressed?",
    answer:
      "No. Stress can be short-term and still recoverable. Burnout load usually involves strain that keeps continuing after effort stops, especially when recovery, concentration, and emotional availability start falling together.",
  },
  {
    question: "Can sleep alone fix burnout load?",
    answer:
      "Sleep is essential, but it is usually not the entire solution. If workload, emotional labor, unresolved switching, or decision friction stay high, good sleep often helps only partially.",
  },
  {
    question: "What usually increases burnout risk first?",
    answer:
      "For many people it starts with reduced recovery margin: poorer switch-off, lighter emotional resilience, heavier small tasks, and a slower return to baseline after demanding days.",
  },
  {
    question: "How often should I retake a burnout audit?",
    answer:
      "Every one to two weeks is usually enough if your situation is actively shifting. The more useful pattern is comparison over time, especially after workload, sleep, or boundary changes.",
  },
  {
    question: "What if my score is high but I can still function?",
    answer:
      "That is common. Many people keep performing while borrowing from recovery, motivation, and emotional availability. Functioning does not automatically mean the current pattern is sustainable.",
  },
  {
    question: "What should I do after seeing my result?",
    answer:
      "Use the score to choose your next move, not to label yourself. Look at which dimension and source cluster are highest, then reduce one major friction point while adding one form of real recovery you can repeat.",
  },
  {
    question: "Can a high burnout score happen even if I still care about my work?",
    answer:
      "Yes. Caring deeply can coexist with heavy depletion. The audit is measuring how costly the current pattern looks, not whether your commitment or values have disappeared.",
  },
  {
    question: "What part of the score usually changes first when recovery starts working again?",
    answer:
      "People often notice small improvements first in bounce-back speed, switch-off quality, or the heaviness of routine tasks. Emotional wear and motivation usually take longer to rebuild than one better night of sleep.",
  },
  {
    question: "Should I focus on workload or recovery first if both are high?",
    answer:
      "Usually both matter, but recovery tends to work better when one major source of pressure is lowered at the same time. If the load never softens, recovery can feel like maintenance instead of repair.",
  },
];

export const burnoutStoryBlock = {
  eyebrow: "How this often feels",
  title: "You may still look capable while the inside of the day feels increasingly expensive.",
  quote:
    "This often looks like someone who is still getting things done, so other people assume things are fine. But the day feels more expensive than it used to. Even lighter evenings do not seem to bring back the same version of the person. The outside still works. The inside is taking longer to return.",
  takeaway:
    "This is why burnout load is easy to miss early. The visible functioning can stay intact while recovery, patience, and emotional availability are already thinning underneath it.",
  toneLabel: "Common lived pattern",
  accent: "#6FD3FF",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What burnout load actually means",
    paragraphs: [
      "Burnout load is not just about being busy. It describes what happens when the cost of living, working, caregiving, deciding, and staying mentally switched on keeps stacking faster than your system can recover. Two people can have equally full calendars and still land in very different places. The difference often comes down to how much control they have, how interrupted their recovery is, and whether effort keeps following them long after the day is technically over.",
      "That is why this audit looks at more than tiredness. It checks emotional drain, remaining evening energy, sleep quality, recovery speed, cognitive heaviness, and whether you are starting to feel detached from your usual self. Those signals together tell a much clearer story than any single question can. Burnout load is usually pattern-based. It reveals itself through accumulation, not one dramatic symptom.",
      "A useful way to think about burnout load is as a mismatch between demand and replenishment. When pressure rises but recovery can still catch up, people usually feel stretched yet basically intact. When recovery no longer catches up, the tone changes. Small tasks become heavier, switching off gets harder, and a lighter day stops feeling truly restorative. That shift is what makes burnout risk different from ordinary, recoverable stress.",
    ],
  },
  {
    title: "Early signs people often miss",
    paragraphs: [
      "The earliest signs are rarely dramatic. They are usually subtle losses in margin. You may notice that decisions feel more annoying than they should, your patience shortens faster, or your concentration slips even when the work itself is not unusually complex. People often dismiss these signs because they are still functioning, still meeting responsibilities, or still getting praise for performance. Functioning can mask strain for a surprisingly long time.",
      "Another common early sign is diminished bounce-back. You rest, but not all the way. You sleep, but wake up feeling only partly repaired. You take a lighter evening, yet your mind still feels crowded. Many people assume recovery should feel instant, and when it does not, they blame themselves for not using their time well enough. In reality, slow recovery can be a sign that your system is carrying more load than passive rest can reverse.",
      "Emotional availability is another signal people miss. Burnout risk does not always feel like sadness or visible collapse. It can show up as flatness, numbness, lower empathy, or feeling strangely unreachable inside your own life. That shift matters because it often means the problem is no longer only effort. It is spillover.",
    ],
  },
  {
    title: "Why stress and burnout are not the same thing",
    paragraphs: [
      "Stress and burnout overlap, but they are not interchangeable. Stress usually refers to activation under demand. It can feel intense, but it can also resolve once the demand passes and recovery happens. Burnout load is more about what remains when the system keeps spending without being fully repaid. That is why people can feel exhausted after a relatively normal day when the debt has been building for weeks or months.",
      "Stress often says, \"There is a lot happening.\" Burnout load says, \"A lot has been happening for too long, and I am not coming back the same way anymore.\" One state is compatible with healthy recovery. The other starts to signal that recovery is lagging behind demand often enough that capacity itself is being affected.",
      "This distinction matters because the solution changes. If you are stressed but broadly restoring well, you may need temporary relief, better pacing, or a short reset. If you are moving into burnout load, the work is deeper. You usually need less cognitive friction, more meaningful decompression, fewer unnecessary decisions, and a more honest look at what is no longer sustainable.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "energyDebt" as BurnoutDimensionKey,
    title: "Energy Debt",
    paragraphs: [
      "Energy debt is the simplest signal to understand and one of the easiest to underestimate. It reflects how much daily demand is draining your reserves before the day is even finished. When energy debt is high, evenings stop feeling like usable time and start feeling like recovery triage.",
      "People with elevated energy debt are often not lazy, unmotivated, or undisciplined. They are running closer to empty than their schedule suggests. That is why conserving energy and reducing unnecessary activation becomes a smart systems move, not a personal failure.",
    ],
  },
  {
    key: "recoveryQuality" as BurnoutDimensionKey,
    title: "Recovery Quality",
    paragraphs: [
      "Recovery quality looks at whether sleep, pauses, and lighter days are giving real capacity back. A person can technically rest and still not recover very well. That happens when stress remains mentally active, sleep is shallow, or lighter time is still packed with low-grade tension.",
      "Improving recovery quality usually means more than adding leisure. It means choosing inputs that calm the nervous system, reduce switching, and make it easier for the body and mind to stop performing.",
    ],
  },
  {
    key: "cognitiveStrain" as BurnoutDimensionKey,
    title: "Cognitive Strain",
    paragraphs: [
      "Cognitive strain is the load of constant thinking, deciding, tracking, remembering, and mentally reopening unfinished loops. It is why people can feel exhausted by a desk day that looked manageable from the outside. The mind has been carrying too much architecture.",
      "This dimension matters because high cognitive strain can make everything feel heavier, including recovery itself. When the brain stays busy, it is harder to feel truly off duty, harder to prioritize, and harder to tell what deserves effort right now.",
    ],
  },
  {
    key: "emotionalWear" as BurnoutDimensionKey,
    title: "Emotional Wear",
    paragraphs: [
      "Emotional wear captures the quieter emotional cost of carrying too much for too long. It can show up as irritability, numbness, reduced empathy, emotional distance, or a sense that you are meeting life with less warmth than usual.",
      "That does not make you cold. It often means your system is trying to conserve resources. Emotional wear is a useful signal because it points to forms of depletion that productivity advice usually misses.",
    ],
  },
];

export const riskBlocks = [
  {
    title: "Sustained overload and low control",
    body:
      "Burnout risk rises fastest when demand stays high and you have little room to pace, sequence, or protect your own time. Sustained overload becomes much harder to recover from when you are constantly reacting instead of shaping the day.",
  },
  {
    title: "Poor sleep recovery",
    body:
      "When sleep stops feeling restorative, the whole system loses its most dependable repair cycle. Even modest pressure begins to feel heavier when each day starts with incomplete replenishment.",
  },
  {
    title: "Decision strain and cognitive friction",
    body:
      "Too many choices, tabs, interruptions, and unresolved loops create invisible mental weight. This is one reason why apparently simple work can still feel unusually expensive.",
  },
  {
    title: "Emotional labor and unresolved switching",
    body:
      "Carrying other people's feelings, staying highly available, or mentally replaying difficult moments keeps effort active beyond the task itself. That extended emotional exposure often accelerates burnout load.",
  },
];

export const reductionBlocks = [
  {
    title: "Real recovery versus passive rest",
    body:
      "Passive rest can pause effort, but real recovery lowers activation and gives capacity back. The difference is whether you finish the break feeling clearer, softer, and more available than when it started.",
  },
  {
    title: "Sleep repair and lower cognitive friction",
    body:
      "Improving pre-sleep wind-down, reducing late decisions, and simplifying evening inputs can strengthen recovery more than adding another productivity system during the day.",
  },
  {
    title: "Lowering decision volume",
    body:
      "A smaller choice set protects bandwidth. Repeated defaults around meals, routines, admin, and communication can remove more mental load than most people expect.",
  },
  {
    title: "Emotional decompression and boundary protection",
    body:
      "If emotional spillover is high, recovery needs space that is not being used to absorb more demand. Short, reliable boundary rituals can matter more than occasional perfect rest days.",
  },
];

export const nextStepParagraphs = [
  "If your score is elevated, the goal is not to panic or label yourself. The goal is to reduce the number of forces working against recovery at the same time. Start with what is most adjustable now: decision load, schedule density, expectation creep, unresolved mental carryover, or poor sleep inputs.",
  "Try to choose one removal move and one restoration move. A removal move might be delaying a nonessential commitment, tightening a meeting window, or reducing emotional exposure where you can. A restoration move might be earlier shutdown, a lower-stimulation evening, a protected walk, or one block of real quiet without input.",
  "If your score feels high for more than a short stretch, or if the result matches a deeper sense that you are no longer accessing your usual capacity, treat that information seriously. The page is not a diagnosis. It is a structured prompt to respond earlier and more intelligently.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Burnout Recovery Sprint",
  description:
    "A structured reset guide for rebuilding recovery capacity, reducing mental overload, and stabilizing your day-to-day energy.",
  buttonLabel: "View Next Step",
};

const emotionalDrainScores: Record<EmotionalDrainValue, number> = {
  rarely: 12,
  sometimes: 38,
  often: 72,
  "almost-constantly": 96,
};

const switchOffScores: Record<SwitchOffValue, number> = {
  "very-easy": 8,
  "mostly-easy": 24,
  mixed: 50,
  difficult: 76,
  "very-difficult": 96,
};

const sleepRestorationScores: Record<SleepRestorationValue, number> = {
  "deeply-restorative": 8,
  "mostly-restorative": 24,
  inconsistent: 52,
  poor: 78,
  "barely-restorative": 96,
};

const taskHeavinessScores: Record<TaskHeavinessValue, number> = {
  rarely: 10,
  sometimes: 36,
  often: 72,
  constantly: 94,
};

const emotionalDetachmentScores: Record<EmotionalDetachmentValue, number> = {
  never: 4,
  rarely: 22,
  sometimes: 50,
  often: 76,
  "very-often": 95,
};

const recoverySpeedScores: Record<RecoverySpeedValue, number> = {
  "very-quickly": 10,
  reasonably: 34,
  slowly: 72,
  "hardly-at-all": 96,
};

const morningDreadScores: Record<MorningDreadValue, number> = {
  rarely: 14,
  sometimes: 42,
  often: 74,
  "almost-every-day": 96,
};

const weekendResetScores: Record<WeekendResetValue, number> = {
  "fully-reset": 10,
  "mostly-reset": 28,
  "partial-reset": 56,
  "barely-reset": 82,
  "does-not-reset": 96,
};

const supportRecognitionScores: Record<SupportRecognitionValue, number> = {
  "strongly-supported": 10,
  "mostly-supported": 24,
  mixed: 48,
  "under-recognized": 74,
  "deeply-under-recognized": 94,
};

const boundaryLeakScores: Record<BoundaryLeakValue, number> = {
  rarely: 12,
  sometimes: 40,
  often: 72,
  "almost-constantly": 94,
};

const currentStateScores: Record<CurrentStateValue, number> = {
  "stretched-but-functioning": 28,
  "increasingly-tired": 52,
  "recovery-not-catching-up": 78,
  "persistently-depleted": 94,
};

const scoringWeights = {
  emotionalDrain: 9,
  eveningEnergy: 9,
  switchOff: 7,
  sleepRestoration: 7,
  taskHeaviness: 6,
  drainSources: 6,
  emotionalDetachment: 7,
  recoverySpeed: 6,
  concentrationDrop: 6,
  motivationDrop: 6,
  morningDread: 7,
  weekendReset: 7,
  irritabilityImpact: 6,
  supportRecognition: 5,
  boundaryLeak: 6,
} as const;

const sourceMap: Record<DrainAreaValue, SourceBucketKey> = {
  workload: "workload",
  "emotional-strain": "emotional-strain",
  "lack-of-rest": "lack-of-rest",
  "family-demands": "relational-family-load",
  uncertainty: "uncertainty-overthinking-conflict",
  conflict: "uncertainty-overthinking-conflict",
  overthinking: "uncertainty-overthinking-conflict",
  "low-motivation": "emotional-strain",
};

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

function getBand(score: number) {
  return burnoutBands.find((band) => score >= band.min && score <= band.max) ?? burnoutBands[0];
}

function getDimensionMeta(key: BurnoutDimensionKey) {
  return burnoutDimensions.find((dimension) => dimension.key === key) ?? burnoutDimensions[0];
}

function getSourceMeta(key: SourceBucketKey) {
  return sourceBuckets.find((bucket) => bucket.key === key) ?? sourceBuckets[0];
}

export function getInitialBurnoutAnswers(): BurnoutAnswers {
  return {
    drainSources: [],
  };
}

export function isBurnoutStepComplete(step: BurnoutAuditStep, answers: BurnoutAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "dual-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  if (step.kind === "multi-select") {
    return answers.drainSources.length > 0;
  }

  return Boolean(answers[step.field]);
}

export function calculateBurnoutAudit(answers: BurnoutAnswers): BurnoutAuditResult {
  const drainSourceScore = answers.drainSources.length
    ? clampScore((answers.drainSources.length / 3) * 100)
    : undefined;

  const emotionalDrain = answers.emotionalDrain ? emotionalDrainScores[answers.emotionalDrain] : undefined;
  const eveningEnergy = typeof answers.eveningEnergy === "number" ? 100 - answers.eveningEnergy : undefined;
  const switchOff = answers.switchOff ? switchOffScores[answers.switchOff] : undefined;
  const sleepRestoration = answers.sleepRestoration
    ? sleepRestorationScores[answers.sleepRestoration]
    : undefined;
  const taskHeaviness = answers.taskHeaviness ? taskHeavinessScores[answers.taskHeaviness] : undefined;
  const emotionalDetachment = answers.emotionalDetachment
    ? emotionalDetachmentScores[answers.emotionalDetachment]
    : undefined;
  const recoverySpeed = answers.recoverySpeed ? recoverySpeedScores[answers.recoverySpeed] : undefined;
  const concentrationDrop =
    typeof answers.concentrationDrop === "number" ? clampScore(answers.concentrationDrop) : undefined;
  const motivationDrop =
    typeof answers.motivationDrop === "number" ? clampScore(answers.motivationDrop) : undefined;
  const morningDread = answers.morningDread ? morningDreadScores[answers.morningDread] : undefined;
  const weekendReset = answers.weekendReset ? weekendResetScores[answers.weekendReset] : undefined;
  const irritabilityImpact =
    typeof answers.irritabilityImpact === "number" ? clampScore(answers.irritabilityImpact) : undefined;
  const supportRecognition = answers.supportRecognition
    ? supportRecognitionScores[answers.supportRecognition]
    : undefined;
  const boundaryLeak = answers.boundaryLeak ? boundaryLeakScores[answers.boundaryLeak] : undefined;
  const currentStateValue = answers.currentState ? currentStateScores[answers.currentState] : null;

  const scoredEntries = [
    { value: emotionalDrain, weight: scoringWeights.emotionalDrain },
    { value: eveningEnergy, weight: scoringWeights.eveningEnergy },
    { value: switchOff, weight: scoringWeights.switchOff },
    { value: sleepRestoration, weight: scoringWeights.sleepRestoration },
    { value: taskHeaviness, weight: scoringWeights.taskHeaviness },
    { value: drainSourceScore, weight: scoringWeights.drainSources },
    { value: emotionalDetachment, weight: scoringWeights.emotionalDetachment },
    { value: recoverySpeed, weight: scoringWeights.recoverySpeed },
    { value: concentrationDrop, weight: scoringWeights.concentrationDrop },
    { value: motivationDrop, weight: scoringWeights.motivationDrop },
    { value: morningDread, weight: scoringWeights.morningDread },
    { value: weekendReset, weight: scoringWeights.weekendReset },
    { value: irritabilityImpact, weight: scoringWeights.irritabilityImpact },
    { value: supportRecognition, weight: scoringWeights.supportRecognition },
    { value: boundaryLeak, weight: scoringWeights.boundaryLeak },
  ];

  const answeredWeight = scoredEntries.reduce((sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0), 0);
  const weightedTotal = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );
  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(score);
  const completionRatio = answeredWeight / 100;

  const sourceCounts = sourceBuckets.reduce<Record<SourceBucketKey, number>>(
    (accumulator, bucket) => ({ ...accumulator, [bucket.key]: 0 }),
    {
      workload: 0,
      "emotional-strain": 0,
      "lack-of-rest": 0,
      "relational-family-load": 0,
      "uncertainty-overthinking-conflict": 0,
    },
  );

  for (const area of answers.drainSources) {
    const bucket = sourceMap[area];
    sourceCounts[bucket] += 1;
  }

  const totalSourceSelections = answers.drainSources.length || sourceBuckets.length;
  const sourceSplit = sourceBuckets.map((bucket) => ({
    ...bucket,
    value: clampScore((100 * (answers.drainSources.length ? sourceCounts[bucket.key] : 1)) / totalSourceSelections),
  }));

  const emotionalSourceLoad =
    getSourceMeta("emotional-strain") &&
    sourceSplit.find((bucket) => bucket.key === "emotional-strain")?.value;
  const restSourceLoad = sourceSplit.find((bucket) => bucket.key === "lack-of-rest")?.value;
  const relationalSourceLoad = sourceSplit.find((bucket) => bucket.key === "relational-family-load")?.value;
  const uncertaintySourceLoad = sourceSplit.find((bucket) => bucket.key === "uncertainty-overthinking-conflict")?.value;

  const dimensions: Record<BurnoutDimensionKey, number> = {
    energyDebt: weightedAverage([
      { value: eveningEnergy, weight: 0.42 },
      { value: sleepRestoration, weight: 0.24 },
      { value: recoverySpeed, weight: 0.18 },
      { value: morningDread, weight: 0.1 },
      { value: weekendReset, weight: 0.08 },
      { value: restSourceLoad, weight: 0.1 },
    ]),
    recoveryQuality: weightedAverage([
      { value: sleepRestoration, weight: 0.32 },
      { value: recoverySpeed, weight: 0.24 },
      { value: weekendReset, weight: 0.22 },
      { value: eveningEnergy, weight: 0.12 },
      { value: boundaryLeak, weight: 0.06 },
      { value: uncertaintySourceLoad, weight: 0.04 },
    ]),
    cognitiveStrain: weightedAverage([
      { value: switchOff, weight: 0.22 },
      { value: taskHeaviness, weight: 0.18 },
      { value: concentrationDrop, weight: 0.22 },
      { value: motivationDrop, weight: 0.1 },
      { value: boundaryLeak, weight: 0.14 },
      { value: morningDread, weight: 0.06 },
      { value: uncertaintySourceLoad, weight: 0.08 },
    ]),
    emotionalWear: weightedAverage([
      { value: emotionalDrain, weight: 0.3 },
      { value: emotionalDetachment, weight: 0.2 },
      { value: irritabilityImpact, weight: 0.16 },
      { value: supportRecognition, weight: 0.1 },
      { value: emotionalSourceLoad, weight: 0.08 },
      { value: relationalSourceLoad, weight: 0.06 },
      { value: currentStateValue ?? undefined, weight: 0.1 },
    ]),
  };

  const recoveryCapacity = clampScore(
    100 - weightedAverage([{ value: dimensions.energyDebt, weight: 0.45 }, { value: dimensions.recoveryQuality, weight: 0.55 }]),
  );
  const recoveryGap = clampScore(Math.max(0, score - recoveryCapacity));

  const dominantDimensions = [...burnoutDimensions].sort(
    (left, right) => dimensions[right.key] - dimensions[left.key],
  );
  const dominantSources = [...sourceSplit].sort((left, right) => right.value - left.value);

  const topDimension = dominantDimensions[0];
  const secondDimension = dominantDimensions[1];
  const topSources = dominantSources
    .filter((bucket) => bucket.value > 0)
    .slice(0, 2)
    .map((bucket) => bucket.label.toLowerCase());

  const sourcePhrase =
    topSources.length === 0
      ? "general daily demand"
      : topSources.length === 1
        ? topSources[0]
        : `${topSources[0]} and ${topSources[1]}`;

  const signalLabel = `Burnout load appears ${band.signalTone} across ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()}.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} ${topDimension.label} is the most pronounced dimension right now, with ${sourcePhrase} adding the clearest source pressure.`;
  const nextStep = `${band.nextStepLead} Start with a small move that lowers ${topDimension.label.toLowerCase()} while reducing pressure from ${sourcePhrase}.`;

  let alignmentNote = "Use the score as a directional readout of load and recovery, not a fixed verdict about you.";

  if (currentStateValue !== null) {
    const difference = currentStateValue - score;

    if (difference >= 16) {
      alignmentNote =
        "Your self-read feels more severe than the overall score, which often means the lived experience of depletion is landing louder than the average signal picture.";
    } else if (difference <= -16) {
      alignmentNote =
        "You may still be functioning well outwardly, but the background load markers are rising faster than they may feel day to day.";
    } else {
      alignmentNote = "Your self-read and the audit signal are broadly aligned, which adds confidence to the pattern shown here.";
    }
  }

  return {
    score,
    band,
    completionRatio,
    isComplete: completionRatio === 1 && Boolean(answers.currentState),
    dimensions,
    recoveryCapacity,
    recoveryGap,
    sourceSplit,
    dominantDimensions,
    dominantSources,
    signalLabel,
    interpretation,
    standout,
    nextStep,
    alignmentNote,
    currentStateValue,
  };
}

export function getDimensionByKey(key: BurnoutDimensionKey) {
  return getDimensionMeta(key);
}
