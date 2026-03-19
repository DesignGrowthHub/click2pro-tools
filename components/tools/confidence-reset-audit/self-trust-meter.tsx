import type { CSSProperties } from "react";
import type { ConfidenceResetResult } from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type SelfTrustMeterProps = {
  compact?: boolean;
  result: ConfidenceResetResult;
};

const radius = 88;
const circumference = 2 * Math.PI * radius;

export function SelfTrustMeter({ compact = false, result }: SelfTrustMeterProps) {
  const trustOffset = circumference - (result.selfTrustLevel / 100) * circumference;
  const disruptionOffset = circumference - (result.score / 100) * circumference;

  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Self-trust meter</p>
        <h3 className={styles.visualTitle}>A live read of how stable confidence feels and how strongly it is being interrupted</h3>
        <p className={styles.visualCopy}>
          This meter pairs present self-trust with interruption load so the result shows both the baseline and the drag working against it.
        </p>
      </div>

      <div className={styles.meterLayout}>
        <div className={styles.meterShell}>
          <svg className={styles.meterSvg} viewBox="0 0 240 240">
            <circle className={styles.meterTrack} cx="120" cy="120" r={radius} />
            <circle
              className={styles.meterProgress}
              cx="120"
              cy="120"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={trustOffset}
              style={{ ["--meter-accent" as string]: "#67E8F9" } as CSSProperties}
            />
            <circle
              className={styles.meterProgressSecondary}
              cx="120"
              cy="120"
              r={radius - 18}
              strokeDasharray={2 * Math.PI * (radius - 18)}
              strokeDashoffset={disruptionOffset}
              style={{ ["--meter-accent" as string]: "#FB7185" } as CSSProperties}
            />
          </svg>

          <div className={styles.meterCore}>
            <span className={styles.meterValue}>{result.selfTrustLevel}</span>
            <span className={styles.meterLabel}>Self-trust stability</span>
            <span className={styles.meterSupport}>{result.band.title}</span>
          </div>
        </div>

        <div className={styles.meterStatGrid}>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Interruption load</span>
            <strong className={styles.meterStatValue}>{result.score}</strong>
            <p className={styles.signalBarDescription}>
              The higher this is, the faster hesitation, review, or pressure is thinning confidence out.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Recovery strength</span>
            <strong className={styles.meterStatValue}>{result.dimensions.recoveryStrength}</strong>
            <p className={styles.signalBarDescription}>
              Recovery matters because confidence is easier to rebuild when a hit does not stay active for too long.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Current reset need</span>
            <strong className={styles.meterStatValue}>{result.mostUsefulResetPriority.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulResetPriority.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
