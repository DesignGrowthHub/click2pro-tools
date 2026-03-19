import type { ConfidenceResetResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type ResetPriorityPanelProps = {
  result: ConfidenceResetResult;
};

export function ResetPriorityPanel({ result }: ResetPriorityPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Reset priority panel</p>
        <h3 className={styles.visualTitle}>What needs attention first, what is still stable, and where confidence can grow next</h3>
        <p className={styles.visualCopy}>
          This is the practical translation layer of the report. It turns confidence strain into a clearer reset sequence.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Top reset priority</p>
          <h4 className={styles.priorityCardTitle}>{result.mostUsefulResetPriority.label}</h4>
          <p className={styles.signalBarDescription}>{result.mostUsefulResetPriority.description}</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Main breakdown zone</p>
          <h4 className={styles.priorityCardTitle}>{result.mainBreakdownZone.label}</h4>
          <p className={styles.signalBarDescription}>{result.mainBreakdownZone.description}</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Strongest stable trait</p>
          <h4 className={styles.priorityCardTitle}>{result.strongestStableTrait.label}</h4>
          <p className={styles.signalBarDescription}>{result.strongestStableTrait.description}</p>
        </div>
        <div className={styles.priorityCard}>
          <p className={styles.priorityCardLabel}>Likely next confidence gain</p>
          <h4 className={styles.priorityCardTitle}>{result.likelyNextConfidenceGain.label}</h4>
          <p className={styles.signalBarDescription}>{result.likelyNextConfidenceGain.description}</p>
        </div>
      </div>
    </article>
  );
}
