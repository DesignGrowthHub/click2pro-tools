import type { TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";

type ReactionSequenceDiagramProps = {
  result: TriggerDecoderResult;
};

export function ReactionSequenceDiagram({ result }: ReactionSequenceDiagramProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Reaction sequence diagram</p>
        <h3 className={styles.visualTitle}>How the trigger usually travels from the original moment into recovery</h3>
        <p className={styles.visualCopy}>
          This sequence view shows where the pattern appears to gain momentum after the first emotional spike.
        </p>
      </div>

      <div className={styles.sequenceWrap}>
        <div className={styles.sequenceHeader}>
          <span className={styles.sequencePill}>{result.dominantSequence.label}</span>
          <p className={styles.sequenceSummary}>{result.dominantSequence.summary}</p>
        </div>

        <div className={styles.sequenceFlow}>
          {result.reactionPathStages.map((stage, index) => (
            <div className={styles.sequenceStep} key={stage.label}>
              <div className={styles.sequenceNode} style={{ "--stage-accent": stage.accent } as React.CSSProperties}>
                <span className={styles.sequenceNodeIndex}>{index + 1}</span>
              </div>
              <div className={styles.sequenceText}>
                <p className={styles.sequenceTitle}>{stage.label}</p>
                <p className={styles.sequenceDescription}>{stage.description}</p>
              </div>
              {index < result.reactionPathStages.length - 1 ? <span className={styles.sequenceConnector} /> : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
