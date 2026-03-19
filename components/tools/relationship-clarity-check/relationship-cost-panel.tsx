import type { RelationshipClarityResult } from "@/data/relationship-clarity-check";
import styles from "./relationship-clarity-check.module.css";

type RelationshipCostPanelProps = {
  result: RelationshipClarityResult;
};

export function RelationshipCostPanel({ result }: RelationshipCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Relationship cost panel</p>
        <h3 className={styles.visualTitle}>How the confusion is likely affecting your attention, mood, and movement</h3>
        <p className={styles.visualCopy}>
          Confusing relationships do not only create uncertainty. They also create ongoing cost. This panel shows where the ambiguity is most likely landing in everyday life.
        </p>
      </div>

      <div className={styles.recoveryGrid}>
        {result.costMetrics.map((metric) => (
          <div className={styles.recoveryCard} key={metric.key}>
            <div className={styles.recoveryCardTop}>
              <p className={styles.recoveryCardTitle}>{metric.label}</p>
              <span className={styles.recoveryCardValue}>{metric.value}</span>
            </div>
            <div className={styles.recoveryTrack}>
              <span
                className={styles.recoveryFill}
                style={{ width: `${metric.value}%`, background: metric.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{metric.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.recoverySummaryCard}>
        <p className={styles.visualEyebrow}>Likely pattern cost</p>
        <h4 className={styles.recoverySummaryTitle}>{result.likelyPatternCost.label}</h4>
        <p className={styles.visualCopy}>
          The heaviest cost here appears to be {result.likelyPatternCost.label.toLowerCase()}, which often means the relationship is taking up more internal room than its actual clarity level would justify.
        </p>
      </div>
    </article>
  );
}
