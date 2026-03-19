import type { ResentmentResult } from "@/data/resentment-buildup-tracker";
import styles from "./resentment-buildup-tracker.module.css";

type SilentCostPanelProps = {
  result: ResentmentResult;
};

export function SilentCostPanel({ result }: SilentCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Silent cost panel</p>
        <h3 className={styles.visualTitle}>How stored resentment is changing warmth, patience, and emotional availability</h3>
        <p className={styles.visualCopy}>
          The hidden cost is often relational before it is verbal. These cards show where the buildup is already
          reducing openness, softening patience, or making distance feel safer than continued carrying.
        </p>
      </div>

      <div className={styles.recoveryGrid}>
        {result.emotionalCosts.map((cost) => (
          <article className={styles.recoveryCard} key={cost.key}>
            <div className={styles.recoveryCardTop}>
              <p className={styles.recoveryCardTitle}>{cost.label}</p>
              <span className={styles.recoveryCardValue}>{cost.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${cost.value}%`, background: cost.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{cost.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.recoverySummaryCard}>
        <p className={styles.recoverySummaryEyebrow}>Most useful relief direction</p>
        <h4 className={styles.recoverySummaryTitle}>{result.mostUsefulReliefDirection.label}</h4>
        <p className={styles.recoverySummaryCopy}>{result.mostUsefulReliefDirection.description}</p>
        <p className={styles.signalBarDescription}>
          Strongest emotional cost: {result.strongestEmotionalCost.label.toLowerCase()}.
        </p>
      </div>
    </article>
  );
}
