import type { IconName } from "./tools-home";
import { buildToolHref } from "./tools-home";

export type RecoveryStateValue =
  | "light-reset"
  | "stabilization-over-motivation"
  | "need-recovery-space"
  | "reduce-load-urgently";

export type StrainAreaValue =
  | "workload"
  | "emotional-stress"
  | "relationships"
  | "uncertainty"
  | "lack-of-sleep"
  | "mental-overthinking"
  | "family-load"
  | "body-exhaustion"
  | "overstimulation"
  | "decision-pressure";

export type TimeAvailableValue = "very-limited" | "small-pockets" | "moderate-room" | "good-room";

export type RecoveryPreferenceValue =
  | "quiet-time"
  | "sleep"
  | "movement"
  | "emotional-expression"
  | "reduced-decisions"
  | "support-from-others"
  | "routine"
  | "solitude"
  | "nature"
  | "lighter-workload";

export type RecoveryBlockerValue =
  | "keep-pushing"
  | "dont-protect-space"
  | "dont-follow-through"
  | "load-too-high"
  | "underestimate-depletion";
export type BoundaryProtectionValue = "strong" | "some" | "thin" | "very-thin";
export type RecoveryConsistencyValue = "consistent" | "fairly-consistent" | "inconsistent" | "very-inconsistent";

export type UrgencyValue = "low" | "mild" | "moderate" | "high" | "very-high";

export type FinalSituationValue =
  | "cleaner-reset-rhythm"
  | "stabilize-before-more"
  | "structured-recovery"
  | "reduce-strain-actively";

export type RecoveryDimensionKey =
  | "loadPressure"
  | "capacityStrength"
  | "recoverySupport"
  | "resetFeasibility";

export type RecoveryBandKey =
  | "light-reset-path"
  | "stabilization-path"
  | "recovery-support-path"
  | "deep-decompression-path"
  | "rebuild-capacity-path";

export type PriorityKey =
  | "reduce-strain"
  | "protect-time"
  | "improve-sleep"
  | "lower-decisions"
  | "seek-support"
  | "reduce-overstimulation"
  | "restore-body"
  | "stabilize-rhythm";

export type RecoveryChoiceOption = {
  value: string;
  label: string;
  description?: string;
};

export type RecoveryAnswers = {
  emotionalLoad?: number;
  recoveryCapacity?: number;
  currentState?: RecoveryStateValue;
  strainAreas: StrainAreaValue[];
  timeAvailable?: TimeAvailableValue;
  recoveryPreferences: RecoveryPreferenceValue[];
  supportLevel?: number;
  recoveryBlocker?: RecoveryBlockerValue;
  sleepRestoration?: number;
  activationLevel?: number;
  boundaryProtection?: BoundaryProtectionValue;
  followThroughConfidence?: number;
  recoveryConsistency?: RecoveryConsistencyValue;
  urgency?: UrgencyValue;
  finalSituation?: FinalSituationValue;
};

type BaseStep = {
  id: string;
  step: number;
  eyebrow: string;
  hint: string;
  question: string;
};

export type RecoverySliderStep = BaseStep & {
  kind: "slider";
  field: "emotionalLoad" | "recoveryCapacity" | "supportLevel" | "sleepRestoration" | "activationLevel" | "followThroughConfidence";
  label: string;
  minLabel: string;
  maxLabel: string;
  markers?: string[];
};

export type RecoverySegmentedStep = BaseStep & {
  kind: "segmented";
  field:
    | "currentState"
    | "timeAvailable"
    | "recoveryBlocker"
    | "boundaryProtection"
    | "recoveryConsistency"
    | "urgency"
    | "finalSituation";
  options: RecoveryChoiceOption[];
  variant: "segments" | "cards";
};

export type RecoveryMultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "strainAreas" | "recoveryPreferences";
  limit: number;
  options: RecoveryChoiceOption[];
};

export type RecoveryPlannerStep = RecoverySliderStep | RecoverySegmentedStep | RecoveryMultiSelectStep;

export type RecoveryDimension = {
  key: RecoveryDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
  direction: "higher-is-heavier" | "higher-is-better";
};

export type RecoveryBand = {
  key: RecoveryBandKey;
  min: number;
  max: number;
  title: string;
  descriptor: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  firstNeedLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type RecoveryStage = {
  label: string;
  description: string;
  intensity: string;
};

export type RecoveryPriority = {
  key: PriorityKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type RecoveryPriorityScore = RecoveryPriority & {
  value: number;
};

export type RecoverySupportType = {
  key: RecoveryPreferenceValue;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type RecoveryBlocker = {
  key: RecoveryBlockerValue;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type StrainArea = {
  key: StrainAreaValue;
  label: string;
  description: string;
};

export type ResetPathStage = {
  range: string;
  title: string;
  description: string;
  accent: string;
};

export type RelatedRecoveryTool = {
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
  key: RecoveryDimensionKey;
  paragraphs: string[];
};

export type InfoCardBlock = {
  title: string;
  body: string;
};

export type RecoveryPlannerResult = {
  score: number;
  band: RecoveryBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<RecoveryDimensionKey, number>;
  primaryStage: RecoveryStage;
  primaryBlocker: RecoveryBlocker;
  mostUsefulSupportType: RecoverySupportType;
  resetIntensity: string;
  priorities: RecoveryPriorityScore[];
  resetPath: ResetPathStage[];
  signalLabel: string;
  interpretation: string;
  standout: string;
  firstNeedInsight: string;
  topPriority: RecoveryPriorityScore;
  selectedStrainAreas: StrainArea[];
  selectedSupportTypes: RecoverySupportType[];
  emotionalLoad: number;
  recoveryCapacity: number;
  supportLevel: number;
  urgencyLevel: number;
  gap: number;
};

export const emotionalRecoveryMetadata = {
  eyebrow: "RECOVERY & RESET TOOL",
  title: "Emotional Recovery Planner",
  description:
    "Build a reset plan that fits your real capacity, not the ideal version of you. This tool maps emotional load, available support, recovery room, and the most believable next steps.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const recoveryDimensions: RecoveryDimension[] = [
  {
    key: "loadPressure",
    label: "Load Pressure",
    description: "How much current strain is asking from the system before recovery has had a fair chance to catch up.",
    icon: "signal",
    accent: "#FDA4AF",
    direction: "higher-is-heavier",
  },
  {
    key: "capacityStrength",
    label: "Capacity Strength",
    description: "How much usable emotional room, steadiness, and internal margin you appear to have available right now.",
    icon: "shield",
    accent: "#93C5FD",
    direction: "higher-is-better",
  },
  {
    key: "recoverySupport",
    label: "Recovery Support",
    description: "How much time, support, and realistically helpful recovery input is currently available to you.",
    icon: "graph",
    accent: "#6EE7B7",
    direction: "higher-is-better",
  },
  {
    key: "resetFeasibility",
    label: "Reset Feasibility",
    description: "How realistic it looks to follow through on a short recovery pathway without demanding too much from yourself.",
    icon: "pattern",
    accent: "#C4B5FD",
    direction: "higher-is-better",
  },
];

export const recoveryBands: RecoveryBand[] = [
  {
    key: "light-reset-path",
    min: 0,
    max: 24,
    title: "Light Reset Path",
    descriptor: "A gentle reset is likely enough to restore steadiness.",
    summary:
      "Your current pattern suggests that recovery is still reasonably available, and the system mostly needs a cleaner reset rhythm rather than a major decompression plan.",
    interpretation:
      "There is still some load in the background, but it does not appear to be overwhelming available capacity. A lighter reset works best here because the goal is not to over-correct. It is to clear noise, reinforce support, and keep smaller strains from piling up.",
    standoutLead:
      "The clearest signal is that load and capacity have not fully drifted apart yet, which means small recovery moves can still have strong leverage.",
    firstNeedLead:
      "What your system likely needs first is less intensity, not more effort: a little more protected room and a clearer rhythm for replenishment.",
    gradientFrom: "#67E8F9",
    gradientTo: "#93C5FD",
    glow: "rgba(103, 232, 249, 0.24)",
  },
  {
    key: "stabilization-path",
    min: 25,
    max: 44,
    title: "Stabilization Path",
    descriptor: "The system looks more strained than it looks from the outside.",
    summary:
      "Some recovery is happening, but steadiness is not yet strong enough to make load feel light. The immediate need is stabilization before expansion.",
    interpretation:
      "This is often the zone where people are still functioning, still showing up, and still getting through the day, yet internally feel thinner than usual. Recovery works, but not consistently enough to restore full margin. A stabilization path helps because it protects the basics before motivation starts asking for more.",
    standoutLead:
      "The strongest signal is subtle strain accumulation rather than full collapse. That usually means earlier intervention can still change the direction of the week.",
    firstNeedLead:
      "What your system likely needs first is firmer protection around rest, decisions, and emotional bandwidth so the floor stops moving under you.",
    gradientFrom: "#93C5FD",
    gradientTo: "#6EE7B7",
    glow: "rgba(147, 197, 253, 0.22)",
  },
  {
    key: "recovery-support-path",
    min: 45,
    max: 64,
    title: "Recovery Support Path",
    descriptor: "Capacity is not fully keeping up with the load you are carrying.",
    summary:
      "Your current shape suggests that good intentions alone are not enough right now. Recovery needs more support, more structure, or more load reduction to become realistic again.",
    interpretation:
      "This is the point where people often know what helps, but cannot get enough traction to make it stick. The problem is not insight. It is that recovery now needs better conditions. A support path works best when it lowers strain, protects recovery windows, and gives the system something sturdier than willpower alone.",
    standoutLead:
      "The result suggests a meaningful gap between what your system is carrying and what it can currently replenish without help.",
    firstNeedLead:
      "What your system likely needs first is support that reduces drag immediately, so recovery does not have to compete with the same pressure that created the depletion.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#FCD34D",
    glow: "rgba(110, 231, 183, 0.22)",
  },
  {
    key: "deep-decompression-path",
    min: 65,
    max: 84,
    title: "Deep Decompression Path",
    descriptor: "Pressure appears to be outpacing recovery in a visible way.",
    summary:
      "The system looks overloaded enough that recovery is likely asking for protection, decompression, and active load reduction before it can feel effective again.",
    interpretation:
      "This is usually the zone where people keep trying to recover while still living inside too much demand. That creates a painful pattern: some rest happens, but it never feels sufficient because the system is returning to the same pressure too quickly. A decompression path works by widening space first, not by optimizing harder inside overload.",
    standoutLead:
      "The main signal here is not only high load, but a narrowing of usable capacity. That combination is what makes ordinary recovery feel less effective than it used to.",
    firstNeedLead:
      "What your system likely needs first is permission to downshift demand, reduce stimulation, and stop measuring recovery by how quickly you can bounce back.",
    gradientFrom: "#FCD34D",
    gradientTo: "#FDA4AF",
    glow: "rgba(252, 211, 77, 0.24)",
  },
  {
    key: "rebuild-capacity-path",
    min: 85,
    max: 100,
    title: "Rebuild Capacity Path",
    descriptor: "Recovery appears to need a smaller baseline and much stronger protection.",
    summary:
      "Your current pattern suggests that recovery is less about effort right now and more about reducing load, protecting space, and letting capacity rebuild before more demand gets added.",
    interpretation:
      "That does not mean something is wrong with you. It means the system looks too pressed to recover through ordinary maintenance alone. When the gap between load and capacity stays this wide, the most helpful plan is usually the least glamorous one: reduce strain, simplify expectations, increase support, and rebuild from a smaller, more realistic base.",
    standoutLead:
      "The key signal is that capacity appears compressed enough that even useful recovery may struggle to land unless the load itself changes too.",
    firstNeedLead:
      "What your system likely needs first is immediate relief from stacking demand, followed by steadier rebuilding rather than another promise to simply cope better.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#C4B5FD",
    glow: "rgba(253, 164, 175, 0.24)",
  },
];

const recoveryStages: Record<RecoveryBandKey, RecoveryStage> = {
  "light-reset-path": {
    label: "Clear the noise",
    description: "Use a lighter reset to recover margin before small strains have time to stack.",
    intensity: "Gentle",
  },
  "stabilization-path": {
    label: "Stabilize the floor",
    description: "Prioritize steadiness, structure, and lower decision drag before expecting more from yourself.",
    intensity: "Protective",
  },
  "recovery-support-path": {
    label: "Support before output",
    description: "Add stronger supports so recovery is not fighting the same conditions that created the strain.",
    intensity: "Structured",
  },
  "deep-decompression-path": {
    label: "Widen space first",
    description: "Reduce demand, stimulation, and stacking pressure so the system can finally come down a level.",
    intensity: "High protection",
  },
  "rebuild-capacity-path": {
    label: "Rebuild from a smaller baseline",
    description: "Protect the minimum viable load and let capacity return before performance becomes the focus again.",
    intensity: "Capacity-first",
  },
};

export const priorityDefinitions: RecoveryPriority[] = [
  {
    key: "reduce-strain",
    label: "Reduce strain",
    description: "Lower the amount of active demand the system is trying to carry all at once.",
    icon: "trend",
    accent: "#FDA4AF",
  },
  {
    key: "protect-time",
    label: "Protect time",
    description: "Create pockets of real space so recovery has somewhere to land instead of being squeezed out.",
    icon: "time",
    accent: "#93C5FD",
  },
  {
    key: "improve-sleep",
    label: "Improve sleep / recovery",
    description: "Strengthen nighttime restoration so the day is not starting from a deficit.",
    icon: "shield",
    accent: "#67E8F9",
  },
  {
    key: "lower-decisions",
    label: "Lower decisions",
    description: "Remove unnecessary choices so the system is not spending precious capacity on friction.",
    icon: "graph",
    accent: "#FCD34D",
  },
  {
    key: "seek-support",
    label: "Seek support",
    description: "Reduce the amount of emotional carrying you are doing alone.",
    icon: "insight",
    accent: "#6EE7B7",
  },
  {
    key: "reduce-overstimulation",
    label: "Reduce overstimulation",
    description: "Lower environmental and mental noise so the body does not stay half-activated all day.",
    icon: "pattern",
    accent: "#C4B5FD",
  },
  {
    key: "restore-body",
    label: "Restore the body",
    description: "Treat physical depletion as real recovery data instead of something to push through.",
    icon: "signal",
    accent: "#FDA4AF",
  },
  {
    key: "stabilize-rhythm",
    label: "Stabilize rhythm",
    description: "Use repeatable recovery anchors instead of waiting for the perfect moment to reset.",
    icon: "structure",
    accent: "#67E8F9",
  },
];

const supportTypes: Record<RecoveryPreferenceValue, RecoverySupportType> = {
  "quiet-time": {
    key: "quiet-time",
    label: "Quiet time",
    description: "Reducing noise and mental input so the system can stop performing for a moment.",
    icon: "privacy",
    accent: "#93C5FD",
  },
  sleep: {
    key: "sleep",
    label: "Sleep",
    description: "Protecting real restoration rather than treating tiredness as something to override.",
    icon: "time",
    accent: "#67E8F9",
  },
  movement: {
    key: "movement",
    label: "Movement",
    description: "Using physical motion to shift tension, fog, or emotional residue out of the system.",
    icon: "trend",
    accent: "#6EE7B7",
  },
  "emotional-expression": {
    key: "emotional-expression",
    label: "Emotional expression",
    description: "Giving feelings somewhere to go so they do not keep circulating without release.",
    icon: "insight",
    accent: "#FDA4AF",
  },
  "reduced-decisions": {
    key: "reduced-decisions",
    label: "Reduced decisions",
    description: "Lowering friction by simplifying choices, commitments, and day-to-day mental branching.",
    icon: "graph",
    accent: "#FCD34D",
  },
  "support-from-others": {
    key: "support-from-others",
    label: "Support from others",
    description: "Letting connection, help, and co-regulation reduce how much you are holding alone.",
    icon: "shield",
    accent: "#6EE7B7",
  },
  routine: {
    key: "routine",
    label: "Routine",
    description: "Using steadier patterns so recovery is easier to follow through on when capacity is low.",
    icon: "structure",
    accent: "#C4B5FD",
  },
  solitude: {
    key: "solitude",
    label: "Solitude",
    description: "Creating personal room where the system can settle without ongoing relational or sensory demand.",
    icon: "lock",
    accent: "#93C5FD",
  },
  nature: {
    key: "nature",
    label: "Nature",
    description: "Using low-stimulation environments to widen breathing room and lower internal pressure.",
    icon: "pattern",
    accent: "#67E8F9",
  },
  "lighter-workload": {
    key: "lighter-workload",
    label: "Lighter workload",
    description: "Reducing total demand so recovery does not have to compete with the same intensity all week.",
    icon: "trend",
    accent: "#FDA4AF",
  },
};

const blockers: Record<RecoveryBlockerValue, RecoveryBlocker> = {
  "keep-pushing": {
    key: "keep-pushing",
    label: "Pushing through instead of slowing down",
    description: "Recovery keeps getting postponed because functioning stays the priority even when the system is already asking to downshift.",
    icon: "graph",
    accent: "#FDA4AF",
  },
  "dont-protect-space": {
    key: "dont-protect-space",
    label: "Not protecting enough space",
    description: "There may be some recovery moments available, but they are not held firmly enough to become restorative.",
    icon: "lock",
    accent: "#93C5FD",
  },
  "dont-follow-through": {
    key: "dont-follow-through",
    label: "Knowing what helps but not following through",
    description: "The system may need smaller, easier recovery actions because capacity is too low for good intentions alone to work consistently.",
    icon: "structure",
    accent: "#C4B5FD",
  },
  "load-too-high": {
    key: "load-too-high",
    label: "Load stays too high for recovery to catch up",
    description: "The bigger issue is not a lack of insight, but that the demand profile is overwhelming ordinary recovery.",
    icon: "trend",
    accent: "#FCD34D",
  },
  "underestimate-depletion": {
    key: "underestimate-depletion",
    label: "Underestimating how depleted you are",
    description: "The system may need more protection than you have been giving it because the real depth of strain keeps getting downplayed.",
    icon: "signal",
    accent: "#FDA4AF",
  },
};

const strainAreas: Record<StrainAreaValue, StrainArea> = {
  workload: {
    key: "workload",
    label: "Workload",
    description: "Too much output pressure or responsibility density for current capacity.",
  },
  "emotional-stress": {
    key: "emotional-stress",
    label: "Emotional stress",
    description: "Emotional carrying, internal strain, or background tension draining available steadiness.",
  },
  relationships: {
    key: "relationships",
    label: "Relationships",
    description: "Relational stress, responsibility, or uncertainty reducing usable recovery room.",
  },
  uncertainty: {
    key: "uncertainty",
    label: "Uncertainty",
    description: "Unclear outcomes or unresolved questions keeping the system cognitively active.",
  },
  "lack-of-sleep": {
    key: "lack-of-sleep",
    label: "Lack of sleep",
    description: "Recovery windows are already shortened, which lowers resilience across the rest of the system.",
  },
  "mental-overthinking": {
    key: "mental-overthinking",
    label: "Mental overthinking",
    description: "The mind keeps processing after the day should have ended, making recovery shallower.",
  },
  "family-load": {
    key: "family-load",
    label: "Family load",
    description: "Care demands or emotional responsibility leaving less personal room than the week requires.",
  },
  "body-exhaustion": {
    key: "body-exhaustion",
    label: "Body exhaustion",
    description: "Physical depletion is now shaping how much emotional and cognitive load the system can carry well.",
  },
  overstimulation: {
    key: "overstimulation",
    label: "Overstimulation",
    description: "Sensory or environmental intensity keeping the nervous system too activated to recover cleanly.",
  },
  "decision-pressure": {
    key: "decision-pressure",
    label: "Decision pressure",
    description: "Too many choices, branching tasks, or mental switches steadily taxing available bandwidth.",
  },
};

const currentStateOptions: RecoveryChoiceOption[] = [
  {
    value: "light-reset",
    label: "A. I need a light reset",
    description: "The system feels a bit stretched, but not fundamentally destabilized.",
  },
  {
    value: "stabilization-over-motivation",
    label: "B. I need stabilization more than motivation",
    description: "What helps most right now is steadiness, not pressure to perform.",
  },
  {
    value: "need-recovery-space",
    label: "C. I need recovery space before I can function well again",
    description: "Capacity feels low enough that space itself is becoming part of the treatment.",
  },
  {
    value: "reduce-load-urgently",
    label: "D. I need to reduce load urgently, not just cope better",
    description: "Demand appears to be outrunning what the system can recycle.",
  },
];

const strainAreaOptions: RecoveryChoiceOption[] = [
  { value: "workload", label: "Workload" },
  { value: "emotional-stress", label: "Emotional stress" },
  { value: "relationships", label: "Relationships" },
  { value: "uncertainty", label: "Uncertainty" },
  { value: "lack-of-sleep", label: "Lack of sleep" },
  { value: "mental-overthinking", label: "Mental overthinking" },
  { value: "family-load", label: "Family load" },
  { value: "body-exhaustion", label: "Body exhaustion" },
  { value: "overstimulation", label: "Overstimulation" },
  { value: "decision-pressure", label: "Decision pressure" },
];

const timeAvailableOptions: RecoveryChoiceOption[] = [
  { value: "very-limited", label: "Very limited" },
  { value: "small-pockets", label: "Small pockets" },
  { value: "moderate-room", label: "Moderate room" },
  { value: "good-room", label: "Good room" },
];

const recoveryPreferenceOptions: RecoveryChoiceOption[] = [
  { value: "quiet-time", label: "Quiet time" },
  { value: "sleep", label: "Sleep" },
  { value: "movement", label: "Movement" },
  { value: "emotional-expression", label: "Emotional expression" },
  { value: "reduced-decisions", label: "Reduced decisions" },
  { value: "support-from-others", label: "Support from others" },
  { value: "routine", label: "Routine" },
  { value: "solitude", label: "Solitude" },
  { value: "nature", label: "Nature" },
  { value: "lighter-workload", label: "Lighter workload" },
];

const blockerOptions: RecoveryChoiceOption[] = [
  {
    value: "keep-pushing",
    label: "A. I keep pushing instead of slowing down",
    description: "Recovery keeps getting delayed because functioning wins the argument.",
  },
  {
    value: "dont-protect-space",
    label: "B. I do not protect enough space",
    description: "Rest may exist on paper, but it is not protected enough to work well.",
  },
  {
    value: "dont-follow-through",
    label: "C. I know what helps, but don't follow through",
    description: "The gap is between knowing and doing, often because capacity is already too low.",
  },
  {
    value: "load-too-high",
    label: "D. My load stays too high for recovery to catch up",
    description: "The system is trying to recover while still carrying too much at once.",
  },
  {
    value: "underestimate-depletion",
    label: "E. I underestimate how depleted I actually am",
    description: "The real depth of strain may be clearer after the fact than in the moment.",
  },
];

const urgencyOptions: RecoveryChoiceOption[] = [
  { value: "low", label: "Low" },
  { value: "mild", label: "Mild" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High" },
  { value: "very-high", label: "Very high" },
];

const finalSituationOptions: RecoveryChoiceOption[] = [
  {
    value: "cleaner-reset-rhythm",
    label: "A. I mainly need a cleaner reset rhythm",
    description: "The system may respond well to consistency and a simpler pattern of recovery support.",
  },
  {
    value: "stabilize-before-more",
    label: "B. I need to stabilize before taking on more",
    description: "More output is not the next move. A steadier base is.",
  },
  {
    value: "structured-recovery",
    label: "C. I need structured recovery, not just intention",
    description: "Recovery may need design, not only awareness.",
  },
  {
    value: "reduce-strain-actively",
    label: "D. I need to actively reduce strain or I'll keep falling behind",
    description: "The load itself now looks like part of the problem, not just a backdrop.",
  },
];

export const recoveryPlannerSteps: RecoveryPlannerStep[] = [
  {
    id: "emotional-load",
    step: 1,
    eyebrow: "Step 01 · Load read",
    hint: "Start with the felt load in the system. This gives the planner its base pressure read before it asks about support or structure.",
    question: "How emotionally loaded does your system feel right now?",
    kind: "slider",
    field: "emotionalLoad",
    label: "Current emotional load",
    minLabel: "Very light",
    maxLabel: "Very overloaded",
    markers: ["light", "busy", "heavy", "full"],
  },
  {
    id: "recovery-capacity",
    step: 2,
    eyebrow: "Step 02 · Capacity check",
    hint: "This is different from effort. Capacity is the actual usable room your system has for coping, recovering, and responding well.",
    question: "How much genuine recovery capacity do you feel you currently have?",
    kind: "slider",
    field: "recoveryCapacity",
    label: "Current recovery capacity",
    minLabel: "Very little",
    maxLabel: "Strong capacity",
    markers: ["low", "mixed", "steady", "strong"],
  },
  {
    id: "state-read",
    step: 3,
    eyebrow: "Step 03 · State read",
    hint: "Choose the statement that best captures what kind of help would actually feel useful right now.",
    question: "What feels most true right now?",
    kind: "segmented",
    field: "currentState",
    options: currentStateOptions,
    variant: "cards",
  },
  {
    id: "strain-areas",
    step: 4,
    eyebrow: "Step 04 · Load sources",
    hint: "Select the areas currently taking the most out of you. The planner uses these to build the priority ladder and reset path.",
    question: "Which areas are taking the most out of you right now?",
    kind: "multi-select",
    field: "strainAreas",
    limit: 4,
    options: strainAreaOptions,
  },
  {
    id: "time-available",
    step: 5,
    eyebrow: "Step 05 · Recovery room",
    hint: "Planning only becomes useful when it respects real constraints. Choose the amount of recovery room you can realistically protect.",
    question: "How much time do you realistically have for recovery support in the next few days?",
    kind: "segmented",
    field: "timeAvailable",
    options: timeAvailableOptions,
    variant: "segments",
  },
  {
    id: "recovery-preferences",
    step: 6,
    eyebrow: "Step 06 · What actually helps",
    hint: "This is not about ideal advice. It is about what genuinely helps when it works, so the planner can recommend something believable.",
    question: "What kind of recovery helps you most when it actually works?",
    kind: "multi-select",
    field: "recoveryPreferences",
    limit: 3,
    options: recoveryPreferenceOptions,
  },
  {
    id: "support-level",
    step: 7,
    eyebrow: "Step 07 · Support check",
    hint: "Support includes emotional backing, practical help, and the sense that you do not have to regulate everything by yourself.",
    question: "How supported do you currently feel?",
    kind: "slider",
    field: "supportLevel",
    label: "Current support level",
    minLabel: "Very unsupported",
    maxLabel: "Strongly supported",
    markers: ["alone", "thin", "some", "held"],
  },
  {
    id: "recovery-blocker",
    step: 8,
    eyebrow: "Step 08 · Recovery blocker",
    hint: "Choose the blocker that slows recovery most. The output will use it to adjust the reset intensity and first priority.",
    question: "What usually slows your recovery most?",
    kind: "segmented",
    field: "recoveryBlocker",
    options: blockerOptions,
    variant: "cards",
  },
  {
    id: "sleep-restoration",
    step: 9,
    eyebrow: "Step 09 · restoration support",
    hint: "Sleep is not the whole recovery plan, but it changes how much room the system has to stabilize or follow through on anything else.",
    question: "How restored does your sleep or overnight recovery feel lately?",
    kind: "slider",
    field: "sleepRestoration",
    label: "Sleep / overnight restoration",
    minLabel: "Barely restoring",
    maxLabel: "Clearly restoring",
    markers: ["thin", "mixed", "better", "steady"],
  },
  {
    id: "activation-level",
    step: 10,
    eyebrow: "Step 10 · activation level",
    hint: "A system can need recovery not only because it is sad or tired, but because it is still too activated, overstimulated, or running hot.",
    question: "How activated, overstimulated, or hard to downshift does your system feel right now?",
    kind: "slider",
    field: "activationLevel",
    label: "Current activation level",
    minLabel: "Mostly settled",
    maxLabel: "Very activated",
    markers: ["settled", "busy", "activated", "wired"],
  },
  {
    id: "boundary-protection",
    step: 11,
    eyebrow: "Step 11 · protection around recovery",
    hint: "Recovery space only works if it is protected enough to stay real once the day starts demanding things again.",
    question: "How protected are your boundaries around recovery time and emotional capacity right now?",
    kind: "segmented",
    field: "boundaryProtection",
    options: [
      { value: "strong", label: "Strong" },
      { value: "some", label: "Some" },
      { value: "thin", label: "Thin" },
      { value: "very-thin", label: "Very thin" },
    ],
    variant: "segments",
  },
  {
    id: "follow-through-confidence",
    step: 12,
    eyebrow: "Step 12 · plan follow-through",
    hint: "This is not about whether recovery would be a good idea. It is about how likely the current system is to actually follow a recovery plan through.",
    question: "How confident are you that your current capacity could follow through on a realistic recovery plan?",
    kind: "slider",
    field: "followThroughConfidence",
    label: "Follow-through confidence",
    minLabel: "Very low",
    maxLabel: "Quite strong",
    markers: ["low", "mixed", "possible", "stronger"],
  },
  {
    id: "recovery-consistency",
    step: 13,
    eyebrow: "Step 13 · consistency of repair",
    hint: "Recovery is harder when helpful actions happen only after breakdown. Consistency often matters more than intensity here.",
    question: "How consistent has your recovery support actually been lately?",
    kind: "segmented",
    field: "recoveryConsistency",
    options: [
      { value: "consistent", label: "Consistent" },
      { value: "fairly-consistent", label: "Fairly consistent" },
      { value: "inconsistent", label: "Inconsistent" },
      { value: "very-inconsistent", label: "Very inconsistent" },
    ],
    variant: "cards",
  },
  {
    id: "urgency",
    step: 14,
    eyebrow: "Step 14 · Urgency",
    hint: "Urgency helps the planner decide how protective the first few days need to be.",
    question: "How urgent does recovery feel right now?",
    kind: "segmented",
    field: "urgency",
    options: urgencyOptions,
    variant: "segments",
  },
  {
    id: "final-situation",
    step: 15,
    eyebrow: "Step 15 · Final planning read",
    hint: "This last step tunes the planner toward the level of structure your current state is most likely to follow through on.",
    question: "Which statement feels closest to your current situation?",
    kind: "segmented",
    field: "finalSituation",
    options: finalSituationOptions,
    variant: "cards",
  },
];

export const relatedRecoveryTools: RelatedRecoveryTool[] = [
  {
    title: "Burnout Risk Audit",
    description: "Check whether depletion, recovery debt, and emotional wear are feeding the need for a more protective recovery path.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Sleep Pressure Check",
    description: "See whether under-recovery, inconsistent nights, or next-day carryover are quietly widening the load-capacity gap.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "time",
    href: buildToolHref({ slug: "sleep-pressure-check", categorySlug: "sleep-recovery" }),
  },
  {
    title: "Emotional Trigger Decoder",
    description: "Map the specific activations that keep reloading your system when you are trying to settle and recover.",
    category: "Emotional Regulation",
    minutes: "4 min",
    icon: "pattern",
    href: buildToolHref({ slug: "emotional-trigger-decoder", categorySlug: "emotional-regulation" }),
  },
  {
    title: "Life Balance Visualizer",
    description: "See whether overloaded life domains, weak personal room, or thin recovery support are distorting the whole system.",
    category: "Life Balance & Habits",
    minutes: "4 min",
    icon: "structure",
    href: buildToolHref({ slug: "life-balance-visualizer", categorySlug: "life-balance-habits" }),
  },
];

export const emotionalRecoveryFaqItems: FaqItem[] = [
  {
    question: "What does an emotional recovery path actually mean?",
    answer:
      "It is a planning read, not a diagnosis. The path summarizes how much recovery your system seems to need right now and what level of support or protection is most realistic.",
  },
  {
    question: "Why can I know what I need but still not recover well?",
    answer:
      "Because insight is not the same as capacity. People often know what helps, but lack the time, support, or usable bandwidth to follow through consistently while still carrying the same load.",
  },
  {
    question: "What is the difference between recovery and avoidance?",
    answer:
      "Recovery restores usable capacity. Avoidance tries to escape discomfort without changing the underlying strain. Real recovery usually leaves you steadier and more able to engage afterward, not more delayed or fragmented.",
  },
  {
    question: "Can low support make recovery slower?",
    answer:
      "Yes. Low support often means you are doing more regulation, decision-making, and emotional carrying alone, which leaves less room for recovery to catch up.",
  },
  {
    question: "Why does capacity matter more than motivation?",
    answer:
      "Because motivation cannot replace nervous-system room, sleep, emotional margin, or practical support. When capacity is low, even useful recovery habits can feel hard to initiate or sustain.",
  },
  {
    question: "How often should I rebuild this plan?",
    answer:
      "Every one to two weeks is usually enough, or sooner if load, sleep, support, or urgency change substantially. The plan is meant to track reality, not stay static.",
  },
  {
    question: "What should I do if my load stays higher than my recovery space?",
    answer:
      "Treat that as a structural signal. The most helpful move is usually reducing demand, adding support, or protecting time more actively rather than asking the same level of capacity to keep absorbing the gap.",
  },
  {
    question: "What if my recovery plan feels too simple for how overwhelmed I am?",
    answer:
      "Simple is often a strength, not a weakness. When load is high, the most useful plan is the one your current capacity can actually follow. Complexity can quietly become one more thing to manage.",
  },
  {
    question: "Should I focus on support or reducing load first?",
    answer:
      "Whichever change creates real room fastest. Sometimes support is the missing lever. Sometimes the bigger win is immediately lowering strain so recovery finally has a chance to land.",
  },
  {
    question: "How do I know the plan is working even before I feel fully better?",
    answer:
      "Look for earlier signals: slightly more steadiness, less urgency, easier follow-through on small recovery steps, or a clearer sense of what the system can and cannot handle right now.",
  },
];

export const emotionalRecoveryStoryBlock = {
  eyebrow: "How this often feels",
  title: "The most relieving part is often having a realistic path, not just being told to rest more.",
  quote:
    "This often feels like knowing you are overwhelmed and being too tired for vague advice. What helps most is not another reminder to rest. It is having a plan that fits the amount of room that actually exists right now. Relief begins when recovery stops feeling like another demand and starts feeling doable.",
  takeaway:
    "That is the purpose of this planner. Recovery usually becomes more possible when the plan matches current capacity instead of an ideal version of what recovery should look like.",
  toneLabel: "Planning relief",
  accent: "#6EE7B7",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What emotional recovery actually means",
    paragraphs: [
      "Emotional recovery is not the same as calming down for a moment. It is the broader process by which the system regains enough steadiness, margin, and usable energy to respond well again after strain. That includes nervous-system settling, emotional processing, restored clarity, and the return of enough inner room to tolerate life without every task feeling heavier than it should. In other words, recovery is not only about feeling better. It is about becoming resourced again.",
      "This matters because many people treat recovery as optional maintenance. They assume they can keep functioning first and replenish later. But the human system does not simply pause the cost of emotional load until a more convenient time. If stress, grief, relational tension, sleep disruption, or decision pressure stay active long enough, the load keeps shaping the baseline. Recovery then becomes less about a pleasant extra and more about whether the system has enough support to keep carrying life without becoming chronically narrowed.",
      "A recovery planner is useful because it shifts the question from 'what is wrong with me?' to 'what does my system have room for right now?' That is a more accurate and more compassionate frame. It recognizes that people do not fail at recovery only because they lack discipline. Often they are trying to recover in conditions that make recovery structurally unlikely. A better plan starts by reading those conditions honestly.",
    ],
  },
  {
    title: "Why insight alone does not create recovery",
    paragraphs: [
      "Insight is valuable, but it does not automatically produce change. Many people already know they are overloaded, under-rested, emotionally saturated, or stretched too thin. The problem is not that the truth is hidden. The problem is that recovery still has to compete with the same schedule, responsibilities, stimulation, and internal pressure that created the strain in the first place. Awareness without conditions can become frustrating because the person sees the need clearly but still cannot create enough space for it to happen.",
      "That is why emotionally intelligent people often remain depleted longer than they expect. They may understand themselves well, name their patterns accurately, and even know the tools that help. Yet if time is fragmented, support is low, decisions remain high, and the load keeps reloading every day, recovery becomes hard to follow through on even when the person deeply wants it. The system is not being resistant. It is being realistic about what current conditions allow.",
      "A planning-oriented tool tries to solve that gap. Instead of stopping at a score, it asks what level of recovery is realistic, what the main blocker is, where support is strong or thin, and what a believable short reset path would look like. That produces something more useful than generic advice because it respects the difference between knowing and having room.",
    ],
  },
  {
    title: "Why recovery depends on capacity, not just motivation",
    paragraphs: [
      "Motivation often gets too much credit in recovery conversations. People assume that if they really wanted rest, boundaries, or decompression badly enough, they would simply make it happen. But capacity changes what is realistically available. Capacity includes sleep quality, nervous-system margin, emotional steadiness, support, physical energy, and the amount of decision bandwidth left in the day. When capacity is low, even simple self-support can feel surprisingly hard to initiate.",
      "This is why a person may intend to rest, journal, go outside, talk to someone, or simplify the week, then still end up pushing through again. From the outside it can look inconsistent. From the inside it often reflects a system already too taxed to organize its own repair very well. The next helpful move is not more shame. It is designing smaller, more protected, more realistic recovery steps that match current capacity rather than the ideal version of it.",
      "Capacity-first planning changes the emotional tone of recovery. It removes the subtle accusation that you should be able to bounce back faster if you were doing things correctly. Instead it asks a steadier question: given the load, support, and space actually available, what kind of plan can the system follow without being overwhelmed by the plan itself? That is where sustainable recovery usually begins.",
    ],
  },
];

export const dimensionEditorial: DimensionEditorialBlock[] = [
  {
    key: "loadPressure",
    paragraphs: [
      "Load Pressure measures how much demand is currently sitting on the system before recovery has a chance to do its work. It includes emotional load itself, the density of active strain sources, the blocker slowing recovery, and the felt urgency around needing relief.",
      "When this dimension is high, recovery often feels deceptively difficult because the system is trying to settle while still carrying too much. The answer is usually not better performance inside the same pressure. It is lowering the amount of strain that recovery has to metabolize in the first place.",
    ],
  },
  {
    key: "capacityStrength",
    paragraphs: [
      "Capacity Strength reflects how much usable room you appear to have for coping, adapting, and recovering right now. It is less about personality and more about whether the system still has enough range to absorb stress without becoming brittle or overextended.",
      "When this score drops, people often start feeling confused by how hard ordinary things suddenly seem. That confusion matters, because it often creates self-judgment. A weaker capacity score usually means the system needs protection and restoration, not criticism for struggling with what used to feel manageable.",
    ],
  },
  {
    key: "recoverySupport",
    paragraphs: [
      "Recovery Support looks at the conditions around recovery, not only the desire for it. It includes time, support from other people, and the kinds of recovery inputs that genuinely help when they are available. This dimension matters because recovery rarely happens in isolation from context.",
      "If support is low, recovery can become harder than it looks from the outside. Even good habits may not land when there is not enough help, not enough protected space, or too much ongoing carrying. Strengthening support often makes recovery feel possible again faster than simply trying harder does.",
    ],
  },
  {
    key: "resetFeasibility",
    paragraphs: [
      "Reset Feasibility estimates whether a short recovery path can realistically happen from where you are starting. It combines capacity, support, time, and blockers to ask a practical question: could the system actually follow through on a reset right now, or would the plan itself become another pressure source?",
      "This dimension is especially useful because it helps prevent unrealistic planning. A good recovery path is not the most impressive one. It is the one that respects the current state of the person enough to be followed without collapsing under its own ambition.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Continuing to push through depletion",
    body:
      "When the system keeps performing instead of downshifting, recovery gets postponed until it becomes much harder to access. The issue is often not laziness, but never reaching a true off-ramp.",
  },
  {
    title: "Underestimating emotional load",
    body:
      "Many people normalize ongoing tension, relational stress, and quiet pressure. When the real load is minimized, the recovery response usually stays too small for what the system actually needs.",
  },
  {
    title: "Weak support and too little protected space",
    body:
      "Recovery slows when everything depends on your own effort. Without enough practical help, emotional holding, or protected time, even useful recovery steps can become difficult to sustain.",
  },
  {
    title: "Poor sleep, too many decisions, and immediate bounce-back expectations",
    body:
      "Low sleep, constant decisions, and the expectation that you should recover quickly create a compounding pattern. The system never gets ahead because every small gain is asked to carry too much too soon.",
  },
];

export const restorationBlocks: InfoCardBlock[] = [
  {
    title: "Reducing load before adding effort",
    body:
      "When recovery need is high, relief usually comes faster from lowering demand than from layering on more self-improvement. Simplify first, then rebuild from steadier ground.",
  },
  {
    title: "Protecting recovery windows",
    body:
      "Small protected windows often work better than vague intentions to rest later. Recovery becomes real when time is defended enough that the system can actually settle inside it.",
  },
  {
    title: "Lowering stimulation and decision drag",
    body:
      "Many systems recover faster when noise, inputs, and unnecessary choices drop. That frees capacity for repair instead of leaking it into friction and constant reactivity.",
  },
  {
    title: "Using realistic pacing and stronger support",
    body:
      "Recovery holds better when the plan matches present capacity. Smaller rhythms, clearer support, and lower expectations often produce more real progress than a dramatic reset that cannot be sustained.",
  },
];

export const nextStepParagraphs = [
  "If your Recovery Need Score comes back elevated, read that as a planning signal rather than a verdict. The goal is not to become impressive at recovery. It is to understand what kind of recovery your system can realistically use right now, and what needs to change around it so that relief is not constantly being canceled out by the same ongoing load.",
  "Start with the first priority, not the whole list. For some people that means reducing strain. For others it means protecting time, sleeping more consistently, lowering decisions, or asking for support instead of carrying everything alone. The most effective first move is usually the one that gives the system a little more breathing room almost immediately.",
  "If your path points toward decompression or rebuilding capacity, treat that as a sign to simplify expectations. A recovery plan is not supposed to become another pressure source. When the system is already carrying too much, success often looks like smaller structure, stronger protection, and a week that stops asking you to bounce back faster than your current capacity can support.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Emotional Recovery Planner Guide",
  description:
    "A structured guide for reducing load, protecting recovery windows, and rebuilding capacity in a realistic, sustainable way.",
  buttonLabel: "View Next Step",
};

const stateSeverityMap: Record<RecoveryStateValue, number> = {
  "light-reset": 18,
  "stabilization-over-motivation": 44,
  "need-recovery-space": 72,
  "reduce-load-urgently": 92,
};

const timeSupportMap: Record<TimeAvailableValue, number> = {
  "very-limited": 18,
  "small-pockets": 38,
  "moderate-room": 68,
  "good-room": 88,
};

const blockerSeverityMap: Record<RecoveryBlockerValue, number> = {
  "keep-pushing": 70,
  "dont-protect-space": 66,
  "dont-follow-through": 60,
  "load-too-high": 92,
  "underestimate-depletion": 76,
};

const boundaryProtectionSeverityMap: Record<BoundaryProtectionValue, number> = {
  strong: 18,
  some: 40,
  thin: 72,
  "very-thin": 92,
};

const recoveryConsistencySeverityMap: Record<RecoveryConsistencyValue, number> = {
  consistent: 16,
  "fairly-consistent": 36,
  inconsistent: 70,
  "very-inconsistent": 92,
};

const urgencySeverityMap: Record<UrgencyValue, number> = {
  low: 12,
  mild: 28,
  moderate: 52,
  high: 78,
  "very-high": 94,
};

const finalSituationSeverityMap: Record<FinalSituationValue, number> = {
  "cleaner-reset-rhythm": 18,
  "stabilize-before-more": 44,
  "structured-recovery": 68,
  "reduce-strain-actively": 92,
};

const supportBaseScore: Record<RecoveryPreferenceValue, number> = {
  "quiet-time": 72,
  sleep: 86,
  movement: 74,
  "emotional-expression": 68,
  "reduced-decisions": 82,
  "support-from-others": 80,
  routine: 76,
  solitude: 70,
  nature: 74,
  "lighter-workload": 88,
};

const priorityWeightsByStrain: Record<StrainAreaValue, Array<{ key: PriorityKey; amount: number }>> = {
  workload: [
    { key: "reduce-strain", amount: 24 },
    { key: "protect-time", amount: 10 },
    { key: "lower-decisions", amount: 8 },
  ],
  "emotional-stress": [
    { key: "seek-support", amount: 18 },
    { key: "reduce-overstimulation", amount: 12 },
    { key: "stabilize-rhythm", amount: 6 },
  ],
  relationships: [
    { key: "seek-support", amount: 20 },
    { key: "protect-time", amount: 8 },
  ],
  uncertainty: [
    { key: "lower-decisions", amount: 18 },
    { key: "reduce-strain", amount: 8 },
    { key: "reduce-overstimulation", amount: 6 },
  ],
  "lack-of-sleep": [
    { key: "improve-sleep", amount: 26 },
    { key: "stabilize-rhythm", amount: 12 },
    { key: "restore-body", amount: 10 },
  ],
  "mental-overthinking": [
    { key: "reduce-overstimulation", amount: 18 },
    { key: "lower-decisions", amount: 12 },
  ],
  "family-load": [
    { key: "protect-time", amount: 18 },
    { key: "seek-support", amount: 12 },
  ],
  "body-exhaustion": [
    { key: "restore-body", amount: 24 },
    { key: "improve-sleep", amount: 12 },
    { key: "reduce-strain", amount: 8 },
  ],
  overstimulation: [
    { key: "reduce-overstimulation", amount: 24 },
    { key: "protect-time", amount: 10 },
  ],
  "decision-pressure": [
    { key: "lower-decisions", amount: 24 },
    { key: "reduce-strain", amount: 10 },
  ],
};

const priorityWeightsByBlocker: Record<RecoveryBlockerValue, Array<{ key: PriorityKey; amount: number }>> = {
  "keep-pushing": [
    { key: "protect-time", amount: 20 },
    { key: "reduce-strain", amount: 16 },
    { key: "stabilize-rhythm", amount: 10 },
  ],
  "dont-protect-space": [
    { key: "protect-time", amount: 24 },
    { key: "reduce-overstimulation", amount: 8 },
  ],
  "dont-follow-through": [
    { key: "stabilize-rhythm", amount: 20 },
    { key: "lower-decisions", amount: 10 },
    { key: "protect-time", amount: 8 },
  ],
  "load-too-high": [
    { key: "reduce-strain", amount: 28 },
    { key: "seek-support", amount: 10 },
    { key: "lower-decisions", amount: 8 },
  ],
  "underestimate-depletion": [
    { key: "restore-body", amount: 18 },
    { key: "improve-sleep", amount: 12 },
    { key: "stabilize-rhythm", amount: 8 },
  ],
};

const supportAlignment: Record<RecoveryPreferenceValue, Array<{ key: PriorityKey; amount: number }>> = {
  "quiet-time": [
    { key: "reduce-overstimulation", amount: 14 },
    { key: "protect-time", amount: 10 },
  ],
  sleep: [
    { key: "improve-sleep", amount: 18 },
    { key: "restore-body", amount: 8 },
  ],
  movement: [
    { key: "restore-body", amount: 14 },
    { key: "stabilize-rhythm", amount: 8 },
  ],
  "emotional-expression": [
    { key: "seek-support", amount: 12 },
    { key: "reduce-strain", amount: 6 },
  ],
  "reduced-decisions": [
    { key: "lower-decisions", amount: 18 },
    { key: "protect-time", amount: 6 },
  ],
  "support-from-others": [
    { key: "seek-support", amount: 18 },
    { key: "reduce-strain", amount: 6 },
  ],
  routine: [
    { key: "stabilize-rhythm", amount: 16 },
    { key: "protect-time", amount: 6 },
  ],
  solitude: [
    { key: "reduce-overstimulation", amount: 12 },
    { key: "protect-time", amount: 8 },
  ],
  nature: [
    { key: "restore-body", amount: 8 },
    { key: "reduce-overstimulation", amount: 12 },
  ],
  "lighter-workload": [
    { key: "reduce-strain", amount: 18 },
    { key: "protect-time", amount: 10 },
  ],
};

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
  return recoveryBands.find((band) => score >= band.min && score <= band.max) ?? recoveryBands[0];
}

function getDefaultAnswers(answers: RecoveryAnswers) {
  return {
    emotionalLoad: typeof answers.emotionalLoad === "number" ? clampScore(answers.emotionalLoad) : 52,
    recoveryCapacity: typeof answers.recoveryCapacity === "number" ? clampScore(answers.recoveryCapacity) : 46,
    currentState: answers.currentState ?? "stabilization-over-motivation",
    strainAreas: answers.strainAreas,
    timeAvailable: answers.timeAvailable ?? "small-pockets",
    recoveryPreferences: answers.recoveryPreferences,
    supportLevel: typeof answers.supportLevel === "number" ? clampScore(answers.supportLevel) : 44,
    recoveryBlocker: answers.recoveryBlocker ?? "dont-protect-space",
    sleepRestoration: typeof answers.sleepRestoration === "number" ? clampScore(answers.sleepRestoration) : 44,
    activationLevel: typeof answers.activationLevel === "number" ? clampScore(answers.activationLevel) : 52,
    boundaryProtection: answers.boundaryProtection ?? "some",
    followThroughConfidence:
      typeof answers.followThroughConfidence === "number" ? clampScore(answers.followThroughConfidence) : 46,
    recoveryConsistency: answers.recoveryConsistency ?? "inconsistent",
    urgency: answers.urgency ?? "moderate",
    finalSituation: answers.finalSituation ?? "structured-recovery",
  };
}

function getSupportType(key: RecoveryPreferenceValue) {
  return supportTypes[key];
}

function getPriority(key: PriorityKey) {
  return priorityDefinitions.find((priority) => priority.key === key) ?? priorityDefinitions[0];
}

function getPathTemplate(band: RecoveryBand, topPriority: RecoveryPriorityScore, supportType: RecoverySupportType): ResetPathStage[] {
  if (band.key === "light-reset-path") {
    return [
      {
        range: "Day 1-2",
        title: "Clear the noise",
        description: `Use ${supportType.label.toLowerCase()} to lower ambient pressure and make the week feel less crowded.`,
        accent: "#67E8F9",
      },
      {
        range: "Day 3-4",
        title: "Protect a small window",
        description: `Keep one recovery pocket consistent so ${topPriority.label.toLowerCase()} becomes easier instead of idealized.`,
        accent: "#93C5FD",
      },
      {
        range: "Day 5-7",
        title: "Reinforce what works",
        description: "Carry forward the lightest rhythm that actually restores steadiness, rather than starting over each day.",
        accent: "#6EE7B7",
      },
    ];
  }

  if (band.key === "stabilization-path") {
    return [
      {
        range: "Day 1-2",
        title: "Stabilize the floor",
        description: `Lower demand enough that ${topPriority.label.toLowerCase()} can happen without fighting the whole schedule.`,
        accent: "#93C5FD",
      },
      {
        range: "Day 3-4",
        title: "Protect capacity",
        description: `Use ${supportType.label.toLowerCase()} as a repeatable anchor instead of waiting until recovery feels convenient.`,
        accent: "#6EE7B7",
      },
      {
        range: "Day 5-7",
        title: "Simplify the rhythm",
        description: "Remove avoidable friction and keep the week quieter, steadier, and less decision-heavy than usual.",
        accent: "#C4B5FD",
      },
    ];
  }

  if (band.key === "recovery-support-path") {
    return [
      {
        range: "Day 1-2",
        title: "Reduce obvious strain",
        description: `Cut back wherever the system is clearly over-carrying so ${topPriority.label.toLowerCase()} starts immediately.`,
        accent: "#6EE7B7",
      },
      {
        range: "Day 3-4",
        title: "Add real support",
        description: `Build ${supportType.label.toLowerCase()} into the plan as something concrete, not something you hope to remember.`,
        accent: "#93C5FD",
      },
      {
        range: "Day 5-7",
        title: "Rebuild a steadier baseline",
        description: "Keep the reset realistic and repeatable so capacity rises without the plan becoming another source of pressure.",
        accent: "#FCD34D",
      },
    ];
  }

  if (band.key === "deep-decompression-path") {
    return [
      {
        range: "Day 1-2",
        title: "Stop stacking demand",
        description: `Make ${topPriority.label.toLowerCase()} the rule, not a bonus, so decompression can actually begin.`,
        accent: "#FCD34D",
      },
      {
        range: "Day 3-4",
        title: "Widen space and lower input",
        description: `Use ${supportType.label.toLowerCase()} to bring stimulation down and let the system stop bracing as often.`,
        accent: "#93C5FD",
      },
      {
        range: "Day 5-7",
        title: "Re-enter more carefully",
        description: "Rebuild rhythm from a quieter baseline instead of snapping back into the same intensity that created the need to decompress.",
        accent: "#FDA4AF",
      },
    ];
  }

  return [
    {
      range: "Day 1-2",
      title: "Cut to essentials",
      description: `Treat ${topPriority.label.toLowerCase()} as urgent protection so the system is no longer absorbing full demand while depleted.`,
      accent: "#FDA4AF",
    },
    {
      range: "Day 3-4",
      title: "Protect recovery windows",
      description: `Anchor the week around ${supportType.label.toLowerCase()} and fewer unnecessary decisions.`,
      accent: "#93C5FD",
    },
    {
      range: "Day 5-7",
      title: "Rebuild capacity slowly",
      description: "Keep the baseline smaller, simpler, and more supported until resilience starts returning on its own.",
      accent: "#C4B5FD",
    },
  ];
}

export function getInitialRecoveryAnswers(): RecoveryAnswers {
  return {
    strainAreas: [],
    recoveryPreferences: [],
  };
}

export function isRecoveryStepComplete(step: RecoveryPlannerStep, answers: RecoveryAnswers) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  return typeof answers[step.field] === "string";
}

export function calculateEmotionalRecoveryResult(answers: RecoveryAnswers): RecoveryPlannerResult {
  const resolved = getDefaultAnswers(answers);
  const answeredCount = recoveryPlannerSteps.filter((step) => isRecoveryStepComplete(step, answers)).length;
  const completionRatio = answeredCount / recoveryPlannerSteps.length;

  const capacityInverse = 100 - resolved.recoveryCapacity;
  const stateSeverity = stateSeverityMap[resolved.currentState];
  const strainDensitySeverity = clampScore((resolved.strainAreas.length / 4) * 100);
  const timeSupport = timeSupportMap[resolved.timeAvailable];
  const preferenceSupport = resolved.recoveryPreferences.length
    ? clampScore(average(resolved.recoveryPreferences.map((value) => supportBaseScore[value])))
    : 50;
  const supportInverse = 100 - resolved.supportLevel;
  const blockerSeverity = blockerSeverityMap[resolved.recoveryBlocker];
  const sleepRestorationInverse = 100 - resolved.sleepRestoration;
  const activationSeverity = resolved.activationLevel;
  const boundaryProtectionSeverity = boundaryProtectionSeverityMap[resolved.boundaryProtection];
  const followThroughInverse = 100 - resolved.followThroughConfidence;
  const recoveryConsistencySeverity = recoveryConsistencySeverityMap[resolved.recoveryConsistency];
  const urgencySeverity = urgencySeverityMap[resolved.urgency];
  const finalSeverity = finalSituationSeverityMap[resolved.finalSituation];

  const score = clampScore(
    resolved.emotionalLoad * 0.1 +
      capacityInverse * 0.1 +
      stateSeverity * 0.08 +
      strainDensitySeverity * 0.08 +
      (100 - timeSupport) * 0.06 +
      (100 - preferenceSupport) * 0.05 +
      supportInverse * 0.07 +
      blockerSeverity * 0.08 +
      sleepRestorationInverse * 0.07 +
      activationSeverity * 0.07 +
      boundaryProtectionSeverity * 0.06 +
      followThroughInverse * 0.06 +
      recoveryConsistencySeverity * 0.06 +
      urgencySeverity * 0.08 +
      finalSeverity * 0.08,
  );

  const dimensions: Record<RecoveryDimensionKey, number> = {
    loadPressure: clampScore(
      average([
        resolved.emotionalLoad,
        stateSeverity,
        strainDensitySeverity,
        blockerSeverity,
        activationSeverity,
        urgencySeverity,
      ]),
    ),
    capacityStrength: clampScore(
      average([
        resolved.recoveryCapacity,
        resolved.sleepRestoration,
        100 - resolved.emotionalLoad * 0.28,
        100 - activationSeverity * 0.22,
        100 - blockerSeverity * 0.18,
        100 - finalSeverity * 0.14,
      ]),
    ),
    recoverySupport: clampScore(
      average([
        resolved.supportLevel,
        timeSupport,
        preferenceSupport,
        100 - boundaryProtectionSeverity,
        100 - recoveryConsistencySeverity,
        100 - urgencySeverity * 0.18,
      ]),
    ),
    resetFeasibility: clampScore(
      average([
        resolved.recoveryCapacity,
        resolved.sleepRestoration,
        resolved.supportLevel,
        timeSupport,
        preferenceSupport,
        resolved.followThroughConfidence,
        100 - boundaryProtectionSeverity * 0.5,
        100 - recoveryConsistencySeverity * 0.4,
        100 - blockerSeverity * 0.5,
        100 - strainDensitySeverity * 0.32,
      ]),
    ),
  };

  const priorityValues: Record<PriorityKey, number> = {
    "reduce-strain": 0,
    "protect-time": 0,
    "improve-sleep": 0,
    "lower-decisions": 0,
    "seek-support": 0,
    "reduce-overstimulation": 0,
    "restore-body": 0,
    "stabilize-rhythm": 0,
  };

  resolved.strainAreas.forEach((area) => {
    priorityWeightsByStrain[area].forEach((weight) => {
      priorityValues[weight.key] += weight.amount;
    });
  });

  priorityWeightsByBlocker[resolved.recoveryBlocker].forEach((weight) => {
    priorityValues[weight.key] += weight.amount;
  });

  if (resolved.supportLevel <= 38) {
    priorityValues["seek-support"] += 16;
  }

  if (resolved.recoveryCapacity <= 38) {
    priorityValues["restore-body"] += 14;
    priorityValues["improve-sleep"] += 10;
  }

  if (resolved.sleepRestoration <= 42) {
    priorityValues["improve-sleep"] += 16;
    priorityValues["restore-body"] += 10;
  }

  if (resolved.activationLevel >= 68) {
    priorityValues["reduce-overstimulation"] += 18;
    priorityValues["protect-time"] += 8;
  }

  if (resolved.boundaryProtection === "thin" || resolved.boundaryProtection === "very-thin") {
    priorityValues["protect-time"] += 16;
    priorityValues["reduce-strain"] += 8;
  }

  if (resolved.recoveryConsistency === "inconsistent" || resolved.recoveryConsistency === "very-inconsistent") {
    priorityValues["stabilize-rhythm"] += 16;
  }

  if (timeSupport <= 38) {
    priorityValues["protect-time"] += 16;
    priorityValues["lower-decisions"] += 10;
  }

  if (urgencySeverity >= 78) {
    priorityValues["reduce-strain"] += 10;
    priorityValues["protect-time"] += 8;
  }

  const priorities = priorityDefinitions
    .map((priority) => ({
      ...priority,
      value: clampScore(priorityValues[priority.key]),
    }))
    .sort((left, right) => right.value - left.value);

  const supportScores = resolved.recoveryPreferences.map((value) => {
    const supportType = getSupportType(value);
    const alignment = supportAlignment[value].reduce((sum, item) => sum + (priorityValues[item.key] ?? 0) * (item.amount / 20), 0);

    return {
      ...supportType,
      value: clampScore(supportBaseScore[value] * 0.55 + alignment),
    };
  });

  const mostUsefulSupportType =
    supportScores.sort((left, right) => right.value - left.value)[0] ?? getSupportType("quiet-time");

  const band = getBand(score);
  const primaryStage = recoveryStages[band.key];
  const primaryBlocker = blockers[resolved.recoveryBlocker];
  const topPriority = priorities[0];
  const selectedStrainAreas = resolved.strainAreas.map((area) => strainAreas[area]);
  const selectedSupportTypes = resolved.recoveryPreferences.map((type) => supportTypes[type]);
  const gap = clampScore(Math.max(0, resolved.emotionalLoad - resolved.recoveryCapacity));
  const resetPath = getPathTemplate(band, topPriority, mostUsefulSupportType);

  const signalLabel = `Your current pattern suggests that recovery is being shaped most by ${topPriority.label.toLowerCase()}, while ${mostUsefulSupportType.label.toLowerCase()} looks like the most believable support lever to use next.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} Right now your load sits ${gap} points ${gap >= 8 ? "above" : "from"} current capacity, and the biggest blocker appears to be ${primaryBlocker.label.toLowerCase()}.`;
  const firstNeedInsight = `${band.firstNeedLead} In practical terms, the best first move is to lean into ${topPriority.label.toLowerCase()} and make ${mostUsefulSupportType.label.toLowerCase()} easier to access than pushing through.`;

  return {
    score,
    band,
    completionRatio,
    isComplete: answeredCount === recoveryPlannerSteps.length,
    dimensions,
    primaryStage,
    primaryBlocker,
    mostUsefulSupportType,
    resetIntensity: primaryStage.intensity,
    priorities,
    resetPath,
    signalLabel,
    interpretation,
    standout,
    firstNeedInsight,
    topPriority,
    selectedStrainAreas,
    selectedSupportTypes,
    emotionalLoad: resolved.emotionalLoad,
    recoveryCapacity: resolved.recoveryCapacity,
    supportLevel: resolved.supportLevel,
    urgencyLevel: urgencySeverity,
    gap,
  };
}

export const heroPreviewResult = calculateEmotionalRecoveryResult({
  emotionalLoad: 76,
  recoveryCapacity: 34,
  currentState: "need-recovery-space",
  strainAreas: ["workload", "lack-of-sleep", "mental-overthinking", "overstimulation"],
  timeAvailable: "small-pockets",
  recoveryPreferences: ["sleep", "quiet-time", "reduced-decisions"],
  supportLevel: 42,
  recoveryBlocker: "load-too-high",
  sleepRestoration: 34,
  activationLevel: 74,
  boundaryProtection: "thin",
  followThroughConfidence: 38,
  recoveryConsistency: "inconsistent",
  urgency: "high",
  finalSituation: "structured-recovery",
});
