import type { RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type RecoveryPriorityLadderProps = {
  result: RecoveryPlannerResult;
};

export function RecoveryPriorityLadder({ result }: RecoveryPriorityLadderProps) {
  const priorities = result.priorities.slice(0, 4);

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Recovery priority ladder</p>
        <h3 className={styles.visualTitle}>The planner’s ordered view of what would create the most recovery leverage first</h3>
        <p className={styles.visualCopy}>
          This ladder is deliberately practical. It prioritizes what is most likely to make recovery more possible, not what sounds most ideal in theory.
        </p>
      </div>

      <div className={styles.sourceSplitList}>
        {priorities.map((priority, index) => (
          <div className={styles.sourceSplitItem} key={priority.key}>
            <div className={styles.sourceSplitHeader}>
              <div>
                <p className={styles.visualEyebrow}>Priority {index + 1}</p>
                <h4 className={styles.sourceSplitTitle}>{priority.label}</h4>
                <p className={styles.sourceSplitDescription}>{priority.description}</p>
              </div>
              <span className={styles.sourceSplitValue}>{priority.value}</span>
            </div>

            <div className={styles.sourceSplitTrack}>
              <span
                className={styles.sourceSplitFill}
                style={{ width: `${priority.value}%`, background: priority.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
