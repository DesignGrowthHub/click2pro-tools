import type { SleepResult } from "@/data/sleep-pressure-check";
import styles from "./sleep-pressure-check.module.css";

type DisruptionSourcePanelProps = {
  result: SleepResult;
};

export function DisruptionSourcePanel({ result }: DisruptionSourcePanelProps) {
  const sources = result.sourceScores.slice(0, 5);

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Disruption source split</p>
        <h3 className={styles.visualTitle}>What is feeding sleep pressure most right now</h3>
        <p className={styles.visualCopy}>
          These categories group the main contributors behind the score so you can see whether the pressure is mostly mental, structural, fragmented, emotional, or behavioral.
        </p>
      </div>

      <div className={styles.sourceSplitList}>
        {sources.map((source) => (
          <div className={styles.sourceSplitItem} key={source.key}>
            <div className={styles.sourceSplitHeader}>
              <div>
                <h4 className={styles.sourceSplitTitle}>{source.label}</h4>
                <p className={styles.sourceSplitDescription}>{source.description}</p>
              </div>
              <span className={styles.sourceSplitValue}>{source.value}</span>
            </div>

            <div className={styles.sourceSplitTrack}>
              <span
                className={styles.sourceSplitFill}
                style={{ width: `${source.value}%`, background: source.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
