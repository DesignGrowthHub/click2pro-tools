import Link from "next/link";
import type { CSSProperties } from "react";
import type { BalanceResult } from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";
import { BalanceWheel } from "./balance-wheel";

type ResultRevealProps = {
  onRetake: () => void;
  result: BalanceResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>Your current life shape, rendered as a balance map</h2>
          <p className={styles.sectionDescription}>
            The main readout is not only how supported life looks overall. It is which domains are holding, which are narrowing, and where rebalancing would create the biggest relief first.
          </p>
        </div>

        <div
          className={styles.resultCard}
          style={{
            "--result-glow": result.band.glow,
            "--result-gradient": `linear-gradient(135deg, ${result.band.gradientFrom}, ${result.band.gradientTo})`,
          } as CSSProperties}
        >
          <div className={styles.resultGrid}>
            <div className={styles.resultVisual}>
              <BalanceWheel highlightKey={result.primaryImbalanceDriver.key} result={result} showLegend={false} />
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Life balance output</p>
              <h3 className={styles.resultTitle}>{result.band.title}</h3>
              <p className={styles.resultCopy}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.scorePanel}>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.balanceIndex}</span>
                  <span className={styles.scoreLabel}>Balance Index</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValue}>{result.imbalanceScore}</span>
                  <span className={styles.scoreLabel}>Imbalance Score</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.weakestZone.label}</span>
                  <span className={styles.scoreLabel}>Weakest zone</span>
                </div>
                <div className={styles.scoreMetric}>
                  <span className={styles.scoreValueSmall}>{result.strongestSupportingArea.label}</span>
                  <span className={styles.scoreLabel}>Strongest support</span>
                </div>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>Where rebalancing helps first</p>
                  <p className={styles.insightCopy}>{result.rebalanceInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Rebuild Map
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
