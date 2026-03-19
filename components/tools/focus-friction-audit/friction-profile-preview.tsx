import type { FocusAuditResult } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";

type FrictionProfilePreviewProps = {
  result: FocusAuditResult;
  label: string;
  compact?: boolean;
};

function buildFlowPoints(flowStability: number, startResistance: number, interruptionLoad: number) {
  const base = [18, 46, 30, 60, 36, 70];
  const adjustments = [
    Math.max(10, flowStability * 0.26),
    Math.max(18, 72 - interruptionLoad * 0.22),
    Math.max(14, 64 - startResistance * 0.18),
    Math.max(18, 78 - interruptionLoad * 0.24),
    Math.max(18, 68 - startResistance * 0.14),
    Math.max(10, flowStability * 0.22),
  ];

  return base
    .map((x, index) => `${x},${adjustments[index] ?? 40}`)
    .join(" ");
}

export function FrictionProfilePreview({ result, label, compact = false }: FrictionProfilePreviewProps) {
  const points = buildFlowPoints(
    result.flowStability,
    result.dimensions.startResistance,
    result.dimensions.interruptionLoad,
  );

  return (
    <div className={`${styles.previewCard} ${compact ? styles.previewCardCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewEyebrow}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewStatePill}>{result.primaryDriver.shortLabel}</span>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewSectionHead}>
          <span>Friction ranking</span>
          <span>Top blockers</span>
        </div>
        <div className={styles.previewRankingStack}>
          {result.topBlockers.slice(0, 3).map((blocker, index) => (
            <div className={styles.previewRankingRow} key={blocker.key}>
              <div className={styles.previewRankingMeta}>
                <span className={styles.previewRank}>{index + 1}</span>
                <span className={styles.previewRankLabel}>{blocker.label}</span>
              </div>
              <div className={styles.previewRankTrack}>
                <span
                  className={styles.previewRankFill}
                  style={{
                    width: `${blocker.value}%`,
                    background: `linear-gradient(90deg, ${blocker.accent}, rgba(255,255,255,0.24))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.previewDualPanel}>
        <div className={styles.previewMetricCard}>
          <span className={styles.previewMetricLabel}>Start resistance</span>
          <span className={styles.previewMetricValue}>{result.dimensions.startResistance}</span>
        </div>
        <div className={styles.previewMetricCard}>
          <span className={styles.previewMetricLabel}>Flow stability</span>
          <span className={styles.previewMetricValue}>{result.flowStability}</span>
        </div>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewSectionHead}>
          <span>Interruption heat</span>
          <span>Live profile</span>
        </div>
        <div className={styles.previewHeatRow}>
          {result.heatmap.map((metric) => (
            <div className={styles.previewHeatCell} key={metric.key}>
              <span
                className={styles.previewHeatFill}
                style={{
                  height: `${Math.max(18, metric.value)}%`,
                  background: `linear-gradient(180deg, ${metric.accent}, rgba(255,255,255,0.18))`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewSectionHead}>
          <span>Focus flow line</span>
          <span>Stability preview</span>
        </div>
        <svg aria-hidden="true" className={styles.previewFlowChart} viewBox="0 0 90 80">
          <polyline className={styles.previewFlowTrack} points="18,56 46,38 60,48 70,30" />
          <polyline points={points} className={styles.previewFlowLine} />
        </svg>
      </div>

      <p className={styles.previewSummary}>{result.signalLabel}</p>
    </div>
  );
}
