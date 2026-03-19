import type { DecisionSimulatorResult } from "@/data/decision-fatigue-simulator";
import styles from "./decision-fatigue-simulator.module.css";

type FatigueDriverPanelProps = {
  result: DecisionSimulatorResult;
};

export function FatigueDriverPanel({ result }: FatigueDriverPanelProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Fatigue driver panel</p>
        <h3 className={styles.visualTitle}>What is driving the strain most</h3>
        <p className={styles.visualCopy}>
          These drivers translate the simulation into the actual conditions most likely to be eroding judgment across the day.
        </p>
      </div>

      <div className={styles.driverGrid}>
        {result.driverTotals.map((driver) => (
          <article className={styles.driverCard} key={driver.key}>
            <div className={styles.driverCardTop}>
              <span className={styles.driverDot} style={{ color: driver.accent }} />
              <span className={styles.driverValue}>{driver.value}</span>
            </div>
            <h4 className={styles.driverTitle}>{driver.label}</h4>
            <div className={styles.driverTrack}>
              <span
                className={styles.driverFill}
                style={{
                  width: `${driver.value}%`,
                  background: `linear-gradient(90deg, ${driver.accent}, rgba(255,255,255,0.22))`,
                }}
              />
            </div>
            <p className={styles.driverDescription}>{driver.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
