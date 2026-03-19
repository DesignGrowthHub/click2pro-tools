import styles from "./life-balance-visualizer.module.css";

type ProgressHeaderProps = {
  currentStep: number;
  totalSteps: number;
  progress: number;
  currentLabel: string;
};

export function ProgressHeader({ currentStep, totalSteps, progress, currentLabel }: ProgressHeaderProps) {
  return (
    <div className={styles.progressHeader}>
      <div className={styles.progressMeta}>
        <div>
          <p className={styles.progressLabel}>Live map builder</p>
          <p className={styles.progressCounter}>
            Domain {currentStep} of {totalSteps} · {currentLabel}
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
