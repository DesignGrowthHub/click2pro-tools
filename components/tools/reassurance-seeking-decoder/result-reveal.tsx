import Link from "next/link";
import type { CSSProperties } from "react";
import type { ReassuranceResult } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: ReassuranceResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium reassurance-cycle report that shows where doubt is being soothed and where it is returning</h2>
          <p className={styles.sectionDescription}>
            The score matters, but the more useful read is the shape of the loop: where uncertainty spikes, how hard reassurance pulls, how fragile the relief is, and why the doubt keeps reopening.
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
              <div className={styles.resultVisualStack}>
                <div className={styles.resultScoreOrb}>
                  <span className={styles.resultScoreValue}>{result.score}</span>
                  <span className={styles.resultScoreLabel}>Reassurance Loop Score</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Loop reinforcement</span>
                    <span className={styles.previewBalanceValue}>{result.loopReinforcement}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Relief hold</span>
                    <span className={styles.previewBalanceValue}>{result.reliefDurationLevel}</span>
                  </div>
                </div>

                <div className={styles.resultStageStack}>
                  {result.previewMetrics.map((metric) => (
                    <div className={styles.resultStageRow} key={metric.label}>
                      <div className={styles.previewMetricMeta}>
                        <span>{metric.label}</span>
                        <span>{metric.value}</span>
                      </div>
                      <div className={styles.triggerTrack}>
                        <span
                          className={styles.triggerFill}
                          style={{ width: `${metric.value}%`, background: metric.accent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Cycle decoding report</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.reassuranceLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Reassurance Loop Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryReassuranceContext.label}</span>
                  <span className={styles.scoreLabel}>Primary reassurance context</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.dominantLoopDriver.label}</span>
                  <span className={styles.scoreLabel}>Dominant loop driver</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.strongestSpilloverArea.label}</span>
                  <span className={styles.scoreLabel}>Strongest spillover area</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Why the relief does not fully hold</p>
                  <p className={styles.insightCopy}>{result.reliefInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Run Again
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
