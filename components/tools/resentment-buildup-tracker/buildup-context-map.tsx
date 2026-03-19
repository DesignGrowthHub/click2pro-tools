import type { ResentmentResult } from "@/data/resentment-buildup-tracker";
import styles from "./resentment-buildup-tracker.module.css";

type BuildupContextMapProps = {
  result: ResentmentResult;
};

export function BuildupContextMap({ result }: BuildupContextMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Buildup context map</p>
        <h3 className={styles.visualTitle}>Where resentment is most likely to keep gathering without being cleared</h3>
        <p className={styles.visualCopy}>
          Some pressure comes from the context as much as the moment. This map shows where imbalance,
          repeated carrying, or low repair are most likely to stay active long enough to become stored weight.
        </p>
      </div>

      <div className={styles.drainMapGrid}>
        {result.contextScores.map((context) => (
          <div className={styles.drainMapCard} key={context.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{context.label}</span>
              <span className={styles.drainMapValue}>{context.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${context.value}%`, background: context.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{context.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
