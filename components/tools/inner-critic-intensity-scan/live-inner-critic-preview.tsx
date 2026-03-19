import type { CSSProperties } from "react";
import type { InnerCriticResult } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type LiveInnerCriticPreviewProps = {
  compact?: boolean;
  label: string;
  result: InnerCriticResult;
};

export function LiveInnerCriticPreview({
  compact = false,
  label,
  result,
}: LiveInnerCriticPreviewProps) {
  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewDescriptor}>{result.primaryCriticStyle.label}</span>
      </div>

      <div className={styles.miniTrustMeter}>
        <div className={styles.miniTrustOrb}>
          <span
            className={styles.miniTrustRing}
            style={{ ["--trust-fill" as string]: `${result.criticIntensityLevel}%` }}
          />
          <div className={styles.miniTrustCore}>
            <span className={styles.miniTrustValue}>{result.criticIntensityLevel}</span>
            <span className={styles.miniTrustLabel}>Voice force</span>
          </div>
        </div>

        <div className={styles.waveformRow} aria-hidden="true">
          {result.waveform.map((bar, index) => (
            <span
              className={styles.waveformBar}
              key={`${bar.value}-${index}`}
              style={
                {
                  "--wave-height": `${Math.max(18, Math.round(bar.value * 0.9))}px`,
                  "--wave-accent": bar.accent,
                } as CSSProperties
              }
            />
          ))}
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
          <span className={styles.previewBalanceLabel}>Repetition load</span>
          <span className={styles.previewBalanceValue}>{result.repetitionLevelScore}</span>
        </div>
        <div className={styles.previewBalanceCard}>
          <span className={styles.previewBalanceLabel}>Recovery difficulty</span>
          <span className={styles.previewBalanceValue}>{result.recoveryDifficulty}</span>
        </div>
      </div>

      <div className={styles.previewChipRow}>
        <span className={styles.previewChip}>{result.mainActivationContext.label}</span>
        <span className={styles.previewChip}>{result.strongestInternalCost.label}</span>
        <span className={styles.previewChip}>{result.mostUsefulSofteningDirection.label}</span>
      </div>
    </div>
  );
}
