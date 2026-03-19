import type { CSSProperties } from "react";
import type { ReassuranceResult } from "@/data/reassurance-seeking-decoder";
import styles from "./reassurance-seeking-decoder.module.css";

type ReassuranceCycleLoopProps = {
  compact?: boolean;
  result: ReassuranceResult;
};

const loopPositions = [
  { left: "14%", top: "50%" },
  { left: "34%", top: "16%" },
  { left: "80%", top: "24%" },
  { left: "78%", top: "78%" },
  { left: "24%", top: "84%" },
];

export function ReassuranceCycleLoop({
  compact = false,
  result,
}: ReassuranceCycleLoopProps) {
  return (
    <article className={`${styles.visualCard} ${compact ? styles.visualCardCompact : ""}`}>
      <div className={styles.visualHeader}>
        <p className={styles.visualEyebrow}>Reassurance cycle loop</p>
        <h3 className={styles.visualTitle}>The cycle path from uncertainty to brief relief to the return of doubt</h3>
        <p className={styles.visualCopy}>
          This signature visual shows where tension gathers, where reassurance lands, and where the loop is reopening itself before the issue truly settles.
        </p>
      </div>

      <div className={styles.clusterMap}>
        <div className={styles.clusterSurface}>
          <svg className={styles.clusterLines} viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="14" x2="34" y1="50" y2="16" />
            <line x1="34" x2="80" y1="16" y2="24" />
            <line x1="80" x2="78" y1="24" y2="78" />
            <line x1="78" x2="24" y1="78" y2="84" />
            <line x1="24" x2="14" y1="84" y2="50" />
          </svg>

          {result.loopNodes.map((node, index) => (
            <div
              className={styles.clusterNode}
              key={node.label}
              style={
                {
                  "--cluster-left": loopPositions[index]?.left ?? "50%",
                  "--cluster-top": loopPositions[index]?.top ?? "50%",
                  "--cluster-size": `${Math.max(34, Math.min(74, 24 + node.value * 0.4))}px`,
                  "--cluster-accent": node.accent,
                } as CSSProperties
              }
            >
              <span className={styles.clusterPulse} />
              <span className={styles.clusterCore} />
              <span className={styles.clusterLabelWrap}>
                <span className={styles.clusterLabel}>{node.label}</span>
                <span className={styles.clusterValue}>{node.value}</span>
              </span>
            </div>
          ))}

          <div className={styles.clusterCenter}>
            <span className={styles.clusterCenterValue}>{result.score}</span>
            <span className={styles.clusterCenterLabel}>Reassurance loop score</span>
          </div>
        </div>

        <div className={styles.clusterLegend}>
          <span className={styles.clusterPill}>{result.primaryReassuranceContext.label}</span>
          <span className={styles.clusterPill}>{result.dominantLoopDriver.label}</span>
          <span className={styles.clusterPill}>{result.mostUsefulResetDirection.label}</span>
        </div>

        <div className={styles.meterStatGrid}>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Loop reinforcement</span>
            <strong className={styles.meterStatValue}>{result.loopReinforcement}</strong>
            <p className={styles.signalBarDescription}>
              This reflects how strongly reassurance is being rewarded enough to keep the uncertainty cycle active.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Relief hold</span>
            <strong className={styles.meterStatValue}>{result.reliefDurationLevel}</strong>
            <p className={styles.signalBarDescription}>
              Higher means the calming effect has more staying power before doubt tries to reopen the pattern.
            </p>
          </div>
          <div className={styles.meterStatCard}>
            <span className={styles.meterStatLabel}>Fastest reset direction</span>
            <strong className={styles.meterStatValue}>{result.mostUsefulResetDirection.label}</strong>
            <p className={styles.signalBarDescription}>{result.mostUsefulResetDirection.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
