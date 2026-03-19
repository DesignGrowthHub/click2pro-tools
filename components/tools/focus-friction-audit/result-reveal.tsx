import Link from "next/link";
import type { FocusAuditResult } from "@/data/focus-friction-audit";
import styles from "./focus-friction-audit.module.css";
import { FrictionStackChart } from "./friction-stack-chart";

type ResultRevealProps = {
  result: FocusAuditResult;
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
                <span className={styles.resultScoreLabel}>Audit score</span>
                <span className={styles.resultScoreValue}>{result.score}</span>
                <span className={styles.resultDriverLabel}>{result.primaryDriver.label}</span>
              </div>
              <FrictionStackChart result={result} />
            </div>

            <div className={styles.resultCopy}>
              <p className={styles.resultEyebrow}>Result reveal</p>
              <h2 className={styles.resultTitle}>{result.band.title}</h2>
              <p className={styles.resultSummary}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>
              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultDriverRow}>
                <span className={styles.resultDriverPill}>Primary: {result.primaryDriver.label}</span>
                <span className={styles.resultDriverPill}>Secondary: {result.secondaryDriver.label}</span>
              </div>

              <div className={styles.resultCalloutGrid}>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>What stands out</p>
                  <p className={styles.resultCalloutCopy}>{result.standout}</p>
                </div>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>What is creating the most drag</p>
                  <p className={styles.resultCalloutCopy}>{result.dragInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Retake Audit
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
