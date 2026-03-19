import { renderIcon } from "@/components/tools/icons";
import { sleepDimensions, type SleepResult } from "@/data/sleep-pressure-check";
import styles from "./sleep-pressure-check.module.css";

type SignalBarsProps = {
  result: SleepResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where sleep pressure is showing up most clearly</h3>
        <p className={styles.visualCopy}>
          These four dimensions separate the overall score into debt, disruption, carryover, and actual restoration quality.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {sleepDimensions.map((dimension) => (
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
