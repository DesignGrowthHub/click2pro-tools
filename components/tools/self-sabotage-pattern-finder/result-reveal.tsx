import Link from "next/link";
import type { CSSProperties } from "react";
import type { SelfSabotageResult } from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: SelfSabotageResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium progress-break report that shows where momentum is failing and what is reinforcing the interruption</h2>
          <p className={styles.sectionDescription}>
            The score matters, but the more useful read is the trigger, the interruption point, the hidden cost, and the strategy that protects continuity when the old pattern starts forming.
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
                  <span className={styles.resultScoreLabel}>Self-Sabotage Pattern Score</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Interruption timing</span>
                    <span className={styles.previewBalanceValue}>{result.interruptionTiming}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Restart flex</span>
                    <span className={styles.previewBalanceValue}>{result.restartFlex}</span>
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
              <p className={styles.resultKicker}>Progress interruption report</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.sabotageLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Self-Sabotage Pattern Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryDerailmentTrigger.label}</span>
                  <span className={styles.scoreLabel}>Primary derailment trigger</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mostCommonInterruptionPoint.label}</span>
                  <span className={styles.scoreLabel}>Most common interruption point</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.strongestHiddenCost.label}</span>
                  <span className={styles.scoreLabel}>Strongest hidden cost</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Where the break tends to happen first</p>
                  <p className={styles.insightCopy}>{result.breakInsight}</p>
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
