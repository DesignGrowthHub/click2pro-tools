import { renderIcon } from "@/components/tools/icons";
import {
  reassuranceDimensions,
  type ReassuranceResult,
} from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type SignalBarsProps = {
  result: ReassuranceResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the reassurance loop are carrying the most pressure</h3>
        <p className={styles.visualCopy}>
          These bars separate intolerance of uncertainty from the pull toward reassurance, the fragility of relief, and the speed of the return of doubt.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {reassuranceDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>
                      {dimension.description} Higher usually means more cycle pressure.
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
