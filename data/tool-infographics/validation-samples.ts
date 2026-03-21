import type { ToolInfographicSection } from "./schema";

export const INFOGRAPHIC_VALIDATION_SAMPLES: ToolInfographicSection[] = [
  {
    id: "infographic-one",
    family: "loop-cycle",
    mode: "mechanism-map",
    purpose: "trigger-loop",
    eyebrow: "Repeat loop",
    title: "What keeps focus drift in motion",
    summary: "These moves show what keeps focus drift repeating.",
    payload: {
      centerLabel: "Focus drift",
      steps: [
        { label: "Start friction", caption: "Gets it moving." },
        { label: "Switching cost", caption: "Takes over next." },
        { label: "Brief relief", caption: "Relief stays short." },
        { label: "Open loops", caption: "Restarts the loop." },
      ],
    },
  },
  {
    id: "infographic-one",
    family: "pathway-sequence",
    mode: "trigger-response-sequence",
    purpose: "mechanism-map",
    eyebrow: "Response pathway",
    title: "How reassurance seeking unfolds",
    summary: "This sequence shows the shifts that usually come next.",
    payload: {
      steps: [
        { label: "Unclear signal", caption: "Often appears first." },
        { label: "More checking", caption: "Usually comes next." },
        { label: "Short relief", caption: "Gets easier to spot." },
        { label: "Need returns", caption: "Often weighs more." },
      ],
    },
  },
  {
    id: "infographic-one",
    family: "pressure-stack",
    mode: "pressure-buildup",
    purpose: "pressure-stack",
    eyebrow: "Pressure build",
    title: "How focus load builds",
    summary: "This stack shows where the load starts and where it lands hardest.",
    payload: {
      peakLabel: "Lower capacity",
      baseLabel: "Focus load",
      layers: [
        { label: "Start friction", caption: "Pressure starts here." },
        { label: "Switching cost", caption: "Effort climbs here." },
        { label: "Mental drag", caption: "Strain gets clearer." },
        { label: "Deadline carry", caption: "Weight builds here." },
      ],
    },
  },
  {
    id: "infographic-one",
    family: "signal-cluster",
    mode: "signal-distribution",
    purpose: "signal-cluster",
    eyebrow: "Signal cluster",
    title: "Early signs of sleep pressure",
    summary: "These signals make sleep pressure easier to recognize early.",
    payload: {
      centerLabel: "Sleep pressure",
      signals: [
        { label: "Morning drag", caption: "Shows up early." },
        { label: "Thin recovery", caption: "Often follows next." },
        { label: "Active mind", caption: "Easier to recognize." },
        { label: "Late reset", caption: "Shows it is spreading." },
      ],
    },
  },
];
