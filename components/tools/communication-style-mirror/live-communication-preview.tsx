import type { CSSProperties } from "react";
import type { CommunicationStyleResult } from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type LiveCommunicationPreviewProps = {
  compact?: boolean;
  label: string;
  result: CommunicationStyleResult;
};

export function LiveCommunicationPreview({
  compact = false,
  label,
  result,
}: LiveCommunicationPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryCommunicationDistortion.label}</span>
      </div>

      <div className={styles.progressPreviewShell}>
        <div className={styles.progressPreviewFlow} aria-hidden="true">
          {result.dialogueStages.map((stage, index) => (
            <div className={styles.progressPreviewStep} key={stage.label}>
              <span
                className={`${styles.progressPreviewBar} ${
                  stage.kind === "distortion" ? styles.progressPreviewBarBreak : ""
                }`}
                style={
                  {
                    "--stage-height": `${Math.max(28, Math.round(stage.value * 1.1))}px`,
                    "--stage-accent": stage.accent,
                  } as CSSProperties
                }
              />
              <span className={styles.progressPreviewStepLabel}>{stage.label}</span>
              {index < result.dialogueStages.length - 1 ? (
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
          <span className={styles.previewBalanceLabel}>Defensiveness</span>
          <span className={styles.previewBalanceValue}>{result.defensivenessLevel}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Repair strength</span>
          <span className={styles.previewBalanceValue}>{result.repairStrength}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.mainPressureZone.label}</span>
        <span className={styles.previewChip}>{result.strongestStableTrait.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulCommunicationAdjustment.label}</span>
      </div>
    </div>
  );
}
