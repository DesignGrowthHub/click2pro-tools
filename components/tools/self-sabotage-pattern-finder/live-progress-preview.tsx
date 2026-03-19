import type { CSSProperties } from "react";
import type { SelfSabotageResult } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type LiveProgressPreviewProps = {
  compact?: boolean;
  label: string;
  result: SelfSabotageResult;
};

export function LiveProgressPreview({
  compact = false,
  label,
  result,
}: LiveProgressPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryDerailmentTrigger.label}</span>
      </div>

      <div className={styles.progressPreviewShell}>
        <div className={styles.progressPreviewFlow} aria-hidden="true">
          {result.progressStages.map((stage, index) => (
            <div className={styles.progressPreviewStep} key={stage.label}>
              <span
                className={`${styles.progressPreviewBar} ${
                  stage.kind === "break" ? styles.progressPreviewBarBreak : ""
                }`}
                style={
                  {
                    "--stage-height": `${Math.max(28, Math.round(stage.value * 1.1))}px`,
                    "--stage-accent": stage.accent,
                  } as CSSProperties
                }
              />
              <span className={styles.progressPreviewStepLabel}>{stage.label}</span>
              {index < result.progressStages.length - 1 ? (
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
          <span className={styles.previewBalanceLabel}>Interruption timing</span>
          <span className={styles.previewBalanceValue}>{result.interruptionTiming}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Restart flex</span>
          <span className={styles.previewBalanceValue}>{result.restartFlex}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.mostCommonInterruptionPoint.label}</span>
        <span className={styles.previewChip}>{result.strongestHiddenCost.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulInterruptionStrategy.label}</span>
      </div>
    </div>
  );
}
