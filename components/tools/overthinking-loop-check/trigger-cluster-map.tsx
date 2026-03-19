import type { OverthinkingResult } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";

type TriggerClusterMapProps = {
  result: OverthinkingResult;
};

export function TriggerClusterMap({ result }: TriggerClusterMapProps) {
  return (
    <div className={styles.visualCard}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Trigger cluster map</p>
        <h3 className={styles.visualTitle}>Which contexts are feeding the loop</h3>
        <p className={styles.visualCopy}>
          Your selected triggers are grouped into higher-level clusters so the pattern is easier to read at a glance.
        </p>
      </div>

      <div className={styles.clusterGrid}>
        {result.triggerClusters.map((cluster) => (
          <article className={styles.clusterCard} key={cluster.key}>
            <div className={styles.clusterTop}>
              <span className={styles.clusterDot} style={{ background: cluster.accent }} />
              <span className={styles.clusterValue}>{cluster.value}%</span>
            </div>
            <h4 className={styles.clusterTitle}>{cluster.label}</h4>
            <div className={styles.clusterTrack}>
              <span
                className={styles.clusterFill}
                style={{ width: `${cluster.value}%`, background: `linear-gradient(90deg, ${cluster.accent}, ${result.zone.gradientTo})` }}
              />
            </div>
          </article>
        ))}
      </div>

      <p className={styles.visualInsight}>
        The strongest trigger pressure currently leans toward {result.dominantTriggers[0]?.label.toLowerCase() ?? "open loops"}.
      </p>
    </div>
  );
}
