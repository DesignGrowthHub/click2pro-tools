import type { RelationshipClarityResult } from "@/data/relationship-clarity-check";
import styles from "./relationship-clarity-check.module.css";

type LiveRelationshipPreviewProps = {
  compact?: boolean;
  label: string;
  result: RelationshipClarityResult;
};

export function LiveRelationshipPreview({
  compact = false,
  label,
  result,
}: LiveRelationshipPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryConfusionDriver.label}</span>
      </div>

      <div className={styles.miniMatrixShell}>
        <div className={styles.miniMatrixFrame}>
          <div className={styles.miniMatrixGrid}>
            <span className={styles.miniMatrixQuadrant} />
            <span className={styles.miniMatrixQuadrant} />
            <span className={styles.miniMatrixQuadrant} />
            <span className={styles.miniMatrixQuadrant} />
          </div>
          <div
            className={styles.miniMatrixPoint}
            style={{
              left: `${Math.max(8, Math.min(92, result.matrixPlacement.x))}%`,
              top: `${100 - Math.max(8, Math.min(92, result.matrixPlacement.y))}%`,
            }}
          >
            <span className={styles.miniMatrixPulse} />
            <span className={styles.miniMatrixDot} />
          </div>
        </div>

        <div className={styles.previewMetricStack}>
          {result.matrixInsights.map((metric) => (
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
      </div>

      <div className={styles.previewBalanceRow}>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Clarity level</span>
          <span className={styles.previewBalanceValue}>{result.clarityLevel}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Mixed-signal density</span>
          <span className={styles.previewBalanceValue}>{result.mixedSignalDensity}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.heaviestUnresolvedZone.label}</span>
        <span className={styles.previewChip}>{result.strongestStableSignal.label}</span>
        <span className={styles.previewChip}>{result.likelyPatternCost.label}</span>
      </div>
    </div>
  );
}
