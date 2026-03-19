import { decisionDimensions, type DecisionSimulatorResult } from "@/data/decision-fatigue-simulator";
import { renderIcon } from "@/components/tools/icons";
import styles from "./decision-fatigue-simulator.module.css";

type SignalBarsProps = {
  result: DecisionSimulatorResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where decision strain is building</h3>
      </div>

      <div className={styles.signalBarsList}>
        {decisionDimensions.map((dimension) => (
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
                  background: `linear-gradient(90deg, ${dimension.accent}, rgba(255,255,255,0.24))`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
