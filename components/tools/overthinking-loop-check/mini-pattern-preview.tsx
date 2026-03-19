import type { OverthinkingResult } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";
import { PatternMap } from "./pattern-map";

type MiniPatternPreviewProps = {
  result: OverthinkingResult;
  label: string;
  compact?: boolean;
};

export function MiniPatternPreview({ result, label, compact = false }: MiniPatternPreviewProps) {
  return (
    <div className={`${styles.previewCard} ${compact ? styles.previewCardCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewEyebrow}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewZoneBadge}>{result.zone.label}</span>
      </div>

      <PatternMap ariaLabel="Live pattern preview" compact result={result} showLabels={false} />

      <div className={styles.previewMetrics}>
        <div className={styles.previewMetric}>
          <span className={styles.previewMetricLabel}>Top dimension</span>
          <span className={styles.previewMetricValue}>{result.dominantDimensions[0]?.label ?? "Pattern load"}</span>
        </div>
        <div className={styles.previewMetric}>
          <span className={styles.previewMetricLabel}>Top trigger</span>
          <span className={styles.previewMetricValue}>{result.dominantTriggers[0]?.label ?? "Open loop"}</span>
        </div>
      </div>

      <p className={styles.previewSummary}>{result.signalLabel}</p>
    </div>
  );
}
