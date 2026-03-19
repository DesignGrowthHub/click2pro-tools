import type { CSSProperties } from "react";
import type { InnerCriticResult } from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type InnerVoiceIntensityMeterProps = {
  compact?: boolean;
  result: InnerCriticResult;
};

const radius = 88;
const circumference = 2 * Math.PI * radius;

export function InnerVoiceIntensityMeter({
  compact = false,
  result,
}: InnerVoiceIntensityMeterProps) {
  const intensityOffset = circumference - (result.criticIntensityLevel / 100) * circumference;
  const erosionOffset = circumference - (result.selfTrustErosionLevel / 100) * circumference;

  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Inner voice intensity meter</p>
        <h3 className={styles.visualTitle}>The overall force of the critic and how strongly it is influencing the internal system</h3>
        <p className={styles.visualCopy}>
          The outer arc tracks critic force. The inner ring shows how quickly that force is turning into self-trust erosion once pressure or mistakes appear.
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
              strokeDashoffset={intensityOffset}
              style={{ ["--meter-accent" as string]: "#FB7185" } as CSSProperties}
            />
            <circle
              className={styles.meterProgressSecondary}
              cx="120"
              cy="120"
              r={radius - 18}
              strokeDasharray={2 * Math.PI * (radius - 18)}
              strokeDashoffset={erosionOffset}
              style={{ ["--meter-accent" as string]: "#C4B5FD" } as CSSProperties}
            />
          </svg>

          <div className={styles.meterCore}>
            <span className={styles.meterValue}>{result.criticIntensityLevel}</span>
            <span className={styles.meterLabel}>Inner voice force</span>
            <span className={styles.meterSupport}>{result.band.title}</span>
          </div>
        </div>

        <div className={styles.meterStatGrid}>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Self-trust erosion</span>
            <strong className={styles.meterStatValue}>{result.selfTrustErosionLevel}</strong>
            <p className={styles.signalBarDescription}>
              This shows how quickly the voice turns pressure into reduced trust in yourself afterward.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Repetition load</span>
            <strong className={styles.meterStatValue}>{result.repetitionLevelScore}</strong>
            <p className={styles.signalBarDescription}>
              Repetition is where a strong critic becomes a draining internal climate rather than a passing thought.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Post-mistake intensity</span>
            <strong className={styles.meterStatValue}>{result.postMistakeIntensity}</strong>
            <p className={styles.signalBarDescription}>
              This is the likely force of the critic after an error, slip, or visible pressure moment.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Softening direction</span>
            <strong className={styles.meterStatValue}>{result.mostUsefulSofteningDirection.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulSofteningDirection.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
