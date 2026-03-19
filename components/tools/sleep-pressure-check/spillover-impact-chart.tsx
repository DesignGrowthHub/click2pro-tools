import type { CSSProperties } from "react";
import type { SleepResult } from "@/data/sleep-pressure-check";
import styles from "./sleep-pressure-check.module.css";

type SpilloverImpactChartProps = {
  result: SleepResult;
};

export function SpilloverImpactChart({ result }: SpilloverImpactChartProps) {
  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Next-day spillover panel</p>
        <h3 className={styles.visualTitle}>How last night is likely echoing into the day</h3>
        <p className={styles.visualCopy}>
          Sleep pressure rarely stays contained to the night. These panels show where the next-day effects appear strongest.
        </p>
      </div>

      <div className={styles.spilloverGrid}>
        {result.spilloverAreas.map((area) => (
          <div className={styles.spilloverCard} key={area.key}>
            <div className={styles.spilloverHeader}>
              <h4 className={styles.spilloverTitle}>{area.label}</h4>
              <span className={styles.spilloverValue}>{area.value}</span>
            </div>
            <div className={styles.spilloverTrack}>
              <span
                className={styles.spilloverFill}
                style={{ width: `${area.value}%`, "--spill-accent": area.accent } as CSSProperties}
              />
            </div>
            <p className={styles.spilloverCopy}>
              {area.key === "focus"
                ? "Mental clarity and sustained attention are carrying the most visible drag."
                : area.key === "mood"
                  ? "Emotional tone appears more vulnerable to under-recovery right now."
                  : "Patience and emotional bandwidth may be shortening faster when pressure rises."}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
