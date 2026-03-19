import { renderIcon } from "@/components/tools/icons";
import {
  resentmentDimensions,
  type ResentmentResult,
} from "@/data/resentment-buildup-tracker";
import styles from "./resentment-buildup-tracker.module.css";

type SignalBarsProps = {
  result: ResentmentResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the resentment system are holding the most stored pressure</h3>
        <p className={styles.visualCopy}>
          These bars separate the unspoken need, the fairness problem, the amount still being silently carried,
          and the later risk that warmth turns into distance or emotional hardening.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {resentmentDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>
                      {dimension.description} Higher usually means more stored emotional pressure.
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
