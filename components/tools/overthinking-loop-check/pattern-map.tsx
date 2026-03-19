import type { CSSProperties } from "react";
import type { OverthinkingResult, TriggerClusterKey } from "@/data/overthinking-loop-check";
import styles from "./overthinking-loop-check.module.css";

type PatternMapProps = {
  result: OverthinkingResult;
  compact?: boolean;
  showLabels?: boolean;
  className?: string;
  ariaLabel?: string;
};

const triggerPositions: Record<TriggerClusterKey, { x: number; y: number }> = {
  relational: { x: 20, y: 28 },
  "future-uncertainty": { x: 78, y: 22 },
  "self-evaluation": { x: 24, y: 78 },
  "unfinished-task-load": { x: 72, y: 76 },
  "conflict-risk": { x: 82, y: 52 },
};

export function PatternMap({
  result,
  compact = false,
  showLabels = true,
  className,
  ariaLabel = "Pattern map",
}: PatternMapProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`${styles.patternMap} ${compact ? styles.patternMapCompact : styles.patternMapFull} ${className ?? ""}`}
      role="img"
      style={
        {
          "--zone-start": result.zone.gradientFrom,
          "--zone-end": result.zone.gradientTo,
          "--zone-glow": result.zone.glow,
          "--node-x": `${result.mapPlacement.x}%`,
          "--node-y": `${result.mapPlacement.y}%`,
          "--decision-width": `${Math.max(18, result.mapPlacement.x)}%`,
          "--uncertainty-height": `${Math.max(18, result.mapPlacement.y)}%`,
        } as CSSProperties
      }
    >
      <div className={styles.patternSurface}>
        <div className={`${styles.patternQuadrant} ${styles.patternQuadrantClear}`} />
        <div className={`${styles.patternQuadrant} ${styles.patternQuadrantReview}`} />
        <div className={`${styles.patternQuadrant} ${styles.patternQuadrantRumination}`} />
        <div className={`${styles.patternQuadrant} ${styles.patternQuadrantLock}`} />
        <div className={styles.patternGrid} />
        <span className={styles.patternDecisionLine} />
        <span className={styles.patternUncertaintyLine} />

        {result.triggerClusters.map((cluster) => (
          <div
            className={styles.patternTriggerNode}
            key={cluster.key}
            style={
              {
                "--trigger-left": `${triggerPositions[cluster.key].x}%`,
                "--trigger-top": `${triggerPositions[cluster.key].y}%`,
                "--trigger-size": `${14 + cluster.value * 0.18}px`,
                "--trigger-accent": cluster.accent,
              } as CSSProperties
            }
          >
            <span className={styles.patternTriggerCore} />
            {!compact && showLabels ? <span className={styles.patternTriggerLabel}>{cluster.label}</span> : null}
          </div>
        ))}

        <div className={styles.patternUserNode}>
          <span className={styles.patternUserPulse} />
          <span className={styles.patternUserCore} />
        </div>

        <div className={styles.patternScoreOrb}>
          <span className={styles.patternScoreValue}>{result.score}</span>
          <span className={styles.patternScoreLabel}>loop score</span>
        </div>
      </div>

      <div className={styles.patternLegend}>
        <span className={styles.patternZonePill}>{result.zone.label}</span>
        {showLabels ? (
          <div className={styles.patternAxisMeta}>
            <span>Loop intensity</span>
            <span>Decision drag</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
