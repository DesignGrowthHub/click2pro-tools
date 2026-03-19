import { liveToolSlugs, type LiveToolSlug } from "./tools-home";

export type SupportLink = {
  href: string;
  label: string;
};

export type ToolSupportSection = {
  heading: string;
  description: string;
  primary: SupportLink;
  secondary?: SupportLink;
};

type SupportGroupConfig = {
  slugs: readonly LiveToolSlug[];
  headings: readonly string[];
  descriptions: readonly string[];
  primary: SupportLink;
  secondary?: SupportLink;
};

const BLOG_INTJ_BURNOUT =
  "https://click2pro.com/blog/intj-burnout-signs-recovery-balance";
const BLOG_WORK_STRESS =
  "https://click2pro.com/blog/how-work-stress-affects-productivity";
const BLOG_INSOMNIA =
  "https://click2pro.com/blog/the-psychological-impact-of-insomnia";
const BLOG_SLEEP_HYGIENE =
  "https://click2pro.com/blog/improving-sleep-quality-sleep-hygiene-matters";
const BLOG_WORKPLACE_RESILIENCE =
  "https://click2pro.com/blog/resilience-in-workplace-strategies";
const BLOG_WORK_LIFE_BALANCE =
  "https://click2pro.com/blog/work-life-balance-mental-health-employee-wellness-india";
const SERVICE_STRESS_MANAGEMENT = "https://click2pro.com/stress-management-therapy";
const SERVICE_DEPRESSION = "https://click2pro.com/depression-counselling";
const SERVICE_TRAUMA_THERAPY = "https://click2pro.com/trauma-therapy";

const BLOG_IMPOSTER =
  "https://click2pro.com/blog/imposter-syndrome-signs-symptoms";
const BLOG_INFERIORITY_SOCIAL_ANXIETY =
  "https://click2pro.com/blog/inferiority-complex-social-anxiety";
const BLOG_PANIC_ATTACKS =
  "https://click2pro.com/blog/panic-attack-symptoms-signs";
const BLOG_INTRUSIVE_THOUGHTS =
  "https://click2pro.com/blog/break-cycle-intrusive-thoughts-anxiety";
const BLOG_HIGH_FUNCTIONING_ANXIETY =
  "https://click2pro.com/blog/anxiety-symptoms-high-functioning-adults";
const SERVICE_SOCIAL_ANXIETY = "https://click2pro.com/social-anxiety-therapy";
const SERVICE_OVERTHINKING = "https://click2pro.com/overthinking-counselling";
const SERVICE_ANXIETY = "https://click2pro.com/anxiety-counselling";

const BLOG_TOXIC_RELATIONSHIPS =
  "https://click2pro.com/blog/why-do-people-stay-in-toxic-relationships";
const BLOG_RELATIONSHIP_CLOSURE =
  "https://click2pro.com/blog/top-9-ways-to-get-closure-in-relationships";
const BLOG_HEARTBREAK =
  "https://click2pro.com/blog/heartbreak-emotional-struggles-physical-pain";
const BLOG_SITUATIONSHIPS =
  "https://click2pro.com/blog/situationships-attachment-theory-psychology";
const BLOG_AVOIDANT_WORKPLACE =
  "https://click2pro.com/blog/avoidant-attachment-style-in-the-workplace";
const BLOG_GREEN_FLAGS =
  "https://click2pro.com/blog/green-flags-in-relationships";
const BLOG_IN_LAWS_BOUNDARIES =
  "https://click2pro.com/blog/managing-in-laws-adjustment-communication-boundaries";
const SERVICE_RELATIONSHIP = "https://click2pro.com/relationship-counselling";
const SERVICE_BREAKUP = "https://click2pro.com/break-up-counselling";
const SERVICE_TOXIC_RELATIONSHIPS =
  "https://click2pro.com/toxic-relationships-therapy";

const BLOG_LOW_SELF_ESTEEM =
  "https://click2pro.com/blog/low-self-esteem-mental-health-impact-solutions";
const BLOG_EMOTIONAL_BOUNDARIES =
  "https://click2pro.com/blog/respect-emotional-boundaries-mental-wellbeing";
const BLOG_HEALTHY_BOUNDARIES =
  "https://click2pro.com/blog/setting-healthy-boundaries-relationships-mental-well-being";
const BLOG_SOCIAL_COMPARISON =
  "https://click2pro.com/blog/psychology-of-social-comparison";
const SERVICE_MOTIVATION = "https://click2pro.com/motivation-counselling";

const BLOG_PROCRASTINATION =
  "https://click2pro.com/blog/impact-of-procrastination-on-mental-health";
const BLOG_HABITS =
  "https://click2pro.com/blog/habit-formation-personality-development";
const BLOG_DECISION_MAKING =
  "https://click2pro.com/blog/subconscious-mind-decision-making";
const SERVICE_PROCRASTINATION = "https://click2pro.com/procrastination-therapy";
const SERVICE_CAREER = "https://click2pro.com/career-counselling";
const SERVICE_BUSINESS = "https://click2pro.com/business-counselling";
const SERVICE_TIME_MANAGEMENT =
  "https://click2pro.com/time-management-counselling";

const BLOG_HEAL_EMOTIONALLY =
  "https://click2pro.com/blog/how-to-heal-emotionally-manage-difficult-emotions";
const BLOG_LETHARGY =
  "https://click2pro.com/blog/lethargic-psychology-mental-fatigue";

const BLOG_INTERPERSONAL_SKILLS =
  "https://click2pro.com/blog/mastering-interpersonal-skills-building-strong-relationships";
const SERVICE_FAMILY = "https://click2pro.com/family-problems-counselling";

const link = (href: string, label: string): SupportLink => ({ href, label });

function buildSupportMap(groups: readonly SupportGroupConfig[]) {
  const entries: Partial<Record<LiveToolSlug, ToolSupportSection>> = {};

  groups.forEach((group) => {
    group.slugs.forEach((slug, index) => {
      if (entries[slug]) {
        throw new Error(`Duplicate support-link mapping for tool slug: ${slug}`);
      }

      entries[slug] = {
        heading: group.headings[index % group.headings.length],
        description: group.descriptions[index % group.descriptions.length],
        primary: group.primary,
        secondary: group.secondary,
      };
    });
  });

  const missing = liveToolSlugs.filter((slug) => !entries[slug]);
  if (missing.length > 0) {
    throw new Error(`Missing support-link mapping for: ${missing.join(", ")}`);
  }

  return entries as Record<LiveToolSlug, ToolSupportSection>;
}

const supportGroups = [
  {
    slugs: [
      "burnout-risk-audit",
      "stress-load-meter",
      "mental-fatigue-check",
      "emotional-exhaustion-audit",
      "compassion-fatigue-check",
    ] as const,
    headings: ["If this feels familiar", "Read this next", "A useful next page"] as const,
    descriptions: [
      "If this tool surfaced overload more than simple tiredness, this guide helps explain how stress starts changing recovery, focus, and patience.",
      "When strain keeps following you past the task list, this next page can help you name what is building underneath.",
    ] as const,
    primary: link(BLOG_WORK_STRESS, "See how work stress affects productivity"),
    secondary: link(SERVICE_STRESS_MANAGEMENT, "Explore stress management therapy"),
  },
  {
    slugs: [
      "overthinking-loop-check",
      "rumination-pattern-check",
      "worry-cycle-mapper",
      "catastrophizing-pattern-check",
      "intrusive-thought-response-check",
    ] as const,
    headings: ["Go deeper on this pattern", "One good next read", "If your mind stays busy"] as const,
    descriptions: [
      "If your answers pointed to mental loops rather than useful reflection, this next read can help you understand why the cycle keeps restarting.",
      "When the mind keeps replaying, scanning, or bracing, this guide adds context that often makes the pattern easier to interrupt.",
    ] as const,
    primary: link(BLOG_HIGH_FUNCTIONING_ANXIETY, "Read about anxiety in high-functioning adults"),
    secondary: link(SERVICE_OVERTHINKING, "Explore overthinking counselling"),
  },
  {
    slugs: [
      "people-pleasing-signal-check",
      "approval-dependence-check",
      "fawning-pattern-check",
      "over-accommodation-check",
      "self-abandonment-pattern-check",
    ] as const,
    headings: ["Related support", "A useful next page", "If this sounds familiar"] as const,
    descriptions: [
      "If keeping the peace keeps costing you later, this next page can help you see where boundaries soften and why guilt takes over.",
      "When approval starts driving tone, choices, or self-trust, this guide gives clearer language for what is happening.",
    ] as const,
    primary: link(BLOG_HEALTHY_BOUNDARIES, "Read the guide on setting healthy boundaries"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "focus-friction-audit",
      "procrastination-friction-audit",
      "executive-function-friction-check",
      "task-initiation-difficulty-audit",
      "discipline-friction-check",
    ] as const,
    headings: ["Read this next", "Helpful context", "A calmer next step"] as const,
    descriptions: [
      "If this tool showed that delay is coming from friction rather than laziness, this next page can help you name the real blocker.",
      "When starting feels harder than it should, this guide adds useful context around motivation, stress, and avoidance.",
    ] as const,
    primary: link(BLOG_PROCRASTINATION, "See how procrastination affects mental health"),
    secondary: link(SERVICE_PROCRASTINATION, "Explore procrastination therapy"),
  },
  {
    slugs: [
      "decision-fatigue-simulator",
      "high-pressure-choice-simulator",
    ] as const,
    headings: ["A useful next page", "If choices keep feeling heavy"] as const,
    descriptions: [
      "If small decisions are starting to feel mentally expensive, this next read helps explain how overload changes judgment and follow-through.",
      "When mental bandwidth is low, even simple choices can feel noisy. This guide gives that pattern more context.",
    ] as const,
    primary: link(BLOG_DECISION_MAKING, "Read how the mind handles decision-making"),
    secondary: link(SERVICE_OVERTHINKING, "Explore overthinking counselling"),
  },
  {
    slugs: [
      "conflict-response-simulator",
      "tough-conversation-simulator",
    ] as const,
    headings: ["Go deeper on this pattern", "Related support"] as const,
    descriptions: [
      "If hard conversations keep turning tense, this next page can help you understand what stronger interpersonal skills look like in practice.",
      "When conflict feels loaded before it even starts, this guide can help you slow the pattern down and prepare more clearly.",
    ] as const,
    primary: link(BLOG_INTERPERSONAL_SKILLS, "Read about stronger interpersonal skills"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: ["relationship-decision-simulator"] as const,
    headings: ["If this relationship choice still feels blurry"] as const,
    descriptions: [
      "If this decision feels emotionally tangled, this next page can help you think about closure, mixed signals, and what makes it harder to choose.",
    ] as const,
    primary: link(BLOG_RELATIONSHIP_CLOSURE, "Read about getting closure in relationships"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "life-balance-visualizer",
      "work-life-balance-visualizer",
      "personal-capacity-balance-check",
    ] as const,
    headings: ["Read this next", "A useful next page", "If balance keeps slipping"] as const,
    descriptions: [
      "If this tool showed that your load is outrunning your capacity, this guide can help you think about balance in a more realistic way.",
      "When life starts feeling full but not sustainable, this next page helps connect the pattern to recovery and daily functioning.",
    ] as const,
    primary: link(BLOG_WORK_LIFE_BALANCE, "Read about work-life balance and mental health"),
    secondary: link(SERVICE_STRESS_MANAGEMENT, "Explore stress management therapy"),
  },
  {
    slugs: [
      "emotional-energy-balance-wheel",
      "recovery-balance-visualizer",
    ] as const,
    headings: ["Helpful next step", "Go deeper on recovery"] as const,
    descriptions: [
      "If your answers pointed to low replenishment rather than low effort, this next read can help you see what emotional recovery actually needs.",
      "When energy looks okay from the outside but still feels thin inside, this guide can make that mismatch easier to understand.",
    ] as const,
    primary: link(BLOG_HEAL_EMOTIONALLY, "Read how emotional healing can start"),
    secondary: link(BLOG_SLEEP_HYGIENE, "See what improves real sleep quality"),
  },
  {
    slugs: [
      "sleep-pressure-check",
      "evening-shutdown-check",
      "nighttime-anxiety-pattern-check",
    ] as const,
    headings: ["If nights still feel busy", "Read this next", "One good next read"] as const,
    descriptions: [
      "If this tool showed that tiredness is mixing with mental activation, this next page can help you understand why sleep feels harder to reach.",
      "When the body is tired but the mind is still on, this guide gives clearer context for what keeps bedtime from feeling restorative.",
    ] as const,
    primary: link(BLOG_INSOMNIA, "Read about the psychological impact of insomnia"),
    secondary: link(BLOG_SLEEP_HYGIENE, "See what improves sleep quality"),
  },
  {
    slugs: [
      "morning-recovery-readiness-check",
      "rest-debt-check",
    ] as const,
    headings: ["A useful next page", "If recovery still feels thin"] as const,
    descriptions: [
      "If you are sleeping but not really recovering, this next read can help you understand what keeps rest from feeling complete.",
      "When mornings feel foggy or heavy even after a full night, this guide helps explain where recovery can still be getting lost.",
    ] as const,
    primary: link(BLOG_SLEEP_HYGIENE, "Read what supports better sleep quality"),
    secondary: link(SERVICE_DEPRESSION, "Explore depression counselling"),
  },
  {
    slugs: [
      "attachment-pattern-spotter",
      "emotional-availability-profile",
      "trust-pattern-spotter",
      "vulnerability-readiness-profile",
    ] as const,
    headings: ["Go deeper on this pattern", "If closeness feels complicated", "Read this next"] as const,
    descriptions: [
      "If this tool surfaced push-pull patterns in closeness, this next page can help you understand the attachment piece more clearly.",
      "When connection feels important but not fully safe, this guide gives useful context for what may be shaping that pattern.",
    ] as const,
    primary: link(BLOG_SITUATIONSHIPS, "Read about attachment patterns in situationships"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: ["intimacy-avoidance-pattern-check"] as const,
    headings: ["If distance feels easier than closeness"] as const,
    descriptions: [
      "If you noticed yourself pulling back when relationships become more real, this next page helps explain one avoidant version of that pattern.",
    ] as const,
    primary: link(BLOG_AVOIDANT_WORKPLACE, "Read about avoidant attachment patterns"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "emotional-trigger-decoder",
      "anger-trigger-decoder",
      "rejection-trigger-decoder",
      "criticism-trigger-decoder",
    ] as const,
    headings: ["If this trigger pattern feels familiar", "A useful next page", "Read this next"] as const,
    descriptions: [
      "If this tool showed that activation rises faster than expected, this guide can help you understand what emotional strain often sits underneath.",
      "When triggers leave a longer after-effect than the moment itself, this next read can help you make sense of the reaction more gently.",
    ] as const,
    primary: link(BLOG_HEAL_EMOTIONALLY, "Read about handling difficult emotions"),
    secondary: link(SERVICE_TRAUMA_THERAPY, "Explore trauma therapy"),
  },
  {
    slugs: ["shame-trigger-pattern-check"] as const,
    headings: ["If shame keeps showing up fast"] as const,
    descriptions: [
      "If shame is arriving before you even have time to think, this next page can help you read that emotional load with more care and accuracy.",
    ] as const,
    primary: link(BLOG_LOW_SELF_ESTEEM, "Read how low self-esteem shapes emotional patterns"),
    secondary: link(SERVICE_TRAUMA_THERAPY, "Explore trauma therapy"),
  },
  {
    slugs: [
      "boundary-strength-scanner",
      "work-boundary-check",
      "emotional-boundary-check",
    ] as const,
    headings: ["Related support", "A useful next page", "Read this next"] as const,
    descriptions: [
      "If this tool showed that your limits soften under pressure, this guide can help you understand what stronger boundaries look like in real life.",
      "When urgency, guilt, or emotional pressure keep moving your line, this next page offers a steadier frame for it.",
    ] as const,
    primary: link(BLOG_EMOTIONAL_BOUNDARIES, "Read about respecting emotional boundaries"),
    secondary: link(BLOG_HEALTHY_BOUNDARIES, "See how healthy boundaries are built"),
  },
  {
    slugs: [
      "family-boundary-scanner",
      "caretaker-boundary-scanner",
    ] as const,
    headings: ["If family roles feel heavy", "A useful next page"] as const,
    descriptions: [
      "If family expectations or caretaking pressure keep blurring your limits, this next page can help you think about boundaries more clearly.",
      "When being the steady one starts costing you too much, this guide can help you name that pattern without guilt.",
    ] as const,
    primary: link(BLOG_IN_LAWS_BOUNDARIES, "Read about communication and boundaries in family systems"),
    secondary: link(SERVICE_FAMILY, "Explore family problems counselling"),
  },
  {
    slugs: [
      "emotional-recovery-planner",
      "weekly-reset-planner",
      "stress-reset-action-plan",
    ] as const,
    headings: ["Helpful next step", "If recovery needs more structure", "Read this next"] as const,
    descriptions: [
      "If this tool showed that you need recovery, not more pressure, this next page can help you think about emotional repair in a calmer way.",
      "When you know you need a reset but do not know what actually helps, this guide can add useful context without pushing too hard.",
    ] as const,
    primary: link(BLOG_HEAL_EMOTIONALLY, "Read how emotional healing can begin"),
    secondary: link(SERVICE_STRESS_MANAGEMENT, "Explore stress management therapy"),
  },
  {
    slugs: ["breakup-recovery-planner"] as const,
    headings: ["If heartbreak is still sitting in the body"] as const,
    descriptions: [
      "If moving forward still feels heavier than it looks, this next page can help you understand why breakup pain often stays physical as well as emotional.",
    ] as const,
    primary: link(BLOG_HEARTBREAK, "Read about the emotional and physical weight of heartbreak"),
    secondary: link(SERVICE_BREAKUP, "Explore breakup counselling"),
  },
  {
    slugs: ["burnout-recovery-planner"] as const,
    headings: ["If rest still does not feel like enough"] as const,
    descriptions: [
      "If your answers pointed to recovery lag rather than low motivation, this next page can help you think about rebuilding capacity more realistically.",
    ] as const,
    primary: link(BLOG_INTJ_BURNOUT, "Read about burnout signs and recovery balance"),
    secondary: link(SERVICE_STRESS_MANAGEMENT, "Explore stress management therapy"),
  },
  {
    slugs: [
      "relationship-clarity-check",
      "trust-consistency-check",
    ] as const,
    headings: ["Go deeper on this pattern", "If the relationship still feels unclear"] as const,
    descriptions: [
      "If this tool surfaced uncertainty more than certainty, this next page can help you look for steadier signs instead of mixed guesses.",
      "When trust feels uneven, this guide can help you think in terms of signals and consistency rather than hope alone.",
    ] as const,
    primary: link(BLOG_GREEN_FLAGS, "Read about green flags in relationships"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "dating-clarity-check",
      "mixed-signals-checker",
    ] as const,
    headings: ["If the signals still feel mixed", "Read this next"] as const,
    descriptions: [
      "If dating feels confusing because the connection seems close one day and unclear the next, this next page can help you read the pattern better.",
      "When you keep trying to guess what the connection means, this guide adds more grounded context around attachment and ambiguity.",
    ] as const,
    primary: link(BLOG_SITUATIONSHIPS, "Read about attachment in situationships"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: ["emotional-safety-check"] as const,
    headings: ["If safety feels harder to name than love"] as const,
    descriptions: [
      "If something feels off even when the connection matters, this next page can help you think more clearly about emotional safety and harmful dynamics.",
    ] as const,
    primary: link(BLOG_TOXIC_RELATIONSHIPS, "Read why people stay in toxic relationships"),
    secondary: link(SERVICE_TOXIC_RELATIONSHIPS, "Explore toxic relationship therapy"),
  },
  {
    slugs: [
      "confidence-reset-audit",
      "self-doubt-pattern-audit",
      "decision-confidence-check",
      "visibility-confidence-check",
    ] as const,
    headings: ["Read this next", "A useful next page", "If self-doubt is getting loud"] as const,
    descriptions: [
      "If this tool pointed to self-doubt rather than lack of ability, this next page can help you understand what keeps confidence from settling.",
      "When confidence looks shaky from the inside even if you are functioning well outside, this guide can help you name the pattern more clearly.",
    ] as const,
    primary: link(BLOG_LOW_SELF_ESTEEM, "Read how low self-esteem shapes daily life"),
    secondary: link(BLOG_SOCIAL_COMPARISON, "See how social comparison affects confidence"),
  },
  {
    slugs: ["imposter-feelings-audit"] as const,
    headings: ["If this feels like impostor syndrome"] as const,
    descriptions: [
      "If your answers sounded more like fraud fear than lack of skill, this next page can help you understand why impostor feelings stay sticky.",
    ] as const,
    primary: link(BLOG_IMPOSTER, "Read the guide to impostor syndrome signs"),
    secondary: link(BLOG_LOW_SELF_ESTEEM, "See how low self-esteem can overlap"),
  },
  {
    slugs: [
      "reassurance-seeking-decoder",
      "mistake-checking-pattern-decoder",
    ] as const,
    headings: ["If doubt keeps restarting", "Read this next"] as const,
    descriptions: [
      "If brief relief keeps turning back into checking, this next page can help you understand why reassurance loops are so hard to settle.",
      "When the mind keeps asking for one more check, this guide can help you see what keeps the cycle alive.",
    ] as const,
    primary: link(BLOG_INTRUSIVE_THOUGHTS, "Read how intrusive-thought cycles keep going"),
    secondary: link(SERVICE_ANXIETY, "Explore anxiety counselling"),
  },
  {
    slugs: ["health-reassurance-loop-check"] as const,
    headings: ["If body worry keeps taking over"] as const,
    descriptions: [
      "If health fears keep pulling you back into scanning and checking, this next page can help you separate panic signals from real certainty.",
    ] as const,
    primary: link(BLOG_PANIC_ATTACKS, "Read about panic-attack signs and body fear"),
    secondary: link(SERVICE_ANXIETY, "Explore anxiety counselling"),
  },
  {
    slugs: ["relationship-reassurance-pattern-check"] as const,
    headings: ["If relationship doubt comes back fast"] as const,
    descriptions: [
      "If you keep needing one more sign that things are okay, this next page can help you think about steadier relationship signals.",
    ] as const,
    primary: link(BLOG_GREEN_FLAGS, "Read about green flags in relationships"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: ["social-reassurance-seeking-check"] as const,
    headings: ["If social doubt follows you home"] as const,
    descriptions: [
      "If you keep replaying how you came across to other people, this next page can help you understand the social-anxiety side of that loop.",
    ] as const,
    primary: link(BLOG_INFERIORITY_SOCIAL_ANXIETY, "Read about inferiority and social anxiety"),
    secondary: link(SERVICE_SOCIAL_ANXIETY, "Explore social anxiety therapy"),
  },
  {
    slugs: [
      "resentment-buildup-tracker",
      "emotional-overload-buildup-check",
      "unspoken-needs-accumulation-check",
      "fairness-imbalance-tracker",
      "emotional-carrying-load-check",
    ] as const,
    headings: ["Related support", "If tension has been building quietly", "A useful next page"] as const,
    descriptions: [
      "If resentment is building because too much is staying unspoken, this next page can help you think about fairness, limits, and repair more clearly.",
      "When you keep carrying more than you say, this guide can help you name how imbalance turns into stored emotional pressure.",
    ] as const,
    primary: link(BLOG_HEALTHY_BOUNDARIES, "Read the guide on healthy relationship boundaries"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "inner-critic-intensity-scan",
      "perfection-pressure-scan",
      "self-judgment-intensity-check",
      "shame-voice-pattern-check",
      "failure-fear-inner-voice-check",
    ] as const,
    headings: ["If the inner voice is getting harsh", "Read this next", "A useful next page"] as const,
    descriptions: [
      "If this tool surfaced self-criticism more than clear self-reflection, this next page can help you understand what feeds that voice.",
      "When pressure turns inward and the tone gets harder, this guide can help you make sense of the pattern without oversimplifying it.",
    ] as const,
    primary: link(BLOG_LOW_SELF_ESTEEM, "Read how low self-esteem shapes self-talk"),
    secondary: link(BLOG_IMPOSTER, "See how impostor feelings can overlap"),
  },
  {
    slugs: [
      "self-sabotage-pattern-finder",
      "finish-line-resistance-check",
      "visibility-sabotage-pattern-check",
      "success-discomfort-pattern-finder",
      "follow-through-breakpoint-check",
    ] as const,
    headings: ["If you keep stalling near the important part", "Read this next", "A useful next page"] as const,
    descriptions: [
      "If this tool showed that avoidance is appearing near effort, visibility, or completion, this next page can help you understand the pattern more clearly.",
      "When you want progress but still keep pulling back, this guide can help you think about the motivation side of self-sabotage.",
    ] as const,
    primary: link(BLOG_PROCRASTINATION, "Read how procrastination affects mental health"),
    secondary: link(SERVICE_MOTIVATION, "Explore motivation counselling"),
  },
  {
    slugs: [
      "communication-style-mirror",
      "conflict-style-mirror",
      "repair-conversation-style-check",
      "directness-vs-softening-check",
      "difficult-conversation-pattern-mirror",
    ] as const,
    headings: ["Go deeper on this pattern", "Read this next", "If communication keeps missing"] as const,
    descriptions: [
      "If this tool showed that your message and your impact are not always lining up, this next page can help you understand that gap more clearly.",
      "When communication keeps getting strained even with good intent, this guide offers useful context around interpersonal skill patterns.",
    ] as const,
    primary: link(BLOG_INTERPERSONAL_SKILLS, "Read about building stronger interpersonal skills"),
    secondary: link(SERVICE_RELATIONSHIP, "Explore relationship counselling"),
  },
  {
    slugs: [
      "work-stress-load-mapper",
      "meeting-burden-mapper",
      "context-switching-load-check",
      "invisible-workload-mapper",
    ] as const,
    headings: ["If work is taking more out of you than it should", "Read this next", "A useful next page"] as const,
    descriptions: [
      "If this tool showed that work strain is coming from overload, switching, or hidden effort, this next page can help you name the pressure more clearly.",
      "When productivity looks fine but the load still feels too high, this guide can help you understand why work stress keeps spilling over.",
    ] as const,
    primary: link(BLOG_WORK_STRESS, "Read how work stress affects productivity"),
    secondary: link(SERVICE_BUSINESS, "Explore business counselling"),
  },
  {
    slugs: ["role-ambiguity-stress-check"] as const,
    headings: ["If the role feels unclear as well as heavy"] as const,
    descriptions: [
      "If unclear expectations are part of the stress, this next page can help you see how pressure grows when the role itself stops feeling defined.",
    ] as const,
    primary: link(BLOG_WORKPLACE_RESILIENCE, "Read about workplace resilience strategies"),
    secondary: link(SERVICE_CAREER, "Explore career counselling"),
  },
  {
    slugs: [
      "daily-functioning-stability-check",
      "day-structure-stability-check",
      "follow-through-stability-check",
    ] as const,
    headings: ["A useful next page", "If the day keeps slipping", "Read this next"] as const,
    descriptions: [
      "If daily life feels harder to hold together than it looks from outside, this next page can help you think about rhythm, structure, and follow-through.",
      "When the basics keep becoming inconsistent, this guide can help you understand what makes routines stick or fall apart.",
    ] as const,
    primary: link(BLOG_HABITS, "Read how habit formation really works"),
    secondary: link(SERVICE_TIME_MANAGEMENT, "Explore time-management counselling"),
  },
  {
    slugs: [
      "energy-consistency-check",
      "emotional-steadiness-check",
    ] as const,
    headings: ["If steadiness feels harder than it should", "Read this next"] as const,
    descriptions: [
      "If your energy or mood keeps shifting more than expected, this next page can help you think about recovery, fatigue, and emotional carryover.",
      "When your baseline keeps moving day to day, this guide can help you name what may be draining steadiness underneath.",
    ] as const,
    primary: link(BLOG_LETHARGY, "Read about mental fatigue and low energy"),
    secondary: link(SERVICE_DEPRESSION, "Explore depression counselling"),
  },
] as const satisfies readonly SupportGroupConfig[];

const liveToolSlugSet = new Set<string>(liveToolSlugs);

export const toolSupportLinkMap = buildSupportMap(supportGroups);

export function isLiveToolSlug(slug: string): slug is LiveToolSlug {
  return liveToolSlugSet.has(slug);
}

export function getToolSupportSection(slug: string) {
  if (!isLiveToolSlug(slug)) {
    return null;
  }

  return toolSupportLinkMap[slug];
}
