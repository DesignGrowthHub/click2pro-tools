import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type DecisionBandKey =
  | "clear-operator"
  | "mild-decision-wear"
  | "cognitive-saturation-pattern"
  | "overloaded-choice-state"
  | "severely-depleted-clarity";

export type DecisionPatternKey =
  | "certainty-seeking"
  | "delay-and-drift"
  | "overload-and-collapse"
  | "push-through-depletion"
  | "stable-under-pressure";

export type DecisionDimensionKey =
  | "clarityStability"
  | "cognitiveLoadAccumulation"
  | "uncertaintyFriction"
  | "confidenceErosion";

export type FatigueDriverKey =
  | "repeated-choices"
  | "uncertainty"
  | "low-energy"
  | "emotional-carryover"
  | "unresolved-tasks";

export type ScenarioId =
  | "morning-overload"
  | "midday-interruption"
  | "choice-overload"
  | "low-energy-decision-point"
  | "emotional-carryover"
  | "repeated-micro-decisions"
  | "end-of-day-uncertainty"
  | "stakeholder-conflict"
  | "criteria-blur"
  | "rapid-follow-up-choice"
  | "visibility-pressure"
  | "delegation-decision"
  | "late-day-tradeoff"
  | "unfinished-loop-return"
  | "self-reflection";

export type SimulatorChoice = {
  id: string;
  marker: string;
  label: string;
  impact: {
    clarity: number;
    confidence: number;
    cognitiveLoad: number;
    choiceFriction: number;
    drivers: Partial<Record<FatigueDriverKey, number>>;
    pattern: DecisionPatternKey;
  };
};

export type SimulatorScenario = {
  id: ScenarioId;
  step: number;
  label: string;
  title: string;
  prompt: string;
  hint: string;
  choices: SimulatorChoice[];
};

export type SimulatorAnswers = Record<ScenarioId, string | undefined>;

export type DecisionBand = {
  key: DecisionBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  clarityLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type DecisionPattern = {
  key: DecisionPatternKey;
  title: string;
  summary: string;
  accent: string;
};

export type DecisionDimension = {
  key: DecisionDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type FatigueDriver = {
  key: FatigueDriverKey;
  label: string;
  shortLabel: string;
  description: string;
  accent: string;
};

export type RelatedDecisionTool = {
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

export type SimulationSnapshot = {
  scenarioId: ScenarioId;
  scenarioLabel: string;
  scenarioTitle: string;
  choiceId: string;
  choiceMarker: string;
  choiceLabel: string;
  pattern: DecisionPatternKey;
  clarity: number;
  confidence: number;
  cognitiveLoad: number;
  choiceFriction: number;
  clarityDrop: number;
  confidenceDrop: number;
  loadIncrease: number;
  frictionIncrease: number;
  tone: "steady" | "mixed" | "heavy";
};

export type DecisionSimulatorResult = {
  score: number;
  band: DecisionBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<DecisionDimensionKey, number>;
  currentState: {
    clarity: number;
    confidence: number;
    cognitiveLoad: number;
    choiceFriction: number;
  };
  snapshots: SimulationSnapshot[];
  patternLabel: DecisionPattern;
  driverTotals: Array<FatigueDriver & { value: number }>;
  primaryDriver: FatigueDriver;
  secondaryDriver: FatigueDriver;
  signalLabel: string;
  interpretation: string;
  standout: string;
  clarityDropInsight: string;
};

export const decisionToolMetadata = {
  eyebrow: "DECISION & MENTAL LOAD TOOL",
  title: "Decision Fatigue Simulator",
  description:
    "See how repeated choices, uncertainty, low recovery, and mental clutter change your judgment through the day. This tool shows why decisions start feeling heavier than they should.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const decisionDimensions: DecisionDimension[] = [
  {
    key: "clarityStability",
    label: "Clarity Stability",
    description: "How well usable clarity held up once the day accumulated choices, interruptions, and unresolved decision tension.",
    icon: "signal",
    accent: "#60A5FA",
  },
  {
    key: "cognitiveLoadAccumulation",
    label: "Cognitive Load Accumulation",
    description: "How much mental load built across repeated decisions, context shifts, and end-of-day carryover.",
    icon: "graph",
    accent: "#22C7D6",
  },
  {
    key: "uncertaintyFriction",
    label: "Uncertainty Friction",
    description: "How strongly ambiguity, open loops, and the need for more certainty made decisions more expensive.",
    icon: "pattern",
    accent: "#F6C177",
  },
  {
    key: "confidenceErosion",
    label: "Confidence Erosion",
    description: "How quickly trust in your own judgment dropped once the decision environment became heavier.",
    icon: "trend",
    accent: "#FB7185",
  },
];

export const fatigueDrivers: FatigueDriver[] = [
  {
    key: "repeated-choices",
    label: "Repeated choices",
    shortLabel: "Repeated choices",
    description: "Dozens of small judgments consuming clarity before the important choices arrive.",
    accent: "#60A5FA",
  },
  {
    key: "uncertainty",
    label: "Uncertainty",
    shortLabel: "Uncertainty",
    description: "Not knowing enough yet, needing more certainty, and trying to reduce ambiguity before acting.",
    accent: "#F6C177",
  },
  {
    key: "low-energy",
    label: "Low energy",
    shortLabel: "Low energy",
    description: "Reduced recovery leaving the brain with less willingness to tolerate decision complexity.",
    accent: "#34D399",
  },
  {
    key: "emotional-carryover",
    label: "Emotional carryover",
    shortLabel: "Emotional carryover",
    description: "Personal or relational spillover quietly competing with practical decision-making.",
    accent: "#A78BFA",
  },
  {
    key: "unresolved-tasks",
    label: "Unresolved tasks",
    shortLabel: "Unresolved tasks",
    description: "Open loops and unfinished obligations pulling attention away from the choice in front of you.",
    accent: "#FB7185",
  },
];

export const decisionPatterns: DecisionPattern[] = [
  {
    key: "certainty-seeking",
    title: "certainty-seeking",
    summary: "Your choices suggest that decisions get heavier when certainty is incomplete, so the mind keeps reaching for more information, reassurance, or control before committing.",
    accent: "#F6C177",
  },
  {
    key: "delay-and-drift",
    title: "delay-and-drift",
    summary: "The pattern leans toward keeping decisions open, circling them longer, or deferring action when clarity does not arrive fast enough.",
    accent: "#A78BFA",
  },
  {
    key: "overload-and-collapse",
    title: "overload-and-collapse",
    summary: "Repeated inputs and unresolved demands appear to push the system toward saturation, where clarity breaks down more from accumulation than from any single choice.",
    accent: "#FB7185",
  },
  {
    key: "push-through-depletion",
    title: "push-through depletion",
    summary: "The pattern suggests you keep moving under pressure, but the cost shows up later as weaker decisions, reduced clarity, and a thinner margin for judgment.",
    accent: "#22C7D6",
  },
  {
    key: "stable-under-pressure",
    title: "stable under pressure",
    summary: "Your choices suggest that you can simplify, defer, or act with enough realism that clarity stays relatively intact even when the day gets noisy.",
    accent: "#34D399",
  },
];

export const decisionBands: DecisionBand[] = [
  {
    key: "clear-operator",
    min: 0,
    max: 24,
    title: "Clear Operator",
    summary: "Your simulation suggests that clarity is staying relatively intact across repeated choices, even when the day adds some pressure.",
    interpretation:
      "That does not mean every decision is easy. It means the environment around your decisions is not currently stripping too much clarity away before you use it.",
    standoutLead: "The strongest signal here is that your system still protects usable judgment reasonably well.",
    clarityLead: "When clarity dips, it appears to dip in isolated pockets rather than collapsing across the whole sequence.",
    gradientFrom: "#34D399",
    gradientTo: "#60A5FA",
    glow: "rgba(52, 211, 153, 0.24)",
  },
  {
    key: "mild-decision-wear",
    min: 25,
    max: 44,
    title: "Mild Decision Wear",
    summary: "Some decision strain is building across the sequence, especially once repeated choices and uncertainty start stacking on top of one another.",
    interpretation:
      "This is often the zone where people say they feel mentally off later in the day without realizing how much choice volume is doing the damage.",
    standoutLead: "The simulator suggests that decision quality is still workable, but it costs more energy than it should.",
    clarityLead: "Clarity appears to soften once the day becomes less clean, not because you cannot decide, but because too many small decision costs are accumulating.",
    gradientFrom: "#60A5FA",
    gradientTo: "#F6C177",
    glow: "rgba(246, 193, 119, 0.24)",
  },
  {
    key: "cognitive-saturation-pattern",
    min: 45,
    max: 64,
    title: "Cognitive Saturation Pattern",
    summary: "The simulation points to a decision system that becomes noticeably less clear as repeated demands, ambiguity, and background load accumulate.",
    interpretation:
      "At this level, decisions often feel heavier than their actual size. The issue is not only the decision itself, but the mental climate in which it is being made.",
    standoutLead: "The strongest theme is cumulative saturation rather than one isolated weak spot.",
    clarityLead: "Clarity appears to erode most once several open choices, interruptions, or unresolved concerns are active at the same time.",
    gradientFrom: "#F6C177",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.22)",
  },
  {
    key: "overloaded-choice-state",
    min: 65,
    max: 84,
    title: "Overloaded Choice State",
    summary: "Your result suggests that choices are becoming expensive because cognitive load, uncertainty, and confidence drag are all landing in the same system at once.",
    interpretation:
      "This often feels like even small decisions are disproportionately heavy. In practice, the system may already be too loaded for repeated judgment to stay light.",
    standoutLead: "The simulator is pointing to real overload around decision-making conditions, not just indecision in the abstract.",
    clarityLead: "Clarity appears to drop hardest once the sequence combines repeated demands with lower energy or unresolved tension.",
    gradientFrom: "#FB7185",
    gradientTo: "#F6C177",
    glow: "rgba(251, 113, 133, 0.24)",
  },
  {
    key: "severely-depleted-clarity",
    min: 85,
    max: 100,
    title: "Severely Depleted Clarity",
    summary: "The simulation suggests that clarity is being heavily taxed by cumulative decision load, uncertainty, and reduced recovery capacity.",
    interpretation:
      "That does not label you. It does suggest that the system around your decisions is carrying enough strain that judgment becomes harder to trust and harder to sustain.",
    standoutLead: "The most important signal is cumulative depletion - not one wrong choice, but a decision environment that keeps draining usable clarity.",
    clarityLead: "Clarity appears to be dropping in a patterned way across the sequence, especially once the day moves into lower-energy or unresolved territory.",
    gradientFrom: "#FB7185",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.24)",
  },
];

export const simulatorScenarios: SimulatorScenario[] = [
  {
    id: "morning-overload",
    step: 1,
    label: "Morning overload",
    title: "Morning overload",
    prompt:
      "You start the day already thinking about several unfinished things. Before beginning, you realize three priorities all feel urgent.",
    hint: "Pick the option that sounds most like your real default under pressure, not the answer that sounds ideal.",
    choices: [
      {
        id: "think-through-all",
        marker: "A",
        label: "I try to think through all of them before starting",
        impact: {
          clarity: -10,
          confidence: -2,
          cognitiveLoad: 14,
          choiceFriction: 12,
          drivers: { "unresolved-tasks": 3, uncertainty: 1 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "choose-one-and-move",
        marker: "B",
        label: "I choose one and move, even if it's imperfect",
        impact: {
          clarity: 4,
          confidence: 4,
          cognitiveLoad: 4,
          choiceFriction: -5,
          drivers: { "unresolved-tasks": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "reorganize-repeatedly",
        marker: "C",
        label: "I reorganize my list repeatedly",
        impact: {
          clarity: -8,
          confidence: -3,
          cognitiveLoad: 12,
          choiceFriction: 10,
          drivers: { "unresolved-tasks": 2, uncertainty: 1 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "delay-until-clearer",
        marker: "D",
        label: "I delay starting until things feel clearer",
        impact: {
          clarity: -12,
          confidence: -6,
          cognitiveLoad: 8,
          choiceFriction: 14,
          drivers: { "unresolved-tasks": 3, uncertainty: 2 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "midday-interruption",
    step: 2,
    label: "Midday interruption",
    title: "Midday interruption",
    prompt: "You're partway into focused work when a new message, request, or issue interrupts your attention.",
    hint: "This one is less about interruption itself and more about what happens to your clarity after the interruption lands.",
    choices: [
      {
        id: "respond-immediately",
        marker: "A",
        label: "I respond immediately and switch fully",
        impact: {
          clarity: -8,
          confidence: -2,
          cognitiveLoad: 11,
          choiceFriction: 5,
          drivers: { "repeated-choices": 2, "unresolved-tasks": 1 },
          pattern: "overload-and-collapse",
        },
      },
      {
        id: "note-and-return",
        marker: "B",
        label: "I note it and return later",
        impact: {
          clarity: 2,
          confidence: 3,
          cognitiveLoad: 4,
          choiceFriction: -2,
          drivers: { "repeated-choices": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "handle-both",
        marker: "C",
        label: "I try to handle both at once",
        impact: {
          clarity: -11,
          confidence: -4,
          cognitiveLoad: 14,
          choiceFriction: 7,
          drivers: { "repeated-choices": 3, "unresolved-tasks": 1 },
          pattern: "overload-and-collapse",
        },
      },
      {
        id: "pause-struggle-back",
        marker: "D",
        label: "I pause, then struggle to get back in",
        impact: {
          clarity: -9,
          confidence: -5,
          cognitiveLoad: 10,
          choiceFriction: 6,
          drivers: { "repeated-choices": 2, "unresolved-tasks": 1 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "choice-overload",
    step: 3,
    label: "Choice overload",
    title: "Choice overload",
    prompt: "You need to choose between several good-enough options, but none feel fully certain.",
    hint: "This catches what you do when good-enough clarity is available, but perfect clarity is not.",
    choices: [
      {
        id: "research-longer",
        marker: "A",
        label: "I research longer",
        impact: {
          clarity: -6,
          confidence: -2,
          cognitiveLoad: 9,
          choiceFriction: 11,
          drivers: { uncertainty: 3 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "ask-reassurance",
        marker: "B",
        label: "I ask for reassurance",
        impact: {
          clarity: -4,
          confidence: -1,
          cognitiveLoad: 6,
          choiceFriction: 10,
          drivers: { uncertainty: 2 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "choose-accept-uncertainty",
        marker: "C",
        label: "I choose one and accept uncertainty",
        impact: {
          clarity: 3,
          confidence: 5,
          cognitiveLoad: 3,
          choiceFriction: -4,
          drivers: { uncertainty: 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "leave-open",
        marker: "D",
        label: "I leave the decision open",
        impact: {
          clarity: -10,
          confidence: -6,
          cognitiveLoad: 8,
          choiceFriction: 12,
          drivers: { uncertainty: 3, "unresolved-tasks": 2 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "low-energy-decision-point",
    step: 4,
    label: "Low-energy decision point",
    title: "Low-energy decision point",
    prompt: "By later in the day, even small choices start to feel heavier than they should.",
    hint: "Notice whether your default is to conserve clarity, force output, or freeze once energy drops.",
    choices: [
      {
        id: "keep-pushing",
        marker: "A",
        label: "I keep pushing through decisions",
        impact: {
          clarity: -8,
          confidence: -2,
          cognitiveLoad: 11,
          choiceFriction: 5,
          drivers: { "low-energy": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "defer-nonessential",
        marker: "B",
        label: "I defer nonessential choices",
        impact: {
          clarity: 2,
          confidence: 2,
          cognitiveLoad: -2,
          choiceFriction: -3,
          drivers: { "low-energy": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "fast-choices-to-clear",
        marker: "C",
        label: "I make fast choices just to clear them",
        impact: {
          clarity: -7,
          confidence: -5,
          cognitiveLoad: 6,
          choiceFriction: 6,
          drivers: { "low-energy": 2, "repeated-choices": 1 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "stuck-and-avoid",
        marker: "D",
        label: "I feel stuck and avoid deciding",
        impact: {
          clarity: -12,
          confidence: -7,
          cognitiveLoad: 7,
          choiceFriction: 13,
          drivers: { "low-energy": 3, uncertainty: 1 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "emotional-carryover",
    step: 5,
    label: "Emotional carryover",
    title: "Emotional carryover",
    prompt:
      "A personal or relational concern is lingering in the background while you're trying to make practical choices.",
    hint: "This step picks up the quieter way emotional spillover can change judgment even when the decision itself is straightforward.",
    choices: [
      {
        id: "compartmentalize",
        marker: "A",
        label: "I compartmentalize and continue",
        impact: {
          clarity: -1,
          confidence: 1,
          cognitiveLoad: 5,
          choiceFriction: 1,
          drivers: { "emotional-carryover": 2 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "revisit-concern",
        marker: "B",
        label: "I revisit the concern mentally while deciding",
        impact: {
          clarity: -10,
          confidence: -4,
          cognitiveLoad: 10,
          choiceFriction: 8,
          drivers: { "emotional-carryover": 3, uncertainty: 1 },
          pattern: "overload-and-collapse",
        },
      },
      {
        id: "lose-confidence",
        marker: "C",
        label: "I lose confidence in my judgment",
        impact: {
          clarity: -8,
          confidence: -10,
          cognitiveLoad: 7,
          choiceFriction: 10,
          drivers: { "emotional-carryover": 2, uncertainty: 2 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "postpone-until-better",
        marker: "D",
        label: "I postpone until I feel better",
        impact: {
          clarity: -7,
          confidence: -5,
          cognitiveLoad: 5,
          choiceFriction: 11,
          drivers: { "emotional-carryover": 3, "unresolved-tasks": 1 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "repeated-micro-decisions",
    step: 6,
    label: "Repeated micro-decisions",
    title: "Repeated micro-decisions",
    prompt:
      "The day keeps presenting small choices - messages, tasks, timing, priorities, responses.",
    hint: "This scenario tracks what repeated micro-decisions do to the system even when none of them seem major on their own.",
    choices: [
      {
        id: "handle-as-appear",
        marker: "A",
        label: "I handle them as they appear",
        impact: {
          clarity: -8,
          confidence: -3,
          cognitiveLoad: 12,
          choiceFriction: 4,
          drivers: { "repeated-choices": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "batch-later",
        marker: "B",
        label: "I batch them later",
        impact: {
          clarity: 2,
          confidence: 3,
          cognitiveLoad: 4,
          choiceFriction: -2,
          drivers: { "repeated-choices": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "feel-scattered",
        marker: "C",
        label: "I feel more scattered with each one",
        impact: {
          clarity: -12,
          confidence: -6,
          cognitiveLoad: 14,
          choiceFriction: 7,
          drivers: { "repeated-choices": 3, "unresolved-tasks": 1 },
          pattern: "overload-and-collapse",
        },
      },
      {
        id: "weaker-decisions-just-finish",
        marker: "D",
        label: "I start making weaker decisions just to finish",
        impact: {
          clarity: -9,
          confidence: -8,
          cognitiveLoad: 10,
          choiceFriction: 6,
          drivers: { "repeated-choices": 2, "low-energy": 1 },
          pattern: "push-through-depletion",
        },
      },
    ],
  },
  {
    id: "end-of-day-uncertainty",
    step: 7,
    label: "End-of-day uncertainty",
    title: "End-of-day uncertainty",
    prompt: "You still have unresolved tasks and one important decision left.",
    hint: "Late-day decisions often reveal whether the real issue is uncertainty, fatigue, or the sheer cost of one more unresolved thing.",
    choices: [
      {
        id: "decide-now",
        marker: "A",
        label: "I decide now, even if tired",
        impact: {
          clarity: -6,
          confidence: -1,
          cognitiveLoad: 8,
          choiceFriction: 5,
          drivers: { "low-energy": 2, "unresolved-tasks": 1 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "close-day-revisit",
        marker: "B",
        label: "I close the day and revisit with a fresh mind",
        impact: {
          clarity: 4,
          confidence: 4,
          cognitiveLoad: -4,
          choiceFriction: -3,
          drivers: { "low-energy": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "keep-circling",
        marker: "C",
        label: "I keep circling it without resolving",
        impact: {
          clarity: -10,
          confidence: -5,
          cognitiveLoad: 9,
          choiceFriction: 12,
          drivers: { uncertainty: 2, "unresolved-tasks": 2 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "seek-more-information",
        marker: "D",
        label: "I seek more information before ending",
        impact: {
          clarity: -5,
          confidence: -2,
          cognitiveLoad: 6,
          choiceFriction: 10,
          drivers: { uncertainty: 3 },
          pattern: "certainty-seeking",
        },
      },
    ],
  },
  {
    id: "stakeholder-conflict",
    step: 8,
    label: "Stakeholder conflict",
    title: "Stakeholder conflict",
    prompt: "Two people whose input matters want different outcomes, and you need to choose a direction without full alignment.",
    hint: "This scenario tracks what happens when choice strain comes from social conflict, not only from complexity.",
    choices: [
      {
        id: "keep-everyone-happy",
        marker: "A",
        label: "I try to keep both sides happy before deciding",
        impact: {
          clarity: -9,
          confidence: -4,
          cognitiveLoad: 10,
          choiceFriction: 10,
          drivers: { uncertainty: 1, "repeated-choices": 1, "emotional-carryover": 1 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "name-criteria-and-choose",
        marker: "B",
        label: "I name the criteria and choose a direction",
        impact: {
          clarity: 3,
          confidence: 4,
          cognitiveLoad: 3,
          choiceFriction: -2,
          drivers: { uncertainty: 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "seek-more-input-first",
        marker: "C",
        label: "I seek more input before choosing",
        impact: {
          clarity: -5,
          confidence: -2,
          cognitiveLoad: 8,
          choiceFriction: 8,
          drivers: { uncertainty: 2, "repeated-choices": 1 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "defer-because-tension",
        marker: "D",
        label: "I defer because the tension makes the decision heavier",
        impact: {
          clarity: -10,
          confidence: -6,
          cognitiveLoad: 7,
          choiceFriction: 12,
          drivers: { uncertainty: 2, "emotional-carryover": 2 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "criteria-blur",
    step: 9,
    label: "Criteria blur",
    title: "Criteria blur",
    prompt: "Several options are acceptable, but you have not decided what matters most in the choice.",
    hint: "A surprising amount of decision fatigue comes from unclear decision criteria rather than from too many bad options.",
    choices: [
      {
        id: "compare-everything",
        marker: "A",
        label: "I keep comparing everything against everything",
        impact: {
          clarity: -8,
          confidence: -3,
          cognitiveLoad: 10,
          choiceFriction: 11,
          drivers: { uncertainty: 3 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "set-three-criteria",
        marker: "B",
        label: "I set a few criteria and choose from there",
        impact: {
          clarity: 4,
          confidence: 4,
          cognitiveLoad: 2,
          choiceFriction: -4,
          drivers: { uncertainty: 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "wait-until-obvious",
        marker: "C",
        label: "I wait until one option feels obviously right",
        impact: {
          clarity: -9,
          confidence: -5,
          cognitiveLoad: 7,
          choiceFriction: 12,
          drivers: { uncertainty: 3, "unresolved-tasks": 1 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "choose-fast-to-end",
        marker: "D",
        label: "I choose quickly just to end the friction",
        impact: {
          clarity: -5,
          confidence: -6,
          cognitiveLoad: 5,
          choiceFriction: 4,
          drivers: { "low-energy": 1, uncertainty: 1 },
          pattern: "push-through-depletion",
        },
      },
    ],
  },
  {
    id: "rapid-follow-up-choice",
    step: 10,
    label: "Rapid follow-up choice",
    title: "Rapid follow-up choice",
    prompt: "You just made one important call, and another decision arrives before the first one has mentally settled.",
    hint: "This scenario captures what repeated back-to-back decisions do to clarity even when each one is manageable on its own.",
    choices: [
      {
        id: "decide-immediately-again",
        marker: "A",
        label: "I decide immediately again",
        impact: {
          clarity: -6,
          confidence: -2,
          cognitiveLoad: 9,
          choiceFriction: 4,
          drivers: { "repeated-choices": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "pause-reset-then-decide",
        marker: "B",
        label: "I pause briefly, reset, then decide",
        impact: {
          clarity: 2,
          confidence: 2,
          cognitiveLoad: 2,
          choiceFriction: -2,
          drivers: { "repeated-choices": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "feel-blurry-and-delay",
        marker: "C",
        label: "I feel blurrier and delay it",
        impact: {
          clarity: -9,
          confidence: -5,
          cognitiveLoad: 8,
          choiceFriction: 9,
          drivers: { "repeated-choices": 2, "unresolved-tasks": 1 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "seek-confirmation-first",
        marker: "D",
        label: "I seek confirmation before deciding again",
        impact: {
          clarity: -6,
          confidence: -3,
          cognitiveLoad: 7,
          choiceFriction: 10,
          drivers: { uncertainty: 2, "repeated-choices": 1 },
          pattern: "certainty-seeking",
        },
      },
    ],
  },
  {
    id: "visibility-pressure",
    step: 11,
    label: "Visibility pressure",
    title: "Visibility pressure",
    prompt: "The decision will be visible to other people, so it suddenly feels more high-stakes than the content alone would suggest.",
    hint: "This scenario measures what public visibility does to confidence and certainty demands.",
    choices: [
      {
        id: "polish-longer-before-choosing",
        marker: "A",
        label: "I keep polishing before choosing",
        impact: {
          clarity: -7,
          confidence: -4,
          cognitiveLoad: 8,
          choiceFriction: 10,
          drivers: { uncertainty: 2, "emotional-carryover": 1 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "choose-and-stand-behind-it",
        marker: "B",
        label: "I choose and stand behind it",
        impact: {
          clarity: 3,
          confidence: 5,
          cognitiveLoad: 3,
          choiceFriction: -2,
          drivers: { uncertainty: 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "second-guess-because-visible",
        marker: "C",
        label: "I second-guess more because it is visible",
        impact: {
          clarity: -8,
          confidence: -7,
          cognitiveLoad: 7,
          choiceFriction: 10,
          drivers: { uncertainty: 2, "emotional-carryover": 2 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "choose-fast-to-end-exposure",
        marker: "D",
        label: "I choose fast just to end the exposure",
        impact: {
          clarity: -5,
          confidence: -5,
          cognitiveLoad: 5,
          choiceFriction: 5,
          drivers: { "low-energy": 1, "emotional-carryover": 1 },
          pattern: "push-through-depletion",
        },
      },
    ],
  },
  {
    id: "delegation-decision",
    step: 12,
    label: "Delegation decision",
    title: "Delegation decision",
    prompt: "You need to decide whether to hand something off or keep carrying it yourself.",
    hint: "Delegation decisions often look practical, but they also surface trust, standards, and cognitive load issues.",
    choices: [
      {
        id: "keep-it-myself",
        marker: "A",
        label: "I keep it myself to avoid uncertainty",
        impact: {
          clarity: -5,
          confidence: -1,
          cognitiveLoad: 10,
          choiceFriction: 6,
          drivers: { "unresolved-tasks": 1, uncertainty: 2 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "delegate-with-clear-criteria",
        marker: "B",
        label: "I delegate with clear criteria",
        impact: {
          clarity: 3,
          confidence: 3,
          cognitiveLoad: -1,
          choiceFriction: -2,
          drivers: { "repeated-choices": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "delay-delegating",
        marker: "C",
        label: "I delay because I am unsure how to hand it off cleanly",
        impact: {
          clarity: -8,
          confidence: -4,
          cognitiveLoad: 8,
          choiceFriction: 9,
          drivers: { uncertainty: 2, "unresolved-tasks": 2 },
          pattern: "delay-and-drift",
        },
      },
      {
        id: "micro-manage-delegation",
        marker: "D",
        label: "I delegate, but keep mentally carrying it",
        impact: {
          clarity: -6,
          confidence: -3,
          cognitiveLoad: 9,
          choiceFriction: 7,
          drivers: { uncertainty: 2, "repeated-choices": 1 },
          pattern: "overload-and-collapse",
        },
      },
    ],
  },
  {
    id: "late-day-tradeoff",
    step: 13,
    label: "Late-day tradeoff",
    title: "Late-day tradeoff",
    prompt: "Late in the day, you have to choose between finishing one more thing and protecting recovery for tomorrow.",
    hint: "This is where decision fatigue often reveals whether the pattern pushes through, defers wisely, or keeps everything mentally open.",
    choices: [
      {
        id: "push-and-finish",
        marker: "A",
        label: "I push and finish it anyway",
        impact: {
          clarity: -7,
          confidence: -1,
          cognitiveLoad: 9,
          choiceFriction: 4,
          drivers: { "low-energy": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "protect-recovery-and-close-loop",
        marker: "B",
        label: "I protect recovery and clearly park it",
        impact: {
          clarity: 3,
          confidence: 3,
          cognitiveLoad: -1,
          choiceFriction: -2,
          drivers: { "low-energy": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "half-decide-and-carry-it-home",
        marker: "C",
        label: "I half-decide and keep carrying it home mentally",
        impact: {
          clarity: -10,
          confidence: -5,
          cognitiveLoad: 9,
          choiceFriction: 10,
          drivers: { "low-energy": 2, "unresolved-tasks": 2 },
          pattern: "overload-and-collapse",
        },
      },
      {
        id: "keep-revisiting-tradeoff",
        marker: "D",
        label: "I keep revisiting the tradeoff instead of closing it",
        impact: {
          clarity: -8,
          confidence: -4,
          cognitiveLoad: 8,
          choiceFriction: 11,
          drivers: { uncertainty: 2, "unresolved-tasks": 2 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "unfinished-loop-return",
    step: 14,
    label: "Unfinished loop return",
    title: "Unfinished loop return",
    prompt: "An earlier unresolved decision comes back while you are already trying to wrap the day up.",
    hint: "This catches the hidden cost of decisions that were never fully closed the first time.",
    choices: [
      {
        id: "reopen-and-solve-now",
        marker: "A",
        label: "I reopen it and try to solve it now",
        impact: {
          clarity: -7,
          confidence: -2,
          cognitiveLoad: 10,
          choiceFriction: 7,
          drivers: { "unresolved-tasks": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "schedule-and-close-loop",
        marker: "B",
        label: "I schedule it clearly and close the loop for today",
        impact: {
          clarity: 2,
          confidence: 3,
          cognitiveLoad: 1,
          choiceFriction: -3,
          drivers: { "unresolved-tasks": 1 },
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "spiral-back-into-it",
        marker: "C",
        label: "I spiral back into it mentally",
        impact: {
          clarity: -11,
          confidence: -6,
          cognitiveLoad: 10,
          choiceFriction: 11,
          drivers: { uncertainty: 2, "unresolved-tasks": 3 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "avoid-and-leave-open",
        marker: "D",
        label: "I avoid it and leave it open again",
        impact: {
          clarity: -9,
          confidence: -5,
          cognitiveLoad: 8,
          choiceFriction: 12,
          drivers: { "unresolved-tasks": 3, uncertainty: 1 },
          pattern: "delay-and-drift",
        },
      },
    ],
  },
  {
    id: "self-reflection",
    step: 15,
    label: "Self-reflection",
    title: "Self-reflection",
    prompt: "Thinking back on recent patterns, which feels most true?",
    hint: "Use this last choice to anchor the simulation in how the pattern actually feels from the inside.",
    choices: [
      {
        id: "clarity-holds-up",
        marker: "A",
        label: "My clarity holds up fairly well across the day",
        impact: {
          clarity: 4,
          confidence: 4,
          cognitiveLoad: -2,
          choiceFriction: -4,
          drivers: {},
          pattern: "stable-under-pressure",
        },
      },
      {
        id: "choices-wear-down",
        marker: "B",
        label: "Too many choices gradually wear me down",
        impact: {
          clarity: -5,
          confidence: -2,
          cognitiveLoad: 8,
          choiceFriction: 5,
          drivers: { "repeated-choices": 3 },
          pattern: "push-through-depletion",
        },
      },
      {
        id: "uncertainty-drains-confidence",
        marker: "C",
        label: "Uncertainty drains my confidence faster than the task itself",
        impact: {
          clarity: -7,
          confidence: -7,
          cognitiveLoad: 6,
          choiceFriction: 11,
          drivers: { uncertainty: 3 },
          pattern: "certainty-seeking",
        },
      },
      {
        id: "mentally-saturated",
        marker: "D",
        label: "I often end up mentally saturated and indecisive",
        impact: {
          clarity: -12,
          confidence: -9,
          cognitiveLoad: 10,
          choiceFriction: 10,
          drivers: { "repeated-choices": 1, "unresolved-tasks": 2 },
          pattern: "overload-and-collapse",
        },
      },
    ],
  },
];

export const relatedDecisionTools: RelatedDecisionTool[] = [
  {
    title: "Focus Friction Audit",
    description: "See whether what feels like weak follow-through is actually a focus system with too much drag at the starting line.",
    category: "Focus & Procrastination",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "focus-friction-audit", categorySlug: "focus-procrastination" }),
  },
  {
    title: "Burnout Risk Audit",
    description: "Check whether decision heaviness is being amplified by recovery debt, depletion, or emotional wear across the week.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Overthinking Loop Check",
    description: "Separate useful reflection from looping thought so you can see whether certainty-seeking is keeping decisions open too long.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "overthinking-loop-check", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Life Balance Visualizer",
    description: "Spot whether imbalance across work, rest, and maintenance is the hidden reason decisions feel expensive by late day.",
    category: "Life Balance & Habits",
    minutes: "6 min",
    icon: "structure",
    href: buildToolHref({ slug: "life-balance-visualizer", categorySlug: "life-balance-habits" }),
  },
];

export const decisionFaqItems: FaqItem[] = [
  {
    question: "What does a decision fatigue score actually mean?",
    answer:
      "It is a directional estimate of how much clarity, confidence, and usable judgment are being taxed by repeated choices, uncertainty, and mental load. A higher score means the decision environment is carrying more strain, not that you have been diagnosed with anything.",
  },
  {
    question: "Is decision fatigue the same as stress?",
    answer:
      "Not exactly. Stress can contribute to decision fatigue, but decision fatigue is more specific to what happens when repeated choices, ambiguity, and reduced recovery begin degrading clarity over time.",
  },
  {
    question: "Why do small decisions feel harder later in the day?",
    answer:
      "Because the brain is rarely meeting those choices fresh. Earlier choices, unfinished tasks, low energy, and open uncertainty all reduce the margin available for later judgment.",
  },
  {
    question: "How does uncertainty increase decision strain?",
    answer:
      "Uncertainty invites more checking, more comparison, more hesitation, and more desire for reassurance. Even when the decision is manageable, uncertainty makes it feel less settled.",
  },
  {
    question: "Can low sleep make decision fatigue worse?",
    answer:
      "Yes. Low recovery tends to reduce patience for ambiguity, weaken impulse control, and make even ordinary tradeoffs feel more mentally expensive.",
  },
  {
    question: "How often should I run this simulator?",
    answer:
      "Every couple of weeks is enough for most people, especially if workload, sleep, or role demands have changed. The most useful comparison is whether the same drivers keep showing up, not just whether the number shifts slightly.",
  },
  {
    question: "What should I do if my clarity feels depleted most days?",
    answer:
      "Treat it as an environment and load problem first. Reduce avoidable choices, batch small decisions, defer low-value judgments, and protect recovery so important decisions are not being made on an already saturated system.",
  },
  {
    question: "Why do I make worse choices after a long day even when the decisions are small?",
    answer:
      "Because the later decision is arriving on top of everything already held in working memory. Small choices feel larger when clarity, confidence, and tolerance for ambiguity have already been taxed for hours.",
  },
  {
    question: "What usually recovers first when decision load drops?",
    answer:
      "People often notice less hesitation and less need to keep checking first. Clarity tends to rebound before full confidence does, especially if low sleep or emotional carryover were also part of the strain.",
  },
  {
    question: "Should I avoid all decisions when my score is high?",
    answer:
      "No. The aim is to protect important decisions and reduce avoidable ones. Simplifying low-value choices, batching admin, and delaying nonessential calls usually helps more than trying to stop deciding altogether.",
  },
];

export const decisionStoryBlock = {
  eyebrow: "How this often feels",
  title: "By the end of the day, even ordinary choices can feel strangely heavier than they should.",
  quote:
    "By later in the day, even ordinary choices can start feeling heavier than they should. It is not that the person forgets how to decide. It is that every option lands like one more thing the brain has to carry when it already feels full. The mental shelf is not empty anymore, so simple choices start feeling crowded.",
  takeaway:
    "That is the lived texture of decision fatigue. The later choices are not meeting a fresh mind. They are landing on top of repeated micro-decisions, unresolved tasks, and lower tolerance for ambiguity.",
  toneLabel: "Common pattern",
  accent: "#F6C177",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What decision fatigue actually is",
    paragraphs: [
      "Decision fatigue is what happens when the conditions around judgment become heavier than they look from the outside. It is not only about making one big decision. It is about what repeated choices, unresolved tasks, uncertainty, interruptions, and low recovery do to clarity over time. The brain does not meet each decision as if it were new. It carries forward the cost of what has already been processed, deferred, resisted, or kept mentally open.",
      "That is why people often feel confused by their own pattern. Early in the day they can think clearly, choose well, and tolerate ambiguity. Later, even small decisions can feel strangely expensive. The issue is not always that the person suddenly became irrational. It is often that the margin around good judgment has thinned. Once the system is carrying enough mental load, the next decision arrives on top of all the previous ones rather than in isolation.",
      "A simulator is useful because it shows the pattern as a sequence instead of a trait. That matters. Decision fatigue usually feels personal when you are inside it. It sounds like indecision, weakness, or inconsistency. But when you see how clarity changes across realistic situations, the pattern becomes easier to understand. The payoff is often relief: the problem may be less about who you are and more about how much your cognitive environment is already asking you to hold.",
    ],
  },
  {
    title: "Why even small choices feel heavier under load",
    paragraphs: [
      "Small decisions are rarely only small decisions. Under load, each one sits inside a larger context: unfinished work, background worry, accumulated messages, previous tradeoffs, and the energy cost of staying mentally organized. The choice itself might be simple, but the system making it is not empty. That is why choosing a time, replying to a message, picking the next task, or deciding whether to defer something can suddenly feel disproportionate to its actual size.",
      "When mental load is high, the brain becomes less tolerant of open variables. It wants more certainty, faster closure, or less complexity. This can push people toward over-researching, reassurance seeking, deferring choices, or making lower-quality decisions simply to reduce the pressure of having one more thing unresolved. The behavior may look inefficient from the outside, but internally it often feels like a reasonable attempt to preserve energy in an already crowded system.",
      "This is also why decision fatigue is easy to misread. People say they are bad at deciding when the deeper issue is that too many decisions are being made under conditions that degrade judgment. The answer is not always more effort. Often it is cleaner decision conditions, fewer unnecessary choices, better timing, and less cognitive spillover from everything else the day is asking the brain to manage.",
    ],
  },
  {
    title: "How uncertainty changes decision quality",
    paragraphs: [
      "Uncertainty changes decisions by changing the emotional cost of making them. When the outcome feels unclear, the mind often starts treating the decision as if it needs more information, more checking, or more internal certainty before action becomes acceptable. This does not only slow decisions down. It also consumes clarity, because judgment gets tied up in monitoring risk instead of moving forward with the best available option.",
      "In practical terms, uncertainty often produces more cognitive drag than the size of the choice itself. A moderately important decision can feel very heavy when the person believes they should not commit until the right answer feels obvious. That expectation creates friction. The brain keeps looping for a level of certainty that real life rarely offers, especially under time pressure, fatigue, or emotional spillover.",
      "The result is that decision quality can worsen even while effort increases. You can think longer and still feel less clear. That is one reason decision fatigue often overlaps with hesitation, reassurance seeking, or leaving choices open. The system is not refusing to choose. It is trying to protect itself from the discomfort of uncertainty, but that protection strategy can quietly make judgment weaker and more expensive over the course of the day.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "clarityStability" as DecisionDimensionKey,
    paragraphs: [
      "Clarity stability is about how well usable judgment holds up across the sequence of a day. Some people still make good decisions under pressure because clarity remains fairly steady, even when the day gets noisy. Others notice that once a few choices stack up, the signal becomes blurrier. They can still think, but the cost of thinking clearly rises.",
      "This dimension matters because decision fatigue is not only about the final decision. It is about whether the mind still has enough steadiness left to evaluate options without becoming scattered, vague, or emotionally tilted by the surrounding load.",
    ],
  },
  {
    key: "cognitiveLoadAccumulation" as DecisionDimensionKey,
    paragraphs: [
      "Cognitive load accumulation captures what repeated demands do over time. A single choice may not be the issue. The strain appears because dozens of small judgments, unfinished items, and interruptions never fully leave the system. Each one takes a little more space than it seems to in the moment.",
      "When this dimension rises, later decisions become more expensive because the system is already crowded. The person may still be capable of deciding, but less capacity is available for sorting tradeoffs cleanly or holding multiple variables at once.",
    ],
  },
  {
    key: "uncertaintyFriction" as DecisionDimensionKey,
    paragraphs: [
      "Uncertainty friction reflects how strongly ambiguity, incomplete information, or fear of choosing wrong slow the decision process down. It is not the same as careful thinking. It is the additional drag created when the system feels it should have more certainty than the moment can realistically provide.",
      "This dimension matters because uncertainty often extends decisions far beyond the point where more thinking is useful. The decision becomes heavier not because it is impossible, but because the mind keeps trying to reduce the discomfort of acting without perfect clarity.",
    ],
  },
  {
    key: "confidenceErosion" as DecisionDimensionKey,
    paragraphs: [
      "Confidence erosion captures what happens when trust in your own judgment starts thinning. That drop can be subtle. You may still know what the sensible move is, but feel less able to stand behind it, especially later in the day or when emotional carryover is present.",
      "This matters because weak decision confidence can turn ordinary choices into prolonged negotiations with yourself. Once self-trust falls, the system often seeks more reassurance, more time, or more certainty before acting.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Too many micro-decisions",
    body:
      "Repeated small judgments consume more clarity than people expect. Each message, task order, timing choice, and response decision draws on the same general decision system, even if none of them feels especially important on its own.",
  },
  {
    title: "Unresolved tasks and information overload",
    body:
      "Open loops keep competing for attention, while too much information makes closure harder. Together they create a state where decisions stay mentally expensive because the system never feels settled enough to move cleanly.",
  },
  {
    title: "Low recovery and pressure to choose perfectly",
    body:
      "When recovery is weak, the brain has less patience for ambiguity. Add the belief that every decision should be the right one, and even manageable choices start feeling heavier than they need to.",
  },
  {
    title: "Emotional carryover",
    body:
      "Personal concerns, tension, and unprocessed emotion can quietly sit underneath practical decisions. That background load makes it harder to access calm, confident judgment even when the decision itself is not unusually complex.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Simplifying decision conditions",
    body:
      "Clearer criteria, fewer live options, and stronger timing boundaries reduce the amount of mental negotiation required before action. Cleaner decision conditions preserve clarity better than raw willpower does.",
  },
  {
    title: "Deferring low-value choices and batching",
    body:
      "Not every decision deserves live attention. Batching smaller choices and postponing nonessential ones helps save high-quality judgment for the moments where it actually matters.",
  },
  {
    title: "Accepting good-enough clarity",
    body:
      "A large share of decision strain comes from wanting more certainty than the moment can provide. Choosing with enough clarity, rather than waiting for perfect certainty, reduces unnecessary friction.",
  },
  {
    title: "Protecting recovery and interrupting loops",
    body:
      "Rest, sleep repair, and deliberate mental offloading all matter because they reset the system that makes decisions. Reducing uncertainty loops and emotional carryover can restore clarity faster than endlessly thinking harder.",
  },
];

export const nextStepParagraphs = [
  "If your score is elevated, the most useful next move is not trying to become someone who can tolerate infinite choice. It is reducing the number of moments where your brain has to make decisions under poor conditions. That might mean batching routine choices, writing clearer criteria before the day starts, or moving important decisions earlier when clarity is less taxed.",
  "Look at the primary fatigue driver first. If uncertainty is driving the result, the repair may be stronger decision criteria or a willingness to choose with good-enough clarity. If repeated choices are the driver, reduce live decision volume. If low energy or emotional carryover are dominant, the decision problem may partly be a recovery and regulation problem.",
  "If the result feels severe, treat it as a design signal rather than a moral judgment. The goal is not to force perfect judgment out of an overloaded system. It is to lower the load around decision-making so clarity stops getting spent before the important calls even arrive.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Decision Fatigue Recovery Kit",
  description:
    "A structured guide for reducing choice overload, protecting clarity, and rebuilding steadier decision-making under mental pressure.",
  buttonLabel: "View Next Step",
};

export function getInitialDecisionAnswers(): SimulatorAnswers {
  return {
    "morning-overload": undefined,
    "midday-interruption": undefined,
    "choice-overload": undefined,
    "low-energy-decision-point": undefined,
    "emotional-carryover": undefined,
    "repeated-micro-decisions": undefined,
    "end-of-day-uncertainty": undefined,
    "stakeholder-conflict": undefined,
    "criteria-blur": undefined,
    "rapid-follow-up-choice": undefined,
    "visibility-pressure": undefined,
    "delegation-decision": undefined,
    "late-day-tradeoff": undefined,
    "unfinished-loop-return": undefined,
    "self-reflection": undefined,
  };
}

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getBand(score: number) {
  return decisionBands.find((band) => score >= band.min && score <= band.max) ?? decisionBands[0];
}

function getPattern(key: DecisionPatternKey) {
  return decisionPatterns.find((pattern) => pattern.key === key) ?? decisionPatterns[0];
}

function getDriver(key: FatigueDriverKey) {
  return fatigueDrivers.find((driver) => driver.key === key) ?? fatigueDrivers[0];
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function weightedAverage(values: Array<{ value: number; weight: number }>) {
  const totalWeight = values.reduce((sum, item) => sum + item.weight, 0);

  if (!totalWeight) {
    return 0;
  }

  const weightedTotal = values.reduce((sum, item) => sum + item.value * item.weight, 0);
  return clampScore(weightedTotal / totalWeight);
}

function getScenarioChoice(scenario: SimulatorScenario, choiceId: string | undefined) {
  if (!choiceId) {
    return undefined;
  }

  return scenario.choices.find((choice) => choice.id === choiceId);
}

function getImpactTone(clarityDrop: number, loadIncrease: number, frictionIncrease: number) {
  const intensity = clarityDrop + loadIncrease * 0.7 + frictionIncrease * 0.4;

  if (intensity >= 16) {
    return "heavy" as const;
  }

  if (intensity >= 7) {
    return "mixed" as const;
  }

  return "steady" as const;
}

export function isDecisionScenarioComplete(scenario: SimulatorScenario, answers: SimulatorAnswers) {
  return Boolean(answers[scenario.id]);
}

export function calculateDecisionFatigueSimulation(answers: SimulatorAnswers): DecisionSimulatorResult {
  let clarity = 86;
  let confidence = 82;
  let cognitiveLoad = 18;
  let choiceFriction = 14;
  const snapshots: SimulationSnapshot[] = [];
  const patternCounts = decisionPatterns.reduce<Record<DecisionPatternKey, number>>(
    (accumulator, pattern) => ({ ...accumulator, [pattern.key]: 0 }),
    {
      "certainty-seeking": 0,
      "delay-and-drift": 0,
      "overload-and-collapse": 0,
      "push-through-depletion": 0,
      "stable-under-pressure": 0,
    },
  );
  const driverCounts = fatigueDrivers.reduce<Record<FatigueDriverKey, number>>(
    (accumulator, driver) => ({ ...accumulator, [driver.key]: 0 }),
    {
      "repeated-choices": 0,
      uncertainty: 0,
      "low-energy": 0,
      "emotional-carryover": 0,
      "unresolved-tasks": 0,
    },
  );

  for (const scenario of simulatorScenarios) {
    const choice = getScenarioChoice(scenario, answers[scenario.id]);

    if (!choice) {
      continue;
    }

    const previousClarity = clarity;
    const previousConfidence = confidence;
    const previousLoad = cognitiveLoad;
    const previousFriction = choiceFriction;
    const loadPressure = Math.max(0, previousLoad - 36) * 0.08;
    const frictionPressure = Math.max(0, previousFriction - 32) * 0.06;
    const confidencePressure = Math.max(0, previousFriction - 40) * 0.035;

    clarity = clampScore(previousClarity + choice.impact.clarity - loadPressure - frictionPressure);
    confidence = clampScore(previousConfidence + choice.impact.confidence - confidencePressure);
    cognitiveLoad = clampScore(previousLoad + choice.impact.cognitiveLoad + Math.max(0, (100 - previousClarity) * 0.04));
    choiceFriction = clampScore(previousFriction + choice.impact.choiceFriction + Math.max(0, (previousLoad - 54) * 0.03));

    patternCounts[choice.impact.pattern] += 1.2;

    for (const [key, value] of Object.entries(choice.impact.drivers) as Array<[FatigueDriverKey, number]>) {
      driverCounts[key] += value;
    }

    const clarityDrop = Math.max(0, previousClarity - clarity);
    const confidenceDrop = Math.max(0, previousConfidence - confidence);
    const loadIncrease = Math.max(0, cognitiveLoad - previousLoad);
    const frictionIncrease = Math.max(0, choiceFriction - previousFriction);

    snapshots.push({
      scenarioId: scenario.id,
      scenarioLabel: scenario.label,
      scenarioTitle: scenario.title,
      choiceId: choice.id,
      choiceMarker: choice.marker,
      choiceLabel: choice.label,
      pattern: choice.impact.pattern,
      clarity,
      confidence,
      cognitiveLoad,
      choiceFriction,
      clarityDrop,
      confidenceDrop,
      loadIncrease,
      frictionIncrease,
      tone: getImpactTone(clarityDrop, loadIncrease, frictionIncrease),
    });
  }

  const answeredCount = snapshots.length;
  const completionRatio = answeredCount / simulatorScenarios.length;
  const clarityValues = snapshots.map((snapshot) => snapshot.clarity);
  const confidenceValues = snapshots.map((snapshot) => snapshot.confidence);
  const loadValues = snapshots.map((snapshot) => snapshot.cognitiveLoad);
  const frictionValues = snapshots.map((snapshot) => snapshot.choiceFriction);
  const largestClarityDrop = Math.max(0, ...snapshots.map((snapshot) => snapshot.clarityDrop));
  const averageClarity = answeredCount ? average(clarityValues) : 86;
  const averageConfidence = answeredCount ? average(confidenceValues) : 82;
  const averageLoad = answeredCount ? average(loadValues) : 18;
  const averageFriction = answeredCount ? average(frictionValues) : 14;
  const patternKey =
    Object.entries(patternCounts).sort((left, right) => right[1] - left[1])[0]?.[0] as DecisionPatternKey | undefined;
  const patternLabel = getPattern(patternKey ?? "stable-under-pressure");
  const certaintyBias = patternLabel.key === "certainty-seeking" ? 8 : patternLabel.key === "delay-and-drift" ? 6 : 0;

  const dimensions: Record<DecisionDimensionKey, number> = {
    clarityStability: clampScore((100 - averageClarity) * 0.58 + (100 - clarity) * 0.24 + largestClarityDrop * 1.85),
    cognitiveLoadAccumulation: clampScore(averageLoad * 0.42 + cognitiveLoad * 0.58),
    uncertaintyFriction: clampScore(averageFriction * 0.34 + choiceFriction * 0.26 + driverCounts.uncertainty * 5 + certaintyBias),
    confidenceErosion: clampScore((100 - averageConfidence) * 0.42 + (100 - confidence) * 0.58),
  };

  const score = weightedAverage([
    { value: dimensions.clarityStability, weight: 28 },
    { value: dimensions.cognitiveLoadAccumulation, weight: 27 },
    { value: dimensions.uncertaintyFriction, weight: 23 },
    { value: dimensions.confidenceErosion, weight: 22 },
  ]);
  const band = getBand(score);
  const driverTotals = fatigueDrivers
    .map((driver) => ({
      ...driver,
      value: clampScore(
        driver.key === "repeated-choices"
          ? driverCounts[driver.key] * 12 + averageLoad * 0.1
          : driver.key === "uncertainty"
            ? driverCounts[driver.key] * 13 + averageFriction * 0.12
            : driver.key === "low-energy"
              ? driverCounts[driver.key] * 14 + Math.max(0, cognitiveLoad - clarity) * 0.08
              : driver.key === "emotional-carryover"
                ? driverCounts[driver.key] * 14 + Math.max(0, 82 - confidence) * 0.1
                : driverCounts[driver.key] * 12 + Math.max(0, 100 - clarity) * 0.09,
      ),
    }))
    .sort((left, right) => right.value - left.value);
  const primaryDriver = getDriver(driverTotals[0]?.key ?? "repeated-choices");
  const secondaryDriver = getDriver(driverTotals[1]?.key ?? "uncertainty");
  const largestDropSnapshot =
    [...snapshots].sort((left, right) => right.clarityDrop - left.clarityDrop)[0];

  const signalLabel = `Your decision strain appears to build less from the size of choices and more from ${primaryDriver.label.toLowerCase()}, ${secondaryDriver.label.toLowerCase()}, and end-of-day cognitive saturation.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The strongest fatigue driver in this run is ${primaryDriver.label.toLowerCase()}, while the branch pattern reads most like ${patternLabel.title}.`;
  const clarityDropInsight = largestDropSnapshot
    ? `${band.clarityLead} In this run, clarity dropped most around ${largestDropSnapshot.scenarioLabel.toLowerCase()} when you chose "${largestDropSnapshot.choiceLabel.toLowerCase()}".`
    : `${band.clarityLead} The current preview is still partial, so the drop pattern will sharpen as more scenarios are answered.`;

  return {
    score,
    band,
    completionRatio,
    isComplete: answeredCount === simulatorScenarios.length,
    dimensions,
    currentState: {
      clarity,
      confidence,
      cognitiveLoad,
      choiceFriction,
    },
    snapshots,
    patternLabel,
    driverTotals,
    primaryDriver,
    secondaryDriver,
    signalLabel,
    interpretation,
    standout,
    clarityDropInsight,
  };
}

export const heroPreviewResult = calculateDecisionFatigueSimulation({
  ...getInitialDecisionAnswers(),
  "morning-overload": "think-through-all",
  "midday-interruption": "handle-both",
  "choice-overload": "research-longer",
  "low-energy-decision-point": "fast-choices-to-clear",
  "emotional-carryover": "revisit-concern",
  "repeated-micro-decisions": "feel-scattered",
  "end-of-day-uncertainty": "seek-more-information",
  "stakeholder-conflict": "defer-because-tension",
  "criteria-blur": "compare-everything",
  "rapid-follow-up-choice": "feel-blurry-and-delay",
  "visibility-pressure": "second-guess-because-visible",
  "delegation-decision": "micro-manage-delegation",
  "late-day-tradeoff": "half-decide-and-carry-it-home",
  "unfinished-loop-return": "spiral-back-into-it",
  "self-reflection": "choices-wear-down",
});
