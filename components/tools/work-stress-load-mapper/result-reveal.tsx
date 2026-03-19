import Link from "next/link";
import type { CSSProperties } from "react";
import type { WorkStressResult } from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: WorkStressResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A work-load composition report that shows where pressure is concentrated and why the day keeps feeling heavier than it should</h2>
          <p className={styles.sectionDescription}>
            The score matters, but the more useful read is the actual stress driver, the heaviest concentration zone, the hidden cost the role is creating, and the structural adjustment that would reduce pressure first.
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
                  <span className={styles.resultScoreLabel}>Work Stress Load Score</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Control level</span>
                    <span className={styles.previewBalanceValue}>{result.controlLevel}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Recovery cost</span>
                    <span className={styles.previewBalanceValue}>{result.recoveryCost}</span>
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
              <p className={styles.resultKicker}>Work-load composition report</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.loadLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Work Stress Load Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryStressDriver.label}</span>
                  <span className={styles.scoreLabel}>Primary stress driver</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.heaviestConcentrationZone.label}</span>
                  <span className={styles.scoreLabel}>Heaviest concentration zone</span>
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
                  <p className={styles.insightEyebrow}>Where the load is actually coming from</p>
                  <p className={styles.insightCopy}>{result.sourceInsight}</p>
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
