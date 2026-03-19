import type { CSSProperties } from "react";
import type { SelfSabotageResult } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type ProgressInterruptionMapProps = {
  result: SelfSabotageResult;
};

export function ProgressInterruptionMap({ result }: ProgressInterruptionMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Progress interruption map</p>
        <h3 className={styles.visualTitle}>Where momentum rises, where pressure gathers, and where the pattern starts breaking the line</h3>
        <p className={styles.visualCopy}>
          This is the signature visual of the report. It shows the movement path itself, so the derailment reads like a process with a location rather than a vague identity label.
        </p>
      </div>

      <div className={styles.pathMapShell}>
        <div className={styles.pathMapFlow}>
          {result.progressStages.map((stage, index) => (
            <div className={styles.pathMapStep} key={stage.label}>
              <span
                className={`${styles.pathMapNode} ${stage.kind === "break" ? styles.pathMapNodeBreak : ""}`}
                style={
                  {
                    "--node-height": `${Math.max(54, Math.round(stage.value * 1.9))}px`,
                    "--node-accent": stage.accent,
                  } as CSSProperties
                }
              />
              <div className={styles.pathMapMeta}>
                <span className={styles.pathMapLabel}>{stage.label}</span>
                <span className={styles.pathMapValue}>{stage.value}</span>
              </div>
              {index < result.progressStages.length - 1 ? (
                <span className={styles.pathMapConnector} />
              ) : null}
            </div>
          ))}
        </div>

        <div className={styles.pathMapInsight}>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Primary trigger</span>
            <strong className={styles.pathMapInsightValue}>{result.primaryDerailmentTrigger.label}</strong>
            <p className={styles.signalBarDescription}>{result.primaryDerailmentTrigger.description}</p>
          </div>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Most common interruption point</span>
            <strong className={styles.pathMapInsightValue}>{result.mostCommonInterruptionPoint.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostCommonInterruptionPoint.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
