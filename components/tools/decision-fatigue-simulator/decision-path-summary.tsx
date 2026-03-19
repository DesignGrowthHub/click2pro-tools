import type { DecisionSimulatorResult } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type DecisionPathSummaryProps = {
  result: DecisionSimulatorResult;
};

export function DecisionPathSummary({ result }: DecisionPathSummaryProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Decision path summary</p>
        <h3 className={styles.visualTitle}>How your branch pattern unfolded</h3>
        <p className={styles.visualCopy}>
          Each scenario records where your choices kept clarity steadier and where the branch started adding more drag.
        </p>
      </div>

      <div className={styles.pathSummaryShell}>
        {result.snapshots.map((snapshot, index) => (
          <div className={styles.pathSummaryRow} key={snapshot.scenarioId}>
            <div className={styles.pathNode} data-tone={snapshot.tone}>
              <span className={styles.pathNodeBadge}>{snapshot.choiceMarker}</span>
            </div>
            <div className={styles.pathSummaryCopy}>
              <p className={styles.pathSummaryLabel}>
                {index + 1}. {snapshot.scenarioLabel}
              </p>
              <p className={styles.pathSummaryChoice}>{snapshot.choiceLabel}</p>
            </div>
            <span className={styles.pathSummaryTone}>{snapshot.tone}</span>
          </div>
        ))}
      </div>

      <p className={styles.visualInsight}>
        The overall branch reads most like <span className={styles.inlineAccent}>{result.patternLabel.title}</span>.
      </p>
    </div>
  );
}
