export const TOOL_INFOGRAPHIC_GENERATOR_VERSION = "tools-infographic-v2-safe-layout";

export type ToolInfographicFamily =
  | "loop-cycle"
  | "pathway-sequence"
  | "pressure-stack"
  | "signal-cluster";

export type ToolInfographicMode =
  | "mechanism-map"
  | "trigger-response-sequence"
  | "pressure-buildup"
  | "signal-distribution";

export type ToolInfographicPurpose =
  | "mechanism-map"
  | "trigger-loop"
  | "pressure-stack"
  | "signal-cluster";

export type ToolInfographicNode = {
  label: string;
  caption?: string;
};

export type LoopCyclePayload = {
  centerLabel: string;
  steps: [ToolInfographicNode, ToolInfographicNode, ToolInfographicNode, ToolInfographicNode];
};

export type PathwaySequencePayload = {
  steps: [ToolInfographicNode, ToolInfographicNode, ToolInfographicNode, ToolInfographicNode];
};

export type PressureStackPayload = {
  baseLabel: string;
  layers: [ToolInfographicNode, ToolInfographicNode, ToolInfographicNode, ToolInfographicNode];
  peakLabel: string;
};

export type SignalClusterPayload = {
  centerLabel: string;
  signals: [ToolInfographicNode, ToolInfographicNode, ToolInfographicNode, ToolInfographicNode];
};

export type ToolInfographicSection =
  | {
      id: "infographic-one" | "infographic-two";
      family: "loop-cycle";
      mode: "mechanism-map";
      purpose: "trigger-loop";
      eyebrow: string;
      title: string;
      summary: string;
      payload: LoopCyclePayload;
    }
  | {
      id: "infographic-two" | "infographic-one";
      family: "pathway-sequence";
      mode: "trigger-response-sequence";
      purpose: "mechanism-map";
      eyebrow: string;
      title: string;
      summary: string;
      payload: PathwaySequencePayload;
    }
  | {
      id: "infographic-two" | "infographic-one";
      family: "pressure-stack";
      mode: "pressure-buildup";
      purpose: "pressure-stack";
      eyebrow: string;
      title: string;
      summary: string;
      payload: PressureStackPayload;
    }
  | {
      id: "infographic-two" | "infographic-one";
      family: "signal-cluster";
      mode: "signal-distribution";
      purpose: "signal-cluster";
      eyebrow: string;
      title: string;
      summary: string;
      payload: SignalClusterPayload;
    };

export type ToolInfographicBundle = {
  slug: string;
  title: string;
  cluster: string;
  assetVersion: string;
  assetKey: string;
  sections: [ToolInfographicSection, ToolInfographicSection];
};

export type ToolInfographicBundleMap = Record<string, ToolInfographicBundle>;
