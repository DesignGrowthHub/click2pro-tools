import { renderIcon } from "@/components/tools/icons";
import {
  selfSabotageDimensions,
  type SelfSabotageResult,
} from "@/data/self-sabotage-pattern-finder";
import styles from "./self-sabotage-pattern-finder.module.css";

type SignalBarsProps = {
  result: SelfSabotageResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the sabotage pattern are most active right now</h3>
        <p className={styles.visualCopy}>
          These bars separate trigger timing, fragility, avoidance, and follow-through cost so the report feels mechanically useful, not vague.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {selfSabotageDimensions.map((dimension) => {
          const value = result.dimensions[dimension.key];

          return (
            <div className={styles.signalBarCard} key={dimension.key}>
              <div className={styles.signalBarMeta}>
                <div className={styles.signalBarTitleWrap}>
                  <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                  <div>
                    <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                    <p className={styles.signalBarDescription}>{dimension.description} Higher means heavier interruption load.</p>
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
