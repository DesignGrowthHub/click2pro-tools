import type { CSSProperties } from "react";
import type { WorkStressResult } from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type LiveWorkStressPreviewProps = {
  compact?: boolean;
  label: string;
  result: WorkStressResult;
};

export function LiveWorkStressPreview({
  compact = false,
  label,
  result,
}: LiveWorkStressPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryStressDriver.label}</span>
      </div>

      <div className={styles.progressPreviewShell}>
        <div className={styles.progressPreviewFlow} aria-hidden="true">
          {result.loadSegments.map((segment, index) => (
            <div className={styles.progressPreviewStep} key={segment.key}>
              <span
                className={`${styles.progressPreviewBar} ${
                  segment.key === "low-control" || segment.key === "switching"
                    ? styles.progressPreviewBarBreak
                    : ""
                }`}
                style={
                  {
                    "--stage-height": `${Math.max(28, Math.round(segment.value * 1.1))}px`,
                    "--stage-accent": segment.accent,
                  } as CSSProperties
                }
              />
              <span className={styles.progressPreviewStepLabel}>{segment.label}</span>
              {index < result.loadSegments.length - 1 ? (
                <span className={styles.progressPreviewConnector} />
              ) : null}
            </div>
          ))}
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

      <div className={styles.previewBalanceRow}>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Control level</span>
          <span className={styles.previewBalanceValue}>{result.controlLevel}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Recovery cost</span>
          <span className={styles.previewBalanceValue}>{result.recoveryCost}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.heaviestConcentrationZone.label}</span>
        <span className={styles.previewChip}>{result.strongestHiddenCost.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulWorkLoadAdjustment.label}</span>
      </div>
    </div>
  );
}
