import { renderIcon } from "@/components/tools/icons";
import {
  confidenceResetDimensions,
  type ConfidenceResetResult,
} from "@/data/confidence-reset-audit";
import styles from "./confidence-reset-audit.module.css";

type SignalBarsProps = {
  result: ConfidenceResetResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of confidence are stable and which parts are carrying the most strain</h3>
        <p className={styles.visualCopy}>
          The bars separate strong signal from heavy drag so the result reads like a usable confidence system, not a vague mood score.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {confidenceResetDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];
          const descriptor =
            dimension.direction === "higher-is-stronger"
              ? "Higher is stronger"
              : "Higher is heavier";

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>
                      {dimension.description} {descriptor}.
                    </p>
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
