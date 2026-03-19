import { renderIcon } from "@/components/tools/icons";
import { triggerDimensions, type TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";

type SignalBarsProps = {
  result: TriggerDecoderResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>Where the pattern is heaviest: sensitivity, intensity, spillover, or recovery drag</h3>
        <p className={styles.visualCopy}>
          These four dimensions show whether the main burden comes from fast activation, stronger spikes, longer after-effects, or slower recovery.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {triggerDimensions.map((dimension) => {
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
