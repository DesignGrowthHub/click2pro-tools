import { toolClusterMap, type ToolClusterSlug } from "../tool-clusters";
import {
  TOOL_REGISTRY,
  type ToolRegistryCategory,
  type ToolRegistryEntry,
} from "../tool-registry";
import { liveToolMap, liveToolSlugs } from "../tools-home";
import {
  INFOGRAPHIC_FAMILY_FALLBACKS,
  normalizeCaptionForFamily,
  normalizeLabelForFamily,
  normalizeSectionForFamily,
  validateInfographicSection,
  type FamilyContentBudget,
} from "./layout-engine";
import {
  CLUSTER_INFOGRAPHIC_LEXICON,
  TERM_LABEL_OVERRIDES,
  TOOL_TITLE_SUFFIXES,
} from "./topic-lexicon";
import {
  TOOL_INFOGRAPHIC_GENERATOR_VERSION,
  type LoopCyclePayload,
  type PathwaySequencePayload,
  type PressureStackPayload,
  type SignalClusterPayload,
  type ToolInfographicBundle,
  type ToolInfographicBundleMap,
  type ToolInfographicFamily,
  type ToolInfographicNode,
  type ToolInfographicSection,
} from "./schema";

type ToolTopicRecord = ToolRegistryEntry & {
  cluster: ToolClusterSlug;
  categorySlug: string;
  description: string;
};

type TopicContext = {
  record: ToolTopicRecord;
  subjectLabel: string;
  subjectLower: string;
  focusLabel: string;
  focusLower: string;
  seed: number;
  specificTerms: string[];
  clusterTerms: string[];
  leadTerms: string[];
  fallbackSignals: string[];
};

const CATEGORY_BASE_TAGS: Record<ToolRegistryCategory, readonly string[]> = {
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

const registryBySlug = Object.fromEntries(
  TOOL_REGISTRY.map((entry) => [entry.slug, entry]),
) as Record<string, ToolRegistryEntry>;

function stableHash(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function sentenceCase(value: string) {
  if (!value) {
    return value;
  }

  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function humanizePhrase(value: string) {
  const cleaned = value
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (!cleaned) {
    return "";
  }

  return sentenceCase(TERM_LABEL_OVERRIDES[cleaned] ?? cleaned);
}

function normalizeForSentence(value: string) {
  return humanizePhrase(value).toLowerCase();
}

function compactLabel(value: string, fallback: string) {
  const normalized = humanizePhrase(value);

  if (!normalized) {
    return fallback;
  }

  const words = normalized.split(/\s+/);
  return words.length > 3 ? words.slice(0, 3).join(" ") : normalized;
}

function cleanSubjectLabel(title: string) {
  const words = title.split(/\s+/);
  const stripped = [...words];

  while (
    stripped.length > 1 &&
    TOOL_TITLE_SUFFIXES.includes(stripped[stripped.length - 1].toLowerCase() as (typeof TOOL_TITLE_SUFFIXES)[number])
  ) {
    stripped.pop();
  }

  return stripped.join(" ").trim() || title;
}

function uniquePhrases(values: string[]) {
  const seen = new Set<string>();
  const output: string[] = [];

  for (const value of values) {
    const normalized = value.trim().toLowerCase();

    if (!normalized || seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    output.push(value.trim());
  }

  return output;
}

function rotatePick(values: readonly string[], count: number, seed: number) {
  if (values.length === 0) {
    return [];
  }

  const output: string[] = [];
  const used = new Set<number>();
  const offset = seed % values.length;

  for (let index = 0; output.length < count && index < values.length * 2; index += 1) {
    const candidateIndex = (offset + index) % values.length;

    if (used.has(candidateIndex)) {
      continue;
    }

    used.add(candidateIndex);
    output.push(values[candidateIndex]);
  }

  return output;
}

function createTopicContext(record: ToolTopicRecord): TopicContext {
  const cluster = toolClusterMap[record.cluster];
  const categoryBase = CATEGORY_BASE_TAGS[record.category];
  const specificTerms = uniquePhrases(
    record.tags.filter((tag) => !categoryBase.includes(tag as never)).map(normalizeForSentence),
  );
  const clusterTerms = uniquePhrases(cluster.searchTerms.map(normalizeForSentence));
  const fallbackSignals = CLUSTER_INFOGRAPHIC_LEXICON[record.cluster].signalPool.map(normalizeForSentence);
  const leadTerms = uniquePhrases([...specificTerms, ...clusterTerms, ...fallbackSignals]);
  const subjectLabel = cleanSubjectLabel(record.title);
  const focusLabel = humanizePhrase(specificTerms[0] ?? subjectLabel);

  return {
    record,
    subjectLabel,
    subjectLower: subjectLabel.toLowerCase(),
    focusLabel,
    focusLower: focusLabel.toLowerCase(),
    seed: stableHash(`${record.slug}:${record.cluster}:${record.tags.join("|")}`),
    specificTerms,
    clusterTerms,
    leadTerms,
    fallbackSignals,
  };
}

function buildTermPool(context: TopicContext, family: ToolInfographicFamily, indexOffset: number) {
  const lexicon = CLUSTER_INFOGRAPHIC_LEXICON[context.record.cluster];
  const clusterSpecificPool =
    family === "pressure-stack"
      ? lexicon.pressurePool
      : family === "pathway-sequence"
        ? lexicon.pathwayPool
        : lexicon.signalPool;

  const combined = uniquePhrases([
    ...context.specificTerms,
    ...context.leadTerms,
    ...clusterSpecificPool.map(normalizeForSentence),
    ...context.fallbackSignals,
  ]);

  const picked = rotatePick(combined, 6, context.seed + indexOffset).map((term) =>
    compactLabel(term, context.focusLabel),
  );

  while (picked.length < 6) {
    picked.push(compactLabel(context.focusLabel, context.subjectLabel));
  }

  return picked;
}

function createNode(label: string, caption: string): ToolInfographicNode {
  return { label, caption };
}

function buildLoopPayload(context: TopicContext, indexOffset: number): LoopCyclePayload {
  const [first, second, third, fourth] = buildTermPool(context, "loop-cycle", indexOffset);
  const family = "loop-cycle";

  return {
    centerLabel: context.subjectLabel,
    steps: [
      createNode(
        normalizeLabelForFamily(first, family),
        normalizeCaptionForFamily(`Gets it moving.`, family),
      ),
      createNode(
        normalizeLabelForFamily(second, family),
        normalizeCaptionForFamily(`Takes over next.`, family),
      ),
      createNode(
        normalizeLabelForFamily("Brief relief", family),
        normalizeCaptionForFamily(`Relief stays short.`, family),
      ),
      createNode(
        normalizeLabelForFamily(fourth, family),
        normalizeCaptionForFamily(`Restarts the loop.`, family),
      ),
    ],
  };
}

function buildPathwayPayload(context: TopicContext, indexOffset: number): PathwaySequencePayload {
  const [first, second, third, fourth] = buildTermPool(context, "pathway-sequence", indexOffset);
  const family = "pathway-sequence";

  return {
    steps: [
      createNode(
        normalizeLabelForFamily(first, family),
        normalizeCaptionForFamily(`Often appears first.`, family),
      ),
      createNode(
        normalizeLabelForFamily(second, family),
        normalizeCaptionForFamily(`Usually comes next.`, family),
      ),
      createNode(
        normalizeLabelForFamily(third, family),
        normalizeCaptionForFamily(`Gets easier to spot.`, family),
      ),
      createNode(
        normalizeLabelForFamily(fourth, family),
        normalizeCaptionForFamily(`Often weighs more.`, family),
      ),
    ],
  };
}

function buildPressurePayload(context: TopicContext, indexOffset: number): PressureStackPayload {
  const [first, second, third, fourth] = buildTermPool(context, "pressure-stack", indexOffset);
  const peakPool = CLUSTER_INFOGRAPHIC_LEXICON[context.record.cluster].peakPool;
  const peakLabel = peakPool[(context.seed + indexOffset) % peakPool.length];
  const family = "pressure-stack";

  return {
    baseLabel: context.subjectLabel,
    layers: [
      createNode(
        normalizeLabelForFamily(first, family),
        normalizeCaptionForFamily("Pressure starts here.", family),
      ),
      createNode(
        normalizeLabelForFamily(second, family),
        normalizeCaptionForFamily("Effort climbs here.", family),
      ),
      createNode(
        normalizeLabelForFamily(third, family),
        normalizeCaptionForFamily("Strain gets clearer.", family),
      ),
      createNode(
        normalizeLabelForFamily(fourth, family),
        normalizeCaptionForFamily("Weight builds here.", family),
      ),
    ],
    peakLabel: normalizeLabelForFamily(peakLabel, family),
  };
}

function buildSignalPayload(context: TopicContext, indexOffset: number): SignalClusterPayload {
  const [first, second, third, fourth] = buildTermPool(context, "signal-cluster", indexOffset);
  const family = "signal-cluster";

  return {
    centerLabel: context.subjectLabel,
    signals: [
      createNode(
        normalizeLabelForFamily(first, family),
        normalizeCaptionForFamily("Shows up early.", family),
      ),
      createNode(
        normalizeLabelForFamily(second, family),
        normalizeCaptionForFamily("Often follows next.", family),
      ),
      createNode(
        normalizeLabelForFamily(third, family),
        normalizeCaptionForFamily("Easier to recognize.", family),
      ),
      createNode(
        normalizeLabelForFamily(fourth, family),
        normalizeCaptionForFamily("Shows it is spreading.", family),
      ),
    ],
  };
}

function buildSectionMeta(
  family: ToolInfographicFamily,
  context: TopicContext,
  indexOffset: number,
) {
  const eyebrowOptions =
    family === "loop-cycle"
      ? ["Repeat loop", "Pattern cycle", "What keeps it active"]
      : family === "pathway-sequence"
        ? ["Response pathway", "What tends to happen next", "Pattern sequence"]
        : family === "pressure-stack"
          ? ["Pressure build", "Where load gathers", "How strain stacks"]
          : ["Signal cluster", "What usually shows up", "Early visible signs"];
  const titleOptions =
    family === "loop-cycle"
      ? [
          `${context.subjectLabel} repeat loop`,
          `How ${context.subjectLower} keeps restarting`,
          `What keeps ${context.subjectLower} in motion`,
        ]
      : family === "pathway-sequence"
        ? [
            `${context.subjectLabel} pathway`,
            `How ${context.subjectLower} unfolds`,
            `Where ${context.subjectLower} usually leads`,
          ]
        : family === "pressure-stack"
          ? [
              `${context.subjectLabel} pressure stack`,
              `How ${context.subjectLower} builds`,
              `Where ${context.subjectLower} load gathers`,
            ]
          : [
              `${context.subjectLabel} signal cluster`,
              `Early signs of ${context.subjectLower}`,
              `What usually shows up around ${context.subjectLower}`,
            ];
  const summaryOptions =
    family === "loop-cycle"
      ? [
          `These moves show what keeps ${context.subjectLower} repeating.`,
          `Use this loop to see where ${context.subjectLower} restarts.`,
        ]
      : family === "pathway-sequence"
        ? [
            `This sequence shows the shifts that usually come next.`,
            `This pathway maps how ${context.subjectLower} tends to unfold.`,
          ]
        : family === "pressure-stack"
          ? [
              `This stack shows where the load starts and where it lands hardest.`,
              `This pressure build makes the heavier layers easier to spot.`,
            ]
          : [
              `These signals make ${context.subjectLower} easier to recognize early.`,
              `These signs show what usually gathers once ${context.subjectLower} starts spreading.`,
            ];
  const eyebrow = eyebrowOptions[(context.seed + indexOffset) % eyebrowOptions.length];
  const title = titleOptions[(context.seed + indexOffset) % titleOptions.length];
  const summary = summaryOptions[(context.seed + indexOffset) % summaryOptions.length];

  return {
    eyebrow,
    title,
    summary,
  };
}

function buildSection(
  context: TopicContext,
  family: ToolInfographicFamily,
  id: ToolInfographicSection["id"],
  indexOffset: number,
): ToolInfographicSection {
  const meta = buildSectionMeta(family, context, indexOffset);

  if (family === "loop-cycle") {
    return normalizeSectionForFamily({
      id,
      family,
      mode: "mechanism-map",
      purpose: "trigger-loop",
      ...meta,
      payload: buildLoopPayload(context, indexOffset),
    });
  }

  if (family === "pathway-sequence") {
    return normalizeSectionForFamily({
      id,
      family,
      mode: "trigger-response-sequence",
      purpose: "mechanism-map",
      ...meta,
      payload: buildPathwayPayload(context, indexOffset),
    });
  }

  if (family === "pressure-stack") {
    return normalizeSectionForFamily({
      id,
      family,
      mode: "pressure-buildup",
      purpose: "pressure-stack",
      ...meta,
      payload: buildPressurePayload(context, indexOffset),
    });
  }

  return normalizeSectionForFamily({
    id,
    family,
    mode: "signal-distribution",
    purpose: "signal-cluster",
    ...meta,
    payload: buildSignalPayload(context, indexOffset),
  });
}

function getCandidateFamilies(
  preferred: ToolInfographicFamily,
  usedFamilies: ToolInfographicFamily[],
) {
  const fallbackFamilies = INFOGRAPHIC_FAMILY_FALLBACKS[preferred];
  return [preferred, ...fallbackFamilies].filter(
    (family, index, families) => !usedFamilies.includes(family) && families.indexOf(family) === index,
  );
}

function pickSafeSection(
  context: TopicContext,
  preferred: ToolInfographicFamily,
  usedFamilies: ToolInfographicFamily[],
  id: ToolInfographicSection["id"],
  indexOffset: number,
) {
  const candidates = getCandidateFamilies(preferred, usedFamilies);

  for (const family of candidates) {
    const section = buildSection(context, family, id, indexOffset);
    const validation = validateInfographicSection(section);

    if (validation.safe) {
      return section;
    }
  }

  return buildSection(context, candidates[0] ?? preferred, id, indexOffset);
}

export function buildToolTopicRecords() {
  return liveToolSlugs.map((slug) => {
    const tool = liveToolMap[slug];
    const registryEntry = registryBySlug[slug];

    return {
      ...registryEntry,
      cluster: tool.cluster,
      categorySlug: tool.categorySlug,
      description: tool.description,
    } satisfies ToolTopicRecord;
  });
}

export function buildToolInfographicBundle(record: ToolTopicRecord): ToolInfographicBundle {
  const context = createTopicContext(record);
  const pairPresets = CLUSTER_INFOGRAPHIC_LEXICON[record.cluster].pairPresets;
  const selectedPreset = pairPresets[context.seed % pairPresets.length];
  const firstSection = pickSafeSection(context, selectedPreset[0], [], "infographic-one", 11);
  const secondSection = pickSafeSection(
    context,
    selectedPreset[1],
    [firstSection.family],
    "infographic-two",
    29,
  );
  const assetKey = `${record.slug}:${TOOL_INFOGRAPHIC_GENERATOR_VERSION}:${context.seed
    .toString(36)
    .slice(0, 8)}`;

  return {
    slug: record.slug,
    title: record.title,
    cluster: record.cluster,
    assetVersion: TOOL_INFOGRAPHIC_GENERATOR_VERSION,
    assetKey,
    sections: [firstSection, secondSection],
  };
}

export function createAllToolInfographicBundles(): ToolInfographicBundleMap {
  return Object.fromEntries(
    buildToolTopicRecords().map((record) => [record.slug, buildToolInfographicBundle(record)]),
  );
}
