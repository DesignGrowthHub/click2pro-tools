import type { EditorialStory } from "@/components/tools/editorial-story-card";
import {
  buildToolHref,
  type IconName,
} from "./tools-home";
import { mapDeepStrings, type TextReplacementRule } from "./tool-text-transform";
import {
  calculatePeoplePleasingResult as calculateBasePeoplePleasingResult,
  getInitialPeoplePleasingAnswers,
  heroPreviewResult as baseHeroPreviewResult,
  isPeoplePleasingStepComplete,
  peoplePleasingBands,
  peoplePleasingDimensions,
  peoplePleasingFaqItems,
  peoplePleasingMetadata,
  peoplePleasingSteps as baseSteps,
  peoplePleasingStoryBlock,
  meaningBlocks,
  dimensionEditorial,
  increaseBlocks,
  reductionBlocks,
  nextStepParagraphs,
  nextStepPanel,
  type FaqItem,
  type PeoplePleasingAnswers,
  type PeoplePleasingBand,
  type PeoplePleasingDimension,
  type PeoplePleasingResult,
  type PeoplePleasingStep,
  type RelatedPleasingTool,
} from "./people-pleasing-signal-check";

type NavItem = {
  label: string;
  href: string;
};

type PageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

type ToolMetadata = {
  eyebrow: string;
  title: string;
  description: string;
  metadata: Array<{ icon: IconName; label: string }>;
  primaryCta: string;
  secondaryCta: string;
};

type ExperienceCopy = {
  interactiveEyebrow: string;
  interactiveTitle: string;
  interactiveDescription: string;
  sidebarStatusEyebrow: string;
  sidebarStatusDescription: string;
  sidebarEmergingEyebrow: string;
  sidebarEmergingFootnote: string;
  footerPending: string;
  footerComplete: string;
  nextLabel: string;
  revealLabel: string;
  metaChips: string[];
  visualEyebrow: string;
  visualTitle: string;
  visualDescription: string;
};

type EditorialCopy = {
  meaningEyebrow: string;
  meaningTitle: string;
  meaningDescription: string;
  dimensionsEyebrow: string;
  dimensionsTitle: string;
  dimensionsDescription: string;
  increaseEyebrow: string;
  increaseTitle: string;
  increaseDescription: string;
  reductionEyebrow: string;
  reductionTitle: string;
  reductionDescription: string;
  storyEyebrow: string;
  storyTitle: string;
  storyDescription: string;
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

type ResultCopy = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  scoreLabel: string;
  primaryLabel: string;
  weakZoneLabel: string;
  hiddenCostLabel: string;
  standoutLabel: string;
  costLabel: string;
  retakeLabel: string;
};

type Seed = {
  slug:
    | "approval-dependence-check"
    | "fawning-pattern-check"
    | "over-accommodation-check"
    | "self-abandonment-pattern-check";
  pageMetadata: PageMetadata;
  toolMetadata: ToolMetadata;
  navigation: {
    ariaLabel: string;
    ctaLabel: string;
    items: NavItem[];
  };
  rules: TextReplacementRule[];
  experienceCopy: ExperienceCopy;
  editorialCopy: EditorialCopy;
  resultCopy: ResultCopy;
  relatedTools: RelatedPleasingTool[];
  storyOverrides?: Partial<EditorialStory>;
};

export type PeoplePleasingFamilyTool = {
  slug: Seed["slug"];
  categorySlug: "boundaries-people-pleasing";
  pageMetadata: PageMetadata;
  toolMetadata: ToolMetadata;
  navigation: Seed["navigation"];
  steps: PeoplePleasingStep[];
  dimensions: PeoplePleasingDimension[];
  bands: PeoplePleasingBand[];
  meaningBlocks: typeof meaningBlocks;
  dimensionEditorial: typeof dimensionEditorial;
  increaseBlocks: typeof increaseBlocks;
  reductionBlocks: typeof reductionBlocks;
  nextStepParagraphs: string[];
  nextStepPanel: typeof nextStepPanel;
  faqItems: FaqItem[];
  storyBlock: EditorialStory;
  relatedTools: RelatedPleasingTool[];
  experienceCopy: ExperienceCopy;
  editorialCopy: EditorialCopy;
  resultCopy: ResultCopy;
  heroPreviewResult: PeoplePleasingResult;
  rules: TextReplacementRule[];
};

export type PeoplePleasingFamilyToolSlug = PeoplePleasingFamilyTool["slug"];

const sharedMeta = [
  { icon: "time" as const, label: "2-4 minutes" },
  { icon: "signal" as const, label: "Free tool" },
  { icon: "privacy" as const, label: "Private by design" },
];

const transformOptions = {
  skipKeys: ["key", "value", "field", "id", "kind", "slug", "href", "icon"],
};

function createTool(seed: Seed): PeoplePleasingFamilyTool {
  return {
    slug: seed.slug,
    categorySlug: "boundaries-people-pleasing",
    pageMetadata: seed.pageMetadata,
    toolMetadata: seed.toolMetadata,
    navigation: seed.navigation,
    steps: mapDeepStrings(baseSteps, seed.rules, transformOptions),
    dimensions: mapDeepStrings(peoplePleasingDimensions, seed.rules, transformOptions),
    bands: mapDeepStrings(peoplePleasingBands, seed.rules, transformOptions),
    meaningBlocks: mapDeepStrings(meaningBlocks, seed.rules, transformOptions),
    dimensionEditorial: mapDeepStrings(dimensionEditorial, seed.rules, transformOptions),
    increaseBlocks: mapDeepStrings(increaseBlocks, seed.rules, transformOptions),
    reductionBlocks: mapDeepStrings(reductionBlocks, seed.rules, transformOptions),
    nextStepParagraphs: mapDeepStrings(nextStepParagraphs, seed.rules, transformOptions),
    nextStepPanel: mapDeepStrings(nextStepPanel, seed.rules, transformOptions),
    faqItems: mapDeepStrings(peoplePleasingFaqItems, seed.rules, transformOptions),
    storyBlock: {
      ...mapDeepStrings(peoplePleasingStoryBlock, seed.rules, transformOptions),
      ...seed.storyOverrides,
    },
    relatedTools: seed.relatedTools,
    experienceCopy: seed.experienceCopy,
    editorialCopy: seed.editorialCopy,
    resultCopy: seed.resultCopy,
    heroPreviewResult: mapDeepStrings(baseHeroPreviewResult, seed.rules, transformOptions),
    rules: seed.rules,
  };
}

function makeRelatedTool(
  title: string,
  slug: string,
  description: string,
  category: string,
  minutes: string,
  icon: IconName,
): RelatedPleasingTool {
  return {
    title,
    description,
    category,
    minutes,
    icon,
    href: buildToolHref({
      slug,
      categorySlug: "boundaries-people-pleasing",
    }),
  };
}

const toolSeeds: Seed[] = [
  {
    slug: "approval-dependence-check",
    pageMetadata: {
      title: "Approval Dependence Check - See If Other People’s Approval Is Running Too Much of the Decision",
      description:
        "Use the Approval Dependence Check to see whether external validation, fear of disappointment, or social pressure are making your own position harder to hold.",
      keywords: [
        "approval dependence check",
        "do i rely too much on approval",
        "validation dependence tool",
        "external validation pattern check",
      ],
      openGraphTitle: "Approval Dependence Check",
      openGraphDescription:
        "A premium interactive tool for spotting when validation seeking starts outranking your own internal position.",
      twitterTitle: "Approval Dependence Check",
      twitterDescription:
        "See whether approval pressure is shaping your choices more than your own clear internal signal.",
    },
    toolMetadata: {
      eyebrow: "VALIDATION PATTERN TOOL",
      title: "Approval Dependence Check",
      description:
        "See whether your decisions are being led too strongly by external approval, fear of disappointment, or the need to stay positively received. This tool maps validation dependence as a pressure pattern, not a personality flaw.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Sample Result",
    },
    navigation: {
      ariaLabel: "Approval dependence check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-signal-check" },
        { label: "Insights", href: "#visual-insights" },
        { label: "Meaning", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/People-Pleasing Signal Check/g, "Approval Dependence Check"],
      [/people-pleasing signal check/g, "approval dependence check"],
      [/People-pleasing/g, "Approval dependence"],
      [/people-pleasing/g, "approval dependence"],
      [/approval pressure/g, "validation pressure"],
      [/Approval pressure/g, "Validation pressure"],
      [/approval-led/g, "validation-led"],
      [/Approval-led/g, "Validation-led"],
      [/self-signal/g, "internal signal"],
      [/Self-signal/g, "Internal signal"],
      [/self-override/g, "self-betrayal"],
      [/Self-override/g, "Self-betrayal"],
      [/social pressure/g, "approval pressure"],
      [/social pull/g, "validation pull"],
      [/people pleasing/g, "approval dependence"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive validation check",
      interactiveTitle:
        "A premium approval-pattern reading for the moments when other people’s reactions start carrying too much authority",
      interactiveDescription:
        "One signal at a time. Large controls, live feedback, and deterministic scoring underneath the experience so the result shows whether validation pressure is subtly steering your decisions.",
      sidebarStatusEyebrow: "Check status",
      sidebarStatusDescription:
        "Each answer sharpens the picture by showing whether the pull comes from validation hunger, guilt, over-softening, or the fear of seeming disappointing.",
      sidebarEmergingEyebrow: "Emerging validation read",
      sidebarEmergingFootnote: "Main validation pull",
      footerPending:
        "Answer for the version of you that shows up most often when approval matters, not only for your single hardest interaction.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the approval-pattern report will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Check",
      metaChips: ["Validation pull", "Internal signal", "Private by design"],
      visualEyebrow: "Visual insights section",
      visualTitle:
        "Four views into where validation pressure enters, where your internal position weakens, and what private cost follows later",
      visualDescription:
        "The score is only the surface. These views show the movement of the pattern, the contexts where outside approval starts to outrank your own read, and the later emotional cost that often stays hidden.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "Use the result bands below as a map of validation dependence, not as proof that you are weak, needy, or doing relationships wrong.",
      dimensionsEyebrow: "Pattern architecture",
      dimensionsTitle: "The 4 dimensions of approval dependence",
      dimensionsDescription:
        "These four dimensions separate validation hunger from your internal signal, conflict override, and the cost that tends to arrive after the interaction is over.",
      increaseEyebrow: "What increases the pull",
      increaseTitle: "What tends to intensify approval dependence",
      increaseDescription:
        "Approval dependence usually gets stronger in specific social climates, not in every moment equally.",
      reductionEyebrow: "What reduces the pull",
      reductionTitle: "What helps reduce approval dependence",
      reductionDescription:
        "The goal is not becoming cold. It is learning how to hear your own position before someone else’s reaction outranks it.",
      storyEyebrow: "How this often feels in real life",
      storyTitle: "When being liked starts feeling too expensive",
      storyDescription:
        "Approval dependence often looks polished on the outside while privately making your own position harder to trust.",
      nextEyebrow: "What to do next",
      nextTitle: "What to do next if this feels familiar",
      nextDescription:
        "Use the result as a starting point for strengthening internal position before you try to become more direct under pressure.",
      relatedEyebrow: "Related tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Stay in the same ecosystem and move into nearby tools for confidence, reassurance loops, relationship clarity, and broader people-pleasing drift.",
      faqEyebrow: "Questions after the reading",
      faqTitle: "Approval Dependence Check FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize the issue is not care itself, but how much weight outside approval is carrying.",
      faqIntro:
        "These answers help you read the result more clearly: what approval dependence is, how it differs from kindness, and what helps loosen its grip.",
    },
    resultCopy: {
      sectionEyebrow: "Result reveal section",
      sectionTitle:
        "A premium approval-pattern reading for where validation pressure starts taking up too much of your internal decision space",
      sectionDescription:
        "The score is only the entry point. The more valuable read is what validation driver is strongest, where your internal position softens, and what hidden cost shows up later.",
      scoreLabel: "Approval dependence score",
      primaryLabel: "Primary validation driver",
      weakZoneLabel: "Main dependence zone",
      hiddenCostLabel: "Likely hidden cost",
      standoutLabel: "What stands out",
      costLabel: "Where the private cost likely builds",
      retakeLabel: "Run Again",
    },
    storyOverrides: {
      title: "Approval can start sounding like guidance when your own position is already a little shaky.",
      quote:
        "A person can walk into a conversation knowing what they think, then leave feeling much less sure after reading tone, reaction, or disappointment on someone else's face. Nothing dramatic has to happen. The outside response simply starts carrying more authority than their own read, and the decision becomes harder to hold from the inside.",
      takeaway:
        "That is what this page is trying to make visible: the moment outside approval starts acting like the final vote in a decision that should still belong to you.",
      toneLabel: "Validation moment",
    },
    relatedTools: [
      makeRelatedTool(
        "People-Pleasing Signal Check",
        "people-pleasing-signal-check",
        "See the wider self-signal drift pattern around approval, guilt, and conflict smoothing.",
        "Signal check",
        "3-5 min",
        "insight",
      ),
      makeRelatedTool(
        "Confidence Reset Audit",
        "confidence-reset-audit",
        "Check whether self-trust is thinning underneath the need to stay positively received.",
        "Confidence tool",
        "3-5 min",
        "signal",
      ),
      makeRelatedTool(
        "Reassurance Seeking Decoder",
        "reassurance-seeking-decoder",
        "Explore how external certainty and approval can become part of the same loop.",
        "Decoder",
        "3-5 min",
        "pattern",
      ),
      makeRelatedTool(
        "Relationship Clarity Check",
        "relationship-clarity-check",
        "See whether confusion or mixed signals are increasing your approval sensitivity.",
        "Clarity tool",
        "3-5 min",
        "graph",
      ),
    ],
  },
  {
    slug: "fawning-pattern-check",
    pageMetadata: {
      title: "Fawning Pattern Check - See If Pressure Makes You Appease Too Fast",
      description:
        "Use the Fawning Pattern Check to see whether tension, disappointment, or emotional intensity make you smooth, placate, or comply before checking what is true for you.",
      keywords: [
        "fawning pattern check",
        "do i fawn under pressure",
        "appeasing response tool",
        "conflict appeasing pattern check",
      ],
      openGraphTitle: "Fawning Pattern Check",
      openGraphDescription:
        "A premium interactive tool for spotting when appeasing becomes a reflexive safety move in tense interactions.",
      twitterTitle: "Fawning Pattern Check",
      twitterDescription:
        "See whether your pressure response becomes appeasing, over-softened, or safety-led before you fully notice it.",
    },
    toolMetadata: {
      eyebrow: "SAFETY RESPONSE TOOL",
      title: "Fawning Pattern Check",
      description:
        "See whether pressure, tension, or emotional intensity make you appease too quickly, soften too much, or stay externally smooth at the expense of your own position. This tool maps fawning as a safety response pattern, not a character flaw.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Sample Result",
    },
    navigation: {
      ariaLabel: "Fawning pattern check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-signal-check" },
        { label: "Insights", href: "#visual-insights" },
        { label: "Meaning", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/People-Pleasing Signal Check/g, "Fawning Pattern Check"],
      [/people-pleasing signal check/g, "fawning pattern check"],
      [/people-pleasing/g, "fawning"],
      [/People-pleasing/g, "Fawning"],
      [/approval pressure/g, "safety pressure"],
      [/Approval pressure/g, "Safety pressure"],
      [/approval-led/g, "appease-led"],
      [/Approval-led/g, "Appease-led"],
      [/social pressure/g, "relational threat pressure"],
      [/social pull/g, "appeasing pull"],
      [/self-override/g, "appeasing override"],
      [/Self-override/g, "Appeasing override"],
      [/self-signal/g, "internal cue"],
      [/Self-signal/g, "Internal cue"],
      [/socially smooth/g, "externally safe"],
      [/people pleasing/g, "fawning"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive safety-response check",
      interactiveTitle:
        "A premium fawning-pattern reading for the moments when pressure makes appeasing feel faster than staying fully present to yourself",
      interactiveDescription:
        "One signal at a time. The tool tracks how quickly tension turns into smoothing, over-softening, or compliance so the result feels precise instead of moralizing.",
      sidebarStatusEyebrow: "Check status",
      sidebarStatusDescription:
        "Each answer sharpens the picture by showing whether the pattern is being driven by appeasing reflex, emotional intensity, guilt, or fear of conflict escalation.",
      sidebarEmergingEyebrow: "Emerging safety read",
      sidebarEmergingFootnote: "Main appeasing driver",
      footerPending:
        "Answer for the version of you that appears most often in tense or emotionally charged moments, not only the very worst ones.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the fawning-pattern report will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Check",
      metaChips: ["Appeasing reflex", "Internal cue", "Private by design"],
      visualEyebrow: "Visual insights section",
      visualTitle:
        "Four views into where appeasing starts, where your internal cue gets displaced, and what the later cost tends to be",
      visualDescription:
        "The report shows more than a score. These views map how quickly appeasing takes over, where it happens most, and what private depletion or resentment builds afterward.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "Use the result as a map of a learned pressure response, not as proof that you are weak, fake, or incapable of directness.",
      dimensionsEyebrow: "Pattern architecture",
      dimensionsTitle: "The 4 dimensions of fawning",
      dimensionsDescription:
        "These four dimensions separate the pressure itself from the internal cue, the override sequence, and the later emotional cost.",
      increaseEyebrow: "What intensifies the reflex",
      increaseTitle: "What tends to intensify fawning",
      increaseDescription:
        "Fawning tends to intensify in relationships or environments where smoothness feels safer than honesty.",
      reductionEyebrow: "What reduces the reflex",
      reductionTitle: "What helps reduce fawning",
      reductionDescription:
        "The goal is not becoming colder. It is noticing the appeasing reflex earlier so choice can return before the pattern runs the whole interaction.",
      storyEyebrow: "How this often feels in real life",
      storyTitle: "When safety gets confused with keeping everything smooth",
      storyDescription:
        "Fawning often feels fast, adaptive, and difficult to notice until the interaction is over and your own position feels harder to find.",
      nextEyebrow: "What to do next",
      nextTitle: "What to do next if this feels familiar",
      nextDescription:
        "Use the result to build earlier recognition, not to shame yourself for the protective move your system learned to make.",
      relatedEyebrow: "Related tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Stay in the same ecosystem and move into nearby tools for attachment, communication under tension, emotional triggers, and broader self-signal drift.",
      faqEyebrow: "Questions after the reading",
      faqTitle: "Fawning Pattern Check FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize the issue may be appeasing under pressure rather than simply being 'too nice.'",
      faqIntro:
        "These answers help clarify what fawning is, when it is likely to appear, and how to work with it without turning the whole topic into self-blame.",
    },
    resultCopy: {
      sectionEyebrow: "Result reveal section",
      sectionTitle:
        "A premium fawning-pattern reading for where appeasing starts outranking what is actually true for you in the moment",
      sectionDescription:
        "The deeper value is seeing what intensifies the safety reflex, where it appears most quickly, and what it costs you afterward.",
      scoreLabel: "Fawning pattern score",
      primaryLabel: "Primary appeasing driver",
      weakZoneLabel: "Main fawning zone",
      hiddenCostLabel: "Likely hidden cost",
      standoutLabel: "What stands out",
      costLabel: "Where the private cost likely builds",
      retakeLabel: "Run Again",
    },
    storyOverrides: {
      title: "The body can move into appeasing before the mind has fully caught up.",
      quote:
        "This often shows up in tense moments when the person starts smoothing, agreeing, or calming the room before they have even checked what they really feel. The reflex can look polite from the outside. Inside, it often feels like self-protection moved first and honesty arrived later.",
      takeaway:
        "That is the pattern this page helps surface: the point where safety becomes so important that your own position gets edited out of the first response.",
      toneLabel: "Safety moment",
    },
    relatedTools: [
      makeRelatedTool(
        "People-Pleasing Signal Check",
        "people-pleasing-signal-check",
        "See the broader self-signal drift pattern that fawning can live inside.",
        "Signal check",
        "3-5 min",
        "insight",
      ),
      makeRelatedTool(
        "Attachment Pattern Spotter",
        "attachment-pattern-spotter",
        "Explore whether proximity needs or safety strategies are shaping the appeasing reflex.",
        "Profile",
        "3-5 min",
        "pattern",
      ),
      makeRelatedTool(
        "Communication Style Mirror",
        "communication-style-mirror",
        "Check how tension changes tone, clarity, and directness in difficult conversations.",
        "Mirror",
        "3-5 min",
        "graph",
      ),
      makeRelatedTool(
        "Emotional Trigger Decoder",
        "emotional-trigger-decoder",
        "Map what tends to activate the reflex before it turns into appeasing behavior.",
        "Decoder",
        "3-5 min",
        "signal",
      ),
    ],
  },
  {
    slug: "over-accommodation-check",
    pageMetadata: {
      title: "Over-Accommodation Check - See If You Keep Adjusting Past Your Own Limit",
      description:
        "Use the Over-Accommodation Check to see whether you are over-adjusting, over-explaining, or over-softening in ways that quietly make your own needs harder to hold.",
      keywords: [
        "over-accommodation check",
        "do i adjust too much to others",
        "over accommodating pattern tool",
        "over adjusting in relationships check",
      ],
      openGraphTitle: "Over-Accommodation Check",
      openGraphDescription:
        "A premium interactive tool for spotting when flexibility becomes chronic over-adjustment.",
      twitterTitle: "Over-Accommodation Check",
      twitterDescription:
        "See whether flexibility is turning into chronic over-adjustment that keeps costing you later.",
    },
    toolMetadata: {
      eyebrow: "RELATIONAL ADJUSTMENT TOOL",
      title: "Over-Accommodation Check",
      description:
        "See whether flexibility, smoothness, or helpfulness are turning into chronic over-adjustment. This tool maps where you adapt too far, too fast, or too often before checking what the situation is costing you.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Sample Result",
    },
    navigation: {
      ariaLabel: "Over-accommodation check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-signal-check" },
        { label: "Insights", href: "#visual-insights" },
        { label: "Meaning", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/People-Pleasing Signal Check/g, "Over-Accommodation Check"],
      [/people-pleasing signal check/g, "over-accommodation check"],
      [/people-pleasing/g, "over-accommodation"],
      [/People-pleasing/g, "Over-accommodation"],
      [/approval pressure/g, "adjustment pressure"],
      [/Approval pressure/g, "Adjustment pressure"],
      [/approval-led/g, "adjustment-led"],
      [/Approval-led/g, "Adjustment-led"],
      [/self-override/g, "over-adjustment"],
      [/Self-override/g, "Over-adjustment"],
      [/self-signal/g, "own-position signal"],
      [/Self-signal/g, "Own-position signal"],
      [/social pressure/g, "relational pressure"],
      [/social pull/g, "adjustment pull"],
      [/people pleasing/g, "over-accommodation"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive adjustment check",
      interactiveTitle:
        "A premium over-accommodation reading for the moments when staying flexible starts costing more than it gives back",
      interactiveDescription:
        "One signal at a time. The experience maps where you adapt too quickly, soften too much, or keep the interaction smooth at the expense of your own position.",
      sidebarStatusEyebrow: "Check status",
      sidebarStatusDescription:
        "Each answer sharpens the picture by showing whether the main issue is over-adjustment, guilt, conflict smoothing, or the fear of making things harder for someone else.",
      sidebarEmergingEyebrow: "Emerging adjustment read",
      sidebarEmergingFootnote: "Main over-adjustment driver",
      footerPending:
        "Answer for how you tend to act in recurring relationships or environments, not only for the single moment you regret most.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the over-accommodation report will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Check",
      metaChips: ["Adjustment pull", "Own-position signal", "Private by design"],
      visualEyebrow: "Visual insights section",
      visualTitle:
        "Four views into where over-adjustment enters, where your own position softens, and what later cost quietly accumulates",
      visualDescription:
        "These views show the movement of the pattern, the contexts where over-adjustment is most active, and what private depletion or resentment tends to follow.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "Use the result as a map of chronic over-adjustment, not as proof that being flexible or considerate is automatically a problem.",
      dimensionsEyebrow: "Pattern architecture",
      dimensionsTitle: "The 4 dimensions of over-accommodation",
      dimensionsDescription:
        "These four dimensions separate the external pull itself from your own-position signal, the adjustment sequence, and the later cost it leaves behind.",
      increaseEyebrow: "What intensifies the pattern",
      increaseTitle: "What tends to intensify over-accommodation",
      increaseDescription:
        "Over-accommodation often intensifies where flexibility is rewarded and self-advocacy feels awkward, risky, or disruptive.",
      reductionEyebrow: "What reduces the pattern",
      reductionTitle: "What helps reduce over-accommodation",
      reductionDescription:
        "The goal is not becoming rigid. It is learning how to adjust with choice instead of automatically disappearing into the needs of the situation.",
      storyEyebrow: "How this often feels in real life",
      storyTitle: "When flexibility keeps sliding into self-erasure",
      storyDescription:
        "Over-accommodation often looks generous or easygoing from the outside while privately leaving a residue of depletion, irritation, or invisibility.",
      nextEyebrow: "What to do next",
      nextTitle: "What to do next if this feels familiar",
      nextDescription:
        "Use the result to strengthen your own-position signal before you try to fix the pattern with more effort alone.",
      relatedEyebrow: "Related tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Stay in the same ecosystem and move into adjacent tools for people-pleasing drift, resentment buildup, communication clarity, and confidence repair.",
      faqEyebrow: "Questions after the reading",
      faqTitle: "Over-Accommodation Check FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize flexibility has turned into chronic self-adjustment.",
      faqIntro:
        "These answers help clarify what over-accommodation is, why it builds, and how to start interrupting it without becoming unnecessarily hard.",
    },
    resultCopy: {
      sectionEyebrow: "Result reveal section",
      sectionTitle:
        "A premium over-accommodation reading for where relational flexibility starts slipping into chronic over-adjustment",
      sectionDescription:
        "The report shows more than a score. It shows what is feeding the adjustment pattern, where it appears most, and what later cost your system absorbs.",
      scoreLabel: "Over-accommodation score",
      primaryLabel: "Primary adjustment driver",
      weakZoneLabel: "Main over-adjustment zone",
      hiddenCostLabel: "Likely hidden cost",
      standoutLabel: "What stands out",
      costLabel: "Where the private cost likely builds",
      retakeLabel: "Run Again",
    },
    storyOverrides: {
      title: "Adjusting can feel kind in the moment and costly a little later.",
      quote:
        "This can look like a person who keeps adapting because they want things to go smoothly. They shift the plan, soften the need, take the extra step, and tell themselves it is not a big deal. Later, the hidden cost appears as heaviness, quiet irritation, or the sense that they have bent too far again without noticing it in time.",
      takeaway:
        "That is the real value of this page: showing where flexibility stops being generous and starts becoming too expensive.",
      toneLabel: "Adjustment pattern",
    },
    relatedTools: [
      makeRelatedTool(
        "People-Pleasing Signal Check",
        "people-pleasing-signal-check",
        "See the broader self-signal drift pattern behind chronic over-adjustment.",
        "Signal check",
        "3-5 min",
        "insight",
      ),
      makeRelatedTool(
        "Resentment Buildup Tracker",
        "resentment-buildup-tracker",
        "Check whether repeated over-adjustment is leaving too much unspoken cost behind.",
        "Tracker",
        "3-5 min",
        "pattern",
      ),
      makeRelatedTool(
        "Communication Style Mirror",
        "communication-style-mirror",
        "See how directness, softness, and repair shift once conversations get harder.",
        "Mirror",
        "3-5 min",
        "graph",
      ),
      makeRelatedTool(
        "Confidence Reset Audit",
        "confidence-reset-audit",
        "Check whether over-adjustment is quietly weakening self-trust.",
        "Audit",
        "3-5 min",
        "signal",
      ),
    ],
  },
  {
    slug: "self-abandonment-pattern-check",
    pageMetadata: {
      title: "Self-Abandonment Pattern Check - See If You Leave Yourself Too Quickly Under Pressure",
      description:
        "Use the Self-Abandonment Pattern Check to see whether pressure, guilt, or other people’s needs make you disconnect from your own position too quickly.",
      keywords: [
        "self abandonment pattern check",
        "am i abandoning myself",
        "self abandonment in relationships tool",
        "self leaving pattern check",
      ],
      openGraphTitle: "Self-Abandonment Pattern Check",
      openGraphDescription:
        "A premium interactive tool for spotting when your own needs, limits, and internal signal get left behind too quickly.",
      twitterTitle: "Self-Abandonment Pattern Check",
      twitterDescription:
        "See whether pressure is making you leave your own position too quickly in order to keep the situation going smoothly.",
    },
    toolMetadata: {
      eyebrow: "SELF-CONTACT TOOL",
      title: "Self-Abandonment Pattern Check",
      description:
        "See whether pressure, guilt, urgency, or other people’s needs make you leave your own position too quickly. This tool maps self-abandonment as a pattern of disconnection from your own signal, not as a flaw in your character.",
      metadata: sharedMeta,
      primaryCta: "Start Check",
      secondaryCta: "See Sample Result",
    },
    navigation: {
      ariaLabel: "Self-abandonment pattern check sections",
      ctaLabel: "Start Check",
      items: [
        { label: "Check", href: "#interactive-signal-check" },
        { label: "Insights", href: "#visual-insights" },
        { label: "Meaning", href: "#what-this-result-usually-means" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    rules: [
      [/People-Pleasing Signal Check/g, "Self-Abandonment Pattern Check"],
      [/people-pleasing signal check/g, "self-abandonment pattern check"],
      [/people-pleasing/g, "self-abandonment"],
      [/People-pleasing/g, "Self-abandonment"],
      [/approval pressure/g, "self-leaving pressure"],
      [/Approval pressure/g, "Self-leaving pressure"],
      [/approval-led/g, "self-leaving"],
      [/Approval-led/g, "Self-leaving"],
      [/self-signal/g, "self-contact"],
      [/Self-signal/g, "Self-contact"],
      [/self-override/g, "self-leaving"],
      [/Self-override/g, "Self-leaving"],
      [/social pressure/g, "relational pressure"],
      [/social pull/g, "other-directed pull"],
      [/people pleasing/g, "self-abandonment"],
    ],
    experienceCopy: {
      interactiveEyebrow: "Interactive self-contact check",
      interactiveTitle:
        "A premium self-abandonment reading for the moments when pressure makes it easier to leave yourself than stay connected to what is true",
      interactiveDescription:
        "One signal at a time. The tool tracks where self-contact drops, what pressure is causing it, and what later cost appears after you have moved away from your own position.",
      sidebarStatusEyebrow: "Check status",
      sidebarStatusDescription:
        "Each answer sharpens the picture by showing whether the pattern is being driven by guilt, urgency, external need, conflict smoothing, or low permission to remain with yourself.",
      sidebarEmergingEyebrow: "Emerging self-contact read",
      sidebarEmergingFootnote: "Main self-leaving driver",
      footerPending:
        "Answer for the version of you that appears most often when your needs and someone else’s needs start competing for space.",
      footerComplete:
        "Result unlocked. You can still adjust any answer and the self-abandonment report will redraw immediately.",
      nextLabel: "Next Signal",
      revealLabel: "Reveal Check",
      metaChips: ["Self-contact", "Other-directed pull", "Private by design"],
      visualEyebrow: "Visual insights section",
      visualTitle:
        "Four views into where self-contact weakens, where other-directed pressure takes over, and what cost follows afterward",
      visualDescription:
        "The report shows where the pattern starts, which contexts intensify it most, and what hidden exhaustion or resentment can build when your own signal keeps getting left behind.",
    },
    editorialCopy: {
      meaningEyebrow: "Reading the pattern",
      meaningTitle: "What this result usually means",
      meaningDescription:
        "Use the result as a map of losing contact with yourself under pressure, not as proof that your needs are unreasonable or too hard to hold.",
      dimensionsEyebrow: "Pattern architecture",
      dimensionsTitle: "The 4 dimensions of self-abandonment",
      dimensionsDescription:
        "These four dimensions separate the external pressure itself from self-contact, the override sequence, and the later emotional cost.",
      increaseEyebrow: "What intensifies the pattern",
      increaseTitle: "What tends to intensify self-abandonment",
      increaseDescription:
        "Self-abandonment often intensifies where guilt, urgency, or relational fragility make your own position feel negotiable before the interaction has even fully started.",
      reductionEyebrow: "What reduces the pattern",
      reductionTitle: "What helps reduce self-abandonment",
      reductionDescription:
        "The goal is not to stop caring about other people. It is to remain connected enough to yourself that care does not require self-leaving.",
      storyEyebrow: "How this often feels in real life",
      storyTitle: "When staying connected to yourself feels strangely harder than helping someone else",
      storyDescription:
        "Self-abandonment often feels subtle from the inside. It is easy to notice only after the interaction is over and your own needs feel far away or oddly inaccessible.",
      nextEyebrow: "What to do next",
      nextTitle: "What to do next if this feels familiar",
      nextDescription:
        "Use the result to rebuild earlier self-contact rather than trying to brute-force better boundaries after the pattern has already run.",
      relatedEyebrow: "Related tools",
      relatedTitle: "Related tools",
      relatedDescription:
        "Stay in the same ecosystem and move into nearby tools for confidence repair, relationship clarity, resentment buildup, and broader self-signal drift.",
      faqEyebrow: "Questions after the reading",
      faqTitle: "Self-Abandonment Pattern Check FAQ",
      faqDescription:
        "Useful answers for the questions people usually have once they realize the issue may be disconnecting from themselves too quickly under pressure.",
      faqIntro:
        "These answers help clarify what self-abandonment is, why it often looks subtle, and what supports staying connected to yourself more consistently.",
    },
    resultCopy: {
      sectionEyebrow: "Result reveal section",
      sectionTitle:
        "A premium self-abandonment reading for where your own position keeps getting left behind under pressure",
      sectionDescription:
        "The report shows more than a score. It shows what is feeding the self-leaving pattern, where it appears fastest, and what hidden cost follows afterward.",
      scoreLabel: "Self-abandonment score",
      primaryLabel: "Primary self-leaving driver",
      weakZoneLabel: "Main self-leaving zone",
      hiddenCostLabel: "Likely hidden cost",
      standoutLabel: "What stands out",
      costLabel: "Where the private cost likely builds",
      retakeLabel: "Run Again",
    },
    storyOverrides: {
      title: "Sometimes the first thing that disappears under pressure is your own position.",
      quote:
        "The moment gets tense, someone else needs something, or guilt enters the room, and the person stops checking what is true for them. They move straight into coping, fixing, or accommodating. From the outside it may look caring. Inside, it often leaves a quiet feeling of having left themselves behind just to get through the moment cleanly.",
      takeaway:
        "That is what this page is meant to clarify: where self-connection drops out before the interaction is even over.",
      toneLabel: "Self-contact signal",
    },
    relatedTools: [
      makeRelatedTool(
        "People-Pleasing Signal Check",
        "people-pleasing-signal-check",
        "See the broader pattern of self-signal drift that self-abandonment often lives inside.",
        "Signal check",
        "3-5 min",
        "insight",
      ),
      makeRelatedTool(
        "Confidence Reset Audit",
        "confidence-reset-audit",
        "Check whether repeated self-leaving is quietly weakening self-trust.",
        "Audit",
        "3-5 min",
        "signal",
      ),
      makeRelatedTool(
        "Relationship Clarity Check",
        "relationship-clarity-check",
        "See whether confusion, mixed signals, or uncertainty are intensifying self-leaving.",
        "Clarity tool",
        "3-5 min",
        "graph",
      ),
      makeRelatedTool(
        "Resentment Buildup Tracker",
        "resentment-buildup-tracker",
        "Map the private cost that can accumulate when you keep leaving your own position behind.",
        "Tracker",
        "3-5 min",
        "pattern",
      ),
    ],
  },
];

export const peoplePleasingFamilyToolRegistry = Object.fromEntries(
  toolSeeds.map((seed) => {
    const tool = createTool(seed);
    return [tool.slug, tool];
  }),
) as Record<PeoplePleasingFamilyToolSlug, PeoplePleasingFamilyTool>;

export function calculatePeoplePleasingFamilyResult(
  slug: PeoplePleasingFamilyToolSlug,
  answers: PeoplePleasingAnswers,
): PeoplePleasingResult {
  const tool = peoplePleasingFamilyToolRegistry[slug];
  return mapDeepStrings(
    calculateBasePeoplePleasingResult(answers),
    tool.rules,
    transformOptions,
  ) as PeoplePleasingResult;
}

export {
  getInitialPeoplePleasingAnswers as getInitialPeoplePleasingFamilyAnswers,
  isPeoplePleasingStepComplete,
};
