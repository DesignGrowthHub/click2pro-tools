import type { FocusAuditResult } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";

type OutputImpactChartProps = {
  result: FocusAuditResult;
};

export function OutputImpactChart({ result }: OutputImpactChartProps) {
  const metrics = [
    { label: "Consistency", value: result.outputImpact.consistency, accent: "#60A5FA" },
    { label: "Completion", value: result.outputImpact.completion, accent: "#FB7185" },
    { label: "Confidence", value: result.outputImpact.confidence, accent: "#84CC16" },
  ];

  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Focus output impact</p>
        <h3 className={styles.visualTitle}>How friction is affecting day-to-day output</h3>
        <p className={styles.visualCopy}>
          These metrics reflect negative impact rather than performance quality. They show where focus drag is landing in practical terms.
        </p>
      </div>

      <div className={styles.outputGrid}>
        {metrics.map((metric) => (
          <article className={styles.outputCard} key={metric.label}>
            <div className={styles.outputCardTop}>
              <span className={styles.outputLabel}>{metric.label}</span>
              <span className={styles.outputValue}>{metric.value}</span>
            </div>
            <div className={styles.outputTrack}>
              <span
                className={styles.outputFill}
                style={{
                  width: `${metric.value}%`,
                  background: `linear-gradient(90deg, ${metric.accent}, rgba(255,255,255,0.24))`,
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
