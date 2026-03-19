import { renderIcon } from "@/components/tools/icons";
import {
  balanceDimensions,
  type BalanceResult,
} from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";

type RecoveryCapacityPanelProps = {
  result: BalanceResult;
};

export function RecoveryCapacityPanel({ result }: RecoveryCapacityPanelProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Recovery and capacity summary</p>
        <h3 className={styles.visualTitle}>The four support layers shaping the whole map</h3>
        <p className={styles.visualCopy}>
          These sub-dimensions show whether the life shape is being supported by usable capacity, real recovery, emotional steadiness, and structural room.
        </p>
      </div>

      <div className={styles.summaryGrid}>
        {balanceDimensions.map((dimension) => (
          <div className={styles.summaryCard} key={dimension.key}>
            <div className={styles.summaryTop}>
              <span className={styles.summaryIcon}>{renderIcon(dimension.icon, styles.inlineIcon)}</span>
              <div>
                <h4 className={styles.summaryTitle}>{dimension.label}</h4>
                <p className={styles.summaryCopy}>{dimension.description}</p>
              </div>
            </div>

            <div className={styles.summaryTrack}>
              <span
                className={styles.summaryFill}
                style={{ width: `${result.dimensions[dimension.key]}%`, background: dimension.accent }}
              />
            </div>
            <p className={styles.summaryValue}>{result.dimensions[dimension.key]}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
