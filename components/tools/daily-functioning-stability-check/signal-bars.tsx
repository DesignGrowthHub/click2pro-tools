import { renderIcon } from "@/components/tools/icons";
import {
  dailyStabilityDimensions,
  type DailyFunctioningResult,
} from "@/data/daily-functioning-stability-check";
import styles from "./daily-functioning-stability-check.module.css";

type SignalBarsProps = {
  result: DailyFunctioningResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the daily system are holding and which ones lose steadiness fastest when normal pressure enters</h3>
        <p className={styles.visualCopy}>
          These bars separate energy stability, cognitive follow-through, emotional steadiness, and recovery margin so the next adjustment can be more specific than “try harder.”
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {dailyStabilityDimensions.map((dimension) => {
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
