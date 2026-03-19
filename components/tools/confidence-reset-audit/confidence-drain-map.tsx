import type { ConfidenceResetResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type ConfidenceDrainMapProps = {
  result: ConfidenceResetResult;
};

export function ConfidenceDrainMap({ result }: ConfidenceDrainMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Confidence drain map</p>
        <h3 className={styles.visualTitle}>The strongest drains currently thinning confidence out</h3>
        <p className={styles.visualCopy}>
          The drain map shows whether the main leak is comparison, second-guessing, perfection pressure, fear of being wrong, visibility strain, or slow recovery after mistakes.
        </p>
      </div>

      <div className={styles.drainMapGrid}>
        {result.drainSources.map((drain) => (
          <div className={styles.drainMapCard} key={drain.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{drain.label}</span>
              <span className={styles.drainMapValue}>{drain.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${drain.value}%`, background: drain.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{drain.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
