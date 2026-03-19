import { renderIcon } from "@/components/tools/icons";
import { attachmentDimensions, type AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";

type SignalBarsProps = {
  result: AttachmentResult;
};

export function SignalBars({ result }: SignalBarsProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>4-dimension signal bars</p>
        <h3 className={styles.visualTitle}>How the pattern is balancing closeness, reassurance, protection, and steadiness</h3>
        <p className={styles.visualCopy}>
          These four dimensions make the profile more specific by showing which relational processes are most active underneath the label.
        </p>
      </div>

      <div className={styles.signalBarStack}>
        {attachmentDimensions.map((dimension) => (
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
                className={styles.signalBarFill}
                style={{ width: `${result.dimensions[dimension.key]}%`, background: dimension.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
