import Link from "next/link";
import type { AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";
import { ClosenessWithdrawalMap } from "./closeness-withdrawal-map";

type ResultRevealProps = {
  onRetake: () => void;
  result: AttachmentResult;
};

export function ResultReveal({ onRetake, result }: ResultRevealProps) {
  const dimensionChips = [
    { label: "Closeness comfort", value: result.dimensions.closenessComfort },
    { label: "Reassurance pull", value: result.dimensions.reassurancePull },
    { label: "Withdrawal tendency", value: result.dimensions.withdrawalTendency },
    { label: "Emotional steadiness", value: result.dimensions.emotionalSteadiness },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="result-reveal">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Result reveal section</p>
          <h2 className={styles.sectionTitle}>A refined profile of how your relational system appears to organize itself</h2>
          <p className={styles.sectionDescription}>
            The result is meant to feel explanatory rather than reductive. It highlights which relational processes seem most active without treating them like a diagnosis or a stereotype.
          </p>
        </div>

        <div className={styles.resultCard}>
          <div className={styles.resultGrid}>
            <div className={styles.resultVisual}>
              <ClosenessWithdrawalMap result={result} />
            </div>

            <div className={styles.resultSummary}>
              <p className={styles.resultKicker}>Attachment profile output</p>
              <h3 className={styles.resultTitle}>{result.profile.title}</h3>
              <p className={styles.resultDescriptor}>{result.profile.descriptor}</p>
              <p className={styles.resultCopy}>{result.profile.summary}</p>
              <p className={styles.resultSignal}>{result.signalLabel}</p>

              <div className={styles.dimensionChipRow}>
                {dimensionChips.map((chip) => (
                  <div className={styles.dimensionChip} key={chip.label}>
                    <span className={styles.dimensionChipValue}>{chip.value}</span>
                    <span className={styles.dimensionChipLabel}>{chip.label}</span>
                  </div>
                ))}
              </div>

              <p className={styles.resultInterpretation}>{result.interpretation}</p>

              <div className={styles.resultInsightGrid}>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What stands out</p>
                  <p className={styles.insightCopy}>{result.standout}</p>
                </div>
                <div className={styles.insightCard}>
                  <p className={styles.insightEyebrow}>What seems to trigger this pattern most</p>
                  <p className={styles.insightCopy}>{result.triggerInsight}</p>
                </div>
              </div>

              <div className={styles.resultActions}>
                <button className={styles.primaryButton} onClick={onRetake} type="button">
                  Rebuild Profile
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
