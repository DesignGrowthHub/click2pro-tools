import { buildToolHref } from "./tools-home";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";
import {
  calculateOverthinkingLoop as calculateBaseOverthinkingLoop,
  getInitialOverthinkingAnswers,
  isOverthinkingStepComplete,
  overthinkingBands,
  overthinkingDimensions,
  overthinkingFaqItems,
  overthinkingSteps as baseSteps,
  overthinkingStoryBlock,
  patternZones,
  triggerClusters,
  meaningBlocks,
  dimensionEditorial,
  loopFuelBlocks,
  interruptionBlocks,
  nextStepParagraphs,
  nextStepPanel,
  type OverthinkingAnswers,
  type OverthinkingBand,
  type OverthinkingBandKey,
  type OverthinkingDimension,
  type OverthinkingDimensionKey,
  type OverthinkingResult,
  type OverthinkingStep,
  type OverthinkingZoneKey,
  type PatternZone,
  type TriggerCluster,
  type TriggerClusterKey,
  type FaqItem,
  type EditorialBlock,
  type RelatedLoopTool,
} from "./overthinking-loop-check";

type NavItem = {
  label: string;
  href: string;
};

type OverthinkingFamilyPageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

type OverthinkingFamilyToolMetadata = {
  eyebrow: string;
  title: string;
  description: string;
  metadata: Array<{ icon: IconName; label: string }>;
  primaryCta: string;
  secondaryCta: string;
};

type OverthinkingFamilyExperienceCopy = {
  interactiveEyebrow: string;
  interactiveTitle: string;
  interactiveDescription: string;
  sidebarStatusEyebrow: string;
  sidebarStatusDescription: string;
  sidebarEmergingEyebrow: string;
  sidebarEmergingFootnoteLabel: string;
  footerPending: string;
  footerComplete: string;
  nextLabel: string;
  revealLabel: string;
  metaChips: string[];
  visualEyebrow: string;
  visualTitle: string;
  visualDescription: string;
};

type OverthinkingFamilyEditorialCopy = {
  meaningEyebrow: string;
  meaningTitle: string;
  meaningDescription: string;
  dimensionsEyebrow: string;
  dimensionsTitle: string;
  dimensionsDescription: string;
  fuelEyebrow: string;
  fuelTitle: string;
  fuelDescription: string;
  interruptEyebrow: string;
  interruptTitle: string;
  interruptDescription: string;
  nextEyebrow: string;
  nextTitle: string;
  nextDescription: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqIntro: string;
};

type OverthinkingFamilySeed = {
  slug:
    | "rumination-pattern-check"
    | "worry-cycle-mapper"
    | "catastrophizing-pattern-check"
    | "intrusive-thought-response-check";
  categorySlug: string;
  pageMetadata: OverthinkingFamilyPageMetadata;
  toolMetadata: OverthinkingFamilyToolMetadata;
  navigation: {
    ariaLabel: string;
    ctaLabel: string;
    items: NavItem[];
  };
  rules: TextReplacementRule[];
  experienceCopy: OverthinkingFamilyExperienceCopy;
  editorialCopy: OverthinkingFamilyEditorialCopy;
  relatedTools: RelatedLoopTool[];
  heroPreviewAnswers: Partial<OverthinkingAnswers>;
  bandTitleOverrides?: Partial<Record<OverthinkingBandKey, string>>;
  bandSummaryOverrides?: Partial<Record<OverthinkingBandKey, string>>;
  dimensionLabelOverrides?: Partial<Record<OverthinkingDimensionKey, string>>;
  dimensionDescriptionOverrides?: Partial<Record<OverthinkingDimensionKey, string>>;
  zoneLabelOverrides?: Partial<Record<OverthinkingZoneKey, string>>;
  zoneDescriptionOverrides?: Partial<Record<OverthinkingZoneKey, string>>;
  triggerLabelOverrides?: Partial<Record<TriggerClusterKey, string>>;
  storyOverrides?: Partial<EditorialStory>;
};

export type OverthinkingFamilyTool = {
  slug: OverthinkingFamilySeed["slug"];
  categorySlug: string;
  pageMetadata: OverthinkingFamilyPageMetadata;
  toolMetadata: OverthinkingFamilyToolMetadata;
  navigation: OverthinkingFamilySeed["navigation"];
  steps: OverthinkingStep[];
  dimensions: OverthinkingDimension[];
  bandsByKey: Record<OverthinkingBandKey, OverthinkingBand>;
  zonesByKey: Record<OverthinkingZoneKey, PatternZone>;
  triggersByKey: Record<TriggerClusterKey, TriggerCluster>;
  meaningBlocks: EditorialBlock[];
  dimensionEditorial: Array<{ key: OverthinkingDimensionKey; title: string; paragraphs: string[] }>;
  loopFuelBlocks: Array<{ title: string; body: string }>;
  interruptionBlocks: Array<{ title: string; body: string }>;
  nextStepParagraphs: string[];
  nextStepPanel: typeof nextStepPanel;
  faqItems: FaqItem[];
  storyBlock: EditorialStory;
  relatedTools: RelatedLoopTool[];
  experienceCopy: OverthinkingFamilyExperienceCopy;
  editorialCopy: OverthinkingFamilyEditorialCopy;
  heroPreviewResult: OverthinkingFamilyResult;
};

export type OverthinkingFamilyResult = Omit<
  OverthinkingResult,
  "band" | "zone" | "dominantDimensions" | "triggerClusters" | "dominantTriggers"
> & {
  band: OverthinkingBand;
  zone: PatternZone;
  dominantDimensions: OverthinkingDimension[];
  triggerClusters: Array<TriggerCluster & { value: number }>;
  dominantTriggers: Array<TriggerCluster & { value: number }>;
};

export type {
  OverthinkingAnswers,
  OverthinkingStep,
  RankItemKey,
  LoopTriggerValue,
} from "./overthinking-loop-check";

const sharedMeta = [
  { icon: "time" as const, label: "2-4 minutes" },
  { icon: "pattern" as const, label: "Free tool" },
  { icon: "privacy" as const, label: "Private by design" },
];

const textTransformOptions = {
  skipKeys: ["key", "value", "field", "id", "kind", "slug", "href", "icon"],
};

function cloneBandArray(rules: TextReplacementRule[]) {
  return mapDeepStrings(overthinkingBands, rules, textTransformOptions).map((band) => ({ ...band }));
}

function cloneDimensionArray(rules: TextReplacementRule[]) {
  return mapDeepStrings(overthinkingDimensions, rules, textTransformOptions).map((dimension) => ({ ...dimension }));
}

function cloneZoneArray(rules: TextReplacementRule[]) {
  return mapDeepStrings(patternZones, rules, textTransformOptions).map((zone) => ({ ...zone }));
}

function cloneTriggerArray(rules: TextReplacementRule[]) {
  return mapDeepStrings(triggerClusters, rules, textTransformOptions).map((cluster) => ({ ...cluster }));
}

function indexByKey<Key extends string, Value extends { key: Key }>(items: Value[]) {
  return Object.fromEntries(items.map((item) => [item.key, item])) as Record<Key, Value>;
}

function buildStory(seed: OverthinkingFamilySeed) {
  return {
    ...mapDeepStrings(overthinkingStoryBlock, seed.rules, textTransformOptions),
    ...seed.storyOverrides,
  };
}

function createOverthinkingFamilyTool(seed: OverthinkingFamilySeed): OverthinkingFamilyTool {
  const steps = mapDeepStrings(baseSteps, seed.rules, textTransformOptions);
  const dimensions = cloneDimensionArray(seed.rules).map((dimension) => ({
    ...dimension,
    label: seed.dimensionLabelOverrides?.[dimension.key] ?? dimension.label,
    description: seed.dimensionDescriptionOverrides?.[dimension.key] ?? dimension.description,
  }));
  const bandsByKey = indexByKey(
    cloneBandArray(seed.rules).map((band) => ({
      ...band,
      title: seed.bandTitleOverrides?.[band.key] ?? band.title,
      summary: seed.bandSummaryOverrides?.[band.key] ?? band.summary,
    })),
  );
  const zonesByKey = indexByKey(
    cloneZoneArray(seed.rules).map((zone) => ({
      ...zone,
      label: seed.zoneLabelOverrides?.[zone.key] ?? zone.label,
      description: seed.zoneDescriptionOverrides?.[zone.key] ?? zone.description,
    })),
  );
  const triggersByKey = indexByKey(
    cloneTriggerArray(seed.rules).map((cluster) => ({
      ...cluster,
      label: seed.triggerLabelOverrides?.[cluster.key] ?? cluster.label,
    })),
  );

  const tool: OverthinkingFamilyTool = {
    slug: seed.slug,
    categorySlug: seed.categorySlug,
    pageMetadata: seed.pageMetadata,
    toolMetadata: seed.toolMetadata,
    navigation: seed.navigation,
    steps,
    dimensions,
    bandsByKey,
    zonesByKey,
    triggersByKey,
    meaningBlocks: mapDeepStrings(meaningBlocks, seed.rules, textTransformOptions),
    dimensionEditorial: mapDeepStrings(dimensionEditorial, seed.rules, textTransformOptions),
    loopFuelBlocks: mapDeepStrings(loopFuelBlocks, seed.rules, textTransformOptions),
    interruptionBlocks: mapDeepStrings(interruptionBlocks, seed.rules, textTransformOptions),
    nextStepParagraphs: mapDeepStrings(nextStepParagraphs, seed.rules, textTransformOptions),
    nextStepPanel: mapDeepStrings(nextStepPanel, seed.rules, textTransformOptions),
    faqItems: mapDeepStrings(overthinkingFaqItems, seed.rules, textTransformOptions),
    storyBlock: buildStory(seed),
    relatedTools: seed.relatedTools,
    experienceCopy: seed.experienceCopy,
    editorialCopy: seed.editorialCopy,
    heroPreviewResult: undefined as unknown as OverthinkingFamilyResult,
  };

  tool.heroPreviewResult = mapBaseResultToTool(
    tool,
    calculateBaseOverthinkingLoop({
      ...getInitialOverthinkingAnswers(),
      ...seed.heroPreviewAnswers,
    }),
  );

  return tool;
}

function mapBaseResultToTool(
  tool: OverthinkingFamilyTool,
  baseResult: OverthinkingResult,
  rules?: TextReplacementRule[],
): OverthinkingFamilyResult {
  const activeRules = rules ?? [];

  return {
    ...baseResult,
    band: tool.bandsByKey[baseResult.band.key],
    zone: tool.zonesByKey[baseResult.zone.key],
    dominantDimensions: baseResult.dominantDimensions.map(
      (dimension) => tool.dimensions.find((item) => item.key === dimension.key) ?? dimension,
    ),
    triggerClusters: baseResult.triggerClusters.map((cluster) => ({
      ...tool.triggersByKey[cluster.key],
      value: cluster.value,
    })),
    dominantTriggers: baseResult.dominantTriggers.map((cluster) => ({
      ...tool.triggersByKey[cluster.key],
      value: cluster.value,
    })),
    signalLabel: mapDeepStrings(baseResult.signalLabel, activeRules, textTransformOptions),
    interpretation: mapDeepStrings(baseResult.interpretation, activeRules, textTransformOptions),
    standout: mapDeepStrings(baseResult.standout, activeRules, textTransformOptions),
    loopFuel: mapDeepStrings(baseResult.loopFuel, activeRules, textTransformOptions),
    responseLabel: mapDeepStrings(baseResult.responseLabel, activeRules, textTransformOptions),
  };
}

export function calculateOverthinkingFamilyResult(
  slug: keyof typeof overthinkingFamilyToolRegistry,
  answers: OverthinkingAnswers,
): OverthinkingFamilyResult {
  const tool = overthinkingFamilyToolRegistry[slug];
  const baseResult = calculateBaseOverthinkingLoop(answers);

  return mapBaseResultToTool(tool, baseResult, toolSeeds[slug].rules);
}

export function getInitialOverthinkingFamilyAnswers() {
  return getInitialOverthinkingAnswers();
}

export { isOverthinkingStepComplete };

const toolSeeds: Record<OverthinkingFamilySeed["slug"], OverthinkingFamilySeed> = {
  "rumination-pattern-check": {
    slug: "rumination-pattern-check",
    categorySlug: "anxiety-overthinking",
    pageMetadata: {
      title: "Rumination Pattern Check - See Why Your Mind Keeps Replaying It",
      description:
        "Use the Rumination Pattern Check to see whether you are replaying the past for clarity or getting pulled into a repetitive rumination cycle that drains focus and emotional space.",
      keywords: [
        "rumination pattern check",
        "why do i keep replaying things",
        "rumination test tool",
        "replaying conversations tool",
        "past event rumination check",
      ],
      openGraphTitle: "Rumination Pattern Check",
      openGraphDescription:
        "A premium interactive tool for decoding replay, unresolved mental review, emotional stickiness, and rumination drag.",
      twitterTitle: "Rumination Pattern Check",
      twitterDescription:
        "See whether your current thinking is helping you process or trapping you in repetitive replay.",
    },
    toolMetadata: {
      eyebrow: "MENTAL REPLAY TOOL",
      title: "Rumination Pattern Check",
      description:
        "See whether your mind is processing something usefully or pulling you back into replay, second-guessing, and mental return visits that no longer create relief. This tool maps the shape of rumination instead of treating it like generic overthinking.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Sample Pattern",
    },
    navigation: {
      ariaLabel: "Rumination pattern check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-tool" },
        { label: "Pattern Map", href: "#visual-insights" },
        { label: "What It Means", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/Overthinking Loop Check/g, "Rumination Pattern Check"],
      [/overthinking loop FAQ/gi, "rumination pattern FAQ"],
      [/Overthinking loops?/g, "Rumination patterns"],
      [/overthinking loops?/g, "rumination patterns"],
      [/overthinking/gi, "rumination"],
      [/looping/gi, "replaying"],
      [/loop/gi, "cycle"],
      [/reflection/gi, "processing"],
      [/thinking pattern/gi, "rumination pattern"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive tool section",
      interactiveTitle: "A live pattern-map experience for decoding mental replay",
      interactiveDescription:
        "One signal at a time. Scenario cards, sliders, trigger nodes, a ranking step, and a live map that shows whether you are reviewing, replaying, or getting mentally stuck.",
      sidebarStatusEyebrow: "Rumination status",
      sidebarStatusDescription:
        "Each answer redraws the pattern map so you can see whether the replay is being driven by unfinished emotion, doubt, or the need to land the past differently.",
      sidebarEmergingEyebrow: "Emerging replay profile",
      sidebarEmergingFootnoteLabel: "Top replay cluster",
      footerPending:
        "Answer for how replay usually behaves after difficult moments, not just for your single most intense recent day.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the replay map will update immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Pattern",
      metaChips: ["Replay vs processing", "Past-event clusters", "Deterministic scoring"],
      visualEyebrow: "Visual insights section",
      visualTitle: "Four ways to read the replay pattern beyond the score",
      visualDescription:
        "The emotional payoff of this tool lives in seeing where rumination is clustering, what keeps it reopening, and how much it is landing on daily functioning.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "Use these bands to tell the difference between healthy review and the kind of replay that keeps the moment emotionally unfinished.",
      dimensionsEyebrow: "Signal breakdown",
      dimensionsTitle: "The 4 dimensions of rumination",
      dimensionsDescription:
        "These dimensions show why one person replays conversations while another keeps circling regret, unfinished emotion, or self-questioning.",
      fuelEyebrow: "What keeps replay alive",
      fuelTitle: "What tends to feed rumination",
      fuelDescription:
        "Rumination rarely persists because you simply think too much. It usually stays active because the mind keeps treating replay as unfinished work.",
      interruptEyebrow: "What interrupts the cycle",
      interruptTitle: "What tends to interrupt rumination",
      interruptDescription:
        "The pattern softens when you change the relationship to replay itself rather than trying to out-argue every returning thought.",
      nextEyebrow: "Practical next moves",
      nextTitle: "What to do next",
      nextDescription:
        "A stronger next step usually begins with reducing replay fuel, not demanding that your mind stop revisiting the past on command.",
      relatedEyebrow: "Related pattern tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Move deeper into the library with tools that help decode worry, self-doubt, or the uncertainty habits that often sit beside rumination.",
      faqEyebrow: "Questions people ask after the map",
      faqTitle: "Rumination pattern FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize their mind is not just reflecting, but replaying.",
      faqIntro:
        "These answers help separate useful review from the kind of repetitive replay that keeps emotion and attention tied to the same material.",
    },
    relatedTools: [
      {
        title: "Worry Cycle Mapper",
        description: "See whether the mind is pulled more by future risk than by replay of the past.",
        category: "Overthinking & Anxiety",
        minutes: "4 min",
        icon: "pattern",
        href: "/tools/worry-cycle-mapper",
      },
      {
        title: "Relationship Clarity Check",
        description: "Useful when replay is attached to mixed signals or unresolved emotional ambiguity.",
        category: "Relationships & Attachment",
        minutes: "5 min",
        icon: "insight",
        href: buildToolHref({ slug: "relationship-clarity-check", categorySlug: "relationships-attachment" }),
      },
      {
        title: "Inner Critic Intensity Scan",
        description: "Use this when replay keeps turning into self-judgment and internal attack.",
        category: "Confidence & Self-Trust",
        minutes: "5 min",
        icon: "signal",
        href: buildToolHref({ slug: "inner-critic-intensity-scan", categorySlug: "self-esteem-confidence" }),
      },
    ],
    heroPreviewAnswers: {
      firstLoop: "replay-repeatedly",
      replayFrequency: "often",
      triggerSelections: ["mistakes", "relationships", "social-perception"],
      narrativeType: "should-have-done-differently",
      actionDelay: 54,
      sleepImpact: 48,
      focusImpact: 58,
      energyImpact: 42,
    },
    bandTitleOverrides: {
      "reflective-but-clear": "Review Without Getting Hooked",
      "mild-cognitive-looping": "Recurring Replay Pattern",
      "repetitive-processing-pattern": "Emotionally Sticky Replay",
      "high-rumination-drag": "High Rumination Drag",
      "decision-locked-mental-loop": "Past-Focused Mental Lock",
    },
    dimensionLabelOverrides: {
      repetitionLoad: "Replay Load",
      uncertaintyPull: "Unfinished Meaning Pull",
    },
    zoneLabelOverrides: {
      "clear-reflection": "Clear review",
      "repetitive-review": "Return visits",
      "rumination-drag": "Emotionally sticky replay",
      "decision-lock": "Stuck in the past",
    },
    triggerLabelOverrides: {
      "self-evaluation": "Self-judgment",
      relational: "Relational replay",
    },
    storyOverrides: {
      title: "Rumination usually starts as one more review, then quietly becomes a return trip you did not mean to take.",
      quote:
        "It can begin as a sincere attempt to understand what happened. Then, without fully noticing, the person is back inside the same conversation again and still not at peace with it. The review no longer feels chosen. It feels like the mind keeps returning before it is ready to let go.",
      takeaway:
        "That is the shift this tool is designed to catch: the point where honest processing turns into repetitive replay that keeps the past emotionally active.",
      toneLabel: "Replay moment",
    },
  },
  "worry-cycle-mapper": {
    slug: "worry-cycle-mapper",
    categorySlug: "anxiety-overthinking",
    pageMetadata: {
      title: "Worry Cycle Mapper - See Why Your Mind Keeps Scanning Ahead",
      description:
        "Use the Worry Cycle Mapper to see whether your mind is planning usefully or getting caught in repetitive future scanning, uncertainty pull, and threat anticipation.",
      keywords: [
        "worry cycle mapper",
        "why do i keep worrying",
        "future anxiety tool",
        "worry loop checker",
        "uncertainty worry pattern",
      ],
      openGraphTitle: "Worry Cycle Mapper",
      openGraphDescription:
        "A premium interactive tool for decoding future-focused worry, uncertainty scanning, reassurance pull, and mental drag.",
      twitterTitle: "Worry Cycle Mapper",
      twitterDescription:
        "See whether your current thought pattern is helping you prepare or trapping you in repetitive worry.",
    },
    toolMetadata: {
      eyebrow: "WORRY PATTERN TOOL",
      title: "Worry Cycle Mapper",
      description:
        "See whether your thinking is helping you prepare for what matters or pulling you into repeated future scanning, reassurance habits, and threat rehearsal that never fully settles. This tool maps worry as a cycle rather than a vague feeling.",
      metadata: sharedMeta,
      primaryCta: "Start Mapper",
      secondaryCta: "See Worry Signals",
    },
    navigation: {
      ariaLabel: "Worry cycle mapper sections",
      ctaLabel: "Start Mapper",
      items: [
        { label: "Map", href: "#interactive-tool" },
        { label: "Cycle View", href: "#visual-insights" },
        { label: "What It Means", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/Overthinking Loop Check/g, "Worry Cycle Mapper"],
      [/overthinking loop FAQ/gi, "worry cycle FAQ"],
      [/Overthinking loops?/g, "Worry cycles"],
      [/overthinking loops?/g, "worry cycles"],
      [/overthinking/gi, "worry"],
      [/reflection/gi, "preparation"],
      [/rumination/gi, "future scanning"],
      [/loop/gi, "cycle"],
      [/thinking pattern/gi, "worry pattern"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive tool section",
      interactiveTitle: "A live cycle map for decoding repetitive worry",
      interactiveDescription:
        "One signal at a time. Scenario cards, sliders, trigger nodes, a ranking step, and a live map that shows whether worry is staying bounded or running the mental system.",
      sidebarStatusEyebrow: "Worry status",
      sidebarStatusDescription:
        "Each answer sharpens whether the pattern is coming from future risk, reassurance pull, or uncertainty that keeps asking for one more scan ahead.",
      sidebarEmergingEyebrow: "Emerging worry profile",
      sidebarEmergingFootnoteLabel: "Top worry cluster",
      footerPending:
        "Answer for how your mind behaves when uncertainty is active, not only for the single scenario that scares you most.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the worry map will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Cycle",
      metaChips: ["Future scanning", "Uncertainty pull", "Action delay"],
      visualEyebrow: "Visual insights section",
      visualTitle: "Four ways to read the worry cycle beyond the headline score",
      visualDescription:
        "The most useful part of the tool is seeing where preparation turns into repetitive scanning, what keeps the cycle active, and how much it is affecting daily functioning.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the cycle",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "These bands help you separate useful anticipation from the kind of worry that keeps scanning ahead without producing real relief.",
      dimensionsEyebrow: "Signal breakdown",
      dimensionsTitle: "The 4 dimensions of worry cycles",
      dimensionsDescription:
        "These dimensions show whether the main issue is repeated future review, action delay, reassurance pull, or the daily cost of staying mentally braced.",
      fuelEyebrow: "What keeps it active",
      fuelTitle: "What tends to feed worry cycles",
      fuelDescription:
        "Worry usually stays active because the mind keeps treating uncertainty as something that can be solved by more scanning.",
      interruptEyebrow: "What interrupts the cycle",
      interruptTitle: "What tends to interrupt repetitive worry",
      interruptDescription:
        "Worry usually softens when preparation becomes bounded and the mind stops treating certainty as the only safe landing point.",
      nextEyebrow: "Practical next moves",
      nextTitle: "What to do next",
      nextDescription:
        "The next move is usually not to stop caring. It is to make worry more finite, more honest, and less in charge of your attention.",
      relatedEyebrow: "Related pattern tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Use nearby tools if future worry is blending with reassurance seeking, work pressure, or confidence erosion.",
      faqEyebrow: "Questions people ask after the map",
      faqTitle: "Worry cycle FAQ",
      faqDescription:
        "Useful answers for the questions people usually ask once they see how much uncertainty is steering the pattern.",
      faqIntro:
        "These answers help separate realistic preparation from the kind of repetitive future scanning that keeps the nervous system braced.",
    },
    relatedTools: [
      {
        title: "Health Reassurance Loop Check",
        description: "Useful when worry keeps turning into checking, searching, or asking for certainty.",
        category: "Overthinking & Anxiety",
        minutes: "5 min",
        icon: "insight",
        href: "/tools/health-reassurance-loop-check",
      },
      {
        title: "Decision Fatigue Simulator",
        description: "Helpful when worry is draining clarity across repeated choices.",
        category: "Overthinking & Anxiety",
        minutes: "4 min",
        icon: "trend",
        href: buildToolHref({ slug: "decision-fatigue-simulator", categorySlug: "anxiety-overthinking" }),
      },
      {
        title: "Work Stress Load Mapper",
        description: "Use this when worry is attached to deadlines, ambiguity, or low control at work.",
        category: "Work Psychology",
        minutes: "5 min",
        icon: "graph",
        href: buildToolHref({ slug: "work-stress-load-mapper", categorySlug: "work-psychology" }),
      },
    ],
    heroPreviewAnswers: {
      firstLoop: "revisit-few-times",
      replayFrequency: "very-often",
      triggerSelections: ["future-risks", "health-worries", "decisions"],
      narrativeType: "what-if",
      responsePattern: "research-more",
      actionDelay: 72,
      sleepImpact: 56,
      focusImpact: 52,
      energyImpact: 48,
    },
    bandTitleOverrides: {
      "reflective-but-clear": "Practical Foresight",
      "mild-cognitive-looping": "Recurring Worry Pattern",
      "repetitive-processing-pattern": "Future-Focused Mental Spin",
      "high-rumination-drag": "High Worry Drag",
      "decision-locked-mental-loop": "Uncertainty-Locked Cycle",
    },
    dimensionLabelOverrides: {
      repetitionLoad: "Future Review Load",
      uncertaintyPull: "Certainty Pull",
    },
    zoneLabelOverrides: {
      "clear-reflection": "Useful planning",
      "repetitive-review": "Repeated scanning",
      "rumination-drag": "Worry drag",
      "decision-lock": "Uncertainty lock",
    },
    triggerLabelOverrides: {
      "future-uncertainty": "Future risk",
      "unfinished-task-load": "Open outcomes",
    },
    storyOverrides: {
      title: "Worry usually sounds like preparation until you notice the mind is rehearsing the same future again and again.",
      quote:
        "At first it can feel like preparation. Then the mind starts running one more scenario, and then another, as if rest has to wait until every possible future has been rehearsed. The person is trying to feel ready, but the scan never really reaches an end point.",
      takeaway:
        "That is the shift this tool is built to clarify: the point where planning stops feeling finite and starts becoming an ongoing cycle of mental bracing.",
      toneLabel: "Worry moment",
    },
  },
  "catastrophizing-pattern-check": {
    slug: "catastrophizing-pattern-check",
    categorySlug: "anxiety-overthinking",
    pageMetadata: {
      title: "Catastrophizing Pattern Check - See If Your Mind Keeps Jumping to the Worst Case",
      description:
        "Use the Catastrophizing Pattern Check to see whether your mind is realistically assessing risk or repeatedly escalating toward worst-case outcomes that keep pressure high.",
      keywords: [
        "catastrophizing pattern check",
        "worst case thinking tool",
        "am i catastrophizing",
        "catastrophic thinking checker",
        "worst outcome anxiety tool",
      ],
      openGraphTitle: "Catastrophizing Pattern Check",
      openGraphDescription:
        "A premium interactive tool for decoding worst-case escalation, threat amplification, uncertainty pull, and mental drag.",
      twitterTitle: "Catastrophizing Pattern Check",
      twitterDescription:
        "See whether your current thinking is realistically assessing risk or escalating toward the worst-case outcome.",
    },
    toolMetadata: {
      eyebrow: "WORST-CASE THINKING TOOL",
      title: "Catastrophizing Pattern Check",
      description:
        "See whether your mind is tracking real risk or quickly escalating situations into worst-case outcomes that feel emotionally real before evidence catches up. This tool maps catastrophizing as a pattern of escalation, not as a character flaw.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Escalation Pattern",
    },
    navigation: {
      ariaLabel: "Catastrophizing pattern check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-tool" },
        { label: "Pattern Map", href: "#visual-insights" },
        { label: "What It Means", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/Overthinking Loop Check/g, "Catastrophizing Pattern Check"],
      [/overthinking loop FAQ/gi, "catastrophizing pattern FAQ"],
      [/overthinking/gi, "catastrophizing"],
      [/rumination/gi, "worst-case escalation"],
      [/loop/gi, "escalation cycle"],
      [/reflection/gi, "risk assessment"],
      [/thinking pattern/gi, "catastrophizing pattern"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive tool section",
      interactiveTitle: "A live map for decoding worst-case escalation",
      interactiveDescription:
        "One signal at a time. Scenario cards, sliders, trigger nodes, a ranking step, and a live map that shows how quickly thought escalates toward the worst outcome.",
      sidebarStatusEyebrow: "Escalation status",
      sidebarStatusDescription:
        "Each answer sharpens whether the pattern is being driven by uncertainty, self-protection, or a habit of mentally jumping past the middle ground.",
      sidebarEmergingEyebrow: "Emerging escalation profile",
      sidebarEmergingFootnoteLabel: "Top escalation cluster",
      footerPending:
        "Answer for how your mind usually handles perceived risk, not only for your most dramatic recent thought spiral.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the escalation map will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Pattern",
      metaChips: ["Worst-case drift", "Risk amplification", "Mental spillover"],
      visualEyebrow: "Visual insights section",
      visualTitle: "Four ways to read worst-case thinking beyond the headline score",
      visualDescription:
        "The real value of the tool is seeing how quickly the mind escalates, what keeps feeding the jump, and where the pattern is costing recovery and clarity.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "These bands help you separate realistic caution from the kind of mental escalation that treats the worst outcome like the most probable one.",
      dimensionsEyebrow: "Signal breakdown",
      dimensionsTitle: "The 4 dimensions of catastrophizing",
      dimensionsDescription:
        "These dimensions show whether the issue is escalation speed, certainty pull, action drag, or the daily cost of staying mentally braced for the worst.",
      fuelEyebrow: "What keeps it active",
      fuelTitle: "What tends to feed catastrophizing",
      fuelDescription:
        "Worst-case thinking usually persists because the mind keeps treating escalation as protection rather than as a distortion worth questioning.",
      interruptEyebrow: "What interrupts the cycle",
      interruptTitle: "What tends to interrupt worst-case escalation",
      interruptDescription:
        "The pattern usually softens when the mind is asked to tolerate uncertainty without filling it instantly with the most threatening outcome.",
      nextEyebrow: "Practical next moves",
      nextTitle: "What to do next",
      nextDescription:
        "The next move is often to slow the jump, widen the range of realistic outcomes, and stop asking the worst-case story to double as certainty.",
      relatedEyebrow: "Related pattern tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Move deeper into the library with tools that help decode worry, intrusive thoughts, or reassurance habits that sit under escalation.",
      faqEyebrow: "Questions people ask after the map",
      faqTitle: "Catastrophizing pattern FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they notice how fast their mind can move from concern to alarm.",
      faqIntro:
        "These answers help separate reasonable caution from the kind of worst-case thinking that turns possibility into felt probability.",
    },
    relatedTools: [
      {
        title: "Worry Cycle Mapper",
        description: "Helpful when the mind stays in future scanning even before it escalates into worst-case outcomes.",
        category: "Overthinking & Anxiety",
        minutes: "4 min",
        icon: "pattern",
        href: "/tools/worry-cycle-mapper",
      },
      {
        title: "Intrusive Thought Response Check",
        description: "Useful when worst-case thoughts feel unwanted, sticky, or hard to disengage from.",
        category: "Overthinking & Anxiety",
        minutes: "4 min",
        icon: "signal",
        href: "/tools/intrusive-thought-response-check",
      },
      {
        title: "Emotional Trigger Decoder",
        description: "Use this when worst-case thinking is linked to specific emotional triggers or fast nervous-system activation.",
        category: "Emotional Regulation",
        minutes: "5 min",
        icon: "insight",
        href: buildToolHref({ slug: "emotional-trigger-decoder", categorySlug: "emotional-regulation" }),
      },
    ],
    heroPreviewAnswers: {
      firstLoop: "mentally-stuck",
      replayFrequency: "often",
      triggerSelections: ["future-risks", "conflict", "health-worries"],
      narrativeType: "what-if",
      responsePattern: "avoid-acting",
      actionDelay: 74,
      sleepImpact: 52,
      focusImpact: 60,
      energyImpact: 50,
    },
    bandTitleOverrides: {
      "reflective-but-clear": "Grounded Risk Reading",
      "mild-cognitive-looping": "Mild Worst-Case Drift",
      "repetitive-processing-pattern": "Repeated Escalation Pattern",
      "high-rumination-drag": "High Worst-Case Drag",
      "decision-locked-mental-loop": "Threat-Locked Mental Spiral",
    },
    dimensionLabelOverrides: {
      repetitionLoad: "Escalation Load",
      uncertaintyPull: "Threat Certainty Pull",
    },
    zoneLabelOverrides: {
      "clear-reflection": "Grounded assessment",
      "repetitive-review": "Escalating review",
      "rumination-drag": "Worst-case drag",
      "decision-lock": "Threat lock",
    },
    triggerLabelOverrides: {
      "future-uncertainty": "Threat anticipation",
      "conflict-risk": "Danger of fallout",
    },
    storyOverrides: {
      title: "Catastrophizing often feels like caution until you realize the mind keeps skipping past the middle and landing on disaster.",
      quote:
        "The mind may not stop at concern. It can jump straight to the version where everything falls apart, and the body starts reacting as if that ending is already on the way. The middle ground disappears, so possibility begins to feel like certainty.",
      takeaway:
        "That is what this tool is trying to make visible: the jump from possibility to perceived inevitability that turns concern into chronic internal alarm.",
      toneLabel: "Escalation moment",
    },
  },
  "intrusive-thought-response-check": {
    slug: "intrusive-thought-response-check",
    categorySlug: "anxiety-overthinking",
    pageMetadata: {
      title: "Intrusive Thought Response Check - See What Happens After a Thought Sticks",
      description:
        "Use the Intrusive Thought Response Check to see how much unwanted thoughts are sticking, what responses keep them active, and where the mental cost is building.",
      keywords: [
        "intrusive thought response check",
        "unwanted thoughts tool",
        "intrusive thoughts checker",
        "how do i respond to intrusive thoughts",
        "thought response pattern tool",
      ],
      openGraphTitle: "Intrusive Thought Response Check",
      openGraphDescription:
        "A premium interactive tool for decoding unwanted thought stickiness, response habits, uncertainty pull, and cognitive spillover.",
      twitterTitle: "Intrusive Thought Response Check",
      twitterDescription:
        "See how your current response pattern may be keeping intrusive thoughts louder and harder to release.",
    },
    toolMetadata: {
      eyebrow: "UNWANTED THOUGHT TOOL",
      title: "Intrusive Thought Response Check",
      description:
        "See how strong, sticky, or hard to disengage unwanted thoughts become, and what you tend to do next when a thought feels disturbing, uncertain, or hard to shake. This tool focuses on the response pattern around intrusive thoughts, not on judging the thought itself.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Response Pattern",
    },
    navigation: {
      ariaLabel: "Intrusive thought response check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-tool" },
        { label: "Pattern Map", href: "#visual-insights" },
        { label: "What It Means", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/Overthinking Loop Check/g, "Intrusive Thought Response Check"],
      [/overthinking loop FAQ/gi, "intrusive thought response FAQ"],
      [/overthinking/gi, "intrusive-thought response"],
      [/rumination/gi, "thought stickiness"],
      [/loop/gi, "response cycle"],
      [/reflection/gi, "response regulation"],
      [/thinking pattern/gi, "response pattern"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive tool section",
      interactiveTitle: "A live pattern map for decoding intrusive-thought responses",
      interactiveDescription:
        "One signal at a time. Scenario cards, sliders, trigger nodes, a ranking step, and a live map that shows whether an unwanted thought stays brief or becomes mentally sticky and costly.",
      sidebarStatusEyebrow: "Response status",
      sidebarStatusDescription:
        "Each answer sharpens whether the pattern is being driven by thought stickiness, reassurance habits, uncertainty, or the effort to neutralize the thought.",
      sidebarEmergingEyebrow: "Emerging response profile",
      sidebarEmergingFootnoteLabel: "Top response cluster",
      footerPending:
        "Answer for how you usually respond when an unwanted thought shows up, not only for the single most intense thought you remember.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the response map will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Pattern",
      metaChips: ["Thought stickiness", "Response habits", "Spillover load"],
      visualEyebrow: "Visual insights section",
      visualTitle: "Four ways to read your intrusive-thought response pattern",
      visualDescription:
        "The useful part of this tool is seeing what makes a thought linger, what response habit keeps it active, and how much it is costing clarity and steadiness.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "These bands help you separate brief unwanted thoughts from the kind of response cycle that makes them feel louder, stickier, and harder to release.",
      dimensionsEyebrow: "Signal breakdown",
      dimensionsTitle: "The 4 dimensions of intrusive-thought response",
      dimensionsDescription:
        "These dimensions show whether the main issue is repetition, action drag, uncertainty pull, or how much unwanted thoughts are spilling into the rest of the day.",
      fuelEyebrow: "What keeps it active",
      fuelTitle: "What tends to feed intrusive-thought cycles",
      fuelDescription:
        "Unwanted thoughts usually become louder when the response pattern keeps treating the thought like it must be solved, neutralized, or disproven immediately.",
      interruptEyebrow: "What interrupts the cycle",
      interruptTitle: "What tends to interrupt the response cycle",
      interruptDescription:
        "The response pattern usually softens when the mind stops arguing with every thought and starts noticing which habits are keeping it active.",
      nextEyebrow: "Practical next moves",
      nextTitle: "What to do next",
      nextDescription:
        "The goal is not to approve of an unwanted thought. It is to reduce the habits that keep it mentally overpowered and emotionally central.",
      relatedEyebrow: "Related pattern tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Use adjacent tools if the pattern overlaps with reassurance seeking, catastrophizing, or a loud inner critic.",
      faqEyebrow: "Questions people ask after the map",
      faqTitle: "Intrusive thought response FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize the response habit may matter as much as the thought itself.",
      faqIntro:
        "These answers help you read unwanted-thought patterns with more precision and less self-judgment by focusing on response style rather than on the content alone.",
    },
    relatedTools: [
      {
        title: "Social Reassurance Seeking Check",
        description: "Useful when intrusive thoughts lead to repeated asking, checking, or looking for certainty from other people.",
        category: "Overthinking & Anxiety",
        minutes: "5 min",
        icon: "pattern",
        href: "/tools/social-reassurance-seeking-check",
      },
      {
        title: "Catastrophizing Pattern Check",
        description: "Helpful when unwanted thoughts quickly escalate into worst-case interpretations.",
        category: "Overthinking & Anxiety",
        minutes: "4 min",
        icon: "signal",
        href: "/tools/catastrophizing-pattern-check",
      },
      {
        title: "Inner Critic Intensity Scan",
        description: "Use this when an unwanted thought quickly turns into self-attack or shame.",
        category: "Confidence & Self-Trust",
        minutes: "5 min",
        icon: "insight",
        href: buildToolHref({ slug: "inner-critic-intensity-scan", categorySlug: "self-esteem-confidence" }),
      },
    ],
    heroPreviewAnswers: {
      firstLoop: "replay-repeatedly",
      replayFrequency: "very-often",
      triggerSelections: ["health-worries", "social-perception", "mistakes"],
      narrativeType: "need-clarity",
      responsePattern: "seek-reassurance",
      actionDelay: 62,
      sleepImpact: 58,
      focusImpact: 64,
      energyImpact: 46,
    },
    bandTitleOverrides: {
      "reflective-but-clear": "Low Thought Stickiness",
      "mild-cognitive-looping": "Manageable Intrusive Response",
      "repetitive-processing-pattern": "Repeated Thought Engagement",
      "high-rumination-drag": "High Thought Stickiness",
      "decision-locked-mental-loop": "Intrusive Response Saturation",
    },
    dimensionLabelOverrides: {
      repetitionLoad: "Thought Stickiness",
      uncertaintyPull: "Need to Neutralize",
    },
    zoneLabelOverrides: {
      "clear-reflection": "Brief thought",
      "repetitive-review": "Repeated engagement",
      "rumination-drag": "Sticky thought cycle",
      "decision-lock": "Thought saturation",
    },
    triggerLabelOverrides: {
      "self-evaluation": "Self-meaning",
      "future-uncertainty": "Threat uncertainty",
    },
    storyOverrides: {
      title: "Intrusive thoughts often become most draining when the response to them gets bigger than the thought itself.",
      quote:
        "The thought appears, and then the real struggle begins. The mind starts trying to prove it wrong, check what it means, or make sure it says nothing bad about the person who had it. The unwanted thought may be brief. The response to it is what keeps the whole pattern alive.",
      takeaway:
        "That is the shift this tool is built to surface: the point where the mind starts organizing around an unwanted thought instead of letting it remain a passing mental event.",
      toneLabel: "Response moment",
    },
  },
};

export const overthinkingFamilyToolRegistry = {
  "rumination-pattern-check": createOverthinkingFamilyTool(toolSeeds["rumination-pattern-check"]),
  "worry-cycle-mapper": createOverthinkingFamilyTool(toolSeeds["worry-cycle-mapper"]),
  "catastrophizing-pattern-check": createOverthinkingFamilyTool(toolSeeds["catastrophizing-pattern-check"]),
  "intrusive-thought-response-check": createOverthinkingFamilyTool(toolSeeds["intrusive-thought-response-check"]),
};

export type OverthinkingFamilyToolSlug = keyof typeof overthinkingFamilyToolRegistry;
