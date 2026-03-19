import type { WorkStressResult } from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type HiddenCostPanelProps = {
  result: WorkStressResult;
};

export function HiddenCostPanel({ result }: HiddenCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Hidden cost panel</p>
        <h3 className={styles.visualTitle}>Where the work load is quietly taxing clarity, patience, recovery, and recognition</h3>
        <p className={styles.visualCopy}>
          The load matters because of what it does downstream. These cards show the main places work pressure is likely extracting an after-cost.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        {result.hiddenCosts.map((metric) => (
          <div className={styles.priorityCard} key={metric.key}>
            <p className={styles.priorityCardLabel}>{metric.label}</p>
            <h4 className={styles.priorityCardTitle}>{metric.value}</h4>
            <p className={styles.signalBarDescription}>{metric.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.visualFooterNote}>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Strongest hidden cost</p>
          <p className={styles.insightCopy}>{result.strongestHiddenCost.description}</p>
        </div>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Adjustment priority</p>
          <p className={styles.insightCopy}>{result.mostUsefulWorkLoadAdjustment.description}</p>
        </div>
      </div>
    </article>
  );
}
