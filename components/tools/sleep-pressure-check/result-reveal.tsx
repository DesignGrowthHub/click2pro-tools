import Link from "next/link";
import type { CSSProperties } from "react";
import type { SleepResult } from "@/data/sleep-pressure-check";
import styles from "./sleep-pressure-check.module.css";
import { RecoveryTimelineChart } from "./recovery-timeline-chart";

type ResultRevealProps = {
  onRetake: () => void;
  result: SleepResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>Your current recovery status, translated into a readable pressure pattern</h2>
          <p className={styles.sectionDescription}>
            The score is only the surface read. The fuller picture is where recovery debt is being driven from, how much daytime carryover is showing, and whether restoration quality is still catching up.
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
              <RecoveryTimelineChart compact result={result} />
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Sleep pressure output</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Sleep Pressure Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryDriver.label}</span>
                  <span className={styles.scoreLabel}>Primary driver</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.spilloverArea.label}</span>
                  <span className={styles.scoreLabel}>Main carryover area</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.recoveryResilienceLabel}</span>
                  <span className={styles.scoreLabel}>Recovery resilience</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Where carryover shows up most</p>
                  <p className={styles.insightCopy}>{result.carryoverInsight}</p>
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
