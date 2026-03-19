import Link from "next/link";
import type { CSSProperties } from "react";
import type { ConfidenceResetResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: ConfidenceResetResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium self-trust report that shows where confidence is leaking and what needs resetting first</h2>
          <p className={styles.sectionDescription}>
            The score matters, but the more useful read is where trust drops, what is draining it, which zone is most unstable, and what kind of reset will create the fastest recovery.
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
                  <span className={styles.resultScoreLabel}>Confidence Reset Score</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Self-trust level</span>
                    <span className={styles.previewBalanceValue}>{result.selfTrustLevel}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Recovery potential</span>
                    <span className={styles.previewBalanceValue}>{result.recoveryPotential}</span>
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
              <p className={styles.resultKicker}>Confidence report</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.confidenceLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Confidence Reset Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryConfidenceDrain.label}</span>
                  <span className={styles.scoreLabel}>Primary confidence drain</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mainBreakdownZone.label}</span>
                  <span className={styles.scoreLabel}>Main breakdown zone</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mostUsefulResetPriority.label}</span>
                  <span className={styles.scoreLabel}>Reset priority</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What needs resetting first</p>
                  <p className={styles.insightCopy}>{result.resetInsight}</p>
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
