import { renderIcon } from "@/components/tools/icons";
import {
  communicationDimensions,
  type CommunicationStyleResult,
} from "@/data/communication-style-mirror";
import styles from "./communication-style-mirror.module.css";

type SignalBarsProps = {
  result: CommunicationStyleResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the communication pattern stay steady and which distort fastest</h3>
        <p className={styles.visualCopy}>
          These bars separate clarity, directness, guarding, and repair so the mirror feels practically usable in real conversations.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {communicationDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>{dimension.description}</p>
                  </div>
                </div>
                <span className={styles.signalBarValue}>{value}</span>
              </div>

              <div className={styles.signalBarTrack}>
                <span
                  className={styles.signalBarFill}
                  style={{ width: `${value}%`, background: dimension.accent }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
