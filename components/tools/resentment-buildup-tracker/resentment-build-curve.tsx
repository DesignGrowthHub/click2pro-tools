import type { CSSProperties } from "react";
import type { ResentmentResult } from "@/data/resentment-buildup-tracker";
import styles from "./resentment-buildup-tracker.module.css";

type ResentmentBuildCurveProps = {
  compact?: boolean;
  result: ResentmentResult;
};

function buildPolyline(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

export function ResentmentBuildCurve({
  compact = false,
  result,
}: ResentmentBuildCurveProps) {
  const plot = result.curveStages.map((stage, index) => ({
    ...stage,
    x: 44 + index * 94,
    y: 228 - stage.value * 1.72,
  }));

  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Resentment build curve</p>
        <h3 className={styles.visualTitle}>How stored pressure rises from the first unfair moment to later emotional hardening</h3>
        <p className={styles.visualCopy}>
          This signature visual turns resentment into an accumulation read: what lands, what stays inside,
          what keeps being carried, and where the later coldness or distance begins to make sense.
        </p>
      </div>

      <div className={styles.driftChartShell}>
        <svg className={styles.driftChartSvg} viewBox="0 0 520 260">
          <g className={styles.driftChartGrid}>
            <line x1="28" x2="492" y1="52" y2="52" />
            <line x1="28" x2="492" y1="136" y2="136" />
            <line x1="28" x2="492" y1="220" y2="220" />
          </g>

          <polyline
            className={styles.driftChartLine}
            fill="none"
            points={buildPolyline(plot)}
            style={{ ["--drift-accent" as string]: "#FB7185" } as CSSProperties}
          />

          {plot.map((point) => (
            <g key={point.label}>
              <circle className={styles.driftChartHalo} cx={point.x} cy={point.y} r="12" />
              <circle
                className={styles.driftChartPoint}
                cx={point.x}
                cy={point.y}
                r="5"
                style={{ ["--drift-accent" as string]: point.accent } as CSSProperties}
              />
              <text
                fill="rgba(248, 250, 252, 0.92)"
                fontSize="11"
                textAnchor="middle"
                x={point.x}
                y="242"
              >
                {point.label}
              </text>
            </g>
          ))}
        </svg>

        <div className={styles.driftStageCards}>
          {result.curveStages.map((stage) => (
            <article className={styles.driftStageCard} key={stage.label}>
              <div className={styles.driftStageTop}>
                <span
                  className={styles.driftStageDot}
                  style={{ ["--drift-accent" as string]: stage.accent } as CSSProperties}
                />
                <span className={styles.driftStageLabel}>{stage.label}</span>
                <span className={styles.driftStageValue}>{stage.value}</span>
              </div>
              <p className={styles.driftStageNote}>{stage.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.meterStatGrid}>
          <article className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Buildup intensity</span>
            <strong className={styles.meterStatValue}>{result.buildupIntensity}</strong>
            <p className={styles.signalBarDescription}>
              This is the overall accumulation read across silence, imbalance, carrying, and later hardening.
            </p>
          </article>

          <article className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Main context</span>
            <strong className={styles.meterStatValue}>{result.mainResentmentContext.label}</strong>
            <p className={styles.signalBarDescription}>{result.mainResentmentContext.description}</p>
          </article>

          <article className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Most useful relief direction</span>
            <strong className={styles.meterStatValue}>{result.mostUsefulReliefDirection.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulReliefDirection.description}</p>
          </article>
        </div>
      </div>
    </article>
  );
}
