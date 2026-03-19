import type { CSSProperties } from "react";
import type { BoundaryStrengthResult } from "@/data/boundary-strength-scanner";
import styles from "./boundary-strength-scanner.module.css";

type WeakZoneMapProps = {
  compact?: boolean;
  result: BoundaryStrengthResult;
  showLabels?: boolean;
};

const positions = [
  { left: "18%", top: "22%" },
  { left: "50%", top: "14%" },
  { left: "80%", top: "28%" },
  { left: "78%", top: "72%" },
  { left: "48%", top: "84%" },
  { left: "18%", top: "66%" },
];

export function WeakZoneMap({ compact = false, result, showLabels = true }: WeakZoneMapProps) {
  const dominantZoneValue = result.weakZoneScores[0]?.value ?? 0;

  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Weak-zone map</p>
        <h3 className={styles.visualTitle}>Where your boundary is most likely to soften before you fully notice it</h3>
        <p className={styles.visualCopy}>
          These zones show which contexts are most likely to convert relational pressure into boundary softening. The strongest zone is not always the loudest one externally.
        </p>
      </div>

      <div className={`${styles.clusterMap} ${compact ? styles.clusterMapCompact : styles.clusterMapFull}`}>
        <div className={styles.clusterSurface}>
          <svg aria-hidden="true" className={styles.clusterLines} viewBox="0 0 100 100">
            {positions.map((point, index) => {
              const x = Number.parseFloat(point.left);
              const y = Number.parseFloat(point.top);

              return <line key={`${point.left}-${point.top}`} x1={x} x2="50" y1={y} y2="50" />;
            })}
          </svg>

          {result.weakZoneScores.slice(0, 6).map((zone, index) => {
            const position = positions[index];

            return (
              <div
                className={styles.clusterNode}
                key={zone.key}
                style={
                  {
                    "--cluster-left": position.left,
                    "--cluster-top": position.top,
                    "--cluster-size": `${Math.max(30, zone.value * 0.44)}px`,
                    "--cluster-accent": zone.accent,
                  } as CSSProperties
                }
              >
                <span className={styles.clusterPulse} />
                <span className={styles.clusterCore} />
                {showLabels ? (
                  <div className={styles.clusterLabelWrap}>
                    <span className={styles.clusterLabel}>{zone.label}</span>
                    <span className={styles.clusterValue}>{zone.value}</span>
                  </div>
                ) : null}
              </div>
            );
          })}

          <div className={styles.clusterCenter}>
            <span className={styles.clusterCenterValue}>{dominantZoneValue}</span>
            <span className={styles.clusterCenterLabel}>{result.mainWeakZone.label} · highest drift</span>
          </div>
        </div>

        <div className={styles.clusterLegend}>
          <span className={styles.clusterPill}>{result.mainWeakZone.label}</span>
          <span className={styles.clusterLegendMeta}>Highest boundary strain context · {dominantZoneValue}</span>
        </div>
      </div>
    </article>
  );
}
