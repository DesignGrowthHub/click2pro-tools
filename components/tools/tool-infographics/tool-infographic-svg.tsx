import type { CSSProperties } from "react";
import {
  buildLayoutModel,
  splitText,
  type TextAnchorMode,
} from "@/data/tool-infographics/layout-engine";
import type { ToolInfographicSection } from "@/data/tool-infographics/schema";
import styles from "./tool-infographics.module.css";

type ToolInfographicSvgProps = {
  section: ToolInfographicSection;
  isVisible: boolean;
};

function renderTextLines(
  className: string,
  x: number,
  y: number,
  lines: string[],
  lineHeight: number,
  anchor: TextAnchorMode,
) {
  return (
    <text className={className} textAnchor={anchor} x={x} y={y}>
      {lines.map((line, index) => (
        <tspan dy={index === 0 ? 0 : lineHeight} key={`${className}-${line}-${index}`} x={x}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function dotClassName(key: string, radius: number) {
  if (key.includes("center") || key.includes("peak") || key.includes("base")) {
    return styles.centerPulse;
  }

  if (radius >= 9) {
    return styles.sequenceDot;
  }

  if (radius <= 3.5) {
    return styles.stackGuideEdge;
  }

  return styles.anchorDot;
}

function textClassName(kind: string) {
  if (kind === "title") {
    return styles.centerLabel;
  }

  if (kind === "summary" || kind === "caption") {
    return styles.nodeCaption;
  }

  if (kind === "step-number") {
    return styles.stepNumber;
  }

  return styles.nodeLabel;
}

function renderStaticLayer(section: ToolInfographicSection) {
  if (section.family === "loop-cycle") {
    return (
      <>
        <circle className={styles.haloRing} cx="280" cy="160" r="108" />
        <circle className={styles.haloRingInner} cx="280" cy="160" r="142" />
      </>
    );
  }

  if (section.family === "pathway-sequence") {
    return <rect className={styles.trackBar} height="4" rx="999" width="386" x="86" y="158" />;
  }

  return null;
}

export function ToolInfographicSvg({ section, isVisible }: ToolInfographicSvgProps) {
  const layout = buildLayoutModel(section);

  return (
    <div
      className={`${styles.svgShell} ${isVisible ? styles.isVisible : ""}`}
      data-family={section.family}
    >
      <svg
        aria-hidden="true"
        className={styles.svg}
        viewBox="0 0 560 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderStaticLayer(section)}

        {layout.connectors.map((connector) => (
          <line
            className={styles.connectorPath}
            key={connector.key}
            x1={connector.x1}
            x2={connector.x2}
            y1={connector.y1}
            y2={connector.y2}
          />
        ))}

        {layout.dots.map((dot) => (
          <circle
            className={dotClassName(dot.key, dot.r)}
            cx={dot.x}
            cy={dot.y}
            key={dot.key}
            r={dot.r}
          />
        ))}

        {layout.textBlocks.map((block, index) => (
          <g className={styles.nodeGroup} key={block.key} style={{ "--order": index + 1 } as CSSProperties}>
            {renderTextLines(
              textClassName(block.kind),
              block.x,
              block.y,
              splitText(block.text, block.maxCharsPerLine),
              block.lineHeight,
              block.anchor,
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
