import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type StartBlockerValue =
  | "distracted-quickly"
  | "avoid-starting"
  | "dont-know-where-begin"
  | "switch-easier-tasks"
  | "lose-momentum";
export type InterruptionFrequencyValue = "rarely" | "sometimes" | "often" | "very-often" | "constantly";
export type FrictionSourceValue =
  | "phone-distractions"
  | "too-many-open-tasks"
  | "perfectionism"
  | "low-energy"
  | "unclear-priorities"
  | "stress"
  | "overthinking"
  | "boredom"
  | "email-messages"
  | "noise-environment";
export type StartingClarityValue =
  | "very-clear"
  | "mostly-clear"
  | "mixed"
  | "usually-unclear"
  | "very-unclear";
export type PostInterruptionValue =
  | "return-quickly"
  | "drift-for-a-while"
  | "switch-tasks-completely"
  | "lose-work-rhythm"
  | "stop-caring";
export type RefocusSpeedValue = "almost-immediately" | "with-a-short-reset" | "slow-to-return" | "hard-to-re-enter";
export type FinishLineFrictionValue = "low" | "moderate" | "high" | "very-high";
export type RankBlockerKey =
  | "interruptions"
  | "unclear-next-step"
  | "mental-resistance"
  | "fatigue-low-energy"
  | "task-switching";
export type FinalPatternValue =
  | "focus-with-specific-blockers"
  | "starting-harder-than-it-should-be"
  | "attention-pulled-directions"
  | "focus-system-keeps-breaking-down";
export type AvoidanceAfterStallValue =
  | "clarify-and-restart"
  | "switch-to-easier-work"
  | "overprepare-instead"
  | "step-away-longer";

export type FocusBandKey =
  | "stable-focus-flow"
  | "mild-friction-pattern"
  | "interruptible-focus-system"
  | "high-focus-drag"
  | "systemic-focus-breakdown";

export type FocusDimensionKey =
  | "startResistance"
  | "interruptionLoad"
  | "clarityDeficit"
  | "momentumInstability";

export type FocusBlockerKey =
  | "interruptions"
  | "unclear-starting-point"
  | "internal-resistance"
  | "low-energy-fatigue"
  | "task-overload"
  | "perfectionism-mental-drag";

export type HeatmapKey =
  | "external-interruptions"
  | "mental-clutter"
  | "task-switching"
  | "environmental-distraction"
  | "digital-pull";

export type FocusAnswers = {
  startBlocker?: StartBlockerValue;
  interruptionFrequency?: InterruptionFrequencyValue;
  startResistanceLevel?: number;
  frictionSources: FrictionSourceValue[];
  startingClarity?: StartingClarityValue;
  postInterruption?: PostInterruptionValue;
  mentalClutterCompetition?: number;
  environmentControl?: number;
  pressureSensitivity?: number;
  refocusSpeed?: RefocusSpeedValue;
  finishLineFriction?: FinishLineFrictionValue;
  avoidanceAfterStall?: AvoidanceAfterStallValue;
  rankingOrder: RankBlockerKey[];
  rankingConfirmed: boolean;
  consistencyImpact?: number;
  completionImpact?: number;
  confidenceImpact?: number;
  finalPattern?: FinalPatternValue;
};

export type FocusChoiceOption = {
  value: string;
  label: string;
  description?: string;
  marker?: string;
};

type BaseStep = {
  id: string;
  eyebrow: string;
  question: string;
  hint: string;
};

export type ScenarioChoiceStep = BaseStep & {
  kind: "scenario-choice";
  field: "startBlocker" | "postInterruption" | "avoidanceAfterStall" | "finalPattern";
  options: FocusChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "interruptionFrequency" | "startingClarity" | "refocusSpeed" | "finishLineFriction";
  options: FocusChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "startResistanceLevel" | "mentalClutterCompetition" | "environmentControl" | "pressureSensitivity";
  label: string;
  minLabel: string;
  maxLabel: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "frictionSources";
  limit: number;
  options: FocusChoiceOption[];
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  field: "rankingOrder";
  items: Array<{
    key: RankBlockerKey;
    label: string;
  }>;
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "consistencyImpact" | "completionImpact" | "confidenceImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type FocusAuditStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | DragRankStep
  | TripleSliderStep;

export type FocusBand = {
  key: FocusBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  dragLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type FocusDimension = {
  key: FocusDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type FocusBlocker = {
  key: FocusBlockerKey;
  label: string;
  accent: string;
  shortLabel: string;
};

export type HeatmapMetric = {
  key: HeatmapKey;
  label: string;
  accent: string;
};

export type RelatedFocusTool = {
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

export type FocusAuditResult = {
  score: number;
  band: FocusBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<FocusDimensionKey, number>;
  blockerSources: Array<FocusBlocker & { value: number }>;
  topBlockers: Array<FocusBlocker & { value: number }>;
  heatmap: Array<HeatmapMetric & { value: number }>;
  outputImpact: {
    consistency: number;
    completion: number;
    confidence: number;
  };
  primaryDriver: FocusBlocker;
  secondaryDriver: FocusBlocker;
  signalLabel: string;
  interpretation: string;
  standout: string;
  dragInsight: string;
  flowStability: number;
};

export const focusToolMetadata = {
  eyebrow: "FOCUS & PRODUCTIVITY TOOL",
  title: "Focus Friction Audit",
  description:
    "Find out what is actually slowing your focus down - interruption drag, start resistance, mental clutter, vague next steps, or follow-through fatigue. This tool reads focus as a working pattern, not a willpower problem.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const focusDimensions: FocusDimension[] = [
  {
    key: "startResistance",
    label: "Start Resistance",
    description: "How much friction appears before you have even begun, including avoidance, heaviness, or uncertainty.",
    icon: "trend",
    accent: "#60A5FA",
  },
  {
    key: "interruptionLoad",
    label: "Interruption Load",
    description: "How easily outside or internal interruptions fracture attention once momentum has started.",
    icon: "signal",
    accent: "#22C7D6",
  },
  {
    key: "clarityDeficit",
    label: "Clarity Deficit",
    description: "How much weak task definition, too many open options, or unclear next steps are slowing you down.",
    icon: "structure",
    accent: "#F6C177",
  },
  {
    key: "momentumInstability",
    label: "Momentum Instability",
    description: "How difficult it is to stay in motion once your attention has been broken or the task gets heavier.",
    icon: "graph",
    accent: "#FB7185",
  },
];

export const focusBlockers: FocusBlocker[] = [
  { key: "interruptions", label: "Interruptions", shortLabel: "Interruptions", accent: "#22C7D6" },
  {
    key: "unclear-starting-point",
    label: "Unclear starting point",
    shortLabel: "Starting point",
    accent: "#F6C177",
  },
  {
    key: "internal-resistance",
    label: "Internal resistance",
    shortLabel: "Resistance",
    accent: "#60A5FA",
  },
  {
    key: "low-energy-fatigue",
    label: "Low energy / fatigue",
    shortLabel: "Low energy",
    accent: "#84CC16",
  },
  {
    key: "task-overload",
    label: "Task overload",
    shortLabel: "Overload",
    accent: "#A78BFA",
  },
  {
    key: "perfectionism-mental-drag",
    label: "Perfectionism / mental drag",
    shortLabel: "Mental drag",
    accent: "#FB7185",
  },
];

export const heatmapMetrics: HeatmapMetric[] = [
  { key: "external-interruptions", label: "External interruptions", accent: "#22C7D6" },
  { key: "mental-clutter", label: "Mental clutter", accent: "#A78BFA" },
  { key: "task-switching", label: "Task switching", accent: "#60A5FA" },
  { key: "environmental-distraction", label: "Environmental distraction", accent: "#F6C177" },
  { key: "digital-pull", label: "Digital pull", accent: "#84CC16" },
];

export const focusBands: FocusBand[] = [
  {
    key: "stable-focus-flow",
    min: 0,
    max: 24,
    title: "Stable Focus Flow",
    summary: "Your answers suggest that focus is broadly workable and that most friction is still situational rather than systemic.",
    interpretation:
      "You likely still run into disruption from time to time, but the overall pattern does not appear to be collapsing your rhythm, clarity, or confidence in a major way.",
    standoutLead: "The strongest signal is not broad breakdown, but the specific conditions most likely to nick your focus when the day gets noisy.",
    dragLead: "When friction stays low, the most useful move is protecting the few conditions that already help work start cleanly.",
    gradientFrom: "#60A5FA",
    gradientTo: "#84CC16",
    glow: "rgba(96, 165, 250, 0.24)",
  },
  {
    key: "mild-friction-pattern",
    min: 25,
    max: 44,
    title: "Mild Friction Pattern",
    summary: "Some focus drag is showing up, especially around starting cleanly or recovering after small disruptions.",
    interpretation:
      "This is the zone where people often call themselves inconsistent, even though the issue is usually not discipline alone. It is that the system for starting and continuing has more friction than it needs.",
    standoutLead: "The pattern suggests that your attention can still work well, but it is encountering more operational drag than it should.",
    dragLead: "The main opportunity here is not trying harder. It is removing the specific blockers that are consuming momentum early.",
    gradientFrom: "#60A5FA",
    gradientTo: "#F6C177",
    glow: "rgba(246, 193, 119, 0.24)",
  },
  {
    key: "interruptible-focus-system",
    min: 45,
    max: 64,
    title: "Interruptible Focus System",
    summary: "Your focus pattern looks workable in bursts, but too easy to break, stall, or redirect once friction shows up.",
    interpretation:
      "At this level, the problem often feels like inconsistency. In practice it is usually a system issue: you can focus, but the structure around attention does not protect that focus well enough.",
    standoutLead: "The clearest signal is not lack of ability. It is how easily your current system loses shape after friction enters.",
    dragLead: "This level of drag is often sustained by a combination of weak starting points and poor recovery after interruption.",
    gradientFrom: "#F6C177",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.22)",
  },
  {
    key: "high-focus-drag",
    min: 65,
    max: 84,
    title: "High Focus Drag",
    summary: "Your answers point to significant friction around starting, staying with the work, or recovering once attention breaks.",
    interpretation:
      "This often feels heavier than ordinary distraction. Tasks cost more energy to start, interruptions leave a bigger crater, and unfinished work keeps competing for attention in the background.",
    standoutLead: "The pattern now looks less like occasional disruption and more like a focus system that is regularly being taxed beyond its current design.",
    dragLead: "When scores land here, the most meaningful improvements usually come from reducing structural drag rather than adding more motivational pressure.",
    gradientFrom: "#FB7185",
    gradientTo: "#F6C177",
    glow: "rgba(251, 113, 133, 0.24)",
  },
  {
    key: "systemic-focus-breakdown",
    min: 85,
    max: 100,
    title: "Systemic Focus Breakdown",
    summary: "The friction profile suggests that work is feeling heavier because several parts of the focus system are breaking down together.",
    interpretation:
      "This does not label you. It does suggest that attention is currently being asked to operate inside too much resistance, too much interruption, or too little usable structure.",
    standoutLead: "The strongest signal here is cumulative drag - not one small blocker, but a system that keeps shedding momentum across the day.",
    dragLead: "The best next move is usually to simplify and protect the environment around attention before trying to extract more effort from yourself.",
    gradientFrom: "#FB7185",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.22)",
  },
];

export const rankingItems: Array<{ key: RankBlockerKey; label: string }> = [
  { key: "interruptions", label: "interruptions" },
  { key: "unclear-next-step", label: "unclear next step" },
  { key: "mental-resistance", label: "mental resistance" },
  { key: "fatigue-low-energy", label: "fatigue / low energy" },
  { key: "task-switching", label: "task switching" },
];

export const focusAuditSteps: FocusAuditStep[] = [
  {
    id: "step-1",
    kind: "scenario-choice",
    field: "startBlocker",
    eyebrow: "Audit 01 · initial blocker",
    question: "When you need to start an important task, what slows you down most often?",
    hint: "Pick the blocker that sounds most familiar in real life, not the one that only shows up on your worst day.",
    options: [
      { value: "distracted-quickly", marker: "A", label: "I get distracted quickly" },
      { value: "avoid-starting", marker: "B", label: "I avoid starting" },
      { value: "dont-know-where-begin", marker: "C", label: "I don't know where to begin" },
      { value: "switch-easier-tasks", marker: "D", label: "I switch to easier tasks" },
      { value: "lose-momentum", marker: "E", label: "I start, but lose momentum" },
    ],
  },
  {
    id: "step-2",
    kind: "segmented",
    field: "interruptionFrequency",
    eyebrow: "Audit 02 · interruption pull",
    question: "How often do interruptions pull you off track once you begin?",
    hint: "Think about what happens after you have started. The issue is not only interruption, but how much it changes your trajectory.",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "very-often", label: "Very often" },
      { value: "constantly", label: "Constantly" },
    ],
  },
  {
    id: "step-3",
    kind: "slider",
    field: "startResistanceLevel",
    eyebrow: "Audit 03 · start resistance",
    question: "How much mental resistance do you feel before starting something important?",
    hint: "This is less about the task itself and more about the amount of internal drag you feel before momentum exists.",
    label: "Start resistance",
    minLabel: "Almost none",
    maxLabel: "Extremely high",
  },
  {
    id: "step-4",
    kind: "multi-select",
    field: "frictionSources",
    eyebrow: "Audit 04 · friction sources",
    question: "Which of these create the most friction for you right now?",
    hint: "Choose up to four. These selections help the audit distinguish between overload, resistance, distraction, and weak task structure.",
    limit: 4,
    options: [
      { value: "phone-distractions", label: "Phone distractions" },
      { value: "too-many-open-tasks", label: "Too many open tasks" },
      { value: "perfectionism", label: "Perfectionism" },
      { value: "low-energy", label: "Low energy" },
      { value: "unclear-priorities", label: "Unclear priorities" },
      { value: "stress", label: "Stress" },
      { value: "overthinking", label: "Overthinking" },
      { value: "boredom", label: "Boredom" },
      { value: "email-messages", label: "Email / messages" },
      { value: "noise-environment", label: "Noise / environment" },
    ],
  },
  {
    id: "step-5",
    kind: "segmented",
    field: "startingClarity",
    eyebrow: "Audit 05 · clarity at the start",
    question: "How clear is your starting point when you sit down to work?",
    hint: "This is about whether the next useful move feels obvious enough to begin with minimal drag.",
    options: [
      { value: "very-clear", label: "Very clear" },
      { value: "mostly-clear", label: "Mostly clear" },
      { value: "mixed", label: "Mixed" },
      { value: "usually-unclear", label: "Usually unclear" },
      { value: "very-unclear", label: "Very unclear" },
    ],
  },
  {
    id: "step-6",
    kind: "scenario-choice",
    field: "postInterruption",
    eyebrow: "Audit 06 · interruption recovery",
    question: "What usually happens after the first interruption?",
    hint: "The strength of your focus system often shows up less in staying perfect and more in how quickly you can recover your rhythm.",
    options: [
      { value: "return-quickly", marker: "A", label: "I return quickly" },
      { value: "drift-for-a-while", marker: "B", label: "I drift for a while" },
      { value: "switch-tasks-completely", marker: "C", label: "I switch tasks completely" },
      { value: "lose-work-rhythm", marker: "D", label: "I lose the work rhythm" },
      { value: "stop-caring", marker: "E", label: "I stop caring about the task" },
    ],
  },
  {
    id: "step-7",
    kind: "slider",
    field: "mentalClutterCompetition",
    eyebrow: "Audit 07 · mental clutter",
    question: "How much do unfinished tasks or mental clutter compete for your attention?",
    hint: "This catches the quieter background friction that can make focus feel harder even when the room is technically calm.",
    label: "Mental clutter competition",
    minLabel: "Hardly at all",
    maxLabel: "Constantly",
  },
  {
    id: "step-8",
    kind: "slider",
    field: "environmentControl",
    eyebrow: "Audit 08 · environment control",
    question: "How much control do you have over the environment and interruptions around your focus time?",
    hint: "Low control often makes friction feel personal when part of the issue is that the work lane itself is too permeable.",
    label: "Focus environment control",
    minLabel: "Very little control",
    maxLabel: "Strong control",
  },
  {
    id: "step-9",
    kind: "slider",
    field: "pressureSensitivity",
    eyebrow: "Audit 09 · pressure sensitivity",
    question: "How much does normal pressure make focus or follow-through wobble?",
    hint: "This catches the difference between mild friction and a system that becomes unstable as soon as stakes rise.",
    label: "Pressure disruption",
    minLabel: "Very little",
    maxLabel: "A great deal",
  },
  {
    id: "step-10",
    kind: "segmented",
    field: "refocusSpeed",
    eyebrow: "Audit 10 · re-entry speed",
    question: "After you fall out of rhythm, how quickly do you usually re-enter useful focus?",
    hint: "The cost of friction is often not the interruption itself, but how long it takes to get back in cleanly.",
    options: [
      { value: "almost-immediately", label: "Almost immediately" },
      { value: "with-a-short-reset", label: "With a short reset" },
      { value: "slow-to-return", label: "Slow to return" },
      { value: "hard-to-re-enter", label: "Hard to re-enter" },
    ],
  },
  {
    id: "step-11",
    kind: "segmented",
    field: "finishLineFriction",
    eyebrow: "Audit 11 · finish-line drag",
    question: "How much friction tends to appear near the finish line of important work?",
    hint: "For many people, starting is not the only problem. Momentum also gets heavier when the task becomes real, visible, or almost done.",
    options: [
      { value: "low", label: "Low" },
      { value: "moderate", label: "Moderate" },
      { value: "high", label: "High" },
      { value: "very-high", label: "Very high" },
    ],
  },
  {
    id: "step-12",
    kind: "scenario-choice",
    field: "avoidanceAfterStall",
    eyebrow: "Audit 12 · after the stall",
    question: "When you notice yourself stalling, what do you most often do next?",
    hint: "This helps the audit distinguish between repair, avoidance, overpreparation, and silent drift.",
    options: [
      { value: "clarify-and-restart", marker: "A", label: "I clarify the next step and restart" },
      { value: "switch-to-easier-work", marker: "B", label: "I switch to easier work" },
      { value: "overprepare-instead", marker: "C", label: "I overprepare instead of doing the central thing" },
      { value: "step-away-longer", marker: "D", label: "I step away longer than intended" },
    ],
  },
  {
    id: "step-13",
    kind: "triple-slider",
    eyebrow: "Audit 13 · output impact",
    question: "How has your focus breakdown affected your output lately?",
    hint: "Set each slider based on negative impact, not performance quality on your best days.",
    fields: [
      { key: "consistencyImpact", label: "Consistency impact", minLabel: "Low", maxLabel: "High" },
      { key: "completionImpact", label: "Completion impact", minLabel: "Low", maxLabel: "High" },
      { key: "confidenceImpact", label: "Confidence in work impact", minLabel: "Low", maxLabel: "High" },
    ],
  },
  {
    id: "step-14",
    kind: "drag-rank",
    field: "rankingOrder",
    eyebrow: "Audit 14 · ranked disruptors",
    question: "Rank these from most to least disruptive for your focus",
    hint: "Drag on desktop or use the move buttons anywhere. This helps the tool weight what is most structurally disruptive right now.",
    items: rankingItems,
  },
  {
    id: "step-15",
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Audit 15 · self-read",
    question: "Which statement feels closest to your current pattern?",
    hint: "This last step helps the result compare the friction signals with how your work rhythm feels from the inside.",
    options: [
      { value: "focus-with-specific-blockers", marker: "A", label: "I can focus, but certain blockers break my rhythm" },
      { value: "starting-harder-than-it-should-be", marker: "B", label: "Starting is harder than it should be" },
      { value: "attention-pulled-directions", marker: "C", label: "My attention gets pulled in too many directions" },
      {
        value: "focus-system-keeps-breaking-down",
        marker: "D",
        label: "Work feels heavier because my focus system keeps breaking down",
      },
    ],
  },
];

export const relatedFocusTools: RelatedFocusTool[] = [
  {
    title: "Decision Fatigue Simulator",
    description: "See whether constant small choices and unfinished tabs are quietly draining the attention needed for real work.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Burnout Risk Audit",
    description: "Check whether the drag behind your focus is actually tied to deeper recovery debt, emotional wear, or overload.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Life Balance Visualizer",
    description: "Surface whether imbalance across work, rest, and maintenance is creating the background friction your focus keeps carrying.",
    category: "Life Balance & Habits",
    minutes: "6 min",
    icon: "structure",
    href: buildToolHref({ slug: "life-balance-visualizer", categorySlug: "life-balance-habits" }),
  },
  {
    title: "Confidence Reset Audit",
    description: "Spot whether self-doubt, over-monitoring, or fear of doing it wrong is adding unnecessary resistance before action.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "trend",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
];

export const focusFaqItems: FaqItem[] = [
  {
    question: "What does a focus friction score actually mean?",
    answer:
      "It is a directional readout of how much resistance, interruption, weak task structure, and momentum loss are interfering with your attention. A higher score means your current focus system is carrying more drag, not that you have been diagnosed with anything.",
  },
  {
    question: "Is focus friction the same as distraction?",
    answer:
      "No. Distraction is one source of friction, but focus can also break down because starting feels vague, unfinished tasks compete for attention, or momentum collapses after even small interruptions.",
  },
  {
    question: "Why does starting feel harder than continuing?",
    answer:
      "Starting often carries the most uncertainty, the weakest task definition, and the most internal resistance. Once momentum exists, the brain usually has fewer open variables to fight with.",
  },
  {
    question: "Can mental clutter reduce focus even without interruptions?",
    answer:
      "Yes. Open loops, unfinished tasks, and background thinking can quietly consume attention before anything visibly interrupts you.",
  },
  {
    question: "What usually breaks momentum after a task begins?",
    answer:
      "Common causes include interruption recovery taking too long, task switching, weak starting clarity, and the brain deciding the next step is less rewarding than escape.",
  },
  {
    question: "How often should I retake this audit?",
    answer:
      "Every two to three weeks is usually enough if your workload, environment, or energy has shifted. The most useful comparison is whether the top blockers are changing, not only whether the total score moves.",
  },
  {
    question: "What should I do if my focus drag feels severe?",
    answer:
      "Treat it as a systems problem first. Reduce open tasks, sharpen the next step, protect the environment around attention, and lower the number of decisions your brain has to solve before useful work can begin.",
  },
  {
    question: "Why can focus feel fine on easy tasks but collapse on important ones?",
    answer:
      "Important work often carries more ambiguity, more risk of judgment, and a less obvious first move. That raises start resistance even when your basic ability to pay attention is still intact.",
  },
  {
    question: "Is low energy always the main cause of focus drag?",
    answer:
      "Not always. Low energy can amplify friction, but weak task definition, interruptions, overthinking, and task overload can create just as much drag even on days when energy is reasonable.",
  },
  {
    question: "What is the first thing to fix when multiple blockers are high?",
    answer:
      "Start with the blocker that breaks the most moments in a row. For some people that is interruption protection. For others it is clarifying the next step well enough that momentum can start before resistance grows.",
  },
];

export const focusStoryBlock = {
  eyebrow: "How this often feels",
  title: "The work is not always the whole problem. The runway into the work may be broken.",
  quote:
    "This often shows up when the work itself is not impossible, but the entry into it keeps breaking down. Once the person is in, they can usually do it. The hard part is getting there cleanly without losing the first stretch of time to resistance, clutter, or smaller tasks that feel easier to touch.",
  takeaway:
    "That is why the audit looks at start resistance, interruption recovery, and task clarity separately. Focus often breaks down before the real work has even had a fair chance to begin.",
  toneLabel: "Operational reality",
  accent: "#60A5FA",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What focus friction actually is",
    paragraphs: [
      "Focus friction is the set of forces that make attention harder to start, harder to sustain, or easier to lose than the task itself should require. It is not the same thing as simply being busy or occasionally getting distracted. Friction shows up when the path from intention to action has too many small obstacles: weak starting clarity, internal resistance, digital pull, task overload, low energy, or too many unfinished things competing for the same mental surface.",
      "That matters because many people describe the experience as if it were a character flaw. They say they are lazy, undisciplined, or inconsistent. Often the closer truth is that the system around attention has too much drag. The task may be real, the skill may be present, and the desire to do the work may also be real. What is missing is a clean enough runway for focus to convert into movement without bleeding energy first.",
      "A focus audit is useful because it changes the question. Instead of asking, \"Why can't I just do the thing?\" it asks, \"What is making the thing heavier than it needs to be?\" That shift matters psychologically. It moves the user away from shame and toward diagnosis of a real operating problem. Once the problem becomes structural, it becomes adjustable.",
    ],
  },
  {
    title: "Why focus problems are not always a discipline problem",
    paragraphs: [
      "Discipline is a tempting explanation because it sounds simple. If the work is not happening, the story becomes: try harder, care more, be tougher. But attention does not operate in a vacuum. It is shaped by clarity, energy, interruption load, unresolved stress, device design, cognitive clutter, and how much friction appears before the first useful move is even obvious. When those forces pile up, effort alone becomes an expensive way to compensate for a broken workflow.",
      "This is why some people can work intensely in one environment and then feel strangely incapable in another. It is not always because motivation disappeared. It is often because the system changed. The task definition became weaker, the phone stayed visible, the day filled with fragmented demands, or the work itself carried more ambiguity than the brain could comfortably hold. In those conditions, attention is doing extra labor before real progress begins.",
      "Seeing focus as a systems issue does not remove responsibility. It makes responsibility smarter. Instead of demanding flawless self-control, you start designing cleaner entry points, lower interruption exposure, and more recoverable work rhythms. That tends to produce better results than moralizing the problem.",
    ],
  },
  {
    title: "The difference between distraction, resistance, and overload",
    paragraphs: [
      "Distraction is what most people notice first because it is visible. Something pings, something moves, something easier becomes available, and attention slips sideways. But distraction is only one layer of focus friction. Resistance is different. Resistance appears before the task has even started or before momentum is stable. It is the heaviness, avoidance, bargaining, or low-grade refusal that shows up when the work feels mentally expensive before any real effort has occurred.",
      "Overload is different again. Overload is what happens when the attention system is carrying too many inputs at once: too many open tasks, too much ambiguity, too much mental carryover, too many micro-decisions. In overload, focus does not fail because the person does not care. It fails because the brain is already managing too much architecture in the background.",
      "These distinctions matter because the interventions change. Distraction may call for environmental protection. Resistance may call for a cleaner starting point or a smaller first move. Overload may call for reducing cognitive inventory before focus can operate well again. A strong audit separates these forces instead of dumping them all into one vague category called procrastination.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "startResistance" as FocusDimensionKey,
    title: "Start Resistance",
    paragraphs: [
      "Start resistance captures the drag that appears before work is underway. It often feels like avoidance, hesitation, heaviness, or an impulse to do something easier first. People commonly misread it as a motivation failure, even though it is often a response to ambiguity, fear of difficulty, or a task that has not yet been shaped into an obvious first step.",
      "This dimension matters because if the cost of starting is too high, the task never gets a fair trial. The work is being judged from the doorway instead of from inside momentum. Lowering start resistance is often less about discipline and more about reducing uncertainty and cognitive entry cost.",
    ],
  },
  {
    key: "interruptionLoad" as FocusDimensionKey,
    title: "Interruption Load",
    paragraphs: [
      "Interruption load measures how much outside inputs and mid-task breaks destabilize attention once it has started. A person can be capable of deep focus and still lose large amounts of output if interruption recovery is poor. The issue is not only how often interruptions happen, but how much they fracture continuity after they arrive.",
      "When this dimension runs high, focus is less like a steady stream and more like repeated restarts. Even short interruptions become costly because the task has to be rebuilt in working memory each time.",
    ],
  },
  {
    key: "clarityDeficit" as FocusDimensionKey,
    title: "Clarity Deficit",
    paragraphs: [
      "Clarity deficit reflects how weak task definition or vague priorities can turn even willing attention into stalled attention. If the brain cannot tell what the next move is, it often keeps scanning rather than committing. That scanning can look like indecision or distraction when the deeper issue is insufficiently clear edges.",
      "This is why a clear starting point matters so much. Strong clarity reduces decision load, lowers entry friction, and makes it easier for attention to lock onto something concrete instead of carrying the whole project at once.",
    ],
  },
  {
    key: "momentumInstability" as FocusDimensionKey,
    title: "Momentum Instability",
    paragraphs: [
      "Momentum instability is the part of the pattern that shows up after work has started. Some people can begin, but not stay. Others can stay until the first disruption, then struggle to rebuild their rhythm. This dimension captures how fragile or durable the movement of attention currently feels.",
      "It matters because productivity is rarely lost all at once. It is usually lost through repeated small collapses in continuity. Rebuilding momentum faster is often more useful than trying to eliminate every interruption from the day.",
    ],
  },
];

export const increaseBlocks = [
  {
    title: "Too many open loops",
    body:
      "When unfinished tasks, obligations, or tabs stay mentally active, they compete with the work in front of you before you have even chosen to engage. That background competition raises the baseline cost of focus.",
  },
  {
    title: "Weak task definition and device interruption",
    body:
      "If the next move is vague while the phone, inbox, or browser offers immediate alternatives, attention tends to drift toward what is easier to resolve. Weak task edges make interruption more powerful than it needs to be.",
  },
  {
    title: "Emotional carryover and fatigue",
    body:
      "Stress, unresolved tension, or simple low energy can reduce the amount of friction your brain is willing to tolerate. When capacity is thinner, even ordinary work starts feeling unusually expensive.",
  },
  {
    title: "Perfectionism and task switching",
    body:
      "Perfectionism can make starting feel riskier, while task switching constantly resets the cost of attention. Together they create a system where work is repeatedly re-entered rather than continuously carried.",
  },
];

export const reductionBlocks = [
  {
    title: "Stronger starting points",
    body:
      "A crisp first move reduces resistance better than a vague commitment to focus. The brain works more easily with an action it can see than with a project it has to define while already under pressure.",
  },
  {
    title: "Reducing decision points",
    body:
      "Fewer open choices around tools, tabs, task order, or communication channels make it easier for attention to stay with the work rather than continuously renegotiate what it should do next.",
  },
  {
    title: "Environmental protection and interruption recovery",
    body:
      "Protecting the work environment matters, but so does having a quick ritual for returning after disruption. Recovery speed often matters as much as interruption frequency.",
  },
  {
    title: "Lowering cognitive clutter and sharpening task edges",
    body:
      "Clearing open loops, writing the next step, and separating one task from the next gives the attention system less invisible weight to carry. Cleaner edges make smoother momentum possible.",
  },
];

export const nextStepParagraphs = [
  "If your friction score is elevated, the useful question is not how to become a perfect focus machine. It is which part of the system needs the most repair first. For some people the answer is starting. For others it is interruption recovery, vague task edges, or the number of open loops competing for mental space before work even begins.",
  "Choose one structural change and one protective change. A structural change might mean defining a sharper first action, reducing the number of open tasks, or setting a single task rule for a work block. A protective change might mean hiding the phone, closing messaging windows, or using a consistent restart ritual after interruptions.",
  "If the result feels severe, take that seriously as a systems signal rather than a reason for self-criticism. The goal is not to force more output from a high-friction system. It is to lower the drag so focus stops paying for avoidable resistance all day long.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Focus Friction Fixer Workbook",
  description:
    "A structured guide for reducing start resistance, protecting attention, and rebuilding smoother momentum through the day.",
  buttonLabel: "View Next Step",
};

const startBlockerScores: Record<StartBlockerValue, number> = {
  "distracted-quickly": 58,
  "avoid-starting": 84,
  "dont-know-where-begin": 78,
  "switch-easier-tasks": 72,
  "lose-momentum": 76,
};

const interruptionFrequencyScores: Record<InterruptionFrequencyValue, number> = {
  rarely: 14,
  sometimes: 38,
  often: 66,
  "very-often": 82,
  constantly: 96,
};

const startingClarityScores: Record<StartingClarityValue, number> = {
  "very-clear": 10,
  "mostly-clear": 26,
  mixed: 52,
  "usually-unclear": 78,
  "very-unclear": 96,
};

const postInterruptionScores: Record<PostInterruptionValue, number> = {
  "return-quickly": 18,
  "drift-for-a-while": 56,
  "switch-tasks-completely": 82,
  "lose-work-rhythm": 76,
  "stop-caring": 92,
};

const refocusSpeedScores: Record<RefocusSpeedValue, number> = {
  "almost-immediately": 14,
  "with-a-short-reset": 34,
  "slow-to-return": 68,
  "hard-to-re-enter": 92,
};

const finishLineFrictionScores: Record<FinishLineFrictionValue, number> = {
  low: 18,
  moderate: 44,
  high: 76,
  "very-high": 94,
};

const avoidanceAfterStallScores: Record<AvoidanceAfterStallValue, number> = {
  "clarify-and-restart": 20,
  "switch-to-easier-work": 64,
  "overprepare-instead": 74,
  "step-away-longer": 88,
};

const finalPatternScores: Record<FinalPatternValue, number> = {
  "focus-with-specific-blockers": 28,
  "starting-harder-than-it-should-be": 58,
  "attention-pulled-directions": 74,
  "focus-system-keeps-breaking-down": 92,
};

const frictionSourceSeverity: Record<FrictionSourceValue, number> = {
  "phone-distractions": 76,
  "too-many-open-tasks": 82,
  perfectionism: 84,
  "low-energy": 72,
  "unclear-priorities": 80,
  stress: 70,
  overthinking: 78,
  boredom: 52,
  "email-messages": 74,
  "noise-environment": 62,
};

const rankSeverity: Record<RankBlockerKey, number> = {
  interruptions: 86,
  "unclear-next-step": 82,
  "mental-resistance": 90,
  "fatigue-low-energy": 74,
  "task-switching": 78,
};

const rankingPositionWeights = [1, 0.82, 0.64, 0.46, 0.3];

const scoringWeights = {
  startBlocker: 8,
  interruptionFrequency: 7,
  startResistanceLevel: 8,
  frictionSources: 7,
  startingClarity: 7,
  postInterruption: 7,
  mentalClutterCompetition: 8,
  environmentControl: 6,
  pressureSensitivity: 7,
  refocusSpeed: 6,
  finishLineFriction: 7,
  avoidanceAfterStall: 6,
  rankingOrder: 5,
  outputImpact: 6,
  finalPattern: 5,
} as const;

const sourceBlockerMap: Record<FrictionSourceValue, FocusBlockerKey[]> = {
  "phone-distractions": ["interruptions"],
  "too-many-open-tasks": ["task-overload", "unclear-starting-point"],
  perfectionism: ["perfectionism-mental-drag", "internal-resistance"],
  "low-energy": ["low-energy-fatigue"],
  "unclear-priorities": ["unclear-starting-point", "task-overload"],
  stress: ["internal-resistance", "perfectionism-mental-drag"],
  overthinking: ["perfectionism-mental-drag", "internal-resistance"],
  boredom: ["low-energy-fatigue"],
  "email-messages": ["interruptions"],
  "noise-environment": ["interruptions"],
};

const rankingBlockerMap: Record<RankBlockerKey, FocusBlockerKey> = {
  interruptions: "interruptions",
  "unclear-next-step": "unclear-starting-point",
  "mental-resistance": "internal-resistance",
  "fatigue-low-energy": "low-energy-fatigue",
  "task-switching": "task-overload",
};

const blockerHeatInfluence: Record<FocusBlockerKey, HeatmapKey[]> = {
  interruptions: ["external-interruptions", "digital-pull", "environmental-distraction"],
  "unclear-starting-point": ["mental-clutter"],
  "internal-resistance": ["mental-clutter"],
  "low-energy-fatigue": ["mental-clutter"],
  "task-overload": ["task-switching", "mental-clutter"],
  "perfectionism-mental-drag": ["mental-clutter"],
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
  return focusBands.find((band) => score >= band.min && score <= band.max) ?? focusBands[0];
}

function getDimension(key: FocusDimensionKey) {
  return focusDimensions.find((dimension) => dimension.key === key) ?? focusDimensions[0];
}

function getBlocker(key: FocusBlockerKey) {
  return focusBlockers.find((blocker) => blocker.key === key) ?? focusBlockers[0];
}

function getHeatmapMetric(key: HeatmapKey) {
  return heatmapMetrics.find((metric) => metric.key === key) ?? heatmapMetrics[0];
}

function getRankingScore(order: RankBlockerKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = rankingPositionWeights.reduce((sum, weight) => sum + weight, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const positionWeight = rankingPositionWeights[index] ?? rankingPositionWeights[rankingPositionWeights.length - 1];
    return sum + rankSeverity[key] * positionWeight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getRankContribution(order: RankBlockerKey[]) {
  const result = focusBlockers.reduce<Record<FocusBlockerKey, number>>(
    (accumulator, blocker) => ({ ...accumulator, [blocker.key]: 0 }),
    {
      interruptions: 0,
      "unclear-starting-point": 0,
      "internal-resistance": 0,
      "low-energy-fatigue": 0,
      "task-overload": 0,
      "perfectionism-mental-drag": 0,
    },
  );

  for (const [index, key] of order.entries()) {
    const blocker = rankingBlockerMap[key];
    const weight = rankingPositionWeights[index] ?? 0.3;
    result[blocker] += rankSeverity[key] * weight;
  }

  return result;
}

function calculateSourceDensity(selected: FrictionSourceValue[]) {
  if (!selected.length) {
    return undefined;
  }

  const severityAverage =
    selected.reduce((sum, key) => sum + frictionSourceSeverity[key], 0) / selected.length;
  const densityBonus = (selected.length / 4) * 20;

  return clampScore(severityAverage * 0.82 + densityBonus);
}

export function getInitialFocusAnswers(): FocusAnswers {
  return {
    frictionSources: [],
    rankingOrder: rankingItems.map((item) => item.key),
    rankingConfirmed: false,
  };
}

export function isFocusStepComplete(step: FocusAuditStep, answers: FocusAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers.frictionSources.length > 0;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  if (step.kind === "drag-rank") {
    return answers.rankingOrder.length === step.items.length && answers.rankingConfirmed;
  }

  return Boolean(answers[step.field]);
}

export function calculateFocusFrictionAudit(answers: FocusAnswers): FocusAuditResult {
  const startBlocker = answers.startBlocker ? startBlockerScores[answers.startBlocker] : undefined;
  const interruptionFrequency = answers.interruptionFrequency
    ? interruptionFrequencyScores[answers.interruptionFrequency]
    : undefined;
  const startResistanceLevel =
    typeof answers.startResistanceLevel === "number" ? clampScore(answers.startResistanceLevel) : undefined;
  const frictionSourcesScore = calculateSourceDensity(answers.frictionSources);
  const startingClarity = answers.startingClarity ? startingClarityScores[answers.startingClarity] : undefined;
  const postInterruption = answers.postInterruption ? postInterruptionScores[answers.postInterruption] : undefined;
  const mentalClutterCompetition =
    typeof answers.mentalClutterCompetition === "number" ? clampScore(answers.mentalClutterCompetition) : undefined;
  const environmentControl =
    typeof answers.environmentControl === "number" ? clampScore(100 - answers.environmentControl) : undefined;
  const pressureSensitivity =
    typeof answers.pressureSensitivity === "number" ? clampScore(answers.pressureSensitivity) : undefined;
  const refocusSpeed = answers.refocusSpeed ? refocusSpeedScores[answers.refocusSpeed] : undefined;
  const finishLineFriction = answers.finishLineFriction
    ? finishLineFrictionScores[answers.finishLineFriction]
    : undefined;
  const avoidanceAfterStall = answers.avoidanceAfterStall
    ? avoidanceAfterStallScores[answers.avoidanceAfterStall]
    : undefined;
  const rankingOrder = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const consistencyImpact =
    typeof answers.consistencyImpact === "number" ? clampScore(answers.consistencyImpact) : undefined;
  const completionImpact =
    typeof answers.completionImpact === "number" ? clampScore(answers.completionImpact) : undefined;
  const confidenceImpact =
    typeof answers.confidenceImpact === "number" ? clampScore(answers.confidenceImpact) : undefined;
  const outputImpact =
    typeof consistencyImpact === "number" &&
    typeof completionImpact === "number" &&
    typeof confidenceImpact === "number"
      ? clampScore((consistencyImpact + completionImpact + confidenceImpact) / 3)
      : undefined;
  const finalPattern = answers.finalPattern ? finalPatternScores[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: startBlocker, weight: scoringWeights.startBlocker },
    { value: interruptionFrequency, weight: scoringWeights.interruptionFrequency },
    { value: startResistanceLevel, weight: scoringWeights.startResistanceLevel },
    { value: frictionSourcesScore, weight: scoringWeights.frictionSources },
    { value: startingClarity, weight: scoringWeights.startingClarity },
    { value: postInterruption, weight: scoringWeights.postInterruption },
    { value: mentalClutterCompetition, weight: scoringWeights.mentalClutterCompetition },
    { value: environmentControl, weight: scoringWeights.environmentControl },
    { value: pressureSensitivity, weight: scoringWeights.pressureSensitivity },
    { value: refocusSpeed, weight: scoringWeights.refocusSpeed },
    { value: finishLineFriction, weight: scoringWeights.finishLineFriction },
    { value: avoidanceAfterStall, weight: scoringWeights.avoidanceAfterStall },
    { value: rankingOrder, weight: scoringWeights.rankingOrder },
    { value: outputImpact, weight: scoringWeights.outputImpact },
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

  const blockerTotals = focusBlockers.reduce<Record<FocusBlockerKey, number>>(
    (accumulator, blocker) => ({ ...accumulator, [blocker.key]: 0 }),
    {
      interruptions: 0,
      "unclear-starting-point": 0,
      "internal-resistance": 0,
      "low-energy-fatigue": 0,
      "task-overload": 0,
      "perfectionism-mental-drag": 0,
    },
  );

  const rankContribution = answers.rankingConfirmed ? getRankContribution(answers.rankingOrder) : blockerTotals;

  if (answers.startBlocker) {
    const mapping: Record<StartBlockerValue, FocusBlockerKey[]> = {
      "distracted-quickly": ["interruptions"],
      "avoid-starting": ["internal-resistance"],
      "dont-know-where-begin": ["unclear-starting-point"],
      "switch-easier-tasks": ["task-overload", "internal-resistance"],
      "lose-momentum": [],
    };

    for (const blocker of mapping[answers.startBlocker] ?? []) {
      blockerTotals[blocker] += startBlockerScores[answers.startBlocker] * 0.7;
    }

    if (answers.startBlocker === "lose-momentum") {
      blockerTotals["task-overload"] += startBlockerScores[answers.startBlocker] * 0.32;
      blockerTotals["interruptions"] += startBlockerScores[answers.startBlocker] * 0.22;
    }
  }

  for (const source of answers.frictionSources) {
    const mappedBlockers = sourceBlockerMap[source];

    for (const blocker of mappedBlockers) {
      blockerTotals[blocker] += frictionSourceSeverity[source] * 0.66;
    }
  }

  if (answers.startingClarity) {
    blockerTotals["unclear-starting-point"] += startingClarityScores[answers.startingClarity] * 0.9;
  }

  if (answers.postInterruption) {
    const value = postInterruptionScores[answers.postInterruption];
    blockerTotals.interruptions += value * 0.46;
    blockerTotals["task-overload"] += value * 0.18;
    blockerTotals["internal-resistance"] += value * 0.12;
  }

  if (typeof answers.startResistanceLevel === "number") {
    blockerTotals["internal-resistance"] += answers.startResistanceLevel * 0.78;
    blockerTotals["perfectionism-mental-drag"] += answers.startResistanceLevel * 0.22;
  }

  if (typeof answers.mentalClutterCompetition === "number") {
    blockerTotals["task-overload"] += answers.mentalClutterCompetition * 0.56;
    blockerTotals["perfectionism-mental-drag"] += answers.mentalClutterCompetition * 0.22;
    blockerTotals["unclear-starting-point"] += answers.mentalClutterCompetition * 0.18;
  }

  if (typeof answers.environmentControl === "number") {
    blockerTotals.interruptions += (100 - answers.environmentControl) * 0.54;
    blockerTotals["task-overload"] += (100 - answers.environmentControl) * 0.12;
  }

  if (typeof answers.pressureSensitivity === "number") {
    blockerTotals["internal-resistance"] += answers.pressureSensitivity * 0.32;
    blockerTotals["low-energy-fatigue"] += answers.pressureSensitivity * 0.18;
    blockerTotals["task-overload"] += answers.pressureSensitivity * 0.18;
  }

  if (answers.refocusSpeed) {
    const value = refocusSpeedScores[answers.refocusSpeed];
    blockerTotals.interruptions += value * 0.34;
    blockerTotals["task-overload"] += value * 0.18;
  }

  if (answers.finishLineFriction) {
    const value = finishLineFrictionScores[answers.finishLineFriction];
    blockerTotals["perfectionism-mental-drag"] += value * 0.34;
    blockerTotals["internal-resistance"] += value * 0.22;
  }

  if (answers.avoidanceAfterStall) {
    const value = avoidanceAfterStallScores[answers.avoidanceAfterStall];
    blockerTotals["internal-resistance"] += value * 0.28;
    blockerTotals["task-overload"] += value * 0.16;
    blockerTotals["unclear-starting-point"] += value * 0.14;
  }

  if (answers.rankingConfirmed) {
    for (const blocker of focusBlockers) {
      blockerTotals[blocker.key] += rankContribution[blocker.key] * 0.54;
    }
  }

  if (typeof outputImpact === "number") {
    blockerTotals["task-overload"] += outputImpact * 0.18;
    blockerTotals["low-energy-fatigue"] += outputImpact * 0.24;
  }

  const blockerSourceEntries = focusBlockers.map((blocker) => ({
    ...blocker,
    value: clampScore(Math.min(100, blockerTotals[blocker.key] / 2.2)),
  }));

  const sortedBlockers = [...blockerSourceEntries].sort((left, right) => right.value - left.value);
  const primaryDriver = sortedBlockers[0] ?? focusBlockers[0];
  const secondaryDriver = sortedBlockers[1] ?? focusBlockers[1];

  const dimensions: Record<FocusDimensionKey, number> = {
    startResistance: weightedAverage([
      { value: startResistanceLevel, weight: 0.34 },
      { value: answers.startBlocker === "avoid-starting" ? 94 : startBlocker, weight: 0.18 },
      { value: answers.startBlocker === "switch-easier-tasks" ? 76 : undefined, weight: 0.1 },
      { value: finishLineFriction, weight: 0.1 },
      { value: avoidanceAfterStall, weight: 0.08 },
      { value: primaryDriver.key === "internal-resistance" ? primaryDriver.value : undefined, weight: 0.08 },
      { value: sortedBlockers.find((item) => item.key === "internal-resistance")?.value, weight: 0.14 },
      { value: sortedBlockers.find((item) => item.key === "perfectionism-mental-drag")?.value, weight: 0.06 },
    ]),
    interruptionLoad: weightedAverage([
      { value: interruptionFrequency, weight: 0.3 },
      { value: postInterruption, weight: 0.22 },
      { value: environmentControl, weight: 0.16 },
      { value: refocusSpeed, weight: 0.14 },
      { value: sortedBlockers.find((item) => item.key === "interruptions")?.value, weight: 0.18 },
      { value: answers.startBlocker === "distracted-quickly" ? startBlocker : undefined, weight: 0.05 },
      { value: rankContribution.interruptions ? clampScore(rankContribution.interruptions / 1.6) : undefined, weight: 0.05 },
    ]),
    clarityDeficit: weightedAverage([
      { value: startingClarity, weight: 0.34 },
      { value: answers.startBlocker === "dont-know-where-begin" ? startBlocker : undefined, weight: 0.14 },
      { value: sortedBlockers.find((item) => item.key === "unclear-starting-point")?.value, weight: 0.22 },
      { value: mentalClutterCompetition, weight: 0.1 },
      { value: avoidanceAfterStall, weight: 0.08 },
      { value: environmentControl, weight: 0.04 },
      { value: rankContribution["unclear-starting-point"] ? clampScore(rankContribution["unclear-starting-point"] / 1.6) : undefined, weight: 0.08 },
    ]),
    momentumInstability: weightedAverage([
      { value: postInterruption, weight: 0.2 },
      { value: refocusSpeed, weight: 0.16 },
      { value: pressureSensitivity, weight: 0.14 },
      { value: finishLineFriction, weight: 0.12 },
      { value: mentalClutterCompetition, weight: 0.14 },
      { value: outputImpact, weight: 0.14 },
      { value: answers.startBlocker === "lose-momentum" ? startBlocker : undefined, weight: 0.12 },
      { value: sortedBlockers.find((item) => item.key === "task-overload")?.value, weight: 0.06 },
      { value: sortedBlockers.find((item) => item.key === "low-energy-fatigue")?.value, weight: 0.06 },
    ]),
  };

  const heatTotals = heatmapMetrics.reduce<Record<HeatmapKey, number>>(
    (accumulator, metric) => ({ ...accumulator, [metric.key]: 0 }),
    {
      "external-interruptions": 0,
      "mental-clutter": 0,
      "task-switching": 0,
      "environmental-distraction": 0,
      "digital-pull": 0,
    },
  );

  for (const blocker of sortedBlockers) {
    const heatKeys = blockerHeatInfluence[blocker.key];

    for (const key of heatKeys) {
      heatTotals[key] += blocker.value * 0.44;
    }
  }

  if (typeof interruptionFrequency === "number") {
    heatTotals["external-interruptions"] += interruptionFrequency * 0.46;
    heatTotals["digital-pull"] += interruptionFrequency * 0.18;
  }

  if (typeof mentalClutterCompetition === "number") {
    heatTotals["mental-clutter"] += mentalClutterCompetition * 0.56;
    heatTotals["task-switching"] += mentalClutterCompetition * 0.18;
  }

  if (typeof environmentControl === "number") {
    heatTotals["external-interruptions"] += environmentControl * 0.26;
    heatTotals["environmental-distraction"] += environmentControl * 0.2;
  }

  if (answers.frictionSources.includes("phone-distractions")) {
    heatTotals["digital-pull"] += 36;
  }

  if (answers.frictionSources.includes("email-messages")) {
    heatTotals["digital-pull"] += 30;
  }

  if (answers.frictionSources.includes("noise-environment")) {
    heatTotals["environmental-distraction"] += 40;
  }

  if (answers.startBlocker === "switch-easier-tasks") {
    heatTotals["task-switching"] += 40;
  }

  if (answers.postInterruption === "switch-tasks-completely") {
    heatTotals["task-switching"] += 52;
  }

  const heatmap = heatmapMetrics.map((metric) => ({
    ...metric,
    value: clampScore(Math.min(100, heatTotals[metric.key] / 1.6)),
  }));

  const signalLabel = `Your focus breakdown appears to be driven more by ${primaryDriver.label.toLowerCase()} and ${secondaryDriver.label.toLowerCase()} than by distraction alone.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} ${primaryDriver.label} is the strongest driver right now, with ${secondaryDriver.label.toLowerCase()} acting as the main secondary drag factor.`;
  const dragInsight = `${band.dragLead} In this profile, the heaviest operational drag is coming from ${primaryDriver.label.toLowerCase()}, especially when paired with ${secondaryDriver.label.toLowerCase()}.`;
  const flowStability = clampScore(
    100 -
      weightedAverage([
        { value: dimensions.interruptionLoad, weight: 0.34 },
        { value: dimensions.momentumInstability, weight: 0.4 },
        { value: dimensions.startResistance, weight: 0.14 },
        { value: dimensions.clarityDeficit, weight: 0.12 },
      ]),
  );

  return {
    score,
    band,
    completionRatio,
    isComplete: completionRatio === 1 && Boolean(answers.finalPattern),
    dimensions,
    blockerSources: blockerSourceEntries,
    topBlockers: sortedBlockers.slice(0, 4),
    heatmap,
    outputImpact: {
      consistency: consistencyImpact ?? 0,
      completion: completionImpact ?? 0,
      confidence: confidenceImpact ?? 0,
    },
    primaryDriver: getBlocker(primaryDriver.key),
    secondaryDriver: getBlocker(secondaryDriver.key),
    signalLabel,
    interpretation,
    standout,
    dragInsight,
    flowStability,
  };
}

export function getFocusDimension(key: FocusDimensionKey) {
  return getDimension(key);
}

export function getFocusBlocker(key: FocusBlockerKey) {
  return getBlocker(key);
}

export function getFocusHeatMetric(key: HeatmapKey) {
  return getHeatmapMetric(key);
}

export const heroPreviewResult = calculateFocusFrictionAudit({
  ...getInitialFocusAnswers(),
  startBlocker: "dont-know-where-begin",
  interruptionFrequency: "often",
  startResistanceLevel: 68,
  frictionSources: ["too-many-open-tasks", "unclear-priorities", "overthinking", "email-messages"],
  startingClarity: "usually-unclear",
  postInterruption: "lose-work-rhythm",
  mentalClutterCompetition: 72,
  environmentControl: 28,
  pressureSensitivity: 64,
  refocusSpeed: "slow-to-return",
  finishLineFriction: "high",
  avoidanceAfterStall: "overprepare-instead",
  rankingOrder: [
    "unclear-next-step",
    "mental-resistance",
    "interruptions",
    "task-switching",
    "fatigue-low-energy",
  ],
  rankingConfirmed: true,
  consistencyImpact: 58,
  completionImpact: 64,
  confidenceImpact: 42,
  finalPattern: "attention-pulled-directions",
});
