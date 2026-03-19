import type { RelationshipClarityResult } from "@/data/relationship-clarity-check";
import styles from "./relationship-clarity-check.module.css";

type MixedSignalSpreadProps = {
  result: RelationshipClarityResult;
};

export function MixedSignalSpread({ result }: MixedSignalSpreadProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Mixed-signal spread</p>
        <h3 className={styles.visualTitle}>The top relationship signal problems creating interpretive drag</h3>
        <p className={styles.visualCopy}>
          This view isolates the strongest confusion generators so the result does not stay vague. These are the signal breaks most likely keeping you in analysis.
        </p>
      </div>

      <div className={styles.spreadGrid}>
        {result.signalIssues.map((issue) => (
          <div className={styles.spreadCard} key={issue.key}>
            <div className={styles.spreadTop}>
              <span className={styles.spreadTitle}>{issue.label}</span>
              <span className={styles.spreadValue}>{issue.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${issue.value}%`, background: issue.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{issue.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
