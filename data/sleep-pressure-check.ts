import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type WakingRestorationValue =
  | "very-restored"
  | "mostly-restored"
  | "mixed"
  | "usually-unrested"
  | "deeply-unrested";

export type MentalDelayValue = "never" | "rarely" | "sometimes" | "often" | "very-often";

export type DisruptionSourceValue =
  | "stress"
  | "overthinking"
  | "late-screens"
  | "schedule-inconsistency"
  | "waking-at-night"
  | "early-waking"
  | "workload-pressure"
  | "emotional-strain"
  | "caffeine-timing"
  | "environment-noise";

export type UnderRecoveredValue = "rarely" | "sometimes" | "often" | "very-often";

export type RecoverySpeedValue = "quickly" | "reasonably" | "slowly" | "hardly-at-all";
export type WindDownEaseValue = "very-easy" | "mostly-easy" | "mixed" | "difficult" | "very-difficult";
export type OvernightFragmentationValue = "rarely" | "sometimes" | "often" | "very-often";
export type CatchUpRelianceValue = "rarely" | "sometimes" | "often" | "very-often";

export type PressurePatternValue =
  | "mostly-okay"
  | "subtle-gap"
  | "accumulating-tiredness"
  | "under-recovered-days";

export type FinalPatternValue =
  | "catches-up"
  | "inconsistent-daytime"
  | "functioning-not-restored"
  | "persistently-behind";

export type SleepDimensionKey =
  | "recoveryDebt"
  | "sleepDisruptionLoad"
  | "daytimeCarryover"
  | "restorationQuality";

export type SleepBandKey =
  | "restored-pattern"
  | "mild-sleep-pressure"
  | "accumulating-recovery-debt"
  | "high-carryover-fatigue"
  | "cognitive-recovery-deficit";

export type DisruptionCategoryKey =
  | "mental-stress-overthinking"
  | "timing-inconsistency"
  | "night-disruption"
  | "emotional-strain"
  | "environmental-behavioral-friction";

export type SpilloverAreaKey = "focus" | "mood" | "patience";

export type SleepChoiceOption = {
  value: string;
  label: string;
  description?: string;
};

export type SleepAnswers = {
  wakingRestoration?: WakingRestorationValue;
  timingIrregularity?: number;
  mentalDelay?: MentalDelayValue;
  disruptions: DisruptionSourceValue[];
  underRecoveredPattern?: UnderRecoveredValue;
  focusImpact?: number;
  moodImpact?: number;
  patienceImpact?: number;
  recoverySpeed?: RecoverySpeedValue;
  pressurePattern?: PressurePatternValue;
  sleepOpportunity?: number;
  windDownEase?: WindDownEaseValue;
  overnightFragmentation?: OvernightFragmentationValue;
  catchUpReliance?: CatchUpRelianceValue;
  dayCrash?: number;
  pushThroughFatigue?: number;
  finalPattern?: FinalPatternValue;
};

type BaseStep = {
  id: string;
  step: number;
  eyebrow: string;
  hint: string;
  question: string;
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field:
    | "wakingRestoration"
    | "mentalDelay"
    | "underRecoveredPattern"
    | "recoverySpeed"
    | "pressurePattern"
    | "windDownEase"
    | "overnightFragmentation"
    | "catchUpReliance"
    | "finalPattern";
  options: SleepChoiceOption[];
  variant: "segments" | "cards";
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "timingIrregularity" | "sleepOpportunity" | "dayCrash" | "pushThroughFatigue";
  label: string;
  minLabel: string;
  maxLabel: string;
  markers?: string[];
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "disruptions";
  limit: number;
  options: SleepChoiceOption[];
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "focusImpact" | "moodImpact" | "patienceImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type SleepToolStep = SegmentedStep | SliderStep | MultiSelectStep | TripleSliderStep;

export type SleepBand = {
  key: SleepBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  carryoverLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type SleepDimension = {
  key: SleepDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
  direction: "higher-is-heavier" | "higher-is-better";
};

export type DisruptionCategory = {
  key: DisruptionCategoryKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type SourceScore = DisruptionCategory & {
  value: number;
};

export type TimelinePoint = {
  day: string;
  debt: number;
  carryover: number;
  restoration: number;
};

export type SpilloverArea = {
  key: SpilloverAreaKey;
  label: string;
  accent: string;
  value: number;
};

export type RelatedSleepTool = {
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
  key: SleepDimensionKey;
  paragraphs: string[];
};

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type SleepResult = {
  score: number;
  band: SleepBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<SleepDimensionKey, number>;
  sourceScores: SourceScore[];
  timeline: TimelinePoint[];
  spilloverAreas: SpilloverArea[];
  primaryDriver: DisruptionCategory;
  spilloverArea: SpilloverArea;
  recoveryResilience: number;
  recoveryResilienceLabel: string;
  signalLabel: string;
  interpretation: string;
  standout: string;
  carryoverInsight: string;
  focusImpact: number;
  moodImpact: number;
  patienceImpact: number;
  disruptionCount: number;
};

export const sleepPressureMetadata = {
  eyebrow: "SLEEP & RECOVERY TOOL",
  title: "Sleep Pressure Check",
  description:
    "See why you can sleep and still wake up under-recovered. This tool maps shutdown friction, sleep quality, rest debt, and next-day steadiness in a simple way.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const sleepDimensions: SleepDimension[] = [
  {
    key: "recoveryDebt",
    label: "Recovery Debt",
    description: "How much restoration appears to be lagging behind the recent demand your system has been carrying.",
    icon: "graph",
    accent: "#93C5FD",
    direction: "higher-is-heavier",
  },
  {
    key: "sleepDisruptionLoad",
    label: "Sleep Disruption Load",
    description: "How much timing irregularity, mental activation, or nighttime friction is making sleep less restorative.",
    icon: "pattern",
    accent: "#67E8F9",
    direction: "higher-is-heavier",
  },
  {
    key: "daytimeCarryover",
    label: "Daytime Carryover",
    description: "How much last night is still echoing into focus, mood, patience, and next-day steadiness.",
    icon: "signal",
    accent: "#FCA5A5",
    direction: "higher-is-heavier",
  },
  {
    key: "restorationQuality",
    label: "Restoration Quality",
    description: "How fully sleep seems to be restoring clarity, energy, and usable recovery rather than only passing time.",
    icon: "time",
    accent: "#5EEAD4",
    direction: "higher-is-better",
  },
];

export const disruptionCategories: DisruptionCategory[] = [
  {
    key: "mental-stress-overthinking",
    label: "Stress / overthinking",
    description: "Mental activation, replay, and cognitive spillover keeping the system too engaged to settle fully.",
    icon: "insight",
    accent: "#C4B5FD",
  },
  {
    key: "timing-inconsistency",
    label: "Schedule inconsistency",
    description: "Irregular sleep timing weakening the predictability and stability the recovery system relies on.",
    icon: "structure",
    accent: "#93C5FD",
  },
  {
    key: "night-disruption",
    label: "Night disruption",
    description: "Waking through the night, early waking, or repeated fragmentation limiting how restorative sleep feels.",
    icon: "time",
    accent: "#67E8F9",
  },
  {
    key: "emotional-strain",
    label: "Emotional strain",
    description: "Relational or emotional carryover keeping the nervous system more active than the schedule suggests.",
    icon: "shield",
    accent: "#FCA5A5",
  },
  {
    key: "environmental-behavioral-friction",
    label: "Environment / behavior",
    description: "Late screens, caffeine timing, or sleep-environment friction interfering with restoration quality.",
    icon: "lock",
    accent: "#FCD34D",
  },
];

export const sleepBands: SleepBand[] = [
  {
    key: "restored-pattern",
    min: 0,
    max: 24,
    title: "Restored Pattern",
    summary: "Your current pattern suggests that recovery is largely catching up, and nighttime friction is not creating heavy daytime drag.",
    interpretation:
      "That does not mean every night feels perfect. It means the overall system still looks able to restore enough clarity, steadiness, and energy to keep pressure from accumulating very far.",
    standoutLead: "The clearest signal is that recovery still appears able to do its job without large visible backlog.",
    carryoverLead: "Carryover is present, but it does not look strong enough to dominate the following day.",
    gradientFrom: "#5EEAD4",
    gradientTo: "#93C5FD",
    glow: "rgba(94, 234, 212, 0.24)",
  },
  {
    key: "mild-sleep-pressure",
    min: 25,
    max: 44,
    title: "Mild Sleep Pressure",
    summary: "Some recovery drag is present, but it still looks like the system can catch up if pressure does not keep stacking for too long.",
    interpretation:
      "This is the zone where people often feel a little off, thinner, or less patient than usual without necessarily naming sleep as the reason. Recovery is working, but not quite cleanly enough to feel fully steady.",
    standoutLead: "The most important signal is subtle carryover rather than major collapse.",
    carryoverLead: "The next day is being shaped by sleep more than it may look on the surface, even if function is still mostly intact.",
    gradientFrom: "#93C5FD",
    gradientTo: "#C4B5FD",
    glow: "rgba(147, 197, 253, 0.22)",
  },
  {
    key: "accumulating-recovery-debt",
    min: 45,
    max: 64,
    title: "Accumulating Recovery Debt",
    summary: "Recovery appears to be falling behind often enough that tiredness and cognitive drag may now be stacking across days instead of fully clearing.",
    interpretation:
      "This usually feels like sleeping, functioning, and continuing, yet still not landing back at full steadiness. The system is not failing. It is simply not catching up as fully as current load requires.",
    standoutLead: "The map suggests that the issue is not one bad night, but pressure that is accumulating faster than restoration clears it.",
    carryoverLead: "Daytime effects are likely lasting longer now, which makes the next night matter more than it did when recovery was resetting cleanly.",
    gradientFrom: "#C4B5FD",
    gradientTo: "#FCD34D",
    glow: "rgba(196, 181, 253, 0.22)",
  },
  {
    key: "high-carryover-fatigue",
    min: 65,
    max: 84,
    title: "High Carryover Fatigue",
    summary: "Your current pattern suggests that sleep pressure is now clearly spilling into focus, mood, patience, or cognitive resilience the next day.",
    interpretation:
      "This often shows up as a day that still moves forward, but with more drag, shorter patience, weaker focus, or a sense that the system is operating below its real baseline. The pressure is no longer staying contained to the night.",
    standoutLead: "The strongest signal is next-day carryover: recovery is not only incomplete, it is now shaping daytime functioning more visibly.",
    carryoverLead: "Where carryover shows up most often becomes important here, because that is usually the place where people start blaming themselves for a recovery problem they have not yet named.",
    gradientFrom: "#FCD34D",
    gradientTo: "#FCA5A5",
    glow: "rgba(252, 211, 77, 0.22)",
  },
  {
    key: "cognitive-recovery-deficit",
    min: 85,
    max: 100,
    title: "Cognitive Recovery Deficit",
    summary: "The system looks persistently under-recovered, with enough debt and carryover that clarity, steadiness, and resilience may all be feeling noticeably reduced.",
    interpretation:
      "That is not a diagnosis. It is a signal that sleep, restoration, and life load are not lining up well enough right now for recovery to catch up consistently. When that gap stays open, the day can begin to feel heavier before it has properly started.",
    standoutLead: "The key signal here is that recovery no longer looks like it is reliably resetting the system between days.",
    carryoverLead: "Carryover is likely shaping the feel of the whole day now, which means relief usually comes from restoring recovery conditions rather than demanding more performance from an already depleted system.",
    gradientFrom: "#FCA5A5",
    gradientTo: "#C4B5FD",
    glow: "rgba(252, 165, 165, 0.24)",
  },
];

const wakingOptions: SleepChoiceOption[] = [
  { value: "very-restored", label: "Very restored" },
  { value: "mostly-restored", label: "Mostly restored" },
  { value: "mixed", label: "Mixed" },
  { value: "usually-unrested", label: "Usually unrested" },
  { value: "deeply-unrested", label: "Deeply unrested" },
];

const mentalDelayOptions: SleepChoiceOption[] = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
];

const disruptionOptions: SleepChoiceOption[] = [
  { value: "stress", label: "Stress" },
  { value: "overthinking", label: "Overthinking" },
  { value: "late-screens", label: "Late screens" },
  { value: "schedule-inconsistency", label: "Schedule inconsistency" },
  { value: "waking-at-night", label: "Waking at night" },
  { value: "early-waking", label: "Early waking" },
  { value: "workload-pressure", label: "Workload pressure" },
  { value: "emotional-strain", label: "Emotional strain" },
  { value: "caffeine-timing", label: "Caffeine timing" },
  { value: "environment-noise", label: "Environment / noise" },
];

const underRecoveredOptions: SleepChoiceOption[] = [
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "very-often", label: "Very often" },
];

const recoverySpeedOptions: SleepChoiceOption[] = [
  { value: "quickly", label: "Quickly" },
  { value: "reasonably", label: "Reasonably" },
  { value: "slowly", label: "Slowly" },
  { value: "hardly-at-all", label: "Hardly at all" },
];

const pressurePatternOptions: SleepChoiceOption[] = [
  {
    value: "mostly-okay",
    label: "A. I'm mostly okay, but not fully restored",
    description: "There is some drag, but it is not consistently reshaping the whole day.",
  },
  {
    value: "subtle-gap",
    label: "B. I'm carrying a subtle but steady recovery gap",
    description: "Sleep happens, but the reset feels a little incomplete more often than not.",
  },
  {
    value: "accumulating-tiredness",
    label: "C. I'm accumulating tiredness across days",
    description: "Pressure appears to be stacking instead of clearing fully between nights.",
  },
  {
    value: "under-recovered-days",
    label: "D. My days feel mentally and physically under-recovered",
    description: "The carryover is strong enough that the whole day starts to feel shaped by it.",
  },
];

const finalPatternOptions: SleepChoiceOption[] = [
  {
    value: "catches-up",
    label: "A. My recovery usually catches up",
    description: "Even when sleep is imperfect, the system still rebounds reasonably well.",
  },
  {
    value: "inconsistent-daytime",
    label: "B. My sleep is inconsistent enough to affect daytime steadiness",
    description: "The issue is less one bad night and more a pattern that keeps nudging the day off balance.",
  },
  {
    value: "functioning-not-restored",
    label: "C. I'm often functioning, but not truly restored",
    description: "The day still works, but it no longer feels like recovery has fully landed.",
  },
  {
    value: "persistently-behind",
    label: "D. My recovery feels persistently behind my life load",
    description: "Demand appears to be running ahead of restoration in a way the system can now feel clearly.",
  },
];

export const sleepPressureSteps: SleepToolStep[] = [
  {
    id: "waking-restoration",
    step: 1,
    eyebrow: "Step 01 · Morning signal",
    hint: "Start with the feeling at wake-up, because that usually tells you more than total time in bed on its own.",
    question: "How restored have you felt when waking lately?",
    kind: "segmented",
    field: "wakingRestoration",
    options: wakingOptions,
    variant: "segments",
  },
  {
    id: "timing-irregularity",
    step: 2,
    eyebrow: "Step 02 · Sleep timing",
    hint: "This slider is about rhythm rather than quantity. More irregular timing usually creates more pressure even before hours drop.",
    question: "Across the past week, how consistent has your sleep timing been?",
    kind: "slider",
    field: "timingIrregularity",
    label: "Sleep timing rhythm",
    minLabel: "Very consistent",
    maxLabel: "Highly irregular",
    markers: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  {
    id: "mental-delay",
    step: 3,
    eyebrow: "Step 03 · Night activation",
    hint: "Mental replay, stress, and racing thoughts often create recovery debt long before people think of them as a sleep issue.",
    question: "How often do racing thoughts, stress, or mental replay delay sleep for you?",
    kind: "segmented",
    field: "mentalDelay",
    options: mentalDelayOptions,
    variant: "segments",
  },
  {
    id: "disruption-sources",
    step: 4,
    eyebrow: "Step 04 · Disruption sources",
    hint: "Choose the sources currently shaping sleep most often. The live preview uses these to identify the dominant pressure drivers.",
    question: "Which of these most often affect your sleep quality right now?",
    kind: "multi-select",
    field: "disruptions",
    limit: 4,
    options: disruptionOptions,
  },
  {
    id: "under-recovered-pattern",
    step: 5,
    eyebrow: "Step 05 · Restoration quality",
    hint: "This step separates total time asleep from how restorative that sleep actually feels in the body and mind.",
    question: "How often do you sleep long enough but still feel under-recovered?",
    kind: "segmented",
    field: "underRecoveredPattern",
    options: underRecoveredOptions,
    variant: "cards",
  },
  {
    id: "next-day-spillover",
    step: 6,
    eyebrow: "Step 06 · Daytime spillover",
    hint: "Use the sliders below to show how strongly poor sleep is echoing into the next day.",
    question: "How much does poor sleep affect your next-day focus, mood, or patience?",
    kind: "triple-slider",
    fields: [
      {
        key: "focusImpact",
        label: "Focus impact",
        minLabel: "Hardly affects focus",
        maxLabel: "Strongly affects focus",
      },
      {
        key: "moodImpact",
        label: "Mood impact",
        minLabel: "Hardly affects mood",
        maxLabel: "Strongly affects mood",
      },
      {
        key: "patienceImpact",
        label: "Patience impact",
        minLabel: "Hardly affects patience",
        maxLabel: "Strongly affects patience",
      },
    ],
  },
  {
    id: "recovery-speed",
    step: 7,
    eyebrow: "Step 07 · Recovery resilience",
    hint: "This is less about one bad night and more about how quickly the system recovers when sleep goes off track.",
    question: "How quickly do you usually recover after one or two poor nights?",
    kind: "segmented",
    field: "recoverySpeed",
    options: recoverySpeedOptions,
    variant: "cards",
  },
  {
    id: "pressure-pattern",
    step: 8,
    eyebrow: "Step 08 · Pattern read",
    hint: "Choose the description that feels most like the overall shape of your current sleep pressure pattern.",
    question: "What does your sleep pressure pattern currently feel most like?",
    kind: "segmented",
    field: "pressurePattern",
    options: pressurePatternOptions,
    variant: "cards",
  },
  {
    id: "sleep-opportunity",
    step: 9,
    eyebrow: "Step 09 · Sleep opportunity",
    hint: "This is about whether your schedule gives sleep a real chance, not whether every night is perfect.",
    question: "How often do you actually have enough room for the amount of sleep your system seems to need?",
    kind: "slider",
    field: "sleepOpportunity",
    label: "Sleep opportunity",
    minLabel: "Rarely enough room",
    maxLabel: "Usually enough room",
  },
  {
    id: "wind-down-ease",
    step: 10,
    eyebrow: "Step 10 · Wind-down ease",
    hint: "The transition into sleep matters. If the system stays too activated, hours in bed often do less restoring.",
    question: "How easy is it for your mind and body to downshift into sleep lately?",
    kind: "segmented",
    field: "windDownEase",
    options: [
      { value: "very-easy", label: "Very easy" },
      { value: "mostly-easy", label: "Mostly easy" },
      { value: "mixed", label: "Mixed" },
      { value: "difficult", label: "Difficult" },
      { value: "very-difficult", label: "Very difficult" },
    ],
    variant: "segments",
  },
  {
    id: "overnight-fragmentation",
    step: 11,
    eyebrow: "Step 11 · Night fragmentation",
    hint: "This separates trouble falling asleep from what happens after sleep has technically begun.",
    question: "How often is your sleep fragmented by waking, light sleep, or not staying settled through the night?",
    kind: "segmented",
    field: "overnightFragmentation",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "very-often", label: "Very often" },
    ],
    variant: "cards",
  },
  {
    id: "catch-up-reliance",
    step: 12,
    eyebrow: "Step 12 · Catch-up reliance",
    hint: "Needing weekends or rare open mornings to recover can be a sign that recovery debt is stacking across ordinary days.",
    question: "How much are you relying on catch-up sleep or recovery windows to feel remotely reset?",
    kind: "segmented",
    field: "catchUpReliance",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "very-often", label: "Very often" },
    ],
    variant: "cards",
  },
  {
    id: "day-crash",
    step: 13,
    eyebrow: "Step 13 · Daytime crash",
    hint: "A midday crash often reveals sleep pressure even when the morning initially feels functional enough.",
    question: "How much does your energy or mental steadiness crash later in the day because recovery did not land fully?",
    kind: "slider",
    field: "dayCrash",
    label: "Later-day crash",
    minLabel: "Hardly at all",
    maxLabel: "A great deal",
  },
  {
    id: "push-through-fatigue",
    step: 14,
    eyebrow: "Step 14 · Recovery behavior",
    hint: "Pushing through fatigue can hide recovery debt temporarily while making next-day carryover more persistent over time.",
    question: "How often do you push through fatigue instead of properly recovering?",
    kind: "slider",
    field: "pushThroughFatigue",
    label: "Pushing through fatigue",
    minLabel: "Hardly ever",
    maxLabel: "Very often",
  },
  {
    id: "final-pattern",
    step: 15,
    eyebrow: "Step 15 · Final self-read",
    hint: "This final step helps the result language match the lived feel of your current recovery pattern.",
    question: "Which statement feels closest to your current pattern?",
    kind: "segmented",
    field: "finalPattern",
    options: finalPatternOptions,
    variant: "cards",
  },
];

export const relatedSleepTools: RelatedSleepTool[] = [
  {
    title: "Burnout Risk Audit",
    description: "Check whether under-recovery is contributing to the depletion, emotional wear, or overload you have been carrying.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Overthinking Loop Check",
    description: "See whether mental replay and uncertainty are keeping your mind too activated to shut down cleanly at night.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Life Balance Visualizer",
    description: "Map whether low personal room, recovery pressure, and structural overload are amplifying the sleep debt you are feeling.",
    category: "Life Balance & Habits",
    minutes: "4 min",
    icon: "structure",
    href: buildToolHref({ slug: "life-balance-visualizer", categorySlug: "life-balance-habits" }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Shift emotional spillover into a steadier reset rhythm when relational or emotional load is bleeding into sleep quality.",
    category: "Emotional Regulation",
    minutes: "6 min",
    icon: "insight",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
];

export const sleepFaqItems: FaqItem[] = [
  {
    question: "What does a sleep pressure score actually mean?",
    answer:
      "It is a directional estimate of how much recovery appears to be lagging behind recent disruption, load, and next-day carryover. A higher score means more pressure is accumulating, not that you have been diagnosed with anything.",
  },
  {
    question: "Can I be sleeping enough and still be under-recovered?",
    answer:
      "Yes. Time in bed and recovery quality are not the same. Sleep can be long enough on paper while still feeling mentally or physically thin if timing is irregular, the night is fragmented, or the mind stays activated too long.",
  },
  {
    question: "Why does poor sleep affect focus and patience the next day?",
    answer:
      "Because recovery does more than prevent tiredness. It also restores cognitive control, mood regulation, and the bandwidth needed for patience. When sleep is incomplete, those systems often feel the drag first.",
  },
  {
    question: "What creates recovery debt over time?",
    answer:
      "Usually a combination of inconsistent timing, stress activation, low-quality sleep, and pushing through fatigue without giving recovery a clean chance to catch up.",
  },
  {
    question: "Is sleep pressure the same as insomnia?",
    answer:
      "No. Sleep pressure in this tool refers to the overall recovery burden your system may be carrying. It does not diagnose insomnia or any sleep disorder.",
  },
  {
    question: "How often should I retake this check?",
    answer:
      "Once every one to two weeks is usually enough, or sooner if stress, schedule, nighttime activation, or daytime carryover changes noticeably.",
  },
  {
    question: "What should I do if my recovery always feels behind?",
    answer:
      "Treat that as a support signal, not a character flaw. Start by reducing the biggest sleep-pressure driver, then protect consistency and give recovery a real chance to catch up before judging yourself for the drag you are feeling.",
  },
  {
    question: "What if my schedule does not allow perfect sleep consistency?",
    answer:
      "Perfect consistency is not required. The more useful goal is reducing the size of the swings, protecting the pre-sleep transition, and noticing which parts of the week create the heaviest carryover.",
  },
  {
    question: "Which part of the result matters most: debt, carryover, or restoration?",
    answer:
      "The most useful part is usually the one shaping your day the most. If recovery debt is high, the backlog matters. If carryover is high, the cost is showing up in daytime focus and mood. If restoration is low, the night itself is not landing fully.",
  },
  {
    question: "When does sleep pressure become a sign I need more than a better bedtime routine?",
    answer:
      "When the pattern stays elevated despite reasonable effort, or when recovery consistently feels behind your life load. At that point it usually helps to look at stress, schedule demands, emotional spillover, and overall load rather than only the bedtime itself.",
  },
];

export const sleepStoryBlock = {
  eyebrow: "How this often feels",
  title: "You are technically sleeping, but the day still starts with less steadiness than it should.",
  quote:
    "This can look like someone who makes it through the day but starts already a little behind. Patience is thinner, focus takes longer to settle, and resilience feels lower before anything difficult has even happened. Sleep happened, but it did not fully restore what the day ahead is about to ask for.",
  takeaway:
    "That is the quiet signature of sleep pressure. The issue is not always obvious exhaustion. Often it is the subtler drag of recovery not fully catching up to what the system has been carrying.",
  toneLabel: "Quiet carryover",
  accent: "#93C5FD",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What sleep pressure actually means",
    paragraphs: [
      "Sleep pressure is not only about feeling tired. It is the broader load created when recovery stops fully catching up to the demand your system has been carrying. That load can come from short sleep, but it can also come from inconsistent timing, mentally activated nights, fragmented sleep, emotional spillover, or a pattern of pushing through fatigue long enough that restoration never really clears the backlog. In that sense, sleep pressure is a systems read, not a simple bedtime issue.",
      "What makes it difficult to notice is that it often builds quietly. Many people still sleep most nights. They still work, respond, and move through the day. Yet something feels thinner. Focus takes more effort. Patience shortens faster. Mood becomes less resilient. The day works, but it does not feel as steady. Because nothing looks obviously dramatic, the person may assume the issue is discipline, personality, or lack of motivation when the more accurate explanation is that recovery has not fully landed for a while.",
      "A sleep pressure tool is useful because it helps translate that vague sense of being off into something more precise. Instead of asking only whether you are sleeping, it asks how fully the system seems to be restoring, what is disrupting that process, and how much of the night is still showing up the next day. That creates a more actionable picture than generic sleep advice because it shows where the pressure is actually being generated.",
    ],
  },
  {
    title: "Why sleeping is not always the same as recovering",
    paragraphs: [
      "People often assume that if they are technically asleep for enough hours, recovery should take care of itself. But the body and mind do not experience all sleep as equally restorative. A person can spend enough time in bed and still wake feeling under-recovered if their sleep timing is erratic, their nervous system is still activated late into the night, or the sleep itself is fragmented and shallow. The missing piece is not only duration. It is restoration quality.",
      "That is why two people can report the same number of hours yet feel completely different the next day. One may wake with enough mental clarity and emotional steadiness to feel reset. The other may wake already compensating, carrying subtle drag into focus, patience, or mood before the day has fully begun. When that difference repeats across nights, people often blame themselves for being less capable when the more accurate explanation is that their recovery quality has been quietly reduced.",
      "Understanding that distinction matters psychologically. It softens the reflex to moralize sleep as if more willpower should solve it. The better question is whether the current pattern is truly restoring the system. If it is not, then the goal is not simply more sleep on paper. The goal is a pattern that lets recovery catch up more completely and more consistently.",
    ],
  },
  {
    title: "How recovery debt builds quietly over time",
    paragraphs: [
      "Recovery debt rarely announces itself with one dramatic moment. More often it accumulates through small mismatches that repeat: a late night here, racing thoughts there, inconsistent timing across the week, or a habit of pushing through fatigue without adjusting the following day. None of those moments may look large enough on their own to matter much. Together, they can create a pattern where recovery never fully resets the system.",
      "Once that backlog starts building, daytime carryover becomes more noticeable. Focus may be the first thing to narrow. Or patience may shorten. Or mood may feel less buffered than usual. The person may still be functioning well enough to keep everything moving, which is exactly why recovery debt is easy to miss. It tends to hide inside competence. Life continues, but the amount of internal support underneath that functioning is smaller than it appears from the outside.",
      "This matters because the solution changes depending on where the debt is coming from. If inconsistency is driving it, the answer is different from what helps when mental replay is the main source. If the issue is not sleep quantity but chronic under-restoration, then the system needs better recovery conditions, not just another vague intention to get more sleep someday. A useful recovery monitor helps surface that difference.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorialBlock[] = [
  {
    key: "recoveryDebt",
    paragraphs: [
      "Recovery debt reflects how much the system appears to be owed. It grows when nights are no longer clearing the demand being placed on the brain and body.",
      "When this score rises, people often describe the day as manageable but heavier, as if they are borrowing from reserves instead of moving from a genuine reset.",
    ],
  },
  {
    key: "sleepDisruptionLoad",
    paragraphs: [
      "Sleep disruption load measures how much timing irregularity, mental activation, and nighttime friction are interfering with restoration quality.",
      "This matters because a night does not need to be completely sleepless to become less effective. Repeated disruption is often enough to keep pressure elevated.",
    ],
  },
  {
    key: "daytimeCarryover",
    paragraphs: [
      "Daytime carryover shows how strongly the night is still echoing into the next day through focus, mood, and patience.",
      "When carryover rises, the person may assume the issue is discipline or personality, even though the system is simply bringing unprocessed recovery debt forward.",
    ],
  },
  {
    key: "restorationQuality",
    paragraphs: [
      "Restoration quality captures whether sleep seems to be rebuilding enough steadiness, energy, and cognitive room to feel genuinely useful.",
      "Higher restoration quality does not mean perfection. It means recovery is working well enough that the system is not constantly trying to outrun the drag from the night before.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Inconsistent timing",
    body:
      "When sleep timing shifts too widely across the week, the recovery system loses rhythm. Even adequate hours can feel less restorative when the schedule keeps moving around underneath them.",
  },
  {
    title: "Racing thoughts and mental replay",
    body:
      "Mental spillover can keep the system cognitively activated long after the day is over. That reduces shutdown quality and makes sleep less effective even when it eventually happens.",
  },
  {
    title: "Low-quality sleep despite enough time in bed",
    body:
      "A person can be asleep long enough and still wake under-recovered if the night is fragmented, shallow, or shaped by too much stress carryover to restore cleanly.",
  },
  {
    title: "Pushing through fatigue",
    body:
      "Continuing to perform on top of existing drag can hide recovery debt temporarily, but it often deepens next-day carryover because the system never gets enough real catch-up space.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Consistent recovery windows",
    body:
      "A steadier sleep rhythm helps the system know when to shut down and restore. Consistency often improves recovery quality before people change anything else.",
  },
  {
    title: "Reducing mental spillover before sleep",
    body:
      "When the mind is still solving, replaying, or anticipating late into the evening, the body rarely feels fully permitted to recover. Reducing that spillover improves restoration quality.",
  },
  {
    title: "Respecting carryover fatigue",
    body:
      "Treating daytime drag as a real recovery signal makes better decisions possible. It becomes easier to recover when the system is no longer asked to pretend it is already caught up.",
  },
  {
    title: "Allowing recovery to catch up",
    body:
      "The point is not a perfect sleep routine. It is creating enough reliable recovery that the system can stop operating with an invisible backlog from the previous night.",
  },
];

export const nextStepParagraphs = [
  "If your score looks elevated, start by reading it as a recovery pattern rather than a personal weakness. The aim is not to become perfect about sleep. It is to identify which part of the current pattern is keeping recovery from landing fully enough to clear the backlog.",
  "Usually the strongest leverage point is not everything at once. It is the main driver this tool highlights, whether that is timing inconsistency, mental activation, fragmented sleep, or the habit of pushing through fatigue long after the system needed relief. A smaller, more targeted change often does more than a long list of generic sleep rules.",
  "If the result feels severe, simplify before you optimize. When recovery is persistently behind, the system tends to benefit first from calmer conditions, more protected transitions, and less pressure to perform on top of the existing carryover.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Sleep Anxiety Wind-Down System",
  description:
    "A structured guide for reducing mental spillover, improving restoration quality, and helping recovery catch up more consistently.",
  buttonLabel: "View Next Step",
};

export function getInitialSleepAnswers(): SleepAnswers {
  return {
    disruptions: [],
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

function getBand(score: number) {
  return sleepBands.find((band) => score >= band.min && score <= band.max) ?? sleepBands[0];
}

function getCategory(key: DisruptionCategoryKey) {
  return disruptionCategories.find((category) => category.key === key) ?? disruptionCategories[0];
}

function getDefaultAnswers(answers: SleepAnswers) {
  return {
    wakingRestoration: answers.wakingRestoration ?? "mixed",
    timingIrregularity: typeof answers.timingIrregularity === "number" ? clampScore(answers.timingIrregularity) : 42,
    mentalDelay: answers.mentalDelay ?? "sometimes",
    disruptions: answers.disruptions,
    underRecoveredPattern: answers.underRecoveredPattern ?? "sometimes",
    focusImpact: typeof answers.focusImpact === "number" ? clampScore(answers.focusImpact) : 40,
    moodImpact: typeof answers.moodImpact === "number" ? clampScore(answers.moodImpact) : 36,
    patienceImpact: typeof answers.patienceImpact === "number" ? clampScore(answers.patienceImpact) : 38,
    recoverySpeed: answers.recoverySpeed ?? "reasonably",
    pressurePattern: answers.pressurePattern ?? "subtle-gap",
    sleepOpportunity: typeof answers.sleepOpportunity === "number" ? clampScore(answers.sleepOpportunity) : 54,
    windDownEase: answers.windDownEase ?? "mixed",
    overnightFragmentation: answers.overnightFragmentation ?? "sometimes",
    catchUpReliance: answers.catchUpReliance ?? "sometimes",
    dayCrash: typeof answers.dayCrash === "number" ? clampScore(answers.dayCrash) : 42,
    pushThroughFatigue: typeof answers.pushThroughFatigue === "number" ? clampScore(answers.pushThroughFatigue) : 40,
    finalPattern: answers.finalPattern ?? "inconsistent-daytime",
  };
}

const wakingSeverityMap: Record<WakingRestorationValue, number> = {
  "very-restored": 4,
  "mostly-restored": 20,
  mixed: 46,
  "usually-unrested": 74,
  "deeply-unrested": 94,
};

const mentalDelaySeverityMap: Record<MentalDelayValue, number> = {
  never: 2,
  rarely: 20,
  sometimes: 46,
  often: 74,
  "very-often": 94,
};

const underRecoveredSeverityMap: Record<UnderRecoveredValue, number> = {
  rarely: 10,
  sometimes: 42,
  often: 74,
  "very-often": 94,
};

const recoverySpeedSeverityMap: Record<RecoverySpeedValue, number> = {
  quickly: 12,
  reasonably: 36,
  slowly: 70,
  "hardly-at-all": 94,
};

const windDownEaseSeverityMap: Record<WindDownEaseValue, number> = {
  "very-easy": 8,
  "mostly-easy": 24,
  mixed: 50,
  difficult: 76,
  "very-difficult": 94,
};

const overnightFragmentationSeverityMap: Record<OvernightFragmentationValue, number> = {
  rarely: 12,
  sometimes: 42,
  often: 74,
  "very-often": 94,
};

const catchUpRelianceSeverityMap: Record<CatchUpRelianceValue, number> = {
  rarely: 12,
  sometimes: 42,
  often: 74,
  "very-often": 94,
};

const pressurePatternSeverityMap: Record<PressurePatternValue, number> = {
  "mostly-okay": 18,
  "subtle-gap": 44,
  "accumulating-tiredness": 74,
  "under-recovered-days": 94,
};

const finalPatternSeverityMap: Record<FinalPatternValue, number> = {
  "catches-up": 12,
  "inconsistent-daytime": 44,
  "functioning-not-restored": 74,
  "persistently-behind": 94,
};

const disruptionSourceWeights: Record<DisruptionSourceValue, Array<{ key: DisruptionCategoryKey; amount: number }>> = {
  stress: [{ key: "mental-stress-overthinking", amount: 36 }],
  overthinking: [{ key: "mental-stress-overthinking", amount: 40 }],
  "late-screens": [{ key: "environmental-behavioral-friction", amount: 34 }],
  "schedule-inconsistency": [{ key: "timing-inconsistency", amount: 40 }],
  "waking-at-night": [{ key: "night-disruption", amount: 38 }],
  "early-waking": [{ key: "night-disruption", amount: 32 }],
  "workload-pressure": [{ key: "mental-stress-overthinking", amount: 28 }],
  "emotional-strain": [{ key: "emotional-strain", amount: 40 }],
  "caffeine-timing": [{ key: "environmental-behavioral-friction", amount: 30 }],
  "environment-noise": [{ key: "environmental-behavioral-friction", amount: 36 }],
};

const spilloverMeta: Record<SpilloverAreaKey, { label: string; accent: string }> = {
  focus: { label: "Focus", accent: "#93C5FD" },
  mood: { label: "Mood", accent: "#C4B5FD" },
  patience: { label: "Patience", accent: "#FCA5A5" },
};

export function isSleepStepComplete(step: SleepToolStep, answers: SleepAnswers) {
  if (step.kind === "segmented") {
    return typeof answers[step.field] === "string";
  }

  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers.disruptions.length > 0;
  }

  return step.fields.every((field) => typeof answers[field.key] === "number");
}

function getRecoveryResilienceLabel(score: number) {
  if (score >= 70) {
    return "Recovery resilience looks steady";
  }

  if (score >= 45) {
    return "Recovery resilience looks mixed";
  }

  return "Recovery resilience appears reduced";
}

export function calculateSleepPressure(answers: SleepAnswers): SleepResult {
  const resolved = getDefaultAnswers(answers);
  const answeredCount = sleepPressureSteps.filter((step) => isSleepStepComplete(step, answers)).length;
  const completionRatio = answeredCount / sleepPressureSteps.length;

  const wakingSeverity = wakingSeverityMap[resolved.wakingRestoration];
  const timingSeverity = resolved.timingIrregularity;
  const mentalSeverity = mentalDelaySeverityMap[resolved.mentalDelay];
  const disruptionDensitySeverity = clampScore((resolved.disruptions.length / 4) * 100);
  const underRecoveredSeverity = underRecoveredSeverityMap[resolved.underRecoveredPattern];
  const spilloverAverage = average([resolved.focusImpact, resolved.moodImpact, resolved.patienceImpact]);
  const recoverySpeedSeverity = recoverySpeedSeverityMap[resolved.recoverySpeed];
  const pressurePatternSeverity = pressurePatternSeverityMap[resolved.pressurePattern];
  const sleepOpportunitySeverity = clampScore(100 - resolved.sleepOpportunity);
  const windDownEaseSeverity = windDownEaseSeverityMap[resolved.windDownEase];
  const overnightFragmentationSeverity = overnightFragmentationSeverityMap[resolved.overnightFragmentation];
  const catchUpRelianceSeverity = catchUpRelianceSeverityMap[resolved.catchUpReliance];
  const dayCrashSeverity = resolved.dayCrash;
  const pushThroughSeverity = resolved.pushThroughFatigue;
  const finalPatternSeverity = finalPatternSeverityMap[resolved.finalPattern];

  const weightedScore = clampScore(
    wakingSeverity * 0.08 +
      timingSeverity * 0.07 +
      mentalSeverity * 0.07 +
      disruptionDensitySeverity * 0.06 +
      underRecoveredSeverity * 0.08 +
      spilloverAverage * 0.1 +
      recoverySpeedSeverity * 0.07 +
      pressurePatternSeverity * 0.06 +
      sleepOpportunitySeverity * 0.08 +
      windDownEaseSeverity * 0.07 +
      overnightFragmentationSeverity * 0.07 +
      catchUpRelianceSeverity * 0.06 +
      dayCrashSeverity * 0.07 +
      pushThroughSeverity * 0.08 +
      finalPatternSeverity * 0.08,
  );

  const categoryValues: Record<DisruptionCategoryKey, number> = {
    "mental-stress-overthinking": 0,
    "timing-inconsistency": 0,
    "night-disruption": 0,
    "emotional-strain": 0,
    "environmental-behavioral-friction": 0,
  };

  resolved.disruptions.forEach((source) => {
    disruptionSourceWeights[source].forEach((entry) => {
      categoryValues[entry.key] += entry.amount;
    });
  });

  categoryValues["mental-stress-overthinking"] = clampScore(
    categoryValues["mental-stress-overthinking"] +
      mentalSeverity * 0.34 +
      windDownEaseSeverity * 0.16 +
      pressurePatternSeverity * 0.08,
  );
  categoryValues["timing-inconsistency"] = clampScore(
    categoryValues["timing-inconsistency"] + timingSeverity * 0.42 + catchUpRelianceSeverity * 0.12,
  );
  categoryValues["night-disruption"] = clampScore(
    categoryValues["night-disruption"] +
      wakingSeverity * 0.12 +
      underRecoveredSeverity * 0.14 +
      recoverySpeedSeverity * 0.08 +
      overnightFragmentationSeverity * 0.22,
  );
  categoryValues["emotional-strain"] = clampScore(
    categoryValues["emotional-strain"] + resolved.moodImpact * 0.18 + mentalSeverity * 0.08 + dayCrashSeverity * 0.12,
  );
  categoryValues["environmental-behavioral-friction"] = clampScore(
    categoryValues["environmental-behavioral-friction"] +
      pushThroughSeverity * 0.16 +
      timingSeverity * 0.06 +
      sleepOpportunitySeverity * 0.18,
  );

  const sourceScores = disruptionCategories
    .map((category) => ({
      ...category,
      value: clampScore(categoryValues[category.key]),
    }))
    .sort((left, right) => right.value - left.value);

  const dimensions: Record<SleepDimensionKey, number> = {
    recoveryDebt: clampScore(
      average([
        wakingSeverity,
        underRecoveredSeverity,
        recoverySpeedSeverity,
        pressurePatternSeverity,
        finalPatternSeverity,
        catchUpRelianceSeverity,
        pushThroughSeverity * 0.45,
      ]),
    ),
    sleepDisruptionLoad: clampScore(
      average([
        mentalSeverity,
        timingSeverity,
        disruptionDensitySeverity,
        windDownEaseSeverity,
        overnightFragmentationSeverity,
        sourceScores[0]?.value ?? 0,
        sourceScores[1]?.value ?? 0,
      ]),
    ),
    daytimeCarryover: clampScore(
      average([
        spilloverAverage,
        underRecoveredSeverity,
        dayCrashSeverity,
        pushThroughSeverity,
        pressurePatternSeverity * 0.6,
        finalPatternSeverity * 0.45,
      ]),
    ),
    restorationQuality: clampScore(
      100 -
        average([
          wakingSeverity,
          underRecoveredSeverity,
          recoverySpeedSeverity,
          windDownEaseSeverity * 0.45,
          overnightFragmentationSeverity * 0.3,
          mentalSeverity * 0.3,
          timingSeverity * 0.15,
        ]),
    ),
  };

  const spilloverAreas: SpilloverArea[] = (Object.entries(spilloverMeta) as Array<
    [SpilloverAreaKey, { label: string; accent: string }]
  >)
    .map(([key, meta]) => ({
      key,
      label: meta.label,
      accent: meta.accent,
      value:
        key === "focus"
          ? resolved.focusImpact
          : key === "mood"
            ? resolved.moodImpact
            : resolved.patienceImpact,
    }))
    .sort((left, right) => right.value - left.value);

  const spilloverArea = spilloverAreas[0];
  const recoveryResilience = clampScore(
    100 -
      average([
        recoverySpeedSeverity,
        pushThroughSeverity * 0.8,
        underRecoveredSeverity,
        dayCrashSeverity * 0.55,
        catchUpRelianceSeverity * 0.5,
        weightedScore * 0.22,
      ]),
  );
  const recoveryResilienceLabel = getRecoveryResilienceLabel(recoveryResilience);
  const band = getBand(weightedScore);

  const dayOffsets = [-14, -10, -6, -2, 3, 8, 14];
  const restorationOffsets = [10, 8, 6, 5, 1, -4, -8];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeline = dayLabels.map((day, index) => {
    const progress = index / (dayLabels.length - 1);
    const debt = clampScore(
      dimensions.recoveryDebt * (0.62 + progress * 0.32) +
        dimensions.sleepDisruptionLoad * 0.1 +
        dayOffsets[index] -
        dimensions.restorationQuality * 0.08,
    );
    const carryover = clampScore(
      dimensions.daytimeCarryover * (0.64 + progress * 0.24) +
        dimensions.recoveryDebt * 0.1 +
        dayOffsets[index] * 0.42 -
        dimensions.restorationQuality * 0.06,
    );
    const restoration = clampScore(
      dimensions.restorationQuality * (1.02 - progress * 0.18) -
        dimensions.sleepDisruptionLoad * 0.08 +
        restorationOffsets[index],
    );

    return {
      day,
      debt,
      carryover,
      restoration,
    };
  });

  const primaryDriver = getCategory(sourceScores[0]?.key ?? "mental-stress-overthinking");
  const topSourceLabels = sourceScores
    .slice(0, 3)
    .map((source) => source.label.toLowerCase())
    .join(", ");

  const signalLabel = `Your current pattern suggests that recovery is not fully catching up to disruption, creating more next-day carryover than your schedule may reveal on the surface. The main pressure sources currently look most tied to ${topSourceLabels}.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The strongest driver right now appears to be ${primaryDriver.label.toLowerCase()}, while restoration quality is currently sitting at ${dimensions.restorationQuality}.`;
  const carryoverInsight = `${band.carryoverLead} In this result, carryover is showing up most strongly in ${spilloverArea.label.toLowerCase()}, and recovery resilience currently looks ${recoveryResilience >= 70 ? "fairly intact" : recoveryResilience >= 45 ? "mixed" : "reduced"}.`;

  return {
    score: weightedScore,
    band,
    completionRatio,
    isComplete: answeredCount === sleepPressureSteps.length,
    dimensions,
    sourceScores,
    timeline,
    spilloverAreas,
    primaryDriver,
    spilloverArea,
    recoveryResilience,
    recoveryResilienceLabel,
    signalLabel,
    interpretation,
    standout,
    carryoverInsight,
    focusImpact: resolved.focusImpact,
    moodImpact: resolved.moodImpact,
    patienceImpact: resolved.patienceImpact,
    disruptionCount: resolved.disruptions.length,
  };
}

export const heroPreviewResult = calculateSleepPressure({
  wakingRestoration: "mixed",
  timingIrregularity: 62,
  mentalDelay: "often",
  disruptions: ["stress", "overthinking", "schedule-inconsistency", "late-screens"],
  underRecoveredPattern: "often",
  focusImpact: 72,
  moodImpact: 54,
  patienceImpact: 60,
  recoverySpeed: "slowly",
  pressurePattern: "accumulating-tiredness",
  sleepOpportunity: 38,
  windDownEase: "difficult",
  overnightFragmentation: "often",
  catchUpReliance: "often",
  dayCrash: 68,
  pushThroughFatigue: 66,
  finalPattern: "functioning-not-restored",
});
