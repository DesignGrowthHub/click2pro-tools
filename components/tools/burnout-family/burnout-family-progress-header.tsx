import styles from "@/components/tools/burnout-risk-audit/burnout-risk-audit.module.css";

type BurnoutFamilyProgressHeaderProps = {
  eyebrow: string;
  currentStep: number;
  totalSteps: number;
  progress: number;
};

export function BurnoutFamilyProgressHeader({
  eyebrow,
  currentStep,
  totalSteps,
  progress,
}: BurnoutFamilyProgressHeaderProps) {
  return (
    <div className={styles.progressHeader}>
      <div className={styles.progressMeta}>
        <div>
          <p className={styles.progressEyebrow}>{eyebrow}</p>
          <p className={styles.progressStepLabel}>
            Step {currentStep} of {totalSteps}
          </p>
        </div>
        <span aria-live="polite" className={styles.progressPercent}>
          {Math.round(progress)}%
        </span>
      </div>
      <div aria-hidden="true" className={styles.progressTrack}>
        <span className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
