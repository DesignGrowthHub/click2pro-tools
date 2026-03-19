import { focusDimensions, type FocusAuditResult } from "@/data/focus-friction-audit";
import { renderIcon } from "@/components/tools/icons";
import styles from "./focus-friction-audit.module.css";

type SignalBarsProps = {
  result: FocusAuditResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where the focus system is breaking down</h3>
      </div>

      <div className={styles.signalBarsList}>
        {focusDimensions.map((dimension) => (
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
