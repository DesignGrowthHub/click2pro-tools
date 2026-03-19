import type { EditorialStory } from "@/components/tools/editorial-story-card";
import type { IconName } from "./tools-home";

export type BurnoutFamilySingleChoiceField =
  | "loadFrequency"
  | "switchOff"
  | "restoration"
  | "dailyHeaviness"
  | "earlySignal"
  | "recoverySpeed"
  | "pressureResponse"
  | "selfRead"
  | "hardestPart"
  | "currentState";

export type BurnoutFamilySliderField =
  | "endReserve"
  | "clarityDrop"
  | "capacityDrop"
  | "hiddenLoad";

export type BurnoutFamilyMultiSelectField = "sources";

export type BurnoutFamilyFieldKey =
  | BurnoutFamilySingleChoiceField
  | BurnoutFamilySliderField
  | BurnoutFamilyMultiSelectField;

export type BurnoutFamilyVariant = "cards" | "segments" | "visual" | "statement";

export type BurnoutFamilyChoiceOption = {
  value: string;
  label: string;
  description?: string;
  accent?: string;
};

export type BurnoutFamilyAnswers = {
  loadFrequency?: string;
  endReserve?: number;
  switchOff?: string;
  restoration?: string;
  dailyHeaviness?: string;
  sources: string[];
  earlySignal?: string;
  recoverySpeed?: string;
  clarityDrop?: number;
  capacityDrop?: number;
  pressureResponse?: string;
  hiddenLoad?: number;
  selfRead?: string;
  hardestPart?: string;
  currentState?: string;
};

type BaseStep = {
  id: string;
  step: number;
  eyebrow: string;
  question: string;
  hint: string;
};

export type BurnoutFamilySingleChoiceStep = BaseStep & {
  kind: "single-choice";
  field: BurnoutFamilySingleChoiceField;
  variant: BurnoutFamilyVariant;
  options: BurnoutFamilyChoiceOption[];
};

export type BurnoutFamilySliderStep = BaseStep & {
  kind: "slider";
  field: BurnoutFamilySliderField;
  label: string;
  minLabel: string;
  maxLabel: string;
  scaleHint: string;
};

export type BurnoutFamilyMultiSelectStep = BaseStep & {
  kind: "multi-select";
  field: "sources";
  limit: number;
  options: BurnoutFamilyChoiceOption[];
};

export type BurnoutFamilyStep =
  | BurnoutFamilySingleChoiceStep
  | BurnoutFamilySliderStep
  | BurnoutFamilyMultiSelectStep;

export type BurnoutFamilyBand = {
  key: string;
  min: number;
  max: number;
  title: string;
  summary: string;
  interpretation: string;
  standoutLead: string;
  nextStepLead: string;
  signalTone: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

export type BurnoutFamilyDimension = {
  key: string;
  label: string;
  description: string;
  icon: IconName;
  accent: string;
};

export type BurnoutFamilySourceBucketKey =
  | "demand"
  | "emotional"
  | "rest"
  | "relational"
  | "cognitive";

export type BurnoutFamilySourceBucket = {
  key: BurnoutFamilySourceBucketKey;
  label: string;
  accent: string;
};

export type BurnoutFamilySourceSplit = BurnoutFamilySourceBucket & {
  value: number;
};

export type BurnoutFamilyResult = {
  score: number;
  band: BurnoutFamilyBand;
  completionRatio: number;
  isComplete: boolean;
  dimensions: Record<string, number>;
  recoveryCapacity: number;
  recoveryGap: number;
  sourceSplit: BurnoutFamilySourceSplit[];
  dominantDimensions: BurnoutFamilyDimension[];
  dominantSources: BurnoutFamilySourceSplit[];
  signalLabel: string;
  interpretation: string;
  standout: string;
  nextStep: string;
  alignmentNote: string;
  currentStateValue: number | null;
};

export type BurnoutFamilyRelatedTool = {
  title: string;
  description: string;
  category: string;
  minutes: string;
  icon: IconName;
  href: string;
};

export type BurnoutFamilyFaqItem = {
  question: string;
  answer: string;
};

export type BurnoutFamilyEditorialBlock = {
  title: string;
  paragraphs: string[];
};

export type BurnoutFamilyContentCard = {
  title: string;
  body: string;
};

export type BurnoutFamilyDimensionEditorial = {
  key: string;
  paragraphs: string[];
};

export type BurnoutFamilyNextStepPanel = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export type BurnoutFamilyPageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type BurnoutFamilyToolMetadata = {
  eyebrow: string;
  title: string;
  description: string;
  metadata: Array<{ icon: IconName; label: string }>;
  primaryCta: string;
  secondaryCta: string;
};

export type BurnoutFamilyExperienceCopy = {
  sectionTitle: string;
  sectionDescription: string;
  progressEyebrow: string;
  sidebarStatusEyebrow: string;
  sidebarStatusTitle: string;
  sidebarStatusDescription: string;
  sidebarEmergingEyebrow: string;
  sidebarEmergingDescription: string;
  footerPending: string;
  footerComplete: string;
  revealLabel: string;
  metaChips: string[];
};

export type BurnoutFamilyResultCopy = {
  sectionTitle: string;
  sectionDescription: string;
  reportLabel: string;
  scoreLabel: string;
  standoutLabel: string;
  nextStepLabel: string;
  retakeLabel: string;
};

export type BurnoutFamilyVisualCopy = {
  sectionTitle: string;
  sectionDescription: string;
  dial: {
    eyebrow: string;
    title: string;
    copy: string;
    label: string;
    caption: string;
  };
  signalBars: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  recovery: {
    eyebrow: string;
    title: string;
    copy: string;
    loadLabel: string;
    recoveryLabel: string;
    gapLabel: string;
    gapInsight: (result: BurnoutFamilyResult) => string;
  };
  sourceSplit: {
    eyebrow: string;
    title: string;
    copy: string;
    insight: (result: BurnoutFamilyResult) => string;
  };
};

export type BurnoutFamilyEditorialCopy = {
  meaningEyebrow: string;
  meaningTitle: string;
  meaningDescription: string;
  dimensionsEyebrow: string;
  dimensionsTitle: string;
  dimensionsDescription: string;
  riskEyebrow: string;
  riskTitle: string;
  riskDescription: string;
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

type DimensionContributor =
  | {
      kind: "choice";
      field: BurnoutFamilySingleChoiceField;
      weight: number;
    }
  | {
      kind: "slider";
      field: BurnoutFamilySliderField;
      weight: number;
      invert?: boolean;
    }
  | {
      kind: "source";
      bucket: BurnoutFamilySourceBucketKey;
      weight: number;
    };

type ResultTextContext = {
  score: number;
  band: BurnoutFamilyBand;
  topDimension: BurnoutFamilyDimension;
  secondDimension: BurnoutFamilyDimension;
  topSource: BurnoutFamilySourceSplit | undefined;
  sourcePhrase: string;
  difference: number | null;
};

export type BurnoutFamilyTool = {
  slug: string;
  categorySlug: string;
  pageMetadata: BurnoutFamilyPageMetadata;
  toolMetadata: BurnoutFamilyToolMetadata;
  experienceCopy: BurnoutFamilyExperienceCopy;
  resultCopy: BurnoutFamilyResultCopy;
  visualCopy: BurnoutFamilyVisualCopy;
  editorialCopy: BurnoutFamilyEditorialCopy;
  bands: BurnoutFamilyBand[];
  dimensions: BurnoutFamilyDimension[];
  sourceBuckets: BurnoutFamilySourceBucket[];
  steps: BurnoutFamilyStep[];
  choiceScores: Partial<Record<BurnoutFamilySingleChoiceField, Record<string, number>>>;
  sourceOptionScores: Record<string, number>;
  sourceBucketMap: Record<string, BurnoutFamilySourceBucketKey>;
  scoringWeights: Record<BurnoutFamilyFieldKey, number>;
  dimensionFormulas: Record<string, DimensionContributor[]>;
  meaningBlocks: BurnoutFamilyEditorialBlock[];
  dimensionEditorial: BurnoutFamilyDimensionEditorial[];
  riskBlocks: BurnoutFamilyContentCard[];
  reductionBlocks: BurnoutFamilyContentCard[];
  storyBlock: EditorialStory;
  nextStepParagraphs: string[];
  nextStepPanel: BurnoutFamilyNextStepPanel;
  relatedTools: BurnoutFamilyRelatedTool[];
  faqItems: BurnoutFamilyFaqItem[];
  heroPreviewAnswers: Partial<BurnoutFamilyAnswers>;
  resultText: {
    signalLabel: (context: ResultTextContext) => string;
    standout: (context: ResultTextContext) => string;
    nextStep: (context: ResultTextContext) => string;
    alignmentNote: (context: ResultTextContext) => string;
  };
};

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function weightedAverage(values: Array<{ value?: number; weight: number }>) {
  const active = values.filter((item) => typeof item.value === "number") as Array<{
    value: number;
    weight: number;
  }>;

  if (!active.length) {
    return 0;
  }

  const totalWeight = active.reduce((sum, item) => sum + item.weight, 0);
  const weightedTotal = active.reduce((sum, item) => sum + item.value * item.weight, 0);

  return clampScore(weightedTotal / totalWeight);
}

function getBand(bands: BurnoutFamilyBand[], score: number) {
  return bands.find((band) => score >= band.min && score <= band.max) ?? bands[0];
}

function sliderToSeverity(field: BurnoutFamilySliderField, value?: number) {
  if (typeof value !== "number") {
    return undefined;
  }

  return field === "endReserve" ? clampScore(100 - value) : clampScore(value);
}

function getChoiceScore(
  tool: BurnoutFamilyTool,
  field: BurnoutFamilySingleChoiceField,
  value?: string,
) {
  if (!value) {
    return undefined;
  }

  return tool.choiceScores[field]?.[value];
}

function getSourceScore(tool: BurnoutFamilyTool, values: string[]) {
  if (!values.length) {
    return undefined;
  }

  const weightedValues = values.map((value) => tool.sourceOptionScores[value] ?? 50);
  return clampScore(average(weightedValues));
}

function buildSourceSplit(tool: BurnoutFamilyTool, values: string[]) {
  const counts = tool.sourceBuckets.reduce<Record<BurnoutFamilySourceBucketKey, number>>(
    (accumulator, bucket) => ({ ...accumulator, [bucket.key]: 0 }),
    {
      demand: 0,
      emotional: 0,
      rest: 0,
      relational: 0,
      cognitive: 0,
    },
  );

  for (const value of values) {
    const bucketKey = tool.sourceBucketMap[value];

    if (bucketKey) {
      counts[bucketKey] += 1;
    }
  }

  const divisor = values.length || tool.sourceBuckets.length;

  return tool.sourceBuckets.map((bucket) => ({
    ...bucket,
    value: clampScore((100 * (values.length ? counts[bucket.key] : 1)) / divisor),
  }));
}

export function getInitialBurnoutFamilyAnswers(): BurnoutFamilyAnswers {
  return {
    sources: [],
  };
}

export function isBurnoutFamilyStepComplete(
  step: BurnoutFamilyStep,
  answers: BurnoutFamilyAnswers,
) {
  if (step.kind === "slider") {
    return typeof answers[step.field] === "number";
  }

  if (step.kind === "multi-select") {
    return answers[step.field].length > 0;
  }

  return Boolean(answers[step.field]);
}

export function calculateBurnoutFamilyResult(
  tool: BurnoutFamilyTool,
  answers: BurnoutFamilyAnswers,
): BurnoutFamilyResult {
  const fieldScores: Partial<Record<BurnoutFamilyFieldKey, number>> = {
    loadFrequency: getChoiceScore(tool, "loadFrequency", answers.loadFrequency),
    endReserve: sliderToSeverity("endReserve", answers.endReserve),
    switchOff: getChoiceScore(tool, "switchOff", answers.switchOff),
    restoration: getChoiceScore(tool, "restoration", answers.restoration),
    dailyHeaviness: getChoiceScore(tool, "dailyHeaviness", answers.dailyHeaviness),
    sources: getSourceScore(tool, answers.sources),
    earlySignal: getChoiceScore(tool, "earlySignal", answers.earlySignal),
    recoverySpeed: getChoiceScore(tool, "recoverySpeed", answers.recoverySpeed),
    clarityDrop: sliderToSeverity("clarityDrop", answers.clarityDrop),
    capacityDrop: sliderToSeverity("capacityDrop", answers.capacityDrop),
    pressureResponse: getChoiceScore(tool, "pressureResponse", answers.pressureResponse),
    hiddenLoad: sliderToSeverity("hiddenLoad", answers.hiddenLoad),
    selfRead: getChoiceScore(tool, "selfRead", answers.selfRead),
    hardestPart: getChoiceScore(tool, "hardestPart", answers.hardestPart),
    currentState: getChoiceScore(tool, "currentState", answers.currentState),
  };

  const scoredEntries = Object.entries(tool.scoringWeights).map(([field, weight]) => ({
    value: fieldScores[field as BurnoutFamilyFieldKey],
    weight,
  }));

  const answeredWeight = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.weight : 0),
    0,
  );
  const weightedTotal = scoredEntries.reduce(
    (sum, entry) => sum + (typeof entry.value === "number" ? entry.value * entry.weight : 0),
    0,
  );

  const score = answeredWeight ? clampScore(weightedTotal / answeredWeight) : 0;
  const band = getBand(tool.bands, score);
  const completionRatio = answeredWeight
    ? answeredWeight / Object.values(tool.scoringWeights).reduce((sum, value) => sum + value, 0)
    : 0;

  const sourceSplit = buildSourceSplit(tool, answers.sources);
  const sourceValueMap = Object.fromEntries(sourceSplit.map((bucket) => [bucket.key, bucket.value])) as Record<
    BurnoutFamilySourceBucketKey,
    number
  >;

  const dimensions = Object.fromEntries(
    tool.dimensions.map((dimension) => {
      const contributors = tool.dimensionFormulas[dimension.key] ?? [];

      const value = weightedAverage(
        contributors.map((contributor) => {
          if (contributor.kind === "choice") {
            return {
              value: fieldScores[contributor.field],
              weight: contributor.weight,
            };
          }

          if (contributor.kind === "slider") {
            const rawValue = answers[contributor.field];
            const sliderValue =
              typeof rawValue === "number"
                ? contributor.invert
                  ? clampScore(100 - rawValue)
                  : clampScore(rawValue)
                : undefined;

            return {
              value: sliderValue,
              weight: contributor.weight,
            };
          }

          return {
            value: sourceValueMap[contributor.bucket],
            weight: contributor.weight,
          };
        }),
      );

      return [dimension.key, value];
    }),
  ) as Record<string, number>;

  const resourceDimension = tool.dimensions[0];
  const recoveryDimension = tool.dimensions[1] ?? tool.dimensions[0];

  const recoveryCapacity = clampScore(
    100 -
      weightedAverage([
        { value: dimensions[resourceDimension.key], weight: 0.46 },
        { value: dimensions[recoveryDimension.key], weight: 0.54 },
      ]),
  );
  const recoveryGap = clampScore(Math.max(0, score - recoveryCapacity));

  const dominantDimensions = [...tool.dimensions].sort(
    (left, right) => dimensions[right.key] - dimensions[left.key],
  );
  const dominantSources = [...sourceSplit].sort((left, right) => right.value - left.value);

  const topDimension = dominantDimensions[0] ?? tool.dimensions[0];
  const secondDimension = dominantDimensions[1] ?? dominantDimensions[0] ?? tool.dimensions[0];
  const topSources = dominantSources
    .filter((bucket) => bucket.value > 0)
    .slice(0, 2)
    .map((bucket) => bucket.label.toLowerCase());

  const sourcePhrase =
    topSources.length === 0
      ? "general load"
      : topSources.length === 1
        ? topSources[0]
        : `${topSources[0]} and ${topSources[1]}`;

  const currentStateValue =
    typeof fieldScores.currentState === "number" ? fieldScores.currentState : null;
  const difference = currentStateValue === null ? null : currentStateValue - score;

  const context: ResultTextContext = {
    score,
    band,
    topDimension,
    secondDimension,
    topSource: dominantSources[0],
    sourcePhrase,
    difference,
  };

  return {
    score,
    band,
    completionRatio,
    isComplete: completionRatio === 1,
    dimensions,
    recoveryCapacity,
    recoveryGap,
    sourceSplit,
    dominantDimensions,
    dominantSources,
    signalLabel: tool.resultText.signalLabel(context),
    interpretation: `${band.summary} ${band.interpretation}`,
    standout: tool.resultText.standout(context),
    nextStep: tool.resultText.nextStep(context),
    alignmentNote: tool.resultText.alignmentNote(context),
    currentStateValue,
  };
}
