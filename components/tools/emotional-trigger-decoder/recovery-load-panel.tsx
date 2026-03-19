import type { TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";

type RecoveryLoadPanelProps = {
  result: TriggerDecoderResult;
};

export function RecoveryLoadPanel({ result }: RecoveryLoadPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Recovery load panel</p>
        <h3 className={styles.visualTitle}>Where the trigger seems to keep affecting you after the moment ends</h3>
        <p className={styles.visualCopy}>
          Recovery often feels slower because the trigger is still showing up in attention, body tension, or mood long after the event itself is over.
        </p>
      </div>

      <div className={styles.recoveryGrid}>
        {result.spilloverAreas.map((area) => (
          <div className={styles.recoveryCard} key={area.key}>
            <div className={styles.recoveryCardTop}>
              <p className={styles.recoveryCardTitle}>{area.label}</p>
              <span className={styles.recoveryCardValue}>{area.value}</span>
            </div>
            <div className={styles.recoveryTrack}>
              <span
                className={styles.recoveryFill}
                style={{ width: `${area.value}%`, background: area.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.recoverySummaryCard}>
        <p className={styles.recoverySummaryEyebrow}>Recovery load estimate</p>
        <h4 className={styles.recoverySummaryTitle}>{result.recoveryLoadEstimate}</h4>
        <p className={styles.recoverySummaryCopy}>
          Awareness tends to arrive {result.awarenessLabel}, and the heaviest spillover currently appears in {result.topSpilloverArea.label.toLowerCase()}.
        </p>
      </div>
    </article>
  );
}
