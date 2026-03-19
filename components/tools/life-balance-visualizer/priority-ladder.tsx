import { getBalanceDescriptor, type BalanceResult } from "@/data/life-balance-visualizer";
import styles from "./life-balance-visualizer.module.css";

type PriorityLadderProps = {
  result: BalanceResult;
};

export function PriorityLadder({ result }: PriorityLadderProps) {
  const rankedDomains = [...result.domains].sort((left, right) => right.priority - left.priority);

  return (
    <article className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Domain priority ladder</p>
        <h3 className={styles.visualTitle}>Where support would help the shape most</h3>
        <p className={styles.visualCopy}>
          Ranked from the domains creating the most distortion to the ones currently holding the map together more reliably.
        </p>
      </div>

      <div className={styles.priorityList}>
        {rankedDomains.map((domain, index) => (
          <div className={styles.priorityItem} key={domain.key}>
            <div className={styles.priorityTop}>
              <div className={styles.priorityMeta}>
                <span className={styles.priorityRank}>0{index + 1}</span>
                <div>
                  <h4 className={styles.priorityTitle}>{domain.label}</h4>
                  <p className={styles.priorityText}>
                    Current {domain.current} · {getBalanceDescriptor(domain.current)}
                    {domain.useIdeal ? ` · Gap ${domain.gap}` : ""}
                  </p>
                </div>
              </div>
              <span className={styles.priorityScore}>{domain.priority}</span>
            </div>

            <div className={styles.priorityBarTrack}>
              <span
                className={styles.priorityBarFill}
                style={{ width: `${domain.priority}%`, background: domain.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
