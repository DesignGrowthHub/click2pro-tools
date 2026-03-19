import type { CSSProperties } from "react";
import type { RecoveryPlannerResult } from "@/data/emotional-recovery-planner";
import styles from "./emotional-recovery-planner.module.css";

type ResetPathPreviewProps = {
  result: RecoveryPlannerResult;
};

export function ResetPathPreview({ result }: ResetPathPreviewProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>7-day reset path preview</p>
        <h3 className={styles.visualTitle}>A short planning shape that respects urgency, capacity, and the amount of recovery room you actually have</h3>
        <p className={styles.visualCopy}>
          This is not a treatment plan. It is a practical preview of the next few days so recovery becomes actionable rather than abstract.
        </p>
      </div>

      <div className={styles.spilloverGrid}>
        {result.resetPath.map((stage) => (
          <div className={styles.spilloverCard} key={stage.range}>
            <div className={styles.spilloverHeader}>
              <div>
                <p className={styles.visualEyebrow}>{stage.range}</p>
                <h4 className={styles.spilloverTitle}>{stage.title}</h4>
              </div>
            </div>
            <div className={styles.spilloverTrack}>
              <span className={styles.spilloverFill} style={{ width: "100%", "--spill-accent": stage.accent } as CSSProperties} />
            </div>
            <p className={styles.spilloverCopy}>{stage.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
