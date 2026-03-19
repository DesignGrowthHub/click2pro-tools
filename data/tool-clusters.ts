export type ToolClusterSlug =
  | "burnout-mental-fatigue"
  | "overthinking-anxiety"
  | "focus-productivity"
  | "confidence-self-perception"
  | "relationships-attachment"
  | "boundaries-people-pleasing"
  | "emotional-triggers-reactions"
  | "recovery-reset"
  | "daily-functioning-stability"
  | "decision-making-clarity"
  | "communication-conflict"
  | "work-stress-performance";

export type ToolCluster = {
  slug: ToolClusterSlug;
  title: string;
  description: string;
  categorySlugs: string[];
  featuredToolSlugs: string[];
  searchTerms: string[];
};

export const toolClusters: ToolCluster[] = [
  {
    slug: "burnout-mental-fatigue",
    title: "Burnout & Mental Fatigue",
    description:
      "Understand overload, depletion, cognitive fatigue, emotional exhaustion, and the difference between pressure and real recovery loss.",
    categorySlugs: ["stress-burnout"],
    featuredToolSlugs: [
      "burnout-risk-audit",
      "stress-load-meter",
      "mental-fatigue-check",
      "emotional-exhaustion-audit",
      "compassion-fatigue-check",
    ],
    searchTerms: ["burnout", "mental fatigue", "stress load", "exhaustion", "depletion", "compassion fatigue"],
  },
  {
    slug: "overthinking-anxiety",
    title: "Overthinking & Anxiety",
    description:
      "Decode repetitive thought loops, reassurance habits, intrusive thinking, worry spirals, and uncertainty that keeps pulling the mind back in.",
    categorySlugs: ["anxiety-overthinking"],
    featuredToolSlugs: [
      "overthinking-loop-check",
      "rumination-pattern-check",
      "worry-cycle-mapper",
      "catastrophizing-pattern-check",
      "health-reassurance-loop-check",
    ],
    searchTerms: ["overthinking", "anxiety", "worry", "rumination", "intrusive thoughts", "reassurance"],
  },
  {
    slug: "focus-productivity",
    title: "Focus & Productivity",
    description:
      "Surface the friction behind procrastination, start resistance, attention drift, follow-through breaks, and brittle performance systems.",
    categorySlugs: ["focus-procrastination", "personality-behavior"],
    featuredToolSlugs: [
      "focus-friction-audit",
      "procrastination-friction-audit",
      "executive-function-friction-check",
      "self-sabotage-pattern-finder",
      "follow-through-breakpoint-check",
    ],
    searchTerms: ["focus", "productivity", "procrastination", "follow-through", "executive function", "self-sabotage"],
  },
  {
    slug: "confidence-self-perception",
    title: "Confidence & Self-Perception",
    description:
      "Read self-doubt, imposter feelings, perfection pressure, harsh self-evaluation, and the quieter ways self-trust collapses.",
    categorySlugs: ["self-esteem-confidence"],
    featuredToolSlugs: [
      "confidence-reset-audit",
      "self-doubt-pattern-audit",
      "imposter-feelings-audit",
      "inner-critic-intensity-scan",
      "perfection-pressure-scan",
    ],
    searchTerms: ["confidence", "self-doubt", "imposter feelings", "inner critic", "perfectionism", "self-judgment"],
  },
  {
    slug: "relationships-attachment",
    title: "Relationships & Attachment",
    description:
      "Clarify closeness patterns, trust strain, vulnerability pacing, mixed signals, and whether a relationship feels coherent from the inside.",
    categorySlugs: ["relationships-attachment"],
    featuredToolSlugs: [
      "attachment-pattern-spotter",
      "emotional-availability-profile",
      "relationship-clarity-check",
      "dating-clarity-check",
      "emotional-safety-check",
    ],
    searchTerms: ["attachment", "relationships", "dating", "mixed signals", "trust", "emotional safety"],
  },
  {
    slug: "boundaries-people-pleasing",
    title: "Boundaries & People-Pleasing",
    description:
      "Spot where guilt, over-accommodation, silent carrying, weak limits, or chronic caretaking are reshaping what you tolerate.",
    categorySlugs: ["boundaries-people-pleasing"],
    featuredToolSlugs: [
      "people-pleasing-signal-check",
      "approval-dependence-check",
      "boundary-strength-scanner",
      "work-boundary-check",
      "resentment-buildup-tracker",
    ],
    searchTerms: ["boundaries", "people pleasing", "fawning", "resentment", "approval", "caretaking"],
  },
  {
    slug: "emotional-triggers-reactions",
    title: "Emotional Triggers & Reactions",
    description:
      "Understand what activates emotional surges, how reactions escalate, and which trigger themes keep returning under pressure.",
    categorySlugs: ["emotional-regulation"],
    featuredToolSlugs: [
      "emotional-trigger-decoder",
      "anger-trigger-decoder",
      "rejection-trigger-decoder",
      "shame-trigger-pattern-check",
      "criticism-trigger-decoder",
    ],
    searchTerms: ["emotional triggers", "anger", "rejection", "shame", "criticism", "reactivity"],
  },
  {
    slug: "recovery-reset",
    title: "Recovery & Reset",
    description:
      "See whether the nervous system is actually resetting through sleep, weekly recovery, emotional repair, and realistic restoration practices.",
    categorySlugs: ["sleep-recovery"],
    featuredToolSlugs: [
      "sleep-pressure-check",
      "evening-shutdown-check",
      "rest-debt-check",
      "emotional-recovery-planner",
      "weekly-reset-planner",
    ],
    searchTerms: ["recovery", "reset", "sleep", "shutdown", "rest debt", "emotional recovery"],
  },
  {
    slug: "daily-functioning-stability",
    title: "Daily Functioning & Stability",
    description:
      "Track energy steadiness, capacity balance, day structure, consistency, and whether the system stays usable under normal load.",
    categorySlugs: ["life-balance-habits"],
    featuredToolSlugs: [
      "daily-functioning-stability-check",
      "day-structure-stability-check",
      "energy-consistency-check",
      "life-balance-visualizer",
      "personal-capacity-balance-check",
    ],
    searchTerms: ["daily functioning", "stability", "balance", "capacity", "energy consistency", "follow-through"],
  },
  {
    slug: "decision-making-clarity",
    title: "Decision Making & Clarity",
    description:
      "Clarify how pressure, conflict, relational ambiguity, and mental overload distort judgment before decisions get treated like character flaws.",
    categorySlugs: ["anxiety-overthinking"],
    featuredToolSlugs: [
      "decision-fatigue-simulator",
      "conflict-response-simulator",
      "tough-conversation-simulator",
      "high-pressure-choice-simulator",
      "relationship-decision-simulator",
    ],
    searchTerms: ["decision making", "clarity", "decision fatigue", "high pressure choice", "relationship decision"],
  },
  {
    slug: "communication-conflict",
    title: "Communication & Conflict",
    description:
      "Map tone, directness, repair habits, and how conversations change when pressure rises or misunderstanding starts to spread.",
    categorySlugs: ["communication-conflict"],
    featuredToolSlugs: [
      "communication-style-mirror",
      "conflict-style-mirror",
      "repair-conversation-style-check",
      "directness-vs-softening-check",
      "difficult-conversation-pattern-mirror",
    ],
    searchTerms: ["communication", "conflict", "repair", "directness", "difficult conversations"],
  },
  {
    slug: "work-stress-performance",
    title: "Work Stress & Performance",
    description:
      "Explore role strain, meeting burden, context switching, invisible workload, and the psychological drag of modern work patterns.",
    categorySlugs: ["work-psychology"],
    featuredToolSlugs: [
      "work-stress-load-mapper",
      "meeting-burden-mapper",
      "role-ambiguity-stress-check",
      "context-switching-load-check",
      "invisible-workload-mapper",
    ],
    searchTerms: ["work stress", "performance", "meetings", "role ambiguity", "context switching", "workload"],
  },
];

export const toolClusterMap = Object.fromEntries(
  toolClusters.map((cluster) => [cluster.slug, cluster]),
) as Record<ToolClusterSlug, ToolCluster>;

export const legacyToolClusterAliases: Record<string, ToolClusterSlug> = {
  "stress-burnout": "burnout-mental-fatigue",
  "overthinking-anxiety": "overthinking-anxiety",
  "focus-productivity": "focus-productivity",
  "confidence-self-trust": "confidence-self-perception",
  "relationships-attachment": "relationships-attachment",
  "boundaries-people-pleasing": "boundaries-people-pleasing",
  "emotional-triggers-regulation": "emotional-triggers-reactions",
  "recovery-stability": "daily-functioning-stability",
  "communication-conflict": "communication-conflict",
  "work-stress-performance": "work-stress-performance",
};

export const primaryToolClusterBySlug: Record<string, ToolClusterSlug> = {
  "burnout-risk-audit": "burnout-mental-fatigue",
  "stress-load-meter": "burnout-mental-fatigue",
  "mental-fatigue-check": "burnout-mental-fatigue",
  "emotional-exhaustion-audit": "burnout-mental-fatigue",
  "compassion-fatigue-check": "burnout-mental-fatigue",
  "overthinking-loop-check": "overthinking-anxiety",
  "rumination-pattern-check": "overthinking-anxiety",
  "worry-cycle-mapper": "overthinking-anxiety",
  "catastrophizing-pattern-check": "overthinking-anxiety",
  "intrusive-thought-response-check": "overthinking-anxiety",
  "focus-friction-audit": "focus-productivity",
  "procrastination-friction-audit": "focus-productivity",
  "executive-function-friction-check": "focus-productivity",
  "task-initiation-difficulty-audit": "focus-productivity",
  "discipline-friction-check": "focus-productivity",
  "decision-fatigue-simulator": "decision-making-clarity",
  "conflict-response-simulator": "decision-making-clarity",
  "tough-conversation-simulator": "decision-making-clarity",
  "high-pressure-choice-simulator": "decision-making-clarity",
  "relationship-decision-simulator": "decision-making-clarity",
  "life-balance-visualizer": "daily-functioning-stability",
  "work-life-balance-visualizer": "daily-functioning-stability",
  "emotional-energy-balance-wheel": "daily-functioning-stability",
  "recovery-balance-visualizer": "recovery-reset",
  "personal-capacity-balance-check": "daily-functioning-stability",
  "sleep-pressure-check": "recovery-reset",
  "evening-shutdown-check": "recovery-reset",
  "morning-recovery-readiness-check": "recovery-reset",
  "rest-debt-check": "recovery-reset",
  "nighttime-anxiety-pattern-check": "overthinking-anxiety",
  "attachment-pattern-spotter": "relationships-attachment",
  "emotional-availability-profile": "relationships-attachment",
  "intimacy-avoidance-pattern-check": "relationships-attachment",
  "trust-pattern-spotter": "relationships-attachment",
  "vulnerability-readiness-profile": "relationships-attachment",
  "emotional-trigger-decoder": "emotional-triggers-reactions",
  "anger-trigger-decoder": "emotional-triggers-reactions",
  "rejection-trigger-decoder": "emotional-triggers-reactions",
  "shame-trigger-pattern-check": "emotional-triggers-reactions",
  "criticism-trigger-decoder": "emotional-triggers-reactions",
  "boundary-strength-scanner": "boundaries-people-pleasing",
  "work-boundary-check": "boundaries-people-pleasing",
  "family-boundary-scanner": "boundaries-people-pleasing",
  "emotional-boundary-check": "boundaries-people-pleasing",
  "caretaker-boundary-scanner": "boundaries-people-pleasing",
  "emotional-recovery-planner": "recovery-reset",
  "breakup-recovery-planner": "recovery-reset",
  "burnout-recovery-planner": "burnout-mental-fatigue",
  "weekly-reset-planner": "recovery-reset",
  "stress-reset-action-plan": "recovery-reset",
  "people-pleasing-signal-check": "boundaries-people-pleasing",
  "approval-dependence-check": "boundaries-people-pleasing",
  "fawning-pattern-check": "boundaries-people-pleasing",
  "over-accommodation-check": "boundaries-people-pleasing",
  "self-abandonment-pattern-check": "boundaries-people-pleasing",
  "relationship-clarity-check": "relationships-attachment",
  "dating-clarity-check": "relationships-attachment",
  "trust-consistency-check": "relationships-attachment",
  "mixed-signals-checker": "relationships-attachment",
  "emotional-safety-check": "relationships-attachment",
  "confidence-reset-audit": "confidence-self-perception",
  "self-doubt-pattern-audit": "confidence-self-perception",
  "imposter-feelings-audit": "confidence-self-perception",
  "decision-confidence-check": "confidence-self-perception",
  "visibility-confidence-check": "confidence-self-perception",
  "reassurance-seeking-decoder": "overthinking-anxiety",
  "health-reassurance-loop-check": "overthinking-anxiety",
  "relationship-reassurance-pattern-check": "overthinking-anxiety",
  "mistake-checking-pattern-decoder": "overthinking-anxiety",
  "social-reassurance-seeking-check": "overthinking-anxiety",
  "resentment-buildup-tracker": "boundaries-people-pleasing",
  "emotional-overload-buildup-check": "emotional-triggers-reactions",
  "unspoken-needs-accumulation-check": "boundaries-people-pleasing",
  "fairness-imbalance-tracker": "boundaries-people-pleasing",
  "emotional-carrying-load-check": "boundaries-people-pleasing",
  "inner-critic-intensity-scan": "confidence-self-perception",
  "perfection-pressure-scan": "confidence-self-perception",
  "self-judgment-intensity-check": "confidence-self-perception",
  "shame-voice-pattern-check": "confidence-self-perception",
  "failure-fear-inner-voice-check": "confidence-self-perception",
  "self-sabotage-pattern-finder": "focus-productivity",
  "finish-line-resistance-check": "focus-productivity",
  "visibility-sabotage-pattern-check": "confidence-self-perception",
  "success-discomfort-pattern-finder": "confidence-self-perception",
  "follow-through-breakpoint-check": "focus-productivity",
  "communication-style-mirror": "communication-conflict",
  "conflict-style-mirror": "communication-conflict",
  "repair-conversation-style-check": "communication-conflict",
  "directness-vs-softening-check": "communication-conflict",
  "difficult-conversation-pattern-mirror": "communication-conflict",
  "work-stress-load-mapper": "work-stress-performance",
  "meeting-burden-mapper": "work-stress-performance",
  "role-ambiguity-stress-check": "work-stress-performance",
  "context-switching-load-check": "work-stress-performance",
  "invisible-workload-mapper": "work-stress-performance",
  "daily-functioning-stability-check": "daily-functioning-stability",
  "day-structure-stability-check": "daily-functioning-stability",
  "energy-consistency-check": "daily-functioning-stability",
  "follow-through-stability-check": "daily-functioning-stability",
  "emotional-steadiness-check": "daily-functioning-stability",
};

const categoryClusterFallback: Record<string, ToolClusterSlug> = {
  "stress-burnout": "burnout-mental-fatigue",
  "anxiety-overthinking": "overthinking-anxiety",
  "focus-procrastination": "focus-productivity",
  "self-esteem-confidence": "confidence-self-perception",
  "relationships-attachment": "relationships-attachment",
  "boundaries-people-pleasing": "boundaries-people-pleasing",
  "emotional-regulation": "emotional-triggers-reactions",
  "sleep-recovery": "recovery-reset",
  "life-balance-habits": "daily-functioning-stability",
  "communication-conflict": "communication-conflict",
  "work-psychology": "work-stress-performance",
  "personality-behavior": "focus-productivity",
};

export function resolveToolClusterSlug(slug: string, categorySlug: string): ToolClusterSlug {
  return primaryToolClusterBySlug[slug] ?? categoryClusterFallback[categorySlug] ?? "burnout-mental-fatigue";
}

export function normalizeToolClusterSlug(clusterSlug: string | null | undefined): ToolClusterSlug | null {
  if (!clusterSlug) {
    return null;
  }

  if (clusterSlug in toolClusterMap) {
    return clusterSlug as ToolClusterSlug;
  }

  return legacyToolClusterAliases[clusterSlug] ?? null;
}
