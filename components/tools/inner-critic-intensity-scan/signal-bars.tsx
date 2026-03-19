import { renderIcon } from "@/components/tools/icons";
import {
  innerCriticDimensions,
  type InnerCriticResult,
} from "@/data/inner-critic-intensity-scan";
import styles from "./inner-critic-intensity-scan.module.css";

type SignalBarsProps = {
  result: InnerCriticResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the inner critic are carrying the most force right now</h3>
        <p className={styles.visualCopy}>
          These bars separate tone, repetition, perfection pressure, and self-trust erosion so the result reads like an internal voice system instead of a vague self-esteem score.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {innerCriticDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>{dimension.description} Higher means heavier critic load.</p>
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
