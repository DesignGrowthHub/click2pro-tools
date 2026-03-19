import type { CSSProperties } from "react";
import type { ResentmentResult } from "@/data/resentment-buildup-tracker";
import styles from "./resentment-buildup-tracker.module.css";

type LiveResentmentPreviewProps = {
  compact?: boolean;
  label: string;
  result: ResentmentResult;
};

function buildPolyline(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

export function LiveResentmentPreview({
  compact = false,
  label,
  result,
}: LiveResentmentPreviewProps) {
  const plot = result.curveStages.map((stage, index) => ({
    ...stage,
    x: 34 + index * 88,
    y: 214 - stage.value * 1.5,
  }));

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryBuildupDriver.label}</span>
      </div>

      <div className={`${styles.driftChartShell} ${compact ? styles.driftChartShellCompact : ""}`}>
        <svg className={styles.driftChartSvg} viewBox="0 0 420 250">
          <g className={styles.driftChartGrid}>
            <line x1="20" x2="400" y1="48" y2="48" />
            <line x1="20" x2="400" y1="126" y2="126" />
            <line x1="20" x2="400" y1="206" y2="206" />
          </g>

          <polyline
            className={styles.driftChartLine}
            fill="none"
            points={buildPolyline(plot)}
            style={{ ["--drift-accent" as string]: "#FB7185" } as CSSProperties}
          />

          {plot.map((point) => (
            <g key={point.label}>
              <circle className={styles.driftChartHalo} cx={point.x} cy={point.y} r="10" />
              <circle
                className={styles.driftChartPoint}
                cx={point.x}
                cy={point.y}
                r="5"
                style={{ ["--drift-accent" as string]: point.accent } as CSSProperties}
              />
              <text
                fill="rgba(215, 224, 234, 0.82)"
                fontSize="10.5"
                textAnchor="middle"
                x={point.x}
                y="236"
              >
                {point.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className={styles.previewMetricStack}>
        {result.previewMetrics.map((metric) => (
          <div className={styles.previewMetricRow} key={metric.label}>
            <div className={styles.previewMetricMeta}>
              <span>{metric.label}</span>
              <span>{metric.value}</span>
            </div>
            <div className={styles.previewMetricTrack}>
              <span
                className={styles.previewMetricFill}
                style={{ width: `${metric.value}%`, background: metric.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.previewBalanceRow}>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Fairness imbalance</span>
          <span className={styles.previewBalanceValue}>{result.fairnessImbalanceLevel}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Withdrawal risk</span>
          <span className={styles.previewBalanceValue}>{result.withdrawalRiskLevel}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.mainResentmentContext.label}</span>
        <span className={styles.previewChip}>{result.primaryBuildupDriver.label}</span>
        <span className={styles.previewChip}>{result.strongestEmotionalCost.label}</span>
      </div>
    </div>
  );
}
