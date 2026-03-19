import type { CSSProperties } from "react";
import type { AttachmentResult } from "@/data/attachment-pattern-spotter";
import styles from "./attachment-pattern-spotter.module.css";

type ClosenessWithdrawalMapProps = {
  ariaLabel?: string;
  compact?: boolean;
  result: AttachmentResult;
  showAxes?: boolean;
};

export function ClosenessWithdrawalMap({
  ariaLabel = "Closeness versus withdrawal map",
  compact = false,
  result,
  showAxes = true,
}: ClosenessWithdrawalMapProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`${styles.profileMap} ${compact ? styles.profileMapCompact : styles.profileMapFull}`}
      role="img"
      style={
        {
          "--profile-start": result.profile.gradientFrom,
          "--profile-end": result.profile.gradientTo,
          "--profile-glow": result.profile.glow,
          "--node-x": `${Math.max(10, result.mapPlacement.x)}%`,
          "--node-y": `${Math.max(10, result.mapPlacement.y)}%`,
        } as CSSProperties
      }
    >
      <div className={styles.profileMapSurface}>
        <div className={styles.profileQuadrant} />
        <div className={styles.profileMapGrid} />
        <span className={styles.profileMapVertical} />
        <span className={styles.profileMapHorizontal} />

        <div className={styles.profileMapNode}>
          <span className={styles.profileMapPulse} />
          <span className={styles.profileMapCore} />
        </div>

        {!compact ? (
          <>
            <span className={`${styles.profileZonePill} ${styles.profileZoneTopLeft}`}>Guarded distance</span>
            <span className={`${styles.profileZonePill} ${styles.profileZoneTopRight}`}>Push-pull tension</span>
            <span className={`${styles.profileZonePill} ${styles.profileZoneBottomLeft}`}>Reserved holding</span>
            <span className={`${styles.profileZonePill} ${styles.profileZoneBottomRight}`}>Comforted closeness</span>
          </>
        ) : null}
      </div>

      <div className={styles.profileMapLegend}>
        <span className={styles.profileNamePill}>{result.profile.title}</span>
        {showAxes ? (
          <div className={styles.profileAxisMeta}>
            <span>Closeness comfort</span>
            <span>Withdrawal tendency</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
