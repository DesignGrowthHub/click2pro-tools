import { renderIcon } from "@/components/tools/icons";
import {
  workStressDimensions,
  type WorkStressResult,
} from "@/data/work-stress-load-mapper";
import styles from "./work-stress-load-mapper.module.css";

type SignalBarsProps = {
  result: WorkStressResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the work pattern are driving the most stress and which structural deficits are steepest</h3>
        <p className={styles.visualCopy}>
          These bars separate dense demand, low control, fragmentation, and hidden burden so the map can guide a more specific next move.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {workStressDimensions.map((dimension) => {
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
