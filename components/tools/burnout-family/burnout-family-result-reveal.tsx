import Link from "next/link";
import { MetricDial } from "@/components/tools/burnout-risk-audit/metric-dial";
import type { BurnoutFamilyResult, BurnoutFamilyTool } from "@/data/burnout-family";
import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

type BurnoutFamilyResultRevealProps = {
  tool: BurnoutFamilyTool;
  result: BurnoutFamilyResult;
  onRetake: () => void;
};

export function BurnoutFamilyResultReveal({
  tool,
  result,
  onRetake,
}: BurnoutFamilyResultRevealProps) {
  return (
    <section aria-live="polite" className={`${styles.section} ${styles.resultSection}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>{tool.resultCopy.sectionTitle}</h2>
          <p className={styles.sectionDescription}>{tool.resultCopy.sectionDescription}</p>
        </div>

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
                label={tool.resultCopy.scoreLabel}
                value={result.score}
              />
            </div>

            <div className={styles.resultCopy}>
              <p className={styles.resultEyebrow}>{tool.resultCopy.reportLabel}</p>
              <h2 className={styles.resultTitle}>{result.band.title}</h2>
              <p className={styles.resultSummary}>{result.band.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.resultDriverRow}>
                <span className={styles.resultDriverPill}>
                  Primary strain: {result.dominantDimensions[0]?.label ?? result.band.title}
                </span>
                <span className={styles.resultDriverPill}>
                  Main source: {result.dominantSources[0]?.label ?? "Balanced load"}
                </span>
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultCalloutGrid}>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>{tool.resultCopy.standoutLabel}</p>
                  <p className={styles.resultCalloutCopy}>{result.standout}</p>
                </div>
                <div className={styles.resultCallout}>
                  <p className={styles.resultCalloutLabel}>{tool.resultCopy.nextStepLabel}</p>
                  <p className={styles.resultCalloutCopy}>{result.nextStep}</p>
                </div>
              </div>

              <p className={styles.resultAlignmentNote}>{result.alignmentNote}</p>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  {tool.resultCopy.retakeLabel}
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
