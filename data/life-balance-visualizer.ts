import type { IconName } from "./tools-home";
import { buildToolHref, buildToolsHref } from "./tools-home";

export type BalanceDomainKey =
  | "energy"
  | "work-load"
  | "sleep-recovery"
  | "emotional-stability"
  | "relationships-support"
  | "focus-mental-space"
  | "personal-time-space"
  | "physical-care-routine"
  | "daily-structure"
  | "boundaries-room"
  | "home-environment"
  | "financial-stability"
  | "play-joy"
  | "community-belonging"
  | "purpose-direction";

export type BalanceBandKey =
  | "stable-balance"
  | "mild-imbalance"
  | "uneven-load-pattern"
  | "high-life-load-distortion"
  | "recovery-critical-imbalance";

export type BalanceDimensionKey =
  | "capacitySupport"
  | "recoveryStability"
  | "emotionalGrounding"
  | "structuralBalance";

export type BalanceDomain = {
  key: BalanceDomainKey;
  label: string;
  prompt: string;
  accent: string;
  icon: IconName;
  target: number;
};

export type DomainAnswer = {
  current?: number;
  ideal: number;
  useIdeal: boolean;
};

export type BalanceAnswers = Record<BalanceDomainKey, DomainAnswer>;

export type BalanceBand = {
  key: BalanceBandKey;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  rebalanceLead: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type BalanceDimension = {
  key: BalanceDimensionKey;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type RelatedBalanceTool = {
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

export type BalanceResult = {
  balanceIndex: number;
  imbalanceScore: number;
  band: BalanceBand;
  completionRatio: number;
  isComplete: boolean;
  balanceGap: number;
  spreadLevel: number;
  distortionLevel: number;
  recoveryPressure: number;
  domains: Array<
    BalanceDomain & {
      current: number;
      ideal: number;
      useIdeal: boolean;
      gap: number;
      priority: number;
    }
  >;
  weakestZone: BalanceDomain;
  strongestZone: BalanceDomain;
  primaryImbalanceDriver: BalanceDomain;
  recoveryPriorityArea: BalanceDomain;
  strongestSupportingArea: BalanceDomain;
  dimensions: Record<BalanceDimensionKey, number>;
  signalLabel: string;
  interpretation: string;
  standout: string;
  rebalanceInsight: string;
};

export const lifeBalanceMetadata = {
  eyebrow: "LIFE BALANCE TOOL",
  title: "Life Balance Visualizer",
  description:
    "Map where life feels steady, stretched, under-supported, or harder to recover from. This tool turns a vague sense of imbalance into a clearer picture of load, support, and recovery.",
  metadata: [
    { icon: "time" as IconName, label: "2-4 minutes" },
    { icon: "structure" as IconName, label: "Free tool" },
    { icon: "privacy" as IconName, label: "Private by design" },
  ],
};

export const balanceDomains: BalanceDomain[] = [
  {
    key: "energy",
    label: "Energy",
    prompt: "How supported or depleted does your day-to-day energy feel right now?",
    accent: "#7DD3FC",
    icon: "signal",
    target: 82,
  },
  {
    key: "work-load",
    label: "Work & Responsibility Load",
    prompt: "How manageable do your responsibilities feel right now?",
    accent: "#FCD34D",
    icon: "graph",
    target: 74,
  },
  {
    key: "sleep-recovery",
    label: "Sleep & Recovery",
    prompt: "How restored do you feel by your current rest and recovery pattern?",
    accent: "#67E8F9",
    icon: "time",
    target: 84,
  },
  {
    key: "emotional-stability",
    label: "Emotional Stability",
    prompt: "How steady and emotionally grounded do you feel lately?",
    accent: "#C4B5FD",
    icon: "insight",
    target: 80,
  },
  {
    key: "relationships-support",
    label: "Relationships & Support",
    prompt: "How supported, connected, or relationally resourced do you feel?",
    accent: "#FDA4AF",
    icon: "shield",
    target: 78,
  },
  {
    key: "focus-mental-space",
    label: "Focus & Mental Space",
    prompt: "How clear and mentally spacious does your attention feel?",
    accent: "#6EE7B7",
    icon: "pattern",
    target: 80,
  },
  {
    key: "personal-time-space",
    label: "Personal Time / Space",
    prompt: "How much room do you have for yourself without pressure or interruption?",
    accent: "#7DD3FC",
    icon: "structure",
    target: 82,
  },
  {
    key: "physical-care-routine",
    label: "Physical Care / Routine",
    prompt: "How supported is your body by your current routines, movement, and baseline care?",
    accent: "#6EE7B7",
    icon: "trend",
    target: 78,
  },
  {
    key: "daily-structure",
    label: "Daily Structure",
    prompt: "How much does your day currently support steadiness instead of constant catch-up?",
    accent: "#93C5FD",
    icon: "structure",
    target: 80,
  },
  {
    key: "boundaries-room",
    label: "Boundaries & Room",
    prompt: "How well are your limits protecting time, energy, and emotional room right now?",
    accent: "#FCD34D",
    icon: "shield",
    target: 82,
  },
  {
    key: "home-environment",
    label: "Home Environment",
    prompt: "How supportive does your living environment feel for rest, regulation, and daily functioning?",
    accent: "#67E8F9",
    icon: "privacy",
    target: 78,
  },
  {
    key: "financial-stability",
    label: "Financial Stability",
    prompt: "How steady and manageable does the financial side of life feel right now?",
    accent: "#6EE7B7",
    icon: "graph",
    target: 76,
  },
  {
    key: "play-joy",
    label: "Play / Joy",
    prompt: "How much room is there for enjoyment, lightness, or non-productive aliveness in your current life shape?",
    accent: "#FDA4AF",
    icon: "trend",
    target: 74,
  },
  {
    key: "community-belonging",
    label: "Community & Belonging",
    prompt: "How connected do you feel to people, spaces, or communities where you can relax into being yourself?",
    accent: "#C4B5FD",
    icon: "insight",
    target: 76,
  },
  {
    key: "purpose-direction",
    label: "Purpose & Direction",
    prompt: "How much does your current life still feel aligned with what matters and where you want to be headed?",
    accent: "#7DD3FC",
    icon: "pattern",
    target: 78,
  },
];

export const balanceDimensions: BalanceDimension[] = [
  {
    key: "capacitySupport",
    label: "Capacity Support",
    description: "How much usable bandwidth, personal room, and physical support the system currently has to work with.",
    icon: "signal",
    accent: "#7DD3FC",
  },
  {
    key: "recoveryStability",
    label: "Recovery Stability",
    description: "How well sleep, recovery, and energy support are helping the system replenish itself.",
    icon: "time",
    accent: "#67E8F9",
  },
  {
    key: "emotionalGrounding",
    label: "Emotional Grounding",
    description: "How steady, supported, and emotionally resourced life feels beneath the visible workload.",
    icon: "insight",
    accent: "#C4B5FD",
  },
  {
    key: "structuralBalance",
    label: "Structural Balance",
    description: "How evenly responsibilities, mental space, routine, and day-to-day pressure are being carried.",
    icon: "structure",
    accent: "#FCD34D",
  },
];

export const balanceBands: BalanceBand[] = [
  {
    key: "stable-balance",
    min: 0,
    max: 24,
    title: "Stable Balance",
    summary: "Your current shape suggests that most life domains still have enough support to stay functional without large visible distortion.",
    interpretation:
      "That does not mean everything is perfect. It means the system still looks broadly supported, and the weaker areas have not yet pulled the overall shape far out of balance.",
    standoutLead: "The clearest signal is that your current shape still has enough internal support to feel coherent.",
    rebalanceLead: "The best use of this result is protecting the areas already helping the system stay steady while gently strengthening the lower zones before they become chronic drains.",
    gradientFrom: "#6EE7B7",
    gradientTo: "#7DD3FC",
    glow: "rgba(110, 231, 183, 0.24)",
  },
  {
    key: "mild-imbalance",
    min: 25,
    max: 44,
    title: "Mild Imbalance",
    summary: "Some parts of life are carrying less support than the rest, but the overall system still looks workable with relatively small adjustments.",
    interpretation:
      "This is the zone where life can appear mostly fine from the outside, yet still feel more effortful, thinner, or less supported than it should from the inside.",
    standoutLead: "The map suggests that imbalance is present, but still concentrated enough that rebalancing can happen before the whole shape becomes distorted.",
    rebalanceLead: "At this level, the most effective move is usually strengthening the weakest support zones before they begin influencing everything else around them.",
    gradientFrom: "#7DD3FC",
    gradientTo: "#FCD34D",
    glow: "rgba(252, 211, 77, 0.22)",
  },
  {
    key: "uneven-load-pattern",
    min: 45,
    max: 64,
    title: "Uneven Load Pattern",
    summary: "The system still has functioning areas, but the overall shape is becoming noticeably uneven, with some domains carrying far less support than others.",
    interpretation:
      "This usually feels like life is still moving, yet not with the same steadiness. Certain areas may be compensating for others, which can make the whole system feel less calm and less sustainable.",
    standoutLead: "The most important signal here is unevenness - not total collapse, but a shape that is increasingly relying on a few stronger areas to carry too much.",
    rebalanceLead: "Rebalancing tends to begin best by reducing pressure and restoring support in the weakest zones, especially where recovery and personal room have narrowed.",
    gradientFrom: "#FCD34D",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.22)",
  },
  {
    key: "high-life-load-distortion",
    min: 65,
    max: 84,
    title: "High-Life-Load Distortion",
    summary: "Your current shape suggests that life is being held together with noticeable distortion, where weaker domains are now affecting the feel of the whole system.",
    interpretation:
      "This often shows up as functioning without feeling supported. The system may still be working on the surface, but the map suggests that recovery, mental room, or emotional steadiness are carrying less support than the rest of life requires.",
    standoutLead: "The strongest signal is that imbalance is no longer local. The weaker areas are now shaping the tone of the wider system.",
    rebalanceLead: "At this stage, small upgrades help, but the bigger win usually comes from relieving load and restoring support in the domains that are most undernourished first.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#FCD34D",
    glow: "rgba(253, 164, 175, 0.24)",
  },
  {
    key: "recovery-critical-imbalance",
    min: 85,
    max: 100,
    title: "Recovery-Critical Imbalance",
    summary: "The map suggests a shape where support, recovery, and capacity are being stretched thin enough that the whole system is losing balance together.",
    interpretation:
      "That does not label you. It does suggest that important support domains are running too low at the same time, which makes the entire pattern feel more fragile and more effortful to maintain.",
    standoutLead: "The most important signal is not one weak area, but a system whose recovery and support shape has become too distorted to feel naturally steady.",
    rebalanceLead: "The first task here is not optimizing everything. It is restoring enough support in the most depleted areas that the overall shape stops being held together by strain alone.",
    gradientFrom: "#FDA4AF",
    gradientTo: "#C4B5FD",
    glow: "rgba(196, 181, 253, 0.24)",
  },
];

export const relatedBalanceTools: RelatedBalanceTool[] = [
  {
    title: "Burnout Risk Audit",
    description: "Check whether the imbalance you are seeing is being reinforced by recovery debt, depletion, or emotional wear.",
    category: "Stress & Burnout",
    minutes: "4 min",
    icon: "graph",
    href: buildToolHref({ slug: "burnout-risk-audit", categorySlug: "stress-burnout" }),
  },
  {
    title: "Sleep Pressure Check",
    description: "See whether rest quality and shutdown strain are quietly shaping the lower-support zones in your map.",
    category: "Sleep & Recovery",
    minutes: "4 min",
    icon: "time",
    href: buildToolHref({ slug: "sleep-pressure-check", categorySlug: "sleep-recovery" }),
  },
  {
    title: "Emotional Recovery Planner",
    description: "Turn emotional spillover into a steadier reset rhythm when the map shows grounding and support are running low.",
    category: "Emotional Regulation",
    minutes: "6 min",
    icon: "insight",
    href: buildToolHref({ slug: "emotional-recovery-planner", categorySlug: "emotional-regulation" }),
  },
  {
    title: "Focus Friction Audit",
    description: "Spot whether your mental space is being dragged down by overload, unclear starting points, or constant interruption.",
    category: "Focus & Procrastination",
    minutes: "4 min",
    icon: "signal",
    href: buildToolHref({ slug: "focus-friction-audit", categorySlug: "focus-procrastination" }),
  },
];

export const balanceFaqItems: FaqItem[] = [
  {
    question: "What does a life balance score actually mean?",
    answer:
      "It is a directional snapshot of how supported, stretched, and even your current life shape looks across several important domains. A higher Balance Index means stronger support overall, while a higher Imbalance Score means the shape is more distorted or uneven.",
  },
  {
    question: "Is life balance the same as being productive?",
    answer:
      "No. Productivity can still be high while support, recovery, emotional steadiness, or personal room are running low. Balance is about the whole system, not just output.",
  },
  {
    question: "Why can things look 'fine' while still feeling distorted?",
    answer:
      "Because people often keep functioning by leaning harder on a few stronger areas while weaker ones quietly lose support. The outside can still look stable even when the internal shape has become uneven.",
  },
  {
    question: "How does recovery affect life balance?",
    answer:
      "Recovery helps determine whether the whole system can replenish itself. When energy, sleep, personal room, or physical support run low, other parts of life usually start feeling harder to carry.",
  },
  {
    question: "What is the difference between weak and overloaded life areas?",
    answer:
      "A weak area lacks support. An overloaded area may still be functioning, but it is carrying too much demand relative to what it gives back. Both can distort the overall shape in different ways.",
  },
  {
    question: "How often should I rebuild this map?",
    answer:
      "Every two to four weeks is usually enough, or sooner if workload, relationships, recovery, or routine have shifted substantially. The comparison over time is often more useful than a single snapshot.",
  },
  {
    question: "What should I do if one area is pulling the whole shape down?",
    answer:
      "Start there. The most effective rebalancing move is usually strengthening the domain creating the most distortion, especially if it is related to recovery, mental space, or personal room.",
  },
  {
    question: "What if my ideal scores feel much higher than my current shape?",
    answer:
      "That gap is useful data, not proof that you are failing. It often shows where life feels most unsupported and which domains may be carrying more pressure than the current structure can comfortably hold.",
  },
  {
    question: "Can one strong life area hide imbalance elsewhere?",
    answer:
      "Yes. Work, responsibility, or relational reliability can sometimes keep life looking functional while recovery, emotional steadiness, or personal room quietly narrow underneath the surface.",
  },
  {
    question: "Should I try to rebalance everything at once?",
    answer:
      "Usually no. Most people make faster progress by strengthening the most distorted domains first, especially the ones tied to recovery, mental space, or baseline support.",
  },
];

export const lifeBalanceStoryBlock = {
  eyebrow: "How this often feels",
  title: "Nothing looks obviously broken, but the whole shape feels tighter and less supported than it used to.",
  quote:
    "From the outside, life can still look like it is moving. Inside, though, too many areas start feeling held together by effort instead of support. Nothing may look dramatic enough to call a crisis. The strain shows up more as a whole-life tightness that keeps asking for more energy than the system can spare.",
  takeaway:
    "That is why a balance map helps. It turns a vague sense of distortion into a visible shape so you can see which domains are holding and which ones are quietly under-carrying the load.",
  toneLabel: "Shape before crisis",
  accent: "#7DD3FC",
};

export const meaningBlocks: EditorialBlock[] = [
  {
    title: "What life balance actually means",
    paragraphs: [
      "Life balance is not a perfect split of time or a polished image of having everything under control. It is a systems question. It asks whether the important parts of life are being supported well enough, evenly enough, and sustainably enough that the whole shape can still hold without one area quietly draining the rest. A life can look full, functional, and outwardly successful while still being structurally out of balance underneath.",
      "That matters because imbalance usually does not arrive as a dramatic event. It appears as shape distortion. Energy narrows. Personal space shrinks. Recovery stops catching up. Focus gets less roomy. Relationships feel more like maintenance than support. The system may still operate, but it does so with less margin. When enough of these changes happen together, life starts feeling tighter, thinner, or more effortful even when nothing looks obviously broken from the outside.",
      "A visualizer is useful because it turns those scattered impressions into a single readable shape. Instead of carrying a vague sense that something is off, you can see where support is strong, where pressure has expanded, and where one undernourished domain may be pulling the rest of the system out of balance. The emotional payoff is often clarity. Not everything is wrong. But the parts that need support become visible enough to work with.",
    ],
  },
  {
    title: "Why imbalance often appears before breakdown",
    paragraphs: [
      "Most people do not move directly from steady to broken. They move from steady to uneven. That unevenness is often the earliest signal that the system is asking too much from too few domains. One part of life may still be functioning well, but another is becoming depleted, overloaded, or unsupported. Over time, the stronger areas start compensating for the weaker ones. That compensation can keep life moving, but it also hides the imbalance that is forming underneath.",
      "This is why balance work matters before crisis. When the shape becomes noticeably uneven, the system is already giving useful information. It is showing you where support is thin, which routines are not restoring enough, and which domains are carrying more strain than they can comfortably recycle. If those signals are missed, the system usually becomes more distorted, not because the person failed, but because the load kept redistributing itself into the same undersupported zones.",
      "Seeing imbalance early makes practical change easier. Smaller structural changes are often enough when the shape is only mildly uneven. Once recovery, emotional steadiness, and personal room have all narrowed at the same time, it becomes harder to rebalance quickly because the system has less spare capacity left to work with.",
    ],
  },
  {
    title: "Why feeling functional is not always the same as feeling supported",
    paragraphs: [
      "Functioning is often a misleading metric. People can keep working, responding, caring for others, and handling responsibilities while still living inside a shape that feels increasingly unsupported. The reason is that functioning usually tracks output, not support. A person may still be getting things done while their energy, mental space, or emotional steadiness quietly drops below what the rest of life requires.",
      "That creates a very common experience: life is still operating, but it does not feel resourced. There may be less softness, less room, less recovery, and less internal steadiness. The person may feel they should be grateful or more capable because everything is technically still moving. But the system is telling a different story. It may be asking for more support than it is currently getting back.",
      "This is where a balance map becomes especially valuable. It helps separate visible functioning from actual support. That distinction matters psychologically because it reduces self-judgment. If the map shows that mental space, recovery, or personal room have become too thin, the problem is not simply that you should handle life better. The better question is what the current shape is lacking, and what needs strengthening first.",
    ],
  },
];

export const dimensionEditorial = [
  {
    key: "capacitySupport" as BalanceDimensionKey,
    paragraphs: [
      "Capacity support refers to how much usable room your system currently has. It is about whether energy, attention, personal space, and physical support are giving you enough margin to meet life without constantly borrowing from tomorrow.",
      "When capacity support is low, life often starts feeling heavier before anything is visibly wrong. The same responsibilities can take more effort simply because the system has less room available to carry them.",
    ],
  },
  {
    key: "recoveryStability" as BalanceDimensionKey,
    paragraphs: [
      "Recovery stability reflects whether rest, sleep, and replenishment are strong enough to keep pace with your current load. It is not only about time off. It is about whether the system is actually rebuilding enough support between demands.",
      "This dimension matters because weak recovery eventually affects everything else. Focus narrows, patience shortens, emotional steadiness drops, and the whole life shape becomes more vulnerable to distortion.",
    ],
  },
  {
    key: "emotionalGrounding" as BalanceDimensionKey,
    paragraphs: [
      "Emotional grounding is the part of the system that helps life feel internally steady. It includes emotional steadiness, relational support, and the sense that your inner world is not carrying more strain than it can metabolize.",
      "When grounding weakens, even practical parts of life can start feeling harder. Decisions feel less steady, pressure feels more personal, and the whole system may feel more fragile than the surface of life suggests.",
    ],
  },
  {
    key: "structuralBalance" as BalanceDimensionKey,
    paragraphs: [
      "Structural balance is about how the visible architecture of life is arranged. It includes responsibility load, routine support, mental space, and whether the day is shaped in a way that allows support and pressure to coexist without constant collision.",
      "This dimension matters because good intentions alone cannot compensate for a structure that keeps running too tight. A more balanced structure usually reduces pressure before you need to cope with it.",
    ],
  },
];

export const increaseBlocks: InfoCardBlock[] = [
  {
    title: "Overload without recovery",
    body:
      "When responsibilities keep rising while recovery stays flat, imbalance forms quickly. The system may still function, but it does so with less and less margin across other domains.",
  },
  {
    title: "Poor sleep support and diffuse attention",
    body:
      "Weak recovery and scattered mental space often distort the life shape before people recognize it. The issue is not only tiredness, but the loss of room that tiredness creates in everything else.",
  },
  {
    title: "Lack of personal space and emotional strain",
    body:
      "When there is little room for yourself and emotional strain stays active in the background, support zones narrow. Life can still move, but it usually stops feeling spacious or restorative.",
  },
  {
    title: "Relational under-support and weak routines",
    body:
      "When relationships are not replenishing enough and routines stop supporting the body, the whole system has fewer anchors. That makes imbalance harder to correct because less baseline structure is holding things up.",
  },
];

export const reductionBlocks: InfoCardBlock[] = [
  {
    title: "Rebuilding recovery first",
    body:
      "Recovery is often the fastest leverage point because it improves several weak zones at once. Better rest, lighter pressure, and more personal room can begin reshaping the whole map.",
  },
  {
    title: "Reducing pressure in key domains",
    body:
      "Not every area needs equal attention at once. Rebalancing usually works best when the most distorted domains get relief before everything else is optimized.",
  },
  {
    title: "Strengthening supportive structure",
    body:
      "Supportive routines, clearer boundaries, and more reliable relational or practical scaffolding make the whole life shape easier to carry. Better structure reduces the amount of coping the system has to do.",
  },
  {
    title: "Restoring mental space and personal room",
    body:
      "Mental room and personal space are often treated as luxuries, but they are real support domains. When they return, the rest of the system usually becomes more stable and less reactive.",
  },
];

export const nextStepParagraphs = [
  "If your map looks distorted, start by reading it as a shape problem rather than a personal failing. The goal is not to create a perfectly balanced life overnight. It is to identify which domains are carrying too little support relative to the rest of the system and begin there.",
  "Usually the first move is not everywhere. It is one or two rebalancing moves with the biggest leverage. That may mean restoring recovery, creating more personal room, reducing demand in one overloaded domain, or strengthening a routine that gives the whole map more structure.",
  "If the result feels severe, treat that as a signal to simplify before you optimize. A life shape held together mostly by effort tends to need relief and support first, not another layer of self-improvement pressure.",
];

export const nextStepPanel = {
  eyebrow: "Recommended next step",
  title: "Life Balance Rebuild Planner",
  description:
    "A structured guide for rebalancing pressure, recovery, and capacity across the areas that are carrying the most strain.",
  buttonLabel: "View Next Step",
};

export function getInitialBalanceAnswers(): BalanceAnswers {
  return {
    energy: { current: undefined, ideal: 82, useIdeal: true },
    "work-load": { current: undefined, ideal: 74, useIdeal: true },
    "sleep-recovery": { current: undefined, ideal: 84, useIdeal: true },
    "emotional-stability": { current: undefined, ideal: 80, useIdeal: true },
    "relationships-support": { current: undefined, ideal: 78, useIdeal: true },
    "focus-mental-space": { current: undefined, ideal: 80, useIdeal: true },
    "personal-time-space": { current: undefined, ideal: 82, useIdeal: true },
    "physical-care-routine": { current: undefined, ideal: 78, useIdeal: true },
    "daily-structure": { current: undefined, ideal: 80, useIdeal: true },
    "boundaries-room": { current: undefined, ideal: 82, useIdeal: true },
    "home-environment": { current: undefined, ideal: 78, useIdeal: true },
    "financial-stability": { current: undefined, ideal: 76, useIdeal: true },
    "play-joy": { current: undefined, ideal: 74, useIdeal: true },
    "community-belonging": { current: undefined, ideal: 76, useIdeal: true },
    "purpose-direction": { current: undefined, ideal: 78, useIdeal: true },
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

function getBand(imbalanceScore: number) {
  return balanceBands.find((band) => imbalanceScore >= band.min && imbalanceScore <= band.max) ?? balanceBands[0];
}

function getDomain(key: BalanceDomainKey) {
  return balanceDomains.find((domain) => domain.key === key) ?? balanceDomains[0];
}

export function getBalanceDescriptor(value: number) {
  if (value >= 81) {
    return "well supported";
  }

  if (value >= 66) {
    return "mostly steady";
  }

  if (value >= 46) {
    return "mixed support";
  }

  if (value >= 26) {
    return "stretched";
  }

  return "running low";
}

export function isBalanceDomainComplete(domain: BalanceDomain, answers: BalanceAnswers) {
  return typeof answers[domain.key].current === "number";
}

export function calculateLifeBalance(answers: BalanceAnswers): BalanceResult {
  const domains = balanceDomains.map((domain) => {
    const answer = answers[domain.key];
    const current = typeof answer.current === "number" ? clampScore(answer.current) : 56;
    const ideal = clampScore(answer.ideal);
    const gap = answer.useIdeal ? Math.max(0, ideal - current) : 0;
    const priority = clampScore((100 - current) * 0.62 + gap * 0.38);

    return {
      ...domain,
      current,
      ideal,
      useIdeal: answer.useIdeal,
      gap,
      priority,
    };
  });

  const answeredCount = balanceDomains.filter((domain) => typeof answers[domain.key].current === "number").length;
  const completionRatio = answeredCount / balanceDomains.length;
  const currentValues = domains.map((domain) => domain.current);
  const balanceIndex = clampScore(average(currentValues));
  const minCurrent = Math.min(...currentValues);
  const maxCurrent = Math.max(...currentValues);
  const spreadLevel = clampScore(maxCurrent - minCurrent);
  const distortionLevel = clampScore(spreadLevel * 1.1);
  const balanceGap = clampScore(
    average(domains.filter((domain) => domain.useIdeal).map((domain) => domain.gap)),
  );

  const recoveryDomains = domains.filter((domain) =>
    ["energy", "sleep-recovery", "personal-time-space", "physical-care-routine", "home-environment", "play-joy"].includes(
      domain.key,
    ),
  );
  const recoveryPressure = clampScore(100 - average(recoveryDomains.map((domain) => domain.current)));
  const supportDeficit = 100 - balanceIndex;
  const imbalanceScore = clampScore(
    supportDeficit * 0.36 + distortionLevel * 0.24 + recoveryPressure * 0.22 + balanceGap * 0.18,
  );
  const band = getBand(imbalanceScore);

  const weakestZone = [...domains].sort((left, right) => left.current - right.current)[0] ?? domains[0];
  const strongestZone = [...domains].sort((left, right) => right.current - left.current)[0] ?? domains[0];
  const primaryImbalanceDriver = [...domains].sort((left, right) => right.priority - left.priority)[0] ?? domains[0];
  const recoveryPriorityArea =
    [...recoveryDomains].sort((left, right) => left.current - right.current)[0] ?? domains[0];
  const strongestSupportingArea = strongestZone;

  const dimensions: Record<BalanceDimensionKey, number> = {
    capacitySupport: clampScore(
      average(
        domains
          .filter((domain) =>
            [
              "energy",
              "focus-mental-space",
              "personal-time-space",
              "physical-care-routine",
              "boundaries-room",
              "daily-structure",
            ].includes(domain.key),
          )
          .map((domain) => domain.current),
      ),
    ),
    recoveryStability: clampScore(average(recoveryDomains.map((domain) => domain.current))),
    emotionalGrounding: clampScore(
      average(
        domains
          .filter((domain) =>
            [
              "emotional-stability",
              "relationships-support",
              "focus-mental-space",
              "community-belonging",
              "purpose-direction",
            ].includes(domain.key),
          )
          .map((domain) => domain.current),
      ),
    ),
    structuralBalance: clampScore(
      average(
        domains
          .filter((domain) =>
            [
              "work-load",
              "daily-structure",
              "boundaries-room",
              "financial-stability",
              "home-environment",
            ].includes(domain.key),
          )
          .map((domain) => domain.current),
      ),
    ),
  };

  const topNeeds = [...domains]
    .sort((left, right) => right.priority - left.priority)
    .slice(0, 3)
    .map((domain) => domain.label.toLowerCase());

  const signalLabel = `Your current shape suggests that life is still functioning, but ${topNeeds.join(", ")} are carrying less support than the rest of the system.`;
  const interpretation = `${band.summary} ${band.interpretation}`;
  const standout = `${band.standoutLead} The most stretched domain right now is ${primaryImbalanceDriver.label.toLowerCase()}, while ${strongestSupportingArea.label.toLowerCase()} is acting as the strongest support zone.`;
  const rebalanceInsight = `${band.rebalanceLead} In this map, the first rebalance priority looks like ${recoveryPriorityArea.label.toLowerCase()}, especially because ${weakestZone.label.toLowerCase()} is currently shaping the overall distortion level.`;

  return {
    balanceIndex,
    imbalanceScore,
    band,
    completionRatio,
    isComplete: answeredCount === balanceDomains.length,
    balanceGap,
    spreadLevel,
    distortionLevel,
    recoveryPressure,
    domains,
    weakestZone: getDomain(weakestZone.key),
    strongestZone: getDomain(strongestZone.key),
    primaryImbalanceDriver: getDomain(primaryImbalanceDriver.key),
    recoveryPriorityArea: getDomain(recoveryPriorityArea.key),
    strongestSupportingArea: getDomain(strongestSupportingArea.key),
    dimensions,
    signalLabel,
    interpretation,
    standout,
    rebalanceInsight,
  };
}

export const heroPreviewResult = calculateLifeBalance({
  ...getInitialBalanceAnswers(),
  energy: { current: 48, ideal: 84, useIdeal: true },
  "work-load": { current: 42, ideal: 74, useIdeal: true },
  "sleep-recovery": { current: 40, ideal: 86, useIdeal: true },
  "emotional-stability": { current: 58, ideal: 80, useIdeal: true },
  "relationships-support": { current: 72, ideal: 82, useIdeal: true },
  "focus-mental-space": { current: 44, ideal: 82, useIdeal: true },
  "personal-time-space": { current: 36, ideal: 84, useIdeal: true },
  "physical-care-routine": { current: 54, ideal: 80, useIdeal: true },
  "daily-structure": { current: 46, ideal: 82, useIdeal: true },
  "boundaries-room": { current: 40, ideal: 84, useIdeal: true },
  "home-environment": { current: 62, ideal: 78, useIdeal: true },
  "financial-stability": { current: 58, ideal: 76, useIdeal: true },
  "play-joy": { current: 34, ideal: 74, useIdeal: true },
  "community-belonging": { current: 60, ideal: 78, useIdeal: true },
  "purpose-direction": { current: 56, ideal: 80, useIdeal: true },
});
