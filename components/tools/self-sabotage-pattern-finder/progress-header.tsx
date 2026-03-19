import styles from "./self-sabotage-pattern-finder.module.css";

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
          <p className={styles.progressLabel}>Self-sabotage pattern finder</p>
          <p className={styles.progressCounter}>
            Step {currentStep} of {totalSteps}
          </p>
        </div>
        <p className={styles.progressPercent}>{Math.round(progress)}%</p>
      </div>
      <div
        aria-label={`Progress ${Math.round(progress)} percent`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(progress)}
        className={styles.progressTrack}
        role="progressbar"
      >
        <span className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
