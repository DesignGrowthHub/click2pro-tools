import Link from "next/link";
import type { BurnoutAuditResult } from "@/data/burnout-risk-audit";
import styles from "./burnout-risk-audit.module.css";
import { MetricDial } from "./metric-dial";

type ResultRevealProps = {
  result: BurnoutAuditResult;
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
            <div className={styles.resultDialWrap}>
              <MetricDial
                band={result.band}
                caption={result.band.signalTone}
                className={styles.resultDial}
                label="Audit score"
                value={result.score}
              />
            </div>

            <div className={styles.resultCopy}>
              <p className={styles.resultEyebrow}>Result reveal</p>
              <h2 className={styles.resultTitle}>{result.band.title}</h2>
              <p className={styles.resultSummary}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.resultDriverRow}>
                <span className={styles.resultDriverPill}>
                  Primary strain: {result.dominantDimensions[0]?.label ?? "Load pattern"}
                </span>
                <span className={styles.resultDriverPill}>
                  Main source: {result.dominantSources[0]?.label ?? "Balanced load"}
                </span>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultCalloutGrid}>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>What stands out</p>
                  <p className={styles.resultCalloutCopy}>{result.standout}</p>
                </div>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>Best next step</p>
                  <p className={styles.resultCalloutCopy}>{result.nextStep}</p>
                </div>
              </div>

              <p className={styles.resultAlignmentNote}>{result.alignmentNote}</p>

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
