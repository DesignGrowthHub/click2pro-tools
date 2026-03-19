import type { CSSProperties } from "react";
import type { ReassuranceResult } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type ReliefReturnPanelProps = {
  result: ReassuranceResult;
};

type CurvePoint = {
  label: string;
  value: number;
  accent: string;
  note: string;
};

function buildPolyline(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

export function ReliefReturnPanel({ result }: ReliefReturnPanelProps) {
  const curvePoints: CurvePoint[] = [
    {
      label: "Relief felt",
      value: result.loopNodes.find((node) => node.label === "Relief")?.value ?? 44,
      accent: "#6EE7B7",
      note: "How noticeable the calming drop feels when reassurance arrives.",
    },
    {
      label: "Relief hold",
      value: result.reliefDurationLevel,
      accent: "#67E8F9",
      note: "How well that settling tends to last before the issue reactivates.",
    },
    {
      label: "Return of doubt",
      value: result.relapseSpeedLevel,
      accent: "#FB7185",
      note: "How quickly the uncertainty starts asking for certainty again.",
    },
    {
      label: "Loop spillover",
      value: result.strongestSpilloverArea.value,
      accent: result.strongestSpilloverArea.accent,
      note: "Where the cycle is costing the most once it is already active.",
    },
  ];

  const plot = curvePoints.map((point, index) => ({
    ...point,
    x: 44 + index * 132,
    y: 220 - point.value * 1.72,
  }));

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Relief vs return panel</p>
        <h3 className={styles.visualTitle}>How much relief arrives, how long it holds, and where the cycle lands afterward</h3>
        <p className={styles.visualCopy}>
          This panel turns the loop into a readable timeline: the felt drop, the short holding window, the speed of the relapse, and the spillover that tends to remain afterward.
        </p>
      </div>

      <div className={styles.driftChartShell}>
        <svg className={styles.driftChartSvg} viewBox="0 0 480 250">
          <g className={styles.driftChartGrid}>
            <line x1="24" x2="456" y1="46" y2="46" />
            <line x1="24" x2="456" y1="126" y2="126" />
            <line x1="24" x2="456" y1="206" y2="206" />
          </g>

          <polyline
            className={styles.driftChartLine}
            fill="none"
            points={buildPolyline(plot)}
            style={{ ["--drift-accent" as string]: "#67E8F9" } as CSSProperties}
          />

          {plot.map((point) => (
            <g key={point.label}>
              <circle className={styles.driftChartHalo} cx={point.x} cy={point.y} r="11" />
              <circle
                className={styles.driftChartPoint}
                cx={point.x}
                cy={point.y}
                r="5"
                style={{ ["--drift-accent" as string]: point.accent } as CSSProperties}
              />
              <text
                fill="rgba(215, 224, 234, 0.88)"
                fontSize="11"
                textAnchor="middle"
                x={point.x}
                y="236"
              >
                {point.label}
              </text>
            </g>
          ))}
        </svg>

        <div className={styles.driftStageCards}>
          {curvePoints.map((point) => (
            <article className={styles.driftStageCard} key={point.label}>
              <div className={styles.driftStageTop}>
                <span
                  className={styles.driftStageDot}
                  style={{ ["--drift-accent" as string]: point.accent } as CSSProperties}
                />
                <span className={styles.driftStageLabel}>{point.label}</span>
                <span className={styles.driftStageValue}>{point.value}</span>
              </div>
              <p className={styles.driftStageNote}>{point.note}</p>
            </article>
          ))}
        </div>

        <div className={styles.recoverySummaryCard}>
          <p className={styles.recoverySummaryEyebrow}>Why the loop stays active</p>
          <h4 className={styles.recoverySummaryTitle}>{result.mostUsefulResetDirection.label}</h4>
          <p className={styles.recoverySummaryCopy}>{result.mostUsefulResetDirection.description}</p>
          <p className={styles.signalBarDescription}>
            Strongest spillover: {result.strongestSpilloverArea.label.toLowerCase()}.
          </p>
        </div>
      </div>
    </article>
  );
}
