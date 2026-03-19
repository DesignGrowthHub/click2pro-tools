import type { CSSProperties } from "react";
import { type BalanceResult } from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";

type ComparisonBarsProps = {
  result: BalanceResult;
};

export function ComparisonBars({ result }: ComparisonBarsProps) {
  const comparedDomains = result.domains.filter((domain) => domain.useIdeal);

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Balance gap comparison</p>
        <h3 className={styles.visualTitle}>Current vs desired support across each domain</h3>
        <p className={styles.visualCopy}>
          The ideal overlay highlights where the current shape feels closest to enough and where it still wants more room, support, or recovery.
        </p>
      </div>

      <div className={styles.comparisonList}>
        {comparedDomains.map((domain) => (
          <div className={styles.comparisonRow} key={domain.key}>
            <div className={styles.comparisonHeader}>
              <div>
                <h4 className={styles.comparisonName}>{domain.label}</h4>
                <p className={styles.comparisonMeta}>Gap {domain.gap}</p>
              </div>
              <div className={styles.comparisonValues}>
                <span>Current {domain.current}</span>
                <span>Ideal {domain.ideal}</span>
              </div>
            </div>

            <div className={styles.comparisonTrack}>
              <span
                className={styles.comparisonCurrentFill}
                style={{
                  width: `${domain.current}%`,
                  background: `linear-gradient(90deg, ${domain.accent}, ${result.band.gradientTo})`,
                } as CSSProperties}
              />
              <span
                className={styles.comparisonIdealLine}
                style={{ left: `${domain.ideal}%`, borderColor: domain.accent } as CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
