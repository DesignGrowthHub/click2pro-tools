import { renderIcon } from "@/components/tools/icons";
import {
  relationshipClarityDimensions,
  type RelationshipClarityResult,
} from "@/data/relationship-clarity-check";
import styles from "./relationship-clarity-check.module.css";

type SignalBarsProps = {
  result: RelationshipClarityResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Which parts of the relationship signal are strong enough to trust and which are not</h3>
        <p className={styles.visualCopy}>
          These bars read the positive structure of the connection. Lower values indicate the places where confusion is most likely being created or sustained.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {relationshipClarityDimensions.map((dimension) => {
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
