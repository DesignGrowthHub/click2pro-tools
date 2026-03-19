import type { ConfidenceResetResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type LiveConfidencePreviewProps = {
  compact?: boolean;
  label: string;
  result: ConfidenceResetResult;
};

export function LiveConfidencePreview({
  compact = false,
  label,
  result,
}: LiveConfidencePreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryConfidenceDrain.label}</span>
      </div>

      <div className={styles.miniTrustMeter}>
        <div className={styles.miniTrustOrb}>
          <span
            className={styles.miniTrustRing}
            style={{ ["--trust-fill" as string]: `${result.selfTrustLevel}%` }}
          />
          <div className={styles.miniTrustCore}>
            <span className={styles.miniTrustValue}>{result.selfTrustLevel}</span>
            <span className={styles.miniTrustLabel}>Self-trust</span>
          </div>
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
      </div>

      <div className={styles.previewBalanceRow}>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Hesitation load</span>
          <span className={styles.previewBalanceValue}>{result.hesitationLoad}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Recovery potential</span>
          <span className={styles.previewBalanceValue}>{result.recoveryPotential}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.mainBreakdownZone.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulResetPriority.label}</span>
        <span className={styles.previewChip}>{result.strongestStableTrait.label}</span>
      </div>
    </div>
  );
}
