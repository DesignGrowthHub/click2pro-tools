import type { InnerCriticResult } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type CriticPatternMapProps = {
  result: InnerCriticResult;
};

export function CriticPatternMap({ result }: CriticPatternMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Critic pattern map</p>
        <h3 className={styles.visualTitle}>The strongest forms the critic is taking right now</h3>
        <p className={styles.visualCopy}>
          This map shows whether the critic is arriving mostly as harsh judgment, perfection demand, replay, comparison deficiency, or future-failure forecasting.
        </p>
      </div>

      <div className={styles.drainMapGrid}>
        {result.patternScores.map((pattern) => (
          <div className={styles.drainMapCard} key={pattern.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{pattern.label}</span>
              <span className={styles.drainMapValue}>{pattern.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${pattern.value}%`, background: pattern.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{pattern.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
