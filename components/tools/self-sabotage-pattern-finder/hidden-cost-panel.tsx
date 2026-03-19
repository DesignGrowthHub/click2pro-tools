import type { SelfSabotageResult } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type HiddenCostPanelProps = {
  result: SelfSabotageResult;
};

export function HiddenCostPanel({ result }: HiddenCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Hidden cost panel</p>
        <h3 className={styles.visualTitle}>What the interruption is costing in confidence, continuity, and distance from the goal</h3>
        <p className={styles.visualCopy}>
          The break matters partly because it changes the emotional system after it happens. These cost cards show where that after-cost is landing most clearly.
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
          <p className={styles.insightEyebrow}>Most useful interruption strategy</p>
          <p className={styles.insightCopy}>{result.mostUsefulInterruptionStrategy.description}</p>
        </div>
      </div>
    </article>
  );
}
