import type { CSSProperties } from "react";
import type { CommunicationStyleResult } from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type DialogueStyleMirrorProps = {
  result: CommunicationStyleResult;
};

export function DialogueStyleMirror({ result }: DialogueStyleMirrorProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Dialogue style mirror</p>
        <h3 className={styles.visualTitle}>How intention shifts into pressure, style distortion, and relational impact</h3>
        <p className={styles.visualCopy}>
          This is the signature visual of the report. It shows the conversational sequence itself so the style shift feels observable, not abstract.
        </p>
      </div>

      <div className={styles.pathMapShell}>
        <div className={styles.pathMapFlow}>
          {result.dialogueStages.map((stage, index) => (
            <div className={styles.pathMapStep} key={stage.label}>
              <span
                className={`${styles.pathMapNode} ${stage.kind === "distortion" ? styles.pathMapNodeBreak : ""}`}
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
              {index < result.dialogueStages.length - 1 ? <span className={styles.pathMapConnector} /> : null}
            </div>
          ))}
        </div>

        <div className={styles.pathMapInsight}>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Primary distortion</span>
            <strong className={styles.pathMapInsightValue}>{result.primaryCommunicationDistortion.label}</strong>
            <p className={styles.signalBarDescription}>{result.primaryCommunicationDistortion.description}</p>
          </div>
          <div className={styles.pathMapInsightCard}>
            <span className={styles.pathMapInsightLabel}>Main pressure zone</span>
            <strong className={styles.pathMapInsightValue}>{result.mainPressureZone.label}</strong>
            <p className={styles.signalBarDescription}>{result.mainPressureZone.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
