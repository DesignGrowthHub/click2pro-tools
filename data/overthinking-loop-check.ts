import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type FirstLoopValue = "brief-move-on" | "revisit-few-times" | "replay-repeatedly" | "mentally-stuck";
export type ReplayFrequencyValue = "never" | "rarely" | "sometimes" | "often" | "very-often";
export type LoopReturnValue = "rarely-returns" | "sometimes-returns" | "often-returns" | "keeps-coming-back";
export type LoopTriggerValue =
  | "decisions"
  | "relationships"
  | "future-risks"
  | "mistakes"
  | "work-tasks"
  | "health-worries"
  | "social-perception"
  | "conflict"
  | "unfinished-tasks";
export type LoopNarrativeValue = "handled-right" | "what-if" | "need-clarity" | "should-have-done-differently";
export type LoopResponseValue = "wait" | "seek-reassurance" | "research-more" | "revisit-thought" | "avoid-acting";
export type RankItemKey =
  | "certainty-before-moving"
  | "replay-long-after"
  | "second-guess-myself"
  | "struggle-unresolved"
  | "keep-thinking-stops-helping";
export type FinalPatternValue = "regain-clarity" | "repetitive-under-stress" | "circle-thoughts" | "stuck-heavy-hard-to-interrupt";
export type TimeLossValue = "brief" | "noticeable" | "large-chunks" | "merges-into-the-day";

export type OverthinkingBandKey =
  | "reflective-but-clear"
  | "mild-cognitive-looping"
  | "repetitive-processing-pattern"
  | "high-rumination-drag"
  | "decision-locked-mental-loop";

export type OverthinkingZoneKey =
  | "clear-reflection"
  | "repetitive-review"
  | "rumination-drag"
  | "decision-lock";

export type OverthinkingDimensionKey =
  | "repetitionLoad"
  | "decisionDrag"
  | "uncertaintyPull"
  | "mentalExhaustionSpillover";

export type TriggerClusterKey =
  | "relational"
  | "future-uncertainty"
  | "self-evaluation"
  | "unfinished-task-load"
  | "conflict-risk";

export type OverthinkingAnswers = {
  firstLoop?: FirstLoopValue;
  replayFrequency?: ReplayFrequencyValue;
  uncertaintySpiral?: number;
  triggerSelections: LoopTriggerValue[];
  narrativeType?: LoopNarrativeValue;
  actionDelay?: number;
  responsePattern?: LoopResponseValue;
  sleepImpact?: number;
  focusImpact?: number;
  energyImpact?: number;
  loopReturn?: LoopReturnValue;
  interruptDifficulty?: number;
  reassuranceChecking?: number;
  bodyActivation?: number;
  timeLoss?: TimeLossValue;
  rankingOrder: RankItemKey[];
  rankingConfirmed: boolean;
  finalPattern?: FinalPatternValue;
};

export type LoopChoiceOption = {
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
  field: "firstLoop" | "narrativeType" | "responsePattern" | "finalPattern";
  options: LoopChoiceOption[];
};

export type SegmentedStep = BaseStep & {
  kind: "segmented";
  field: "replayFrequency" | "loopReturn" | "timeLoss";
  options: LoopChoiceOption[];
};

export type SliderStep = BaseStep & {
  kind: "slider";
  field: "uncertaintySpiral" | "actionDelay" | "interruptDifficulty" | "reassuranceChecking" | "bodyActivation";
  minLabel: string;
  maxLabel: string;
  label: string;
};

export type MultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "triggerSelections";
  limit: number;
  options: LoopChoiceOption[];
};

export type TripleSliderStep = BaseStep & {
  kind: "triple-slider";
  fields: Array<{
    key: "sleepImpact" | "focusImpact" | "energyImpact";
    label: string;
    minLabel: string;
    maxLabel: string;
  }>;
};

export type DragRankStep = BaseStep & {
  kind: "drag-rank";
  field: "rankingOrder";
  items: Array<{
    key: RankItemKey;
    label: string;
  }>;
};

export type OverthinkingStep =
  | ScenarioChoiceStep
  | SegmentedStep
  | SliderStep
  | MultiSelectStep
  | TripleSliderStep
  | DragRankStep;

export type OverthinkingBand = {
  key: OverthinkingBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  loopFuelLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type PatternZone = {
  key: OverthinkingZoneKey;
  label: string;
  description: string;
  summary: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type OverthinkingDimension = {
  key: OverthinkingDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type TriggerCluster = {
  key: TriggerClusterKey;
  label: string;
  accent: string;
};

export type RelatedLoopTool = {
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

export type OverthinkingResult = {
  score: number;
  band: OverthinkingBand;
  zone: PatternZone;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<OverthinkingDimensionKey, number>;
  triggerClusters: Array<TriggerCluster & { value: number }>;
  spillover: {
    sleep: number;
    focus: number;
    energy: number;
  };
  mapPlacement: {
    x: number;
    y: number;
  };
  dominantDimensions: OverthinkingDimension[];
  dominantTriggers: Array<TriggerCluster & { value: number }>;
  signalLabel: string;
  interpretation: string;
  standout: string;
  loopFuel: string;
  responseLabel: string;
};

export const overthinkingToolMetadata = {
  eyebrow: "THOUGHT PATTERN TOOL",
  title: "Overthinking Loop Check",
  description:
    "See whether your thinking is helping you get clear or pulling you into repetition, hesitation, reassurance loops, and mental drag. This tool maps how the pattern behaves under uncertainty, pressure, and emotional noise.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "pattern" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const overthinkingDimensions: OverthinkingDimension[] = [
  {
    key: "repetitionLoad",
    label: "Repetition Load",
    description: "How strongly your mind keeps reopening the same material after it stops adding clarity.",
    icon: "pattern",
    accent: "#6FD3FF",
  },
  {
    key: "decisionDrag",
    label: "Decision Drag",
    description: "How much the loop slows action, commitment, and forward movement.",
    icon: "trend",
    accent: "#F6C177",
  },
  {
    key: "uncertaintyPull",
    label: "Reassurance / Uncertainty Pull",
    description: "How much ambiguity, self-doubt, or the need for certainty keeps the loop active.",
    icon: "insight",
    accent: "#A78BFA",
  },
  {
    key: "mentalExhaustionSpillover",
    label: "Mental Exhaustion Spillover",
    description: "How much the pattern spills into sleep, focus, energy, and the tone of the rest of your day.",
    icon: "signal",
    accent: "#F472B6",
  },
];

export const triggerClusters: TriggerCluster[] = [
  { key: "relational", label: "Relational", accent: "#6FD3FF" },
  { key: "future-uncertainty", label: "Future uncertainty", accent: "#A78BFA" },
  { key: "self-evaluation", label: "Self-evaluation", accent: "#F472B6" },
  { key: "unfinished-task-load", label: "Unfinished tasks", accent: "#22C7D6" },
  { key: "conflict-risk", label: "Conflict / risk", accent: "#F6C177" },
];

export const patternZones: PatternZone[] = [
  {
    key: "clear-reflection",
    label: "Clear Reflection",
    description: "Thought stays mobile. Reflection helps, then loosens its grip again.",
    summary: "Your thinking is still behaving like reflection more than looping.",
    gradientFrom: "#6FD3FF",
    gradientTo: "#3DDC97",
    glow: "rgba(61, 220, 151, 0.26)",
  },
  {
    key: "repetitive-review",
    label: "Repetitive Review",
    description: "The mind circles back more than it needs to, but action and perspective are still accessible.",
    summary: "The pattern revisits more than it resolves, though it is not fully locking you yet.",
    gradientFrom: "#6FD3FF",
    gradientTo: "#A78BFA",
    glow: "rgba(111, 211, 255, 0.22)",
  },
  {
    key: "rumination-drag",
    label: "Rumination Drag",
    description: "The loop is consuming bandwidth, emotional room, and recovery space.",
    summary: "Repetition is no longer neutral; it is starting to cost clarity, focus, and relief.",
    gradientFrom: "#F472B6",
    gradientTo: "#A78BFA",
    glow: "rgba(244, 114, 182, 0.24)",
  },
  {
    key: "decision-lock",
    label: "Decision Lock",
    description: "Uncertainty and action delay are reinforcing one another, making movement feel expensive.",
    summary: "The pattern is not only repetitive. It is actively interfering with choice and follow-through.",
    gradientFrom: "#F6C177",
    gradientTo: "#F472B6",
    glow: "rgba(246, 193, 119, 0.26)",
  },
];

export const overthinkingBands: OverthinkingBand[] = [
  {
    key: "reflective-but-clear",
    min: 0,
    max: 24,
    title: "Reflective but Clear",
    summary: "Your answers suggest that reflection still tends to stay useful, bounded, and relatively easy to interrupt.",
    interpretation:
      "You may still revisit things sometimes, especially under pressure, but the pattern does not appear to be dominating action or draining large amounts of bandwidth.",
    standoutLead: "The strongest signal is not heavy looping, but where mild repetition could start growing if uncertainty rises.",
    loopFuelLead: "The loop is most likely to stay light as long as action keeps pace with thinking.",
    gradientFrom: "#6FD3FF",
    gradientTo: "#3DDC97",
    glow: "rgba(61, 220, 151, 0.28)",
  },
  {
    key: "mild-cognitive-looping",
    min: 25,
    max: 44,
    title: "Mild Cognitive Looping",
    summary: "Some repetitive thinking is showing up, especially when something feels unfinished, uncertain, or emotionally charged.",
    interpretation:
      "This often feels manageable from the outside, but internally it can create more drag than people realize because attention keeps being pulled back toward the same material.",
    standoutLead: "The pattern suggests that reflection is beginning to tip into repetition in certain contexts.",
    loopFuelLead: "The loop usually stays active here because more thinking briefly feels like more control.",
    gradientFrom: "#6FD3FF",
    gradientTo: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.22)",
  },
  {
    key: "repetitive-processing-pattern",
    min: 45,
    max: 64,
    title: "Repetitive Processing Pattern",
    summary: "Your thinking appears to be circling more than resolving, especially when uncertainty or self-questioning is involved.",
    interpretation:
      "At this level, the pattern usually feels mentally busy and sticky. You may gain flashes of clarity, but they do not hold for long before the loop reopens again.",
    standoutLead: "The strongest signal is repeated processing without enough relief, closure, or forward movement.",
    loopFuelLead: "The loop tends to stay active because more thinking keeps being mistaken for progress.",
    gradientFrom: "#A78BFA",
    gradientTo: "#F472B6",
    glow: "rgba(244, 114, 182, 0.24)",
  },
  {
    key: "high-rumination-drag",
    min: 65,
    max: 84,
    title: "High Rumination Drag",
    summary: "The pattern now looks costly. Repetition, uncertainty, and spillover are combining to slow clarity and drain energy.",
    interpretation:
      "This is often the zone where people feel mentally tired, yet still unable to stop thinking. The issue is not a lack of effort; it is that effort is becoming circular.",
    standoutLead: "The loop is no longer only repetitive. It is starting to shape how much attention and recovery you have left.",
    loopFuelLead: "The pattern often stays active here because uncertainty keeps recruiting more analysis than the situation can actually repay.",
    gradientFrom: "#F472B6",
    gradientTo: "#F6C177",
    glow: "rgba(244, 114, 182, 0.28)",
  },
  {
    key: "decision-locked-mental-loop",
    min: 85,
    max: 100,
    title: "Decision-Locked Mental Loop",
    summary: "Your answers suggest a strong pattern of circular thinking, decision drag, and difficulty interrupting the loop once it gets momentum.",
    interpretation:
      "This does not define you, and it is not a diagnosis. It does suggest that thinking itself may currently feel heavy, sticky, and less helpful than it once did.",
    standoutLead: "The clearest signal is not just repetition, but how much uncertainty and action delay are now feeding one another.",
    loopFuelLead: "The loop tends to stay active because the mind is still searching for certainty that thinking alone may not be able to provide.",
    gradientFrom: "#F6C177",
    gradientTo: "#F472B6",
    glow: "rgba(246, 193, 119, 0.28)",
  },
];

export const rankingItems: Array<{ key: RankItemKey; label: string }> = [
  { key: "certainty-before-moving", label: "I want certainty before moving" },
  { key: "replay-long-after", label: "I replay things long after they end" },
  { key: "second-guess-myself", label: "I second-guess myself" },
  { key: "struggle-unresolved", label: "I struggle to let unresolved things sit" },
  { key: "keep-thinking-stops-helping", label: "I keep thinking even when it stops helping" },
];

export const overthinkingSteps: OverthinkingStep[] = [
  {
    id: "step-1",
    kind: "scenario-choice",
    field: "firstLoop",
    eyebrow: "Pattern 01 · first mental move",
    question: "When something feels unresolved, what usually happens in your mind first?",
    hint: "Choose the option that sounds most like your current default, not the most intense version you can remember.",
    options: [
      { value: "brief-move-on", marker: "A", label: "I reflect briefly and move on" },
      { value: "revisit-few-times", marker: "B", label: "I revisit it a few times" },
      { value: "replay-repeatedly", marker: "C", label: "I replay it repeatedly" },
      { value: "mentally-stuck", marker: "D", label: "I get mentally stuck in it" },
    ],
  },
  {
    id: "step-2",
    kind: "segmented",
    field: "replayFrequency",
    eyebrow: "Pattern 02 · replay frequency",
    question: "How often do you replay conversations or moments after they're over?",
    hint: "Think about recent weeks. The question is how sticky the replay feels, not whether you remember things at all.",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "very-often", label: "Very often" },
    ],
  },
  {
    id: "step-3",
    kind: "slider",
    field: "uncertaintySpiral",
    eyebrow: "Pattern 03 · uncertainty pull",
    question: "How much does uncertainty make your thinking spiral?",
    hint: "This helps place your pattern on the map between clear reflection and stuck looping.",
    label: "Uncertainty pull",
    minLabel: "Barely affects me",
    maxLabel: "Strongly pulls me into loops",
  },
  {
    id: "step-4",
    kind: "multi-select",
    field: "triggerSelections",
    eyebrow: "Pattern 04 · trigger nodes",
    question: "Which situations pull you into loops most often right now?",
    hint: "Choose up to three. These create the trigger cluster map later in the result.",
    limit: 3,
    options: [
      { value: "decisions", label: "Decisions" },
      { value: "relationships", label: "Relationships" },
      { value: "future-risks", label: "Future risks" },
      { value: "mistakes", label: "Mistakes" },
      { value: "work-tasks", label: "Work tasks" },
      { value: "health-worries", label: "Health worries" },
      { value: "social-perception", label: "Social perception" },
      { value: "conflict", label: "Conflict" },
      { value: "unfinished-tasks", label: "Unfinished tasks" },
    ],
  },
  {
    id: "step-5",
    kind: "scenario-choice",
    field: "narrativeType",
    eyebrow: "Pattern 05 · loop voice",
    question: "What do your loops usually sound like?",
    hint: "Pick the phrase that feels most recognizable right now. Different loop voices point to different fuels.",
    options: [
      { value: "handled-right", marker: "A", label: "\"Did I handle that right?\"" },
      { value: "what-if", marker: "B", label: "\"What if this goes wrong?\"" },
      { value: "need-clarity", marker: "C", label: "\"I need more clarity before I act\"" },
      { value: "should-have-done-differently", marker: "D", label: "\"I should have done something differently\"" },
    ],
  },
  {
    id: "step-6",
    kind: "slider",
    field: "actionDelay",
    eyebrow: "Pattern 06 · decision drag",
    question: "How much does overthinking delay action or decisions for you?",
    hint: "This is one of the clearest ways to separate reflection from looping.",
    label: "Action delay",
    minLabel: "Hardly delays me",
    maxLabel: "Delays me significantly",
  },
  {
    id: "step-7",
    kind: "scenario-choice",
    field: "responsePattern",
    eyebrow: "Pattern 07 · loop response",
    question: "When you feel mentally stuck, what do you most often do next?",
    hint: "The loop often says less about what you think and more about what you do after the thought arrives.",
    options: [
      { value: "wait", marker: "A", label: "I wait" },
      { value: "seek-reassurance", marker: "B", label: "I seek reassurance" },
      { value: "research-more", marker: "C", label: "I research more" },
      { value: "revisit-thought", marker: "D", label: "I revisit the thought repeatedly" },
      { value: "avoid-acting", marker: "E", label: "I avoid acting altogether" },
    ],
  },
  {
    id: "step-8",
    kind: "triple-slider",
    eyebrow: "Pattern 08 · spillover impact",
    question: "How often does overthinking affect your sleep, focus, or energy?",
    hint: "This turns the result from a thought map into a real-life impact profile.",
    fields: [
      { key: "sleepImpact", label: "Sleep impact", minLabel: "Low", maxLabel: "High" },
      { key: "focusImpact", label: "Focus impact", minLabel: "Low", maxLabel: "High" },
      { key: "energyImpact", label: "Energy impact", minLabel: "Low", maxLabel: "High" },
    ],
  },
  {
    id: "step-9",
    kind: "segmented",
    field: "loopReturn",
    eyebrow: "Pattern 09 · loop return",
    question: "Once you think you are done, how often does the same thought come back?",
    hint: "This picks up the sticky quality of looping after the mind has already made at least one pass through the issue.",
    options: [
      { value: "rarely-returns", label: "Rarely returns" },
      { value: "sometimes-returns", label: "Sometimes returns" },
      { value: "often-returns", label: "Often returns" },
      { value: "keeps-coming-back", label: "Keeps coming back" },
    ],
  },
  {
    id: "step-10",
    kind: "slider",
    field: "interruptDifficulty",
    eyebrow: "Pattern 10 · interrupt difficulty",
    question: "How hard is it to stop once you realize the thought is looping?",
    hint: "Some patterns are noticeable but still interruptible. Others keep holding mental attention even after you recognize the loop.",
    label: "Interrupt difficulty",
    minLabel: "Still fairly easy to stop",
    maxLabel: "Very hard to interrupt",
  },
  {
    id: "step-11",
    kind: "slider",
    field: "reassuranceChecking",
    eyebrow: "Pattern 11 · checking pull",
    question: "How much does the loop pull you toward checking, researching, or asking again for reassurance?",
    hint: "This is not about having questions. It is about how strongly the mind keeps reaching for one more pass at certainty.",
    label: "Checking / reassurance pull",
    minLabel: "Very little",
    maxLabel: "A great deal",
  },
  {
    id: "step-12",
    kind: "slider",
    field: "bodyActivation",
    eyebrow: "Pattern 12 · body activation",
    question: "When the loop is active, how much does it show up in your body as tension, urgency, or a stress charge?",
    hint: "Overthinking often feels cognitive, but many loops are being partly maintained by body-level activation too.",
    label: "Body activation",
    minLabel: "Barely at all",
    maxLabel: "Very strongly",
  },
  {
    id: "step-13",
    kind: "segmented",
    field: "timeLoss",
    eyebrow: "Pattern 13 · time cost",
    question: "How much time can one loop quietly consume before you really notice the cost?",
    hint: "This is about how much mental space the loop can occupy, even if it is in the background rather than full front-and-center rumination.",
    options: [
      { value: "brief", label: "Briefly" },
      { value: "noticeable", label: "A noticeable amount" },
      { value: "large-chunks", label: "Large chunks" },
      { value: "merges-into-the-day", label: "It merges into the day" },
    ],
  },
  {
    id: "step-14",
    kind: "drag-rank",
    field: "rankingOrder",
    eyebrow: "Pattern 14 · priority order",
    question: "Rank these from most to least true for your current pattern",
    hint: "Drag or use the move buttons to rank them. This helps the tool weight the specific structure of your loop.",
    items: rankingItems,
  },
  {
    id: "step-15",
    kind: "scenario-choice",
    field: "finalPattern",
    eyebrow: "Pattern 15 · self-description",
    question: "Which statement feels most accurate right now?",
    hint: "This final self-read helps the map compare the pattern you feel with the signals collected above.",
    options: [
      { value: "regain-clarity", marker: "A", label: "I reflect, but usually regain clarity quickly" },
      { value: "repetitive-under-stress", marker: "B", label: "I get pulled into repetitive thinking under stress" },
      { value: "circle-thoughts", marker: "C", label: "I often circle the same thoughts without getting relief" },
      { value: "stuck-heavy-hard-to-interrupt", marker: "D", label: "My thinking feels stuck, heavy, and hard to interrupt" },
    ],
  },
];

export const relatedLoopTools: RelatedLoopTool[] = [
  {
    title: "Emotional Trigger Decoder",
    description: "Trace whether emotional activation, old meaning, or situational cues are amplifying your loop before you notice it.",
    category: "Emotional Regulation",
    minutes: "5 min",
    icon: "insight",
    href: buildToolsHref({ category: "emotional-regulation", query: "trigger", hash: "browse-all-tools" }),
  },
  {
    title: "Decision Fatigue Simulator",
    description: "See how too many open choices quietly increase hesitation, second-guessing, and mental drag.",
    category: "Anxiety & Overthinking",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
  },
  {
    title: "Sleep Pressure Check",
    description: "Check whether looping is pushing mental activation late into the evening and reducing shutdown quality.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "time",
    href: buildToolHref({ slug: "sleep-pressure-check", categorySlug: "sleep-recovery" }),
  },
  {
    title: "Confidence Reset Audit",
    description: "Read how self-doubt and over-monitoring may be feeding one another beneath the surface of the loop.",
    category: "Self-Esteem & Confidence",
    minutes: "6 min",
    icon: "trend",
    href: buildToolHref({ slug: "confidence-reset-audit", categorySlug: "self-esteem-confidence" }),
  },
];

export const overthinkingFaqItems: FaqItem[] = [
  {
    question: "What does an overthinking score actually mean?",
    answer:
      "It is a directional readout of repetition, uncertainty pull, action delay, and spillover. A higher score means your current pattern looks more circular and costly, not that you have been diagnosed with anything.",
  },
  {
    question: "Is overthinking the same as anxiety?",
    answer:
      "Not exactly. Anxiety can feed overthinking, but overthinking is more specifically about repetitive thought that keeps reopening without creating useful movement or relief.",
  },
  {
    question: "What is the difference between reflection and rumination?",
    answer:
      "Reflection helps you understand, decide, or adjust. Rumination keeps revisiting material after the thinking has stopped being proportionally useful.",
  },
  {
    question: "Why does uncertainty make overthinking worse?",
    answer:
      "Uncertainty creates an open loop. The mind often treats more analysis as a way to regain control, even when the situation cannot deliver total certainty back.",
  },
  {
    question: "Can overthinking affect sleep and focus?",
    answer:
      "Yes. Repetitive thought can keep the brain activated longer than the situation requires, which often reduces mental shutdown, attention quality, and next-day energy.",
  },
  {
    question: "How often should I retake this tool?",
    answer:
      "Every couple of weeks is usually enough if your stress level, uncertainty, or decision load is shifting. The most useful comparison is whether the pattern is becoming easier or harder to interrupt over time.",
  },
  {
    question: "What should I do if my loop pattern feels severe?",
    answer:
      "Treat the result as a prompt to reduce the loop's fuel rather than argue with it. Lower the number of open decisions, reduce reassurance habits, and choose one action that does not require perfect certainty first.",
  },
  {
    question: "Why does overthinking sometimes feel productive even when it is not helping?",
    answer:
      "Because the mind is still active and engaged with the problem. Activity can feel like progress, especially when uncertainty is uncomfortable, even if the thinking is mostly reopening the same material.",
  },
  {
    question: "What part of the pattern usually improves first when loops start easing?",
    answer:
      "Action delay and replay frequency often loosen first. People usually notice they can let a thought sit longer without reopening it immediately or can move sooner without waiting for complete certainty.",
  },
  {
    question: "Should I wait for certainty before trying to interrupt the loop?",
    answer:
      "Usually no. If certainty were the requirement, the loop would keep running. The more helpful move is often acting with enough clarity, then letting the remaining uncertainty stay unfinished without giving it unlimited thought time.",
  },
];

export const overthinkingStoryBlock = {
  eyebrow: "How this often feels",
  title: "The loop usually sounds intelligent long before it starts sounding repetitive.",
  quote:
    "This often starts as a sincere attempt to think something through properly. The problem is that, after a while, the mind is back on the same thought again without becoming any clearer. It still feels active and important, but it no longer feels useful. The loop keeps the problem mentally close without actually moving it forward.",
  takeaway:
    "That is the core shift this tool is trying to surface: the moment where reflection stops being clarifying and starts becoming a way of staying mentally attached to uncertainty.",
  toneLabel: "Loop moment",
  accent: "#A78BFA",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What overthinking loops actually are",
    paragraphs: [
      "Overthinking loops are not simply moments of careful thought. They are patterns in which the mind keeps returning to the same issue, scenario, decision, or memory with diminishing returns. On the surface, it can look like analysis. Internally, it often feels like mental friction: the thought opens, closes slightly, then reopens again before real relief arrives. The issue is not that you think deeply. The issue is that the thinking stops changing the situation, yet continues claiming attention anyway.",
      "That is why this tool treats overthinking as a pattern rather than a personality trait. Many people only notice it once the loop starts affecting sleep, focus, or action. Before that, it can look almost reasonable. You tell yourself you are being thorough, responsible, or careful. Sometimes you are. But once the process becomes repetitive, uncertainty-driven, or hard to interrupt, the mind may be trying to manage discomfort more than it is creating clarity.",
      "A useful definition is this: overthinking is reflection that has lost its stop point. It no longer knows when it has done enough. The question becomes less, \"Am I thinking?\" and more, \"Is this thinking still moving me toward clarity, or is it keeping me in contact with the problem without actually changing it?\"",
    ],
  },
  {
    title: "Reflection vs repetition vs rumination",
    paragraphs: [
      "Reflection is usually purposeful, time-bounded, and adaptive. It helps you sort meaning, identify a next step, or update your understanding. Repetition looks similar at first, but the thought starts looping back over ground you have already covered. You ask the same question in slightly different language, replay the same exchange from another angle, or search for one more piece of reassurance before acting. It can still feel productive because the material is familiar and mentally active.",
      "Rumination is the more costly version of that cycle. It is repetitive thinking that becomes sticky, emotionally loaded, and harder to interrupt. The thought does not just revisit. It captures. People often describe it as mentally circling, spiraling, or carrying a problem long after it could be acted on, parked, or emotionally processed. Rumination frequently pairs with self-judgment, future fear, or the feeling that certainty is always one more thought away.",
      "The transition from reflection to rumination is rarely dramatic. It usually happens through subtle shifts: uncertainty rises, an outcome feels personally significant, or the mind starts treating continued analysis as protection. That is why a pattern map can be more useful than a single score. It shows whether your current thinking is staying mobile or starting to harden into repetition and drag.",
    ],
  },
  {
    title: "How uncertainty pulls thought into loops",
    paragraphs: [
      "Uncertainty is one of the most reliable fuels for overthinking because the mind dislikes unresolved conditions. When something important remains open, ambiguous, or difficult to predict, the brain often responds by increasing internal simulation. It replays the past to extract a cleaner answer or rehearses the future to reduce surprise. In small amounts this is adaptive. In larger amounts it creates the illusion that more thinking will eventually generate enough safety to act.",
      "The problem is that uncertainty often cannot be solved by thought alone. Some situations genuinely require movement, time, feedback, or emotional tolerance rather than one more pass through the problem. When the mind does not accept that limit, it keeps building loops. You think because you feel uncertain, and you feel more uncertain because the thinking keeps reminding you there is no final closure yet.",
      "This is why uncertainty pull is such an important dimension in the tool. The goal is not to become reckless or stop caring. It is to notice when the desire for certainty is quietly becoming more powerful than the value of continued reflection. Once that shift happens, the mind may still sound intelligent while behaving in a circular way.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "repetitionLoad" as OverthinkingDimensionKey,
    title: "Repetition Load",
    paragraphs: [
      "Repetition load measures how often thought keeps reopening without producing proportionate gains in clarity. This is the part of the pattern that makes a finished conversation feel unfinished or a resolved task feel mentally active anyway.",
      "High repetition load does not mean you are incapable of letting go. It usually means something in the pattern is treating return visits as safety. The more often that happens, the more mental bandwidth gets spent revisiting rather than moving.",
    ],
  },
  {
    key: "decisionDrag" as OverthinkingDimensionKey,
    title: "Decision Drag",
    paragraphs: [
      "Decision drag shows how strongly the loop interferes with action. Some people can overthink intensely while still acting. Others feel the drag most clearly when choices slow down, commitments stretch, or even simple decisions start requiring too much internal debate.",
      "This dimension matters because forward movement is one of the cleanest ways to test whether thought is helping. When action keeps being delayed by the search for one more pass, the loop has usually stopped being purely reflective.",
    ],
  },
  {
    key: "uncertaintyPull" as OverthinkingDimensionKey,
    title: "Reassurance / Uncertainty Pull",
    paragraphs: [
      "This dimension tracks how much ambiguity, doubt, or the need to feel sure keeps the pattern alive. Some loops are less about the original issue and more about the emotional difficulty of not yet knowing enough.",
      "When uncertainty pull runs high, people often search for reassurance, more information, or a cleaner answer before they allow themselves to settle. The difficulty is that the threshold for enough certainty keeps moving.",
    ],
  },
  {
    key: "mentalExhaustionSpillover" as OverthinkingDimensionKey,
    title: "Mental Exhaustion Spillover",
    paragraphs: [
      "Spillover is where the loop leaves the thought itself and starts affecting the rest of life. Sleep gets noisier, focus becomes more fragile, and energy feels more taxed than the day alone should justify.",
      "This is often the moment people realize the pattern is not just cognitive. It has become a lifestyle cost. The loop now has an aftereffect, which means reducing it is not only about thinking differently but also about protecting mental recovery.",
    ],
  },
];

export const loopFuelBlocks = [
  {
    title: "Need for certainty",
    body:
      "When the mind treats certainty as a prerequisite for movement, it often keeps searching long after the problem has stopped yielding new information. That search can feel responsible while still creating drag.",
  },
  {
    title: "Unresolved emotion and self-doubt",
    body:
      "Loops often persist because the thought is carrying emotion, not just logic. If shame, embarrassment, fear, or self-questioning remain active, the mind keeps rechecking as if it might think its way into relief.",
  },
  {
    title: "Perceived consequences and reassurance habits",
    body:
      "The higher the imagined stakes, the easier it is for the loop to justify itself. Reassurance seeking can temporarily soothe that feeling, but it also teaches the mind that the loop deserves another round.",
  },
  {
    title: "Unfinished mental tasks",
    body:
      "Open loops, half-made decisions, and tasks without a clean endpoint keep attention partially attached. Even when the workload looks light, unfinished mental architecture can keep thought unusually active.",
  },
];

export const interruptionBlocks = [
  {
    title: "Action before certainty",
    body:
      "One of the cleanest interrupters is a bounded action that does not wait for total confidence. Movement narrows what thought has to manage, which often reduces the loop faster than more internal debate.",
  },
  {
    title: "Naming the pattern early",
    body:
      "Once you recognize, \"This is now a loop, not a useful reflection,\" the mind becomes easier to work with. Naming the pattern shortens the distance between noticing and interrupting it.",
  },
  {
    title: "Reducing reassurance and redirecting attention",
    body:
      "Reassurance can calm the loop briefly, but it often reinforces the idea that the thought still needs resolution. Redirecting attention on purpose interrupts that agreement and widens psychological space.",
  },
  {
    title: "Emotional grounding and decision boundaries",
    body:
      "Some loops require less analysis and more nervous-system settling. Clear decision boundaries, time limits, or a defined next action can reduce cognitive sprawl when emotion is amplifying the pattern.",
  },
];

export const nextStepParagraphs = [
  "If your pattern is elevated, the goal is not to fight every thought. The goal is to reduce the conditions that keep thought becoming repetitive and sticky. Start by identifying the strongest fuel in your result: uncertainty pull, decision drag, repetition, or spillover. The most effective next move is usually targeted, not broad.",
  "Choose one structural change and one behavioral change. A structural change might mean limiting research time, setting a decision boundary, or writing down the next step so the mind does not keep holding it open. A behavioral change might mean pausing reassurance seeking, acting before certainty, or interrupting replay with a concrete shift in attention.",
  "If the pattern feels heavy and persistent, treat that information with respect. This page is not diagnosing anything, but it is highlighting a loop that may be costing more than it appears to from the outside. A small, repeatable interruption is usually more useful than promising yourself you will just stop thinking about it.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "21-Day Overthinking Reset Workbook",
  description:
    "A structured guide for reducing repetitive thought loops, lowering decision drag, and rebuilding clarity under uncertainty.",
  buttonLabel: "View Next Step",
};

const firstLoopScores: Record<FirstLoopValue, number> = {
  "brief-move-on": 12,
  "revisit-few-times": 36,
  "replay-repeatedly": 72,
  "mentally-stuck": 94,
};

const replayFrequencyScores: Record<ReplayFrequencyValue, number> = {
  never: 6,
  rarely: 22,
  sometimes: 48,
  often: 76,
  "very-often": 94,
};

const loopReturnScores: Record<LoopReturnValue, number> = {
  "rarely-returns": 18,
  "sometimes-returns": 46,
  "often-returns": 74,
  "keeps-coming-back": 94,
};

const narrativeScores: Record<LoopNarrativeValue, number> = {
  "handled-right": 54,
  "what-if": 72,
  "need-clarity": 82,
  "should-have-done-differently": 86,
};

const responseScores: Record<LoopResponseValue, number> = {
  wait: 58,
  "seek-reassurance": 78,
  "research-more": 70,
  "revisit-thought": 84,
  "avoid-acting": 92,
};

const finalPatternScores: Record<FinalPatternValue, number> = {
  "regain-clarity": 18,
  "repetitive-under-stress": 48,
  "circle-thoughts": 74,
  "stuck-heavy-hard-to-interrupt": 94,
};

const timeLossScores: Record<TimeLossValue, number> = {
  brief: 18,
  noticeable: 46,
  "large-chunks": 78,
  "merges-into-the-day": 96,
};

const rankingSeverity: Record<RankItemKey, number> = {
  "certainty-before-moving": 84,
  "replay-long-after": 88,
  "second-guess-myself": 74,
  "struggle-unresolved": 82,
  "keep-thinking-stops-helping": 94,
};

const rankingPositionWeights = [1, 0.82, 0.64, 0.46, 0.3];

const scoringWeights = {
  firstLoop: 8,
  replayFrequency: 7,
  uncertaintySpiral: 8,
  triggerSelections: 6,
  narrativeType: 6,
  actionDelay: 8,
  responsePattern: 6,
  spilloverImpact: 8,
  loopReturn: 7,
  interruptDifficulty: 7,
  reassuranceChecking: 6,
  bodyActivation: 6,
  timeLoss: 7,
  rankingOrder: 5,
  finalPattern: 5,
} as const;

const triggerBucketMap: Record<LoopTriggerValue, TriggerClusterKey> = {
  decisions: "unfinished-task-load",
  relationships: "relational",
  "future-risks": "future-uncertainty",
  mistakes: "self-evaluation",
  "work-tasks": "unfinished-task-load",
  "health-worries": "conflict-risk",
  "social-perception": "self-evaluation",
  conflict: "conflict-risk",
  "unfinished-tasks": "unfinished-task-load",
};

const responseLabels: Record<LoopResponseValue, string> = {
  wait: "waiting for the feeling to settle on its own",
  "seek-reassurance": "reassurance seeking before you trust your own read",
  "research-more": "researching for one more layer of certainty",
  "revisit-thought": "revisiting the thought instead of releasing it",
  "avoid-acting": "avoiding action until the mind feels safer",
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
  return overthinkingBands.find((band) => score >= band.min && score <= band.max) ?? overthinkingBands[0];
}

function getZone(key: OverthinkingZoneKey) {
  return patternZones.find((zone) => zone.key === key) ?? patternZones[0];
}

function getDimension(key: OverthinkingDimensionKey) {
  return overthinkingDimensions.find((dimension) => dimension.key === key) ?? overthinkingDimensions[0];
}

function getTriggerCluster(key: TriggerClusterKey) {
  return triggerClusters.find((cluster) => cluster.key === key) ?? triggerClusters[0];
}

function getRankingScore(order: RankItemKey[]) {
  if (!order.length) {
    return undefined;
  }

  const totalWeight = rankingPositionWeights.reduce((sum, weight) => sum + weight, 0);
  const weightedTotal = order.reduce((sum, key, index) => {
    const positionWeight = rankingPositionWeights[index] ?? rankingPositionWeights[rankingPositionWeights.length - 1];
    return sum + rankingSeverity[key] * positionWeight;
  }, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getRankingDimensionInfluence(order: RankItemKey[]) {
  if (!order.length) {
    return {
      repetitionLoad: undefined,
      decisionDrag: undefined,
      uncertaintyPull: undefined,
      mentalExhaustionSpillover: undefined,
    } as Record<OverthinkingDimensionKey, number | undefined>;
  }

  const dimensionMaps: Record<RankItemKey, Partial<Record<OverthinkingDimensionKey, number>>> = {
    "certainty-before-moving": { decisionDrag: 92, uncertaintyPull: 86 },
    "replay-long-after": { repetitionLoad: 94, mentalExhaustionSpillover: 46 },
    "second-guess-myself": { uncertaintyPull: 72, decisionDrag: 60 },
    "struggle-unresolved": { repetitionLoad: 78, uncertaintyPull: 68 },
    "keep-thinking-stops-helping": { repetitionLoad: 84, mentalExhaustionSpillover: 90, decisionDrag: 48 },
  };

  const result: Record<OverthinkingDimensionKey, number | undefined> = {
    repetitionLoad: undefined,
    decisionDrag: undefined,
    uncertaintyPull: undefined,
    mentalExhaustionSpillover: undefined,
  };

  for (const dimension of overthinkingDimensions) {
    const weighted = order.reduce(
      (accumulator, key, index) => {
        const mapping = dimensionMaps[key][dimension.key];
        const weight = rankingPositionWeights[index] ?? 0.3;

        if (typeof mapping !== "number") {
          return accumulator;
        }

        return {
          total: accumulator.total + mapping * weight,
          weight: accumulator.weight + weight,
        };
      },
      { total: 0, weight: 0 },
    );

    if (weighted.weight) {
      result[dimension.key] = clampScore(weighted.total / weighted.weight);
    }
  }

  return result;
}

function determineZone({
  decisionDrag,
  uncertaintyPull,
  repetitionLoad,
  mentalExhaustionSpillover,
}: Record<OverthinkingDimensionKey, number>) {
  const x = clampScore(decisionDrag * 0.72 + uncertaintyPull * 0.28);
  const y = clampScore(repetitionLoad * 0.58 + uncertaintyPull * 0.24 + mentalExhaustionSpillover * 0.18);

  let zoneKey: OverthinkingZoneKey = "repetitive-review";

  if (x < 40 && y < 38) {
    zoneKey = "clear-reflection";
  } else if (x >= 62 && uncertaintyPull >= 60) {
    zoneKey = "decision-lock";
  } else if (y >= 64 || mentalExhaustionSpillover >= 58) {
    zoneKey = "rumination-drag";
  }

  return {
    zone: getZone(zoneKey),
    placement: {
      x,
      y,
    },
  };
}

export function getInitialOverthinkingAnswers(): OverthinkingAnswers {
  return {
    triggerSelections: [],
    rankingOrder: rankingItems.map((item) => item.key),
    rankingConfirmed: false,
  };
}

export function isOverthinkingStepComplete(step: OverthinkingStep, answers: OverthinkingAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers.triggerSelections.length > 0;
  }

  if (step.kind === "triple-slider") {
    return step.fields.every((field) => typeof answers[field.key] === "number");
  }

  if (step.kind === "drag-rank") {
    return answers.rankingOrder.length === step.items.length && answers.rankingConfirmed;
  }

  return Boolean(answers[step.field]);
}

export function calculateOverthinkingLoop(answers: OverthinkingAnswers): OverthinkingResult {
  const firstLoop = answers.firstLoop ? firstLoopScores[answers.firstLoop] : undefined;
  const replayFrequency = answers.replayFrequency ? replayFrequencyScores[answers.replayFrequency] : undefined;
  const uncertaintySpiral = typeof answers.uncertaintySpiral === "number" ? clampScore(answers.uncertaintySpiral) : undefined;
  const triggerDensity = answers.triggerSelections.length
    ? clampScore((answers.triggerSelections.length / 3) * 100)
    : undefined;
  const narrativeType = answers.narrativeType ? narrativeScores[answers.narrativeType] : undefined;
  const actionDelay = typeof answers.actionDelay === "number" ? clampScore(answers.actionDelay) : undefined;
  const responsePattern = answers.responsePattern ? responseScores[answers.responsePattern] : undefined;
  const sleepImpact = typeof answers.sleepImpact === "number" ? clampScore(answers.sleepImpact) : undefined;
  const focusImpact = typeof answers.focusImpact === "number" ? clampScore(answers.focusImpact) : undefined;
  const energyImpact = typeof answers.energyImpact === "number" ? clampScore(answers.energyImpact) : undefined;
  const loopReturn = answers.loopReturn ? loopReturnScores[answers.loopReturn] : undefined;
  const interruptDifficulty =
    typeof answers.interruptDifficulty === "number" ? clampScore(answers.interruptDifficulty) : undefined;
  const reassuranceChecking =
    typeof answers.reassuranceChecking === "number" ? clampScore(answers.reassuranceChecking) : undefined;
  const bodyActivation =
    typeof answers.bodyActivation === "number" ? clampScore(answers.bodyActivation) : undefined;
  const timeLoss = answers.timeLoss ? timeLossScores[answers.timeLoss] : undefined;
  const spilloverImpact =
    typeof sleepImpact === "number" && typeof focusImpact === "number" && typeof energyImpact === "number"
      ? clampScore((sleepImpact + focusImpact + energyImpact) / 3)
      : undefined;
  const rankingOrder = answers.rankingConfirmed ? getRankingScore(answers.rankingOrder) : undefined;
  const finalPattern = answers.finalPattern ? finalPatternScores[answers.finalPattern] : undefined;

  const scoredEntries = [
    { value: firstLoop, weight: scoringWeights.firstLoop },
    { value: replayFrequency, weight: scoringWeights.replayFrequency },
    { value: uncertaintySpiral, weight: scoringWeights.uncertaintySpiral },
    { value: triggerDensity, weight: scoringWeights.triggerSelections },
    { value: narrativeType, weight: scoringWeights.narrativeType },
    { value: actionDelay, weight: scoringWeights.actionDelay },
    { value: responsePattern, weight: scoringWeights.responsePattern },
    { value: spilloverImpact, weight: scoringWeights.spilloverImpact },
    { value: loopReturn, weight: scoringWeights.loopReturn },
    { value: interruptDifficulty, weight: scoringWeights.interruptDifficulty },
    { value: reassuranceChecking, weight: scoringWeights.reassuranceChecking },
    { value: bodyActivation, weight: scoringWeights.bodyActivation },
    { value: timeLoss, weight: scoringWeights.timeLoss },
    { value: rankingOrder, weight: scoringWeights.rankingOrder },
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

  const triggerCounts = triggerClusters.reduce<Record<TriggerClusterKey, number>>(
    (accumulator, cluster) => ({ ...accumulator, [cluster.key]: 0 }),
    {
      relational: 0,
      "future-uncertainty": 0,
      "self-evaluation": 0,
      "unfinished-task-load": 0,
      "conflict-risk": 0,
    },
  );

  for (const trigger of answers.triggerSelections) {
    const cluster = triggerBucketMap[trigger];
    triggerCounts[cluster] += 1;
  }

  const totalTriggerSelections = answers.triggerSelections.length || triggerClusters.length;
  const triggerDistribution = triggerClusters.map((cluster) => ({
    ...cluster,
    value: clampScore((100 * (answers.triggerSelections.length ? triggerCounts[cluster.key] : 1)) / totalTriggerSelections),
  }));

  const rankingDimensionInfluence = answers.rankingConfirmed
    ? getRankingDimensionInfluence(answers.rankingOrder)
    : {
        repetitionLoad: undefined,
        decisionDrag: undefined,
        uncertaintyPull: undefined,
        mentalExhaustionSpillover: undefined,
      };

  const narrativeDimensionMap: Record<LoopNarrativeValue, Partial<Record<OverthinkingDimensionKey, number>>> = {
    "handled-right": { repetitionLoad: 58, uncertaintyPull: 48 },
    "what-if": { uncertaintyPull: 86, mentalExhaustionSpillover: 50 },
    "need-clarity": { decisionDrag: 90, uncertaintyPull: 84 },
    "should-have-done-differently": { repetitionLoad: 80, uncertaintyPull: 62, mentalExhaustionSpillover: 58 },
  };

  const responseDimensionMap: Record<LoopResponseValue, Partial<Record<OverthinkingDimensionKey, number>>> = {
    wait: { decisionDrag: 58 },
    "seek-reassurance": { uncertaintyPull: 84, decisionDrag: 56 },
    "research-more": { uncertaintyPull: 74, decisionDrag: 68 },
    "revisit-thought": { repetitionLoad: 86, uncertaintyPull: 66 },
    "avoid-acting": { decisionDrag: 94, mentalExhaustionSpillover: 72 },
  };

  const topSelfEval = triggerDistribution.find((cluster) => cluster.key === "self-evaluation")?.value;
  const topFuture = triggerDistribution.find((cluster) => cluster.key === "future-uncertainty")?.value;
  const topRelational = triggerDistribution.find((cluster) => cluster.key === "relational")?.value;
  const topUnfinished = triggerDistribution.find((cluster) => cluster.key === "unfinished-task-load")?.value;
  const topConflictRisk = triggerDistribution.find((cluster) => cluster.key === "conflict-risk")?.value;

  const dimensions: Record<OverthinkingDimensionKey, number> = {
    repetitionLoad: weightedAverage([
      { value: firstLoop, weight: 0.18 },
      { value: replayFrequency, weight: 0.2 },
      { value: loopReturn, weight: 0.16 },
      { value: answers.narrativeType ? narrativeDimensionMap[answers.narrativeType]?.repetitionLoad : undefined, weight: 0.14 },
      { value: answers.responsePattern ? responseDimensionMap[answers.responsePattern]?.repetitionLoad : undefined, weight: 0.12 },
      { value: timeLoss, weight: 0.1 },
      { value: rankingDimensionInfluence.repetitionLoad, weight: 0.1 },
      { value: topUnfinished, weight: 0.06 },
      { value: finalPattern, weight: 0.08 },
    ]),
    decisionDrag: weightedAverage([
      { value: actionDelay, weight: 0.3 },
      { value: interruptDifficulty, weight: 0.18 },
      { value: answers.narrativeType ? narrativeDimensionMap[answers.narrativeType]?.decisionDrag : undefined, weight: 0.18 },
      { value: answers.responsePattern ? responseDimensionMap[answers.responsePattern]?.decisionDrag : undefined, weight: 0.18 },
      { value: rankingDimensionInfluence.decisionDrag, weight: 0.12 },
      { value: topUnfinished, weight: 0.04 },
      { value: timeLoss, weight: 0.06 },
      { value: finalPattern, weight: 0.12 },
    ]),
    uncertaintyPull: weightedAverage([
      { value: uncertaintySpiral, weight: 0.28 },
      { value: reassuranceChecking, weight: 0.16 },
      { value: answers.narrativeType ? narrativeDimensionMap[answers.narrativeType]?.uncertaintyPull : undefined, weight: 0.18 },
      { value: answers.responsePattern ? responseDimensionMap[answers.responsePattern]?.uncertaintyPull : undefined, weight: 0.14 },
      { value: rankingDimensionInfluence.uncertaintyPull, weight: 0.14 },
      { value: topFuture, weight: 0.08 },
      { value: topSelfEval, weight: 0.06 },
      { value: topConflictRisk, weight: 0.05 },
      { value: loopReturn, weight: 0.05 },
    ]),
    mentalExhaustionSpillover: weightedAverage([
      { value: spilloverImpact, weight: 0.34 },
      { value: bodyActivation, weight: 0.18 },
      {
        value: answers.narrativeType ? narrativeDimensionMap[answers.narrativeType]?.mentalExhaustionSpillover : undefined,
        weight: 0.12,
      },
      {
        value: answers.responsePattern ? responseDimensionMap[answers.responsePattern]?.mentalExhaustionSpillover : undefined,
        weight: 0.12,
      },
      { value: rankingDimensionInfluence.mentalExhaustionSpillover, weight: 0.12 },
      { value: replayFrequency, weight: 0.06 },
      { value: topRelational, weight: 0.04 },
      { value: timeLoss, weight: 0.06 },
      { value: finalPattern, weight: 0.08 },
    ]),
  };

  const { zone, placement } = determineZone(dimensions);
  const dominantDimensions = [...overthinkingDimensions].sort(
    (left, right) => dimensions[right.key] - dimensions[left.key],
  );
  const dominantTriggers = [...triggerDistribution].sort((left, right) => right.value - left.value);

  const topDimension = dominantDimensions[0];
  const secondDimension = dominantDimensions[1];
  const topTriggerLabels = dominantTriggers
    .filter((trigger) => trigger.value > 0)
    .slice(0, 2)
    .map((trigger) => trigger.label.toLowerCase());

  const triggerPhrase =
    topTriggerLabels.length === 0
      ? "open uncertainty"
      : topTriggerLabels.length === 1
        ? topTriggerLabels[0]
        : `${topTriggerLabels[0]} and ${topTriggerLabels[1]}`;

  const responseLabel = answers.responsePattern ? responseLabels[answers.responsePattern] : "keeping the thought mentally active";
  const signalLabel = `Your pattern shows elevated ${topDimension.label.toLowerCase()} and ${secondDimension.label.toLowerCase()} under uncertainty.`;
  const interpretation = `${band.summary} ${band.interpretation} ${zone.summary}`;
  const standout = `${band.standoutLead} ${topDimension.label} is the strongest dimension right now, and your map currently sits in the ${zone.label.toLowerCase()} zone.`;
  const loopFuel = `${band.loopFuelLead} The pattern appears most fed by ${triggerPhrase} and ${responseLabel}.`;

  return {
    score,
    band,
    zone,
    completionRatio,
    isComplete: completionRatio === 1 && Boolean(answers.finalPattern),
    dimensions,
    triggerClusters: triggerDistribution,
    spillover: {
      sleep: sleepImpact ?? 0,
      focus: focusImpact ?? 0,
      energy: energyImpact ?? 0,
    },
    mapPlacement: placement,
    dominantDimensions,
    dominantTriggers,
    signalLabel,
    interpretation,
    standout,
    loopFuel,
    responseLabel,
  };
}

export function getOverthinkingDimension(key: OverthinkingDimensionKey) {
  return getDimension(key);
}

export function getOverthinkingZone(key: OverthinkingZoneKey) {
  return getZone(key);
}

export const heroPreviewResult = calculateOverthinkingLoop({
  ...getInitialOverthinkingAnswers(),
  firstLoop: "replay-repeatedly",
  replayFrequency: "often",
  uncertaintySpiral: 72,
  triggerSelections: ["future-risks", "social-perception", "unfinished-tasks"],
  narrativeType: "need-clarity",
  actionDelay: 66,
  responsePattern: "research-more",
  sleepImpact: 44,
  focusImpact: 62,
  energyImpact: 46,
  loopReturn: "often-returns",
  interruptDifficulty: 70,
  reassuranceChecking: 64,
  bodyActivation: 58,
  timeLoss: "large-chunks",
  rankingOrder: [
    "certainty-before-moving",
    "keep-thinking-stops-helping",
    "second-guess-myself",
    "replay-long-after",
    "struggle-unresolved",
  ],
  rankingConfirmed: true,
  finalPattern: "repetitive-under-stress",
});

export const standaloneRoutes = {
  burnout: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  overthinking: "/tools/overthinking-loop-check",
};
