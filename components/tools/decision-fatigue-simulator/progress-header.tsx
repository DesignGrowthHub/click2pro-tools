import styles from "./decision-fatigue-simulator.module.css";

type ProgressHeaderProps = {
  currentStep: number;
  totalSteps: number;
  progress: number;
};

export function ProgressHeader({ currentStep, totalSteps, progress }: ProgressHeaderProps) {
  return (
    <div className={styles.progressHeader}>
      <div className={styles.progressMeta}>
        <div>
          <p className={styles.progressEyebrow}>Decision lab</p>
          <p className={styles.progressStepLabel}>
            Scenario {currentStep} of {totalSteps}
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
