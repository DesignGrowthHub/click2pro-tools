import Link from "next/link";
import type { CSSProperties } from "react";
import type { PeoplePleasingResult } from "@/data/people-pleasing-signal-check";
import styles from "./people-pleasing-signal-check.module.css";

type ResultRevealProps = {
  onRetake: () => void;
  result: PeoplePleasingResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A premium self-signal reading for where approval pressure starts to outrank self-protection</h2>
          <p className={styles.sectionDescription}>
            The score is only the surface. The more valuable read is what drives the override, where it happens most, and what later cost your system seems to absorb after the interaction is over.
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
                  <span className={styles.resultScoreLabel}>Drift score</span>
                </div>

                <div className={styles.previewBalanceRow}>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Self priority</span>
                    <span className={styles.previewBalanceValue}>{result.selfPriority}</span>
                  </div>
                  <div className={styles.previewBalanceCard}>
                    <span className={styles.previewBalanceLabel}>Other priority</span>
                    <span className={styles.previewBalanceValue}>{result.otherPriority}</span>
                  </div>
                </div>

                <div className={styles.resultStageStack}>
                  {result.driftStages.map((stage) => (
                    <div className={styles.resultStageRow} key={stage.key}>
                      <div className={styles.previewMetricMeta}>
                        <span>{stage.label}</span>
                        <span>{stage.value}</span>
                      </div>
                      <div className={styles.triggerTrack}>
                        <span
                          className={styles.triggerFill}
                          style={{ width: `${stage.value}%`, background: stage.accent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Signal reading</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultDescriptor}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>People-Pleasing Drift Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryDriver.label}</span>
                  <span className={styles.scoreLabel}>Primary pleasing driver</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mainWeakZone.label}</span>
                  <span className={styles.scoreLabel}>Main weak-zone</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.hiddenCost.label}</span>
                  <span className={styles.scoreLabel}>Likely hidden cost</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Where the hidden cost likely builds</p>
                  <p className={styles.insightCopy}>{result.hiddenCostInsight}</p>
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
