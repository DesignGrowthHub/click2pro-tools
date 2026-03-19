import type { BoundaryStrengthResult } from "@/data/boundary-strength-scanner";
import styles from "./boundary-strength-scanner.module.css";

type HiddenCostPanelProps = {
  result: BoundaryStrengthResult;
};

export function HiddenCostPanel({ result }: HiddenCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Hidden cost panel</p>
        <h3 className={styles.visualTitle}>What the flexible-looking moment may be costing you later</h3>
        <p className={styles.visualCopy}>
          Boundary strain often looks manageable in the interaction and expensive afterward. This view surfaces the cost that tends to stay private.
        </p>
      </div>

      <div className={styles.recoveryGrid}>
        {result.hiddenCosts.map((metric) => (
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
        <p className={styles.visualEyebrow}>Likely hidden cost</p>
        <h4 className={styles.recoverySummaryTitle}>{result.hiddenCost.label}</h4>
        <p className={styles.visualCopy}>{result.hiddenCostInsight}</p>
      </div>
    </article>
  );
}
