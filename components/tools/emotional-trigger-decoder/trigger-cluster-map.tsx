import type { CSSProperties } from "react";
import type { TriggerDecoderResult } from "@/data/emotional-trigger-decoder";
import styles from "./emotional-trigger-decoder.module.css";

type TriggerClusterMapProps = {
  ariaLabel?: string;
  compact?: boolean;
  result: TriggerDecoderResult;
  showLabels?: boolean;
};

const center = { x: 50, y: 50 };

export function TriggerClusterMap({
  ariaLabel = "Trigger cluster map",
  compact = false,
  result,
  showLabels = true,
}: TriggerClusterMapProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`${styles.clusterMap} ${compact ? styles.clusterMapCompact : styles.clusterMapFull}`}
      role="img"
      style={
        {
          "--cluster-start": result.band.gradientFrom,
          "--cluster-end": result.band.gradientTo,
          "--cluster-glow": result.band.glow,
        } as CSSProperties
      }
    >
      <div className={styles.clusterSurface}>
        <svg className={styles.clusterLines} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {result.clusterScores.map((cluster) => (
            <line
              key={cluster.key}
              x1={center.x}
              x2={cluster.x}
              y1={center.y}
              y2={cluster.y}
            />
          ))}
        </svg>

        {result.clusterScores.map((cluster) => (
          <div
            className={styles.clusterNode}
            key={cluster.key}
            style={
              {
                "--cluster-left": `${cluster.x}%`,
                "--cluster-top": `${cluster.y}%`,
                "--cluster-size": `${18 + cluster.value * 0.24}px`,
                "--cluster-accent": cluster.accent,
              } as CSSProperties
            }
          >
            <span className={styles.clusterPulse} />
            <span className={styles.clusterCore} />
            {showLabels ? (
              <span className={styles.clusterLabelWrap}>
                <span className={styles.clusterLabel}>{cluster.label}</span>
                <span className={styles.clusterValue}>{cluster.value}</span>
              </span>
            ) : null}
          </div>
        ))}

        <div className={styles.clusterCenter}>
          <span className={styles.clusterCenterValue}>{result.score}</span>
          <span className={styles.clusterCenterLabel}>reactivity</span>
        </div>
      </div>

      <div className={styles.clusterLegend}>
        <span className={styles.clusterPill}>{result.dominantCluster.label}</span>
        {!compact ? <span className={styles.clusterLegendMeta}>Dominant trigger cluster</span> : null}
      </div>
    </div>
  );
}
