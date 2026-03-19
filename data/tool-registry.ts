import { liveToolMap, liveToolSlugs, type LiveToolSlug } from "./tools-home";

export type ToolRegistryCategory =
  | "burnout"
  | "anxiety"
  | "relationships"
  | "self-worth"
  | "productivity"
  | "emotional-regulation"
  | "sleep"
  | "family"
  | "communication"
  | "decision-making";

export type ToolRegistryEntry = {
  slug: LiveToolSlug;
  title: string;
  url: string;
  category: ToolRegistryCategory;
  tags: string[];
  shortDescription: string;
};

type ToolRegistryMeta = {
  category: ToolRegistryCategory;
  tags: readonly string[];
};

const categoryBaseTags: Record<ToolRegistryCategory, readonly string[]> = {
  burnout: ["burnout", "stress"],
  anxiety: ["anxiety", "mental overload"],
  relationships: ["relationships", "attachment"],
  "self-worth": ["self-worth", "confidence"],
  productivity: ["productivity", "follow-through"],
  "emotional-regulation": ["emotional regulation", "emotions"],
  sleep: ["sleep", "recovery"],
  family: ["family", "boundaries"],
  communication: ["communication", "conflict"],
  "decision-making": ["decision-making", "clarity"],
};

function meta(category: ToolRegistryCategory, ...specificTags: string[]): ToolRegistryMeta {
  return {
    category,
    tags: [...new Set([...categoryBaseTags[category], ...specificTags])],
  };
}

const toolRegistryMeta = {
  "attachment-pattern-spotter": meta(
    "relationships",
    "attachment style",
    "closeness",
    "relationship patterns",
  ),
  "boundary-strength-scanner": meta(
    "self-worth",
    "boundaries",
    "self-protection",
    "saying no",
  ),
  "burnout-risk-audit": meta("burnout", "fatigue", "work stress"),
  "communication-style-mirror": meta(
    "communication",
    "communication style",
    "expression",
    "interpersonal patterns",
  ),
  "compassion-fatigue-check": meta(
    "burnout",
    "caregiving",
    "empathy fatigue",
    "exhaustion",
  ),
  "confidence-reset-audit": meta(
    "self-worth",
    "self-doubt",
    "self-image",
    "confidence reset",
  ),
  "daily-functioning-stability-check": meta(
    "productivity",
    "daily functioning",
    "stability",
    "routines",
  ),
  "decision-fatigue-simulator": meta(
    "decision-making",
    "decision fatigue",
    "mental load",
    "choices",
  ),
  "emotional-exhaustion-audit": meta(
    "burnout",
    "emotional exhaustion",
    "depletion",
    "overload",
  ),
  "emotional-recovery-planner": meta(
    "emotional-regulation",
    "emotional recovery",
    "reset",
    "capacity",
  ),
  "emotional-trigger-decoder": meta(
    "emotional-regulation",
    "triggers",
    "reactivity",
    "emotional patterns",
  ),
  "focus-friction-audit": meta("productivity", "focus", "attention", "friction"),
  "inner-critic-intensity-scan": meta(
    "self-worth",
    "inner critic",
    "self-criticism",
    "harsh self-talk",
  ),
  "life-balance-visualizer": meta(
    "burnout",
    "life balance",
    "overload",
    "capacity",
  ),
  "mental-fatigue-check": meta(
    "burnout",
    "mental fatigue",
    "cognitive strain",
    "decision load",
  ),
  "overthinking-loop-check": meta(
    "anxiety",
    "overthinking",
    "rumination",
    "mental loops",
  ),
  "rumination-pattern-check": meta(
    "anxiety",
    "rumination",
    "replaying thoughts",
    "mental loops",
  ),
  "worry-cycle-mapper": meta(
    "anxiety",
    "worry",
    "uncertainty",
    "future scanning",
  ),
  "catastrophizing-pattern-check": meta(
    "anxiety",
    "catastrophizing",
    "worst-case thinking",
    "fear",
  ),
  "intrusive-thought-response-check": meta(
    "anxiety",
    "intrusive thoughts",
    "checking",
    "mental loops",
  ),
  "people-pleasing-signal-check": meta(
    "self-worth",
    "people pleasing",
    "approval seeking",
    "boundaries",
  ),
  "approval-dependence-check": meta(
    "self-worth",
    "approval dependence",
    "validation",
    "self-trust",
  ),
  "fawning-pattern-check": meta(
    "self-worth",
    "fawning",
    "appeasement",
    "conflict avoidance",
  ),
  "over-accommodation-check": meta(
    "self-worth",
    "over-accommodation",
    "self-silencing",
    "boundaries",
  ),
  "self-abandonment-pattern-check": meta(
    "self-worth",
    "self-abandonment",
    "guilt",
    "self-neglect",
  ),
  "reassurance-seeking-decoder": meta(
    "anxiety",
    "reassurance seeking",
    "checking",
    "uncertainty",
  ),
  "relationship-clarity-check": meta(
    "relationships",
    "relationship clarity",
    "mixed signals",
    "emotional safety",
  ),
  "resentment-buildup-tracker": meta(
    "relationships",
    "resentment",
    "unspoken needs",
    "emotional load",
  ),
  "self-sabotage-pattern-finder": meta(
    "self-worth",
    "self-sabotage",
    "avoidance",
    "fear of success",
  ),
  "sleep-pressure-check": meta("sleep", "fatigue", "sleep debt", "rest quality"),
  "stress-load-meter": meta("burnout", "stress load", "pressure", "overload"),
  "work-stress-load-mapper": meta(
    "burnout",
    "work stress",
    "job pressure",
    "load mapping",
  ),
  "procrastination-friction-audit": meta(
    "productivity",
    "procrastination",
    "avoidance",
    "task start",
  ),
  "executive-function-friction-check": meta(
    "productivity",
    "executive function",
    "planning",
    "task switching",
  ),
  "task-initiation-difficulty-audit": meta(
    "productivity",
    "task initiation",
    "start resistance",
    "overwhelm",
  ),
  "discipline-friction-check": meta(
    "productivity",
    "discipline",
    "consistency",
    "follow-through",
  ),
  "conflict-response-simulator": meta(
    "communication",
    "conflict response",
    "tension",
    "reaction style",
  ),
  "tough-conversation-simulator": meta(
    "communication",
    "difficult conversations",
    "assertiveness",
    "tension",
  ),
  "high-pressure-choice-simulator": meta(
    "decision-making",
    "high-pressure choices",
    "stress decisions",
    "judgment",
  ),
  "relationship-decision-simulator": meta(
    "decision-making",
    "relationship decisions",
    "uncertainty",
    "attachment pull",
  ),
  "work-life-balance-visualizer": meta(
    "burnout",
    "work-life balance",
    "stress",
    "recovery",
  ),
  "emotional-energy-balance-wheel": meta(
    "emotional-regulation",
    "emotional energy",
    "drain",
    "capacity",
  ),
  "recovery-balance-visualizer": meta(
    "sleep",
    "restoration",
    "fatigue",
    "recovery debt",
  ),
  "personal-capacity-balance-check": meta(
    "burnout",
    "capacity",
    "overcommitment",
    "energy limits",
  ),
  "evening-shutdown-check": meta(
    "sleep",
    "shutdown",
    "bedtime routine",
    "mental activation",
  ),
  "morning-recovery-readiness-check": meta(
    "sleep",
    "morning fatigue",
    "recovery quality",
    "wake-up clarity",
  ),
  "rest-debt-check": meta("sleep", "rest debt", "fatigue", "recovery gap"),
  "nighttime-anxiety-pattern-check": meta(
    "anxiety",
    "night anxiety",
    "sleep anxiety",
    "mental activation",
  ),
  "emotional-availability-profile": meta(
    "relationships",
    "emotional availability",
    "intimacy",
    "connection",
  ),
  "intimacy-avoidance-pattern-check": meta(
    "relationships",
    "avoidant attachment",
    "distance",
    "closeness",
  ),
  "trust-pattern-spotter": meta(
    "relationships",
    "trust",
    "relationship safety",
    "attachment",
  ),
  "vulnerability-readiness-profile": meta(
    "relationships",
    "vulnerability",
    "emotional openness",
    "intimacy",
  ),
  "anger-trigger-decoder": meta(
    "emotional-regulation",
    "anger",
    "triggers",
    "reactivity",
  ),
  "rejection-trigger-decoder": meta(
    "emotional-regulation",
    "rejection sensitivity",
    "triggers",
    "emotional pain",
  ),
  "shame-trigger-pattern-check": meta(
    "emotional-regulation",
    "shame",
    "triggers",
    "self-protection",
  ),
  "criticism-trigger-decoder": meta(
    "emotional-regulation",
    "criticism",
    "defensiveness",
    "triggers",
  ),
  "work-boundary-check": meta(
    "productivity",
    "work boundaries",
    "burnout prevention",
    "job stress",
  ),
  "family-boundary-scanner": meta(
    "family",
    "family boundaries",
    "caretaking",
    "relational stress",
  ),
  "emotional-boundary-check": meta(
    "self-worth",
    "emotional boundaries",
    "self-protection",
    "overwhelm",
  ),
  "caretaker-boundary-scanner": meta(
    "family",
    "caretaker burnout",
    "family roles",
    "boundaries",
  ),
  "breakup-recovery-planner": meta(
    "relationships",
    "breakup",
    "grief",
    "heartbreak",
  ),
  "burnout-recovery-planner": meta(
    "burnout",
    "burnout recovery",
    "restoration",
    "capacity",
  ),
  "weekly-reset-planner": meta(
    "emotional-regulation",
    "weekly reset",
    "stress relief",
    "emotional recovery",
  ),
  "stress-reset-action-plan": meta(
    "burnout",
    "stress reset",
    "burnout prevention",
    "overload",
  ),
  "dating-clarity-check": meta(
    "relationships",
    "dating",
    "mixed signals",
    "uncertainty",
  ),
  "trust-consistency-check": meta(
    "relationships",
    "trust",
    "consistency",
    "reliability",
  ),
  "mixed-signals-checker": meta(
    "relationships",
    "mixed signals",
    "ambiguity",
    "dating clarity",
  ),
  "emotional-safety-check": meta(
    "relationships",
    "emotional safety",
    "toxic dynamics",
    "trust",
  ),
  "self-doubt-pattern-audit": meta(
    "self-worth",
    "self-doubt",
    "hesitation",
    "inner narrative",
  ),
  "imposter-feelings-audit": meta(
    "self-worth",
    "imposter syndrome",
    "achievement anxiety",
    "self-trust",
  ),
  "decision-confidence-check": meta(
    "decision-making",
    "decision confidence",
    "self-trust",
    "indecision",
  ),
  "visibility-confidence-check": meta(
    "self-worth",
    "visibility",
    "fear of being seen",
    "confidence",
  ),
  "health-reassurance-loop-check": meta(
    "anxiety",
    "health anxiety",
    "body checking",
    "panic",
  ),
  "relationship-reassurance-pattern-check": meta(
    "relationships",
    "reassurance",
    "relationship anxiety",
    "attachment needs",
  ),
  "mistake-checking-pattern-decoder": meta(
    "anxiety",
    "mistake checking",
    "perfection anxiety",
    "doubt",
  ),
  "social-reassurance-seeking-check": meta(
    "anxiety",
    "social anxiety",
    "reassurance seeking",
    "self-consciousness",
  ),
  "emotional-overload-buildup-check": meta(
    "relationships",
    "emotional overload",
    "overgiving",
    "resentment",
  ),
  "unspoken-needs-accumulation-check": meta(
    "relationships",
    "needs",
    "suppression",
    "relationship strain",
  ),
  "fairness-imbalance-tracker": meta(
    "relationships",
    "fairness",
    "imbalance",
    "one-sided effort",
  ),
  "emotional-carrying-load-check": meta(
    "relationships",
    "emotional labor",
    "carrying too much",
    "relationship strain",
  ),
  "perfection-pressure-scan": meta(
    "self-worth",
    "perfectionism",
    "pressure",
    "high standards",
  ),
  "self-judgment-intensity-check": meta(
    "self-worth",
    "self-judgment",
    "shame",
    "inner pressure",
  ),
  "shame-voice-pattern-check": meta(
    "self-worth",
    "shame",
    "inner voice",
    "self-criticism",
  ),
  "failure-fear-inner-voice-check": meta(
    "self-worth",
    "fear of failure",
    "inner voice",
    "performance pressure",
  ),
  "finish-line-resistance-check": meta(
    "productivity",
    "finish line resistance",
    "completion",
    "avoidance",
  ),
  "visibility-sabotage-pattern-check": meta(
    "self-worth",
    "visibility fear",
    "self-sabotage",
    "exposure",
  ),
  "success-discomfort-pattern-finder": meta(
    "self-worth",
    "success discomfort",
    "fear of change",
    "self-worth",
  ),
  "follow-through-breakpoint-check": meta(
    "productivity",
    "follow-through",
    "procrastination",
    "execution",
  ),
  "conflict-style-mirror": meta(
    "communication",
    "conflict style",
    "defensiveness",
    "repair",
  ),
  "repair-conversation-style-check": meta(
    "communication",
    "repair",
    "misunderstandings",
    "reconnection",
  ),
  "directness-vs-softening-check": meta(
    "communication",
    "directness",
    "softening",
    "assertiveness",
  ),
  "difficult-conversation-pattern-mirror": meta(
    "communication",
    "hard conversations",
    "communication patterns",
    "emotional tone",
  ),
  "meeting-burden-mapper": meta(
    "burnout",
    "meetings",
    "cognitive load",
    "work pressure",
  ),
  "role-ambiguity-stress-check": meta(
    "burnout",
    "role ambiguity",
    "unclear expectations",
    "job stress",
  ),
  "context-switching-load-check": meta(
    "burnout",
    "task switching",
    "attention drain",
    "workload",
  ),
  "invisible-workload-mapper": meta(
    "burnout",
    "hidden work",
    "emotional labor",
    "workload",
  ),
  "day-structure-stability-check": meta(
    "productivity",
    "day structure",
    "routines",
    "time use",
  ),
  "energy-consistency-check": meta(
    "sleep",
    "energy",
    "fatigue",
    "recovery quality",
  ),
  "follow-through-stability-check": meta(
    "productivity",
    "follow-through",
    "consistency",
    "daily habits",
  ),
  "emotional-steadiness-check": meta(
    "emotional-regulation",
    "emotional steadiness",
    "mood regulation",
    "stability",
  ),
} as const satisfies Record<LiveToolSlug, ToolRegistryMeta>;

export const TOOL_REGISTRY: ToolRegistryEntry[] = liveToolSlugs.map((slug) => ({
  slug,
  title: liveToolMap[slug].title,
  url: `https://click2pro.com/tools/${slug}`,
  category: toolRegistryMeta[slug].category,
  tags: [...toolRegistryMeta[slug].tags],
  shortDescription: liveToolMap[slug].description,
}));

const expectedToolCount = 100;
const uniqueSlugCount = new Set(TOOL_REGISTRY.map((tool) => tool.slug)).size;
const invalidUrls = TOOL_REGISTRY.filter(
  (tool) => tool.url !== `https://click2pro.com/tools/${tool.slug}`,
);
const weakTagEntries = TOOL_REGISTRY.filter((tool) => tool.tags.length < 3);
const missingFields = TOOL_REGISTRY.filter(
  (tool) =>
    !tool.slug.trim() ||
    !tool.title.trim() ||
    !tool.url.trim() ||
    !tool.category.trim() ||
    !tool.shortDescription.trim(),
);

if (TOOL_REGISTRY.length !== expectedToolCount) {
  throw new Error(
    `Tool registry expected ${expectedToolCount} live tools, found ${TOOL_REGISTRY.length}.`,
  );
}

if (uniqueSlugCount !== TOOL_REGISTRY.length) {
  throw new Error("Tool registry contains duplicate slugs.");
}

if (invalidUrls.length > 0) {
  throw new Error(
    `Tool registry contains invalid URLs for: ${invalidUrls.map((tool) => tool.slug).join(", ")}`,
  );
}

if (weakTagEntries.length > 0) {
  throw new Error(
    `Tool registry contains entries with fewer than 3 tags: ${weakTagEntries
      .map((tool) => tool.slug)
      .join(", ")}`,
  );
}

if (missingFields.length > 0) {
  throw new Error(
    `Tool registry contains missing fields for: ${missingFields.map((tool) => tool.slug).join(", ")}`,
  );
}
