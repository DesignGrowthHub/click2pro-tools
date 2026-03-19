import type { ReassuranceResult } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type ReassuranceContextMapProps = {
  result: ReassuranceResult;
};

export function ReassuranceContextMap({ result }: ReassuranceContextMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Reassurance context map</p>
        <h3 className={styles.visualTitle}>Where reassurance-seeking is most likely to take over the moment</h3>
        <p className={styles.visualCopy}>
          This context map shows where uncertainty becomes most emotionally expensive, which is usually where checking, asking, rereading, or indirect reassurance get strongest.
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
