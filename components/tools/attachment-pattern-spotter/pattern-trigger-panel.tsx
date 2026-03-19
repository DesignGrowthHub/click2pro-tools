import type { AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";

type PatternTriggerPanelProps = {
  result: AttachmentResult;
};

export function PatternTriggerPanel({ result }: PatternTriggerPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Pattern trigger panel</p>
        <h3 className={styles.visualTitle}>What seems most likely to activate the relational pattern</h3>
        <p className={styles.visualCopy}>
          These trigger cards highlight the relational conditions most likely to increase activation, protection, or interpretive pressure.
        </p>
      </div>

      <div className={styles.triggerPanelGrid}>
        {result.triggerScores.map((trigger) => (
          <div className={styles.triggerCard} key={trigger.key}>
            <div className={styles.triggerHeader}>
              <h4 className={styles.triggerTitle}>{trigger.label}</h4>
              <span className={styles.triggerValue}>{trigger.value}</span>
            </div>
            <p className={styles.triggerDescription}>{trigger.description}</p>
            <div className={styles.triggerTrack}>
              <span className={styles.triggerFill} style={{ width: `${trigger.value}%`, background: trigger.accent }} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.triggerSummaryGrid}>
        <div className={styles.triggerSummaryCard}>
          <p className={styles.triggerSummaryEyebrow}>Primary activation pattern</p>
          <p className={styles.triggerSummaryCopy}>{result.primaryActivationPattern}</p>
        </div>
        <div className={styles.triggerSummaryCard}>
          <p className={styles.triggerSummaryEyebrow}>Protective strategy</p>
          <p className={styles.triggerSummaryCopy}>{result.protectiveStrategy}</p>
        </div>
        <div className={styles.triggerSummaryCard}>
          <p className={styles.triggerSummaryEyebrow}>Stabilizing trait</p>
          <p className={styles.triggerSummaryCopy}>{result.strongestStabilizingTrait}</p>
        </div>
      </div>
    </article>
  );
}
