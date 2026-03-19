import type { BoundaryStrengthResult } from "@/data/boundary-strength-scanner";
import styles from "./boundary-strength-scanner.module.css";

type LiveSignalPreviewProps = {
  compact?: boolean;
  label: string;
  result: BoundaryStrengthResult;
};

export function LiveSignalPreview({ compact = false, label, result }: LiveSignalPreviewProps) {
  const metrics = [
    { label: "Pressure", value: result.dimensions.approvalPressure, accent: "#FB7185" },
    { label: "Clarity", value: result.dimensions.selfSignalClarity, accent: "#6EE7B7" },
    { label: "Override", value: result.dimensions.conflictGuiltOverride, accent: "#FCD34D" },
    { label: "After-cost", value: result.dimensions.resentmentRisk, accent: "#C4B5FD" },
  ];

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.dominantPattern.label}</span>
      </div>

      <div className={styles.previewStageGrid}>
        {result.driftStages.map((stage) => (
          <div className={styles.previewStageCard} key={stage.key}>
            <div className={styles.previewMetricMeta}>
              <span>{stage.shortLabel}</span>
              <span>{stage.value}</span>
            </div>
            <div className={styles.triggerTrack}>
              <span
                className={styles.triggerFill}
                style={{ width: `${stage.value}%`, background: stage.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.previewMetricStack}>
        {metrics.map((metric) => (
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
          <span className={styles.previewBalanceLabel}>Boundary signal</span>
          <span className={styles.previewBalanceValue}>{result.selfPriority}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Pressure load</span>
          <span className={styles.previewBalanceValue}>{result.otherPriority}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.primaryDriver.label}</span>
        <span className={styles.previewChip}>{result.mainWeakZone.label}</span>
        <span className={styles.previewChip}>{result.hiddenCost.label}</span>
      </div>
    </div>
  );
}
