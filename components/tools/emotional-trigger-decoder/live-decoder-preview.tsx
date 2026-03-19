import type { TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";
import { TriggerClusterMap } from "./trigger-cluster-map";

type LiveDecoderPreviewProps = {
  compact?: boolean;
  label: string;
  result: TriggerDecoderResult;
};

export function LiveDecoderPreview({ compact = false, label, result }: LiveDecoderPreviewProps) {
  const metrics = [
    { label: "Sensitivity", value: result.dimensions.triggerSensitivity, accent: "#67E8F9" },
    { label: "Intensity", value: result.dimensions.reactionIntensity, accent: "#FB7185" },
    { label: "Spillover", value: result.dimensions.spilloverLoad, accent: "#60A5FA" },
    { label: "Recovery", value: result.dimensions.recoveryDrag, accent: "#C4B5FD" },
  ];

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.dominantSequence.label}</span>
      </div>

      <TriggerClusterMap compact result={result} showLabels={!compact} />

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
        <span className={styles.previewChip}>{result.dominantCluster.label}</span>
        <span className={styles.previewChip}>{result.recoveryLoadEstimate}</span>
      </div>
    </div>
  );
}
