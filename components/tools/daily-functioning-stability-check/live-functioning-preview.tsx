import type { CSSProperties } from "react";
import type { DailyFunctioningResult } from "@/data/daily-functioning-stability-check";
import styles from "./daily-functioning-stability-check.module.css";

type LiveFunctioningPreviewProps = {
  compact?: boolean;
  label: string;
  result: DailyFunctioningResult;
};

export function LiveFunctioningPreview({
  compact = false,
  label,
  result,
}: LiveFunctioningPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryInstabilityDriver.label}</span>
      </div>

      <div className={styles.progressPreviewShell}>
        <div className={styles.progressPreviewFlow} aria-hidden="true">
          {result.dashboardMetrics.map((metric, index) => (
            <div className={styles.progressPreviewStep} key={metric.label}>
              <span
                className={`${styles.progressPreviewBar} ${
                  metric.label.toLowerCase().includes("slip") ? styles.progressPreviewBarBreak : ""
                }`}
                style={
                  {
                    "--stage-height": `${Math.max(28, Math.round(metric.value * 1.1))}px`,
                    "--stage-accent": metric.accent,
                  } as CSSProperties
                }
              />
              <span className={styles.progressPreviewStepLabel}>{metric.label}</span>
              {index < result.dashboardMetrics.length - 1 ? (
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
          <span className={styles.previewBalanceLabel}>Rhythm consistency</span>
          <span className={styles.previewBalanceValue}>{result.rhythmConsistency}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Recovery margin</span>
          <span className={styles.previewBalanceValue}>{result.recoveryLevel}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.strongestSlipPoint.label}</span>
        <span className={styles.previewChip}>{result.strongestRemainingStableTrait.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulDailyResetDirection.label}</span>
      </div>
    </div>
  );
}
