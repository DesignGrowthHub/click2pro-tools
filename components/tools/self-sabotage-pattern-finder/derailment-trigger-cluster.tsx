import type { SelfSabotageResult } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type DerailmentTriggerClusterProps = {
  result: SelfSabotageResult;
};

export function DerailmentTriggerCluster({ result }: DerailmentTriggerClusterProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Derailment trigger cluster</p>
        <h3 className={styles.visualTitle}>The strongest drivers currently pulling progress off its clean path</h3>
        <p className={styles.visualCopy}>
          These clusters show whether the pattern is being reinforced most by exposure, uncertainty, perfection pressure, self-doubt, success discomfort, or disappointment around failure.
        </p>
      </div>

      <div className={styles.drainMapGrid}>
        {result.triggerScores.map((trigger) => (
          <div className={styles.drainMapCard} key={trigger.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{trigger.label}</span>
              <span className={styles.drainMapValue}>{trigger.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${trigger.value}%`, background: trigger.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{trigger.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
