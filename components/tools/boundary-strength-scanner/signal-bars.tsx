import { renderIcon } from "@/components/tools/icons";
import { boundaryStrengthDimensions, type BoundaryStrengthResult } from "@/data/boundary-strength-scanner";
import styles from "./boundary-strength-scanner.module.css";

type SignalBarsProps = {
  result: BoundaryStrengthResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where pressure is strongest and where your boundary stays clearer</h3>
        <p className={styles.visualCopy}>
          These four dimensions separate the pressure itself from the clarity of your limit, the override pressure created by guilt or conflict, and the later after-cost.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {boundaryStrengthDimensions.map((dimension) => {
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
