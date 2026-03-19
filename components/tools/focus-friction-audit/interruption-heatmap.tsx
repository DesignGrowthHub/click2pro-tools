import type { FocusAuditResult } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";

type InterruptionHeatmapProps = {
  result: FocusAuditResult;
};

export function InterruptionHeatmap({ result }: InterruptionHeatmapProps) {
  const hottestMetric = [...result.heatmap].sort((a, b) => b.value - a.value)[0];

  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Interruption heatmap</p>
        <h3 className={styles.visualTitle}>Where attention tends to fracture</h3>
        <p className={styles.visualCopy}>
          This view turns the friction profile into a structured attention-breakdown panel so the pattern is easier to act on.
        </p>
      </div>

      <div className={styles.heatGrid}>
        {result.heatmap.map((metric) => (
          <article className={styles.heatCell} key={metric.key}>
            <div className={styles.heatCellTop}>
              <span className={styles.heatLabel}>{metric.label}</span>
              <span className={styles.heatValue}>{metric.value}</span>
            </div>
            <div className={styles.heatTrack}>
              <span
                className={styles.heatFill}
                style={{
                  width: `${metric.value}%`,
                  background: `linear-gradient(90deg, ${metric.accent}, rgba(255,255,255,0.24))`,
                }}
              />
            </div>
          </article>
        ))}
      </div>

      <p className={styles.visualInsight}>
        The hottest attention fracture point currently looks like {hottestMetric?.label.toLowerCase() ?? "mental clutter"}.
      </p>
    </div>
  );
}
