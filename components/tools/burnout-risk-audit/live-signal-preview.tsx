import { burnoutDimensions, type BurnoutAuditResult } from "@/data/burnout-risk-audit";
import styles from "./burnout-risk-audit.module.css";
import { MetricDial } from "./metric-dial";

type LiveSignalPreviewProps = {
  result: BurnoutAuditResult;
  label: string;
  compact?: boolean;
};

export function LiveSignalPreview({ result, label, compact = false }: LiveSignalPreviewProps) {
  return (
    <div className={`${styles.livePreviewCard} ${compact ? styles.livePreviewCompact : ""}`}>
      <div className={styles.livePreviewTop}>
        <div>
          <p className={styles.livePreviewEyebrow}>{label}</p>
          <h3 className={styles.livePreviewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.livePreviewBadge}>{result.band.signalTone}</span>
      </div>

      <div className={styles.livePreviewBody}>
        <MetricDial band={result.band} caption="Live load" label="Load" size="small" value={result.score} />

        <div className={styles.livePreviewSignals}>
          {burnoutDimensions.map((dimension) => (
            <div className={styles.livePreviewSignalRow} key={dimension.key}>
              <div className={styles.livePreviewSignalMeta}>
                <span className={styles.livePreviewSignalName}>{dimension.label}</span>
                <span className={styles.livePreviewSignalValue}>{result.dimensions[dimension.key]}</span>
              </div>
              <div className={styles.livePreviewSignalTrack}>
                <span
                  className={styles.livePreviewSignalFill}
                  style={{
                    width: `${result.dimensions[dimension.key]}%`,
                    background: `linear-gradient(90deg, ${dimension.accent}, ${result.band.gradientTo})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.livePreviewSummary}>{result.signalLabel}</p>
    </div>
  );
}
