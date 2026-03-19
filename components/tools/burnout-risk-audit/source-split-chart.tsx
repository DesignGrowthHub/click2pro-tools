import type { BurnoutAuditResult } from "@/data/burnout-risk-audit";
import styles from "./burnout-risk-audit.module.css";

type SourceSplitChartProps = {
  result: BurnoutAuditResult;
};

export function SourceSplitChart({ result }: SourceSplitChartProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualCardHeader}>
        <p className={styles.visualEyebrow}>Source load split</p>
        <h3 className={styles.visualTitle}>Where the pressure is clustering</h3>
        <p className={styles.visualCopy}>
          This view converts your selected drain areas into a cleaner source map, so the result is not just a score.
        </p>
      </div>

      <div aria-hidden="true" className={styles.sourceStack}>
        {result.sourceSplit.map((bucket) => (
          <span
            className={styles.sourceStackSegment}
            key={bucket.key}
            style={{ width: `${bucket.value}%`, background: bucket.accent }}
          />
        ))}
      </div>

      <div className={styles.sourceList}>
        {result.sourceSplit.map((bucket) => (
          <div className={styles.sourceRow} key={bucket.key}>
            <div className={styles.sourceRowMeta}>
              <span className={styles.sourceDot} style={{ background: bucket.accent }} />
              <span className={styles.sourceLabel}>{bucket.label}</span>
            </div>
            <span className={styles.sourceValue}>{bucket.value}%</span>
          </div>
        ))}
      </div>

      <p className={styles.visualInsight}>
        The dominant source profile currently leans toward {result.dominantSources[0]?.label.toLowerCase() ?? "balanced load"}.
      </p>
    </div>
  );
}
