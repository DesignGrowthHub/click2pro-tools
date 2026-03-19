import type { CommunicationStyleResult } from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type CommunicationDistortionMapProps = {
  result: CommunicationStyleResult;
};

export function CommunicationDistortionMap({ result }: CommunicationDistortionMapProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Communication distortion map</p>
        <h3 className={styles.visualTitle}>The main ways pressure is reshaping the message before it lands</h3>
        <p className={styles.visualCopy}>
          These distortion signals separate softness, sharpness, guarding, overexplaining, and indirectness so you can see the communication style more mechanically.
        </p>
      </div>

      <div className={styles.drainMapGrid}>
        {result.distortionScores.map((distortion) => (
          <div className={styles.drainMapCard} key={distortion.key}>
            <div className={styles.drainMapTop}>
              <span className={styles.drainMapTitle}>{distortion.label}</span>
              <span className={styles.drainMapValue}>{distortion.value}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{ width: `${distortion.value}%`, background: distortion.accent }}
              />
            </div>
            <p className={styles.signalBarDescription}>{distortion.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
