import type { InnerCriticResult } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type VoiceCostPanelProps = {
  result: InnerCriticResult;
};

export function VoiceCostPanel({ result }: VoiceCostPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Cost of the voice panel</p>
        <h3 className={styles.visualTitle}>Where the critic is costing confidence, visibility, follow-through, and recovery room</h3>
        <p className={styles.visualCopy}>
          A harsh voice is not only about what it says. It shows up in the room it removes from how you act, recover, and keep trusting yourself afterward.
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
          <p className={styles.insightEyebrow}>Most useful softening direction</p>
          <p className={styles.insightCopy}>{result.mostUsefulSofteningDirection.description}</p>
        </div>
      </div>
    </article>
  );
}
