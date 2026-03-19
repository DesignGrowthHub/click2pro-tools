import Link from "next/link";
import type { CSSProperties } from "react";
import type { RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";
import { CapacityLoadPanel } from "./capacity-load-panel";

type ResultRevealProps = {
  onRetake: () => void;
  result: RecoveryPlannerResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A recovery path output designed to be practical enough to follow, not just emotionally accurate</h2>
          <p className={styles.sectionDescription}>
            The planner is not only describing strain. It is translating load, capacity, support, and urgency into a calmer short path your system can realistically use.
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
              <CapacityLoadPanel compact result={result} />
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Recovery path output</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.scoreValueSmall}>{result.band.descriptor}</p>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.score}</span>
                  <span className={styles.scoreLabel}>Recovery Need Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryBlocker.label}</span>
                  <span className={styles.scoreLabel}>Primary blocker</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.mostUsefulSupportType.label}</span>
                  <span className={styles.scoreLabel}>Most useful support</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.primaryStage.label}</span>
                  <span className={styles.scoreLabel}>Recovery stage</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What your system likely needs first</p>
                  <p className={styles.insightCopy}>{result.firstNeedInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Build Again
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
