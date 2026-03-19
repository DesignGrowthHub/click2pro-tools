import Link from "next/link";
import type { OverthinkingResult } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";
import { PatternMap } from "./pattern-map";

type ResultRevealProps = {
  result: OverthinkingResult;
  onRetake: () => void;
};

export function ResultReveal({ result, onRetake }: ResultRevealProps) {
  return (
    <section aria-live="polite" className={`${styles.section} ${styles.resultSection}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.resultCard}>
          <div
            className={styles.resultBand}
            style={{ background: `linear-gradient(90deg, ${result.band.gradientFrom}, ${result.band.gradientTo})` }}
          />

          <div className={styles.resultGrid}>
            <div className={styles.resultVisual}>
              <div className={styles.resultScoreBlock}>
                <span className={styles.resultScoreLabel}>Loop score</span>
                <span className={styles.resultScoreValue}>{result.score}</span>
                <span className={styles.resultZoneLabel}>{result.zone.label}</span>
              </div>
              <PatternMap ariaLabel="Pattern map result" result={result} />
            </div>

            <div className={styles.resultCopy}>
              <p className={styles.resultEyebrow}>Result reveal</p>
              <h2 className={styles.resultTitle}>{result.band.title}</h2>
              <p className={styles.resultSummary}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.resultDriverRow}>
                <span className={styles.resultDriverPill}>
                  Primary loop driver: {result.dominantDimensions[0]?.label ?? "Loop load"}
                </span>
                <span className={styles.resultDriverPill}>
                  Main trigger cluster: {result.dominantTriggers[0]?.label ?? "Mixed triggers"}
                </span>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultCalloutGrid}>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>What stands out</p>
                  <p className={styles.resultCalloutCopy}>{result.standout}</p>
                </div>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>What tends to keep the loop active</p>
                  <p className={styles.resultCalloutCopy}>{result.loopFuel}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Retake Check
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
