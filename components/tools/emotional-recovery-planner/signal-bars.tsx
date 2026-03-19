import { renderIcon } from "@/components/tools/icons";
import { recoveryDimensions, type RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type SignalBarsProps = {
  result: RecoveryPlannerResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>How the planner is reading load, capacity, support, and the realism of your next step</h3>
        <p className={styles.visualCopy}>
          These dimensions separate emotional recovery into the pieces that usually matter most when overwhelm needs a practical path instead of another vague recommendation.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {recoveryDimensions.map((dimension) => (
          <div className={styles.signalBarCard} key={dimension.key}>
            <div className={styles.signalBarMeta}>
              <div className={styles.signalBarTitleWrap}>
                <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                <div>
                  <h4 className={styles.signalBarTitle}>{dimension.label}</h4>
                  <p className={styles.signalBarDescription}>{dimension.description}</p>
                </div>
              </div>
              <span className={styles.signalBarValue}>{result.dimensions[dimension.key]}</span>
            </div>

            <div className={styles.signalBarTrack}>
              <span
                className={`${styles.signalBarFill} ${
                  dimension.direction === "higher-is-better" ? styles.signalBarFillPositive : ""
                }`}
                style={{ width: `${result.dimensions[dimension.key]}%`, background: dimension.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
