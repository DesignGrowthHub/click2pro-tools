import { overthinkingDimensions, type OverthinkingResult } from "@/data/overthinking-loop-check";
import { renderIcon } from "@/components/tools/icons";
import styles from "./overthinking-loop-check.module.css";

type SignalBarsProps = {
  result: OverthinkingResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where the loop carries the most weight</h3>
      </div>

      <div className={styles.signalBarsList}>
        {overthinkingDimensions.map((dimension) => (
          <div className={styles.signalBarRow} key={dimension.key}>
            <div className={styles.signalBarMeta}>
              <div className={styles.signalBarLabelWrap}>
                <span className={styles.signalBarIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
                <div>
                  <p className={styles.signalBarLabel}>{dimension.label}</p>
                  <p className={styles.signalBarDescription}>{dimension.description}</p>
                </div>
              </div>
              <span className={styles.signalBarValue}>{result.dimensions[dimension.key]}</span>
            </div>
            <div className={styles.signalBarTrack}>
              <span
                className={styles.signalBarFill}
                style={{
                  width: `${result.dimensions[dimension.key]}%`,
                  background: `linear-gradient(90deg, ${dimension.accent}, ${result.zone.gradientTo})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
