import type { AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";
import { ClosenessWithdrawalMap } from "./closeness-withdrawal-map";

type LiveProfilePreviewProps = {
  compact?: boolean;
  label: string;
  result: AttachmentResult;
};

export function LiveProfilePreview({ compact = false, label, result }: LiveProfilePreviewProps) {
  const metrics = [
    { label: "Closeness", value: result.dimensions.closenessComfort, accent: "#93C5FD" },
    { label: "Reassurance", value: result.dimensions.reassurancePull, accent: "#FDA4AF" },
    { label: "Withdrawal", value: result.dimensions.withdrawalTendency, accent: "#C4B5FD" },
    { label: "Steadiness", value: result.dimensions.emotionalSteadiness, accent: "#6EE7B7" },
  ];

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.profile.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.profile.descriptor}</span>
      </div>

      <ClosenessWithdrawalMap compact result={result} showAxes={false} />

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

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.relationalPressureTrigger.label}</span>
        <span className={styles.previewChip}>{result.strongestStabilizingTrait}</span>
      </div>
    </div>
  );
}
