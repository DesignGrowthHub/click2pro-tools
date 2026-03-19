import type { CSSProperties } from "react";
import type { RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type LivePlannerPreviewProps = {
  compact?: boolean;
  label: string;
  result: RecoveryPlannerResult;
};

export function LivePlannerPreview({ compact = false, label, result }: LivePlannerPreviewProps) {
  const metrics = [
    { label: "Load", value: result.emotionalLoad, accent: "#FDA4AF" },
    { label: "Capacity", value: result.recoveryCapacity, accent: "#93C5FD" },
    { label: "Support", value: result.supportLevel, accent: "#6EE7B7" },
    { label: "Urgency", value: result.urgencyLevel, accent: "#FCD34D" },
  ];

  return (
    <div className={`${styles.previewPanel} ${compact ? styles.previewPanelCompact : ""}`}>
      <div className={styles.previewHeader}>
        <div>
          <p className={styles.previewLabel}>{label}</p>
          <h3 className={styles.previewTitle}>{result.band.title}</h3>
        </div>
        <span className={styles.previewScore}>{result.primaryStage.intensity}</span>
      </div>

      <div className={styles.plannerMiniCompare}>
        <div className={styles.plannerMiniColumn}>
          <div className={styles.plannerMiniMeta}>
            <span>Load</span>
            <span>{result.emotionalLoad}</span>
          </div>
          <div className={styles.plannerMiniTrack}>
            <span
              className={styles.plannerMiniFill}
              style={{ "--planner-fill": `${result.emotionalLoad}%`, "--planner-accent": "#FDA4AF" } as CSSProperties}
            />
          </div>
        </div>

        <div className={styles.plannerMiniColumn}>
          <div className={styles.plannerMiniMeta}>
            <span>Capacity</span>
            <span>{result.recoveryCapacity}</span>
          </div>
          <div className={styles.plannerMiniTrack}>
            <span
              className={styles.plannerMiniFill}
              style={{ "--planner-fill": `${result.recoveryCapacity}%`, "--planner-accent": "#93C5FD" } as CSSProperties}
            />
          </div>
        </div>
      </div>

      <div className={styles.previewMetricGrid}>
        {metrics.map((metric) => (
          <div className={styles.previewMetric} key={metric.label}>
            <span>{metric.label}</span>
            <span className={styles.previewMetricValue} style={{ "--metric-accent": metric.accent } as CSSProperties}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.plannerPriorityList}>
        {result.priorities.slice(0, 3).map((priority, index) => (
          <div className={styles.plannerPriorityItem} key={priority.key}>
            <span className={styles.previewBadge}>{index + 1}</span>
            <div>
              <p className={styles.previewMetricLabel}>{priority.label}</p>
              <p className={styles.sideCardFootnote}>{priority.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.plannerResetGrid}>
        {result.resetPath.map((stage) => (
          <div className={styles.plannerResetItem} key={stage.range}>
            <span className={styles.previewLabel}>{stage.range}</span>
            <p className={styles.previewMetricLabel}>{stage.title}</p>
          </div>
        ))}
      </div>

      <p className={styles.previewFootnote}>
        The live preview shifts with every answer so the path stays realistic: stage, urgency, strongest support lever, and the 7-day shape all redraw in real time.
      </p>
    </div>
  );
}
