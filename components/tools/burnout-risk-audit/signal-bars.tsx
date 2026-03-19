import { burnoutDimensions, type BurnoutAuditResult } from "@/data/burnout-risk-audit";
import { renderIcon } from "@/components/tools/icons";
import styles from "./burnout-risk-audit.module.css";

type SignalBarsProps = {
  result: BurnoutAuditResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <div className={styles.signalBarsCard}>
      <div className={styles.visualCardHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where the load is concentrating</h3>
      </div>

      <div className={styles.signalBarsList}>
        {burnoutDimensions.map((dimension) => (
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
                  background: `linear-gradient(90deg, ${dimension.accent}, ${result.band.gradientTo})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
