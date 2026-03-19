import {
  resolveToolClusterSlug,
  toolClusterMap,
  toolClusters,
  type ToolCluster as TopicCluster,
  type ToolClusterSlug,
} from "./tool-clusters";

export type ToolCategory = {
  slug: string;
  title: string;
  description: string;
  toolCount: number;
  sampleToolSlugs: string[];
};

export type ToolItem = {
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  cluster: ToolClusterSlug;
  type: string;
  minutes: number;
  popularity: number;
};

type RawToolItem = Omit<ToolItem, "cluster">;

export type ToolFormat =
  | "Assessment"
  | "Decoder"
  | "Planner"
  | "Simulator"
  | "Visualizer"
  | "Profile"
  | "Guide";

export type IconName =
  | "shield"
  | "lock"
  | "signal"
  | "pattern"
  | "trend"
  | "time"
  | "structure"
  | "insight"
  | "privacy"
  | "graph";

export type MediaSlot = {
  src?: string;
  alt: string;
  label: string;
  ratio: string;
  fit?: "contain" | "cover";
};

export type TrustCard = {
  eyebrow: string;
  title: string;
  meta: string;
  media: MediaSlot;
};

export type UsageStat = {
  value: string;
  icon: IconName;
  label: string;
  note: string;
};

export type Testimonial = {
  label: string;
  topic: string;
  quote: string;
  name: string;
  location: string;
  initials: string;
};

export type SecurityCard = {
  title: string;
  description: string;
  icon: IconName;
  media: MediaSlot;
};

export type Pathway = {
  title: string;
  description: string;
  categorySlug: string;
  focusToolSlug: string;
  cta: string;
};

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export type ToolSort = "popular" | "quickest" | "alphabetical";

export const defaultToolSort: ToolSort = "popular";

export const categories: ToolCategory[] = [
  {
    slug: "stress-burnout",
    title: "Stress & Burnout",
    description: "Fast signal checks for overload, recovery debt, and early burnout patterns before they harden.",
    toolCount: 28,
    sampleToolSlugs: ["burnout-risk-audit", "stress-load-meter"],
  },
  {
    slug: "anxiety-overthinking",
    title: "Anxiety & Overthinking",
    description: "Structured tools for loops, indecision, anticipatory worry, and the mental cost of staying stuck.",
    toolCount: 23,
    sampleToolSlugs: ["overthinking-loop-check", "decision-fatigue-simulator"],
  },
  {
    slug: "relationships-attachment",
    title: "Relationships & Attachment",
    description: "Clarify connection patterns, friction points, and what may be driving emotional confusion.",
    toolCount: 21,
    sampleToolSlugs: ["attachment-pattern-spotter", "relationship-clarity-check"],
  },
  {
    slug: "self-esteem-confidence",
    title: "Self-Esteem & Confidence",
    description: "Surface confidence drains, self-worth distortions, and quieter forms of self-doubt.",
    toolCount: 17,
    sampleToolSlugs: ["confidence-reset-audit", "inner-critic-intensity-scan"],
  },
  {
    slug: "boundaries-people-pleasing",
    title: "Boundaries & People-Pleasing",
    description: "Spot where self-protection gets blurred, where guilt leads, and where your yes is too expensive.",
    toolCount: 16,
    sampleToolSlugs: ["people-pleasing-signal-check", "approval-dependence-check"],
  },
  {
    slug: "focus-procrastination",
    title: "Focus & Procrastination",
    description: "Useful for attention drift, start resistance, and the invisible friction behind unfinished work.",
    toolCount: 22,
    sampleToolSlugs: ["focus-friction-audit", "procrastination-trigger-map"],
  },
  {
    slug: "sleep-recovery",
    title: "Sleep & Recovery",
    description: "Read patterns in shutdown capacity, recovery quality, and night-to-next-day carryover.",
    toolCount: 13,
    sampleToolSlugs: ["sleep-pressure-check", "recovery-debt-estimator"],
  },
  {
    slug: "emotional-regulation",
    title: "Emotional Regulation",
    description: "Track reactivity, trigger intensity, and how quickly you can return to steadier ground.",
    toolCount: 18,
    sampleToolSlugs: ["emotional-recovery-planner", "emotional-trigger-decoder"],
  },
  {
    slug: "work-psychology",
    title: "Work Psychology",
    description: "Explore role fit, meeting load, motivation strain, and the mental texture of work itself.",
    toolCount: 27,
    sampleToolSlugs: ["work-stress-load-mapper", "meeting-overload-check"],
  },
  {
    slug: "communication-conflict",
    title: "Communication & Conflict",
    description: "Tools for reading communication style, preparing difficult conversations, and reducing repeat tension.",
    toolCount: 16,
    sampleToolSlugs: ["communication-style-mirror", "hard-conversation-prep"],
  },
  {
    slug: "personality-behavior",
    title: "Personality & Behavior",
    description: "Decode recurring behavior signatures, motivation tendencies, and self-sabotage signals.",
    toolCount: 20,
    sampleToolSlugs: ["behavior-pattern-decoder", "self-sabotage-pattern-finder"],
  },
  {
    slug: "life-balance-habits",
    title: "Life Balance & Habits",
    description: "See where routines are helping, where they are leaking energy, and what balance actually needs.",
    toolCount: 24,
    sampleToolSlugs: ["daily-functioning-stability-check", "life-balance-visualizer"],
  },
];

const rawTools: RawToolItem[] = [











  {
    slug: "burnout-risk-audit",
    title: "Burnout Risk Audit",
    description: "A concise signal check for emotional exhaustion, cynicism drift, and reduced capacity at work or home.",
    categorySlug: "stress-burnout",
    type: "Self-assessment",
    minutes: 4,
    popularity: 100,
  },
  {
    slug: "energy-drift-check",
    title: "Energy Drift Check",
    description: "Highlights where your daily energy is leaking and whether recovery is actually catching up.",
    categorySlug: "stress-burnout",
    type: "Scorecard",
    minutes: 5,
    popularity: 82,
  },
  {
    slug: "stress-load-meter",
    title: "Stress Load Meter",
    description: "Shows whether your current stress is being driven more by demand, recovery drag, mental noise, or hidden pressure.",
    categorySlug: "stress-burnout",
    type: "Load meter",
    minutes: 4,
    popularity: 87,
  },
  {
    slug: "mental-fatigue-check",
    title: "Mental Fatigue Check",
    description: "Maps whether cognitive exhaustion is coming from decision density, switching, open loops, or weak mental reset.",
    categorySlug: "stress-burnout",
    type: "Cognitive scan",
    minutes: 4,
    popularity: 85,
  },
  {
    slug: "emotional-exhaustion-audit",
    title: "Emotional Exhaustion Audit",
    description: "Separates emotional depletion into reduced capacity, carryover strain, weak replenishment, and relational overexposure.",
    categorySlug: "stress-burnout",
    type: "Emotional audit",
    minutes: 5,
    popularity: 84,
  },
  {
    slug: "compassion-fatigue-check",
    title: "Compassion Fatigue Check",
    description: "Checks whether repeated caregiving, helping, or emotional holding is quietly turning into empathy strain.",
    categorySlug: "stress-burnout",
    type: "Care strain check",
    minutes: 5,
    popularity: 83,
  },
  {
    slug: "overthinking-loop-check",
    title: "Overthinking Loop Check",
    description: "Maps repetitive thought patterns so you can tell rumination from useful reflection.",
    categorySlug: "anxiety-overthinking",
    type: "Reflection tool",
    minutes: 4,
    popularity: 98,
  },
  {
    slug: "rumination-pattern-check",
    title: "Rumination Pattern Check",
    description: "Shows whether your mind is processing usefully or replaying the same past material without finding real closure.",
    categorySlug: "anxiety-overthinking",
    type: "Pattern check",
    minutes: 4,
    popularity: 91,
  },
  {
    slug: "worry-cycle-mapper",
    title: "Worry Cycle Mapper",
    description: "Maps whether your mind is planning realistically or scanning the future so repeatedly that uncertainty starts running the day.",
    categorySlug: "anxiety-overthinking",
    type: "Cycle mapper",
    minutes: 4,
    popularity: 90,
  },
  {
    slug: "catastrophizing-pattern-check",
    title: "Catastrophizing Pattern Check",
    description: "Checks whether concern is staying grounded or quickly escalating into worst-case outcomes that feel emotionally real.",
    categorySlug: "anxiety-overthinking",
    type: "Pattern check",
    minutes: 4,
    popularity: 89,
  },
  {
    slug: "intrusive-thought-response-check",
    title: "Intrusive Thought Response Check",
    description: "Shows how unwanted thoughts become sticky, what response habits keep them active, and where the mental cost builds.",
    categorySlug: "anxiety-overthinking",
    type: "Response check",
    minutes: 4,
    popularity: 88,
  },
  {
    slug: "decision-fatigue-simulator",
    title: "Decision Fatigue Simulator",
    description: "Simulates how repeated choices, uncertainty, and low recovery quietly drain clarity across the day.",
    categorySlug: "anxiety-overthinking",
    type: "Simulator",
    minutes: 4,
    popularity: 95,
  },
  {
    slug: "attachment-pattern-spotter",
    title: "Attachment Pattern Spotter",
    description: "A guided readout for proximity needs, withdrawal habits, and emotional safety signals in relationships.",
    categorySlug: "relationships-attachment",
    type: "Profile",
    minutes: 8,
    popularity: 96,
  },
  {
    slug: "relationship-clarity-check",
    title: "Relationship Clarity Check",
    description: "Helps separate mixed signals, uncertainty, and assumptions from what is actually happening.",
    categorySlug: "relationships-attachment",
    type: "Guided check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "reassurance-seeking-decoder",
    title: "Reassurance Seeking Decoder",
    description: "Decodes how uncertainty turns into checking, reassurance, brief relief, and the return of doubt.",
    categorySlug: "relationships-attachment",
    type: "Cycle decoder",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "confidence-reset-audit",
    title: "Confidence Reset Audit",
    description: "Pinpoints recent hits to confidence and how they are shaping your decisions or self-image.",
    categorySlug: "self-esteem-confidence",
    type: "Self-assessment",
    minutes: 6,
    popularity: 91,
  },
  {
    slug: "inner-critic-intensity-scan",
    title: "Inner Critic Intensity Scan",
    description: "Maps how harsh, repetitive, perfectionistic, or undermining your inner voice becomes under pressure.",
    categorySlug: "self-esteem-confidence",
    type: "Pattern scan",
    minutes: 5,
    popularity: 88,
  },
  {
    slug: "people-pleasing-signal-check",
    title: "People-Pleasing Signal Check",
    description: "Maps where approval pressure, guilt, and emotional smoothing start outranking your own internal signal.",
    categorySlug: "boundaries-people-pleasing",
    type: "Signal check",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "approval-dependence-check",
    title: "Approval Dependence Check",
    description: "Shows whether outside approval is carrying too much weight in your decisions, tone, and internal position.",
    categorySlug: "boundaries-people-pleasing",
    type: "Pattern check",
    minutes: 4,
    popularity: 88,
  },
  {
    slug: "fawning-pattern-check",
    title: "Fawning Pattern Check",
    description: "Checks whether tension or emotional intensity make you appease, smooth, or comply too quickly under pressure.",
    categorySlug: "boundaries-people-pleasing",
    type: "Response check",
    minutes: 4,
    popularity: 86,
  },
  {
    slug: "over-accommodation-check",
    title: "Over-Accommodation Check",
    description: "Maps whether flexibility has turned into chronic over-adjustment that keeps costing you later.",
    categorySlug: "boundaries-people-pleasing",
    type: "Pattern check",
    minutes: 4,
    popularity: 85,
  },
  {
    slug: "self-abandonment-pattern-check",
    title: "Self-Abandonment Pattern Check",
    description: "Shows whether pressure or guilt make you leave your own position too quickly just to keep things smooth.",
    categorySlug: "boundaries-people-pleasing",
    type: "Pattern check",
    minutes: 4,
    popularity: 87,
  },
  {
    slug: "resentment-buildup-tracker",
    title: "Resentment Buildup Tracker",
    description: "Tracks how silence, unfairness, over-carrying, and weak repair accumulate into stored emotional pressure.",
    categorySlug: "boundaries-people-pleasing",
    type: "Pressure tracker",
    minutes: 5,
    popularity: 89,
  },
  {
    slug: "boundary-strength-scanner",
    title: "Boundary Strength Scanner",
    description: "Scans where guilt, urgency, and emotional pressure are softening your limits in real interactions.",
    categorySlug: "boundaries-people-pleasing",
    type: "Boundary scan",
    minutes: 4,
    popularity: 90,
  },
  {
    slug: "saying-no-readiness",
    title: "Saying No Readiness",
    description: "Measures how prepared you feel to decline requests without spiraling into guilt or overexplaining.",
    categorySlug: "boundaries-people-pleasing",
    type: "Readiness check",
    minutes: 4,
    popularity: 72,
  },
  {
    slug: "focus-friction-audit",
    title: "Focus Friction Audit",
    description: "A fast, high-signal tool for identifying what is blocking deep work before you blame discipline.",
    categorySlug: "focus-procrastination",
    type: "Scorecard",
    minutes: 4,
    popularity: 97,
  },
  {
    slug: "procrastination-trigger-map",
    title: "Procrastination Trigger Map",
    description: "Separates boredom, overwhelm, ambiguity, and fear-based delay into a clearer action picture.",
    categorySlug: "focus-procrastination",
    type: "Map",
    minutes: 8,
    popularity: 90,
  },
  {
    slug: "sleep-pressure-check",
    title: "Sleep Pressure Check",
    description: "Maps recovery debt, nighttime disruption, and next-day carryover into a clearer sleep pressure readout.",
    categorySlug: "sleep-recovery",
    type: "Recovery tool",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "recovery-debt-estimator",
    title: "Recovery Debt Estimator",
    description: "A practical estimate of how much recovery your system may be owed after long stretches of demand.",
    categorySlug: "sleep-recovery",
    type: "Estimator",
    minutes: 6,
    popularity: 74,
  },
  {
    slug: "emotion-regulation-profile",
    title: "Emotion Regulation Profile",
    description: "Assesses how you respond under pressure, how quickly you return, and where regulation breaks down.",
    categorySlug: "emotional-regulation",
    type: "Profile",
    minutes: 8,
    popularity: 94,
  },
  {
    slug: "emotional-trigger-decoder",
    title: "Emotional Trigger Decoder",
    description: "Decodes emotional activation into trigger clusters, reaction pathways, spillover load, and recovery drag.",
    categorySlug: "emotional-regulation",
    type: "Decoder",
    minutes: 5,
    popularity: 96,
  },
  {
    slug: "emotional-recovery-planner",
    title: "Emotional Recovery Planner",
    description: "Turns emotional load, low capacity, and thin support into a realistic short recovery path you can actually follow.",
    categorySlug: "emotional-regulation",
    type: "Planner",
    minutes: 4,
    popularity: 97,
  },
  {
    slug: "work-stress-load-mapper",
    title: "Work Stress Load Mapper",
    description: "Maps whether work stress is really coming from volume, ambiguity, switching, invisible responsibility, emotional labor, or low control.",
    categorySlug: "work-psychology",
    type: "Pressure mapper",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "role-fit-reflection",
    title: "Role Fit Reflection",
    description: "Clarifies whether the work itself fits your strengths, values, and natural pace of operating.",
    categorySlug: "work-psychology",
    type: "Reflection tool",
    minutes: 7,
    popularity: 79,
  },
  {
    slug: "meeting-overload-check",
    title: "Meeting Overload Check",
    description: "Shows when collaboration volume starts eroding clear thinking, responsiveness, and strategic attention.",
    categorySlug: "work-psychology",
    type: "Operational scan",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "communication-style-mirror",
    title: "Communication Style Mirror",
    description: "Reflects how directness, clarity, warmth, defensiveness, and repair shift once real conversations get pressured.",
    categorySlug: "communication-conflict",
    type: "Conversation mirror",
    minutes: 6,
    popularity: 83,
  },
  {
    slug: "hard-conversation-prep",
    title: "Hard Conversation Prep",
    description: "A structured prep flow for entering a difficult conversation with more clarity and less emotional spillover.",
    categorySlug: "communication-conflict",
    type: "Prep guide",
    minutes: 9,
    popularity: 88,
  },
  {
    slug: "behavior-pattern-decoder",
    title: "Behavior Pattern Decoder",
    description: "Turns repeated habits and reactions into readable patterns you can work with instead of moralizing.",
    categorySlug: "personality-behavior",
    type: "Decoder",
    minutes: 7,
    popularity: 81,
  },
  {
    slug: "self-sabotage-pattern-finder",
    title: "Self-Sabotage Pattern Finder",
    description: "Maps where progress repeatedly breaks, what pressure builds just before, and how internal derailment interrupts follow-through.",
    categorySlug: "personality-behavior",
    type: "Pattern finder",
    minutes: 6,
    popularity: 86,
  },
  {
    slug: "habit-friction-audit",
    title: "Habit Friction Audit",
    description: "Finds the actual points of resistance inside routines that look simple on paper but fail in real life.",
    categorySlug: "life-balance-habits",
    type: "Audit",
    minutes: 5,
    popularity: 78,
  },
  {
    slug: "life-balance-visualizer",
    title: "Life Balance Visualizer",
    description: "Build a live wheel-based map of where life feels supported, stretched, undernourished, or quietly draining.",
    categorySlug: "life-balance-habits",
    type: "Visualizer",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "daily-functioning-stability-check",
    title: "Daily Functioning Stability Check",
    description: "Maps where day-to-day steadiness is holding, where it slips first, and how energy, follow-through, and recovery margin are interacting.",
    categorySlug: "life-balance-habits",
    type: "Stability check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "procrastination-friction-audit",
    title: "Procrastination Friction Audit",
    description: "See what is actually creating procrastination friction, from avoidance cues and task aversion to emotional resistance, low clarity, and weak starting momentum.",
    categorySlug: "focus-procrastination",
    type: "Friction audit",
    minutes: 4,
    popularity: 95,
  },
  {
    slug: "executive-function-friction-check",
    title: "Executive Function Friction Check",
    description: "Map where executive function friction is building, including planning strain, sequencing drag, weak working memory, start resistance, and lost task continuity.",
    categorySlug: "focus-procrastination",
    type: "Function check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "task-initiation-difficulty-audit",
    title: "Task Initiation Difficulty Audit",
    description: "See whether task initiation difficulty is being driven by overwhelm, vague starting points, emotional resistance, low activation, or pressure-sensitive avoidance.",
    categorySlug: "focus-procrastination",
    type: "Initiation audit",
    minutes: 4,
    popularity: 92,
  },
  {
    slug: "discipline-friction-check",
    title: "Discipline Friction Check",
    description: "Check whether discipline keeps breaking because of weak structure, emotional friction, unclear standards, temptation load, or brittle follow-through systems.",
    categorySlug: "focus-procrastination",
    type: "Consistency check",
    minutes: 4,
    popularity: 89,
  },
  {
    slug: "conflict-response-simulator",
    title: "Conflict Response Simulator",
    description: "Simulate how clarity changes once tension rises, emotional load builds, and you have to choose between withdrawal, repair, defensiveness, or direct response.",
    categorySlug: "communication-conflict",
    type: "Response simulator",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "tough-conversation-simulator",
    title: "Tough Conversation Simulator",
    description: "See how pressure, emotional exposure, uncertainty, and timing change your clarity when you need to have a difficult conversation well.",
    categorySlug: "communication-conflict",
    type: "Conversation simulator",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "high-pressure-choice-simulator",
    title: "High-Pressure Choice Simulator",
    description: "Simulate how urgency, consequences, low margin, and stress load affect judgment when a choice has to be made under pressure.",
    categorySlug: "anxiety-overthinking",
    type: "Choice simulator",
    minutes: 4,
    popularity: 88,
  },
  {
    slug: "relationship-decision-simulator",
    title: "Relationship Decision Simulator",
    description: "Map how hope, doubt, attachment pull, fear of regret, and mixed signals change clarity when a relationship decision keeps getting delayed.",
    categorySlug: "relationships-attachment",
    type: "Relationship simulator",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "work-life-balance-visualizer",
    title: "Work-Life Balance Visualizer",
    description: "Build a clearer picture of how work demand, recovery, home life, time pressure, and mental spillover are shaping your actual work-life balance.",
    categorySlug: "life-balance-habits",
    type: "Balance visualizer",
    minutes: 4,
    popularity: 94,
  },
  {
    slug: "emotional-energy-balance-wheel",
    title: "Emotional Energy Balance Wheel",
    description: "See where emotional energy is being replenished, drained, overused, or quietly taxed across the week so you can rebalance the system.",
    categorySlug: "life-balance-habits",
    type: "Energy wheel",
    minutes: 4,
    popularity: 90,
  },
  {
    slug: "recovery-balance-visualizer",
    title: "Recovery Balance Visualizer",
    description: "Map how sleep, rest, decompression, margin, and active recovery are supporting you versus leaving the system structurally under-recovered.",
    categorySlug: "sleep-recovery",
    type: "Recovery visualizer",
    minutes: 4,
    popularity: 91,
  },
  {
    slug: "personal-capacity-balance-check",
    title: "Personal Capacity Balance Check",
    description: "See whether your current responsibilities, expectations, recovery, and available bandwidth are actually in balance with your personal capacity.",
    categorySlug: "life-balance-habits",
    type: "Capacity check",
    minutes: 4,
    popularity: 89,
  },
  {
    slug: "evening-shutdown-check",
    title: "Evening Shutdown Check",
    description: "See what is preventing real evening shutdown, from mental carryover and stimulation load to weak decompression cues and unfinished activation.",
    categorySlug: "sleep-recovery",
    type: "Shutdown check",
    minutes: 4,
    popularity: 91,
  },
  {
    slug: "morning-recovery-readiness-check",
    title: "Morning Recovery Readiness Check",
    description: "Check whether your system is waking up with enough restoration, clarity, and recovery margin to meet the day without starting already behind.",
    categorySlug: "sleep-recovery",
    type: "Readiness check",
    minutes: 4,
    popularity: 90,
  },
  {
    slug: "rest-debt-check",
    title: "Rest Debt Check",
    description: "Estimate whether your system is carrying accumulated rest debt from constant effort, under-recovery, overstimulation, and too little true reset time.",
    categorySlug: "sleep-recovery",
    type: "Debt check",
    minutes: 4,
    popularity: 92,
  },
  {
    slug: "nighttime-anxiety-pattern-check",
    title: "Nighttime Anxiety Pattern Check",
    description: "See whether nighttime anxiety is being fueled by unfinished stress, mental scanning, body activation, fear of not sleeping, or weak evening downshift.",
    categorySlug: "sleep-recovery",
    type: "Pattern check",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "emotional-availability-profile",
    title: "Emotional Availability Profile",
    description: "See how open, reachable, responsive, and emotionally present you or a relationship dynamic feels when closeness actually matters.",
    categorySlug: "relationships-attachment",
    type: "Availability profile",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "intimacy-avoidance-pattern-check",
    title: "Intimacy Avoidance Pattern Check",
    description: "Check whether closeness triggers distancing, over-independence, deactivation, emotional shutdown, or subtle forms of pulling back.",
    categorySlug: "relationships-attachment",
    type: "Pattern check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "trust-pattern-spotter",
    title: "Trust Pattern Spotter",
    description: "Map how quickly trust forms, where doubt enters, what makes security wobble, and whether trust is staying steady across closeness and stress.",
    categorySlug: "relationships-attachment",
    type: "Trust profile",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "vulnerability-readiness-profile",
    title: "Vulnerability Readiness Profile",
    description: "See how ready your system is for honesty, emotional risk, closeness, and deeper self-revelation without collapsing into shutdown or overexposure.",
    categorySlug: "relationships-attachment",
    type: "Readiness profile",
    minutes: 5,
    popularity: 89,
  },
  {
    slug: "anger-trigger-decoder",
    title: "Anger Trigger Decoder",
    description: "Decode what is really fueling anger activation, from disrespect and blocked agency to accumulated pressure, unfairness, and unprocessed carryover.",
    categorySlug: "emotional-regulation",
    type: "Trigger decoder",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "rejection-trigger-decoder",
    title: "Rejection Trigger Decoder",
    description: "See how rejection sensitivity gets activated, what signals set it off fastest, and how quickly the system moves into self-protection or overinterpretation.",
    categorySlug: "emotional-regulation",
    type: "Trigger decoder",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "shame-trigger-pattern-check",
    title: "Shame Trigger Pattern Check",
    description: "Map what most quickly pulls the system into shame, self-contraction, hiding, collapse, or harsh self-surveillance after exposure or perceived failure.",
    categorySlug: "emotional-regulation",
    type: "Pattern check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "criticism-trigger-decoder",
    title: "Criticism Trigger Decoder",
    description: "Decode why criticism lands so hard, where defensiveness or collapse begins, and which meanings make feedback feel much bigger than the moment itself.",
    categorySlug: "emotional-regulation",
    type: "Trigger decoder",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "work-boundary-check",
    title: "Work Boundary Check",
    description: "Check where workload, urgency, availability pressure, and blurred expectations are making your work boundaries softer than they need to be.",
    categorySlug: "work-psychology",
    type: "Boundary check",
    minutes: 4,
    popularity: 91,
  },
  {
    slug: "family-boundary-scanner",
    title: "Family Boundary Scanner",
    description: "Scan where family expectations, loyalty pressure, emotional pull, and old roles are making family boundaries harder to hold.",
    categorySlug: "boundaries-people-pleasing",
    type: "Boundary scan",
    minutes: 4,
    popularity: 90,
  },
  {
    slug: "emotional-boundary-check",
    title: "Emotional Boundary Check",
    description: "See whether you are absorbing too much emotional tone, overholding other people, or losing your own signal when feelings run high.",
    categorySlug: "boundaries-people-pleasing",
    type: "Boundary check",
    minutes: 4,
    popularity: 92,
  },
  {
    slug: "caretaker-boundary-scanner",
    title: "Caretaker Boundary Scanner",
    description: "Map where helping, rescuing, emotional caretaking, and over-responsibility are quietly weakening your ability to hold a clean limit.",
    categorySlug: "boundaries-people-pleasing",
    type: "Boundary scan",
    minutes: 4,
    popularity: 89,
  },
  {
    slug: "breakup-recovery-planner",
    title: "Breakup Recovery Planner",
    description: "Turn breakup pain, looping attachment pulls, emotional shock, and low capacity into a calmer recovery path you can actually follow this week.",
    categorySlug: "relationships-attachment",
    type: "Recovery planner",
    minutes: 4,
    popularity: 95,
  },
  {
    slug: "burnout-recovery-planner",
    title: "Burnout Recovery Planner",
    description: "Build a more realistic burnout recovery path by separating exhaustion, depleted capacity, structure repair, and recovery margin instead of only trying to rest harder.",
    categorySlug: "stress-burnout",
    type: "Recovery planner",
    minutes: 4,
    popularity: 96,
  },
  {
    slug: "weekly-reset-planner",
    title: "Weekly Reset Planner",
    description: "Translate weekly overload, unfinished stress, low margin, and repeated spillover into a reset plan that actually restores steadiness before the next week starts.",
    categorySlug: "life-balance-habits",
    type: "Reset planner",
    minutes: 4,
    popularity: 93,
  },
  {
    slug: "stress-reset-action-plan",
    title: "Stress Reset Action Plan",
    description: "Turn rising stress load, poor downshift, low margin, and repeated overload into a short stress reset plan that makes the next steps concrete.",
    categorySlug: "stress-burnout",
    type: "Action plan",
    minutes: 4,
    popularity: 94,
  },
  {
    slug: "dating-clarity-check",
    title: "Dating Clarity Check",
    description: "See whether your dating dynamic is actually clear, inconsistent, avoidant, slowly building, or too ambiguous to keep carrying without clearer signals.",
    categorySlug: "relationships-attachment",
    type: "Dating check",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "trust-consistency-check",
    title: "Trust Consistency Check",
    description: "Check whether trust signals are staying consistent over time or whether the pattern keeps wobbling between warmth, distance, reassurance, and uncertainty.",
    categorySlug: "relationships-attachment",
    type: "Trust check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "mixed-signals-checker",
    title: "Mixed Signals Checker",
    description: "Separate genuine mixed signals from slow pacing, fear, inconsistency, low investment, or wishful reading so the pattern gets easier to call clearly.",
    categorySlug: "relationships-attachment",
    type: "Signal checker",
    minutes: 5,
    popularity: 95,
  },
  {
    slug: "emotional-safety-check",
    title: "Emotional Safety Check",
    description: "See whether a relationship feels emotionally safe enough for honesty, repair, vulnerability, and steadiness or whether the system keeps bracing instead.",
    categorySlug: "relationships-attachment",
    type: "Safety check",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "self-doubt-pattern-audit",
    title: "Self-Doubt Pattern Audit",
    description: "Audit where self-doubt is coming from, how it gets reinforced, and which situations make your own judgment feel least steady.",
    categorySlug: "self-esteem-confidence",
    type: "Pattern audit",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "imposter-feelings-audit",
    title: "Imposter Feelings Audit",
    description: "See whether imposter feelings are being driven by visibility, comparison, new responsibilities, pressure to perform, or a harsh internal standard.",
    categorySlug: "self-esteem-confidence",
    type: "Feelings audit",
    minutes: 5,
    popularity: 95,
  },
  {
    slug: "decision-confidence-check",
    title: "Decision Confidence Check",
    description: "Check whether decision confidence is being weakened by overanalysis, fear of mistakes, low self-trust, or pressure to get every move exactly right.",
    categorySlug: "self-esteem-confidence",
    type: "Confidence check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "visibility-confidence-check",
    title: "Visibility Confidence Check",
    description: "Map what happens to confidence when you become more visible, exposed, evaluated, or harder to ignore, and where self-protection starts to take over.",
    categorySlug: "self-esteem-confidence",
    type: "Confidence check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "health-reassurance-loop-check",
    title: "Health Reassurance Loop Check",
    description: "Decode whether body sensations, uncertainty, symptom scanning, or fear of missing something serious are driving a health reassurance loop.",
    categorySlug: "anxiety-overthinking",
    type: "Loop check",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "relationship-reassurance-pattern-check",
    title: "Relationship Reassurance Pattern Check",
    description: "See whether relationship doubt keeps turning into checking, seeking certainty, needing proof, and temporary relief that never fully lasts.",
    categorySlug: "relationships-attachment",
    type: "Pattern check",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "mistake-checking-pattern-decoder",
    title: "Mistake Checking Pattern Decoder",
    description: "Map how fear of mistakes turns into rereading, rechecking, revisiting, and repeated certainty-seeking even after you already know enough.",
    categorySlug: "anxiety-overthinking",
    type: "Pattern decoder",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "social-reassurance-seeking-check",
    title: "Social Reassurance Seeking Check",
    description: "See whether awkward moments, social doubt, fear of judgment, or uncertainty about how you came across are driving repeated social reassurance seeking.",
    categorySlug: "anxiety-overthinking",
    type: "Social check",
    minutes: 5,
    popularity: 89,
  },
  {
    slug: "emotional-overload-buildup-check",
    title: "Emotional Overload Buildup Check",
    description: "Track whether emotional overload is building through overholding, weak recovery, quiet accumulation, unprocessed strain, and too little release.",
    categorySlug: "emotional-regulation",
    type: "Buildup check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "unspoken-needs-accumulation-check",
    title: "Unspoken Needs Accumulation Check",
    description: "See whether important needs keep getting deferred, minimized, or silently accumulated until pressure builds under the surface.",
    categorySlug: "boundaries-people-pleasing",
    type: "Accumulation check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "fairness-imbalance-tracker",
    title: "Fairness Imbalance Tracker",
    description: "Track whether fairness keeps slipping through overgiving, uneven effort, blurred responsibility, or repeated one-sidedness that never gets repaired.",
    categorySlug: "boundaries-people-pleasing",
    type: "Imbalance tracker",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "emotional-carrying-load-check",
    title: "Emotional Carrying Load Check",
    description: "See whether you are carrying too much emotional coordination, relational management, or unspoken responsibility for everyone else’s stability.",
    categorySlug: "boundaries-people-pleasing",
    type: "Load check",
    minutes: 5,
    popularity: 89,
  },
  {
    slug: "perfection-pressure-scan",
    title: "Perfection Pressure Scan",
    description: "Scan how perfection pressure tightens your standards, narrows your margin, and turns ordinary effort into a constant test you feel behind on.",
    categorySlug: "self-esteem-confidence",
    type: "Pressure scan",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "self-judgment-intensity-check",
    title: "Self-Judgment Intensity Check",
    description: "See how quickly self-judgment rises under stress, how harsh the internal tone becomes, and what kinds of moments amplify it most.",
    categorySlug: "self-esteem-confidence",
    type: "Intensity check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "shame-voice-pattern-check",
    title: "Shame Voice Pattern Check",
    description: "Map the voice that shows up after mistakes, exposure, criticism, or failure and see how shame language reshapes your internal world.",
    categorySlug: "self-esteem-confidence",
    type: "Pattern check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "failure-fear-inner-voice-check",
    title: "Failure Fear Inner Voice Check",
    description: "See how fear of failure shapes the inner voice before, during, and after effort, and where that pressure starts shrinking your range.",
    categorySlug: "self-esteem-confidence",
    type: "Inner-voice check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "finish-line-resistance-check",
    title: "Finish-Line Resistance Check",
    description: "Check what starts happening near completion, why the finish line gets harder to cross, and where progress begins to stall right before done.",
    categorySlug: "personality-behavior",
    type: "Resistance check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "visibility-sabotage-pattern-check",
    title: "Visibility Sabotage Pattern Check",
    description: "Map what happens when your work, voice, or success becomes more visible and why the system may start pulling back right when exposure increases.",
    categorySlug: "personality-behavior",
    type: "Pattern check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "success-discomfort-pattern-finder",
    title: "Success Discomfort Pattern Finder",
    description: "See whether expansion, recognition, momentum, or success itself starts creating discomfort that makes it harder to stay consistent.",
    categorySlug: "personality-behavior",
    type: "Pattern finder",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "follow-through-breakpoint-check",
    title: "Follow-Through Breakpoint Check",
    description: "Identify where follow-through usually breaks, what pressures trigger the drop, and why effort alone does not carry you through the whole arc.",
    categorySlug: "personality-behavior",
    type: "Breakpoint check",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "conflict-style-mirror",
    title: "Conflict Style Mirror",
    description: "See how you tend to move through conflict, whether you push, soften, withdraw, overexplain, or try to repair before the issue is actually clear.",
    categorySlug: "communication-conflict",
    type: "Conflict mirror",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "repair-conversation-style-check",
    title: "Repair Conversation Style Check",
    description: "Check what your repair style looks like after tension, misunderstanding, or rupture and whether repair becomes clearer, softer, more avoidant, or more pressured.",
    categorySlug: "communication-conflict",
    type: "Repair check",
    minutes: 5,
    popularity: 90,
  },
  {
    slug: "directness-vs-softening-check",
    title: "Directness vs Softening Check",
    description: "See how often you say the real thing clearly versus softening, cushioning, diluting, or overmanaging how it lands.",
    categorySlug: "communication-conflict",
    type: "Tone check",
    minutes: 5,
    popularity: 89,
  },
  {
    slug: "difficult-conversation-pattern-mirror",
    title: "Difficult Conversation Pattern Mirror",
    description: "Mirror what happens when a conversation matters: where clarity shifts, defensiveness rises, repair weakens, or your tone changes under pressure.",
    categorySlug: "communication-conflict",
    type: "Pattern mirror",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "meeting-burden-mapper",
    title: "Meeting Burden Mapper",
    description: "See how much stress is actually coming from meetings, coordination drag, context resets, weak agendas, and too little uninterrupted time to think.",
    categorySlug: "work-psychology",
    type: "Burden mapper",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "role-ambiguity-stress-check",
    title: "Role Ambiguity Stress Check",
    description: "Check whether unclear expectations, shifting priorities, vague accountability, and blurred ownership are the real sources of your work stress.",
    categorySlug: "work-psychology",
    type: "Stress check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "context-switching-load-check",
    title: "Context Switching Load Check",
    description: "See whether constant task switching, interruption recovery, shallow restarts, and fragmented attention are making the workday heavier than it looks.",
    categorySlug: "work-psychology",
    type: "Load check",
    minutes: 5,
    popularity: 94,
  },
  {
    slug: "invisible-workload-mapper",
    title: "Invisible Workload Mapper",
    description: "Map the behind-the-scenes load that does not get counted clearly, including coordination, emotional labor, memory load, support work, and hidden responsibility.",
    categorySlug: "work-psychology",
    type: "Load mapper",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "day-structure-stability-check",
    title: "Day-Structure Stability Check",
    description: "See whether your day structure is steady enough to support focus, pacing, recovery, and follow-through or whether the rhythm keeps collapsing under load.",
    categorySlug: "life-balance-habits",
    type: "Structure check",
    minutes: 5,
    popularity: 91,
  },
  {
    slug: "energy-consistency-check",
    title: "Energy Consistency Check",
    description: "Check whether energy is staying stable enough through the day or whether uneven activation, crashes, and weak recovery are quietly reshaping everything else.",
    categorySlug: "life-balance-habits",
    type: "Consistency check",
    minutes: 5,
    popularity: 93,
  },
  {
    slug: "follow-through-stability-check",
    title: "Follow-Through Stability Check",
    description: "See whether your system can carry tasks through reliably or whether pressure, fragmentation, weak activation, and low recovery keep breaking follow-through.",
    categorySlug: "life-balance-habits",
    type: "Stability check",
    minutes: 5,
    popularity: 92,
  },
  {
    slug: "emotional-steadiness-check",
    title: "Emotional Steadiness Check",
    description: "Check whether emotional steadiness is holding through the day or whether stress, triggers, fatigue, and weak resets are making the system wobble too easily.",
    categorySlug: "emotional-regulation",
    type: "Steadiness check",
    minutes: 5,
    popularity: 94,
  },
];

export const tools: ToolItem[] = rawTools.map((tool) => ({
  ...tool,
  cluster: resolveToolClusterSlug(tool.slug, tool.categorySlug),
}));

export const featuredToolSlugs = [
  "burnout-risk-audit",
  "relationship-clarity-check",
  "focus-friction-audit",
  "sleep-pressure-check",
  "confidence-reset-audit",
];

export const popularToolSlugs = [
  "burnout-risk-audit",
  "overthinking-loop-check",
  "attachment-pattern-spotter",
  "focus-friction-audit",
  "emotional-recovery-planner",
  "work-stress-load-mapper",
];

export const trustCards: TrustCard[] = [
  {
    eyebrow: "Health systems",
    title: "Sutter Health",
    meta: "Care network",
    media: {
      src: "/logos/Sutter-Health.png",
      alt: "Sutter Health logo",
      label: "Sutter Health",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
  {
    eyebrow: "Academic medicine",
    title: "Cedars-Sinai",
    meta: "Medical center",
    media: {
      src: "/logos/cedars-sinai.png",
      alt: "Cedars-Sinai logo",
      label: "Cedars-Sinai",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
  {
    eyebrow: "Clinical network",
    title: "Cleveland Clinic",
    meta: "Clinical system",
    media: {
      src: "/logos/cleveland-clinic.png",
      alt: "Cleveland Clinic logo",
      label: "Cleveland Clinic",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
  {
    eyebrow: "Research medicine",
    title: "Johns Hopkins",
    meta: "Medical institution",
    media: {
      src: "/logos/johns-hopkins.png",
      alt: "Johns Hopkins logo",
      label: "Johns Hopkins",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
  {
    eyebrow: "Integrated care",
    title: "Kaiser Permanente",
    meta: "Care system",
    media: {
      src: "/logos/kaiser.png",
      alt: "Kaiser Permanente logo",
      label: "Kaiser Permanente",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
  {
    eyebrow: "Clinical care",
    title: "Mayo Clinic",
    meta: "Care institution",
    media: {
      src: "/logos/mayo-clinic.png",
      alt: "Mayo Clinic logo",
      label: "Mayo Clinic",
      ratio: "16 / 9",
      fit: "contain",
    },
  },
];

export const usageStats: UsageStat[] = [
  {
    value: "2.7M+",
    icon: "signal",
    label: "usage",
    note: "Used across burnout, relationships, confidence, recovery, and work-stress tools.",
  },
  {
    value: "68%",
    icon: "trend",
    label: "return for a second tool",
    note: "Many people continue into a related tool once the first result names the real pattern.",
  },
  {
    value: "4.8/5",
    icon: "graph",
    label: "average clarity rating",
    note: "Users rate the tools highly for turning vague internal strain into something readable and useful.",
  },
  {
    value: "3 min",
    icon: "time",
    label: "to a useful first read",
    note: "Most tools surface a credible pattern quickly, then point clearly to what to explore next.",
  },
];

export const testimonials: Testimonial[] = [
  {
    label: "Decision clarity",
    topic: "Abstract friction became measurable.",
    quote:
      "I can find the exact lens I need instead of taking one giant assessment and hoping it fits.",
    name: "Maya R.",
    location: "Bengaluru, India",
    initials: "MR",
  },
  {
    label: "Emotional regulation",
    topic: "Calm language without losing rigor.",
    quote:
      "The language is sharp and calm. It helps me name what is happening without making it dramatic.",
    name: "Noah T.",
    location: "Toronto, Canada",
    initials: "NT",
  },
  {
    label: "Relationship insight",
    topic: "A vague situation turned into a next step.",
    quote:
      "The relationship tools turned a vague, messy feeling into something I could actually act on.",
    name: "Aisha K.",
    location: "Dubai, UAE",
    initials: "AK",
  },
  {
    label: "Repeat usefulness",
    topic: "A library that fits real life.",
    quote:
      "I use different tools at different moments. It feels built for real life, not one-size-fits-all advice.",
    name: "Daniel P.",
    location: "Melbourne, Australia",
    initials: "DP",
  },
];

export const securityCards: SecurityCard[] = [
  {
    title: "Private by default",
    description: "Basic privacy protections are in place so reflective use stays calmer and less exposed.",
    icon: "privacy",
    media: {
      src: "/security/privacy-protected.png",
      alt: "Privacy protected badge",
      label: "Privacy protected",
      ratio: "16 / 10",
      fit: "contain",
    },
  },
  {
    title: "Protected access",
    description: "The connection is protected so the site feels safer to use when a topic is personal.",
    icon: "lock",
    media: {
      src: "/security/ssl-secure.png",
      alt: "SSL secure badge",
      label: "SSL secure",
      ratio: "16 / 10",
      fit: "contain",
    },
  },
  {
    title: "Encrypted handling",
    description: "Encrypted handling helps keep ordinary site traffic protected while you use the tools.",
    icon: "shield",
    media: {
      src: "/security/encrypted.png",
      alt: "Encrypted badge",
      label: "Encrypted",
      ratio: "16 / 10",
      fit: "contain",
    },
  },
  {
    title: "Secure payment",
    description: "Payment handling is set up with standard protections so paid access can feel more trustworthy.",
    icon: "structure",
    media: {
      src: "/security/secure-payment.png",
      alt: "Secure payment badge",
      label: "Secure payment",
      ratio: "16 / 10",
      fit: "contain",
    },
  },
];

export const pathways: Pathway[] = [
  {
    title: "Feeling mentally overloaded?",
    description: "Separate pressure, burnout drift, and decision fatigue before you push harder.",
    categorySlug: "stress-burnout",
    focusToolSlug: "burnout-risk-audit",
    cta: "Follow the overload pathway",
  },
  {
    title: "Relationship confusion?",
    description: "Untangle mixed signals, attachment patterns, and emotional uncertainty.",
    categorySlug: "relationships-attachment",
    focusToolSlug: "relationship-clarity-check",
    cta: "Explore relationship tools",
  },
  {
    title: "Trouble focusing?",
    description: "Check whether the issue is friction, overwhelm, or avoidance under the surface.",
    categorySlug: "focus-procrastination",
    focusToolSlug: "focus-friction-audit",
    cta: "Go to focus tools",
  },
  {
    title: "Low confidence lately?",
    description: "See what is pulling confidence down and where reassurance is not enough anymore.",
    categorySlug: "self-esteem-confidence",
    focusToolSlug: "confidence-reset-audit",
    cta: "Start the confidence pathway",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Start from a real question",
    description: "Search by state, category, or a specific pattern you want to understand right now.",
  },
  {
    step: "02",
    title: "Choose the right level of depth",
    description: "Every tool is labeled by type and time so fast checks and deeper reflections can live together.",
  },
  {
    step: "03",
    title: "Move with clearer next steps",
    description: "The library is designed to make insight useful, repeatable, and easy to revisit later.",
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
) as Record<string, ToolCategory>;

export const toolMap = Object.fromEntries(tools.map((tool) => [tool.slug, tool])) as Record<
  string,
  ToolItem
>;

export const liveToolSlugs = [
  "attachment-pattern-spotter",
  "boundary-strength-scanner",
  "burnout-risk-audit",
  "communication-style-mirror",
  "compassion-fatigue-check",
  "confidence-reset-audit",
  "daily-functioning-stability-check",
  "decision-fatigue-simulator",
  "emotional-exhaustion-audit",
  "emotional-recovery-planner",
  "emotional-trigger-decoder",
  "focus-friction-audit",
  "inner-critic-intensity-scan",
  "life-balance-visualizer",
  "mental-fatigue-check",
  "overthinking-loop-check",
  "rumination-pattern-check",
  "worry-cycle-mapper",
  "catastrophizing-pattern-check",
  "intrusive-thought-response-check",
  "people-pleasing-signal-check",
  "approval-dependence-check",
  "fawning-pattern-check",
  "over-accommodation-check",
  "self-abandonment-pattern-check",
  "reassurance-seeking-decoder",
  "relationship-clarity-check",
  "resentment-buildup-tracker",
  "self-sabotage-pattern-finder",
  "sleep-pressure-check",
  "stress-load-meter",
  "work-stress-load-mapper",
  "procrastination-friction-audit",
  "executive-function-friction-check",
  "task-initiation-difficulty-audit",
  "discipline-friction-check",
  "conflict-response-simulator",
  "tough-conversation-simulator",
  "high-pressure-choice-simulator",
  "relationship-decision-simulator",
  "work-life-balance-visualizer",
  "emotional-energy-balance-wheel",
  "recovery-balance-visualizer",
  "personal-capacity-balance-check",
  "evening-shutdown-check",
  "morning-recovery-readiness-check",
  "rest-debt-check",
  "nighttime-anxiety-pattern-check",
  "emotional-availability-profile",
  "intimacy-avoidance-pattern-check",
  "trust-pattern-spotter",
  "vulnerability-readiness-profile",
  "anger-trigger-decoder",
  "rejection-trigger-decoder",
  "shame-trigger-pattern-check",
  "criticism-trigger-decoder",
  "work-boundary-check",
  "family-boundary-scanner",
  "emotional-boundary-check",
  "caretaker-boundary-scanner",
  "breakup-recovery-planner",
  "burnout-recovery-planner",
  "weekly-reset-planner",
  "stress-reset-action-plan",
  "dating-clarity-check",
  "trust-consistency-check",
  "mixed-signals-checker",
  "emotional-safety-check",
  "self-doubt-pattern-audit",
  "imposter-feelings-audit",
  "decision-confidence-check",
  "visibility-confidence-check",
  "health-reassurance-loop-check",
  "relationship-reassurance-pattern-check",
  "mistake-checking-pattern-decoder",
  "social-reassurance-seeking-check",
  "emotional-overload-buildup-check",
  "unspoken-needs-accumulation-check",
  "fairness-imbalance-tracker",
  "emotional-carrying-load-check",
  "perfection-pressure-scan",
  "self-judgment-intensity-check",
  "shame-voice-pattern-check",
  "failure-fear-inner-voice-check",
  "finish-line-resistance-check",
  "visibility-sabotage-pattern-check",
  "success-discomfort-pattern-finder",
  "follow-through-breakpoint-check",
  "conflict-style-mirror",
  "repair-conversation-style-check",
  "directness-vs-softening-check",
  "difficult-conversation-pattern-mirror",
  "meeting-burden-mapper",
  "role-ambiguity-stress-check",
  "context-switching-load-check",
  "invisible-workload-mapper",
  "day-structure-stability-check",
  "energy-consistency-check",
  "follow-through-stability-check",
  "emotional-steadiness-check",
] as const;

export type LiveToolSlug = (typeof liveToolSlugs)[number];

const liveToolSlugSet = new Set<string>(liveToolSlugs);

export const liveTools = tools.filter((tool) => liveToolSlugSet.has(tool.slug));

export const liveToolMap = Object.fromEntries(
  liveTools.map((tool) => [tool.slug, tool]),
) as Record<LiveToolSlug, ToolItem>;

export const newlyAddedToolSlugs: LiveToolSlug[] = [
  "approval-dependence-check",
  "fawning-pattern-check",
  "over-accommodation-check",
  "self-abandonment-pattern-check",
];

export const startHereToolSlugs: LiveToolSlug[] = [
  "burnout-risk-audit",
  "overthinking-loop-check",
  "relationship-clarity-check",
  "confidence-reset-audit",
];

export const bestForRightNowToolSlugs: LiveToolSlug[] = [
  "stress-load-meter",
  "daily-functioning-stability-check",
  "emotional-recovery-planner",
  "work-stress-load-mapper",
];

export const topSearchSuggestions = [
  "burnout",
  "overthinking",
  "attachment",
  "confidence",
  "people pleasing",
  "work stress",
  "emotional triggers",
  "boundaries",
] as const;

export const toolKeywordMap: Partial<Record<LiveToolSlug, string[]>> = {
  "attachment-pattern-spotter": ["attachment", "closeness", "reassurance", "distance", "relationships"],
  "burnout-risk-audit": ["burnout", "exhaustion", "recovery", "depletion", "stress"],
  "communication-style-mirror": ["communication", "conflict", "tone", "clarity", "repair"],
  "compassion-fatigue-check": ["compassion fatigue", "caregiving", "empathy", "helper fatigue", "secondary stress"],
  "confidence-reset-audit": ["confidence", "self-trust", "hesitation", "second-guessing", "comparison"],
  "daily-functioning-stability-check": ["daily functioning", "stability", "energy", "follow-through", "recovery"],
  "decision-fatigue-simulator": ["decisions", "uncertainty", "choice fatigue", "mental load", "clarity"],
  "emotional-exhaustion-audit": ["emotionally drained", "emotional exhaustion", "emotional labor", "drained", "capacity"],
  "emotional-recovery-planner": ["recovery", "reset", "emotional recovery", "regulation", "repair"],
  "emotional-trigger-decoder": ["triggers", "reactivity", "emotional activation", "trigger pattern", "recovery"],
  "focus-friction-audit": ["focus", "attention", "productivity", "friction", "procrastination"],
  "inner-critic-intensity-scan": ["inner critic", "self-talk", "perfectionism", "self-judgment", "shame voice"],
  "life-balance-visualizer": ["balance", "life balance", "capacity", "wheel", "support"],
  "mental-fatigue-check": ["mental fatigue", "brain fog", "cognitive overload", "decision load", "brain tired"],
  "overthinking-loop-check": ["overthinking", "rumination", "loop", "reassurance", "worry"],
  "rumination-pattern-check": ["rumination", "replay", "replaying things", "mental replay", "stuck on the past"],
  "worry-cycle-mapper": ["worry", "future anxiety", "what if", "uncertainty", "worry cycle"],
  "catastrophizing-pattern-check": ["catastrophizing", "worst case", "worst-case thinking", "jumping to conclusions", "threat amplification"],
  "intrusive-thought-response-check": ["intrusive thoughts", "unwanted thoughts", "sticky thoughts", "thought response", "mental checking"],
  "people-pleasing-signal-check": ["people pleasing", "approval", "fawning", "guilt", "self-abandonment"],
  "approval-dependence-check": ["approval dependence", "validation", "approval seeking", "external validation", "people pleasing"],
  "fawning-pattern-check": ["fawning", "appeasing", "conflict smoothing", "safety response", "people pleasing"],
  "over-accommodation-check": ["over accommodation", "over adjusting", "over explaining", "flexibility", "boundaries"],
  "self-abandonment-pattern-check": ["self abandonment", "self leaving", "losing yourself", "guilt", "people pleasing"],
  "reassurance-seeking-decoder": ["reassurance", "checking", "uncertainty", "doubt", "validation seeking"],
  "relationship-clarity-check": ["relationship", "mixed signals", "clarity", "trust", "communication"],
  "resentment-buildup-tracker": ["resentment", "over-carrying", "unspoken needs", "imbalance", "fairness"],
  "self-sabotage-pattern-finder": ["self-sabotage", "stalling", "finish line", "avoidance", "follow-through"],
  "sleep-pressure-check": ["sleep", "recovery debt", "shutdown", "night", "rest"],
  "stress-load-meter": ["stress", "stress load", "pressure", "overload", "hidden stress"],
  "work-stress-load-mapper": ["work stress", "job stress", "meetings", "low control", "workload"],
  "procrastination-friction-audit": ["procrastination","friction","audit","triggers","task"],
  "executive-function-friction-check": ["executive","function","friction","check","planning"],
  "task-initiation-difficulty-audit": ["task","initiation","difficulty","audit","hard"],
  "discipline-friction-check": ["discipline","friction","check","problems","consistency"],
  "conflict-response-simulator": ["conflict","response","simulator","style","tension"],
  "tough-conversation-simulator": ["tough","conversation","simulator","difficult","hard"],
  "high-pressure-choice-simulator": ["high","pressure","choice","simulator","decision"],
  "relationship-decision-simulator": ["relationship","decision","simulator","stay","or"],
  "work-life-balance-visualizer": ["work","life","balance","visualizer","check"],
  "emotional-energy-balance-wheel": ["emotional","energy","balance","wheel","check"],
  "recovery-balance-visualizer": ["recovery","balance","visualizer","under","recovered"],
  "personal-capacity-balance-check": ["personal","capacity","balance","check","bandwidth"],
  "evening-shutdown-check": ["evening","shutdown","check","can","t"],
  "morning-recovery-readiness-check": ["morning","recovery","readiness","check","wake"],
  "rest-debt-check": ["rest","debt","check","under","recovered"],
  "nighttime-anxiety-pattern-check": ["nighttime","anxiety","pattern","check","anxious"],
  "emotional-availability-profile": ["emotional","availability","profile","emotionally","unavailable"],
  "intimacy-avoidance-pattern-check": ["intimacy","avoidance","pattern","check","avoid"],
  "trust-pattern-spotter": ["trust","pattern","spotter","issues","how"],
  "vulnerability-readiness-profile": ["vulnerability","readiness","profile","ready","to"],
  "anger-trigger-decoder": ["anger","trigger","decoder","triggers","why"],
  "rejection-trigger-decoder": ["rejection","trigger","decoder","sensitivity","fear"],
  "shame-trigger-pattern-check": ["shame","trigger","pattern","check","triggers"],
  "criticism-trigger-decoder": ["criticism","trigger","decoder","triggers","feedback"],
  "work-boundary-check": ["work","boundary","check","boundaries","availability"],
  "family-boundary-scanner": ["family","boundary","scanner","boundaries","guilt"],
  "emotional-boundary-check": ["emotional","boundary","check","boundaries","absorbing"],
  "caretaker-boundary-scanner": ["caretaker","boundary","scanner","overcaregiving","rescuing"],
  "breakup-recovery-planner": ["breakup","recovery","planner","recover","after"],
  "burnout-recovery-planner": ["burnout","recovery","planner","recover","from"],
  "weekly-reset-planner": ["weekly","reset","planner","end","of"],
  "stress-reset-action-plan": ["stress","reset","action","plan","from"],
  "dating-clarity-check": ["dating","clarity","check","confusion","early"],
  "trust-consistency-check": ["trust","consistency","check","can","i"],
  "mixed-signals-checker": ["mixed","signals","checker","relationship","confusing"],
  "emotional-safety-check": ["emotional","safety","check","safe","relationship"],
  "self-doubt-pattern-audit": ["self","doubt","pattern","audit","check"],
  "imposter-feelings-audit": ["imposter","feelings","audit","syndrome","check"],
  "decision-confidence-check": ["decision","confidence","check","trust","my"],
  "visibility-confidence-check": ["visibility","confidence","check","fear","of"],
  "health-reassurance-loop-check": ["health","reassurance","loop","check","anxiety"],
  "relationship-reassurance-pattern-check": ["relationship","reassurance","pattern","check","need"],
  "mistake-checking-pattern-decoder": ["mistake","checking","pattern","decoder","mistakes"],
  "social-reassurance-seeking-check": ["social","reassurance","seeking","check","did"],
  "emotional-overload-buildup-check": ["emotional","overload","buildup","check","too"],
  "unspoken-needs-accumulation-check": ["unspoken","needs","accumulation","check","not"],
  "fairness-imbalance-tracker": ["fairness","imbalance","tracker","unfair","relationship"],
  "emotional-carrying-load-check": ["emotional","carrying","load","check","too"],
  "perfection-pressure-scan": ["perfection","pressure","scan","perfectionism","check"],
  "self-judgment-intensity-check": ["self","judgment","intensity","check","harsh"],
  "shame-voice-pattern-check": ["shame","voice","pattern","check","internal"],
  "failure-fear-inner-voice-check": ["failure","fear","inner","voice","check"],
  "finish-line-resistance-check": ["finish","line","resistance","check","stall"],
  "visibility-sabotage-pattern-check": ["visibility","sabotage","pattern","check","fear"],
  "success-discomfort-pattern-finder": ["success","discomfort","pattern","finder","anxiety"],
  "follow-through-breakpoint-check": ["follow","through","breakpoint","check","problems"],
  "conflict-style-mirror": ["conflict","style","mirror","argument","how"],
  "repair-conversation-style-check": ["repair","conversation","style","check","after"],
  "directness-vs-softening-check": ["directness","vs","softening","check","too"],
  "difficult-conversation-pattern-mirror": ["difficult","conversation","pattern","mirror","hard"],
  "meeting-burden-mapper": ["meeting","burden","mapper","overload","too"],
  "role-ambiguity-stress-check": ["role","ambiguity","stress","check","unclear"],
  "context-switching-load-check": ["context","switching","load","check","task"],
  "invisible-workload-mapper": ["invisible","workload","mapper","hidden","work"],
  "day-structure-stability-check": ["day","structure","stability","check","daily"],
  "energy-consistency-check": ["energy","consistency","check","uneven","daily"],
  "follow-through-stability-check": ["follow","through","stability","check","problems"],
  "emotional-steadiness-check": ["emotional","steadiness","check","emotionally","unstable"],
};

export const topicClusters = toolClusters;
export const topicClusterMap = toolClusterMap;

export function getClusterForTool(tool: ToolItem) {
  return toolClusterMap[tool.cluster] ?? toolClusters[0];
}

export function inferToolFormat(tool: ToolItem): ToolFormat {
  const type = tool.type.toLowerCase();

  if (type.includes("simulator")) {
    return "Simulator";
  }

  if (type.includes("planner")) {
    return "Planner";
  }

  if (type.includes("visualizer")) {
    return "Visualizer";
  }

  if (type.includes("profile")) {
    return "Profile";
  }

  if (
    type.includes("decoder") ||
    type.includes("mirror") ||
    type.includes("mapper") ||
    type.includes("tracker") ||
    type.includes("finder")
  ) {
    return "Decoder";
  }

  if (type.includes("guide")) {
    return "Guide";
  }

  return "Assessment";
}

export function getToolSearchKeywords(tool: ToolItem) {
  if (liveToolSlugSet.has(tool.slug)) {
    return toolKeywordMap[tool.slug as LiveToolSlug] ?? [];
  }

  return [];
}

export function getLiveCategoryCount(categorySlug: string) {
  return liveTools.filter((tool) => tool.categorySlug === categorySlug).length;
}

export function getClusterToolCount(clusterSlug: string) {
  if (!(clusterSlug in toolClusterMap)) {
    return 0;
  }

  const cluster = toolClusterMap[clusterSlug as ToolClusterSlug];

  if (!cluster) {
    return 0;
  }

  return liveTools.filter((tool) => {
    const toolCluster = getClusterForTool(tool);
    return toolCluster.slug === cluster.slug;
  }).length;
}

const manualRecommendations: Partial<Record<LiveToolSlug, LiveToolSlug[]>> = {
  "attachment-pattern-spotter": [
    "relationship-clarity-check",
    "communication-style-mirror",
    "reassurance-seeking-decoder",
    "people-pleasing-signal-check",
  ],
  "burnout-risk-audit": [
    "stress-load-meter",
    "mental-fatigue-check",
    "daily-functioning-stability-check",
    "work-stress-load-mapper",
  ],
  "communication-style-mirror": [
    "relationship-clarity-check",
    "attachment-pattern-spotter",
    "resentment-buildup-tracker",
    "people-pleasing-signal-check",
  ],
  "compassion-fatigue-check": [
    "emotional-exhaustion-audit",
    "burnout-risk-audit",
    "emotional-recovery-planner",
    "resentment-buildup-tracker",
  ],
  "confidence-reset-audit": [
    "inner-critic-intensity-scan",
    "self-sabotage-pattern-finder",
    "daily-functioning-stability-check",
    "overthinking-loop-check",
  ],
  "daily-functioning-stability-check": [
    "sleep-pressure-check",
    "life-balance-visualizer",
    "burnout-risk-audit",
    "emotional-recovery-planner",
  ],
  "decision-fatigue-simulator": [
    "overthinking-loop-check",
    "focus-friction-audit",
    "work-stress-load-mapper",
    "confidence-reset-audit",
  ],
  "emotional-exhaustion-audit": [
    "compassion-fatigue-check",
    "burnout-risk-audit",
    "emotional-recovery-planner",
    "resentment-buildup-tracker",
  ],
  "emotional-recovery-planner": [
    "emotional-trigger-decoder",
    "daily-functioning-stability-check",
    "sleep-pressure-check",
    "burnout-risk-audit",
  ],
  "emotional-trigger-decoder": [
    "emotional-recovery-planner",
    "reassurance-seeking-decoder",
    "overthinking-loop-check",
    "resentment-buildup-tracker",
  ],
  "focus-friction-audit": [
    "self-sabotage-pattern-finder",
    "work-stress-load-mapper",
    "decision-fatigue-simulator",
    "daily-functioning-stability-check",
  ],
  "inner-critic-intensity-scan": [
    "confidence-reset-audit",
    "self-sabotage-pattern-finder",
    "overthinking-loop-check",
    "emotional-trigger-decoder",
  ],
  "life-balance-visualizer": [
    "daily-functioning-stability-check",
    "sleep-pressure-check",
    "emotional-recovery-planner",
    "burnout-risk-audit",
  ],
  "mental-fatigue-check": [
    "stress-load-meter",
    "burnout-risk-audit",
    "focus-friction-audit",
    "daily-functioning-stability-check",
  ],
  "overthinking-loop-check": [
    "reassurance-seeking-decoder",
    "decision-fatigue-simulator",
    "inner-critic-intensity-scan",
    "emotional-trigger-decoder",
  ],
  "people-pleasing-signal-check": [
    "resentment-buildup-tracker",
    "relationship-clarity-check",
    "attachment-pattern-spotter",
    "communication-style-mirror",
  ],
  "reassurance-seeking-decoder": [
    "overthinking-loop-check",
    "relationship-clarity-check",
    "attachment-pattern-spotter",
    "emotional-trigger-decoder",
  ],
  "relationship-clarity-check": [
    "attachment-pattern-spotter",
    "communication-style-mirror",
    "people-pleasing-signal-check",
    "reassurance-seeking-decoder",
  ],
  "resentment-buildup-tracker": [
    "people-pleasing-signal-check",
    "relationship-clarity-check",
    "communication-style-mirror",
    "emotional-exhaustion-audit",
  ],
  "self-sabotage-pattern-finder": [
    "focus-friction-audit",
    "confidence-reset-audit",
    "inner-critic-intensity-scan",
    "work-stress-load-mapper",
  ],
  "sleep-pressure-check": [
    "daily-functioning-stability-check",
    "life-balance-visualizer",
    "emotional-recovery-planner",
    "burnout-risk-audit",
  ],
  "stress-load-meter": [
    "burnout-risk-audit",
    "mental-fatigue-check",
    "work-stress-load-mapper",
    "daily-functioning-stability-check",
  ],
  "work-stress-load-mapper": [
    "burnout-risk-audit",
    "focus-friction-audit",
    "stress-load-meter",
    "decision-fatigue-simulator",
  ],
};

export function getRecommendedLiveTools(slug: LiveToolSlug, limit = 4) {
  const manual = (manualRecommendations[slug] ?? [])
    .map((recommendedSlug) => liveToolMap[recommendedSlug])
    .filter(Boolean);

  const sourceTool = liveToolMap[slug];
  const cluster = sourceTool ? getClusterForTool(sourceTool) : null;

  const fallback = liveTools.filter((tool) => {
    if (tool.slug === slug) {
      return false;
    }

    if (manual.some((item) => item.slug === tool.slug)) {
      return false;
    }

    if (cluster && getClusterForTool(tool).slug === cluster.slug) {
      return true;
    }

    return tool.categorySlug === sourceTool?.categorySlug;
  });

  return [...manual, ...fallback].slice(0, limit);
}

type BuildToolsHrefInput = {
  category?: string | null;
  cluster?: string | null;
  query?: string | null;
  format?: string | null;
  view?: string | null;
  focus?: string | null;
  sort?: ToolSort | null;
  hash?: string | null;
};

export function buildToolsHref({
  category,
  cluster,
  query,
  format,
  view,
  focus,
  sort,
  hash = "browse-all-tools",
}: BuildToolsHrefInput = {}) {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (cluster) {
    params.set("cluster", cluster);
  }

  if (query) {
    params.set("query", query);
  }

  if (format) {
    params.set("format", format);
  }

  if (view) {
    params.set("view", view);
  }

  if (focus) {
    params.set("focus", focus);
  }

  if (sort && sort !== defaultToolSort) {
    params.set("sort", sort);
  }

  const queryString = params.toString();

  return `/tools${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`;
}

type BuildToolHrefInput = {
  slug: string;
  categorySlug: string;
  query?: string | null;
  cluster?: string | null;
  format?: string | null;
  view?: string | null;
  sort?: ToolSort | null;
  hash?: string | null;
};

export function buildToolHref({
  slug,
  categorySlug,
  query,
  cluster,
  format,
  view,
  sort,
  hash,
}: BuildToolHrefInput) {
  if (liveToolSlugSet.has(slug)) {
    return `/tools/${slug}`;
  }

  return buildToolsHref({
    category: categorySlug,
    cluster,
    query,
    format,
    view,
    focus: slug,
    sort,
    hash,
  });
}
