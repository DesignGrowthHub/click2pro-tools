import type {
  PathwaySequencePayload,
  PressureStackPayload,
  SignalClusterPayload,
  ToolInfographicFamily,
  ToolInfographicSection,
} from "./schema";

export type TextAnchorMode = "start" | "middle" | "end";

export type InfographicTextBlock = {
  key: string;
  text: string;
  x: number;
  y: number;
  anchor: TextAnchorMode;
  maxCharsPerLine: number;
  lineHeight: number;
  kind: "label" | "caption" | "title" | "summary" | "step-number";
};

export type InfographicConnector = {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type InfographicDot = {
  key: string;
  x: number;
  y: number;
  r: number;
};

export type InfographicLayoutModel = {
  textBlocks: InfographicTextBlock[];
  connectors: InfographicConnector[];
  dots: InfographicDot[];
};

export type FamilyContentBudget = {
  maxLabelChars: number;
  maxLabelWords: number;
  maxCaptionChars: number;
  maxCaptionWords: number;
  maxCenterChars: number;
  maxNodeChars: number;
  maxTotalChars: number;
  maxCaptionLines: number;
  maxLabelLines: number;
};

export type LayoutValidationIssue = {
  type: "text-overlap" | "connector-crossing-text" | "dot-collision" | "text-clipping" | "budget-overflow";
  detail: string;
};

export type LayoutValidationResult = {
  safe: boolean;
  issues: LayoutValidationIssue[];
};

type TextRect = {
  key: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export const FAMILY_CONTENT_BUDGETS: Record<ToolInfographicFamily, FamilyContentBudget> = {
  "loop-cycle": {
    maxLabelChars: 16,
    maxLabelWords: 3,
    maxCaptionChars: 24,
    maxCaptionWords: 4,
    maxCenterChars: 20,
    maxNodeChars: 42,
    maxTotalChars: 168,
    maxCaptionLines: 2,
    maxLabelLines: 2,
  },
  "pathway-sequence": {
    maxLabelChars: 16,
    maxLabelWords: 3,
    maxCaptionChars: 22,
    maxCaptionWords: 4,
    maxCenterChars: 0,
    maxNodeChars: 38,
    maxTotalChars: 152,
    maxCaptionLines: 2,
    maxLabelLines: 2,
  },
  "pressure-stack": {
    maxLabelChars: 16,
    maxLabelWords: 3,
    maxCaptionChars: 22,
    maxCaptionWords: 4,
    maxCenterChars: 18,
    maxNodeChars: 38,
    maxTotalChars: 164,
    maxCaptionLines: 2,
    maxLabelLines: 2,
  },
  "signal-cluster": {
    maxLabelChars: 16,
    maxLabelWords: 3,
    maxCaptionChars: 22,
    maxCaptionWords: 4,
    maxCenterChars: 18,
    maxNodeChars: 38,
    maxTotalChars: 160,
    maxCaptionLines: 2,
    maxLabelLines: 2,
  },
};

const FILLER_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\boften becomes noticeable when\b/gi, "often starts when"],
  [/\busually follows once the pattern starts taking space\b/gi, "often follows once it starts"],
  [/\bis often one of the first signs people notice\b/gi, "is often noticed early"],
  [/\bis where the topic often becomes easier to recognize\b/gi, "often makes the pattern easier to spot"],
  [/\bis often the sign that the pattern is spreading wider\b/gi, "often shows the pattern is spreading"],
  [/\bbegins to pull attention\b/gi, "pulls attention"],
  [/\bwith more weight to carry\b/gi, "again"],
  [/\bin daily life\b/gi, "in the day"],
  [/\bto regain steadiness\b/gi, "to steady things"],
  [/\bby the time it feels obvious\b/gi, "once it feels obvious"],
  [/\bbefore it demands attention\b/gi, "before it feels heavy"],
  [/\bonce it begins taking space\b/gi, "once it starts taking space"],
  [/\bthe same pattern returns through\b/gi, "the pattern returns through"],
  [/\bwhat usually sits on top\b/gi, "what usually sits on top"],
];

const CONNECTOR_CLEARANCE = 8;
const DOT_CLEARANCE = 8;
const TEXT_COLLISION_PADDING = 6;
const SVG_WIDTH = 560;
const SVG_HEIGHT = 320;
const SVG_PADDING_X = 20;
const SVG_PADDING_Y = 18;

export function splitText(value: string, maxLineLength: number) {
  const words = value.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxLineLength) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function clampWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.slice(0, maxWords).join(" ");
}

function clampCharacters(text: string, maxChars: number) {
  if (text.length <= maxChars) {
    return text;
  }

  const shortened = text.slice(0, maxChars + 1).replace(/\s+\S*$/, "").trim();
  return shortened || text.slice(0, maxChars).trim();
}

function tidySentence(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();
}

function compressText(text: string) {
  let output = text;

  for (const [pattern, replacement] of FILLER_REPLACEMENTS) {
    output = output.replace(pattern, replacement);
  }

  return tidySentence(output);
}

export function normalizeLabelForFamily(text: string, family: ToolInfographicFamily) {
  const budget = FAMILY_CONTENT_BUDGETS[family];
  const compressed = compressText(text);
  const clampedWords = clampWords(compressed, budget.maxLabelWords);
  return clampCharacters(clampedWords, budget.maxLabelChars);
}

export function normalizeCaptionForFamily(text: string, family: ToolInfographicFamily) {
  const budget = FAMILY_CONTENT_BUDGETS[family];
  const compressed = compressText(text);
  const clampedWords = clampWords(compressed, budget.maxCaptionWords);
  return clampCharacters(clampedWords, budget.maxCaptionChars);
}

export function normalizeTitleForFamily(text: string, family: ToolInfographicFamily) {
  const budget = FAMILY_CONTENT_BUDGETS[family];
  return clampCharacters(compressText(text), budget.maxCenterChars + 28);
}

export function normalizeSectionForFamily(
  section: ToolInfographicSection,
  family: ToolInfographicFamily = section.family,
): ToolInfographicSection {
  const common = {
    ...section,
    eyebrow: clampCharacters(tidySentence(section.eyebrow), 26),
    title: normalizeTitleForFamily(section.title, family),
    summary: clampCharacters(compressText(section.summary), 120),
  };

  if (section.family === "loop-cycle") {
    return {
      ...common,
      family: section.family,
      mode: section.mode,
      purpose: section.purpose,
      payload: {
        centerLabel: clampCharacters(section.payload.centerLabel, FAMILY_CONTENT_BUDGETS[family].maxCenterChars),
        steps: section.payload.steps.map((node) => ({
          label: normalizeLabelForFamily(node.label, family),
          caption: normalizeCaptionForFamily(node.caption ?? "", family),
        })) as typeof section.payload.steps,
      },
    };
  }

  if (section.family === "pathway-sequence") {
    return {
      ...common,
      family: section.family,
      mode: section.mode,
      purpose: section.purpose,
      payload: {
        steps: section.payload.steps.map((node) => ({
          label: normalizeLabelForFamily(node.label, family),
          caption: normalizeCaptionForFamily(node.caption ?? "", family),
        })) as typeof section.payload.steps,
      },
    };
  }

  if (section.family === "pressure-stack") {
    return {
      ...common,
      family: section.family,
      mode: section.mode,
      purpose: section.purpose,
      payload: {
        baseLabel: clampCharacters(section.payload.baseLabel, FAMILY_CONTENT_BUDGETS[family].maxCenterChars),
        peakLabel: clampCharacters(section.payload.peakLabel, FAMILY_CONTENT_BUDGETS[family].maxCenterChars),
        layers: section.payload.layers.map((node) => ({
          label: normalizeLabelForFamily(node.label, family),
          caption: normalizeCaptionForFamily(node.caption ?? "", family),
        })) as typeof section.payload.layers,
      },
    };
  }

  return {
    ...common,
    family: section.family,
    mode: section.mode,
    purpose: section.purpose,
    payload: {
      centerLabel: clampCharacters(section.payload.centerLabel, FAMILY_CONTENT_BUDGETS[family].maxCenterChars),
      signals: section.payload.signals.map((node) => ({
        label: normalizeLabelForFamily(node.label, family),
        caption: normalizeCaptionForFamily(node.caption ?? "", family),
      })) as typeof section.payload.signals,
    },
  };
}

function lineMetrics(block: InfographicTextBlock) {
  const fontSize =
    block.kind === "label" || block.kind === "title"
      ? 13
      : block.kind === "step-number"
        ? 11
        : 10;
  const charWidth =
    block.kind === "label" || block.kind === "title"
      ? 6.55
      : block.kind === "step-number"
        ? 6.2
        : 5.35;
  const lines = splitText(block.text, block.maxCharsPerLine);
  const lineCount = Math.max(lines.length, 1);
  const widestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
  const width = Math.min(block.maxCharsPerLine, widestLine) * charWidth + 10;
  const height = lineCount * block.lineHeight + 6;

  return { lines, lineCount, fontSize, width, height };
}

function approximateRect(block: InfographicTextBlock) {
  const metrics = lineMetrics(block);
  const top = block.y - metrics.fontSize;
  const left =
    block.anchor === "start"
      ? block.x
      : block.anchor === "end"
        ? block.x - metrics.width
        : block.x - metrics.width / 2;

  return {
    key: block.key,
    left,
    right: left + metrics.width,
    top,
    bottom: top + metrics.height,
  } satisfies TextRect;
}

function rectsOverlap(a: TextRect, b: TextRect) {
  return !(
    a.right + TEXT_COLLISION_PADDING < b.left ||
    b.right + TEXT_COLLISION_PADDING < a.left ||
    a.bottom + TEXT_COLLISION_PADDING < b.top ||
    b.bottom + TEXT_COLLISION_PADDING < a.top
  );
}

function pointInsideRect(x: number, y: number, rect: TextRect, padding = 0) {
  return (
    x >= rect.left - padding &&
    x <= rect.right + padding &&
    y >= rect.top - padding &&
    y <= rect.bottom + padding
  );
}

function segmentsIntersect(
  first: { x1: number; y1: number; x2: number; y2: number },
  second: { x1: number; y1: number; x2: number; y2: number },
) {
  const denominator =
    (second.y2 - second.y1) * (first.x2 - first.x1) -
    (second.x2 - second.x1) * (first.y2 - first.y1);

  if (denominator === 0) {
    return false;
  }

  const ua =
    ((second.x2 - second.x1) * (first.y1 - second.y1) -
      (second.y2 - second.y1) * (first.x1 - second.x1)) /
    denominator;
  const ub =
    ((first.x2 - first.x1) * (first.y1 - second.y1) -
      (first.y2 - first.y1) * (first.x1 - second.x1)) /
    denominator;

  return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
}

function lineIntersectsRect(line: InfographicConnector, rect: TextRect) {
  if (
    pointInsideRect(line.x1, line.y1, rect, CONNECTOR_CLEARANCE) ||
    pointInsideRect(line.x2, line.y2, rect, CONNECTOR_CLEARANCE)
  ) {
    return true;
  }

  const edges = [
    {
      x1: rect.left - CONNECTOR_CLEARANCE,
      y1: rect.top - CONNECTOR_CLEARANCE,
      x2: rect.right + CONNECTOR_CLEARANCE,
      y2: rect.top - CONNECTOR_CLEARANCE,
    },
    {
      x1: rect.right + CONNECTOR_CLEARANCE,
      y1: rect.top - CONNECTOR_CLEARANCE,
      x2: rect.right + CONNECTOR_CLEARANCE,
      y2: rect.bottom + CONNECTOR_CLEARANCE,
    },
    {
      x1: rect.right + CONNECTOR_CLEARANCE,
      y1: rect.bottom + CONNECTOR_CLEARANCE,
      x2: rect.left - CONNECTOR_CLEARANCE,
      y2: rect.bottom + CONNECTOR_CLEARANCE,
    },
    {
      x1: rect.left - CONNECTOR_CLEARANCE,
      y1: rect.bottom + CONNECTOR_CLEARANCE,
      x2: rect.left - CONNECTOR_CLEARANCE,
      y2: rect.top - CONNECTOR_CLEARANCE,
    },
  ];

  return edges.some((edge) => segmentsIntersect(line, edge));
}

function dotIntersectsRect(dot: InfographicDot, rect: TextRect) {
  return (
    dot.x + dot.r + DOT_CLEARANCE >= rect.left &&
    dot.x - dot.r - DOT_CLEARANCE <= rect.right &&
    dot.y + dot.r + DOT_CLEARANCE >= rect.top &&
    dot.y - dot.r - DOT_CLEARANCE <= rect.bottom
  );
}

function isWithinCanvas(rect: TextRect) {
  return (
    rect.left >= SVG_PADDING_X &&
    rect.right <= SVG_WIDTH - SVG_PADDING_X &&
    rect.top >= SVG_PADDING_Y &&
    rect.bottom <= SVG_HEIGHT - SVG_PADDING_Y
  );
}

function distributeAlongAxis(count: number, start: number, end: number) {
  if (count <= 1) {
    return [start];
  }

  const distance = end - start;
  const step = distance / (count - 1);
  return Array.from({ length: count }, (_, index) => start + step * index);
}

function createTextBlock(
  key: string,
  text: string,
  x: number,
  y: number,
  anchor: TextAnchorMode,
  maxCharsPerLine: number,
  lineHeight: number,
  kind: InfographicTextBlock["kind"],
): InfographicTextBlock {
  return {
    key,
    text,
    x,
    y,
    anchor,
    maxCharsPerLine,
    lineHeight,
    kind,
  };
}

function nodeTextBlocks(
  key: string,
  label: string,
  caption: string,
  x: number,
  y: number,
  anchor: TextAnchorMode,
  labelMaxChars: number,
  captionMaxChars: number,
  labelLineHeight: number,
  captionLineHeight: number,
  gap: number,
) {
  const labelBlock = createTextBlock(
    `${key}-label`,
    label,
    x,
    y,
    anchor,
    labelMaxChars,
    labelLineHeight,
    "label",
  );
  const captionText = caption.trim();

  if (!captionText) {
    return [labelBlock] satisfies InfographicTextBlock[];
  }

  const labelRect = approximateRect(labelBlock);
  const captionBlock = createTextBlock(
    `${key}-caption`,
    captionText,
    x,
    labelRect.bottom + gap + 10,
    anchor,
    captionMaxChars,
    captionLineHeight,
    "caption",
  );

  return [labelBlock, captionBlock] satisfies InfographicTextBlock[];
}

function buildLoopCycleLayout(section: Extract<ToolInfographicSection, { family: "loop-cycle" }>) {
  const blocks: InfographicTextBlock[] = [
    createTextBlock("center-title", section.payload.centerLabel, 280, 156, "middle", 15, 15, "title"),
  ];

  const positions = [
    { key: "top", x: 280, y: 42, anchor: "middle" as TextAnchorMode },
    { key: "right", x: 432, y: 112, anchor: "start" as TextAnchorMode },
    { key: "bottom", x: 280, y: 236, anchor: "middle" as TextAnchorMode },
    { key: "left", x: 128, y: 112, anchor: "end" as TextAnchorMode },
  ];

  section.payload.steps.forEach((step, index) => {
    const position = positions[index];
    blocks.push(
      ...nodeTextBlocks(
        position.key,
        step.label,
        step.caption ?? "",
        position.x,
        position.y,
        position.anchor,
        14,
        18,
        14,
        10,
        8,
      ),
    );
  });

  return {
    textBlocks: blocks,
    connectors: [],
    dots: [],
  } satisfies InfographicLayoutModel;
}

function buildPathwaySequenceLayout(
  section: Extract<ToolInfographicSection, { family: "pathway-sequence" }>,
) {
  const xValues = distributeAlongAxis(4, 96, 464);
  const blocks: InfographicTextBlock[] = [];
  const connectors: InfographicConnector[] = [{ key: "track", x1: 88, y1: 160, x2: 472, y2: 160 }];
  const dots: InfographicDot[] = [];

  section.payload.steps.forEach((step, index) => {
    const x = xValues[index];

    blocks.push(
      createTextBlock(`step-${index}-label`, step.label, x, 74, "middle", 12, 14, "label"),
      createTextBlock(`step-${index}-caption`, step.caption ?? "", x, 214, "middle", 14, 10, "caption"),
    );

    dots.push({ key: `step-${index}-dot`, x, y: 160, r: 6 });
  });

  return { textBlocks: blocks, connectors, dots } satisfies InfographicLayoutModel;
}

function buildPressureStackLayout(
  section: Extract<ToolInfographicSection, { family: "pressure-stack" }>,
) {
  const blocks: InfographicTextBlock[] = [
    createTextBlock("peak-label", section.payload.peakLabel, 280, 32, "middle", 16, 15, "title"),
    createTextBlock("base-label", section.payload.baseLabel, 280, 290, "middle", 16, 15, "title"),
  ];
  const connectors: InfographicConnector[] = [{ key: "stack-spine", x1: 280, y1: 82, x2: 280, y2: 260 }];
  const dots: InfographicDot[] = [];
  const lineYs = distributeAlongAxis(section.payload.layers.length, 92, 260);

  section.payload.layers.forEach((layer, index) => {
    const lineY = lineYs[index];
    const alignLeft = index % 2 === 0;
    const anchorX = alignLeft ? 250 : 310;
    const textX = alignLeft ? 232 : 328;
    const anchor = alignLeft ? "end" : ("start" as TextAnchorMode);
    blocks.push(
      ...nodeTextBlocks(
        `layer-${index}`,
        layer.label,
        layer.caption ?? "",
        textX,
        lineY - 12,
        anchor,
        14,
        18,
        13,
        10,
        8,
      ),
    );
    connectors.push({
      key: `layer-${index}-guide`,
      x1: 280,
      y1: lineY,
      x2: anchorX,
      y2: lineY,
    });
    dots.push({ key: `layer-${index}-dot`, x: 280, y: lineY, r: 4 });
  });

  return { textBlocks: blocks, connectors, dots } satisfies InfographicLayoutModel;
}

function buildSignalClusterLayout(
  section: Extract<ToolInfographicSection, { family: "signal-cluster" }>,
) {
  const blocks: InfographicTextBlock[] = [
    createTextBlock("center-title", section.payload.centerLabel, 280, 50, "middle", 16, 15, "title"),
  ];

  const nodeLayouts = [
    {
      key: "left-top",
      label: section.payload.signals[0].label,
      caption: section.payload.signals[0].caption ?? "",
      dotX: 220,
      dotY: 148,
      textX: 188,
      textY: 130,
      anchor: "end" as TextAnchorMode,
    },
    {
      key: "right-top",
      label: section.payload.signals[1].label,
      caption: section.payload.signals[1].caption ?? "",
      dotX: 340,
      dotY: 148,
      textX: 372,
      textY: 130,
      anchor: "start" as TextAnchorMode,
    },
    {
      key: "left-bottom",
      label: section.payload.signals[2].label,
      caption: section.payload.signals[2].caption ?? "",
      dotX: 220,
      dotY: 236,
      textX: 188,
      textY: 218,
      anchor: "end" as TextAnchorMode,
    },
    {
      key: "right-bottom",
      label: section.payload.signals[3].label,
      caption: section.payload.signals[3].caption ?? "",
      dotX: 340,
      dotY: 236,
      textX: 372,
      textY: 218,
      anchor: "start" as TextAnchorMode,
    },
  ];

  nodeLayouts.forEach((node) => {
    blocks.push(
      ...nodeTextBlocks(node.key, node.label, node.caption, node.textX, node.textY, node.anchor, 14, 18, 14, 10, 8),
    );
  });

  return {
    textBlocks: blocks,
    connectors: [
      { key: "left-top-connector", x1: 280, y1: 104, x2: 220, y2: 148 },
      { key: "right-top-connector", x1: 280, y1: 104, x2: 340, y2: 148 },
      { key: "left-bottom-connector", x1: 280, y1: 104, x2: 220, y2: 236 },
      { key: "right-bottom-connector", x1: 280, y1: 104, x2: 340, y2: 236 },
    ],
    dots: nodeLayouts.map((node) => ({ key: `${node.key}-dot`, x: node.dotX, y: node.dotY, r: 4.5 })),
  } satisfies InfographicLayoutModel;
}

export function buildLayoutModel(section: ToolInfographicSection): InfographicLayoutModel {
  if (section.family === "loop-cycle") {
    return buildLoopCycleLayout(section);
  }

  if (section.family === "pathway-sequence") {
    return buildPathwaySequenceLayout(section);
  }

  if (section.family === "pressure-stack") {
    return buildPressureStackLayout(section);
  }

  return buildSignalClusterLayout(section);
}

function sectionNodeTexts(section: ToolInfographicSection) {
  if (section.family === "loop-cycle") {
    return [section.payload.centerLabel, ...section.payload.steps.flatMap((step) => [step.label, step.caption ?? ""])];
  }

  if (section.family === "pathway-sequence") {
    return section.payload.steps.flatMap((step) => [step.label, step.caption ?? ""]);
  }

  if (section.family === "pressure-stack") {
    return [
      section.payload.peakLabel,
      section.payload.baseLabel,
      ...section.payload.layers.flatMap((layer) => [layer.label, layer.caption ?? ""]),
    ];
  }

  return [section.payload.centerLabel, ...section.payload.signals.flatMap((signal) => [signal.label, signal.caption ?? ""])];
}

export function validateInfographicSection(section: ToolInfographicSection): LayoutValidationResult {
  const budget = FAMILY_CONTENT_BUDGETS[section.family];
  const layout = buildLayoutModel(section);
  const issues: LayoutValidationIssue[] = [];
  const rects = layout.textBlocks.map(approximateRect);
  const allTextLength = sectionNodeTexts(section).join("").length;

  const labelBlocks = layout.textBlocks.filter((block) => block.kind === "label");
  const titleBlocks = layout.textBlocks.filter((block) => block.kind === "title");
  const captionBlocks = layout.textBlocks.filter((block) => block.kind === "caption");

  if (allTextLength > budget.maxTotalChars) {
    issues.push({ type: "budget-overflow", detail: `total text ${allTextLength} exceeds ${budget.maxTotalChars}` });
  }

  for (const block of labelBlocks) {
    const lines = splitText(block.text, block.maxCharsPerLine);
    if (block.text.length > budget.maxLabelChars || lines.length > budget.maxLabelLines) {
      issues.push({ type: "budget-overflow", detail: `${block.key} exceeds label budget` });
    }
  }

  for (const block of titleBlocks) {
    const lines = splitText(block.text, block.maxCharsPerLine);
    if (block.text.length > budget.maxCenterChars || lines.length > budget.maxLabelLines) {
      issues.push({ type: "budget-overflow", detail: `${block.key} exceeds title budget` });
    }
  }

  for (const block of captionBlocks) {
    const lines = splitText(block.text, block.maxCharsPerLine);
    if (block.text.length > budget.maxCaptionChars || lines.length > budget.maxCaptionLines) {
      issues.push({ type: "budget-overflow", detail: `${block.key} exceeds caption budget` });
    }
  }

  rects.forEach((rect) => {
    if (!isWithinCanvas(rect)) {
      issues.push({ type: "text-clipping", detail: `${rect.key} exceeds canvas bounds` });
    }
  });

  for (let index = 0; index < rects.length; index += 1) {
    for (let compareIndex = index + 1; compareIndex < rects.length; compareIndex += 1) {
      if (rectsOverlap(rects[index], rects[compareIndex])) {
        issues.push({
          type: "text-overlap",
          detail: `${rects[index].key} overlaps ${rects[compareIndex].key}`,
        });
      }
    }
  }

  for (const connector of layout.connectors) {
    for (const rect of rects) {
      if (lineIntersectsRect(connector, rect)) {
        issues.push({
          type: "connector-crossing-text",
          detail: `${connector.key} crosses ${rect.key}`,
        });
      }
    }
  }

  for (const dot of layout.dots) {
    for (const rect of rects) {
      if (dotIntersectsRect(dot, rect)) {
        issues.push({
          type: "dot-collision",
          detail: `${dot.key} overlaps ${rect.key}`,
        });
      }
    }
  }

  return { safe: issues.length === 0, issues };
}

export const INFOGRAPHIC_FAMILY_FALLBACKS: Record<ToolInfographicFamily, readonly ToolInfographicFamily[]> = {
  "loop-cycle": ["signal-cluster", "pathway-sequence", "pressure-stack"],
  "pathway-sequence": ["signal-cluster", "pressure-stack", "loop-cycle"],
  "pressure-stack": ["signal-cluster", "pathway-sequence", "loop-cycle"],
  "signal-cluster": ["pathway-sequence", "pressure-stack", "loop-cycle"],
};
