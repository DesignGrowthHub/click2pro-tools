import type { CSSProperties } from "react";
import type { RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type CapacityLoadPanelProps = {
  compact?: boolean;
  result: RecoveryPlannerResult;
};

export function CapacityLoadPanel({ compact = false, result }: CapacityLoadPanelProps) {
  return (
    <div className={`${styles.timelineChartWrap} ${compact ? styles.timelineChartWrapCompact : ""}`}>
      <div className={styles.capacityCompareGrid}>
        <div className={styles.capacityCompareCard}>
          <div className={styles.sourceSplitHeader}>
            <div>
              <h4 className={styles.sourceSplitTitle}>Current emotional load</h4>
              <p className={styles.sourceSplitDescription}>
                The amount of active emotional pressure your system seems to be carrying right now.
              </p>
            </div>
            <span className={styles.sourceSplitValue}>{result.emotionalLoad}</span>
          </div>
          <div className={styles.capacityCompareTrack}>
            <span
              className={styles.capacityCompareFill}
              style={{ "--capacity-width": `${result.emotionalLoad}%`, "--capacity-accent": "#FDA4AF" } as CSSProperties}
            />
          </div>
        </div>

        <div className={styles.capacityCompareCard}>
          <div className={styles.sourceSplitHeader}>
            <div>
              <h4 className={styles.sourceSplitTitle}>Current recovery capacity</h4>
              <p className={styles.sourceSplitDescription}>
                The usable room currently available for coping, resetting, and recovering well.
              </p>
            </div>
            <span className={styles.sourceSplitValue}>{result.recoveryCapacity}</span>
          </div>
          <div className={styles.capacityCompareTrack}>
            <span
              className={styles.capacityCompareFill}
              style={{ "--capacity-width": `${result.recoveryCapacity}%`, "--capacity-accent": "#93C5FD" } as CSSProperties}
            />
          </div>
        </div>
      </div>

      <div className={styles.capacitySummaryCard}>
        <div className={styles.spilloverHeader}>
          <div>
            <p className={styles.visualEyebrow}>Capacity vs load read</p>
            <h4 className={styles.spilloverTitle}>{result.primaryStage.label}</h4>
          </div>
          <span className={styles.capacityGapValue}>{result.gap}</span>
        </div>
        <p className={styles.spilloverCopy}>
          {result.gap >= 20
            ? "Load is running meaningfully ahead of available capacity, so reducing pressure matters more than asking for a quick emotional bounce-back."
            : result.gap >= 8
              ? "Load is ahead of capacity, but the gap still looks workable if the plan protects time and removes some friction."
              : "Capacity and load are still relatively close, which means a lighter reset has room to work before strain hardens."}
        </p>
        <div className={styles.priorityChipRow}>
          <span className={styles.metaChip}>{result.resetIntensity}</span>
          <span className={styles.metaChip}>{result.topPriority.label}</span>
          <span className={styles.metaChip}>{result.mostUsefulSupportType.label}</span>
        </div>
      </div>
    </div>
  );
}
