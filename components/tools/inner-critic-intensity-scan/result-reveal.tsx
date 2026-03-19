import Link from "next/link";
import type { CSSProperties } from "react";
import type { InnerCriticResult } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: InnerCriticResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium inner-voice report that shows how harshness, repetition, and pressure are affecting you from the inside</h2>
          <p className={styles.sectionDescription}>
            The score matters, but the more useful read is the critic style, the activation context, the internal cost, and the softening direction that gives the pattern somewhere more workable to go.
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
                    <span className={styles.resultScoreLabel}>Inner Critic Intensity Score</span>
                  </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Repetition load</span>
                    <span className={styles.previewBalanceValue}>{result.repetitionLevelScore}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Recovery difficulty</span>
                    <span className={styles.previewBalanceValue}>{result.recoveryDifficulty}</span>
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
              <p className={styles.resultKicker}>Inner voice report</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.criticLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Inner Critic Intensity Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryCriticStyle.label}</span>
                  <span className={styles.scoreLabel}>Primary critic style</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mainActivationContext.label}</span>
                  <span className={styles.scoreLabel}>Main activation context</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.strongestInternalCost.label}</span>
                  <span className={styles.scoreLabel}>Strongest internal cost</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Where the inner voice is costing you most</p>
                  <p className={styles.insightCopy}>{result.costInsight}</p>
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
