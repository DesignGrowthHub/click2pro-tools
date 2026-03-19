import Link from "next/link";
import type { CSSProperties } from "react";
import type { TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";
import { TriggerClusterMap } from "./trigger-cluster-map";

type ResultRevealProps = {
  onRetake: () => void;
  result: TriggerDecoderResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium decoding output for how activation begins, spreads, and recovers</h2>
          <p className={styles.sectionDescription}>
            The score is only the surface read. The more useful layer is which cluster activates, how the reaction path behaves, and where recovery seems to take longer than other people might notice.
          </p>
        </div>

        <div
          className={styles.resultCard}
          style={
            {
              "--result-band-glow": result.band.glow,
              "--result-band-gradient": `linear-gradient(135deg, ${result.band.gradientFrom}, ${result.band.gradientTo})`,
            } as CSSProperties
          }
        >
          <div className={styles.resultGrid}>
            <div className={styles.resultVisual}>
              <TriggerClusterMap result={result} />
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Decoder output</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Trigger Reactivity Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.dominantCluster.label}</span>
                  <span className={styles.scoreLabel}>Dominant trigger cluster</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.dominantSequence.label}</span>
                  <span className={styles.scoreLabel}>Reaction sequence</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.recoveryLoadEstimate}</span>
                  <span className={styles.scoreLabel}>Recovery load estimate</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Why recovery may take longer than expected</p>
                  <p className={styles.insightCopy}>{result.recoveryInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Decode Again
                </button>
                <Link className={styles.secondaryButton} href="#related-tools">
                  Explore Related Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
