import type { CommunicationStyleResult } from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type RepairImpactPanelProps = {
  result: CommunicationStyleResult;
};

export function RepairImpactPanel({ result }: RepairImpactPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Repair and impact panel</p>
        <h3 className={styles.visualTitle}>Where the conversation pays for distortion in clarity, warmth, understanding, and repair</h3>
        <p className={styles.visualCopy}>
          The issue is not only how the message changes. It is also what that shift costs once the conversation has already bent off course.
        </p>
      </div>

      <div className={styles.priorityPanelGrid}>
        {result.impactMetrics.map((metric) => (
          <div className={styles.priorityCard} key={metric.key}>
            <p className={styles.priorityCardLabel}>{metric.label}</p>
            <h4 className={styles.priorityCardTitle}>{metric.value}</h4>
            <p className={styles.signalBarDescription}>{metric.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.visualFooterNote}>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Most useful adjustment</p>
          <p className={styles.insightCopy}>{result.mostUsefulCommunicationAdjustment.description}</p>
        </div>
        <div className={styles.insightCard}>
          <p className={styles.insightEyebrow}>Strongest stable trait</p>
          <p className={styles.insightCopy}>{result.strongestStableTrait.description}</p>
        </div>
      </div>
    </article>
  );
}
