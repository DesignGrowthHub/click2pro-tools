import type { DailyFunctioningResult } from "@/data/daily-functioning-stability-check";
import styles from "./daily-functioning-stability-check.module.css";

type FunctioningCostPanelProps = {
  result: DailyFunctioningResult;
};

export function FunctioningCostPanel({ result }: FunctioningCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Functioning cost panel</p>
        <h3 className={styles.visualTitle}>What daily instability is costing once steadiness drops and the rest of the day starts compensating for it</h3>
        <p className={styles.visualCopy}>
          Daily instability matters because it creates downstream costs. These cards show where clarity, follow-through, emotional buffering, and day-end recovery are most likely paying for the wobble.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        {result.costMetrics.map((metric) => (
          <div className={styles.priorityCard} key={metric.key}>
            <p className={styles.priorityCardLabel}>{metric.label}</p>
            <h4 className={styles.priorityCardTitle}>{metric.value}</h4>
            <p className={styles.signalBarDescription}>{metric.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.visualFooterNote}>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Strongest remaining stable trait</p>
          <p className={styles.insightCopy}>{result.strongestRemainingStableTrait.description}</p>
        </div>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Reset direction</p>
          <p className={styles.insightCopy}>{result.mostUsefulDailyResetDirection.description}</p>
        </div>
      </div>
    </article>
  );
}
